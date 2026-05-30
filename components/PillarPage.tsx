/**
 * components/PillarPage.tsx  (shared P2–P7 template, design layout)
 * Hero (olive banner) → intro + jump list → anchored service sections → optional
 * value props / mediator feature / real-estate body / "areas we handle" → FAQ
 * (paper-2) → attorney strip → olive CTA. Emits LegalService + BreadcrumbList +
 * FAQPage JSON-LD. All copy from content/*; sections are crawlable <section id>s.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyStatusBadge } from "@/components/ui/CopyStatusBadge";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { JumpList } from "@/components/JumpList";
import { PracticeSection } from "@/components/PracticeSection";
import { BlockContent } from "@/components/BlockContent";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ValueProps } from "@/components/ValueProps";
import { AttorneyStrip } from "@/components/AttorneyStrip";
import { JsonLd } from "@/components/JsonLd";
import { legalServiceSchema, breadcrumbSchema, faqPageSchema } from "@/lib/jsonld";
import { getPillar } from "@/content/practiceAreas";
import { pillarContent } from "@/content/pillarSections";
import { getFaqs } from "@/content/faqs";

export function PillarPage({ slug }: { slug: string }) {
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  const extras = pillarContent[slug] ?? {};
  const faqs = getFaqs(slug);
  const sections = extras.sections ?? [];

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

      <Hero
        variant="banner"
        eyebrow="Practice Area · St. George, Utah"
        title={pillar.h1}
        subhead={pillar.subhead}
      />

      {/* Intro + jump list */}
      <section className="section section--tight">
        <Container>
          <nav aria-label="Breadcrumb" className="mono-label" style={{ marginBottom: 24 }}>
            <Link href="/">Home</Link> / {pillar.name}
          </nav>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: sections.length ? "1.15fr 0.85fr" : "1fr",
              gap: "clamp(32px,5vw,64px)",
              alignItems: "start",
            }}
            className="pillar-intro"
          >
            <div className="prose">
              {pillar.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "lead" : undefined} style={i === 0 ? { color: "var(--ink)" } : undefined}>
                  {p}
                </p>
              ))}
              {extras.note && (
                <>
                  <h3>{extras.note.heading}</h3>
                  <BlockContent blocks={extras.note.blocks} />
                </>
              )}
              {extras.body && <BlockContent blocks={extras.body.blocks} />}
            </div>
            {sections.length > 0 && (
              <div>
                <div className="mono-label" style={{ marginBottom: 14 }}>
                  Jump to a topic
                </div>
                <JumpList items={sections.map((s) => ({ href: `#${s.id}`, label: s.title }))} />
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

      {/* Anchored service sections */}
      {sections.length > 0 && (
        <section className="section section--tight" id="services">
          <Container>
            <SectionHeading eyebrow="What we handle">
              {pillar.name === "Personal Injury" ? "Injury cases we take on" : `${pillar.name} services`}
            </SectionHeading>
            <div>
              {sections.map((s) => (
                <PracticeSection
                  key={s.id}
                  id={s.id}
                  title={s.title}
                  flag={s.verify ? <CopyStatusBadge status="write-verify" /> : undefined}
                >
                  <BlockContent blocks={s.blocks} />
                </PracticeSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Areas we handle (Real Estate / Mediation) */}
      {extras.handles && extras.handles.length > 0 && (
        <section className="section section--tight">
          <Container>
            <SectionHeading eyebrow="What we handle">
              {extras.handlesHeading ?? "What we handle"}
            </SectionHeading>
            <div className="svc-grid cols-3">
              {extras.handles.map((item) => (
                <div className="svc" key={item}>
                  <h3>{item}</h3>
                </div>
              ))}
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
