import { getResponsiveValues } from '../responsive/responsive'
import PaddingsTypes from './paddings'
import styles from './paddings.module.css'

function getPaddings({ p, pb, pl, pr, pt }: PaddingsTypes) {
  return [
    p ? styles['p'] : null,
    pb ? styles['pb'] : null,
    pl ? styles['pl'] : null,
    pr ? styles['pr'] : null,
    pt ? styles['pt'] : null,
  ]
}

function getPaddingsStyles({ p, pb, pl, pr, pt }: PaddingsTypes) {
  const paddings = {
    ...getResponsiveValues(p, '--padding'),
    ...getResponsiveValues(pl, '--padding-left'),
    ...getResponsiveValues(pr, '--padding-right'),
    ...getResponsiveValues(pb, '--padding-bottom'),
    ...getResponsiveValues(pt, '--padding-top'),
  }
  return paddings
}

export { getPaddings, getPaddingsStyles }

export default getPaddings
