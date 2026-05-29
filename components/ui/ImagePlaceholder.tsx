/**
 * components/ui/ImagePlaceholder.tsx
 * Gray placeholder box used until real assets (logo, headshots, photos) arrive.
 * Reserves space via aspect-ratio to keep CLS at 0. Swap for next/image once
 * the firm supplies assets (see "Assets needed" in the handoff).
 */

import { ImageIcon } from "lucide-react";

export function ImagePlaceholder({
  label,
  ratio = "4 / 3",
  rounded = "rounded-lg",
  className = "",
}: {
  /** What asset goes here, e.g. "Headshot: Marshall Witt". */
  label: string;
  /** CSS aspect-ratio string, e.g. "1 / 1", "16 / 9". */
  ratio?: string;
  rounded?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder — ${label}`}
      style={{ aspectRatio: ratio }}
      className={`flex w-full flex-col items-center justify-center gap-2 border border-dashed border-line bg-bg-soft text-muted ${rounded} ${className}`.trim()}
    >
      <ImageIcon aria-hidden="true" className="size-6" />
      <span className="px-3 text-center text-xs font-medium">{label}</span>
    </div>
  );
}
