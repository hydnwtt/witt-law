/**
 * lib/analytics.tsx  (F6)
 * Third-party script placeholders — ALL OFF BY DEFAULT. Nothing loads unless the
 * matching env var is set, so dev/preview stay clean and CWV isn't taxed.
 *
 *   GA4:           NEXT_PUBLIC_GA_ID=G-XXXXXXX
 *   Call tracking: NEXT_PUBLIC_CALLRAIL_ID=XXXXXXXX/YYYY  (CallRail swap script)
 *
 * Search Console + Bing Webmaster verification are handled via metadata
 * verification tags (see lib/seo.ts: GOOGLE_SITE_VERIFICATION / BING_SITE_VERIFICATION).
 *
 * Scripts use next/script with afterInteractive so they never block first paint.
 */

import Script from "next/script";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const callRailId = process.env.NEXT_PUBLIC_CALLRAIL_ID;

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}

      {callRailId && (
        <Script
          id="callrail"
          src={`//cdn.callrail.com/companies/${callRailId}/swap.js`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
