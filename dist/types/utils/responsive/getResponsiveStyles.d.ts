import { ResponsiveTypes } from "./responsive";
declare function getResponsiveStyle({ sm, md, lg, xl, default: string }: ResponsiveTypes): {
    '--coordTop': String | Number;
    '--coordLeft': String | Number;
    '--coordRight': String | Number;
    '--coordBottom': String | Number;
};
export default getResponsiveStyle;
