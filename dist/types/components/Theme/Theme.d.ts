import React from 'react';
export interface ThemeProps {
    children?: React.ReactNode;
    themeMode?: 'light' | 'dark';
}
declare const Theme: {
    ({ children, themeMode }: ThemeProps): JSX.Element;
    extracter: (mode: ThemeProps['themeMode']) => any;
};
export default Theme;
