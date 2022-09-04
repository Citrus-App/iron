
import React from 'react'
import { themes } from '@storybook/theming'

import { useDarkMode } from 'storybook-dark-mode'
import { addDecorator } from '@storybook/react'

import { Theme } from '../src/components/Theme/Theme'

function ThemeWrapper(props) {
  return (
    <Theme themeMode={useDarkMode() ? 'dark' : 'light'}>
      {props.children}
    </Theme>
  )
}

export const decorators = [renderStory => <ThemeWrapper>{renderStory()}</ThemeWrapper>]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal }
  }
}