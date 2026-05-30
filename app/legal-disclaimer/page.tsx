/**
 * app/legal-disclaimer/page.tsx — Legal Disclaimer (design 13-legal.html).
 * 🔴 Placeholder language — attorney to approve before launch (Rule 7.1–7.2).
 */

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { BlockContent } from "@/components/BlockContent";
import { legalPages } from "@/content/siteCopy";

const page = legalPages.disclaimer;

export const metadata = buildMetadata({
  title: page.seoTitle,
  description:
    "Information on this site is general and not legal advice; using it does not create an attorney-client relationship.",
  path: "/legal-disclaimer/",
});

export default function Disclaimer() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: page.title, path: "/legal-disclaimer/" },
        ])}
      />
      <Hero eyebrow="Legal" title={page.title} primaryCta={null} showCall={false} />
      <section className="section">
        <Container>
          <div className="prose">
            <BlockContent blocks={page.body} />
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
