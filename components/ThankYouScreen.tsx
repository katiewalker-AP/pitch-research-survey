'use client';

import { THANK_YOU } from '@/lib/questions';

export default function ThankYouScreen() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-5 py-16 screen-enter">
      <div className="w-full max-w-md text-center">
        {/* Animated checkmark */}
        <div className="circle-scale mx-auto w-20 h-20 rounded-full bg-[#eef1ff] flex items-center justify-center mb-8">
          <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="36" fill="#eef1ff" />
            <path
              className="check-path"
              d="M26 41l10 10 18-18"
              stroke="#0A24E3"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="font-serif font-bold text-deep-blue text-3xl sm:text-4xl leading-tight mb-5">
          {THANK_YOU.heading}
        </h1>

        {/* Body */}
        <p className="font-sans text-base text-[#4a5568] leading-relaxed mb-12">
          {THANK_YOU.body}
        </p>

        {/* Wordmark */}
        <div className="flex items-center justify-center gap-2 text-[#9a9490]">
          <span className="w-2 h-2 rounded-full bg-yellow flex-shrink-0" aria-hidden="true" />
          <span className="font-sans font-semibold text-sm text-[#9a9490]">Add People</span>
        </div>
      </div>
    </div>
  );
}
