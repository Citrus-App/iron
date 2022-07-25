import React from 'react'
import styles from './Gallery.module.css'

interface Props {
  children?: React.ReactNode
}

const Gallery = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>
}

export default Gallery
