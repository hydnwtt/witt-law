/**
 * content/serviceContent.ts  (AUTO-GENERATED from design templates)
 * Body + FAQ copy for service child pages, keyed by service slug. Extracted
 * from design-reference/project/templates/03-*.html. Most are 🔴 write-verify —
 * attorney must review before launch. Regenerate via /tmp/extract_witt.py.
 */

import type { Block } from "@/components/BlockContent";
import type { FAQ } from "@/content/faqs";

export interface ServiceContent {
  h1: string;
  lead: string;
  seoTitle: string;
  seoDescription: string;
  asideHeading?: string;
  asideBody?: string;
  blocks: Block[];
  faqs: FAQ[];
}

export const serviceContent: Record<string, ServiceContent> = {
  "advance-healthcare-directives": {
    h1: "Advance Healthcare Directives in St. George, UT",
    lead: "State your medical wishes and name someone to speak for you when you can't.",
    seoTitle: "Advance Healthcare Directives in St. George, UT | Witt Law",
    seoDescription: "State your medical wishes and name someone to speak for you when you can't.",
    asideHeading: "Plan with confidence",
    asideBody: "Whatever the size of your estate, we'll help you put the right plan in place.",
    blocks: [
    { type: "p", text: "An advance healthcare directive states your wishes for medical care and names someone to make decisions for you if you can't speak for yourself." },
    { type: "p", text: "It's one of the most important — and most overlooked — parts of a complete plan. We'll help you prepare one." }
    ],
    faqs: [
      { question: "What is an advance healthcare directive?", answer: "It states your wishes for medical care and names someone to make decisions for you if you can't speak for yourself." },
      { question: "Why is it so important?", answer: "Without one, your family may face difficult decisions — or court involvement — during a medical crisis. It's one of the most overlooked parts of a plan." },
    ],
  },
  "alimony": {
    h1: "Alimony Attorney in St. George, UT",
    lead: "Alimony isn't automatic in Utah. We'll help you understand what to expect.",
    seoTitle: "Alimony Attorney in St. George, UT | Witt Law",
    seoDescription: "Alimony isn't automatic in Utah. We'll help you understand what to expect.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "Unlike child support, alimony isn't automatic in Utah. The goal is generally to leave both parties in a similar financial position, setting aside separate premarital assets." },
    { type: "p", text: "When awarded, alimony typically won't exceed the length of the marriage. We'll help you understand what to expect in your situation." }
    ],
    faqs: [
      { question: "Is alimony guaranteed in a Utah divorce?", answer: "No. Unlike child support, alimony isn't automatic — it depends on need, ability to pay, the length of the marriage, and other factors." },
      { question: "How long does alimony last?", answer: "When awarded, it generally won't exceed the length of the marriage, though the specifics vary case by case." },
    ],
  },
  "assault-domestic-violence": {
    h1: "Assault & Domestic Violence Attorney in St. George, UT",
    lead: "These charges move fast and carry severe penalties. We make sure your side is fully heard.",
    seoTitle: "Assault & Domestic Violence Attorney in St. George, UT | Witt Law",
    seoDescription: "These charges move fast and carry severe penalties. We make sure your side is fully heard.",
    asideHeading: "Free consultation",
    asideBody: "Tell us what you're facing. We'll explain what's at stake and your options — at no cost.",
    blocks: [
    { type: "p", text: "Assault charges are often more complicated than they first appear, and the penalties can be severe." },
    { type: "p", text: "We work to gather the relevant evidence, interview witnesses, and prepare your account of what happened so your side of the story is fully heard." }
    ],
    faqs: [
      { question: "What makes a charge 'domestic violence' in Utah?", answer: "It's generally an offense committed against a household member or partner. That designation can add consequences, including protective orders and firearm restrictions." },
      { question: "Can the charges be dropped if the other person doesn't want to press them?", answer: "Not on their own — the state, not the alleged victim, decides whether to proceed. That's why having defense counsel involved early matters." },
    ],
  },
  "auto-accidents": {
    h1: "Auto Accident Attorney in St. George, UT",
    lead: "Decades of experience with single-, two-, and multi-vehicle collisions — and the insurers behind them.",
    seoTitle: "Auto Accident Attorney in St. George, UT | Witt Law",
    seoDescription: "Decades of experience with single-, two-, and multi-vehicle collisions — and the insurers behind them.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "An auto accident is often the start of a long struggle — injuries, lost transportation, lost wages, and in the worst cases permanent impairment. You don't have to face it alone. We have decades of experience with single-, two-, and multi-vehicle collisions." },
    { type: "h3", text: "Every collision is different" },
    { type: "p", text: "**Single-vehicle accidents** aren't always the driver's fault — faulty mechanics, poor road conditions, or unexpected obstacles can all play a part. We investigate what really happened so you're treated fairly." },
    { type: "p", text: "**Two-vehicle accidents** — fender benders, T-bone, and head-on collisions — frequently cause injury. We deal with the other driver's insurer so you don't have to." },
    { type: "p", text: "**Multi-vehicle accidents**, common on highways, tend to cause the most serious injuries. We help you pursue fair compensation no matter how complex the chain of fault." },
    { type: "p", text: "So long as you meet Utah's injury threshold and are less than 50% at fault, we can likely help." }
    ],
    faqs: [
      { question: "How long do I have to file after a car accident in Utah?", answer: "Most Utah auto-injury claims have a four-year filing deadline, but claims against a government entity can carry much shorter notice periods. Don't wait — evidence and witness memories fade quickly." },
      { question: "What if the other driver was uninsured or underinsured?", answer: "Your own uninsured/underinsured motorist (UM/UIM) coverage may step in to cover your losses. We review every applicable policy to maximize what you can recover." },
      { question: "Do I still have a claim if I was partly at fault?", answer: "Likely yes. Under Utah's modified comparative negligence rule, you can recover as long as you're less than 50% at fault, though your award is reduced by your percentage of fault." },
    ],
  },
  "bicycle-accidents": {
    h1: "Bicycle Accident Attorney in St. George, UT",
    lead: "Cyclist collisions are serious and evidence disappears fast. Involve an attorney early.",
    seoTitle: "Bicycle Accident Attorney in St. George, UT | Witt Law",
    seoDescription: "Cyclist collisions are serious and evidence disappears fast. Involve an attorney early.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "Bicycles are smaller, quieter, and less predictable to drivers, which can make these collisions especially serious." },
    { type: "p", text: "Key evidence is often lost quickly, so it's important to involve an attorney early. The sooner we start, the better we can investigate and protect your claim." }
    ],
    faqs: [
      { question: "Why does timing matter so much in a bike accident case?", answer: "Key evidence — vehicle damage, road conditions, video — disappears fast. Getting an attorney involved early helps preserve what your claim depends on." },
      { question: "Do cyclists have the same right to recover as drivers?", answer: "Yes. A cyclist injured by a negligent driver can pursue the same kinds of compensation, including medical bills, lost wages, and pain and suffering." },
    ],
  },
  "burglary": {
    h1: "Burglary Defense Attorney in St. George, UT",
    lead: "Burglary is serious and often misunderstood. We examine the facts and the intent behind the charge.",
    seoTitle: "Burglary Defense Attorney in St. George, UT | Witt Law",
    seoDescription: "Burglary is serious and often misunderstood. We examine the facts and the intent behind the charge.",
    asideHeading: "Free consultation",
    asideBody: "Tell us what you're facing. We'll explain what's at stake and your options — at no cost.",
    blocks: [
    { type: "p", text: "Burglary is a serious charge in Utah and is often misunderstood. We examine the facts and the intent behind the allegation, protect your rights, and build a defense tailored to your case." },
    { type: "p", text: "If you've been charged with burglary, call us today." }
    ],
    faqs: [
      { question: "What does the state have to prove for burglary?", answer: "Generally, that you entered or remained unlawfully with the intent to commit a crime inside. Intent is often the key — and contested — issue a defense focuses on." },
      { question: "Is burglary always a felony?", answer: "It's a serious charge and frequently a felony in Utah, with the level depending on the type of structure and the circumstances. We work to challenge or reduce it." },
    ],
  },
  "child-custody": {
    h1: "Child Custody Attorney in St. George, UT",
    lead: "Utah courts decide custody by the best interests of the child. We help you protect your role.",
    seoTitle: "Child Custody Attorney in St. George, UT | Witt Law",
    seoDescription: "Utah courts decide custody by the best interests of the child. We help you protect your role.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "Utah courts decide custody based on the best interests of the child. **Legal custody** concerns who has a say in how a child is raised; **physical custody** concerns where the child lives." },
    { type: "p", text: "Parents often share joint legal custody absent good cause otherwise. Where there's a history of abuse or substance issues, custody may be limited and visitation supervised." },
    { type: "p", text: "We'll help you pursue an arrangement that protects your children." }
    ],
    faqs: [
      { question: "What's the difference between legal and physical custody?", answer: "Legal custody is about who has a say in major decisions; physical custody is about where the child lives. Parents often share joint legal custody absent good cause otherwise." },
      { question: "How does a Utah court decide custody?", answer: "By the best interests of the child — considering each parent's relationship with the child, stability, and ability to co-parent." },
      { question: "Can custody be limited?", answer: "Yes. Where there's a history of abuse or substance issues, custody can be restricted and visitation supervised." },
    ],
  },
  "child-support": {
    h1: "Child Support Attorney in St. George, UT",
    lead: "Support is calculated from each parent's income. We make sure the figure is fair — and enforced.",
    seoTitle: "Child Support Attorney in St. George, UT | Witt Law",
    seoDescription: "Support is calculated from each parent's income. We make sure the figure is fair — and enforced.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "Child support in Utah is calculated from each parent's income, and a parent who is able to work but isn't may be attributed income for that calculation." },
    { type: "p", text: "The non-custodial parent typically pays support to the custodial parent. If your co-parent isn't paying what was ordered, we can help you enforce the order and seek remedies." }
    ],
    faqs: [
      { question: "How is child support calculated in Utah?", answer: "From both parents' incomes and the number of overnights each parent has, under Utah's statutory guidelines." },
      { question: "What if a parent isn't working?", answer: "A parent who can work but chooses not to may have income 'imputed' to them for the calculation." },
      { question: "What if my co-parent stops paying?", answer: "We can help you enforce the order and pursue remedies for unpaid support." },
    ],
  },
  "civil-mediation": {
    h1: "Civil Mediation in St. George, UT",
    lead: "Many civil disputes resolve more amicably and affordably through mediation than trial.",
    seoTitle: "Civil Mediation in St. George, UT | Witt Law",
    seoDescription: "Many civil disputes resolve more amicably and affordably through mediation than trial.",
    asideHeading: "$200/hour, split",
    asideBody: "Mention this website and Marshall's mediation is available at $200 per hour, split between the parties.",
    blocks: [
    { type: "p", text: "Many civil disputes — including personal injury and contract matters — resolve more amicably and affordably through mediation than through trial." },
    { type: "p", text: "We help parties reach durable agreements both sides can live with." }
    ],
    faqs: [
      { question: "What kinds of civil disputes can be mediated?", answer: "Personal injury, contract, and many other civil matters often resolve more amicably and affordably through mediation than at trial." },
      { question: "How much does mediation cost?", answer: "By mentioning this website, Marshall's mediation is available at a discounted rate of $200 per hour, split between the parties." },
    ],
  },
  "divorce": {
    h1: "Divorce Attorney in St. George, UT",
    lead: "Getting it right the first time matters — decrees are hard to change later.",
    seoTitle: "Divorce Attorney in St. George, UT | Witt Law",
    seoDescription: "Getting it right the first time matters — decrees are hard to change later.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "Every divorce is different, and getting it right the first time matters because decrees are hard to change later." },
    { type: "p", text: "We handle contested and uncontested divorces, guiding you through custody, support, alimony, and the division of property and debts — and working toward a fair outcome that lets you move on." }
    ],
    faqs: [
      { question: "How long does a divorce take in Utah?", answer: "There's a mandatory 30-day waiting period, but most take longer. Uncontested cases may finish in a couple of months; contested ones can run several months to over a year." },
      { question: "Do we have to go to court?", answer: "Often no. Utah requires mediation first, and most divorces resolve at or shortly after mediation without a trial." },
      { question: "Can I change the decree later?", answer: "Only with a substantial, unforeseen change in circumstances — which is why getting it right the first time is so important." },
    ],
  },
  "divorce-mediation": {
    h1: "Divorce Mediation in St. George, UT",
    lead: "Reach agreement on custody, support, and property — faster and far cheaper than court.",
    seoTitle: "Divorce Mediation in St. George, UT | Witt Law",
    seoDescription: "Reach agreement on custody, support, and property — faster and far cheaper than court.",
    asideHeading: "$200/hour, split",
    asideBody: "Mention this website and Marshall's mediation is available at $200 per hour, split between the parties.",
    blocks: [
    { type: "p", text: "A neutral mediator helps both spouses work toward agreement on custody, parent-time, support, and property — usually faster and far less expensive than litigation." },
    { type: "p", text: "Most Utah divorces are required to attempt mediation, and Marshall Witt is a court-approved mediator." }
    ],
    faqs: [
      { question: "Is mediation required in a Utah divorce?", answer: "Most Utah divorces are required to attempt mediation before trial. Marshall Witt is a court-approved mediator who can guide both sides toward agreement." },
      { question: "What can be decided in divorce mediation?", answer: "Custody, parent-time, child support, alimony, and the division of property and debts — usually faster and far cheaper than litigation." },
    ],
  },
  "dog-bites": {
    h1: "Dog Bite Attorney in St. George, UT",
    lead: "Bitten by a dog or injured by an animal? We'll help you understand your rights and recover.",
    seoTitle: "Dog Bite Attorney in St. George, UT | Witt Law",
    seoDescription: "Bitten by a dog or injured by an animal? We'll help you understand your rights and recover.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "If you, a family member, or a friend has been bitten by a dog or injured by another domesticated animal, we can help you understand your rights and pursue compensation for your injuries." }
    ],
    faqs: [
      { question: "Is a dog owner automatically responsible in Utah?", answer: "Utah generally holds owners responsible for injuries their dog causes, even without a prior history of biting. Claims are often paid through the owner's homeowner's or renter's insurance." },
      { question: "What if a friend or family member's dog bit me?", answer: "Claims are typically paid through insurance, not out of your friend's pocket. Pursuing one is about covering your medical costs, not personal blame." },
    ],
  },
  "drug-offenses": {
    h1: "Drug Offense Attorney in St. George, UT",
    lead: "One poor choice shouldn't define your life. We pursue the best resolution available.",
    seoTitle: "Drug Offense Attorney in St. George, UT | Witt Law",
    seoDescription: "One poor choice shouldn't define your life. We pursue the best resolution available.",
    asideHeading: "Free consultation",
    asideBody: "Tell us what you're facing. We'll explain what's at stake and your options — at no cost.",
    blocks: [
    { type: "p", text: "One poor choice shouldn't define the rest of your life. We defend clients facing drug charges and, where appropriate, pursue alternatives to incarceration that address the underlying issue." },
    { type: "p", text: "We believe people can change, and we'll work toward the best resolution available in your case." }
    ],
    faqs: [
      { question: "Is jail the only outcome for a drug charge?", answer: "Not always. Where appropriate, we pursue alternatives to incarceration, such as treatment-focused options that address the underlying issue." },
      { question: "Does the type or amount of drug change the charge?", answer: "Yes. The substance, the amount, and whether there's an allegation of distribution all affect whether it's charged as a misdemeanor or a felony." },
    ],
  },
  "dui": {
    h1: "DUI Attorney in St. George, UT",
    lead: "A DUI is serious — but you have options. We protect your record and your license.",
    seoTitle: "DUI Attorney in St. George, UT | Witt Law",
    seoDescription: "A DUI is serious — but you have options. We protect your record and your license.",
    asideHeading: "Free consultation",
    asideBody: "Tell us what you're facing. We'll explain what's at stake and your options — at no cost.",
    blocks: [
    { type: "p", text: "A DUI — whether involving alcohol, drugs, or another substance — is a serious matter, but we can help. In Utah, a DUI is at minimum a Class B misdemeanor, generally punishable by up to six months in jail and a fine." },
    { type: "p", text: "Charges can rise to a Class A misdemeanor if someone was injured or a minor was in the vehicle, and to a felony if you've had multiple offenses within ten years or someone was seriously hurt." },
    { type: "p", text: "Whatever the circumstances, we'll review the evidence, represent you in court, and work to protect your record and your license. Free initial consultations are available." }
    ],
    faqs: [
      { question: "What are the penalties for a first DUI in Utah?", answer: "A first offense is at least a class B misdemeanor — up to six months in jail, fines, license consequences, and a possible ignition interlock. It can rise to a class A misdemeanor or a felony in aggravating situations." },
      { question: "How long do I have to save my license after a DUI?", answer: "You generally have only 10 days to request a hearing with the Driver License Division, separate from the criminal charge, or your license may be suspended automatically." },
      { question: "Can a DUI charge be reduced?", answer: "Sometimes. Depending on the stop, the testing, and the circumstances, we may be able to challenge the case or negotiate a reduction." },
    ],
  },
  "estate-administration": {
    h1: "Estate Administration in St. George, UT",
    lead: "Collecting an estate, paying its debts, and distributing what remains — handled with care.",
    seoTitle: "Estate Administration in St. George, UT | Witt Law",
    seoDescription: "Collecting an estate, paying its debts, and distributing what remains — handled with care.",
    asideHeading: "Plan with confidence",
    asideBody: "Whatever the size of your estate, we'll help you put the right plan in place.",
    blocks: [
    { type: "p", text: "Estate administration is the process of collecting and managing an estate, paying its debts and taxes, and distributing what remains to the heirs." },
    { type: "p", text: "In Utah, if someone dies without a will, their estate is distributed under Utah's intestate succession laws. We guide families through administration so the process is as smooth as possible." }
    ],
    faqs: [
      { question: "What does estate administration involve?", answer: "Collecting and managing the estate's assets, paying its debts and taxes, and distributing what remains to the heirs." },
      { question: "What happens if there's no will?", answer: "The estate is distributed under Utah's intestate succession laws. We guide the personal representative through the process." },
    ],
  },
  "expungement": {
    h1: "Expungement Attorney in St. George, UT",
    lead: "A past charge can follow you for years. We'll tell you whether expungement is available to you.",
    seoTitle: "Expungement Attorney in St. George, UT | Witt Law",
    seoDescription: "A past charge can follow you for years. We'll tell you whether expungement is available to you.",
    asideHeading: "Free consultation",
    asideBody: "Tell us what you're facing. We'll explain what's at stake and your options — at no cost.",
    blocks: [
    { type: "p", text: "A past charge or conviction can follow you for years — affecting jobs, housing, and more. Utah allows certain offenses to be expunged once eligibility periods and conditions are met." },
    { type: "p", text: "We can review your record and let you know whether expungement may be available to you." }
    ],
    faqs: [
      { question: "Which records can be expunged in Utah?", answer: "Many misdemeanors and some felonies qualify once required waiting periods pass and your sentence is complete. Eligibility depends on the offense and your overall record." },
      { question: "How long do I have to wait to expunge a conviction?", answer: "Waiting periods vary by offense level and run after your case is fully resolved. We can review your record and tell you when you may qualify." },
    ],
  },
  "family-mediation": {
    h1: "Family Mediation in St. George, UT",
    lead: "Resolve family disputes in a way that preserves relationships and keeps decisions in the family.",
    seoTitle: "Family Mediation in St. George, UT | Witt Law",
    seoDescription: "Resolve family disputes in a way that preserves relationships and keeps decisions in the family.",
    asideHeading: "$200/hour, split",
    asideBody: "Mention this website and Marshall's mediation is available at $200 per hour, split between the parties.",
    blocks: [
    { type: "p", text: "Beyond divorce, mediation can resolve a range of family disputes — modifications, parenting disagreements, and more — in a way that preserves relationships and keeps decisions in the family's hands." }
    ],
    faqs: [
      { question: "What family matters can be mediated besides divorce?", answer: "Modifications, parenting disagreements, and many other family disputes — resolved in a way that preserves relationships." },
      { question: "Do both people have to agree to mediate?", answer: "Mediation works best when both participate in good faith. The mediator stays neutral and helps the family reach its own decisions." },
    ],
  },
  "felonies-misdemeanors": {
    h1: "Felony & Misdemeanor Defense Attorney in St. George, UT",
    lead: "Whatever the level of the charge, we explain what's at stake and defend you.",
    seoTitle: "Felony & Misdemeanor Defense Attorney in St. George, UT | Witt Law",
    seoDescription: "Whatever the level of the charge, we explain what's at stake and defend you.",
    asideHeading: "Free consultation",
    asideBody: "Tell us what you're facing. We'll explain what's at stake and your options — at no cost.",
    blocks: [
    { type: "p", text: "A misdemeanor is generally punishable by up to a year of incarceration; a felony carries more. But the lasting effects — on employment, family, and your future — often outweigh the sentence itself." },
    { type: "p", text: "We defend a wide range of charges, including traffic offenses, harassment, possession, violent crimes, and property crimes. If you're not sure where your charge falls, call us and we'll explain it clearly." }
    ],
    faqs: [
      { question: "What's the practical difference between a felony and a misdemeanor?", answer: "A misdemeanor generally carries up to a year of incarceration; a felony carries more, plus heavier long-term effects on work, housing, and your rights." },
      { question: "Can a felony be reduced to a misdemeanor?", answer: "In some cases, yes — through negotiation or after successfully completing certain terms. We'll tell you whether that's realistic in your situation." },
    ],
  },
  "guardianship": {
    h1: "Guardianship Attorney in St. George, UT",
    lead: "When a child or incapacitated adult needs a decision-maker, guardianship provides the framework.",
    seoTitle: "Guardianship Attorney in St. George, UT | Witt Law",
    seoDescription: "When a child or incapacitated adult needs a decision-maker, guardianship provides the framework.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "When a child or incapacitated adult needs someone to make decisions on their behalf, guardianship provides a legal framework." },
    { type: "p", text: "We help families establish and manage guardianships and conservatorships with care." }
    ],
    faqs: [
      { question: "When is a guardianship needed?", answer: "When a child or an incapacitated adult needs someone with legal authority to make decisions on their behalf." },
      { question: "What's the difference between guardianship and conservatorship?", answer: "A guardian generally handles personal and care decisions; a conservator manages finances. We help families set up and manage both." },
    ],
  },
  "hoa-disputes": {
    h1: "HOA Dispute Attorney in St. George, UT",
    lead: "Disagreements with an HOA can escalate fast. We help find a practical resolution.",
    seoTitle: "HOA Dispute Attorney in St. George, UT | Witt Law",
    seoDescription: "Disagreements with an HOA can escalate fast. We help find a practical resolution.",
    asideHeading: "Protect your investment",
    asideBody: "Before you sign, let us review the contract and the title so your rights are protected.",
    blocks: [
    { type: "p", text: "Disagreements with a homeowners association over rules, fees, or enforcement can escalate quickly." },
    { type: "p", text: "We represent owners (and associations) in HOA disputes and help find a practical resolution." }
    ],
    faqs: [
      { question: "Can my HOA really fine me or place a lien on my home?", answer: "HOAs have significant powers over rules, fees, and enforcement, but they must follow their governing documents and the law. We help owners push back when they overreach." },
      { question: "Do you represent HOAs too?", answer: "Yes — we represent both owners and associations and work toward a practical resolution either way." },
    ],
  },
  "juvenile-defense": {
    h1: "Juvenile Defense Attorney in St. George, UT",
    lead: "Everyone deserves the chance to learn from a mistake. For young clients, we protect their future.",
    seoTitle: "Juvenile Defense Attorney in St. George, UT | Witt Law",
    seoDescription: "Everyone deserves the chance to learn from a mistake. For young clients, we protect their future.",
    asideHeading: "Free consultation",
    asideBody: "Tell us what you're facing. We'll explain what's at stake and your options — at no cost.",
    blocks: [
    { type: "p", text: "The legal issues surrounding juvenile cases differ significantly from those for adults. We represent both, because we believe everyone deserves the chance to learn from a mistake and move forward." },
    { type: "p", text: "For young clients, we focus on protecting their future." }
    ],
    faqs: [
      { question: "How is the juvenile system different from adult court?", answer: "Juvenile cases focus more on rehabilitation and a young person's future, with different procedures and outcomes. Serious cases, however, can sometimes be moved to adult court." },
      { question: "Will a juvenile record follow my child forever?", answer: "Not always — many juvenile records can later be expunged. We focus on protecting your child's long-term opportunities." },
    ],
  },
  "land-use-development": {
    h1: "Land Use & Development Attorney in St. George, UT",
    lead: "Zoning, permitting, and development rules can make or break a project.",
    seoTitle: "Land Use & Development Attorney in St. George, UT | Witt Law",
    seoDescription: "Zoning, permitting, and development rules can make or break a project.",
    asideHeading: "Protect your investment",
    asideBody: "Before you sign, let us review the contract and the title so your rights are protected.",
    blocks: [
    { type: "p", text: "Zoning, permitting, and development rules can make or break a project." },
    { type: "p", text: "We advise owners and developers on land use matters in Southern Utah's fast-growing communities." }
    ],
    faqs: [
      { question: "What does land use and development law cover?", answer: "Zoning, permitting, variances, and the development rules that determine what you can build on a property." },
      { question: "Why involve an attorney early in a project?", answer: "Land-use rules can make or break a project. Early advice helps you avoid permitting and zoning problems before they cost you time and money." },
    ],
  },
  "landlord-tenant": {
    h1: "Landlord & Tenant Attorney in St. George, UT",
    lead: "Utah law sets out specific rights and obligations. We help you handle them correctly.",
    seoTitle: "Landlord & Tenant Attorney in St. George, UT | Witt Law",
    seoDescription: "Utah law sets out specific rights and obligations. We help you handle them correctly.",
    asideHeading: "Protect your investment",
    asideBody: "Before you sign, let us review the contract and the title so your rights are protected.",
    blocks: [
    { type: "p", text: "Whether you're a landlord or a tenant, Utah law sets out specific rights and obligations." },
    { type: "p", text: "We help with leases, deposits, evictions, and disputes so the process is handled correctly." }
    ],
    faqs: [
      { question: "What are the rules for deposits and evictions in Utah?", answer: "Utah law sets specific requirements and timelines for both. Getting the process right protects you whether you're a landlord or a tenant." },
      { question: "Can you help with a lease dispute?", answer: "Yes. We handle leases, deposits, evictions, and other landlord-tenant disputes so they're resolved correctly." },
    ],
  },
  "legal-separation": {
    h1: "Legal Separation Attorney in St. George, UT",
    lead: "Not ready for divorce? A separation agreement can put key protections in place.",
    seoTitle: "Legal Separation Attorney in St. George, UT | Witt Law",
    seoDescription: "Not ready for divorce? A separation agreement can put key protections in place.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "If you're not ready for divorce but want protections in place — especially when minor children or significant assets are involved — a separation agreement can address most of the same issues a divorce decree does." },
    { type: "p", text: "Utah recognizes both temporary separation and separate maintenance. We can help you decide whether separation is the right step." }
    ],
    faqs: [
      { question: "How is legal separation different from divorce?", answer: "A separation agreement can address most of the same issues — custody, support, property — but you stay legally married. Utah recognizes both temporary separation and separate maintenance." },
      { question: "Why choose separation over divorce?", answer: "Some couples aren't ready for divorce but want protections in place, especially with minor children or significant assets involved." },
    ],
  },
  "modifications": {
    h1: "Divorce & Custody Modification Attorney in St. George, UT",
    lead: "When circumstances change substantially, a decree can sometimes be modified.",
    seoTitle: "Divorce & Custody Modification Attorney in St. George, UT | Witt Law",
    seoDescription: "When circumstances change substantially, a decree can sometimes be modified.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "A divorce decree can sometimes be modified when there's been a substantial, material change in circumstances that wasn't foreseeable at the time of the divorce." },
    { type: "p", text: "If your situation has changed, we can advise whether a modification is possible." }
    ],
    faqs: [
      { question: "When can a divorce decree be modified?", answer: "When there's been a substantial, material change in circumstances that wasn't foreseeable at the time of the original order." },
      { question: "What can be modified?", answer: "Things like custody, parent-time, child support, and sometimes alimony — if the change-in-circumstances standard is met." },
    ],
  },
  "motorcycle-accidents": {
    h1: "Motorcycle Accident Attorney in St. George, UT",
    lead: "Motorcycle injuries are often severe — and PIP rarely covers it all. We help you pursue what you're owed.",
    seoTitle: "Motorcycle Accident Attorney in St. George, UT | Witt Law",
    seoDescription: "Motorcycle injuries are often severe — and PIP rarely covers it all. We help you pursue what you're owed.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "Motorcycle collisions are often severe. While initial medical costs may be covered by the motorcycle's PIP coverage, that coverage frequently isn't enough." },
    { type: "p", text: "Recovery can be a long road — but you don't have to travel it alone. We'll help you understand your coverage and pursue what you're owed." }
    ],
    faqs: [
      { question: "Will the motorcycle's PIP cover my injuries?", answer: "PIP may cover initial medical costs, but motorcycle injuries are often severe enough that it isn't nearly enough. We pursue the at-fault driver for the rest." },
      { question: "Does not wearing a helmet hurt my claim?", answer: "An insurer may raise it, but it doesn't automatically bar recovery. We push back on attempts to unfairly shift blame onto the rider." },
    ],
  },
  "parent-time": {
    h1: "Parent-Time & Visitation in St. George, UT",
    lead: "Parent-time is your child's right to time with each parent. We'll help you build a workable schedule.",
    seoTitle: "Parent-Time & Visitation in St. George, UT | Witt Law",
    seoDescription: "Parent-time is your child's right to time with each parent. We'll help you build a workable schedule.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "Visitation is also called parent-time, because it's the child's right to time with each parent." },
    { type: "p", text: "When parents can't agree, Utah's statutory guidelines provide a default schedule. We'll help you reach a workable arrangement or advocate for the schedule that's right for your family." }
    ],
    faqs: [
      { question: "What is parent-time?", answer: "It's the child's right to time with each parent (sometimes called visitation). Utah has statutory guidelines that set a default schedule when parents can't agree." },
      { question: "Can we create our own schedule?", answer: "Yes — courts favor workable arrangements parents agree on. We help you reach one, or advocate for the right schedule if you can't." },
    ],
  },
  "parentage": {
    h1: "Parentage & Paternity Attorney in St. George, UT",
    lead: "Establishing paternity can be decisive in custody and support. We'll present your case.",
    seoTitle: "Parentage & Paternity Attorney in St. George, UT | Witt Law",
    seoDescription: "Establishing paternity can be decisive in custody and support. We'll present your case.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "Establishing paternity can be decisive in divorce and custody matters. Court-ordered DNA testing can benefit both parties: confirming a biological relationship helps the court make sound decisions about custody and support." },
    { type: "p", text: "And if testing shows the person in question is not the biological parent, that isn't necessarily the end of the matter — these situations are nuanced, and having an attorney present your case can make a real difference for you and your child." }
    ],
    faqs: [
      { question: "Why establish paternity?", answer: "It can be decisive for custody and support. Confirming a biological relationship helps the court make sound decisions for the child." },
      { question: "What if DNA testing shows I'm not the biological parent?", answer: "That isn't necessarily the end of the matter — these situations are nuanced, and having an attorney present your case can make a real difference." },
    ],
  },
  "pedestrian-accidents": {
    h1: "Pedestrian Accident Attorney in St. George, UT",
    lead: "Hit while walking? We push back when insurers try to shift the blame onto you.",
    seoTitle: "Pedestrian Accident Attorney in St. George, UT | Witt Law",
    seoDescription: "Hit while walking? We push back when insurers try to shift the blame onto you.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "Pedestrian collisions are frequently traumatic, and insurers often try to shift blame onto the person who was hit." },
    { type: "p", text: "We know how to push back on those tactics and handle the frustrating back-and-forth with insurance companies so you can focus on getting better." }
    ],
    faqs: [
      { question: "The insurer says it was my fault for crossing — is that true?", answer: "Insurers often try to shift blame onto pedestrians. Utah's comparative negligence rule still lets you recover if you're less than 50% at fault, and we work to establish the driver's responsibility." },
      { question: "What if the driver who hit me fled the scene?", answer: "A hit-and-run may still be covered through your own uninsured motorist coverage. Report it promptly and call us to review your options." },
    ],
  },
  "powers-of-attorney": {
    h1: "Powers of Attorney in St. George, UT",
    lead: "Name someone you trust to handle financial or legal matters if you can't.",
    seoTitle: "Powers of Attorney in St. George, UT | Witt Law",
    seoDescription: "Name someone you trust to handle financial or legal matters if you can't.",
    asideHeading: "Plan with confidence",
    asideBody: "Whatever the size of your estate, we'll help you put the right plan in place.",
    blocks: [
    { type: "p", text: "A power of attorney lets you name someone you trust to handle financial or legal matters if you can't." },
    { type: "p", text: "Setting one up in advance keeps decisions in the right hands and spares your family a court process later. We'll help you put the right documents in place." }
    ],
    faqs: [
      { question: "What does a power of attorney do?", answer: "It lets someone you trust handle financial or legal matters if you can't — and setting it up in advance spares your family a court process later." },
      { question: "What is a 'durable' power of attorney?", answer: "A durable power of attorney stays in effect even if you become incapacitated, which is exactly when it's most needed." },
    ],
  },
  "prenup-postnup": {
    h1: "Prenuptial & Postnuptial Agreements in St. George, UT",
    lead: "A clear agreement protects both spouses and prevents costly disputes later.",
    seoTitle: "Prenuptial & Postnuptial Agreements in St. George, UT | Witt Law",
    seoDescription: "A clear agreement protects both spouses and prevents costly disputes later.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "A clear agreement before or during marriage can protect both spouses and prevent costly disputes later." },
    { type: "p", text: "We draft and review prenuptial and postnuptial agreements that are fair, enforceable, and tailored to your circumstances." }
    ],
    faqs: [
      { question: "Are prenuptial agreements enforceable in Utah?", answer: "Yes, when they're properly drafted, entered voluntarily, and fair. We make sure yours is structured to hold up." },
      { question: "What's the difference between a prenup and a postnup?", answer: "A prenuptial agreement is signed before marriage; a postnuptial agreement is signed during the marriage. Both can protect each spouse and prevent later disputes." },
    ],
  },
  "probate": {
    h1: "Probate Attorney in St. George, UT",
    lead: "Probate can be difficult and time-consuming — but it doesn't have to be overwhelming.",
    seoTitle: "Probate Attorney in St. George, UT | Witt Law",
    seoDescription: "Probate can be difficult and time-consuming — but it doesn't have to be overwhelming.",
    asideHeading: "Plan with confidence",
    asideBody: "Whatever the size of your estate, we'll help you put the right plan in place.",
    blocks: [
    { type: "p", text: "Probate can be difficult and time-consuming, but it doesn't have to be overwhelming." },
    { type: "p", text: "We help heirs, beneficiaries, and creditors protect their rights and interests throughout the proceeding, with clear advice at every step." }
    ],
    faqs: [
      { question: "Is probate always required in Utah?", answer: "Not always. Small estates and assets that pass by trust, beneficiary designation, or joint ownership may avoid it. We can tell you what your situation requires." },
      { question: "How long does probate take?", answer: "It varies with the estate's size and complexity, but a clear plan and good guidance keep it from becoming overwhelming." },
    ],
  },
  "product-liability": {
    h1: "Product Liability Attorney in St. George, UT",
    lead: "Hurt by a defective product? We hold manufacturers and sellers accountable.",
    seoTitle: "Product Liability Attorney in St. George, UT | Witt Law",
    seoDescription: "Hurt by a defective product? We hold manufacturers and sellers accountable.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "We've handled many product liability claims over the years — defective food, drugs, tools, toys, equipment, tires, brakes, seat belts, and other vehicle components." },
    { type: "p", text: "If you've been injured by a product that was defectively designed, defectively manufactured, or sold without proper warnings, give us a call." }
    ],
    faqs: [
      { question: "What kinds of product defects can support a claim?", answer: "Generally three: a defective design, a defective manufacture, or a failure to warn. We've handled claims involving food, drugs, tools, tires, brakes, seat belts, and more." },
      { question: "Do I have to prove the company was careless?", answer: "Product claims often focus on the defect itself rather than proving negligence. We'll evaluate which legal theories fit your situation." },
    ],
  },
  "property-debt-division": {
    h1: "Property & Debt Division in St. George, UT",
    lead: "An experienced attorney is your best protection against an unfair split.",
    seoTitle: "Property & Debt Division in St. George, UT | Witt Law",
    seoDescription: "An experienced attorney is your best protection against an unfair split.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "One of the biggest reasons to have an experienced attorney is to avoid an unfair division of debt and property." },
    { type: "p", text: "We investigate thoroughly so that marital assets and obligations are divided fairly." }
    ],
    faqs: [
      { question: "How are assets and debts divided in Utah?", answer: "Marital property and debts are divided equitably (fairly), with premarital or separate assets generally set aside. Thorough investigation is key to a fair split." },
      { question: "What if I think assets are being hidden?", answer: "We investigate finances carefully and use discovery tools to surface assets so the division reflects the full picture." },
    ],
  },
  "protective-orders": {
    h1: "Protective Order Attorney in St. George, UT",
    lead: "Everyone deserves to feel safe. We'll review your orders and advise on your options.",
    seoTitle: "Protective Order Attorney in St. George, UT | Witt Law",
    seoDescription: "Everyone deserves to feel safe. We'll review your orders and advise on your options.",
    asideHeading: "Discounted consult",
    asideBody: "We offer discounted initial consultations for divorce and family matters. Tell us what's going on.",
    blocks: [
    { type: "p", text: "Everyone deserves to feel safe at home and in public. If at any point during or after your divorce you have concerns for your safety or your children's, we can review the existing orders and give you objective advice about your options." }
    ],
    faqs: [
      { question: "How quickly can I get a protective order?", answer: "Courts can issue temporary orders quickly when there's a safety concern, with a hearing to follow. We can help you understand the process and your options." },
      { question: "What if a protective order has been filed against me?", answer: "It can affect custody, your home, and your rights. We provide objective advice and represent you at the hearing." },
    ],
  },
  "purchase-sale-contracts": {
    h1: "Real Estate Purchase & Sale Contracts in St. George, UT",
    lead: "The contract is where your rights are won or lost. We make sure yours protects you.",
    seoTitle: "Real Estate Purchase & Sale Contracts in St. George, UT | Witt Law",
    seoDescription: "The contract is where your rights are won or lost. We make sure yours protects you.",
    asideHeading: "Protect your investment",
    asideBody: "Before you sign, let us review the contract and the title so your rights are protected.",
    blocks: [
    { type: "p", text: "Whether you're buying or selling, the contract is where your rights are won or lost." },
    { type: "p", text: "We review and prepare purchase and sale agreements, explain the terms, and make sure the transaction is structured to protect your interests." }
    ],
    faqs: [
      { question: "Do I need an attorney to review my purchase contract?", answer: "It's wise when the deal is significant or complex. The contract is where your rights are won or lost, and a review before you sign can prevent costly problems." },
      { question: "Can you help if I'm the seller?", answer: "Yes. We help complete and perfect the contract of sale and prepare the documents for a clean transfer of ownership." },
    ],
  },
  "quiet-title": {
    h1: "Quiet Title Attorney in St. George, UT",
    lead: "A quiet title action settles competing claims so your ownership is clear.",
    seoTitle: "Quiet Title Attorney in St. George, UT | Witt Law",
    seoDescription: "A quiet title action settles competing claims so your ownership is clear.",
    asideHeading: "Protect your investment",
    asideBody: "Before you sign, let us review the contract and the title so your rights are protected.",
    blocks: [
    { type: "p", text: "A quiet title action resolves competing or unclear claims to a property so ownership is settled once and for all." },
    { type: "p", text: "We handle these actions to clear the way for a clean title." }
    ],
    faqs: [
      { question: "What is a quiet title action?", answer: "A lawsuit that resolves competing or unclear claims to a property so ownership is settled once and for all." },
      { question: "When would I need one?", answer: "When there's a cloud on your title — a boundary issue, an old lien, or a competing claim — that's keeping you from selling, refinancing, or using your land." },
    ],
  },
  "sex-crimes": {
    h1: "Sex Crimes Defense Attorney in St. George, UT",
    lead: "Among the most serious charges in the law. We handle these sensitive cases with care and discretion.",
    seoTitle: "Sex Crimes Defense Attorney in St. George, UT | Witt Law",
    seoDescription: "Among the most serious charges in the law. We handle these sensitive cases with care and discretion.",
    asideHeading: "Free consultation",
    asideBody: "Tell us what you're facing. We'll explain what's at stake and your options — at no cost.",
    blocks: [
    { type: "p", text: "The penalties for a sex offense are among the most serious in the law and can include lengthy incarceration and registration requirements." },
    { type: "p", text: "Because an accusation alone can be devastating, it is critical to have experienced, discreet defense counsel. We handle these sensitive cases with care." }
    ],
    faqs: [
      { question: "Why is early, experienced counsel so important here?", answer: "An accusation alone can be devastating, and the penalties — including incarceration and registration — are among the most serious in the law. Early, discreet defense protects your rights from the start." },
      { question: "Does a conviction require registration?", answer: "Many sex offenses do, sometimes for years or for life. The specifics depend on the offense, which is one reason defense strategy is so important." },
    ],
  },
  "slip-and-fall": {
    h1: "Slip & Fall Attorney in St. George, UT",
    lead: "Property owners owe you a reasonably safe space. When they don't deliver, they may be liable.",
    seoTitle: "Slip & Fall Attorney in St. George, UT | Witt Law",
    seoDescription: "Property owners owe you a reasonably safe space. When they don't deliver, they may be liable.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "Property owners have a duty to take reasonable steps to keep their premises safe for people they invite or expect to be there. When they fail to do so and someone is hurt, they may be liable." },
    { type: "p", text: "These cases turn on the specific facts and your status on the property, so it's worth talking through the details with an attorney." }
    ],
    faqs: [
      { question: "When is a property owner actually liable for my fall?", answer: "When they failed to take reasonable steps to keep the property safe and that failure caused your injury. Your status on the property — invited guest, customer, or trespasser — affects the duty owed." },
      { question: "The store says I should have watched where I was going — does that end my claim?", answer: "Not necessarily. Even if you share some fault, Utah lets you recover if you're less than 50% responsible. We work to prove the hazard the owner allowed." },
    ],
  },
  "special-needs-asset-protection": {
    h1: "Special Needs & Asset Protection in St. George, UT",
    lead: "Specialized trusts that protect benefits and shield assets for those who depend on you.",
    seoTitle: "Special Needs & Asset Protection in St. George, UT | Witt Law",
    seoDescription: "Specialized trusts that protect benefits and shield assets for those who depend on you.",
    asideHeading: "Plan with confidence",
    asideBody: "Whatever the size of your estate, we'll help you put the right plan in place.",
    blocks: [
    { type: "p", text: "Certain trusts can provide for a loved one with special needs without jeopardizing their benefits, and others can help shield assets from future creditors." },
    { type: "p", text: "We design these specialized plans around your family's specific goals." }
    ],
    faqs: [
      { question: "Can I provide for a relative with special needs without risking their benefits?", answer: "Yes. A properly drafted special needs trust can support a loved one while preserving their eligibility for need-based benefits." },
      { question: "How does asset protection planning work?", answer: "Certain trusts and strategies can help shield assets from future creditors. We design these plans around your family's specific goals." },
    ],
  },
  "theft-shoplifting": {
    h1: "Theft & Shoplifting Attorney in St. George, UT",
    lead: "We look beyond the charge to the circumstances — and fight for a proportional outcome.",
    seoTitle: "Theft & Shoplifting Attorney in St. George, UT | Witt Law",
    seoDescription: "We look beyond the charge to the circumstances — and fight for a proportional outcome.",
    asideHeading: "Free consultation",
    asideBody: "Tell us what you're facing. We'll explain what's at stake and your options — at no cost.",
    blocks: [
    { type: "p", text: "We look at more than the charge — we look at the circumstances behind it. Many theft and shoplifting cases happen in a moment of stress or poor judgment, and we believe the consequences should be proportional to what actually occurred." },
    { type: "p", text: "If you've been charged with theft, we're ready to help." }
    ],
    faqs: [
      { question: "How serious is a shoplifting charge in Utah?", answer: "It depends largely on the value involved — lower-value cases are misdemeanors, while higher-value or repeat cases can become felonies. The lasting record often matters more than the sentence." },
      { question: "Can a theft charge be kept off my record?", answer: "Possibly, through a negotiated resolution or later expungement if you're eligible. We'll look at the options for your specific case." },
    ],
  },
  "title-boundary-disputes": {
    h1: "Title & Boundary Dispute Attorney in St. George, UT",
    lead: "Resolving questions of ownership, property lines, and easements before they grow.",
    seoTitle: "Title & Boundary Dispute Attorney in St. George, UT | Witt Law",
    seoDescription: "Resolving questions of ownership, property lines, and easements before they grow.",
    asideHeading: "Protect your investment",
    asideBody: "Before you sign, let us review the contract and the title so your rights are protected.",
    blocks: [
    { type: "p", text: "Disputes over property lines, easements, or recorded interests can be stressful and expensive." },
    { type: "p", text: "We help property owners resolve title and boundary issues — through negotiation where possible and litigation where necessary." }
    ],
    faqs: [
      { question: "What is a boundary dispute?", answer: "A disagreement over where one property ends and another begins, often involving fences, easements, or surveys. We resolve these through negotiation or, when needed, litigation." },
      { question: "What is a 'cloud' on title?", answer: "A competing claim or recorded interest that makes ownership unclear. Clearing it — sometimes through a quiet title action — lets you sell or refinance." },
    ],
  },
  "traumatic-brain-injury": {
    h1: "Traumatic Brain Injury Attorney in St. George, UT",
    lead: "TBIs demand careful medical and legal documentation. We have the experience to handle them.",
    seoTitle: "Traumatic Brain Injury Attorney in St. George, UT | Witt Law",
    seoDescription: "TBIs demand careful medical and legal documentation. We have the experience to handle them.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "Attorney Marshall Witt has been a member of the Brain Injury Alliance of Utah and has handled many traumatic brain injury cases — arising from auto and truck collisions, near-drownings, falls, premises hazards such as carbon monoxide exposure, assaults, and sporting events." },
    { type: "p", text: "TBI cases require careful medical and legal documentation, and we have the experience to handle them." }
    ],
    faqs: [
      { question: "Why do TBI cases need special handling?", answer: "Brain injuries can have effects that aren't obvious at first and that last for years. They require careful medical documentation to prove the full, long-term impact." },
      { question: "What kinds of incidents cause a brain injury claim?", answer: "We've handled TBIs from auto and truck crashes, falls, near-drownings, premises hazards like carbon monoxide exposure, assaults, and sporting events." },
    ],
  },
  "truck-train-bus-accidents": {
    h1: "Truck, Train & Bus Accident Attorney in St. George, UT",
    lead: "Commercial-vehicle crashes are complex. Act early so we can preserve evidence and protect your claim.",
    seoTitle: "Truck, Train & Bus Accident Attorney in St. George, UT | Witt Law",
    seoDescription: "Commercial-vehicle crashes are complex. Act early so we can preserve evidence and protect your claim.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "Collisions involving commercial trucks, trains, or buses are rarely simple. They can involve multiple insurers, company drivers, and — in the case of buses or public transit — government entities with their own strict notice deadlines." },
    { type: "p", text: "Acting quickly matters, because evidence and filing windows can be limited. If you've been hit by a commercial vehicle, call us early so we can preserve what matters and protect your claim." }
    ],
    faqs: [
      { question: "Why are commercial-vehicle accident claims more complicated?", answer: "They often involve multiple insurers, a company and its driver, federal trucking regulations, and sometimes a government entity — each with its own rules and deadlines." },
      { question: "A government bus was involved — is the deadline different?", answer: "Yes. Claims against public transit or other government entities in Utah carry shorter notice deadlines, so it's important to act quickly." },
    ],
  },
  "trust-administration": {
    h1: "Trust Administration in St. George, UT",
    lead: "Successor trustees take on real responsibilities. We guide them through each step.",
    seoTitle: "Trust Administration in St. George, UT | Witt Law",
    seoDescription: "Successor trustees take on real responsibilities. We guide them through each step.",
    asideHeading: "Plan with confidence",
    asideBody: "Whatever the size of your estate, we'll help you put the right plan in place.",
    blocks: [
    { type: "p", text: "When the person who created a trust passes away or becomes incapacitated, the successor trustee takes on real responsibilities — notifying beneficiaries, managing and distributing assets, and handling debts and taxes." },
    { type: "p", text: "We guide trustees through each step so the trust is administered correctly." }
    ],
    faqs: [
      { question: "What does a successor trustee have to do?", answer: "Notify beneficiaries, gather and value assets, pay debts and taxes, and distribute property according to the trust. We guide trustees through each step." },
      { question: "Can I get help if I've been named a trustee?", answer: "Yes. Trustees carry real legal responsibilities, and we help them administer the trust correctly and avoid personal liability." },
    ],
  },
  "trusts": {
    h1: "Trust Attorney in St. George, UT",
    lead: "A structured way to protect and manage your assets and legacy.",
    seoTitle: "Trust Attorney in St. George, UT | Witt Law",
    seoDescription: "A structured way to protect and manage your assets and legacy.",
    asideHeading: "Plan with confidence",
    asideBody: "Whatever the size of your estate, we'll help you put the right plan in place.",
    blocks: [
    { type: "p", text: "A trust is a structured way to protect and manage your assets and legacy. The original owner (the grantor or settlor) transfers assets to a trustee, who manages them on the grantor's behalf and distributes them to beneficiaries." },
    { type: "p", text: "There are many types of trusts, each with its own advantages, and they can be tailored to your goals. A trust can:" },
    { type: "ul", items: ["**Provide for incapacity** — set directives so a trustee can manage your affairs and care if you're ever unable to.", "**Direct the distribution of your wealth** — spell out how, when, and to whom your assets pass, which reduces family conflict because the trustee must follow your instructions.", "**Help avoid probate and shield assets** — many trusts let beneficiaries avoid probate and receive their inheritance more privately; certain trusts, such as irrevocable trusts, can also shield some assets from creditors."] },
    { type: "p", text: "Planning a trust with an experienced attorney can save your beneficiaries significant time and stress." }
    ],
    faqs: [
      { question: "What's the difference between a revocable and irrevocable trust?", answer: "A revocable trust can be changed during your life and helps avoid probate; an irrevocable trust generally can't be changed but can offer added protection, such as shielding some assets from creditors." },
      { question: "Does a trust avoid probate?", answer: "Many trusts let your beneficiaries avoid probate and receive their inheritance more privately and quickly." },
    ],
  },
  "wills": {
    h1: "Wills Attorney in St. George, UT",
    lead: "A will keeps the decisions about your estate in your hands, not the court's.",
    seoTitle: "Wills Attorney in St. George, UT | Witt Law",
    seoDescription: "A will keeps the decisions about your estate in your hands, not the court's.",
    asideHeading: "Plan with confidence",
    asideBody: "Whatever the size of your estate, we'll help you put the right plan in place.",
    blocks: [
    { type: "p", text: "A will takes effect at death and directs how your estate is distributed. It lets you name your personal representative and decide how your assets are divided." },
    { type: "p", text: "Without a will, the court — not you — decides how your estate is handled and who administers it, after a probate process. A will keeps that choice in your hands." },
    { type: "p", text: "We'll help you put one in place that's ready for your family when they need it." }
    ],
    faqs: [
      { question: "What happens if I die without a will in Utah?", answer: "The court applies Utah's intestacy laws to decide who inherits and who administers your estate — which may not match your wishes." },
      { question: "Does a will avoid probate?", answer: "No — a will takes effect through probate. If avoiding probate is a goal, a trust may be a better fit, and we'll help you choose." },
    ],
  },
  "wrongful-death": {
    h1: "Wrongful Death Attorney in St. George, UT",
    lead: "When negligence takes a loved one, the people left behind deserve answers and support.",
    seoTitle: "Wrongful Death Attorney in St. George, UT | Witt Law",
    seoDescription: "When negligence takes a loved one, the people left behind deserve answers and support.",
    asideHeading: "No fee unless we win",
    asideBody: "Tell us what happened. There's no fee for injury cases unless we recover for you.",
    blocks: [
    { type: "p", text: "When someone dies because of another's negligence, the people left behind deserve answers and support." },
    { type: "p", text: "In Utah, wrongful death claims must be filed in court, and only certain people — such as an heir or the representative of the estate — are permitted to bring them. We handle these cases with the sensitivity they require. Call us for a free, confidential consultation." }
    ],
    faqs: [
      { question: "Who can file a wrongful death claim in Utah?", answer: "Only certain people — such as an heir or the personal representative of the estate — may bring a wrongful death claim. We can help determine whether you're eligible." },
      { question: "How long do we have to file?", answer: "Utah generally allows two years from the date of death for a wrongful death claim. Acting sooner helps preserve evidence and protect the family's rights." },
    ],
  },
};

export const getServiceContent = (slug: string) => serviceContent[slug];