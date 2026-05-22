import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Wiksta — Run your sports venue on WhatsApp",
    template: "%s | Wiksta",
  },
  description:
    "Wiksta helps sports venue owners automate bookings, collect payments, and manage customers — all through WhatsApp.",
  openGraph: {
    title: "Wiksta — Run your sports venue on WhatsApp",
    description:
      "Automate bookings, collect payments, and manage customers through WhatsApp. No app downloads needed.",
    url: "https://wiksta.com",
    siteName: "Wiksta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiksta — Run your sports venue on WhatsApp",
    description:
      "Automate bookings, collect payments, and manage customers through WhatsApp. No app downloads needed.",
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
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="wiksta.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
