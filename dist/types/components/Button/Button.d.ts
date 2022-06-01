import React from "react";
declare type Props = {
    children?: React.ReactNode;
    action?: any;
    disabled?: boolean;
    variant?: string;
    type?: "button" | "submit" | "reset" | undefined;
};
declare const Button: {
    ({ children, action, variant, disabled, type }: Props): JSX.Element;
    documentation: string;
};
export default Button;
