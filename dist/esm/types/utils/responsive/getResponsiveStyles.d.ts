import ResponsiveTypes from "./responsive";
declare function getResponsiveStyle({ responsive }: ResponsiveTypes): {
    '--coordTop': any;
    '--coordLeft': any;
    '--coordRight': any;
    '--coordBottom': any;
};
export default getResponsiveStyle;
