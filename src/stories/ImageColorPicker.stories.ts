// eslint-disable-next-line no-unused-vars
import type { Meta, StoryObj } from '@storybook/react'
import { ImageColorPickerStory } from './ImageColorPicker'

const meta: Meta<typeof ImageColorPickerStory> = {
  title: 'Example/ImageColorPickerStory',
  component: ImageColorPickerStory,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {}
}

export default meta
type Story = StoryObj<typeof ImageColorPickerStory>

export const Teste: Story = {}
