import fs from 'fs'
import { getAllBlogSlugs, getBlogBySlug, getAllBlogs, getAllBlogsMeta } from '../index'

// Mock the fs module
jest.mock('fs')

const mockFs = fs as jest.Mocked<typeof fs>

describe('MDX Library', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getAllBlogSlugs', () => {
    it('returns empty array when content directory does not exist', async () => {
      mockFs.existsSync.mockReturnValue(false)
      
      const slugs = await getAllBlogSlugs()
      
      expect(slugs).toEqual([])
    })

    it('returns slugs from mdx files', async () => {
      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockReturnValue(['post-1.mdx', 'post-2.mdx', 'readme.txt'] as unknown as fs.Dirent[])
      
      const slugs = await getAllBlogSlugs()
      
      expect(slugs).toEqual(['post-1', 'post-2'])
    })
  })

  describe('getBlogBySlug', () => {
    it('returns null when file does not exist', async () => {
      mockFs.existsSync.mockReturnValue(false)
      
      const post = await getBlogBySlug('nonexistent')
      
      expect(post).toBeNull()
    })

    it('parses frontmatter and content correctly', async () => {
      const mdxContent = `---
title: "Test Post"
description: "A test description"
published: true
published_date: "2024-01-15"
imageUrl: "https://example.com/image.jpg"
tags: ["test", "example"]
---

# Hello World

This is the content.`

      mockFs.existsSync.mockReturnValue(true)
      mockFs.readFileSync.mockReturnValue(mdxContent)
      
      const post = await getBlogBySlug('test-post')
      
      expect(post).not.toBeNull()
      expect(post?.title).toBe('Test Post')
      expect(post?.description).toBe('A test description')
      expect(post?.published).toBe(true)
      expect(post?.imageUrl).toBe('https://example.com/image.jpg')
      expect(post?.tags).toEqual(['test', 'example'])
      expect(post?.content).toContain('# Hello World')
    })

    it('uses defaults for missing frontmatter fields', async () => {
      const mdxContent = `---
title: "Minimal Post"
---

Content here.`

      mockFs.existsSync.mockReturnValue(true)
      mockFs.readFileSync.mockReturnValue(mdxContent)
      
      const post = await getBlogBySlug('minimal')
      
      expect(post?.title).toBe('Minimal Post')
      expect(post?.description).toBe('')
      expect(post?.published).toBe(true)
      expect(post?.tags).toEqual([])
    })
  })

  describe('getAllBlogs', () => {
    it('returns published blogs sorted by date descending', async () => {
      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockReturnValue(['old.mdx', 'new.mdx'] as unknown as fs.Dirent[])
      
      mockFs.readFileSync.mockImplementation((filePath) => {
        const file = String(filePath)
        if (file.includes('old.mdx')) {
          return `---
title: "Old Post"
published: true
published_date: "2024-01-01"
---
Content`
        }
        return `---
title: "New Post"
published: true
published_date: "2024-02-01"
---
Content`
      })
      
      const blogs = await getAllBlogs()
      
      expect(blogs).toHaveLength(2)
      expect(blogs[0].title).toBe('New Post')
      expect(blogs[1].title).toBe('Old Post')
    })

    it('filters out unpublished blogs', async () => {
      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockReturnValue(['published.mdx', 'draft.mdx'] as unknown as fs.Dirent[])
      
      mockFs.readFileSync.mockImplementation((filePath) => {
        const file = String(filePath)
        if (file.includes('draft.mdx')) {
          return `---
title: "Draft"
published: false
---
Content`
        }
        return `---
title: "Published"
published: true
---
Content`
      })
      
      const blogs = await getAllBlogs()
      
      expect(blogs).toHaveLength(1)
      expect(blogs[0].title).toBe('Published')
    })
  })

  describe('getAllBlogsMeta', () => {
    it('returns metadata without content', async () => {
      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockReturnValue(['post.mdx'] as unknown as fs.Dirent[])
      mockFs.readFileSync.mockReturnValue(`---
title: "Test"
published: true
---
This is the content that should not be in meta`)
      
      const metas = await getAllBlogsMeta()
      
      expect(metas).toHaveLength(1)
      expect(metas[0].title).toBe('Test')
      expect((metas[0] as Record<string, unknown>).content).toBeUndefined()
    })
  })
})
