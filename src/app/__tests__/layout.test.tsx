import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout'
import '@testing-library/jest-dom'

// Mock VerticalNav to avoid full render
jest.mock('@/components/layout/VerticalNav', () => () => <nav data-testid="vertical-nav">Nav</nav>)

describe('RootLayout', () => {
  it('renders children inside main content area', () => {
    render(
      <RootLayout>
        <p>Test Content</p>
      </RootLayout>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders VerticalNav inside aside', () => {
    render(
      <RootLayout>
        <div />
      </RootLayout>
    )
    expect(screen.getByTestId('vertical-nav')).toBeInTheDocument()
  })
})
