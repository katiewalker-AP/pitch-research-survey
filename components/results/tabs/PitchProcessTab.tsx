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

// Distinct brand palette for Q1 options
const Q1_COLORS = ['#0A24E3', '#173340', '#6DCCF2', '#E3664F', '#FFCD63'];

// Q2: speed-coded green→red
const Q2_COLORS: Record<string, string> = {
  'Under 30 minutes': '#1a7a40',
  '30–60 minutes':    '#27ae60',
  '1–2 hours':        '#f0c040',
  'Half a day':       '#e67e22',
  'Longer than that': '#c0392b',
};

// Q5: sentiment-coded
const Q5_COLORS: Record<string, string> = {
  'Yes definitely': '#c0392b',
  'Probably':       '#e67e22',
  'Not sure':       '#f0c040',
  'No':             '#27ae60',
};

const Q1_OPTIONS = [
  'PowerPoint or Keynote manually',
  'Google Slides',
  'A template someone else made',
  'A mix of different tools',
  "I don't use pitch decks",
];
const Q2_OPTIONS = ['Under 30 minutes', '30–60 minutes', '1–2 hours', 'Half a day', 'Longer than that'];
const Q5_OPTIONS = ['Yes definitely', 'Probably', 'Not sure', 'No'];

export default function PitchProcessTab({ responses }: Props) {
  const stats = useMemo(() => {
    const q1Counts = countOptions(responses.map((r) => r.q1));
    const q2Counts = countOptions(responses.map((r) => r.q2));
    const q5Counts = countOptions(responses.map((r) => r.q5));
    const q4Scores = responses.map((r) => r.q4).filter((n) => n > 0);
    const q4Avg    = avg(q4Scores);
    const q4BD     = scoreBreakdown(q4Scores);

    const q1Items: BarItem[] = Q1_OPTIONS.map((label, i) => ({
      label, value: q1Counts[label] ?? 0, color: Q1_COLORS[i % Q1_COLORS.length],
    }));
    const q2Items: BarItem[] = Q2_OPTIONS.map((label) => ({
      label, value: q2Counts[label] ?? 0, color: Q2_COLORS[label],
    }));
    const q5Items: BarItem[] = Q5_OPTIONS.map((label) => ({
      label, value: q5Counts[label] ?? 0, color: Q5_COLORS[label],
    }));

    // Q3 quotes newest-first
    const q3Quotes = responses
      .filter((r) => r.q3.trim())
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return { q1Items, q2Items, q5Items, q4Avg, q4BD, q4Count: q4Scores.length, q3Quotes };
  }, [responses]);

  return (
    <div className="space-y-5">
      {/* Q1 */}
      <SectionCard
        title="How they currently create pitches"
        sub="Q1 — How do you currently create pitches or proposals for prospects?"
      >
        <HorizontalBar items={stats.q1Items} stacked total={responses.length} />
      </SectionCard>

      {/* Q2 */}
      <SectionCard
        title="Time to build a pitch"
        sub="Q2 — How long does it typically take you to put a pitch together from scratch?"
      >
        <HorizontalBar items={stats.q2Items} stacked total={responses.length} />
      </SectionCard>

      {/* Q3 */}
      <SectionCard
        title="Most frustrating part of the pitch process"
        sub={`Q3 — Open text · ${stats.q3Quotes.length} response${stats.q3Quotes.length !== 1 ? 's' : ''} · newest first`}
      >
        {stats.q3Quotes.length === 0 ? (
          <p className="font-sans text-sm text-[#9a9490] italic">No text responses yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {stats.q3Quotes.map((r) => (
              <QuoteCard key={r.responseId} text={r.q3} accentColor="#E3664F" timestamp={r.timestamp} />
            ))}
          </div>
        )}
      </SectionCard>

      {/* Q4 */}
      <SectionCard
        title="Brand confidence score"
        sub="Q4 — How confident are you that your current pitches accurately reflect the Add People brand?"
      >
        <ScoreDisplay score={stats.q4Avg} count={stats.q4Count} breakdown={stats.q4BD} showBreakdown />
      </SectionCard>

      {/* Q5 */}
      <SectionCard
        title="Ever lost a deal due to pitch quality"
        sub="Q5 — Have you ever lost a deal or felt underprepared because your pitch wasn't strong enough?"
      >
        <HorizontalBar items={stats.q5Items} stacked total={responses.length} />
      </SectionCard>
    </div>
  );
}
