import React from "react";
import CoordsTypes from '../../utils/coords/coords';
import PaddingsTypes from '../../utils/paddings/paddings';
import MarginsTypes from '../../utils/margins/margins';
interface ButtonProps extends MarginsTypes, PaddingsTypes, CoordsTypes {
    children?: React.ReactNode;
    action?: any;
    disabled?: boolean;
    variant?: string;
    type?: "button" | "submit" | "reset" | undefined;
}
declare const Button: {
    ({ children, action, variant, disabled, type, m, mb, ml, mr, mt, p, pb, pl, pr, pt, top, left, right, bottom }: ButtonProps): JSX.Element;
    documentation: string;
};
export default Button;
