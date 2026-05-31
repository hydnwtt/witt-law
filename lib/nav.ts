/**
 * lib/nav.ts
 * Navigation config, derived from content so the header/footer/sitemap never
 * drift from the real pages. Practice-area links come straight from
 * practiceAreas.ts; the rest are the fixed top-level routes (build-spec §3.2).
 */

import { practiceAreas } from "@/content/practiceAreas";

export interface NavLink {
  label: string;
  href: string;
}

/** Practice Areas dropdown — one entry per pillar, in display order. */
export const practiceNav: NavLink[] = practiceAreas.map((p) => ({
  label: p.name,
  href: `/${p.slug}/`,
}));

/** Primary top-level nav (Practice Areas is a dropdown, handled separately). */
export const primaryNav: NavLink[] = [
  { label: "Results", href: "/results/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];

/** Footer column: Practice Areas (mirrors the dropdown). */
export const footerPracticeNav = practiceNav;

/** Footer column: Firm. */
export const footerFirmNav: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "Attorneys", href: "/attorneys/" },
  { label: "Results", href: "/results/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Blog", href: "/blog/" },
  { label: "Areas We Serve", href: "/areas-we-serve/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Legal Disclaimer", href: "/legal-disclaimer/" },
];
