/**
 * components/SkipLink.tsx  (F2)
 * Skip-to-content link — first focusable element, visible only on focus.
 * Targets the <main id="main"> landmark in the root layout.
 */

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only z-[100] rounded-md bg-navy px-4 py-2 font-medium text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
    >
      Skip to content
    </a>
  );
}
