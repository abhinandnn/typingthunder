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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthService */ \"(app-pages-browser)/./src/components/AuthService.js\");\n/* harmony import */ var _store_AuthSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/AuthSlice */ \"(app-pages-browser)/./src/store/AuthSlice.js\");\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/axios */ \"(app-pages-browser)/./src/api/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\"useclient\";\n\n\n\n\n\n\n\nconst ProtectedRoute = (param)=>{\n    let { children } = param;\n    _s();\n    const { accesstoken, refreshtoken } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_store_AuthSlice__WEBPACK_IMPORTED_MODULE_4__.selectTokens);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"accesstoken\");\n    console.log(token);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuth = async ()=>{\n            if (!token) {\n                router.push(\"/login\");\n            } else {\n                try {\n                    response = await _api_axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"api/auth/check-token\", null, {\n                        headers: {\n                            \"auth-token\": \"\".concat(token)\n                        }\n                    });\n                    console.log(response.data);\n                } catch (error) {\n                    console.log(\"heyo\");\n                    console.log(error.response);\n                }\n            }\n        };\n        checkAuth();\n    }, [\n        token\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n_s(ProtectedRoute, \"asmY0WjQzLYQkwrvaWxQFdIEGXQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProtectedRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectedRoute);\nvar _c;\n$RefreshReg$(_c, \"ProtectedRoute\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDa0M7QUFFcUI7QUFDWDtBQUNDO0FBQ0k7QUFDakI7QUFDRjtBQUU5QixNQUFNUSxpQkFBaUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ2hDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUUsR0FBR1Qsd0RBQVdBLENBQUNHLDBEQUFZQTtJQUM5RCxNQUFNTyxXQUFXWCx3REFBV0E7SUFDNUIsTUFBTVksU0FBU1YsMERBQVNBO0lBQ3hCLE1BQU1XLFFBQU1QLGlEQUFNQSxDQUFDUSxHQUFHLENBQUM7SUFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWmQsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsWUFBWTtZQUNoQixJQUFJLENBQUNKLE9BQU87Z0JBQ1ZELE9BQU9NLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0wsSUFBSTtvQkFDRkMsV0FBVyxNQUFNZCxrREFBS0EsQ0FBQ2UsSUFBSSxDQUFDLHdCQUF1QixNQUFLO3dCQUFDQyxTQUFROzRCQUFDLGNBQWMsR0FBUyxPQUFOUjt3QkFBTztvQkFBQztvQkFDM0ZFLFFBQVFDLEdBQUcsQ0FBQ0csU0FBU0csSUFBSTtnQkFDN0IsRUFBRSxPQUFPQyxPQUFPO29CQUNaUixRQUFRQyxHQUFHLENBQUM7b0JBQ1pELFFBQVFDLEdBQUcsQ0FBQ08sTUFBTUosUUFBUTtnQkFDNUI7WUFDRjtRQUNGO1FBRUFGO0lBQ0YsR0FBRztRQUFDSjtLQUFNO0lBRVYscUJBQU87a0JBQUdMOztBQUNaO0dBMUJJRDs7UUFDb0NOLG9EQUFXQTtRQUNoQ0Qsb0RBQVdBO1FBQ2JFLHNEQUFTQTs7O0tBSHRCSztBQTRCSiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm90ZWN0ZWRSb3V0ZXMuanM/YjdiZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgcmVmcmVzaFRva2VuIH0gZnJvbSAnLi9BdXRoU2VydmljZSc7XG5pbXBvcnQgeyBzZWxlY3RUb2tlbnMgfSBmcm9tICdAL3N0b3JlL0F1dGhTbGljZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnQC9hcGkvYXhpb3MnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXG5cbmNvbnN0IFByb3RlY3RlZFJvdXRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IHsgYWNjZXNzdG9rZW4sIHJlZnJlc2h0b2tlbiB9ID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG9rZW5zKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgdG9rZW49Y29va2llLmdldCgnYWNjZXNzdG9rZW4nKTtcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrQXV0aCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdhcGkvYXV0aC9jaGVjay10b2tlbicsbnVsbCx7aGVhZGVyczp7J2F1dGgtdG9rZW4nOiBgJHt0b2tlbn1gfX0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGV5bycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgICAgY2hlY2tBdXRoKCk7XG4gICAgfSwgW3Rva2VuXSk7XG4gIFxuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQcm90ZWN0ZWRSb3V0ZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsInJlZnJlc2hUb2tlbiIsInNlbGVjdFRva2VucyIsImF4aW9zIiwiY29va2llIiwiUHJvdGVjdGVkUm91dGUiLCJjaGlsZHJlbiIsImFjY2Vzc3Rva2VuIiwicmVmcmVzaHRva2VuIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJ0b2tlbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0F1dGgiLCJwdXNoIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProtectedRoutes.js\n"));

/***/ })

});