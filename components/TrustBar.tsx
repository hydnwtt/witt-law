/**
 * components/TrustBar.tsx
 * The design's .trust strip: a mono caption over a row of serif trust marks.
 * Factual signals only (no fabricated star average).
 */

import { Container } from "@/components/ui/Container";

export function TrustBar({
  caption = "Serving Southern Utah for more than two decades",
  items,
}: {
  caption?: string;
  items: string[];
}) {
  return (
    <section className="trust">
      <Container>
        <div className="mono-label" style={{ alignSelf: "center" }}>
          {caption}
        </div>
        <div className="trust__row">
          {items.map((item) => (
            <span className="trust__logo" key={item}>
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
