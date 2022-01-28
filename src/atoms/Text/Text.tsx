import React from 'react'
import styles from "./Button.module.css";

type Props = {
  // props here
}

const Text = ({ 
  // props 
}: Props) => {
  return (
    <div className={styles.root}>
      hello world! I am Text
    </div>
  )
};

export default Text;
