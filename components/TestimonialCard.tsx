/**
 * components/TestimonialCard.tsx
 * Client review as the design's .card > .tcard: olive stars, quote, name + role.
 * No Review/AggregateRating schema (see testimonials.ts).
 */

import { Star } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({
  testimonial,
  role = "Verified client review",
}: {
  testimonial: Testimonial;
  role?: string;
}) {
  return (
    <div className="card">
      <div className="tcard">
        <div className="stars" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} aria-hidden="true" />
          ))}
        </div>
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
        <div className="author">
          <div className="name">{testimonial.name}</div>
          <div className="role">{role}</div>
        </div>
      </div>
    </div>
  );
}
