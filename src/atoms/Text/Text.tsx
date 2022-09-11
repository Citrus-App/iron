import React from 'react'
import classnames from 'classnames'
import styles from './Text.module.css'

export interface TextProps {
  as?: 'p' | 'span' | 'strong'
  variant?: 'small'
  children?: React.ReactNode
}

const Text = ({ as, variant, children }: TextProps) => {
  const Tag = as ? as : 'p'

  const classList = classnames(styles[`variant-${variant}`])
  return <Tag className={classList}>{children}</Tag>
}

Text.documentation = 'A simple text component'

export default Text
