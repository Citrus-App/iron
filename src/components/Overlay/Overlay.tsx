import React from 'react'
import styles from "./Button.module.css";

type Props = {
  // props here
}

const Overlay = ({ 
  // props 
}: Props) => {
  return (
    <div className={styles.root}>
      hello world! I am Overlay
    </div>
  )
};

export default Overlay;
