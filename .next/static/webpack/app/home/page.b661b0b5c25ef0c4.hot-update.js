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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score */ \"(app-pages-browser)/./src/components/score.js\");\n/* harmony import */ var _public_retry_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/retry.svg */ \"(app-pages-browser)/./public/retry.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Results(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-[10rem] flex flex-col items-center justify-center gap-[4rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-start gap-[5rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-[4rem]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                score: props.wpm,\n                                name: \"WPM\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                lineNumber: 10,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                score: props.accu,\n                                name: \"Accuracy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                lineNumber: 11,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                score: props.secs,\n                                name: \"Seconds\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                lineNumber: 12,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                score: props.raw,\n                                name: \"Raw\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                lineNumber: 13,\n                                columnNumber: 1\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                        lineNumber: 9,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-Poppins text-[#666] text-[1.875rem] leading-[100%]\",\n                                children: \"Characters\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                lineNumber: 16,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-[4rem]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        score: props.total,\n                                        name: \"Total\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                        lineNumber: 18,\n                                        columnNumber: 1\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        score: props.correct,\n                                        name: \"Correct\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                        lineNumber: 19,\n                                        columnNumber: 1\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        score: props.wrong,\n                                        name: \"Incorrect\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 1\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_score__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        score: props.miss,\n                                        name: \"Missed\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 1\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                                lineNumber: 17,\n                                columnNumber: 1\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                        lineNumber: 15,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    onClick: props.reset(),\n                    className: \"cursor-pointer\",\n                    src: _public_retry_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/results.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ0U7QUFDZTtBQUNaO0FBQzlCLFNBQVNJLFFBQVFDLEtBQUs7SUFDcEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ3ZCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNOLDhDQUFLQTtnQ0FBQ08sT0FBT0gsTUFBTUksR0FBRztnQ0FBRUMsTUFBTTs7Ozs7OzBDQUMvQiw4REFBQ1QsOENBQUtBO2dDQUFDTyxPQUFPSCxNQUFNTSxJQUFJO2dDQUFFRCxNQUFNOzs7Ozs7MENBQ2hDLDhEQUFDVCw4Q0FBS0E7Z0NBQUNPLE9BQU9ILE1BQU1PLElBQUk7Z0NBQUVGLE1BQU07Ozs7OzswQ0FDaEMsOERBQUNULDhDQUFLQTtnQ0FBQ08sT0FBT0gsTUFBTVEsR0FBRztnQ0FBRUgsTUFBTTs7Ozs7Ozs7Ozs7O2tDQUUvQiw4REFBQ0o7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBMEQ7Ozs7OzswQ0FDN0UsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZiw4REFBQ04sOENBQUtBO3dDQUFDTyxPQUFPSCxNQUFNUyxLQUFLO3dDQUFFSixNQUFNOzs7Ozs7a0RBQ2pDLDhEQUFDVCw4Q0FBS0E7d0NBQUNPLE9BQU9ILE1BQU1VLE9BQU87d0NBQUVMLE1BQU07Ozs7OztrREFDbkMsOERBQUNULDhDQUFLQTt3Q0FBQ08sT0FBT0gsTUFBTVcsS0FBSzt3Q0FBRU4sTUFBTTs7Ozs7O2tEQUNqQyw4REFBQ1QsOENBQUtBO3dDQUFDTyxPQUFPSCxNQUFNWSxJQUFJO3dDQUFFUCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXhCLDhEQUFDSjswQkFDQyw0RUFBQ0gsbURBQUtBO29CQUFDZSxTQUFTYixNQUFNYyxLQUFLO29CQUFJWixXQUFVO29CQUFpQmEsS0FBS2xCLHlEQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUU7S0F6QlNFO0FBMkJULCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Jlc3VsdHMuanM/MTNhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9zY29yZSdcbmltcG9ydCBSZXRyeSBmcm9tICcuLi8uLi9wdWJsaWMvcmV0cnkuc3ZnJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5mdW5jdGlvbiBSZXN1bHRzKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J210LVsxMHJlbV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLVs0cmVtXSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IGdhcC1bNXJlbV0nPlxuPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLVs0cmVtXSc+XG48U2NvcmUgc2NvcmU9e3Byb3BzLndwbX0gbmFtZT17J1dQTSd9IC8+XG48U2NvcmUgc2NvcmU9e3Byb3BzLmFjY3V9IG5hbWU9eydBY2N1cmFjeSd9IC8+XG48U2NvcmUgc2NvcmU9e3Byb3BzLnNlY3N9IG5hbWU9eydTZWNvbmRzJ30gLz5cbjxTY29yZSBzY29yZT17cHJvcHMucmF3fSBuYW1lPXsnUmF3J30gLz5cbjwvZGl2PlxuPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTYnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LVBvcHBpbnMgdGV4dC1bIzY2Nl0gdGV4dC1bMS44NzVyZW1dIGxlYWRpbmctWzEwMCVdJz5DaGFyYWN0ZXJzPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtWzRyZW1dJz5cbjxTY29yZSBzY29yZT17cHJvcHMudG90YWx9IG5hbWU9eydUb3RhbCd9IC8+XG48U2NvcmUgc2NvcmU9e3Byb3BzLmNvcnJlY3R9IG5hbWU9eydDb3JyZWN0J30gLz5cbjxTY29yZSBzY29yZT17cHJvcHMud3Jvbmd9IG5hbWU9eydJbmNvcnJlY3QnfSAvPlxuPFNjb3JlIHNjb3JlPXtwcm9wcy5taXNzfSBuYW1lPXsnTWlzc2VkJ30gLz5cbjwvZGl2PlxuPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZSBvbkNsaWNrPXtwcm9wcy5yZXNldCgpfSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJyBzcmM9e1JldHJ5fS8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHMiXSwibmFtZXMiOlsiUmVhY3QiLCJTY29yZSIsIlJldHJ5IiwiSW1hZ2UiLCJSZXN1bHRzIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzY29yZSIsIndwbSIsIm5hbWUiLCJhY2N1Iiwic2VjcyIsInJhdyIsInRvdGFsIiwiY29ycmVjdCIsIndyb25nIiwibWlzcyIsIm9uQ2xpY2siLCJyZXNldCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/results.js\n"));

/***/ })

});