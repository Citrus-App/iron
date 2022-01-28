import React from "react";
import styles from "./Theme.module.css";
import { default as Tokens } from "./tokens.js";

// DEV NOTE
// The below prop will get set 
// via a global them provider context
const tempThemeProp: string = 'light'

type Props = {
  children?: React.ReactNode;
}

const Theme = ({ 
  children
}: Props) => {
  const themeStyles: any = {}

  Object.keys(Tokens).map(function(key, index) {
    if(key.startsWith(tempThemeProp)) {
      themeStyles[
        `--${key.split(`${tempThemeProp}-`)[1]}`
      ] = Tokens[key]
    }
  });
  return (
    <div className="ThemeProvider" style={{...themeStyles}}>{children}</div>
  )
};

export default Theme;
