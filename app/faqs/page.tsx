/**
 * app/faqs/page.tsx — FAQ hub (design 10-faq-hub.html).
 * Hero → one section per practice area (FAQAccordion) → CTA. FAQPage JSON-LD over
 * all answers. Copy from faqs.ts (attorney-verify before launch).
 */

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqGroups } from "@/content/faqs";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions | Witt Law, St. George Utah",
  description:
    "Straight answers to common Utah legal questions about personal injury, criminal defense, divorce and family law, estate planning, real estate, and mediation.",
  path: "/faqs/",
});

const allFaqs = faqGroups.flatMap((g) => g.faqs);

export default function FaqHub() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(allFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs/" },
          ]),
        ]}
      />

      <Hero
        eyebrow="Answers"
        title="Frequently Asked Questions"
        subhead="Straight answers to the questions we hear most, grouped by practice area. For advice on your specific situation, reach out for a free consultation."
        primaryCta={{ label: "Schedule a Consultation", href: "/contact/" }}
        showCall
      />

      {faqGroups.map((group) => (
        <section className="section section--tight" key={group.pillarSlug}>
          <Container>
            <SectionHeading
              eyebrow={group.label}
              action={
                <Link className="btn btn--ink" href={`/${group.pillarSlug}/`}>
                  More on {group.label} <span className="arr">↗</span>
                </Link>
              }
            >
              {group.label} questions
            </SectionHeading>
            <FAQAccordion faqs={group.faqs} defaultOpenFirst />
          </Container>
        </section>
      ))}

      <CTA />
    </>
  );
}
