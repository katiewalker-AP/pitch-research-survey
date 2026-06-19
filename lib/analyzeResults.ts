// ─────────────────────────────────────────────────────────────────────────────
// Types and pure analysis utilities for the results dashboard.
// All functions are stateless — safe to call from useMemo.
// ─────────────────────────────────────────────────────────────────────────────

export interface SurveyResponse {
  responseId: string;
  timestamp:  string;
  q1:  string;
  q2:  string;
  q3:  string;
  q4:  number;
  q5:  string;
  q6:  string[];
  q7:  number;
  q8:  string;
  q9:  string[];
  q10: number;
  q11: string;
  q12: number;
  q13: string;
  q14: string;
}

export interface ResultsApiResponse {
  responses: SurveyResponse[];
  fetchedAt: string;
  count:     number;
}

// ─── Basic aggregators ────────────────────────────────────────────────────────

/** Arithmetic mean; ignores zeros (unanswered numeric fields). */
export function avg(nums: number[]): number {
  const valid = nums.filter((n) => n > 0);
  if (!valid.length) return 0;
  return valid.reduce((s, n) => s + n, 0) / valid.length;
}

/** Count occurrences of each string value. */
export function countOptions(values: string[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const v of values) {
    if (v) out[v] = (out[v] ?? 0) + 1;
  }
  return out;
}

/** Most frequent string value in an array. Returns '' if empty. */
export function mostCommon(values: string[]): string {
  const counts = countOptions(values);
  let best = '';
  let bestN = 0;
  for (const [v, n] of Object.entries(counts)) {
    if (n > bestN) { bestN = n; best = v; }
  }
  return best;
}

/** Proportion (0–1) of each option. */
export function optionProportions(
  counts: Record<string, number>,
  total: number,
): Array<{ label: string; count: number; pct: number }> {
  return Object.entries(counts).map(([label, count]) => ({
    label,
    count,
    pct: total > 0 ? count / total : 0,
  }));
}

// ─── Score breakdown ──────────────────────────────────────────────────────────

export interface ScoreBreakdown {
  low:  number; // 1–4
  mid:  number; // 5–6
  high: number; // 7–10
}

export function scoreBreakdown(scores: number[]): ScoreBreakdown {
  const valid = scores.filter((n) => n > 0);
  return {
    low:  valid.filter((n) => n <= 4).length,
    mid:  valid.filter((n) => n >= 5 && n <= 6).length,
    high: valid.filter((n) => n >= 7).length,
  };
}

// ─── Rank averaging (Q9) ──────────────────────────────────────────────────────

export interface RankedItem { item: string; avgPos: number }

/**
 * For each unique item appearing in any rankArray, compute its average
 * 1-based position across all responses, then return sorted ascending.
 */
export function avgRankPositions(rankArrays: string[][]): RankedItem[] {
  const sums:   Record<string, number> = {};
  const counts: Record<string, number> = {};

  for (const arr of rankArrays) {
    arr.forEach((item, idx) => {
      if (!item) return;
      sums[item]   = (sums[item]   ?? 0) + (idx + 1);
      counts[item] = (counts[item] ?? 0) + 1;
    });
  }

  return Object.keys(counts)
    .map((item) => ({ item, avgPos: sums[item] / counts[item] }))
    .sort((a, b) => a.avgPos - b.avgPos);
}

// ─── Word cloud (open text) ───────────────────────────────────────────────────

const STOPWORDS = new Set([
  'the','a','an','is','it','to','and','or','for','of','in','my','we','i',
  'that','with','be','are','this','as','at','you','our','but','not','so',
  'have','has','was','were','would','could','should','just','more','its',
  'do','dont','dont','don','t','really','very','when','what','which','they',
  'them','their','there','if','from','get','can','all','been','one','some',
  'use','used','make','want','need','feel','like','also','about','on','up',
  'by','will','into','than','any','how','no','us','your','people','thing',
  'things','find','out','because','way','time','s','re','ll','ve','m',
]);

/** Compute word frequency from an array of raw text strings. */
export function wordFrequency(
  texts: string[],
  extra?: Set<string>,
): Record<string, number> {
  const freq: Record<string, number> = {};
  const stopwords = extra ? new Set([...STOPWORDS, ...extra]) : STOPWORDS;

  for (const text of texts) {
    if (!text) continue;
    const words = text
      .toLowerCase()
      .replace(/[^a-z0-9'\s-]/g, ' ')
      .split(/\s+/);

    for (const raw of words) {
      const word = raw.replace(/^['-]+|['-]+$/g, '').trim();
      if (word.length < 3) continue;
      if (stopwords.has(word)) continue;
      freq[word] = (freq[word] ?? 0) + 1;
    }
  }
  return freq;
}

/** Return the top N words by frequency as a sorted array. */
export function topWords(
  freq: Record<string, number>,
  n = 50,
): Array<{ word: string; count: number }> {
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([word, count]) => ({ word, count }));
}

// ─── Traffic-light helper ─────────────────────────────────────────────────────

export interface TrafficLight {
  textColor: string;
  bgColor:   string;
  label:     string;
}

export function scoreTrafficLight(score: number): TrafficLight {
  if (score >= 7.5) return { textColor: '#1a7a40', bgColor: '#d5f5e3', label: 'Strong' };
  if (score >= 5.5) return { textColor: '#5a3e00', bgColor: '#fef9e7', label: 'Moderate' };
  return                   { textColor: '#c0392b', bgColor: '#fdecea', label: 'Needs work' };
}
