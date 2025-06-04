import { MetadataRoute } from 'next'
import { fetchBlogs } from '@/lib/firebase/blogs'

export async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.blog.titas.dev'

  const blogs = await fetchBlogs()
  const posts = blogs.filter(b => b.published)

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...posts.map(post => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: new Date(post.published_date),
    })),
  ]

  return routes
}

