"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reset/otp/page",{

/***/ "(app-pages-browser)/./src/components/resendOtp.js":
/*!*************************************!*\
  !*** ./src/components/resendOtp.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/axios */ \"(app-pages-browser)/./src/api/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ResendOtp(param) {\n    let { email } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(59);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (seconds > 0) {\n                setSeconds(seconds - 1);\n            }\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        seconds\n    ]);\n    const handleResendOtp = async ()=>{\n        setSeconds(59);\n        try {\n            const response = await _api_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"api/auth/\", {\n                email: email\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json; charset=utf-8\"\n                },\n                withCredentials: false\n            });\n            console.log(response.data.message);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"New OTP sent!\");\n        } catch (err) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"No Server response\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"belowButton\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-[1rem] flex items-center justify-start w-26.5 text-center h-4.5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"bg-transparent border-none outline-none \".concat(seconds > 0 ? \"text-white\" : \"text-lgr font-bold\"),\n                    disabled: seconds > 0,\n                    onClick: handleResendOtp,\n                    children: \"Resend OTP\"\n                }, void 0, false, {\n                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/resendOtp.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                seconds > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"\\xa0 in \",\n                        seconds,\n                        \" seconds\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/resendOtp.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                    fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/resendOtp.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/resendOtp.js\",\n            lineNumber: 31,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/abhinandan/Desktop/typingthunder/src/components/resendOtp.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(ResendOtp, \"RauF+xtqAY9iXW/DY3llyWlF7MQ=\");\n_c = ResendOtp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResendOtp);\nvar _c;\n$RefreshReg$(_c, \"ResendOtp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jlc2VuZE90cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRDtBQUNsQjtBQUNJO0FBQ3BDLFNBQVNLLFVBQVUsS0FBTztRQUFQLEVBQUNDLEtBQUssRUFBQyxHQUFQOztJQUNuQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkNDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sV0FBV0MsWUFBWTtZQUMzQixJQUFJSCxVQUFVLEdBQUc7Z0JBQ2ZDLFdBQVdELFVBQVU7WUFDdkI7UUFDRixHQUFHO1FBRUgsT0FBTztZQUNMSSxjQUFjRjtRQUNoQjtJQUNGLEdBQUc7UUFBQ0Y7S0FBUTtJQUNaLE1BQU1LLGtCQUFnQjtRQUN0QkosV0FBVztRQUNYLElBQUc7WUFDRCxNQUFNSyxXQUFXLE1BQU1WLGtEQUFLQSxDQUFDVyxJQUFJLENBQUMsYUFBWTtnQkFBQ1IsT0FBTUE7WUFBSyxHQUN4RDtnQkFBQ1MsU0FBUTtvQkFBQyxnQkFBZTtnQkFBaUM7Z0JBQ3hEQyxpQkFBaUI7WUFBSztZQUN0QkMsUUFBUUMsR0FBRyxDQUFDTCxTQUFTTSxJQUFJLENBQUNDLE9BQU87WUFDakNoQix1REFBS0EsQ0FBQ2lCLE9BQU8sQ0FBQztRQUN0QixFQUFDLE9BQU1DLEtBQUk7WUFDVGxCLHVEQUFLQSxDQUFDbUIsS0FBSyxDQUFDO1FBQ2Q7SUFDRTtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ0M7b0JBQU9DLE1BQUs7b0JBQ2JGLFdBQVcsMkNBQXVGLE9BQTVDbEIsVUFBUSxJQUFFLGVBQWE7b0JBQzdFcUIsVUFBVXJCLFVBQVU7b0JBQ3BCc0IsU0FBU2pCOzhCQUNWOzs7Ozs7Z0JBSUZMLFVBQVUsa0JBQ1QsOERBQUN1Qjs7d0JBQUU7d0JBQ1d2Qjt3QkFBUTs7Ozs7O3lDQUd0Qiw4REFBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0o7R0E5Q016QjtLQUFBQTtBQWlEVCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yZXNlbmRPdHAuanM/YjYwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ0AvYXBpL2F4aW9zJztcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuZnVuY3Rpb24gUmVzZW5kT3RwKHtlbWFpbH0pIHtcbmNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDU5KTtcbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoc2Vjb25kcyA+IDApIHtcbiAgICAgICAgc2V0U2Vjb25kcyhzZWNvbmRzIC0gMSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbc2Vjb25kc10pO1xuICBjb25zdCBoYW5kbGVSZXNlbmRPdHA9YXN5bmMoKT0+e1xuICBzZXRTZWNvbmRzKDU5KTtcbiAgdHJ5e1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnYXBpL2F1dGgvJyx7ZW1haWw6ZW1haWx9LFxuICAgICAge2hlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J30sXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2V9KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiTmV3IE9UUCBzZW50IVwiKVxufWNhdGNoKGVycil7XG4gIHRvYXN0LmVycm9yKFwiTm8gU2VydmVyIHJlc3BvbnNlXCIpXG59XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmVsb3dCdXR0b24nPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LVsxcmVtXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHctMjYuNSB0ZXh0LWNlbnRlciBoLTQuNSc+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICBjbGFzc05hbWU9e2BiZy10cmFuc3BhcmVudCBib3JkZXItbm9uZSBvdXRsaW5lLW5vbmUgJHtzZWNvbmRzPjA/J3RleHQtd2hpdGUnOid0ZXh0LWxnciBmb250LWJvbGQnfWB9XG4gICAgICAgIGRpc2FibGVkPXtzZWNvbmRzID4gMH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZW5kT3RwfVxuICAgICAgPlxuICAgICAgICBSZXNlbmQgT1RQXG4gICAgICA8L2J1dHRvbj5cbiAgIFxuICAgIHtzZWNvbmRzID4gMCA/IChcbiAgICAgIDxwPlxuICAgICAgICAgJm5ic3A7IGluIHtzZWNvbmRzfSBzZWNvbmRzXG4gICAgICA8L3A+XG4gICAgKSA6IChcbiAgICAgIDxwPjwvcD5cbiAgICAgIFxuICAgICl9PC9kaXY+XG4gICAgXG4gICAgICA8L2Rpdj5cbiAgKX1cblxuXG5leHBvcnQgZGVmYXVsdCBSZXNlbmRPdHAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidG9hc3QiLCJSZXNlbmRPdHAiLCJlbWFpbCIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVSZXNlbmRPdHAiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtZXNzYWdlIiwic3VjY2VzcyIsImVyciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidHlwZSIsImRpc2FibGVkIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/resendOtp.js\n"));

/***/ })

});