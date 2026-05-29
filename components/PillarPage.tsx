/**
 * components/PillarPage.tsx  (P2–P7 shared template)
 * Renders a complete practice-area pillar page from typed content, keyed by slug:
 *   Hero → intro → optional note/body/value-props/feature → anchored service
 *   sections (with JumpList) → "areas we handle" → FAQ → attorney strip → CTA.
 *
 * Emits LegalService + BreadcrumbList + (when present) FAQPage JSON-LD. All copy
 * comes from content/*; nothing hard-coded. Service sections are real <section id>
 * blocks present in the initial DOM (no JS tab-gating).
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
import {
  legalServiceSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/jsonld";
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

      <Hero title={pillar.h1} subhead={pillar.subhead} />

      {/* Breadcrumb */}
      <Container className="pt-6">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-navy">
            Home
          </Link>{" "}
          <span aria-hidden="true">/</span>{" "}
          <span className="text-ink">{pillar.name}</span>
        </nav>
      </Container>

      {/* Intro */}
      <Container className="py-8">
        <div className="prose">
          {pillar.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {extras.note && (
          <div className="prose mt-6 rounded-xl border border-line bg-bg-soft p-6">
            <h2 className="!mt-0 text-xl">{extras.note.heading}</h2>
            <BlockContent blocks={extras.note.blocks} />
          </div>
        )}

        {extras.body && (
          <div className="prose mt-6">
            <BlockContent blocks={extras.body.blocks} />
          </div>
        )}
      </Container>

      {/* Value props (Mediation) */}
      {extras.showValueProps && (
        <section className="border-y border-line bg-bg-soft">
          <Container className="py-12">
            <SectionHeading as="h2" eyebrow="Why Witt Law">
              What you can expect from us
            </SectionHeading>
            <div className="mt-8">
              <ValueProps />
            </div>
          </Container>
        </section>
      )}

      {/* Feature (Mediator bio) */}
      {extras.feature && (
        <Container className="py-12">
          <div className="prose max-w-none rounded-xl border border-line bg-bg p-6 sm:p-8">
            <h2 className="!mt-0">{extras.feature.heading}</h2>
            <BlockContent blocks={extras.feature.blocks} />
          </div>
        </Container>
      )}

      {/* Anchored service sections + jump list */}
      {sections.length > 0 && (
        <Container className="py-4">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <JumpList
              className="hidden lg:sticky lg:top-24 lg:block lg:self-start"
              items={sections.map((s) => ({ id: s.id, label: s.title }))}
            />
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
          </div>
        </Container>
      )}

      {/* Areas we handle (Real Estate / Mediation) */}
      {extras.handles && extras.handles.length > 0 && (
        <Container className="py-8">
          <SectionHeading as="h2">{extras.handlesHeading ?? "What we handle"}</SectionHeading>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extras.handles.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line bg-bg px-4 py-3 text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="border-t border-line bg-bg-soft">
          <Container className="py-12">
            <SectionHeading as="h2" eyebrow="Common questions">
              {pillar.name} FAQs
            </SectionHeading>
            <div className="mt-6 max-w-3xl">
              <FAQAccordion faqs={faqs} defaultOpenFirst />
            </div>
          </Container>
        </section>
      )}

      {/* Attorney strip */}
      <Container className="py-12">
        <AttorneyStrip slugs={pillar.attorneySlugs} />
      </Container>

      <CTA />
    </>
  );
}
