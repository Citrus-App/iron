import React from "react";
declare type Props = {
    children?: React.ReactNode;
    action?: any;
    disabled?: boolean;
    variant?: string;
};
declare const Button: {
    ({ children, action, variant, disabled }: Props): JSX.Element;
    documentation: string;
};
export default Button;
