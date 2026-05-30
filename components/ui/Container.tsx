/**
 * components/ui/Container.tsx
 * Centered max-width wrapper (design's .container — 1200px, 24px gutters).
 */

import type { CSSProperties, ElementType, ReactNode } from "react";

export function Container({
  as: Tag = "div",
  className = "",
  style,
  children,
}: {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <Tag className={`container ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
