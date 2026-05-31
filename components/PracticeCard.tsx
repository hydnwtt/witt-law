/**
 * components/PracticeCard.tsx
 * Image-top practice-area card (design's .card). Whole card links to the pillar.
 * Shows the firm's practice-area photo (content/media.ts) via CoverImage, falling
 * back to the olive placeholder when no image is supplied.
 */

import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";

export function PracticeCard({
  name,
  description,
  href,
  image,
}: {
  slug?: string;
  name: string;
  description: string;
  href: string;
  image?: string;
}) {
  return (
    <Link className="card" href={href}>
      <div className="card__media">
        <CoverImage
          src={image}
          alt={name}
          label={name}
          sizes="(max-width: 900px) 100vw, 380px"
        />
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
