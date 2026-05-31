/**
 * lib/seo.ts  (F5)
 * Per-page metadata helper. Wrap a page's exported `metadata` with this so
 * title/description/canonical/OpenGraph/Twitter stay consistent everywhere.
 *
 * Usage in a page:
 *   export const metadata = buildMetadata({
 *     title: "Estate Planning Attorney in St. George, Utah | Witt Law",
 *     description: "...",
 *     path: "/estate-planning/",
 *   });
 */

import type { Metadata } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { firm } from "@/content/firm";

interface SeoInput {
  /** Full <title>. Provide the complete string from build-spec §6. */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/estate-planning/". Used for canonical + OG url. */
  path?: string;
  /** Default true. Set false for thin/utility pages (e.g. /privacy/). */
  index?: boolean;
  /** Optional social share image (site-relative or absolute). */
  ogImage?: string;
}

/** Shared base — set once, inherited by every page via the root layout. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: firm.name,
  authors: [{ name: firm.name }],
  title: {
    default: `${firm.name} | Attorneys in St. George, Utah`,
    template: `%s | ${firm.shortName}`,
  },
  description:
    "Witt Law is a trusted St. George, Utah law firm handling personal injury, criminal defense, divorce and family law, estate planning, real estate, and mediation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: firm.name,
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  // Search Console + Bing Webmaster verification (F6) — off unless env set.
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
};

export function buildMetadata({
  title,
  description,
  path = "/",
  index = true,
  ogImage,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: firm.name,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}
