import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Venue Owners",
  description:
    "Stop losing bookings to missed calls. Wiksta helps sports venue owners automate bookings, collect payments, and grow their business on WhatsApp.",
  openGraph: {
    title: "For Venue Owners | Wiksta",
    description:
      "Stop losing bookings to missed calls. Start WhatsApp.",
  },
};

const benefits = [
  {
    title: "Never miss a booking",
    desc: "WhatsApp works 24/7. Customers book while you sleep, while you're busy, while you're running the floor.",
  },
  {
    title: "Reduce no-shows",
    desc: "Automated reminders and deposit collection mean fewer empty courts and lost revenue.",
  },
  {
    title: "Save staff time",
    desc: "Stop answering calls to check availability. Your team focuses on service, not scheduling.",
  },
  {
    title: "Grow revenue",
    desc: "Easy booking means more bookings. Happy customers come back more often and refer friends.",
  },
  {
    title: "Professional experience",
    desc: "Instant confirmations, digital receipts, and seamless check-in make your venue stand out.",
  },
  {
    title: "Data that helps you decide",
    desc: "See which times are busiest, which customers are most valuable, and where to grow.",
  },
];

export default function ForVenuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-20 sm:py-28">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Stop losing bookings to missed calls.
            <br />
            <span className="text-brand-600">Start WhatsApp.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Every missed call is a lost customer. Wiksta turns WhatsApp into
            your booking engine — so you never miss a reservation again.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base">
              Get Started Free
            </Link>
            <Link href="/pricing" className="btn-secondary text-base">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">
              Built for venue owners, by venue owners
            </h2>
            <p className="section-subheading">
              We know the pain of managing bookings across calls, texts, and
              walk-ins. Wiksta fixes that.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="bg-gray-50 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Getting started is easy</h2>
            <p className="section-subheading">
              From sign-up to first booking in under an hour.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            {[
              {
                step: "1",
                title: "Sign up",
                desc: "Create your account and tell us about your venue. Takes 5 minutes.",
              },
              {
                step: "2",
                title: "Connect WhatsApp",
                desc: "Link your WhatsApp Business number. We handle the setup.",
              },
              {
                step: "3",
                title: "Set your slots",
                desc: "Define your courts, pricing, and available time slots.",
              },
              {
                step: "4",
                title: "Go live",
                desc: "Share your WhatsApp number. Customers start booking immediately.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 border-l-2 border-brand-200 pb-8 pl-6 last:pb-0">
                <span className="-ml-[2.15rem] flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="py-20">
        <div className="container-page text-center">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-12 shadow-sm">
            <p className="text-lg italic leading-8 text-gray-600">
              &ldquo;Since we switched to Wiksta, we haven&apos;t missed a
              single booking. Our customers love booking through WhatsApp.&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900">
                — Venue Owner
              </p>
              <p className="text-sm text-gray-500">
                Sports facility, Bangalore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container-page text-center">
          <h2 className="section-heading">
            Pay only when you get bookings
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
            No upfront fees. No monthly minimums. Just a small per-booking
            charge.
          </p>
          <div className="mt-10">
            <Link href="/pricing" className="btn-primary text-base">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
