import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "WhatsApp booking, smart calendar, payment collection, customer management, and analytics — all the tools to run your sports venue.",
  openGraph: {
    title: "Features | Wiksta",
    description:
      "Everything you need to run your sports venue on WhatsApp.",
  },
};

const features = [
  {
    title: "WhatsApp Booking",
    desc: "Customers book courts, slots, and services through a simple WhatsApp conversation. No app, no website navigation.",
    icon: "💬",
  },
  {
    title: "Smart Calendar",
    desc: "Real-time availability management. Prevent double bookings with automatic slot blocking and release.",
    icon: "📅",
  },
  {
    title: "Payment Collection",
    desc: "Collect deposits and full payments via UPI, cards, and wallets. Automated refunds and cancellation handling.",
    icon: "💳",
  },
  {
    title: "Customer Management",
    desc: "Track customer preferences, visit history, and contact details. Send reminders and follow-ups via WhatsApp.",
    icon: "👥",
  },
  {
    title: "Analytics & Reports",
    desc: "Revenue tracking, occupancy rates, peak hours, and customer growth — all in one dashboard.",
    icon: "📊",
  },
  {
    title: "Automated Notifications",
    desc: "Booking confirmations, reminders, and check-in instructions sent automatically via WhatsApp.",
    icon: "🔔",
  },
  {
    title: "Multi-Venue Support",
    desc: "Manage multiple locations from a single dashboard. Separate schedules, pricing, and staff per venue.",
    icon: "🏟️",
  },
  {
    title: "Check-in System",
    desc: "QR code check-in at venue. Track attendance and manage capacity in real time.",
    icon: "✅",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-20 sm:py-24">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need to
            <br />
            <span className="text-brand-600">run your venue</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            From first booking to repeat customer — Wiksta handles every step
            so you can focus on what matters.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                  {feature.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container-page text-center">
          <h2 className="section-heading">Ready to see it in action?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
            Get a personalised demo for your venue.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary text-base">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
