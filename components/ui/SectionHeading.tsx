/**
 * components/ui/SectionHeading.tsx
 * The design's .sec-head: eyebrow + title, with an optional right-aligned action
 * (e.g. an "All practice areas" button). Heading level configurable.
 */

import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  as: Heading = "h2",
  children,
  action,
  className = "",
}: {
  eyebrow?: string;
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`sec-head ${className}`.trim()}>
      <div className="sec-head__lines">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <Heading>{children}</Heading>
      </div>
      {action}
    </div>
  );
}
