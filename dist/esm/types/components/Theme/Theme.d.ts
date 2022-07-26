import React from 'react';
interface Props {
    children?: React.ReactNode;
    themeMode?: string;
}
declare const Theme: {
    ({ children, themeMode }: Props): JSX.Element;
    extracter: (mode: string) => any;
};
export default Theme;
