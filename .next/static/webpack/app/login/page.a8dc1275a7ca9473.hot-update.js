"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/store/AuthSlice.js":
/*!********************************!*\
  !*** ./src/store/AuthSlice.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearTokens: function() { return /* binding */ clearTokens; },\n/* harmony export */   selectTokens: function() { return /* binding */ selectTokens; },\n/* harmony export */   setAuth: function() { return /* binding */ setAuth; },\n/* harmony export */   setTokens: function() { return /* binding */ setTokens; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState: {\n        accesstoken: null,\n        refreshtoken: null,\n        auth: false\n    },\n    reducers: {\n        setTokens: (state, action)=>{\n            state.accesstoken = action.payload.accesstoken;\n            state.refreshtoken = action.payload.refreshtoken;\n        },\n        setAuth: (state, action)=>{\n            state.auth = action.payload.auth;\n        },\n        clearTokens: (state)=>{\n            state.accesstoken = null;\n            state.refreshtoken = null;\n            state.auth = false;\n        }\n    }\n});\nconst { setAuth, setTokens, clearTokens } = authSlice.actions;\nconst selectTokens = (state)=>({\n        accesstoken: state.auth.accesstoken,\n        refreshtoken: state.auth.refreshtoken,\n        auth: state.auth.auth\n    });\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9BdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDL0MsTUFBTUMsWUFBWUQsNkRBQVdBLENBQUM7SUFDNUJFLE1BQU07SUFDTkMsY0FBYztRQUNaQyxhQUFhO1FBQ2JDLGNBQWM7UUFDZEMsTUFBTTtJQUNSO0lBQ0FDLFVBQVU7UUFDUkMsV0FBVyxDQUFDQyxPQUFPQztZQUNqQkQsTUFBTUwsV0FBVyxHQUFHTSxPQUFPQyxPQUFPLENBQUNQLFdBQVc7WUFDOUNLLE1BQU1KLFlBQVksR0FBR0ssT0FBT0MsT0FBTyxDQUFDTixZQUFZO1FBQ2xEO1FBQ0FPLFNBQVMsQ0FBQ0gsT0FBTUM7WUFDZEQsTUFBTUgsSUFBSSxHQUFDSSxPQUFPQyxPQUFPLENBQUNMLElBQUk7UUFDaEM7UUFDQU8sYUFBYSxDQUFDSjtZQUNaQSxNQUFNTCxXQUFXLEdBQUc7WUFDcEJLLE1BQU1KLFlBQVksR0FBRztZQUNyQkksTUFBTUgsSUFBSSxHQUFDO1FBQ2I7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFTSxPQUFPLEVBQUVKLFNBQVMsRUFBRUssV0FBVyxFQUFFLEdBQUdaLFVBQVVhLE9BQU8sQ0FBQztBQUM5RCxNQUFNQyxlQUFlLENBQUNOLFFBQVc7UUFDdENMLGFBQWFLLE1BQU1ILElBQUksQ0FBQ0YsV0FBVztRQUNuQ0MsY0FBY0ksTUFBTUgsSUFBSSxDQUFDRCxZQUFZO1FBQ3JDQyxNQUFNRyxNQUFNSCxJQUFJLENBQUNBLElBQUk7SUFFdkIsR0FBRztBQUdILCtEQUFlTCxVQUFVZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL0F1dGhTbGljZS5qcz80YmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5jb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdhdXRoJyxcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgYWNjZXNzdG9rZW46IG51bGwsXG4gICAgcmVmcmVzaHRva2VuOiBudWxsLFxuICAgIGF1dGg6IGZhbHNlXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0VG9rZW5zOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuYWNjZXNzdG9rZW4gPSBhY3Rpb24ucGF5bG9hZC5hY2Nlc3N0b2tlbjtcbiAgICAgIHN0YXRlLnJlZnJlc2h0b2tlbiA9IGFjdGlvbi5wYXlsb2FkLnJlZnJlc2h0b2tlbjtcbiAgICB9LFxuICAgIHNldEF1dGg6IChzdGF0ZSxhY3Rpb24pPT57XG4gICAgICBzdGF0ZS5hdXRoPWFjdGlvbi5wYXlsb2FkLmF1dGg7XG4gICAgfSxcbiAgICBjbGVhclRva2VuczogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5hY2Nlc3N0b2tlbiA9IG51bGw7XG4gICAgICBzdGF0ZS5yZWZyZXNodG9rZW4gPSBudWxsO1xuICAgICAgc3RhdGUuYXV0aD1mYWxzZTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldEF1dGgsIHNldFRva2VucywgY2xlYXJUb2tlbnMgfSA9IGF1dGhTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFRva2VucyA9IChzdGF0ZSkgPT4gKHtcbiAgYWNjZXNzdG9rZW46IHN0YXRlLmF1dGguYWNjZXNzdG9rZW4sXG4gIHJlZnJlc2h0b2tlbjogc3RhdGUuYXV0aC5yZWZyZXNodG9rZW4sXG4gIGF1dGg6IHN0YXRlLmF1dGguYXV0aFxuXG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImF1dGhTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJhY2Nlc3N0b2tlbiIsInJlZnJlc2h0b2tlbiIsImF1dGgiLCJyZWR1Y2VycyIsInNldFRva2VucyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEF1dGgiLCJjbGVhclRva2VucyIsImFjdGlvbnMiLCJzZWxlY3RUb2tlbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/AuthSlice.js\n"));

/***/ })

});