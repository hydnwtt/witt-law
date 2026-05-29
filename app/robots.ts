/**
 * app/robots.ts  (F5)
 * Generates /robots.txt. Crawlers get full access (we deliberately do NOT block
 * JS/CSS — that was a constraint) and a pointer to the sitemap.
 */

import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
