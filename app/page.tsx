/**
 * app/page.tsx — Home (P1)
 * Hero → trust bar → intro → 6 practice cards → value props → 3 featured
 * testimonials → CTA. Emits LegalService/LocalBusiness + Organization JSON-LD.
 * All copy from content/* (home.ts, practiceAreas.ts, testimonials.ts).
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { legalServiceSchema, organizationSchema } from "@/lib/jsonld";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { TrustBar } from "@/components/TrustBar";
import { PracticeCard } from "@/components/PracticeCard";
import { ValueProps } from "@/components/ValueProps";
import { TestimonialCard } from "@/components/TestimonialCard";

import { homeHero, homeIntro, homeCardBlurbs, homeTrustItems } from "@/content/home";
import { practiceAreas } from "@/content/practiceAreas";
import { featuredTestimonials } from "@/content/testimonials";

export const metadata = buildMetadata({
  title: "Witt Law Offices | Attorneys in St. George, Utah",
  description:
    "Witt Law is a trusted St. George, Utah law firm handling personal injury, criminal defense, divorce and family law, and estate planning. Free consultations — call (435) 673-8400.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={[legalServiceSchema(), organizationSchema()]} />

      <Hero
        eyebrow={homeHero.eyebrow}
        title={homeHero.title}
        subhead={homeHero.subhead}
      />

      <TrustBar items={homeTrustItems} />

      {/* Intro */}
      <Container className="py-14">
        <SectionHeading as="h2">{homeIntro.heading}</SectionHeading>
        <div className="prose mt-4">
          {homeIntro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Container>

      {/* Practice areas */}
      <section className="border-y border-line bg-bg-soft">
        <Container className="py-14">
          <SectionHeading as="h2" eyebrow="How we help">
            Our practice areas
          </SectionHeading>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((p) => (
              <PracticeCard
                key={p.slug}
                slug={p.slug}
                name={p.name}
                description={homeCardBlurbs[p.slug] ?? p.subhead}
                href={`/${p.slug}/`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Witt Law */}
      <Container className="py-14">
        <SectionHeading as="h2" eyebrow="Why Witt Law">
          What sets us apart
        </SectionHeading>
        <div className="mt-8">
          <ValueProps />
        </div>
      </Container>

      {/* Featured testimonials */}
      <section className="border-t border-line bg-bg-soft">
        <Container className="py-14">
          <SectionHeading as="h2" eyebrow="Client reviews">
            What our clients say
          </SectionHeading>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
          <Link
            href="/reviews/"
            className="mt-6 inline-flex items-center gap-1 font-semibold text-accent-strong hover:text-accent-dark"
          >
            Read more client stories
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Container>
      </section>

      <CTA />
    </>
  );
}
