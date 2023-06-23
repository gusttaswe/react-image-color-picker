export type Coordinates = {
  x: number
  y: number
}

export class Canvas {
  private readonly canvas!: HTMLCanvasElement
  private readonly context!: CanvasRenderingContext2D

  constructor(canvas: React.RefObject<HTMLCanvasElement>) {
    this.canvas = canvas.current as HTMLCanvasElement
    this.context = this.canvas.getContext('2d', {
      willReadFrequently: true
    }) as CanvasRenderingContext2D
  }

  public drawImage(img: any) {
    this.context.drawImage(img, 0, 0)
  }

  public setDimensions(width: number, height: number) {
    this.canvas.width = width
    this.canvas.height = height
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
