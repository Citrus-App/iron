import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css";

type Props = {
  children?: React.ReactNode,
  action?: any,
  disabled?: boolean,
  variant?: string,
  type?: "button" | "submit" | "reset" | undefined
}

const Button = ({
  children,
  action,
  variant,
  disabled,
  type
}: Props) => {
  const classList = classnames(
    styles.baseButton,
    styles[`variant-${variant}`]
  )

  type = type ?? 'button'

  return (
    <button className={classList} onClick={action} disabled={disabled} type={type}>
      <div className={styles.inner}>{children}</div>
    </button>
  )
};


Button.documentation = `The Button component accepts children for strings, action for (), href for link, and variant for our types defined in Figma`

export default Button;
