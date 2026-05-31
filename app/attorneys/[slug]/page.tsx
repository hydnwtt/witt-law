/**
 * app/attorneys/[slug]/page.tsx — team bio (design 04-attorney-bio.html).
 * Attorneys get the full template (narrative + credentials aside + "Schedule
 * with X"); staff get a simpler bio (photo + narrative + contact CTA). Person +
 * Breadcrumb JSON-LD. Statically generated for every team member.
 *
 * VERIFY before launch: attorney credentials, bar admissions, associations.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";
import { CTA } from "@/components/CTA";
import { team, getMember } from "@/content/team";
import { getPillar } from "@/content/practiceAreas";
import { firm } from "@/content/firm";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getMember(slug);
  if (!m) return {};
  return buildMetadata({
    title: `${m.name}, ${m.title} | Witt Law, St. George UT`,
    description: m.blurb,
    path: `/attorneys/${m.slug}/`,
  });
}

export default async function BioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getMember(slug);
  if (!m) notFound();

  const isAttorney = m.role === "attorney";
  const [intro, ...rest] = m.bio;
  const firstName = m.name.split(" ")[0];

  const schema = [
    personSchema(m),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Attorneys", path: "/attorneys/" },
      { name: m.name, path: `/attorneys/${m.slug}/` },
    ]),
  ];

  return (
    <>
      <JsonLd data={schema} />

      {/* Header */}
      <section className="on-olive hatch">
        <Container>
          <div className="bio-head">
            <div className="bio-head__photo">
              <Avatar src={m.headshot} alt={m.name} label={m.name} />
            </div>
            <div>
              <span className="eyebrow on-dark">{m.title}</span>
              <h1 style={{ margin: "16px 0 18px", fontSize: "var(--fs-display)" }}>{m.name}</h1>
              {intro && (
                <p className="lead" style={{ maxWidth: "52ch" }}>
                  {intro}
                </p>
              )}
              <div className="hero-actions" style={{ marginTop: 26 }}>
                <Link className="btn btn--light" href="/contact/">
                  {isAttorney ? (
                    <>Schedule with {firstName} <span className="arr">↗</span></>
                  ) : (
                    <>Contact our office <span className="arr">↗</span></>
                  )}
                </Link>
                <a className="btn btn--ghost-light" href={firm.phone.href}>
                  <Phone /> Call {firm.phone.display}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="section">
        <Container>
          {isAttorney ? (
            <div className="bio-grid">
              <div className="prose">
                <span className="eyebrow">Why I practice</span>
                {rest.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {m.practiceAreaSlugs && m.practiceAreaSlugs.length > 0 && (
                  <>
                    <h2>Practice areas</h2>
                    <div className="jumplist" style={{ marginTop: 8 }}>
                      {m.practiceAreaSlugs.map((s) => {
                        const p = getPillar(s);
                        return p ? (
                          <Link key={s} href={`/${p.slug}/`}>
                            {p.name}
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </>
                )}
              </div>

              <aside className="bio-aside">
                {m.credentials && m.credentials.length > 0 && (
                  <div>
                    <div className="mono-label" style={{ marginBottom: 14 }}>Credentials</div>
                    <ul>
                      {m.credentials.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {((m.barAdmissions && m.barAdmissions.length) || (m.associations && m.associations.length)) && (
                  <div>
                    <div className="mono-label" style={{ marginBottom: 14 }}>Bar &amp; associations</div>
                    <ul>
                      {[...(m.barAdmissions ?? []), ...(m.associations ?? [])].map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bio-card">
                  <div className="mono-label" style={{ marginBottom: 12 }}>Work with {firstName}</div>
                  <p style={{ fontSize: "var(--fs-sm)", color: "var(--ink-2)", marginBottom: 18 }}>
                    A direct conversation with the attorney who&apos;ll handle your matter — not a screener.
                  </p>
                  <Link className="btn btn--primary" href="/contact/" style={{ width: "100%", justifyContent: "center" }}>
                    Schedule a Consultation <span className="arr">↗</span>
                  </Link>
                </div>
              </aside>
            </div>
          ) : (
            /* Staff: single prose column */
            <div className="prose" style={{ marginInline: "auto" }}>
              <span className="eyebrow">About {firstName}</span>
              {rest.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                <Link href="/attorneys/">&larr; Back to our team</Link>
              </p>
            </div>
          )}
        </Container>
      </section>

      <CTA />
    </>
  );
}
