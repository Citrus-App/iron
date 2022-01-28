(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.comlib = {}, global.React));
})(this, (function (exports, React) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

	var css_248z$9 = ".Button-module_baseButton__OB4cX {\n  background-color: var(--button-default);\n  border-radius: 0;\n  height: 5.5rem;\n  padding: 1rem 1.9rem 1.1rem;\n  color: var(--text-button);\n  display: inline-flex;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n  cursor: pointer;\n  margin: 0;\n  transition: color 0.4s ease, border 0.4s ease;\n\n  font-family: var(--global-font-families-sf-compact);\n  font-weight: var(--global-font-weights-sf-compact-3);\n  font-size: var(--global-font-size-0);\n}\n\n  .Button-module_baseButton__OB4cX:hover {\n    background-color: var(--button-hover)\n  }\n\n  .Button-module_baseButton__OB4cX:focus {\n    background-color: var(--button-pressed);\n  }\n\n.Button-module_inner__boETo {\n  margin: auto;\n  display: flex;\n}\n\n.Button-module_variant-outline__wbE1U {\n  background-color: transparent;\n  border: 1px solid var(--button-outline-default);\n  color: var(--text-button-outline);\n}\n\n.Button-module_variant-outline__wbE1U:hover {\n    background-color: transparent;\n    border: 1px solid var(--button-outline-hover);\n    color: var(--button-outline-hover);\n  }\n";
	var styles$9 = {"baseButton":"Button-module_baseButton__OB4cX","inner":"Button-module_inner__boETo","variant-outline":"Button-module_variant-outline__wbE1U"};
	styleInject(css_248z$9);

	var Button = function (_a) {
	    var children = _a.children, action = _a.action, href = _a.href, variant = _a.variant;
	    var classList = classnames(styles$9.baseButton, styles$9["variant-".concat(variant)]);
	    return (React__default["default"].createElement("a", { className: classList, href: href, onClick: action },
	        React__default["default"].createElement("div", { className: styles$9.inner }, children)));
	};

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
	 * Generated on Fri, 28 Jan 2022 18:40:13 GMT
	 */

	var tokens = {
	  "text-headline": "#1d1d1f",
	  "text-body": "#363638",
	  "text-button": "#ffffff",
	  "text-link": "#14b4dc",
	  "text-success": "#00ad76",
	  "text-critical": "#f1465a",
	  "text-info": "#169bbc",
	  "text-warning": "#c73f00",
	  "text-button-outline": "#818183",
	  "text-secondary": "#818183",
	  "text-button-outline-hover": "#14b4dc",
	  "text-button-outline-pressed": "#17829d",
	  "text-button-outline-disabled": "#b4b4b4",
	  "button": {
	    "fontFamily": "SF Compact",
	    "fontWeight": "Regular",
	    "lineHeight": 32,
	    "fontSize": 16,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "button-outline-default": "#818183",
	  "button-outline-hover": "#14b4dc",
	  "button-outline-pressed": "#17829d",
	  "button-outline-disabled": "#b4b4b4",
	  "icon-white": "#ffffff",
	  "icon-default": "#363638",
	  "icon-accent": "#18697e",
	  "icon-success": "#00ad76",
	  "icon-critical": "#f1465a",
	  "icon-info": "#18697e",
	  "icon-warning": "#c73f00",
	  "icon-background": "#ffffff",
	  "icon-contrast": "#1d1d1f",
	  "surface-wash": "#f3f3f3",
	  "surface-default": "#ffffff",
	  "surface-default-hover": "#f3f3f3",
	  "surface-alt": "#f3f3f3",
	  "surface-alt-hover": "#e6e6e6",
	  "surface-textfield": "#b4b4b4",
	  "surface-accent": "#18697e",
	  "surface-on-accent": "#ffffff",
	  "surface-accent-light": "#c1ebf6",
	  "surface-on-accent-light": "#18697e",
	  "surface-dialog": "#ffffff",
	  "surface-dialog-hover": "#f3f3f3",
	  "surface-info": "#c1ebf6",
	  "surface-success": "#bbf1df",
	  "surface-critical": "#ffe5e7",
	  "surface-warning": "#ffeebe",
	  "surface-toast": "#363638",
	  "surface-toast-error": "#f1465a",
	  "border-default": "#9b9b9b",
	  "border-divider": "#e6e6e6",
	  "border-critical": "#f1465a",
	  "border-accent": "#18697e",
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
	  "font-families-serif": "IvyPresto Display",
	  "font-families-sans": "SF Compact",
	  "font-families-ivypresto-display": "IvyPresto Display",
	  "font-families-sf-compact": "SF Compact",
	  "line-heights-0": 68,
	  "line-heights-1": 48,
	  "line-heights-2": 32,
	  "line-heights-3": 28,
	  "font-weights-serif": "Regular",
	  "font-weights-sans": "Regular",
	  "font-weights-ivypresto-display-0": "Regular",
	  "font-weights-ivypresto-display-1": "Light",
	  "font-weights-sf-compact-2": "Bold",
	  "font-weights-sf-compact-3": "Regular",
	  "font-size-0": 16,
	  "font-size-1": 18,
	  "font-size-2": 20,
	  "font-size-3": 24,
	  "font-size-4": 26,
	  "font-size-5": 40,
	  "font-size-6": 60,
	  "letter-spacing-0": 0,
	  "paragraph-spacing-0": 0,
	  "text-case-none": "none",
	  "text-decoration-none": "none",
	  "header1": {
	    "fontFamily": "IvyPresto Display",
	    "fontWeight": "Regular",
	    "lineHeight": 68,
	    "fontSize": 60,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "header2": {
	    "fontFamily": "IvyPresto Display",
	    "fontWeight": "Regular",
	    "lineHeight": 48,
	    "fontSize": 40,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "h1": {
	    "fontFamily": "IvyPresto Display",
	    "fontWeight": "Light",
	    "lineHeight": 68,
	    "fontSize": 60,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "h2": {
	    "fontFamily": "IvyPresto Display",
	    "fontWeight": "Light",
	    "lineHeight": 48,
	    "fontSize": 40,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "section-header": {
	    "fontFamily": "SF Compact",
	    "fontWeight": "Bold",
	    "lineHeight": 32,
	    "fontSize": 26,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "subtitle": {
	    "fontFamily": "SF Compact",
	    "fontWeight": "Regular",
	    "lineHeight": 32,
	    "fontSize": 24,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "main-body": {
	    "fontFamily": "SF Compact",
	    "fontWeight": "Regular",
	    "lineHeight": 28,
	    "fontSize": 20,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "body-instructions": {
	    "fontFamily": "SF Compact",
	    "fontWeight": "Regular",
	    "lineHeight": 28,
	    "fontSize": 20,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "small-body": {
	    "fontFamily": "SF Compact",
	    "fontWeight": "Regular",
	    "lineHeight": 28,
	    "fontSize": 18,
	    "letterSpacing": 0,
	    "paragraphSpacing": 0,
	    "textCase": "none",
	    "textDecoration": "none"
	  },
	  "grid-gutter-1": "16px",
	  "grid-gutter-2": "24px",
	  "grid-margin-1": "104px",
	  "grid-margin-2": "72px",
	  "spacing-1": 8,
	  "spacing-2": 16,
	  "spacing-3": 24,
	  "spacing-4": 32,
	  "spacing-5": 40,
	  "spacing-6": 48,
	  "spacing-7": 56,
	  "spacing-8": 64,
	  "spacing-9": 72,
	  "spacing-10": 80,
	  "gray-100": "#f3f3f3",
	  "gray-200": "#e6e6e6",
	  "gray-300": "#b4b4b4",
	  "gray-400": "#9b9b9b",
	  "gray-500": "#818183",
	  "gray-600": "#68686a",
	  "gray-700": "#4f4f51",
	  "gray-800": "#363638",
	  "gray-900": "#1d1d1f",
	  "gray-1000": "#000000",
	  "gray-000": "#ffffff",
	  "red-100": "#ffe5e7",
	  "red-200": "#ffc2c6",
	  "red-300": "#ff9ea5",
	  "red-400": "#f96c73",
	  "red-500": "#f1465a",
	  "red-600": "#e32144",
	  "red-700": "#be1332",
	  "red-800": "#990620",
	  "red-900": "#650113",
	  "red-1000": "#320109",
	  "red-000": "#fff5f5",
	  "blue-100": "#c1ebf6",
	  "blue-200": "#96ddef",
	  "blue-300": "#6ad0e9",
	  "blue-400": "#3fc2e2",
	  "blue-500": "#14b4dc",
	  "blue-600": "#169bbc",
	  "blue-700": "#17829d",
	  "blue-800": "#18697e",
	  "blue-900": "#1a4f5e",
	  "blue-1000": "#1b363f",
	  "blue-000": "#ecf9fc",
	  "green-100": "#bbf1df",
	  "green-200": "#8ce7c9",
	  "green-300": "#5eddb4",
	  "green-400": "#2fd39e",
	  "green-500": "#00c988",
	  "green-600": "#00ad76",
	  "green-700": "#007552",
	  "green-800": "#005940",
	  "green-900": "#003d2e",
	  "green-1000": "#00291f",
	  "green-000": "#f3fcf9",
	  "yellow-100": "#ffeebe",
	  "yellow-200": "#ffe397",
	  "yellow-300": "#ffd971",
	  "yellow-400": "#ffce4a",
	  "yellow-500": "#ffc424",
	  "yellow-600": "#ffad1f",
	  "yellow-700": "#fa8900",
	  "yellow-800": "#e55c00",
	  "yellow-900": "#c73f00",
	  "yellow-1000": "#752100",
	  "yellow-000": "#fff8e4",
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
	  "global-text-headline": "#1d1d1f",
	  "global-font-families-serif": "IvyPresto Display",
	  "global-font-families-sans": "SF Compact",
	  "global-font-families-ivypresto-display": "IvyPresto Display",
	  "global-font-families-sf-compact": "SF Compact",
	  "global-line-heights-0": "68",
	  "global-line-heights-1": "48",
	  "global-line-heights-2": "32",
	  "global-line-heights-3": "28",
	  "global-font-weights-serif": "Regular",
	  "global-font-weights-sans": "Regular",
	  "global-font-weights-ivypresto-display-0": "Regular",
	  "global-font-weights-ivypresto-display-1": "Light",
	  "global-font-weights-sf-compact-2": "Bold",
	  "global-font-weights-sf-compact-3": "Regular",
	  "global-font-size-0": "16",
	  "global-font-size-1": "18",
	  "global-font-size-2": "20",
	  "global-font-size-3": "24",
	  "global-font-size-4": "26",
	  "global-font-size-5": "40",
	  "global-font-size-6": "60",
	  "global-letter-spacing-0": "0",
	  "global-paragraph-spacing-0": "0",
	  "global-text-case-none": "none",
	  "global-text-decoration-none": "none",
	  "global-header1": {
	    "fontFamily": "$fontFamilies.ivypresto-display",
	    "fontWeight": "$fontWeights.ivypresto-display-0",
	    "lineHeight": "$lineHeights.0",
	    "fontSize": "$fontSize.6",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-header2": {
	    "fontFamily": "$fontFamilies.ivypresto-display",
	    "fontWeight": "$fontWeights.ivypresto-display-0",
	    "lineHeight": "$lineHeights.1",
	    "fontSize": "$fontSize.5",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-h1": {
	    "fontFamily": "$fontFamilies.ivypresto-display",
	    "fontWeight": "$fontWeights.ivypresto-display-1",
	    "lineHeight": "$lineHeights.0",
	    "fontSize": "$fontSize.6",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-h2": {
	    "fontFamily": "$fontFamilies.ivypresto-display",
	    "fontWeight": "$fontWeights.ivypresto-display-1",
	    "lineHeight": "$lineHeights.1",
	    "fontSize": "$fontSize.5",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-section-header": {
	    "fontFamily": "$fontFamilies.sf-compact",
	    "fontWeight": "$fontWeights.sf-compact-2",
	    "lineHeight": "$lineHeights.2",
	    "fontSize": "$fontSize.4",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-subtitle": {
	    "fontFamily": "$fontFamilies.sf-compact",
	    "fontWeight": "$fontWeights.sf-compact-3",
	    "lineHeight": "$lineHeights.2",
	    "fontSize": "$fontSize.3",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-main-body": {
	    "fontFamily": "$fontFamilies.sf-compact",
	    "fontWeight": "$fontWeights.sf-compact-3",
	    "lineHeight": "$lineHeights.3",
	    "fontSize": "$fontSize.2",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-body-instructions": {
	    "fontFamily": "$fontFamilies.sf-compact",
	    "fontWeight": "$fontWeights.sf-compact-3",
	    "lineHeight": "$lineHeights.3",
	    "fontSize": "$fontSize.2",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-button": {
	    "fontFamily": "$fontFamilies.sf-compact",
	    "fontWeight": "$fontWeights.sf-compact-3",
	    "lineHeight": "$lineHeights.2",
	    "fontSize": "$fontSize.0",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-small-body": {
	    "fontFamily": "$fontFamilies.sf-compact",
	    "fontWeight": "$fontWeights.sf-compact-3",
	    "lineHeight": "$lineHeights.3",
	    "fontSize": "$fontSize.1",
	    "letterSpacing": "$letterSpacing.0",
	    "paragraphSpacing": "$paragraphSpacing.0",
	    "textCase": "$textCase.none",
	    "textDecoration": "$textDecoration.none"
	  },
	  "global-grid-gutter-1": "16px",
	  "global-grid-gutter-2": "24px",
	  "global-grid-margin-1": "104px",
	  "global-grid-margin-2": "72px",
	  "global-spacing-1": "8",
	  "global-spacing-2": "16",
	  "global-spacing-3": "24",
	  "global-spacing-4": "32",
	  "global-spacing-5": "40",
	  "global-spacing-6": "48",
	  "global-spacing-7": "56",
	  "global-spacing-8": "64",
	  "global-spacing-9": "72",
	  "global-spacing-10": "80",
	  "dark-text-headline": "#ffffff",
	  "dark-text-body": "#ffffff",
	  "dark-text-button": "#1d1d1f",
	  "dark-text-button-outline": "#818183",
	  "dark-text-link": "#14b4dc",
	  "dark-text-success": "#00c988",
	  "dark-text-critical": "#f96c73",
	  "dark-text-info": "#14b4dc",
	  "dark-text-warning": "#e55c00",
	  "dark-text-button-outline-hover": "#14b4dc",
	  "dark-text-button-outline-pressed": "#6ad0e9",
	  "dark-text-secondary": "#9b9b9b",
	  "dark-text-button-outline-disabled": "#4f4f51",
	  "dark-button-outline-default": "#818183",
	  "dark-button-outline-pressed": "#6ad0e9",
	  "dark-button-outline-disabled": "#4f4f51",
	  "dark-button-outline-hover": "#14b4dc",
	  "dark-icon-default": "#9b9b9b",
	  "dark-icon-accent": "#14b4dc",
	  "dark-icon-success": "#00c988",
	  "dark-icon-critical": "#f96c73",
	  "dark-icon-info": "#14b4dc",
	  "dark-icon-warning": "#e55c00",
	  "dark-icon-background": "#ffffff",
	  "dark-icon-contrast": "#1d1d1f",
	  "dark-surface-wash": "#000000",
	  "dark-surface-default": "#1d1d1f",
	  "dark-surface-default-hover": "#363638",
	  "dark-surface-alt": "#363638",
	  "dark-surface-alt-hover": "#4f4f51",
	  "dark-surface-textfield": "#4f4f51",
	  "dark-surface-accent": "#14b4dc",
	  "dark-surface-on-accent": "#ffffff",
	  "dark-surface-accent-light": "#1b363f",
	  "dark-surface-on-accent-light": "#ffffff",
	  "dark-surface-dialog": "#363638",
	  "dark-surface-dialog-hover": "#4f4f51",
	  "dark-surface-info": "#18697e",
	  "dark-surface-success": "#005940",
	  "dark-surface-critical": "#be1332",
	  "dark-surface-warning": "#fa8900",
	  "dark-surface-toast": "#4f4f51",
	  "dark-surface-toast-error": "#f96c73",
	  "dark-border-default": "#9b9b9b",
	  "dark-border-divider": "#4f4f51",
	  "dark-border-critical": "#f96c73",
	  "dark-border-accent": "#14b4dc",
	  "dark-docs-shadow": {
	    "color": "#00000026",
	    "type": "dropShadow",
	    "x": "0",
	    "y": "4",
	    "blur": "6",
	    "spread": "0"
	  },
	  "dark-small-15": {
	    "color": "#00000026",
	    "type": "dropShadow",
	    "x": "0",
	    "y": "0",
	    "blur": "30",
	    "spread": "0"
	  },
	  "dark-small-50": {
	    "color": "#00000080",
	    "type": "dropShadow",
	    "x": "0",
	    "y": "0",
	    "blur": "30",
	    "spread": "0"
	  },
	  "dark-large-15": {
	    "color": "#00000026",
	    "type": "dropShadow",
	    "x": "0",
	    "y": "0",
	    "blur": "150",
	    "spread": "0"
	  },
	  "dark-large-85": {
	    "color": "#000000d9",
	    "type": "dropShadow",
	    "x": "0",
	    "y": "0",
	    "blur": "100",
	    "spread": "0"
	  },
	  "dark-extra-large-15": {
	    "color": "#00000026",
	    "type": "dropShadow",
	    "x": "0",
	    "y": "0",
	    "blur": "30",
	    "spread": "0"
	  },
	  "dark-extra-large-100": {
	    "color": "#000000",
	    "type": "dropShadow",
	    "x": "0",
	    "y": "0",
	    "blur": "30",
	    "spread": "0"
	  },
	  "dark-button-default": "#818183",
	  "dark-button-hover": "#14b4dc",
	  "dark-button-pressed": "#6ad0e9",
	  "dark-button-disabled": "#4f4f51",
	  "light-text-headline": "#1d1d1f",
	  "light-text-body": "#363638",
	  "light-text-button": "#ffffff",
	  "light-text-link": "#14b4dc",
	  "light-text-success": "#00ad76",
	  "light-text-critical": "#f1465a",
	  "light-text-info": "#169bbc",
	  "light-text-warning": "#c73f00",
	  "light-text-button-outline": "#818183",
	  "light-text-secondary": "#818183",
	  "light-text-button-outline-hover": "#14b4dc",
	  "light-text-button-outline-pressed": "#17829d",
	  "light-text-button-outline-disabled": "#b4b4b4",
	  "light-button-default": "#818183",
	  "light-button-hover": "#14b4dc",
	  "light-button-pressed": "#17829d",
	  "light-button-disabled": "#b4b4b4",
	  "light-button-outline-default": "#818183",
	  "light-button-outline-hover": "#14b4dc",
	  "light-button-outline-pressed": "#17829d",
	  "light-button-outline-disabled": "#b4b4b4",
	  "light-icon-white": "#ffffff",
	  "light-icon-default": "#363638",
	  "light-icon-accent": "#18697e",
	  "light-icon-success": "#00ad76",
	  "light-icon-critical": "#f1465a",
	  "light-icon-info": "#18697e",
	  "light-icon-warning": "#c73f00",
	  "light-surface-wash": "#f3f3f3",
	  "light-surface-default": "#ffffff",
	  "light-surface-default-hover": "#f3f3f3",
	  "light-surface-alt": "#f3f3f3",
	  "light-surface-alt-hover": "#e6e6e6",
	  "light-surface-textfield": "#b4b4b4",
	  "light-surface-accent": "#18697e",
	  "light-surface-on-accent": "#ffffff",
	  "light-surface-accent-light": "#c1ebf6",
	  "light-surface-on-accent-light": "#18697e",
	  "light-surface-dialog": "#ffffff",
	  "light-surface-dialog-hover": "#f3f3f3",
	  "light-surface-info": "#c1ebf6",
	  "light-surface-success": "#bbf1df",
	  "light-surface-critical": "#ffe5e7",
	  "light-surface-warning": "#ffeebe",
	  "light-surface-toast": "#363638",
	  "light-surface-toast-error": "#f1465a",
	  "light-border-default": "#9b9b9b",
	  "light-border-divider": "#e6e6e6",
	  "light-border-critical": "#f1465a",
	  "light-border-accent": "#18697e"
	};

	// DEV NOTE
	// The below prop will get set 
	// via a global them provider context
	var tempThemeProp = 'light';
	var Theme = function (_a) {
	    var children = _a.children;
	    var themeStyles = {};
	    Object.keys(tokens).map(function (key, index) {
	        if (key.startsWith(tempThemeProp)) {
	            themeStyles["--".concat(key.split("".concat(tempThemeProp, "-"))[1])] = tokens[key];
	        }
	    });
	    return (React__default["default"].createElement("div", { className: "ThemeProvider", style: __assign({}, themeStyles) }, children));
	};

	var css_248z$8 = "\n.Menu-module_root__Hh-vp {\n  position: relative;\n}\n";
	var styles$8 = {"root":"Menu-module_root__Hh-vp"};
	styleInject(css_248z$8);

	var Menu = function (_a) {
	    return (React__default["default"].createElement("div", { className: styles$8.root }, "hello world! I am Menu"));
	};

	var css_248z$7 = "\n.Overlay-module_root__snYjz {\n  position: relative;\n}\n";
	var styles$7 = {"root":"Overlay-module_root__snYjz"};
	styleInject(css_248z$7);

	var Overlay = function (_a) {
	    return (React__default["default"].createElement("div", { className: styles$7.root }, "hello world! I am Overlay"));
	};

	var css_248z$6 = "\n.Card-module_root__c9KvZ {\n  position: relative;\n}\n";
	var styles$6 = {"root":"Card-module_root__c9KvZ"};
	styleInject(css_248z$6);

	var Card = function (_a) {
	    return (React__default["default"].createElement("div", { className: styles$6.root }, "hello world! I am Card"));
	};

	var css_248z$5 = "\n.Grid-module_root__yvBn6 {\n  position: relative;\n}\n";
	var styles$5 = {"root":"Grid-module_root__yvBn6"};
	styleInject(css_248z$5);

	var Grid = function (_a) {
	    return (React__default["default"].createElement("div", { className: styles$5.root }, "hello world! I am Grid"));
	};

	var css_248z$4 = "\n.SideBar-module_root__ydBTZ {\n  position: relative;\n}\n";
	var styles$4 = {"root":"SideBar-module_root__ydBTZ"};
	styleInject(css_248z$4);

	var SideBar = function (_a) {
	    return (React__default["default"].createElement("div", { className: styles$4.root }, "hello world! I am SideBar"));
	};

	var css_248z$3 = "\n.Content-module_root__58Ltu {\n  position: relative;\n}\n";
	var styles$3 = {"root":"Content-module_root__58Ltu"};
	styleInject(css_248z$3);

	var Content = function (_a) {
	    return (React__default["default"].createElement("div", { className: styles$3.root }, "hello world! I am Content"));
	};

	var css_248z$2 = "\n.Header-module_root__zkAdZ {\n  position: relative;\n}\n";
	var styles$2 = {"root":"Header-module_root__zkAdZ"};
	styleInject(css_248z$2);

	var Header = function (_a) {
	    return (React__default["default"].createElement("div", { className: styles$2.root }, "hello world! I am Header"));
	};

	var css_248z$1 = "\n.Text-module_root__xduhb {\n  position: relative;\n}\n";
	var styles$1 = {"root":"Text-module_root__xduhb"};
	styleInject(css_248z$1);

	var Text = function (_a) {
	    return (React__default["default"].createElement("div", { className: styles$1.root }, "hello world! I am Text"));
	};

	var css_248z = "\n.Icon-module_root__91OsV {\n  position: relative;\n}\n";
	var styles = {"root":"Icon-module_root__91OsV"};
	styleInject(css_248z);

	var Icon = function (_a) {
	    return (React__default["default"].createElement("div", { className: styles.root }, "hello world! I am Icon"));
	};

	exports.Button = Button;
	exports.Card = Card;
	exports.Content = Content;
	exports.Grid = Grid;
	exports.Header = Header;
	exports.Icon = Icon;
	exports.Menu = Menu;
	exports.Overlay = Overlay;
	exports.SideBar = SideBar;
	exports.Text = Text;
	exports.Theme = Theme;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
