/**
 * app/not-found.tsx — custom 404 (design 14-404.html).
 * Olive centered hero → practice-area links → CTA. Renders inside the root layout
 * (header/footer present). Phone from firm.ts.
 */

import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/CTA";
import { practiceAreas } from "@/content/practiceAreas";
import { firm } from "@/content/firm";
import { notFoundCopy } from "@/content/siteCopy";

export default function NotFound() {
  return (
    <>
      <section className="hero-center" style={{ background: "var(--olive)" }}>
        <Container>
          <span className="eyebrow on-dark" style={{ justifyContent: "center" }}>
            Error 404
          </span>
          <h1 style={{ marginTop: 18, color: "var(--on-olive)" }}>{notFoundCopy.heading}</h1>
          <p className="lead" style={{ color: "var(--on-olive-dim)", margin: "18px auto 0" }}>
            {notFoundCopy.body}
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 30 }}>
            <Link className="btn btn--light" href="/">
              Back home <span className="arr">↗</span>
            </Link>
            <a className="btn btn--ghost-light" href={firm.phone.href}>
              <Phone /> Call {firm.phone.display}
            </a>
          </div>
        </Container>
      </section>

      <section className="section section--tight">
        <Container>
          <SectionHeading eyebrow="Practice areas">Find what you need</SectionHeading>
          <div className="related">
            {practiceAreas.map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`}>
                {p.name} <span className="arr">→</span>
              </Link>
            ))}
            <Link href="/contact/">
              Contact us <span className="arr">→</span>
            </Link>
            <Link href="/attorneys/">
              Our attorneys <span className="arr">→</span>
            </Link>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
