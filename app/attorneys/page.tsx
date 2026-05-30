/**
 * app/attorneys/page.tsx — Attorneys index (design 05-listing.html).
 * Centered hero → featured attorney rows (.att-feat) → support team cards → CTA.
 * Breadcrumb JSON-LD. Data from team.ts.
 */

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";
import { AttorneyCard } from "@/components/AttorneyCard";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { attorneys, staff } from "@/content/team";
import { getPillar } from "@/content/practiceAreas";
import { attorneysIndexCopy } from "@/content/siteCopy";

export const metadata = buildMetadata({
  title: "Our Attorneys | Witt Law, St. George Utah",
  description:
    "Meet the attorneys behind Witt Law in St. George, Utah. You work directly with an experienced attorney who knows your case. Call (435) 673-8400.",
  path: "/attorneys/",
});

export default function Attorneys() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Attorneys", path: "/attorneys/" },
        ])}
      />

      <Hero
        variant="center"
        eyebrow="Our team"
        title="Our Attorneys"
        subhead={attorneysIndexCopy.intro}
        primaryCta={null}
        showCall={false}
      />

      <section className="section section--tight">
        <Container>
          <SectionHeading eyebrow="Attorneys">Leading your case</SectionHeading>
          {attorneys.map((m) => (
            <div className="att-feat" key={m.slug}>
              <Link className="att-feat__photo" href={`/attorneys/${m.slug}/`} aria-label={m.name}>
                <Avatar src={m.headshot} alt={m.name} label={m.name} />
              </Link>
              <div className="att-feat__body">
                <span className="card__tag">{m.title}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "2rem" }}>
                  <Link href={`/attorneys/${m.slug}/`}>{m.name}</Link>
                </h3>
                <p style={{ fontSize: "var(--fs-body)", color: "var(--ink-2)" }}>{m.blurb}</p>
                {m.practiceAreaSlugs && m.practiceAreaSlugs.length > 0 && (
                  <div className="jumplist" style={{ marginTop: 4 }}>
                    {m.practiceAreaSlugs.map((slug) => {
                      const p = getPillar(slug);
                      return p ? (
                        <Link key={slug} href={`/${p.slug}/`}>
                          {p.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                )}
                <Link className="link-arrow" href={`/attorneys/${m.slug}/`} style={{ marginTop: 6, border: "none", padding: 0, alignSelf: "flex-start" }}>
                  View full bio <span className="arr">→</span>
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {staff.length > 0 && (
        <section className="section section--tight">
          <Container>
            <SectionHeading eyebrow="Support team">The people who keep things moving</SectionHeading>
            <div className="cards cols-2">
              {staff.map((m) => (
                <AttorneyCard key={m.slug} member={m} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA />
    </>
  );
}
