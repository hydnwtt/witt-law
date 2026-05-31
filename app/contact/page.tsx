/**
 * app/contact/page.tsx — Contact (design 07-contact.html).
 * Hero → two columns (NAP + hours + map / ContactForm) → CTA. LegalService
 * JSON-LD with geo + opening hours; Breadcrumb. NAP from firm.ts.
 */

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { legalServiceSchema, breadcrumbSchema } from "@/lib/jsonld";
import { MapPin, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { firm } from "@/content/firm";
import { contactCopy } from "@/content/siteCopy";

export const metadata = buildMetadata({
  title: "Contact Witt Law | St. George, Utah Attorneys",
  description:
    "Get in touch with Witt Law in St. George, Utah. Call (435) 673-8400 or send us a message — most consultations are free.",
  path: "/contact/",
});

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `${firm.address.line1}, ${firm.address.city}, ${firm.address.state} ${firm.address.zip}`
)}&output=embed`;

const iconStyle = { color: "var(--olive)", width: 18, height: 18, flex: "none" as const };

export default function Contact() {
  return (
    <>
      <JsonLd
        data={[
          legalServiceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact/" },
          ]),
        ]}
      />

      <Hero
        eyebrow="Contact"
        title="Get in touch with Witt Law"
        subhead={contactCopy.subhead}
        primaryCta={null}
        showCall={false}
      />

      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.85fr 1.15fr",
              gap: "clamp(40px,5vw,72px)",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left: details */}
            <div>
              <span className="eyebrow">Visit or call</span>
              <h2 style={{ margin: "14px 0 24px", fontSize: "clamp(1.6rem,1.2rem+1vw,2.1rem)" }}>
                We&apos;re on Bluff Street in St. George
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <a
                  href={firm.address.mapUrl}
                  target="_blank"
                  rel="noopener"
                  style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "var(--ink-2)", fontSize: "var(--fs-sm)", lineHeight: 1.5 }}
                >
                  <MapPin style={{ ...iconStyle, marginTop: 2 }} />
                  <span>
                    {firm.address.line1}
                    <br />
                    {firm.address.city}, {firm.address.state} {firm.address.zip}
                  </span>
                </a>
                <a href={firm.phone.href} style={{ display: "flex", gap: 12, alignItems: "center", color: "var(--ink-2)", fontSize: "var(--fs-sm)" }}>
                  <Phone style={iconStyle} />
                  <span>{firm.phone.display}</span>
                </a>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "var(--ink-2)", fontSize: "var(--fs-sm)", lineHeight: 1.5 }}>
                  <Clock style={{ ...iconStyle, marginTop: 2 }} />
                  <span>
                    {contactCopy.hours.map((h, i) => (
                      <span key={i}>
                        {h}
                        {i < contactCopy.hours.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
              <div className="footer-map" style={{ marginTop: 28 }}>
                <div
                  className="footer-map__frame"
                  style={{ borderColor: "var(--line)", aspectRatio: "4 / 3", minHeight: 380 }}
                >
                  <iframe
                    title="Map to Witt Law Offices"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapEmbed}
                  />
                </div>
                <a className="link-arrow" href={firm.address.mapUrl} target="_blank" rel="noopener" style={{ color: "var(--ink)", borderColor: "var(--ink)" }}>
                  Get Directions <span className="arr">→</span>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <span className="eyebrow">Send a message</span>
              <h2 style={{ margin: "14px 0 24px", fontSize: "clamp(1.6rem,1.2rem+1vw,2.1rem)" }}>
                How can we help?
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
