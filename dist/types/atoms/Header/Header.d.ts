import React from 'react';
declare type Props = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: React.ReactNode;
};
declare const Header: {
    ({ as, children }: Props): JSX.Element;
    documentation: string;
};
export default Header;
