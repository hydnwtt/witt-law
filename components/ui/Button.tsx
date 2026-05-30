/**
 * components/ui/Button.tsx
 * Button primitive mapping to the design's .btn variants (Geist Mono, uppercase,
 * 4px radius). Renders next/link for internal routes, <a> for tel:/external, or
 * <button>. An optional trailing arrow (↗ for actions, → for links) matches the
 * templates.
 */

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "light" | "ghost" | "ghost-light" | "ink";

const variantClass: Record<Variant, string> = {
  primary: "btn btn--primary",
  light: "btn btn--light",
  ghost: "btn btn--ghost",
  "ghost-light": "btn btn--ghost-light",
  ink: "btn btn--ink",
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  arrow?: "up-right" | "right" | null;
  className?: string;
}

type ButtonProps = BaseProps &
  (
    | ({ href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">)
    | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className">)
  );

export function Button({
  children,
  variant = "primary",
  arrow = null,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const cls = `${variantClass[variant]} ${className}`.trim();
  const content = (
    <>
      {children}
      {arrow === "up-right" && <span className="arr">↗</span>}
      {arrow === "right" && <span className="arr">→</span>}
    </>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={cls} {...(rest as object)}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {content}
    </button>
  );
}
