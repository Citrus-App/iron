import * as allIcons from './svgs/Icons'

export type iconName = keyof typeof allIcons
export type iconDefs = {
  [key in iconName]?: string
}

export const icons = (svg: iconName) => {
  return allIcons[svg]
}
