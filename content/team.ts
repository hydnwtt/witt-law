/**
 * content/team.ts
 * Attorney and staff bios. Bios power /attorneys/, the bio pages, and Person schema.
 *
 * VERIFY before launch: bar admissions, founding/year-licensed, awards (E-E-A-T + Utah Rule 7.1).
 */

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  /** "attorney" gets a dedicated bio page; "staff" appears on About/Attorneys only. */
  role: "attorney" | "staff";
  headshot: string; // TODO: supply real headshots
  /** Short one-liner for cards. */
  blurb: string;
  /** Full bio paragraphs (rendered in order) for the bio page. */
  bio: string[];
  credentials?: string[];
  /** TODO: VERIFY each admission/state. */
  barAdmissions?: string[];
  associations?: string[];
  practiceAreaSlugs?: string[]; // links to pillar pages
  videoUrl?: string; // optional intro video from the old site
}

export const team: TeamMember[] = [
  {
    slug: "marshall-witt",
    name: "Marshall Witt",
    title: "Founding Attorney",
    role: "attorney",
    headshot: "/images/team/marshall-witt.jpg",
    blurb:
      "Founder of Witt Law, handling personal injury, criminal defense, family law, estate planning, and mediation across Southern Utah.",
    bio: [
      "Marshall has spent his career helping Southern Utah families through injury, criminal, family, and estate matters — and he built Witt Law around a simple idea: listen first, explain things plainly, and do the work right.",
      "He attended Dixie Jr. College before earning bachelor's and master's degrees in international relations from BYU, then graduated from BYU's J. Reuben Clark Law School, where he served as Editor-in-Chief of the International and Comparative Law Journal.",
      "Marshall was a partner at Duval Hansen Witt and Morley in northern Utah from 1995 to 2003, then founded the predecessor of Witt Law in 2003 and opened the St. George office in 2013. He is also a trained, Utah court-approved mediator and has resolved hundreds of disputes through mediation.",
    ],
    credentials: [
      "J.D., J. Reuben Clark Law School, Brigham Young University",
      "M.A. & B.A., International Relations, Brigham Young University",
      "Editor-in-Chief, International and Comparative Law Journal",
      "Certificate, Utah Court-Approved Mediation Training",
    ],
    barAdmissions: ["Utah State Bar"], // TODO: VERIFY + any additional states
    associations: ["Brain Injury Alliance of Utah", "Utah State Bar"],
    practiceAreaSlugs: [
      "personal-injury",
      "criminal-defense",
      "divorce-family-law",
      "estate-planning",
      "mediation",
    ],
  },
  {
    slug: "abraham-ivie",
    name: "Abraham Ivie",
    title: "Attorney",
    role: "attorney",
    headshot: "/images/team/abraham-ivie.jpg",
    blurb:
      "Family law attorney focused on parentage, custody, support, and protective orders. Licensed in Utah and Nevada; fluent in Spanish.",
    bio: [
      "Abe was born and raised in Las Vegas, is an Eagle Scout, and became fluent in Spanish while serving an LDS mission in Argentina. He is married with two young children.",
      "He graduated from the William S. Boyd School of Law at UNLV, where he served as President of the J. Reuben Clark Law Society. Before bringing his family to St. George and joining Witt Law, he practiced at Wood Smith Henning & Berman.",
      "Abe's practice focuses on family law — parentage, separation, divorce, custody, support, modification, enforcement, protective orders, and guardianship.",
    ],
    credentials: [
      "J.D., William S. Boyd School of Law, University of Nevada, Las Vegas",
      "President, J. Reuben Clark Law Society (Boyd School of Law)",
    ],
    barAdmissions: ["Utah State Bar", "Nevada State Bar"], // TODO: VERIFY dual licensure
    associations: [],
    practiceAreaSlugs: ["divorce-family-law", "mediation"],
  },
  {
    slug: "sheryl-slebodnick",
    name: "Sheryl Slebodnick",
    title: "Paralegal, Bookkeeper & Office Manager",
    role: "staff",
    headshot: "/images/team/sheryl-slebodnick.jpg",
    blurb:
      "Paralegal, bookkeeper, and office manager with nearly two decades at Witt Law.",
    bio: [
      "Sheryl has been with Witt Law for nearly 18 years. She holds an A.S. in General Science, a B.S. in Business Administration, and a Paralegal Certificate from Weber State.",
      "She previously worked for the California Medicare Part B program as a lead supervisor in claims processing and served as a Medicare Hearing Officer. An avid golfer and former LPGA teaching professional, she loves camping, hiking, gardening, and animals.",
    ],
  },
  {
    slug: "hannah-beck",
    name: "Hannah Beck",
    title: "Front-Desk Legal Assistant",
    role: "staff",
    headshot: "/images/team/hannah-beck.jpg",
    blurb: "The friendly first point of contact at Witt Law.",
    bio: [
      "Hannah has been with Witt Law for about three years. She grew up in Georgia and earned a B.S. in Public Health from Emory University.",
      "A certified DBT and CBT instructor, she worked with the State of Utah for four years as a behavioral technician before transitioning to support minors and adults with autism, Down syndrome, and other needs. She's passionate about public-safety causes.",
    ],
  },
];

export const attorneys = team.filter((m) => m.role === "attorney");
export const staff = team.filter((m) => m.role === "staff");
export const getMember = (slug: string) => team.find((m) => m.slug === slug);
