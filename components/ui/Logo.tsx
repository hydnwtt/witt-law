/**
 * components/ui/Logo.tsx
 * Firm wordmark — the cream "WITT [shield] LAW" logo (public/brand/witt-law-logo.png,
 * 1228×320, transparent RGBA). Built for dark/olive grounds (header + footer); it
 * would be invisible on cream, so only use it there. `height` sets the rendered
 * size; width derives from the logo's aspect ratio. Accessible name via alt.
 */

import Image from "next/image";
import { firm } from "@/content/firm";

const ASPECT = 1228 / 320; // ≈ 3.84

export function Logo({ height = 30, className = "" }: { height?: number; className?: string }) {
  return (
    <Image
      src="/brand/witt-law-logo.png"
      alt={`${firm.name} — home`}
      height={height}
      width={Math.round(height * ASPECT)}
      priority
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
