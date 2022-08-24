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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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
            stylesToReturn["".concat(varValue)] = "var(--spacing-".concat(prop, ")");
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

var css_248z$h = ".paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n  --padding-xl: var(--padding);\n  --padding-lg: var(--padding);\n  --padding-md: var(--padding);\n  --padding-sm: var(--padding);\n  padding: var(--padding);\n}\n  @media only screen and (max-width: 1700px) {.paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n    padding: var(--padding-xl)\n}\n  }\n  @media only screen and (max-width: 1280px) {.paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n    padding: var(--padding-lg)\n}\n  }\n  @media only screen and (max-width: 986px) {.paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n    padding: var(--padding-md)\n}\n  }\n  @media only screen and (max-width: 400px) {.paddings-module_p__aOr-7,\nbody *.paddings-module_p__aOr-7 {\n    padding: var(--padding-sm)\n}\n  }\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n  padding-bottom: var(--padding-bottom);\n  --padding-bottom-xl: var(--padding-bottom);\n  --padding-bottom-lg: var(--padding-bottom);\n  --padding-bottom-md: var(--padding-bottom);\n  --padding-bottom-sm: var(--padding-bottom);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n    padding-bottom: var(--padding-bottom-xl)\n}\n  }\n\n@media only screen and (max-width: 1280px) {\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n    padding-bottom: var(--padding-bottom-md)\n}\n  }\n\n@media only screen and (max-width: 986px) {\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n    padding-bottom: var(--padding-bottom-md)\n}\n  }\n\n@media only screen and (max-width: 400px) {\n\n.paddings-module_pb__18-tv,\nbody *.paddings-module_pb__18-tv {\n    padding-bottom: var(--padding-bottom-sm)\n}\n  }\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {  \n  padding-left: var(--padding-left);\n  --padding-left-xl: var(--padding-left);\n  --padding-left-lg: var(--padding-left);\n  --padding-left-md: var(--padding-left);\n  --padding-left-sm: var(--padding-left);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {\n    padding-left: var(--padding-left-xl)\n}\n  }\n\n@media only screen and (max-width: 1280px) {\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {\n    padding-left: var(--padding-left-lg)\n}\n  }\n\n@media only screen and (max-width: 986px) {\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {\n    padding-left: var(--padding-left-md)\n}\n  }\n\n@media only screen and (max-width: 400px) {\n\n.paddings-module_pl__YHK6K,\nbody *.paddings-module_pl__YHK6K {\n    padding-left: var(--padding-left-sm)\n}\n  }\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {  \n padding-right: var(--padding-right);\n  --padding-right-xl: var(--padding-right);\n  --padding-right-lg: var(--padding-right);\n  --padding-right-md: var(--padding-right);\n  --padding-right-sm: var(--padding-right);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {\n   padding-right: var(--padding-right-xl)\n}\n }\n\n@media only screen and (max-width: 1280px) {\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {\n   padding-right: var(--padding-right-lg)\n}\n }\n\n@media only screen and (max-width: 986px) {\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {\n   padding-right: var(--padding-right-md)\n}\n }\n\n@media only screen and (max-width: 400px) {\n\n.paddings-module_pr__sJaWq,\nbody *.paddings-module_pr__sJaWq {\n   padding-right: var(--padding-right-sm)\n}\n }\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n padding-top: var(--padding-top);\n  --padding-top-xl: var(--padding-top);\n  --padding-top-lg: var(--padding-top);\n  --padding-top-md: var(--padding-top);\n  --padding-top-sm: var(--padding-top);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n   padding-top: var(--padding-top-xl)\n}\n }\n\n@media only screen and (max-width: 1280px) {\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n   padding-top: var(--padding-top-lg)\n}\n }\n\n@media only screen and (max-width: 986px) {\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n   padding-top: var(--padding-top-md)\n}\n }\n\n@media only screen and (max-width: 400px) {\n\n.paddings-module_pt__Am0Ns,\nbody *.paddings-module_pt__Am0Ns {\n   padding-top: var(--padding-top-sm)\n}\n }";
var styles$f = {"p":"paddings-module_p__aOr-7","pb":"paddings-module_pb__18-tv","pl":"paddings-module_pl__YHK6K","pr":"paddings-module_pr__sJaWq","pt":"paddings-module_pt__Am0Ns"};
styleInject(css_248z$h);

function getPaddings(_a) {
    var p = _a.p, pb = _a.pb, pl = _a.pl, pr = _a.pr, pt = _a.pt;
    return [
        p ? styles$f['p'] : null,
        pb ? styles$f['pb'] : null,
        pl ? styles$f['pl'] : null,
        pr ? styles$f['pr'] : null,
        pt ? styles$f['pt'] : null,
    ];
}
function getPaddingsStyles(_a) {
    var p = _a.p, pb = _a.pb, pl = _a.pl, pr = _a.pr, pt = _a.pt;
    var paddings = __assign(__assign(__assign(__assign(__assign({}, getResponsiveValues(p, '--padding')), getResponsiveValues(pl, '--padding-left')), getResponsiveValues(pr, '--padding-right')), getResponsiveValues(pb, '--padding-bottom')), getResponsiveValues(pt, '--padding-top'));
    return paddings;
}

var css_248z$g = ".margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n  --margin-xl: var(--margin);\n  --margin-lg: var(--margin);\n  --margin-md: var(--margin);\n  --margin-sm: var(--margin);\n  margin: var(--margin);\n}\n  @media only screen and (max-width: 1700px) {.margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n    margin: var(--margin-xl)\n}\n  }\n  @media only screen and (max-width: 1280px) {.margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n    margin: var(--margin-lg)\n}\n  }\n  @media only screen and (max-width: 986px) {.margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n    margin: var(--margin-md)\n}\n  }\n  @media only screen and (max-width: 400px) {.margins-module_m__PH27d,\nbody *.margins-module_m__PH27d {\n    margin: var(--margin-sm)\n}\n  }\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n  margin-bottom: var(--margin-bottom);\n  --margin-bottom-xl: var(--margin-bottom);\n  --margin-bottom-lg: var(--margin-bottom);\n  --margin-bottom-md: var(--margin-bottom);\n  --margin-bottom-sm: var(--margin-bottom);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n    margin-bottom: var(--margin-bottom-xl)\n}\n  }\n\n@media only screen and (max-width: 1280px) {\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n    margin-bottom: var(--margin-bottom-md)\n}\n  }\n\n@media only screen and (max-width: 986px) {\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n    margin-bottom: var(--margin-bottom-md)\n}\n  }\n\n@media only screen and (max-width: 400px) {\n\n.margins-module_mb__H0D5-,\nbody *.margins-module_mb__H0D5- {\n    margin-bottom: var(--margin-bottom-sm)\n}\n  }\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {  \n  margin-left: var(--margin-left);\n  --margin-left-xl: var(--margin-left);\n  --margin-left-lg: var(--margin-left);\n  --margin-left-md: var(--margin-left);\n  --margin-left-sm: var(--margin-left);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {\n    margin-left: var(--margin-left-xl)\n}\n  }\n\n@media only screen and (max-width: 1280px) {\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {\n    margin-left: var(--margin-left-lg)\n}\n  }\n\n@media only screen and (max-width: 986px) {\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {\n    margin-left: var(--margin-left-md)\n}\n  }\n\n@media only screen and (max-width: 400px) {\n\n.margins-module_ml__KGXjp,\nbody *.margins-module_ml__KGXjp {\n    margin-left: var(--margin-left-sm)\n}\n  }\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {  \n margin-right: var(--margin-right);\n  --margin-right-xl: var(--margin-right);\n  --margin-right-lg: var(--margin-right);\n  --margin-right-md: var(--margin-right);\n  --margin-right-sm: var(--margin-right);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {\n   margin-right: var(--margin-right-xl)\n}\n }\n\n@media only screen and (max-width: 1280px) {\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {\n   margin-right: var(--margin-right-lg)\n}\n }\n\n@media only screen and (max-width: 986px) {\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {\n   margin-right: var(--margin-right-md)\n}\n }\n\n@media only screen and (max-width: 400px) {\n\n.margins-module_mr__p3-qB,\nbody *.margins-module_mr__p3-qB {\n   margin-right: var(--margin-right-sm)\n}\n }\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n margin-top: var(--margin-top);\n  --margin-top-xl: var(--margin-top);\n  --margin-top-lg: var(--margin-top);\n  --margin-top-md: var(--margin-top);\n  --margin-top-sm: var(--margin-top);\n}\n\n@media only screen and (max-width: 1700px) {\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n   margin-top: var(--margin-top-xl)\n}\n }\n\n@media only screen and (max-width: 1280px) {\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n   margin-top: var(--margin-top-lg)\n}\n }\n\n@media only screen and (max-width: 986px) {\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n   margin-top: var(--margin-top-md)\n}\n }\n\n@media only screen and (max-width: 400px) {\n\n.margins-module_mt__hdL7G,\nbody *.margins-module_mt__hdL7G {\n   margin-top: var(--margin-top-sm)\n}\n }";
var styles$e = {"m":"margins-module_m__PH27d","mb":"margins-module_mb__H0D5-","ml":"margins-module_ml__KGXjp","mr":"margins-module_mr__p3-qB","mt":"margins-module_mt__hdL7G"};
styleInject(css_248z$g);

function getMargins(_a) {
    var m = _a.m, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt;
    return [
        m ? styles$e['m'] : null,
        mb ? styles$e['mb'] : null,
        ml ? styles$e['ml'] : null,
        mr ? styles$e['mr'] : null,
        mt ? styles$e['mt'] : null,
    ];
}
function getMarginsStyles(_a) {
    var m = _a.m, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt;
    var margins = __assign(__assign(__assign(__assign(__assign({}, getResponsiveValues(m, '--margin')), getResponsiveValues(ml, '--margin-left')), getResponsiveValues(mr, '--margin-right')), getResponsiveValues(mb, '--margin-bottom')), getResponsiveValues(mt, '--margin-top'));
    return margins;
}

var css_248z$f = ".coords-module_coords-top__ARhTf, body *.coords-module_coords-top__ARhTf {\n    top: var(--coordTop);\n  }\n  .coords-module_coords-left__fhcnM, body *.coords-module_coords-left__fhcnM {\n    left: var(--coordLeft);\n  }\n  .coords-module_coords-right__5Fe8-, body *.coords-module_coords-right__5Fe8- {\n    right: var(--coordRight);\n  }\n  .coords-module_coords-bottom__nwDJx, body *.coords-module_coords-bottom__nwDJx {\n    bottom: var(--coordBottom);\n  }";
var styles$d = {"coords-top":"coords-module_coords-top__ARhTf","coords-left":"coords-module_coords-left__fhcnM","coords-right":"coords-module_coords-right__5Fe8-","coords-bottom":"coords-module_coords-bottom__nwDJx"};
styleInject(css_248z$f);

function getCoords(_a) {
    var props = _a.props;
    return [
        props.top ? styles$d['coords-top'] : null,
        props.left ? styles$d['coords-left'] : null,
        props.right ? styles$d['coords-right'] : null,
        props.bottom ? styles$d['coords-bottom'] : null,
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

var css_248z$e = ".Button-module_baseButton__OB4cX {\n  min-height: 32px;\n  background-color: var(--button-primary);\n  border-radius: 0;\n  display: inline-flex;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  margin: 0;\n  padding: 0 28.5px;\n  transition: color 0.4s ease, border 0.4s ease;\n\n  font-family: var(--global-fontFamilies-sf-compact);\n  font-weight: var(--global-fontWeights-sf-compact-1);\n  font-size: var(--global-fontSize-0);\n}\n\n.Button-module_inner__boETo {\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n.Button-module_inner__boETo svg {\n  stroke: currentColor;\n}\n\n.Button-module_variant-outline__wbE1U {\n  background: transparent;\n  border: 1px solid var(--text-body);\n  color: var(--text-body);\n}\n\n.Button-module_variant-outline__wbE1U:hover {\n    border: 1px solid var(--button-hover);\n    color: var(--button-color-hover);\n  }\n\n.Button-module_variant-outline__wbE1U:hover * {\n    stroke: var(--button-color-hover);\n    color: var(--button-color-hover);\n  }\n\n.Button-module_variant-outline__wbE1U:disabled {\n    color: var(--button-outline-disabled);\n    border: 1px solid var(--button-outline-disabled);\n  }\n\n.Button-module_variant-outline__wbE1U:disabled * {\n      color: var(--button-outline-disabled);\n      stroke: var(--button-outline-disabled);\n    }\n\n.Button-module_variant-primary__yvq47 {\n  background-color: transparent;\n  color: var(--button-primary);\n  stroke: var(--button-primary);\n  border: 1px solid var(--button-primary);\n}\n\n.Button-module_variant-primary__yvq47:hover:enabled {\n  background-color: var(--button-primary);\n  color: var(--button-secondary);\n  stroke: var(--button-secondary);\n}\n\n.Button-module_variant-primary__yvq47:disabled {\n  color: var(--button-disabled);\n  stroke: var(--button-disabled);\n  border-color: var(--button-disabled);\n  cursor: not-allowed;\n}\n\n.Button-module_variant-bare__-ig32 {\n  background-color: transparent;\n  border: 0 none;\n  color: var(--text-body);\n}\n\n.Button-module_variant-bare__-ig32:hover {\n    background-color: transparent;\n     border: 0 none;\n  }\n\n.Button-module_icon__-43u5 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n";
var styles$c = {"baseButton":"Button-module_baseButton__OB4cX","inner":"Button-module_inner__boETo","variant-outline":"Button-module_variant-outline__wbE1U","variant-primary":"Button-module_variant-primary__yvq47","variant-bare":"Button-module_variant-bare__-ig32","icon":"Button-module_icon__-43u5"};
styleInject(css_248z$e);

var Button = function (_a) {
    var children = _a.children, action = _a.action, variant = _a.variant, disabled = _a.disabled, type = _a.type, icon = _a.icon, _b = _a.iconPosition, iconPosition = _b === void 0 ? 'left' : _b, m = _a.m, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt, p = _a.p, pb = _a.pb, pl = _a.pl, pr = _a.pr, pt = _a.pt, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    var classList = classnames.apply(void 0, __spreadArray(__spreadArray(__spreadArray(__spreadArray([], getCoords({
        props: {
            top: top,
            left: left,
            right: right,
            bottom: bottom,
        },
    }), false), getMargins({
        m: m,
        mb: mb,
        ml: ml,
        mr: mr,
        mt: mt,
    }), false), getPaddings({
        p: p,
        pb: pb,
        pl: pl,
        pr: pr,
        pt: pt,
    }), false), [styles$c.baseButton,
        styles$c["variant-".concat(variant)]], false));
    type = type !== null && type !== void 0 ? type : 'button';
    var Icon = icon !== null && icon !== void 0 ? icon : undefined;
    return (React.createElement("div", null,
        React.createElement("button", { style: __assign(__assign(__assign({}, getCoordsStyle({ top: top, left: left, right: right, bottom: bottom })), getMarginsStyles({ m: m, mb: mb, ml: ml, mr: mr, mt: mt })), getPaddingsStyles({ p: p, pb: pb, pl: pl, pr: pr, pt: pt })), className: classList, onClick: action, disabled: disabled, type: type },
            React.createElement("div", { className: styles$c.inner },
                icon && iconPosition === 'left' && (React.createElement("div", { className: styles$c.icon }, Icon)),
                children,
                icon && iconPosition === 'right' && (React.createElement("div", { className: styles$c.icon }, Icon))))));
};
Button.documentation =
    'The Button component accepts children for strings, action for (), href for link, and variant for our types defined in Figma';

var css_248z$d = ".ButtonGroup-module_baseButtonGroup__G5x-4 {\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow:column;\n  -moz-column-gap: 1.6rem;\n       column-gap: 1.6rem;\n}\n";
var styles$b = {"baseButtonGroup":"ButtonGroup-module_baseButtonGroup__G5x-4"};
styleInject(css_248z$d);

var ButtonGroup = function (_a) {
    var children = _a.children;
    var classList = classnames(styles$b.baseButtonGroup);
    return React.createElement("div", { className: classList }, children);
};
ButtonGroup.documentation = 'The Button Group component accepts button children';

var css_248z$c = "/**\n * Do not edit directly\n * Generated on Mon, 22 Aug 2022 00:27:39 GMT\n */\n\n:root {\n  --spectrum-gray-100: #f3f3f3;\n  --spectrum-gray-200: #e6e6e6;\n  --spectrum-gray-300: #b4b4b4;\n  --spectrum-gray-400: #9b9b9b;\n  --spectrum-gray-500: #818183;\n  --spectrum-gray-600: #68686a;\n  --spectrum-gray-700: #4f4f51;\n  --spectrum-gray-800: #363638;\n  --spectrum-gray-900: #1d1d1f;\n  --spectrum-gray-1000: #000000;\n  --spectrum-gray-000: #ffffff;\n  --spectrum-red-100: #ffe5e7;\n  --spectrum-red-200: #ffc2c6;\n  --spectrum-red-300: #ff9ea5;\n  --spectrum-red-400: #f96c73;\n  --spectrum-red-500: #f1465a;\n  --spectrum-red-600: #e32144;\n  --spectrum-red-700: #be1332;\n  --spectrum-red-800: #990620;\n  --spectrum-red-900: #650113;\n  --spectrum-red-1000: #320109;\n  --spectrum-red-000: #fff5f5;\n  --spectrum-blue-100: #c1ebf6;\n  --spectrum-blue-200: #96ddef;\n  --spectrum-blue-300: #6ad0e9;\n  --spectrum-blue-400: #3fc2e2;\n  --spectrum-blue-500: #14b4dc;\n  --spectrum-blue-600: #169bbc;\n  --spectrum-blue-700: #17829d;\n  --spectrum-blue-800: #18697e;\n  --spectrum-blue-900: #1a4f5e;\n  --spectrum-blue-1000: #1b363f;\n  --spectrum-blue-000: #ecf9fc;\n  --spectrum-green-100: #bbf1df;\n  --spectrum-green-200: #8ce7c9;\n  --spectrum-green-300: #5eddb4;\n  --spectrum-green-400: #2fd39e;\n  --spectrum-green-500: #00c988;\n  --spectrum-green-600: #00ad76;\n  --spectrum-green-700: #007552;\n  --spectrum-green-800: #005940;\n  --spectrum-green-900: #003d2e;\n  --spectrum-green-1000: #00291f;\n  --spectrum-green-000: #f3fcf9;\n  --spectrum-yellow-100: #ffeebe;\n  --spectrum-yellow-200: #ffe397;\n  --spectrum-yellow-300: #ffd971;\n  --spectrum-yellow-400: #ffce4a;\n  --spectrum-yellow-500: #ffc424;\n  --spectrum-yellow-600: #ffad1f;\n  --spectrum-yellow-700: #fa8900;\n  --spectrum-yellow-800: #e55c00;\n  --spectrum-yellow-900: #c73f00;\n  --spectrum-yellow-1000: #752100;\n  --spectrum-yellow-000: #fff8e4;\n  --global-fontFamilies-ivypresto-display: IvyPresto Display;\n  --global-fontFamilies-sf-compact: 'SF Compact', system-ui, sans-serif;\n  --global-fontFamilies-degular: Degular;\n  --global-lineHeights-0: 24;\n  --global-lineHeights-1: 28;\n  --global-lineHeights-2: 30;\n  --global-lineHeights-3: 32;\n  --global-lineHeights-4: 34;\n  --global-lineHeights-5: 48;\n  --global-lineHeights-6: 52;\n  --global-lineHeights-7: 110;\n  --global-fontWeights-sf-compact-1: medium;\n  --global-fontWeights-sf-compact-2: semibold;\n  --global-fontWeights-sf-compact-3: bold;\n  --global-fontWeights-degular-0: Thin;\n  --global-fontWeights-degular-1: Semibold;\n  --global-fontWeights-sf-compact-0: regular;\n  --global-fontWeights-sf-compact-4: regular italic;\n  --global-fontSize-0: 13;\n  --global-fontSize-1: 16;\n  --global-fontSize-2: 18;\n  --global-fontSize-3: 20;\n  --global-fontSize-4: 22;\n  --global-fontSize-5: 30;\n  --global-fontSize-6: 44;\n  --global-fontSize-7: 48;\n  --global-fontSize-8: 140;\n  --global-letterSpacing-0: 0;\n  --global-letterSpacing-1: 0%;\n  --global-paragraphSpacing-0: 0;\n  --global-textCase-none: none;\n  --global-textDecoration-none: none;\n  --consistent-white: #ffffff;\n  --consistent-black: #000000;\n  --featuredContext-primary: #000000;\n  --featuredContext-secondary: #ffffff;\n  --icon-primary: #ffffff;\n  --icon-secondary: #000000;\n  --button-primary: #ffffff;\n  --button-secondary: #000000;\n  --button-disabled: #9b9b9b;\n  --surface-primary: #1d1d1f;\n  --surface-secondary: #e6e6e6;\n  --text-primary: #ffffff;\n  --text-secondary: #000000;\n  --text-tertiary: #68686a;\n  --border-primary: #b4b4b4;\n}\n";
var darkTokens = {};
styleInject(css_248z$c);

var css_248z$b = "/**\n * Do not edit directly\n * Generated on Mon, 22 Aug 2022 00:27:39 GMT\n */\n\n:root {\n  --spectrum-gray-100: #f3f3f3;\n  --spectrum-gray-200: #e6e6e6;\n  --spectrum-gray-300: #b4b4b4;\n  --spectrum-gray-400: #9b9b9b;\n  --spectrum-gray-500: #818183;\n  --spectrum-gray-600: #68686a;\n  --spectrum-gray-700: #4f4f51;\n  --spectrum-gray-800: #363638;\n  --spectrum-gray-900: #1d1d1f;\n  --spectrum-gray-1000: #000000;\n  --spectrum-gray-000: #ffffff;\n  --spectrum-red-100: #ffe5e7;\n  --spectrum-red-200: #ffc2c6;\n  --spectrum-red-300: #ff9ea5;\n  --spectrum-red-400: #f96c73;\n  --spectrum-red-500: #f1465a;\n  --spectrum-red-600: #e32144;\n  --spectrum-red-700: #be1332;\n  --spectrum-red-800: #990620;\n  --spectrum-red-900: #650113;\n  --spectrum-red-1000: #320109;\n  --spectrum-red-000: #fff5f5;\n  --spectrum-blue-100: #c1ebf6;\n  --spectrum-blue-200: #96ddef;\n  --spectrum-blue-300: #6ad0e9;\n  --spectrum-blue-400: #3fc2e2;\n  --spectrum-blue-500: #14b4dc;\n  --spectrum-blue-600: #169bbc;\n  --spectrum-blue-700: #17829d;\n  --spectrum-blue-800: #18697e;\n  --spectrum-blue-900: #1a4f5e;\n  --spectrum-blue-1000: #1b363f;\n  --spectrum-blue-000: #ecf9fc;\n  --spectrum-green-100: #bbf1df;\n  --spectrum-green-200: #8ce7c9;\n  --spectrum-green-300: #5eddb4;\n  --spectrum-green-400: #2fd39e;\n  --spectrum-green-500: #00c988;\n  --spectrum-green-600: #00ad76;\n  --spectrum-green-700: #007552;\n  --spectrum-green-800: #005940;\n  --spectrum-green-900: #003d2e;\n  --spectrum-green-1000: #00291f;\n  --spectrum-green-000: #f3fcf9;\n  --spectrum-yellow-100: #ffeebe;\n  --spectrum-yellow-200: #ffe397;\n  --spectrum-yellow-300: #ffd971;\n  --spectrum-yellow-400: #ffce4a;\n  --spectrum-yellow-500: #ffc424;\n  --spectrum-yellow-600: #ffad1f;\n  --spectrum-yellow-700: #fa8900;\n  --spectrum-yellow-800: #e55c00;\n  --spectrum-yellow-900: #c73f00;\n  --spectrum-yellow-1000: #752100;\n  --spectrum-yellow-000: #fff8e4;\n  --global-fontFamilies-ivypresto-display: IvyPresto Display;\n  --global-fontFamilies-sf-compact: 'SF Compact', system-ui, sans-serif;\n  --global-fontFamilies-degular: Degular;\n  --global-lineHeights-0: 24;\n  --global-lineHeights-1: 28;\n  --global-lineHeights-2: 30;\n  --global-lineHeights-3: 32;\n  --global-lineHeights-4: 34;\n  --global-lineHeights-5: 48;\n  --global-lineHeights-6: 52;\n  --global-lineHeights-7: 110;\n  --global-fontWeights-sf-compact-1: medium;\n  --global-fontWeights-sf-compact-2: semibold;\n  --global-fontWeights-sf-compact-3: bold;\n  --global-fontWeights-degular-0: Thin;\n  --global-fontWeights-degular-1: Semibold;\n  --global-fontWeights-sf-compact-0: regular;\n  --global-fontWeights-sf-compact-4: regular italic;\n  --global-fontSize-0: 13;\n  --global-fontSize-1: 16;\n  --global-fontSize-2: 18;\n  --global-fontSize-3: 20;\n  --global-fontSize-4: 22;\n  --global-fontSize-5: 30;\n  --global-fontSize-6: 44;\n  --global-fontSize-7: 48;\n  --global-fontSize-8: 140;\n  --global-letterSpacing-0: 0;\n  --global-letterSpacing-1: 0%;\n  --global-paragraphSpacing-0: 0;\n  --global-textCase-none: none;\n  --global-textDecoration-none: none;\n  --consistent-white: #ffffff;\n  --consistent-black: #000000;\n  --featuredContext-primary: #000000;\n  --featuredContext-secondary: #ffffff;\n  --icon-primary: #000000;\n  --icon-secondary: #ffffff;\n  --button-primary: #000000;\n  --button-secondary: #ffffff;\n  --button-disabled: #9b9b9b;\n  --surface-primary: #e6e6e6;\n  --surface-secondary: #1d1d1f;\n  --text-primary: #000000;\n  --text-secondary: #ffffff;\n  --text-tertiary: #68686a;\n  --border-primary: #1d1d1f;\n}\n";
var lightTokens = {};
styleInject(css_248z$b);

var setTheme = function (mode) {
    if (mode === 'dark') {
        return darkTokens;
    }
    return lightTokens;
};
var Theme = function (_a) {
    var children = _a.children, _b = _a.themeMode, themeMode = _b === void 0 ? 'light' : _b;
    return (React.createElement("div", { className: "ThemeProvider", style: setTheme(themeMode) }, children));
};
Theme.extracter = setTheme;

var css_248z$a = "\n.Menu-module_root__Hh-vp {\n  position: relative;\n}\n";
var styles$a = {"root":"Menu-module_root__Hh-vp"};
styleInject(css_248z$a);

// eslint-disable-next-line no-empty-pattern
var Menu = function (_a) {
    return React.createElement("div", { className: styles$a.root }, "hello world! I am Menu");
};

var css_248z$9 = "\n.Overlay-module_root__snYjz {\n  position: relative;\n}\n";
var styles$9 = {"root":"Overlay-module_root__snYjz"};
styleInject(css_248z$9);

// eslint-disable-next-line no-empty-pattern
var Overlay = function (_a) {
    return React.createElement("div", { className: styles$9.root }, "hello world! I am Overlay");
};

var css_248z$8 = "\n.Card-module_root__c9KvZ {\n  position: relative;\n}\n";
var styles$8 = {"root":"Card-module_root__c9KvZ"};
styleInject(css_248z$8);

// eslint-disable-next-line no-empty-pattern
var Card = function (_a) {
    return React.createElement("div", { className: styles$8.root }, "hello world! I am Card");
};

var css_248z$7 = ".Gallery-module_root__nWKQx {\n  grid-area: gallery;\n}\n\n  @media only screen and (max-width: 900px) {.Gallery-module_root__nWKQx {\n    rid-area: initial;\n    grid-column: auto / span 12;\n    margin-top: 4rem\n}\n  }\n";
var styles$7 = {"root":"Gallery-module_root__nWKQx"};
styleInject(css_248z$7);

var Gallery = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: styles$7.root }, children);
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
    return React.createElement("div", { className: styles$5.root }, children);
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
                bottom: bottom,
            },
        }), false), getMargins({
            m: m,
            mb: mb,
            ml: ml,
            mr: mr,
            mt: mt,
        }), false), getPaddings({
            p: p,
            pb: pb,
            pl: pl,
            pr: pr,
            pt: pt,
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
    return React.createElement("div", { className: styles$3.root }, children);
};

var css_248z$2 = "\n.Header-module_root__zkAdZ {\n  position: relative;\n}\n\nh1 {\n  font-family: var(--font-families-degular);\n  font-weight: 200;\n  font-style: normal;\n  font-size: 14rem;\n  line-height: 11rem;\n}\n\nh2 {\n  font-family: var(--font-families-degular);\n  font-weight: 600;\n  font-style: normal;\n  font-size: 4.8rem;\n  line-height: 5.2rem;\n}\n\nh3 {\n  font-family: var(--font-families-sf-compact);\n  font-weight: 600;\n  font-size: 4.4rem;\n  line-height: 4.8rem;\n}\n\nh4 {\n  font-family: var(--font-families-sf-compact);\n  font-weight: 600;\n  font-size: 3rem;\n  line-height: 3.4rem\n}\n\nh5 {\n  font-family: var(--font-families-sf-compact);\n  font-weight: 600;\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n";
var styles$2 = {"root":"Header-module_root__zkAdZ"};
styleInject(css_248z$2);

var Header = function (_a) {
    var as = _a.as, children = _a.children;
    var Tag = as ? as : 'h1';
    return React.createElement(Tag, { className: styles$2.root }, children);
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
    return React.createElement(Tag, { className: classList }, children);
};

var css_248z = ".Icon-module_root__91OsV {\n  position: relative;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  fill: var(--icon-primary);\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n  .Icon-module_root__91OsV:hover .Icon-module_toolTip__Au0OE {\n      display: block;\n    }\n\n.Icon-module_root__91OsV:svg {\n  width: 100%;\n  height: 100%;\n  fill: var(--icon-primary);\n}\n\n.Icon-module_invert__JP98g {\n  fill: var(--icon-secondary);\n}\n\n.Icon-module_toolTip__Au0OE {\n  display: none;\n  font-size: 1.3rem;\n  position: absolute;\n  top: 100%;\n  background: var(--color-dark);\n  color: var(--color-highlight);\n  padding: 0.7rem 1rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  left: 0;\n  opacity: 0.7;\n  white-space: nowrap;\n}\n";
var styles = {"root":"Icon-module_root__91OsV","toolTip":"Icon-module_toolTip__Au0OE","invert":"Icon-module_invert__JP98g"};
styleInject(css_248z);

var masonryLayout = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50 50H27.273V27.273H50V50Zm0-27.273H27.273V0H50v22.727ZM0 50h22.727V0H0v50Z\"/></svg>";
var gridLayout = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.273 50H50V27.273H27.273V50Zm0-27.273H50V0H27.273v22.727ZM22.727 50H0V27.273h22.727V50ZM0 22.727h22.727V0H0v22.727Z\"/></svg>";
var fullLayout = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 50H0V0h50z\"/></svg>";
var irregularLayout = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50 50H20V35h30v15Zm0-35H32.5V0H50v15ZM32.5 30H50V20H32.5v10Zm-5 0H0V0h27.5v30ZM0 50h15V35H0v15Z\"/></svg>";
var horizontalArrowsII = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m14.185 11 1.411 1.414L3.786 24.25h42.428l-11.81-11.835L35.815 11 50 25.213 35.815 39.426l-1.411-1.414 11.81-11.834H3.786l11.81 11.834-1.411 1.414L0 25.213 14.185 11Z\"/></svg>";
var info = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"m23.943 38.54-.193-18.527 2.5-.026.193 18.526-2.5.026ZM23.75 11.667v5h2.5v-5h-2.5Z\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50 25C50 11.193 38.807 0 25 0S0 11.193 0 25s11.193 25 25 25 25-11.193 25-25Zm-2.5 0C47.5 12.574 37.426 2.5 25 2.5S2.5 12.574 2.5 25 12.574 47.5 25 47.5 47.5 37.426 47.5 25Z\"/></g></svg>";
var minus = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M13.333 26.25h23.72v-2.5h-23.72v2.5Z\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50 0 38.807 0 25 11.193 0 25 0Zm0 2.5c12.426 0 22.5 10.074 22.5 22.5S37.426 47.5 25 47.5 2.5 37.426 2.5 25 12.574 2.5 25 2.5Z\"/></g></svg>";
var cross = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.923 0 0 1.923 23.077 25 0 48.077 1.923 50 25 26.923 48.077 50 50 48.077 26.923 25 50 1.923 48.077 0 25 23.077 1.923 0Z\"/></svg>";
var chevron = "<svg viewBox=\"0 0 28 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m1.29 24.713-.003-.003L25.997 0l1.977 1.977L4.951 25l23.023 23.023L25.998 50 1 25.002l.29-.29Z\"/></svg>";
var horizontalEllipse = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><g><circle cx=\"4.091\" cy=\"25.091\" r=\"4.091\"/><circle cx=\"25\" cy=\"25.091\" r=\"4.091\"/><circle cx=\"45.909\" cy=\"25.091\" r=\"4.091\"/></g></svg>";
var superrare = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Zm4.792-25v5.625c0 1.667.416 2.708 1.875 3.542H23.75s.208 0 .208-.209c1.042-.625 1.667-1.666 1.667-2.916V19.167c0-1.25-.417-2.292-1.458-2.917a1.088 1.088 0 0 0-.313-.208c-.104-.052-.208-.105-.312-.209h9.375c1.666 0 3.125.417 4.375 1.667 2.291 2.292 1.458 5.833-1.459 6.875a2.928 2.928 0 0 1-.625.208c-.208.052-.416.105-.625.209.73 1.145 1.51 2.343 2.292 3.541a384.884 384.884 0 0 1 2.292 3.542c.416.833 1.041 1.458 1.875 2.083h-5.209c-.208 0-.208 0-.416-.208l-4.375-7.5a2.881 2.881 0 0 1-.313-.417c-.104-.156-.208-.312-.312-.416.208-.209-.209-.417-.625-.417Zm0-.208h1.666c1.25 0 2.5-.834 2.709-2.292.208-.625.208-1.25.208-1.875 0-1.458-.625-2.708-1.875-3.542-.833-.625-1.875-.833-2.917-.833.209 2.708.209 5.625.209 8.542ZM10 27.604c-.052-.104-.104-.208-.208-.312 0 2.291 0 4.583-.209 7.083h.209c.625-.417 1.25-.417 1.875-.417.52.105.99.157 1.458.209.469.052.938.104 1.458.208 1.25.208 2.5.417 3.75 0s2.5-1.042 3.334-2.083c.833-1.25 1.041-2.5 1.041-3.75 0-1.459-.625-2.709-1.875-3.542-1.041-.833-2.083-1.25-3.333-1.667a81.197 81.197 0 0 1-2.083-.937c-.677-.313-1.354-.625-2.084-.938-1.458-.625-1.875-2.291-1.041-3.75.625-1.25 1.666-1.666 2.916-1.666 1.459-.209 2.5.416 3.542 1.458.547.547 1.014 1.134 1.472 1.709.587.738 1.158 1.455 1.861 2.041 0 .104.052.156.105.208.042.042.084.084.098.154a64.304 64.304 0 0 1-.203-2.966c-.052-.99-.104-1.98-.208-3.021h-1.667c-.312 0-.625-.052-.937-.104a5.737 5.737 0 0 0-.938-.104c-1.25-.209-2.5-.209-3.75 0-1.25.416-2.5.833-3.333 1.666-1.667 1.667-1.875 3.75-1.25 5.834.417 1.25 1.25 2.083 2.5 2.708 1.042.625 2.083 1.042 3.333 1.458 1.25.417 2.292.834 3.334 1.459.625.416 1.041.833 1.25 1.666.208 1.667-.625 3.542-2.917 3.75-2.083.209-3.542-.625-4.792-2.083-1.041-1.042-1.875-2.5-2.5-3.958-.104-.105-.156-.209-.208-.313Z\"/></svg>";
var oncyber = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25Zm-25-6.25c1.667-2.083 4.375-3.333 7.292-3.333 5.208 0 9.583 4.375 9.583 9.583s-4.375 9.583-9.583 9.583c-2.917 0-5.625-1.25-7.292-3.333-1.667 2.083-4.375 3.333-7.292 3.333-5.208 0-9.583-4.375-9.583-9.583s4.375-9.583 9.583-9.583c2.917 0 5.625 1.25 7.292 3.333Zm2.292 7.708c.625 2.084 2.708 3.75 5 3.75 2.916 0 5.208-2.291 5.208-5.208 0-2.917-2.292-5.208-5.208-5.208-2.5 0-4.375 1.666-5 3.75h-4.584c-.625-2.084-2.708-3.75-5-3.75-2.916 0-5.208 2.291-5.208 5.208 0 2.917 2.292 5.208 5.208 5.208 2.5 0 4.375-1.666 5-3.75h4.584Z\"/></svg>";
var externalWebsiteLink = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25Zm-8.115-4.615h-8.4A45.16 45.16 0 0 1 33.718 25c0 1.607-.083 3.17-.239 4.667h8.392c.41-1.486.629-3.05.629-4.667 0-1.598-.214-3.145-.615-4.615Zm-.679-2H33.23c-.65-4.26-1.911-7.86-3.542-10.25a17.543 17.543 0 0 1 11.518 10.25ZM25 5c11.046 0 20 8.954 20 20s-8.954 20-20 20S5 36.046 5 25 13.954 5 25 5Zm4.688 36.865a17.543 17.543 0 0 0 11.497-10.198h-7.963c-.653 4.236-1.91 7.817-3.534 10.198Zm-9.376 0A17.543 17.543 0 0 1 8.815 31.667h7.963c.653 4.236 1.91 7.817 3.534 10.198ZM8.129 29.667h8.392A45.142 45.142 0 0 1 16.282 25c0-1.588.08-3.134.233-4.615h-8.4A17.52 17.52 0 0 0 7.5 25c0 1.616.22 3.181.63 4.667Zm.665-11.282a17.543 17.543 0 0 1 11.518-10.25c-1.63 2.39-2.891 5.99-3.542 10.25H8.794Zm19.62-6.328c.754 1.728 1.372 3.88 1.778 6.328H19.808c.406-2.448 1.024-4.6 1.778-6.328.69-1.585 1.435-2.678 2.11-3.332C24.356 8.084 24.793 8 25 8c.207 0 .644.084 1.304.725.675.654 1.42 1.748 2.11 3.332ZM30.718 25c0-1.607-.088-3.153-.25-4.615H19.532a41.939 41.939 0 0 0-.25 4.615c0 1.625.09 3.189.256 4.667h10.924c.166-1.478.256-3.042.256-4.667Zm-9.132 12.943c-.748-1.716-1.364-3.85-1.77-6.276h10.367c-.405 2.426-1.02 4.56-1.769 6.276-.69 1.585-1.435 2.678-2.11 3.332-.66.641-1.097.725-1.304.725-.207 0-.644-.084-1.304-.725-.675-.654-1.42-1.747-2.11-3.332Z\"/></svg>";
var foundation = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Zm-.23-18c3.71 0 6.717-3.134 6.717-7s-3.007-7-6.717-7c-3.71 0-6.716 3.134-6.716 7s3.007 7 6.716 7ZM12.453 18.667a.314.314 0 0 0-.554 0L5.043 31.042c-.123.222.031.5.277.5h13.712c.246 0 .4-.278.276-.5l-6.855-12.375Zm19.913.416c0-.368.287-.666.64-.666H44.36c.354 0 .64.298.64.666v11.834a.654.654 0 0 1-.64.666H33.006a.654.654 0 0 1-.64-.666V19.083Z\"/></svg>";
var saveCheckmark = "<svg viewBox=\"0 0 50 51\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.5 5A3.5 3.5 0 0 1 5 1.5h30.879l5.56 5.56 7.061 7.061V45a3.5 3.5 0 0 1-3.5 3.5H5A3.5 3.5 0 0 1 1.5 45V5Z\" stroke-width=\"3\"/><path d=\"m22.388 30.364-1.04 1.08 1.04 1.003 1.041-1.003-1.04-1.08Zm6.388-6.156-1.04-1.08 1.04 1.08Zm-13.817 1.08 6.388 6.156 2.082-2.16-6.388-6.156-2.082 2.16Zm8.47 6.156 6.388-6.155-2.081-2.16-6.389 6.154 2.082 2.16Zm6.388-6.155 5.406-5.209-2.082-2.16-5.405 5.208 2.081 2.16Z\"/></svg>";
var revertArrrow = "<svg viewBox=\"0 0 43 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.465 2.247 4.657 15.055h20.319c9.437 0 17.088 7.65 17.088 17.088 0 9.437-7.65 17.088-17.088 17.088H1.247v-1.786h23.319c8.311 0 15.049-6.738 15.049-15.05 0-8.31-6.738-15.048-15.05-15.048H4.852L17.465 29.96l-1.804 1.803L0 16.104 15.66.444l1.805 1.803Z\"/></svg>";
var upwardDiagonalArrow = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke-width=\"3\"><path d=\"M4.545 43.364 40.908 7M40.91 27.455V7H20.454\"/></g></svg>";
var opensea = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.195 0 0 11.195 0 25s11.195 25 25 25 25-11.195 25-25S38.81 0 25 0ZM12.335 25.84l.105-.17 6.505-10.175c.095-.145.32-.13.39.03 1.085 2.435 2.025 5.465 1.585 7.35-.185.775-.7 1.825-1.28 2.795a5.01 5.01 0 0 1-.245.415.22.22 0 0 1-.185.095h-6.685a.221.221 0 0 1-.19-.34Zm28.985 3.5a.227.227 0 0 1-.135.21c-.505.215-2.23 1.01-2.945 2.005-1.83 2.545-3.225 6.185-6.35 6.185H18.86c-4.62 0-8.36-3.755-8.36-8.39v-.15c0-.12.1-.22.225-.22h7.26c.145 0 .25.13.24.275-.055.47.035.955.26 1.395a2.552 2.552 0 0 0 2.29 1.42h3.595v-2.805h-3.555a.23.23 0 0 1-.185-.36 27.483 27.483 0 0 0 1.425-2.255c.325-.57.64-1.18.895-1.79.05-.11.09-.225.135-.335.07-.195.14-.38.19-.56a9.52 9.52 0 0 0 .135-.465c.12-.52.17-1.07.17-1.64 0-.225-.01-.46-.03-.68a9.13 9.13 0 0 0-.07-.735c-.02-.215-.06-.43-.1-.65a13.53 13.53 0 0 0-.205-.975l-.03-.125c-.06-.225-.115-.435-.185-.66-.205-.7-.435-1.385-.685-2.025-.09-.255-.19-.5-.295-.74-.15-.37-.305-.705-.445-1.02a7.424 7.424 0 0 1-.195-.41c-.07-.15-.14-.3-.215-.445-.05-.11-.11-.215-.15-.315l-.44-.81c-.06-.11.04-.245.16-.21l2.75.745h.02l.36.105.4.11.145.04v-1.63c0-.79.63-1.43 1.415-1.43.39 0 .745.16.995.42.255.26.415.615.415 1.01v2.425l.295.08c.02.01.045.02.065.035.07.05.175.13.305.23.105.08.215.18.345.285.265.215.585.49.93.805.09.08.18.16.265.245.445.415.945.9 1.425 1.44.135.155.265.305.4.47.13.165.275.325.395.485.165.215.335.44.49.675.07.11.155.225.22.335.2.295.37.6.535.905.07.14.14.295.2.445.185.41.33.825.42 1.245.03.09.05.185.06.275v.02c.03.12.04.25.05.385.04.425.02.855-.07 1.285-.04.18-.09.35-.15.535-.065.175-.125.355-.205.53a7.192 7.192 0 0 1-.55 1.045c-.07.125-.155.255-.235.38-.09.13-.185.255-.265.375a8.104 8.104 0 0 1-.36.46c-.11.15-.22.3-.345.435-.17.205-.335.395-.51.58-.1.12-.21.245-.325.355-.11.125-.225.235-.325.335-.175.175-.315.305-.435.42l-.285.255a.212.212 0 0 1-.15.06h-2.19v2.805h2.755c.615 0 1.2-.215 1.675-.62.16-.14.865-.75 1.7-1.67a.197.197 0 0 1 .105-.065l7.605-2.2a.223.223 0 0 1 .285.215v1.61Z\"/></svg>";
var discord = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 0C11.196 0 0 11.192 0 25c0 13.806 11.196 25 25 25 13.806 0 25-11.194 25-25C50 11.192 38.806 0 25 0Zm6.767 38.225-.773-2.698 1.866 1.736 1.765 1.633 3.135 2.77V15.505a2.997 2.997 0 0 0-2.99-3.004H15.23a2.997 2.997 0 0 0-2.99 3.004v19.717a2.997 2.997 0 0 0 2.99 3.004h16.537Zm-2.625-6.68-.963-1.18c1.91-.54 2.64-1.736 2.64-1.736a8.348 8.348 0 0 1-1.677.86c-.73.307-1.43.511-2.115.628-1.4.262-2.683.19-3.777-.015a12.245 12.245 0 0 1-2.144-.627 8.557 8.557 0 0 1-1.064-.496l-.059-.033-.014-.006-.059-.034-.058-.043-.408-.248s.7 1.166 2.552 1.72l-.977 1.21c-3.223-.101-4.448-2.216-4.448-2.216 0-4.696 2.1-8.502 2.1-8.502 2.1-1.575 4.098-1.531 4.098-1.531l.146.175c-2.625.758-3.836 1.91-3.836 1.91l.86-.423c1.561-.685 2.8-.875 3.311-.918l.248-.03a12.34 12.34 0 0 1 2.946-.029 11.89 11.89 0 0 1 4.39 1.4s-1.153-1.093-3.632-1.852l.204-.233s1.998-.044 4.098 1.531c0 0 2.1 3.806 2.1 8.502 0 0-1.194 2.036-4.462 2.217Zm-1.459-6.81c-.83 0-1.487.73-1.487 1.62 0 .889.67 1.618 1.487 1.618.832 0 1.488-.73 1.488-1.619 0-.89-.656-1.619-1.488-1.619Zm-5.323 0c-.83 0-1.487.73-1.487 1.62 0 .889.67 1.618 1.487 1.618.832 0 1.488-.73 1.488-1.619.015-.89-.656-1.619-1.488-1.619Z\"/></svg>";
var facebook = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm6.25 16.667h-2.813c-1.12 0-1.354.46-1.354 1.62v2.546h4.167L30.815 25h-3.732v14.583h-6.25V25h-4.166v-4.167h4.166v-4.808c0-3.685 1.94-5.608 6.31-5.608h4.107v6.25Z\"/></svg>";
var flickr = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm6.077 33.506a8.488 8.488 0 0 1-6.081-2.56 8.456 8.456 0 0 1-6.073 2.56 8.506 8.506 0 1 1 0-17.012c2.383 0 4.531.983 6.073 2.56a8.506 8.506 0 1 1 6.081 14.452ZM37.152 25a6.083 6.083 0 0 1-6.075 6.077A6.085 6.085 0 0 1 25 25a6.085 6.085 0 0 1 6.077-6.077A6.083 6.083 0 0 1 37.152 25Z\"/></svg>";
var instagram = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30.894 13.13c-1.538-.072-2-.084-5.894-.084s-4.354.014-5.892.083c-3.956.181-5.798 2.054-5.979 5.98-.069 1.537-.085 1.997-.085 5.891s.016 4.354.085 5.894c.181 3.914 2.015 5.798 5.98 5.979 1.535.069 1.997.085 5.891.085 3.896 0 4.356-.014 5.894-.085 3.956-.18 5.796-2.058 5.979-5.98.069-1.537.083-2 .083-5.893 0-3.894-.014-4.354-.083-5.892-.183-3.923-2.027-5.798-5.98-5.979ZM25 32.49a7.49 7.49 0 1 1 0-14.98 7.49 7.49 0 0 1 0 14.98Zm7.785-13.523a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM29.86 25a4.86 4.86 0 1 1-9.72 0 4.86 4.86 0 0 1 9.72 0ZM25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm14.496 31.012c-.24 5.303-3.192 8.24-8.481 8.484-1.557.07-2.055.087-6.015.087-3.96 0-4.456-.016-6.012-.087-5.3-.244-8.24-3.186-8.484-8.484-.07-1.554-.087-2.052-.087-6.012 0-3.96.016-4.456.087-6.012.244-5.3 3.186-8.24 8.484-8.482 1.556-.073 2.052-.09 6.012-.09 3.96 0 4.458.017 6.015.09 5.302.244 8.243 3.192 8.48 8.482.072 1.556.088 2.052.088 6.012 0 3.96-.016 4.458-.087 6.012Z\"/></svg>";
var linkedin = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm-4.167 33.333h-4.166v-12.5h4.166v12.5ZM18.75 18.977a2.301 2.301 0 0 1-2.292-2.31 2.301 2.301 0 0 1 2.292-2.31 2.301 2.301 0 0 1 2.292 2.31 2.301 2.301 0 0 1-2.292 2.31Zm16.667 14.356h-4.163v-5.96c0-3.919-4.17-3.588-4.17 0v5.96h-4.167v-12.5h4.166v2.277c1.817-3.366 8.334-3.616 8.334 3.225v6.998Z\"/></svg>";
var medium = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 0C11.196 0 0 11.192 0 25c0 13.806 11.196 25 25 25 13.806 0 25-11.194 25-25C50 11.192 38.806 0 25 0Zm14.53 36.577v-.49l-2.276-2.233a.68.68 0 0 1-.258-.652V16.798a.68.68 0 0 1 .258-.652l2.33-2.234v-.49h-8.061l-5.746 14.334-6.537-14.333h-8.457v.49l2.725 3.28c.267.24.405.595.367.953v12.892c.08.464-.067.94-.394 1.279l-3.064 3.716v.49h8.687v-.49l-3.064-3.716c-.33-.34-.486-.81-.421-1.28v-11.15l7.625 16.636h.885l6.548-16.636v13.26c0 .355 0 .422-.231.653l-2.354 2.288v.49h11.437Z\"/></svg>";
var pinterest = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm0 39.583c-1.502 0-2.954-.227-4.319-.65.596-.968 1.486-2.556 1.813-3.823l.91-3.466c.477.908 1.865 1.675 3.342 1.675 4.398 0 7.569-4.044 7.569-9.071 0-4.817-3.934-8.42-8.992-8.42-6.294 0-9.636 4.222-9.636 8.822 0 2.14 1.14 4.802 2.963 5.65.275.13.423.07.488-.196l.402-1.652a.438.438 0 0 0-.102-.42c-.6-.73-1.086-2.074-1.086-3.328 0-3.216 2.436-6.329 6.585-6.329 3.584 0 6.092 2.442 6.092 5.933 0 3.946-1.994 6.677-4.585 6.677-1.431 0-2.502-1.183-2.159-2.635.41-1.735 1.209-3.604 1.209-4.856 0-1.119-.6-2.054-1.846-2.054-1.463 0-2.642 1.514-2.642 3.541 0 1.294.44 2.167.44 2.167S20 33.26 19.736 34.396c-.296 1.26-.18 3.029-.053 4.183-5.423-2.125-9.266-7.402-9.266-13.579 0-8.054 6.53-14.583 14.583-14.583 8.052 0 14.583 6.529 14.583 14.583S33.053 39.583 25 39.583Z\"/></svg>";
var reddit = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M29.663 31.975a.449.449 0 0 1 0 .637c-.97.963-2.488 1.432-4.648 1.432l-.017-.004-.017.004c-2.158 0-3.679-.469-4.648-1.434a.446.446 0 0 1 0-.635.455.455 0 0 1 .64 0c.79.785 2.1 1.169 4.008 1.169l.017.004.017-.004c1.906 0 3.216-.384 4.008-1.169a.455.455 0 0 1 .64 0Zm-7.167-5.038a1.92 1.92 0 0 0-1.921-1.914 1.92 1.92 0 0 0-1.923 1.915 1.92 1.92 0 0 0 1.923 1.912 1.917 1.917 0 0 0 1.92-1.913ZM50 25c0 13.806-11.194 25-25 25S0 38.806 0 25 11.194 0 25 0s25 11.194 25 25Zm-10.417-.269a3.225 3.225 0 0 0-5.466-2.308c-2.2-1.448-5.177-2.369-8.471-2.488l1.802-5.675 4.881 1.144-.006.071c0 1.45 1.185 2.63 2.642 2.63 1.456 0 2.64-1.18 2.64-2.63s-1.184-2.63-2.64-2.63c-1.12 0-2.071.699-2.457 1.676l-5.26-1.234a.45.45 0 0 0-.536.303l-2.01 6.329c-3.45.041-6.573.97-8.87 2.46a3.22 3.22 0 0 0-2.188-.864 3.227 3.227 0 0 0-3.227 3.216c0 1.18.648 2.2 1.6 2.76-.063.342-.104.69-.104 1.042 0 4.752 5.843 8.62 13.027 8.62 7.183 0 13.027-3.868 13.027-8.62 0-.333-.036-.66-.092-.983 1.013-.544 1.708-1.596 1.708-2.819Zm-10.15.294c-1.06 0-1.92.858-1.92 1.915a1.92 1.92 0 0 0 1.92 1.912 1.92 1.92 0 0 0 1.921-1.912c0-1.057-.86-1.915-1.92-1.915Z\"/></svg>";
var sloika = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Zm8-20.833H17.375a1.042 1.042 0 0 1-1.042-1.04v-7.294h15.625A1.042 1.042 0 0 1 33 21.873v7.294Zm0 0v7.291a1.042 1.042 0 0 1-1.042 1.042H17.197a2.079 2.079 0 0 1-1.472-.608l-7.113-7.114A2.078 2.078 0 0 1 8 28.303v-6.428a1.042 1.042 0 0 1 1.042-1.042h7.291v-7.291a1.042 1.042 0 0 1 1.042-1.042h14.762a2.08 2.08 0 0 1 1.475.612l7.113 7.113a2.077 2.077 0 0 1 .608 1.472v6.428a1.042 1.042 0 0 1-1.041 1.042H33Z\"/></svg>";
var snapchat = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm10.68 34.323c-.12.16-.215.833-.372 1.364-.179.615-.741.546-1.366.423-.91-.177-1.723-.227-2.67-.07-1.634.273-3.334 2.691-6.184 2.691-3.067 0-4.663-2.408-6.363-2.691-1.733-.288-2.73.175-3.327.175-.46 0-.64-.282-.708-.515-.155-.523-.25-1.21-.371-1.375-1.177-.181-3.834-.644-3.902-1.83a.605.605 0 0 1 .506-.63c3.9-.642 6.381-5.04 5.977-5.994-.287-.677-1.531-.921-2.054-1.127-1.35-.534-1.54-1.146-1.459-1.567.11-.583.823-.975 1.417-.975.573 0 1.583.765 2.371.33-.115-2.047-.404-4.974.325-6.607 1.39-3.117 4.435-4.658 7.483-4.658 3.07 0 6.138 1.562 7.517 4.656.727 1.631.442 4.544.325 6.608.744.41 1.665-.348 2.306-.348.63 0 1.484.425 1.498 1.136.01.556-.485 1.035-1.475 1.425-.531.21-1.767.452-2.054 1.127-.413.975 2.146 5.36 5.977 5.992.304.05.523.32.506.63-.068 1.186-2.737 1.649-3.904 1.83Z\"/></svg>";
var tumblr = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm10.746 37.285c-.956 1.259-4.175 2.298-7.09 2.298-7.254 0-10.948-2.673-10.948-8.335v-7.483h-3.523l-.123-.123v-5.759l.082-.116.325-.109c2.912-.97 4.783-2.608 5.196-5.985a1.411 1.411 0 0 1 1.38-1.256h8.692l.121.123v5.854l.121.123h4.623l.125.123v7.006l-.125.123h-4.644l-.125.123v6.941c.005.188.013.755.2.755h3.977l.12.083 1.807 5.362-.191.252Zm-2.386-4.154 1.21 3.586-.028.129c-.913.877-3.105 1.527-4.896 1.558l-.204.002c-5.892 0-6.902-4.5-6.902-7.156v-8.554l-.123-.123h-3.38l-.122-.123-.03-3.72.077-.113c3.046-1.186 4.746-3.155 5.192-6.798.027-.202.194-.209.196-.209h4.19l.123.123v5.854l.122.123h4.623l.121.123v4.62l-.12.122h-4.644l-.12.123v8.148c.03 1.748.87 2.635 2.511 2.635.659 0 1.354-.154 2.046-.419l.158.07Z\"/></svg>";
var twitter = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm12.638 20.094c.38 8.416-5.896 17.8-17.009 17.8a16.93 16.93 0 0 1-9.17-2.69 12.039 12.039 0 0 0 8.858-2.477 5.997 5.997 0 0 1-5.592-4.156 6 6 0 0 0 2.704-.102c-2.877-.58-4.864-3.171-4.8-5.944.809.448 1.73.717 2.71.748a5.993 5.993 0 0 1-1.851-7.99 16.985 16.985 0 0 0 12.333 6.252c-.873-3.741 1.966-7.348 5.831-7.348a5.98 5.98 0 0 1 4.367 1.89 11.936 11.936 0 0 0 3.8-1.452 6.008 6.008 0 0 1-2.632 3.31 11.935 11.935 0 0 0 3.436-.943 12.013 12.013 0 0 1-2.985 3.102Z\"/></svg>";
var vimeo = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm12.125 23.79c-2.72 5.816-9.298 13.74-13.454 13.74-4.096 0-4.688-8.734-6.925-14.549-1.098-2.858-1.808-2.204-3.871-.758L11.617 20.6c3.008-2.646 6.018-5.719 7.87-5.888 2.08-.2 3.365 1.223 3.844 4.273.636 4.009 1.519 10.23 3.067 10.23 1.202 0 4.173-4.936 4.325-6.698.27-2.584-1.9-2.66-3.781-1.854 2.979-9.77 15.38-7.97 10.183 3.127Z\"/></svg>";
var whatsapp = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.065 12.858c-6.628 0-12.015 5.388-12.017 12.013-.002 2.704.792 4.729 2.123 6.848l-1.213 4.433 4.546-1.194c2.038 1.209 3.981 1.934 6.552 1.936 6.621 0 12.015-5.39 12.017-12.013.002-6.64-5.365-12.02-12.008-12.023Zm7.066 17.175c-.3.844-1.744 1.613-2.437 1.717-.623.094-1.41.131-2.275-.144a20.928 20.928 0 0 1-2.059-.76c-3.622-1.565-5.987-5.213-6.168-5.452-.182-.242-1.475-1.959-1.475-3.736 0-1.777.933-2.652 1.264-3.012.331-.36.721-.452.963-.452l.691.012c.221.01.52-.083.813.621.3.723 1.023 2.5 1.112 2.681.09.182.15.392.03.634-.121.241-.182.391-.36.602l-.543.633c-.18.18-.368.375-.158.738.21.362.936 1.543 2.009 2.502 1.379 1.23 2.543 1.612 2.904 1.791.36.18.57.15.783-.09.21-.24.902-1.053 1.144-1.416.241-.36.481-.302.812-.181.331.12 2.107.994 2.467 1.175.36.181.602.27.692.42.093.15.093.874-.209 1.717ZM25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm.06 39.333c-2.418 0-4.802-.608-6.912-1.758l-7.66 2.008 2.05-7.49a14.42 14.42 0 0 1-1.93-7.224c.002-7.969 6.486-14.452 14.452-14.452a14.356 14.356 0 0 1 10.223 4.237 14.36 14.36 0 0 1 4.23 10.225c-.003 7.969-6.486 14.454-14.453 14.454Z\"/></svg>";
var youtube = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 0C11.194 0 0 11.194 0 25s11.194 25 25 25 25-11.194 25-25S38.806 0 25 0Zm9.252 35.192c-4.38.3-14.133.3-18.506 0-4.742-.325-5.294-2.646-5.33-10.192.036-7.56.594-9.867 5.33-10.192 4.373-.3 14.129-.3 18.506 0 4.744.325 5.294 2.646 5.331 10.192-.037 7.56-.593 9.867-5.33 10.192ZM20.833 20.12l10.244 4.87-10.244 4.888v-9.758Z\"/></svg>";
var tiktok = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M42.678 7.322c9.763 9.763 9.763 25.593 0 35.356-9.763 9.763-25.593 9.763-35.356 0-9.763-9.763-9.763-25.593 0-35.356 9.763-9.763 25.593-9.763 35.356 0Zm-5.466 14.836c.257-.001.514-.014.77-.04h.004v-5.206a8.35 8.35 0 0 1-7.695-7.454H25.81l-.047 21.847c0 2.68-2.368 4.793-5.047 4.793a4.852 4.852 0 1 1 0-9.705c.15 0 .294.02.438.04l.15.019v-4.685a21.66 21.66 0 0 1-.141-.01 6.412 6.412 0 0 0-.447-.02 9.507 9.507 0 0 0-9.508 9.507 9.507 9.507 0 0 0 9.508 9.508 9.508 9.508 0 0 0 9.507-9.508V18.38a8.353 8.353 0 0 0 6.99 3.778Z\"/></svg>";
var showtime = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Zm14.507-25.747a.812.812 0 0 1 0 1.494l-4.404 1.888a14.22 14.22 0 0 0-7.468 7.468l-1.888 4.405a.812.812 0 0 1-1.494 0l-1.887-4.405a14.22 14.22 0 0 0-7.469-7.468l-4.405-1.888a.812.812 0 0 1 0-1.494l4.405-1.887a14.219 14.219 0 0 0 7.469-7.469l1.887-4.405a.812.812 0 0 1 1.494 0l1.888 4.405a14.219 14.219 0 0 0 7.468 7.469l4.404 1.887Z\"/></svg>";
var niftyGateway = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Zm5.821-19.893V12.5h4.536v25h-4.785L19.035 19.679V37.5H14.5v-25h5l11.321 17.607Z\"/></svg>";
var knownOrigin = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25Zm-15.75 9.5a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Zm-9.25 0H6.5V16L25 34.5Z\"/></svg>";
var etherscanLogoLightCircle = "<svg viewBox=\"0 0 50 51\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M10.395 23.806a2.119 2.119 0 0 1 2.13-2.12l3.53.012a2.123 2.123 0 0 1 2.122 2.122v13.351c.398-.117.908-.243 1.467-.374a1.769 1.769 0 0 0 1.364-1.722v-16.56a2.123 2.123 0 0 1 2.122-2.123h3.538a2.123 2.123 0 0 1 2.122 2.123v15.37s.886-.358 1.749-.722a1.773 1.773 0 0 0 1.081-1.631V13.207a2.124 2.124 0 0 1 2.122-2.122h3.538a2.123 2.123 0 0 1 2.123 2.122v15.09c3.067-2.223 6.175-4.897 8.642-8.111a3.563 3.563 0 0 0 .542-3.327A24.96 24.96 0 0 0 25.323.002C11.458-.184-.001 11.135 0 25.002a24.922 24.922 0 0 0 3.32 12.506 3.16 3.16 0 0 0 3.015 1.562c.669-.059 1.502-.142 2.493-.258a1.768 1.768 0 0 0 1.568-1.755v-13.25M10.302 45.223A24.995 24.995 0 0 0 50 25.006c0-.575-.027-1.144-.065-1.71-9.133 13.62-25.996 19.989-39.633 21.928\"/></g></svg>";
var looksrare = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25Zm-24.915 3.86a5.519 5.519 0 0 1-5.516-5.522c0-3.051 2.471-5.522 5.516-5.522a5.519 5.519 0 0 1 5.516 5.522c0 3.05-2.47 5.521-5.516 5.521Zm-2.398-5.522a2.4 2.4 0 1 0 2.398-2.401 2.4 2.4 0 0 0-2.398 2.4ZM17.89 12.775 7.338 23.345l17.747 17.757 17.748-17.757-10.553-10.57H17.89Zm-.959 6.722c4.484-4.508 11.825-4.508 16.309 0l3.837 3.84-3.837 3.842c-4.484 4.508-11.825 4.508-16.309 0l-3.837-3.841 3.837-3.841Z\"/></svg>";
var makersplace = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Zm-2.041-32.23c1.633-.298 3.06.067 4.331 1.069.362.285.491.64.49 1.099-.01 2.654-.009 5.308-.008 7.962v.003l.001 2.192.003.37c.003.174.005.346.003.519-.005.404-.177.552-.56.406-.9-.344-1.597-.923-1.844-1.897a5.493 5.493 0 0 1-.162-1.39c.007-.895.006-1.79.005-2.685v-.002c-.001-.758-.002-1.516.002-2.274.002-.528-.098-1.022-.386-1.465-.52-.8-1.31-1.007-2.2-.943-.94.067-1.601.59-2.017 1.398-.352.684-.505 1.431-.502 2.207.003.76.003 1.521.004 2.282 0 1.455.002 2.91.016 4.365.005.41-.154.497-.52.507-2.018.055-3.167-1.396-3.071-3.393.058-1.193.05-2.386.044-3.58-.003-.397-.005-.795-.005-1.192 0-.445-.03-.905-.222-1.324-.39-.851-1.08-1.255-2-1.288-.994-.036-1.755.389-2.263 1.229-.524.866-.657 1.85-.673 2.834-.033 2.058-.026 4.119 0 6.178.007.474-.178.55-.578.526-1.861-.11-2.951-1.26-2.952-3.14 0-3.245 0-6.489.002-9.733v-.097c0-.565.038-.616.617-.599.148.005.297 0 .446-.006.427-.015.854-.03 1.256.18.609.316.767.496 1.265 1.39.152.01.225-.095.296-.196.016-.023.032-.046.05-.067 1.527-1.93 4.821-1.988 6.553-.552.313.26.607.544.805.904.212.386.395.297.62.01.797-1.013 1.84-1.609 3.154-1.807Zm7.903 1.35c.028.05.043.102.057.153.029.1.056.194.173.26.1-.082.2-.167.298-.252.376-.323.755-.649 1.217-.867 1.188-.56 2.401-.876 3.74-.695 1.28.172 2.457.534 3.465 1.367.956.788 1.534 1.815 1.938 2.966.44 1.256.46 2.561.307 3.837-.285 2.384-1.427 4.54-4.162 5.476-2.42.827-4.628.349-6.533-1.393-.018-.016-.034-.033-.051-.05-.07-.072-.14-.145-.268-.131-.114.129-.102.283-.09.435.003.047.006.093.006.138-.003 1.28-.002 2.56 0 3.841v2.008c0 .61-.168.72-.742.498-.683-.265-1.166-1.03-1.166-1.867l.001-6.92v-.048l.002-4.685-.002-2.544-.002-2.088c0-.626.27-.793.845-.513.453.22.78.564.967 1.074Zm8.192 9.282c.253-.354.506-.71.672-1.117.66-1.613.673-3.263.117-4.885-.419-1.22-1.249-2.141-2.482-2.639-.876-.353-1.772-.39-2.703-.267-1.257.166-2.211.787-2.92 1.805-.883 1.266-1.082 2.714-.924 4.194.108 1.019.425 1.999 1.076 2.845 1.652 2.148 5.275 2.263 7.164.064Z\"/></svg>";
var arrow = "<svg viewBox=\"0 0 54 51\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M51.962 25.966H0v-1.065h51.962L27.813.753 28.566 0 54 25.434 28.566 50.868l-.753-.753 24.149-24.149Z\"/></svg>";
var contextMenuCollapse = "<svg viewBox=\"0 0 52 61\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.888 61 24.426 30.834l-.293-.334.293-.334L50.888 0l.76.667L25.48 30.5l26.17 29.833-.761.667Zm-24.134 0L.293 30.834 0 30.5l.293-.334L26.754 0l.761.667L1.346 30.5l26.17 29.833-.762.667Z\"/></svg>";
var manage = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M18.77 23.5 3 37.25V48.5h44.444l-28.673-25ZM40.5 16.556a5.556 5.556 0 1 1-11.111 0 5.556 5.556 0 0 1 11.111 0Z\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50 0H0v50h50V0Zm-3 3H3v44h44V3Z\"/></g></svg>";
var reorderingArrows = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.5.5h49v49H.5z\"/><g fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M21.67 15.053 21.616 15 17 19.616l.365.365 3.975-3.974v9.52h.554v-9.52l3.975 3.974.365-.365-4.564-4.563Zm-.044.686-.01-.01-.008.01h.018ZM27.986 34.947l-.054.053-4.616-4.616.365-.365 3.975 3.974v-9.52h.554v9.52l3.974-3.974.365.365-4.563 4.563Zm-.044-.686-.01.01-.008-.01h.018Z\"/></g></svg>";
var add = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M26 0h-2v24H0v2h24v24h2V26h24v-2H26V0Z\"/></svg>";
var wordmark = "<svg viewBox=\"0 0 180 63\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M7.956 19.045c0-10.628 3.06-15.653 7.524-15.653 4.896 0 11.412 6.146 17.172 17.962V2.781C30.024 1.592 26.64.777 22.752.777 8.532.777 0 12.831 0 30.284c0 18.03 8.136 32.563 23.004 32.563 4.14 0 7.596-.781 9.72-2.377V42.508c-2.52 1.596-5.076 1.834-6.768 1.834-12.492 0-18-13.718-18-25.297ZM44.136 0c-4.32 0-7.776 3.192-7.776 7.029 0 4.074 3.456 7.266 7.776 7.266s7.776-3.192 7.776-7.266C51.948 3.192 48.456 0 44.136 0ZM37.404 27.026v35.041h13.86V17.213H37.152c.252 3.294.252 6.553.252 9.813ZM91.116 31.58h-.18V17.215H77.148v44.855h13.86V35.824c0-5.976 2.808-8.285 6.192-8.285 2.952 0 6.336 1.765 8.784 4.312v-14.6c-1.944-.951-3.96-1.19-5.58-1.19-3.708-.033-8.46 1.8-9.288 15.518ZM130.86 57.212c-.684 1.12-2.268 1.426-3.456 1.426-3.708 0-4.752-2.377-4.752-5.67V17.212h-13.86v31.68c0 4.618.252 14.057 11.52 14.057 5.832 0 9.576-3.192 10.584-5.33V62.1h13.824V17.213h-13.86v39.999ZM165.024 29.373c-4.644-3.43-8.64-6.315-8.64-9.337 0-1.766 1.188-2.717 3.132-2.717 4.14 0 11.664 5.195 17.928 15.246V18.779c-4.068-1.901-8.28-2.954-12.42-2.954-9.288 0-15.3 5.094-15.3 13.175 0 9.1 7.704 15.008 14.112 19.795 4.572 3.43 8.46 6.384 8.46 9.745 0 2.004-1.188 3.022-3.06 3.022-4.392 0-12.672-5.67-19.692-18.335v16.502c2.808 1.664 8.388 3.26 13.716 3.26 10.152 0 16.74-5.84 16.74-13.65 0-8.829-8.208-15.042-14.976-19.966ZM75.276 17.22h-2.952c-.792 0-1.44-.612-1.44-1.359v-9.1c-4.5 4.38-10.476 8.047-15.3 10.458 1.008 1.12 1.44 4.143 1.44 11.884v27.402c0 1.29.396 2.58 1.188 3.667 1.476 1.97 3.852 2.818 7.2 2.818h5.508V19.325c0-.544.468-.985 1.044-.985h3.348l.396-.51-.432-.61Z\"/></g></svg>";
var logo = "<svg viewBox=\"0 0 52 63\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M7.97 18.299c0-10.646 3.065-15.68 7.536-15.68 4.904 0 11.431 6.156 17.201 17.992V2.007C30.075.817 26.685 0 22.791 0 8.546 0 0 12.074 0 29.557c0 18.06 8.15 32.617 23.043 32.617 4.147 0 7.609-.782 9.736-2.38V41.8c-2.524 1.599-5.084 1.837-6.78 1.837-12.512 0-18.03-13.741-18.03-25.34ZM44.21 48.304c-4.327 0-7.789 3.197-7.789 7.04 0 4.082 3.462 7.28 7.79 7.28 4.327 0 7.789-3.198 7.789-7.28.036-3.843-3.462-7.04-7.79-7.04Z\"/></g></svg>";
var editableElement = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M.107 47.846c-.486 1.28.768 2.533 2.048 2.047L16.92 44.29c.21-.08.4-.203.56-.362l32.055-32.055c.62-.62.62-1.626 0-2.246L40.373.465a1.588 1.588 0 0 0-2.245 0L6.072 32.521c-.159.159-.282.35-.362.56L.107 47.844Zm5.565-6.528 3.01 3.01 6.953-2.638 1.713-1.712-7.326-7.326-1.712 1.713-2.638 6.953Zm13.717-3.381L36.925 20.4l-7.326-7.326-17.535 17.536 7.325 7.326ZM46.575 10.75l-7.61 7.61-7.325-7.326 7.61-7.61 7.325 7.326Z\"/></svg>";
var settings = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28 0h-6v6.489a18.651 18.651 0 0 0-7.967 3.301l-4.59-4.589-4.242 4.243 4.59 4.589A18.651 18.651 0 0 0 6.488 22H0v6h6.489a18.65 18.65 0 0 0 3.301 7.967l-4.589 4.59 4.243 4.242 4.589-4.59A18.653 18.653 0 0 0 22 43.512V50h6v-6.489a18.653 18.653 0 0 0 7.967-3.301l4.59 4.589 4.242-4.243-4.59-4.589A18.65 18.65 0 0 0 43.512 28H50v-6h-6.489a18.652 18.652 0 0 0-3.301-7.967l4.589-4.59-4.243-4.242-4.589 4.59A18.651 18.651 0 0 0 28 6.488V0Zm-3 37.5c6.904 0 12.5-5.596 12.5-12.5S31.904 12.5 25 12.5 12.5 18.096 12.5 25 18.096 37.5 25 37.5Z\"/></svg>";
var switchWallets = "<svg viewBox=\"0 0 64 46\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5a5 5 0 0 1 5-5h54a5 5 0 0 1 5 5v36a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5Zm5-2.5h54A2.5 2.5 0 0 1 61.5 5v12h-26a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h26v12a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 41V5A2.5 2.5 0 0 1 5 2.5ZM38 21h4v4h-4v-4Z\"/></svg>";
var syncWallets = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M49 25h-3c0-12.15-9.85-22-22-22C15.351 3 7.868 7.991 4.273 15.25H17.5v2.5H.25V.5h2.5v11.324C7.16 4.726 15.028 0 24 0c13.807 0 25 11.193 25 25ZM49.057 49.5h-2.5V38.176C42.147 45.274 34.28 50 25.307 50c-13.807 0-25-11.193-25-25h3c0 12.15 9.85 22 22 22 8.65 0 16.133-4.991 19.727-12.25H31.807v-2.5h17.25V49.5Z\"/></g></svg>";
var rearrangeCover = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.5 49.5h49V.5H.5z\"/><g><path d=\"M25.19 13.066h-.001L25.121 13 21.2 16.782l.466.453 3.099-2.985v6.515h.713V14.25l3.1 2.985.465-.453-3.854-3.716ZM13.068 25.07v-.001l-.068-.07 3.922-3.994.47.475L13.94 25l3.452 3.52-.47.475-3.854-3.925ZM36.931 25.069l-3.853 3.926-.47-.475L36.06 25l-3.452-3.52.47-.475L37 24.999l-.069.07ZM25.478 35.75v-6.515h-.713v6.515l-3.1-2.985-.465.453 3.853 3.716.069.066 3.921-3.782-.466-.453-3.1 2.985Z\"/></g></svg>";
var rearrangeCoverSaveExit = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.5 49.5h49V.5H.5z\"/><path d=\"m21.328 32.828-.002.002L13 24.673l1.186-1.173 7.314 7.156L35.314 17l1.186 1.173L21.501 33l-.173-.172Z\"/></svg>";
var minusEmpty = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 24h50v2H0v-2Z\"/></svg>";
var move = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"m25.395.137-.001.001L25.252 0l-8.17 7.879.971.945 6.457-6.22v13.573h1.486V2.604l6.457 6.22.97-.945L25.395.137ZM.142 25.145l.001-.001L0 24.999l8.17-8.322.98.989L1.958 25l7.192 7.334-.98.989-8.028-8.178ZM49.856 25.144h.002l-8.028 8.179-.98-.989L48.042 25l-7.192-7.334.98-.989L50 25l-.144.145ZM25.996 47.396V33.824H24.51v13.572l-6.457-6.22-.97.945 8.028 7.742v-.001l.143.138 8.169-7.879-.97-.945-6.457 6.22Z\"/></g></svg>";
var collectionCover = "<svg viewBox=\"0 0 48 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.71 2.598a.3.3 0 0 1 .572 0l4.449 14.264a1.3 1.3 0 0 0 1.24.913h14.464a.3.3 0 0 1 .18.539L32.86 27.213a1.3 1.3 0 0 0-.456 1.423l4.477 14.356a.3.3 0 0 1-.467.329L24.78 34.516a1.3 1.3 0 0 0-1.57 0L11.58 43.321a.3.3 0 0 1-.467-.329l4.477-14.356a1.3 1.3 0 0 0-.457-1.423l-11.756-8.9a.3.3 0 0 1 .18-.538H18.02a1.3 1.3 0 0 0 1.241-.913l4.448-14.264Z\"/></svg>";
var visible = "<svg viewBox=\"0 0 65 39\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M32.501 26.097c3.264 0 5.91-3.063 5.91-6.842 0-3.778-2.646-6.842-5.91-6.842-3.263 0-5.909 3.063-5.909 6.842 0 3.78 2.646 6.842 5.91 6.842Z\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32.5 38.82C14.55 38.82 0 19.41 0 19.41S14.55 0 32.5 0 65 19.41 65 19.41 50.45 38.82 32.5 38.82ZM3.667 21.437a56.975 56.975 0 0 1-1.751-2.027 56.963 56.963 0 0 1 1.75-2.027 65.465 65.465 0 0 1 6.808-6.521C16.258 6.09 24.045 1.5 32.5 1.5s16.242 4.59 22.026 9.362a65.46 65.46 0 0 1 6.807 6.52c.746.826 1.335 1.522 1.751 2.028a56.988 56.988 0 0 1-1.75 2.027 65.45 65.45 0 0 1-6.808 6.52C48.742 32.73 40.955 37.32 32.5 37.32s-16.242-4.59-22.026-9.362a65.454 65.454 0 0 1-6.807-6.521Z\"/></g></svg>";
var hidden = "<svg viewBox=\"0 0 65 48\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M48.434 8.108 55.48 1.06 54.421 0l-7.349 7.348C42.69 5.006 37.74 3.352 32.5 3.352 14.55 3.352 0 22.762 0 22.762s6.803 9.075 16.844 14.815l-8.386 8.385 1.061 1.06 8.695-8.694c4.312 2.261 9.16 3.844 14.286 3.844 17.95 0 32.5-19.41 32.5-19.41s-6.678-8.908-16.566-14.654Zm-2.472.35C41.849 6.32 37.282 4.852 32.5 4.852c-8.455 0-16.242 4.59-22.026 9.362a65.465 65.465 0 0 0-6.807 6.521 57.065 57.065 0 0 0-1.751 2.027 56.963 56.963 0 0 0 1.75 2.027 65.465 65.465 0 0 0 6.808 6.521c2.22 1.832 4.736 3.637 7.47 5.166L45.963 8.458ZM19.327 37.215 47.335 9.206c2.627 1.495 5.047 3.239 7.191 5.008a65.46 65.46 0 0 1 6.807 6.521c.746.825 1.335 1.52 1.751 2.027a56.976 56.976 0 0 1-1.75 2.027 65.46 65.46 0 0 1-6.808 6.521c-5.784 4.772-13.571 9.362-22.026 9.362-4.67 0-9.136-1.4-13.173-3.457Z\"/></svg>";
var search = "<svg viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.137 4.484c5.675 5.676 5.963 14.698.865 20.714L44 42.196 42.196 44 25.198 27.002c-6.016 5.098-15.038 4.81-20.714-.865-5.979-5.98-5.979-15.674 0-21.653 5.98-5.979 15.674-5.979 21.653 0Zm-1.444 20.21c5.182-5.183 5.182-13.584 0-18.766C19.511.746 11.11.746 5.928 5.928s-5.182 13.583 0 18.765 13.583 5.182 18.765 0Z\"/></svg>";
var moreLinks = "<svg viewBox=\"0 0 50 50\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Zm-.005-33.003a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3 8.141a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-3 14.148a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\"/></svg>";

var allIcons = /*#__PURE__*/Object.freeze({
    __proto__: null,
    masonryLayout: masonryLayout,
    gridLayout: gridLayout,
    fullLayout: fullLayout,
    irregularLayout: irregularLayout,
    horizontalArrowsII: horizontalArrowsII,
    info: info,
    minus: minus,
    cross: cross,
    chevron: chevron,
    horizontalEllipse: horizontalEllipse,
    superrare: superrare,
    oncyber: oncyber,
    externalWebsiteLink: externalWebsiteLink,
    foundation: foundation,
    saveCheckmark: saveCheckmark,
    revertArrrow: revertArrrow,
    upwardDiagonalArrow: upwardDiagonalArrow,
    opensea: opensea,
    discord: discord,
    facebook: facebook,
    flickr: flickr,
    instagram: instagram,
    linkedin: linkedin,
    medium: medium,
    pinterest: pinterest,
    reddit: reddit,
    sloika: sloika,
    snapchat: snapchat,
    tumblr: tumblr,
    twitter: twitter,
    vimeo: vimeo,
    whatsapp: whatsapp,
    youtube: youtube,
    tiktok: tiktok,
    showtime: showtime,
    niftyGateway: niftyGateway,
    knownOrigin: knownOrigin,
    etherscanLogoLightCircle: etherscanLogoLightCircle,
    looksrare: looksrare,
    makersplace: makersplace,
    arrow: arrow,
    contextMenuCollapse: contextMenuCollapse,
    manage: manage,
    reorderingArrows: reorderingArrows,
    add: add,
    wordmark: wordmark,
    logo: logo,
    editableElement: editableElement,
    settings: settings,
    switchWallets: switchWallets,
    syncWallets: syncWallets,
    rearrangeCover: rearrangeCover,
    rearrangeCoverSaveExit: rearrangeCoverSaveExit,
    minusEmpty: minusEmpty,
    move: move,
    collectionCover: collectionCover,
    visible: visible,
    hidden: hidden,
    search: search,
    moreLinks: moreLinks
});

var icons = function (svg) {
    return allIcons[svg];
};

var Icon = function (_a) {
    var variant = _a.variant, toolTip = _a.toolTip, _b = _a.invert, invert = _b === void 0 ? false : _b, props = __rest(_a, ["variant", "toolTip", "invert"]);
    var color = invert && styles.invert;
    var classList = classnames(styles.root, color);
    return (React.createElement("div", __assign({ className: classList, dangerouslySetInnerHTML: { __html: icons(variant) } }, props), toolTip && React.createElement("div", { className: styles.toolTip }, toolTip)));
};

export { Button, ButtonGroup, Card, Gallery, GridWrapper, Header, Icon, Menu, Overlay, SidePanel, SideBar as Sidebar, Text, Theme, TopBar };
//# sourceMappingURL=index.js.map
