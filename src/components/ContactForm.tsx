"use client";

import { useState, useRef, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "rate-limited"
  >("idle");
  const [message, setMessage] = useState("");
  const lastSubmit = useRef(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Rate limit: 1 submission per 30 seconds
    const now = Date.now();
    if (now - lastSubmit.current < 30000) {
      setStatus("rate-limited");
      setMessage("Please wait 30 seconds before sending another message.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — hidden field must be empty
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      // Bot filled honeypot — silently "succeed" so bot doesn't know
      setStatus("success");
      setMessage("Thank you! We'll get back to you within 24 hours.");
      form.reset();
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/hello@wiksta.com", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to send");

      lastSubmit.current = Date.now();
      setStatus("success");
      setMessage("Thank you! We'll get back to you within 24 hours.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again or email us directly."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — invisible to humans */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name *
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone *
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message *
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          placeholder="Tell us about your venue and what you need..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-green-600">{message}</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{message}</p>
      )}
      {status === "rate-limited" && (
        <p className="text-sm font-medium text-amber-600">{message}</p>
      )}
    </form>
  );
}
