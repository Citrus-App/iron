import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css";

type Props = {
  children?: React.ReactNode,
  action?: any,
  href?: string,
  variant?: string
}

const Button = ({ 
  children,
  action,
  href,
  variant 
}: Props) => {
  const classList = classnames(
    styles.baseButton,
    styles[`variant-${variant}`]
  )
  return (
    <a className={classList} href={href} onClick={action}>
      <div className={styles.inner}>{children}</div>
    </a>
  )
};


Button.documentation = `The Button component accepts children for strings, action for (), href for link, and variant for our types defined in Figma`

export default Button;
