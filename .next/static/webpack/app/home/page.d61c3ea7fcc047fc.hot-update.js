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

/***/ "(app-pages-browser)/./src/components/ProtectedRoutes.js":
/*!*******************************************!*\
  !*** ./src/components/ProtectedRoutes.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthService */ \"(app-pages-browser)/./src/components/AuthService.js\");\n/* harmony import */ var _store_AuthSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/AuthSlice */ \"(app-pages-browser)/./src/store/AuthSlice.js\");\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/axios */ \"(app-pages-browser)/./src/api/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProtectedRoute = (param)=>{\n    let { children } = param;\n    _s();\n    const { accesstoken, refreshtoken } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_store_AuthSlice__WEBPACK_IMPORTED_MODULE_4__.selectTokens);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"accesstoken\");\n    console.log(token);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuth = async ()=>{\n            if (!token) {\n                router.push(\"/login\");\n            } else {\n                try {\n                    response = await _api_axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"api/auth/check-token\", {}, {\n                        headers: {\n                            \"auth-token\": \"\".concat(token)\n                        },\n                        withCredentials: false\n                    });\n                    console.log(response);\n                } catch (error) {\n                    await (0,_AuthService__WEBPACK_IMPORTED_MODULE_3__.refreshToken)();\n                }\n            }\n        };\n        checkAuth();\n    }, [\n        accesstoken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n_s(ProtectedRoute, \"asmY0WjQzLYQkwrvaWxQFdIEGXQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProtectedRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectedRoute);\nvar _c;\n$RefreshReg$(_c, \"ProtectedRoute\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ3FCO0FBQ1g7QUFDQztBQUNJO0FBQ2pCO0FBQ0Y7QUFFOUIsTUFBTVEsaUJBQWlCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNoQyxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFLEdBQUdULHdEQUFXQSxDQUFDRywwREFBWUE7SUFDOUQsTUFBTU8sV0FBV1gsd0RBQVdBO0lBQzVCLE1BQU1ZLFNBQVNWLDBEQUFTQTtJQUN4QixNQUFNVyxRQUFNUCxpREFBTUEsQ0FBQ1EsR0FBRyxDQUFDO0lBQ3ZCQyxRQUFRQyxHQUFHLENBQUNIO0lBRVpkLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtCLFlBQVk7WUFDaEIsSUFBSSxDQUFDSixPQUFPO2dCQUNWRCxPQUFPTSxJQUFJLENBQUM7WUFDZCxPQUFPO2dCQUNMLElBQUk7b0JBQ0ZDLFdBQVcsTUFBTWQsa0RBQUtBLENBQUNlLElBQUksQ0FBQyx3QkFBdUIsQ0FBQyxHQUFFO3dCQUFDQyxTQUFROzRCQUFDLGNBQWMsR0FBUyxPQUFOUjt3QkFBTzt3QkFBRVMsaUJBQWlCO29CQUFLO29CQUNoSFAsUUFBUUMsR0FBRyxDQUFDRztnQkFDaEIsRUFBRSxPQUFPSSxPQUFPO29CQUNaLE1BQU1wQiwwREFBWUE7Z0JBQ3BCO1lBQ0Y7UUFDRjtRQUVBYztJQUNGLEdBQUc7UUFBQ1I7S0FBWTtJQUVoQixxQkFBTztrQkFBR0Q7O0FBQ1o7R0F6QklEOztRQUNvQ04sb0RBQVdBO1FBQ2hDRCxvREFBV0E7UUFDYkUsc0RBQVNBOzs7S0FIdEJLO0FBMkJKLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlcy5qcz9iN2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyByZWZyZXNoVG9rZW4gfSBmcm9tICcuL0F1dGhTZXJ2aWNlJztcbmltcG9ydCB7IHNlbGVjdFRva2VucyB9IGZyb20gJ0Avc3RvcmUvQXV0aFNsaWNlJztcbmltcG9ydCBheGlvcyBmcm9tICdAL2FwaS9heGlvcyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcblxuY29uc3QgUHJvdGVjdGVkUm91dGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgeyBhY2Nlc3N0b2tlbiwgcmVmcmVzaHRva2VuIH0gPSB1c2VTZWxlY3RvcihzZWxlY3RUb2tlbnMpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB0b2tlbj1jb29raWUuZ2V0KCdhY2Nlc3N0b2tlbicpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgY2hlY2tBdXRoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2FwaS9hdXRoL2NoZWNrLXRva2VuJyx7fSx7aGVhZGVyczp7J2F1dGgtdG9rZW4nOiBgJHt0b2tlbn1gfSx3aXRoQ3JlZGVudGlhbHM6IGZhbHNlfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhd2FpdCByZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgICAgY2hlY2tBdXRoKCk7XG4gICAgfSwgW2FjY2Vzc3Rva2VuXSk7XG4gIFxuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQcm90ZWN0ZWRSb3V0ZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsInJlZnJlc2hUb2tlbiIsInNlbGVjdFRva2VucyIsImF4aW9zIiwiY29va2llIiwiUHJvdGVjdGVkUm91dGUiLCJjaGlsZHJlbiIsImFjY2Vzc3Rva2VuIiwicmVmcmVzaHRva2VuIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJ0b2tlbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0F1dGgiLCJwdXNoIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProtectedRoutes.js\n"));

/***/ })

});