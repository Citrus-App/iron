import React from 'react'
import styles from "./TopBar.module.css";

type Props = {
  children?: React.ReactNode
}

const TopBar = ({ 
  children
}: Props) => {
  return (
    <div className={styles.root}>{children}</div>
  )
};

export default TopBar;
