import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'
import '@testing-library/jest-dom'

// Mock next/image for Jest (Next.js uses its own image loader)
jest.mock('next/image', () => (props: any) => {
  // Strip Next.js-specific props before passing to <img>
  const { priority, objectFit, priority, ...rest } = props
  return <img {...rest} />
})

describe('Hero component', () => {
  it('renders heading text', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { name: /welcome to my blog/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders hero image with alt text', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: /hero image/i })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', expect.stringContaining('firebasestorage'))
  })
})
