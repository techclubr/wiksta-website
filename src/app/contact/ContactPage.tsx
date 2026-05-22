'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const WHATSAPP_URL = 'https://wa.me/919030354374?text=Hi%2C%20I%27m%20interested%20in%20Wiksta%20for%20my%20venue';
const FORM_SUBMIT_URL = 'https://formsubmit.co/info@wiksta.com';
const RATE_LIMIT_MS = 30_000;

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
  honeypot: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  errorMessage: string | null;
}

const INITIAL_FORM_STATE: FormState = {
  name: '',
  phone: '',
  email: '',
  message: '',
  honeypot: '',
  isSubmitting: false,
  isSubmitted: false,
  errorMessage: null,
};

export default function ContactPage(): React.JSX.Element {
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const updateField = (field: keyof FormState, value: string): void => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    // Honeypot check — bots fill hidden fields
    if (form.honeypot) {
      return;
    }

    // Rate limiting — 1 submission per 30 seconds
    const now = Date.now();
    if (now - lastSubmitTime < RATE_LIMIT_MS) {
      setForm((prev) => ({
        ...prev,
        errorMessage: 'Please wait 30 seconds before submitting again.',
      }));
      return;
    }

    setForm((prev) => ({ ...prev, isSubmitting: true, errorMessage: null }));

    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed. Please try again.');
      }

      setLastSubmitTime(now);
      setForm({ ...INITIAL_FORM_STATE, isSubmitted: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setForm((prev) => ({ ...prev, isSubmitting: false, errorMessage: message }));
    }
  };

  if (form.isSubmitted) {
    return (
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp/10">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-whatsapp"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-foreground">Message sent!</h1>
          <p className="mt-4 text-muted-foreground">
            We&apos;ll get back to you within 24 hours. For faster response, reach out on WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.38 1.245 15.324 0 12.047 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions about Wiksta? Want a demo? We&apos;re here to help — on WhatsApp or email.
          </p>
        </div>
      </section>

      {/* Contact form + WhatsApp CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;ll respond within 24 hours. For faster help, WhatsApp us.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Honeypot — hidden from humans, visible to bots */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => updateField('honeypot', e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="you@venue.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your venue and what you need..."
                  />
                </div>

                {form.errorMessage && (
                  <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400" role="alert">
                    {form.errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={form.isSubmitting}
                  className="w-full rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {form.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-xs text-muted-foreground">
                  Rate-limited to 1 submission per 30 seconds to prevent spam.
                </p>
              </form>
            </div>

            {/* WhatsApp CTA + info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Prefer WhatsApp?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Get an instant response. We typically reply within 5 minutes during business hours.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-8 py-4 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition-colors hover:bg-whatsapp-dark"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.38 1.245 15.324 0 12.047 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                </svg>
                Chat on WhatsApp
              </a>

              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-border bg-muted p-6">
                  <h3 className="font-semibold text-foreground">Business hours</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Monday — Saturday: 9 AM — 9 PM IST
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sunday: 10 AM — 6 PM IST
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-muted p-6">
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:info@wiksta.com"
                    className="mt-1 block text-sm text-primary transition-colors hover:text-primary-dark"
                  >
                    info@wiksta.com
                  </a>
                </div>
                <div className="rounded-2xl border border-border bg-muted p-6">
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-primary transition-colors hover:text-primary-dark"
                  >
                    +91 90303 54374
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}