import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ImageColorPicker from './ImageColorPicker'
import { Canvas } from '@/src/util'

describe('ImageColorPicker Component', () => {
  let onColorPickMock: jest.Mock<any, any>

  beforeEach(() => {
    onColorPickMock = jest.fn()
    jest
      .spyOn(Canvas.prototype, 'getCanvasCoordinates')
      .mockImplementation(() => ({ x: 100, y: 100 }))
  })

  it('Should render ImageColorPicker correctly', () => {
    const onColorPickMock = jest.fn()
    const { getByTestId } = render(
      <ImageColorPicker onColorPick={onColorPickMock} imageBlob='' />
    )

    const imageColorPickContainer = getByTestId('image-color-pick-container')
    expect(imageColorPickContainer).toBeInTheDocument()
  })

  it('Should trigger onColorPick on touchend event', () => {
    const { getByTestId } = render(
      <ImageColorPicker onColorPick={onColorPickMock} imageBlob='example.png' />
    )

    const canvas = getByTestId('image-color-pick-canvas')

    fireEvent.touchMove(canvas, {
      touches: [{ clientX: 100, clientY: 100 }]
    })

    const expectedColor = 'rgb(0, 0, 0)'
    const colorPreview = getByTestId('color-preview')
    expect(colorPreview.style.backgroundColor).toMatch(expectedColor)

    fireEvent.touchEnd(canvas)
    expect(onColorPickMock).toHaveBeenCalledTimes(1)
    expect(onColorPickMock).toHaveBeenCalledWith(expectedColor)
  })

  it('Should trigger onColorPick on click event', () => {
    const { getByTestId } = render(
      <ImageColorPicker onColorPick={onColorPickMock} imageBlob='example.png' />
    )

    const canvas = getByTestId('image-color-pick-canvas')

    fireEvent.pointerMove(canvas, {
      clientX: 100,
      clientY: 100
    })

    const expectedColor = 'rgb(0, 0, 0)'
    const colorPreview = getByTestId('color-preview')
    expect(colorPreview.style.backgroundColor).toMatch(expectedColor)

    fireEvent.click(canvas)
    expect(onColorPickMock).toHaveBeenCalledTimes(1)
    expect(onColorPickMock).toHaveBeenCalledWith(expectedColor)
  })

  it('Should change the ZoomPreview background-position based on move event', () => {
    const zoomFactor = 1
    const errorMargin = 50
    const coordinates = { clientX: 100, clientY: 100 }

    const { getByTestId } = render(
      <ImageColorPicker
        onColorPick={onColorPickMock}
        imageBlob='example.png'
        zoom={zoomFactor}
      />
    )

    const canvas = getByTestId('image-color-pick-canvas')
    fireEvent.touchMove(canvas, {
      touches: [coordinates]
    })

    const zoomPreview = getByTestId('zoom-preview')

    const imgPosX = coordinates.clientX * zoomFactor - errorMargin
    const imgPosY = coordinates.clientY * zoomFactor - errorMargin

    const backgroundPosition = `-${imgPosX}px -${imgPosY}px`
    expect(zoomPreview.style.backgroundPosition).toEqual(backgroundPosition)
  })
})
