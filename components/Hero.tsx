/**
 * components/Hero.tsx
 * Full-width page hero: optional eyebrow, H1, one-line subhead, primary +
 * secondary CTAs, optional media slot. This is the page's single <h1>.
 * Phone CTA comes from firm.ts — never hard-coded.
 */

import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { firm } from "@/content/firm";

export function Hero({
  eyebrow,
  title,
  subhead,
  primaryCta = { label: "Schedule a Consultation", href: "/contact/" },
  showCallButton = true,
  media,
}: {
  eyebrow?: string;
  title: ReactNode;
  subhead?: ReactNode;
  primaryCta?: { label: string; href: string } | null;
  showCallButton?: boolean;
  /** Optional right-column media (e.g. ImagePlaceholder or next/image). */
  media?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-bg-soft">
      <Container className="py-14 sm:py-20">
        <div
          className={`grid items-center gap-10 ${
            media ? "lg:grid-cols-2" : ""
          }`}
        >
          <div className="max-w-2xl">
            {eyebrow && (
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-strong">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">{title}</h1>
            <span className="rule-accent mt-5" />
            {subhead && (
              <p className="mt-5 text-lg text-muted leading-relaxed sm:text-xl">
                {subhead}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </Button>
              )}
              {showCallButton && (
                <Button href={firm.phone.href} variant="secondary">
                  <Phone aria-hidden="true" className="size-4" />
                  Call {firm.phone.display}
                </Button>
              )}
            </div>
          </div>
          {media && <div>{media}</div>}
        </div>
      </Container>
    </section>
  );
}
