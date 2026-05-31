/**
 * components/CTA.tsx
 * Olive consult band (design's .cta-band): centered eyebrow + H2 + lead + two
 * buttons (light + ghost-light). Copy from the build doc; phone from firm.ts.
 */

import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { firm } from "@/content/firm";

export function CTA({
  eyebrow = "Free consultation",
  heading = "Talk to an attorney who'll actually listen",
  body = "Most consultations are free, and we'll give you a straight answer about where you stand.",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <section className="cta-band hatch">
      <Container>
        <span className="eyebrow on-dark">{eyebrow}</span>
        <h2>{heading}</h2>
        <p className="lead">{body}</p>
        <div className="hero-actions">
          <a className="btn btn--light" href="/contact/">
            Schedule a Consultation <span className="arr">↗</span>
          </a>
          <a className="btn btn--ghost-light" href={firm.phone.href}>
            <Phone /> Call {firm.phone.display}
          </a>
        </div>
      </Container>
    </section>
  );
}
