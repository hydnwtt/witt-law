/**
 * app/blog/page.tsx — Blog index (design blog.html).
 * Hero → PostCard grid → CTA. Posts from posts.ts (newest first).
 */

import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/content/posts";

export const metadata = buildMetadata({
  title: "Insights from Witt Law | St. George, Utah Legal Blog",
  description:
    "Plain-language articles on personal injury, family law, criminal defense, estate planning, and real estate from Witt Law Offices in St. George, Utah.",
  path: "/blog/",
});

const sorted = [...posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ])}
      />

      <Hero
        eyebrow="Blog"
        title="Insights from Witt Law"
        subhead="Plain-language answers to the legal questions Southern Utah families ask us most."
        primaryCta={null}
        showCall={false}
      />

      <section className="section section--tight">
        <Container>
          <div className="cards cols-3">
            {sorted.map((p) => (
              <PostCard
                key={p.slug}
                post={{
                  slug: p.slug,
                  title: p.title,
                  excerpt: p.description,
                  date: p.datePublished,
                  category: p.category,
                  image: p.image,
                }}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
