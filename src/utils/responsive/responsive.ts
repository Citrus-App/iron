const responsiveOpts = ['sm', 'md', 'lg', 'xl', 'default'] as const
type ResponsiveNames = typeof responsiveOpts[number]
type responsiveUnitValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'auto']

interface ResponsiveTypes {
  sm: string | number
  md: string | number
  lg: string | number
  xl: string | number
  default: string | number
}

const getResponsiveValues = (
  prop: ResponsiveTypes | string | number | ResponsiveNames,
  varValue: string | ResponsiveNames
) => {
  const stylesToReturn: any = {}
  if (typeof prop === 'object') {
    responsiveOpts.map((opt: ResponsiveNames) => {
      if ((prop as ResponsiveTypes)[opt]) {
        if (opt == 'default') {
          stylesToReturn[`${varValue}`] = `var(--spacing-${
            (prop as ResponsiveTypes)[opt]
          })`
        } else {
          stylesToReturn[`${varValue}-${opt}`] = `var(--spacing-${
            (prop as ResponsiveTypes)[opt]
          })`
        }
      }
    })
  } else {
    if (prop) {
      stylesToReturn[`${varValue}`] = `var(--spacing-${prop})`
    }
  }
  return stylesToReturn
}

export {
  responsiveOpts,
  ResponsiveNames,
  responsiveUnitValues,
  ResponsiveTypes,
  getResponsiveValues,
}
