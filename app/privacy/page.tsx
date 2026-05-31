/**
 * app/privacy/page.tsx — Privacy Policy (design 13-legal.html).
 * 🔴 Placeholder language — attorney to approve before launch.
 */

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { BlockContent } from "@/components/BlockContent";
import { legalPages } from "@/content/siteCopy";

const page = legalPages.privacy;

export const metadata = buildMetadata({
  title: page.seoTitle,
  description: "How Witt Law collects and uses information submitted through this website.",
  path: "/privacy/",
  index: false,
});

export default function Privacy() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: page.title, path: "/privacy/" },
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
