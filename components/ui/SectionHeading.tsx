/**
 * components/ui/SectionHeading.tsx
 * Eyebrow + heading + gold rule. The heading level is configurable so pages
 * keep a single <h1> and a logical heading order (pass `as="h2"` etc.).
 */

import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  as: Heading = "h2",
  children,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center items-center" : "items-start";
  return (
    <div className={`flex flex-col ${alignment} ${className}`.trim()}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-accent-strong">
          {eyebrow}
        </span>
      )}
      <Heading
        className={`mt-2 text-3xl sm:text-4xl ${
          Heading === "h1" ? "sm:text-5xl" : ""
        }`}
      >
        {children}
      </Heading>
      <span className={`rule-accent mt-4 ${align === "center" ? "self-center" : ""}`} />
      {intro && (
        <div className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
          {intro}
        </div>
      )}
    </div>
  );
}
