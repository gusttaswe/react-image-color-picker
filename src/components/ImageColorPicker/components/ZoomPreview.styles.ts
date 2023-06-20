import styled from 'styled-components'

export const ZoomPreviewContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 100;
`

export const ZoomPreviewWindow = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 1px 1px 1px #000;
  border: 3px solid red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
