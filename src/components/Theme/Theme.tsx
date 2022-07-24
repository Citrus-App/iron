import React from 'react'
// import styles from './Theme.module.css'
import { default as Tokens } from './tokens'

interface Props {
  children?: React.ReactNode
  themeMode?: string
}

const setTheme = (mode: string) => {
  const themeStyles: any = {}
  Object.keys(Tokens).map(function (key, _index) {
    if (key.startsWith(mode)) {
      themeStyles[`--${key.split(`${mode}-`)[1]}`] = Tokens[key]
    } else if (key.startsWith('global')) {
      themeStyles[`--${key.split('global-')[1]}`] = Tokens[key]
    }
  })
  return themeStyles
}

const Theme = ({ children, themeMode = 'light' }: Props) => {
  const themeStyles: any = setTheme(themeMode)
  return (
    <div className="ThemeProvider" style={{ ...themeStyles }}>
      {children}
    </div>
  )
}

Theme.extracter = setTheme
export default Theme
