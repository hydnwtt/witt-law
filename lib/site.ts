/**
 * lib/site.ts
 * Site-wide constants. The canonical production origin lives here so SEO,
 * sitemap, robots, and JSON-LD all agree. Override with NEXT_PUBLIC_SITE_URL
 * in the environment (Vercel) without touching code.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lawyerstgeorge.com"
).replace(/\/$/, "");

/** Absolute URL for a path (always leading-slash relative). */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
