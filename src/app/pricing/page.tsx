import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple per-booking pricing. Pay only when you get bookings. No upfront fees, no monthly minimums.",
  openGraph: {
    title: "Pricing | Wiksta",
    description:
      "Simple per-booking pricing. Pay only when you get bookings.",
  },
};

const faqs = [
  {
    q: "What counts as a booking?",
    a: "Any confirmed reservation made through WhatsApp where a customer books a court, slot, or service at your venue.",
  },
  {
    q: "Are there any setup fees?",
    a: "Zero. Setting up your venue, connecting WhatsApp, and configuring your slots are completely free.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts or lock-ins. You pay only for bookings that happen.",
  },
  {
    q: "What payment methods do you support?",
    a: "UPI, debit/credit cards, and net banking. More payment methods coming soon.",
  },
  {
    q: "How do I get paid out?",
    a: "Payouts are processed automatically every week to your registered bank account.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Your first 50 bookings are free so you can experience the platform risk-free.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-20 sm:py-24">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple pricing.
            <br />
            <span className="text-brand-600">Pay per booking.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            No upfront fees, no monthly minimums, no hidden charges. You only
            pay when you get a booking.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-8 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-lg">
            <div className="card text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Per Booking
              </p>
              <p className="mt-4">
                <span className="text-5xl font-bold text-gray-900">
                  5%
                </span>
                <span className="text-lg text-gray-600"> / booking</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">
                of the booking value
              </p>
              <ul className="mt-8 space-y-3 text-left text-sm">
                {[
                  "No setup fee",
                  "No monthly minimum",
                  "No cancellation fee",
                  "Free first 50 bookings",
                  "Weekly payouts",
                  "All features included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary w-full text-base">
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Frequently asked questions</h2>
          </div>
          <div className="mx-auto mt-12 max-w-2xl divide-y divide-gray-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-gray-900">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-45 transition-transform">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
