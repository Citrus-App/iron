import React from 'react'
import classnames from 'classnames'
import styles from './GridWrapper.module.css'

interface Props {
  children?: React.ReactNode
  full?: boolean
}

const GridWrapper = ({ children, full }: Props) => {
  return (
    <div className={classnames(styles.root, full ? styles.full : '')}>
      {children}
    </div>
  )
}

export default GridWrapper
