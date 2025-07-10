import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Article } from '../Article'
import { BlogPost } from '@/lib/firebase/blogs'

jest.mock('react-markdown', () => {
  const React = require('react')
  return ({ children }: { children: React.ReactNode }) => <div>{children}</div>
})

const post: BlogPost = {
  id: '1',
  title: 'My Post',
  description: 'desc',
  content: 'content',
  main_image: 'image.jpg',
  published: true,
  published_date: new Date('2024-01-01'),
  readTime: '1 min',
  imageUrl: 'https://example.com/image.jpg'
}

test('renders back button linking to home page', () => {
  render(<Article post={post} />)
  const link = screen.getByRole('link', { name: /back/i })
  expect(link).toHaveAttribute('href', '/')
})
