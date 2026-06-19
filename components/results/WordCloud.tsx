'use client';

import { useMemo } from 'react';

interface Props {
  frequencies: Record<string, number>;
  maxWords?:   number;
}

// Brand palette for word colouring — cycles through these
const CLOUD_COLORS = [
  '#0A24E3',
  '#173340',
  '#E3664F',
  '#1a7a40',
  '#e67e22',
  '#6DCCF2',
  '#c0392b',
  '#27ae60',
];

/** Stable pseudo-shuffle based on word hash so layout is consistent. */
function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export default function WordCloud({ frequencies, maxWords = 50 }: Props) {
  const words = useMemo(() => {
    const entries = Object.entries(frequencies)
      .sort((a, b) => b[1] - a[1])
      .slice(0, maxWords);

    if (!entries.length) return [];

    const maxCount = entries[0][1];
    const minCount = entries[entries.length - 1][1];
    const range    = Math.max(maxCount - minCount, 1);

    // Sort by hash so words appear interleaved by size rather than in frequency order
    return entries
      .map(([word, count]) => ({
        word,
        count,
        fontSize: 13 + Math.round(((count - minCount) / range) * 26), // 13–39 px
        color: CLOUD_COLORS[hashCode(word) % CLOUD_COLORS.length],
        order: hashCode(word + 'cloud'),
      }))
      .sort((a, b) => a.order - b.order);
  }, [frequencies, maxWords]);

  if (!words.length) {
    return <p className="font-sans text-sm text-[#9a9490] italic">Not enough text data yet.</p>;
  }

  return (
    <div
      className="flex flex-wrap gap-x-3 gap-y-2 justify-center py-4"
      aria-label="Word cloud from open text responses"
    >
      {words.map(({ word, fontSize, color }) => (
        <span
          key={word}
          className="font-sans font-medium leading-tight cursor-default transition-opacity hover:opacity-70"
          style={{ fontSize, color, lineHeight: 1.3 }}
          title={`"${word}" — ${frequencies[word]} mention${frequencies[word] !== 1 ? 's' : ''}`}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
