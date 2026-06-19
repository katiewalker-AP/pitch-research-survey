module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/results/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const SHEET_ID = '1IAXxw7RuswsVwdgATj8WjT67mnSYQLsledOx4tSSjhI';
const RANGE = 'Sheet1!A:P';
function parseRow(row) {
    const int = (v)=>{
        const n = parseInt(v ?? '', 10);
        return isNaN(n) ? 0 : n;
    };
    return {
        responseId: row[0] ?? '',
        timestamp: row[1] ?? '',
        q1: row[2] ?? '',
        q2: row[3] ?? '',
        q3: row[4] ?? '',
        q4: int(row[5]),
        q5: row[6] ?? '',
        q6: (row[7] ?? '').split(', ').map((s)=>s.trim()).filter(Boolean),
        q7: int(row[8]),
        q8: row[9] ?? '',
        q9: (row[10] ?? '').split(' > ').map((s)=>s.trim()).filter(Boolean),
        q10: int(row[11]),
        q11: row[12] ?? '',
        q12: int(row[13]),
        q13: row[14] ?? '',
        q14: row[15] ?? ''
    };
}
async function GET() {
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    if (!apiKey) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'GOOGLE_SHEETS_API_KEY is not configured'
        }, {
            status: 500
        });
    }
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/` + `${encodeURIComponent(RANGE)}?key=${apiKey}`;
    let sheetData;
    try {
        const res = await fetch(url, {
            cache: 'no-store'
        });
        if (!res.ok) {
            const text = await res.text();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Google Sheets API error (${res.status})`,
                detail: text
            }, {
                status: 502
            });
        }
        sheetData = await res.json();
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to reach Google Sheets';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 502
        });
    }
    const rows = sheetData.values ?? [];
    const responses = rows// Skip header row and any row whose first cell looks like a header or is empty
    .filter((row)=>{
        const id = (row[0] ?? '').trim();
        return id !== '' && id !== 'responseId';
    }).map(parseRow);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        responses,
        count: responses.length,
        fetchedAt: new Date().toISOString()
    }, {
        headers: {
            // Revalidate often enough that auto-refresh shows fresh data
            'Cache-Control': 'no-store'
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1dg7b-c._.js.map