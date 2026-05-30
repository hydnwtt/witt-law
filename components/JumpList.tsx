/**
 * components/JumpList.tsx
 * Mono pill anchor nav (design's .jumplist). Links can point to on-page anchors
 * or to child pages. No JS.
 */

export function JumpList({
  items,
  label = "On this page",
  className = "",
}: {
  items: { href: string; label: string }[];
  label?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <nav aria-label={label} className={`jumplist ${className}`.trim()}>
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
