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

/***/ "(app-pages-browser)/./src/components/AuthService.js":
/*!***************************************!*\
  !*** ./src/components/AuthService.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logout: function() { return /* binding */ logout; },\n/* harmony export */   refreshToken: function() { return /* binding */ refreshToken; }\n/* harmony export */ });\n/* harmony import */ var _store_AuthSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/AuthSlice.js */ \"(app-pages-browser)/./src/store/AuthSlice.js\");\n/* harmony import */ var _api_axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/axios.js */ \"(app-pages-browser)/./src/api/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n\nconst refreshToken = async ()=>{\n    try {\n        const refreshtoken = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"refreshtoken\");\n        const response = await _api_axios_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"api/auth/refresh-access-token\", {\n            refreshtoken: refreshtoken\n        });\n        const newAccessToken = response.data.data.accesstoken;\n        console.log(\"hiii\", newAccessToken);\n        (0,_store_AuthSlice_js__WEBPACK_IMPORTED_MODULE_0__.setTokens)({\n            accesstoken: newAccessToken,\n            refreshtoken\n        });\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"auth\", true);\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"accesstoken\", newAccessToken);\n    } catch (error) {\n        (0,_store_AuthSlice_js__WEBPACK_IMPORTED_MODULE_0__.clearTokens)();\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"auth\", false);\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"accesstoken\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"refreshtoken\");\n    }\n};\nconst logout = ()=>{\n    (0,_store_AuthSlice_js__WEBPACK_IMPORTED_MODULE_0__.clearTokens)();\n    js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"accesstoken\");\n    js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"refreshtoken\");\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F1dGhTZXJ2aWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNFO0FBQ25DO0FBQ0w7QUFDdkIsTUFBTUssZUFBZTtJQUN4QixJQUFJO1FBQ0YsTUFBTUMsZUFBZUYsaURBQU1BLENBQUNHLEdBQUcsQ0FBQztRQUNoQyxNQUFNQyxXQUFXLE1BQU1MLHFEQUFLQSxDQUFDTSxJQUFJLENBQUMsaUNBQWlDO1lBQUVILGNBQWNBO1FBQWE7UUFDNUYsTUFBTUksaUJBQWlCRixTQUFTRyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsV0FBVztRQUN6REMsUUFBUUMsR0FBRyxDQUFDLFFBQU9KO1FBQ25CViw4REFBU0EsQ0FBQztZQUFFWSxhQUFhRjtZQUFnQko7UUFBYTtRQUN0REYsaURBQU1BLENBQUNXLEdBQUcsQ0FBQyxRQUFRO1FBQ25CWCxpREFBTUEsQ0FBQ1csR0FBRyxDQUFDLGVBQWVMO0lBRTVCLEVBQUUsT0FBT00sT0FBTztRQUNkZixnRUFBV0E7UUFDWEcsaURBQU1BLENBQUNXLEdBQUcsQ0FBQyxRQUFRO1FBQ25CWCxpREFBTUEsQ0FBQ2EsTUFBTSxDQUFDO1FBQ2RiLGlEQUFNQSxDQUFDYSxNQUFNLENBQUM7SUFDaEI7QUFDRixFQUFFO0FBRUssTUFBTUMsU0FBUztJQUNwQmpCLGdFQUFXQTtJQUNYRyxpREFBTUEsQ0FBQ2EsTUFBTSxDQUFDO0lBQ2RiLGlEQUFNQSxDQUFDYSxNQUFNLENBQUM7QUFDaEIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BdXRoU2VydmljZS5qcz83NjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldFRva2VucywgY2xlYXJUb2tlbnMsc2V0QXV0aCB9IGZyb20gJy4uL3N0b3JlL0F1dGhTbGljZS5qcydcbmltcG9ydCBheGlvcyBmcm9tICdAL2FwaS9heGlvcy5qcyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcbmV4cG9ydCBjb25zdCByZWZyZXNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlZnJlc2h0b2tlbiA9IGNvb2tpZS5nZXQoJ3JlZnJlc2h0b2tlbicpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdhcGkvYXV0aC9yZWZyZXNoLWFjY2Vzcy10b2tlbicsIHsgcmVmcmVzaHRva2VuOiByZWZyZXNodG9rZW4gfSk7XG4gICAgICAgICAgY29uc3QgbmV3QWNjZXNzVG9rZW4gPSByZXNwb25zZS5kYXRhLmRhdGEuYWNjZXNzdG9rZW47XG4gICAgICBjb25zb2xlLmxvZygnaGlpaScsbmV3QWNjZXNzVG9rZW4pXG4gICAgICBzZXRUb2tlbnMoeyBhY2Nlc3N0b2tlbjogbmV3QWNjZXNzVG9rZW4sIHJlZnJlc2h0b2tlbiB9KTtcbiAgICAgIGNvb2tpZS5zZXQoXCJhdXRoXCIsIHRydWUpXG4gICAgICBjb29raWUuc2V0KCdhY2Nlc3N0b2tlbicsIG5ld0FjY2Vzc1Rva2VuKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjbGVhclRva2VucygpO1xuICAgICAgY29va2llLnNldChcImF1dGhcIiwgZmFsc2UpXG4gICAgICBjb29raWUucmVtb3ZlKCdhY2Nlc3N0b2tlbicpO1xuICAgICAgY29va2llLnJlbW92ZSgncmVmcmVzaHRva2VuJyk7XG4gICAgfVxuICB9O1xuICBcbiAgZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBjbGVhclRva2VucygpO1xuICAgIGNvb2tpZS5yZW1vdmUoJ2FjY2Vzc3Rva2VuJyk7XG4gICAgY29va2llLnJlbW92ZSgncmVmcmVzaHRva2VuJyk7XG4gIH07Il0sIm5hbWVzIjpbInNldFRva2VucyIsImNsZWFyVG9rZW5zIiwic2V0QXV0aCIsImF4aW9zIiwiY29va2llIiwicmVmcmVzaFRva2VuIiwicmVmcmVzaHRva2VuIiwiZ2V0IiwicmVzcG9uc2UiLCJwb3N0IiwibmV3QWNjZXNzVG9rZW4iLCJkYXRhIiwiYWNjZXNzdG9rZW4iLCJjb25zb2xlIiwibG9nIiwic2V0IiwiZXJyb3IiLCJyZW1vdmUiLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AuthService.js\n"));

/***/ })

});