/**
 * components/AttorneyCard.tsx
 * Team member as the design's image-top .card: photo, role tag, name, blurb, and
 * "View bio →" for attorneys. Real headshots via Avatar (olive placeholder when
 * missing).
 */

import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import type { TeamMember } from "@/content/team";

export function AttorneyCard({ member }: { member: TeamMember }) {
  const bioHref = member.role === "attorney" ? `/attorneys/${member.slug}/` : null;

  const body = (
    <div className="card__body">
      <span className="card__tag">{member.title}</span>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.6rem" }}>
        {member.name}
      </h3>
      <p>{member.blurb}</p>
      {bioHref && (
        <span className="link-arrow" style={{ marginTop: "auto", border: "none", padding: 0 }}>
          View bio <span className="arr">→</span>
        </span>
      )}
    </div>
  );

  const media = (
    <div className="card__media">
      <Avatar src={member.headshot} alt={member.name} label={member.name} />
    </div>
  );

  return bioHref ? (
    <Link className="card" href={bioHref}>
      {media}
      {body}
    </Link>
  ) : (
    <div className="card">
      {media}
      {body}
    </div>
  );
}
