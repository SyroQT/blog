import { GET } from '../route'
import { fetchBlogs, BlogPost } from '@/lib/firebase/blogs'
import { Timestamp } from 'firebase/firestore'

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

jest.mock('@/lib/firebase/blogs', () => ({
  fetchBlogs: jest.fn(),
}))

describe('sitemap GET', () => {
  it('returns xml containing blog urls', async () => {
    const posts: BlogPost[] = [
      {
        id: '1',
        title: 't1',
        description: '',
        content: '',
        main_image: '',
        published: true,
        published_date: Timestamp.fromDate(new Date('2024-01-01')),
        readTime: '1',
      },
      {
        id: '2',
        title: 't2',
        description: '',
        content: '',
        main_image: '',
        published: true,
        published_date: Timestamp.fromDate(new Date('2024-01-02')),
        readTime: '1',
      },
    ]
    ;(fetchBlogs as jest.Mock).mockResolvedValue(posts)

    const res = await GET()
    const xml = await res.text()

    for (const p of posts) {
      expect(xml).toContain(`https://blog.titas.dev/blog/${p.id}`)
    }
  })
})
