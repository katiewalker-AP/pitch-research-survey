'use client';

interface Props {
  text:        string;
  accentColor: string;
  timestamp?:  string;
  prominent?:  boolean; // Q14 variant: larger font, cream bg, deep-blue border
}

function formatTimestamp(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  } catch {
    return '';
  }
}

export default function QuoteCard({ text, accentColor, timestamp, prominent = false }: Props) {
  if (!text?.trim()) return null;

  return (
    <div
      className={[
        'rounded-xl border border-border pl-5 pr-6 py-4 border-l-4',
        prominent
          ? 'bg-cream'
          : 'bg-white',
      ].join(' ')}
      style={{ borderLeftColor: accentColor }}
    >
      {prominent ? (
        <p className="font-sans text-base text-deep-blue leading-relaxed">
          &ldquo;{text}&rdquo;
        </p>
      ) : (
        <p className="font-sans text-sm text-[#4a5568] leading-relaxed">
          &ldquo;{text}&rdquo;
        </p>
      )}
      {timestamp && (
        <p className="font-sans text-xs text-[#9a9490] mt-2">
          {formatTimestamp(timestamp)}
        </p>
      )}
    </div>
  );
}
