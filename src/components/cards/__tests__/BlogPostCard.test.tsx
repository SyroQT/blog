import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BlogPostCard } from '../BlogPostCard'
import { BlogPost } from '@/lib/mdx'

describe('BlogPostCard', () => {
  const post: BlogPost = {
    slug: 'test-post',
    title: 'Test Title',
    description: 'Test Description',
    content: 'Content',
    published: true,
    published_date: new Date('2024-01-01'),
    readTime: '1 min',
    imageUrl: 'https://example.com/image.jpg',
  }

  it('displays title, description and link', () => {
    render(<BlogPostCard post={post} isLeft={false} />)
    expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.description)).toBeInTheDocument()
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', `/blog/${post.slug}`)
  })
})
