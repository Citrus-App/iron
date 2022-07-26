import CoordsTypes from './coords';
declare function getCoords({ props }: {
    props: CoordsTypes;
}): any[];
declare function getCoordsStyle({ top, left, right, bottom }: CoordsTypes): {
    '--coordTop': "top" | "left" | "right" | "bottom";
    '--coordLeft': "top" | "left" | "right" | "bottom";
    '--coordRight': "top" | "left" | "right" | "bottom";
    '--coordBottom': "top" | "left" | "right" | "bottom";
};
export { getCoords, getCoordsStyle };
