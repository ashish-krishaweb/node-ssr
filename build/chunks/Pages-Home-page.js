"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "Pages-Home-page";
exports.ids = ["Pages-Home-page"];
exports.modules = {

/***/ 106:
/*!****************************************!*\
  !*** ./src/client/Pages/Home.page.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_ripples_hover_dist_Components_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ripples-hover/dist/Components/Link */ 187);\n/* harmony import */ var react_ripples_hover_dist_Components_Link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ripples_hover_dist_Components_Link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Button */ 42);\n/* harmony import */ var _component_HelmetMetaTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/HelmetMetaTags */ 918);\n/* harmony import */ var _contexts_PagePropsCtx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/PagePropsCtx */ 997);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\n\n\n\nfunction HomePage() {\n  const props = (0,_contexts_PagePropsCtx__WEBPACK_IMPORTED_MODULE_3__.usePagePropsCtx)();\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_component_HelmetMetaTags__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: props?.title,\n    description: props?.description,\n    image: props?.image\n  }), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h1\", null, \"This is home page\"), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => console.log(\"ok\")\n  }, \"click me\"), /*#__PURE__*/React.createElement((react_ripples_hover_dist_Components_Link__WEBPACK_IMPORTED_MODULE_0___default()), {\n    variant: \"primary\"\n  }, \"Home\")), /*#__PURE__*/React.createElement(_component_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/Pages/Home.page.jsx?");

/***/ }),

/***/ 42:
/*!*****************************************!*\
  !*** ./src/client/component/Button.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ 480);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\nlet _ = t => t,\n  _t;\n// import styled from \"styled-components\"\n\nfunction Button() {\n  return /*#__PURE__*/React.createElement(StyledButton, null, \"awesome\");\n}\nconst StyledButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().button(_t || (_t = _`\n    border: none;\n    padding: 1rem 2rem;\n    background-color: #360536;\n    color: white;\n    cursor: pointer;\n`));\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/component/Button.jsx?");

/***/ }),

/***/ 918:
/*!*************************************************!*\
  !*** ./src/client/component/HelmetMetaTags.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet-async */ 638);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\nconst HelmetMetaTags = ({\n  title,\n  description,\n  image\n}) => {\n  return /*#__PURE__*/React.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_0__.Helmet, null, title ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"title\", null, title), /*#__PURE__*/React.createElement(\"meta\", {\n    name: \"title\",\n    property: \"og:title\",\n    content: title\n  }), /*#__PURE__*/React.createElement(\"meta\", {\n    name: \"twitter:title\",\n    content: title\n  })) : \"\", description ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"meta\", {\n    name: \"description\",\n    property: \"og:description\",\n    content: description\n  }), /*#__PURE__*/React.createElement(\"meta\", {\n    name: \"twitter:description\",\n    content: title\n  })) : \"\", image ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"meta\", {\n    name: \"image\",\n    property: \"og:image\",\n    content: image\n  }), /*#__PURE__*/React.createElement(\"meta\", {\n    name: \"twitter:image\",\n    content: image\n  })) : \"\", image && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"link\", {\n    rel: \"shortcut icon\",\n    href: image,\n    type: \"image/x-icon\"\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelmetMetaTags);\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/component/HelmetMetaTags.jsx?");

/***/ })

};
;