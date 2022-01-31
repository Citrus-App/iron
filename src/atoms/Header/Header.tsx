import React from 'react'
import styles from "./Header.module.css";

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children?: React.ReactNode
}

const Header = ({ 
  as,
  children
}: Props) => {
  const Tag = as ? as : 'h1'
  return (
    <Tag className={styles.root}>
      {children}
    </Tag>
  )
};

Object.assign(Header, styles)

Header.documentation = `The Header component does not accept variants and instead utilizes base html tags. This component requires the "as" prop to specifiy the tag type.`

export default Header;
 