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

import { firm } from "@/content/firm";

type Cta = { label: string; href: string };

interface HeroProps {
  variant?: "split" | "banner" | "center";
  eyebrow?: ReactNode;
  title: ReactNode;
  subhead?: ReactNode;
  primaryCta?: Cta | null;
  /** Optional second button rendered in the SAME action row (e.g. "Meet the team"). */
  secondaryCta?: Cta | null;
  showCall?: boolean;
  media?: ReactNode;
  children?: ReactNode;
}

function Actions({
  onPaper,
  primaryCta,
  secondaryCta,
  showCall,
}: {
  onPaper: boolean;
  primaryCta: Cta | null;
  secondaryCta?: Cta | null;
  showCall: boolean;
}) {
  if (!primaryCta && !secondaryCta && !showCall) return null;
  const isInternal = (href: string) => href.startsWith("/");
  return (
    <div className="hero-actions">
      {primaryCta && (
        <a className={`btn ${onPaper ? "btn--primary" : "btn--light"}`} href={primaryCta.href}>
          {primaryCta.label} <span className="arr">↗</span>
        </a>
      )}
      {secondaryCta && (
        <a className={`btn ${onPaper ? "btn--ghost" : "btn--ghost-light"}`} href={secondaryCta.href}>
          {secondaryCta.label}
          {!isInternal(secondaryCta.href) && <span className="arr">↗</span>}
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
  secondaryCta = null,
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
          <Actions onPaper={false} primaryCta={primaryCta} secondaryCta={secondaryCta} showCall={showCall} />
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
              <Actions onPaper primaryCta={primaryCta} secondaryCta={secondaryCta} showCall={showCall} />
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
        <Actions onPaper={false} primaryCta={primaryCta} secondaryCta={secondaryCta} showCall={showCall} />
        {children}
      </Container>
    </section>
  );
}
