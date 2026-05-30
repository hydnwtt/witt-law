/**
 * content/siteCopy.ts
 * Page-level copy for non-pillar pages (About, Attorneys, Contact, Reviews, 404,
 * legal, areas-we-serve). Words from the build doc + design templates; NAP comes
 * from firm.ts.
 */

export const aboutCopy = {
  subhead: "A Southern Utah firm built on listening, honesty, and doing the work right.",
  history: [
    "Witt Law's predecessor was founded in 2003, originally with offices in American Fork, Pleasant Grove, and Lehi in Utah County. In 2013 the firm opened its main office in St. George, and for years now most of our clients have been right here in southwest Utah.",
    "Our practice focuses on personal injury, family law, criminal defense, and estate planning, and Marshall Witt also serves as a trained mediator in family matters. Our office is on the third floor at 491 North Bluff Street in St. George.",
  ],
  community:
    "We're proud to be part of southwest Utah. Marshall is a member of the Brain Injury Alliance of Utah, and the firm is committed to giving local families straight answers and real help when they need it most.",
};

export const attorneysIndexCopy = {
  intro:
    "Meet the attorneys behind Witt Law. We're a small Southern Utah firm, which means you work directly with experienced attorneys who know your case.",
};

export const contactCopy = {
  subhead:
    "Most consultations are free. Tell us what's going on and we'll let you know how we can help.",
  /** Office hours line shown on contact (TODO: confirm exact hours with firm). */
  hours: ["Monday–Friday, 9:00 AM – 5:00 PM", "Evenings & weekends by appointment"],
};

export const reviewsCopy = {
  subhead:
    "Southern Utah families have trusted Witt Law through some of their hardest moments. Here's what a few of them had to say.",
  note: "Reviews reflect individual experiences; results vary by case. Star ratings and full reviews are hosted on Google and Facebook.",
  googleUrl: "https://www.google.com/search?q=Witt+Law+Offices+St.+George",
};

export const notFoundCopy = {
  heading: "That page took a different case.",
  body: "That page doesn't exist — but we can still help. Try one of our practice areas below, or call (435) 673-8400.",
};

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    seoTitle: "Privacy Policy | Witt Law Offices",
    updated: "TODO: attorney to confirm + date before launch",
    body: [
      { type: "h3" as const, text: "What we collect" },
      { type: "p" as const, text: "When you use our contact form we collect the information you provide — your name, phone number, email address, and the details of your message. We do not collect sensitive personal information through this site beyond what you choose to send us." },
      { type: "h3" as const, text: "How we use it" },
      { type: "p" as const, text: "We use the information you submit solely to respond to your inquiry and follow up about your potential matter. We do not sell or rent your information to anyone." },
      { type: "h3" as const, text: "Analytics" },
      { type: "p" as const, text: "We may use standard, privacy-respecting analytics to understand how visitors use the site so we can improve it. This data is aggregated and is not used to identify you personally." },
      { type: "h3" as const, text: "Questions" },
      { type: "p" as const, text: "For any privacy questions, contact us at (435) 673-8400 or through the contact form." },
    ],
  },
  disclaimer: {
    title: "Legal Disclaimer",
    seoTitle: "Legal Disclaimer | Witt Law Offices",
    updated: "TODO: attorney to confirm + date before launch",
    body: [
      { type: "p" as const, text: "The information on this website is provided for general informational purposes only and is **not legal advice**. Reading this site, or contacting Witt Law through it, does **not** create an attorney-client relationship. An attorney-client relationship is formed only when you and the firm sign a written agreement." },
      { type: "p" as const, text: "Please do **not** send confidential or time-sensitive information through the contact form until an attorney-client relationship has been established." },
      { type: "p" as const, text: "Any results described on this site are specific to the facts of those matters and are not a guarantee or prediction of the outcome of any other matter. Past results do not guarantee future outcomes." },
      { type: "p" as const, text: "Witt Law's attorneys are licensed in Utah (and Nevada, per attorney Abraham Ivie — confirm). This site may be considered attorney advertising under the Utah Rules of Professional Conduct." },
    ],
  },
};
