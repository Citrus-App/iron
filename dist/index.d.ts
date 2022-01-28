/// <reference types="react" />
import React from 'react';

declare type Props$a = {
    children?: React.ReactNode;
    action?: any;
    href?: string;
    variant?: string;
};
declare const Button: ({ children, action, href, variant }: Props$a) => JSX.Element;

declare type Props$9 = {
    children?: React.ReactNode;
};
declare const Theme: ({ children }: Props$9) => JSX.Element;

declare type Props$8 = {};
declare const Menu: ({}: Props$8) => JSX.Element;

declare type Props$7 = {};
declare const Overlay: ({}: Props$7) => JSX.Element;

declare type Props$6 = {};
declare const Card: ({}: Props$6) => JSX.Element;

declare type Props$5 = {};
declare const Grid: ({}: Props$5) => JSX.Element;

declare type Props$4 = {};
declare const SideBar: ({}: Props$4) => JSX.Element;

declare type Props$3 = {};
declare const Content: ({}: Props$3) => JSX.Element;

declare type Props$2 = {};
declare const Header: ({}: Props$2) => JSX.Element;

declare type Props$1 = {};
declare const Text: ({}: Props$1) => JSX.Element;

declare type Props = {};
declare const Icon: ({}: Props) => JSX.Element;

export { Button, Card, Content, Grid, Header, Icon, Menu, Overlay, SideBar, Text, Theme };
