// eslint-disable-next-line no-unused-vars
import type { Meta, StoryObj } from '@storybook/react'
import { ImageColorPicker } from '../components/ImageColorPicker'

const meta: Meta<typeof ImageColorPicker> = {
  title: 'Example/ImageColorPicker',
  component: ImageColorPicker,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {}
}

export default meta
type Story = StoryObj<typeof ImageColorPicker>

export const Teste: Story = {}
