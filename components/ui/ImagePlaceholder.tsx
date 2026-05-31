/**
 * components/ui/ImagePlaceholder.tsx
 * Olive labelled placeholder (design's .ph) for assets not yet supplied. Fills
 * its container; pass a ratio for standalone use.
 */

export function ImagePlaceholder({
  label,
  ratio,
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`ph ${className}`.trim()}
      data-label={label}
      role="img"
      aria-label={`Placeholder — ${label}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    />
  );
}
