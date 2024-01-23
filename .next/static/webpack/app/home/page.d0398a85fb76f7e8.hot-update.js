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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthService */ \"(app-pages-browser)/./src/components/AuthService.js\");\n/* harmony import */ var _store_AuthSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/AuthSlice */ \"(app-pages-browser)/./src/store/AuthSlice.js\");\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/axios */ \"(app-pages-browser)/./src/api/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProtectedRoute = (param)=>{\n    let { children } = param;\n    _s();\n    const { accesstoken, refreshtoken } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_store_AuthSlice__WEBPACK_IMPORTED_MODULE_4__.selectTokens);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"accesstoken\");\n    console.log(token);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuth = async ()=>{\n            if (!token) {\n                router.push(\"/login\");\n            } else {\n                console.log(token);\n                try {\n                    response = await _api_axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"api/auth/check-token\", null, {\n                        headers: {\n                            \"auth-token\": \"\".concat(js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"accesstoken\"), \"=\")\n                        }\n                    });\n                    console.log(response.data);\n                } catch (error) {\n                    console.log(\"heyo\");\n                // await refreshToken();\n                }\n            }\n        };\n        checkAuth();\n    }, [\n        token\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n_s(ProtectedRoute, \"asmY0WjQzLYQkwrvaWxQFdIEGXQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProtectedRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectedRoute);\nvar _c;\n$RefreshReg$(_c, \"ProtectedRoute\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ3FCO0FBQ1g7QUFDQztBQUNJO0FBQ2pCO0FBQ0Y7QUFFOUIsTUFBTVEsaUJBQWlCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNoQyxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFLEdBQUdULHdEQUFXQSxDQUFDRywwREFBWUE7SUFDOUQsTUFBTU8sV0FBV1gsd0RBQVdBO0lBQzVCLE1BQU1ZLFNBQVNWLDBEQUFTQTtJQUN4QixNQUFNVyxRQUFNUCxpREFBTUEsQ0FBQ1EsR0FBRyxDQUFDO0lBQ3ZCQyxRQUFRQyxHQUFHLENBQUNIO0lBRVpkLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtCLFlBQVk7WUFDaEIsSUFBSSxDQUFDSixPQUFPO2dCQUNWRCxPQUFPTSxJQUFJLENBQUM7WUFDZCxPQUFPO2dCQUNISCxRQUFRQyxHQUFHLENBQUNIO2dCQUNkLElBQUk7b0JBQ0ZNLFdBQVcsTUFBTWQsa0RBQUtBLENBQUNlLElBQUksQ0FBQyx3QkFBdUIsTUFBSzt3QkFBQ0MsU0FBUTs0QkFBQyxjQUFjLEdBQTZCLE9BQTFCZixpREFBTUEsQ0FBQ1EsR0FBRyxDQUFDLGdCQUFlO3dCQUFFO29CQUFDO29CQUNoSEMsUUFBUUMsR0FBRyxDQUFDRyxTQUFTRyxJQUFJO2dCQUM3QixFQUFFLE9BQU9DLE9BQU87b0JBQ1pSLFFBQVFDLEdBQUcsQ0FBQztnQkFDWix3QkFBd0I7Z0JBQzFCO1lBQ0Y7UUFDRjtRQUVBQztJQUNGLEdBQUc7UUFBQ0o7S0FBTTtJQUVWLHFCQUFPO2tCQUFHTDs7QUFDWjtHQTNCSUQ7O1FBQ29DTixvREFBV0E7UUFDaENELG9EQUFXQTtRQUNiRSxzREFBU0E7OztLQUh0Qks7QUE2QkosK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvdGVjdGVkUm91dGVzLmpzP2I3YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHJlZnJlc2hUb2tlbiB9IGZyb20gJy4vQXV0aFNlcnZpY2UnO1xuaW1wb3J0IHsgc2VsZWN0VG9rZW5zIH0gZnJvbSAnQC9zdG9yZS9BdXRoU2xpY2UnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ0AvYXBpL2F4aW9zJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBQcm90ZWN0ZWRSb3V0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB7IGFjY2Vzc3Rva2VuLCByZWZyZXNodG9rZW4gfSA9IHVzZVNlbGVjdG9yKHNlbGVjdFRva2Vucyk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHRva2VuPWNvb2tpZS5nZXQoJ2FjY2Vzc3Rva2VuJyk7XG4gICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnYXBpL2F1dGgvY2hlY2stdG9rZW4nLG51bGwse2hlYWRlcnM6eydhdXRoLXRva2VuJzogYCR7Y29va2llLmdldCgnYWNjZXNzdG9rZW4nKX09YH19KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hleW8nKSBcbiAgICAgICAgICAgIC8vIGF3YWl0IHJlZnJlc2hUb2tlbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgXG4gICAgICBjaGVja0F1dGgoKTtcbiAgICB9LCBbdG9rZW5dKTtcbiAgXG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFByb3RlY3RlZFJvdXRlOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlUm91dGVyIiwicmVmcmVzaFRva2VuIiwic2VsZWN0VG9rZW5zIiwiYXhpb3MiLCJjb29raWUiLCJQcm90ZWN0ZWRSb3V0ZSIsImNoaWxkcmVuIiwiYWNjZXNzdG9rZW4iLCJyZWZyZXNodG9rZW4iLCJkaXNwYXRjaCIsInJvdXRlciIsInRva2VuIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImNoZWNrQXV0aCIsInB1c2giLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProtectedRoutes.js\n"));

/***/ })

});