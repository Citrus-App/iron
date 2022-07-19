export const responsiveOpts = ['sm', 'md', 'lg', 'xl', 'default'] as const
export type ResponsiveNames = typeof responsiveOpts[number]

type ResponsiveTypes = {
  sm: String|Number,
  md: String|Number,
  lg: String|Number,
  xl: String|Number,
  default: String|Number
}

const getResponsiveValues = (
  prop: ResponsiveTypes|String|Number|ResponsiveNames,
  varValue: String|ResponsiveNames
) => {
  const stylesToReturn: any = {}
  if(typeof prop === 'object') {
      responsiveOpts.map((opt: ResponsiveNames) => {
        if((prop as ResponsiveTypes)[opt]) {
          if(opt == 'default') {
            stylesToReturn[`${varValue}`] = (prop as ResponsiveTypes)[opt]
          } else {
            stylesToReturn[`${varValue}-${opt}`] = (prop as ResponsiveTypes)[opt]
          }
        }
      })
  } else {
    if(prop) {
      stylesToReturn[`${varValue}`] = prop
    }
  }
  return stylesToReturn
}

export {
  ResponsiveTypes,
  getResponsiveValues
}