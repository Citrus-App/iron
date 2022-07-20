const responsiveOpts = ['sm', 'md', 'lg', 'xl', 'default'] as const
type ResponsiveNames = typeof responsiveOpts[number]
type responsiveUnitValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'auto'];

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
            stylesToReturn[`${varValue}`] = `var(--spacing-${(prop as ResponsiveTypes)[opt]})`
          } else {
            stylesToReturn[`${varValue}-${opt}`] = `var(--spacing-${(prop as ResponsiveTypes)[opt]})`
          }
        }
      })
  } else {
    if(prop) {
      stylesToReturn[`${varValue}`] = `var(--spacing-${(prop)})`
    }
  }
  return stylesToReturn
}

export {
  responsiveOpts,
  ResponsiveNames,
  responsiveUnitValues,
  ResponsiveTypes,
  getResponsiveValues
}