import React from 'react';
import MarginsTypes from '../../utils/margins/margins';
import CoordsTypes from '../../utils/coords/coords';
import PaddingsTypes from '../../utils/paddings/paddings';
interface SidePanelInterface extends MarginsTypes, CoordsTypes, PaddingsTypes {
    children?: React.ReactNode;
    alignment?: string;
    state?: boolean;
    alignType?: string;
}
declare const SidePanel: ({ children, alignment, state, alignType, m, mb, ml, mr, mt, p, pb, pl, pr, pt, top, left, right, bottom, }: SidePanelInterface) => JSX.Element;
export default SidePanel;
