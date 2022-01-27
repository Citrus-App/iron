import React from "react";
import styles from "./Theme.module.css";

type Props = {
  children?: React.ReactNode;
}

const Theme = ({ 
  children
}: Props) => {
  return (
    <div style={{...styles}}>{children}</div>
  )
};

export default Theme;
