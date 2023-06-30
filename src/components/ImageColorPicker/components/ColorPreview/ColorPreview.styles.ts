import styled from 'styled-components'

export const ColorPreviewContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 3px solid white;
  z-index: 100;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`
