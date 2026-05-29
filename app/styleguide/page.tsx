/**
 * app/styleguide/page.tsx  (F1 + F3)
 * Living documentation of the design system and component library. noindex.
 * This is the Phase 0 acceptance surface: colors, type, buttons/focus, and every
 * reusable component rendered with real content.
 */

import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CopyStatusBadge } from "@/components/ui/CopyStatusBadge";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { TrustBar } from "@/components/TrustBar";
import { PracticeCard } from "@/components/PracticeCard";
import { PracticeSection } from "@/components/PracticeSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AttorneyCard } from "@/components/AttorneyCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JumpList } from "@/components/JumpList";
import { PostCard } from "@/components/PostCard";
import { ContactForm } from "@/components/ContactForm";

import { practiceAreas } from "@/content/practiceAreas";
import { team } from "@/content/team";
import { featuredTestimonials } from "@/content/testimonials";
import { getFaqs } from "@/content/faqs";

export const metadata = buildMetadata({
  title: "Styleguide — Witt Law Design System",
  description: "Internal design system and component library (Phase 0).",
  path: "/styleguide/",
  index: false,
});

const COLORS = [
  { name: "ink", varName: "--color-ink", hex: "#1a2238", note: "Primary text / headings" },
  { name: "navy", varName: "--color-navy", hex: "#233659", note: "Brand primary, primary button (~10:1)" },
  { name: "accent", varName: "--color-accent", hex: "#b8862f", note: "Gold — rules, borders, focus (3:1, not body text)" },
  { name: "accent-strong", varName: "--color-accent-strong", hex: "#8a6420", note: "AA-safe gold for text links (5.4:1)" },
  { name: "bg-soft", varName: "--color-bg-soft", hex: "#f5f4f0", note: "Warm section background" },
  { name: "line", varName: "--color-line", hex: "#e3e1da", note: "Hairline borders" },
  { name: "muted", varName: "--color-muted", hex: "#5b6472", note: "Secondary text" },
  { name: "success", varName: "--color-success", hex: "#2f6f4f", note: "Form success" },
  { name: "danger", varName: "--color-danger", hex: "#9b2c2c", note: "Form error / write-verify flag" },
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-12">
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function Styleguide() {
  const estate = practiceAreas.find((p) => p.slug === "estate-planning")!;

  return (
    <Container className="py-12">
      <header>
        <span className="text-sm font-semibold uppercase tracking-wider text-accent-strong">
          Phase 0
        </span>
        <h1 className="mt-2 text-4xl">Witt Law — Design System &amp; Components</h1>
        <span className="rule-accent mt-4" />
        <p className="mt-4 max-w-2xl text-muted">
          Tokens (F1) and the reusable component library (F3). All copy/data is
          pulled from <code>content/*.ts</code>; nothing is hard-coded.
        </p>
      </header>

      {/* COLORS */}
      <Block title="Color tokens">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COLORS.map((c) => (
            <div key={c.name} className="flex items-center gap-3 rounded-lg border border-line p-3">
              <span
                className="size-12 shrink-0 rounded-md border border-line"
                style={{ backgroundColor: `var(${c.varName})` }}
              />
              <div className="text-sm">
                <p className="font-semibold text-ink">
                  {c.name}{" "}
                  <span className="font-mono text-xs text-muted">{c.hex}</span>
                </p>
                <p className="text-muted">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* TYPE */}
      <Block title="Typography">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted">Serif headings (Newsreader)</p>
          <h1 className="text-5xl">Heading 1 — life&apos;s hardest moments</h1>
          <h2 className="text-4xl">Heading 2 — Estate Planning &amp; Administration</h2>
          <h3 className="text-2xl">Heading 3 — Trusts</h3>
          <p className="pt-4 text-xs uppercase tracking-wider text-muted">Body (Inter)</p>
          <div className="prose">
            <p>
              Comfortable reading measure (~70ch). When you&apos;re dealing with an
              injury, a divorce, a criminal charge, or planning for your family&apos;s
              future, you need someone who will listen first and explain things in
              plain language. Here is a <a href="#">text link</a> in the accent-strong
              gold, which meets AA contrast.
            </p>
          </div>
        </div>
      </Block>

      {/* BUTTONS + FOCUS */}
      <Block title="Buttons, links &amp; focus">
        <div className="flex flex-wrap items-center gap-3">
          <Button href="/contact/" variant="primary">Primary (navy)</Button>
          <Button href="/contact/" variant="secondary">Secondary (gold outline)</Button>
          <a href="#" className="link">Text link</a>
          <span className="rule-accent" />
        </div>
        <div className="mt-4 rounded-lg bg-navy p-4">
          <div className="flex flex-wrap gap-3">
            <Button href="/contact/" variant="on-dark">On dark (gold)</Button>
            <Button href="/contact/" variant="outline-on-dark">On dark (outline)</Button>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted">
          Tab through the controls to see the gold focus ring (2px + offset).
        </p>
      </Block>

      {/* HERO */}
      <Block title="Hero">
        <div className="-mx-5 overflow-hidden rounded-none border-y border-line">
          <Hero
            eyebrow="St. George, Utah"
            title="Trusted attorneys for life's hardest moments."
            subhead="For over two decades, Witt Law has helped Southern Utah families with straight answers and real care."
            media={<ImagePlaceholder label="Hero image: office / team" ratio="4 / 3" />}
          />
        </div>
      </Block>

      {/* TRUST BAR */}
      <Block title="TrustBar">
        <div className="-mx-5 border-y border-line">
          <TrustBar
            items={[
              { value: "30+", label: "Years serving Southern Utah" },
              { value: "2", label: "Attorneys" },
              { value: "5.0", label: "Average client review" },
              { value: "1,000s", label: "Clients represented" },
            ]}
          />
        </div>
      </Block>

      {/* SECTION HEADING */}
      <Block title="SectionHeading">
        <SectionHeading eyebrow="Why Witt Law" intro="Reused across Home, About, and Mediation.">
          A Southern Utah firm you can actually talk to.
        </SectionHeading>
      </Block>

      {/* PRACTICE CARDS */}
      <Block title="PracticeCard (6 pillars)">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((p) => (
            <PracticeCard
              key={p.slug}
              slug={p.slug}
              name={p.name}
              description={p.subhead}
              href={`/${p.slug}/`}
            />
          ))}
        </div>
      </Block>

      {/* JUMP LIST + PRACTICE SECTION */}
      <Block title="JumpList + PracticeSection (anchored, crawlable)">
        <div className="grid gap-8 lg:grid-cols-[200px_1fr]">
          <JumpList
            className="lg:sticky lg:top-24 lg:self-start"
            items={estate.services.slice(0, 4).map((s) => ({ id: s.slug, label: s.title }))}
          />
          <div>
            {estate.services.slice(0, 2).map((s) => (
              <PracticeSection
                key={s.slug}
                id={s.slug}
                title={s.title}
                flag={<CopyStatusBadge status={s.copyStatus} />}
                cta={{ label: `Read more about ${s.title}`, href: `/${estate.slug}/${s.slug}/` }}
              >
                <p>
                  Sample body copy for {s.title.toLowerCase()} would render here from
                  the practice-area content. Anchored as <code>#{s.slug}</code> and
                  present in the initial DOM (no click-gating).
                </p>
              </PracticeSection>
            ))}
          </div>
        </div>
      </Block>

      {/* COPY STATUS BADGES */}
      <Block title="CopyStatusBadge">
        <div className="flex flex-wrap items-center gap-3">
          <CopyStatusBadge status="ready" />
          <span className="text-sm text-muted">(ready renders nothing)</span>
          <CopyStatusBadge status="adapt" />
          <CopyStatusBadge status="write-verify" />
        </div>
      </Block>

      {/* TESTIMONIALS */}
      <Block title="TestimonialCard (featured)">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTestimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </Block>

      {/* ATTORNEY/TEAM CARDS */}
      <Block title="AttorneyCard (attorneys + staff)">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <AttorneyCard key={m.slug} member={m} />
          ))}
        </div>
      </Block>

      {/* FAQ */}
      <Block title="FAQAccordion (content in DOM when collapsed)">
        <FAQAccordion faqs={getFaqs("estate-planning")} defaultOpenFirst />
      </Block>

      {/* POST CARDS */}
      <Block title="PostCard">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <PostCard
            post={{
              slug: "help-with-estate-planning",
              title: "How Do I Get Help With Estate Planning?",
              excerpt: "A plain-language look at wills, trusts, and where to start.",
              date: "2023-06-15",
              category: "Estate Planning",
            }}
          />
          <PostCard
            post={{
              slug: "finding-an-auto-accident-lawyer",
              title: "Finding an Auto Accident Lawyer",
              excerpt: "What to look for after a collision in Southern Utah.",
              date: "2023-06-15",
              category: "Personal Injury",
            }}
          />
        </div>
      </Block>

      {/* STARS + PLACEHOLDER */}
      <Block title="Stars &amp; ImagePlaceholder">
        <div className="flex flex-wrap items-center gap-8">
          <Stars rating={5} />
          <div className="w-48">
            <ImagePlaceholder label="Headshot: Marshall Witt" ratio="1 / 1" />
          </div>
        </div>
      </Block>

      {/* CONTACT FORM */}
      <Block title="ContactForm">
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </Block>

      {/* CTA */}
      <Block title="CTA band">
        <div className="-mx-5">
          <CTA />
        </div>
      </Block>
    </Container>
  );
}
