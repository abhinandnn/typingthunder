"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/otp/page",{

/***/ "(app-pages-browser)/./src/app/signup/otp/page.js":
/*!************************************!*\
  !*** ./src/app/signup/otp/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-typewriter */ \"(app-pages-browser)/./node_modules/react-simple-typewriter/dist/index.js\");\n/* harmony import */ var _public_fa_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/fa.svg */ \"(app-pages-browser)/./public/fa.svg\");\n/* harmony import */ var _public_fahid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/fahid.svg */ \"(app-pages-browser)/./public/fahid.svg\");\n/* harmony import */ var _public_otp_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/otp.svg */ \"(app-pages-browser)/./public/otp.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/axios */ \"(app-pages-browser)/./src/api/axios.js\");\n/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-otp-input */ \"(app-pages-browser)/./node_modules/react-otp-input/lib/index.esm.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Otp() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const em=localStorage.getItem(\"signupEmail\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (otp.length == 6) {\n            try {\n                const response = await _api_axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"api/auth/verify-otp\", {\n                    email: em,\n                    otp: otp\n                }, {\n                    headers: {\n                        \"Content-Type\": \"application/json; charset=utf-8\"\n                    },\n                    withCredentials: false\n                });\n                console.log(response.data.message);\n                router.push(\"/login\");\n            // if(response.data.success){\n            // toast.success(\"OTP verified!\")\n            //   if(!sign)\n            // {token=response.data.data.token;\n            // localStorage.setItem(\"Ftoken\",token);\n            // }\n            //   if(sign)\n            //   navigate(\"/login\");\n            // else\n            //    { \n            //      navigate('/resetpwd')  }        \n            } catch (err) {\n                if (err.response) {\n                    console.log(\"Server responded\");\n                    // toast.error(\"OTP is invalid\");\n                    setError(\"Invalid OTP\");\n                    console.log(err.response.data.message);\n                } else console.log(\"No Server response\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1a1a1a] font-Poppins h-[100vh] px-[7.4rem] py-[3rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-2 justify-center items-center text-[1.375rem] text-[#e6e6e6]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                width: \"33\",\n                                height: \"31\",\n                                viewBox: \"0 0 33 31\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    \"clip-rule\": \"evenodd\",\n                                    d: \"M19.5869 6.12437H29.156C29.508 6.12437 29.8272 5.93937 30.0077 5.63725L32.4717 1.51288C32.87 0.846325 32.3897 0 31.6133 0H3.10206C2.70651 0 2.34813 0.23315 2.18784 0.594763L0.35966 4.71913C0.0665792 5.38032 0.550228 6.12437 1.27346 6.12437H11.309L6.18637 16.5652C5.86037 17.2296 6.34403 18.0056 7.08413 18.0056H9.68913C10.3854 18.0056 10.8686 18.6995 10.627 19.3526L7.62394 27.4705C7.2338 28.5251 8.61216 29.3214 9.33089 28.4566L21.7676 13.4923C22.2866 12.8679 21.8844 11.918 21.0749 11.8561L18.1564 11.6327C17.4301 11.5771 17.005 10.7885 17.3578 10.1513L19.5869 6.12437Z\",\n                                    fill: \"#E6E6E6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 1\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 52,\n                                columnNumber: 152\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: \"TypingThunder\"\n                            }, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 52,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[#B3B3B3] text-[1.125rem]\",\n                        children: [\n                            \"Already a user? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-[#e6e6e6] underline\",\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 87\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 57,\n                                columnNumber: 65\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-[12.5rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-[10rem] w-[30rem] flex flex-col gap-[1.5rem]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: _public_otp_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-8 text-[1.125rem] pt-[4.8rem] text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col text-dgr\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[2.5rem] text-lgr mb-5 leading-[1.125rem]\",\n                                        children: \"Enter OTP\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Please enter the 6-digit code sent to you at\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_otp_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                value: otp,\n                                onChange: setOtp,\n                                numInputs: 6,\n                                renderInput: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...props\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 31\n                                    }, void 0),\n                                inputType: \"tel\",\n                                inputStyle: \"mr-4 h-[3.125rem] min-w-[3.125rem] text-[1.375rem] bg-transparent text-white rounded-[0.8125rem] border \".concat(otp.length == 6 || otp.length == 0 ? \"border-dgr\" : \"border-[#FF7E7E]\", \" outline-none\")\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: error\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-white mt-[2rem] text-black text-[1.375rem] w-[31.7rem] h-[4rem] px-6 pt-3 pb-[0.625rem] rounded-[1.25rem]\",\n                                children: \"Verify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 78,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Otp, \"4OvCvQt1wOxz70y0yw4kecmj584=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_10__.useRouter\n    ];\n});\n_c = Otp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Otp);\nvar _c;\n$RefreshReg$(_c, \"Otp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbnVwL290cC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUI7QUFDUTtBQUNtQjtBQUNWO0FBQ007QUFDRjtBQUNmO0FBQ0M7QUFDTztBQUNBO0FBQ0s7QUFDZjtBQUM3QixTQUFTWTs7SUFDUCxNQUFNQyxTQUFPSCwyREFBU0E7SUFDdEIsTUFBTSxDQUFDSSxLQUFLQyxPQUFPLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ2UsT0FBTUMsU0FBUyxHQUFFaEIsK0NBQVFBLENBQUM7SUFDakMsZ0RBQWdEO0lBQ2hELE1BQU1pQixlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUdOLElBQUlPLE1BQU0sSUFBRSxHQUFFO1lBQ2pCLElBQUc7Z0JBQ0QsTUFBTUMsV0FBVyxNQUFNZixrREFBS0EsQ0FBQ2dCLElBQUksQ0FBQyx1QkFBc0I7b0JBQUNDLE9BQU1DO29CQUFHWCxLQUFJQTtnQkFBRyxHQUN2RTtvQkFBQ1ksU0FBUTt3QkFBQyxnQkFBZTtvQkFBaUM7b0JBQ3hEQyxpQkFBaUI7Z0JBQUs7Z0JBQ3RCQyxRQUFRQyxHQUFHLENBQUNQLFNBQVNRLElBQUksQ0FBQ0MsT0FBTztnQkFDakNsQixPQUFPbUIsSUFBSSxDQUFDO1lBQ1osNkJBQTZCO1lBQzdCLGlDQUFpQztZQUNqQyxjQUFjO1lBQ2QsbUNBQW1DO1lBQ25DLHdDQUF3QztZQUN4QyxJQUFJO1lBQ0osYUFBYTtZQUNiLHdCQUF3QjtZQUN4QixPQUFPO1lBQ1AsUUFBUTtZQUNSLHdDQUF3QztZQUVoRCxFQUFDLE9BQU1DLEtBQUk7Z0JBQ1gsSUFBR0EsSUFBSVgsUUFBUSxFQUFDO29CQUNoQk0sUUFBUUMsR0FBRyxDQUFDO29CQUNaLGlDQUFpQztvQkFDakNaLFNBQVM7b0JBQ1RXLFFBQVFDLEdBQUcsQ0FBQ0ksSUFBSVgsUUFBUSxDQUFDUSxJQUFJLENBQUNDLE9BQU87Z0JBQ3JDLE9BRUVILFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQUM7SUFBQztJQUNGLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUFnQyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUFpRiw4REFBQ0M7Z0NBQUlDLE9BQU07Z0NBQUtDLFFBQU87Z0NBQUtDLFNBQVE7Z0NBQVlDLE1BQUs7Z0NBQU9DLE9BQU07MENBQ3pOLDRFQUFDQztvQ0FBS0MsYUFBVTtvQ0FBVUMsYUFBVTtvQ0FBVUMsR0FBRTtvQ0FBOGpCTCxNQUFLOzs7Ozs7Ozs7OzswQ0FFbm5COzBDQUFFOzs7Ozs7OztrQ0FFRiw4REFBQ047d0JBQUlDLFdBQVU7OzRCQUFpQzswQ0FBZ0IsOERBQUN4QixtREFBSUE7Z0NBQUNtQyxNQUFNOzBDQUFVLDRFQUFDQztvQ0FBS1osV0FBVTs4Q0FBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUU3SCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQzdCLG1EQUFLQTs0QkFBQzBDLEtBQUszQyx1REFBS0E7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQzZCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBS1osV0FBVTtrREFBaUQ7Ozs7OztvQ0FBZ0I7Ozs7Ozs7MENBSW5GLDhEQUFDM0IsdURBQVFBO2dDQUNieUMsT0FBT25DO2dDQUNQb0MsVUFBVW5DO2dDQUNWb0MsV0FBVztnQ0FDWEMsYUFBYSxDQUFDQyxzQkFBVSw4REFBQ0M7d0NBQU8sR0FBR0QsS0FBSzs7Ozs7O2dDQUN4Q0UsV0FBVTtnQ0FDVkMsWUFBWSwyR0FBd0ssT0FBN0QxQyxJQUFJTyxNQUFNLElBQUUsS0FBR1AsSUFBSU8sTUFBTSxJQUFFLElBQUUsZUFBYSxvQkFBbUI7Ozs7Ozs0QkFFckxMLHVCQUFPLDhEQUFDK0I7MENBQU0vQjs7Ozs7OzBDQUNmLDhEQUFDeUM7Z0NBQU90QixXQUFVOzBDQUErRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JJO0dBdkVTdkI7O1FBQ01GLHVEQUFTQTs7O0tBRGZFO0FBeUVULCtEQUFlQSxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2lnbnVwL290cC9wYWdlLmpzPzBkMTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHlwZXdyaXRlciB9IGZyb20gJ3JlYWN0LXNpbXBsZS10eXBld3JpdGVyJ1xuaW1wb3J0IEZhIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9mYS5zdmcnXG5pbXBvcnQgRmFoaWQgZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2ZhaGlkLnN2ZydcbmltcG9ydCBPdHBpbCBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvb3RwLnN2ZydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBheGlvcyBmcm9tICdAL2FwaS9heGlvcyc7XG5pbXBvcnQgT1RQSW5wdXQgZnJvbSAncmVhY3Qtb3RwLWlucHV0JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5mdW5jdGlvbiBPdHAoKSB7XG4gIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcbiAgY29uc3QgW290cCwgc2V0T3RwXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLHNldEVycm9yXT0gdXNlU3RhdGUoJycpXG4gIC8vIGNvbnN0IGVtPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lnbnVwRW1haWxcIik7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYob3RwLmxlbmd0aD09Nil7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdhcGkvYXV0aC92ZXJpZnktb3RwJyx7ZW1haWw6ZW0sb3RwOm90cH0sXG4gICAgICAgIHtoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCd9LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2V9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgICAgIC8vIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcyl7XG4gICAgICAgICAgLy8gdG9hc3Quc3VjY2VzcyhcIk9UUCB2ZXJpZmllZCFcIilcbiAgICAgICAgICAvLyAgIGlmKCFzaWduKVxuICAgICAgICAgIC8vIHt0b2tlbj1yZXNwb25zZS5kYXRhLmRhdGEudG9rZW47XG4gICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJGdG9rZW5cIix0b2tlbik7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vICAgaWYoc2lnbilcbiAgICAgICAgICAvLyAgIG5hdmlnYXRlKFwiL2xvZ2luXCIpO1xuICAgICAgICAgIC8vIGVsc2VcbiAgICAgICAgICAvLyAgICB7IFxuICAgICAgICAgIC8vICAgICAgbmF2aWdhdGUoJy9yZXNldHB3ZCcpICB9ICAgICAgICBcbiAgXG4gIH1jYXRjaChlcnIpe1xuICBpZihlcnIucmVzcG9uc2Upe1xuICBjb25zb2xlLmxvZygnU2VydmVyIHJlc3BvbmRlZCcpO1xuICAvLyB0b2FzdC5lcnJvcihcIk9UUCBpcyBpbnZhbGlkXCIpO1xuICBzZXRFcnJvcihcIkludmFsaWQgT1RQXCIpO1xuICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgfVxuICBlbHNlXG4gICAgY29uc29sZS5sb2coJ05vIFNlcnZlciByZXNwb25zZScpO1xuICB9fX1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyMxYTFhMWFdIGZvbnQtUG9wcGlucyBoLVsxMDB2aF0gcHgtWzcuNHJlbV0gcHktWzNyZW1dJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJz48ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1bMS4zNzVyZW1dIHRleHQtWyNlNmU2ZTZdJz48c3ZnIHdpZHRoPVwiMzNcIiBoZWlnaHQ9XCIzMVwiIHZpZXdCb3g9XCIwIDAgMzMgMzFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOS41ODY5IDYuMTI0MzdIMjkuMTU2QzI5LjUwOCA2LjEyNDM3IDI5LjgyNzIgNS45MzkzNyAzMC4wMDc3IDUuNjM3MjVMMzIuNDcxNyAxLjUxMjg4QzMyLjg3IDAuODQ2MzI1IDMyLjM4OTcgMCAzMS42MTMzIDBIMy4xMDIwNkMyLjcwNjUxIDAgMi4zNDgxMyAwLjIzMzE1IDIuMTg3ODQgMC41OTQ3NjNMMC4zNTk2NiA0LjcxOTEzQzAuMDY2NTc5MiA1LjM4MDMyIDAuNTUwMjI4IDYuMTI0MzcgMS4yNzM0NiA2LjEyNDM3SDExLjMwOUw2LjE4NjM3IDE2LjU2NTJDNS44NjAzNyAxNy4yMjk2IDYuMzQ0MDMgMTguMDA1NiA3LjA4NDEzIDE4LjAwNTZIOS42ODkxM0MxMC4zODU0IDE4LjAwNTYgMTAuODY4NiAxOC42OTk1IDEwLjYyNyAxOS4zNTI2TDcuNjIzOTQgMjcuNDcwNUM3LjIzMzggMjguNTI1MSA4LjYxMjE2IDI5LjMyMTQgOS4zMzA4OSAyOC40NTY2TDIxLjc2NzYgMTMuNDkyM0MyMi4yODY2IDEyLjg2NzkgMjEuODg0NCAxMS45MTggMjEuMDc0OSAxMS44NTYxTDE4LjE1NjQgMTEuNjMyN0MxNy40MzAxIDExLjU3NzEgMTcuMDA1IDEwLjc4ODUgMTcuMzU3OCAxMC4xNTEzTDE5LjU4NjkgNi4xMjQzN1pcIiBmaWxsPVwiI0U2RTZFNlwiLz5cbjwvc3ZnPlxuPD5UeXBpbmdUaHVuZGVyPC8+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPSd0ZXh0LVsjQjNCM0IzXSB0ZXh0LVsxLjEyNXJlbV0nPkFscmVhZHkgYSB1c2VyPyA8TGluayBocmVmPXsnL2xvZ2luJ30+PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LVsjZTZlNmU2XSB1bmRlcmxpbmUnPkxvZyBpbjwvc3Bhbj48L0xpbms+PC9kaXY+XG48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtWzEyLjVyZW1dJz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtWzEwcmVtXSB3LVszMHJlbV0gZmxleCBmbGV4LWNvbCBnYXAtWzEuNXJlbV0nPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtPdHBpbH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTggdGV4dC1bMS4xMjVyZW1dIHB0LVs0LjhyZW1dIHRleHQtd2hpdGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHRleHQtZGdyJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1bMi41cmVtXSB0ZXh0LWxnciBtYi01IGxlYWRpbmctWzEuMTI1cmVtXSc+RW50ZXIgT1RQPC9zcGFuPlxuICAgICAgICAgICAgUGxlYXNlIGVudGVyIHRoZSA2LWRpZ2l0IGNvZGUgc2VudCB0byB5b3UgYXRcbiAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9J3RleHQtbGdyJz57ZW19PC9zcGFuPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8T1RQSW5wdXRcbiAgICAgIHZhbHVlPXtvdHB9XG4gICAgICBvbkNoYW5nZT17c2V0T3RwfVxuICAgICAgbnVtSW5wdXRzPXs2fVxuICAgICAgcmVuZGVySW5wdXQ9eyhwcm9wcykgPT4gPGlucHV0IHsuLi5wcm9wc30vPn1cbiAgICAgIGlucHV0VHlwZT0ndGVsJ1xuICAgICAgaW5wdXRTdHlsZT17YG1yLTQgaC1bMy4xMjVyZW1dIG1pbi13LVszLjEyNXJlbV0gdGV4dC1bMS4zNzVyZW1dIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgcm91bmRlZC1bMC44MTI1cmVtXSBib3JkZXIgJHtvdHAubGVuZ3RoPT02fHxvdHAubGVuZ3RoPT0wPydib3JkZXItZGdyJzonYm9yZGVyLVsjRkY3RTdFXSd9IG91dGxpbmUtbm9uZWAgfSBcbiAgICAvPlxuICAgIHtlcnJvciYmPHNwYW4+e2Vycm9yfTwvc3Bhbj59XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXdoaXRlIG10LVsycmVtXSB0ZXh0LWJsYWNrIHRleHQtWzEuMzc1cmVtXSB3LVszMS43cmVtXSBoLVs0cmVtXSBweC02IHB0LTMgcGItWzAuNjI1cmVtXSByb3VuZGVkLVsxLjI1cmVtXSc+XG5WZXJpZnlcbiAgICA8L2J1dHRvbj5cbiA8L2Rpdj5cbiAgICA8L2Rpdj4gXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3RwIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUeXBld3JpdGVyIiwiRmEiLCJGYWhpZCIsIk90cGlsIiwiSW1hZ2UiLCJheGlvcyIsIk9UUElucHV0IiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiT3RwIiwicm91dGVyIiwib3RwIiwic2V0T3RwIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJyZXNwb25zZSIsInBvc3QiLCJlbWFpbCIsImVtIiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsInB1c2giLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZmlsbC1ydWxlIiwiY2xpcC1ydWxlIiwiZCIsImhyZWYiLCJzcGFuIiwic3JjIiwidmFsdWUiLCJvbkNoYW5nZSIsIm51bUlucHV0cyIsInJlbmRlcklucHV0IiwicHJvcHMiLCJpbnB1dCIsImlucHV0VHlwZSIsImlucHV0U3R5bGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signup/otp/page.js\n"));

/***/ })

});