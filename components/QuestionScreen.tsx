'use client';

import { useState } from 'react';
import { Question } from '@/lib/questions';
import MultipleChoice from './question-types/MultipleChoice';
import MultiSelect from './question-types/MultiSelect';
import Scale10 from './question-types/Scale10';
import Rank from './question-types/Rank';
import OpenText from './question-types/OpenText';

interface Props {
  question: Question;
  questionNumber: number;
  initialValue: unknown;
  onNext: (value: unknown) => void;
  isLast: boolean;
}

function getDefaultValue(question: Question): unknown {
  switch (question.type) {
    case 'MULTIPLE_CHOICE': return null;
    case 'MULTI_SELECT':    return [];
    case 'SCALE_10':        return null;
    case 'RANK':            return question.rankItems ?? [];
    case 'OPEN_TEXT':       return '';
  }
}

function hasValue(question: Question, value: unknown): boolean {
  switch (question.type) {
    case 'MULTIPLE_CHOICE': return value !== null;
    case 'MULTI_SELECT':    return Array.isArray(value) && value.length > 0;
    case 'SCALE_10':        return value !== null;
    case 'RANK':            return Array.isArray(value) && value.length > 0;
    case 'OPEN_TEXT':       return typeof value === 'string' && value.trim().length > 0;
  }
}

// This component is always mounted with key={questionIndex}, so it naturally
// remounts on each question — no need to track previous question in an effect.
export default function QuestionScreen({ question, questionNumber, initialValue, onNext, isLast }: Props) {
  const [value, setValue] = useState<unknown>(initialValue ?? getDefaultValue(question));
  const canProceed = hasValue(question, value);

  const handleNext = () => {
    if (canProceed) onNext(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (question.type === 'OPEN_TEXT' && e.key === 'Enter' && e.metaKey) {
      handleNext();
    }
  };

  return (
    <div className="screen-enter w-full max-w-xl mx-auto px-5 py-10 sm:py-14">
      {/* Question card */}
      <div
        className="bg-white border border-border rounded-xl px-6 py-7 sm:px-8 sm:py-9 shadow-sm mb-6"
        onKeyDown={handleKeyDown}
      >
        {/* Question number chip */}
        <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 rounded-full bg-cream border border-border">
          <span className="font-sans text-xs font-semibold text-electric-blue uppercase tracking-widest">
            Q{questionNumber}
          </span>
        </div>

        {/* Question text */}
        <h2 className="font-serif font-bold text-deep-blue text-xl sm:text-2xl leading-snug mb-7">
          {question.text}
        </h2>

        {/* Answer input */}
        {question.type === 'MULTIPLE_CHOICE' && (
          <MultipleChoice
            options={question.options ?? []}
            value={value as string | null}
            onChange={setValue}
          />
        )}
        {question.type === 'MULTI_SELECT' && (
          <MultiSelect
            options={question.options ?? []}
            value={value as string[]}
            onChange={setValue}
          />
        )}
        {question.type === 'SCALE_10' && (
          <Scale10
            value={value as number | null}
            onChange={setValue}
            leftLabel={question.scaleLabels?.left ?? ''}
            rightLabel={question.scaleLabels?.right ?? ''}
          />
        )}
        {question.type === 'RANK' && (
          <Rank
            items={value as string[]}
            onChange={setValue}
          />
        )}
        {question.type === 'OPEN_TEXT' && (
          <OpenText
            value={value as string}
            onChange={setValue}
            placeholder={question.placeholder}
          />
        )}
      </div>

      {/* Next / Submit button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={!canProceed}
        className={[
          'w-full py-4 px-6 rounded-lg font-sans font-semibold text-base',
          'transition-all duration-150',
          canProceed
            ? 'bg-electric-blue text-white hover:bg-[#0018c4] active:scale-[0.99]'
            : 'bg-[#d0cdc9] text-white cursor-not-allowed',
        ].join(' ')}
      >
        {isLast ? 'Submit →' : 'Next →'}
      </button>

      {/* Contextual hints */}
      {question.type === 'OPEN_TEXT' && (
        <p className="mt-3 text-center font-sans text-xs text-[#9a9490]">
          Press ⌘ + Enter to continue
        </p>
      )}
      {question.type === 'RANK' && (
        <p className="mt-3 text-center font-sans text-xs text-[#9a9490]">
          Drag the items into your preferred order, then click Next
        </p>
      )}
    </div>
  );
}
