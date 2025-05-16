import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../page'

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