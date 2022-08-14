import PaddingsTypes from '../../utils/paddings/paddings';
import MarginsTypes from '../../utils/margins/margins';
import CoordsTypes from '../../utils/coords/coords';
import React from 'react';
export interface ButtonProps extends MarginsTypes, PaddingsTypes, CoordsTypes {
    children?: React.ReactNode;
    action?: () => void;
    disabled?: boolean;
    variant?: 'outline';
    type?: 'button' | 'submit' | 'reset' | undefined;
    icon?: Partial<HTMLElement>;
    iconPosition?: 'left' | 'right';
}
