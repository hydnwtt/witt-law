/**
 * components/Footer.tsx
 * Olive footer (design's .site-footer): brand + descriptor, NAP (map/phone/
 * Facebook), Practice Areas / Firm columns, embedded map + Get Directions,
 * dynamic-year copyright, disclaimers. All contact data from firm.ts.
 */

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerPracticeNav, footerFirmNav } from "@/lib/nav";
import { firm, disclaimers } from "@/content/firm";

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `${firm.address.line1}, ${firm.address.city}, ${firm.address.state} ${firm.address.zip}`
)}&output=embed`;

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand">
              {firm.shortName.toUpperCase()}
              <sup>&reg;</sup>
            </div>
            <p>{firm.name} — trusted attorneys serving {firm.serviceArea}.</p>
            <div className="footer-meta">
              <a href={firm.address.mapUrl} target="_blank" rel="noopener">
                <MapPin />
                <span>
                  {firm.address.line1}
                  <br />
                  {firm.address.city}, {firm.address.state} {firm.address.zip}
                </span>
              </a>
              <a href={firm.phone.href}>
                <Phone />
                {firm.phone.display}
              </a>
              <a href={firm.facebook} target="_blank" rel="noopener">
                <FacebookIcon />
                Facebook
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Practice Areas</h4>
            {footerPracticeNav.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Firm</h4>
            {footerFirmNav.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="footer-col footer-map">
            <h4>Find us</h4>
            <div className="footer-map__frame">
              <iframe
                title="Map to Witt Law Offices"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapEmbed}
              />
            </div>
            <a className="link-arrow" href={firm.address.mapUrl} target="_blank" rel="noopener">
              Get Directions <span className="arr">→</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {year} {firm.name}. All rights reserved.
          </span>
          <span>
            <Link href="/privacy/">Privacy</Link> &nbsp;·&nbsp;{" "}
            <Link href="/legal-disclaimer/">Disclaimer</Link>
          </span>
        </div>
        <p className="footer-disclaimer">
          {disclaimers.footer} {disclaimers.advertising}
        </p>
      </Container>
    </footer>
  );
}
