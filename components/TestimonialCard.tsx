/**
 * components/TestimonialCard.tsx
 * A single client review: 5-star rating, quote, attributed name.
 * No Review/AggregateRating schema is emitted (see testimonials.ts).
 */

import { Stars } from "@/components/ui/Stars";
import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-line bg-bg p-6">
      <Stars rating={testimonial.rating} />
      <blockquote className="mt-4 grow text-ink leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 font-semibold text-ink">
        {testimonial.name}
      </figcaption>
    </figure>
  );
}
