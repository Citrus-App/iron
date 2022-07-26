declare const responsiveOpts: readonly ["sm", "md", "lg", "xl", "default"];
declare type ResponsiveNames = typeof responsiveOpts[number];
declare type responsiveUnitValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'auto'];
interface ResponsiveTypes {
    sm: string | number;
    md: string | number;
    lg: string | number;
    xl: string | number;
    default: string | number;
}
declare const getResponsiveValues: (prop: ResponsiveTypes | string | number | ResponsiveNames, varValue: string | ResponsiveNames) => any;
export { responsiveOpts, ResponsiveNames, responsiveUnitValues, ResponsiveTypes, getResponsiveValues, };
