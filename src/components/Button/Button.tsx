import React from "react";
import classnames from "classnames";
import CoordsTypes from '../../utils/coords/coords';
import getPaddings, { getPaddingsStyles } from '../../utils/paddings/getPaddings';
import PaddingsTypes from '../../utils/paddings/paddings';
import { getMargins, getMarginsStyles } from '../../utils/margins/getMargins';
import { getCoords, getCoordsStyle } from '../../utils/coords/getCoords';
import MarginsTypes from '../../utils/margins/margins';

import styles from "./Button.module.css";

interface ButtonProps extends
MarginsTypes,
PaddingsTypes,
CoordsTypes {
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
  type,
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
}: ButtonProps) => {
  const props = {
    children,
    action,
    variant,
    disabled,
    type,
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
  
  const classList = classnames(
    ...getCoords({
      props: {
        top,
        left,
        right,
        bottom
      }
    }),
    ...getMargins({
      m,
      mb,
      ml,
      mr,
      mt
    }),
    ...getPaddings({
      p,
      pb,
      pl,
      pr,
      pt
    }),
    styles.baseButton,
    styles[`variant-${variant}`]
  )

  type = type ?? 'button'

  return (
    <button
      style={{
        ...getCoordsStyle({top, left, right, bottom}),
        ...getMarginsStyles({m, mb, ml, mr, mt}),
        ...getPaddingsStyles({p, pb, pl, pr, pt})
      } as React.CSSProperties}
      className={classList}
      onClick={action}
      disabled={disabled}
      type={type}
    >
      <div className={styles.inner}>{children}</div>
    </button>
  )
};


Button.documentation = `The Button component accepts children for strings, action for (), href for link, and variant for our types defined in Figma`

export default Button;
