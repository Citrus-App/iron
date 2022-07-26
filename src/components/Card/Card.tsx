import React from 'react'
import styles from './Card.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  // props here
}

// eslint-disable-next-line no-empty-pattern
const Card = ({}: // props
Props) => {
  return <div className={styles.root}>hello world! I am Card</div>
}

export default Card
