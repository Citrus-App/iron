import React from 'react';

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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

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

var responsiveOpts = ['sm', 'md', 'lg', 'xl', 'default'];
var getResponsiveValues = function (prop, varValue) {
    var stylesToReturn = {};
    if (typeof prop === 'object') {
        responsiveOpts.map(function (opt) {
            if (prop[opt]) {
                if (opt == 'default') {
                    stylesToReturn["".concat(varValue)] = "var(--spacing-".concat(prop[opt], ")");
                }
                else {
                    stylesToReturn["".concat(varValue, "-").concat(opt)] = "var(--spacing-".concat(prop[opt], ")");
                }
            }
        });
    }
    else {
        if (prop) {
            stylesToReturn["".concat(varValue)] = "var(--spacing-".concat((prop), ")");
        }
    }
    return stylesToReturn;
};

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

var css_248z$f = ".paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n  --padding-xl: var(--padding);\n  --padding-lg: var(--padding);\n  --padding-md: var(--padding);\n  --padding-sm: var(--padding);\n  padding: var(--padding);\n}\n  @media only screen and (max-width: 1700px) {.paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n    padding: var(--padding-xl)\n}\n  }\n  @media only screen and (max-width: 1280px) {.paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n    padding: var(--padding-lg)\n}\n  }\n  @media only screen and (max-width: 986px) {.paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n    padding: var(--padding-md)\n}\n  }\n  @media only screen and (max-width: 400px) {.paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n    padding: var(--padding-sm)\n}\n  }\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n  padding-bottom: var(--padding-bottom);\n  --padding-bottom-xl: var(--padding-bottom);\n  --padding-bottom-lg: var(--padding-bottom);\n  --padding-bottom-md: var(--padding-bottom);\n  --padding-bottom-sm: var(--padding-bottom);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n    padding-bottom: var(--padding-bottom-xl)\n}\n  }\n\n@media only screen and (max-width: 1280px) {\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n    padding-bottom: var(--padding-bottom-md)\n}\n  }\n\n@media only screen and (max-width: 986px) {\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n    padding-bottom: var(--padding-bottom-md)\n}\n  }\n\n@media only screen and (max-width: 400px) {\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n    padding-bottom: var(--padding-bottom-sm)\n}\n  }\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {  \n  padding-left: var(--padding-left);\n  --padding-left-xl: var(--padding-left);\n  --padding-left-lg: var(--padding-left);\n  --padding-left-md: var(--padding-left);\n  --padding-left-sm: var(--padding-left);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {\n    padding-left: var(--padding-left-xl)\n}\n  }\n\n@media only screen and (max-width: 1280px) {\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {\n    padding-left: var(--padding-left-lg)\n}\n  }\n\n@media only screen and (max-width: 986px) {\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {\n    padding-left: var(--padding-left-md)\n}\n  }\n\n@media only screen and (max-width: 400px) {\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {\n    padding-left: var(--padding-left-sm)\n}\n  }\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {  \n padding-right: var(--padding-right);\n  --padding-right-xl: var(--padding-right);\n  --padding-right-lg: var(--padding-right);\n  --padding-right-md: var(--padding-right);\n  --padding-right-sm: var(--padding-right);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {\n   padding-right: var(--padding-right-xl)\n}\n }\n\n@media only screen and (max-width: 1280px) {\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {\n   padding-right: var(--padding-right-lg)\n}\n }\n\n@media only screen and (max-width: 986px) {\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {\n   padding-right: var(--padding-right-md)\n}\n }\n\n@media only screen and (max-width: 400px) {\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {\n   padding-right: var(--padding-right-sm)\n}\n }\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n padding-top: var(--padding-top);\n  --padding-top-xl: var(--padding-top);\n  --padding-top-lg: var(--padding-top);\n  --padding-top-md: var(--padding-top);\n  --padding-top-sm: var(--padding-top);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n   padding-top: var(--padding-top-xl)\n}\n }\n\n@media only screen and (max-width: 1280px) {\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n   padding-top: var(--padding-top-lg)\n}\n }\n\n@media only screen and (max-width: 986px) {\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n   padding-top: var(--padding-top-md)\n}\n }\n\n@media only screen and (max-width: 400px) {\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n   padding-top: var(--padding-top-sm)\n}\n }";
var styles$f = {"p":"paddings-module_p__aOr-7","pb":"paddings-module_pb__18-tv","pl":"paddings-module_pl__YHK6K","pr":"paddings-module_pr__sJaWq","pt":"paddings-module_pt__Am0Ns"};
styleInject(css_248z$f);

function getPaddings(_a) {
    var p = _a.p, pb = _a.pb, pl = _a.pl, pr = _a.pr, pt = _a.pt;
    return [
        p ? styles$f['p'] : null,
        pb ? styles$f['pb'] : null,
        pl ? styles$f['pl'] : null,
        pr ? styles$f['pr'] : null,
        pt ? styles$f['pt'] : null
    ];
}
function getPaddingsStyles(_a) {
    var p = _a.p, pb = _a.pb, pl = _a.pl, pr = _a.pr, pt = _a.pt;
    var paddings = __assign(__assign(__assign(__assign(__assign({}, getResponsiveValues(p, '--padding')), getResponsiveValues(pl, '--padding-left')), getResponsiveValues(pr, '--padding-right')), getResponsiveValues(pb, '--padding-bottom')), getResponsiveValues(pt, '--padding-top'));
    return paddings;
}

var css_248z$e = ".margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n  --margin-xl: var(--margin);\n  --margin-lg: var(--margin);\n  --margin-md: var(--margin);\n  --margin-sm: var(--margin);\n  margin: var(--margin);\n}\n  @media only screen and (max-width: 1700px) {.margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n    margin: var(--margin-xl)\n}\n  }\n  @media only screen and (max-width: 1280px) {.margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n    margin: var(--margin-lg)\n}\n  }\n  @media only screen and (max-width: 986px) {.margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n    margin: var(--margin-md)\n}\n  }\n  @media only screen and (max-width: 400px) {.margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n    margin: var(--margin-sm)\n}\n  }\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n  margin-bottom: var(--margin-bottom);\n  --margin-bottom-xl: var(--margin-bottom);\n  --margin-bottom-lg: var(--margin-bottom);\n  --margin-bottom-md: var(--margin-bottom);\n  --margin-bottom-sm: var(--margin-bottom);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n    margin-bottom: var(--margin-bottom-xl)\n}\n  }\n\n@media only screen and (max-width: 1280px) {\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n    margin-bottom: var(--margin-bottom-md)\n}\n  }\n\n@media only screen and (max-width: 986px) {\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n    margin-bottom: var(--margin-bottom-md)\n}\n  }\n\n@media only screen and (max-width: 400px) {\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n    margin-bottom: var(--margin-bottom-sm)\n}\n  }\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {  \n  margin-left: var(--margin-left);\n  --margin-left-xl: var(--margin-left);\n  --margin-left-lg: var(--margin-left);\n  --margin-left-md: var(--margin-left);\n  --margin-left-sm: var(--margin-left);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {\n    margin-left: var(--margin-left-xl)\n}\n  }\n\n@media only screen and (max-width: 1280px) {\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {\n    margin-left: var(--margin-left-lg)\n}\n  }\n\n@media only screen and (max-width: 986px) {\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {\n    margin-left: var(--margin-left-md)\n}\n  }\n\n@media only screen and (max-width: 400px) {\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {\n    margin-left: var(--margin-left-sm)\n}\n  }\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {  \n margin-right: var(--margin-right);\n  --margin-right-xl: var(--margin-right);\n  --margin-right-lg: var(--margin-right);\n  --margin-right-md: var(--margin-right);\n  --margin-right-sm: var(--margin-right);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {\n   margin-right: var(--margin-right-xl)\n}\n }\n\n@media only screen and (max-width: 1280px) {\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {\n   margin-right: var(--margin-right-lg)\n}\n }\n\n@media only screen and (max-width: 986px) {\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {\n   margin-right: var(--margin-right-md)\n}\n }\n\n@media only screen and (max-width: 400px) {\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {\n   margin-right: var(--margin-right-sm)\n}\n }\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n margin-top: var(--margin-top);\n  --margin-top-xl: var(--margin-top);\n  --margin-top-lg: var(--margin-top);\n  --margin-top-md: var(--margin-top);\n  --margin-top-sm: var(--margin-top);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n   margin-top: var(--margin-top-xl)\n}\n }\n\n@media only screen and (max-width: 1280px) {\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n   margin-top: var(--margin-top-lg)\n}\n }\n\n@media only screen and (max-width: 986px) {\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n   margin-top: var(--margin-top-md)\n}\n }\n\n@media only screen and (max-width: 400px) {\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n   margin-top: var(--margin-top-sm)\n}\n }";
var styles$e = {"m":"margins-module_m__PH27d","mb":"margins-module_mb__H0D5-","ml":"margins-module_ml__KGXjp","mr":"margins-module_mr__p3-qB","mt":"margins-module_mt__hdL7G"};
styleInject(css_248z$e);

function getMargins(_a) {
    var m = _a.m, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt;
    return [
        m ? styles$e["m"] : null,
        mb ? styles$e["mb"] : null,
        ml ? styles$e["ml"] : null,
        mr ? styles$e["mr"] : null,
        mt ? styles$e["mt"] : null
    ];
}
function getMarginsStyles(_a) {
    var m = _a.m, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt;
    var margins = __assign(__assign(__assign(__assign(__assign({}, getResponsiveValues(m, '--margin')), getResponsiveValues(ml, '--margin-left')), getResponsiveValues(mr, '--margin-right')), getResponsiveValues(mb, '--margin-bottom')), getResponsiveValues(mt, '--margin-top'));
    return margins;
}

var css_248z$d = ".coords-module_coords-top__ARhTf, body *.coords-module_coords-top__ARhTf {\n    top: var(--coordTop);\n  }\n  .coords-module_coords-left__fhcnM, body *.coords-module_coords-left__fhcnM {\n    left: var(--coordLeft);\n  }\n  .coords-module_coords-right__5Fe8-, body *.coords-module_coords-right__5Fe8- {\n    right: var(--coordRight);\n  }\n  .coords-module_coords-bottom__nwDJx, body *.coords-module_coords-bottom__nwDJx {\n    bottom: var(--coordBottom);\n  }";
var styles$d = {"coords-top":"coords-module_coords-top__ARhTf","coords-left":"coords-module_coords-left__fhcnM","coords-right":"coords-module_coords-right__5Fe8-","coords-bottom":"coords-module_coords-bottom__nwDJx"};
styleInject(css_248z$d);

function getCoords(_a) {
    var props = _a.props;
    return [
        props.top ? styles$d["coords-top"] : null,
        props.left ? styles$d["coords-left"] : null,
        props.right ? styles$d["coords-right"] : null,
        props.bottom ? styles$d["coords-bottom"] : null,
    ];
}
function getCoordsStyle(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        '--coordTop': top,
        '--coordLeft': left,
        '--coordRight': right,
        '--coordBottom': bottom,
    };
}

var css_248z$c = ".Button-module_baseButton__OB4cX {\n  background-color: var(--button-default);\n  border-radius: 0;\n  line-height: 3rem;\n  color: var(--text-button);\n  display: inline-flex;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  margin: 0;\n  transition: color 0.4s ease, border 0.4s ease;\n\n  font-family: var(--font-families-sf-compact);\n  font-weight: var(--font-weights-sf-compact-3);\n  font-size: calc(var(--font-size-0) * 0.1rem);\n}\n\n  .Button-module_baseButton__OB4cX:hover {\n    background-color: var(--button-hover)\n  }\n\n  .Button-module_baseButton__OB4cX:focus {\n    /*background-color: var(--button-pressed);*/\n  }\n\n  .Button-module_baseButton__OB4cX:disabled {\n    pointer-events: none;\n  }\n\n.Button-module_inner__boETo {\n  margin: auto;\n  display: flex;\n}\n\n.Button-module_variant-outline__wbE1U {\n  background: transparent;\n  border: 1px solid var(--border-default);\n  color: var(--text-body);\n}\n\n.Button-module_variant-outline__wbE1U:hover {\n    border: 1px solid var(--button-hover);\n    color: var(--button-color-hover);\n  }\n\n.Button-module_variant-outline__wbE1U:hover * {\n    stroke: var(--button-color-hover);\n    color: var(--button-color-hover);\n  }\n\n.Button-module_variant-outline__wbE1U:disabled {\n    color: var(--button-outline-disabled);\n    border: 1px solid var(--button-outline-disabled);\n  }\n\n.Button-module_variant-outline__wbE1U:disabled * {\n      color: var(--button-outline-disabled);\n      stroke: var(--button-outline-disabled);\n    }\n\n.Button-module_variant-bare__-ig32 {\n  background-color: transparent;\n  border: 0 none;\n  color: var(--text-body);\n}\n\n.Button-module_variant-bare__-ig32:hover {\n    background-color: transparent;\n     border: 0 none;\n  }\n";
var styles$c = {"baseButton":"Button-module_baseButton__OB4cX","inner":"Button-module_inner__boETo","variant-outline":"Button-module_variant-outline__wbE1U","variant-bare":"Button-module_variant-bare__-ig32"};
styleInject(css_248z$c);

var Button = function (_a) {
    var children = _a.children, action = _a.action, variant = _a.variant, disabled = _a.disabled, type = _a.type, m = _a.m, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt, p = _a.p, pb = _a.pb, pl = _a.pl, pr = _a.pr, pt = _a.pt, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    var classList = classnames.apply(void 0, __spreadArray(__spreadArray(__spreadArray(__spreadArray([], getCoords({
        props: {
            top: top,
            left: left,
            right: right,
            bottom: bottom
        }
    }), false), getMargins({
        m: m,
        mb: mb,
        ml: ml,
        mr: mr,
        mt: mt
    }), false), getPaddings({
        p: p,
        pb: pb,
        pl: pl,
        pr: pr,
        pt: pt
    }), false), [styles$c.baseButton,
        styles$c["variant-".concat(variant)]], false));
    type = type !== null && type !== void 0 ? type : 'button';
    return (React.createElement("button", { style: __assign(__assign(__assign({}, getCoordsStyle({ top: top, left: left, right: right, bottom: bottom })), getMarginsStyles({ m: m, mb: mb, ml: ml, mr: mr, mt: mt })), getPaddingsStyles({ p: p, pb: pb, pl: pl, pr: pr, pt: pt })), className: classList, onClick: action, disabled: disabled, type: type },
        React.createElement("div", { className: styles$c.inner }, children)));
};
Button.documentation = "The Button component accepts children for strings, action for (), href for link, and variant for our types defined in Figma";

var css_248z$b = ".ButtonGroup-module_baseButtonGroup__G5x-4 {\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow:column;\n  -moz-column-gap: 1.6rem;\n       column-gap: 1.6rem;\n}\n";
var styles$b = {"baseButtonGroup":"ButtonGroup-module_baseButtonGroup__G5x-4"};
styleInject(css_248z$b);

var ButtonGroup = function (_a) {
    var children = _a.children;
    var classList = classnames(styles$b.baseButtonGroup);
    return (React.createElement("div", { className: classList }, children));
};
ButtonGroup.documentation = "The Button Group component accepts button children";

/**
 * Do not edit directly
 * Generated on Fri, 13 May 2022 03:30:08 GMT
 */
var Tokens = {
  "global-text-headline": "#1d1d1f",
  "global-font-families-serif": "ivypresto-display",
  "global-font-families-degular": "degular,sans-serif",
  "global-font-families-sans": "SF Compact, -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
  "global-font-families-ivypresto-display": "ivypresto-display",
  "global-font-families-sf-compact": "SF Compact, -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
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
  "global-font-size-0": "1.3rem",
  "global-font-size-1": "1.8rem",
  "global-font-size-2": "2rem",
  "global-font-size-3": "2.4rem",
  "global-font-size-4": "2.6rem",
  "global-font-size-5": "4rem",
  "global-font-size-6": "6rem",
  "global-letter-spacing-0": "0",
  "global-paragraph-spacing-0": "0",
  "global-text-case-none": "none",
  "global-text-decoration-none": "none",
  "global-grid-gutter-1": "1.6rem",
  "global-grid-gutter-2": "2.4rem",
  "global-grid-margin-1": "10.4rem",
  "global-grid-margin-2": "7.2rem",
  "global-spacing-1": "0.8rem",
  "global-spacing-2": "1.6rem",
  "global-spacing-3": "2.4rem",
  "global-spacing-4": "3.2rem",
  "global-spacing-5": "4rem",
  "global-spacing-6": "4.8rem",
  "global-spacing-7": "5.6rem",
  "global-spacing-8": "6.4rem",
  "global-spacing-9": "7.2rem",
  "global-spacing-10": "8rem",
  "global-spacing-auto": "auto",
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
  "dark-button-default": "#818183",
  "dark-button-hover": "#fff",
  "dark-button-pressed": "#6ad0e9",
  "dark-button-disabled": "#4f4f51",
  "dark-button-color-hover": "#000000",
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
  "light-button-hover": "#000",
  "light-button-pressed": "#17829d",
  "light-button-disabled": "#b4b4b4",
  "light-button-color-hover": "#ffffff",
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

var setTheme = function (mode) {
    var themeStyles = {};
    Object.keys(Tokens).map(function (key, index) {
        if (key.startsWith(mode)) {
            themeStyles["--".concat(key.split("".concat(mode, "-"))[1])] = Tokens[key];
        }
        else if (key.startsWith('global')) {
            themeStyles["--".concat(key.split('global-')[1])] = Tokens[key];
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

var css_248z$a = "\n.Menu-module_root__Hh-vp {\n  position: relative;\n}\n";
var styles$a = {"root":"Menu-module_root__Hh-vp"};
styleInject(css_248z$a);

var Menu = function (_a) {
    return (React.createElement("div", { className: styles$a.root }, "hello world! I am Menu"));
};

var css_248z$9 = "\n.Overlay-module_root__snYjz {\n  position: relative;\n}\n";
var styles$9 = {"root":"Overlay-module_root__snYjz"};
styleInject(css_248z$9);

var Overlay = function (_a) {
    return (React.createElement("div", { className: styles$9.root }, "hello world! I am Overlay"));
};

var css_248z$8 = "\n.Card-module_root__c9KvZ {\n  position: relative;\n}\n";
var styles$8 = {"root":"Card-module_root__c9KvZ"};
styleInject(css_248z$8);

var Card = function (_a) {
    return (React.createElement("div", { className: styles$8.root }, "hello world! I am Card"));
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

var css_248z$5 = ".SideBar-module_root__ydBTZ {\n  grid-area: sidebar;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 4rem;\n  max-height: calc(100vh - 8rem);\n  padding-right: 10rem;\n  z-index: 15;\n}\n\n  @media only screen and (max-width: 900px) {.SideBar-module_root__ydBTZ {\n    position: relative;\n    grid-area: initial;\n    padding-right: 0;\n    grid-column: auto / span 12\n}\n  }";
var styles$5 = {"root":"SideBar-module_root__ydBTZ"};
styleInject(css_248z$5);

var SideBar = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: styles$5.root }, children));
};

var css_248z$4 = ".SidePanel-module_root__0iNYB {\n  top: 0;\n  color: var(--color-dark);\n  position: relative;\n  z-index: 9;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  left: calc(-1 * min(30vw, 700px) - 20vw);\n  transition: left 0.5s ease;\n  width: 500px;\n  background: var(--color-highlight);\n  border-right: 1px solid var(--color-dark);\n}\n\n  @media only screen and (max-width: 900px) {.SidePanel-module_root__0iNYB {\n    width: 100%;\n    border-right: 0\n}\n  }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_abs__K7rS9 .SidePanel-module_innerPanel__vQAVh {\n      height: auto;\n      margin: auto 0;\n    }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_alignment-right__-XaUF {\n    position: absolute;\n    top: 5rem;\n    left: initial;\n    transition: right 0.5s ease;\n    right: calc(-1 * min(30vw, 700px) - 20vw);\n  }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_activePanel__2ATtY {\n    left: 0;\n  }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_activePanel__2ATtY.SidePanel-module_alignment-right__-XaUF {\n      right: 5rem;\n      left: initial;\n    }\n\n  .SidePanel-module_root__0iNYB.SidePanel-module_activePanel__2ATtY.SidePanel-module_alignment-right__-XaUF::after {\n        right: calc(-156.3vh + (min(700px, 30vw) / 2));\n        left: initial;\n      }\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh {\n    padding-left: 3rem;\n    padding-right: 3rem;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 900px) {\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh {\n      padding: 2rem\n  }\n    }\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh * > div {\n      margin: auto;\n    }\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh > section:last-child {\n      margin-top: 2rem;\n      display: block;\n    }\n\n  .SidePanel-module_root__0iNYB .SidePanel-module_innerPanel__vQAVh a {\n      display: block;\n      margin-top: 0.75rem;\n      font-size: 2rem;\n    }\n";
var styles$4 = {"root":"SidePanel-module_root__0iNYB","abs":"SidePanel-module_abs__K7rS9","innerPanel":"SidePanel-module_innerPanel__vQAVh","alignment-right":"SidePanel-module_alignment-right__-XaUF","activePanel":"SidePanel-module_activePanel__2ATtY"};
styleInject(css_248z$4);

var SidePanel = function (_a) {
    var children = _a.children, alignment = _a.alignment, state = _a.state, _b = _a.alignType, alignType = _b === void 0 ? '' : _b, m = _a.m, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt, p = _a.p, pb = _a.pb, pl = _a.pl, pr = _a.pr, pt = _a.pt, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return (React.createElement("div", { style: __assign(__assign(__assign({}, getCoordsStyle({ top: top, left: left, right: right, bottom: bottom })), getMarginsStyles({ m: m, mb: mb, ml: ml, mr: mr, mt: mt })), getPaddingsStyles({ p: p, pb: pb, pl: pl, pr: pr, pt: pt })), className: classnames.apply(void 0, __spreadArray(__spreadArray(__spreadArray(__spreadArray([], getCoords({
            props: {
                top: top,
                left: left,
                right: right,
                bottom: bottom
            }
        }), false), getMargins({
            props: {
                m: m,
                mb: mb,
                ml: ml,
                mr: mr,
                mt: mt
            }
        }), false), getPaddings({
            props: {
                p: p,
                pb: pb,
                pl: pl,
                pr: pr,
                pt: pt
            }
        }), false), [styles$4[alignType],
            styles$4["alignment-".concat(alignment)],
            state ? styles$4.activePanel : '',
            styles$4.root], false)) },
        React.createElement("div", { className: styles$4.innerPanel }, children)));
};

var css_248z$3 = ".TopBar-module_root__7ZW6c {\n  grid-area: topbar;\n  display: flex;\n  border-bottom: 1px solid var(--border-default);\n  margin-bottom: 6rem;\n  width: 100%;\n}\n";
var styles$3 = {"root":"TopBar-module_root__7ZW6c"};
styleInject(css_248z$3);

var TopBar = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: styles$3.root }, children));
};

var css_248z$2 = "\n.Header-module_root__zkAdZ {\n  position: relative;\n}\n\nh1 {\n  font-family: var(--font-families-degular);\n  font-weight: 200;\n  font-style: normal;\n  font-size: 14rem;\n  line-height: 11rem;\n}\n\nh2 {\n  font-family: var(--font-families-degular);\n  font-weight: 600;\n  font-style: normal;\n  font-size: 4.8rem;\n  line-height: 5.2rem;\n}\n\nh3 {\n  font-family: var(--font-families-sf-compact);\n  font-weight: 600;\n  font-size: 4.4rem;\n  line-height: 4.8rem;\n}\n\nh4 {\n  font-family: var(--font-families-sf-compact);\n  font-weight: 600;\n  font-size: 3rem;\n  line-height: 3.4rem\n}\n\nh5 {\n  font-family: var(--font-families-sf-compact);\n  font-weight: 600;\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n";
var styles$2 = {"root":"Header-module_root__zkAdZ"};
styleInject(css_248z$2);

var Header = function (_a) {
    var as = _a.as, children = _a.children;
    var Tag = as ? as : 'h1';
    return (React.createElement(Tag, { className: styles$2.root }, children));
};
Object.assign(Header, styles$2);
Header.documentation = "The Header component does not accept variants and instead utilizes base html tags. This component requires the \"as\" prop to specifiy the tag type.";

var css_248z$1 = ".Text-module_root__xduhb {\n  position: relative;\n}\n\np {\n  font-weight: 100;\n  line-height: 2.8rem;\n  font-size: 2rem;\n  letter-spacing: 0;\n}\n\nstrong {\n  font-weight: bold;\n}\n\n.Text-module_variant-small__XJ9xx {\n  font-size: 1.8rem;\n}";
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

export { Button, ButtonGroup, Card, Gallery, GridWrapper, Header, Icon, Menu, Overlay, SidePanel, SideBar as Sidebar, Text, Theme, TopBar };
//# sourceMappingURL=index.js.map
