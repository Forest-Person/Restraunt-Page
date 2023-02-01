/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/AmaticSC-Regular.ttf */ "./src/fonts/AmaticSC-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/AmaticSC-Bold.ttf */ "./src/fonts/AmaticSC-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \n////// Color Pallette for this site \\\\\\\\\\\\\nrgb(101, 136, 100)\nrgb(183, 183, 138)\nrgb(221, 221, 221)\nrgb(238, 238, 238)\n\nrgba values tored as variables below VVV\n\n*/\n\n:root {\n    --green: rgba(101,136,100,1.000);\n    --greenTransparent:rgba(101,136,100,.7);\n    --greenTransparent2:rgba(101,136,100,.85);;\n    --greyGreen: rgba(183,183,138,1.000);\n    --grey: rgba(221,221,221,1.000);\n    --greyTransparent: rgba(221,221,221,.85);\n    --whiteGrey: rgba(238,238,238,1.000);\n    --whiteGreyTransparent:rgba(238,238,238,.6);\n  }\n\nbody  {\n\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    background-color: var(--greyGreen);\n    \n    \n}\n\n/*.contact {\n\n\n    padding: 0;\n    margin: 0;\n    background-image:url(\"./images/patrick-schneider-evening-dining-unsplash2.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    height:100vh;\n    width:100vw;\n    border:0;\n\n\n}*/\n\n\n\n/*.homePage {\n\n   \n    padding: 0;\n    margin: 0;\n    background-image:url(\"./images/kristian-angelo-dining-scene-unsplash2.PNG\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    height:100vh;\n    width:100vw;\n    border:0;\n\n} */\n\n.restarauntName > p {\n    background-color: var(--greenTransparent);\n    font-size: 4rem;\n    padding:0;\n    margin:0;\n    font-family:handWrittenBold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color:white;\n }\n\n\n.tabMenu {\n\n    \n    background-color: rgba(183,183,138,.9);\n    list-style: none;\n    padding:0;\n    margin:0;\n    font-family: handWrittenBold;\n    display:flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 3rem;\n    \n    \n}\n\n.sloganContainer {\n\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    text-align: center;\n    padding-top:6rem;\n    \n\n}\n\n.foodSlogan {\n\n    color:black;\n    font-family: handWritten;\n    font-size: 2.5rem;\n    font-weight:bold;\n    flex:0 1 auto;\n    background:var(--greyTransparent);\n    padding:.5rem;\n    padding-left: 1rem;\n    padding-right:1rem;\n    border-radius: 10px;\n\n    \n    \n}\n\n.restarauntName {\n\n    position:sticky;\n}\n\n.tabMenu {\n\n    position:sticky;\n}\n\n.contactInfo {\n\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: handWritten;\n    font-size: 2rem;\n    color:white;\n    \n    \n    \n    \n}\n\n.contactNumberAddress{\n\n    background: var(--greyTransparent);\n    margin-top:1rem;\n    color:black;\n    padding:.5rem;\n    border-radius: 10px;\n    margin-bottom:0;\n}\n\n\n\n.hoursOpen {\n\n    display:grid;\n    grid-template-columns: 2fr 2fr 2fr 2fr;\n    column-gap: 1rem;\n    background: var(--greenTransparent2);\n    row-gap: 1rem;\n    border-radius: 10px;\n    font-size: 2rem;\n    align-items: center;\n    justify-items: center;\n    padding-left:3rem;\n    \n    \n    \n    \n}\n\n@media (max-width: 1000px) {\n    .hoursOpen {\n\n        display:grid;\n        grid-template-columns: 1fr ;\n        column-gap: 1rem;\n        background: var(--greenTransparent2);\n        row-gap: 1rem;\n        border-radius: 10px;\n        font-size: 2rem;\n        align-items: center;\n        justify-items: center;\n        padding-left:1rem;\n        padding-right:1rem;\n        \n        \n        \n        \n    }\n  }\n\n.contactInfo h1, h2 {\n\n    \nmargin-top:0;\nmargin-bottom:0;\n    \n}\n\n\n\n\n@font-face {\n    font-family: handWritten;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  }\n\n  @font-face {\n    font-family: handWrittenBold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;CASC;;AAED;IACI,gCAAgC;IAChC,uCAAuC;IACvC,yCAAyC;IACzC,oCAAoC;IACpC,+BAA+B;IAC/B,wCAAwC;IACxC,oCAAoC;IACpC,2CAA2C;EAC7C;;AAEF;;IAEI,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,kCAAkC;;;AAGtC;;AAEA;;;;;;;;;;;;;;;EAeE;;;;AAIF;;;;;;;;;;;;;;GAcG;;AAEH;IACI,yCAAyC;IACzC,eAAe;IACf,SAAS;IACT,QAAQ;IACR,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;CACd;;;AAGD;;;IAGI,sCAAsC;IACtC,gBAAgB;IAChB,SAAS;IACT,QAAQ;IACR,4BAA4B;IAC5B,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;;;AAGnB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;;;AAGpB;;AAEA;;IAEI,WAAW;IACX,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;;;;AAIvB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;IACxB,eAAe;IACf,WAAW;;;;;AAKf;;AAEA;;IAEI,kCAAkC;IAClC,eAAe;IACf,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;;;AAIA;;IAEI,YAAY;IACZ,sCAAsC;IACtC,gBAAgB;IAChB,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;;;;;AAKrB;;AAEA;IACI;;QAEI,YAAY;QACZ,2BAA2B;QAC3B,gBAAgB;QAChB,oCAAoC;QACpC,aAAa;QACb,mBAAmB;QACnB,eAAe;QACf,mBAAmB;QACnB,qBAAqB;QACrB,iBAAiB;QACjB,kBAAkB;;;;;IAKtB;EACF;;AAEF;;;AAGA,YAAY;AACZ,eAAe;;AAEf;;;;;AAKA;IACI,wBAAwB;IACxB,4CAAsC;EACxC;;EAEA;IACE,4BAA4B;IAC5B,4CAAmC;EACrC","sourcesContent":["/* \n////// Color Pallette for this site \\\\\\\\\\\\\nrgb(101, 136, 100)\nrgb(183, 183, 138)\nrgb(221, 221, 221)\nrgb(238, 238, 238)\n\nrgba values tored as variables below VVV\n\n*/\n\n:root {\n    --green: rgba(101,136,100,1.000);\n    --greenTransparent:rgba(101,136,100,.7);\n    --greenTransparent2:rgba(101,136,100,.85);;\n    --greyGreen: rgba(183,183,138,1.000);\n    --grey: rgba(221,221,221,1.000);\n    --greyTransparent: rgba(221,221,221,.85);\n    --whiteGrey: rgba(238,238,238,1.000);\n    --whiteGreyTransparent:rgba(238,238,238,.6);\n  }\n\nbody  {\n\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    background-color: var(--greyGreen);\n    \n    \n}\n\n/*.contact {\n\n\n    padding: 0;\n    margin: 0;\n    background-image:url(\"./images/patrick-schneider-evening-dining-unsplash2.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    height:100vh;\n    width:100vw;\n    border:0;\n\n\n}*/\n\n\n\n/*.homePage {\n\n   \n    padding: 0;\n    margin: 0;\n    background-image:url(\"./images/kristian-angelo-dining-scene-unsplash2.PNG\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    height:100vh;\n    width:100vw;\n    border:0;\n\n} */\n\n.restarauntName > p {\n    background-color: var(--greenTransparent);\n    font-size: 4rem;\n    padding:0;\n    margin:0;\n    font-family:handWrittenBold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color:white;\n }\n\n\n.tabMenu {\n\n    \n    background-color: rgba(183,183,138,.9);\n    list-style: none;\n    padding:0;\n    margin:0;\n    font-family: handWrittenBold;\n    display:flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 3rem;\n    \n    \n}\n\n.sloganContainer {\n\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    text-align: center;\n    padding-top:6rem;\n    \n\n}\n\n.foodSlogan {\n\n    color:black;\n    font-family: handWritten;\n    font-size: 2.5rem;\n    font-weight:bold;\n    flex:0 1 auto;\n    background:var(--greyTransparent);\n    padding:.5rem;\n    padding-left: 1rem;\n    padding-right:1rem;\n    border-radius: 10px;\n\n    \n    \n}\n\n.restarauntName {\n\n    position:sticky;\n}\n\n.tabMenu {\n\n    position:sticky;\n}\n\n.contactInfo {\n\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: handWritten;\n    font-size: 2rem;\n    color:white;\n    \n    \n    \n    \n}\n\n.contactNumberAddress{\n\n    background: var(--greyTransparent);\n    margin-top:1rem;\n    color:black;\n    padding:.5rem;\n    border-radius: 10px;\n    margin-bottom:0;\n}\n\n\n\n.hoursOpen {\n\n    display:grid;\n    grid-template-columns: 2fr 2fr 2fr 2fr;\n    column-gap: 1rem;\n    background: var(--greenTransparent2);\n    row-gap: 1rem;\n    border-radius: 10px;\n    font-size: 2rem;\n    align-items: center;\n    justify-items: center;\n    padding-left:3rem;\n    \n    \n    \n    \n}\n\n@media (max-width: 1000px) {\n    .hoursOpen {\n\n        display:grid;\n        grid-template-columns: 1fr ;\n        column-gap: 1rem;\n        background: var(--greenTransparent2);\n        row-gap: 1rem;\n        border-radius: 10px;\n        font-size: 2rem;\n        align-items: center;\n        justify-items: center;\n        padding-left:1rem;\n        padding-right:1rem;\n        \n        \n        \n        \n    }\n  }\n\n.contactInfo h1, h2 {\n\n    \nmargin-top:0;\nmargin-bottom:0;\n    \n}\n\n\n\n\n@font-face {\n    font-family: handWritten;\n    src: url(./fonts/AmaticSC-Regular.ttf);\n  }\n\n  @font-face {\n    font-family: handWrittenBold;\n    src: url(./fonts/AmaticSC-Bold.ttf);\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertContactPage": () => (/* binding */ insertContactPage)
/* harmony export */ });
function insertContactPage(){

  const content = document.querySelector('#content');


  content.style.cssText = 'padding: 0;margin: 0;background-image:url("./patrick-schneider-evening-dining-unsplash2.jpg");background-size: cover;background-repeat: no-repeat;background-position: center;background-attachment: fixed;height:100vh;width:100vw;border:0;'


    let contactPageString = 
    
    `<div class = 'restarauntName'>
         <p>Green's Food Escape</p>
               </div>
 
       <menu class = 'tabMenu'>
 
         <li class = 'homeButton'>  Home  </li>
         <li class = 'menuButton'>  Menu  </li>
         <li class = 'contactButton' style = 'padding:.3rem; border:5px solid black; border-radius:15px;' >Contact</li>
 
       </menu>

       <main class = 'contactInfo'>

       <div class = 'contactNumberAddress'>
        <h1> Contact us! </h1>
        <h2> Phone Number: 123-123-1234 </h2>
        <h2> Address:</h2><p style = 'display:flex; align-items: center; justify-content:center;'> 141738 Big Drive Way <br> Foodiah, Califorknia <br> 95473</p>

      </div>
       
        
        
        <div class = 'openDiv'>  
        <p style = ' background-color:var(--greenTransparent2);font-family:handWrittenBold;font-size:4rem;display:flex; align-items:center; justify-content:center; padding-bottom:0; margin-bottom:.5rem; margin-top:.5rem; border-radius:10px;' > Open</p>
        </div>
            
          <div class = 'hoursOpen'>
            <p>Friday & Saturday Lunch 11:30 - 3:30</p>
            <p>Friday & Saturday Dinner 4:30 - 8:30</p>
            <p>Sunday Lunch 11:30 - 3:30</p>
            <p>Sunday Dinner 4:00 - 8:30</p>
            <p>Monday Lunch 11:30 - 3:30</p>
            <p>Monday 4:30 - 8:30 </p>
            <p>Wednesday 4:30 to 8:30</p>
            <p>Thursday 4:30 - 8:30</p>
          </div>

        
       
        </main>
       
       `
     
 
   
   
   
   
 
   document.querySelector("#content").insertAdjacentHTML('afterbegin',contactPageString)
 
 }
 
 

/***/ }),

/***/ "./src/frontPage.js":
/*!**************************!*\
  !*** ./src/frontPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertFrontPage": () => (/* binding */ insertFrontPage)
/* harmony export */ });
//Front page of restaraunt app frontPage.js


function insertFrontPage(){

    const content = document.querySelector('#content');

    content.style.cssText = "padding: 0; margin: 0; background-image: url('./kristian-angelo-dining-scene-unsplash2.PNG'); background-size: cover; background-repeat: no-repeat; background-position: center; background-attachment: fixed; height:100vh; width:100vw; border:0;";

    //content.classList.add('homePage')

   let frontPageString = 
   
   `<div class = 'restarauntName'>
        <p>Green's Food Escape</p>
              </div>

      <menu class = 'tabMenu'>

        <li class = 'homeButton' style = 'padding:.3rem; border:5px solid black; border-radius:15px;'>Home</li>
        <li class = 'menuButton' >Menu</li>
        <li class = 'contactButton' >Contact</li>

      </menu>
      
      <main class = 'sloganContainer'>

      <h1 class = 'foodSlogan'> Escape with us, please sit down, close your eyes, and BANGEEEERAAANNNG!</h1>
      
      </main>
      `
    

  
  
  
  

  document.querySelector("#content").insertAdjacentHTML('afterbegin',frontPageString)

}



/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertMenuPage": () => (/* binding */ insertMenuPage)
/* harmony export */ });
//Front page of restaraunt app frontPage.js


function insertMenuPage(){

  const content = document.querySelector('#content');


  content.style.cssText = 'padding: 0;margin: 0;background-image:url("./travis-grossen-chef-unsplash2.jpg");background-size: cover;background-repeat: no-repeat;background-position: center;background-attachment: fixed;height:100vh;width:100vw;border:0;'


    let menuPageString = 
    
    `<div class = 'restarauntName'>
         <p>Green's Food Escape</p>
               </div>
 
       <menu class = 'tabMenu'>
 
         <li class = 'homeButton' '>Home</li>
         <li class = 'menuButton' style = 'padding:.3rem; border:5px solid black; border-radius:15px;' >Menu</li>
         <li class = 'contactButton' >Contact</li>
 
       </menu>
       
       
       `
     

   
   
   
   
 
   document.querySelector("#content").insertAdjacentHTML('afterbegin',menuPageString)
 
 }
 
 

/***/ }),

/***/ "./src/fonts/AmaticSC-Bold.ttf":
/*!*************************************!*\
  !*** ./src/fonts/AmaticSC-Bold.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f12c1d887cda2131ac83.ttf";

/***/ }),

/***/ "./src/fonts/AmaticSC-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/AmaticSC-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd9971162ff94dc53856.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _frontPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontPage.js */ "./src/frontPage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");
/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage.js */ "./src/contactPage.js");

 




function removeAllChildNodes(parent) {  //function to remove all child nodes of an element
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeClass(newClassName) { //function to change classname for when a new link is clicked.


if (content.classList.contains(newClassName) !== true){

    content.className = newClassName
}

}

(0,_frontPage_js__WEBPACK_IMPORTED_MODULE_1__.insertFrontPage)()

const content = document.querySelector('#content');





content.addEventListener('click',(event)=>{ //Insert Menu Page and remove all old nodes.

   const elementTarget = event.target

    if (elementTarget.className === 'homeButton') {

        removeAllChildNodes(content)
        ;(0,_frontPage_js__WEBPACK_IMPORTED_MODULE_1__.insertFrontPage)()

    }else if (elementTarget.className === 'menuButton'){

    removeAllChildNodes(content)

    ;(0,_menuPage_js__WEBPACK_IMPORTED_MODULE_2__.insertMenuPage)()

}else if (elementTarget.className === 'contactButton') {

    removeAllChildNodes(content)
    ;(0,_contactPage_js__WEBPACK_IMPORTED_MODULE_3__.insertContactPage)()

}

}
)











  










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNEI7QUFDRjtBQUNLOzs7QUFHcEQsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7O0FBR3JDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsOERBQWU7O0FBRWY7Ozs7OztBQU1BLDRDQUE0Qzs7QUFFNUM7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLCtEQUFlOztBQUV2QixLQUFLOztBQUVMOztBQUVBLElBQUksNkRBQWM7O0FBRWxCLENBQUM7O0FBRUQ7QUFDQSxJQUFJLG1FQUFpQjs7QUFFckI7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9zcmMvZnJvbnRQYWdlLmpzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQW1hdGljU0MtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FtYXRpY1NDLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFxcbi8vLy8vLyBDb2xvciBQYWxsZXR0ZSBmb3IgdGhpcyBzaXRlIFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcbnJnYigxMDEsIDEzNiwgMTAwKVxcbnJnYigxODMsIDE4MywgMTM4KVxcbnJnYigyMjEsIDIyMSwgMjIxKVxcbnJnYigyMzgsIDIzOCwgMjM4KVxcblxcbnJnYmEgdmFsdWVzIHRvcmVkIGFzIHZhcmlhYmxlcyBiZWxvdyBWVlZcXG5cXG4qL1xcblxcbjpyb290IHtcXG4gICAgLS1ncmVlbjogcmdiYSgxMDEsMTM2LDEwMCwxLjAwMCk7XFxuICAgIC0tZ3JlZW5UcmFuc3BhcmVudDpyZ2JhKDEwMSwxMzYsMTAwLC43KTtcXG4gICAgLS1ncmVlblRyYW5zcGFyZW50MjpyZ2JhKDEwMSwxMzYsMTAwLC44NSk7O1xcbiAgICAtLWdyZXlHcmVlbjogcmdiYSgxODMsMTgzLDEzOCwxLjAwMCk7XFxuICAgIC0tZ3JleTogcmdiYSgyMjEsMjIxLDIyMSwxLjAwMCk7XFxuICAgIC0tZ3JleVRyYW5zcGFyZW50OiByZ2JhKDIyMSwyMjEsMjIxLC44NSk7XFxuICAgIC0td2hpdGVHcmV5OiByZ2JhKDIzOCwyMzgsMjM4LDEuMDAwKTtcXG4gICAgLS13aGl0ZUdyZXlUcmFuc3BhcmVudDpyZ2JhKDIzOCwyMzgsMjM4LC42KTtcXG4gIH1cXG5cXG5ib2R5ICB7XFxuXFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXlHcmVlbik7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLyouY29udGFjdCB7XFxuXFxuXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcIi4vaW1hZ2VzL3BhdHJpY2stc2NobmVpZGVyLWV2ZW5pbmctZGluaW5nLXVuc3BsYXNoMi5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBib3JkZXI6MDtcXG5cXG5cXG59Ki9cXG5cXG5cXG5cXG4vKi5ob21lUGFnZSB7XFxuXFxuICAgXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcIi4vaW1hZ2VzL2tyaXN0aWFuLWFuZ2Vsby1kaW5pbmctc2NlbmUtdW5zcGxhc2gyLlBOR1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIGJvcmRlcjowO1xcblxcbn0gKi9cXG5cXG4ucmVzdGFyYXVudE5hbWUgPiBwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5UcmFuc3BhcmVudCk7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udC1mYW1pbHk6aGFuZFdyaXR0ZW5Cb2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6d2hpdGU7XFxuIH1cXG5cXG5cXG4udGFiTWVudSB7XFxuXFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MywxODMsMTM4LC45KTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udC1mYW1pbHk6IGhhbmRXcml0dGVuQm9sZDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5zbG9nYW5Db250YWluZXIge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOjZyZW07XFxuICAgIFxcblxcbn1cXG5cXG4uZm9vZFNsb2dhbiB7XFxuXFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICBmb250LWZhbWlseTogaGFuZFdyaXR0ZW47XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICBmbGV4OjAgMSBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWdyZXlUcmFuc3BhcmVudCk7XFxuICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDoxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBcXG4gICAgXFxufVxcblxcbi5yZXN0YXJhdW50TmFtZSB7XFxuXFxuICAgIHBvc2l0aW9uOnN0aWNreTtcXG59XFxuXFxuLnRhYk1lbnUge1xcblxcbiAgICBwb3NpdGlvbjpzdGlja3k7XFxufVxcblxcbi5jb250YWN0SW5mbyB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBoYW5kV3JpdHRlbjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgXFxufVxcblxcbi5jb250YWN0TnVtYmVyQWRkcmVzc3tcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JleVRyYW5zcGFyZW50KTtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgcGFkZGluZzouNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTowO1xcbn1cXG5cXG5cXG5cXG4uaG91cnNPcGVuIHtcXG5cXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMmZyIDJmcjtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW5UcmFuc3BhcmVudDIpO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OjNyZW07XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5ob3Vyc09wZW4ge1xcblxcbiAgICAgICAgZGlzcGxheTpncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgO1xcbiAgICAgICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuVHJhbnNwYXJlbnQyKTtcXG4gICAgICAgIHJvdy1nYXA6IDFyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctbGVmdDoxcmVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDoxcmVtO1xcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgIH1cXG4gIH1cXG5cXG4uY29udGFjdEluZm8gaDEsIGgyIHtcXG5cXG4gICAgXFxubWFyZ2luLXRvcDowO1xcbm1hcmdpbi1ib3R0b206MDtcXG4gICAgXFxufVxcblxcblxcblxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogaGFuZFdyaXR0ZW47XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIH1cXG5cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogaGFuZFdyaXR0ZW5Cb2xkO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7O0NBU0M7O0FBRUQ7SUFDSSxnQ0FBZ0M7SUFDaEMsdUNBQXVDO0lBQ3ZDLHlDQUF5QztJQUN6QyxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDcEMsMkNBQTJDO0VBQzdDOztBQUVGOztJQUVJLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtDQUFrQzs7O0FBR3RDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRTs7OztBQUlGOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVIO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2Q7OztBQUdEOzs7SUFHSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlOzs7QUFHbkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7O0FBR3BCOztBQUVBOztJQUVJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7OztBQUl2Qjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsV0FBVzs7Ozs7QUFLZjs7QUFFQTs7SUFFSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7Ozs7QUFJQTs7SUFFSSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7Ozs7O0FBS3JCOztBQUVBO0lBQ0k7O1FBRUksWUFBWTtRQUNaLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsb0NBQW9DO1FBQ3BDLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQjs7Ozs7SUFLdEI7RUFDRjs7QUFFRjs7O0FBR0EsWUFBWTtBQUNaLGVBQWU7O0FBRWY7Ozs7O0FBS0E7SUFDSSx3QkFBd0I7SUFDeEIsNENBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLDRDQUFtQztFQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBcXG4vLy8vLy8gQ29sb3IgUGFsbGV0dGUgZm9yIHRoaXMgc2l0ZSBcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXG5yZ2IoMTAxLCAxMzYsIDEwMClcXG5yZ2IoMTgzLCAxODMsIDEzOClcXG5yZ2IoMjIxLCAyMjEsIDIyMSlcXG5yZ2IoMjM4LCAyMzgsIDIzOClcXG5cXG5yZ2JhIHZhbHVlcyB0b3JlZCBhcyB2YXJpYWJsZXMgYmVsb3cgVlZWXFxuXFxuKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tZ3JlZW46IHJnYmEoMTAxLDEzNiwxMDAsMS4wMDApO1xcbiAgICAtLWdyZWVuVHJhbnNwYXJlbnQ6cmdiYSgxMDEsMTM2LDEwMCwuNyk7XFxuICAgIC0tZ3JlZW5UcmFuc3BhcmVudDI6cmdiYSgxMDEsMTM2LDEwMCwuODUpOztcXG4gICAgLS1ncmV5R3JlZW46IHJnYmEoMTgzLDE4MywxMzgsMS4wMDApO1xcbiAgICAtLWdyZXk6IHJnYmEoMjIxLDIyMSwyMjEsMS4wMDApO1xcbiAgICAtLWdyZXlUcmFuc3BhcmVudDogcmdiYSgyMjEsMjIxLDIyMSwuODUpO1xcbiAgICAtLXdoaXRlR3JleTogcmdiYSgyMzgsMjM4LDIzOCwxLjAwMCk7XFxuICAgIC0td2hpdGVHcmV5VHJhbnNwYXJlbnQ6cmdiYSgyMzgsMjM4LDIzOCwuNik7XFxuICB9XFxuXFxuYm9keSAge1xcblxcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5R3JlZW4pO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi8qLmNvbnRhY3Qge1xcblxcblxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCIuL2ltYWdlcy9wYXRyaWNrLXNjaG5laWRlci1ldmVuaW5nLWRpbmluZy11bnNwbGFzaDIuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICB3aWR0aDoxMDB2dztcXG4gICAgYm9yZGVyOjA7XFxuXFxuXFxufSovXFxuXFxuXFxuXFxuLyouaG9tZVBhZ2Uge1xcblxcbiAgIFxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCIuL2ltYWdlcy9rcmlzdGlhbi1hbmdlbG8tZGluaW5nLXNjZW5lLXVuc3BsYXNoMi5QTkdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBib3JkZXI6MDtcXG5cXG59ICovXFxuXFxuLnJlc3RhcmF1bnROYW1lID4gcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuVHJhbnNwYXJlbnQpO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OmhhbmRXcml0dGVuQm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOndoaXRlO1xcbiB9XFxuXFxuXFxuLnRhYk1lbnUge1xcblxcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODMsMTgzLDEzOCwuOSk7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiBoYW5kV3JpdHRlbkJvbGQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc2xvZ2FuQ29udGFpbmVyIHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDo2cmVtO1xcbiAgICBcXG5cXG59XFxuXFxuLmZvb2RTbG9nYW4ge1xcblxcbiAgICBjb2xvcjpibGFjaztcXG4gICAgZm9udC1mYW1pbHk6IGhhbmRXcml0dGVuO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgZmxleDowIDEgYXV0bztcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1ncmV5VHJhbnNwYXJlbnQpO1xcbiAgICBwYWRkaW5nOi41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6MXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ucmVzdGFyYXVudE5hbWUge1xcblxcbiAgICBwb3NpdGlvbjpzdGlja3k7XFxufVxcblxcbi50YWJNZW51IHtcXG5cXG4gICAgcG9zaXRpb246c3RpY2t5O1xcbn1cXG5cXG4uY29udGFjdEluZm8ge1xcblxcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogaGFuZFdyaXR0ZW47XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uY29udGFjdE51bWJlckFkZHJlc3N7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXlUcmFuc3BhcmVudCk7XFxuICAgIG1hcmdpbi10b3A6MXJlbTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MDtcXG59XFxuXFxuXFxuXFxuLmhvdXJzT3BlbiB7XFxuXFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAyZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuVHJhbnNwYXJlbnQyKTtcXG4gICAgcm93LWdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDozcmVtO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuaG91cnNPcGVuIHtcXG5cXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlblRyYW5zcGFyZW50Mik7XFxuICAgICAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MXJlbTtcXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICB9XFxuICB9XFxuXFxuLmNvbnRhY3RJbmZvIGgxLCBoMiB7XFxuXFxuICAgIFxcbm1hcmdpbi10b3A6MDtcXG5tYXJnaW4tYm90dG9tOjA7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGhhbmRXcml0dGVuO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL0FtYXRpY1NDLVJlZ3VsYXIudHRmKTtcXG4gIH1cXG5cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogaGFuZFdyaXR0ZW5Cb2xkO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL0FtYXRpY1NDLUJvbGQudHRmKTtcXG4gIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gaW5zZXJ0Q29udGFjdFBhZ2UoKXtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG4gIGNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9ICdwYWRkaW5nOiAwO21hcmdpbjogMDtiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4vcGF0cmljay1zY2huZWlkZXItZXZlbmluZy1kaW5pbmctdW5zcGxhc2gyLmpwZ1wiKTtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2JhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7aGVpZ2h0OjEwMHZoO3dpZHRoOjEwMHZ3O2JvcmRlcjowOydcblxuXG4gICAgbGV0IGNvbnRhY3RQYWdlU3RyaW5nID0gXG4gICAgXG4gICAgYDxkaXYgY2xhc3MgPSAncmVzdGFyYXVudE5hbWUnPlxuICAgICAgICAgPHA+R3JlZW4ncyBGb29kIEVzY2FwZTwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuIFxuICAgICAgIDxtZW51IGNsYXNzID0gJ3RhYk1lbnUnPlxuIFxuICAgICAgICAgPGxpIGNsYXNzID0gJ2hvbWVCdXR0b24nPiAgSG9tZSAgPC9saT5cbiAgICAgICAgIDxsaSBjbGFzcyA9ICdtZW51QnV0dG9uJz4gIE1lbnUgIDwvbGk+XG4gICAgICAgICA8bGkgY2xhc3MgPSAnY29udGFjdEJ1dHRvbicgc3R5bGUgPSAncGFkZGluZzouM3JlbTsgYm9yZGVyOjVweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czoxNXB4OycgPkNvbnRhY3Q8L2xpPlxuIFxuICAgICAgIDwvbWVudT5cblxuICAgICAgIDxtYWluIGNsYXNzID0gJ2NvbnRhY3RJbmZvJz5cblxuICAgICAgIDxkaXYgY2xhc3MgPSAnY29udGFjdE51bWJlckFkZHJlc3MnPlxuICAgICAgICA8aDE+IENvbnRhY3QgdXMhIDwvaDE+XG4gICAgICAgIDxoMj4gUGhvbmUgTnVtYmVyOiAxMjMtMTIzLTEyMzQgPC9oMj5cbiAgICAgICAgPGgyPiBBZGRyZXNzOjwvaDI+PHAgc3R5bGUgPSAnZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyc+IDE0MTczOCBCaWcgRHJpdmUgV2F5IDxicj4gRm9vZGlhaCwgQ2FsaWZvcmtuaWEgPGJyPiA5NTQ3MzwvcD5cblxuICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcyA9ICdvcGVuRGl2Jz4gIFxuICAgICAgICA8cCBzdHlsZSA9ICcgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlblRyYW5zcGFyZW50Mik7Zm9udC1mYW1pbHk6aGFuZFdyaXR0ZW5Cb2xkO2ZvbnQtc2l6ZTo0cmVtO2Rpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBwYWRkaW5nLWJvdHRvbTowOyBtYXJnaW4tYm90dG9tOi41cmVtOyBtYXJnaW4tdG9wOi41cmVtOyBib3JkZXItcmFkaXVzOjEwcHg7JyA+IE9wZW48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcyA9ICdob3Vyc09wZW4nPlxuICAgICAgICAgICAgPHA+RnJpZGF5ICYgU2F0dXJkYXkgTHVuY2ggMTE6MzAgLSAzOjMwPC9wPlxuICAgICAgICAgICAgPHA+RnJpZGF5ICYgU2F0dXJkYXkgRGlubmVyIDQ6MzAgLSA4OjMwPC9wPlxuICAgICAgICAgICAgPHA+U3VuZGF5IEx1bmNoIDExOjMwIC0gMzozMDwvcD5cbiAgICAgICAgICAgIDxwPlN1bmRheSBEaW5uZXIgNDowMCAtIDg6MzA8L3A+XG4gICAgICAgICAgICA8cD5Nb25kYXkgTHVuY2ggMTE6MzAgLSAzOjMwPC9wPlxuICAgICAgICAgICAgPHA+TW9uZGF5IDQ6MzAgLSA4OjMwIDwvcD5cbiAgICAgICAgICAgIDxwPldlZG5lc2RheSA0OjMwIHRvIDg6MzA8L3A+XG4gICAgICAgICAgICA8cD5UaHVyc2RheSA0OjMwIC0gODozMDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgPC9tYWluPlxuICAgICAgIFxuICAgICAgIGBcbiAgICAgXG4gXG4gICBcbiAgIFxuICAgXG4gICBcbiBcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLGNvbnRhY3RQYWdlU3RyaW5nKVxuIFxuIH1cbiBcbiBleHBvcnQgeyBpbnNlcnRDb250YWN0UGFnZSB9IiwiLy9Gcm9udCBwYWdlIG9mIHJlc3RhcmF1bnQgYXBwIGZyb250UGFnZS5qc1xuXG5cbmZ1bmN0aW9uIGluc2VydEZyb250UGFnZSgpe1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDA7IG1hcmdpbjogMDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2tyaXN0aWFuLWFuZ2Vsby1kaW5pbmctc2NlbmUtdW5zcGxhc2gyLlBORycpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IGhlaWdodDoxMDB2aDsgd2lkdGg6MTAwdnc7IGJvcmRlcjowO1wiO1xuXG4gICAgLy9jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWVQYWdlJylcblxuICAgbGV0IGZyb250UGFnZVN0cmluZyA9IFxuICAgXG4gICBgPGRpdiBjbGFzcyA9ICdyZXN0YXJhdW50TmFtZSc+XG4gICAgICAgIDxwPkdyZWVuJ3MgRm9vZCBFc2NhcGU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8bWVudSBjbGFzcyA9ICd0YWJNZW51Jz5cblxuICAgICAgICA8bGkgY2xhc3MgPSAnaG9tZUJ1dHRvbicgc3R5bGUgPSAncGFkZGluZzouM3JlbTsgYm9yZGVyOjVweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czoxNXB4Oyc+SG9tZTwvbGk+XG4gICAgICAgIDxsaSBjbGFzcyA9ICdtZW51QnV0dG9uJyA+TWVudTwvbGk+XG4gICAgICAgIDxsaSBjbGFzcyA9ICdjb250YWN0QnV0dG9uJyA+Q29udGFjdDwvbGk+XG5cbiAgICAgIDwvbWVudT5cbiAgICAgIFxuICAgICAgPG1haW4gY2xhc3MgPSAnc2xvZ2FuQ29udGFpbmVyJz5cblxuICAgICAgPGgxIGNsYXNzID0gJ2Zvb2RTbG9nYW4nPiBFc2NhcGUgd2l0aCB1cywgcGxlYXNlIHNpdCBkb3duLCBjbG9zZSB5b3VyIGV5ZXMsIGFuZCBCQU5HRUVFRVJBQUFOTk5HITwvaDE+XG4gICAgICBcbiAgICAgIDwvbWFpbj5cbiAgICAgIGBcbiAgICBcblxuICBcbiAgXG4gIFxuICBcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxmcm9udFBhZ2VTdHJpbmcpXG5cbn1cblxuZXhwb3J0IHsgaW5zZXJ0RnJvbnRQYWdlIH0iLCIvL0Zyb250IHBhZ2Ugb2YgcmVzdGFyYXVudCBhcHAgZnJvbnRQYWdlLmpzXG5cblxuZnVuY3Rpb24gaW5zZXJ0TWVudVBhZ2UoKXtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG4gIGNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9ICdwYWRkaW5nOiAwO21hcmdpbjogMDtiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4vdHJhdmlzLWdyb3NzZW4tY2hlZi11bnNwbGFzaDIuanBnXCIpO2JhY2tncm91bmQtc2l6ZTogY292ZXI7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtoZWlnaHQ6MTAwdmg7d2lkdGg6MTAwdnc7Ym9yZGVyOjA7J1xuXG5cbiAgICBsZXQgbWVudVBhZ2VTdHJpbmcgPSBcbiAgICBcbiAgICBgPGRpdiBjbGFzcyA9ICdyZXN0YXJhdW50TmFtZSc+XG4gICAgICAgICA8cD5HcmVlbidzIEZvb2QgRXNjYXBlPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgPG1lbnUgY2xhc3MgPSAndGFiTWVudSc+XG4gXG4gICAgICAgICA8bGkgY2xhc3MgPSAnaG9tZUJ1dHRvbicgJz5Ib21lPC9saT5cbiAgICAgICAgIDxsaSBjbGFzcyA9ICdtZW51QnV0dG9uJyBzdHlsZSA9ICdwYWRkaW5nOi4zcmVtOyBib3JkZXI6NXB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOjE1cHg7JyA+TWVudTwvbGk+XG4gICAgICAgICA8bGkgY2xhc3MgPSAnY29udGFjdEJ1dHRvbicgPkNvbnRhY3Q8L2xpPlxuIFxuICAgICAgIDwvbWVudT5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICBgXG4gICAgIFxuXG4gICBcbiAgIFxuICAgXG4gICBcbiBcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLG1lbnVQYWdlU3RyaW5nKVxuIFxuIH1cbiBcbiBleHBvcnQgeyBpbnNlcnRNZW51UGFnZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaW5zZXJ0RnJvbnRQYWdlIH0gZnJvbSAnLi9mcm9udFBhZ2UuanMnOyBcbmltcG9ydCB7IGluc2VydE1lbnVQYWdlIH0gZnJvbSAnLi9tZW51UGFnZS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRDb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdFBhZ2UuanMnXG5cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHsgIC8vZnVuY3Rpb24gdG8gcmVtb3ZlIGFsbCBjaGlsZCBub2RlcyBvZiBhbiBlbGVtZW50XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDbGFzcyhuZXdDbGFzc05hbWUpIHsgLy9mdW5jdGlvbiB0byBjaGFuZ2UgY2xhc3NuYW1lIGZvciB3aGVuIGEgbmV3IGxpbmsgaXMgY2xpY2tlZC5cblxuXG5pZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMobmV3Q2xhc3NOYW1lKSAhPT0gdHJ1ZSl7XG5cbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZVxufVxuXG59XG5cbmluc2VydEZyb250UGFnZSgpXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cblxuXG5cbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PnsgLy9JbnNlcnQgTWVudSBQYWdlIGFuZCByZW1vdmUgYWxsIG9sZCBub2Rlcy5cblxuICAgY29uc3QgZWxlbWVudFRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG4gICAgaWYgKGVsZW1lbnRUYXJnZXQuY2xhc3NOYW1lID09PSAnaG9tZUJ1dHRvbicpIHtcblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpXG4gICAgICAgIGluc2VydEZyb250UGFnZSgpXG5cbiAgICB9ZWxzZSBpZiAoZWxlbWVudFRhcmdldC5jbGFzc05hbWUgPT09ICdtZW51QnV0dG9uJyl7XG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpXG5cbiAgICBpbnNlcnRNZW51UGFnZSgpXG5cbn1lbHNlIGlmIChlbGVtZW50VGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbnRhY3RCdXR0b24nKSB7XG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpXG4gICAgaW5zZXJ0Q29udGFjdFBhZ2UoKVxuXG59XG5cbn1cbilcblxuXG5cblxuXG5cblxuXG5cblxuXG4gIFxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9