/**
 * components/TrustBar.tsx
 * Compact strip of trust signals (years in practice, review note, associations).
 * Takes typed items so pages stay declarative. Badge images can be swapped in
 * for the icon slot once the firm supplies them (OPS5 asset collection).
 */

import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export interface TrustItem {
  /** Big value, e.g. "30+". */
  value: string;
  /** Label under the value, e.g. "Years serving Southern Utah". */
  label: string;
  icon?: ReactNode;
}

export function TrustBar({
  items,
  className = "",
}: {
  items: TrustItem[];
  className?: string;
}) {
  return (
    <section className={`border-b border-line bg-bg ${className}`.trim()}>
      <Container className="py-6">
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((item) => (
            <li key={item.label} className="flex flex-col items-center text-center">
              {item.icon && <span className="mb-1 text-accent">{item.icon}</span>}
              <span className="font-serif text-2xl font-semibold text-ink">
                {item.value}
              </span>
              <span className="mt-1 text-sm text-muted">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
