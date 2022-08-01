import React from "react";
import styles from "./Theme.module.css";
import { default as Tokens } from "./tokens";

type Props = {
  children?: React.ReactNode;
  themeMode?: string;
}

const setTheme = (mode: string) => {
  const themeStyles: any = {}
  Object.keys(Tokens).map(function(key, index) {
    if(key.startsWith(mode)) {
      const pre = key.split(`${mode}-`)[1]
      themeStyles[
        `--${pre.split('-').splice(1, pre.split('-').length).join('-')}`
      ] = Tokens[key]
    } else if(key.startsWith('global')) {
      themeStyles[`--${key}`] = Tokens[key]
    }
  });
  return themeStyles;
}

const Theme = ({
  children,
  themeMode = 'light'
}: Props) => {
  const themeStyles: any  = setTheme(themeMode)
  return (
    <div className="ThemeProvider" style={{...themeStyles}}>{children}</div>
  )
};

Theme.extracter = setTheme;
export default Theme;


