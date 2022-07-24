import DisplaysTypes from './displays'
import styles from './displays.module.css'

function getDisplays({ props }: { props: DisplaysTypes }) {
  return [styles[`display-${props.display}`]]
}

export default getDisplays
