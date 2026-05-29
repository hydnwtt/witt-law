/**
 * app/sitemap.ts  (F5)
 * Generates /sitemap.xml. Routes are derived from content (pillars, attorney
 * bios) plus the fixed top-level pages, so the sitemap can't drift from the
 * real site map. Service child pages (Phase 2) get added when those pages ship.
 */

import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { practiceAreas } from "@/content/practiceAreas";
import { attorneys } from "@/content/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/about/", priority: 0.7, freq: "monthly" },
    { path: "/attorneys/", priority: 0.7, freq: "monthly" },
    { path: "/contact/", priority: 0.8, freq: "monthly" },
    { path: "/results/", priority: 0.6, freq: "monthly" },
    { path: "/reviews/", priority: 0.6, freq: "monthly" },
    { path: "/faqs/", priority: 0.6, freq: "monthly" },
    { path: "/blog/", priority: 0.6, freq: "weekly" },
    { path: "/areas-we-serve/", priority: 0.5, freq: "monthly" },
    { path: "/privacy/", priority: 0.2, freq: "yearly" },
    { path: "/legal-disclaimer/", priority: 0.2, freq: "yearly" },
  ];

  const pillarRoutes = practiceAreas.map((p) => ({
    path: `/${p.slug}/`,
    priority: 0.9,
    freq: "monthly" as const,
  }));

  const attorneyRoutes = attorneys.map((a) => ({
    path: `/attorneys/${a.slug}/`,
    priority: 0.7,
    freq: "monthly" as const,
  }));

  return [...staticRoutes, ...pillarRoutes, ...attorneyRoutes].map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
