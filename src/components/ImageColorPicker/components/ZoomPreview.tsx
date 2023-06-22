// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Coordinates } from '@/src/util'
import { ZoomPreviewContainer, ZoomPreviewWindow } from './ZoomPreview.styles'

type ColorPreviewProps = {
  hasMoved: boolean
  coordinates: Coordinates
  color: string
  dimensions: { width: number; height: number }
  image: string
  zoom?: number
}

export const ZoomPreview = ({
  color,
  coordinates,
  hasMoved,
  dimensions,
  image,
  zoom = 0.5
}: ColorPreviewProps) => {
  const { x, y } = coordinates
  const zoomFactor = zoom
  const errorMargin = 50

  const zoomWidth = dimensions.width * zoomFactor
  const zoomHeight = dimensions.height * zoomFactor
  const imgPosX = x * zoomFactor - errorMargin
  const imgPosY = y * zoomFactor - errorMargin

  return (
    <React.Fragment>
      <ZoomPreviewContainer
        hidden={!hasMoved}
        data-testid='zoom-preview-container'
      >
        <ZoomPreviewWindow
          style={{
            backgroundSize: `${zoomWidth}px ${zoomHeight}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `-${imgPosX}px -${imgPosY}px`,
            borderColor: color
          }}
        />
      </ZoomPreviewContainer>
    </React.Fragment>
  )
}
