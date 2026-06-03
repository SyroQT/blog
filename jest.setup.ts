import '@testing-library/jest-dom'
import type { ImageProps } from 'next/image'
import React from 'react'

// Mock next/navigation (App Router)
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  usePathname() {
    return '/'
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  useParams() {
    return {}
  },
}))

// Mock next/image
jest.mock('next/image', () => {
  return function MockedImage(props: ImageProps) {
    const { priority, fill, ...rest } = props
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement('img', { ...rest })
  }
})
