import React from 'react'
import { render } from '@testing-library/react'
import { ColorPreview } from './ColorPreview'

describe('ColorPreview Component', () => {
  it('Should be able to render correctly with a color', () => {
    const initialColor = '#FFFFFF'
    const { getByTestId } = render(<ColorPreview color={initialColor} />)

    const colorPreviewComponent = getByTestId('color-preview')
    expect(colorPreviewComponent).toBeInTheDocument()
  })

  it('Should change the background-color based on color parameter', () => {
    const initialColor = 'rgb(0, 0, 0)'
    const { getByTestId, rerender } = render(
      <ColorPreview color={initialColor} />
    )

    const colorPreviewComponent = getByTestId('color-preview')
    expect(colorPreviewComponent.style.backgroundColor).toEqual(initialColor)

    const newColor = 'rgb(206, 206, 206)'
    rerender(<ColorPreview color={newColor} />)
    expect(colorPreviewComponent.style.backgroundColor).toEqual(newColor)
  })
})
