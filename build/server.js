/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 342:
/*!****************************!*\
  !*** ./src/client/App.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/Header */ 491);\n/* harmony import */ var _Routes_Routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Routes/Routes */ 623);\n/* harmony import */ var _assets_download_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/download.jpeg */ 700);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\n\n// @ts-ignore\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_component_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), /*#__PURE__*/React.createElement(_Routes_Routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/React.createElement(\"div\", null, \"i am the king of this world.\"), /*#__PURE__*/React.createElement(\"h1\", null, \"Awesome server side rendering\"), /*#__PURE__*/React.createElement(\"img\", {\n    src: _assets_download_jpeg__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"car\",\n    height: '275',\n    width: '183'\n  }));\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/App.jsx?");

/***/ }),

/***/ 473:
/*!************************************************!*\
  !*** ./src/client/PageLoaders/CommonLoader.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\nvar CommonPageLoader = /*#__PURE__*/React.createElement(\"div\", {\n  style: {\n    height: '50vh',\n    textAlign: \"center\"\n  }\n}, \"loading...\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonPageLoader);\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/PageLoaders/CommonLoader.js?");

/***/ }),

/***/ 731:
/*!*********************************************************!*\
  !*** ./src/client/PagePropsFetcher/HomePage.fetcher.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePagePropsFetcher)\n/* harmony export */ });\n/* harmony import */ var _assets_download_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/download.jpeg */ 700);\n\nfunction homePagePropsFetcher() {\n  return {\n    title: \"Awesome home page\",\n    description: \"This is the desc for about the server side rendering with react and node.js\",\n    image: _assets_download_jpeg__WEBPACK_IMPORTED_MODULE_0__\n  };\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/PagePropsFetcher/HomePage.fetcher.js?");

/***/ }),

/***/ 623:
/*!**************************************!*\
  !*** ./src/client/Routes/Routes.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ClientRoutes)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ 661);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _serverRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverRoutes */ 967);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\n\nfunction ClientRoutes() {\n  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, null, _serverRoutes__WEBPACK_IMPORTED_MODULE_1__.serverRoutes.map(function (route) {\n    if (route.to) {\n      return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n        path: route.path,\n        element: /*#__PURE__*/React.createElement(route.element, {\n          to: route.to\n        }),\n        key: route.path\n      });\n    }\n    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n      path: route.path,\n      element: /*#__PURE__*/React.createElement(route.element, null),\n      key: route.path\n    });\n  }));\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/Routes/Routes.jsx?");

/***/ }),

/***/ 967:
/*!*******************************************!*\
  !*** ./src/client/Routes/serverRoutes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"serverRoutes\": () => (/* binding */ serverRoutes)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ 771);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ 661);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PageLoaders/CommonLoader */ 473);\n/* harmony import */ var _PagePropsFetcher_HomePage_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PagePropsFetcher/HomePage.fetcher */ 731);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\n\n\n// page loaders\n\n\n// pageProps fetcher imports\n\n\n// page imports\nvar HomePage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"Pages-Home-page\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | Pages-Home-page */ \"Pages-Home-page\").then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/Home.page */ 106));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../Pages/Home.page */ 106);\n    }\n    return eval('require.resolve')(\"../Pages/Home.page\");\n  }\n}, {\n  fallback: _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nvar Login = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"Pages-Login-page\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | Pages-Login-page */ \"Pages-Login-page\").then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/Login.page */ 813));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../Pages/Login.page */ 813);\n    }\n    return eval('require.resolve')(\"../Pages/Login.page\");\n  }\n}, {\n  fallback: _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nvar LoadPage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"Pages-Load-page\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | Pages-Load-page */ \"Pages-Load-page\").then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/Load.page */ 274));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../Pages/Load.page */ 274);\n    }\n    return eval('require.resolve')(\"../Pages/Load.page\");\n  }\n}, {\n  fallback: _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nvar PageNotFound = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"Pages-PageNotFound-page\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | Pages-PageNotFound-page */ \"Pages-PageNotFound-page\").then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/PageNotFound.page */ 146));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../Pages/PageNotFound.page */ 146);\n    }\n    return eval('require.resolve')(\"../Pages/PageNotFound.page\");\n  }\n}, {\n  fallback: _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n// define all of the routes of the application\nvar serverRoutes = [{\n  path: \"/\",\n  element: HomePage,\n  loadData: _PagePropsFetcher_HomePage_fetcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}, {\n  path: \"/login\",\n  element: Login\n}, {\n  path: \"/signup\",\n  to: \"/login\",\n  element: function element(_ref) {\n    var to = _ref.to;\n    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {\n      to: to\n    });\n  }\n}, {\n  path: \"/load\",\n  element: LoadPage\n}, {\n  path: \"*\",\n  element: PageNotFound\n}];\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/Routes/serverRoutes.js?");

/***/ }),

/***/ 491:
/*!*****************************************!*\
  !*** ./src/client/component/Header.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ 661);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\nfunction Header() {\n  return /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {\n    to: \"/\"\n  }, \"Home\"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {\n    to: \"/login\"\n  }, \"Login\"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {\n    to: \"/load\"\n  }, \"Load\"));\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/component/Header.jsx?");

/***/ }),

/***/ 997:
/*!**********************************************!*\
  !*** ./src/client/contexts/PagePropsCtx.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PagePropsCtxProvider),\n/* harmony export */   \"usePagePropsCtx\": () => (/* binding */ usePagePropsCtx)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 689);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\nvar PagePropsCtx = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nvar usePagePropsCtx = function usePagePropsCtx() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PagePropsCtx);\n};\nfunction PagePropsCtxProvider(_ref) {\n  var children = _ref.children,\n    value = _ref.value;\n  return /*#__PURE__*/React.createElement(PagePropsCtx.Provider, {\n    value: value\n  }, children);\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/contexts/PagePropsCtx.jsx?");

/***/ }),

/***/ 777:
/*!************************************!*\
  !*** ./src/server/html/getHtml.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHtml)\n/* harmony export */ });\nfunction getHtml(_ref) {\n  var children = _ref.children,\n    title = _ref.title,\n    meta = _ref.meta,\n    styles = _ref.styles,\n    page_props = _ref.page_props,\n    inlineStyles = _ref.inlineStyles,\n    scriptTags = _ref.scriptTags,\n    scriptNonce = _ref.scriptNonce,\n    styleLinks = _ref.styleLinks;\n  return \"<!DOCTYPE html>\\n   <html lang=\\\"en-US\\\">\\n      <head>\\n         <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"/>\\n         \".concat(title, \"\\n         \").concat(meta, \"\\n         \").concat(styles, \"\\n         <!-- \").concat(styleLinks, \" -->\\n         \").concat(inlineStyles, \"\\n         \").concat(scriptTags, \"\\n      </head>\\n      <body>\\n         <div id=\\\"root\\\">\").concat(children, \"</div>\\n         \").concat(insertProps(page_props, scriptNonce), \"\\n      </body>\\n      </html>\");\n}\nfunction insertProps(props, scriptNonce) {\n  if (!props) return \"\";\n  if (Object.keys(props).length > 0) {\n    return \"<script nonce=\".concat(scriptNonce, \">window.__data=\").concat(JSON.stringify(props), \"</script>\");\n  }\n  return \"\";\n}\n\n// ${preloadScriptTags}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/server/html/getHtml.js?");

/***/ }),

/***/ 570:
/*!************************************!*\
  !*** ./src/server/htmlRenderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ htmlRenderer)\n/* harmony export */ });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ 684);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom/server */ 149);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/server */ 478);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet-async */ 638);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 661);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ 518);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ 17);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/App */ 342);\n/* harmony import */ var _client_Routes_serverRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/Routes/serverRoutes */ 967);\n/* harmony import */ var _html_getHtml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html/getHtml */ 777);\n/* harmony import */ var _client_contexts_PagePropsCtx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client/contexts/PagePropsCtx */ 997);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator.return && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\nvar loadableJson = (0,path__WEBPACK_IMPORTED_MODULE_6__.resolve)(__dirname, \"./loadable-stats.json\");\nvar status_codes = {\n  \"*\": 404\n};\nfunction htmlRenderer(_x, _x2) {\n  return _htmlRenderer.apply(this, arguments);\n}\nfunction _htmlRenderer() {\n  _htmlRenderer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, scriptNonce) {\n    var router_ctx, extractor, matched_route, path, page_props, sheet, helmet_ctx, content, htmlData;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            router_ctx = {};\n            extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_2__.ChunkExtractor({\n              statsFile: loadableJson,\n              entrypoints: [\"client\"]\n            });\n            matched_route = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.matchRoutes)(_client_Routes_serverRoutes__WEBPACK_IMPORTED_MODULE_8__.serverRoutes, req.url); // new logic\n            // setting up the status code for response of the page\n            if (matched_route[0].route.to) {\n              router_ctx.status = 301;\n            } else {\n              path = matched_route[0].route.path;\n              router_ctx.status = status_codes[path] || 200;\n            }\n            page_props = undefined;\n            if (\"loadData\" in matched_route[0].route && typeof matched_route[0].route.loadData == \"function\") {\n              page_props = matched_route[0].route.loadData();\n            }\n            sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__.ServerStyleSheet();\n            helmet_ctx = {};\n            content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)(sheet.collectStyles( /*#__PURE__*/React.createElement(_loadable_server__WEBPACK_IMPORTED_MODULE_2__.ChunkExtractorManager, {\n              extractor: extractor\n            }, /*#__PURE__*/React.createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__.StaticRouter, {\n              location: req.url\n            }, /*#__PURE__*/React.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__.HelmetProvider, {\n              context: helmet_ctx\n            }, /*#__PURE__*/React.createElement(_client_contexts_PagePropsCtx__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              value: page_props\n            }, /*#__PURE__*/React.createElement(_client_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)))))));\n            _context.t0 = page_props;\n            _context.t1 = content;\n            _context.t2 = helmet_ctx.helmet.title.toString();\n            _context.t3 = helmet_ctx.helmet.meta.toString();\n            _context.t4 = sheet.getStyleTags();\n            _context.next = 16;\n            return extractor.getInlineStyleTags({\n              nonce: scriptNonce\n            });\n          case 16:\n            _context.t5 = _context.sent;\n            _context.t6 = extractor.getScriptTags({\n              nonce: scriptNonce\n            });\n            _context.t7 = scriptNonce;\n            _context.t8 = extractor.getStyleTags();\n            htmlData = {\n              page_props: _context.t0,\n              children: _context.t1,\n              title: _context.t2,\n              meta: _context.t3,\n              styles: _context.t4,\n              inlineStyles: _context.t5,\n              scriptTags: _context.t6,\n              scriptNonce: _context.t7,\n              styleLinks: _context.t8\n            };\n            return _context.abrupt(\"return\", {\n              html: (0,_html_getHtml__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(htmlData),\n              status: router_ctx.status\n            });\n          case 22:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _htmlRenderer.apply(this, arguments);\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/server/htmlRenderer.js?");

/***/ }),

/***/ 553:
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ 860);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ 455);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ 806);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ 113);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cluster */ 1);\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cluster__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! os */ 37);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _htmlRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./htmlRenderer */ 570);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator.return && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n// import dotenv from \"dotenv\"\n\n\n\n// dotenv.config()\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n// Generating a nonce for Lodash with crypto\nvar scriptNonce = crypto__WEBPACK_IMPORTED_MODULE_3___default().randomBytes(16).toString(\"hex\");\nif (true) {\n  var webpack = __webpack_require__(/*! webpack */ 354);\n  var WebpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ 143);\n  var WebpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ 714);\n  var webpackConfig = __webpack_require__(/*! ../../webpack/client/webpack.client.development */ 171);\n  var compiler = webpack(webpackConfig);\n  app.use(WebpackDevMiddleware(compiler, {\n    publicPath: webpackConfig.output.publicPath,\n    serverSideRender: true\n  }));\n  app.use(WebpackHotMiddleware(compiler));\n}\napp.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()({\n  contentSecurityPolicy: false,\n  //   contentSecurityPolicy: {\n  //    directives:{\n  //       scriptSrc: [\n  //          \"'strict-dynamic'\", // For nonces to work\n  //          `'nonce-${scriptNonce}'`,   // adding the nonce\n\n  //          \"'unsafe-inline'\",      // for backwarc browsers compatibilty\n  //          \"https:\"    // for backwarc browsers compatibilty\n  //      ],\n  //      scriptSrcAttr: null, // Remove Firefox warning\n  //      styleSrc: [\n  //       \"'strict-dynamic'\", // For nonces to work\n  //       `'nonce-${scriptNonce}'`,     // adding the nonce\n\n  //       \"'unsafe-inline'\",    // for backwarc browsers compatibilty\n  //       \"https:\"    // for backwarc browsers compatibilty\n  //   ], // Remove 'unsafe-inline'\n  //    }\n  //   },\n  crossOriginEmbedderPolicy: false,\n  crossOriginOpenerPolicy: {\n    policy: \"same-origin-allow-popups\"\n  },\n  hidePoweredBy: true,\n  xssFilter: true\n}));\napp.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"build\"));\nif ((cluster__WEBPACK_IMPORTED_MODULE_4___default().isPrimary)) {\n  for (var i = 0; i < os__WEBPACK_IMPORTED_MODULE_5___default().cpus().length; i++) {\n    cluster__WEBPACK_IMPORTED_MODULE_4___default().fork();\n  }\n  cluster__WEBPACK_IMPORTED_MODULE_4___default().on(\"exit\", function (worker, code, signal) {\n    console.log(\"worker \".concat(worker.process.pid, \" died\"));\n    cluster__WEBPACK_IMPORTED_MODULE_4___default().fork();\n  });\n} else {\n  app.get(\"*\", /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {\n      var _yield$htmlRenderer, html, status;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_htmlRenderer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req, scriptNonce);\n            case 3:\n              _yield$htmlRenderer = _context.sent;\n              html = _yield$htmlRenderer.html;\n              status = _yield$htmlRenderer.status;\n              res.status(status).send(html);\n              _context.next = 12;\n              break;\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(\"error in server side render\", _context.t0);\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 9]]);\n    }));\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n  app.listen(3002, function () {\n    console.log(\"server running\");\n  });\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/server/index.js?");

/***/ }),

/***/ 171:
/*!******************************************************!*\
  !*** ./webpack/client/webpack.client.development.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar path = __webpack_require__(/*! path */ 17);\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ 857);\nvar _require = __webpack_require__(/*! webpack-merge */ 913),\n  merge = _require.merge;\nvar _require2 = __webpack_require__(/*! webpack */ 354),\n  HotModuleReplacementPlugin = _require2.HotModuleReplacementPlugin;\nvar LoadablePlugin = __webpack_require__(/*! @loadable/webpack-plugin */ 692);\nvar baseConfig = __webpack_require__(/*! ../webpack.common */ 224);\nvar ROOT_DIR = path.resolve(__dirname, \"../../\");\nvar resolvePath = function resolvePath() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n  return path.resolve.apply(path, [ROOT_DIR].concat(args));\n};\nvar BUILD_DIR = resolvePath(\"build\");\nvar clientConfig = {\n  target: \"web\",\n  mode: \"development\",\n  entry: {\n    client: [\"webpack-hot-middleware/client?reload=true&noInfo=true\", \"./src/client/index.jsx\"]\n  },\n  devtool: \"inline-cheap-module-source-map\",\n  output: {\n    path: resolvePath(BUILD_DIR, \"client\"),\n    publicPath: \"/client/\",\n    filename: \"[name].js\",\n    chunkFilename: \"[name].js\",\n    // Point sourcemap entries to original disk location (format as URL on Windows)\n    devtoolModuleFilenameTemplate: function devtoolModuleFilenameTemplate(info) {\n      return path.resolve(info.absoluteResourcePath).replace(/\\\\/g, \"/\");\n    },\n    assetModuleFilename: \"assets/[hash][ext][query]\",\n    asyncChunks: true\n  },\n  resolve: _objectSpread({}, baseConfig.resolve),\n  module: _objectSpread(_objectSpread({}, baseConfig.module), {}, {\n    rules: [{\n      test: /\\.(css|scss)$/,\n      use: [MiniCssExtractPlugin.loader, {\n        loader: \"css-loader\",\n        options: {\n          sourceMap: false,\n          importLoaders: 2\n        }\n      }, \"sass-loader\"]\n    }, {\n      test: /\\.(png|svg|jpg|jpeg|gif)$/i,\n      type: \"asset/resource\",\n      generator: {\n        filename: \"assets/[name][ext]\"\n      }\n    }]\n  }),\n  plugins: [].concat(_toConsumableArray(baseConfig.plugins), [new MiniCssExtractPlugin(), new HotModuleReplacementPlugin(), new LoadablePlugin({\n    outputAsset: false,\n    writeToDisk: true,\n    filename: \"\".concat(BUILD_DIR, \"/loadable-stats.json\")\n  })]),\n  optimization: {\n    runtimeChunk: \"single\",\n    // creates a runtime file to be shared for all generated chunks.\n    moduleIds: \"deterministic\",\n    splitChunks: {\n      chunks: \"all\",\n      // This indicates which chunks will be selected for optimization.\n      automaticNameDelimiter: \"-\",\n      cacheGroups: {\n        vendor: {\n          // to convert long vendor generated large name into vendor.js\n          test: /[\\\\/]node_modules[\\\\/]/,\n          name: \"vendor\",\n          chunks: \"all\"\n        }\n      }\n    },\n    minimize: false,\n    minimizer: []\n  }\n};\nmodule.exports = merge(baseConfig, clientConfig);\n\n//# sourceURL=webpack://1_start_with_ssr/./webpack/client/webpack.client.development.js?");

/***/ }),

/***/ 224:
/*!***********************************!*\
  !*** ./webpack/webpack.common.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! webpack */ 354),\n  ProvidePlugin = _require.ProvidePlugin;\nvar Dotenv = __webpack_require__(/*! dotenv-webpack */ 59);\nvar path = __webpack_require__(/*! path */ 17);\nvar scriptRegExtensions = /\\.(js|jsx|mjs)/;\nvar imgRegExtensions = /\\.(png|svg|jpg|jpeg|gif)$/i;\nvar fontRegExtensions = /\\.(eot|otf|ttf|woff|woff2)/i;\nmodule.exports = {\n  resolve: {\n    extensions: [\".js\", \".jsx\", \".mjs\", \".cjs\"],\n    modules: ['node_modules']\n  },\n  plugins: [\n  // making React accessible everywhere in code without being declared or import\n  // making it global\n  new ProvidePlugin({\n    React: \"react\"\n  }),\n  // setting the support of .env files in react app and also providing the support of process.env.\n  new Dotenv({\n    path: path.resolve(__dirname, \"..\", \".env\")\n  })],\n  module: {\n    rules: [{\n      test: scriptRegExtensions,\n      exclude: /node_mudles/,\n      use: \"babel-loader\"\n    }, {\n      test: fontRegExtensions,\n      type: \"asset\",\n      generator: {\n        filename: 'assets/fonts/[name][ext]'\n      }\n    }, {\n      test: /\\.svg/,\n      type: \"asset/inline\"\n    }]\n  }\n};\n\n//# sourceURL=webpack://1_start_with_ssr/./webpack/webpack.common.js?");

/***/ }),

/***/ 700:
/*!*****************************************!*\
  !*** ./src/client/assets/download.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"./client/assets/700.jpeg\";\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/assets/download.jpeg?");

/***/ }),

/***/ 480:
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ 771:
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/component");

/***/ }),

/***/ 478:
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/server");

/***/ }),

/***/ 692:
/*!*******************************************!*\
  !*** external "@loadable/webpack-plugin" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/webpack-plugin");

/***/ }),

/***/ 455:
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ 59:
/*!*********************************!*\
  !*** external "dotenv-webpack" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv-webpack");

/***/ }),

/***/ 860:
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ 806:
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ 857:
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ 689:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 684:
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ 638:
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet-async");

/***/ }),

/***/ 187:
/*!***********************************************************!*\
  !*** external "react-ripples-hover/dist/Components/Link" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ripples-hover/dist/Components/Link");

/***/ }),

/***/ 661:
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 149:
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ 518:
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 354:
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ 714:
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ 143:
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ 913:
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-merge");

/***/ }),

/***/ 1:
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("cluster");

/***/ }),

/***/ 113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 37:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 17:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunks/" + chunkId + ".js";
/******/ 		};
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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"server": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(553);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;