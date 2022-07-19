import PostionsTypes from "./positions"
import styles from './positions.module.css'

function getPositions({ props }: { props: PostionsTypes }) {
  return [
    styles[`p-${props.position}`],
  ]
}

export default getPositions