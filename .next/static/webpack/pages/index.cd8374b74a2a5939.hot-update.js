"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/searchMovie/movieDetails.jsx":
/*!*************************************************!*\
  !*** ./components/searchMovie/movieDetails.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MovieDetails = (param)=>{\n    let { movieData  } = param;\n    return(// Main container\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row justify-start my-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"h-54 w-44 rounded shadow-xl\",\n                    src: movieData.Poster\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full ml-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-3xl font-bold\",\n                        children: movieData.Title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined));\n};\n_c = MovieDetails;\n// DATA NAMES FROM JSON RESULT\n/*\r\n  Country\r\n  Director\r\n  Genre\r\n  imdbVotes\r\n  imdbRating\r\n  Runtime\r\n  Title\r\n  Year\r\n  Writer\r\n*/ /* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetails);\nvar _c;\n$RefreshReg$(_c, \"MovieDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaE1vdmllL21vdmllRGV0YWlscy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLGVBQWUsU0FBbUI7UUFBbEIsRUFBRUMsVUFBUyxFQUFFO0lBQ2pDLE9BQ0UsaUJBQWlCO2tCQUNqQiw4REFBQ0M7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBOEJFLEtBQUtKLFVBQVVLLE1BQU07Ozs7Ozs4QkFFbEUsOERBQUNKO29CQUFJQyxXQUFVOzhCQUViLDRFQUFDSTt3QkFBR0osV0FBVTtrQ0FBc0JGLFVBQVVPLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0Q7S0FmTVI7QUFpQk4sOEJBQThCO0FBQzlCOzs7Ozs7Ozs7O0FBVUEsR0FFQSwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlYXJjaE1vdmllL21vdmllRGV0YWlscy5qc3g/Y2M1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBNb3ZpZURldGFpbHMgPSAoeyBtb3ZpZURhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAvLyBNYWluIGNvbnRhaW5lclxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1zdGFydCBteS01Jz5cclxuICAgICAgICB7LyogTW92aWUgcG9zdGVyICovfVxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdoLTU0IHctNDQgcm91bmRlZCBzaGFkb3cteGwnIHNyYz17bW92aWVEYXRhLlBvc3Rlcn0gLz5cclxuICAgICAgICB7LyogTW92aWUgY29udGVudCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1sLTQnPlxyXG4gICAgICAgICAgey8qIE1vdmllIHRpdGxlICovfVxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPnttb3ZpZURhdGEuVGl0bGV9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vIERBVEEgTkFNRVMgRlJPTSBKU09OIFJFU1VMVFxyXG4vKlxyXG4gIENvdW50cnlcclxuICBEaXJlY3RvclxyXG4gIEdlbnJlXHJcbiAgaW1kYlZvdGVzXHJcbiAgaW1kYlJhdGluZ1xyXG4gIFJ1bnRpbWVcclxuICBUaXRsZVxyXG4gIFllYXJcclxuICBXcml0ZXJcclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllRGV0YWlsczsiXSwibmFtZXMiOlsiUmVhY3QiLCJNb3ZpZURldGFpbHMiLCJtb3ZpZURhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJQb3N0ZXIiLCJoMyIsIlRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/searchMovie/movieDetails.jsx\n"));

/***/ })

});