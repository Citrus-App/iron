import React from 'react'
import styles from './Overlay.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  // props here
}

// eslint-disable-next-line no-empty-pattern
const Overlay = ({}: // props
Props) => {
  return <div className={styles.root}>hello world! I am Overlay</div>
}

export default Overlay
