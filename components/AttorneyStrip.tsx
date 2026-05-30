/**
 * components/AttorneyStrip.tsx
 * "Handling attorney" strip on pillar/service pages (design's .attorney-strip):
 * square photo + role + name + blurb + "View full bio →". Resolves the first
 * handling attorney from a pillar's attorneySlugs.
 */

import Link from "next/link";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getMember } from "@/content/team";

export function AttorneyStrip({ slugs }: { slugs: string[] }) {
  const member = slugs.map(getMember).find((m) => m !== undefined);
  if (!member) return null;

  return (
    <div className="attorney-strip">
      {member.headshot ? (
        <Image
          className="attorney-strip__photo"
          src={member.headshot}
          alt={member.name}
          width={200}
          height={200}
        />
      ) : (
        <div className="attorney-strip__photo" style={{ position: "relative" }}>
          <ImagePlaceholder label={member.name} />
        </div>
      )}
      <div className="attorney-strip__info">
        <div className="role">Handling Attorney</div>
        <h3>{member.name}</h3>
        <p>{member.blurb}</p>
        <Link className="link-arrow" href={`/attorneys/${member.slug}/`}>
          View full bio <span className="arr">→</span>
        </Link>
      </div>
    </div>
  );
}
