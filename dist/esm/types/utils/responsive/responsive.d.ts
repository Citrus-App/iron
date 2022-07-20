declare const responsiveOpts: readonly ["sm", "md", "lg", "xl", "default"];
declare type ResponsiveNames = typeof responsiveOpts[number];
declare type responsiveUnitValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'auto'];
declare type ResponsiveTypes = {
    sm: String | Number;
    md: String | Number;
    lg: String | Number;
    xl: String | Number;
    default: String | Number;
};
declare const getResponsiveValues: (prop: ResponsiveTypes | String | Number | ResponsiveNames, varValue: String | ResponsiveNames) => any;
export { responsiveOpts, ResponsiveNames, responsiveUnitValues, ResponsiveTypes, getResponsiveValues };
