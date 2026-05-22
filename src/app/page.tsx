import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Run your sports venue on WhatsApp",
  description:
    "Wiksta helps sports venue owners automate bookings, collect payments, and manage customers — all through WhatsApp. No app downloads needed.",
  openGraph: {
    title: "Wiksta — Run your sports venue on WhatsApp",
    description:
      "Automate bookings, collect payments, and manage customers through WhatsApp.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-20 sm:py-28">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Run your sports venue
            <br />
            <span className="text-brand-600">on WhatsApp</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Stop losing bookings to missed calls. Wiksta lets your customers
            book, pay, and check in — all through WhatsApp. No app downloads,
            no friction.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base">
              Get Started Free
            </Link>
            <Link href="/features" className="btn-secondary text-base">
              See Features
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">How it works</h2>
            <p className="section-subheading">
              Three simple steps to start running your venue on WhatsApp.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect",
                desc: "Link your WhatsApp number to Wiksta in under 5 minutes.",
              },
              {
                step: "02",
                title: "Configure",
                desc: "Set your venue hours, pricing, and available slots.",
              },
              {
                step: "03",
                title: "Go Live",
                desc: "Customers book and pay through WhatsApp instantly.",
              },
            ].map((item) => (
              <div key={item.step} className="card text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-lg font-bold text-brand-700">
                  {item.step}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">
              Why venue owners choose Wiksta
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "No app downloads",
                desc: "Customers book through WhatsApp — the app they already use every day.",
              },
              {
                title: "Instant bookings",
                desc: "24/7 automated booking. Never miss a reservation again.",
              },
              {
                title: "Built-in payments",
                desc: "Collect deposits and full payments automatically via UPI and cards.",
              },
              {
                title: "Smart calendar",
                desc: "Real-time availability. No double bookings, no conflicts.",
              },
              {
                title: "Customer management",
                desc: "Track repeat customers, preferences, and booking history.",
              },
              {
                title: "Analytics dashboard",
                desc: "See revenue, occupancy rates, and growth trends at a glance.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="container-page text-center">
          <h2 className="section-heading">
            Ready to run your venue on WhatsApp?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
            Join venue owners who never miss a booking. Start free, pay only
            when you get bookings.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary text-base">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
