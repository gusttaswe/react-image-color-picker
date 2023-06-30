import styled from 'styled-components'

export const ImageColorPickCanvas = styled.canvas`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  touch-action: none;
  object-fit: cover;
`

export const ImageColorPickContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`
