import React from 'react'
import './colorPreview.css'

type ColorPreviewProps = {
  color: string
}

export const ColorPreview = ({ color }: ColorPreviewProps) => (
  <div
    id='color-preview'
    style={{
      backgroundColor: color
    }}
  />
)
