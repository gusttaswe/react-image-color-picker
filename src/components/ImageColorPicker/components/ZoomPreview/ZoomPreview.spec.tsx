import React from 'react'
import { render } from '@testing-library/react'
import { ZoomPreview } from './ZoomPreview'

describe('ZoomPreview Component', () => {
  it('Should be able to render correctly', () => {
    const initialColor = '#FFFFFF'
    const coordinates = { x: 0, y: 0 }
    const dimensions = { width: 100, height: 100 }

    const { getByTestId } = render(
      <ZoomPreview
        color={initialColor}
        coordinates={coordinates}
        dimensions={dimensions}
        image=''
      />
    )

    const zoomPreviewContainer = getByTestId('zoom-preview-container')
    expect(zoomPreviewContainer).toBeInTheDocument()
    expect(zoomPreviewContainer.hidden).toBe(false)
  })

  it('Should set the border-color equal to the color parameter', () => {
    const initialColor = 'rgb(255, 255, 255)'
    const coordinates = { x: 0, y: 0 }
    const dimensions = { width: 100, height: 100 }

    const { getByTestId } = render(
      <ZoomPreview
        color={initialColor}
        coordinates={coordinates}
        dimensions={dimensions}
        image=''
      />
    )

    const zoomPreviewContainer = getByTestId('zoom-preview-container')
    const zoomPreviewWindow = zoomPreviewContainer.querySelector('div')
    expect(zoomPreviewWindow!.style.borderColor).toEqual(initialColor)
  })
})
