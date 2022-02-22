import React from 'react'
import classnames from 'classnames'
import styles from "./SidePanel.module.css";

type Props = {
  children?: React.ReactNode,
  alignment?: string,
  state?: boolean,
  alignType?: string
}

const SidePanel = ({ 
  children,
  alignment,
  state,
  alignType = ''
}: Props) => {
  return (
    <div
    className={classnames(
      styles[alignType],
      styles.root,
      styles[`alignment-${alignment}`],
      state ? styles.activePanel : '',
    )}
    >
      <div className={styles.innerPanel}>
        {children}
      </div>
    </div>
  )
};

export default SidePanel;