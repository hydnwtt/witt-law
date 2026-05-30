/**
 * components/Hero.tsx
 * Page hero in the design's three flavors:
 *  - "split"  : olive text block + image (homepage .hero-split)
 *  - "banner" : olive band with page title (interior pages .hero-banner)
 *  - "center" : centered on paper (listing/reviews .hero-center)
 * Single <h1> per page. Phone from firm.ts.
 */

import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface HeroProps {
  variant?: "split" | "banner" | "center";
  eyebrow?: ReactNode;
  title: ReactNode;
  subhead?: ReactNode;
  primaryCta?: { label: string; href: string } | null;
  showCall?: boolean;
  media?: ReactNode;
  children?: ReactNode;
}

import { firm } from "@/content/firm";

function Actions({ onPaper, primaryCta, showCall }: {
  onPaper: boolean;
  primaryCta: { label: string; href: string } | null;
  showCall: boolean;
}) {
  if (!primaryCta && !showCall) return null;
  return (
    <div className="hero-actions">
      {primaryCta && (
        <a className={`btn ${onPaper ? "btn--primary" : "btn--light"}`} href={primaryCta.href}>
          {primaryCta.label} <span className="arr">↗</span>
        </a>
      )}
      {showCall && (
        <a className={`btn ${onPaper ? "btn--ghost" : "btn--ghost-light"}`} href={firm.phone.href}>
          <Phone /> Call {firm.phone.display}
        </a>
      )}
    </div>
  );
}

export function Hero({
  variant = "banner",
  eyebrow,
  title,
  subhead,
  primaryCta = { label: "Schedule a Consultation", href: "/contact/" },
  showCall = true,
  media,
  children,
}: HeroProps) {
  if (variant === "split") {
    return (
      <section className="hero-split hatch">
        <div className="hero-split__text">
          {eyebrow && <span className="eyebrow on-dark">{eyebrow}</span>}
          <h1>{title}</h1>
          {subhead && <p className="lead">{subhead}</p>}
          <Actions onPaper={false} primaryCta={primaryCta} showCall={showCall} />
          {children}
        </div>
        <div className="hero-split__media">{media}</div>
      </section>
    );
  }

  if (variant === "center") {
    return (
      <section className="hero-center">
        <Container>
          {eyebrow && <span className="eyebrow" style={{ justifyContent: "center" }}>{eyebrow}</span>}
          <h1 style={{ marginTop: 18 }}>{title}</h1>
          {subhead && <p className="lead">{subhead}</p>}
          {(primaryCta || showCall) && (
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 26 }}>
              <Actions onPaper primaryCta={primaryCta} showCall={showCall} />
            </div>
          )}
          {children}
        </Container>
      </section>
    );
  }

  return (
    <section className="hero-banner hatch">
      <Container>
        {eyebrow && <span className="eyebrow on-dark">{eyebrow}</span>}
        <h1>{title}</h1>
        {subhead && <p className="lead">{subhead}</p>}
        <Actions onPaper={false} primaryCta={primaryCta} showCall={showCall} />
        {children}
      </Container>
    </section>
  );
}
