import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../page'

jest.mock('@/components/cards/BlogPosts', () => ({
  BlogPosts: () => <div>Mock BlogPosts</div>
}))

jest.mock('@/components/hero/Hero', () => ({
  Hero: () => <div>Mock Hero</div>
}))

test('renders Home component with Hero and BlogPosts', () => {
  render(<Home />)
  expect(screen.getByText('Mock Hero')).toBeInTheDocument()
  expect(screen.getByText('Mock BlogPosts')).toBeInTheDocument()
})