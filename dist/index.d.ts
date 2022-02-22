/// <reference types="react" />
import React from 'react';

declare type Props$c = {
    children?: React.ReactNode;
    action?: any;
    href?: string;
    variant?: string;
};
declare const Button: {
    ({ children, action, href, variant }: Props$c): JSX.Element;
    documentation: string;
};

declare type Props$b = {
    children?: React.ReactNode;
    themeMode?: string;
};
declare const Theme: {
    ({ children, themeMode }: Props$b): JSX.Element;
    extracter: (mode: string) => any;
};

declare type Props$a = {};
declare const Menu: ({}: Props$a) => JSX.Element;

declare type Props$9 = {};
declare const Overlay: ({}: Props$9) => JSX.Element;

declare type Props$8 = {};
declare const Card: ({}: Props$8) => JSX.Element;

declare type Props$7 = {
    children?: React.ReactNode;
};
declare const Gallery: ({ children }: Props$7) => JSX.Element;

declare type Props$6 = {
    children?: React.ReactNode;
};
declare const GridWrapper: ({ children }: Props$6) => JSX.Element;

declare type Props$5 = {
    children?: React.ReactNode;
};
declare const SideBar: ({ children }: Props$5) => JSX.Element;

declare type Props$4 = {
    children?: React.ReactNode;
    alignment?: string;
    state?: boolean;
    alignType?: string;
};
declare const SidePanel: ({ children, alignment, state, alignType }: Props$4) => JSX.Element;

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

export { Button, Card, Gallery, GridWrapper, Header, Icon, Menu, Overlay, SidePanel, SideBar as Sidebar, Text, Theme, TopBar };
