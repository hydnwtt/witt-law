/**
 * components/ui/Container.tsx
 * Centered max-width wrapper (design's .container — 1200px, 24px gutters).
 */

import type { ElementType, ReactNode } from "react";

export function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={`container ${className}`.trim()}>{children}</Tag>;
}
