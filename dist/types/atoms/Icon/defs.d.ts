/// <reference types="react" />
import * as allIcons from './src/Icons';
export declare type iconName = keyof typeof allIcons;
export declare type iconDefs = {
    [key in iconName]?: string;
};
export declare const icons: (svg: iconName) => JSX.Element;
