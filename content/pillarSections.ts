/**
 * content/pillarSections.ts
 * Long-form pillar copy from WITT_LAW_BUILD_SPEC.md §6.2–6.8 — the visible,
 * crawlable sections that replace the old site's JS tabs.
 *
 * `verify: true` marks [NEW — VERIFY] copy (attorney must review before launch).
 * Sections without `verify` are [ADAPTED] (generally safe per build-spec §0).
 * `serviceSlug` links a section to its practiceAreas service for the Phase-2
 * child page (the pillar page itself does NOT link out yet — those pages 404
 * until Phase 2). Section `id`s are used as on-page anchors.
 */

import type { Block } from "@/components/BlockContent";

export interface PillarSection {
  id: string;
  title: string;
  serviceSlug?: string;
  verify?: boolean;
  blocks: Block[];
}

export interface PillarExtras {
  /** Callout after the intro (e.g., Family Law "A note on cost"). */
  note?: { heading: string; blocks: Block[]; verify?: boolean };
  /** Extra body copy after the intro (Real Estate). */
  body?: { blocks: Block[]; verify?: boolean };
  /** Render the four shared value props (Mediation). */
  showValueProps?: boolean;
  /** Feature block, e.g. the Mediator bio (Mediation). */
  feature?: { heading: string; blocks: Block[]; verify?: boolean };
  /** Rich anchored sections (PI / Criminal / Family / Estate). */
  sections?: PillarSection[];
  /** Short, non-linked "areas we handle" list for pillars whose detail pages
   *  are Phase 2 (Real Estate / Mediation). */
  handlesHeading?: string;
  handles?: string[];
}

export const pillarContent: Record<string, PillarExtras> = {
  "personal-injury": {
    sections: [
      {
        id: "auto-accidents",
        title: "Auto Accidents",
        serviceSlug: "auto-accidents",
        blocks: [
          {
            type: "p",
            text: "An auto accident is often the start of a long struggle — injuries, lost transportation, lost wages, and in the worst cases permanent impairment. You don't have to face it alone. We have decades of experience with single-, two-, and multi-vehicle collisions.",
          },
          {
            type: "ul",
            items: [
              "**Single-vehicle accidents** aren't always the driver's fault — faulty mechanics, poor road conditions, or unexpected obstacles can all play a part. We investigate what really happened so you're treated fairly.",
              "**Two-vehicle accidents** — fender benders, T-bone, and head-on collisions — frequently cause injury. We deal with the other driver's insurer so you don't have to.",
              "**Multi-vehicle accidents**, common on highways, tend to cause the most serious injuries. We help you pursue fair compensation no matter how complex the chain of fault.",
            ],
          },
          {
            type: "p",
            text: "So long as you meet Utah's injury threshold and are less than 50% at fault, we can likely help.",
          },
        ],
      },
      {
        id: "truck-train-bus-accidents",
        title: "Truck, Train & Bus Accidents",
        serviceSlug: "truck-train-bus-accidents",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Collisions involving commercial trucks, trains, or buses are rarely simple. They can involve multiple insurers, company drivers, and — in the case of buses or public transit — government entities with their own strict notice deadlines. Acting quickly matters, because evidence and filing windows can be limited. If you've been hit by a commercial vehicle, call us early so we can preserve what matters and protect your claim.",
          },
        ],
      },
      {
        id: "motorcycle-accidents",
        title: "Motorcycle Accidents",
        serviceSlug: "motorcycle-accidents",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Motorcycle collisions are often severe. While initial medical costs may be covered by the motorcycle's PIP coverage, that coverage frequently isn't enough. Recovery can be a long road — but you don't have to travel it alone. We'll help you understand your coverage and pursue what you're owed.",
          },
        ],
      },
      {
        id: "pedestrian-accidents",
        title: "Pedestrian Accidents",
        serviceSlug: "pedestrian-accidents",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Pedestrian collisions are frequently traumatic, and insurers often try to shift blame onto the person who was hit. We know how to push back on those tactics and handle the frustrating back-and-forth with insurance companies so you can focus on getting better.",
          },
        ],
      },
      {
        id: "bicycle-accidents",
        title: "Bicycle Accidents",
        serviceSlug: "bicycle-accidents",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Bicycles are smaller, quieter, and less predictable to drivers, which can make these collisions especially serious. Key evidence is often lost quickly, so it's important to involve an attorney early. The sooner we start, the better we can investigate and protect your claim.",
          },
        ],
      },
      {
        id: "traumatic-brain-injury",
        title: "Traumatic Brain Injury",
        serviceSlug: "traumatic-brain-injury",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Attorney Marshall Witt has been a member of the Brain Injury Alliance of Utah and has handled many traumatic brain injury cases — arising from auto and truck collisions, near-drownings, falls, premises hazards such as carbon monoxide exposure, assaults, and sporting events. TBI cases require careful medical and legal documentation, and we have the experience to handle them.",
          },
        ],
      },
      {
        id: "wrongful-death",
        title: "Wrongful Death",
        serviceSlug: "wrongful-death",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "When someone dies because of another's negligence, the people left behind deserve answers and support. In Utah, wrongful death claims must be filed in court, and only certain people — such as an heir or the representative of the estate — are permitted to bring them. We handle these cases with the sensitivity they require. Call us for a free, confidential consultation.",
          },
        ],
      },
      {
        id: "slip-and-fall",
        title: "Slip & Fall (Premises Liability)",
        serviceSlug: "slip-and-fall",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Property owners have a duty to take reasonable steps to keep their premises safe for people they invite or expect to be there. When they fail to do so and someone is hurt, they may be liable. These cases turn on the specific facts and your status on the property, so it's worth talking through the details with an attorney.",
          },
        ],
      },
      {
        id: "dog-bites",
        title: "Dog Bites",
        serviceSlug: "dog-bites",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "If you, a family member, or a friend has been bitten by a dog or injured by another domesticated animal, we can help you understand your rights and pursue compensation for your injuries.",
          },
        ],
      },
      {
        id: "product-liability",
        title: "Product Liability",
        serviceSlug: "product-liability",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "We've handled many product liability claims over the years — defective food, drugs, tools, toys, equipment, tires, brakes, seat belts, and other vehicle components. If you've been injured by a product that was defectively designed, defectively manufactured, or sold without proper warnings, give us a call.",
          },
        ],
      },
    ],
  },

  "criminal-defense": {
    sections: [
      {
        id: "dui",
        title: "DUI",
        serviceSlug: "dui",
        blocks: [
          {
            type: "p",
            text: "A DUI — whether involving alcohol, drugs, or another substance — is a serious matter, but we can help. In Utah, a DUI is at minimum a Class B misdemeanor, generally punishable by up to six months in jail and a fine. Charges can rise to a Class A misdemeanor if someone was injured or a minor was in the vehicle, and to a felony if you've had multiple offenses within ten years or someone was seriously hurt. Whatever the circumstances, we'll review the evidence, represent you in court, and work to protect your record and your license. Free initial consultations are available.",
          },
        ],
      },
      {
        id: "drug-offenses",
        title: "Drug Offenses",
        serviceSlug: "drug-offenses",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "One poor choice shouldn't define the rest of your life. We defend clients facing drug charges and, where appropriate, pursue alternatives to incarceration that address the underlying issue. We believe people can change, and we'll work toward the best resolution available in your case.",
          },
        ],
      },
      {
        id: "theft-burglary",
        title: "Theft & Burglary",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "We look at more than the charge — we look at the circumstances behind it. Many theft and shoplifting cases happen in a moment of stress or poor judgment, and we believe the consequences should be proportional to what actually occurred. If you've been charged with theft or burglary, we're ready to help.",
          },
        ],
      },
      {
        id: "assault-domestic-violence",
        title: "Assault & Domestic Violence",
        serviceSlug: "assault-domestic-violence",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Assault charges are often more complicated than they first appear, and the penalties can be severe. We work to gather the relevant evidence, interview witnesses, and prepare your account of what happened so your side of the story is fully heard.",
          },
        ],
      },
      {
        id: "sex-crimes",
        title: "Sex Crimes",
        serviceSlug: "sex-crimes",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "The penalties for a sex offense are among the most serious in the law and can include lengthy incarceration and registration requirements. Because an accusation alone can be devastating, it is critical to have experienced, discreet defense counsel. We handle these sensitive cases with care.",
          },
        ],
      },
      {
        id: "juvenile-defense",
        title: "Juvenile Cases",
        serviceSlug: "juvenile-defense",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "The legal issues surrounding juvenile cases differ significantly from those for adults. We represent both, because we believe everyone deserves the chance to learn from a mistake and move forward. For young clients, we focus on protecting their future.",
          },
        ],
      },
      {
        id: "felonies-misdemeanors",
        title: "Other Felonies & Misdemeanors",
        serviceSlug: "felonies-misdemeanors",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "A misdemeanor is generally punishable by up to a year of incarceration; a felony carries more. But the lasting effects — on employment, family, and your future — often outweigh the sentence itself. We defend a wide range of charges, including traffic offenses, harassment, possession, violent crimes, property crimes, and more. If you're not sure where your charge falls, call us and we'll explain it clearly.",
          },
        ],
      },
    ],
  },

  "divorce-family-law": {
    note: {
      heading: "A note on cost",
      blocks: [
        {
          type: "p",
          text: "Utah now requires divorcing parties to attend mediation. When both sides have disclosed their finances, attend in person, and work with an effective mediator, most cases resolve at or shortly after mediation — which keeps costs more manageable. We also offer discounted initial consultations for divorce matters.",
        },
      ],
    },
    sections: [
      {
        id: "parentage",
        title: "Parentage",
        serviceSlug: "parentage",
        blocks: [
          {
            type: "p",
            text: "Establishing paternity can be decisive in divorce and custody matters. Court-ordered DNA testing can benefit both parties: confirming a biological relationship helps the court make sound decisions about custody and support. And if testing shows the person in question is not the biological parent, that isn't necessarily the end of the matter — these situations are nuanced, and having an attorney present your case can make a real difference for you and your child.",
          },
        ],
      },
      {
        id: "legal-separation",
        title: "Separation",
        serviceSlug: "legal-separation",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "If you're not ready for divorce but want protections in place — especially when minor children or significant assets are involved — a separation agreement can address most of the same issues a divorce decree does. Utah recognizes both temporary separation and separate maintenance. We can help you decide whether separation is the right step.",
          },
        ],
      },
      {
        id: "child-custody",
        title: "Custody",
        serviceSlug: "child-custody",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Utah courts decide custody based on the best interests of the children. **Legal** custody concerns who has a say in how a child is raised; **physical** custody concerns where the child lives. Parents often share joint legal custody absent good cause otherwise. Where there's a history of abuse or substance issues, custody may be limited and visitation supervised. We'll help you pursue an arrangement that protects your children.",
          },
        ],
      },
      {
        id: "child-support",
        title: "Child Support",
        serviceSlug: "child-support",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Child support in Utah is calculated from each parent's income, and a parent who is able to work but isn't may be attributed income for that calculation. The non-custodial parent typically pays support to the custodial parent. If your co-parent isn't paying what was ordered, we can help you enforce the order and seek remedies.",
          },
        ],
      },
      {
        id: "parent-time",
        title: "Parent-Time (Visitation)",
        serviceSlug: "parent-time",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Visitation is also called parent-time, because it's the child's right to time with each parent. When parents can't agree, Utah's statutory guidelines provide a default schedule. We'll help you reach a workable arrangement or advocate for the schedule that's right for your family.",
          },
        ],
      },
      {
        id: "property-debt-division",
        title: "Division of Property & Debts",
        serviceSlug: "property-debt-division",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "One of the biggest reasons to have an experienced attorney is to avoid an unfair division of debt and property. We investigate thoroughly so that marital assets and obligations are divided fairly.",
          },
        ],
      },
      {
        id: "alimony",
        title: "Alimony",
        serviceSlug: "alimony",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Unlike child support, alimony isn't automatic in Utah. The goal is generally to leave both parties in a similar financial position, setting aside separate premarital assets. When awarded, alimony typically won't exceed the length of the marriage. We'll help you understand what to expect in your situation.",
          },
        ],
      },
      {
        id: "modifications",
        title: "Modifications",
        serviceSlug: "modifications",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "A divorce decree can sometimes be modified when there's been a substantial, material change in circumstances that wasn't foreseeable at the time of the divorce. If your situation has changed, we can advise whether a modification is possible.",
          },
        ],
      },
      {
        id: "protective-orders",
        title: "Protective Orders",
        serviceSlug: "protective-orders",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Everyone deserves to feel safe at home and in public. If at any point during or after your divorce you have concerns for your safety or your children's, we can review the existing orders and give you objective advice about your options.",
          },
        ],
      },
      {
        id: "mediation",
        title: "Mediation",
        blocks: [
          {
            type: "p",
            text: "Mediation is often the calmest, most cost-effective way to resolve family disputes. Attorney Marshall Witt is a trained, court-approved mediator. Learn more on our [Mediation page](/mediation/).",
          },
        ],
      },
    ],
  },

  "estate-planning": {
    sections: [
      {
        id: "trusts",
        title: "Trusts",
        serviceSlug: "trusts",
        blocks: [
          {
            type: "p",
            text: "A trust is a structured way to protect and manage your assets and legacy. The original owner (the grantor or settlor) transfers assets to a trustee, who manages them on the grantor's behalf and distributes them to beneficiaries. There are many types of trusts, each with its own advantages, and they can be tailored to your goals. A trust can:",
          },
          {
            type: "ul",
            items: [
              "**Provide for incapacity** — set directives so a trustee can manage your affairs and care if you're ever unable to.",
              "**Direct the distribution of your wealth** — spell out how, when, and to whom your assets pass, which reduces family conflict because the trustee must follow your instructions.",
              "**Help avoid probate and shield assets** — many trusts let beneficiaries avoid probate and receive their inheritance more privately; certain trusts, such as irrevocable trusts, can also shield some assets from creditors.",
            ],
          },
          {
            type: "p",
            text: "Planning a trust with an experienced attorney can save your beneficiaries significant time and stress.",
          },
        ],
      },
      {
        id: "wills",
        title: "Wills",
        serviceSlug: "wills",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "A will takes effect at death and directs how your estate is distributed. It lets you name your personal representative and decide how your assets are divided. Without a will, the court — not you — decides how your estate is handled and who administers it, after a probate process. A will keeps that choice in your hands. We'll help you put one in place that's ready for your family when they need it.",
          },
        ],
      },
      {
        id: "estate-administration",
        title: "Estate Administration",
        serviceSlug: "estate-administration",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Estate administration is the process of collecting and managing an estate, paying its debts and taxes, and distributing what remains to the heirs. In Utah, if someone dies without a will, their estate is distributed under Utah's intestate succession laws — and only in the rare case of no locatable relatives does an estate revert (\"escheat\") to the state. We guide families through administration so the process is as smooth as possible.",
          },
        ],
      },
      {
        id: "probate",
        title: "Probate",
        serviceSlug: "probate",
        verify: true,
        blocks: [
          {
            type: "p",
            text: "Probate can be difficult and time-consuming, but it doesn't have to be overwhelming. We help heirs, beneficiaries, and creditors protect their rights and interests throughout the proceeding, with clear advice at every step.",
          },
        ],
      },
    ],
  },

  "real-estate-law": {
    body: {
      blocks: [
        {
          type: "p",
          text: "**If you're buying**, we'll review your contract of sale and related documents, and examine the title or deed to confirm the seller's ownership. **If you're selling**, we'll help complete and perfect the contract of sale and prepare the documents needed for a clean transfer of ownership.",
        },
        {
          type: "p",
          text: "When you need an experienced real estate lawyer in St. George, get in touch with Witt Law.",
        },
      ],
    },
    handlesHeading: "Real estate matters we handle",
    handles: [
      "Purchase & Sale Contracts",
      "Title & Boundary Disputes",
      "HOA Disputes",
      "Landlord & Tenant",
      "Land Use & Development",
      "Quiet Title",
    ],
  },

  mediation: {
    showValueProps: true,
    feature: {
      heading: "Marshall Witt will fairly moderate your dispute.",
      blocks: [
        {
          type: "p",
          text: "Marshall has helped resolve hundreds of disputes through mediation over the past 25 years. People who know him trust him as a mediator because he's fair, unbiased, and straightforward — he works to understand every facet of a dispute and the underlying interests of each party in order to craft a lasting resolution.",
        },
        {
          type: "p",
          text: "Marshall holds a Certificate of Training from the Utah Court-Approved Mediation Training. He mediates divorce and family law matters of every kind — custody, parent-time, child support, division of assets and debts, alimony, enforcement, and modification. Parties may attend with their attorney or represent themselves. **By mentioning this website, Marshall's mediation services are available at a discounted rate of $200 per hour, split between the parties.**",
        },
      ],
    },
    handlesHeading: "Types of mediation we offer",
    handles: ["Divorce Mediation", "Family Mediation", "Civil Mediation"],
  },
};
