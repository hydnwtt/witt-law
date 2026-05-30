/**
 * content/cities.ts  (AUTO-GENERATED from design city-*.html + 11-areas-served.html)
 * 🔴 write-verify — attorney to confirm local court details before launch.
 */

import type { Block } from "@/components/BlockContent";

export interface City {
  slug: string; name: string; county: string; eyebrow: string;
  h1: string; lead: string; blurb: string;
  seoTitle: string; seoDescription: string;
  intro: Block[]; courtHeading: string; court: Block[];
}

export const cities: City[] = [
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);