/**
 * app/page.tsx — TEMPORARY placeholder.
 * The real homepage is P1 (Phase 1). This stands in so the foundation builds and
 * renders the global shell. It is intentionally minimal.
 */

import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="St. George, Utah"
        title="Trusted attorneys for life's hardest moments."
        subhead="Phase 0 foundations are in place. The full homepage (P1) is built in Phase 1."
      />
      <Container className="py-12">
        <p className="text-muted">
          This is a placeholder home page. See the{" "}
          <Link href="/styleguide/" className="link">
            design system &amp; component styleguide
          </Link>{" "}
          for the Phase 0 deliverables.
        </p>
      </Container>
      <CTA />
    </>
  );
}
