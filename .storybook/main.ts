import type { StorybookConfig } from '@storybook/react-webpack5'
const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../static'],
  webpackFinal: async (config) => {
    config.resolve!.alias = {
      ...config.resolve!.alias,
      '@': path.resolve(__dirname, "../"),
    }
    return config;
  }
}
export default config
