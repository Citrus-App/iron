import MarginsTypes from "./margins";
declare function getMargins({ props }: {
    props: MarginsTypes;
}): any[];
declare function getMarginsStyles({ m, mb, ml, mr, mt }: MarginsTypes): any;
export { getMargins, getMarginsStyles };
