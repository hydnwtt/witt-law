/**
 * lib/jsonld.ts  (F5)
 * Structured-data (JSON-LD) builders. Each returns a plain object; render it
 * with the <JsonLd> component (lib/JsonLd.tsx).
 *
 * Deliberately NO Review / AggregateRating helpers — per testimonials.ts and
 * the page plan, star ratings live on Google/Facebook, not self-served here.
 */

import { firm } from "@/content/firm";
import { absoluteUrl } from "@/lib/site";
import type { TeamMember } from "@/content/team";
import type { FAQ } from "@/content/faqs";

type Json = Record<string, unknown>;

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: firm.address.line1,
  addressLocality: firm.address.city,
  addressRegion: firm.address.state,
  postalCode: firm.address.zip,
  addressCountry: "US",
});

const openingHours = () =>
  firm.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.opens,
    closes: h.closes,
  }));

/**
 * LegalService (a subtype of LocalBusiness). Use on Home, About, Contact.
 * @id keeps the entity stable so other nodes can reference it.
 */
export function legalServiceSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${absoluteUrl("/")}#legalservice`,
    name: firm.name,
    url: absoluteUrl("/"),
    telephone: firm.phone.href.replace("tel:", ""),
    email: firm.email,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: firm.geo.lat,
      longitude: firm.geo.lng,
    },
    areaServed: firm.serviceArea,
    openingHoursSpecification: openingHours(),
    sameAs: [firm.facebook],
    priceRange: "$$",
  };
}

/** Organization — pairs with LegalService on the home page. */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: firm.name,
    url: absoluteUrl("/"),
    telephone: firm.phone.href.replace("tel:", ""),
    address: postalAddress(),
    sameAs: [firm.facebook],
  };
}

/** Person — for attorney bio pages. */
export function personSchema(member: TeamMember): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    url: absoluteUrl(`/attorneys/${member.slug}/`),
    worksFor: { "@id": `${absoluteUrl("/")}#legalservice` },
    ...(member.headshot ? { image: absoluteUrl(member.headshot) } : {}),
    ...(member.associations && member.associations.length
      ? { memberOf: member.associations.map((a) => ({ "@type": "Organization", name: a })) }
      : {}),
  };
}

/** FAQPage — for pillar pages and the /faqs/ hub. */
export function faqPageSchema(faqs: FAQ[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** BreadcrumbList — on every non-home page. Pass ordered crumbs. */
export function breadcrumbSchema(
  crumbs: { name: string; path: string }[]
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** BlogPosting — for /blog/[slug]/. */
export function blogPostingSchema(input: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}): Json {
  const url = absoluteUrl(`/blog/${input.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url,
    mainEntityOfPage: url,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Organization", name: input.authorName ?? firm.name },
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    ...(input.image ? { image: absoluteUrl(input.image) } : {}),
  };
}
