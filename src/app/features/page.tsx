import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features — WhatsApp Booking, Smart Calendar, Payments & More',
  description:
    'Explore Wiksta features: WhatsApp-first booking, smart calendar management, instant payment collection, customer management, and real-time analytics for sports venues.',
  openGraph: {
    title: 'Wiksta Features — Everything Your Sports Venue Needs',
    description:
      'WhatsApp booking, smart calendar, instant payments, customer management, and analytics — built for sports venues.',
  },
};

const FEATURES = [
  {
    title: 'WhatsApp Booking',
    description:
      'Players book directly through WhatsApp. No app download, no sign-up form. They just send a message and your slots fill up.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    details: [
      'Natural language booking — players just say "book turf tomorrow 6pm"',
      'Automated confirmations and reminders via WhatsApp',
      'No app download required for customers',
      'Works on any phone with WhatsApp',
    ],
  },
  {
    title: 'Smart Calendar',
    description:
      'Automate slot availability, handle conflicts, and manage cancellations without manual work. Your calendar stays in sync, always.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    details: [
      'Auto-update availability when bookings come in',
      'Conflict detection for overlapping slots',
      'Cancellation handling with automatic slot release',
      'Recurring slot templates for regular schedules',
    ],
  },
  {
    title: 'Instant Payment Collection',
    description:
      'Collect UPI, cards, and net banking at the time of booking. No more chasing payments or keeping track of dues.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    details: [
      'UPI, debit/credit cards, net banking',
      'Payment at booking — zero pending dues',
      'Automatic receipts to customers via WhatsApp',
      'Integrated with PayU, Razorpay, and Paytm',
    ],
  },
  {
    title: 'Customer Management',
    description:
      'Know your regulars. Track booking history, preferences, and engagement — so you can bring them back again and again.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    details: [
      'Customer profiles with booking history',
      'Repeat customer recognition and engagement',
      'WhatsApp contact sync',
      'Group and team booking management',
    ],
  },
  {
    title: 'Real-Time Analytics',
    description:
      'See which slots fill fastest, peak booking hours, revenue trends, and occupancy rates — all from one dashboard.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    details: [
      'Occupancy rates by day, week, month',
      'Revenue tracking and trend analysis',
      'Peak hour identification',
      'Most popular slots and activities',
    ],
  },
  {
    title: 'Multi-Venue Dashboard',
    description:
      'Manage multiple locations, courts, and facility types from a single dashboard. Switch contexts instantly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    details: [
      'One dashboard for all your venues',
      'Per-venue performance breakdowns',
      'Unified booking calendar across locations',
      'Staff access controls per venue',
    ],
  },
] as const;

const WHATSAPP_URL = 'https://wa.me/919030354374?text=Hi%2C%20I%27m%20interested%20in%20Wiksta%20for%20my%20venue';

export default function FeaturesPage(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Built for sports venues
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every feature designed to help turf owners, court managers, and facility operators fill more slots and collect more revenue.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  {feature.title}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
                <ul className="mt-4 space-y-2" role="list">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-whatsapp"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get a personalized walkthrough on WhatsApp. We&apos;ll set up your venue in minutes.
          </p>
          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition-colors hover:bg-whatsapp-dark"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.38 1.245 15.324 0 12.047 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
              </svg>
              Get a Demo on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}