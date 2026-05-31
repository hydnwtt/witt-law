/**
 * components/PillarPage.tsx  (shared P2–P7 template, design 02-practice-pillar.html)
 * Olive hero → intro + jump-list → service grid (cards link to child pages) →
 * optional value props / mediator feature / real-estate body → FAQ (paper-2) →
 * attorney strip → CTA. Emits LegalService + BreadcrumbList + FAQPage JSON-LD.
 * Service detail now lives on the crawlable child pages; this page links to them.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlockContent } from "@/components/BlockContent";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ValueProps } from "@/components/ValueProps";
import { AttorneyStrip } from "@/components/AttorneyStrip";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { legalServiceSchema, breadcrumbSchema, faqPageSchema } from "@/lib/jsonld";
import { getPillar } from "@/content/practiceAreas";
import { pillarContent } from "@/content/pillarSections";
import { getServiceContent } from "@/content/serviceContent";
import { getFaqs } from "@/content/faqs";
import { firm } from "@/content/firm";

export function PillarPage({ slug }: { slug: string }) {
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  const extras = pillarContent[slug] ?? {};
  const faqs = getFaqs(slug);
  const services = pillar.services;

  const schema = [
    legalServiceSchema(),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: pillar.name, path: `/${pillar.slug}/` },
    ]),
    ...(faqs.length ? [faqPageSchema(faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="hero-banner hatch">
        <Container>
          <span className="eyebrow on-dark">Practice Area · St. George, Utah</span>
          <h1>{pillar.h1}</h1>
          <p className="lead">{pillar.subhead}</p>
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

      {/* Intro + jump list */}
      <section className="section section--tight">
        <Container>
          <div
            className="pillar-intro"
            style={{
              display: "grid",
              gridTemplateColumns: services.length ? "1.15fr 0.85fr" : "1fr",
              gap: "clamp(32px,5vw,64px)",
              alignItems: "start",
            }}
          >
            <div className="prose">
              {pillar.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "lead" : undefined} style={i === 0 ? { color: "var(--ink)" } : undefined}>
                  {p}
                </p>
              ))}
              {extras.note && (
                <>
                  <h2>{extras.note.heading}</h2>
                  <BlockContent blocks={extras.note.blocks} />
                </>
              )}
              {extras.body && <BlockContent blocks={extras.body.blocks} />}
            </div>
            {services.length > 0 && (
              <div>
                <div className="mono-label" style={{ marginBottom: 14 }}>Jump to a service</div>
                <div className="jumplist">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/${pillar.slug}/${s.slug}/`}>
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Mediation value props */}
      {extras.showValueProps && (
        <section className="section on-olive hatch">
          <Container>
            <SectionHeading eyebrow="Why Witt Law">What you can count on from us</SectionHeading>
            <ValueProps />
          </Container>
        </section>
      )}

      {/* Mediator feature */}
      {extras.feature && (
        <section className="section section--tight">
          <Container>
            <div className="prose" style={{ maxWidth: "72ch" }}>
              <h2>{extras.feature.heading}</h2>
              <BlockContent blocks={extras.feature.blocks} />
            </div>
          </Container>
        </section>
      )}

      {/* Service grid → child pages */}
      {services.length > 0 && (
        <section className="section section--tight" id="services">
          <Container>
            <SectionHeading eyebrow="What we handle">
              {slug === "personal-injury" ? "Injury cases we take on" : `${pillar.name} services`}
            </SectionHeading>
            <div className="svc-grid cols-3">
              {services.map((s) => {
                const c = getServiceContent(s.slug);
                return (
                  <Link key={s.slug} className="svc" href={`/${pillar.slug}/${s.slug}/`}>
                    <h3>{s.title}</h3>
                    {c?.lead && <p>{c.lead}</p>}
                    <span className="link-arrow">
                      Learn more <span className="arr">→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section on-paper-2">
          <Container>
            <SectionHeading eyebrow="FAQs">{pillar.name} questions in Utah</SectionHeading>
            <FAQAccordion faqs={faqs} defaultOpenFirst />
          </Container>
        </section>
      )}

      {/* Attorney strip */}
      <section className="section section--tight">
        <Container>
          <AttorneyStrip slugs={pillar.attorneySlugs} />
        </Container>
      </section>

      <CTA />
    </>
  );
}
