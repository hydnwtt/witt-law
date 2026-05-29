/**
 * components/PostCard.tsx
 * Blog post card for the /blog/ grid (Phase 2). Image, category, title, excerpt,
 * date. Whole card links to the post. Uses ImagePlaceholder until post images
 * are supplied.
 */

import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  category?: string;
  image?: string;
}

export function PostCard({ post }: { post: PostMeta }) {
  const displayDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.date));

  return (
    <article className="group relative flex flex-col">
      <div className="overflow-hidden rounded-xl">
        <ImagePlaceholder label={`Post image: ${post.title}`} ratio="16 / 9" />
      </div>
      <div className="mt-4 flex flex-col">
        {post.category && (
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-strong">
            {post.category}
          </span>
        )}
        <h3 className="mt-1 text-lg">
          <Link
            href={`/blog/${post.slug}/`}
            className="after:absolute after:inset-0 hover:text-navy"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{post.excerpt}</p>
        <time dateTime={post.date} className="mt-3 text-xs text-muted">
          {displayDate}
        </time>
      </div>
    </article>
  );
}
