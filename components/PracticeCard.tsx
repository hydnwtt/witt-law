/**
 * components/PracticeCard.tsx
 * Image-top practice-area card (design's .card). Whole card links to the pillar.
 * Uses the olive placeholder until the firm supplies practice-area photography.
 */

import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function PracticeCard({
  name,
  description,
  href,
}: {
  slug?: string;
  name: string;
  description: string;
  href: string;
}) {
  return (
    <Link className="card" href={href}>
      <div className="card__media">
        <ImagePlaceholder label={name} />
      </div>
      <div className="card__body">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="link-arrow">
          Learn more <span className="arr">→</span>
        </span>
      </div>
    </Link>
  );
}
