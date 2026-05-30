/**
 * app/areas-we-serve/page.tsx — Areas We Serve hub (design 11-areas-served.html).
 * Hero → city card grid → CTA. Cities from cities.ts.
 */

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { cities } from "@/content/cities";

export const metadata = buildMetadata({
  title: "Areas We Serve | Witt Law Offices, Southern Utah",
  description:
    "Witt Law serves clients across Washington and Iron counties from its St. George office — St. George, Washington, Hurricane, Ivins, Santa Clara, and Cedar City.",
  path: "/areas-we-serve/",
});

export default function AreasWeServe() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas-we-serve/" },
        ])}
      />

      <Hero
        eyebrow="Areas we serve"
        title="Serving Southern Utah"
        subhead="From our St. George office, Witt Law represents clients across Washington and Iron counties. Here are some of the communities we serve."
        primaryCta={null}
        showCall={false}
      />

      <section className="section section--tight">
        <Container>
          <div className="cards cols-3">
            {cities.map((c) => (
              <Link key={c.slug} className="card" href={`/areas-we-serve/${c.slug}/`}>
                <div className="card__media">
                  <ImagePlaceholder label={`${c.name}, Utah`} />
                </div>
                <div className="card__body">
                  <span className="card__tag">{c.county}</span>
                  <h3>{c.name}</h3>
                  <p>{c.blurb}</p>
                  <span className="link-arrow" style={{ marginTop: "auto", border: "none", padding: 0 }}>
                    Explore {c.name} <span className="arr">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
