import React from 'react'
import classnames from 'classnames';
import styles from "./Text.module.css";

type Props = {
  as?: 'p' | 'span' | 'strong',
  variant?: 'small'
  children?: React.ReactNode
}

const Text = ({ 
  as,
  variant,
  children
}: Props) => {
  const Tag = as ? as : 'p'

  const classList = classnames(
    styles[`variant-${variant}`]
  )
  return (
    <Tag className={classList}>
      {children}
    </Tag>
  )
};

export default Text;
