import React from 'react'
import classnames from 'classnames'
import { getMargins, getMarginsStyles } from '../../utils/margins/getMargins';
import { getCoords, getCoordsStyle } from '../../utils/coords/getCoords';
import MarginsTypes from '../../utils/margins/margins';
import styles from "./SidePanel.module.css";
import CoordsTypes from '../../utils/coords/coords';
import getPaddings, { getPaddingsStyles } from '../../utils/paddings/getPaddings';
import PaddingsTypes from '../../utils/paddings/paddings';

interface SidePanelInterface 
  extends MarginsTypes,
  CoordsTypes,
  PaddingsTypes {
    children?: React.ReactNode,
    alignment?: string,
    state?: boolean,
    alignType?: string,
}

const SidePanel = ({ 
  children,
  alignment,
  state,
  alignType = '',
  m,
  mb,
  ml,
  mr,
  mt,
  p,
  pb,
  pl,
  pr,
  pt,
  top,
  left,
  right,
  bottom
}: SidePanelInterface) => {
  const props = {
    children,
    alignment,
    state,
    alignType,
    m,
    mb,
    ml,
    mr,
    mt,
    p,
    pb,
    pl,
    pr,
    pt,
    top,
    left,
    right,
    bottom
  }

  return (
    <div
      style={{
        ...getCoordsStyle({top, left, right, bottom}),
        ...getMarginsStyles({m, mb, ml, mr, mt}),
        ...getPaddingsStyles({p, pb, pl, pr, pt})
      } as React.CSSProperties}
      className={classnames(
        ...getCoords({
          props: {
            top,
            left,
            right,
            bottom
          }
        }),
        ...getMargins({
          props: {
            m,
            mb,
            ml,
            mr,
            mt
          }}),
        ...getPaddings({
          props: {
            p,
            pb,
            pl,
            pr,
            pt
          }
        }),
        styles[alignType],
        styles[`alignment-${alignment}`],
        state ? styles.activePanel : '',
        styles.root
      )}
    >
      <div className={styles.innerPanel}>
        {children}
      </div>
    </div>
  )
};

export default SidePanel;