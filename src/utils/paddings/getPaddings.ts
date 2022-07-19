import { getResponsiveValues } from "../responsive/responsive"
import PaddingsTypes from "./paddings"
import styles from './paddings.module.css'

function getPaddings({ props }: { props: PaddingsTypes }) {
  return [
    props.p ? styles['p'] : null,
    props.pb ? styles['pb'] : null,
    props.pl ? styles['pl'] : null,
    props.pr ? styles['pr'] : null,
    props.pt ? styles['pt'] : null
  ]
}

function getPaddingsStyles({p, pb, pl, pr, pt}: PaddingsTypes) {
  const paddings =  {
    ...getResponsiveValues(p, '--padding'),
    ...getResponsiveValues(pl, '--padding-left'),
    ...getResponsiveValues(pr, '--padding-right'),
    ...getResponsiveValues(pb, '--padding-bottom'),
    ...getResponsiveValues(pt, '--padding-top'),
  }
  return paddings
}

export {
  getPaddings,
  getPaddingsStyles
}

export default getPaddings