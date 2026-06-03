import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'
import '@testing-library/jest-dom'


describe('Hero component', () => {
  it('renders heading text', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { name: /All that matters is that you are making something you love, to the best of your ability, here and now./i })
    expect(heading).toBeInTheDocument()
  })

  it('renders hero image with alt text', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: /hero image/i })
    expect(image).toBeInTheDocument()
  })
})
