import { render, screen } from '@testing-library/react'
import Layout from '@/app/layout'
import '@testing-library/jest-dom'

// Mock VerticalNav to avoid full render
jest.mock('@/components/layout/VerticalNav', () => () => <nav data-testid="vertical-nav">Nav</nav>)

describe.skip('RootLayout', () => {
  // it('renders children inside main content area', () => {
  //   render(
  //     <RootLayout>
  //       <p>Test Content</p>
  //     </RootLayout>
  //   )
  //   expect(screen.getByText('Test Content')).toBeInTheDocument()
  // })

  it('renders VerticalNav inside aside', () => {
    render(
      <Layout>
        <div />
      </Layout>
    )
    expect(screen.getByTestId('vertical-nav')).toBeInTheDocument()
  })

  // it('applies correct font classes to html element', () => {
  //   customRender(
  //     <RootLayout>
  //       <div />
  //     </RootLayout>
  //   )
  //   const htmlElement = document.documentElement
  //   expect(htmlElement).toHaveClass('--font-courier-prime')
  //   expect(htmlElement).toHaveClass('--font-inter')
  //   expect(htmlElement).toHaveClass('--font-roboto')
  //   expect(htmlElement).toHaveClass('--font-montserrat')
  // })

  it('applies correct layout classes to body', () => {
    render(
      <Layout>
        <div />
      </Layout>
    )
    const bodyElement = document.body
    expect(bodyElement).toHaveClass('grid')
    expect(bodyElement).toHaveClass('h-screen')
    expect(bodyElement).toHaveClass('grid-cols-[1fr_auto]')
    expect(bodyElement).toHaveClass('grid-rows-[2fr_1fr]')
    expect(bodyElement).toHaveClass('gap-2')
  })

  it('applies correct classes to main content area', () => {
    render(
      <Layout>
        <div />
      </Layout>
    )
    const mainElement = screen.getByRole('main')
    expect(mainElement).toHaveClass('col-span-1')
    expect(mainElement).toHaveClass('font-montserrat')
  })

  it('applies correct classes to aside element', () => {
    render(
      <Layout>
        <div />
      </Layout>
    )
    const asideElement = screen.getByRole('complementary')
    expect(asideElement).toHaveClass('sticky')
    expect(asideElement).toHaveClass('top-0')
    expect(asideElement).toHaveClass('self-start')
    expect(asideElement).toHaveClass('h-screen')
    expect(asideElement).toHaveClass('flex')
    expect(asideElement).toHaveClass('items-center')
    expect(asideElement).toHaveClass('justify-center')
    expect(asideElement).toHaveClass('col-start-2')
  })
})