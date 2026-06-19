'use client';

import { useState } from 'react';
import { PREVIEW } from '@/lib/questions';

interface Props {
  onContinue: () => void;
}

export default function PreviewScreen({ onContinue }: Props) {
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => setIframeLoaded(true);

  // Treat a very fast "load" event (before content renders) as potential block
  // We rely on a timeout: if the iframe doesn't visually load content, show fallback.
  const handleIframeError = () => setIframeError(true);

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center px-5 py-10 sm:py-16 screen-enter">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <h2 className="font-serif font-bold text-deep-blue text-3xl sm:text-4xl leading-tight mb-4">
          {PREVIEW.heading}
        </h2>
        <p className="font-sans text-base text-[#4a5568] leading-relaxed mb-8 max-w-xl">
          {PREVIEW.body}
        </p>

        {/* Iframe / fallback */}
        <div className="w-full rounded-xl overflow-hidden border border-border shadow-md mb-6 bg-white">
          {!iframeError ? (
            <div className="relative">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-cream">
                  <div className="flex flex-col items-center gap-3 text-[#9a9490]">
                    <div className="w-8 h-8 border-2 border-border border-t-electric-blue rounded-full animate-spin" />
                    <span className="font-sans text-sm">Loading preview…</span>
                  </div>
                </div>
              )}
              <iframe
                src={PREVIEW.url}
                title="Dynamic Pitch Deck App Preview"
                className="w-full sm:h-[600px] h-[320px] border-0"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                style={{ opacity: iframeLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-6 text-center gap-6">
              <div className="w-14 h-14 rounded-full bg-[#f0f3ff] flex items-center justify-center">
                <svg className="w-7 h-7 text-electric-blue" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-sans text-base text-[#4a5568] leading-relaxed max-w-sm">
                {PREVIEW.fallbackMessage}
              </p>
              <a
                href={PREVIEW.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border-2 border-deep-blue text-deep-blue font-sans font-semibold text-sm hover:bg-deep-blue hover:text-white transition-colors"
              >
                {PREVIEW.fullscreenLabel}
              </a>
            </div>
          )}
        </div>

        {/* Open in full screen link */}
        {!iframeError && (
          <div className="flex justify-center mb-6">
            <a
              href={PREVIEW.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-deep-blue text-deep-blue bg-white font-sans font-semibold text-sm hover:bg-deep-blue hover:text-white transition-colors"
            >
              {PREVIEW.fullscreenLabel}
            </a>
          </div>
        )}

        {/* Continue CTA */}
        <button
          type="button"
          onClick={onContinue}
          className="w-full py-4 px-6 rounded-lg bg-electric-blue text-white font-sans font-semibold text-base hover:bg-[#0018c4] active:scale-[0.99] transition-all duration-150"
        >
          {PREVIEW.cta}
        </button>
      </div>
    </div>
  );
}
