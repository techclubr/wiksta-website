import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing — Pay Only When You Get Bookings',
  description:
    'Wiksta pricing is simple: pay a small commission per booking. No monthly fees, no setup costs. Start free, scale as you grow.',
  openGraph: {
    title: 'Wiksta Pricing — Per-Booking Model, No Monthly Fees',
    description:
      'Pay only when you get bookings. No monthly fees, no setup costs. Start free.',
  },
};

const PLAN_FEATURES = [
  {
    category: 'Booking Management',
    features: [
      { name: 'WhatsApp booking', starter: true, pro: true, enterprise: true },
      { name: 'Smart slot calendar', starter: true, pro: true, enterprise: true },
      { name: 'Auto conflict detection', starter: true, pro: true, enterprise: true },
      { name: 'Cancellation handling', starter: true, pro: true, enterprise: true },
      { name: 'Recurring bookings', starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Payments',
    features: [
      { name: 'UPI collection', starter: true, pro: true, enterprise: true },
      { name: 'Card & net banking', starter: true, pro: true, enterprise: true },
      { name: 'Automatic receipts', starter: true, pro: true, enterprise: true },
      { name: 'Refund management', starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Analytics',
    features: [
      { name: 'Revenue dashboard', starter: false, pro: true, enterprise: true },
      { name: 'Occupancy reports', starter: false, pro: true, enterprise: true },
      { name: 'Peak hour insights', starter: false, pro: true, enterprise: true },
      { name: 'Custom reports', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Multi-Venue',
    features: [
      { name: 'Single venue', starter: true, pro: true, enterprise: true },
      { name: 'Up to 5 venues', starter: false, pro: true, enterprise: true },
      { name: 'Unlimited venues', starter: false, pro: false, enterprise: true },
      { name: 'Staff access controls', starter: false, pro: false, enterprise: true },
    ],
  },
] as const;

const FAQ_ITEMS = [
  {
    question: 'Is there a setup fee?',
    answer: 'No. Wiksta is completely free to get started. You only pay a small commission when you receive a confirmed, paid booking through the platform.',
  },
  {
    question: 'What does "per-booking" pricing mean?',
    answer: 'You pay a fixed commission on each confirmed booking that comes through Wiksta. No monthly subscription, no hidden fees. If you don\'t get bookings, you don\'t pay anything.',
  },
  {
    question: 'Can I try Wiksta before committing?',
    answer: 'Absolutely. Start with the Starter plan — it\'s free forever for your first 50 bookings. No credit card required. Upgrade when you\'re ready.',
  },
  {
    question: 'How do payments work?',
    answer: 'Wiksta collects payment from the customer at the time of booking. The booking amount (minus commission) is settled to your bank account within 2 business days.',
  },
  {
    question: 'What payment methods do customers get?',
    answer: 'UPI, debit/credit cards, and net banking — all major banks and wallets supported via our payment partners (PayU, Razorpay, Paytm).',
  },
  {
    question: 'Can I manage multiple venues?',
    answer: 'Yes! The Pro plan supports up to 5 venues under one dashboard. For unlimited venues and custom integrations, reach out for our Enterprise plan.',
  },
  {
    question: 'Do my customers need to download an app?',
    answer: 'No. That\'s the whole point. Customers book through WhatsApp — the app they already use every day. No downloads, no sign-up friction.',
  },
  {
    question: 'How do cancellations and refunds work?',
    answer: 'You set your cancellation policy (e.g., free cancellation up to 2 hours before). Pro and Enterprise plans get automated refund management. Starter plans handle refunds manually.',
  },
] as const;

const WHATSAPP_URL = 'https://wa.me/919030354374?text=Hi%2C%20I%27m%20interested%20in%20Wiksta%20for%20my%20venue';

export default function PricingPage(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Simple, per-booking pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            No monthly fees. No setup costs. Pay only when you get bookings.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp/10 px-4 py-1.5 text-sm font-medium text-whatsapp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Free to start — no credit card required
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Starter */}
            <div className="rounded-2xl border border-border bg-background p-8">
              <h2 className="text-lg font-semibold text-foreground">Starter</h2>
              <p className="mt-1 text-sm text-muted-foreground">For single-venue owners just getting started</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-foreground">Free</span>
                <span className="ml-1 text-muted-foreground">for first 50 bookings</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Then ₹15 per booking
              </p>
              <ul className="mt-6 space-y-3" role="list">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  WhatsApp booking
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Smart calendar
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  UPI & card payments
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  1 venue
                </li>
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-xl border border-border px-6 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Get Started Free
              </a>
            </div>

            {/* Pro */}
            <div className="relative rounded-2xl border-2 border-primary bg-background p-8 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white">
                Most Popular
              </div>
              <h2 className="text-lg font-semibold text-foreground">Pro</h2>
              <p className="mt-1 text-sm text-muted-foreground">For growing venues with repeat customers</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-foreground">₹8</span>
                <span className="ml-1 text-muted-foreground">per booking</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                No monthly commitment
              </p>
              <ul className="mt-6 space-y-3" role="list">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Everything in Starter
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Revenue & occupancy analytics
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Refund management
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Up to 5 venues
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Priority support
                </li>
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Start Pro
              </a>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-border bg-background p-8">
              <h2 className="text-lg font-semibold text-foreground">Enterprise</h2>
              <p className="mt-1 text-sm text-muted-foreground">For multi-venue operators and chains</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-foreground">Custom</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Volume-based commission
              </p>
              <ul className="mt-6 space-y-3" role="list">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Everything in Pro
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Unlimited venues
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Custom reports
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Staff access controls
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  Dedicated account manager
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-border px-6 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Feature comparison
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            See what you get at each plan level.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 text-left font-semibold text-foreground">Feature</th>
                  <th className="py-3 text-center font-semibold text-foreground">Starter</th>
                  <th className="py-3 text-center font-semibold text-primary">Pro</th>
                  <th className="py-3 text-center font-semibold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {PLAN_FEATURES.map((category) => (
                  <>
                    <tr key={category.category}>
                      <td
                        colSpan={4}
                        className="pt-6 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature) => (
                      <tr key={feature.name} className="border-b border-border/50">
                        <td className="py-2.5 text-foreground">{feature.name}</td>
                        <td className="py-2.5 text-center">
                          {feature.starter ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted-foreground/40" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          )}
                        </td>
                        <td className="py-2.5 text-center">
                          {feature.pro ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted-foreground/40" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          )}
                        </td>
                        <td className="py-2.5 text-center">
                          {feature.enterprise ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-whatsapp" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted-foreground/40" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Everything you need to know about Wiksta pricing.
          </p>
          <div className="mt-8 space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-border bg-background transition-shadow hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Start free. Pay only when it works.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No credit card, no commitment. Get your first 50 bookings free and see the difference.
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
              Get Started Free on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}