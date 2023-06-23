import { useEffect, useRef, useState } from 'react'
import { Canvas, loadImageHandler } from '@/src/util'

export function useCanvas(
  ref: React.RefObject<HTMLCanvasElement>,
  image: string,
  onTouchEnd: any
) {
  const [hasMoved, setHasMoved] = useState(false)
  const canvas = useRef<Canvas | null>(null)
  const colorRef = useRef<string>('tranparent')
  const coordinatesRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!ref.current) return
    const canvasInstance = new Canvas(ref)
    async function initializeCanvas() {
      const loadedImage = await loadImageHandler(image)
      canvasInstance.setDimensions(loadedImage.width, loadedImage.height)
      canvasInstance.drawImage(loadedImage)

      const centerPoint = canvasInstance.getCanvasCenterPoint()
      const initialColor = canvasInstance.getPixelColor(centerPoint)

      colorRef.current = initialColor
      coordinatesRef.current = centerPoint
    }

    initializeCanvas()
    canvas.current = canvasInstance
  }, [ref, image])

  useEffect(() => {
    if (!ref.current) return
    const canvasRef = ref.current

    canvasRef.addEventListener('touchmove', onMove, { passive: true })
    canvasRef.addEventListener('touchend', () => onTouchEnd(colorRef.current))

    return () => {
      canvasRef.removeEventListener('touchmove', onMove)
      canvasRef.removeEventListener('touchend', () =>
        onTouchEnd(colorRef.current)
      )
    }
  }, [ref])

  const onMove = (
    event: TouchEvent | React.PointerEvent<HTMLCanvasElement>
  ) => {
    event.preventDefault()
    if (!canvas.current) return

    const eventCoods = 'touches' in event ? event.touches[0] : event

    const coordinates = { x: eventCoods.clientX, y: eventCoods.clientY }
    const canvasCoordinates = canvas.current.getCanvasCoordinates(coordinates)
    const color = canvas.current.getPixelColor(canvasCoordinates)
    colorRef.current = color
    coordinatesRef.current = canvasCoordinates
    setHasMoved(true)
  }

  return {
    color: colorRef.current,
    coordinates: coordinatesRef.current,
    dimensions: canvas.current?.getDimensions() ?? { width: 0, height: 0 },
    hasMoved,
    onMove,
    canvas
  }
}
