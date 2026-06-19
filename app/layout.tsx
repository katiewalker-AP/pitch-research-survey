import type { Metadata } from 'next';
import { Lexend, Playfair_Display } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lexend',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pitch App Research · Add People',
  description: 'Help shape the pitch deck tool we\'re building for the sales team.',
  robots: 'noindex, nofollow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lexend.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream">{children}</body>
    </html>
  );
}
