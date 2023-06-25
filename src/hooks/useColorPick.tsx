import { useEffect, useRef, useState } from 'react'
import { Canvas, loadImageHandler } from '../util'

export function useColorPick(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  imgSrc: string
) {
  const canvasInstanceRef = useRef<Canvas | null>(null)

  const [color, setColor] = useState<string>('tranparent')
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

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
  }

  useEffect(() => {
    if (canvasInstanceRef.current === null) {
      canvasInstanceRef.current = new Canvas(canvasRef.current!)
      canvasInstanceRef.current.listenMovements(onMove)
    }

    const canvas = canvasInstanceRef.current

    async function initializeCanvas() {
      const image = await loadImageHandler(imgSrc)
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
  }, [imgSrc])

  return {
    color,
    coordinates,
    dimensions: canvasInstanceRef.current?.getDimensions() ?? {
      width: 0,
      height: 0
    }
  }
}
