/**
 * components/AttorneyStrip.tsx
 * "Who handles this" strip on pillar pages. Resolves the handling attorneys from
 * a pillar's attorneySlugs (content/team.ts) and renders AttorneyCards. Bio links
 * point to /attorneys/{slug}/ (built in Phase 1, P8–P9).
 */

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AttorneyCard } from "@/components/AttorneyCard";
import { getMember } from "@/content/team";

export function AttorneyStrip({ slugs }: { slugs: string[] }) {
  const members = slugs.map(getMember).filter((m) => m !== undefined);
  if (!members.length) return null;

  return (
    <div>
      <SectionHeading as="h2" eyebrow="Your team">
        {members.length > 1 ? "Attorneys who handle this" : "Who handles this"}
      </SectionHeading>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <AttorneyCard key={m.slug} member={m} />
        ))}
      </div>
    </div>
  );
}
