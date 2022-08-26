import React from 'react'

import darkTokens from './dark-tokens.module.css'
import lightTokens from './light-tokens.module.css'

export interface ThemeProps {
  children?: React.ReactNode
  themeMode?: 'light' | 'dark'
}

const setTheme = (mode: ThemeProps['themeMode']) => {
  if (mode === 'dark') {
    return darkTokens
  }
  return lightTokens
}

const Theme = ({ children, themeMode = 'light' }: ThemeProps) => {
  return (
    <div className="ThemeProvider" style={setTheme(themeMode)}>
      {children}
    </div>
  )
}

Theme.extracter = setTheme
export default Theme
