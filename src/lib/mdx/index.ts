import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/blogs')

export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  published: boolean
  published_date: Date
  readTime: string
  imageUrl: string
  tags?: string[]
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  published: boolean
  published_date: Date
  readTime: string
  imageUrl: string
  tags?: string[]
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!fs.existsSync(CONTENT_DIR)) {
    return []
  }
  
  const files = fs.readdirSync(CONTENT_DIR)
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace('.mdx', ''))
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    content,
    published: data.published !== false,
    published_date: data.published_date ? new Date(data.published_date) : new Date(),
    readTime: data.readTime || calculateReadTime(content),
    imageUrl: data.imageUrl || '',
    tags: data.tags || [],
  }
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const slugs = await getAllBlogSlugs()
  
  const blogs = await Promise.all(
    slugs.map(slug => getBlogBySlug(slug))
  )
  
  return blogs
    .filter((blog): blog is BlogPost => blog !== null && blog.published)
    .sort((a, b) => b.published_date.getTime() - a.published_date.getTime())
}

export async function getAllBlogsMeta(): Promise<BlogPostMeta[]> {
  const blogs = await getAllBlogs()
  
  return blogs.map(({ ...meta }) => meta)
}
