import PaddingsTypes from "./paddings";
declare function getPaddings({ props }: {
    props: PaddingsTypes;
}): any[];
declare function getPaddingsStyles({ p, pb, pl, pr, pt }: PaddingsTypes): any;
export { getPaddings, getPaddingsStyles };
export default getPaddings;
