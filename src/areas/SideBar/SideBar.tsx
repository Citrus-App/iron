import React from 'react'
import styles from "./Button.module.css";

type Props = {
  // props here
}

const SideBar = ({ 
  // props 
}: Props) => {
  return (
    <div className={styles.root}>
      hello world! I am SideBar
    </div>
  )
};

export default SideBar;
