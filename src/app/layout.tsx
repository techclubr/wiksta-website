import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PlausibleAnalytics } from './components/PlausibleAnalytics';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Wiksta — Run Your Sports Venue on WhatsApp',
    template: '%s | Wiksta',
  },
  description:
    'Wiksta is the WhatsApp-first sports venue management platform. Manage bookings, collect payments, and grow your turf, court, or facility — all through WhatsApp.',
  keywords: [
    'sports venue management',
    'WhatsApp booking',
    'turf booking',
    'court booking',
    'sports facility software',
    'venue management',
    'online booking',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://wiksta.com',
    siteName: 'Wiksta',
    title: 'Wiksta — Run Your Sports Venue on WhatsApp',
    description:
      'Manage bookings, collect payments, and grow your sports facility — all through WhatsApp.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wiksta — Run Your Sports Venue on WhatsApp',
    description:
      'Manage bookings, collect payments, and grow your sports facility — all through WhatsApp.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PlausibleAnalytics />
      </body>
    </html>
  );
}