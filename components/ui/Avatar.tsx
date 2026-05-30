/**
 * components/ui/Avatar.tsx
 * Photo via next/image, or the olive ImagePlaceholder when no asset exists.
 * Fills its parent (which owns the aspect ratio), object-fit cover, top-anchored.
 */

import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Avatar({
  src,
  alt,
  label,
  sizes = "(max-width: 900px) 100vw, 400px",
}: {
  src?: string;
  alt: string;
  label: string;
  sizes?: string;
}) {
  if (!src) return <ImagePlaceholder label={label} />;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      style={{ objectFit: "cover", objectPosition: "top" }}
    />
  );
}
