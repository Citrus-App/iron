import React from 'react'
import styles from "./Button.module.css";

type Props = {
  // props here
}

const Card = ({ 
  // props 
}: Props) => {
  return (
    <div className={styles.root}>
      hello world! I am Card
    </div>
  )
};

export default Card;
