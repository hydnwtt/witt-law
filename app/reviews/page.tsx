/**
 * app/reviews/page.tsx — Reviews / Testimonials (design reviews.html).
 * Centered hero (+ links to live Google/Facebook) → 17 review cards → disclaimer
 * band → CTA. NO self-serving Review/AggregateRating schema (see testimonials.ts).
 */

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/content/testimonials";
import { firm } from "@/content/firm";
import { reviewsCopy } from "@/content/siteCopy";

export const metadata = buildMetadata({
  title: "Client Reviews | Witt Law, St. George Utah",
  description:
    "See what Witt Law's clients in St. George and Southern Utah say about their experience. Read real reviews, then call (435) 673-8400.",
  path: "/reviews/",
});

export default function Reviews() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews/" },
        ])}
      />

      <Hero
        variant="center"
        eyebrow="Client reviews"
        title="What our clients say"
        subhead={reviewsCopy.subhead}
        primaryCta={null}
        showCall={false}
      >
        <div className="hero-actions" style={{ justifyContent: "center", marginTop: 26 }}>
          <a className="btn btn--primary" href={reviewsCopy.googleUrl} target="_blank" rel="noopener">
            Read on Google <span className="arr">↗</span>
          </a>
          <a className="btn btn--ghost" href={firm.facebook} target="_blank" rel="noopener">
            Read on Facebook <span className="arr">↗</span>
          </a>
        </div>
      </Hero>

      <section className="section section--tight">
        <Container>
          <div className="cards cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <section className="disclaimer">
        <Container>
          <p>{reviewsCopy.note}</p>
        </Container>
      </section>

      <CTA />
    </>
  );
}
