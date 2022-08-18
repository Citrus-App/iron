import '../src/stories/docs.css'

import React from 'react'

import { addDecorator } from '@storybook/react'

import Theme from '../src/components/Theme/Theme'

addDecorator((story) => <Theme>{story()}</Theme>)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
