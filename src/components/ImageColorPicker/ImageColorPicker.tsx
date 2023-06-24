/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from 'react'
import { ColorPreview, ZoomPreview } from './components'
import {
  ImageColorPickCanvas,
  ImageColorPickContainer
} from './ImageColorPicker.styles'
import { Canvas, loadImageHandler } from '@/src/util'

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
  const canvasInstanceRef = useRef<Canvas | null>(null)

  const [color, setColor] = useState<string>('tranparent')
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
  const [hasMoved, setHasMoved] = useState(false)

  const onMove = (
    event: TouchEvent | React.PointerEvent<HTMLCanvasElement>
  ) => {
    event.preventDefault()

    const eventCoods = 'touches' in event ? event.touches[0] : event
    const coordinates = { x: eventCoods.clientX, y: eventCoods.clientY }

    const canvas = canvasInstanceRef.current as Canvas
    const canvasCoordinates = canvas.getCanvasCoordinates(coordinates)
    const color = canvas.getPixelColor(canvasCoordinates)
    setColor(color)
    setCoordinates(canvasCoordinates)
    setHasMoved(true)
  }

  useEffect(() => {
    if (canvasInstanceRef.current === null) {
      canvasInstanceRef.current = new Canvas(canvasRef.current!)
      canvasInstanceRef.current.listenMovements(onMove)
    }

    const canvas = canvasInstanceRef.current

    async function initializeCanvas() {
      const image = await loadImageHandler(imageBlob)
      canvas.setDimensions(image.width, image.height)
      canvas.drawImage(image)

      const centerPoint = canvas.getCanvasCenterPoint()
      const initialColor = canvas.getPixelColor(centerPoint)

      setColor(initialColor)
      setCoordinates(centerPoint)
    }

    initializeCanvas()

    return () => {
      canvas.cleanUp(onMove)
    }
  }, [imageBlob])

  return (
    <ImageColorPickContainer data-testid='image-color-pick-container'>
      <ColorPreview color={color} />
      <ZoomPreview
        zoom={zoom}
        color={color}
        coordinates={coordinates}
        hasMoved={hasMoved}
        dimensions={
          canvasInstanceRef.current?.getDimensions() ?? { width: 0, height: 0 }
        }
        image={canvasRef.current?.toDataURL()!}
      />
      <ImageColorPickCanvas
        data-testid='image-color-pick-canvas'
        id='image-color-pick-canvas'
        ref={canvasRef}
        onClick={() => onColorPick(color)}
        onTouchEnd={() => onColorPick(color)}
      />
    </ImageColorPickContainer>
  )
}

export default ImageColorPicker
