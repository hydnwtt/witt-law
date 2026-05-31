/**
 * content/faqs.ts
 * Utah-specific FAQs by practice area. Power the FAQ blocks on pillar/service pages
 * and the /faqs/ hub, and feed FAQPage JSON-LD.
 *
 * ALL answers are write-verify: an attorney must confirm legal accuracy before launch.
 * Answers below are drafted starting points — keep them factual, local, and concise.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQGroup {
  pillarSlug: string;
  label: string;
  faqs: FAQ[];
}

export const faqGroups: FAQGroup[] = [
  {
    pillarSlug: "estate-planning",
    label: "Estate Planning, Wills & Probate",
    faqs: [
      {
        question: "Do I need a will or a trust in Utah?",
        answer:
          "It depends on your situation. A will directs how your estate is distributed and takes effect at death, but it generally still has to go through probate. A revocable living trust can let your beneficiaries avoid probate and keep your affairs more private. We'll walk you through which fits your assets and family.",
      },
      {
        question: "How can I avoid probate in Utah?",
        answer:
          "Common tools include a revocable living trust, beneficiary designations, and properly titled assets. The right combination depends on what you own and how you own it — we can help you put a plan in place.",
      },
      {
        question: "What happens if I die without a will in Utah?",
        answer:
          "Your estate is distributed under Utah's intestate succession laws, which set a fixed order of who inherits. Only in the rare case of no locatable relatives does an estate revert to the state. A will or trust lets you decide instead of the statute.",
      },
      {
        question: "How much does probate cost in Utah?",
        answer:
          "Cost varies with the size and complexity of the estate, whether anyone contests it, and the debts involved. Planning ahead with a trust can reduce or avoid these costs for your family.",
      },
    ],
  },
  {
    pillarSlug: "divorce-family-law",
    label: "Divorce & Family Law",
    faqs: [
      {
        question: "How long does a divorce take in Utah?",
        answer:
          "Utah has a mandatory waiting period after filing before a divorce can be finalized, and the total timeline depends on whether the divorce is contested and how complex the issues are. Uncontested cases move faster; contested custody or property disputes take longer.",
      },
      {
        question: "How is child custody decided in Utah?",
        answer:
          "Utah courts decide custody based on the best interests of the child. Legal custody concerns decision-making; physical custody concerns where the child lives. Parents often share joint legal custody absent good cause otherwise.",
      },
      {
        question: "Is mediation required before a Utah divorce?",
        answer:
          "Utah generally requires divorcing parties to attend mediation before proceeding to trial. Many cases resolve at or shortly after mediation, which keeps costs more manageable.",
      },
      {
        question: "How is alimony determined in Utah?",
        answer:
          "Alimony isn't automatic in Utah. Courts look at factors like the financial condition and needs of the receiving spouse, earning capacity, and the length of the marriage, with the general goal of leaving both parties in a similar position. When awarded, it typically won't exceed the length of the marriage.",
      },
    ],
  },
  {
    pillarSlug: "criminal-defense",
    label: "Criminal Defense",
    faqs: [
      {
        question: "What happens after a DUI arrest in Utah?",
        answer:
          "A DUI in Utah triggers both a criminal case and a separate driver-license process with tight deadlines. At minimum a DUI is a Class B misdemeanor, but it can be charged higher if someone was injured, a minor was in the vehicle, or there are prior offenses. Acting quickly protects your options.",
      },
      {
        question: "Will a charge stay on my record? (Utah expungement)",
        answer:
          "Some Utah offenses can be expunged after eligibility waiting periods and if conditions are met. Eligibility depends on the offense and your history — we can review whether expungement may be available to you.",
      },
      {
        question: "What's the difference between a misdemeanor and a felony in Utah?",
        answer:
          "A misdemeanor is generally punishable by up to a year of incarceration; a felony carries more, plus more serious long-term consequences for employment, housing, and rights. The right defense strategy depends on the charge level.",
      },
      {
        question: "Do I need a lawyer for a first-offense DUI?",
        answer:
          "A first DUI still carries jail exposure, fines, and license consequences, and the license deadline runs fast. Having a lawyer review the stop and the evidence can make a real difference in the outcome.",
      },
    ],
  },
  {
    pillarSlug: "personal-injury",
    label: "Personal Injury",
    faqs: [
      {
        question: "How long do I have to file an injury claim in Utah?",
        answer:
          "Utah sets deadlines (statutes of limitations) for injury claims, and they vary by claim type and who is involved (for example, claims against government entities have shorter notice deadlines). It's best to talk to an attorney early so you don't lose the right to recover.",
      },
      {
        question: "What is Utah's no-fault / PIP coverage?",
        answer:
          "Utah is a no-fault auto state, so your own Personal Injury Protection (PIP) coverage pays certain initial medical bills and wage loss regardless of fault, up to limits. Serious injuries that meet a threshold can allow a claim against the at-fault driver.",
      },
      {
        question: "Should I talk to the insurance adjuster?",
        answer:
          "Adjusters work for the insurance company, and early recorded statements can be used to reduce your claim. It's worth talking to an attorney before giving a statement or accepting an offer.",
      },
      {
        question: "How does Utah's comparative negligence rule affect my claim?",
        answer:
          "Utah uses a modified comparative negligence rule: you can recover if you are less than 50% at fault, but your recovery is reduced by your percentage of fault. How fault is assigned matters a great deal to your outcome.",
      },
    ],
  },
  {
    pillarSlug: "real-estate-law",
    label: "Real Estate Law",
    faqs: [
      {
        question: "Do I need a real estate attorney to buy or sell in Utah?",
        answer:
          "Utah doesn't require an attorney for every transaction, but real estate deals involve significant money and legal pitfalls. An attorney can review your contract, examine title, and protect your interests — especially in complex or disputed deals.",
      },
      {
        question: "What is a boundary or title dispute?",
        answer:
          "These arise when ownership lines, easements, or recorded interests are unclear or contested. Resolving them may involve surveys, title review, or a quiet title action. We help property owners protect their rights.",
      },
    ],
  },
  {
    pillarSlug: "mediation",
    label: "Mediation",
    faqs: [
      {
        question: "How does divorce mediation work in Utah?",
        answer:
          "A neutral mediator helps both parties work toward an agreement on issues like custody, parent-time, support, and property. Parties can attend with their attorneys or on their own. Most Utah divorces are required to attempt mediation.",
      },
      {
        question: "Is mediation cheaper than going to trial?",
        answer:
          "Usually, yes. Mediation tends to be faster and less expensive than litigation, and agreements reached in mediation often last longer and end more amicably than court-imposed outcomes.",
      },
    ],
  },
];

export const getFaqs = (pillarSlug: string) =>
  faqGroups.find((g) => g.pillarSlug === pillarSlug)?.faqs ?? [];
