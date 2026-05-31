/**
 * content/practiceAreas.ts
 * The hub-and-spoke backbone. Each pillar has child services that become their own
 * crawlable pages at /{pillar.slug}/{service.slug}/.
 *
 * copyStatus per page:
 *   "ready"        - final copy lives in WITT_LAW_BUILD_SPEC.md §6 / below
 *   "adapt"        - light editing of existing copy
 *   "write-verify" - NEW copy required; ATTORNEY MUST REVIEW before launch
 *
 * `intro` holds short pillar copy where it was finalized; long-form per-service body
 * copy is authored during the Phase 2 build (see page plan P15–P20).
 */

export type CopyStatus = "ready" | "adapt" | "write-verify";

export interface ServicePage {
  slug: string;
  title: string;
  /** Primary keyword for this page (one per page — avoid cannibalization). */
  keyword: string;
  copyStatus: CopyStatus;
  isNew?: boolean;
}

export interface PracticeArea {
  slug: string;
  name: string;
  /** Pillar hero H1. */
  h1: string;
  subhead: string;
  seoTitle: string;
  seoDescription: string;
  keyword: string;
  copyStatus: CopyStatus;
  /** Pillar intro paragraphs. */
  intro: string[];
  /** Build-priority order for Phase 2 (1 = build first). */
  buildPriority: number;
  /** Attorney slugs who handle this area. */
  attorneySlugs: string[];
  services: ServicePage[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "estate-planning",
    name: "Estate Planning",
    h1: "Estate Planning & Administration",
    subhead: "Make sure your wishes are honored and your family is protected.",
    seoTitle:
      "Estate Planning Attorney in St. George, Utah | Wills, Trusts & Probate | Witt Law",
    seoDescription:
      "Protect your family's future with wills, trusts, and estate administration from Witt Law in St. George, Utah. Free consultation: (435) 673-8400.",
    keyword: "estate planning attorney St George",
    copyStatus: "ready",
    buildPriority: 1, // highest organic opportunity — build child pages first
    attorneySlugs: ["marshall-witt"],
    intro: [
      "Witt Law has the experience to help you ensure your wishes are carried out when the time comes. We can help you plan your estate, set up a will or trust, and appoint trustees, guardians, and conservators.",
      "No matter the size of your estate, having a plan in place protects the people you love — and we'll help you choose the options that fit your family best.",
    ],
    services: [
      { slug: "trusts", title: "Trusts", keyword: "trust attorney St George", copyStatus: "ready" },
      { slug: "wills", title: "Wills", keyword: "wills attorney St George", copyStatus: "write-verify" },
      { slug: "probate", title: "Probate", keyword: "probate lawyer St George Utah", copyStatus: "write-verify" },
      { slug: "estate-administration", title: "Estate Administration", keyword: "estate administration Utah", copyStatus: "write-verify" },
      { slug: "powers-of-attorney", title: "Powers of Attorney", keyword: "power of attorney Utah", copyStatus: "write-verify" },
      { slug: "advance-healthcare-directives", title: "Advance Healthcare Directives", keyword: "advance directive Utah", copyStatus: "write-verify" },
      { slug: "trust-administration", title: "Trust Administration", keyword: "trust administration Utah", copyStatus: "write-verify" },
      { slug: "special-needs-asset-protection", title: "Special Needs & Asset Protection", keyword: "asset protection trust Utah", copyStatus: "write-verify", isNew: true },
    ],
  },
  {
    slug: "real-estate-law",
    name: "Real Estate Law",
    h1: "Real Estate Law",
    subhead:
      "Buying or selling property is one of the biggest transactions you'll make. Don't navigate it alone.",
    seoTitle: "Real Estate Lawyer in St. George, Utah | Witt Law",
    seoDescription:
      "Buying, selling, or disputing property in Southern Utah? Witt Law's real estate attorneys protect your interests. Free consultation: (435) 673-8400.",
    keyword: "real estate attorney St George Utah",
    copyStatus: "ready",
    buildPriority: 2,
    attorneySlugs: ["marshall-witt"],
    intro: [
      "Real estate transactions are complex, with requirements that vary and legal pitfalls that aren't obvious to someone outside the field. An experienced real estate attorney can steer you clear of the common problems that arise when buying or selling property.",
      "Whether you're buying or selling, we make sure the contract is handled with care so your rights and your investment are protected.",
    ],
    services: [
      { slug: "purchase-sale-contracts", title: "Purchase & Sale Contracts", keyword: "real estate contract attorney Utah", copyStatus: "write-verify" },
      { slug: "title-boundary-disputes", title: "Title & Boundary Disputes", keyword: "boundary dispute lawyer Utah", copyStatus: "write-verify" },
      { slug: "hoa-disputes", title: "HOA Disputes", keyword: "HOA dispute attorney Utah", copyStatus: "write-verify" },
      { slug: "landlord-tenant", title: "Landlord & Tenant", keyword: "landlord tenant attorney St George", copyStatus: "write-verify" },
      { slug: "land-use-development", title: "Land Use & Development", keyword: "land use attorney Utah", copyStatus: "write-verify" },
      { slug: "quiet-title", title: "Quiet Title", keyword: "quiet title action Utah", copyStatus: "write-verify" },
    ],
  },
  {
    slug: "divorce-family-law",
    name: "Divorce & Family Law",
    h1: "Divorce & Family Law",
    subhead:
      "Compassionate, practical guidance through some of life's most difficult decisions.",
    seoTitle: "Divorce & Family Law Attorney in St. George, Utah | Witt Law",
    seoDescription:
      "Going through a divorce or custody matter in Southern Utah? Witt Law offers compassionate, experienced family law representation. Call (435) 673-8400.",
    keyword: "St George divorce attorney",
    copyStatus: "ready",
    buildPriority: 3,
    attorneySlugs: ["marshall-witt"], // Abraham Ivie removed (left firm)
    intro: [
      "You can find basic divorce forms online, but no one should go through a divorce without competent legal counsel. Divorce decrees are very hard to modify later, so it's important to get things right the first time.",
      "Witt Law has years of experience in family law. We understand that every divorce is personal, and we'll work toward a fair outcome that lets you move forward with your life.",
    ],
    services: [
      { slug: "divorce", title: "Divorce", keyword: "divorce lawyer St George Utah", copyStatus: "write-verify" },
      { slug: "child-custody", title: "Child Custody", keyword: "child custody attorney St George", copyStatus: "write-verify" },
      { slug: "child-support", title: "Child Support", keyword: "child support lawyer St George", copyStatus: "write-verify" },
      { slug: "alimony", title: "Alimony", keyword: "alimony attorney Utah", copyStatus: "write-verify" },
      { slug: "property-debt-division", title: "Property & Debt Division", keyword: "property division divorce Utah", copyStatus: "write-verify" },
      { slug: "parent-time", title: "Parent-Time", keyword: "parent time Utah", copyStatus: "write-verify" },
      { slug: "modifications", title: "Modifications", keyword: "divorce decree modification Utah", copyStatus: "write-verify" },
      { slug: "protective-orders", title: "Protective Orders", keyword: "protective order attorney St George", copyStatus: "write-verify" },
      { slug: "parentage", title: "Parentage", keyword: "paternity attorney St George", copyStatus: "adapt" },
      { slug: "legal-separation", title: "Legal Separation", keyword: "legal separation Utah", copyStatus: "write-verify" },
      { slug: "prenup-postnup", title: "Prenuptial & Postnuptial Agreements", keyword: "prenuptial agreement attorney Utah", copyStatus: "write-verify", isNew: true },
      { slug: "guardianship", title: "Guardianship", keyword: "guardianship attorney St George", copyStatus: "write-verify" },
    ],
  },
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    h1: "Criminal Defense",
    subhead:
      "Arrested or under investigation? You deserve a thorough defense and a clear picture of what's at stake.",
    seoTitle: "Criminal Defense Attorney in St. George, Utah | Witt Law",
    seoDescription:
      "Charged with a crime in Southern Utah? Witt Law provides a vigorous, experienced criminal defense for felonies and misdemeanors. Free consultation: (435) 673-8400.",
    keyword: "criminal defense attorney St George Utah",
    copyStatus: "ready",
    buildPriority: 4,
    attorneySlugs: ["marshall-witt"],
    intro: [
      "Whether you're facing a felony or a misdemeanor, you need experienced representation on your side. Witt Law has a reputation for mounting a vigorous, thorough defense, and we've achieved positive outcomes for thousands of clients over decades of practice.",
      "We offer free initial consultations for criminal defense matters, and we can often work on a flat fee rather than an hourly rate.",
    ],
    services: [
      { slug: "dui", title: "DUI", keyword: "DUI lawyer St George", copyStatus: "adapt" },
      { slug: "drug-offenses", title: "Drug Offenses", keyword: "drug crime attorney St George", copyStatus: "write-verify" },
      { slug: "theft-shoplifting", title: "Theft & Shoplifting", keyword: "theft attorney St George", copyStatus: "write-verify" },
      { slug: "burglary", title: "Burglary", keyword: "burglary defense attorney Utah", copyStatus: "write-verify" },
      { slug: "assault-domestic-violence", title: "Assault & Domestic Violence", keyword: "assault attorney St George", copyStatus: "write-verify" },
      { slug: "sex-crimes", title: "Sex Crimes", keyword: "sex crime defense attorney Utah", copyStatus: "write-verify" },
      { slug: "juvenile-defense", title: "Juvenile Defense", keyword: "juvenile defense attorney St George", copyStatus: "write-verify" },
      { slug: "expungement", title: "Expungement", keyword: "expungement attorney Utah", copyStatus: "write-verify", isNew: true },
      { slug: "felonies-misdemeanors", title: "Felonies & Misdemeanors", keyword: "felony defense attorney St George", copyStatus: "write-verify" },
    ],
  },
  {
    slug: "mediation",
    name: "Mediation",
    h1: "Southern Utah Mediation",
    subhead:
      "Resolve disputes through mediation — often faster, cheaper, and less painful than going to court.",
    seoTitle: "Mediation Services in St. George, Utah | Witt Law",
    seoDescription:
      "Resolve disputes faster and more amicably. Marshall Witt is a court-approved mediator serving Southern Utah. Discounted rate available — call (435) 673-8400.",
    keyword: "divorce mediation St George",
    copyStatus: "ready",
    buildPriority: 5,
    attorneySlugs: ["marshall-witt"],
    intro: [
      "Witt Law provides professional mediation for personal injury, family law, and many other civil disputes. Disputes resolved with an effective mediator tend to last longer and end more amicably than those decided by a court.",
      "Marshall Witt is a trained, Utah court-approved mediator who has helped resolve hundreds of disputes over the past 25 years.",
    ],
    services: [
      { slug: "divorce-mediation", title: "Divorce Mediation", keyword: "divorce mediation St George Utah", copyStatus: "write-verify" },
      { slug: "family-mediation", title: "Family Mediation", keyword: "family mediation Utah", copyStatus: "write-verify" },
      { slug: "civil-mediation", title: "Civil Mediation", keyword: "civil mediation St George", copyStatus: "write-verify" },
    ],
  },
  {
    slug: "personal-injury",
    name: "Personal Injury",
    h1: "Personal Injury",
    subhead:
      "Injured because of someone else's negligence? Let us handle the claim while you focus on healing.",
    seoTitle: "Personal Injury Attorney in St. George, Utah | Witt Law",
    seoDescription:
      "Injured in an accident? Witt Law has handled injury claims for Southern Utah clients for over 30 years. Free consultation: (435) 673-8400.",
    keyword: "personal injury attorney St George Utah",
    copyStatus: "ready",
    // Strategy note: head-term PI dominated by McMullin. Rely on local pack + reviews +
    // long-tail; build these pages but don't expect fast head-term organic. Lower priority.
    buildPriority: 6,
    attorneySlugs: ["marshall-witt"],
    intro: [
      "For over 30 years, Witt Law has handled accident and injury cases for Southern Utah clients — representing thousands of people against virtually every insurance company operating in Utah.",
      "We'll help with your PIP claim, property damage, medical bills, lost wages, and any bodily injury or uninsured/underinsured motorist claim. And in injury cases, we don't get paid unless and until we recover for you.",
    ],
    services: [
      { slug: "auto-accidents", title: "Auto Accidents", keyword: "car accident lawyer St George", copyStatus: "ready" },
      { slug: "truck-train-bus-accidents", title: "Truck, Train & Bus Accidents", keyword: "truck accident lawyer St George", copyStatus: "write-verify" },
      { slug: "motorcycle-accidents", title: "Motorcycle Accidents", keyword: "motorcycle accident lawyer St George", copyStatus: "write-verify" },
      { slug: "pedestrian-accidents", title: "Pedestrian Accidents", keyword: "pedestrian accident lawyer St George", copyStatus: "write-verify" },
      { slug: "bicycle-accidents", title: "Bicycle Accidents", keyword: "bicycle accident lawyer St George", copyStatus: "write-verify" },
      { slug: "traumatic-brain-injury", title: "Traumatic Brain Injury", keyword: "brain injury attorney Utah", copyStatus: "write-verify" },
      { slug: "wrongful-death", title: "Wrongful Death", keyword: "wrongful death attorney St George", copyStatus: "write-verify" },
      { slug: "slip-and-fall", title: "Slip & Fall", keyword: "slip and fall lawyer St George", copyStatus: "write-verify" },
      { slug: "dog-bites", title: "Dog Bites", keyword: "dog bite attorney St George", copyStatus: "write-verify" },
      { slug: "product-liability", title: "Product Liability", keyword: "product liability attorney Utah", copyStatus: "write-verify" },
    ],
  },
];

export const getPillar = (slug: string) =>
  practiceAreas.find((p) => p.slug === slug);

export const getService = (pillarSlug: string, serviceSlug: string) =>
  getPillar(pillarSlug)?.services.find((s) => s.slug === serviceSlug);

/** Ordered for Phase 2 build sequencing. */
export const pillarsByBuildPriority = [...practiceAreas].sort(
  (a, b) => a.buildPriority - b.buildPriority
);
