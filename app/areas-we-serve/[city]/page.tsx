/**
 * app/areas-we-serve/[city]/page.tsx — city pages (design city-*.html).
 * Hero → local intro → practice-area grid → local courts → CTA. LegalService
 * (areaServed) + Breadcrumb JSON-LD. SSG per city; 🔴 attorney-verify local
 * court details. Nested under /areas-we-serve/ to avoid colliding with /[pillar]/.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { legalServiceSchema, breadcrumbSchema, faqPageSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlockContent } from "@/components/BlockContent";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTA } from "@/components/CTA";
import { cities, getCity } from "@/content/cities";
import { practiceAreas } from "@/content/practiceAreas";
import { firm } from "@/content/firm";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  return buildMetadata({ title: c.seoTitle, description: c.seoDescription, path: `/areas-we-serve/${c.slug}/` });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  return (
    <>
      <JsonLd
        data={[
          legalServiceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve/" },
            { name: c.name, path: `/areas-we-serve/${c.slug}/` },
          ]),
          ...(c.faqs.length ? [faqPageSchema(c.faqs)] : []),
        ]}
      />

      <section className="hero-banner hatch">
        <Container>
          <span className="eyebrow on-dark">{c.eyebrow}</span>
          <h1>{c.h1}</h1>
          <p className="lead">{c.lead}</p>
          <div className="hero-actions">
            <Link className="btn btn--light" href="/contact/">
              Schedule a Consultation <span className="arr">↗</span>
            </Link>
            <a className="btn btn--ghost-light" href={firm.phone.href}>
              <Phone /> Call {firm.phone.display}
            </a>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container style={{ maxWidth: "var(--maxw-prose)" }}>
          <div className="prose">
            <BlockContent blocks={c.intro} />
          </div>
        </Container>
      </section>

      <section className="section section--tight">
        <Container>
          <SectionHeading eyebrow="How we help">Our practice areas in {c.name}</SectionHeading>
          <div className="svc-grid cols-3">
            {practiceAreas.map((p) => (
              <Link key={p.slug} className="svc" href={`/${p.slug}/`}>
                <h3>{p.name}</h3>
                <span className="link-arrow">
                  Learn more <span className="arr">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {c.court.length > 0 && (
        <section className="section section--tight on-paper-2">
          <Container>
            <SectionHeading eyebrow="Local courts">{c.courtHeading}</SectionHeading>
            <div className="prose">
              <BlockContent blocks={c.court} />
            </div>
          </Container>
        </section>
      )}

      {c.faqs.length > 0 && (
        <section className="section section--tight">
          <Container>
            <SectionHeading eyebrow="FAQs">{c.name} questions</SectionHeading>
            <FAQAccordion faqs={c.faqs} defaultOpenFirst />
          </Container>
        </section>
      )}

      <CTA />
    </>
  );
}
