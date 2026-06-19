(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/results/LoadingSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LoadingSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-pulse",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-5 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10",
                    children: Array.from({
                        length: 6
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-border rounded-xl p-5 h-28"
                        }, i, false, {
                            fileName: "[project]/components/results/LoadingSkeleton.tsx",
                            lineNumber: 8,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/results/LoadingSkeleton.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border border-border rounded-xl p-6 h-48 mb-6"
                }, void 0, false, {
                    fileName: "[project]/components/results/LoadingSkeleton.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-border rounded-xl p-6 h-56"
                        }, void 0, false, {
                            fileName: "[project]/components/results/LoadingSkeleton.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-border rounded-xl p-6 h-56"
                        }, void 0, false, {
                            fileName: "[project]/components/results/LoadingSkeleton.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/results/LoadingSkeleton.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/results/LoadingSkeleton.tsx",
            lineNumber: 5,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/results/LoadingSkeleton.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = LoadingSkeleton;
var _c;
__turbopack_context__.k.register(_c, "LoadingSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/analyzeResults.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// Types and pure analysis utilities for the results dashboard.
// All functions are stateless — safe to call from useMemo.
// ─────────────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "avg",
    ()=>avg,
    "avgRankPositions",
    ()=>avgRankPositions,
    "countOptions",
    ()=>countOptions,
    "mostCommon",
    ()=>mostCommon,
    "optionProportions",
    ()=>optionProportions,
    "scoreBreakdown",
    ()=>scoreBreakdown,
    "scoreTrafficLight",
    ()=>scoreTrafficLight,
    "topWords",
    ()=>topWords,
    "wordFrequency",
    ()=>wordFrequency
]);
function avg(nums) {
    const valid = nums.filter((n)=>n > 0);
    if (!valid.length) return 0;
    return valid.reduce((s, n)=>s + n, 0) / valid.length;
}
function countOptions(values) {
    const out = {};
    for (const v of values){
        if (v) out[v] = (out[v] ?? 0) + 1;
    }
    return out;
}
function mostCommon(values) {
    const counts = countOptions(values);
    let best = '';
    let bestN = 0;
    for (const [v, n] of Object.entries(counts)){
        if (n > bestN) {
            bestN = n;
            best = v;
        }
    }
    return best;
}
function optionProportions(counts, total) {
    return Object.entries(counts).map(([label, count])=>({
            label,
            count,
            pct: total > 0 ? count / total : 0
        }));
}
function scoreBreakdown(scores) {
    const valid = scores.filter((n)=>n > 0);
    return {
        low: valid.filter((n)=>n <= 4).length,
        mid: valid.filter((n)=>n >= 5 && n <= 6).length,
        high: valid.filter((n)=>n >= 7).length
    };
}
function avgRankPositions(rankArrays) {
    const sums = {};
    const counts = {};
    for (const arr of rankArrays){
        arr.forEach((item, idx)=>{
            if (!item) return;
            sums[item] = (sums[item] ?? 0) + (idx + 1);
            counts[item] = (counts[item] ?? 0) + 1;
        });
    }
    return Object.keys(counts).map((item)=>({
            item,
            avgPos: sums[item] / counts[item]
        })).sort((a, b)=>a.avgPos - b.avgPos);
}
// ─── Word cloud (open text) ───────────────────────────────────────────────────
const STOPWORDS = new Set([
    'the',
    'a',
    'an',
    'is',
    'it',
    'to',
    'and',
    'or',
    'for',
    'of',
    'in',
    'my',
    'we',
    'i',
    'that',
    'with',
    'be',
    'are',
    'this',
    'as',
    'at',
    'you',
    'our',
    'but',
    'not',
    'so',
    'have',
    'has',
    'was',
    'were',
    'would',
    'could',
    'should',
    'just',
    'more',
    'its',
    'do',
    'dont',
    'dont',
    'don',
    't',
    'really',
    'very',
    'when',
    'what',
    'which',
    'they',
    'them',
    'their',
    'there',
    'if',
    'from',
    'get',
    'can',
    'all',
    'been',
    'one',
    'some',
    'use',
    'used',
    'make',
    'want',
    'need',
    'feel',
    'like',
    'also',
    'about',
    'on',
    'up',
    'by',
    'will',
    'into',
    'than',
    'any',
    'how',
    'no',
    'us',
    'your',
    'people',
    'thing',
    'things',
    'find',
    'out',
    'because',
    'way',
    'time',
    's',
    're',
    'll',
    've',
    'm'
]);
function wordFrequency(texts, extra) {
    const freq = {};
    const stopwords = extra ? new Set([
        ...STOPWORDS,
        ...extra
    ]) : STOPWORDS;
    for (const text of texts){
        if (!text) continue;
        const words = text.toLowerCase().replace(/[^a-z0-9'\s-]/g, ' ').split(/\s+/);
        for (const raw of words){
            const word = raw.replace(/^['-]+|['-]+$/g, '').trim();
            if (word.length < 3) continue;
            if (stopwords.has(word)) continue;
            freq[word] = (freq[word] ?? 0) + 1;
        }
    }
    return freq;
}
function topWords(freq, n = 50) {
    return Object.entries(freq).sort((a, b)=>b[1] - a[1]).slice(0, n).map(([word, count])=>({
            word,
            count
        }));
}
function scoreTrafficLight(score) {
    if (score >= 7.5) return {
        textColor: '#1a7a40',
        bgColor: '#d5f5e3',
        label: 'Strong'
    };
    if (score >= 5.5) return {
        textColor: '#5a3e00',
        bgColor: '#fef9e7',
        label: 'Moderate'
    };
    return {
        textColor: '#c0392b',
        bgColor: '#fdecea',
        label: 'Needs work'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/MetricCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetricCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function MetricCard({ label, value, valueColor, bgColor, subLabel, badge }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border p-5 flex flex-col gap-2",
        style: {
            backgroundColor: bgColor ?? '#ffffff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-xs font-semibold uppercase tracking-widest text-[#9a9490] leading-tight",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/results/MetricCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-shrink-0 text-[10px] font-semibold font-sans px-2 py-0.5 rounded-full border border-border text-[#9a9490] uppercase tracking-wide",
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/components/results/MetricCard.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/MetricCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-serif font-bold text-3xl leading-none break-words",
                style: {
                    color: valueColor ?? '#173340'
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/results/MetricCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            subLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans text-xs text-[#9a9490] leading-tight",
                children: subLabel
            }, void 0, false, {
                fileName: "[project]/components/results/MetricCard.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/MetricCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = MetricCard;
var _c;
__turbopack_context__.k.register(_c, "MetricCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/WordCloud.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WordCloud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Brand palette for word colouring — cycles through these
const CLOUD_COLORS = [
    '#0A24E3',
    '#173340',
    '#E3664F',
    '#1a7a40',
    '#e67e22',
    '#6DCCF2',
    '#c0392b',
    '#27ae60'
];
/** Stable pseudo-shuffle based on word hash so layout is consistent. */ function hashCode(s) {
    let h = 0;
    for(let i = 0; i < s.length; i++){
        h = (h << 5) - h + s.charCodeAt(i) | 0;
    }
    return Math.abs(h);
}
function WordCloud({ frequencies, maxWords = 50 }) {
    _s();
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WordCloud.useMemo[words]": ()=>{
            const entries = Object.entries(frequencies).sort({
                "WordCloud.useMemo[words].entries": (a, b)=>b[1] - a[1]
            }["WordCloud.useMemo[words].entries"]).slice(0, maxWords);
            if (!entries.length) return [];
            const maxCount = entries[0][1];
            const minCount = entries[entries.length - 1][1];
            const range = Math.max(maxCount - minCount, 1);
            // Sort by hash so words appear interleaved by size rather than in frequency order
            return entries.map({
                "WordCloud.useMemo[words]": ([word, count])=>({
                        word,
                        count,
                        fontSize: 13 + Math.round((count - minCount) / range * 26),
                        color: CLOUD_COLORS[hashCode(word) % CLOUD_COLORS.length],
                        order: hashCode(word + 'cloud')
                    })
            }["WordCloud.useMemo[words]"]).sort({
                "WordCloud.useMemo[words]": (a, b)=>a.order - b.order
            }["WordCloud.useMemo[words]"]);
        }
    }["WordCloud.useMemo[words]"], [
        frequencies,
        maxWords
    ]);
    if (!words.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-sans text-sm text-[#9a9490] italic",
            children: "Not enough text data yet."
        }, void 0, false, {
            fileName: "[project]/components/results/WordCloud.tsx",
            lineNumber: 56,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-x-3 gap-y-2 justify-center py-4",
        "aria-label": "Word cloud from open text responses",
        children: words.map(({ word, fontSize, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-sans font-medium leading-tight cursor-default transition-opacity hover:opacity-70",
                style: {
                    fontSize,
                    color,
                    lineHeight: 1.3
                },
                title: `"${word}" — ${frequencies[word]} mention${frequencies[word] !== 1 ? 's' : ''}`,
                children: word
            }, word, false, {
                fileName: "[project]/components/results/WordCloud.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/results/WordCloud.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(WordCloud, "ycax3nLXmUoZS7xkliX72J1Xosk=");
_c = WordCloud;
var _c;
__turbopack_context__.k.register(_c, "WordCloud");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/tabs/OverviewTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverviewTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analyzeResults.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$MetricCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/MetricCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$WordCloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/WordCloud.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function SectionCard({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-border rounded-xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-serif font-bold text-deep-blue text-lg mb-5",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = SectionCard;
function OverviewTab({ responses }) {
    _s();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OverviewTab.useMemo[stats]": ()=>{
            const q4Avg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avg"])(responses.map({
                "OverviewTab.useMemo[stats].q4Avg": (r)=>r.q4
            }["OverviewTab.useMemo[stats].q4Avg"]));
            const q7Avg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avg"])(responses.map({
                "OverviewTab.useMemo[stats].q7Avg": (r)=>r.q7
            }["OverviewTab.useMemo[stats].q7Avg"]));
            const q10Avg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avg"])(responses.map({
                "OverviewTab.useMemo[stats].q10Avg": (r)=>r.q10
            }["OverviewTab.useMemo[stats].q10Avg"]));
            const q12Avg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avg"])(responses.map({
                "OverviewTab.useMemo[stats].q12Avg": (r)=>r.q12
            }["OverviewTab.useMemo[stats].q12Avg"]));
            const openTexts = responses.flatMap({
                "OverviewTab.useMemo[stats].openTexts": (r)=>[
                        r.q3,
                        r.q8,
                        r.q13,
                        r.q14
                    ]
            }["OverviewTab.useMemo[stats].openTexts"]);
            const freq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordFrequency"])(openTexts);
            return {
                q4Avg,
                q7Avg,
                q10Avg,
                q12Avg,
                q4TL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreTrafficLight"])(q4Avg),
                q7TL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreTrafficLight"])(q7Avg),
                q10TL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreTrafficLight"])(q10Avg),
                q12TL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreTrafficLight"])(q12Avg),
                q1Mode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mostCommon"])(responses.map({
                    "OverviewTab.useMemo[stats]": (r)=>r.q1
                }["OverviewTab.useMemo[stats]"]).filter(Boolean)),
                q2Mode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mostCommon"])(responses.map({
                    "OverviewTab.useMemo[stats]": (r)=>r.q2
                }["OverviewTab.useMemo[stats]"]).filter(Boolean)),
                wordFreq: freq
            };
        }
    }["OverviewTab.useMemo[stats]"], [
        responses
    ]);
    const q2Color = (val)=>{
        if (val === 'Under 30 minutes') return '#1a7a40';
        if (val === '30–60 minutes') return '#27ae60';
        if (val === '1–2 hours') return '#f0c040';
        if (val === 'Half a day') return '#e67e22';
        return '#c0392b';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$MetricCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Avg brand confidence",
                        value: stats.q4Avg > 0 ? `${stats.q4Avg.toFixed(1)} / 10` : '—',
                        valueColor: stats.q4TL.textColor,
                        bgColor: stats.q4TL.bgColor,
                        subLabel: `Q4 · ${stats.q4TL.label}`,
                        badge: "Q4"
                    }, void 0, false, {
                        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$MetricCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Avg personalisation importance",
                        value: stats.q7Avg > 0 ? `${stats.q7Avg.toFixed(1)} / 10` : '—',
                        valueColor: stats.q7TL.textColor,
                        bgColor: stats.q7TL.bgColor,
                        subLabel: `Q7 · ${stats.q7TL.label}`,
                        badge: "Q7"
                    }, void 0, false, {
                        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$MetricCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Avg app brand score",
                        value: stats.q10Avg > 0 ? `${stats.q10Avg.toFixed(1)} / 10` : '—',
                        valueColor: stats.q10TL.textColor,
                        bgColor: stats.q10TL.bgColor,
                        subLabel: `Q10 · ${stats.q10TL.label}`,
                        badge: "Q10"
                    }, void 0, false, {
                        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$MetricCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Avg customisation importance",
                        value: stats.q12Avg > 0 ? `${stats.q12Avg.toFixed(1)} / 10` : '—',
                        valueColor: stats.q12TL.textColor,
                        bgColor: stats.q12TL.bgColor,
                        subLabel: `Q12 · ${stats.q12TL.label}`,
                        badge: "Q12"
                    }, void 0, false, {
                        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$MetricCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Most common pitch method",
                        value: stats.q1Mode || '—',
                        valueColor: "#173340",
                        subLabel: "Q1 · most selected",
                        badge: "Q1"
                    }, void 0, false, {
                        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$MetricCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Typical time to build",
                        value: stats.q2Mode || '—',
                        valueColor: stats.q2Mode ? q2Color(stats.q2Mode) : '#9a9490',
                        subLabel: "Q2 · most common",
                        badge: "Q2"
                    }, void 0, false, {
                        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Key themes across open text responses",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-xs text-[#9a9490] mb-4",
                        children: "Drawn from Q3, Q8, Q13, Q14 — word size reflects frequency"
                    }, void 0, false, {
                        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$WordCloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        frequencies: stats.wordFreq,
                        maxWords: 50
                    }, void 0, false, {
                        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/tabs/OverviewTab.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/tabs/OverviewTab.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(OverviewTab, "3FvJDKtC3yF1gbNv5/WixcrN7Rs=");
_c1 = OverviewTab;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionCard");
__turbopack_context__.k.register(_c1, "OverviewTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/HorizontalBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HorizontalBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function pct(n, total) {
    return total > 0 ? Math.round(n / total * 100) : 0;
}
// ─── Stacked variant ──────────────────────────────────────────────────────────
function StackedBar({ items, total, showCount }) {
    const nonZero = items.filter((i)=>i.value > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-11 rounded-lg overflow-hidden gap-px",
                children: nonZero.map((item)=>{
                    const p = pct(item.value, total);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        title: `${item.label}: ${item.value} (${p}%)`,
                        style: {
                            flex: item.value,
                            backgroundColor: item.color
                        },
                        className: "relative flex items-center justify-center transition-all",
                        children: p >= 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-xs font-semibold font-sans drop-shadow-sm px-1 truncate",
                            children: [
                                p,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/results/HorizontalBar.tsx",
                            lineNumber: 39,
                            columnNumber: 17
                        }, this)
                    }, item.label, false, {
                        fileName: "[project]/components/results/HorizontalBar.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/results/HorizontalBar.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-x-4 gap-y-1.5",
                children: nonZero.map((item)=>{
                    const p = pct(item.value, total);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5 font-sans text-xs text-[#4a5568]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-sm flex-shrink-0",
                                style: {
                                    backgroundColor: item.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/results/HorizontalBar.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            item.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#9a9490]",
                                children: [
                                    showCount ? `${item.value} · ` : '',
                                    p,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results/HorizontalBar.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.label, true, {
                        fileName: "[project]/components/results/HorizontalBar.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/results/HorizontalBar.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/HorizontalBar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = StackedBar;
// ─── Ranked variant ───────────────────────────────────────────────────────────
function RankedBars({ items, total, showCount }) {
    const sorted = [
        ...items
    ].filter((i)=>i.value > 0).sort((a, b)=>b.value - a.value);
    const max = sorted[0]?.value ?? 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2.5",
        children: sorted.map((item)=>{
            const p = pct(item.value, total);
            const barPct = max > 0 ? item.value / max * 100 : 0;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-40 sm:w-52 flex-shrink-0 font-sans text-sm text-[#4a5568] text-right leading-tight",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/results/HorizontalBar.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-8 relative bg-[#f0ede9] rounded-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 top-0 h-full rounded-lg transition-all duration-500",
                                style: {
                                    width: `${barPct}%`,
                                    backgroundColor: item.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/results/HorizontalBar.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this),
                            barPct > 18 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 font-sans text-xs font-semibold text-white",
                                children: [
                                    showCount ? `${item.value} · ` : '',
                                    p,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results/HorizontalBar.tsx",
                                lineNumber: 92,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/HorizontalBar.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this),
                    barPct <= 18 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-sans text-xs text-[#9a9490] flex-shrink-0 w-10",
                        children: [
                            showCount ? `${item.value} · ` : '',
                            p,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/HorizontalBar.tsx",
                        lineNumber: 98,
                        columnNumber: 15
                    }, this)
                ]
            }, item.label, true, {
                fileName: "[project]/components/results/HorizontalBar.tsx",
                lineNumber: 82,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/results/HorizontalBar.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c1 = RankedBars;
function HorizontalBar({ items, total, stacked = false, showCount = true }) {
    const resolvedTotal = total ?? items.reduce((s, i)=>s + i.value, 0);
    if (resolvedTotal === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-sans text-sm text-[#9a9490] italic",
            children: "No data yet."
        }, void 0, false, {
            fileName: "[project]/components/results/HorizontalBar.tsx",
            lineNumber: 114,
            columnNumber: 12
        }, this);
    }
    return stacked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StackedBar, {
        items: items,
        total: resolvedTotal,
        showCount: showCount
    }, void 0, false, {
        fileName: "[project]/components/results/HorizontalBar.tsx",
        lineNumber: 118,
        columnNumber: 7
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RankedBars, {
        items: items,
        total: resolvedTotal,
        showCount: showCount
    }, void 0, false, {
        fileName: "[project]/components/results/HorizontalBar.tsx",
        lineNumber: 119,
        columnNumber: 7
    }, this);
}
_c2 = HorizontalBar;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StackedBar");
__turbopack_context__.k.register(_c1, "RankedBars");
__turbopack_context__.k.register(_c2, "HorizontalBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/ScoreDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScoreDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
// Color per pip position (1-indexed)
const PIP_COLORS = [
    '#c0392b',
    '#c0392b',
    '#e67e22',
    '#e67e22',
    '#f0c040',
    '#f0c040',
    '#27ae60',
    '#1a7a40',
    '#1a7a40',
    '#1a7a40'
];
function scoreColor(s) {
    if (s >= 7.5) return '#1a7a40';
    if (s >= 5.5) return '#5a3e00';
    return '#c0392b';
}
function ScoreDisplay({ score, count, breakdown, showBreakdown = true }) {
    const filled = Math.round(score); // pips filled (0–10)
    const display = score > 0 ? score.toFixed(1) : '—';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-serif font-bold leading-none",
                        style: {
                            fontSize: '5rem',
                            color: score > 0 ? scoreColor(score) : '#c4bfb8'
                        },
                        children: display
                    }, void 0, false, {
                        fileName: "[project]/components/results/ScoreDisplay.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-sm text-[#9a9490] mt-1",
                        children: [
                            "out of 10 · ",
                            count,
                            " responses"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/ScoreDisplay.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/ScoreDisplay.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1.5",
                "aria-label": `Score gauge: ${display} out of 10`,
                children: PIP_COLORS.map((color, idx)=>{
                    const pos = idx + 1;
                    const active = pos <= filled;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        title: `${pos}`,
                        className: "w-4 h-4 rounded-full transition-all",
                        style: {
                            backgroundColor: active ? color : '#e8e4de',
                            transform: active ? 'scale(1)' : 'scale(0.85)'
                        }
                    }, pos, false, {
                        fileName: "[project]/components/results/ScoreDisplay.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/results/ScoreDisplay.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            showBreakdown && breakdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans font-semibold text-lg text-[#c0392b]",
                                children: breakdown.low
                            }, void 0, false, {
                                fileName: "[project]/components/results/ScoreDisplay.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-xs text-[#9a9490]",
                                children: "Low (1–4)"
                            }, void 0, false, {
                                fileName: "[project]/components/results/ScoreDisplay.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/ScoreDisplay.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px bg-border self-stretch"
                    }, void 0, false, {
                        fileName: "[project]/components/results/ScoreDisplay.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans font-semibold text-lg text-[#5a3e00]",
                                children: breakdown.mid
                            }, void 0, false, {
                                fileName: "[project]/components/results/ScoreDisplay.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-xs text-[#9a9490]",
                                children: "Mid (5–6)"
                            }, void 0, false, {
                                fileName: "[project]/components/results/ScoreDisplay.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/ScoreDisplay.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px bg-border self-stretch"
                    }, void 0, false, {
                        fileName: "[project]/components/results/ScoreDisplay.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans font-semibold text-lg text-[#1a7a40]",
                                children: breakdown.high
                            }, void 0, false, {
                                fileName: "[project]/components/results/ScoreDisplay.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-xs text-[#9a9490]",
                                children: "High (7–10)"
                            }, void 0, false, {
                                fileName: "[project]/components/results/ScoreDisplay.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/ScoreDisplay.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/ScoreDisplay.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/ScoreDisplay.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = ScoreDisplay;
var _c;
__turbopack_context__.k.register(_c, "ScoreDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/QuoteCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuoteCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function formatTimestamp(iso) {
    try {
        return new Date(iso).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    } catch  {
        return '';
    }
}
function QuoteCard({ text, accentColor, timestamp, prominent = false }) {
    if (!text?.trim()) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'rounded-xl border border-border pl-5 pr-6 py-4 border-l-4',
            prominent ? 'bg-cream' : 'bg-white'
        ].join(' '),
        style: {
            borderLeftColor: accentColor
        },
        children: [
            prominent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans text-base text-deep-blue leading-relaxed",
                children: [
                    "“",
                    text,
                    "”"
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/QuoteCard.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans text-sm text-[#4a5568] leading-relaxed",
                children: [
                    "“",
                    text,
                    "”"
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/QuoteCard.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            timestamp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans text-xs text-[#9a9490] mt-2",
                children: formatTimestamp(timestamp)
            }, void 0, false, {
                fileName: "[project]/components/results/QuoteCard.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/QuoteCard.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = QuoteCard;
var _c;
__turbopack_context__.k.register(_c, "QuoteCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/tabs/PitchProcessTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PitchProcessTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analyzeResults.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$HorizontalBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/HorizontalBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$ScoreDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/ScoreDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$QuoteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/QuoteCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SectionCard({ title, sub, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-border rounded-xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-serif font-bold text-deep-blue text-lg mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans text-xs text-[#9a9490] mb-5",
                children: sub
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                lineNumber: 16,
                columnNumber: 15
            }, this),
            !sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5"
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                lineNumber: 17,
                columnNumber: 16
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = SectionCard;
// Distinct brand palette for Q1 options
const Q1_COLORS = [
    '#0A24E3',
    '#173340',
    '#6DCCF2',
    '#E3664F',
    '#FFCD63'
];
// Q2: speed-coded green→red
const Q2_COLORS = {
    'Under 30 minutes': '#1a7a40',
    '30–60 minutes': '#27ae60',
    '1–2 hours': '#f0c040',
    'Half a day': '#e67e22',
    'Longer than that': '#c0392b'
};
// Q5: sentiment-coded
const Q5_COLORS = {
    'Yes definitely': '#c0392b',
    'Probably': '#e67e22',
    'Not sure': '#f0c040',
    'No': '#27ae60'
};
const Q1_OPTIONS = [
    'PowerPoint or Keynote manually',
    'Google Slides',
    'A template someone else made',
    'A mix of different tools',
    "I don't use pitch decks"
];
const Q2_OPTIONS = [
    'Under 30 minutes',
    '30–60 minutes',
    '1–2 hours',
    'Half a day',
    'Longer than that'
];
const Q5_OPTIONS = [
    'Yes definitely',
    'Probably',
    'Not sure',
    'No'
];
function PitchProcessTab({ responses }) {
    _s();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PitchProcessTab.useMemo[stats]": ()=>{
            const q1Counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countOptions"])(responses.map({
                "PitchProcessTab.useMemo[stats].q1Counts": (r)=>r.q1
            }["PitchProcessTab.useMemo[stats].q1Counts"]));
            const q2Counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countOptions"])(responses.map({
                "PitchProcessTab.useMemo[stats].q2Counts": (r)=>r.q2
            }["PitchProcessTab.useMemo[stats].q2Counts"]));
            const q5Counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countOptions"])(responses.map({
                "PitchProcessTab.useMemo[stats].q5Counts": (r)=>r.q5
            }["PitchProcessTab.useMemo[stats].q5Counts"]));
            const q4Scores = responses.map({
                "PitchProcessTab.useMemo[stats].q4Scores": (r)=>r.q4
            }["PitchProcessTab.useMemo[stats].q4Scores"]).filter({
                "PitchProcessTab.useMemo[stats].q4Scores": (n)=>n > 0
            }["PitchProcessTab.useMemo[stats].q4Scores"]);
            const q4Avg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avg"])(q4Scores);
            const q4BD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreBreakdown"])(q4Scores);
            const q1Items = Q1_OPTIONS.map({
                "PitchProcessTab.useMemo[stats].q1Items": (label, i)=>({
                        label,
                        value: q1Counts[label] ?? 0,
                        color: Q1_COLORS[i % Q1_COLORS.length]
                    })
            }["PitchProcessTab.useMemo[stats].q1Items"]);
            const q2Items = Q2_OPTIONS.map({
                "PitchProcessTab.useMemo[stats].q2Items": (label)=>({
                        label,
                        value: q2Counts[label] ?? 0,
                        color: Q2_COLORS[label]
                    })
            }["PitchProcessTab.useMemo[stats].q2Items"]);
            const q5Items = Q5_OPTIONS.map({
                "PitchProcessTab.useMemo[stats].q5Items": (label)=>({
                        label,
                        value: q5Counts[label] ?? 0,
                        color: Q5_COLORS[label]
                    })
            }["PitchProcessTab.useMemo[stats].q5Items"]);
            // Q3 quotes newest-first
            const q3Quotes = responses.filter({
                "PitchProcessTab.useMemo[stats].q3Quotes": (r)=>r.q3.trim()
            }["PitchProcessTab.useMemo[stats].q3Quotes"]).sort({
                "PitchProcessTab.useMemo[stats].q3Quotes": (a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            }["PitchProcessTab.useMemo[stats].q3Quotes"]);
            return {
                q1Items,
                q2Items,
                q5Items,
                q4Avg,
                q4BD,
                q4Count: q4Scores.length,
                q3Quotes
            };
        }
    }["PitchProcessTab.useMemo[stats]"], [
        responses
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "How they currently create pitches",
                sub: "Q1 — How do you currently create pitches or proposals for prospects?",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$HorizontalBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: stats.q1Items,
                    stacked: true,
                    total: responses.length
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Time to build a pitch",
                sub: "Q2 — How long does it typically take you to put a pitch together from scratch?",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$HorizontalBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: stats.q2Items,
                    stacked: true,
                    total: responses.length
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Most frustrating part of the pitch process",
                sub: `Q3 — Open text · ${stats.q3Quotes.length} response${stats.q3Quotes.length !== 1 ? 's' : ''} · newest first`,
                children: stats.q3Quotes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-sans text-sm text-[#9a9490] italic",
                    children: "No text responses yet."
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3",
                    children: stats.q3Quotes.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$QuoteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: r.q3,
                            accentColor: "#E3664F",
                            timestamp: r.timestamp
                        }, r.responseId, false, {
                            fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                            lineNumber: 108,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Brand confidence score",
                sub: "Q4 — How confident are you that your current pitches accurately reflect the Add People brand?",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$ScoreDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    score: stats.q4Avg,
                    count: stats.q4Count,
                    breakdown: stats.q4BD,
                    showBreakdown: true
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Ever lost a deal due to pitch quality",
                sub: "Q5 — Have you ever lost a deal or felt underprepared because your pitch wasn't strong enough?",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$HorizontalBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: stats.q5Items,
                    stacked: true,
                    total: responses.length
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/tabs/PitchProcessTab.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(PitchProcessTab, "3FvJDKtC3yF1gbNv5/WixcrN7Rs=");
_c1 = PitchProcessTab;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionCard");
__turbopack_context__.k.register(_c1, "PitchProcessTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/tabs/ContentStructureTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContentStructureTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analyzeResults.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$HorizontalBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/HorizontalBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$ScoreDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/ScoreDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$QuoteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/QuoteCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SectionCard({ title, sub, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-border rounded-xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-serif font-bold text-deep-blue text-lg mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans text-xs text-[#9a9490] mb-5",
                children: sub
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                lineNumber: 16,
                columnNumber: 15
            }, this),
            !sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5"
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                lineNumber: 17,
                columnNumber: 16
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = SectionCard;
const Q6_OPTIONS = [
    "The prospect's current situation",
    'Our recommended solution',
    'Pricing breakdown',
    'Timeline',
    'Case studies and social proof',
    'Team credentials',
    'ROI projections',
    'A personalised opening hook'
];
function ContentStructureTab({ responses }) {
    _s();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContentStructureTab.useMemo[stats]": ()=>{
            // Q6 — multi-select: count each option across all responses
            const q6Counts = {};
            for (const r of responses){
                for (const opt of r.q6){
                    if (opt) q6Counts[opt] = (q6Counts[opt] ?? 0) + 1;
                }
            }
            const q6Items = Q6_OPTIONS.map({
                "ContentStructureTab.useMemo[stats].q6Items": (label)=>({
                        label,
                        value: q6Counts[label] ?? 0,
                        color: '#0A24E3'
                    })
            }["ContentStructureTab.useMemo[stats].q6Items"]);
            // Q7
            const q7Scores = responses.map({
                "ContentStructureTab.useMemo[stats].q7Scores": (r)=>r.q7
            }["ContentStructureTab.useMemo[stats].q7Scores"]).filter({
                "ContentStructureTab.useMemo[stats].q7Scores": (n)=>n > 0
            }["ContentStructureTab.useMemo[stats].q7Scores"]);
            const q7Avg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avg"])(q7Scores);
            const q7BD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreBreakdown"])(q7Scores);
            // Q8 quotes newest-first
            const q8Quotes = responses.filter({
                "ContentStructureTab.useMemo[stats].q8Quotes": (r)=>r.q8.trim()
            }["ContentStructureTab.useMemo[stats].q8Quotes"]).sort({
                "ContentStructureTab.useMemo[stats].q8Quotes": (a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            }["ContentStructureTab.useMemo[stats].q8Quotes"]);
            // Q9 average rank
            const q9RankArrays = responses.map({
                "ContentStructureTab.useMemo[stats].q9RankArrays": (r)=>r.q9
            }["ContentStructureTab.useMemo[stats].q9RankArrays"]).filter({
                "ContentStructureTab.useMemo[stats].q9RankArrays": (a)=>a.length > 0
            }["ContentStructureTab.useMemo[stats].q9RankArrays"]);
            const q9Ranked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avgRankPositions"])(q9RankArrays);
            return {
                q6Items,
                q7Avg,
                q7BD,
                q7Count: q7Scores.length,
                q8Quotes,
                q9Ranked,
                totalResponses: responses.length
            };
        }
    }["ContentStructureTab.useMemo[stats]"], [
        responses
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Most useful pitch sections",
                sub: `Q6 — Multi-select · ${stats.totalResponses} respondents`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$HorizontalBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: stats.q6Items,
                    stacked: false,
                    total: stats.totalResponses,
                    showCount: true
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Importance of personalisation",
                sub: "Q7 — How important is it that a pitch feels personalised to the specific prospect?",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$ScoreDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    score: stats.q7Avg,
                    count: stats.q7Count,
                    breakdown: stats.q7BD,
                    showBreakdown: true
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Content they wish they had easier access to",
                sub: `Q8 — Open text · ${stats.q8Quotes.length} response${stats.q8Quotes.length !== 1 ? 's' : ''} · newest first`,
                children: stats.q8Quotes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-sans text-sm text-[#9a9490] italic",
                    children: "No text responses yet."
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3",
                    children: stats.q8Quotes.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$QuoteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: r.q8,
                            accentColor: "#0A24E3",
                            timestamp: r.timestamp
                        }, r.responseId, false, {
                            fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Preferred pitch order",
                sub: `Q9 — Average position across ${stats.totalResponses} responses`,
                children: stats.q9Ranked.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-sans text-sm text-[#9a9490] italic",
                    children: "No ranking data yet."
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "flex flex-col gap-3",
                    children: stats.q9Ranked.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-shrink-0 w-8 h-8 rounded-full bg-electric-blue flex items-center justify-center font-sans font-bold text-sm text-white",
                                    children: idx + 1
                                }, void 0, false, {
                                    fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans text-sm font-medium text-deep-blue",
                                            children: item.item
                                        }, void 0, false, {
                                            fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans text-xs text-[#9a9490]",
                                            children: [
                                                "avg position ",
                                                item.avgPos.toFixed(1)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.item, true, {
                            fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                            lineNumber: 108,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/tabs/ContentStructureTab.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(ContentStructureTab, "3FvJDKtC3yF1gbNv5/WixcrN7Rs=");
_c1 = ContentStructureTab;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionCard");
__turbopack_context__.k.register(_c1, "ContentStructureTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/tabs/BrandAppTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandAppTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analyzeResults.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$HorizontalBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/HorizontalBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$ScoreDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/ScoreDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$QuoteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/QuoteCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SectionCard({ title, sub, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-border rounded-xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-serif font-bold text-deep-blue text-lg mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans text-xs text-[#9a9490] mb-5",
                children: sub
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                lineNumber: 16,
                columnNumber: 15
            }, this),
            !sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5"
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                lineNumber: 17,
                columnNumber: 16
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = SectionCard;
// Q10 score distribution buckets as a stacked bar
function ScoreDistributionBar({ scores, total }) {
    const items = [
        {
            label: 'Low (1–4)',
            value: scores.filter((n)=>n >= 1 && n <= 4).length,
            color: '#c0392b'
        },
        {
            label: 'Mid (5–6)',
            value: scores.filter((n)=>n >= 5 && n <= 6).length,
            color: '#f0c040'
        },
        {
            label: 'High (7–10)',
            value: scores.filter((n)=>n >= 7).length,
            color: '#1a7a40'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$HorizontalBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        items: items,
        stacked: true,
        total: total
    }, void 0, false, {
        fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c1 = ScoreDistributionBar;
const Q11_OPTIONS = [
    'Bold dark (dark background, strong contrast)',
    'Clean light (cream and white, minimal)',
    'High contrast (black and electric blue)',
    'Let me choose per pitch'
];
const Q11_COLORS = {
    'Bold dark (dark background, strong contrast)': '#173340',
    'Clean light (cream and white, minimal)': '#6DCCF2',
    'High contrast (black and electric blue)': '#0A24E3',
    'Let me choose per pitch': '#E3664F'
};
function BrandAppTab({ responses }) {
    _s();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrandAppTab.useMemo[stats]": ()=>{
            // Q10
            const q10Scores = responses.map({
                "BrandAppTab.useMemo[stats].q10Scores": (r)=>r.q10
            }["BrandAppTab.useMemo[stats].q10Scores"]).filter({
                "BrandAppTab.useMemo[stats].q10Scores": (n)=>n > 0
            }["BrandAppTab.useMemo[stats].q10Scores"]);
            const q10Avg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avg"])(q10Scores);
            const q10BD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreBreakdown"])(q10Scores);
            // Q11
            const q11Counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countOptions"])(responses.map({
                "BrandAppTab.useMemo[stats].q11Counts": (r)=>r.q11
            }["BrandAppTab.useMemo[stats].q11Counts"]));
            const q11Items = Q11_OPTIONS.map({
                "BrandAppTab.useMemo[stats].q11Items": (label)=>({
                        label,
                        value: q11Counts[label] ?? 0,
                        color: Q11_COLORS[label]
                    })
            }["BrandAppTab.useMemo[stats].q11Items"]);
            // Q12
            const q12Scores = responses.map({
                "BrandAppTab.useMemo[stats].q12Scores": (r)=>r.q12
            }["BrandAppTab.useMemo[stats].q12Scores"]).filter({
                "BrandAppTab.useMemo[stats].q12Scores": (n)=>n > 0
            }["BrandAppTab.useMemo[stats].q12Scores"]);
            const q12Avg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avg"])(q12Scores);
            const q12BD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzeResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreBreakdown"])(q12Scores);
            // Q13 quotes newest-first
            const q13Quotes = responses.filter({
                "BrandAppTab.useMemo[stats].q13Quotes": (r)=>r.q13.trim()
            }["BrandAppTab.useMemo[stats].q13Quotes"]).sort({
                "BrandAppTab.useMemo[stats].q13Quotes": (a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            }["BrandAppTab.useMemo[stats].q13Quotes"]);
            // Q14 quotes newest-first
            const q14Quotes = responses.filter({
                "BrandAppTab.useMemo[stats].q14Quotes": (r)=>r.q14.trim()
            }["BrandAppTab.useMemo[stats].q14Quotes"]).sort({
                "BrandAppTab.useMemo[stats].q14Quotes": (a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            }["BrandAppTab.useMemo[stats].q14Quotes"]);
            return {
                q10Scores,
                q10Avg,
                q10BD,
                q10Count: q10Scores.length,
                q11Items,
                q12Avg,
                q12BD,
                q12Count: q12Scores.length,
                q13Quotes,
                q14Quotes,
                totalResponses: responses.length
            };
        }
    }["BrandAppTab.useMemo[stats]"], [
        responses
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "How well the app represents the brand",
                sub: "Q10 — Having seen the dynamic pitch deck app, how well do you feel it represents the Add People brand?",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$ScoreDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        score: stats.q10Avg,
                        count: stats.q10Count,
                        breakdown: stats.q10BD,
                        showBreakdown: true
                    }, void 0, false, {
                        fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    stats.q10Scores.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-xs font-semibold uppercase tracking-widest text-[#9a9490] mb-3",
                                children: "Score distribution"
                            }, void 0, false, {
                                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreDistributionBar, {
                                scores: stats.q10Scores,
                                total: stats.q10Count
                            }, void 0, false, {
                                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Preferred brand theme",
                sub: "Q11 — Which brand theme would you most want to use for client pitches?",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$HorizontalBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: stats.q11Items,
                    stacked: true,
                    total: stats.totalResponses
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "Importance of customisation",
                sub: "Q12 — How important is it that you can customise the pitch before sending?",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$ScoreDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    score: stats.q12Avg,
                    count: stats.q12Count,
                    breakdown: stats.q12BD,
                    showBreakdown: true
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "What would make them use this tool",
                sub: `Q13 — Open text · ${stats.q13Quotes.length} response${stats.q13Quotes.length !== 1 ? 's' : ''} · newest first`,
                children: stats.q13Quotes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-sans text-sm text-[#9a9490] italic",
                    children: "No text responses yet."
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3",
                    children: stats.q13Quotes.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$QuoteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: r.q13,
                            accentColor: "#27ae60",
                            timestamp: r.timestamp
                        }, r.responseId, false, {
                            fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                            lineNumber: 127,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                title: "The one thing this app must do really well",
                sub: `Q14 — The most important answers · ${stats.q14Quotes.length} response${stats.q14Quotes.length !== 1 ? 's' : ''}`,
                children: stats.q14Quotes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-sans text-sm text-[#9a9490] italic",
                    children: "No text responses yet."
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3",
                    children: stats.q14Quotes.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$QuoteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: r.q14,
                            accentColor: "#173340",
                            timestamp: r.timestamp,
                            prominent: true
                        }, r.responseId, false, {
                            fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                            lineNumber: 143,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/tabs/BrandAppTab.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(BrandAppTab, "3FvJDKtC3yF1gbNv5/WixcrN7Rs=");
_c2 = BrandAppTab;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SectionCard");
__turbopack_context__.k.register(_c1, "ScoreDistributionBar");
__turbopack_context__.k.register(_c2, "BrandAppTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/results/ResultsDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/LoadingSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$tabs$2f$OverviewTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/tabs/OverviewTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$tabs$2f$PitchProcessTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/tabs/PitchProcessTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$tabs$2f$ContentStructureTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/tabs/ContentStructureTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$tabs$2f$BrandAppTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results/tabs/BrandAppTab.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// ─── Constants ────────────────────────────────────────────────────────────────
const REFRESH_MS = 60_000;
const MIN_RESPONSES = 3;
const TABS = [
    {
        id: 'overview',
        label: 'Overview'
    },
    {
        id: 'pitch',
        label: 'Pitch Process'
    },
    {
        id: 'content',
        label: 'Content & Structure'
    },
    {
        id: 'brand',
        label: 'Brand & App'
    }
];
// ─── Header ───────────────────────────────────────────────────────────────────
function DashboardHeader({ count, lastUpdated, justRefreshed, activeTab, onTabChange }) {
    const fmt = (d)=>d.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-deep-blue px-5 py-3 flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pulse-dot w-2.5 h-2.5 rounded-full bg-yellow flex-shrink-0",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/results/ResultsDashboard.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif font-bold text-white text-base sm:text-lg tracking-tight",
                                children: "Add People · Pitch App Research"
                            }, void 0, false, {
                                fileName: "[project]/components/results/ResultsDashboard.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-blue text-white font-sans text-xs font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3 h-3",
                                        viewBox: "0 0 12 12",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "6",
                                                cy: "4",
                                                r: "2",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results/ResultsDashboard.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 10c0-2.2 1.8-4 4-4s4 1.8 4 4",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/results/ResultsDashboard.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    count,
                                    " response",
                                    count !== 1 ? 's' : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/results/ResultsDashboard.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            lastUpdated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-xs text-white/60 flex items-center gap-1.5",
                                children: justRefreshed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#6DCCF2] font-medium animate-fade-in",
                                    children: "Updated just now"
                                }, void 0, false, {
                                    fileName: "[project]/components/results/ResultsDashboard.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Updated ",
                                        fmt(lastUpdated)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/results/ResultsDashboard.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-deep-blue border-t border-white/10 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex min-w-max px-5",
                    "aria-label": "Results sections",
                    children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onTabChange(tab.id),
                            className: [
                                'px-4 py-3 font-sans text-sm font-medium transition-colors whitespace-nowrap border-b-2',
                                activeTab === tab.id ? 'border-electric-blue text-white' : 'border-transparent text-white/50 hover:text-white/80'
                            ].join(' '),
                            children: tab.label
                        }, tab.id, false, {
                            fileName: "[project]/components/results/ResultsDashboard.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/results/ResultsDashboard.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/ResultsDashboard.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = DashboardHeader;
// ─── Error state ──────────────────────────────────────────────────────────────
function ErrorState({ message, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-[60vh] px-5 text-center gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-14 h-14 rounded-full bg-[#fdecea] flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-7 h-7 text-[#c0392b]",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "9",
                            stroke: "currentColor",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/results/ResultsDashboard.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 8v4M12 16h.01",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/results/ResultsDashboard.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/results/ResultsDashboard.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-serif font-bold text-deep-blue text-xl mb-2",
                        children: "Couldn't load results"
                    }, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-sm text-[#4a5568] max-w-sm",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onRetry,
                className: "px-6 py-3 rounded-lg bg-electric-blue text-white font-sans font-semibold text-sm hover:bg-[#0018c4] transition-colors",
                children: "Try again"
            }, void 0, false, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/ResultsDashboard.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c1 = ErrorState;
// ─── Empty state ──────────────────────────────────────────────────────────────
function EmptyState({ count }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-[60vh] px-5 text-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-14 h-14 rounded-full bg-[#eef1ff] flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-7 h-7 text-electric-blue",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/results/ResultsDashboard.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "9",
                            y: "3",
                            width: "6",
                            height: "4",
                            rx: "1",
                            stroke: "currentColor",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/results/ResultsDashboard.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/results/ResultsDashboard.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-serif font-bold text-deep-blue text-xl mb-2",
                        children: "Not enough responses yet"
                    }, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-sm text-[#4a5568]",
                        children: count === 0 ? 'No responses have been submitted yet. Check back soon.' : `${count} response${count !== 1 ? 's' : ''} received so far — dashboard unlocks at ${MIN_RESPONSES}.`
                    }, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/ResultsDashboard.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c2 = EmptyState;
function ResultsDashboard() {
    _s();
    const [responses, setResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastUpdated, setLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [justRefreshed, setJustRefreshed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    const refreshTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResultsDashboard.useCallback[fetchData]": async (isRefresh = false)=>{
            try {
                const res = await fetch('/api/results', {
                    cache: 'no-store'
                });
                if (!res.ok) {
                    const body = await res.json().catch({
                        "ResultsDashboard.useCallback[fetchData]": ()=>({})
                    }["ResultsDashboard.useCallback[fetchData]"]);
                    throw new Error(body.error ?? `HTTP ${res.status}`);
                }
                const data = await res.json();
                setResponses(data.responses);
                setError(null);
                setLastUpdated(new Date());
                if (isRefresh) {
                    setJustRefreshed(true);
                    if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
                    refreshTimerRef.current = setTimeout({
                        "ResultsDashboard.useCallback[fetchData]": ()=>setJustRefreshed(false)
                    }["ResultsDashboard.useCallback[fetchData]"], 3000);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load results');
            } finally{
                setLoading(false);
            }
        }
    }["ResultsDashboard.useCallback[fetchData]"], []);
    // Initial load + polling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsDashboard.useEffect": ()=>{
            fetchData(false);
            const interval = setInterval({
                "ResultsDashboard.useEffect.interval": ()=>fetchData(true)
            }["ResultsDashboard.useEffect.interval"], REFRESH_MS);
            return ({
                "ResultsDashboard.useEffect": ()=>{
                    clearInterval(interval);
                    if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
                }
            })["ResultsDashboard.useEffect"];
        }
    }["ResultsDashboard.useEffect"], [
        fetchData
    ]);
    // ── Render ──────────────────────────────────────────────────────────────────
    const count = responses.length;
    // Show header even during loading/error so the UI feels anchored
    const showHeader = !loading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-cream",
        children: [
            showHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardHeader, {
                count: count,
                lastUpdated: lastUpdated,
                justRefreshed: justRefreshed,
                activeTab: activeTab,
                onTabChange: setActiveTab
            }, void 0, false, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-deep-blue px-5 py-3 flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pulse-dot w-2.5 h-2.5 rounded-full bg-yellow"
                            }, void 0, false, {
                                fileName: "[project]/components/results/ResultsDashboard.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif font-bold text-white text-lg",
                                children: "Add People · Pitch App Research"
                            }, void 0, false, {
                                fileName: "[project]/components/results/ResultsDashboard.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-deep-blue border-t border-white/10 h-11"
                    }, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this),
            !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorState, {
                message: error,
                onRetry: ()=>fetchData(false)
            }, void 0, false, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this),
            !loading && !error && count < MIN_RESPONSES && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                count: count
            }, void 0, false, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            !loading && !error && count >= MIN_RESPONSES && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-0",
                children: [
                    activeTab === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$tabs$2f$OverviewTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        responses: responses
                    }, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 237,
                        columnNumber: 40
                    }, this),
                    activeTab === 'pitch' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$tabs$2f$PitchProcessTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        responses: responses
                    }, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 238,
                        columnNumber: 40
                    }, this),
                    activeTab === 'content' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$tabs$2f$ContentStructureTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        responses: responses
                    }, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 239,
                        columnNumber: 40
                    }, this),
                    activeTab === 'brand' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2f$tabs$2f$BrandAppTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        responses: responses
                    }, void 0, false, {
                        fileName: "[project]/components/results/ResultsDashboard.tsx",
                        lineNumber: 240,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results/ResultsDashboard.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results/ResultsDashboard.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s(ResultsDashboard, "qY/bBUQxKQVxqqujYQdHJxOakTY=");
_c3 = ResultsDashboard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DashboardHeader");
__turbopack_context__.k.register(_c1, "ErrorState");
__turbopack_context__.k.register(_c2, "EmptyState");
__turbopack_context__.k.register(_c3, "ResultsDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_171vurt._.js.map