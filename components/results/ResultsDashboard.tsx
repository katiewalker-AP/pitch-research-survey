'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { ResultsApiResponse, SurveyResponse } from '@/lib/analyzeResults';
import LoadingSkeleton    from './LoadingSkeleton';
import OverviewTab        from './tabs/OverviewTab';
import PitchProcessTab    from './tabs/PitchProcessTab';
import ContentStructureTab from './tabs/ContentStructureTab';
import BrandAppTab        from './tabs/BrandAppTab';

// ─── Constants ────────────────────────────────────────────────────────────────

const REFRESH_MS     = 60_000;
const MIN_RESPONSES  = 3;

const TABS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'pitch',     label: 'Pitch Process' },
  { id: 'content',   label: 'Content & Structure' },
  { id: 'brand',     label: 'Brand & App' },
] as const;

type TabId = (typeof TABS)[number]['id'];

// ─── Header ───────────────────────────────────────────────────────────────────

function DashboardHeader({
  count,
  lastUpdated,
  justRefreshed,
  activeTab,
  onTabChange,
}: {
  count:         number;
  lastUpdated:   Date | null;
  justRefreshed: boolean;
  activeTab:     TabId;
  onTabChange:   (t: TabId) => void;
}) {
  const fmt = (d: Date) =>
    d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Brand bar */}
      <div className="bg-deep-blue px-5 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="pulse-dot w-2.5 h-2.5 rounded-full bg-yellow flex-shrink-0" aria-hidden="true" />
          <span className="font-serif font-bold text-white text-base sm:text-lg tracking-tight">
            Add People · Pitch App Research
          </span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {/* Response count badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-blue text-white font-sans text-xs font-semibold">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 10c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {count} response{count !== 1 ? 's' : ''}
          </span>

          {/* Last updated */}
          {lastUpdated && (
            <span className="font-sans text-xs text-white/60 flex items-center gap-1.5">
              {justRefreshed ? (
                <span className="text-[#6DCCF2] font-medium animate-fade-in">Updated just now</span>
              ) : (
                <>Updated {fmt(lastUpdated)}</>
              )}
            </span>
          )}
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-deep-blue border-t border-white/10 overflow-x-auto">
        <nav className="flex min-w-max px-5" aria-label="Results sections">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={[
                'px-4 py-3 font-sans text-sm font-medium transition-colors whitespace-nowrap border-b-2',
                activeTab === tab.id
                  ? 'border-electric-blue text-white'
                  : 'border-transparent text-white/50 hover:text-white/80',
              ].join(' ')}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ─── Error state ──────────────────────────────────────────────────────────────

function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-5 text-center gap-5">
      <div className="w-14 h-14 rounded-full bg-[#fdecea] flex items-center justify-center">
        <svg className="w-7 h-7 text-[#c0392b]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <p className="font-serif font-bold text-deep-blue text-xl mb-2">Couldn't load results</p>
        <p className="font-sans text-sm text-[#4a5568] max-w-sm">{message}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="px-6 py-3 rounded-lg bg-electric-blue text-white font-sans font-semibold text-sm hover:bg-[#0018c4] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState({ count }: { count: number }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-5 text-center gap-4">
      <div className="w-14 h-14 rounded-full bg-[#eef1ff] flex items-center justify-center">
        <svg className="w-7 h-7 text-electric-blue" viewBox="0 0 24 24" fill="none">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <div>
        <p className="font-serif font-bold text-deep-blue text-xl mb-2">Not enough responses yet</p>
        <p className="font-sans text-sm text-[#4a5568]">
          {count === 0
            ? 'No responses have been submitted yet. Check back soon.'
            : `${count} response${count !== 1 ? 's' : ''} received so far — dashboard unlocks at ${MIN_RESPONSES}.`}
        </p>
      </div>
    </div>
  );
}

// ─── Main dashboard ───────────────────────────────────────────────────────────

export default function ResultsDashboard() {
  const [responses,    setResponses]    = useState<SurveyResponse[]>([]);
  const [loading,      setLoading]      = useState(true);
  const [error,        setError]        = useState<string | null>(null);
  const [lastUpdated,  setLastUpdated]  = useState<Date | null>(null);
  const [justRefreshed, setJustRefreshed] = useState(false);
  const [activeTab,    setActiveTab]    = useState<TabId>('overview');

  const refreshTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchData = useCallback(async (isRefresh = false) => {
    try {
      const res = await fetch('/api/results', { cache: 'no-store' });
      if (!res.ok) {
        const body = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      const data: ResultsApiResponse = await res.json();
      setResponses(data.responses);
      setError(null);
      setLastUpdated(new Date());

      if (isRefresh) {
        setJustRefreshed(true);
        if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
        refreshTimerRef.current = setTimeout(() => setJustRefreshed(false), 3000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load results');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load + polling
  useEffect(() => {
    fetchData(false);
    const interval = setInterval(() => fetchData(true), REFRESH_MS);
    return () => {
      clearInterval(interval);
      if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
    };
  }, [fetchData]);

  // ── Render ──────────────────────────────────────────────────────────────────

  const count = responses.length;

  // Show header even during loading/error so the UI feels anchored
  const showHeader = !loading;

  return (
    <div className="min-h-screen bg-cream">
      {showHeader && (
        <DashboardHeader
          count={count}
          lastUpdated={lastUpdated}
          justRefreshed={justRefreshed}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}

      {/* Content */}
      {loading && (
        <div>
          {/* Minimal header placeholder during load */}
          <div className="bg-deep-blue px-5 py-3 flex items-center gap-2.5">
            <span className="pulse-dot w-2.5 h-2.5 rounded-full bg-yellow" />
            <span className="font-serif font-bold text-white text-lg">Add People · Pitch App Research</span>
          </div>
          <div className="bg-deep-blue border-t border-white/10 h-11" />
          <LoadingSkeleton />
        </div>
      )}

      {!loading && error && (
        <ErrorState message={error} onRetry={() => fetchData(false)} />
      )}

      {!loading && !error && count < MIN_RESPONSES && (
        <EmptyState count={count} />
      )}

      {!loading && !error && count >= MIN_RESPONSES && (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-0">
          {activeTab === 'overview' && <OverviewTab         responses={responses} />}
          {activeTab === 'pitch'    && <PitchProcessTab     responses={responses} />}
          {activeTab === 'content'  && <ContentStructureTab responses={responses} />}
          {activeTab === 'brand'    && <BrandAppTab         responses={responses} />}
        </main>
      )}
    </div>
  );
}
