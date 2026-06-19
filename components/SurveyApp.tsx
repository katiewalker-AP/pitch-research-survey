'use client';

import { useState, useCallback } from 'react';
import { QUESTIONS, SECTIONS, TOTAL_QUESTIONS } from '@/lib/questions';
import IntroScreen from './IntroScreen';
import PreviewScreen from './PreviewScreen';
import ThankYouScreen from './ThankYouScreen';
import ProgressHeader from './ProgressHeader';
import SectionTransition from './SectionTransition';
import QuestionScreen from './QuestionScreen';

// ─── Screen types ─────────────────────────────────────────────────────────────

type Screen =
  | { type: 'intro' }
  | { type: 'section-transition'; sectionIndex: number; nextScreen: Screen }
  | { type: 'question'; questionIndex: number }
  | { type: 'preview' }
  | { type: 'submitting' }
  | { type: 'thank-you' }
  | { type: 'error'; message: string };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generateResponseId(): string {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).slice(2, 8)
  ).toUpperCase();
}

function screenAfterQuestion(questionIndex: number): Screen {
  if (questionIndex === 4) {
    // After Q5: section 2 transition → Q6
    return { type: 'section-transition', sectionIndex: 1, nextScreen: { type: 'question', questionIndex: 5 } };
  }
  if (questionIndex === 8) {
    // After Q9: section 3 transition → preview → Q10
    return {
      type: 'section-transition',
      sectionIndex: 2,
      nextScreen: { type: 'preview' },
    };
  }
  if (questionIndex < TOTAL_QUESTIONS - 1) {
    return { type: 'question', questionIndex: questionIndex + 1 };
  }
  return { type: 'submitting' };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SurveyApp() {
  const [screen, setScreen] = useState<Screen>({ type: 'intro' });
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [answeredCount, setAnsweredCount] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Derived: current section index for the progress header
  const currentSectionIndex = (() => {
    if (screen.type === 'question') {
      return QUESTIONS[screen.questionIndex].sectionIndex;
    }
    if (screen.type === 'section-transition') return screen.sectionIndex;
    if (screen.type === 'preview') return 2;
    return 0;
  })();

  const currentQuestionNumber = screen.type === 'question' ? screen.questionIndex + 1 : 0;
  const showHeader = screen.type !== 'intro' && screen.type !== 'thank-you';

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleStart = useCallback(() => {
    setScreen({ type: 'section-transition', sectionIndex: 0, nextScreen: { type: 'question', questionIndex: 0 } });
  }, []);

  const handleSectionDone = useCallback((nextScreen: Screen) => {
    setScreen(nextScreen);
  }, []);

  const handlePreviewContinue = useCallback(() => {
    setScreen({ type: 'question', questionIndex: 9 }); // Q10
  }, []);

  const handleAnswer = useCallback(async (questionIndex: number, value: unknown) => {
    const question = QUESTIONS[questionIndex];
    const next = screenAfterQuestion(questionIndex);

    if (next.type === 'submitting') {
      // Keep user on the last question while we submit
      setIsSubmitting(true);
      setSubmitError(null);

      const allAnswers = { ...answers, [question.id]: value };
      const payload = {
        responseId: generateResponseId(),
        timestamp:  new Date().toISOString(),
        answers:    allAnswers,
      };

      try {
        const res = await fetch('/api/submit', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);

        setAnswers(allAnswers);
        setAnsweredCount(answeredCount + 1);
        setScreen({ type: 'thank-you' });
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Something went wrong. Please try again.';
        setSubmitError(message);
        // Stay on the last question — user can retry
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setAnswers({ ...answers, [question.id]: value });
      setAnsweredCount(answeredCount + 1);
      setScreen(next);
    }
  }, [answers, answeredCount]);

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      {showHeader && (
        <ProgressHeader
          currentQuestionNumber={currentQuestionNumber}
          answeredCount={answeredCount}
          sectionIndex={currentSectionIndex}
        />
      )}

      {/* Section transition overlay */}
      {screen.type === 'section-transition' && (
        <SectionTransition
          key={screen.sectionIndex}
          label={SECTIONS[screen.sectionIndex].label}
          // Capture nextScreen now so the closure is stable
          onDone={((ns) => () => handleSectionDone(ns))(screen.nextScreen)}
        />
      )}

      {/* Main content */}
      {screen.type === 'intro' && <IntroScreen onStart={handleStart} />}

      {screen.type === 'question' && (
        <div className="flex flex-col min-h-[calc(100vh-var(--header-h,120px))]">
          <QuestionScreen
            key={screen.questionIndex}
            question={QUESTIONS[screen.questionIndex]}
            questionNumber={screen.questionIndex + 1}
            initialValue={answers[QUESTIONS[screen.questionIndex].id]}
            onNext={(value) => handleAnswer(screen.questionIndex, value)}
            isLast={screen.questionIndex === TOTAL_QUESTIONS - 1}
          />

          {/* Inline submission error */}
          {submitError && screen.questionIndex === TOTAL_QUESTIONS - 1 && (
            <div className="px-5 pb-6 max-w-xl mx-auto w-full">
              <div className="bg-[#fff0ee] border border-orange rounded-lg px-5 py-4 flex items-start gap-3">
                <svg className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9v4a1 1 0 102 0V9a1 1 0 10-2 0zm0-3.5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <p className="font-sans text-sm text-deep-blue font-medium mb-1">
                    Submission failed
                  </p>
                  <p className="font-sans text-sm text-[#4a5568]">{submitError}</p>
                </div>
              </div>
            </div>
          )}

          {/* Loading overlay during submit */}
          {isSubmitting && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream/80 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-2 border-border border-t-electric-blue rounded-full animate-spin" />
                <p className="font-sans text-sm text-[#4a5568]">Submitting your answers…</p>
              </div>
            </div>
          )}
        </div>
      )}

      {screen.type === 'preview' && <PreviewScreen onContinue={handlePreviewContinue} />}
      {screen.type === 'thank-you' && <ThankYouScreen />}
    </>
  );
}
