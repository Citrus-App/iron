import DisplaysTypes from './displays'
import styles from './displays.module.css'

function getDisplays({ display }: DisplaysTypes) {
  return [styles[`display-${display}`]]
}

export default getDisplays
