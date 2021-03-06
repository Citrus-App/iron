import React from 'react'
import styles from "./SideBar.module.css";

type Props = {
  children?: React.ReactNode
}

const SideBar = ({ 
  children
}: Props) => {
  return (
    <div className={styles.root}>{children}</div>
  )
};

export default SideBar;
