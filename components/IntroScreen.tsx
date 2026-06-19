'use client';

import { INTRO } from '@/lib/questions';

interface Props {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <header className="bg-deep-blue px-5 py-4 flex items-center gap-3">
        <span className="pulse-dot w-2.5 h-2.5 rounded-full bg-yellow flex-shrink-0" aria-hidden="true" />
        <span className="font-serif font-bold text-white text-lg tracking-tight">
          Add People · Pitch App Research
        </span>
      </header>

      {/* Body */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-12">
        <div className="w-full max-w-xl screen-enter">
          {/* Time badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-deep-blue bg-cream text-deep-blue">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-sans font-semibold text-sm">{INTRO.timeEstimate}</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif font-bold text-deep-blue text-3xl sm:text-4xl leading-tight mb-5">
            {INTRO.heading}
          </h1>

          {/* Body text */}
          <p className="font-sans text-base text-[#4a5568] leading-relaxed mb-10">
            {INTRO.body}
          </p>

          {/* Journey stepper */}
          <div className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#9a9490] mb-4">
              What we'll cover
            </p>
            <div className="flex items-start gap-0">
              {INTRO.journeySteps.map((step, i) => (
                <div key={step} className="flex-1 flex flex-col items-center relative">
                  {/* Connector line */}
                  {i < INTRO.journeySteps.length - 1 && (
                    <div className="absolute top-3 left-1/2 w-full h-px bg-border z-0" />
                  )}
                  <div className="relative z-10 w-6 h-6 rounded-full border-2 border-border bg-cream flex items-center justify-center mb-2">
                    <span className="font-sans text-[10px] font-semibold text-[#9a9490]">{i + 1}</span>
                  </div>
                  <span className="font-sans text-[11px] text-[#9a9490] text-center leading-tight px-1">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={onStart}
            className="w-full py-4 px-6 rounded-lg bg-electric-blue text-white font-sans font-semibold text-base hover:bg-[#0018c4] active:scale-[0.99] transition-all duration-150"
          >
            {INTRO.cta}
          </button>
        </div>
      </main>
    </div>
  );
}
