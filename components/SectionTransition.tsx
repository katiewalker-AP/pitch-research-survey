'use client';

import { useEffect } from 'react';

interface Props {
  label: string;
  onDone: () => void;
}

export default function SectionTransition({ label, onDone }: Props) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1600);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-cream pointer-events-none">
      <div className="section-banner text-center px-6">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-electric-blue mb-3">
          Section
        </p>
        <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-deep-blue uppercase tracking-widest">
          {label}
        </h2>
      </div>
    </div>
  );
}
