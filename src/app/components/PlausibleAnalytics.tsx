'use client';

import Script from 'next/script';

const PLAUSIBLE_DOMAIN = 'wiksta.com';
const PLAUSIBLE_SRC = 'https://plausible.io/js/script.js';

export function PlausibleAnalytics(): React.JSX.Element {
  return (
    <Script
      src={PLAUSIBLE_SRC}
      data-domain={PLAUSIBLE_DOMAIN}
      strategy="afterInteractive"
    />
  );
}