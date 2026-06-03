import { GET } from '../route'
import { getAllBlogs } from '@/lib/mdx'
import { BlogPost } from '@/lib/mdx'

// Minimal Response polyfill for the test environment
class MockResponse {
  body: string
  headers: Record<string, string> | undefined
  constructor(body: string, init?: { headers?: Record<string, string> }) {
    this.body = body
    this.headers = init?.headers
  }
  text() {
    return Promise.resolve(this.body)
  }
}

// @ts-expect-error - provide Response polyfill for the test environment
global.Response = MockResponse

jest.mock('@/lib/mdx', () => ({
  getAllBlogs: jest.fn(),
}))

describe('sitemap GET', () => {
  it('returns xml containing blog urls', async () => {
    const posts: BlogPost[] = [
      {
        slug: 'first-post',
        title: 't1',
        description: '',
        content: '',
        published: true,
        published_date: new Date('2024-01-01'),
        readTime: '1',
        imageUrl: '',
      },
      {
        slug: 'second-post',
        title: 't2',
        description: '',
        content: '',
        published: true,
        published_date: new Date('2024-01-02'),
        readTime: '1',
        imageUrl: '',
      },
    ]
    ;(getAllBlogs as jest.Mock).mockResolvedValue(posts)

    const res = await GET()
    const xml = await res.text()

    for (const p of posts) {
      expect(xml).toContain(`https://blog.titas.dev/blog/${p.slug}`)
    }
  })
})
