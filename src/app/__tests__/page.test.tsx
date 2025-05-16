import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock next/image for Jest (Next.js uses its own image loader)
jest.mock('next/image', () => (props: any) => {
  // Strip Next.js-specific props before passing to <img>
  const { priority, objectFit, priority, ...rest } = props
  return <img {...rest} />
})
describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders hero text', () => {
    expect(screen.getByText("Welcome to My Blog")).toBeInTheDocument()
  })

  it('renders the blog container with posts', () => {
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.length).toBeGreaterThan(0)
  })
}) 