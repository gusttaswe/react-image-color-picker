export type ImageColorPickerProps = {
  /**
   * Callback triggered when a color is selected.
   * @param color Color selected
   */
  onColorPick: (color: string) => void
  /**
   * Image that will be rendered inside the component
   */
  imgSrc: string
  /**
   * Zoom level for the image preview
   * @default 0.5
   */
  zoom?: number
}
