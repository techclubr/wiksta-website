# Wiksta — Run your sports venue on WhatsApp

5 landing pages for wiksta.com: Home, Features, For Venue Owners, Pricing, Contact.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, how-it-works, value props, CTA |
| Features | `/features` | Feature grid with 8 capabilities |
| For Venue Owners | `/for-venues` | Benefits, onboarding steps, testimonial |
| Pricing | `/pricing` | Per-booking pricing table, FAQ accordion |
| Contact | `/contact` | Contact form with honeypot + rate limiting |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Analytics**: Plausible (script loaded in layout)
- **SEO**: generateMetadata(), sitemap.xml, robots.txt, OpenGraph tags

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftechclubr%2Fwiksta-website)

1. Click the button above or go to [Vercel](https://vercel.com/new)
2. Import the `techclubr/wiksta-website` repo
3. Vercel auto-detects Next.js — no config needed
4. Deploy! Your site is live at a `*.vercel.app` URL
5. (Optional) Add custom domain `wiksta.com` in Vercel dashboard

### Environment Variables (none required)

The contact form uses [FormSubmit](https://formsubmit.co/) for email delivery. To change the recipient email, update the action URL in `src/components/ContactForm.tsx`.

## SEO

- `generateMetadata()` on every page with unique title, description, OpenGraph
- `sitemap.xml` — all 5 pages
- `robots.txt` — allow all, points to sitemap
- Plausible analytics script in root layout

## Anti-Spam

Contact form includes:
- **Honeypot** — hidden field that bots fill, humans don't see
- **Rate limiting** — 1 submission per 30 seconds per browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: header, footer, analytics
│   ├── page.tsx            # Home
│   ├── features/page.tsx   # Features
│   ├── for-venues/page.tsx # For Venue Owners
│   ├── pricing/page.tsx    # Pricing
│   ├── contact/page.tsx    # Contact
│   ├── sitemap.ts          # sitemap.xml
│   ├── robots.ts           # robots.txt
│   └── not-found.tsx       # 404
└── components/
    ├── Header.tsx           # Nav bar (desktop + mobile)
    ├── Footer.tsx           # Footer with links
    └── ContactForm.tsx     # Form with anti-spam
```
