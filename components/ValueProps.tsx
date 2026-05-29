/**
 * components/ValueProps.tsx
 * The four "Why Witt Law" value props (content/valueProps.ts). Reused on Home,
 * About, and Mediation. Headings configurable; renders as a definition-style grid.
 */

import { Check } from "lucide-react";
import { valueProps } from "@/content/valueProps";

export function ValueProps() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {valueProps.map((vp) => (
        <li key={vp.title} className="rounded-xl border border-line bg-bg p-5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-navy/5 text-navy">
            <Check aria-hidden="true" className="size-5" />
          </span>
          <h3 className="mt-3 text-lg">{vp.title}</h3>
          <p className="mt-1 text-sm text-muted leading-relaxed">{vp.body}</p>
        </li>
      ))}
    </ul>
  );
}
