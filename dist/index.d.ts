import React from 'react';

declare type Props$1 = {
    children?: React.ReactNode;
    action?: any;
    href?: string;
    variant?: string;
};
declare const Button: ({ children, action, href, variant }: Props$1) => JSX.Element;

declare type Props = {
    children?: React.ReactNode;
};
declare const Theme: ({ children }: Props) => JSX.Element;

export { Button, Theme };
