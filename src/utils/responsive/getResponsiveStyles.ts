import ResponsiveTypes from "./responsive"

function getResponsiveStyle({responsive}: ResponsiveTypes) {
  return {
    '--coordTop': responsive.sm,
    '--coordLeft': responsive.md,
    '--coordRight': responsive.lg,
    '--coordBottom': responsive.xl,
  }
}

export default getResponsiveStyle