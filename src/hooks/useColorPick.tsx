import { useEffect, useState } from 'react'
import { Canvas } from '@/src/util'

export function useCanvas(
  ref: React.RefObject<HTMLCanvasElement>,
  image: string
) {
  const [canvas, setCanvas] = useState<Canvas | null>(null)
  const [color, setColor] = useState<string>('tranparent')
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [hasMoved, setHasMoved] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const canvasInstance = new Canvas(ref)
    async function initializeCanvas() {
      await canvasInstance.setCanvasImage(image)
      const centerPoint = canvasInstance.getCanvasCenterPoint()
      const initialColor = canvasInstance.getPixelColor(centerPoint)
      setColor(initialColor)
      setCoordinates(centerPoint)

      const canvasDimension = canvasInstance.getDimensions()
      setDimensions(canvasDimension)
    }
    initializeCanvas()
    setCanvas(canvasInstance)
  }, [ref.current, image])

  const onMove = (
    event: TouchEvent | React.PointerEvent<HTMLCanvasElement>
  ) => {
    event.preventDefault()
    const eventCoods =
      'touches' in event
        ? event.touches[0]
        : { clientX: event.clientX, clientY: event.clientY }

    const coordinates = { x: eventCoods.clientX, y: eventCoods.clientY }
    const canvasCoordinates = canvas!.getCanvasCoordinates(coordinates)
    const color = canvas!.getPixelColor(canvasCoordinates)
    setColor(color)
    setCoordinates(canvasCoordinates)
    setHasMoved(true)
  }

  return {
    color,
    hasMoved,
    coordinates,
    dimensions,
    onMove
  }
}
