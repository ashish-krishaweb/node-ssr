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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\nconst CommonPageLoader = /*#__PURE__*/React.createElement(\"div\", {\n  style: {\n    height: '50vh',\n    textAlign: \"center\"\n  }\n}, \"loading...\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonPageLoader);\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/PageLoaders/CommonLoader.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ClientRoutes)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ 661);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _serverRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverRoutes */ 967);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\n\nfunction ClientRoutes() {\n  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, null, _serverRoutes__WEBPACK_IMPORTED_MODULE_1__.serverRoutes.map(route => {\n    if (route.to) {\n      return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n        path: route.path,\n        element: /*#__PURE__*/React.createElement(route.element, {\n          to: route.to\n        }),\n        key: route.path\n      });\n    }\n    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n      path: route.path,\n      element: /*#__PURE__*/React.createElement(route.element, null),\n      key: route.path\n    });\n  }));\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/Routes/Routes.jsx?");

/***/ }),

/***/ 967:
/*!*******************************************!*\
  !*** ./src/client/Routes/serverRoutes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"serverRoutes\": () => (/* binding */ serverRoutes)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ 771);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ 661);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PageLoaders/CommonLoader */ 473);\n/* harmony import */ var _PagePropsFetcher_HomePage_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PagePropsFetcher/HomePage.fetcher */ 731);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\n\n\n// page loaders\n\n\n// pageProps fetcher imports\n\n\n// page imports\nconst HomePage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName() {\n    return \"Pages-Home-page\";\n  },\n  isReady(props) {\n    const key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: () => __webpack_require__.e(/*! import() | Pages-Home-page */ \"Pages-Home-page\").then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/Home.page */ 106)),\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync(props) {\n    const id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../Pages/Home.page */ 106);\n    }\n    return eval('require.resolve')(\"../Pages/Home.page\");\n  }\n}, {\n  fallback: _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst Login = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName() {\n    return \"Pages-Login-page\";\n  },\n  isReady(props) {\n    const key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: () => __webpack_require__.e(/*! import() | Pages-Login-page */ \"Pages-Login-page\").then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/Login.page */ 813)),\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync(props) {\n    const id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../Pages/Login.page */ 813);\n    }\n    return eval('require.resolve')(\"../Pages/Login.page\");\n  }\n}, {\n  fallback: _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst LoadPage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName() {\n    return \"Pages-Load-page\";\n  },\n  isReady(props) {\n    const key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: () => __webpack_require__.e(/*! import() | Pages-Load-page */ \"Pages-Load-page\").then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/Load.page */ 274)),\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync(props) {\n    const id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../Pages/Load.page */ 274);\n    }\n    return eval('require.resolve')(\"../Pages/Load.page\");\n  }\n}, {\n  fallback: _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst PageNotFound = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName() {\n    return \"Pages-PageNotFound-page\";\n  },\n  isReady(props) {\n    const key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: () => __webpack_require__.e(/*! import() | Pages-PageNotFound-page */ \"Pages-PageNotFound-page\").then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/PageNotFound.page */ 146)),\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync(props) {\n    const id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../Pages/PageNotFound.page */ 146);\n    }\n    return eval('require.resolve')(\"../Pages/PageNotFound.page\");\n  }\n}, {\n  fallback: _PageLoaders_CommonLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n// define all of the routes of the application\nconst serverRoutes = [{\n  path: \"/\",\n  element: HomePage,\n  loadData: _PagePropsFetcher_HomePage_fetcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}, {\n  path: \"/login\",\n  element: Login\n}, {\n  path: \"/signup\",\n  to: \"/login\",\n  element: ({\n    to\n  }) => /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {\n    to: to\n  })\n}, {\n  path: \"/load\",\n  element: LoadPage\n}, {\n  path: \"*\",\n  element: PageNotFound\n}];\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/Routes/serverRoutes.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PagePropsCtxProvider),\n/* harmony export */   \"usePagePropsCtx\": () => (/* binding */ usePagePropsCtx)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 689);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\nconst PagePropsCtx = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst usePagePropsCtx = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PagePropsCtx);\nfunction PagePropsCtxProvider({\n  children,\n  value\n}) {\n  return /*#__PURE__*/React.createElement(PagePropsCtx.Provider, {\n    value: value\n  }, children);\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/client/contexts/PagePropsCtx.jsx?");

/***/ }),

/***/ 777:
/*!************************************!*\
  !*** ./src/server/html/getHtml.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHtml)\n/* harmony export */ });\nfunction getHtml({\n  children,\n  title,\n  meta,\n  styles,\n  page_props,\n  inlineStyles,\n  scriptTags,\n  scriptNonce,\n  styleLinks\n  // preloadScriptTags,\n}) {\n  return `<!DOCTYPE html>\n   <html lang=\"en-US\">\n      <head>\n         <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n         ${title}\n         ${meta}\n         ${styles}\n         <!-- ${styleLinks} -->\n         ${inlineStyles}\n         ${scriptTags}\n      </head>\n      <body>\n         <div id=\"root\">${children}</div>\n         ${insertProps(page_props, scriptNonce)}\n      </body>\n      </html>`;\n}\nfunction insertProps(props, scriptNonce) {\n  if (!props) return \"\";\n  if (Object.keys(props).length > 0) {\n    return `<script nonce=${scriptNonce}>window.__data=${JSON.stringify(props)}</script>`;\n  }\n  return \"\";\n}\n\n// ${preloadScriptTags}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/server/html/getHtml.js?");

/***/ }),

/***/ 570:
/*!************************************!*\
  !*** ./src/server/htmlRenderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ htmlRenderer)\n/* harmony export */ });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ 684);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom/server */ 149);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/server */ 478);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet-async */ 638);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 661);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ 518);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ 17);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/App */ 342);\n/* harmony import */ var _client_Routes_serverRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/Routes/serverRoutes */ 967);\n/* harmony import */ var _html_getHtml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html/getHtml */ 777);\n/* harmony import */ var _client_contexts_PagePropsCtx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client/contexts/PagePropsCtx */ 997);\n/* provided dependency */ var React = __webpack_require__(/*! react */ 689);\n\n\n\n\n\n\n\n\n\n\n\nconst loadableJson = (0,path__WEBPACK_IMPORTED_MODULE_6__.resolve)(__dirname, \"./loadable-stats.json\");\nconst status_codes = {\n  \"*\": 404\n};\nasync function htmlRenderer(req, scriptNonce) {\n  const router_ctx = {};\n  const extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_2__.ChunkExtractor({\n    statsFile: loadableJson,\n    entrypoints: [\"client\"]\n  });\n  const matched_route = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.matchRoutes)(_client_Routes_serverRoutes__WEBPACK_IMPORTED_MODULE_8__.serverRoutes, req.url);\n\n  // new logic\n  // setting up the status code for response of the page\n  if (matched_route[0].route.to) {\n    router_ctx.status = 301;\n  } else {\n    const path = matched_route[0].route.path;\n    router_ctx.status = status_codes[path] || 200;\n  }\n  let page_props = undefined;\n  if (\"loadData\" in matched_route[0].route && typeof matched_route[0].route.loadData == \"function\") {\n    page_props = matched_route[0].route.loadData();\n  }\n  const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__.ServerStyleSheet();\n  const helmet_ctx = {};\n  const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)(sheet.collectStyles( /*#__PURE__*/React.createElement(_loadable_server__WEBPACK_IMPORTED_MODULE_2__.ChunkExtractorManager, {\n    extractor: extractor\n  }, /*#__PURE__*/React.createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__.StaticRouter, {\n    location: req.url\n  }, /*#__PURE__*/React.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__.HelmetProvider, {\n    context: helmet_ctx\n  }, /*#__PURE__*/React.createElement(_client_contexts_PagePropsCtx__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    value: page_props\n  }, /*#__PURE__*/React.createElement(_client_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)))))));\n  const htmlData = {\n    page_props,\n    children: content,\n    title: helmet_ctx.helmet.title.toString(),\n    meta: helmet_ctx.helmet.meta.toString(),\n    styles: sheet.getStyleTags(),\n    inlineStyles: await extractor.getInlineStyleTags({\n      nonce: scriptNonce\n    }),\n    scriptTags: extractor.getScriptTags({\n      nonce: scriptNonce\n    }),\n    scriptNonce,\n    styleLinks: extractor.getStyleTags()\n    // preloadScriptTags,\n  };\n\n  return {\n    html: (0,_html_getHtml__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(htmlData),\n    status: router_ctx.status\n  };\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/server/htmlRenderer.js?");

/***/ }),

/***/ 553:
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ 860);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ 455);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ 806);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ 113);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cluster */ 1);\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cluster__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! os */ 37);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _htmlRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./htmlRenderer */ 570);\n\n\n\n\n\n\n\n// import dotenv from \"dotenv\"\n\n\n\n// dotenv.config()\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n// Generating a nonce for Lodash with crypto\nlet scriptNonce = crypto__WEBPACK_IMPORTED_MODULE_3___default().randomBytes(16).toString(\"hex\");\nif (true) {\n  const webpack = __webpack_require__(/*! webpack */ 354);\n  const WebpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ 143);\n  const WebpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ 714);\n  const webpackConfig = __webpack_require__(/*! ../../webpack/client/webpack.client.development */ 171);\n  const compiler = webpack(webpackConfig);\n  app.use(WebpackDevMiddleware(compiler, {\n    publicPath: webpackConfig.output.publicPath,\n    serverSideRender: true\n  }));\n  app.use(WebpackHotMiddleware(compiler));\n}\napp.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()({\n  contentSecurityPolicy: false,\n  //   contentSecurityPolicy: {\n  //    directives:{\n  //       scriptSrc: [\n  //          \"'strict-dynamic'\", // For nonces to work\n  //          `'nonce-${scriptNonce}'`,   // adding the nonce\n\n  //          \"'unsafe-inline'\",      // for backwarc browsers compatibilty\n  //          \"https:\"    // for backwarc browsers compatibilty\n  //      ],\n  //      scriptSrcAttr: null, // Remove Firefox warning\n  //      styleSrc: [\n  //       \"'strict-dynamic'\", // For nonces to work\n  //       `'nonce-${scriptNonce}'`,     // adding the nonce\n\n  //       \"'unsafe-inline'\",    // for backwarc browsers compatibilty\n  //       \"https:\"    // for backwarc browsers compatibilty\n  //   ], // Remove 'unsafe-inline'\n  //    }\n  //   },\n  crossOriginEmbedderPolicy: false,\n  crossOriginOpenerPolicy: {\n    policy: \"same-origin-allow-popups\"\n  },\n  hidePoweredBy: true,\n  xssFilter: true\n}));\napp.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"build\"));\nif ((cluster__WEBPACK_IMPORTED_MODULE_4___default().isPrimary)) {\n  for (let i = 0; i < os__WEBPACK_IMPORTED_MODULE_5___default().cpus().length; i++) {\n    cluster__WEBPACK_IMPORTED_MODULE_4___default().fork();\n  }\n  cluster__WEBPACK_IMPORTED_MODULE_4___default().on(\"exit\", (worker, code, signal) => {\n    console.log(`worker ${worker.process.pid} died`);\n    cluster__WEBPACK_IMPORTED_MODULE_4___default().fork();\n  });\n} else {\n  app.get(\"*\", async (req, res) => {\n    try {\n      const {\n        html,\n        status\n      } = await (0,_htmlRenderer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req, scriptNonce);\n      res.status(status).send(html);\n    } catch (err) {\n      console.log(\"error in server side render\", err);\n    }\n  });\n  app.listen(3002, () => {\n    console.log(\"server running\");\n  });\n}\n\n//# sourceURL=webpack://1_start_with_ssr/./src/server/index.js?");

/***/ }),

/***/ 171:
/*!******************************************************!*\
  !*** ./webpack/client/webpack.client.development.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const path = __webpack_require__(/*! path */ 17);\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ 857);\nconst {\n  merge\n} = __webpack_require__(/*! webpack-merge */ 913);\nconst {\n  HotModuleReplacementPlugin\n} = __webpack_require__(/*! webpack */ 354);\nconst LoadablePlugin = __webpack_require__(/*! @loadable/webpack-plugin */ 692);\nconst baseConfig = __webpack_require__(/*! ../webpack.common */ 224);\nconst ROOT_DIR = path.resolve(__dirname, \"../../\");\nconst resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);\nconst BUILD_DIR = resolvePath(\"build\");\nconst clientConfig = {\n  target: \"web\",\n  mode: \"development\",\n  entry: {\n    client: [\"webpack-hot-middleware/client?reload=true&noInfo=true\", \"./src/client/index.jsx\"]\n  },\n  devtool: \"inline-cheap-module-source-map\",\n  output: {\n    path: resolvePath(BUILD_DIR, \"client\"),\n    publicPath: \"/client/\",\n    filename: \"[name].js\",\n    chunkFilename: \"[name].js\",\n    // Point sourcemap entries to original disk location (format as URL on Windows)\n    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\\\/g, \"/\"),\n    assetModuleFilename: \"assets/[hash][ext][query]\",\n    asyncChunks: true\n  },\n  resolve: {\n    ...baseConfig.resolve\n  },\n  module: {\n    ...baseConfig.module,\n    rules: [{\n      test: /\\.(css|scss)$/,\n      use: [MiniCssExtractPlugin.loader, {\n        loader: \"css-loader\",\n        options: {\n          sourceMap: false,\n          importLoaders: 2\n        }\n      }, \"sass-loader\"]\n    }, {\n      test: /\\.(png|svg|jpg|jpeg|gif)$/i,\n      type: \"asset/resource\",\n      generator: {\n        filename: \"assets/[name][ext]\"\n      }\n    }]\n  },\n  plugins: [...baseConfig.plugins, new MiniCssExtractPlugin(), new HotModuleReplacementPlugin(), new LoadablePlugin({\n    outputAsset: false,\n    writeToDisk: true,\n    filename: `${BUILD_DIR}/loadable-stats.json`\n  })],\n  optimization: {\n    runtimeChunk: \"single\",\n    // creates a runtime file to be shared for all generated chunks.\n    moduleIds: \"deterministic\",\n    splitChunks: {\n      chunks: \"all\",\n      // This indicates which chunks will be selected for optimization.\n      automaticNameDelimiter: \"-\",\n      cacheGroups: {\n        vendor: {\n          // to convert long vendor generated large name into vendor.js\n          test: /[\\\\/]node_modules[\\\\/]/,\n          name: \"vendor\",\n          chunks: \"all\"\n        }\n      }\n    },\n    minimize: false,\n    minimizer: []\n  }\n};\nmodule.exports = merge(baseConfig, clientConfig);\n\n//# sourceURL=webpack://1_start_with_ssr/./webpack/client/webpack.client.development.js?");

/***/ }),

/***/ 224:
/*!***********************************!*\
  !*** ./webpack/webpack.common.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  ProvidePlugin\n} = __webpack_require__(/*! webpack */ 354);\nconst Dotenv = __webpack_require__(/*! dotenv-webpack */ 59);\nconst path = __webpack_require__(/*! path */ 17);\nconst scriptRegExtensions = /\\.(js|jsx|mjs)/;\nconst imgRegExtensions = /\\.(png|svg|jpg|jpeg|gif)$/i;\nconst fontRegExtensions = /\\.(eot|otf|ttf|woff|woff2)/i;\nmodule.exports = {\n  resolve: {\n    extensions: [\".js\", \".jsx\", \".mjs\", \".cjs\"],\n    modules: ['node_modules']\n  },\n  plugins: [\n  // making React accessible everywhere in code without being declared or import\n  // making it global\n  new ProvidePlugin({\n    React: \"react\"\n  }),\n  // setting the support of .env files in react app and also providing the support of process.env.\n  new Dotenv({\n    path: path.resolve(__dirname, \"..\", \".env\")\n  })],\n  module: {\n    rules: [{\n      test: scriptRegExtensions,\n      exclude: /node_mudles/,\n      use: \"babel-loader\"\n    }, {\n      test: fontRegExtensions,\n      type: \"asset\",\n      generator: {\n        filename: 'assets/fonts/[name][ext]'\n      }\n    }, {\n      test: /\\.svg/,\n      type: \"asset/inline\"\n    }]\n  }\n};\n\n//# sourceURL=webpack://1_start_with_ssr/./webpack/webpack.common.js?");

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