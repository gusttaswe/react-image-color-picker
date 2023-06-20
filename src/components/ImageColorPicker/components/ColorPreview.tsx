import React from 'react'
import { ColorPreviewContainer } from './ColorPreview.styles'

type ColorPreviewProps = {
  color: string
}

export const ColorPreview = ({ color }: ColorPreviewProps) => (
  <ColorPreviewContainer
    data-testid='color-preview'
    style={{
      backgroundColor: color
    }}
  />
)
