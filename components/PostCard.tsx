/**
 * components/PostCard.tsx
 * Blog card (design's .card): image, category tag, title, excerpt, date. Whole
 * card links to the post. Uses next/image when a real image is supplied.
 */

import Link from "next/link";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
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
    <Link className="card" href={`/blog/${post.slug}/`}>
      <div className="card__media">
        {post.image ? (
          <Image src={post.image} alt={post.title} fill sizes="(max-width:900px) 100vw, 380px" style={{ objectFit: "cover" }} />
        ) : (
          <ImagePlaceholder label={post.title} />
        )}
      </div>
      <div className="card__body">
        {post.category && <span className="card__tag">{post.category}</span>}
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <time dateTime={post.date} className="faint" style={{ fontSize: "var(--fs-sm)", marginTop: "auto" }}>
          {displayDate}
        </time>
      </div>
    </Link>
  );
}
