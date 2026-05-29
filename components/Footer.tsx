/**
 * components/Footer.tsx  (F2)
 * Site footer: logo + descriptor, NAP (address → Google Maps, phone tel:,
 * Facebook), two link columns (Practice Areas / Firm), a Get Directions link,
 * dynamic-year copyright, and the required disclaimers. ALL contact data comes
 * from firm.ts — nothing hard-coded. The year is computed at render, not baked in.
 */

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

/** Facebook brand mark (lucide dropped brand icons), inline so we avoid a dep. */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerPracticeNav, footerFirmNav } from "@/lib/nav";
import { firm, disclaimers } from "@/content/firm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-soft">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand + NAP */}
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm text-muted leading-relaxed">
              A Southern Utah law firm serving {firm.serviceArea}.
            </p>
            <address className="mt-4 flex flex-col gap-2 text-sm not-italic text-ink">
              <a
                href={firm.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:text-navy"
              >
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>
                  {firm.address.line1}
                  <br />
                  {firm.address.city}, {firm.address.state} {firm.address.zip}
                </span>
              </a>
              <a href={firm.phone.href} className="inline-flex items-center gap-2 hover:text-navy">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-accent" />
                {firm.phone.display}
              </a>
              <a
                href={firm.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-navy"
              >
                <FacebookIcon className="size-4 shrink-0 text-accent" />
                Facebook
              </a>
            </address>
            <a
              href={firm.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link mt-4 inline-block text-sm"
            >
              Get Directions
            </a>
          </div>

          {/* Practice Areas */}
          <nav aria-label="Practice areas">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Practice Areas
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {footerPracticeNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-navy">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Firm */}
          <nav aria-label="Firm">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">Firm</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {footerFirmNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-navy">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal */}
        <div className="mt-10 border-t border-line pt-6 text-xs text-muted">
          <p>{disclaimers.footer}</p>
          <p className="mt-2">{disclaimers.advertising}</p>
          <p className="mt-2">
            &copy; {year} {firm.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
