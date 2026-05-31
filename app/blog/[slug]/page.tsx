/**
 * app/blog/[slug]/page.tsx — blog post (design blog-*.html).
 * Olive hero (category + byline + dates) → 2:1 image → prose article → related
 * → CTA. BlogPosting + Breadcrumb JSON-LD. Byline attributed to the firm.
 * Statically generated per post; old root URLs 301 here (next.config).
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { BlockContent } from "@/components/BlockContent";
import { CTA } from "@/components/CTA";
import { posts, getPost } from "@/content/posts";
import { firm } from "@/content/firm";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | Witt Law`,
    description: post.description,
    path: `/blog/${post.slug}/`,
    ogImage: post.image,
  });
}

function fmt(date: string) {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(
    new Date(`${date}T00:00:00`)
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            authorName: firm.name,
            image: post.image,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="hero-banner hatch">
        <Container>
          <span className="eyebrow on-dark">{post.category}</span>
          <h1 style={{ maxWidth: "22ch" }}>{post.title}</h1>
          <p className="mono-label" style={{ color: "var(--on-olive-faint)", marginTop: 18 }}>
            By {firm.name} &nbsp;·&nbsp; Published {fmt(post.datePublished)}
            {post.dateModified && <> &nbsp;·&nbsp; Updated {fmt(post.dateModified)}</>}
          </p>
        </Container>
      </section>

      {/* Body */}
      <section className="section">
        <Container style={{ maxWidth: 900 }}>
          {post.image && (
            <div style={{ aspectRatio: "2 / 1", overflow: "hidden", background: "var(--paper-2)", marginBottom: "clamp(32px,4vw,48px)", position: "relative" }}>
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: "cover" }} />
            </div>
          )}
          <article className="prose" style={{ marginInline: "auto" }}>
            <BlockContent blocks={post.blocks} />
          </article>
        </Container>
      </section>

      {/* Related */}
      <section className="section section--tight">
        <Container>
          <div className="sec-head">
            <div className="sec-head__lines">
              <span className="eyebrow">More</span>
              <h2>Keep reading</h2>
            </div>
            <Link className="btn btn--ink" href="/blog/">
              All articles <span className="arr">↗</span>
            </Link>
          </div>
          <div className="related">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 4)
              .map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}/`}>
                  {p.title} <span className="arr">→</span>
                </Link>
              ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
