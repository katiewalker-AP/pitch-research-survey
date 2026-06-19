'use client';

import type { ScoreBreakdown } from '@/lib/analyzeResults';

interface Props {
  score:          number;       // average 0–10
  count:          number;       // number of responses
  breakdown?:     ScoreBreakdown;
  showBreakdown?: boolean;
}

// Color per pip position (1-indexed)
const PIP_COLORS = [
  '#c0392b', // 1
  '#c0392b', // 2
  '#e67e22', // 3
  '#e67e22', // 4
  '#f0c040', // 5
  '#f0c040', // 6
  '#27ae60', // 7
  '#1a7a40', // 8
  '#1a7a40', // 9
  '#1a7a40', // 10
] as const;

function scoreColor(s: number): string {
  if (s >= 7.5) return '#1a7a40';
  if (s >= 5.5) return '#5a3e00';
  return '#c0392b';
}

export default function ScoreDisplay({ score, count, breakdown, showBreakdown = true }: Props) {
  const filled  = Math.round(score); // pips filled (0–10)
  const display = score > 0 ? score.toFixed(1) : '—';

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Large score */}
      <div className="text-center">
        <p
          className="font-serif font-bold leading-none"
          style={{ fontSize: '5rem', color: score > 0 ? scoreColor(score) : '#c4bfb8' }}
        >
          {display}
        </p>
        <p className="font-sans text-sm text-[#9a9490] mt-1">out of 10 · {count} responses</p>
      </div>

      {/* Pip gauge */}
      <div className="flex gap-1.5" aria-label={`Score gauge: ${display} out of 10`}>
        {PIP_COLORS.map((color, idx) => {
          const pos = idx + 1;
          const active = pos <= filled;
          return (
            <div
              key={pos}
              title={`${pos}`}
              className="w-4 h-4 rounded-full transition-all"
              style={{
                backgroundColor: active ? color : '#e8e4de',
                transform: active ? 'scale(1)' : 'scale(0.85)',
              }}
            />
          );
        })}
      </div>

      {/* Breakdown */}
      {showBreakdown && breakdown && (
        <div className="flex gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="font-sans font-semibold text-lg text-[#c0392b]">
              {breakdown.low}
            </span>
            <span className="font-sans text-xs text-[#9a9490]">Low (1–4)</span>
          </div>
          <div className="w-px bg-border self-stretch" />
          <div className="flex flex-col items-center">
            <span className="font-sans font-semibold text-lg text-[#5a3e00]">
              {breakdown.mid}
            </span>
            <span className="font-sans text-xs text-[#9a9490]">Mid (5–6)</span>
          </div>
          <div className="w-px bg-border self-stretch" />
          <div className="flex flex-col items-center">
            <span className="font-sans font-semibold text-lg text-[#1a7a40]">
              {breakdown.high}
            </span>
            <span className="font-sans text-xs text-[#9a9490]">High (7–10)</span>
          </div>
        </div>
      )}
    </div>
  );
}
