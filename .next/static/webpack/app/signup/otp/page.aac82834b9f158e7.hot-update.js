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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-typewriter */ \"(app-pages-browser)/./node_modules/react-simple-typewriter/dist/index.js\");\n/* harmony import */ var _public_fa_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/fa.svg */ \"(app-pages-browser)/./public/fa.svg\");\n/* harmony import */ var _public_fahid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/fahid.svg */ \"(app-pages-browser)/./public/fahid.svg\");\n/* harmony import */ var _public_otp_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/otp.svg */ \"(app-pages-browser)/./public/otp.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/axios */ \"(app-pages-browser)/./src/api/axios.js\");\n/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-otp-input */ \"(app-pages-browser)/./node_modules/react-otp-input/lib/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_resendOtp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/resendOtp */ \"(app-pages-browser)/./src/components/resendOtp.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import { cookies } from 'next/headers';\n\nfunction Otp() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const cookieStore = cookies();\n    const em = js_cookie__WEBPACK_IMPORTED_MODULE_13__[\"default\"].get(\"email\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (otp.length == 6) {\n            try {\n                const response = await _api_axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"api/auth/verify-otp\", {\n                    email: em,\n                    otp: otp\n                }, {\n                    headers: {\n                        \"Content-Type\": \"application/json; charset=utf-8\"\n                    },\n                    withCredentials: false\n                });\n                console.log(response.data.message);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_12__[\"default\"].success(\"OTP verified!\");\n                router.push(\"/login\");\n            // if(response.data.success){\n            //   if(!sign)\n            // {token=response.data.data.token;\n            // localStorage.setItem(\"Ftoken\",token);\n            // }\n            //   if(sign)\n            //   navigate(\"/login\");\n            // else\n            //    { \n            //      navigate('/resetpwd')  }        \n            } catch (err) {\n                if (err.response) {\n                    console.log(\"Server responded\");\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_12__[\"default\"].error(\"OTP is invalid\");\n                    setError(\"Invalid OTP\");\n                    console.log(err.response.data.message);\n                } else console.log(\"No Server response\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1a1a1a] font-Poppins h-[100vh] px-[7.4rem] py-[3rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-2 justify-center items-center text-[1.375rem] text-[#e6e6e6]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                width: \"33\",\n                                height: \"31\",\n                                viewBox: \"0 0 33 31\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    \"clip-rule\": \"evenodd\",\n                                    d: \"M19.5869 6.12437H29.156C29.508 6.12437 29.8272 5.93937 30.0077 5.63725L32.4717 1.51288C32.87 0.846325 32.3897 0 31.6133 0H3.10206C2.70651 0 2.34813 0.23315 2.18784 0.594763L0.35966 4.71913C0.0665792 5.38032 0.550228 6.12437 1.27346 6.12437H11.309L6.18637 16.5652C5.86037 17.2296 6.34403 18.0056 7.08413 18.0056H9.68913C10.3854 18.0056 10.8686 18.6995 10.627 19.3526L7.62394 27.4705C7.2338 28.5251 8.61216 29.3214 9.33089 28.4566L21.7676 13.4923C22.2866 12.8679 21.8844 11.918 21.0749 11.8561L18.1564 11.6327C17.4301 11.5771 17.005 10.7885 17.3578 10.1513L19.5869 6.12437Z\",\n                                    fill: \"#E6E6E6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 1\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 57,\n                                columnNumber: 152\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: \"TypingThunder\"\n                            }, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[#B3B3B3] text-[1.125rem]\",\n                        children: [\n                            \"Already a user? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-[#e6e6e6] underline\",\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 87\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 62,\n                                columnNumber: 65\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 62,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-[12.5rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-[10rem] w-[30rem] flex flex-col gap-[1.5rem]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: _public_otp_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-3 text-[1.125rem] pt-[4.8rem] text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col mb-5 text-dgr\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[2.5rem] text-lgr mb-5 leading-[1.125rem]\",\n                                        children: \"Enter OTP\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Please enter the 6-digit code sent to you at\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lgr\",\n                                        children: em\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col relative pb-7\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_otp_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        value: otp,\n                                        onChange: setOtp,\n                                        numInputs: 6,\n                                        renderInput: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                ...props\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 31\n                                            }, void 0),\n                                        inputType: \"tel\",\n                                        inputStyle: \"mr-4 h-[3.125rem] min-w-[3.125rem] text-[1.375rem] bg-transparent text-white rounded-[0.8125rem] border \".concat(otp.length == 6 && !error || otp.length == 0 ? \"border-dgr\" : \"border-[#FF7E7E]\", \" outline-none\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 11\n                                    }, this),\n                                    error && otp.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[1rem] text-err absolute l-0 bottom-[-12%]\",\n                                        children: error\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 27\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resendOtp__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                email: em\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 85,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSubmit,\n                                className: \"bg-white mt-[2rem] text-black text-[1.375rem] w-[31.7rem] h-[4rem] px-6 pt-3 pb-[0.625rem] rounded-[1.25rem]\",\n                                children: \"Verify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 86,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Otp, \"4OvCvQt1wOxz70y0yw4kecmj584=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = Otp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Otp);\nvar _c;\n$RefreshReg$(_c, \"Otp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbnVwL290cC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QjtBQUNRO0FBQ21CO0FBQ1Y7QUFDTTtBQUNGO0FBQ2Y7QUFDQztBQUNPO0FBQ0s7QUFDZjtBQUNrQjtBQUNYO0FBQ3BDLDBDQUEwQztBQUNaO0FBQzlCLFNBQVNjOztJQUNQLE1BQU1DLFNBQU9OLDBEQUFTQTtJQUN0QixNQUFNLENBQUNPLEtBQUtDLE9BQU8sR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ2lCLE9BQU1DLFNBQVMsR0FBRWxCLCtDQUFRQSxDQUFDO0lBQ2pDLGlDQUFpQztJQUNqQyxNQUFNbUIsS0FBS1Asa0RBQU1BLENBQUNRLEdBQUcsQ0FBQztJQUN0QixNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUdSLElBQUlTLE1BQU0sSUFBRSxHQUFFO1lBQ2pCLElBQUc7Z0JBQ0QsTUFBTUMsV0FBVyxNQUFNbkIsa0RBQUtBLENBQUNvQixJQUFJLENBQUMsdUJBQXNCO29CQUFDQyxPQUFNUjtvQkFBR0osS0FBSUE7Z0JBQUcsR0FDdkU7b0JBQUNhLFNBQVE7d0JBQUMsZ0JBQWU7b0JBQWlDO29CQUN4REMsaUJBQWlCO2dCQUFLO2dCQUN0QkMsUUFBUUMsR0FBRyxDQUFDTixTQUFTTyxJQUFJLENBQUNDLE9BQU87Z0JBQ2pDdEIsd0RBQUtBLENBQUN1QixPQUFPLENBQUM7Z0JBQ2RwQixPQUFPcUIsSUFBSSxDQUFDO1lBQ1osNkJBQTZCO1lBRTdCLGNBQWM7WUFDZCxtQ0FBbUM7WUFDbkMsd0NBQXdDO1lBQ3hDLElBQUk7WUFDSixhQUFhO1lBQ2Isd0JBQXdCO1lBQ3hCLE9BQU87WUFDUCxRQUFRO1lBQ1Isd0NBQXdDO1lBRWhELEVBQUMsT0FBTUMsS0FBSTtnQkFDWCxJQUFHQSxJQUFJWCxRQUFRLEVBQUM7b0JBQ2hCSyxRQUFRQyxHQUFHLENBQUM7b0JBQ1pwQix3REFBS0EsQ0FBQ00sS0FBSyxDQUFDO29CQUNaQyxTQUFTO29CQUNUWSxRQUFRQyxHQUFHLENBQUNLLElBQUlYLFFBQVEsQ0FBQ08sSUFBSSxDQUFDQyxPQUFPO2dCQUNyQyxPQUVFSCxRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUFDO0lBQUM7SUFDRixxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FBZ0MsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FBaUYsOERBQUNDO2dDQUFJQyxPQUFNO2dDQUFLQyxRQUFPO2dDQUFLQyxTQUFRO2dDQUFZQyxNQUFLO2dDQUFPQyxPQUFNOzBDQUN6Tiw0RUFBQ0M7b0NBQUtDLGFBQVU7b0NBQVVDLGFBQVU7b0NBQVVDLEdBQUU7b0NBQThqQkwsTUFBSzs7Ozs7Ozs7Ozs7MENBRW5uQjswQ0FBRTs7Ozs7Ozs7a0NBRUYsOERBQUNOO3dCQUFJQyxXQUFVOzs0QkFBaUM7MENBQWdCLDhEQUFDN0IsbURBQUlBO2dDQUFDd0MsTUFBTTswQ0FBVSw0RUFBQ0M7b0NBQUtaLFdBQVU7OENBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFN0gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNqQyxtREFBS0E7NEJBQUM4QyxLQUFLL0MsdURBQUtBOzs7Ozs7Ozs7OztrQ0FFakIsOERBQUNpQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1k7d0NBQUtaLFdBQVU7a0RBQWlEOzs7Ozs7b0NBQWdCO2tEQUVqRiw4REFBQ1k7d0NBQUtaLFdBQVU7a0RBQVluQjs7Ozs7Ozs7Ozs7OzBDQUU5Qiw4REFBQ2tCO2dDQUFJQyxXQUFVOztrREFDZiw4REFBQy9CLHVEQUFRQTt3Q0FDYjZDLE9BQU9yQzt3Q0FDUHNDLFVBQVVyQzt3Q0FDVnNDLFdBQVc7d0NBQ1hDLGFBQWEsQ0FBQ0Msc0JBQVUsOERBQUNDO2dEQUFPLEdBQUdELEtBQUs7Ozs7Ozt3Q0FDeENFLFdBQVU7d0NBQ1ZDLFlBQVksMkdBQWtMLE9BQXZFLElBQUtuQyxNQUFNLElBQUUsS0FBRyxDQUFDUCxTQUFRRixJQUFJUyxNQUFNLElBQUUsSUFBRSxlQUFhLG9CQUFtQjs7Ozs7O29DQUUvTFAsU0FBT0YsSUFBSVMsTUFBTSxHQUFDLG1CQUFHLDhEQUFDMEI7d0NBQUtaLFdBQVU7a0RBQW1EckI7Ozs7Ozs7Ozs7OzswQ0FFekYsOERBQUNQLDhEQUFTQTtnQ0FBQ2lCLE9BQU9SOzs7Ozs7MENBQ2xCLDhEQUFDeUM7Z0NBQU9DLFNBQVN4QztnQ0FBY2lCLFdBQVU7MENBQStHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUo7R0E1RVN6Qjs7UUFDTUwsc0RBQVNBOzs7S0FEZks7QUE4RVQsK0RBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaWdudXAvb3RwL3BhZ2UuanM/MGQxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUeXBld3JpdGVyIH0gZnJvbSAncmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXInXG5pbXBvcnQgRmEgZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2ZhLnN2ZydcbmltcG9ydCBGYWhpZCBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvZmFoaWQuc3ZnJ1xuaW1wb3J0IE90cGlsIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9vdHAuc3ZnJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ0AvYXBpL2F4aW9zJztcbmltcG9ydCBPVFBJbnB1dCBmcm9tICdyZWFjdC1vdHAtaW5wdXQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVzZW5kT3RwIGZyb20gJ0AvY29tcG9uZW50cy9yZXNlbmRPdHAnO1xuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XG4vLyBpbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xuZnVuY3Rpb24gT3RwKCkge1xuICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XG4gIGNvbnN0IFtvdHAsIHNldE90cF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlcnJvcixzZXRFcnJvcl09IHVzZVN0YXRlKCcnKVxuICAvLyBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKTtcbiAgY29uc3QgZW0gPSBjb29raWUuZ2V0KFwiZW1haWxcIik7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYob3RwLmxlbmd0aD09Nil7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdhcGkvYXV0aC92ZXJpZnktb3RwJyx7ZW1haWw6ZW0sb3RwOm90cH0sXG4gICAgICAgIHtoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCd9LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2V9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJPVFAgdmVyaWZpZWQhXCIpXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgICAgLy8gaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKXtcbiAgICAgICBcbiAgICAgICAgICAvLyAgIGlmKCFzaWduKVxuICAgICAgICAgIC8vIHt0b2tlbj1yZXNwb25zZS5kYXRhLmRhdGEudG9rZW47XG4gICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJGdG9rZW5cIix0b2tlbik7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vICAgaWYoc2lnbilcbiAgICAgICAgICAvLyAgIG5hdmlnYXRlKFwiL2xvZ2luXCIpO1xuICAgICAgICAgIC8vIGVsc2VcbiAgICAgICAgICAvLyAgICB7IFxuICAgICAgICAgIC8vICAgICAgbmF2aWdhdGUoJy9yZXNldHB3ZCcpICB9ICAgICAgICBcbiAgXG4gIH1jYXRjaChlcnIpe1xuICBpZihlcnIucmVzcG9uc2Upe1xuICBjb25zb2xlLmxvZygnU2VydmVyIHJlc3BvbmRlZCcpO1xuICB0b2FzdC5lcnJvcihcIk9UUCBpcyBpbnZhbGlkXCIpO1xuICBzZXRFcnJvcihcIkludmFsaWQgT1RQXCIpO1xuICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgfVxuICBlbHNlXG4gICAgY29uc29sZS5sb2coJ05vIFNlcnZlciByZXNwb25zZScpO1xuICB9fX1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyMxYTFhMWFdIGZvbnQtUG9wcGlucyBoLVsxMDB2aF0gcHgtWzcuNHJlbV0gcHktWzNyZW1dJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJz48ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1bMS4zNzVyZW1dIHRleHQtWyNlNmU2ZTZdJz48c3ZnIHdpZHRoPVwiMzNcIiBoZWlnaHQ9XCIzMVwiIHZpZXdCb3g9XCIwIDAgMzMgMzFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOS41ODY5IDYuMTI0MzdIMjkuMTU2QzI5LjUwOCA2LjEyNDM3IDI5LjgyNzIgNS45MzkzNyAzMC4wMDc3IDUuNjM3MjVMMzIuNDcxNyAxLjUxMjg4QzMyLjg3IDAuODQ2MzI1IDMyLjM4OTcgMCAzMS42MTMzIDBIMy4xMDIwNkMyLjcwNjUxIDAgMi4zNDgxMyAwLjIzMzE1IDIuMTg3ODQgMC41OTQ3NjNMMC4zNTk2NiA0LjcxOTEzQzAuMDY2NTc5MiA1LjM4MDMyIDAuNTUwMjI4IDYuMTI0MzcgMS4yNzM0NiA2LjEyNDM3SDExLjMwOUw2LjE4NjM3IDE2LjU2NTJDNS44NjAzNyAxNy4yMjk2IDYuMzQ0MDMgMTguMDA1NiA3LjA4NDEzIDE4LjAwNTZIOS42ODkxM0MxMC4zODU0IDE4LjAwNTYgMTAuODY4NiAxOC42OTk1IDEwLjYyNyAxOS4zNTI2TDcuNjIzOTQgMjcuNDcwNUM3LjIzMzggMjguNTI1MSA4LjYxMjE2IDI5LjMyMTQgOS4zMzA4OSAyOC40NTY2TDIxLjc2NzYgMTMuNDkyM0MyMi4yODY2IDEyLjg2NzkgMjEuODg0NCAxMS45MTggMjEuMDc0OSAxMS44NTYxTDE4LjE1NjQgMTEuNjMyN0MxNy40MzAxIDExLjU3NzEgMTcuMDA1IDEwLjc4ODUgMTcuMzU3OCAxMC4xNTEzTDE5LjU4NjkgNi4xMjQzN1pcIiBmaWxsPVwiI0U2RTZFNlwiLz5cbjwvc3ZnPlxuPD5UeXBpbmdUaHVuZGVyPC8+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPSd0ZXh0LVsjQjNCM0IzXSB0ZXh0LVsxLjEyNXJlbV0nPkFscmVhZHkgYSB1c2VyPyA8TGluayBocmVmPXsnL2xvZ2luJ30+PHNwYW4gY2xhc3NOYW1lPSd0ZXh0LVsjZTZlNmU2XSB1bmRlcmxpbmUnPkxvZyBpbjwvc3Bhbj48L0xpbms+PC9kaXY+XG48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtWzEyLjVyZW1dJz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtWzEwcmVtXSB3LVszMHJlbV0gZmxleCBmbGV4LWNvbCBnYXAtWzEuNXJlbV0nPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtPdHBpbH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTMgdGV4dC1bMS4xMjVyZW1dIHB0LVs0LjhyZW1dIHRleHQtd2hpdGUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1iLTUgdGV4dC1kZ3InPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LVsyLjVyZW1dIHRleHQtbGdyIG1iLTUgbGVhZGluZy1bMS4xMjVyZW1dJz5FbnRlciBPVFA8L3NwYW4+XG4gICAgICAgICAgICBQbGVhc2UgZW50ZXIgdGhlIDYtZGlnaXQgY29kZSBzZW50IHRvIHlvdSBhdFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxncic+e2VtfTwvc3Bhbj4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcmVsYXRpdmUgcGItNyc+XG4gICAgICAgICAgPE9UUElucHV0XG4gICAgICB2YWx1ZT17b3RwfVxuICAgICAgb25DaGFuZ2U9e3NldE90cH1cbiAgICAgIG51bUlucHV0cz17Nn1cbiAgICAgIHJlbmRlcklucHV0PXsocHJvcHMpID0+IDxpbnB1dCB7Li4ucHJvcHN9Lz59XG4gICAgICBpbnB1dFR5cGU9J3RlbCdcbiAgICAgIGlucHV0U3R5bGU9e2Btci00IGgtWzMuMTI1cmVtXSBtaW4tdy1bMy4xMjVyZW1dIHRleHQtWzEuMzc1cmVtXSBiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIHJvdW5kZWQtWzAuODEyNXJlbV0gYm9yZGVyICR7KG90cC5sZW5ndGg9PTYmJiFlcnJvcil8fG90cC5sZW5ndGg9PTA/J2JvcmRlci1kZ3InOidib3JkZXItWyNGRjdFN0VdJ30gb3V0bGluZS1ub25lYCB9IFxuICAgIC8+XG4gICAge2Vycm9yJiZvdHAubGVuZ3RoPjAmJjxzcGFuIGNsYXNzTmFtZT0ndGV4dC1bMXJlbV0gdGV4dC1lcnIgYWJzb2x1dGUgbC0wIGJvdHRvbS1bLTEyJV0nPntlcnJvcn08L3NwYW4+fVxuICAgIDwvZGl2PlxuICAgIDxSZXNlbmRPdHAgZW1haWw9e2VtfS8+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nYmctd2hpdGUgbXQtWzJyZW1dIHRleHQtYmxhY2sgdGV4dC1bMS4zNzVyZW1dIHctWzMxLjdyZW1dIGgtWzRyZW1dIHB4LTYgcHQtMyBwYi1bMC42MjVyZW1dIHJvdW5kZWQtWzEuMjVyZW1dJz5cblZlcmlmeVxuICAgIDwvYnV0dG9uPlxuIDwvZGl2PlxuICAgIDwvZGl2PiBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdHAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlR5cGV3cml0ZXIiLCJGYSIsIkZhaGlkIiwiT3RwaWwiLCJJbWFnZSIsImF4aW9zIiwiT1RQSW5wdXQiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiUmVzZW5kT3RwIiwidG9hc3QiLCJjb29raWUiLCJPdHAiLCJyb3V0ZXIiLCJvdHAiLCJzZXRPdHAiLCJlcnJvciIsInNldEVycm9yIiwiZW0iLCJnZXQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwicmVzcG9uc2UiLCJwb3N0IiwiZW1haWwiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtZXNzYWdlIiwic3VjY2VzcyIsInB1c2giLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZmlsbC1ydWxlIiwiY2xpcC1ydWxlIiwiZCIsImhyZWYiLCJzcGFuIiwic3JjIiwidmFsdWUiLCJvbkNoYW5nZSIsIm51bUlucHV0cyIsInJlbmRlcklucHV0IiwicHJvcHMiLCJpbnB1dCIsImlucHV0VHlwZSIsImlucHV0U3R5bGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signup/otp/page.js\n"));

/***/ })

});