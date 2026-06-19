'use client';

interface Props {
  label:       string;
  value:       string | number;
  valueColor?: string;
  bgColor?:    string;
  subLabel?:   string;
  badge?:      string;
}

export default function MetricCard({ label, value, valueColor, bgColor, subLabel, badge }: Props) {
  return (
    <div
      className="rounded-xl border border-border p-5 flex flex-col gap-2"
      style={{ backgroundColor: bgColor ?? '#ffffff' }}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#9a9490] leading-tight">
          {label}
        </p>
        {badge && (
          <span className="flex-shrink-0 text-[10px] font-semibold font-sans px-2 py-0.5 rounded-full border border-border text-[#9a9490] uppercase tracking-wide">
            {badge}
          </span>
        )}
      </div>
      <p
        className="font-serif font-bold text-3xl leading-none break-words"
        style={{ color: valueColor ?? '#173340' }}
      >
        {value}
      </p>
      {subLabel && (
        <p className="font-sans text-xs text-[#9a9490] leading-tight">{subLabel}</p>
      )}
    </div>
  );
}
