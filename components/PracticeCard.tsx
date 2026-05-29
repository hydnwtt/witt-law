/**
 * components/PracticeCard.tsx
 * Card for a practice area (home grid, related-areas strips). Whole card is a
 * link; an icon is resolved from the pillar slug. Description is a short,
 * client-facing one-liner passed by the caller (build-spec §6.1).
 */

import Link from "next/link";
import {
  Activity,
  Scale,
  Users,
  ScrollText,
  Home as HomeIcon,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "personal-injury": Activity,
  "criminal-defense": Scale,
  "divorce-family-law": Users,
  "estate-planning": ScrollText,
  "real-estate-law": HomeIcon,
  mediation: Handshake,
};

export function PracticeCard({
  slug,
  name,
  description,
  href,
}: {
  slug: string;
  name: string;
  description: string;
  href: string;
}) {
  const Icon = ICONS[slug] ?? Scale;
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-xl border border-line bg-bg p-6 transition-colors hover:border-accent focus:outline-none focus-visible:border-accent"
    >
      <span className="flex size-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <h3 className="mt-4 text-xl">{name}</h3>
      <p className="mt-2 grow text-muted leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-strong">
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
