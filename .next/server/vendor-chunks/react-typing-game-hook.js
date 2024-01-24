/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-typing-game-hook";
exports.ids = ["vendor-chunks/react-typing-game-hook"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-typing-game-hook/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-typing-game-hook/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("Object.defineProperty(exports, \"__esModule\", ({\n    value: !0\n}));\nvar r = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"), e = function() {\n    return e = Object.assign || function(r) {\n        for(var e, t = 1, a = arguments.length; t < a; t++)for(var n in e = arguments[t])Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);\n        return r;\n    }, e.apply(this, arguments);\n};\n/*! *****************************************************************************\nCopyright (c) Microsoft Corporation.\n\nPermission to use, copy, modify, and/or distribute this software for any\npurpose with or without fee is hereby granted.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\nPERFORMANCE OF THIS SOFTWARE.\n***************************************************************************** */ function t(r, e) {\n    for(var t = 0, a = e.length, n = r.length; t < a; t++, n++)r[n] = e[t];\n    return r;\n}\nvar a;\n!function(r) {\n    r._ONTEXTCHANGE = \"INTERNAL/ONTEXTCHANGE\", r.RESET = \"RESET\", r.END = \"END\", r.TYPINGINSERT = \"TYPING/INSERT\", r.TYPINGDELETE = \"TYPING/DELETE\", r.SETCURRENTINDEX = \"SET/CURRENTINDEX\";\n}(a || (a = {}));\nvar n = {\n    NotStarted: 0,\n    Started: 1,\n    Ended: 2\n}, u = function(r, n) {\n    switch(n.type){\n        case a.SETCURRENTINDEX:\n            return function(r, t) {\n                var a, n = r.chars, u = r.length, c = null !== (a = t.payload) && void 0 !== a ? a : null;\n                return c && \"number\" == typeof c && c >= -1 && c < u ? e(e({}, r), {\n                    currIndex: c,\n                    currChar: n[c]\n                }) : r;\n            }(r, n);\n        case a.RESET:\n            return function(r) {\n                var t = r.chars;\n                return e(e({}, r), {\n                    startTime: null,\n                    endTime: null,\n                    charsState: new Array(t.length).fill(0),\n                    currIndex: -1,\n                    currChar: \"\",\n                    correctChar: 0,\n                    errorChar: 0,\n                    phase: 0\n                });\n            }(r);\n        case a.END:\n            return function(r) {\n                return e(e({}, r), {\n                    phase: 2,\n                    endTime: (new Date).getTime()\n                });\n            }(r);\n        case a.TYPINGINSERT:\n            return function(r, a) {\n                var n, u = r.startTime, c = r.endTime, o = r.chars, s = r.charsState, i = r.length, l = r.currIndex, T = r.correctChar, E = r.errorChar, h = r.phase, p = r.skipCurrentWordOnSpace, d = r.pauseOnError, f = r.countErrors, C = null !== (n = a.payload) && void 0 !== n ? n : null, N = u, y = c;\n                if (2 === h) return r;\n                0 === h && (h = 1, N = (new Date).getTime());\n                var v = t([], s);\n                if (\" \" === C && \" \" !== o[l + 1] && p) {\n                    var I = o.indexOf(C, l);\n                    l = -1 === I ? i - 1 : I;\n                } else null !== C ? o[l + 1] !== C ? (2 == v[l + 1] ? \"everytime\" === f && (E += 1) : (v[l + 1] = 2, E += 1), d || (l += 1)) : (2 === v[l + 1] && d && \"once\" === f && (E -= 1), v[l + 1] = 1, T += 1, l += 1) : l += 1;\n                l >= i - 1 && (y = (new Date).getTime(), h = 2);\n                var m = l >= 0 ? o[l] : \"\";\n                return e(e({}, r), {\n                    charsState: v,\n                    errorChar: E,\n                    correctChar: T,\n                    currIndex: l,\n                    currChar: m,\n                    phase: h,\n                    startTime: N,\n                    endTime: y\n                });\n            }(r, n);\n        case a.TYPINGDELETE:\n            return function(r, a) {\n                var n, u = r.chars, c = r.charsState, o = r.currIndex, s = r.correctChar, i = r.errorChar, l = r.phase, T = r.countErrors, E = null !== (n = a.payload) && void 0 !== n ? n : null;\n                if (1 !== l || -1 === o) return r;\n                var h = t([], c);\n                if (E) {\n                    var p = u.lastIndexOf(\" \", o);\n                    p = -1 === p ? 0 : p + 1;\n                    for(var d = o; d >= p; d--)1 === h[d] ? s -= 1 : 2 === h[d] && \"once\" === T && (i -= 1), h[d] = 0;\n                    o = p;\n                } else 1 === h[o] ? s -= 1 : 2 === h[o] && \"once\" === T && (i -= 1), h[o] = 0;\n                -1 !== o && (o -= 1);\n                var f = o >= 0 ? u[o] : \"\";\n                return e(e({}, r), {\n                    currIndex: o,\n                    currChar: f,\n                    charsState: h,\n                    correctChar: s,\n                    errorChar: i\n                });\n            }(r, n);\n        case a._ONTEXTCHANGE:\n            return n.payload;\n        default:\n            return r;\n    }\n};\nexports.CharStateType = {\n    Incomplete: 0,\n    Correct: 1,\n    Incorrect: 2\n}, exports.PhaseType = n, exports[\"default\"] = function(t, c) {\n    void 0 === t && (t = \"\"), void 0 === c && (c = {});\n    var o = r.useMemo(function() {\n        return e({\n            startTime: null,\n            endTime: null,\n            chars: t,\n            charsState: new Array(t.length).fill(0),\n            length: t.length,\n            currIndex: -1,\n            currChar: \"\",\n            correctChar: 0,\n            errorChar: 0,\n            phase: 0,\n            skipCurrentWordOnSpace: !0,\n            pauseOnError: !1,\n            countErrors: \"everytime\"\n        }, c);\n    }, [\n        c,\n        t\n    ]), s = r.useReducer(u, o), i = s[0], l = s[1];\n    r.useEffect(function() {\n        l({\n            type: a._ONTEXTCHANGE,\n            payload: o\n        });\n    }, [\n        t,\n        l\n    ]);\n    var T = r.useCallback(function() {\n        switch(i.phase){\n            case n.NotStarted:\n                return 0;\n            case n.Started:\n                return i.startTime ? (new Date).getTime() - i.startTime : 0;\n            case n.Ended:\n                return i.startTime && i.endTime ? i.endTime - i.startTime : 0;\n        }\n    }, [\n        i.phase,\n        i.startTime,\n        i.startTime\n    ]), E = r.useCallback(function() {\n        return l({\n            type: a.RESET\n        });\n    }, [\n        l\n    ]), h = r.useCallback(function() {\n        return l({\n            type: a.END\n        });\n    }, [\n        l\n    ]), p = r.useCallback(function(r) {\n        var e = r ? r[0] : null;\n        l({\n            type: a.TYPINGINSERT,\n            payload: e\n        });\n    }, [\n        l\n    ]), d = r.useCallback(function(r) {\n        void 0 === r && (r = !1), l({\n            type: a.TYPINGDELETE,\n            payload: r || !1\n        });\n    }, [\n        l\n    ]), f = r.useCallback(function(r) {\n        return !(r < -1 || r >= i.length || 2 !== i.phase) && (l({\n            type: a.SETCURRENTINDEX,\n            payload: r\n        }), !0);\n    }, [\n        l,\n        i.length,\n        i.phase\n    ]);\n    return {\n        states: i,\n        actions: {\n            getDuration: T,\n            resetTyping: E,\n            endTyping: h,\n            insertTyping: p,\n            deleteTyping: d,\n            setCurrIndex: f\n        }\n    };\n}; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHlwaW5nLWdhbWUtaG9vay9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBQSw4Q0FBMkM7SUFBQ0csT0FBTSxDQUFDO0FBQUMsQ0FBQyxFQUFDO0FBQUMsSUFBSUMsSUFBRUMsbUJBQU9BLENBQUMsd0dBQU8sR0FBRUMsSUFBRTtJQUFXLE9BQU9BLElBQUVOLE9BQU9PLE1BQU0sSUFBRSxTQUFTSCxDQUFDO1FBQUUsSUFBSSxJQUFJRSxHQUFFRSxJQUFFLEdBQUVDLElBQUVDLFVBQVVDLE1BQU0sRUFBQ0gsSUFBRUMsR0FBRUQsSUFBSSxJQUFJLElBQUlJLEtBQUtOLElBQUVJLFNBQVMsQ0FBQ0YsRUFBRSxDQUFDUixPQUFPYSxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDVCxHQUFFTSxNQUFLUixDQUFBQSxDQUFDLENBQUNRLEVBQUUsR0FBQ04sQ0FBQyxDQUFDTSxFQUFFO1FBQUUsT0FBT1I7SUFBQyxHQUFFRSxFQUFFVSxLQUFLLENBQUMsSUFBSSxFQUFDTjtBQUFVO0FBQzVSOzs7Ozs7Ozs7Ozs7OzhFQWE4RSxHQUFFLFNBQVNGLEVBQUVKLENBQUMsRUFBQ0UsQ0FBQztJQUFFLElBQUksSUFBSUUsSUFBRSxHQUFFQyxJQUFFSCxFQUFFSyxNQUFNLEVBQUNDLElBQUVSLEVBQUVPLE1BQU0sRUFBQ0gsSUFBRUMsR0FBRUQsS0FBSUksSUFBSVIsQ0FBQyxDQUFDUSxFQUFFLEdBQUNOLENBQUMsQ0FBQ0UsRUFBRTtJQUFDLE9BQU9KO0FBQUM7QUFBQyxJQUFJSztBQUFFLENBQUMsU0FBU0wsQ0FBQztJQUFFQSxFQUFFYSxhQUFhLEdBQUMseUJBQXdCYixFQUFFYyxLQUFLLEdBQUMsU0FBUWQsRUFBRWUsR0FBRyxHQUFDLE9BQU1mLEVBQUVnQixZQUFZLEdBQUMsaUJBQWdCaEIsRUFBRWlCLFlBQVksR0FBQyxpQkFBZ0JqQixFQUFFa0IsZUFBZSxHQUFDO0FBQWtCLEVBQUViLEtBQUlBLENBQUFB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ZV9tb2R1bGVzL3JlYWN0LXR5cGluZy1nYW1lLWhvb2svZGlzdC9pbmRleC5qcz80NWJlIl0sInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPXJlcXVpcmUoXCJyZWFjdFwiKSxlPWZ1bmN0aW9uKCl7cmV0dXJuIGU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24ocil7Zm9yKHZhciBlLHQ9MSxhPWFyZ3VtZW50cy5sZW5ndGg7dDxhO3QrKylmb3IodmFyIG4gaW4gZT1hcmd1bWVudHNbdF0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJihyW25dPWVbbl0pO3JldHVybiByfSxlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07XG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9mdW5jdGlvbiB0KHIsZSl7Zm9yKHZhciB0PTAsYT1lLmxlbmd0aCxuPXIubGVuZ3RoO3Q8YTt0KyssbisrKXJbbl09ZVt0XTtyZXR1cm4gcn12YXIgYTshZnVuY3Rpb24ocil7ci5fT05URVhUQ0hBTkdFPVwiSU5URVJOQUwvT05URVhUQ0hBTkdFXCIsci5SRVNFVD1cIlJFU0VUXCIsci5FTkQ9XCJFTkRcIixyLlRZUElOR0lOU0VSVD1cIlRZUElORy9JTlNFUlRcIixyLlRZUElOR0RFTEVURT1cIlRZUElORy9ERUxFVEVcIixyLlNFVENVUlJFTlRJTkRFWD1cIlNFVC9DVVJSRU5USU5ERVhcIn0oYXx8KGE9e30pKTt2YXIgbj17Tm90U3RhcnRlZDowLFN0YXJ0ZWQ6MSxFbmRlZDoyfSx1PWZ1bmN0aW9uKHIsbil7c3dpdGNoKG4udHlwZSl7Y2FzZSBhLlNFVENVUlJFTlRJTkRFWDpyZXR1cm4gZnVuY3Rpb24ocix0KXt2YXIgYSxuPXIuY2hhcnMsdT1yLmxlbmd0aCxjPW51bGwhPT0oYT10LnBheWxvYWQpJiZ2b2lkIDAhPT1hP2E6bnVsbDtyZXR1cm4gYyYmXCJudW1iZXJcIj09dHlwZW9mIGMmJmM+PS0xJiZjPHU/ZShlKHt9LHIpLHtjdXJySW5kZXg6YyxjdXJyQ2hhcjpuW2NdfSk6cn0ocixuKTtjYXNlIGEuUkVTRVQ6cmV0dXJuIGZ1bmN0aW9uKHIpe3ZhciB0PXIuY2hhcnM7cmV0dXJuIGUoZSh7fSxyKSx7c3RhcnRUaW1lOm51bGwsZW5kVGltZTpudWxsLGNoYXJzU3RhdGU6bmV3IEFycmF5KHQubGVuZ3RoKS5maWxsKDApLGN1cnJJbmRleDotMSxjdXJyQ2hhcjpcIlwiLGNvcnJlY3RDaGFyOjAsZXJyb3JDaGFyOjAscGhhc2U6MH0pfShyKTtjYXNlIGEuRU5EOnJldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gZShlKHt9LHIpLHtwaGFzZToyLGVuZFRpbWU6KG5ldyBEYXRlKS5nZXRUaW1lKCl9KX0ocik7Y2FzZSBhLlRZUElOR0lOU0VSVDpyZXR1cm4gZnVuY3Rpb24ocixhKXt2YXIgbix1PXIuc3RhcnRUaW1lLGM9ci5lbmRUaW1lLG89ci5jaGFycyxzPXIuY2hhcnNTdGF0ZSxpPXIubGVuZ3RoLGw9ci5jdXJySW5kZXgsVD1yLmNvcnJlY3RDaGFyLEU9ci5lcnJvckNoYXIsaD1yLnBoYXNlLHA9ci5za2lwQ3VycmVudFdvcmRPblNwYWNlLGQ9ci5wYXVzZU9uRXJyb3IsZj1yLmNvdW50RXJyb3JzLEM9bnVsbCE9PShuPWEucGF5bG9hZCkmJnZvaWQgMCE9PW4/bjpudWxsLE49dSx5PWM7aWYoMj09PWgpcmV0dXJuIHI7MD09PWgmJihoPTEsTj0obmV3IERhdGUpLmdldFRpbWUoKSk7dmFyIHY9dChbXSxzKTtpZihcIiBcIj09PUMmJlwiIFwiIT09b1tsKzFdJiZwKXt2YXIgST1vLmluZGV4T2YoQyxsKTtsPS0xPT09ST9pLTE6SX1lbHNlIG51bGwhPT1DP29bbCsxXSE9PUM/KDI9PXZbbCsxXT9cImV2ZXJ5dGltZVwiPT09ZiYmKEUrPTEpOih2W2wrMV09MixFKz0xKSxkfHwobCs9MSkpOigyPT09dltsKzFdJiZkJiZcIm9uY2VcIj09PWYmJihFLT0xKSx2W2wrMV09MSxUKz0xLGwrPTEpOmwrPTE7bD49aS0xJiYoeT0obmV3IERhdGUpLmdldFRpbWUoKSxoPTIpO3ZhciBtPWw+PTA/b1tsXTpcIlwiO3JldHVybiBlKGUoe30scikse2NoYXJzU3RhdGU6dixlcnJvckNoYXI6RSxjb3JyZWN0Q2hhcjpULGN1cnJJbmRleDpsLGN1cnJDaGFyOm0scGhhc2U6aCxzdGFydFRpbWU6TixlbmRUaW1lOnl9KX0ocixuKTtjYXNlIGEuVFlQSU5HREVMRVRFOnJldHVybiBmdW5jdGlvbihyLGEpe3ZhciBuLHU9ci5jaGFycyxjPXIuY2hhcnNTdGF0ZSxvPXIuY3VyckluZGV4LHM9ci5jb3JyZWN0Q2hhcixpPXIuZXJyb3JDaGFyLGw9ci5waGFzZSxUPXIuY291bnRFcnJvcnMsRT1udWxsIT09KG49YS5wYXlsb2FkKSYmdm9pZCAwIT09bj9uOm51bGw7aWYoMSE9PWx8fC0xPT09bylyZXR1cm4gcjt2YXIgaD10KFtdLGMpO2lmKEUpe3ZhciBwPXUubGFzdEluZGV4T2YoXCIgXCIsbyk7cD0tMT09PXA/MDpwKzE7Zm9yKHZhciBkPW87ZD49cDtkLS0pMT09PWhbZF0/cy09MToyPT09aFtkXSYmXCJvbmNlXCI9PT1UJiYoaS09MSksaFtkXT0wO289cH1lbHNlIDE9PT1oW29dP3MtPTE6Mj09PWhbb10mJlwib25jZVwiPT09VCYmKGktPTEpLGhbb109MDstMSE9PW8mJihvLT0xKTt2YXIgZj1vPj0wP3Vbb106XCJcIjtyZXR1cm4gZShlKHt9LHIpLHtjdXJySW5kZXg6byxjdXJyQ2hhcjpmLGNoYXJzU3RhdGU6aCxjb3JyZWN0Q2hhcjpzLGVycm9yQ2hhcjppfSl9KHIsbik7Y2FzZSBhLl9PTlRFWFRDSEFOR0U6cmV0dXJuIG4ucGF5bG9hZDtkZWZhdWx0OnJldHVybiByfX07ZXhwb3J0cy5DaGFyU3RhdGVUeXBlPXtJbmNvbXBsZXRlOjAsQ29ycmVjdDoxLEluY29ycmVjdDoyfSxleHBvcnRzLlBoYXNlVHlwZT1uLGV4cG9ydHMuZGVmYXVsdD1mdW5jdGlvbih0LGMpe3ZvaWQgMD09PXQmJih0PVwiXCIpLHZvaWQgMD09PWMmJihjPXt9KTt2YXIgbz1yLnVzZU1lbW8oKGZ1bmN0aW9uKCl7cmV0dXJuIGUoe3N0YXJ0VGltZTpudWxsLGVuZFRpbWU6bnVsbCxjaGFyczp0LGNoYXJzU3RhdGU6bmV3IEFycmF5KHQubGVuZ3RoKS5maWxsKDApLGxlbmd0aDp0Lmxlbmd0aCxjdXJySW5kZXg6LTEsY3VyckNoYXI6XCJcIixjb3JyZWN0Q2hhcjowLGVycm9yQ2hhcjowLHBoYXNlOjAsc2tpcEN1cnJlbnRXb3JkT25TcGFjZTohMCxwYXVzZU9uRXJyb3I6ITEsY291bnRFcnJvcnM6XCJldmVyeXRpbWVcIn0sYyl9KSxbYyx0XSkscz1yLnVzZVJlZHVjZXIodSxvKSxpPXNbMF0sbD1zWzFdO3IudXNlRWZmZWN0KChmdW5jdGlvbigpe2woe3R5cGU6YS5fT05URVhUQ0hBTkdFLHBheWxvYWQ6b30pfSksW3QsbF0pO3ZhciBUPXIudXNlQ2FsbGJhY2soKGZ1bmN0aW9uKCl7c3dpdGNoKGkucGhhc2Upe2Nhc2Ugbi5Ob3RTdGFydGVkOnJldHVybiAwO2Nhc2Ugbi5TdGFydGVkOnJldHVybiBpLnN0YXJ0VGltZT8obmV3IERhdGUpLmdldFRpbWUoKS1pLnN0YXJ0VGltZTowO2Nhc2Ugbi5FbmRlZDpyZXR1cm4gaS5zdGFydFRpbWUmJmkuZW5kVGltZT9pLmVuZFRpbWUtaS5zdGFydFRpbWU6MH19KSxbaS5waGFzZSxpLnN0YXJ0VGltZSxpLnN0YXJ0VGltZV0pLEU9ci51c2VDYWxsYmFjaygoZnVuY3Rpb24oKXtyZXR1cm4gbCh7dHlwZTphLlJFU0VUfSl9KSxbbF0pLGg9ci51c2VDYWxsYmFjaygoZnVuY3Rpb24oKXtyZXR1cm4gbCh7dHlwZTphLkVORH0pfSksW2xdKSxwPXIudXNlQ2FsbGJhY2soKGZ1bmN0aW9uKHIpe3ZhciBlPXI/clswXTpudWxsO2woe3R5cGU6YS5UWVBJTkdJTlNFUlQscGF5bG9hZDplfSl9KSxbbF0pLGQ9ci51c2VDYWxsYmFjaygoZnVuY3Rpb24ocil7dm9pZCAwPT09ciYmKHI9ITEpLGwoe3R5cGU6YS5UWVBJTkdERUxFVEUscGF5bG9hZDpyfHwhMX0pfSksW2xdKSxmPXIudXNlQ2FsbGJhY2soKGZ1bmN0aW9uKHIpe3JldHVybiEocjwtMXx8cj49aS5sZW5ndGh8fDIhPT1pLnBoYXNlKSYmKGwoe3R5cGU6YS5TRVRDVVJSRU5USU5ERVgscGF5bG9hZDpyfSksITApfSksW2wsaS5sZW5ndGgsaS5waGFzZV0pO3JldHVybntzdGF0ZXM6aSxhY3Rpb25zOntnZXREdXJhdGlvbjpULHJlc2V0VHlwaW5nOkUsZW5kVHlwaW5nOmgsaW5zZXJ0VHlwaW5nOnAsZGVsZXRlVHlwaW5nOmQsc2V0Q3VyckluZGV4OmZ9fX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInIiLCJyZXF1aXJlIiwiZSIsImFzc2lnbiIsInQiLCJhIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibiIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiX09OVEVYVENIQU5HRSIsIlJFU0VUIiwiRU5EIiwiVFlQSU5HSU5TRVJUIiwiVFlQSU5HREVMRVRFIiwiU0VUQ1VSUkVOVElOREVYIiwiTm90U3RhcnRlZCIsIlN0YXJ0ZWQiLCJFbmRlZCIsInUiLCJ0eXBlIiwiY2hhcnMiLCJjIiwicGF5bG9hZCIsImN1cnJJbmRleCIsImN1cnJDaGFyIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImNoYXJzU3RhdGUiLCJBcnJheSIsImZpbGwiLCJjb3JyZWN0Q2hhciIsImVycm9yQ2hhciIsInBoYXNlIiwiRGF0ZSIsImdldFRpbWUiLCJvIiwicyIsImkiLCJsIiwiVCIsIkUiLCJoIiwicCIsInNraXBDdXJyZW50V29yZE9uU3BhY2UiLCJkIiwicGF1c2VPbkVycm9yIiwiZiIsImNvdW50RXJyb3JzIiwiQyIsIk4iLCJ5IiwidiIsIkkiLCJpbmRleE9mIiwibSIsImxhc3RJbmRleE9mIiwiQ2hhclN0YXRlVHlwZSIsIkluY29tcGxldGUiLCJDb3JyZWN0IiwiSW5jb3JyZWN0IiwiUGhhc2VUeXBlIiwiZGVmYXVsdCIsInVzZU1lbW8iLCJ1c2VSZWR1Y2VyIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJzdGF0ZXMiLCJhY3Rpb25zIiwiZ2V0RHVyYXRpb24iLCJyZXNldFR5cGluZyIsImVuZFR5cGluZyIsImluc2VydFR5cGluZyIsImRlbGV0ZVR5cGluZyIsInNldEN1cnJJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-typing-game-hook/dist/index.js\n");

/***/ })

};
;