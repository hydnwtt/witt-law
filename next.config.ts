import type { NextConfig } from "next";

/**
 * next.config.ts  (F6)
 * - trailingSlash: canonicalize every URL WITH a trailing slash, matching the
 *   build-spec URL map, our canonicals (lib/seo), and the sitemap.
 * - images: serve modern formats (AVIF/WebP) for Core Web Vitals.
 * - redirects(): 301s from the old site's URLs (build-spec §8.1) to preserve SEO.
 */
const nextConfig: NextConfig = {
  // Pin the workspace root (a stray parent lockfile otherwise confuses Turbopack).
  turbopack: { root: import.meta.dirname },

  trailingSlash: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // --- Duplicate / renamed pillars & pages (permanent 308) ---
      { source: "/personal-injury-attorney", destination: "/personal-injury/", permanent: true },
      { source: "/about-witt-law", destination: "/about/", permanent: true },
      { source: "/divorce-family", destination: "/divorce-family-law/", permanent: true },

      // --- Blog posts moved under /blog/ (were root-level) ---
      { source: "/how-do-i-get-help-with-estate-planning", destination: "/blog/help-with-estate-planning/", permanent: true },
      { source: "/finding-an-auto-accident-lawyer", destination: "/blog/finding-an-auto-accident-lawyer/", permanent: true },
      { source: "/when-to-hire-a-personal-injury-lawyer", destination: "/blog/when-to-hire-a-personal-injury-lawyer/", permanent: true },
      { source: "/do-i-really-need-a-lawyer", destination: "/blog/do-i-really-need-a-lawyer/", permanent: true },
      { source: "/why-should-i-hire-a-personal-injury-attorney", destination: "/blog/why-hire-a-personal-injury-attorney/", permanent: true },

      // NOTE: the build-spec lists the OLD blog post `/real-estate-law/` →
      // `/blog/real-estate-law-basics/`. But `/real-estate-law/` is now the
      // Real Estate pillar page, so we CANNOT redirect it (it would shadow the
      // pillar). The old post's content moves to `/blog/real-estate-law-basics/`;
      // the `/real-estate-law/` URL is repurposed as the (stronger) pillar.
      // Flagged for firm sign-off. Do not add a redirect for `/real-estate-law/`.

      // --- Deleted WordPress cruft → home ---
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/home-old", destination: "/", permanent: true },

      // TODO (pre-launch): crawl the live site for any remaining old URLs and add
      // them here. Old in-page #fragment anchors (e.g. /personal-injury/#tab) can't
      // be server-redirected because fragments aren't sent to the server — those
      // resolve client-side to the new real <section id> anchors instead.
    ];
  },
};

export default nextConfig;
