/**
 * app/results/page.tsx — Results / Client Stories (design 08-results.html).
 * 🔴 The firm hasn't supplied approved, anonymized case results, so per the build
 * doc this ships as the lighter "Client Stories" variant sourced from reviews,
 * with the mandatory Rule 7.1 disclaimer. NO self-serving Review/AggregateRating
 * schema. Swap in attorney-approved results when available.
 */

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/content/testimonials";
import { disclaimers } from "@/content/firm";

export const metadata = buildMetadata({
  title: "Client Stories | Witt Law, St. George Utah",
  description:
    "Real experiences from Witt Law clients across Southern Utah. Past results do not guarantee future outcomes — each case depends on its facts.",
  path: "/results/",
});

export default function Results() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Results", path: "/results/" },
        ])}
      />

      <Hero
        eyebrow="Client stories"
        title="Stories from people we've helped"
        subhead="Until we publish anonymized case results, here's what Southern Utah clients have said about working with Witt Law through their hardest moments."
        primaryCta={{ label: "Schedule a Consultation", href: "/contact/" }}
        showCall
      />

      <section className="section section--tight">
        <Container>
          <div className="cards cols-3">
            {testimonials.slice(0, 9).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <section className="disclaimer">
        <Container>
          <p>{disclaimers.results} {disclaimers.reviews}</p>
        </Container>
      </section>

      <CTA />
    </>
  );
}
