/**
 * components/ui/Logo.tsx
 * Placeholder wordmark until the firm supplies a real SVG logo (OPS5 / F1 asset).
 * Swap the inner markup for the supplied SVG; keep the firm name as accessible
 * text. A small scales-of-justice mark stands in for the brand mark.
 */

import { Scale } from "lucide-react";
import { firm } from "@/content/firm";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`.trim()}>
      <Scale aria-hidden="true" className="size-6 text-accent" />
      <span className="font-serif text-xl font-semibold leading-none text-ink">
        {firm.shortName}
      </span>
      {/* TODO: replace with the firm's real SVG logo when supplied. */}
    </span>
  );
}
