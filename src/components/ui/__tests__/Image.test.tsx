import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Image from '../Image'

describe('Image component', () => {
  it('renders correctly when fill is true', () => {
    render(<Image src="/pic.jpg" alt="pic" fill />)
    const img = screen.getByRole('img', { name: 'pic' })
    expect(img).toHaveAttribute('src', '/pic.jpg')
    expect(img).not.toHaveAttribute('width')
    expect(img).not.toHaveAttribute('height')
  })

  it('warns when width and height are missing with fill=false', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {})
    render(<Image src="/pic.jpg" alt="pic" />)
    expect(warn).toHaveBeenCalledWith(
      'Image component requires width and height props when fill is false'
    )
    warn.mockRestore()
  })
})
