export declare const responsiveOpts: readonly ["sm", "md", "lg", "xl", "default"];
export declare type ResponsiveNames = typeof responsiveOpts[number];
declare type ResponsiveTypes = {
    sm: String | Number;
    md: String | Number;
    lg: String | Number;
    xl: String | Number;
    default: String | Number;
};
declare const getResponsiveValues: (prop: ResponsiveTypes | String | Number | ResponsiveNames, varValue: String | ResponsiveNames) => any;
export { ResponsiveTypes, getResponsiveValues };
