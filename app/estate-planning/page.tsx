/**
 * app/estate-planning/page.tsx — practice-area pillar (rendered by the shared PillarPage template).
 * Copy/data come from content/*; SEO from practiceAreas.ts.
 */

import { PillarPage } from "@/components/PillarPage";
import { buildMetadata } from "@/lib/seo";
import { getPillar } from "@/content/practiceAreas";

const SLUG = "estate-planning";
const pillar = getPillar(SLUG)!;

export const metadata = buildMetadata({
  title: pillar.seoTitle,
  description: pillar.seoDescription,
  path: `/${SLUG}/`,
});

export default function Page() {
  return <PillarPage slug={SLUG} />;
}
