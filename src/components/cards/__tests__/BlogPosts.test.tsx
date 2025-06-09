import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BlogPosts } from '../BlogPosts'
import { fetchBlogs } from '@/lib/firebase/blogs'
import { BlogPost } from '@/lib/firebase/blogs'
import { Timestamp } from 'firebase/firestore'

jest.mock('@/lib/firebase/blogs', () => ({
  fetchBlogs: jest.fn(),
}))

describe('BlogPosts', () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'First Post',
      description: 'First description',
      content: 'content',
      main_image: 'img1.jpg',
      published: true,
      published_date: Timestamp.fromDate(new Date('2024-01-01')),
      readTime: '2 min',
      imageUrl: 'https://example.com/1.jpg',
    },
    {
      id: '2',
      title: 'Second Post',
      description: 'Second description',
      content: 'content',
      main_image: 'img2.jpg',
      published: true,
      published_date: Timestamp.fromDate(new Date('2024-01-02')),
      readTime: '3 min',
      imageUrl: 'https://example.com/2.jpg',
    },
  ]

  it('renders a list of BlogPostCards', async () => {
    ;(fetchBlogs as jest.Mock).mockResolvedValue(posts)
    const element = await BlogPosts()
    render(element)

    expect(fetchBlogs).toHaveBeenCalled()
    // There should be as many links as posts since each card is wrapped in a link
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(posts.length)
    expect(screen.getByText(posts[0].title)).toBeInTheDocument()
    expect(screen.getByText(posts[1].description)).toBeInTheDocument()
  })
})
