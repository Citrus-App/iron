import React from 'react'
import styles from "./GridWrapper.module.css";

type Props = {
  children?: React.ReactNode
}

const GridWrapper = ({ 
  children
}: Props) => {
  return (
    <div className={styles.root}>{children}</div>
  )
};

export default GridWrapper;
