import React from 'react'
import styles from "./Button.module.css";

type Props = {
  // props here
}

const Content = ({ 
  // props 
}: Props) => {
  return (
    <div className={styles.root}>
      hello world! I am Content
    </div>
  )
};

export default Content;
