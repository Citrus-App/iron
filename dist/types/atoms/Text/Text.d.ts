import React from 'react';
declare type Props = {
    as?: 'p' | 'span' | 'strong';
    variant?: 'small';
    children?: React.ReactNode;
};
declare const Text: ({ as, variant, children }: Props) => JSX.Element;
export default Text;
