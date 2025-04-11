import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders the welcome message', () => {
    const welcomeMessage = screen.getByText('Welcome to My Blog')
    expect(welcomeMessage).toBeInTheDocument()
  })

  it('renders the description text', () => {
    const description = screen.getByText(/A place where I share my thoughts and experiences/i)
    expect(description).toBeInTheDocument()
  })

  it('renders the navigation component', () => {
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })
}) 