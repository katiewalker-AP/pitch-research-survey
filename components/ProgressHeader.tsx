'use client';

import { TOTAL_QUESTIONS, SECONDS_PER_QUESTION, SECTIONS } from '@/lib/questions';

interface Props {
  currentQuestionNumber: number; // 1-indexed, 0 = not on a question yet
  answeredCount: number;
  sectionIndex: number;
}

function formatTimeRemaining(totalSeconds: number): string {
  if (totalSeconds <= 0) return '< 1 min left';
  const minutes = Math.ceil(totalSeconds / 60);
  return `~${minutes} min${minutes !== 1 ? 's' : ''} left`;
}

export default function ProgressHeader({ currentQuestionNumber, answeredCount, sectionIndex }: Props) {
  const progress = answeredCount / TOTAL_QUESTIONS;
  const secondsRemaining = (TOTAL_QUESTIONS - answeredCount) * SECONDS_PER_QUESTION;
  const section = SECTIONS[sectionIndex] ?? SECTIONS[0];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main bar */}
      <div className="bg-deep-blue px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="pulse-dot w-2 h-2 rounded-full bg-yellow flex-shrink-0"
            aria-hidden="true"
          />
          <span className="font-sans font-semibold text-white text-sm tracking-tight">
            Add People
          </span>
        </div>
        {/* Mobile: hide section detail, show minimal text */}
        <span className="font-sans text-[11px] text-white/60 hidden sm:block">
          Pitch App Research
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full bg-white/20 bg-deep-blue">
        <div
          className="h-full bg-electric-blue transition-all duration-500 ease-out"
          style={{ width: `${Math.round(progress * 100)}%` }}
          role="progressbar"
          aria-valuenow={answeredCount}
          aria-valuemin={0}
          aria-valuemax={TOTAL_QUESTIONS}
        />
      </div>

      {/* Meta row */}
      <div className="bg-deep-blue border-t border-white/10 px-5 py-2">
        {/* Desktop: three-column */}
        <div className="hidden sm:grid grid-cols-3 items-center text-[11px]">
          <span className="font-sans text-white/60">
            {currentQuestionNumber > 0
              ? `Question ${currentQuestionNumber} of ${TOTAL_QUESTIONS}`
              : ''}
          </span>
          <span className="font-sans font-medium text-electric-blue uppercase tracking-widest text-center">
            {section.label}
          </span>
          <span className="font-sans text-white/60 text-right">
            {formatTimeRemaining(secondsRemaining)}
          </span>
        </div>
        {/* Mobile: question count only */}
        <div className="flex sm:hidden justify-between items-center text-[11px]">
          <span className="font-sans text-white/60">
            {currentQuestionNumber > 0
              ? `Q${currentQuestionNumber} of ${TOTAL_QUESTIONS}`
              : ''}
          </span>
          <span className="font-sans text-white/60">
            {formatTimeRemaining(secondsRemaining)}
          </span>
        </div>
      </div>
    </header>
  );
}
