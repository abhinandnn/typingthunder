"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./src/components/results.js":
/*!***********************************!*\
  !*** ./src/components/results.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score */ \"(app-pages-browser)/./src/components/score.js\");\n\n\n\nfunction Results(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-[10rem]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center items-center gap-[5rem]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-[4rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            score: props.wpm,\n                            name: \"WPM\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                            lineNumber: 8,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            score: props.accu,\n                            name: \"Accuracy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                            lineNumber: 9,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            score: props.secs,\n                            name: \"Seconds\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                            lineNumber: 10,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            score: props.raw,\n                            name: \"Raw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                            lineNumber: 11,\n                            columnNumber: 1\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                    lineNumber: 7,\n                    columnNumber: 1\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-Poppins text-[#666] text-[1.875rem] leading-[100%]\",\n                            children: \"Characters\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                            lineNumber: 14,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-[4rem]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    score: props.extra,\n                                    name: \"Extra\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 1\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    score: props.correct,\n                                    name: \"Correct\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 1\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    score: props.wrong,\n                                    name: \"Incorrect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 1\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    score: props.miss,\n                                    name: \"Missed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 1\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                            lineNumber: 15,\n                            columnNumber: 1\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                    lineNumber: 13,\n                    columnNumber: 1\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBQ0U7QUFDM0IsU0FBU0UsUUFBUUMsS0FBSztJQUNwQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ3ZCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2YsOERBQUNKLDhDQUFLQTs0QkFBQ0ssT0FBT0gsTUFBTUksR0FBRzs0QkFBRUMsTUFBTTs7Ozs7O3NDQUMvQiw4REFBQ1AsOENBQUtBOzRCQUFDSyxPQUFPSCxNQUFNTSxJQUFJOzRCQUFFRCxNQUFNOzs7Ozs7c0NBQ2hDLDhEQUFDUCw4Q0FBS0E7NEJBQUNLLE9BQU9ILE1BQU1PLElBQUk7NEJBQUVGLE1BQU07Ozs7OztzQ0FDaEMsOERBQUNQLDhDQUFLQTs0QkFBQ0ssT0FBT0gsTUFBTVEsR0FBRzs0QkFBRUgsTUFBTTs7Ozs7Ozs7Ozs7OzhCQUUvQiw4REFBQ0o7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBMEQ7Ozs7OztzQ0FDN0UsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDZiw4REFBQ0osOENBQUtBO29DQUFDSyxPQUFPSCxNQUFNUyxLQUFLO29DQUFFSixNQUFNOzs7Ozs7OENBRWpDLDhEQUFDUCw4Q0FBS0E7b0NBQUNLLE9BQU9ILE1BQU1VLE9BQU87b0NBQUVMLE1BQU07Ozs7Ozs4Q0FDbkMsOERBQUNQLDhDQUFLQTtvQ0FBQ0ssT0FBT0gsTUFBTVcsS0FBSztvQ0FBRU4sTUFBTTs7Ozs7OzhDQUNqQyw4REFBQ1AsOENBQUtBO29DQUFDSyxPQUFPSCxNQUFNWSxJQUFJO29DQUFFUCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQztLQXZCU047QUF5QlQsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmVzdWx0cy5qcz8xM2E1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTY29yZSBmcm9tICcuL3Njb3JlJ1xuZnVuY3Rpb24gUmVzdWx0cyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC1bMTByZW1dJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC1bNXJlbV0nPlxuPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLVs0cmVtXSc+XG48U2NvcmUgc2NvcmU9e3Byb3BzLndwbX0gbmFtZT17J1dQTSd9IC8+XG48U2NvcmUgc2NvcmU9e3Byb3BzLmFjY3V9IG5hbWU9eydBY2N1cmFjeSd9IC8+XG48U2NvcmUgc2NvcmU9e3Byb3BzLnNlY3N9IG5hbWU9eydTZWNvbmRzJ30gLz5cbjxTY29yZSBzY29yZT17cHJvcHMucmF3fSBuYW1lPXsnUmF3J30gLz5cbjwvZGl2PlxuPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTYnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LVBvcHBpbnMgdGV4dC1bIzY2Nl0gdGV4dC1bMS44NzVyZW1dIGxlYWRpbmctWzEwMCVdJz5DaGFyYWN0ZXJzPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtWzRyZW1dJz5cbjxTY29yZSBzY29yZT17cHJvcHMuZXh0cmF9IG5hbWU9eydFeHRyYSd9IC8+XG5cbjxTY29yZSBzY29yZT17cHJvcHMuY29ycmVjdH0gbmFtZT17J0NvcnJlY3QnfSAvPlxuPFNjb3JlIHNjb3JlPXtwcm9wcy53cm9uZ30gbmFtZT17J0luY29ycmVjdCd9IC8+XG48U2NvcmUgc2NvcmU9e3Byb3BzLm1pc3N9IG5hbWU9eydNaXNzZWQnfSAvPlxuPC9kaXY+XG48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNjb3JlIiwiUmVzdWx0cyIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwic2NvcmUiLCJ3cG0iLCJuYW1lIiwiYWNjdSIsInNlY3MiLCJyYXciLCJleHRyYSIsImNvcnJlY3QiLCJ3cm9uZyIsIm1pc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/results.js\n"));

/***/ })

});