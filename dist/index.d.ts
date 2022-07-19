/// <reference types="react" />
import React from 'react';

declare type vals = 'top' | 'left' | 'right' | 'bottom';
declare type CoordsTypes = {
    top: vals;
    left: vals;
    right: vals;
    bottom: vals;
};

declare const integerVals$1: number;
declare type PaddingsTypes = {
    p: typeof integerVals$1;
    pb: typeof integerVals$1;
    pl: typeof integerVals$1;
    pr: typeof integerVals$1;
    pt: typeof integerVals$1;
};

declare const integerVals: number;
declare const autoVals = "auto";
declare type MarginsTypes = {
    m: typeof integerVals | typeof autoVals;
    mb: typeof integerVals | typeof autoVals;
    ml: typeof integerVals | typeof autoVals;
    mr: typeof integerVals | typeof autoVals;
    mt: typeof integerVals | typeof autoVals;
};

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

declare type Props$b = {
    children?: React.ReactNode;
};
declare const ButtonGroup: {
    ({ children }: Props$b): JSX.Element;
    documentation: string;
};

declare type Props$a = {
    children?: React.ReactNode;
    themeMode?: string;
};
declare const Theme: {
    ({ children, themeMode }: Props$a): JSX.Element;
    extracter: (mode: string) => any;
};

declare type Props$9 = {};
declare const Menu: ({}: Props$9) => JSX.Element;

declare type Props$8 = {};
declare const Overlay: ({}: Props$8) => JSX.Element;

declare type Props$7 = {};
declare const Card: ({}: Props$7) => JSX.Element;

declare type Props$6 = {
    children?: React.ReactNode;
};
declare const Gallery: ({ children }: Props$6) => JSX.Element;

declare type Props$5 = {
    children?: React.ReactNode;
    full?: boolean;
};
declare const GridWrapper: ({ children, full }: Props$5) => JSX.Element;

declare type Props$4 = {
    children?: React.ReactNode;
};
declare const SideBar: ({ children }: Props$4) => JSX.Element;

interface SidePanelInterface extends MarginsTypes, CoordsTypes, PaddingsTypes {
    children?: React.ReactNode;
    alignment?: string;
    state?: boolean;
    alignType?: string;
}
declare const SidePanel: ({ children, alignment, state, alignType, m, mb, ml, mr, mt, p, pb, pl, pr, pt, top, left, right, bottom }: SidePanelInterface) => JSX.Element;

declare type Props$3 = {
    children?: React.ReactNode;
};
declare const TopBar: ({ children }: Props$3) => JSX.Element;

declare type Props$2 = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: React.ReactNode;
};
declare const Header: {
    ({ as, children }: Props$2): JSX.Element;
    documentation: string;
};

declare type Props$1 = {
    as?: 'p' | 'span' | 'strong';
    variant?: 'small';
    children?: React.ReactNode;
};
declare const Text: ({ as, variant, children }: Props$1) => JSX.Element;

declare type Props = {};
declare const Icon: ({}: Props) => JSX.Element;

export { Button, ButtonGroup, Card, Gallery, GridWrapper, Header, Icon, Menu, Overlay, SidePanel, SideBar as Sidebar, Text, Theme, TopBar };
