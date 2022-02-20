import React from "react";
declare type Props = {
    children?: React.ReactNode;
    themeMode?: string;
};
declare const Theme: {
    ({ children, themeMode }: Props): JSX.Element;
    extracter: (mode: string) => any;
};
export default Theme;
