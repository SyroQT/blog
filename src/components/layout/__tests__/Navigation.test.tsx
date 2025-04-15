import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Navigation } from '../Navigation'

describe('Navigation', () => {
  beforeEach(() => {
    render(<Navigation />)
  })

  it('renders the blog title', () => {
    const links = screen.getAllByRole('link')
    const titleElement = links.find(link => link.getAttribute('href') === '/')
    
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveAttribute('href', '/')
    expect(titleElement).toHaveTextContent('Blog')
  })

  it('renders navigation links', () => {
    const links = screen.getAllByRole('link')
    const blogLinks = links.filter(link => link.textContent === 'Blog')
    const aboutLink = screen.getByRole('link', { name: 'About' })
    
    expect(blogLinks).toHaveLength(2)
    expect(aboutLink).toBeInTheDocument()
  })

  it('has correct links', () => {
    const links = screen.getAllByRole('link')
    const blogNavLink = links.find(link => link.getAttribute('href') === '/blog')
    const aboutLink = screen.getByRole('link', { name: 'About' })
    
    expect(blogNavLink).toHaveAttribute('href', '/blog')
    expect(aboutLink).toHaveAttribute('href', '/about')
  })
}) 