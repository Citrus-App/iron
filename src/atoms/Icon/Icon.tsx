import React from 'react'
import styles from "./Button.module.css";

type Props = {
  // props here
}

const Icon = ({ 
  // props 
}: Props) => {
  return (
    <div className={styles.root}>
      hello world! I am Icon
    </div>
  )
};

export default Icon;
