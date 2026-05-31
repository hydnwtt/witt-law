/**
 * components/PracticeSection.tsx
 * One anchored sub-topic on a pillar page — a real <section id> with an <h2> and
 * prose body, present in the initial DOM (no JS tab-gating). `flag` carries a
 * CopyStatusBadge for unreviewed copy; `cta` optionally links to the child page.
 */

import type { ReactNode } from "react";

export function PracticeSection({
  id,
  title,
  children,
  flag,
  cta,
}: {
  id: string;
  title: string;
  children: ReactNode;
  flag?: ReactNode;
  cta?: { label: string; href: string };
}) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: "96px", borderTop: "1px solid var(--line)", paddingBlock: "var(--sp-6)" }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <h2 style={{ fontSize: "var(--fs-h3)" }}>{title}</h2>
        {flag}
      </div>
      <div className="prose">{children}</div>
      {cta && (
        <a className="link-arrow" href={cta.href} style={{ marginTop: 16 }}>
          {cta.label} <span className="arr">→</span>
        </a>
      )}
    </section>
  );
}
