import '@testing-library/jest-dom'
import { jest } from '@jest/globals'
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
  return (props: ImageProps) => {
    const { priority, objectFit, layout, ...rest } = props
    return <img {...rest} />
  }
})
