import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Article } from '../Article'
import { BlogPost } from '@/lib/firebase/blogs'
import { Timestamp } from 'firebase/firestore'

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children: string }) => {
    const text = typeof children === 'string' && children.startsWith('## ')
      ? children.replace('## ', '')
      : children
    return <h2>{text}</h2>
  },
}))

const basePost: BlogPost = {
  id: '1',
  title: 'My Post',
  description: 'desc',
  content: '## Hello world',
  main_image: '',
  published: true,
  published_date: Timestamp.fromDate(new Date('2024-01-01')),
  readTime: '1 min',
}

describe('Article', () => {
  it('uses fallback image when imageUrl is missing', () => {
    render(<Article post={basePost} />)
    const img = screen.getByRole('img', { name: basePost.title }) as HTMLImageElement
    expect(img.src).toContain('newcastle-bridge.jpg')
  })

  it('renders markdown content', () => {
    render(<Article post={basePost} />)
    expect(screen.getByRole('heading', { name: 'Hello world' })).toBeInTheDocument()
  })
})
