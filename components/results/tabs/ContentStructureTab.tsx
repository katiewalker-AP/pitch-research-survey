'use client';

import { useMemo } from 'react';
import type { SurveyResponse } from '@/lib/analyzeResults';
import { avg, scoreBreakdown, avgRankPositions } from '@/lib/analyzeResults';
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

const Q6_OPTIONS = [
  "The prospect's current situation",
  'Our recommended solution',
  'Pricing breakdown',
  'Timeline',
  'Case studies and social proof',
  'Team credentials',
  'ROI projections',
  'A personalised opening hook',
];

export default function ContentStructureTab({ responses }: Props) {
  const stats = useMemo(() => {
    // Q6 — multi-select: count each option across all responses
    const q6Counts: Record<string, number> = {};
    for (const r of responses) {
      for (const opt of r.q6) {
        if (opt) q6Counts[opt] = (q6Counts[opt] ?? 0) + 1;
      }
    }
    const q6Items: BarItem[] = Q6_OPTIONS.map((label) => ({
      label, value: q6Counts[label] ?? 0, color: '#0A24E3',
    }));

    // Q7
    const q7Scores = responses.map((r) => r.q7).filter((n) => n > 0);
    const q7Avg    = avg(q7Scores);
    const q7BD     = scoreBreakdown(q7Scores);

    // Q8 quotes newest-first
    const q8Quotes = responses
      .filter((r) => r.q8.trim())
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Q9 average rank
    const q9RankArrays = responses.map((r) => r.q9).filter((a) => a.length > 0);
    const q9Ranked     = avgRankPositions(q9RankArrays);

    return { q6Items, q7Avg, q7BD, q7Count: q7Scores.length, q8Quotes, q9Ranked, totalResponses: responses.length };
  }, [responses]);

  return (
    <div className="space-y-5">
      {/* Q6 */}
      <SectionCard
        title="Most useful pitch sections"
        sub={`Q6 — Multi-select · ${stats.totalResponses} respondents`}
      >
        <HorizontalBar items={stats.q6Items} stacked={false} total={stats.totalResponses} showCount />
      </SectionCard>

      {/* Q7 */}
      <SectionCard
        title="Importance of personalisation"
        sub="Q7 — How important is it that a pitch feels personalised to the specific prospect?"
      >
        <ScoreDisplay score={stats.q7Avg} count={stats.q7Count} breakdown={stats.q7BD} showBreakdown />
      </SectionCard>

      {/* Q8 */}
      <SectionCard
        title="Content they wish they had easier access to"
        sub={`Q8 — Open text · ${stats.q8Quotes.length} response${stats.q8Quotes.length !== 1 ? 's' : ''} · newest first`}
      >
        {stats.q8Quotes.length === 0 ? (
          <p className="font-sans text-sm text-[#9a9490] italic">No text responses yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {stats.q8Quotes.map((r) => (
              <QuoteCard key={r.responseId} text={r.q8} accentColor="#0A24E3" timestamp={r.timestamp} />
            ))}
          </div>
        )}
      </SectionCard>

      {/* Q9 */}
      <SectionCard
        title="Preferred pitch order"
        sub={`Q9 — Average position across ${stats.totalResponses} responses`}
      >
        {stats.q9Ranked.length === 0 ? (
          <p className="font-sans text-sm text-[#9a9490] italic">No ranking data yet.</p>
        ) : (
          <ol className="flex flex-col gap-3">
            {stats.q9Ranked.map((item, idx) => (
              <li key={item.item} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-electric-blue flex items-center justify-center font-sans font-bold text-sm text-white">
                  {idx + 1}
                </span>
                <div>
                  <p className="font-sans text-sm font-medium text-deep-blue">{item.item}</p>
                  <p className="font-sans text-xs text-[#9a9490]">
                    avg position {item.avgPos.toFixed(1)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </SectionCard>
    </div>
  );
}
