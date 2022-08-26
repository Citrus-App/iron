import React from 'react'

import classnames from 'classnames'

import styles from './Icon.module.css'
import { icons } from './defs'
import { IconProps } from './types'

export const Icon = ({
  variant,
  toolTip,
  invert = false,
  ...props
}: IconProps) => {
  const color = invert && styles.invert
  const classList = classnames(styles.root, color)
  return (
    <div className={classList} {...props}>
      {icons(variant)}
      {toolTip && <div className={styles.toolTip}>{toolTip}</div>}
    </div>
  )
}

export { icons }
