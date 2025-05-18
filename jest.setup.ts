import '@testing-library/jest-dom'
import type { NextRouter } from 'next/router'
import type { ImageProps } from 'next/image'
import React from 'react'

// Mock next/router
jest.mock('next/router', () => ({
  useRouter(): Partial<NextRouter> {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
    }
  },
}))

// Mock next/image
jest.mock('next/image', () => {
  return function MockedImage(props: any) {
    const { priority, objectFit, fill, layout, ...rest } = props
    return React.createElement('img', { ...rest })
  }
})
