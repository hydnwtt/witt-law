/**
 * components/AttorneyCard.tsx
 * Team member as the design's image-top .card: photo, role tag, name, blurb, and
 * a "View bio →" link. Every team member (attorney + staff) now has a bio page,
 * so the whole card links to it. Real headshots via Avatar (olive placeholder
 * when missing).
 */

import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import type { TeamMember } from "@/content/team";

export function AttorneyCard({ member }: { member: TeamMember }) {
  return (
    <Link className="card" href={`/attorneys/${member.slug}/`}>
      <div className="card__media">
        <Avatar src={member.headshot} alt={member.name} label={member.name} />
      </div>
      <div className="card__body">
        <span className="card__tag">{member.title}</span>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.6rem" }}>
          {member.name}
        </h3>
        <p>{member.blurb}</p>
        <span className="link-arrow" style={{ marginTop: "auto", border: "none", padding: 0 }}>
          View bio <span className="arr">→</span>
        </span>
      </div>
    </Link>
  );
}
