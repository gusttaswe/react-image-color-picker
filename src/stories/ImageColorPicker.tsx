import React from 'react'

import { ImageColorPicker } from '../components/ImageColorPicker'
import img from '../../static/12345.png'

type ImageColorPickerStoryProps = {
  imageBlob: string
  onColorPick(color: string): void
}

export const ImageColorPickerStory = ({
  imageBlob = img,
  onColorPick = (color: string) => console.log('Selected Color: ', color)
}: ImageColorPickerStoryProps) => (
  <div style={{ width: '90vw' }}>
    <ImageColorPicker imageBlob={imageBlob} onColorPick={onColorPick} />
  </div>
)
