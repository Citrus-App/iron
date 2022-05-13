import React from "react";
import classnames from "classnames";
import styles from "./ButtonGroup.module.css";

type Props = {
  children?: React.ReactNode
}

const ButtonGroup = ({
  children
}: Props) => {
  const classList = classnames(
    styles.baseButtonGroup
  )
  return (
    <div className={classList}>
      {children}
    </div>
  )
};


ButtonGroup.documentation = `The Button Group component accepts button children`

export default ButtonGroup;
