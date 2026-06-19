'use client';

interface Props {
  value: number | null;
  onChange: (v: number) => void;
  leftLabel: string;
  rightLabel: string;
}

export default function Scale10({ value, onChange, leftLabel, rightLabel }: Props) {
  return (
    <div>
      {/* Number row */}
      <div className="flex gap-2">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
          const selected = value === n;
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n)}
              className={[
                'flex-1 aspect-square min-w-0 rounded-lg border-2 font-sans font-semibold text-sm',
                'flex items-center justify-center transition-all duration-150',
                selected
                  ? 'border-deep-blue bg-deep-blue text-white'
                  : 'border-border bg-white text-deep-blue hover:bg-[#f0f3ff] hover:border-electric-blue',
              ].join(' ')}
            >
              {n}
            </button>
          );
        })}
      </div>

      {/* Scale labels */}
      <div className="flex justify-between mt-3 px-0.5">
        <span className="font-sans text-xs text-[#8a8580] leading-tight max-w-[40%]">
          {leftLabel}
        </span>
        <span className="font-sans text-xs text-[#8a8580] leading-tight max-w-[40%] text-right">
          {rightLabel}
        </span>
      </div>
    </div>
  );
}
