import React from 'react'
import classnames from 'classnames'

import styles from './tokens.module.css'
export interface ThemeProps {
  children?: React.ReactNode
  themeMode?: 'light' | 'dark'
}

export const Theme = ({ children, themeMode = 'light' }: ThemeProps) => {
  const classList = classnames('ThemeProvider', styles[themeMode])
  return <div className={classList}>{children}</div>
}
