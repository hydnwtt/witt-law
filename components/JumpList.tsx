/**
 * components/JumpList.tsx
 * In-page "On this page" anchor nav for pillar pages. Pure anchor links to real
 * rendered <section id> blocks — no JS required. On desktop it can be made
 * sticky by the page; here it's a self-contained nav with a labeled landmark.
 */

export function JumpList({
  items,
  title = "On this page",
  className = "",
}: {
  items: { id: string; label: string }[];
  title?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <nav aria-label={title} className={className}>
      <p className="text-sm font-semibold uppercase tracking-wider text-muted">
        {title}
      </p>
      <ul className="mt-3 flex flex-col gap-2 border-l border-line">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="-ml-px block border-l border-transparent pl-4 text-sm text-muted hover:border-accent hover:text-ink"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
