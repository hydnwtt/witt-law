/**
 * components/ui/Stars.tsx
 * Decorative 5-star rating. The visual stars are aria-hidden; the rating is
 * announced once via sr-only text so screen readers aren't read 5 icons.
 */

import { Star } from "lucide-react";

export function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      <span className="sr-only">{rating} out of 5 stars</span>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={
            i < rating ? "size-4 fill-accent text-accent" : "size-4 text-line"
          }
        />
      ))}
    </span>
  );
}
