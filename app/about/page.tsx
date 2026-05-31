/**
 * app/about/page.tsx — About (design 06-about.html).
 * Hero → story (prose + photo) → olive value props → team summary → community
 * note → CTA. Organization + LegalService + Breadcrumb JSON-LD. 301 from
 * /about-witt-law/ handled in next.config.
 */

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, legalServiceSchema, breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { ValueProps } from "@/components/ValueProps";
import { AttorneyCard } from "@/components/AttorneyCard";
import { team } from "@/content/team";
import { aboutCopy } from "@/content/siteCopy";

export const metadata = buildMetadata({
  title: "About Witt Law | St. George, Utah Law Firm",
  description:
    "Witt Law has served Southern Utah from St. George since 2013. Meet the attorneys and staff behind the firm. Call (435) 673-8400.",
  path: "/about/",
});

export default function About() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          legalServiceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about/" },
          ]),
        ]}
      />

      <Hero
        eyebrow="About the firm"
        title="About Witt Law"
        subhead={aboutCopy.subhead}
        primaryCta={{ label: "Schedule a Consultation", href: "/contact/" }}
        secondaryCta={{ label: "Meet the team", href: "/attorneys/" }}
        showCall={false}
      />

      {/* Story */}
      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.9fr",
              gap: "clamp(40px,5vw,72px)",
              alignItems: "center",
            }}
            className="about-story"
          >
            <div className="prose">
              <span className="eyebrow">Our story</span>
              <h2 style={{ margin: "14px 0 8px" }}>Two decades serving southwest Utah</h2>
              {aboutCopy.history.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div style={{ aspectRatio: "4 / 5", position: "relative", overflow: "hidden" }}>
              <ImagePlaceholder label="Witt Law office, St. George" />
            </div>
          </div>
        </Container>
      </section>

      {/* Value props */}
      <section className="section on-olive hatch">
        <Container>
          <SectionHeading eyebrow="Why Witt Law">What you can count on from us</SectionHeading>
          <ValueProps />
        </Container>
      </section>

      {/* Team */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Our team"
            action={
              <Link className="btn btn--ink" href="/attorneys/">
                Meet our attorneys <span className="arr">↗</span>
              </Link>
            }
          >
            A small firm, by design
          </SectionHeading>
          <p className="lead" style={{ maxWidth: "64ch", marginBottom: 40 }}>
            Because we&apos;re a small Southern Utah firm, you work directly with an experienced
            attorney who knows your case — supported by a team that keeps everything moving.
          </p>
          <div className="cards cols-3">
            {team.map((m) => (
              <AttorneyCard key={m.slug} member={m} />
            ))}
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="section section--tight on-paper-2">
        <Container>
          <div style={{ maxWidth: "80ch" }}>
            <div className="mono-label" style={{ marginBottom: 8 }}>
              In the community
            </div>
            <p className="muted">{aboutCopy.community}</p>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
