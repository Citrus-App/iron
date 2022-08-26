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
    variant?: 'outline' | 'primary';
    type?: 'button' | 'submit' | 'reset' | undefined;
    icon?: React.ReactElement<any, any>;
    iconPosition?: 'left' | 'right';
}

declare const Button: {
    ({ children, action, variant, disabled, type, icon, iconPosition, m, mb, ml, mr, mt, p, pb, pl, pr, pt, top, left, right, bottom, }: ButtonProps): JSX.Element;
    documentation: string;
};

interface Props$9 {
    children?: React.ReactNode;
}
declare const ButtonGroup: {
    ({ children }: Props$9): JSX.Element;
    documentation: string;
};

interface ThemeProps {
    children?: React.ReactNode;
    themeMode?: 'light' | 'dark';
}
declare const Theme: {
    ({ children, themeMode }: ThemeProps): JSX.Element;
    extracter: (mode: ThemeProps['themeMode']) => any;
};

interface Props$8 {
}
declare const Menu: ({}: Props$8) => JSX.Element;

interface Props$7 {
}
declare const Overlay: ({}: Props$7) => JSX.Element;

interface Props$6 {
}
declare const Card: ({}: Props$6) => JSX.Element;

interface Props$5 {
    children?: React.ReactNode;
}
declare const Gallery: ({ children }: Props$5) => JSX.Element;

interface Props$4 {
    children?: React.ReactNode;
    full?: boolean;
}
declare const GridWrapper: ({ children, full }: Props$4) => JSX.Element;

interface Props$3 {
    children?: React.ReactNode;
}
declare const SideBar: ({ children }: Props$3) => JSX.Element;

interface SidePanelInterface extends MarginsTypes, CoordsTypes, PaddingsTypes {
    children?: React.ReactNode;
    alignment?: string;
    state?: boolean;
    alignType?: string;
}
declare const SidePanel: ({ children, alignment, state, alignType, m, mb, ml, mr, mt, p, pb, pl, pr, pt, top, left, right, bottom, }: SidePanelInterface) => JSX.Element;

interface Props$2 {
    children?: React.ReactNode;
}
declare const TopBar: ({ children }: Props$2) => JSX.Element;

declare type Props$1 = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: React.ReactNode;
};
declare const Header: {
    ({ as, children }: Props$1): JSX.Element;
    documentation: string;
};

declare type Props = {
    as?: 'p' | 'span' | 'strong';
    variant?: 'small';
    children?: React.ReactNode;
};
declare const Text: ({ as, variant, children }: Props) => JSX.Element;

declare const masonryLayout: JSX.Element;
declare const gridLayout: JSX.Element;
declare const fullLayout: JSX.Element;
declare const irregularLayout: JSX.Element;
declare const horizontalArrowsII: JSX.Element;
declare const info: JSX.Element;
declare const minus: JSX.Element;
declare const cross: JSX.Element;
declare const chevron: JSX.Element;
declare const horizontalEllipse: JSX.Element;
declare const superrare: JSX.Element;
declare const oncyber: JSX.Element;
declare const externalWebsiteLink: JSX.Element;
declare const foundation: JSX.Element;
declare const saveCheckmark: JSX.Element;
declare const revertArrrow: JSX.Element;
declare const upwardDiagonalArrow: JSX.Element;
declare const opensea: JSX.Element;
declare const discord: JSX.Element;
declare const facebook: JSX.Element;
declare const flickr: JSX.Element;
declare const instagram: JSX.Element;
declare const linkedin: JSX.Element;
declare const medium: JSX.Element;
declare const pinterest: JSX.Element;
declare const reddit: JSX.Element;
declare const sloika: JSX.Element;
declare const snapchat: JSX.Element;
declare const tumblr: JSX.Element;
declare const twitter: JSX.Element;
declare const vimeo: JSX.Element;
declare const whatsapp: JSX.Element;
declare const youtube: JSX.Element;
declare const tiktok: JSX.Element;
declare const showtime: JSX.Element;
declare const niftyGateway: JSX.Element;
declare const knownOrigin: JSX.Element;
declare const etherscanLogoLightCircle: JSX.Element;
declare const looksrare: JSX.Element;
declare const makersplace: JSX.Element;
declare const arrow: JSX.Element;
declare const contextMenuCollapse: JSX.Element;
declare const manage: JSX.Element;
declare const reorderingArrows: JSX.Element;
declare const add: JSX.Element;
declare const wordmark: JSX.Element;
declare const logo: JSX.Element;
declare const editableElement: JSX.Element;
declare const settings: JSX.Element;
declare const switchWallets: JSX.Element;
declare const syncWallets: JSX.Element;
declare const rearrangeCover: JSX.Element;
declare const rearrangeCoverSaveExit: JSX.Element;
declare const minusEmpty: JSX.Element;
declare const move: JSX.Element;
declare const collectionCover: JSX.Element;
declare const visible: JSX.Element;
declare const hidden: JSX.Element;
declare const search: JSX.Element;
declare const moreLinks: JSX.Element;

declare const allIcons_masonryLayout: typeof masonryLayout;
declare const allIcons_gridLayout: typeof gridLayout;
declare const allIcons_fullLayout: typeof fullLayout;
declare const allIcons_irregularLayout: typeof irregularLayout;
declare const allIcons_horizontalArrowsII: typeof horizontalArrowsII;
declare const allIcons_info: typeof info;
declare const allIcons_minus: typeof minus;
declare const allIcons_cross: typeof cross;
declare const allIcons_chevron: typeof chevron;
declare const allIcons_horizontalEllipse: typeof horizontalEllipse;
declare const allIcons_superrare: typeof superrare;
declare const allIcons_oncyber: typeof oncyber;
declare const allIcons_externalWebsiteLink: typeof externalWebsiteLink;
declare const allIcons_foundation: typeof foundation;
declare const allIcons_saveCheckmark: typeof saveCheckmark;
declare const allIcons_revertArrrow: typeof revertArrrow;
declare const allIcons_upwardDiagonalArrow: typeof upwardDiagonalArrow;
declare const allIcons_opensea: typeof opensea;
declare const allIcons_discord: typeof discord;
declare const allIcons_facebook: typeof facebook;
declare const allIcons_flickr: typeof flickr;
declare const allIcons_instagram: typeof instagram;
declare const allIcons_linkedin: typeof linkedin;
declare const allIcons_medium: typeof medium;
declare const allIcons_pinterest: typeof pinterest;
declare const allIcons_reddit: typeof reddit;
declare const allIcons_sloika: typeof sloika;
declare const allIcons_snapchat: typeof snapchat;
declare const allIcons_tumblr: typeof tumblr;
declare const allIcons_twitter: typeof twitter;
declare const allIcons_vimeo: typeof vimeo;
declare const allIcons_whatsapp: typeof whatsapp;
declare const allIcons_youtube: typeof youtube;
declare const allIcons_tiktok: typeof tiktok;
declare const allIcons_showtime: typeof showtime;
declare const allIcons_niftyGateway: typeof niftyGateway;
declare const allIcons_knownOrigin: typeof knownOrigin;
declare const allIcons_etherscanLogoLightCircle: typeof etherscanLogoLightCircle;
declare const allIcons_looksrare: typeof looksrare;
declare const allIcons_makersplace: typeof makersplace;
declare const allIcons_arrow: typeof arrow;
declare const allIcons_contextMenuCollapse: typeof contextMenuCollapse;
declare const allIcons_manage: typeof manage;
declare const allIcons_reorderingArrows: typeof reorderingArrows;
declare const allIcons_add: typeof add;
declare const allIcons_wordmark: typeof wordmark;
declare const allIcons_logo: typeof logo;
declare const allIcons_editableElement: typeof editableElement;
declare const allIcons_settings: typeof settings;
declare const allIcons_switchWallets: typeof switchWallets;
declare const allIcons_syncWallets: typeof syncWallets;
declare const allIcons_rearrangeCover: typeof rearrangeCover;
declare const allIcons_rearrangeCoverSaveExit: typeof rearrangeCoverSaveExit;
declare const allIcons_minusEmpty: typeof minusEmpty;
declare const allIcons_move: typeof move;
declare const allIcons_collectionCover: typeof collectionCover;
declare const allIcons_visible: typeof visible;
declare const allIcons_hidden: typeof hidden;
declare const allIcons_search: typeof search;
declare const allIcons_moreLinks: typeof moreLinks;
declare namespace allIcons {
  export {
    allIcons_masonryLayout as masonryLayout,
    allIcons_gridLayout as gridLayout,
    allIcons_fullLayout as fullLayout,
    allIcons_irregularLayout as irregularLayout,
    allIcons_horizontalArrowsII as horizontalArrowsII,
    allIcons_info as info,
    allIcons_minus as minus,
    allIcons_cross as cross,
    allIcons_chevron as chevron,
    allIcons_horizontalEllipse as horizontalEllipse,
    allIcons_superrare as superrare,
    allIcons_oncyber as oncyber,
    allIcons_externalWebsiteLink as externalWebsiteLink,
    allIcons_foundation as foundation,
    allIcons_saveCheckmark as saveCheckmark,
    allIcons_revertArrrow as revertArrrow,
    allIcons_upwardDiagonalArrow as upwardDiagonalArrow,
    allIcons_opensea as opensea,
    allIcons_discord as discord,
    allIcons_facebook as facebook,
    allIcons_flickr as flickr,
    allIcons_instagram as instagram,
    allIcons_linkedin as linkedin,
    allIcons_medium as medium,
    allIcons_pinterest as pinterest,
    allIcons_reddit as reddit,
    allIcons_sloika as sloika,
    allIcons_snapchat as snapchat,
    allIcons_tumblr as tumblr,
    allIcons_twitter as twitter,
    allIcons_vimeo as vimeo,
    allIcons_whatsapp as whatsapp,
    allIcons_youtube as youtube,
    allIcons_tiktok as tiktok,
    allIcons_showtime as showtime,
    allIcons_niftyGateway as niftyGateway,
    allIcons_knownOrigin as knownOrigin,
    allIcons_etherscanLogoLightCircle as etherscanLogoLightCircle,
    allIcons_looksrare as looksrare,
    allIcons_makersplace as makersplace,
    allIcons_arrow as arrow,
    allIcons_contextMenuCollapse as contextMenuCollapse,
    allIcons_manage as manage,
    allIcons_reorderingArrows as reorderingArrows,
    allIcons_add as add,
    allIcons_wordmark as wordmark,
    allIcons_logo as logo,
    allIcons_editableElement as editableElement,
    allIcons_settings as settings,
    allIcons_switchWallets as switchWallets,
    allIcons_syncWallets as syncWallets,
    allIcons_rearrangeCover as rearrangeCover,
    allIcons_rearrangeCoverSaveExit as rearrangeCoverSaveExit,
    allIcons_minusEmpty as minusEmpty,
    allIcons_move as move,
    allIcons_collectionCover as collectionCover,
    allIcons_visible as visible,
    allIcons_hidden as hidden,
    allIcons_search as search,
    allIcons_moreLinks as moreLinks,
  };
}

declare type iconName = keyof typeof allIcons;

interface IconProps {
    variant: iconName;
    toolTip?: any;
    invert?: boolean;
}

declare const Icon: ({ variant, toolTip, invert, ...props }: IconProps) => JSX.Element;

export { Button, ButtonGroup, ButtonProps, Card, Gallery, GridWrapper, Header, Icon, IconProps, Menu, Overlay, SidePanel, SideBar as Sidebar, Text, Theme, TopBar };
