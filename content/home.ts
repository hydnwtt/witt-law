/**
 * content/home.ts
 * Home-page copy (build-spec §6.1), kept out of JSX so app/page.tsx stays thin.
 * Practice-card blurbs are the home-specific one-liners (distinct from the pillar
 * subheads). Trust items are intentionally factual, not a fabricated star average
 * (no self-serving AggregateRating — see testimonials.ts). Some figures are marked
 * VERIFY pending firm confirmation (founding year / years in practice).
 */

export const homeHero = {
  eyebrow: "St. George, Utah",
  title: "Trusted attorneys for life's hardest moments.",
  subhead:
    "For over two decades, Witt Law has helped Southern Utah families through injury, divorce, criminal charges, and estate planning — with straight answers and real care.",
};

export const homeIntro = {
  heading: "A Southern Utah firm you can actually talk to.",
  paragraphs: [
    "When you're dealing with an injury, a divorce, a criminal charge, or planning for your family's future, you don't just need a lawyer — you need someone who will listen first and explain things in plain language. That's how we've practiced at Witt Law since opening our St. George office.",
    "Attorneys Marshall Witt and Abraham Ivie have spent their careers guiding people through exactly these situations. Whatever brought you here, we can help you understand your options and move forward with confidence.",
  ],
};

/** Home practice-area card blurbs, keyed by pillar slug (build-spec §6.1). */
export const homeCardBlurbs: Record<string, string> = {
  "personal-injury":
    "Injured because of someone else's mistake? We handle the insurance companies so you can focus on recovering.",
  "criminal-defense":
    "Facing charges? You deserve a vigorous, thorough defense and a clear explanation of what's at stake.",
  "divorce-family-law":
    "Compassionate, practical representation through divorce, custody, support, and more.",
  "estate-planning":
    "Wills, trusts, and administration so your wishes are honored and your family is protected.",
  "real-estate-law":
    "Guidance for buying, selling, and resolving disputes over property.",
  mediation: "A faster, less adversarial path to resolving disputes.",
};

/** Trust strip — factual signals only. TODO: VERIFY years/founding with firm. */
export const homeTrustItems = [
  { value: "30+", label: "Years of practice" },
  { value: "Since 2013", label: "St. George office" },
  { value: "6", label: "Practice areas" },
  { value: "Free", label: "Initial consultations" },
];
