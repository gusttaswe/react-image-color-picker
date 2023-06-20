import React from 'react'

export type Coordinates = {
  x: number
  y: number
}

export class Canvas {
  private readonly canvas!: HTMLCanvasElement
  private readonly context!: CanvasRenderingContext2D

  constructor(canvas: React.RefObject<HTMLCanvasElement>) {
    this.canvas = canvas.current as HTMLCanvasElement
    this.context = this.get2DContext({
      willReadFrequently: true
    }) as CanvasRenderingContext2D
  }

  public async setCanvasImage(image: any): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image()
      img.crossOrigin = 'Anonymous'
      img.onload = () => {
        this.canvas.width = img.width
        this.canvas.height = img.height
        this.context.drawImage(img, 0, 0)
        resolve()
      }
      img.src = image
    })
  }

  public getDimensions() {
    return {
      width: this.canvas.width,
      height: this.canvas.height
    }
  }

  public getCanvasCenterPoint() {
    return {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2
    }
  }

  public get2DContext({ willReadFrequently }: { willReadFrequently: boolean }) {
    return this.canvas.getContext('2d', {
      willReadFrequently: willReadFrequently
    })
  }

  public getCanvasCoordinates(coordinates: Coordinates) {
    const rect = this.canvas.getBoundingClientRect()

    const scaleX = this.canvas.width / rect.width
    const scaleY = this.canvas.height / rect.height
    const x = (coordinates.x - rect.left) * scaleX
    const y = (coordinates.y - rect.top) * scaleY

    return { x, y }
  }

  public getPixelColor(coordinates: Coordinates) {
    const pixelData = this.context.getImageData(
      coordinates.x,
      coordinates.y,
      1,
      1
    ).data
    if (pixelData.length < 4) return 'rgb(0,0,0)' // Return black color if unable to retrieve pixel data

    const [red, green, blue] = pixelData
    return `rgb(${red}, ${green}, ${blue})`
  }
}
