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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-typewriter */ \"(app-pages-browser)/./node_modules/react-simple-typewriter/dist/index.js\");\n/* harmony import */ var _public_fa_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/fa.svg */ \"(app-pages-browser)/./public/fa.svg\");\n/* harmony import */ var _public_fahid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/fahid.svg */ \"(app-pages-browser)/./public/fahid.svg\");\n/* harmony import */ var _public_otp_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/otp.svg */ \"(app-pages-browser)/./public/otp.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/axios */ \"(app-pages-browser)/./src/api/axios.js\");\n/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-otp-input */ \"(app-pages-browser)/./node_modules/react-otp-input/lib/index.esm.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// import { cookies } from 'next/headers';\n\nfunction Otp() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const cookieStore = cookies();\n    const em = js_cookie__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"email\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (otp.length == 6) {\n            try {\n                const response = await _api_axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"api/auth/verify-otp\", {\n                    email: em,\n                    otp: otp\n                }, {\n                    headers: {\n                        \"Content-Type\": \"application/json; charset=utf-8\"\n                    },\n                    withCredentials: false\n                });\n                console.log(response.data.message);\n                router.push(\"/login\");\n            // if(response.data.success){\n            // toast.success(\"OTP verified!\")\n            //   if(!sign)\n            // {token=response.data.data.token;\n            // localStorage.setItem(\"Ftoken\",token);\n            // }\n            //   if(sign)\n            //   navigate(\"/login\");\n            // else\n            //    { \n            //      navigate('/resetpwd')  }        \n            } catch (err) {\n                if (err.response) {\n                    console.log(\"Server responded\");\n                    // toast.error(\"OTP is invalid\");\n                    setError(\"Invalid OTP\");\n                    console.log(err.response.data.message);\n                } else console.log(\"No Server response\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1a1a1a] font-Poppins h-[100vh] px-[7.4rem] py-[3rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-2 justify-center items-center text-[1.375rem] text-[#e6e6e6]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                width: \"33\",\n                                height: \"31\",\n                                viewBox: \"0 0 33 31\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    \"clip-rule\": \"evenodd\",\n                                    d: \"M19.5869 6.12437H29.156C29.508 6.12437 29.8272 5.93937 30.0077 5.63725L32.4717 1.51288C32.87 0.846325 32.3897 0 31.6133 0H3.10206C2.70651 0 2.34813 0.23315 2.18784 0.594763L0.35966 4.71913C0.0665792 5.38032 0.550228 6.12437 1.27346 6.12437H11.309L6.18637 16.5652C5.86037 17.2296 6.34403 18.0056 7.08413 18.0056H9.68913C10.3854 18.0056 10.8686 18.6995 10.627 19.3526L7.62394 27.4705C7.2338 28.5251 8.61216 29.3214 9.33089 28.4566L21.7676 13.4923C22.2866 12.8679 21.8844 11.918 21.0749 11.8561L18.1564 11.6327C17.4301 11.5771 17.005 10.7885 17.3578 10.1513L19.5869 6.12437Z\",\n                                    fill: \"#E6E6E6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 1\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 152\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: \"TypingThunder\"\n                            }, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 55,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[#B3B3B3] text-[1.125rem]\",\n                        children: [\n                            \"Already a user? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-[#e6e6e6] underline\",\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 87\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 60,\n                                columnNumber: 65\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 60,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-[12.5rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-[10rem] w-[30rem] flex flex-col gap-[1.5rem]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: _public_otp_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-3 text-[1.125rem] pt-[4.8rem] text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col mb-5 text-dgr\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[2.5rem] text-lgr mb-5 leading-[1.125rem]\",\n                                        children: \"Enter OTP\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Please enter the 6-digit code sent to you at\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lgr\",\n                                        children: em\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col relative pb-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_otp_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        value: otp,\n                                        onChange: setOtp,\n                                        numInputs: 6,\n                                        renderInput: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                ...props\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 31\n                                            }, void 0),\n                                        inputType: \"tel\",\n                                        inputStyle: \"mr-4 h-[3.125rem] min-w-[3.125rem] text-[1.375rem] bg-transparent text-white rounded-[0.8125rem] border \".concat(otp.length == 6 && !error || otp.length == 0 ? \"border-dgr\" : \"border-[#FF7E7E]\", \" outline-none\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 11\n                                    }, this),\n                                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-1rem text-err absolute l-0 b-[2\",\n                                        children: error\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSubmit,\n                                className: \"bg-white mt-[2rem] text-black text-[1.375rem] w-[31.7rem] h-[4rem] px-6 pt-3 pb-[0.625rem] rounded-[1.25rem]\",\n                                children: \"Verify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 83,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Otp, \"4OvCvQt1wOxz70y0yw4kecmj584=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_10__.useRouter\n    ];\n});\n_c = Otp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Otp);\nvar _c;\n$RefreshReg$(_c, \"Otp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbnVwL290cC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ1E7QUFDbUI7QUFDVjtBQUNNO0FBQ0Y7QUFDZjtBQUNDO0FBQ087QUFDQTtBQUNLO0FBQ2Y7QUFDN0IsMENBQTBDO0FBQ1o7QUFDOUIsU0FBU2E7O0lBQ1AsTUFBTUMsU0FBT0osMkRBQVNBO0lBQ3RCLE1BQU0sQ0FBQ0ssS0FBS0MsT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNnQixPQUFNQyxTQUFTLEdBQUVqQiwrQ0FBUUEsQ0FBQztJQUNqQyxpQ0FBaUM7SUFDakMsTUFBTWtCLEtBQUtQLGtEQUFNQSxDQUFDUSxHQUFHLENBQUM7SUFDdEIsTUFBTUMsZUFBZSxPQUFPQztRQUMxQkEsTUFBTUMsY0FBYztRQUNwQixJQUFHUixJQUFJUyxNQUFNLElBQUUsR0FBRTtZQUNqQixJQUFHO2dCQUNELE1BQU1DLFdBQVcsTUFBTWxCLGtEQUFLQSxDQUFDbUIsSUFBSSxDQUFDLHVCQUFzQjtvQkFBQ0MsT0FBTVI7b0JBQUdKLEtBQUlBO2dCQUFHLEdBQ3ZFO29CQUFDYSxTQUFRO3dCQUFDLGdCQUFlO29CQUFpQztvQkFDeERDLGlCQUFpQjtnQkFBSztnQkFDdEJDLFFBQVFDLEdBQUcsQ0FBQ04sU0FBU08sSUFBSSxDQUFDQyxPQUFPO2dCQUNqQ25CLE9BQU9vQixJQUFJLENBQUM7WUFDWiw2QkFBNkI7WUFDN0IsaUNBQWlDO1lBQ2pDLGNBQWM7WUFDZCxtQ0FBbUM7WUFDbkMsd0NBQXdDO1lBQ3hDLElBQUk7WUFDSixhQUFhO1lBQ2Isd0JBQXdCO1lBQ3hCLE9BQU87WUFDUCxRQUFRO1lBQ1Isd0NBQXdDO1lBRWhELEVBQUMsT0FBTUMsS0FBSTtnQkFDWCxJQUFHQSxJQUFJVixRQUFRLEVBQUM7b0JBQ2hCSyxRQUFRQyxHQUFHLENBQUM7b0JBQ1osaUNBQWlDO29CQUNqQ2IsU0FBUztvQkFDVFksUUFBUUMsR0FBRyxDQUFDSSxJQUFJVixRQUFRLENBQUNPLElBQUksQ0FBQ0MsT0FBTztnQkFDckMsT0FFRUgsUUFBUUMsR0FBRyxDQUFDO1lBQ2Q7UUFBQztJQUFDO0lBQ0YscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQWdDLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQWlGLDhEQUFDQztnQ0FBSUMsT0FBTTtnQ0FBS0MsUUFBTztnQ0FBS0MsU0FBUTtnQ0FBWUMsTUFBSztnQ0FBT0MsT0FBTTswQ0FDek4sNEVBQUNDO29DQUFLQyxhQUFVO29DQUFVQyxhQUFVO29DQUFVQyxHQUFFO29DQUE4akJMLE1BQUs7Ozs7Ozs7Ozs7OzBDQUVubkI7MENBQUU7Ozs7Ozs7O2tDQUVGLDhEQUFDTjt3QkFBSUMsV0FBVTs7NEJBQWlDOzBDQUFnQiw4REFBQzFCLG1EQUFJQTtnQ0FBQ3FDLE1BQU07MENBQVUsNEVBQUNDO29DQUFLWixXQUFVOzhDQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRTdILDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDL0IsbURBQUtBOzRCQUFDNEMsS0FBSzdDLHVEQUFLQTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDK0I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNZO3dDQUFLWixXQUFVO2tEQUFpRDs7Ozs7O29DQUFnQjtrREFFakYsOERBQUNZO3dDQUFLWixXQUFVO2tEQUFZbEI7Ozs7Ozs7Ozs7OzswQ0FFOUIsOERBQUNpQjtnQ0FBSUMsV0FBVTs7a0RBQ2YsOERBQUM3Qix1REFBUUE7d0NBQ2IyQyxPQUFPcEM7d0NBQ1BxQyxVQUFVcEM7d0NBQ1ZxQyxXQUFXO3dDQUNYQyxhQUFhLENBQUNDLHNCQUFVLDhEQUFDQztnREFBTyxHQUFHRCxLQUFLOzs7Ozs7d0NBQ3hDRSxXQUFVO3dDQUNWQyxZQUFZLDJHQUFrTCxPQUF2RSxJQUFLbEMsTUFBTSxJQUFFLEtBQUcsQ0FBQ1AsU0FBUUYsSUFBSVMsTUFBTSxJQUFFLElBQUUsZUFBYSxvQkFBbUI7Ozs7OztvQ0FFL0xQLHVCQUFPLDhEQUFDZ0M7d0NBQUtaLFdBQVU7a0RBQXdDcEI7Ozs7Ozs7Ozs7OzswQ0FFaEUsOERBQUMwQztnQ0FBT0MsU0FBU3ZDO2dDQUFjZ0IsV0FBVTswQ0FBK0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81SjtHQTFFU3hCOztRQUNNSCx1REFBU0E7OztLQURmRztBQTRFVCwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NpZ251cC9vdHAvcGFnZS5qcz8wZDE3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFR5cGV3cml0ZXIgfSBmcm9tICdyZWFjdC1zaW1wbGUtdHlwZXdyaXRlcidcbmltcG9ydCBGYSBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvZmEuc3ZnJ1xuaW1wb3J0IEZhaGlkIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9mYWhpZC5zdmcnXG5pbXBvcnQgT3RwaWwgZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL290cC5zdmcnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnQC9hcGkvYXhpb3MnO1xuaW1wb3J0IE9UUElucHV0IGZyb20gJ3JlYWN0LW90cC1pbnB1dCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcbmZ1bmN0aW9uIE90cCgpIHtcbiAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xuICBjb25zdCBbb3RwLCBzZXRPdHBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3Isc2V0RXJyb3JdPSB1c2VTdGF0ZSgnJylcbiAgLy8gY29uc3QgY29va2llU3RvcmUgPSBjb29raWVzKCk7XG4gIGNvbnN0IGVtID0gY29va2llLmdldChcImVtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKG90cC5sZW5ndGg9PTYpe1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnYXBpL2F1dGgvdmVyaWZ5LW90cCcse2VtYWlsOmVtLG90cDpvdHB9LFxuICAgICAgICB7aGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnfSxcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlfSk7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgICAgICAvLyBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3Mpe1xuICAgICAgICAgIC8vIHRvYXN0LnN1Y2Nlc3MoXCJPVFAgdmVyaWZpZWQhXCIpXG4gICAgICAgICAgLy8gICBpZighc2lnbilcbiAgICAgICAgICAvLyB7dG9rZW49cmVzcG9uc2UuZGF0YS5kYXRhLnRva2VuO1xuICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiRnRva2VuXCIsdG9rZW4pO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyAgIGlmKHNpZ24pXG4gICAgICAgICAgLy8gICBuYXZpZ2F0ZShcIi9sb2dpblwiKTtcbiAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgLy8gICAgeyBcbiAgICAgICAgICAvLyAgICAgIG5hdmlnYXRlKCcvcmVzZXRwd2QnKSAgfSAgICAgICAgXG4gIFxuICB9Y2F0Y2goZXJyKXtcbiAgaWYoZXJyLnJlc3BvbnNlKXtcbiAgY29uc29sZS5sb2coJ1NlcnZlciByZXNwb25kZWQnKTtcbiAgLy8gdG9hc3QuZXJyb3IoXCJPVFAgaXMgaW52YWxpZFwiKTtcbiAgc2V0RXJyb3IoXCJJbnZhbGlkIE9UUFwiKTtcbiAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gIH1cbiAgZWxzZVxuICAgIGNvbnNvbGUubG9nKCdObyBTZXJ2ZXIgcmVzcG9uc2UnKTtcbiAgfX19XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLVsjMWExYTFhXSBmb250LVBvcHBpbnMgaC1bMTAwdmhdIHB4LVs3LjRyZW1dIHB5LVszcmVtXSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2Vlbic+PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtWzEuMzc1cmVtXSB0ZXh0LVsjZTZlNmU2XSc+PHN2ZyB3aWR0aD1cIjMzXCIgaGVpZ2h0PVwiMzFcIiB2aWV3Qm94PVwiMCAwIDMzIDMxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTkuNTg2OSA2LjEyNDM3SDI5LjE1NkMyOS41MDggNi4xMjQzNyAyOS44MjcyIDUuOTM5MzcgMzAuMDA3NyA1LjYzNzI1TDMyLjQ3MTcgMS41MTI4OEMzMi44NyAwLjg0NjMyNSAzMi4zODk3IDAgMzEuNjEzMyAwSDMuMTAyMDZDMi43MDY1MSAwIDIuMzQ4MTMgMC4yMzMxNSAyLjE4Nzg0IDAuNTk0NzYzTDAuMzU5NjYgNC43MTkxM0MwLjA2NjU3OTIgNS4zODAzMiAwLjU1MDIyOCA2LjEyNDM3IDEuMjczNDYgNi4xMjQzN0gxMS4zMDlMNi4xODYzNyAxNi41NjUyQzUuODYwMzcgMTcuMjI5NiA2LjM0NDAzIDE4LjAwNTYgNy4wODQxMyAxOC4wMDU2SDkuNjg5MTNDMTAuMzg1NCAxOC4wMDU2IDEwLjg2ODYgMTguNjk5NSAxMC42MjcgMTkuMzUyNkw3LjYyMzk0IDI3LjQ3MDVDNy4yMzM4IDI4LjUyNTEgOC42MTIxNiAyOS4zMjE0IDkuMzMwODkgMjguNDU2NkwyMS43Njc2IDEzLjQ5MjNDMjIuMjg2NiAxMi44Njc5IDIxLjg4NDQgMTEuOTE4IDIxLjA3NDkgMTEuODU2MUwxOC4xNTY0IDExLjYzMjdDMTcuNDMwMSAxMS41NzcxIDE3LjAwNSAxMC43ODg1IDE3LjM1NzggMTAuMTUxM0wxOS41ODY5IDYuMTI0MzdaXCIgZmlsbD1cIiNFNkU2RTZcIi8+XG48L3N2Zz5cbjw+VHlwaW5nVGh1bmRlcjwvPlxuPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT0ndGV4dC1bI0IzQjNCM10gdGV4dC1bMS4xMjVyZW1dJz5BbHJlYWR5IGEgdXNlcj8gPExpbmsgaHJlZj17Jy9sb2dpbid9PjxzcGFuIGNsYXNzTmFtZT0ndGV4dC1bI2U2ZTZlNl0gdW5kZXJsaW5lJz5Mb2cgaW48L3NwYW4+PC9MaW5rPjwvZGl2PlxuPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLVsxMi41cmVtXSc+XG4gICAgPGRpdiBjbGFzc05hbWU9J3B0LVsxMHJlbV0gdy1bMzByZW1dIGZsZXggZmxleC1jb2wgZ2FwLVsxLjVyZW1dJz5cbiAgICAgICAgPEltYWdlIHNyYz17T3RwaWx9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0zIHRleHQtWzEuMTI1cmVtXSBwdC1bNC44cmVtXSB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtYi01IHRleHQtZGdyJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1bMi41cmVtXSB0ZXh0LWxnciBtYi01IGxlYWRpbmctWzEuMTI1cmVtXSc+RW50ZXIgT1RQPC9zcGFuPlxuICAgICAgICAgICAgUGxlYXNlIGVudGVyIHRoZSA2LWRpZ2l0IGNvZGUgc2VudCB0byB5b3UgYXRcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZ3InPntlbX08L3NwYW4+IFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHJlbGF0aXZlIHBiLTEwJz5cbiAgICAgICAgICA8T1RQSW5wdXRcbiAgICAgIHZhbHVlPXtvdHB9XG4gICAgICBvbkNoYW5nZT17c2V0T3RwfVxuICAgICAgbnVtSW5wdXRzPXs2fVxuICAgICAgcmVuZGVySW5wdXQ9eyhwcm9wcykgPT4gPGlucHV0IHsuLi5wcm9wc30vPn1cbiAgICAgIGlucHV0VHlwZT0ndGVsJ1xuICAgICAgaW5wdXRTdHlsZT17YG1yLTQgaC1bMy4xMjVyZW1dIG1pbi13LVszLjEyNXJlbV0gdGV4dC1bMS4zNzVyZW1dIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgcm91bmRlZC1bMC44MTI1cmVtXSBib3JkZXIgJHsob3RwLmxlbmd0aD09NiYmIWVycm9yKXx8b3RwLmxlbmd0aD09MD8nYm9yZGVyLWRncic6J2JvcmRlci1bI0ZGN0U3RV0nfSBvdXRsaW5lLW5vbmVgIH0gXG4gICAgLz5cbiAgICB7ZXJyb3ImJjxzcGFuIGNsYXNzTmFtZT0ndGV4dC0xcmVtIHRleHQtZXJyIGFic29sdXRlIGwtMCBiLVsyJz57ZXJyb3J9PC9zcGFuPn1cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPSdiZy13aGl0ZSBtdC1bMnJlbV0gdGV4dC1ibGFjayB0ZXh0LVsxLjM3NXJlbV0gdy1bMzEuN3JlbV0gaC1bNHJlbV0gcHgtNiBwdC0zIHBiLVswLjYyNXJlbV0gcm91bmRlZC1bMS4yNXJlbV0nPlxuVmVyaWZ5XG4gICAgPC9idXR0b24+XG4gPC9kaXY+XG4gICAgPC9kaXY+IFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE90cCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVHlwZXdyaXRlciIsIkZhIiwiRmFoaWQiLCJPdHBpbCIsIkltYWdlIiwiYXhpb3MiLCJPVFBJbnB1dCIsInRvYXN0IiwidXNlUm91dGVyIiwiTGluayIsImNvb2tpZSIsIk90cCIsInJvdXRlciIsIm90cCIsInNldE90cCIsImVycm9yIiwic2V0RXJyb3IiLCJlbSIsImdldCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJyZXNwb25zZSIsInBvc3QiLCJlbWFpbCIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJwdXNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImZpbGwtcnVsZSIsImNsaXAtcnVsZSIsImQiLCJocmVmIiwic3BhbiIsInNyYyIsInZhbHVlIiwib25DaGFuZ2UiLCJudW1JbnB1dHMiLCJyZW5kZXJJbnB1dCIsInByb3BzIiwiaW5wdXQiLCJpbnB1dFR5cGUiLCJpbnB1dFN0eWxlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signup/otp/page.js\n"));

/***/ })

});