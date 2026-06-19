import type { Metadata } from 'next';
import ResultsDashboard from '@/components/results/ResultsDashboard';

export const metadata: Metadata = {
  title: 'Results · Pitch App Research · Add People',
  description: 'Live results from the sales team pitch app research survey.',
  robots: 'noindex, nofollow',
};

export default function ResultsPage() {
  return <ResultsDashboard />;
}
