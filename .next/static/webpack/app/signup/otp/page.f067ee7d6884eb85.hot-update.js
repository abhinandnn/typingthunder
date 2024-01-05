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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-typewriter */ \"(app-pages-browser)/./node_modules/react-simple-typewriter/dist/index.js\");\n/* harmony import */ var _public_fa_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/fa.svg */ \"(app-pages-browser)/./public/fa.svg\");\n/* harmony import */ var _public_fahid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/fahid.svg */ \"(app-pages-browser)/./public/fahid.svg\");\n/* harmony import */ var _public_otp_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/otp.svg */ \"(app-pages-browser)/./public/otp.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/axios */ \"(app-pages-browser)/./src/api/axios.js\");\n/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-otp-input */ \"(app-pages-browser)/./node_modules/react-otp-input/lib/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_resendOtp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/resendOtp */ \"(app-pages-browser)/./src/components/resendOtp.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import { cookies } from 'next/headers';\n\nfunction Otp() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const cookieStore = cookies();\n    const em = js_cookie__WEBPACK_IMPORTED_MODULE_13__[\"default\"].get(\"email\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (otp.length == 6) {\n            try {\n                const response = await _api_axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"api/auth/verify-otp\", {\n                    email: em,\n                    otp: otp\n                }, {\n                    headers: {\n                        \"Content-Type\": \"application/json; charset=utf-8\"\n                    },\n                    withCredentials: false\n                });\n                console.log(response.data.message);\n                router.push(\"/login\");\n            // if(response.data.success){\n            // toast.success(\"OTP verified!\")\n            //   if(!sign)\n            // {token=response.data.data.token;\n            // localStorage.setItem(\"Ftoken\",token);\n            // }\n            //   if(sign)\n            //   navigate(\"/login\");\n            // else\n            //    { \n            //      navigate('/resetpwd')  }        \n            } catch (err) {\n                if (err.response) {\n                    console.log(\"Server responded\");\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_12__[\"default\"].error(\"OTP is invalid\");\n                    setError(\"Invalid OTP\");\n                    console.log(err.response.data.message);\n                } else console.log(\"No Server response\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1a1a1a] font-Poppins h-[100vh] px-[7.4rem] py-[3rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-2 justify-center items-center text-[1.375rem] text-[#e6e6e6]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                width: \"33\",\n                                height: \"31\",\n                                viewBox: \"0 0 33 31\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    \"clip-rule\": \"evenodd\",\n                                    d: \"M19.5869 6.12437H29.156C29.508 6.12437 29.8272 5.93937 30.0077 5.63725L32.4717 1.51288C32.87 0.846325 32.3897 0 31.6133 0H3.10206C2.70651 0 2.34813 0.23315 2.18784 0.594763L0.35966 4.71913C0.0665792 5.38032 0.550228 6.12437 1.27346 6.12437H11.309L6.18637 16.5652C5.86037 17.2296 6.34403 18.0056 7.08413 18.0056H9.68913C10.3854 18.0056 10.8686 18.6995 10.627 19.3526L7.62394 27.4705C7.2338 28.5251 8.61216 29.3214 9.33089 28.4566L21.7676 13.4923C22.2866 12.8679 21.8844 11.918 21.0749 11.8561L18.1564 11.6327C17.4301 11.5771 17.005 10.7885 17.3578 10.1513L19.5869 6.12437Z\",\n                                    fill: \"#E6E6E6\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 1\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 56,\n                                columnNumber: 152\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: \"TypingThunder\"\n                            }, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 56,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[#B3B3B3] text-[1.125rem]\",\n                        children: [\n                            \"Already a user? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-[#e6e6e6] underline\",\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 87\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 61,\n                                columnNumber: 65\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 61,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-[12.5rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-[10rem] w-[30rem] flex flex-col gap-[1.5rem]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: _public_otp_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-3 text-[1.125rem] pt-[4.8rem] text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col mb-5 text-dgr\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[2.5rem] text-lgr mb-5 leading-[1.125rem]\",\n                                        children: \"Enter OTP\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Please enter the 6-digit code sent to you at\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lgr\",\n                                        children: em\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col relative pb-7\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_otp_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        value: otp,\n                                        onChange: setOtp,\n                                        numInputs: 6,\n                                        renderInput: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                ...props\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 31\n                                            }, void 0),\n                                        inputType: \"tel\",\n                                        inputStyle: \"mr-4 h-[3.125rem] min-w-[3.125rem] text-[1.375rem] bg-transparent text-white rounded-[0.8125rem] border \".concat(otp.length == 6 && !error || otp.length == 0 ? \"border-dgr\" : \"border-[#FF7E7E]\", \" outline-none\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 11\n                                    }, this),\n                                    error && otp.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[1rem] text-err absolute l-0 bottom-[-12%]\",\n                                        children: error\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 27\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resendOtp__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                email: em\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 84,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSubmit,\n                                className: \"bg-white mt-[2rem] text-black text-[1.375rem] w-[31.7rem] h-[4rem] px-6 pt-3 pb-[0.625rem] rounded-[1.25rem]\",\n                                children: \"Verify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                                lineNumber: 85,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/app/signup/otp/page.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Otp, \"4OvCvQt1wOxz70y0yw4kecmj584=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = Otp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Otp);\nvar _c;\n$RefreshReg$(_c, \"Otp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbnVwL290cC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QjtBQUNRO0FBQ21CO0FBQ1Y7QUFDTTtBQUNGO0FBQ2Y7QUFDQztBQUNPO0FBQ0s7QUFDZjtBQUNrQjtBQUNYO0FBQ3BDLDBDQUEwQztBQUNaO0FBQzlCLFNBQVNjOztJQUNQLE1BQU1DLFNBQU9OLDBEQUFTQTtJQUN0QixNQUFNLENBQUNPLEtBQUtDLE9BQU8sR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ2lCLE9BQU1DLFNBQVMsR0FBRWxCLCtDQUFRQSxDQUFDO0lBQ2pDLGlDQUFpQztJQUNqQyxNQUFNbUIsS0FBS1Asa0RBQU1BLENBQUNRLEdBQUcsQ0FBQztJQUN0QixNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUdSLElBQUlTLE1BQU0sSUFBRSxHQUFFO1lBQ2pCLElBQUc7Z0JBQ0QsTUFBTUMsV0FBVyxNQUFNbkIsa0RBQUtBLENBQUNvQixJQUFJLENBQUMsdUJBQXNCO29CQUFDQyxPQUFNUjtvQkFBR0osS0FBSUE7Z0JBQUcsR0FDdkU7b0JBQUNhLFNBQVE7d0JBQUMsZ0JBQWU7b0JBQWlDO29CQUN4REMsaUJBQWlCO2dCQUFLO2dCQUN0QkMsUUFBUUMsR0FBRyxDQUFDTixTQUFTTyxJQUFJLENBQUNDLE9BQU87Z0JBQ2pDbkIsT0FBT29CLElBQUksQ0FBQztZQUNaLDZCQUE2QjtZQUM3QixpQ0FBaUM7WUFDakMsY0FBYztZQUNkLG1DQUFtQztZQUNuQyx3Q0FBd0M7WUFDeEMsSUFBSTtZQUNKLGFBQWE7WUFDYix3QkFBd0I7WUFDeEIsT0FBTztZQUNQLFFBQVE7WUFDUix3Q0FBd0M7WUFFaEQsRUFBQyxPQUFNQyxLQUFJO2dCQUNYLElBQUdBLElBQUlWLFFBQVEsRUFBQztvQkFDaEJLLFFBQVFDLEdBQUcsQ0FBQztvQkFDWnBCLHdEQUFLQSxDQUFDTSxLQUFLLENBQUM7b0JBQ1pDLFNBQVM7b0JBQ1RZLFFBQVFDLEdBQUcsQ0FBQ0ksSUFBSVYsUUFBUSxDQUFDTyxJQUFJLENBQUNDLE9BQU87Z0JBQ3JDLE9BRUVILFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQUM7SUFBQztJQUNGLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUFnQyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUFpRiw4REFBQ0M7Z0NBQUlDLE9BQU07Z0NBQUtDLFFBQU87Z0NBQUtDLFNBQVE7Z0NBQVlDLE1BQUs7Z0NBQU9DLE9BQU07MENBQ3pOLDRFQUFDQztvQ0FBS0MsYUFBVTtvQ0FBVUMsYUFBVTtvQ0FBVUMsR0FBRTtvQ0FBOGpCTCxNQUFLOzs7Ozs7Ozs7OzswQ0FFbm5COzBDQUFFOzs7Ozs7OztrQ0FFRiw4REFBQ047d0JBQUlDLFdBQVU7OzRCQUFpQzswQ0FBZ0IsOERBQUM1QixtREFBSUE7Z0NBQUN1QyxNQUFNOzBDQUFVLDRFQUFDQztvQ0FBS1osV0FBVTs4Q0FBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUU3SCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2hDLG1EQUFLQTs0QkFBQzZDLEtBQUs5Qyx1REFBS0E7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ2dDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBS1osV0FBVTtrREFBaUQ7Ozs7OztvQ0FBZ0I7a0RBRWpGLDhEQUFDWTt3Q0FBS1osV0FBVTtrREFBWWxCOzs7Ozs7Ozs7Ozs7MENBRTlCLDhEQUFDaUI7Z0NBQUlDLFdBQVU7O2tEQUNmLDhEQUFDOUIsdURBQVFBO3dDQUNiNEMsT0FBT3BDO3dDQUNQcUMsVUFBVXBDO3dDQUNWcUMsV0FBVzt3Q0FDWEMsYUFBYSxDQUFDQyxzQkFBVSw4REFBQ0M7Z0RBQU8sR0FBR0QsS0FBSzs7Ozs7O3dDQUN4Q0UsV0FBVTt3Q0FDVkMsWUFBWSwyR0FBa0wsT0FBdkUsSUFBS2xDLE1BQU0sSUFBRSxLQUFHLENBQUNQLFNBQVFGLElBQUlTLE1BQU0sSUFBRSxJQUFFLGVBQWEsb0JBQW1COzs7Ozs7b0NBRS9MUCxTQUFPRixJQUFJUyxNQUFNLEdBQUMsbUJBQUcsOERBQUN5Qjt3Q0FBS1osV0FBVTtrREFBbURwQjs7Ozs7Ozs7Ozs7OzBDQUV6Riw4REFBQ1AsOERBQVNBO2dDQUFDaUIsT0FBT1I7Ozs7OzswQ0FDbEIsOERBQUN3QztnQ0FBT0MsU0FBU3ZDO2dDQUFjZ0IsV0FBVTswQ0FBK0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81SjtHQTNFU3hCOztRQUNNTCxzREFBU0E7OztLQURmSztBQTZFVCwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NpZ251cC9vdHAvcGFnZS5qcz8wZDE3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFR5cGV3cml0ZXIgfSBmcm9tICdyZWFjdC1zaW1wbGUtdHlwZXdyaXRlcidcbmltcG9ydCBGYSBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvZmEuc3ZnJ1xuaW1wb3J0IEZhaGlkIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9mYWhpZC5zdmcnXG5pbXBvcnQgT3RwaWwgZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL290cC5zdmcnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnQC9hcGkvYXhpb3MnO1xuaW1wb3J0IE9UUElucHV0IGZyb20gJ3JlYWN0LW90cC1pbnB1dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZXNlbmRPdHAgZnJvbSAnQC9jb21wb25lbnRzL3Jlc2VuZE90cCc7XG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0Jztcbi8vIGltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXG5mdW5jdGlvbiBPdHAoKSB7XG4gIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcbiAgY29uc3QgW290cCwgc2V0T3RwXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLHNldEVycm9yXT0gdXNlU3RhdGUoJycpXG4gIC8vIGNvbnN0IGNvb2tpZVN0b3JlID0gY29va2llcygpO1xuICBjb25zdCBlbSA9IGNvb2tpZS5nZXQoXCJlbWFpbFwiKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZihvdHAubGVuZ3RoPT02KXtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2FwaS9hdXRoL3ZlcmlmeS1vdHAnLHtlbWFpbDplbSxvdHA6b3RwfSxcbiAgICAgICAge2hlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J30sXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZX0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgICAgLy8gaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKXtcbiAgICAgICAgICAvLyB0b2FzdC5zdWNjZXNzKFwiT1RQIHZlcmlmaWVkIVwiKVxuICAgICAgICAgIC8vICAgaWYoIXNpZ24pXG4gICAgICAgICAgLy8ge3Rva2VuPXJlc3BvbnNlLmRhdGEuZGF0YS50b2tlbjtcbiAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkZ0b2tlblwiLHRva2VuKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gICBpZihzaWduKVxuICAgICAgICAgIC8vICAgbmF2aWdhdGUoXCIvbG9naW5cIik7XG4gICAgICAgICAgLy8gZWxzZVxuICAgICAgICAgIC8vICAgIHsgXG4gICAgICAgICAgLy8gICAgICBuYXZpZ2F0ZSgnL3Jlc2V0cHdkJykgIH0gICAgICAgIFxuICBcbiAgfWNhdGNoKGVycil7XG4gIGlmKGVyci5yZXNwb25zZSl7XG4gIGNvbnNvbGUubG9nKCdTZXJ2ZXIgcmVzcG9uZGVkJyk7XG4gIHRvYXN0LmVycm9yKFwiT1RQIGlzIGludmFsaWRcIik7XG4gIHNldEVycm9yKFwiSW52YWxpZCBPVFBcIik7XG4gIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICB9XG4gIGVsc2VcbiAgICBjb25zb2xlLmxvZygnTm8gU2VydmVyIHJlc3BvbnNlJyk7XG4gIH19fVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1bIzFhMWExYV0gZm9udC1Qb3BwaW5zIGgtWzEwMHZoXSBweC1bNy40cmVtXSBweS1bM3JlbV0nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4nPjxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LVsxLjM3NXJlbV0gdGV4dC1bI2U2ZTZlNl0nPjxzdmcgd2lkdGg9XCIzM1wiIGhlaWdodD1cIjMxXCIgdmlld0JveD1cIjAgMCAzMyAzMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE5LjU4NjkgNi4xMjQzN0gyOS4xNTZDMjkuNTA4IDYuMTI0MzcgMjkuODI3MiA1LjkzOTM3IDMwLjAwNzcgNS42MzcyNUwzMi40NzE3IDEuNTEyODhDMzIuODcgMC44NDYzMjUgMzIuMzg5NyAwIDMxLjYxMzMgMEgzLjEwMjA2QzIuNzA2NTEgMCAyLjM0ODEzIDAuMjMzMTUgMi4xODc4NCAwLjU5NDc2M0wwLjM1OTY2IDQuNzE5MTNDMC4wNjY1NzkyIDUuMzgwMzIgMC41NTAyMjggNi4xMjQzNyAxLjI3MzQ2IDYuMTI0MzdIMTEuMzA5TDYuMTg2MzcgMTYuNTY1MkM1Ljg2MDM3IDE3LjIyOTYgNi4zNDQwMyAxOC4wMDU2IDcuMDg0MTMgMTguMDA1Nkg5LjY4OTEzQzEwLjM4NTQgMTguMDA1NiAxMC44Njg2IDE4LjY5OTUgMTAuNjI3IDE5LjM1MjZMNy42MjM5NCAyNy40NzA1QzcuMjMzOCAyOC41MjUxIDguNjEyMTYgMjkuMzIxNCA5LjMzMDg5IDI4LjQ1NjZMMjEuNzY3NiAxMy40OTIzQzIyLjI4NjYgMTIuODY3OSAyMS44ODQ0IDExLjkxOCAyMS4wNzQ5IDExLjg1NjFMMTguMTU2NCAxMS42MzI3QzE3LjQzMDEgMTEuNTc3MSAxNy4wMDUgMTAuNzg4NSAxNy4zNTc4IDEwLjE1MTNMMTkuNTg2OSA2LjEyNDM3WlwiIGZpbGw9XCIjRTZFNkU2XCIvPlxuPC9zdmc+XG48PlR5cGluZ1RodW5kZXI8Lz5cbjwvZGl2PlxuPGRpdiBjbGFzc05hbWU9J3RleHQtWyNCM0IzQjNdIHRleHQtWzEuMTI1cmVtXSc+QWxyZWFkeSBhIHVzZXI/IDxMaW5rIGhyZWY9eycvbG9naW4nfT48c3BhbiBjbGFzc05hbWU9J3RleHQtWyNlNmU2ZTZdIHVuZGVybGluZSc+TG9nIGluPC9zcGFuPjwvTGluaz48L2Rpdj5cbjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC1bMTIuNXJlbV0nPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdwdC1bMTByZW1dIHctWzMwcmVtXSBmbGV4IGZsZXgtY29sIGdhcC1bMS41cmVtXSc+XG4gICAgICAgIDxJbWFnZSBzcmM9e090cGlsfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMyB0ZXh0LVsxLjEyNXJlbV0gcHQtWzQuOHJlbV0gdGV4dC13aGl0ZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWItNSB0ZXh0LWRncic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtWzIuNXJlbV0gdGV4dC1sZ3IgbWItNSBsZWFkaW5nLVsxLjEyNXJlbV0nPkVudGVyIE9UUDwvc3Bhbj5cbiAgICAgICAgICAgIFBsZWFzZSBlbnRlciB0aGUgNi1kaWdpdCBjb2RlIHNlbnQgdG8geW91IGF0XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbGdyJz57ZW19PC9zcGFuPiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCByZWxhdGl2ZSBwYi03Jz5cbiAgICAgICAgICA8T1RQSW5wdXRcbiAgICAgIHZhbHVlPXtvdHB9XG4gICAgICBvbkNoYW5nZT17c2V0T3RwfVxuICAgICAgbnVtSW5wdXRzPXs2fVxuICAgICAgcmVuZGVySW5wdXQ9eyhwcm9wcykgPT4gPGlucHV0IHsuLi5wcm9wc30vPn1cbiAgICAgIGlucHV0VHlwZT0ndGVsJ1xuICAgICAgaW5wdXRTdHlsZT17YG1yLTQgaC1bMy4xMjVyZW1dIG1pbi13LVszLjEyNXJlbV0gdGV4dC1bMS4zNzVyZW1dIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgcm91bmRlZC1bMC44MTI1cmVtXSBib3JkZXIgJHsob3RwLmxlbmd0aD09NiYmIWVycm9yKXx8b3RwLmxlbmd0aD09MD8nYm9yZGVyLWRncic6J2JvcmRlci1bI0ZGN0U3RV0nfSBvdXRsaW5lLW5vbmVgIH0gXG4gICAgLz5cbiAgICB7ZXJyb3ImJm90cC5sZW5ndGg+MCYmPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LVsxcmVtXSB0ZXh0LWVyciBhYnNvbHV0ZSBsLTAgYm90dG9tLVstMTIlXSc+e2Vycm9yfTwvc3Bhbj59XG4gICAgPC9kaXY+XG4gICAgPFJlc2VuZE90cCBlbWFpbD17ZW19Lz5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPSdiZy13aGl0ZSBtdC1bMnJlbV0gdGV4dC1ibGFjayB0ZXh0LVsxLjM3NXJlbV0gdy1bMzEuN3JlbV0gaC1bNHJlbV0gcHgtNiBwdC0zIHBiLVswLjYyNXJlbV0gcm91bmRlZC1bMS4yNXJlbV0nPlxuVmVyaWZ5XG4gICAgPC9idXR0b24+XG4gPC9kaXY+XG4gICAgPC9kaXY+IFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE90cCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVHlwZXdyaXRlciIsIkZhIiwiRmFoaWQiLCJPdHBpbCIsIkltYWdlIiwiYXhpb3MiLCJPVFBJbnB1dCIsInVzZVJvdXRlciIsIkxpbmsiLCJSZXNlbmRPdHAiLCJ0b2FzdCIsImNvb2tpZSIsIk90cCIsInJvdXRlciIsIm90cCIsInNldE90cCIsImVycm9yIiwic2V0RXJyb3IiLCJlbSIsImdldCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJyZXNwb25zZSIsInBvc3QiLCJlbWFpbCIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJwdXNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImZpbGwtcnVsZSIsImNsaXAtcnVsZSIsImQiLCJocmVmIiwic3BhbiIsInNyYyIsInZhbHVlIiwib25DaGFuZ2UiLCJudW1JbnB1dHMiLCJyZW5kZXJJbnB1dCIsInByb3BzIiwiaW5wdXQiLCJpbnB1dFR5cGUiLCJpbnB1dFN0eWxlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signup/otp/page.js\n"));

/***/ })

});