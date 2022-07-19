import CoordsTypes from "./coords"
import styles from './coords.module.css'

function getCoords({ props }: { props: CoordsTypes }) {
  return [
    props.top ? styles[`coords-top`] : null,
    props.left ? styles[`coords-left`] : null,
    props.right ? styles[`coords-right`] : null,
    props.bottom ? styles[`coords-bottom`] : null,
  ]
}

function getCoordsStyle({top, left, right, bottom}: CoordsTypes) {
  return {
    '--coordTop': top,
    '--coordLeft': left,
    '--coordRight': right,
    '--coordBottom': bottom,
  }
}

export {
  getCoords,
  getCoordsStyle
}