import { getResponsiveValues } from '../responsive/responsive'
import MarginsTypes from './margins'
import styles from './margins.module.css'

function getMargins({ m, mb, ml, mr, mt }: MarginsTypes) {
  return [
    m ? styles['m'] : null,
    mb ? styles['mb'] : null,
    ml ? styles['ml'] : null,
    mr ? styles['mr'] : null,
    mt ? styles['mt'] : null,
  ]
}

function getMarginsStyles({ m, mb, ml, mr, mt }: MarginsTypes) {
  const margins = {
    ...getResponsiveValues(m, '--margin'),
    ...getResponsiveValues(ml, '--margin-left'),
    ...getResponsiveValues(mr, '--margin-right'),
    ...getResponsiveValues(mb, '--margin-bottom'),
    ...getResponsiveValues(mt, '--margin-top'),
  }
  return margins
}

export { getMargins, getMarginsStyles }
