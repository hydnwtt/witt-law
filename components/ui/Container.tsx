/**
 * components/ui/Container.tsx
 * Centered max-width wrapper (1152px) with responsive gutters.
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
  return <Tag className={`container-content ${className}`.trim()}>{children}</Tag>;
}
