import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import VerticalNav from '../VerticalNav'

describe('VerticalNav', () => {
  beforeEach(() => {
    render(<VerticalNav />)
  })

  it('renders the blog title', () => {
    const links = screen.getAllByRole('link')
    const titleElement = links.find(link => link.getAttribute('href') === '/')
    
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveAttribute('href', '/')
    expect(titleElement).toHaveTextContent('blog')
  })

  it('renders navigation links', () => {
    const links = screen.getAllByRole('link')
    const aboutLink = screen.getByRole('link', { name: 'about' })
    
    expect(links).toHaveLength(4)
    expect(aboutLink).toBeInTheDocument()
  })

  it('has correct links', () => {
    const links = screen.getAllByRole('link')
    const cvNavLink = links.find(link => link.getAttribute('href') === '/cv')
    const aboutLink = screen.getByRole('link', { name: 'about' })
    
    expect(cvNavLink).toHaveAttribute('href', '/cv')
    expect(aboutLink).toHaveAttribute('href', '/about')
  })
}) 