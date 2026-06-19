'use client';

import { useMemo } from 'react';
import type { SurveyResponse } from '@/lib/analyzeResults';
import { avg, countOptions, scoreBreakdown } from '@/lib/analyzeResults';
import HorizontalBar, { type BarItem } from '../HorizontalBar';
import ScoreDisplay  from '../ScoreDisplay';
import QuoteCard     from '../QuoteCard';

interface Props { responses: SurveyResponse[] }

function SectionCard({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-border rounded-xl p-6">
      <h3 className="font-serif font-bold text-deep-blue text-lg mb-1">{title}</h3>
      {sub && <p className="font-sans text-xs text-[#9a9490] mb-5">{sub}</p>}
      {!sub && <div className="mb-5" />}
      {children}
    </div>
  );
}

// Q10 score distribution buckets as a stacked bar
function ScoreDistributionBar({ scores, total }: { scores: number[]; total: number }) {
  const items: BarItem[] = [
    { label: 'Low (1–4)',  value: scores.filter((n) => n >= 1 && n <= 4).length, color: '#c0392b' },
    { label: 'Mid (5–6)',  value: scores.filter((n) => n >= 5 && n <= 6).length, color: '#f0c040' },
    { label: 'High (7–10)',value: scores.filter((n) => n >= 7).length,           color: '#1a7a40' },
  ];
  return <HorizontalBar items={items} stacked total={total} />;
}

const Q11_OPTIONS = [
  'Bold dark (dark background, strong contrast)',
  'Clean light (cream and white, minimal)',
  'High contrast (black and electric blue)',
  'Let me choose per pitch',
];
const Q11_COLORS: Record<string, string> = {
  'Bold dark (dark background, strong contrast)': '#173340',
  'Clean light (cream and white, minimal)':       '#6DCCF2',
  'High contrast (black and electric blue)':      '#0A24E3',
  'Let me choose per pitch':                      '#E3664F',
};

export default function BrandAppTab({ responses }: Props) {
  const stats = useMemo(() => {
    // Q10
    const q10Scores = responses.map((r) => r.q10).filter((n) => n > 0);
    const q10Avg    = avg(q10Scores);
    const q10BD     = scoreBreakdown(q10Scores);

    // Q11
    const q11Counts = countOptions(responses.map((r) => r.q11));
    const q11Items: BarItem[] = Q11_OPTIONS.map((label) => ({
      label, value: q11Counts[label] ?? 0, color: Q11_COLORS[label],
    }));

    // Q12
    const q12Scores = responses.map((r) => r.q12).filter((n) => n > 0);
    const q12Avg    = avg(q12Scores);
    const q12BD     = scoreBreakdown(q12Scores);

    // Q13 quotes newest-first
    const q13Quotes = responses
      .filter((r) => r.q13.trim())
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Q14 quotes newest-first
    const q14Quotes = responses
      .filter((r) => r.q14.trim())
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return {
      q10Scores, q10Avg, q10BD, q10Count: q10Scores.length,
      q11Items,
      q12Avg, q12BD, q12Count: q12Scores.length,
      q13Quotes, q14Quotes,
      totalResponses: responses.length,
    };
  }, [responses]);

  return (
    <div className="space-y-5">
      {/* Q10 */}
      <SectionCard
        title="How well the app represents the brand"
        sub="Q10 — Having seen the dynamic pitch deck app, how well do you feel it represents the Add People brand?"
      >
        <ScoreDisplay score={stats.q10Avg} count={stats.q10Count} breakdown={stats.q10BD} showBreakdown />
        {stats.q10Scores.length > 0 && (
          <div className="mt-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#9a9490] mb-3">
              Score distribution
            </p>
            <ScoreDistributionBar scores={stats.q10Scores} total={stats.q10Count} />
          </div>
        )}
      </SectionCard>

      {/* Q11 */}
      <SectionCard
        title="Preferred brand theme"
        sub="Q11 — Which brand theme would you most want to use for client pitches?"
      >
        <HorizontalBar items={stats.q11Items} stacked total={stats.totalResponses} />
      </SectionCard>

      {/* Q12 */}
      <SectionCard
        title="Importance of customisation"
        sub="Q12 — How important is it that you can customise the pitch before sending?"
      >
        <ScoreDisplay score={stats.q12Avg} count={stats.q12Count} breakdown={stats.q12BD} showBreakdown />
      </SectionCard>

      {/* Q13 */}
      <SectionCard
        title="What would make them use this tool"
        sub={`Q13 — Open text · ${stats.q13Quotes.length} response${stats.q13Quotes.length !== 1 ? 's' : ''} · newest first`}
      >
        {stats.q13Quotes.length === 0 ? (
          <p className="font-sans text-sm text-[#9a9490] italic">No text responses yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {stats.q13Quotes.map((r) => (
              <QuoteCard key={r.responseId} text={r.q13} accentColor="#27ae60" timestamp={r.timestamp} />
            ))}
          </div>
        )}
      </SectionCard>

      {/* Q14 — prominent */}
      <SectionCard
        title="The one thing this app must do really well"
        sub={`Q14 — The most important answers · ${stats.q14Quotes.length} response${stats.q14Quotes.length !== 1 ? 's' : ''}`}
      >
        {stats.q14Quotes.length === 0 ? (
          <p className="font-sans text-sm text-[#9a9490] italic">No text responses yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {stats.q14Quotes.map((r) => (
              <QuoteCard
                key={r.responseId}
                text={r.q14}
                accentColor="#173340"
                timestamp={r.timestamp}
                prominent
              />
            ))}
          </div>
        )}
      </SectionCard>
    </div>
  );
}
