import { getResponsiveValues } from "../responsive/responsive"
import MarginsTypes from "./margins"
import styles from './margins.module.css'

function getMargins({ props }: { props: MarginsTypes }) {
  return [
    props.m ? styles[`m`] : null,
    props.mb ? styles[`mb`] : null,
    props.ml ? styles[`ml`] : null,
    props.mr ? styles[`mr`] : null,
    props.mt ? styles[`mt`] : null
  ]
}screenLeft

function getMarginsStyles({m, mb, ml, mr, mt}: MarginsTypes) {
  const margins =  {
    ...getResponsiveValues(m, '--margin'),
    ...getResponsiveValues(ml, '--margin-left'),
    ...getResponsiveValues(mr, '--margin-right'),
    ...getResponsiveValues(mb, '--margin-bottom'),
    ...getResponsiveValues(mt, '--margin-top'),
  }
  return margins
}

export {
  getMargins,
  getMarginsStyles
}