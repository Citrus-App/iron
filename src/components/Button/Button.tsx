import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css";

type Props = {
  children?: React.ReactNode,
  action?: any,
  disabled?: boolean,
  variant?: string
}

const Button = ({
  children,
  action,
  variant,
  disabled
}: Props) => {
  const classList = classnames(
    styles.baseButton,
    styles[`variant-${variant}`]
  )
  return (
    <button className={classList} onClick={action} disabled={disabled}>
      <div className={styles.inner}>{children}</div>
    </button>
  )
};


Button.documentation = `The Button component accepts children for strings, action for (), href for link, and variant for our types defined in Figma`

export default Button;
