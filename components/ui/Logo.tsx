/**
 * components/ui/Logo.tsx
 * Wordmark per the design: "WITT LAW®" in DM Serif Display (the .brand class).
 * Color is inherited (on-olive in header/footer). Placeholder for the firm's
 * real SVG logo in public/brand/.
 */

import { firm } from "@/content/firm";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`brand ${className}`.trim()}>
      {firm.shortName.toUpperCase()}
      <sup>&reg;</sup>
    </span>
  );
}
