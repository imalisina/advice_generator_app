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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MovieDetails = (param)=>{\n    let { movieData  } = param;\n    return(// Main container\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row justify-start my-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"h-54 w-44 rounded shadow-xl\",\n                    src: movieData.Poster\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full ml-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-3xl font-bold text-black\",\n                            children: movieData.Title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-2 text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-indigo-500\",\n                            children: movieData.Plot\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bargh\\\\Desktop\\\\Codes\\\\movie_finder_app\\\\components\\\\searchMovie\\\\movieDetails.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined));\n};\n_c = MovieDetails;\n// DATA NAMES FROM JSON RESULT\n/*\r\n  Country\r\n  Director\r\n  Genre\r\n  imdbVotes\r\n  imdbRating\r\n  Runtime\r\n  Plot\r\n  Year\r\n  Writer\r\n*/ /* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetails);\nvar _c;\n$RefreshReg$(_c, \"MovieDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaE1vdmllL21vdmllRGV0YWlscy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLGVBQWUsU0FBbUI7UUFBbEIsRUFBRUMsVUFBUyxFQUFFO0lBQ2pDLE9BQ0UsaUJBQWlCO2tCQUNqQiw4REFBQ0M7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBOEJFLEtBQUtKLFVBQVVLLE1BQU07Ozs7Ozs4QkFFbEUsOERBQUNKO29CQUFJQyxXQUFVOztzQ0FFYiw4REFBQ0k7NEJBQUVKLFdBQVU7c0NBQWlDRixVQUFVTyxLQUFLOzs7Ozs7c0NBRTdELDhEQUFDRDs0QkFBRUosV0FBVTtzQ0FBbUZGLFVBQVVRLElBQUk7Ozs7OztzQ0FDOUcsOERBQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7S0FsQk1WO0FBb0JOLDhCQUE4QjtBQUM5Qjs7Ozs7Ozs7OztBQVVBLEdBRUEsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hNb3ZpZS9tb3ZpZURldGFpbHMuanN4P2NjNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTW92aWVEZXRhaWxzID0gKHsgbW92aWVEYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgLy8gTWFpbiBjb250YWluZXJcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnQgbXktNSc+XHJcbiAgICAgICAgey8qIE1vdmllIHBvc3RlciAqL31cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0naC01NCB3LTQ0IHJvdW5kZWQgc2hhZG93LXhsJyBzcmM9e21vdmllRGF0YS5Qb3N0ZXJ9IC8+XHJcbiAgICAgICAgey8qIE1vdmllIGNvbnRlbnQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtbC01Jz5cclxuICAgICAgICAgIHsvKiBNb3ZpZSB0aXRsZSAqL31cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+e21vdmllRGF0YS5UaXRsZX08L3A+XHJcbiAgICAgICAgICB7LyogTW92aWUgZGVzY3JpcHRpb24gKi99XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J210LTIgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciB0by1waW5rLTYwMCBmcm9tLWluZGlnby01MDAnPnttb3ZpZURhdGEuUGxvdH08L3A+XHJcbiAgICAgICAgICA8aDI+PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vIERBVEEgTkFNRVMgRlJPTSBKU09OIFJFU1VMVFxyXG4vKlxyXG4gIENvdW50cnlcclxuICBEaXJlY3RvclxyXG4gIEdlbnJlXHJcbiAgaW1kYlZvdGVzXHJcbiAgaW1kYlJhdGluZ1xyXG4gIFJ1bnRpbWVcclxuICBQbG90XHJcbiAgWWVhclxyXG4gIFdyaXRlclxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVEZXRhaWxzOyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1vdmllRGV0YWlscyIsIm1vdmllRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIlBvc3RlciIsInAiLCJUaXRsZSIsIlBsb3QiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/searchMovie/movieDetails.jsx\n"));

/***/ })

});