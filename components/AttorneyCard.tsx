/**
 * components/AttorneyCard.tsx
 * Team member card for the attorneys index, About, and pillar attorney strips.
 * Uses ImagePlaceholder until real headshots arrive (team.ts headshot paths).
 * Attorneys link to their bio page; staff (no bio page) render without a link.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { TeamMember } from "@/content/team";

export function AttorneyCard({ member }: { member: TeamMember }) {
  const bioHref = member.role === "attorney" ? `/attorneys/${member.slug}/` : null;

  return (
    <div className="flex flex-col rounded-xl border border-line bg-bg p-5">
      {/* Real headshot goes here once supplied; placeholder reserves the space. */}
      <ImagePlaceholder
        label={`Headshot: ${member.name}`}
        ratio="1 / 1"
        rounded="rounded-lg"
      />
      <h3 className="mt-4 text-lg">{member.name}</h3>
      <p className="text-sm font-medium text-accent-strong">{member.title}</p>
      <p className="mt-2 grow text-sm text-muted leading-relaxed">{member.blurb}</p>
      {bioHref && (
        <Link
          href={bioHref}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-strong hover:text-accent-dark"
        >
          Read bio
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      )}
    </div>
  );
}
