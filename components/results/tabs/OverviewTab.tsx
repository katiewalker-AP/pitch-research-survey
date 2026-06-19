'use client';

import { useMemo } from 'react';
import type { SurveyResponse } from '@/lib/analyzeResults';
import { avg, mostCommon, wordFrequency, scoreTrafficLight } from '@/lib/analyzeResults';
import MetricCard from '../MetricCard';
import WordCloud  from '../WordCloud';

interface Props { responses: SurveyResponse[] }

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-border rounded-xl p-6">
      <h3 className="font-serif font-bold text-deep-blue text-lg mb-5">{title}</h3>
      {children}
    </div>
  );
}

export default function OverviewTab({ responses }: Props) {
  const stats = useMemo(() => {
    const q4Avg  = avg(responses.map((r) => r.q4));
    const q7Avg  = avg(responses.map((r) => r.q7));
    const q10Avg = avg(responses.map((r) => r.q10));
    const q12Avg = avg(responses.map((r) => r.q12));

    const openTexts = responses.flatMap((r) => [r.q3, r.q8, r.q13, r.q14]);
    const freq      = wordFrequency(openTexts);

    return {
      q4Avg,  q7Avg, q10Avg, q12Avg,
      q4TL:   scoreTrafficLight(q4Avg),
      q7TL:   scoreTrafficLight(q7Avg),
      q10TL:  scoreTrafficLight(q10Avg),
      q12TL:  scoreTrafficLight(q12Avg),
      q1Mode: mostCommon(responses.map((r) => r.q1).filter(Boolean)),
      q2Mode: mostCommon(responses.map((r) => r.q2).filter(Boolean)),
      wordFreq: freq,
    };
  }, [responses]);

  const q2Color = (val: string) => {
    if (val === 'Under 30 minutes') return '#1a7a40';
    if (val === '30–60 minutes')    return '#27ae60';
    if (val === '1–2 hours')        return '#f0c040';
    if (val === 'Half a day')       return '#e67e22';
    return '#c0392b';
  };

  return (
    <div className="space-y-6">
      {/* Metric grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <MetricCard
          label="Avg brand confidence"
          value={stats.q4Avg > 0 ? `${stats.q4Avg.toFixed(1)} / 10` : '—'}
          valueColor={stats.q4TL.textColor}
          bgColor={stats.q4TL.bgColor}
          subLabel={`Q4 · ${stats.q4TL.label}`}
          badge="Q4"
        />
        <MetricCard
          label="Avg personalisation importance"
          value={stats.q7Avg > 0 ? `${stats.q7Avg.toFixed(1)} / 10` : '—'}
          valueColor={stats.q7TL.textColor}
          bgColor={stats.q7TL.bgColor}
          subLabel={`Q7 · ${stats.q7TL.label}`}
          badge="Q7"
        />
        <MetricCard
          label="Avg app brand score"
          value={stats.q10Avg > 0 ? `${stats.q10Avg.toFixed(1)} / 10` : '—'}
          valueColor={stats.q10TL.textColor}
          bgColor={stats.q10TL.bgColor}
          subLabel={`Q10 · ${stats.q10TL.label}`}
          badge="Q10"
        />
        <MetricCard
          label="Avg customisation importance"
          value={stats.q12Avg > 0 ? `${stats.q12Avg.toFixed(1)} / 10` : '—'}
          valueColor={stats.q12TL.textColor}
          bgColor={stats.q12TL.bgColor}
          subLabel={`Q12 · ${stats.q12TL.label}`}
          badge="Q12"
        />
        <MetricCard
          label="Most common pitch method"
          value={stats.q1Mode || '—'}
          valueColor="#173340"
          subLabel="Q1 · most selected"
          badge="Q1"
        />
        <MetricCard
          label="Typical time to build"
          value={stats.q2Mode || '—'}
          valueColor={stats.q2Mode ? q2Color(stats.q2Mode) : '#9a9490'}
          subLabel="Q2 · most common"
          badge="Q2"
        />
      </div>

      {/* Word cloud */}
      <SectionCard title="Key themes across open text responses">
        <p className="font-sans text-xs text-[#9a9490] mb-4">
          Drawn from Q3, Q8, Q13, Q14 — word size reflects frequency
        </p>
        <WordCloud frequencies={stats.wordFreq} maxWords={50} />
      </SectionCard>
    </div>
  );
}
