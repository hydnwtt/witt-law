/**
 * components/ui/Button.tsx
 * One button primitive used site-wide. Renders next/link for internal routes,
 * a plain <a> for tel:/external, or a <button> when no href. Variants map to the
 * .btn-* classes in globals.css. Server component (no interactivity of its own).
 */

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "on-dark" | "outline-on-dark";

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  "on-dark": "btn btn-on-dark",
  "outline-on-dark": "btn btn-outline-on-dark",
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
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
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const cls = `${variantClass[variant]} ${className}`.trim();

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={cls} {...(rest as object)}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
