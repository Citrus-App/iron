import React from 'react'
import styles from "./Grid.module.css";

type Props = {
  // props here
}

const Grid = ({ 
  // props 
}: Props) => {
  return (
    <div className={styles.root}>
      hello world! I am Grid
    </div>
  )
};

export default Grid;
