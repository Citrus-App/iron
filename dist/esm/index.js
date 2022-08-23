import React from 'react';

var classnames$1 = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames$1));

var classnames = classnames$1.exports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$b = ".Button-module_baseButton__OB4cX {\n  border-radius: 0;\n  line-height: 3rem;\n  display: inline-flex;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  margin: 0;\n  transition: color 0.4s ease, border 0.4s ease;\n\n  font-family: var(--global-font-families-sf-compact), system-ui, sans-serif;\n  font-weight: var(--global-font-weights-sf-compact-2);\n  font-size: calc(var(--global-font-size-0) * 0.1rem);\n}\n\n  .Button-module_baseButton__OB4cX:hover {\n    background-color: var(--button-primary);\n  }\n\n  .Button-module_baseButton__OB4cX:focus {\n    /*background-color: var(--button-pressed);*/\n  }\n\n  .Button-module_baseButton__OB4cX:disabled {\n    pointer-events: none;\n  }\n\n.Button-module_inner__boETo {\n  margin: auto;\n  display: flex;\n}\n\n.Button-module_variant-outline__wbE1U {\n  background: transparent;\n  border: 1px solid var(--button-primary);\n  color: var(--button-primary);\n}\n\n.Button-module_variant-outline__wbE1U:hover {\n    background-color: var(--button-primary);\n    color: var(--button-secondary);\n  }\n\n.Button-module_variant-outline__wbE1U:hover * {\n    color: var(--button-secondary);\n    stroke: var(--button-secondary);\n  }\n\n.Button-module_variant-outline__wbE1U:disabled {\n    color: var(--button-disabled);\n    border: 1px solid var(--button-disabled);\n  }\n\n.Button-module_variant-outline__wbE1U:disabled * {\n      color: var(--button-disabled);\n      stroke: var(--button-disabled);\n    }\n\n.Button-module_variant-bare__-ig32 {\n  background-color: transparent;\n  border: 0 none;\n  color: var(---button-primary);\n}\n\n.Button-module_variant-bare__-ig32:hover {\n    background-color: transparent;\n     border: 0 none;\n  }\n";
var styles$b = {"baseButton":"Button-module_baseButton__OB4cX","inner":"Button-module_inner__boETo","variant-outline":"Button-module_variant-outline__wbE1U","variant-bare":"Button-module_variant-bare__-ig32"};
styleInject(css_248z$b);

var Button = function (_a) {
    var children = _a.children, action = _a.action, variant = _a.variant, disabled = _a.disabled, type = _a.type;
    var classList = classnames(styles$b.baseButton, styles$b["variant-".concat(variant)]);
    type = type !== null && type !== void 0 ? type : 'button';
    return (React.createElement("button", { className: classList, onClick: action, disabled: disabled, type: type },
        React.createElement("div", { className: styles$b.inner }, children)));
};
Button.documentation = "The Button component accepts children for strings, action for (), href for link, and variant for our types defined in Figma";

var css_248z$a = ".ButtonGroup-module_baseButtonGroup__G5x-4 {\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow:column;\n  -moz-column-gap: 1.6rem;\n       column-gap: 1.6rem;\n}\n";
var styles$a = {"baseButtonGroup":"ButtonGroup-module_baseButtonGroup__G5x-4"};
styleInject(css_248z$a);

var ButtonGroup = function (_a) {
    var children = _a.children;
    var classList = classnames(styles$a.baseButtonGroup);
    return (React.createElement("div", { className: classList }, children));
};
ButtonGroup.documentation = "The Button Group component accepts button children";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Do not edit directly
 * Generated on Mon, 01 Aug 2022 20:09:34 GMT
 */

var tokens = {
  "dark-mode": {
    "id": "11771dbe870ed6a87a6cb198302b60f67826f274",
    "name": "Dark Mode",
    "selectedTokenSets": {
      "global": "enabled",
      "dark": "enabled",
      "light": "disabled",
      "user's featured color": "disabled"
    },
    "$figmaStyleReferences": {},
    "type": "other",
    "internal__Parent": "$themes"
  },
  "light-mode": {
    "id": "2b1595abe14a62ac1703213f52b06a6cb4cb8e77",
    "name": "Light Mode",
    "selectedTokenSets": {
      "global": "enabled",
      "light": "enabled",
      "dark": "disabled",
      "user's featured color": "disabled"
    },
    "$figmaStyleReferences": {},
    "type": "other",
    "internal__Parent": "$themes"
  },
  "featured-context-featured-context-primary": "#3f9ff5",
  "featured-context-featured-context-secondary": "#CdaF75",
  "icon-icon-primary": "#000000",
  "icon-icon-secondary": "#ffffff",
  "button-button-primary": "#000000",
  "button-button-secondary": "#ffffff",
  "button-button-disabled": "#9b9b9b",
  "surface-surface-primary": "#e6e6e6",
  "surface-surface-secondary": "#1d1d1f",
  "text-text-primary": "#000000",
  "text-text-secondary": "#ffffff",
  "text-text-tertiary": "#68686a",
  "border-border-primary": "#1d1d1f",
  "spectrum-gray-100": "#f3f3f3",
  "spectrum-gray-200": "#e6e6e6",
  "spectrum-gray-300": "#b4b4b4",
  "spectrum-gray-400": "#9b9b9b",
  "spectrum-gray-500": "#818183",
  "spectrum-gray-600": "#68686a",
  "spectrum-gray-700": "#4f4f51",
  "spectrum-gray-800": "#363638",
  "spectrum-gray-900": "#1d1d1f",
  "spectrum-gray-1000": "#000000",
  "spectrum-gray-000": "#ffffff",
  "spectrum-red-100": "#ffe5e7",
  "spectrum-red-200": "#ffc2c6",
  "spectrum-red-300": "#ff9ea5",
  "spectrum-red-400": "#f96c73",
  "spectrum-red-500": "#f1465a",
  "spectrum-red-600": "#e32144",
  "spectrum-red-700": "#be1332",
  "spectrum-red-800": "#990620",
  "spectrum-red-900": "#650113",
  "spectrum-red-1000": "#320109",
  "spectrum-red-000": "#fff5f5",
  "spectrum-blue-100": "#c1ebf6",
  "spectrum-blue-200": "#96ddef",
  "spectrum-blue-300": "#6ad0e9",
  "spectrum-blue-400": "#3fc2e2",
  "spectrum-blue-500": "#14b4dc",
  "spectrum-blue-600": "#169bbc",
  "spectrum-blue-700": "#17829d",
  "spectrum-blue-800": "#18697e",
  "spectrum-blue-900": "#1a4f5e",
  "spectrum-blue-1000": "#1b363f",
  "spectrum-blue-000": "#ecf9fc",
  "spectrum-green-100": "#bbf1df",
  "spectrum-green-200": "#8ce7c9",
  "spectrum-green-300": "#5eddb4",
  "spectrum-green-400": "#2fd39e",
  "spectrum-green-500": "#00c988",
  "spectrum-green-600": "#00ad76",
  "spectrum-green-700": "#007552",
  "spectrum-green-800": "#005940",
  "spectrum-green-900": "#003d2e",
  "spectrum-green-1000": "#00291f",
  "spectrum-green-000": "#f3fcf9",
  "spectrum-yellow-100": "#ffeebe",
  "spectrum-yellow-200": "#ffe397",
  "spectrum-yellow-300": "#ffd971",
  "spectrum-yellow-400": "#ffce4a",
  "spectrum-yellow-500": "#ffc424",
  "spectrum-yellow-600": "#ffad1f",
  "spectrum-yellow-700": "#fa8900",
  "spectrum-yellow-800": "#e55c00",
  "spectrum-yellow-900": "#c73f00",
  "spectrum-yellow-1000": "#752100",
  "spectrum-yellow-000": "#fff8e4",
  "docs-shadow": {
    "color": "#00000026",
    "type": "dropShadow",
    "x": 0,
    "y": 4,
    "blur": 6,
    "spread": 0
  },
  "small-15": {
    "color": "#00000026",
    "type": "dropShadow",
    "x": 0,
    "y": 0,
    "blur": 30,
    "spread": 0
  },
  "small-50": {
    "color": "#00000080",
    "type": "dropShadow",
    "x": 0,
    "y": 0,
    "blur": 30,
    "spread": 0
  },
  "large-15": {
    "color": "#00000026",
    "type": "dropShadow",
    "x": 0,
    "y": 0,
    "blur": 150,
    "spread": 0
  },
  "large-85": {
    "color": "#000000d9",
    "type": "dropShadow",
    "x": 0,
    "y": 0,
    "blur": 100,
    "spread": 0
  },
  "extra-large-15": {
    "color": "#00000026",
    "type": "dropShadow",
    "x": 0,
    "y": 0,
    "blur": 30,
    "spread": 0
  },
  "extra-large-100": {
    "color": "#000000",
    "type": "dropShadow",
    "x": 0,
    "y": 0,
    "blur": 30,
    "spread": 0
  },
  "font-families-ivypresto-display": "IvyPresto Display",
  "font-families-sf-compact": "SF Compact",
  "font-families-degular": "Degular",
  "line-heights-0": 24,
  "line-heights-1": 28,
  "line-heights-2": 30,
  "line-heights-3": 32,
  "line-heights-4": 34,
  "line-heights-5": 48,
  "line-heights-6": 52,
  "line-heights-7": 110,
  "font-weights-sf-compact-1": "medium",
  "font-weights-sf-compact-2": "semibold",
  "font-weights-sf-compact-3": "bold",
  "font-weights-degular-0": "Thin",
  "font-weights-degular-1": "Semibold",
  "font-weights-sf-compact-0": "regular",
  "font-weights-sf-compact-4": "regular italic",
  "font-size-0": 13,
  "font-size-1": 16,
  "font-size-2": 18,
  "font-size-3": 20,
  "font-size-4": 22,
  "font-size-5": 30,
  "font-size-6": 44,
  "font-size-7": 48,
  "font-size-8": 140,
  "letter-spacing-0": 0,
  "letter-spacing-1": "0%",
  "paragraph-spacing-0": 0,
  "h1": {
    "fontFamily": "Degular",
    "fontWeight": "Thin",
    "lineHeight": 110,
    "fontSize": 140,
    "letterSpacing": 0,
    "paragraphSpacing": 0,
    "textCase": "none",
    "textDecoration": "none"
  },
  "h2": {
    "fontFamily": "Degular",
    "fontWeight": "Semibold",
    "lineHeight": 52,
    "fontSize": 48,
    "letterSpacing": 0,
    "paragraphSpacing": 0,
    "textCase": "none",
    "textDecoration": "none"
  },
  "h3": {
    "fontFamily": "SF Compact",
    "fontWeight": "bold",
    "lineHeight": 48,
    "fontSize": 44,
    "letterSpacing": 0,
    "paragraphSpacing": 0,
    "textCase": "none",
    "textDecoration": "none"
  },
  "text-case-none": "none",
  "text-decoration-none": "none",
  "h4": {
    "fontFamily": "SF Compact",
    "fontWeight": "bold",
    "lineHeight": 34,
    "fontSize": 30,
    "letterSpacing": "0%",
    "paragraphSpacing": 0,
    "textDecoration": "none",
    "textCase": "none"
  },
  "h5": {
    "fontFamily": "SF Compact",
    "fontWeight": "bold",
    "lineHeight": 24,
    "fontSize": 22,
    "letterSpacing": "0%",
    "paragraphSpacing": 0,
    "textDecoration": "none",
    "textCase": "none"
  },
  "body-xl-medium": {
    "fontFamily": "SF Compact",
    "fontWeight": "medium",
    "lineHeight": 28,
    "fontSize": 20,
    "letterSpacing": "0%",
    "paragraphSpacing": 0,
    "textDecoration": "none",
    "textCase": "none"
  },
  "body-xl-regular": {
    "fontFamily": "SF Compact",
    "fontWeight": "regular",
    "lineHeight": 28,
    "fontSize": 20,
    "letterSpacing": "0%",
    "paragraphSpacing": 0,
    "textDecoration": "none",
    "textCase": "none"
  },
  "body-main": {
    "fontFamily": "SF Compact",
    "fontWeight": "regular",
    "lineHeight": 24,
    "fontSize": 16,
    "letterSpacing": "0%",
    "paragraphSpacing": 0,
    "textDecoration": "none",
    "textCase": "none"
  },
  "body-main-bold": {
    "fontFamily": "SF Compact",
    "fontWeight": "bold",
    "lineHeight": 24,
    "fontSize": 16,
    "letterSpacing": "0%",
    "paragraphSpacing": 0,
    "textDecoration": "none",
    "textCase": "none"
  },
  "body-main-semibold": {
    "fontFamily": "SF Compact",
    "fontWeight": "semibold",
    "lineHeight": 24,
    "fontSize": 16,
    "letterSpacing": "0%",
    "paragraphSpacing": 0,
    "textDecoration": "none",
    "textCase": "none"
  },
  "instructions": {
    "fontFamily": "SF Compact",
    "fontWeight": "regular italic",
    "lineHeight": 24,
    "fontSize": 16,
    "letterSpacing": "0%",
    "paragraphSpacing": 0,
    "textDecoration": "none",
    "textCase": "none"
  },
  "buttons-details": {
    "fontFamily": "SF Compact",
    "fontWeight": "medium",
    "lineHeight": 32,
    "fontSize": 13,
    "letterSpacing": "0%",
    "paragraphSpacing": 0,
    "textDecoration": "none",
    "textCase": "none"
  },
  "consistent-consistent-white": "#ffffff",
  "consistent-consistent-black": "#000000",
  "global-spectrum-gray-100": "#f3f3f3",
  "global-spectrum-gray-200": "#e6e6e6",
  "global-spectrum-gray-300": "#b4b4b4",
  "global-spectrum-gray-400": "#9b9b9b",
  "global-spectrum-gray-500": "#818183",
  "global-spectrum-gray-600": "#68686a",
  "global-spectrum-gray-700": "#4f4f51",
  "global-spectrum-gray-800": "#363638",
  "global-spectrum-gray-900": "#1d1d1f",
  "global-spectrum-gray-1000": "#000000",
  "global-spectrum-gray-000": "#ffffff",
  "global-spectrum-red-100": "#ffe5e7",
  "global-spectrum-red-200": "#ffc2c6",
  "global-spectrum-red-300": "#ff9ea5",
  "global-spectrum-red-400": "#f96c73",
  "global-spectrum-red-500": "#f1465a",
  "global-spectrum-red-600": "#e32144",
  "global-spectrum-red-700": "#be1332",
  "global-spectrum-red-800": "#990620",
  "global-spectrum-red-900": "#650113",
  "global-spectrum-red-1000": "#320109",
  "global-spectrum-red-000": "#fff5f5",
  "global-spectrum-blue-100": "#c1ebf6",
  "global-spectrum-blue-200": "#96ddef",
  "global-spectrum-blue-300": "#6ad0e9",
  "global-spectrum-blue-400": "#3fc2e2",
  "global-spectrum-blue-500": "#14b4dc",
  "global-spectrum-blue-600": "#169bbc",
  "global-spectrum-blue-700": "#17829d",
  "global-spectrum-blue-800": "#18697e",
  "global-spectrum-blue-900": "#1a4f5e",
  "global-spectrum-blue-1000": "#1b363f",
  "global-spectrum-blue-000": "#ecf9fc",
  "global-spectrum-green-100": "#bbf1df",
  "global-spectrum-green-200": "#8ce7c9",
  "global-spectrum-green-300": "#5eddb4",
  "global-spectrum-green-400": "#2fd39e",
  "global-spectrum-green-500": "#00c988",
  "global-spectrum-green-600": "#00ad76",
  "global-spectrum-green-700": "#007552",
  "global-spectrum-green-800": "#005940",
  "global-spectrum-green-900": "#003d2e",
  "global-spectrum-green-1000": "#00291f",
  "global-spectrum-green-000": "#f3fcf9",
  "global-spectrum-yellow-100": "#ffeebe",
  "global-spectrum-yellow-200": "#ffe397",
  "global-spectrum-yellow-300": "#ffd971",
  "global-spectrum-yellow-400": "#ffce4a",
  "global-spectrum-yellow-500": "#ffc424",
  "global-spectrum-yellow-600": "#ffad1f",
  "global-spectrum-yellow-700": "#fa8900",
  "global-spectrum-yellow-800": "#e55c00",
  "global-spectrum-yellow-900": "#c73f00",
  "global-spectrum-yellow-1000": "#752100",
  "global-spectrum-yellow-000": "#fff8e4",
  "global-docs-shadow": {
    "color": "#00000026",
    "type": "dropShadow",
    "x": "0",
    "y": "4",
    "blur": "6",
    "spread": "0"
  },
  "global-small-15": {
    "color": "#00000026",
    "type": "dropShadow",
    "x": "0",
    "y": "0",
    "blur": "30",
    "spread": "0"
  },
  "global-small-50": {
    "color": "#00000080",
    "type": "dropShadow",
    "x": "0",
    "y": "0",
    "blur": "30",
    "spread": "0"
  },
  "global-large-15": {
    "color": "#00000026",
    "type": "dropShadow",
    "x": "0",
    "y": "0",
    "blur": "150",
    "spread": "0"
  },
  "global-large-85": {
    "color": "#000000d9",
    "type": "dropShadow",
    "x": "0",
    "y": "0",
    "blur": "100",
    "spread": "0"
  },
  "global-extra-large-15": {
    "color": "#00000026",
    "type": "dropShadow",
    "x": "0",
    "y": "0",
    "blur": "30",
    "spread": "0"
  },
  "global-extra-large-100": {
    "color": "#000000",
    "type": "dropShadow",
    "x": "0",
    "y": "0",
    "blur": "30",
    "spread": "0"
  },
  "global-font-families-ivypresto-display": "IvyPresto Display",
  "global-font-families-sf-compact": "SF Compact",
  "global-font-families-degular": "Degular",
  "global-line-heights-0": "24",
  "global-line-heights-1": "28",
  "global-line-heights-2": "30",
  "global-line-heights-3": "32",
  "global-line-heights-4": "34",
  "global-line-heights-5": "48",
  "global-line-heights-6": "52",
  "global-line-heights-7": "110",
  "global-font-weights-sf-compact-1": "medium",
  "global-font-weights-sf-compact-2": "semibold",
  "global-font-weights-sf-compact-3": "bold",
  "global-font-weights-degular-0": "Thin",
  "global-font-weights-degular-1": "Semibold",
  "global-font-weights-sf-compact-0": "regular",
  "global-font-weights-sf-compact-4": "regular italic",
  "global-font-size-0": "13",
  "global-font-size-1": "16",
  "global-font-size-2": "18",
  "global-font-size-3": "20",
  "global-font-size-4": "22",
  "global-font-size-5": "30",
  "global-font-size-6": "44",
  "global-font-size-7": "48",
  "global-font-size-8": "140",
  "global-letter-spacing-0": "0",
  "global-letter-spacing-1": "0%",
  "global-paragraph-spacing-0": "0",
  "global-h1": {
    "fontFamily": "$fontFamilies.degular",
    "fontWeight": "$fontWeights.degular-0",
    "lineHeight": "$lineHeights.7",
    "fontSize": "$fontSize.8",
    "letterSpacing": "$letterSpacing.0",
    "paragraphSpacing": "$paragraphSpacing.0",
    "textCase": "$textCase.none",
    "textDecoration": "$textDecoration.none"
  },
  "global-h2": {
    "fontFamily": "$fontFamilies.degular",
    "fontWeight": "$fontWeights.degular-1",
    "lineHeight": "$lineHeights.6",
    "fontSize": "$fontSize.7",
    "letterSpacing": "$letterSpacing.0",
    "paragraphSpacing": "$paragraphSpacing.0",
    "textCase": "$textCase.none",
    "textDecoration": "$textDecoration.none"
  },
  "global-h3": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-3",
    "lineHeight": "$lineHeights.5",
    "fontSize": "$fontSize.6",
    "letterSpacing": "$letterSpacing.0",
    "paragraphSpacing": "$paragraphSpacing.0",
    "textCase": "$textCase.none",
    "textDecoration": "$textDecoration.none"
  },
  "global-text-case-none": "none",
  "global-text-decoration-none": "none",
  "global-h4": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-3",
    "lineHeight": "$lineHeights.4",
    "fontSize": "$fontSize.5",
    "letterSpacing": "0%",
    "paragraphSpacing": "0",
    "textDecoration": "none",
    "textCase": "none"
  },
  "global-h5": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-3",
    "lineHeight": "$lineHeights.0",
    "fontSize": "$fontSize.4",
    "letterSpacing": "0%",
    "paragraphSpacing": "0",
    "textDecoration": "none",
    "textCase": "none"
  },
  "global-body-xl-medium": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-1",
    "lineHeight": "$lineHeights.1",
    "fontSize": "$fontSize.3",
    "letterSpacing": "0%",
    "paragraphSpacing": "0",
    "textDecoration": "none",
    "textCase": "none"
  },
  "global-body-xl-regular": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-0",
    "lineHeight": "$lineHeights.1",
    "fontSize": "$fontSize.3",
    "letterSpacing": "0%",
    "paragraphSpacing": "0",
    "textDecoration": "none",
    "textCase": "none"
  },
  "global-body-main": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-0",
    "lineHeight": "$lineHeights.0",
    "fontSize": "$fontSize.1",
    "letterSpacing": "0%",
    "paragraphSpacing": "0",
    "textDecoration": "none",
    "textCase": "none"
  },
  "global-body-main-bold": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-3",
    "lineHeight": "$lineHeights.0",
    "fontSize": "$fontSize.1",
    "letterSpacing": "0%",
    "paragraphSpacing": "0",
    "textDecoration": "none",
    "textCase": "none"
  },
  "global-body-main-semibold": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-2",
    "lineHeight": "$lineHeights.0",
    "fontSize": "$fontSize.1",
    "letterSpacing": "0%",
    "paragraphSpacing": "0",
    "textDecoration": "none",
    "textCase": "none"
  },
  "global-instructions": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-4",
    "lineHeight": "$lineHeights.0",
    "fontSize": "$fontSize.1",
    "letterSpacing": "0%",
    "paragraphSpacing": "0",
    "textDecoration": "none",
    "textCase": "none"
  },
  "global-buttons-details": {
    "fontFamily": "$fontFamilies.sf-compact",
    "fontWeight": "$fontWeights.sf-compact-1",
    "lineHeight": "$lineHeights.3",
    "fontSize": "$fontSize.0",
    "letterSpacing": "0%",
    "paragraphSpacing": "0",
    "textDecoration": "none",
    "textCase": "none"
  },
  "global-consistent-consistent-white": "#ffffff",
  "global-consistent-consistent-black": "#000000",
  "global-featured-context-featured-context-primary": "#000000",
  "global-featured-context-featured-context-secondary": "#ffffff",
  "dark-icon-icon-primary": "#ffffff",
  "dark-icon-icon-secondary": "#000000",
  "dark-button-button-primary": "#ffffff",
  "dark-button-button-secondary": "#000000",
  "dark-button-button-disabled": "#9b9b9b",
  "dark-surface-surface-primary": "#1d1d1f",
  "dark-surface-surface-secondary": "#e6e6e6",
  "dark-text-text-primary": "#ffffff",
  "dark-text-text-secondary": "#000000",
  "dark-text-text-tertiary": "#68686a",
  "dark-border-border-primary": "#b4b4b4",
  "light-icon-icon-primary": "#000000",
  "light-icon-icon-secondary": "#ffffff",
  "light-button-button-primary": "#000000",
  "light-button-button-secondary": "#ffffff",
  "light-button-button-disabled": "#9b9b9b",
  "light-surface-surface-primary": "#e6e6e6",
  "light-surface-surface-secondary": "#1d1d1f",
  "light-text-text-primary": "#000000",
  "light-text-text-secondary": "#ffffff",
  "light-text-text-tertiary": "#68686a",
  "light-border-border-primary": "#1d1d1f",
  "user-s-featured-color-featured-context-featured-context-primary": "#3f9ff5",
  "user-s-featured-color-featured-context-featured-context-secondary": "#CdaF75"
};

var setTheme = function (mode) {
    var themeStyles = {};
    Object.keys(tokens).map(function (key, index) {
        if (key.startsWith(mode)) {
            var pre = key.split("".concat(mode, "-"))[1];
            themeStyles["--".concat(pre.split('-').splice(1, pre.split('-').length).join('-'))] = tokens[key];
        }
        else if (key.startsWith('global')) {
            themeStyles["--".concat(key)] = tokens[key];
        }
    });
    return themeStyles;
};
var Theme = function (_a) {
    var children = _a.children, _b = _a.themeMode, themeMode = _b === void 0 ? 'light' : _b;
    var themeStyles = setTheme(themeMode);
    return (React.createElement("div", { className: "ThemeProvider", style: __assign({}, themeStyles) }, children));
};
Theme.extracter = setTheme;

var css_248z$9 = "\n.Menu-module_root__Hh-vp {\n  position: relative;\n}\n";
var styles$9 = {"root":"Menu-module_root__Hh-vp"};
styleInject(css_248z$9);

var Menu = function (_a) {
    return (React.createElement("div", { className: styles$9.root }, "hello world! I am Menu"));
};

var css_248z$8 = "\n.Overlay-module_root__snYjz {\n  position: relative;\n}\n";
var styles$8 = {"root":"Overlay-module_root__snYjz"};
styleInject(css_248z$8);

var Overlay = function (_a) {
    return (React.createElement("div", { className: styles$8.root }, "hello world! I am Overlay"));
};

var css_248z$7 = ".Gallery-module_root__nWKQx {\n  grid-area: gallery;\n}\n\n  @media only screen and (max-width: 900px) {.Gallery-module_root__nWKQx {\n    rid-area: initial;\n    grid-column: auto / span 12;\n    margin-top: 4rem\n}\n  }\n";
var styles$7 = {"root":"Gallery-module_root__nWKQx"};
styleInject(css_248z$7);

var Gallery = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: styles$7.root }, children));
};

var css_248z$6 = ".GridWrapper-module_root__qiLsL {\n  display: grid;\n  grid-template-columns: var(--main-grid);\n  -moz-column-gap: 2rem;\n       column-gap: 2rem;\n  grid-template-areas:\n    'topbar topbar topbar topbar topbar topbar topbar topbar topbar topbar topbar topbar'\n    'sidebar sidebar sidebar sidebar gallery gallery gallery gallery gallery gallery gallery gallery';\n}\n\n  .GridWrapper-module_root__qiLsL.GridWrapper-module_full__bjDtO {\n    grid-template-areas:\n    'topbar topbar topbar topbar topbar topbar topbar topbar topbar topbar topbar topbar'\n    'gallery gallery gallery gallery gallery gallery gallery gallery gallery gallery gallery gallery';\n  }\n";
var styles$6 = {"root":"GridWrapper-module_root__qiLsL","full":"GridWrapper-module_full__bjDtO"};
styleInject(css_248z$6);

var GridWrapper = function (_a) {
    var children = _a.children, full = _a.full;
    return (React.createElement("div", { className: classnames(styles$6.root, full ? styles$6.full : '') }, children));
};

var css_248z$5 = ".SideBar-module_root__ydBTZ {\n  grid-area: sidebar;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 4rem;\n  max-height: calc(100vh - 8rem);\n\n  /* we double up the space here of the grid-gap to provide room to the gallery */\n  padding-right: 10rem;\n  z-index: 15;\n}\n\n  @media only screen and (max-width: 900px) {.SideBar-module_root__ydBTZ {\n    position: relative;\n    grid-area: initial;\n    padding-right: 0;\n    grid-column: auto / span 12\n}\n  }";
var styles$5 = {"root":"SideBar-module_root__ydBTZ"};
styleInject(css_248z$5);

var SideBar = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: styles$5.root }, children));
};

var css_248z$4 = ".SidePanel-module_root__0iNYB {\n  top: 0;\n  color: var(--color-dark);\n  position: relative;\n  z-index: 9;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  left: calc(-1 * min(30vw, 700px) - 20vw);\n  transition: left 0.5s ease;\n  width: 500px;\n  background: var(--color-highlight);\n  border-right: 1px solid var(--color-dark);\n}\n\n  @media only screen and (max-width: 900px) {.SidePanel-module_root__0iNYB {\n    width: 100%\n}\n  }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_abs__K7rS9 .SidePanel-module_innerPanel__vQAVh {\n      height: auto;\n      margin: auto 0;\n    }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_alignment-right__-XaUF {\n    position: absolute;\n    top: 5rem;\n    left: initial;\n    transition: right 0.5s ease;\n    right: calc(-1 * min(30vw, 700px) - 20vw);\n  }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_activePanel__2ATtY {\n    left: 0;\n  }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_activePanel__2ATtY.SidePanel-module_alignment-right__-XaUF {\n      right: 5rem;\n      left: initial;\n    }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_activePanel__2ATtY.SidePanel-module_alignment-right__-XaUF::after {\n        right: calc(-156.3vh + (min(700px, 30vw) / 2));\n        left: initial;\n      }\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh {\n    padding-left: 3rem;\n    padding-right: 3rem;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 900px) {\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh {\n      padding: 2rem\n  }\n    }\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh * > div {\n      margin: auto;\n    }\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh > section:last-child {\n      margin-top: 2rem;\n      display: block;\n    }\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh a {\n      display: block;\n      margin-top: 0.75rem;\n      font-size: 2rem;\n    }\n";
var styles$4 = {"root":"SidePanel-module_root__0iNYB","abs":"SidePanel-module_abs__K7rS9","innerPanel":"SidePanel-module_innerPanel__vQAVh","alignment-right":"SidePanel-module_alignment-right__-XaUF","activePanel":"SidePanel-module_activePanel__2ATtY"};
styleInject(css_248z$4);

var SidePanel = function (_a) {
    var children = _a.children, alignment = _a.alignment, state = _a.state, _b = _a.alignType, alignType = _b === void 0 ? '' : _b;
    return (React.createElement("div", { className: classnames(styles$4[alignType], styles$4.root, styles$4["alignment-".concat(alignment)], state ? styles$4.activePanel : '') },
        React.createElement("div", { className: styles$4.innerPanel }, children)));
};

var css_248z$3 = ".TopBar-module_root__7ZW6c {\n  grid-area: topbar;\n  display: flex;\n  border-bottom: 1px solid var(--border-primary);\n  margin-bottom: 6rem;\n  width: 100%;\n}\n";
var styles$3 = {"root":"TopBar-module_root__7ZW6c"};
styleInject(css_248z$3);

var TopBar = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: styles$3.root }, children));
};

var css_248z$2 = "\n.Header-module_root__zkAdZ {\n  position: relative;\n}\n\nh1 {\n  font-family: degular,sans-serif;\n  font-weight: 200;\n  font-style: normal;\n  font-size: 14rem;\n  line-height: 11rem;\n}\n\nh2 {\n  font-family: degular,sans-serif;\n  font-weight: 600;\n  font-style: normal;\n  font-size: 4.8rem;\n  line-height: 5.2rem;\n}\n\n/* this maps to subtitle */\n\nh3 {\n  font-family: \"SF Compact\", system-ui, sans-serif;\n  font-weight: 600;\n  font-size: 4.4rem;\n  line-height: 4.8rem;\n}\n\nh4 {\n  font-family: \"SF Compact\", system-ui, sans-serif;\n  font-weight: 600;\n  font-size: 3rem;\n  line-height: 3.4rem\n}\n\nh5 {\n  font-family: \"SF Compact\", system-ui, sans-serif;\n  font-weight: 600;\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n";
var styles$2 = {"root":"Header-module_root__zkAdZ"};
styleInject(css_248z$2);

var Header = function (_a) {
    var as = _a.as, children = _a.children;
    var Tag = as ? as : 'h1';
    return (React.createElement(Tag, { className: styles$2.root }, children));
};
Object.assign(Header, styles$2);
Header.documentation = "The Header component does not accept variants and instead utilizes base html tags. This component requires the \"as\" prop to specifiy the tag type.";

var css_248z$1 = "\n.Text-module_root__xduhb {\n  position: relative;\n}\n\n\np {\n  font-family: \"SF Compact\", system-ui, sans-serif;\n  font-weight: 100;\n  line-height: 2.8rem;\n  font-size: 2rem;\n  letter-spacing: 0;\n}\n\n\nstrong {\n  font-family: \"SF Compact\", system-ui, sans-serif;\n  font-weight: bold;\n}\n\n\n.Text-module_variant-small__XJ9xx {\n  font-size: 1.8rem;\n}";
var styles$1 = {"root":"Text-module_root__xduhb","variant-small":"Text-module_variant-small__XJ9xx"};
styleInject(css_248z$1);

var Text = function (_a) {
    var as = _a.as, variant = _a.variant, children = _a.children;
    var Tag = as ? as : 'p';
    var classList = classnames(styles$1["variant-".concat(variant)]);
    return (React.createElement(Tag, { className: classList }, children));
};

var css_248z = "\n.Icon-module_root__91OsV {\n  position: relative;\n}\n";
var styles = {"root":"Icon-module_root__91OsV"};
styleInject(css_248z);

var Icon = function (_a) {
    return (React.createElement("div", { className: styles.root }, "hello world! I am Icon"));
};

export { Button, ButtonGroup, Gallery, GridWrapper, Header, Icon, Menu, Overlay, SidePanel, SideBar as Sidebar, Text, Theme, TopBar };
//# sourceMappingURL=index.js.map
