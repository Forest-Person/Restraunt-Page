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
___CSS_LOADER_EXPORT___.push([module.id, "/* \n////// Color Pallette for this site \\\\\\\\\\\\\nrgb(101, 136, 100)\nrgb(183, 183, 138)\nrgb(221, 221, 221)\nrgb(238, 238, 238)\n\nrgba values tored as variables below VVV\n\n*/\n\n:root {\n    --green: rgba(101,136,100,1.000);\n    --greenTransparent:rgba(101,136,100,.7);\n    --greenTransparent2:rgba(101,136,100,.85);;\n    --greyGreen: rgba(183,183,138,1.000);\n    --grey: rgba(221,221,221,1.000);\n    --greyTransparent: rgba(221,221,221,.85);\n    --whiteGrey: rgba(238,238,238,1.000);\n    --whiteGreyTransparent:rgba(238,238,238,.6);\n  }\n\nbody  {\n\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    background-color: var(--greyGreen);\n    \n    \n}\n\n/*.contact {\n\n\n    padding: 0;\n    margin: 0;\n    background-image:url(\"./images/patrick-schneider-evening-dining-unsplash2.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    height:100vh;\n    width:100vw;\n    border:0;\n\n\n}*/\n\n\n\n/*.homePage {\n\n   \n    padding: 0;\n    margin: 0;\n    background-image:url(\"./images/kristian-angelo-dining-scene-unsplash2.PNG\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    height:100vh;\n    width:100vw;\n    border:0;\n\n} */\n\n.restarauntName > p {\n    background-color: var(--greenTransparent);\n    font-size: 4rem;\n    padding:0;\n    margin:0;\n    font-family:handWrittenBold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color:white;\n }\n\n\n.tabMenu {\n\n    \n    background-color: rgba(183,183,138,.9);\n    list-style: none;\n    padding:0;\n    margin:0;\n    font-family: handWrittenBold;\n    display:flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 3rem;\n    \n    \n}\n\n.sloganContainer {\n\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    text-align: center;\n    padding-top:6rem;\n    \n\n}\n\n.foodSlogan {\n\n    color:black;\n    font-family: handWritten;\n    font-size: 2.5rem;\n    font-weight:bold;\n    flex:0 1 auto;\n    background:var(--greyTransparent);\n    padding:.5rem;\n    padding-left: 1rem;\n    padding-right:1rem;\n    border-radius: 10px;\n\n    \n    \n}\n\n.restarauntName {\n\n    position:sticky;\n}\n\n.tabMenu {\n\n    position:sticky;\n}\n\n.contactInfo {\n\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: handWritten;\n    font-size: 2rem;\n    color:white;\n    \n    \n    \n    \n}\n\n.contactNumberAddress{\n\n    background: var(--greyTransparent);\n    margin-top:1rem;\n    color:black;\n    padding:.5rem;\n    border-radius: 10px;\n    margin-bottom:0;\n}\n\n\n\n.hoursOpen {\n\n    display:grid;\n    grid-template-columns: 2fr 2fr 2fr 2fr;\n    column-gap: 1rem;\n    background: var(--greenTransparent2);\n    row-gap: 1rem;\n    border-radius: 10px;\n    font-size: 2rem;\n    align-items: center;\n    justify-items: center;\n    padding-left:3rem;\n    \n    \n    \n    \n}\n\n@media (max-width: 1000px) {\n    .hoursOpen {\n\n        display:grid;\n        grid-template-columns: 1fr ;\n        column-gap: 1rem;\n        background: var(--greenTransparent2);\n        row-gap: 1rem;\n        border-radius: 10px;\n        font-size: 2rem;\n        align-items: center;\n        justify-items: center;\n        padding-left:1rem;\n        padding-right:1rem;\n        \n        \n        \n        \n    }\n  }\n\n.contactInfo h1, h2 {\n\n    \nmargin-top:0;\nmargin-bottom:0;\n    \n}\n\n.menuChoices div {\n\n    display:flex;\n    flex-direction: column;\n   width:50%;\n    align-items: center;\n    justify-content: center;\n    padding:.5rem;\n    margin:3rem;\n    font-family: handWritten;\n    font-size: 3rem;\n    color:white;\n    \n    \n}\n\n.menuChoices img {\n\n    max-width:50vw;\n    \n}\n\n\n@font-face {\n    font-family: handWritten;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  }\n\n  @font-face {\n    font-family: handWrittenBold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;CASC;;AAED;IACI,gCAAgC;IAChC,uCAAuC;IACvC,yCAAyC;IACzC,oCAAoC;IACpC,+BAA+B;IAC/B,wCAAwC;IACxC,oCAAoC;IACpC,2CAA2C;EAC7C;;AAEF;;IAEI,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,kCAAkC;;;AAGtC;;AAEA;;;;;;;;;;;;;;;EAeE;;;;AAIF;;;;;;;;;;;;;;GAcG;;AAEH;IACI,yCAAyC;IACzC,eAAe;IACf,SAAS;IACT,QAAQ;IACR,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;CACd;;;AAGD;;;IAGI,sCAAsC;IACtC,gBAAgB;IAChB,SAAS;IACT,QAAQ;IACR,4BAA4B;IAC5B,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;;;AAGnB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;;;AAGpB;;AAEA;;IAEI,WAAW;IACX,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;;;;AAIvB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;IACxB,eAAe;IACf,WAAW;;;;;AAKf;;AAEA;;IAEI,kCAAkC;IAClC,eAAe;IACf,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;;;AAIA;;IAEI,YAAY;IACZ,sCAAsC;IACtC,gBAAgB;IAChB,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;;;;;AAKrB;;AAEA;IACI;;QAEI,YAAY;QACZ,2BAA2B;QAC3B,gBAAgB;QAChB,oCAAoC;QACpC,aAAa;QACb,mBAAmB;QACnB,eAAe;QACf,mBAAmB;QACnB,qBAAqB;QACrB,iBAAiB;QACjB,kBAAkB;;;;;IAKtB;EACF;;AAEF;;;AAGA,YAAY;AACZ,eAAe;;AAEf;;AAEA;;IAEI,YAAY;IACZ,sBAAsB;GACvB,SAAS;IACR,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,wBAAwB;IACxB,eAAe;IACf,WAAW;;;AAGf;;AAEA;;IAEI,cAAc;;AAElB;;;AAGA;IACI,wBAAwB;IACxB,4CAAsC;EACxC;;EAEA;IACE,4BAA4B;IAC5B,4CAAmC;EACrC","sourcesContent":["/* \n////// Color Pallette for this site \\\\\\\\\\\\\nrgb(101, 136, 100)\nrgb(183, 183, 138)\nrgb(221, 221, 221)\nrgb(238, 238, 238)\n\nrgba values tored as variables below VVV\n\n*/\n\n:root {\n    --green: rgba(101,136,100,1.000);\n    --greenTransparent:rgba(101,136,100,.7);\n    --greenTransparent2:rgba(101,136,100,.85);;\n    --greyGreen: rgba(183,183,138,1.000);\n    --grey: rgba(221,221,221,1.000);\n    --greyTransparent: rgba(221,221,221,.85);\n    --whiteGrey: rgba(238,238,238,1.000);\n    --whiteGreyTransparent:rgba(238,238,238,.6);\n  }\n\nbody  {\n\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    background-color: var(--greyGreen);\n    \n    \n}\n\n/*.contact {\n\n\n    padding: 0;\n    margin: 0;\n    background-image:url(\"./images/patrick-schneider-evening-dining-unsplash2.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    height:100vh;\n    width:100vw;\n    border:0;\n\n\n}*/\n\n\n\n/*.homePage {\n\n   \n    padding: 0;\n    margin: 0;\n    background-image:url(\"./images/kristian-angelo-dining-scene-unsplash2.PNG\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    height:100vh;\n    width:100vw;\n    border:0;\n\n} */\n\n.restarauntName > p {\n    background-color: var(--greenTransparent);\n    font-size: 4rem;\n    padding:0;\n    margin:0;\n    font-family:handWrittenBold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color:white;\n }\n\n\n.tabMenu {\n\n    \n    background-color: rgba(183,183,138,.9);\n    list-style: none;\n    padding:0;\n    margin:0;\n    font-family: handWrittenBold;\n    display:flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 3rem;\n    \n    \n}\n\n.sloganContainer {\n\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    text-align: center;\n    padding-top:6rem;\n    \n\n}\n\n.foodSlogan {\n\n    color:black;\n    font-family: handWritten;\n    font-size: 2.5rem;\n    font-weight:bold;\n    flex:0 1 auto;\n    background:var(--greyTransparent);\n    padding:.5rem;\n    padding-left: 1rem;\n    padding-right:1rem;\n    border-radius: 10px;\n\n    \n    \n}\n\n.restarauntName {\n\n    position:sticky;\n}\n\n.tabMenu {\n\n    position:sticky;\n}\n\n.contactInfo {\n\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: handWritten;\n    font-size: 2rem;\n    color:white;\n    \n    \n    \n    \n}\n\n.contactNumberAddress{\n\n    background: var(--greyTransparent);\n    margin-top:1rem;\n    color:black;\n    padding:.5rem;\n    border-radius: 10px;\n    margin-bottom:0;\n}\n\n\n\n.hoursOpen {\n\n    display:grid;\n    grid-template-columns: 2fr 2fr 2fr 2fr;\n    column-gap: 1rem;\n    background: var(--greenTransparent2);\n    row-gap: 1rem;\n    border-radius: 10px;\n    font-size: 2rem;\n    align-items: center;\n    justify-items: center;\n    padding-left:3rem;\n    \n    \n    \n    \n}\n\n@media (max-width: 1000px) {\n    .hoursOpen {\n\n        display:grid;\n        grid-template-columns: 1fr ;\n        column-gap: 1rem;\n        background: var(--greenTransparent2);\n        row-gap: 1rem;\n        border-radius: 10px;\n        font-size: 2rem;\n        align-items: center;\n        justify-items: center;\n        padding-left:1rem;\n        padding-right:1rem;\n        \n        \n        \n        \n    }\n  }\n\n.contactInfo h1, h2 {\n\n    \nmargin-top:0;\nmargin-bottom:0;\n    \n}\n\n.menuChoices div {\n\n    display:flex;\n    flex-direction: column;\n   width:50%;\n    align-items: center;\n    justify-content: center;\n    padding:.5rem;\n    margin:3rem;\n    font-family: handWritten;\n    font-size: 3rem;\n    color:white;\n    \n    \n}\n\n.menuChoices img {\n\n    max-width:50vw;\n    \n}\n\n\n@font-face {\n    font-family: handWritten;\n    src: url(./fonts/AmaticSC-Regular.ttf);\n  }\n\n  @font-face {\n    font-family: handWrittenBold;\n    src: url(./fonts/AmaticSC-Bold.ttf);\n  }\n"],"sourceRoot":""}]);
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
        <p style = ' background-color:var(--greenTransparent2);font-family:handWrittenBold;font-size:4rem;display:flex; align-items:center; justify-content:center; padding-bottom:0; margin-bottom:.3rem; margin-top:.3rem; border-radius:10px; padding-left:2rem; padding-right:2rem;' > Open</p>
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


  content.style.cssText = 'padding: 0;margin: 0;height:100vh;width:100vw;border:0;'


    let menuPageString = 
    
    `<div class = 'restarauntName'>
         <p>Green's Food Escape</p>
               </div>
 
       <menu class = 'tabMenu'>
 
         <li class = 'homeButton' '>Home</li>
         <li class = 'menuButton' style = 'padding:.3rem; border:5px solid black; border-radius:15px;' >Menu</li>
         <li class = 'contactButton' >Contact</li>
 
       </menu>

       <section class = 'menuChoices' style = 'display:flex; flex-direction:row; flex-wrap:wrap; justify-content:center; padding:1rem; align-items:center;background-color:var(--greenTransparent);'>

       <div>
          
            <img src = "./alfredo.PNG">
              <h2>Chicken Alfredo</h2>
              <p> Our slow cooked tender chicken slices with long gorgeous hand made pasta strips in the most luxurious cream sauce you have ever dreamed of.</p>
       
        </div>
              
        <div>
            
            <img src = "./pizza.PNG">
              <h2>Pizza Marguerite</h2>
              <p>Our finest pizza with tomato, jalapenos, proscuitto, basil and arugula.</p>
            
        </div>

        <div>

            <img src = "./dessert.PNG">
              <h2> Pistaccio Pie</h2>
              <p>Rated best pistaccio pie by foodie Magizine! Creamy texture, sweet flavor, laden with frosted pistaccio and candied goji berries for that Health Kick to the soul!</p>

        </div>

        <div>

            <img src = "./drinks.PNG">
              <h2> Drinks for ALL! </h2>
              <p> Water, Beer, Lemonade, Crystal waters, glacial ice by the bucket.</p>

        </div>

        </section>
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzRCO0FBQ0Y7QUFDSzs7O0FBR3BELHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7OztBQUdyQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDhEQUFlOztBQUVmOzs7Ozs7QUFNQSw0Q0FBNEM7O0FBRTVDOztBQUVBOztBQUVBO0FBQ0EsUUFBUSwrREFBZTs7QUFFdkIsS0FBSzs7QUFFTDs7QUFFQSxJQUFJLDZEQUFjOztBQUVsQixDQUFDOztBQUVEO0FBQ0EsSUFBSSxtRUFBaUI7O0FBRXJCOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vc3JjL2Zyb250UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0cmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdHJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RyYXVudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FtYXRpY1NDLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9BbWF0aWNTQy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBcXG4vLy8vLy8gQ29sb3IgUGFsbGV0dGUgZm9yIHRoaXMgc2l0ZSBcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXG5yZ2IoMTAxLCAxMzYsIDEwMClcXG5yZ2IoMTgzLCAxODMsIDEzOClcXG5yZ2IoMjIxLCAyMjEsIDIyMSlcXG5yZ2IoMjM4LCAyMzgsIDIzOClcXG5cXG5yZ2JhIHZhbHVlcyB0b3JlZCBhcyB2YXJpYWJsZXMgYmVsb3cgVlZWXFxuXFxuKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tZ3JlZW46IHJnYmEoMTAxLDEzNiwxMDAsMS4wMDApO1xcbiAgICAtLWdyZWVuVHJhbnNwYXJlbnQ6cmdiYSgxMDEsMTM2LDEwMCwuNyk7XFxuICAgIC0tZ3JlZW5UcmFuc3BhcmVudDI6cmdiYSgxMDEsMTM2LDEwMCwuODUpOztcXG4gICAgLS1ncmV5R3JlZW46IHJnYmEoMTgzLDE4MywxMzgsMS4wMDApO1xcbiAgICAtLWdyZXk6IHJnYmEoMjIxLDIyMSwyMjEsMS4wMDApO1xcbiAgICAtLWdyZXlUcmFuc3BhcmVudDogcmdiYSgyMjEsMjIxLDIyMSwuODUpO1xcbiAgICAtLXdoaXRlR3JleTogcmdiYSgyMzgsMjM4LDIzOCwxLjAwMCk7XFxuICAgIC0td2hpdGVHcmV5VHJhbnNwYXJlbnQ6cmdiYSgyMzgsMjM4LDIzOCwuNik7XFxuICB9XFxuXFxuYm9keSAge1xcblxcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5R3JlZW4pO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi8qLmNvbnRhY3Qge1xcblxcblxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCIuL2ltYWdlcy9wYXRyaWNrLXNjaG5laWRlci1ldmVuaW5nLWRpbmluZy11bnNwbGFzaDIuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICB3aWR0aDoxMDB2dztcXG4gICAgYm9yZGVyOjA7XFxuXFxuXFxufSovXFxuXFxuXFxuXFxuLyouaG9tZVBhZ2Uge1xcblxcbiAgIFxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCIuL2ltYWdlcy9rcmlzdGlhbi1hbmdlbG8tZGluaW5nLXNjZW5lLXVuc3BsYXNoMi5QTkdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBib3JkZXI6MDtcXG5cXG59ICovXFxuXFxuLnJlc3RhcmF1bnROYW1lID4gcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuVHJhbnNwYXJlbnQpO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OmhhbmRXcml0dGVuQm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOndoaXRlO1xcbiB9XFxuXFxuXFxuLnRhYk1lbnUge1xcblxcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODMsMTgzLDEzOCwuOSk7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiBoYW5kV3JpdHRlbkJvbGQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc2xvZ2FuQ29udGFpbmVyIHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDo2cmVtO1xcbiAgICBcXG5cXG59XFxuXFxuLmZvb2RTbG9nYW4ge1xcblxcbiAgICBjb2xvcjpibGFjaztcXG4gICAgZm9udC1mYW1pbHk6IGhhbmRXcml0dGVuO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgZmxleDowIDEgYXV0bztcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1ncmV5VHJhbnNwYXJlbnQpO1xcbiAgICBwYWRkaW5nOi41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6MXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ucmVzdGFyYXVudE5hbWUge1xcblxcbiAgICBwb3NpdGlvbjpzdGlja3k7XFxufVxcblxcbi50YWJNZW51IHtcXG5cXG4gICAgcG9zaXRpb246c3RpY2t5O1xcbn1cXG5cXG4uY29udGFjdEluZm8ge1xcblxcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogaGFuZFdyaXR0ZW47XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uY29udGFjdE51bWJlckFkZHJlc3N7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXlUcmFuc3BhcmVudCk7XFxuICAgIG1hcmdpbi10b3A6MXJlbTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MDtcXG59XFxuXFxuXFxuXFxuLmhvdXJzT3BlbiB7XFxuXFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAyZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuVHJhbnNwYXJlbnQyKTtcXG4gICAgcm93LWdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDozcmVtO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuaG91cnNPcGVuIHtcXG5cXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlblRyYW5zcGFyZW50Mik7XFxuICAgICAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MXJlbTtcXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICB9XFxuICB9XFxuXFxuLmNvbnRhY3RJbmZvIGgxLCBoMiB7XFxuXFxuICAgIFxcbm1hcmdpbi10b3A6MDtcXG5tYXJnaW4tYm90dG9tOjA7XFxuICAgIFxcbn1cXG5cXG4ubWVudUNob2ljZXMgZGl2IHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIHdpZHRoOjUwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIG1hcmdpbjozcmVtO1xcbiAgICBmb250LWZhbWlseTogaGFuZFdyaXR0ZW47XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm1lbnVDaG9pY2VzIGltZyB7XFxuXFxuICAgIG1heC13aWR0aDo1MHZ3O1xcbiAgICBcXG59XFxuXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBoYW5kV3JpdHRlbjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgfVxcblxcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBoYW5kV3JpdHRlbkJvbGQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Q0FTQzs7QUFFRDtJQUNJLGdDQUFnQztJQUNoQyx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0Isd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUNwQywyQ0FBMkM7RUFDN0M7O0FBRUY7O0lBRUksUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0NBQWtDOzs7QUFHdEM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztFQWVFOzs7O0FBSUY7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUg7SUFDSSx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDs7O0FBR0Q7OztJQUdJLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7OztBQUduQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCOzs7QUFHcEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1COzs7O0FBSXZCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXQUFXOzs7OztBQUtmOztBQUVBOztJQUVJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7OztBQUlBOztJQUVJLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjs7Ozs7QUFLckI7O0FBRUE7SUFDSTs7UUFFSSxZQUFZO1FBQ1osMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixvQ0FBb0M7UUFDcEMsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsa0JBQWtCOzs7OztJQUt0QjtFQUNGOztBQUVGOzs7QUFHQSxZQUFZO0FBQ1osZUFBZTs7QUFFZjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osc0JBQXNCO0dBQ3ZCLFNBQVM7SUFDUixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXQUFXOzs7QUFHZjs7QUFFQTs7SUFFSSxjQUFjOztBQUVsQjs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsNENBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLDRDQUFtQztFQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBcXG4vLy8vLy8gQ29sb3IgUGFsbGV0dGUgZm9yIHRoaXMgc2l0ZSBcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXG5yZ2IoMTAxLCAxMzYsIDEwMClcXG5yZ2IoMTgzLCAxODMsIDEzOClcXG5yZ2IoMjIxLCAyMjEsIDIyMSlcXG5yZ2IoMjM4LCAyMzgsIDIzOClcXG5cXG5yZ2JhIHZhbHVlcyB0b3JlZCBhcyB2YXJpYWJsZXMgYmVsb3cgVlZWXFxuXFxuKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tZ3JlZW46IHJnYmEoMTAxLDEzNiwxMDAsMS4wMDApO1xcbiAgICAtLWdyZWVuVHJhbnNwYXJlbnQ6cmdiYSgxMDEsMTM2LDEwMCwuNyk7XFxuICAgIC0tZ3JlZW5UcmFuc3BhcmVudDI6cmdiYSgxMDEsMTM2LDEwMCwuODUpOztcXG4gICAgLS1ncmV5R3JlZW46IHJnYmEoMTgzLDE4MywxMzgsMS4wMDApO1xcbiAgICAtLWdyZXk6IHJnYmEoMjIxLDIyMSwyMjEsMS4wMDApO1xcbiAgICAtLWdyZXlUcmFuc3BhcmVudDogcmdiYSgyMjEsMjIxLDIyMSwuODUpO1xcbiAgICAtLXdoaXRlR3JleTogcmdiYSgyMzgsMjM4LDIzOCwxLjAwMCk7XFxuICAgIC0td2hpdGVHcmV5VHJhbnNwYXJlbnQ6cmdiYSgyMzgsMjM4LDIzOCwuNik7XFxuICB9XFxuXFxuYm9keSAge1xcblxcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5R3JlZW4pO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi8qLmNvbnRhY3Qge1xcblxcblxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCIuL2ltYWdlcy9wYXRyaWNrLXNjaG5laWRlci1ldmVuaW5nLWRpbmluZy11bnNwbGFzaDIuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICB3aWR0aDoxMDB2dztcXG4gICAgYm9yZGVyOjA7XFxuXFxuXFxufSovXFxuXFxuXFxuXFxuLyouaG9tZVBhZ2Uge1xcblxcbiAgIFxcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCIuL2ltYWdlcy9rcmlzdGlhbi1hbmdlbG8tZGluaW5nLXNjZW5lLXVuc3BsYXNoMi5QTkdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBib3JkZXI6MDtcXG5cXG59ICovXFxuXFxuLnJlc3RhcmF1bnROYW1lID4gcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuVHJhbnNwYXJlbnQpO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OmhhbmRXcml0dGVuQm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOndoaXRlO1xcbiB9XFxuXFxuXFxuLnRhYk1lbnUge1xcblxcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODMsMTgzLDEzOCwuOSk7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiBoYW5kV3JpdHRlbkJvbGQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc2xvZ2FuQ29udGFpbmVyIHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDo2cmVtO1xcbiAgICBcXG5cXG59XFxuXFxuLmZvb2RTbG9nYW4ge1xcblxcbiAgICBjb2xvcjpibGFjaztcXG4gICAgZm9udC1mYW1pbHk6IGhhbmRXcml0dGVuO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgZmxleDowIDEgYXV0bztcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1ncmV5VHJhbnNwYXJlbnQpO1xcbiAgICBwYWRkaW5nOi41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6MXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ucmVzdGFyYXVudE5hbWUge1xcblxcbiAgICBwb3NpdGlvbjpzdGlja3k7XFxufVxcblxcbi50YWJNZW51IHtcXG5cXG4gICAgcG9zaXRpb246c3RpY2t5O1xcbn1cXG5cXG4uY29udGFjdEluZm8ge1xcblxcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogaGFuZFdyaXR0ZW47XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uY29udGFjdE51bWJlckFkZHJlc3N7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXlUcmFuc3BhcmVudCk7XFxuICAgIG1hcmdpbi10b3A6MXJlbTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MDtcXG59XFxuXFxuXFxuXFxuLmhvdXJzT3BlbiB7XFxuXFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAyZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuVHJhbnNwYXJlbnQyKTtcXG4gICAgcm93LWdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDozcmVtO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuaG91cnNPcGVuIHtcXG5cXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlblRyYW5zcGFyZW50Mik7XFxuICAgICAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MXJlbTtcXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICB9XFxuICB9XFxuXFxuLmNvbnRhY3RJbmZvIGgxLCBoMiB7XFxuXFxuICAgIFxcbm1hcmdpbi10b3A6MDtcXG5tYXJnaW4tYm90dG9tOjA7XFxuICAgIFxcbn1cXG5cXG4ubWVudUNob2ljZXMgZGl2IHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIHdpZHRoOjUwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIG1hcmdpbjozcmVtO1xcbiAgICBmb250LWZhbWlseTogaGFuZFdyaXR0ZW47XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm1lbnVDaG9pY2VzIGltZyB7XFxuXFxuICAgIG1heC13aWR0aDo1MHZ3O1xcbiAgICBcXG59XFxuXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBoYW5kV3JpdHRlbjtcXG4gICAgc3JjOiB1cmwoLi9mb250cy9BbWF0aWNTQy1SZWd1bGFyLnR0Zik7XFxuICB9XFxuXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGhhbmRXcml0dGVuQm9sZDtcXG4gICAgc3JjOiB1cmwoLi9mb250cy9BbWF0aWNTQy1Cb2xkLnR0Zik7XFxuICB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGluc2VydENvbnRhY3RQYWdlKCl7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuICBjb250ZW50LnN0eWxlLmNzc1RleHQgPSAncGFkZGluZzogMDttYXJnaW46IDA7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuL3BhdHJpY2stc2NobmVpZGVyLWV2ZW5pbmctZGluaW5nLXVuc3BsYXNoMi5qcGdcIik7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO2hlaWdodDoxMDB2aDt3aWR0aDoxMDB2dztib3JkZXI6MDsnXG5cblxuICAgIGxldCBjb250YWN0UGFnZVN0cmluZyA9IFxuICAgIFxuICAgIGA8ZGl2IGNsYXNzID0gJ3Jlc3RhcmF1bnROYW1lJz5cbiAgICAgICAgIDxwPkdyZWVuJ3MgRm9vZCBFc2NhcGU8L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICA8bWVudSBjbGFzcyA9ICd0YWJNZW51Jz5cbiBcbiAgICAgICAgIDxsaSBjbGFzcyA9ICdob21lQnV0dG9uJz4gIEhvbWUgIDwvbGk+XG4gICAgICAgICA8bGkgY2xhc3MgPSAnbWVudUJ1dHRvbic+ICBNZW51ICA8L2xpPlxuICAgICAgICAgPGxpIGNsYXNzID0gJ2NvbnRhY3RCdXR0b24nIHN0eWxlID0gJ3BhZGRpbmc6LjNyZW07IGJvcmRlcjo1cHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6MTVweDsnID5Db250YWN0PC9saT5cbiBcbiAgICAgICA8L21lbnU+XG5cbiAgICAgICA8bWFpbiBjbGFzcyA9ICdjb250YWN0SW5mbyc+XG5cbiAgICAgICA8ZGl2IGNsYXNzID0gJ2NvbnRhY3ROdW1iZXJBZGRyZXNzJz5cbiAgICAgICAgPGgxPiBDb250YWN0IHVzISA8L2gxPlxuICAgICAgICA8aDI+IFBob25lIE51bWJlcjogMTIzLTEyMy0xMjM0IDwvaDI+XG4gICAgICAgIDxoMj4gQWRkcmVzczo8L2gyPjxwIHN0eWxlID0gJ2Rpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsnPiAxNDE3MzggQmlnIERyaXZlIFdheSA8YnI+IEZvb2RpYWgsIENhbGlmb3JrbmlhIDxicj4gOTU0NzM8L3A+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3MgPSAnb3BlbkRpdic+ICBcbiAgICAgICAgPHAgc3R5bGUgPSAnIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZ3JlZW5UcmFuc3BhcmVudDIpO2ZvbnQtZmFtaWx5OmhhbmRXcml0dGVuQm9sZDtmb250LXNpemU6NHJlbTtkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgcGFkZGluZy1ib3R0b206MDsgbWFyZ2luLWJvdHRvbTouM3JlbTsgbWFyZ2luLXRvcDouM3JlbTsgYm9yZGVyLXJhZGl1czoxMHB4OyBwYWRkaW5nLWxlZnQ6MnJlbTsgcGFkZGluZy1yaWdodDoycmVtOycgPiBPcGVuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3MgPSAnaG91cnNPcGVuJz5cbiAgICAgICAgICAgIDxwPkZyaWRheSAmIFNhdHVyZGF5IEx1bmNoIDExOjMwIC0gMzozMDwvcD5cbiAgICAgICAgICAgIDxwPkZyaWRheSAmIFNhdHVyZGF5IERpbm5lciA0OjMwIC0gODozMDwvcD5cbiAgICAgICAgICAgIDxwPlN1bmRheSBMdW5jaCAxMTozMCAtIDM6MzA8L3A+XG4gICAgICAgICAgICA8cD5TdW5kYXkgRGlubmVyIDQ6MDAgLSA4OjMwPC9wPlxuICAgICAgICAgICAgPHA+TW9uZGF5IEx1bmNoIDExOjMwIC0gMzozMDwvcD5cbiAgICAgICAgICAgIDxwPk1vbmRheSA0OjMwIC0gODozMCA8L3A+XG4gICAgICAgICAgICA8cD5XZWRuZXNkYXkgNDozMCB0byA4OjMwPC9wPlxuICAgICAgICAgICAgPHA+VGh1cnNkYXkgNDozMCAtIDg6MzA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIDwvbWFpbj5cbiAgICAgICBcbiAgICAgICBgXG4gICAgIFxuIFxuICAgXG4gICBcbiAgIFxuICAgXG4gXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxjb250YWN0UGFnZVN0cmluZylcbiBcbiB9XG4gXG4gZXhwb3J0IHsgaW5zZXJ0Q29udGFjdFBhZ2UgfSIsIi8vRnJvbnQgcGFnZSBvZiByZXN0YXJhdW50IGFwcCBmcm9udFBhZ2UuanNcblxuXG5mdW5jdGlvbiBpbnNlcnRGcm9udFBhZ2UoKXtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gXCJwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9rcmlzdGlhbi1hbmdlbG8tZGluaW5nLXNjZW5lLXVuc3BsYXNoMi5QTkcnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyBoZWlnaHQ6MTAwdmg7IHdpZHRoOjEwMHZ3OyBib3JkZXI6MDtcIjtcblxuICAgIC8vY29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lUGFnZScpXG5cbiAgIGxldCBmcm9udFBhZ2VTdHJpbmcgPSBcbiAgIFxuICAgYDxkaXYgY2xhc3MgPSAncmVzdGFyYXVudE5hbWUnPlxuICAgICAgICA8cD5HcmVlbidzIEZvb2QgRXNjYXBlPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPG1lbnUgY2xhc3MgPSAndGFiTWVudSc+XG5cbiAgICAgICAgPGxpIGNsYXNzID0gJ2hvbWVCdXR0b24nIHN0eWxlID0gJ3BhZGRpbmc6LjNyZW07IGJvcmRlcjo1cHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6MTVweDsnPkhvbWU8L2xpPlxuICAgICAgICA8bGkgY2xhc3MgPSAnbWVudUJ1dHRvbicgPk1lbnU8L2xpPlxuICAgICAgICA8bGkgY2xhc3MgPSAnY29udGFjdEJ1dHRvbicgPkNvbnRhY3Q8L2xpPlxuXG4gICAgICA8L21lbnU+XG4gICAgICBcbiAgICAgIDxtYWluIGNsYXNzID0gJ3Nsb2dhbkNvbnRhaW5lcic+XG5cbiAgICAgIDxoMSBjbGFzcyA9ICdmb29kU2xvZ2FuJz4gRXNjYXBlIHdpdGggdXMsIHBsZWFzZSBzaXQgZG93biwgY2xvc2UgeW91ciBleWVzLCBhbmQgQkFOR0VFRUVSQUFBTk5ORyE8L2gxPlxuICAgICAgXG4gICAgICA8L21haW4+XG4gICAgICBgXG4gICAgXG5cbiAgXG4gIFxuICBcbiAgXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsZnJvbnRQYWdlU3RyaW5nKVxuXG59XG5cbmV4cG9ydCB7IGluc2VydEZyb250UGFnZSB9IiwiLy9Gcm9udCBwYWdlIG9mIHJlc3RhcmF1bnQgYXBwIGZyb250UGFnZS5qc1xuXG5cbmZ1bmN0aW9uIGluc2VydE1lbnVQYWdlKCl7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuICBjb250ZW50LnN0eWxlLmNzc1RleHQgPSAncGFkZGluZzogMDttYXJnaW46IDA7aGVpZ2h0OjEwMHZoO3dpZHRoOjEwMHZ3O2JvcmRlcjowOydcblxuXG4gICAgbGV0IG1lbnVQYWdlU3RyaW5nID0gXG4gICAgXG4gICAgYDxkaXYgY2xhc3MgPSAncmVzdGFyYXVudE5hbWUnPlxuICAgICAgICAgPHA+R3JlZW4ncyBGb29kIEVzY2FwZTwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuIFxuICAgICAgIDxtZW51IGNsYXNzID0gJ3RhYk1lbnUnPlxuIFxuICAgICAgICAgPGxpIGNsYXNzID0gJ2hvbWVCdXR0b24nICc+SG9tZTwvbGk+XG4gICAgICAgICA8bGkgY2xhc3MgPSAnbWVudUJ1dHRvbicgc3R5bGUgPSAncGFkZGluZzouM3JlbTsgYm9yZGVyOjVweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czoxNXB4OycgPk1lbnU8L2xpPlxuICAgICAgICAgPGxpIGNsYXNzID0gJ2NvbnRhY3RCdXR0b24nID5Db250YWN0PC9saT5cbiBcbiAgICAgICA8L21lbnU+XG5cbiAgICAgICA8c2VjdGlvbiBjbGFzcyA9ICdtZW51Q2hvaWNlcycgc3R5bGUgPSAnZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpyb3c7IGZsZXgtd3JhcDp3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBwYWRkaW5nOjFyZW07IGFsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWdyZWVuVHJhbnNwYXJlbnQpOyc+XG5cbiAgICAgICA8ZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGltZyBzcmMgPSBcIi4vYWxmcmVkby5QTkdcIj5cbiAgICAgICAgICAgICAgPGgyPkNoaWNrZW4gQWxmcmVkbzwvaDI+XG4gICAgICAgICAgICAgIDxwPiBPdXIgc2xvdyBjb29rZWQgdGVuZGVyIGNoaWNrZW4gc2xpY2VzIHdpdGggbG9uZyBnb3JnZW91cyBoYW5kIG1hZGUgcGFzdGEgc3RyaXBzIGluIHRoZSBtb3N0IGx1eHVyaW91cyBjcmVhbSBzYXVjZSB5b3UgaGF2ZSBldmVyIGRyZWFtZWQgb2YuPC9wPlxuICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxpbWcgc3JjID0gXCIuL3BpenphLlBOR1wiPlxuICAgICAgICAgICAgICA8aDI+UGl6emEgTWFyZ3Vlcml0ZTwvaDI+XG4gICAgICAgICAgICAgIDxwPk91ciBmaW5lc3QgcGl6emEgd2l0aCB0b21hdG8sIGphbGFwZW5vcywgcHJvc2N1aXR0bywgYmFzaWwgYW5kIGFydWd1bGEuPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxpbWcgc3JjID0gXCIuL2Rlc3NlcnQuUE5HXCI+XG4gICAgICAgICAgICAgIDxoMj4gUGlzdGFjY2lvIFBpZTwvaDI+XG4gICAgICAgICAgICAgIDxwPlJhdGVkIGJlc3QgcGlzdGFjY2lvIHBpZSBieSBmb29kaWUgTWFnaXppbmUhIENyZWFteSB0ZXh0dXJlLCBzd2VldCBmbGF2b3IsIGxhZGVuIHdpdGggZnJvc3RlZCBwaXN0YWNjaW8gYW5kIGNhbmRpZWQgZ29qaSBiZXJyaWVzIGZvciB0aGF0IEhlYWx0aCBLaWNrIHRvIHRoZSBzb3VsITwvcD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8aW1nIHNyYyA9IFwiLi9kcmlua3MuUE5HXCI+XG4gICAgICAgICAgICAgIDxoMj4gRHJpbmtzIGZvciBBTEwhIDwvaDI+XG4gICAgICAgICAgICAgIDxwPiBXYXRlciwgQmVlciwgTGVtb25hZGUsIENyeXN0YWwgd2F0ZXJzLCBnbGFjaWFsIGljZSBieSB0aGUgYnVja2V0LjwvcD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgICAgIGBcbiAgICAgXG5cbiAgIFxuICAgXG4gICBcbiAgIFxuIFxuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsbWVudVBhZ2VTdHJpbmcpXG4gXG4gfVxuIFxuIGV4cG9ydCB7IGluc2VydE1lbnVQYWdlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBpbnNlcnRGcm9udFBhZ2UgfSBmcm9tICcuL2Zyb250UGFnZS5qcyc7IFxuaW1wb3J0IHsgaW5zZXJ0TWVudVBhZ2UgfSBmcm9tICcuL21lbnVQYWdlLmpzJztcbmltcG9ydCB7IGluc2VydENvbnRhY3RQYWdlIH0gZnJvbSAnLi9jb250YWN0UGFnZS5qcydcblxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkgeyAgLy9mdW5jdGlvbiB0byByZW1vdmUgYWxsIGNoaWxkIG5vZGVzIG9mIGFuIGVsZW1lbnRcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNsYXNzKG5ld0NsYXNzTmFtZSkgeyAvL2Z1bmN0aW9uIHRvIGNoYW5nZSBjbGFzc25hbWUgZm9yIHdoZW4gYSBuZXcgbGluayBpcyBjbGlja2VkLlxuXG5cbmlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhuZXdDbGFzc05hbWUpICE9PSB0cnVlKXtcblxuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gbmV3Q2xhc3NOYW1lXG59XG5cbn1cblxuaW5zZXJ0RnJvbnRQYWdlKClcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuXG5cblxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+eyAvL0luc2VydCBNZW51IFBhZ2UgYW5kIHJlbW92ZSBhbGwgb2xkIG5vZGVzLlxuXG4gICBjb25zdCBlbGVtZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG5cbiAgICBpZiAoZWxlbWVudFRhcmdldC5jbGFzc05hbWUgPT09ICdob21lQnV0dG9uJykge1xuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudClcbiAgICAgICAgaW5zZXJ0RnJvbnRQYWdlKClcblxuICAgIH1lbHNlIGlmIChlbGVtZW50VGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21lbnVCdXR0b24nKXtcblxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudClcblxuICAgIGluc2VydE1lbnVQYWdlKClcblxufWVsc2UgaWYgKGVsZW1lbnRUYXJnZXQuY2xhc3NOYW1lID09PSAnY29udGFjdEJ1dHRvbicpIHtcblxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudClcbiAgICBpbnNlcnRDb250YWN0UGFnZSgpXG5cbn1cblxufVxuKVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=