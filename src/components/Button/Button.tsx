import React from 'react'
import classnames from 'classnames'
import getPaddings, {
  getPaddingsStyles,
} from '../../utils/paddings/getPaddings'
import { getMargins, getMarginsStyles } from '../../utils/margins/getMargins'
import { getCoords, getCoordsStyle } from '../../utils/coords/getCoords'
import { ButtonProps } from './types'

import styles from './Button.module.css'

const Button = ({
  children,
  action,
  variant,
  disabled,
  type,
  icon,
  iconPosition = 'left',
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
  bottom,
}: ButtonProps) => {
  // handle buttons still using `outline` variant
  if (variant === 'outline') {
    variant = 'primary'
  }
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
    bottom,
  }

  const classList = classnames(
    ...getCoords({
      props: {
        top,
        left,
        right,
        bottom,
      },
    }),
    ...getMargins({
      m,
      mb,
      ml,
      mr,
      mt,
    }),
    ...getPaddings({
      p,
      pb,
      pl,
      pr,
      pt,
    }),
    styles.baseButton,
    styles[`variant-${variant}`]
  )

  type = type ?? 'button'

  const Icon = icon ?? undefined

  return (
    <div>
      <button
        style={
          {
            ...getCoordsStyle({ top, left, right, bottom }),
            ...getMarginsStyles({ m, mb, ml, mr, mt }),
            ...getPaddingsStyles({ p, pb, pl, pr, pt }),
          } as React.CSSProperties
        }
        className={classList}
        onClick={action}
        disabled={disabled}
        type={type}
      >
        <div className={styles.inner}>
          {icon && iconPosition === 'left' && (
            <div className={styles.icon}>{Icon}</div>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <div className={styles.icon}>{Icon}</div>
          )}
        </div>
      </button>
    </div>
  )
}

Button.documentation =
  'The Button component accepts children for strings, action for (), href for link, and variant for our types defined in Figma'

export default Button
