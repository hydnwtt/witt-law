/**
 * components/ServicePage.tsx  (shared service child template, design 03-service.html)
 * Olive hero (breadcrumb eyebrow → pillar) → body (prose + sticky "free case
 * review" aside) → FAQ (paper-2) → related services → attorney strip → CTA.
 * Emits LegalService + FAQPage + BreadcrumbList JSON-LD. Copy from serviceContent.ts.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyStatusBadge } from "@/components/ui/CopyStatusBadge";
import { BlockContent } from "@/components/BlockContent";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AttorneyStrip } from "@/components/AttorneyStrip";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { legalServiceSchema, faqPageSchema, breadcrumbSchema } from "@/lib/jsonld";
import { getPillar, getService } from "@/content/practiceAreas";
import { getServiceContent } from "@/content/serviceContent";
import { firm } from "@/content/firm";

export function ServicePage({ pillarSlug, serviceSlug }: { pillarSlug: string; serviceSlug: string }) {
  const pillar = getPillar(pillarSlug);
  const service = getService(pillarSlug, serviceSlug);
  const content = getServiceContent(serviceSlug);
  if (!pillar || !service || !content) notFound();

  const siblings = pillar.services.filter((s) => s.slug !== serviceSlug);

  const schema = [
    legalServiceSchema(),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: pillar.name, path: `/${pillar.slug}/` },
      { name: service.title, path: `/${pillar.slug}/${service.slug}/` },
    ]),
    ...(content.faqs.length ? [faqPageSchema(content.faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="hero-banner hatch">
        <Container>
          <span className="eyebrow on-dark">
            <Link href={`/${pillar.slug}/`} style={{ color: "inherit", borderBottom: "1px solid currentColor", paddingBottom: 1 }}>
              {pillar.name}
            </Link>{" "}
            · St. George, Utah
          </span>
          <h1>{content.h1}</h1>
          <p className="lead">{content.lead}</p>
          {service.copyStatus === "write-verify" && (
            <div style={{ marginTop: 16 }}>
              <CopyStatusBadge status="write-verify" />
            </div>
          )}
          <div className="hero-actions">
            <Link className="btn btn--light" href="/contact/">
              Schedule a Consultation <span className="arr">↗</span>
            </Link>
            <a className="btn btn--ghost-light" href={firm.phone.href}>
              <Phone /> Call {firm.phone.display}
            </a>
          </div>
        </Container>
      </section>

      {/* Body + aside */}
      <section className="section">
        <Container>
          <div className="service-grid" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "clamp(40px,5vw,72px)", alignItems: "start" }}>
            <div className="prose">
              <BlockContent blocks={content.blocks} />
            </div>
            <aside style={{ position: "sticky", top: 96, display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="bio-card">
                <div className="mono-label" style={{ marginBottom: 12 }}>Free case review</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.5rem", marginBottom: 10 }}>
                  {content.asideHeading ?? "Talk to an attorney"}
                </h3>
                <p style={{ fontSize: "var(--fs-sm)", color: "var(--ink-2)", marginBottom: 18 }}>
                  {content.asideBody ?? "Tell us what happened and we'll give you a straight answer about where you stand."}
                </p>
                <Link className="btn btn--primary" href="/contact/" style={{ width: "100%", justifyContent: "center" }}>
                  Schedule a Consultation <span className="arr">↗</span>
                </Link>
                <a className="nav__call" href={firm.phone.href} style={{ border: "none", padding: "14px 0 0", margin: 0, justifyContent: "center", color: "var(--ink)" }}>
                  <Phone /> {firm.phone.display}
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <section className="section section--tight on-paper-2">
          <Container>
            <SectionHeading eyebrow="FAQs">Common questions</SectionHeading>
            <FAQAccordion faqs={content.faqs} defaultOpenFirst />
          </Container>
        </section>
      )}

      {/* Related */}
      <section className="section section--tight">
        <Container>
          <SectionHeading eyebrow="Related">Related services</SectionHeading>
          <div className="related">
            {siblings.map((s) => (
              <Link key={s.slug} href={`/${pillar.slug}/${s.slug}/`}>
                {s.title} <span className="arr">→</span>
              </Link>
            ))}
            <Link href={`/${pillar.slug}/`} style={{ background: "var(--paper-2)" }}>
              {pillar.name} (all) <span className="arr">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Attorney strip */}
      <section className="section section--tight">
        <Container>
          <AttorneyStrip slugs={pillar.attorneySlugs} />
        </Container>
      </section>

      <CTA />
    </>
  );
}
