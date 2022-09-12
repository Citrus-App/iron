/// <reference types="react" />
import React from 'react';

declare type integers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface PaddingsTypes {
    p: integers;
    pb: integers;
    pl: integers;
    pr: integers;
    pt: integers;
}

declare type marginVals = integers | 'auto';
interface MarginsTypes {
    m: marginVals;
    mb: marginVals;
    ml: marginVals;
    mr: marginVals;
    mt: marginVals;
}

declare type vals = 'top' | 'left' | 'right' | 'bottom';
interface CoordsTypes {
    top: vals;
    left: vals;
    right: vals;
    bottom: vals;
}

interface ButtonProps extends MarginsTypes, PaddingsTypes, CoordsTypes {
    children?: React.ReactNode;
    action?: () => void;
    disabled?: boolean;
    variant?: 'primary';
    type?: 'button' | 'submit' | 'reset' | undefined;
    icon?: React.ReactElement<any, any>;
    iconPosition?: 'left' | 'right';
}

declare const Button: {
    ({ children, action, variant, disabled, type, icon, iconPosition, m, mb, ml, mr, mt, p, pb, pl, pr, pt, top, left, right, bottom, }: ButtonProps): JSX.Element;
    documentation: string;
};

interface Props$a {
    children?: React.ReactNode;
}
declare const ButtonGroup: {
    ({ children }: Props$a): JSX.Element;
    documentation: string;
};

interface ThemeProps {
    children?: React.ReactNode;
    themeMode?: 'light' | 'dark';
}
declare const Theme: ({ children, themeMode }: ThemeProps) => JSX.Element;

interface Props$9 {
}
declare const Menu: ({}: Props$9) => JSX.Element;

interface Props$8 {
}
declare const Overlay: ({}: Props$8) => JSX.Element;

interface Props$7 {
}
declare const Card: ({}: Props$7) => JSX.Element;

interface Props$6 {
    children?: React.ReactNode;
}
declare const Gallery: ({ children }: Props$6) => JSX.Element;

interface Props$5 {
    children?: React.ReactNode;
    full?: boolean;
}
declare const GridWrapper: ({ children, full }: Props$5) => JSX.Element;

interface Props$4 {
    children?: React.ReactNode;
}
declare const SideBar: ({ children }: Props$4) => JSX.Element;

interface SidePanelInterface extends MarginsTypes, CoordsTypes, PaddingsTypes {
    children?: React.ReactNode;
    alignment?: string;
    state?: boolean;
    alignType?: string;
}
declare const SidePanel: ({ children, alignment, state, alignType, m, mb, ml, mr, mt, p, pb, pl, pr, pt, top, left, right, bottom, }: SidePanelInterface) => JSX.Element;

interface Props$3 {
    children?: React.ReactNode;
}
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

export { Button, ButtonGroup, ButtonProps, Card, Gallery, GridWrapper, Header, Icon, Menu, Overlay, SidePanel, SideBar as Sidebar, Text, Theme, TopBar };
