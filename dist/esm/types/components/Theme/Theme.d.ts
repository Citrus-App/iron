import React from 'react';
export interface ThemeProps {
    children?: React.ReactNode;
    themeMode?: 'light' | 'dark';
}
export declare const Theme: ({ children, themeMode }: ThemeProps) => JSX.Element;
