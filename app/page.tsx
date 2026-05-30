/**
 * app/page.tsx — Home (P1), built to the Witt Law design (templates/01-home.html).
 * Split hero → trust bar → intro (text + photo) → 6 practice cards → olive value
 * props → 3 featured testimonials → olive CTA. LegalService + Organization JSON-LD.
 * Copy from content/*.
 */

import Link from "next/link";

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { legalServiceSchema, organizationSchema } from "@/lib/jsonld";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { TrustBar } from "@/components/TrustBar";
import { PracticeCard } from "@/components/PracticeCard";
import { ValueProps } from "@/components/ValueProps";
import { TestimonialCard } from "@/components/TestimonialCard";

import {
  homeHero,
  homeIntro,
  homeCardBlurbs,
  homeTrustItems,
  homeTrustCaption,
} from "@/content/home";
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
        variant="split"
        eyebrow={homeHero.eyebrow}
        title={homeHero.title}
        subhead={homeHero.subhead}
        media={<ImagePlaceholder label="Witt Law attorneys, St. George" />}
      />

      <TrustBar caption={homeTrustCaption} items={homeTrustItems} />

      {/* Intro — text + photo */}
      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: "clamp(32px,5vw,64px)",
              alignItems: "center",
            }}
            className="home-intro"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span className="eyebrow">Who we are</span>
              <h2>{homeIntro.heading}</h2>
              {homeIntro.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "lead" : "muted"}>
                  {p}
                </p>
              ))}
              <Link className="link-arrow" href="/about/" style={{ alignSelf: "flex-start" }}>
                Meet the firm <span className="arr">→</span>
              </Link>
            </div>
            <div style={{ aspectRatio: "4 / 3", position: "relative", overflow: "hidden" }}>
              <ImagePlaceholder label="Witt Law office team" />
            </div>
          </div>
        </Container>
      </section>

      {/* Practice areas */}
      <section className="section section--tight">
        <Container>
          <SectionHeading eyebrow="Our practice areas">
            How we help Southern Utah families
          </SectionHeading>
          <div className="cards cols-3">
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
      <section className="section on-olive hatch">
        <Container>
          <SectionHeading eyebrow="Why Witt Law">What you can count on from us</SectionHeading>
          <ValueProps />
        </Container>
      </section>

      {/* Featured testimonials */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Client stories"
            action={
              <Link className="btn btn--ink" href="/reviews/">
                Read more client stories <span className="arr">↗</span>
              </Link>
            }
          >
            Words from the people we&apos;ve stood beside
          </SectionHeading>
          <div className="cards cols-3">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
