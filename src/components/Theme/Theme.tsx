import React from "react";
import styles from "./Theme.module.css";
import { default as Tokens } from "./tokens.js";



type Props = {
  children?: React.ReactNode;
  themeMode?: string;
}

const Theme = ({ 
  children,
  themeMode = 'light'
}: Props) => {
  const themeStyles: any = {}

  Object.keys(Tokens).map(function(key, index) {
    if(key.startsWith(themeMode)) {
      themeStyles[
        `--${key.split(`${themeMode}-`)[1]}`
      ] = Tokens[key]
    }
  });
  return (
    <div className="ThemeProvider" style={{...themeStyles}}>{children}</div>
  )
};

export default Theme;
