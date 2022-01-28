import React from 'react'
import styles from "./Button.module.css";

type Props = {
  // props here
}

const Header = ({ 
  // props 
}: Props) => {
  return (
    <div className={styles.root}>
      hello world! I am Header
    </div>
  )
};

export default Header;
