/**
 * app/real-estate-law/page.tsx — practice-area pillar (rendered by the shared PillarPage template).
 * Copy/data come from content/*; SEO from practiceAreas.ts.
 */

import { PillarPage } from "@/components/PillarPage";
import { buildMetadata } from "@/lib/seo";
import { getPillar } from "@/content/practiceAreas";

const SLUG = "real-estate-law";
const pillar = getPillar(SLUG)!;

export const metadata = buildMetadata({
  title: pillar.seoTitle,
  description: pillar.seoDescription,
  path: `/${SLUG}/`,
});

export default function Page() {
  return <PillarPage slug={SLUG} />;
}
