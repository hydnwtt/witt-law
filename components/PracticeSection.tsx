/**
 * components/PracticeSection.tsx
 * One sub-topic block on a pillar page, rendered as a real anchored <section>
 * with an <h2> — replacing the old site's JS-gated tabs. Content is always in
 * the DOM on load and reachable by anchor link (e.g. /personal-injury/#auto-accidents).
 *
 * `children` is the body copy; pass a CopyStatusBadge via `flag` for unreviewed copy.
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
  /** Optional badge (e.g. <CopyStatusBadge status="write-verify" />). */
  flag?: ReactNode;
  /** Optional link to the full child page (Phase 2). */
  cta?: { label: string; href: string };
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-8 first:border-t-0">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-2xl">{title}</h2>
        {flag}
      </div>
      <div className="prose mt-4">{children}</div>
      {cta && (
        <a
          href={cta.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-strong hover:text-accent-dark"
        >
          {cta.label} &rarr;
        </a>
      )}
    </section>
  );
}
