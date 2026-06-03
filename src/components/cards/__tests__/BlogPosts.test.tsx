import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BlogPosts } from '../BlogPosts'
import { getAllBlogs } from '@/lib/mdx'
import { BlogPost } from '@/lib/mdx'

jest.mock('@/lib/mdx', () => ({
  getAllBlogs: jest.fn(),
}))

describe('BlogPosts', () => {
  const posts: BlogPost[] = [
    {
      slug: 'first-post',
      title: 'First Post',
      description: 'First description',
      content: 'content',
      published: true,
      published_date: new Date('2024-01-01'),
      readTime: '2 min',
      imageUrl: 'https://example.com/1.jpg',
    },
    {
      slug: 'second-post',
      title: 'Second Post',
      description: 'Second description',
      content: 'content',
      published: true,
      published_date: new Date('2024-01-02'),
      readTime: '3 min',
      imageUrl: 'https://example.com/2.jpg',
    },
  ]

  it('renders a list of BlogPostCards', async () => {
    ;(getAllBlogs as jest.Mock).mockResolvedValue(posts)
    const element = await BlogPosts()
    render(element)

    expect(getAllBlogs).toHaveBeenCalled()
    // There should be as many links as posts since each card is wrapped in a link
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(posts.length)
    expect(screen.getByText(posts[0].title)).toBeInTheDocument()
    expect(screen.getByText(posts[1].description)).toBeInTheDocument()
  })
})
