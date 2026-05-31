/**
 * components/ui/CoverImage.tsx
 * next/image fill-cover inside a relative box that fills its parent. Use where a
 * sized/aspect-ratio container needs a photo (hero media, intro media, card media).
 * Parent controls dimensions; this fills it. Falls back to ImagePlaceholder when
 * no src is given.
 */

import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function CoverImage({
  src,
  alt,
  label,
  sizes = "100vw",
  priority = false,
  position,
}: {
  src?: string;
  alt: string;
  label?: string;
  sizes?: string;
  priority?: boolean;
  /** object-position, e.g. "center top". */
  position?: string;
}) {
  if (!src) return <ImagePlaceholder label={label ?? alt} />;
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: position ?? "center" }}
      />
    </div>
  );
}
