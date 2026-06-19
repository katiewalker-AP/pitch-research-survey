/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/submit/route";
exports.ids = ["app/api/submit/route"];
exports.modules = {

/***/ "(rsc)/./app/api/submit/route.ts":
/*!*********************************!*\
  !*** ./app/api/submit/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(req) {\n    const endpoint = process.env.FORM_ENDPOINT;\n    if (!endpoint) {\n        // Dev mode — echo the payload back so the survey still reaches the thank-you screen\n        const body = await req.json();\n        console.info('[submit] FORM_ENDPOINT not set — skipping forwarding.', body);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'ok',\n            dev: true\n        });\n    }\n    let body;\n    try {\n        body = await req.json();\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Invalid JSON body'\n        }, {\n            status: 400\n        });\n    }\n    try {\n        const upstream = await fetch(endpoint, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(body)\n        });\n        // Google Apps Script returns 200 even for errors, but forward the status anyway\n        const text = await upstream.text();\n        let data;\n        try {\n            data = JSON.parse(text);\n        } catch  {\n            data = text;\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data, {\n            status: upstream.ok ? 200 : upstream.status\n        });\n    } catch (err) {\n        const message = err instanceof Error ? err.message : 'Upstream request failed';\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: message\n        }, {\n            status: 502\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1Ym1pdC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3RDtBQUVqRCxlQUFlQyxLQUFLQyxHQUFnQjtJQUN6QyxNQUFNQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7SUFFMUMsSUFBSSxDQUFDSCxVQUFVO1FBQ2Isb0ZBQW9GO1FBQ3BGLE1BQU1JLE9BQU8sTUFBTUwsSUFBSU0sSUFBSTtRQUMzQkMsUUFBUUMsSUFBSSxDQUFDLHlEQUF5REg7UUFDdEUsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFRyxRQUFRO1lBQU1DLEtBQUs7UUFBSztJQUNyRDtJQUVBLElBQUlMO0lBQ0osSUFBSTtRQUNGQSxPQUFPLE1BQU1MLElBQUlNLElBQUk7SUFDdkIsRUFBRSxPQUFNO1FBQ04sT0FBT1IscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFSyxPQUFPO1FBQW9CLEdBQUc7WUFBRUYsUUFBUTtRQUFJO0lBQ3pFO0lBRUEsSUFBSTtRQUNGLE1BQU1HLFdBQVcsTUFBTUMsTUFBTVosVUFBVTtZQUNyQ2EsUUFBUztZQUNUQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtZQUM5Q1YsTUFBU1csS0FBS0MsU0FBUyxDQUFDWjtRQUMxQjtRQUVBLGdGQUFnRjtRQUNoRixNQUFNYSxPQUFPLE1BQU1OLFNBQVNNLElBQUk7UUFDaEMsSUFBSUM7UUFDSixJQUFJO1lBQUVBLE9BQU9ILEtBQUtJLEtBQUssQ0FBQ0Y7UUFBTyxFQUFFLE9BQU07WUFBRUMsT0FBT0Q7UUFBTTtRQUV0RCxPQUFPcEIscURBQVlBLENBQUNRLElBQUksQ0FBQ2EsTUFBTTtZQUFFVixRQUFRRyxTQUFTUyxFQUFFLEdBQUcsTUFBTVQsU0FBU0gsTUFBTTtRQUFDO0lBQy9FLEVBQUUsT0FBT2EsS0FBSztRQUNaLE1BQU1DLFVBQVVELGVBQWVFLFFBQVFGLElBQUlDLE9BQU8sR0FBRztRQUNyRCxPQUFPekIscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFSyxPQUFPWTtRQUFRLEdBQUc7WUFBRWQsUUFBUTtRQUFJO0lBQzdEO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXRpZXdhbGtlci9EZXNrdG9wL3BpdGNoLXJlc2VhcmNoLXN1cnZleS9hcHAvYXBpL3N1Ym1pdC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gcHJvY2Vzcy5lbnYuRk9STV9FTkRQT0lOVDtcblxuICBpZiAoIWVuZHBvaW50KSB7XG4gICAgLy8gRGV2IG1vZGUg4oCUIGVjaG8gdGhlIHBheWxvYWQgYmFjayBzbyB0aGUgc3VydmV5IHN0aWxsIHJlYWNoZXMgdGhlIHRoYW5rLXlvdSBzY3JlZW5cbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zb2xlLmluZm8oJ1tzdWJtaXRdIEZPUk1fRU5EUE9JTlQgbm90IHNldCDigJQgc2tpcHBpbmcgZm9yd2FyZGluZy4nLCBib2R5KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6ICdvaycsIGRldjogdHJ1ZSB9KTtcbiAgfVxuXG4gIGxldCBib2R5OiB1bmtub3duO1xuICB0cnkge1xuICAgIGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgSlNPTiBib2R5JyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1cHN0cmVhbSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICBtZXRob2Q6ICAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6ICAgIEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIH0pO1xuXG4gICAgLy8gR29vZ2xlIEFwcHMgU2NyaXB0IHJldHVybnMgMjAwIGV2ZW4gZm9yIGVycm9ycywgYnV0IGZvcndhcmQgdGhlIHN0YXR1cyBhbnl3YXlcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgdXBzdHJlYW0udGV4dCgpO1xuICAgIGxldCBkYXRhOiB1bmtub3duO1xuICAgIHRyeSB7IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpOyB9IGNhdGNoIHsgZGF0YSA9IHRleHQ7IH1cblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihkYXRhLCB7IHN0YXR1czogdXBzdHJlYW0ub2sgPyAyMDAgOiB1cHN0cmVhbS5zdGF0dXMgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ1Vwc3RyZWFtIHJlcXVlc3QgZmFpbGVkJztcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogbWVzc2FnZSB9LCB7IHN0YXR1czogNTAyIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcSIsImVuZHBvaW50IiwicHJvY2VzcyIsImVudiIsIkZPUk1fRU5EUE9JTlQiLCJib2R5IiwianNvbiIsImNvbnNvbGUiLCJpbmZvIiwic3RhdHVzIiwiZGV2IiwiZXJyb3IiLCJ1cHN0cmVhbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0IiwiZGF0YSIsInBhcnNlIiwib2siLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/submit/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit%2Froute&page=%2Fapi%2Fsubmit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit%2Froute.ts&appDir=%2FUsers%2Fkatiewalker%2FDesktop%2Fpitch-research-survey%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkatiewalker%2FDesktop%2Fpitch-research-survey&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit%2Froute&page=%2Fapi%2Fsubmit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit%2Froute.ts&appDir=%2FUsers%2Fkatiewalker%2FDesktop%2Fpitch-research-survey%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkatiewalker%2FDesktop%2Fpitch-research-survey&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_katiewalker_Desktop_pitch_research_survey_app_api_submit_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/submit/route.ts */ \"(rsc)/./app/api/submit/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/submit/route\",\n        pathname: \"/api/submit\",\n        filename: \"route\",\n        bundlePath: \"app/api/submit/route\"\n    },\n    resolvedPagePath: \"/Users/katiewalker/Desktop/pitch-research-survey/app/api/submit/route.ts\",\n    nextConfigOutput,\n    userland: _Users_katiewalker_Desktop_pitch_research_survey_app_api_submit_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdWJtaXQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1Ym1pdCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1Ym1pdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmthdGlld2Fsa2VyJTJGRGVza3RvcCUyRnBpdGNoLXJlc2VhcmNoLXN1cnZleSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZrYXRpZXdhbGtlciUyRkRlc2t0b3AlMkZwaXRjaC1yZXNlYXJjaC1zdXJ2ZXkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3dCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMva2F0aWV3YWxrZXIvRGVza3RvcC9waXRjaC1yZXNlYXJjaC1zdXJ2ZXkvYXBwL2FwaS9zdWJtaXQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1Ym1pdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N1Ym1pdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3VibWl0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2thdGlld2Fsa2VyL0Rlc2t0b3AvcGl0Y2gtcmVzZWFyY2gtc3VydmV5L2FwcC9hcGkvc3VibWl0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit%2Froute&page=%2Fapi%2Fsubmit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit%2Froute.ts&appDir=%2FUsers%2Fkatiewalker%2FDesktop%2Fpitch-research-survey%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkatiewalker%2FDesktop%2Fpitch-research-survey&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsubmit%2Froute&page=%2Fapi%2Fsubmit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit%2Froute.ts&appDir=%2FUsers%2Fkatiewalker%2FDesktop%2Fpitch-research-survey%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkatiewalker%2FDesktop%2Fpitch-research-survey&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();