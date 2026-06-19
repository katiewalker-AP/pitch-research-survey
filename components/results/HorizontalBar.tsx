'use client';

export interface BarItem {
  label:  string;
  value:  number; // count
  color:  string;
}

interface Props {
  items:        BarItem[];
  total?:       number;     // if omitted, inferred from sum
  stacked?:     boolean;    // true = one segmented bar; false (default) = ranked bars
  showCount?:   boolean;    // show raw count alongside %
}

function pct(n: number, total: number) {
  return total > 0 ? Math.round((n / total) * 100) : 0;
}

// ─── Stacked variant ──────────────────────────────────────────────────────────

function StackedBar({ items, total, showCount }: { items: BarItem[]; total: number; showCount?: boolean }) {
  const nonZero = items.filter((i) => i.value > 0);

  return (
    <div>
      {/* The bar */}
      <div className="flex h-11 rounded-lg overflow-hidden gap-px">
        {nonZero.map((item) => {
          const p = pct(item.value, total);
          return (
            <div
              key={item.label}
              title={`${item.label}: ${item.value} (${p}%)`}
              style={{ flex: item.value, backgroundColor: item.color }}
              className="relative flex items-center justify-center transition-all"
            >
              {p >= 12 && (
                <span className="text-white text-xs font-semibold font-sans drop-shadow-sm px-1 truncate">
                  {p}%
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {nonZero.map((item) => {
          const p = pct(item.value, total);
          return (
            <span key={item.label} className="flex items-center gap-1.5 font-sans text-xs text-[#4a5568]">
              <span
                className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
              <span className="text-[#9a9490]">
                {showCount ? `${item.value} · ` : ''}{p}%
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ─── Ranked variant ───────────────────────────────────────────────────────────

function RankedBars({ items, total, showCount }: { items: BarItem[]; total: number; showCount?: boolean }) {
  const sorted = [...items].filter((i) => i.value > 0).sort((a, b) => b.value - a.value);
  const max    = sorted[0]?.value ?? 1;

  return (
    <div className="flex flex-col gap-2.5">
      {sorted.map((item) => {
        const p      = pct(item.value, total);
        const barPct = max > 0 ? (item.value / max) * 100 : 0;
        return (
          <div key={item.label} className="flex items-center gap-3">
            <div className="w-40 sm:w-52 flex-shrink-0 font-sans text-sm text-[#4a5568] text-right leading-tight">
              {item.label}
            </div>
            <div className="flex-1 h-8 relative bg-[#f0ede9] rounded-lg overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-lg transition-all duration-500"
                style={{ width: `${barPct}%`, backgroundColor: item.color }}
              />
              {barPct > 18 && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-sans text-xs font-semibold text-white">
                  {showCount ? `${item.value} · ` : ''}{p}%
                </span>
              )}
            </div>
            {barPct <= 18 && (
              <span className="font-sans text-xs text-[#9a9490] flex-shrink-0 w-10">
                {showCount ? `${item.value} · ` : ''}{p}%
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function HorizontalBar({ items, total, stacked = false, showCount = true }: Props) {
  const resolvedTotal = total ?? items.reduce((s, i) => s + i.value, 0);
  if (resolvedTotal === 0) {
    return <p className="font-sans text-sm text-[#9a9490] italic">No data yet.</p>;
  }

  return stacked
    ? <StackedBar  items={items} total={resolvedTotal} showCount={showCount} />
    : <RankedBars  items={items} total={resolvedTotal} showCount={showCount} />;
}
