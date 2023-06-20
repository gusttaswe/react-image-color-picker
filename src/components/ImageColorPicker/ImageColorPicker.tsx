/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react'
import { useCanvas } from '@/src/hooks'
import { ColorPreview, ZoomPreview } from './components'
import {
  ImageColorPickCanvas,
  ImageColorPickContainer
} from './ImageColorPicker.styles'

type ImageColorPickerProps = {
  onColorPick(color: string): void
  imageBlob: string
  zoom?: number
}

const ImageColorPicker = ({
  onColorPick,
  imageBlob,
  zoom
}: ImageColorPickerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { color, coordinates, hasMoved, dimensions, onMove } = useCanvas(
    canvasRef,
    imageBlob
  )

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    canvas.addEventListener('touchmove', onMove, { passive: true })
    canvas.addEventListener('touchend', onMove)

    return () => {
      canvas.removeEventListener('touchmove', onMove)
      canvas.removeEventListener('touchend', () => onColorPick(color))
    }
  }, [canvasRef.current])

  return (
    <ImageColorPickContainer>
      <ColorPreview color={color} />
      <ZoomPreview
        zoom={zoom}
        color={color}
        coordinates={coordinates}
        hasMoved={hasMoved}
        dimensions={dimensions}
        image={canvasRef.current?.toDataURL()!}
      />
      <ImageColorPickCanvas
        data-testid='image-color-pick-canvas'
        id='image-color-pick-canvas'
        ref={canvasRef}
        onPointerMove={onMove}
        onClick={() => onColorPick(color)}
      />
    </ImageColorPickContainer>
  )
}

export default ImageColorPicker
