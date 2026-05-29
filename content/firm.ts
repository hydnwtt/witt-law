/**
 * content/firm.ts
 * Single source of truth for firm identity, NAP, and contact data.
 * Import this everywhere — never hard-code phone/address in JSX.
 *
 * VERIFY before launch: foundedYear, barAdmissions, hours (marked TODO).
 */

export interface Address {
  line1: string;
  city: string;
  state: string;
  zip: string;
  /** Pre-built Google Maps link for "Get Directions". */
  mapUrl: string;
}

export interface Phone {
  /** Human-readable, e.g. "(435) 673-8400". */
  display: string;
  /** tel: href, E.164, e.g. "tel:+14356738400". */
  href: string;
}

export interface Firm {
  name: string;
  shortName: string;
  address: Address;
  phone: Phone;
  /** Vanity number — secondary click-to-call only, not a slogan. */
  vanity: Phone;
  email: string; // TODO: confirm intake inbox
  facebook: string;
  serviceArea: string;
  /** TODO: confirm with firm (Yelp lists "Established 1985"; predecessor 2003). */
  foundedYear: number;
  foundedNote: string;
  /** geo for LocalBusiness/LegalService schema. TODO: confirm exact coords. */
  geo: { lat: number; lng: number };
  /** TODO: confirm real hours. */
  hours: { day: string; opens: string; closes: string }[];
}

export const firm: Firm = {
  name: "Witt Law Offices",
  shortName: "Witt Law",
  address: {
    line1: "491 N. Bluff Street, Suite 301",
    city: "St. George",
    state: "UT",
    zip: "84770",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=491+N+Bluff+Street+Suite+301+St+George+UT+84770",
  },
  phone: { display: "(435) 673-8400", href: "tel:+14356738400" },
  vanity: { display: "1-800-GET-WITT", href: "tel:+18004389488" }, // 1-800-438-9488
  email: "info@lawyerstgeorge.com", // TODO: confirm intake destination
  facebook: "https://www.facebook.com/WittLawOffice",
  serviceArea: "St. George and Southern Utah",
  foundedYear: 2003,
  foundedNote:
    "Serving Southern Utah from St. George since 2013; firm predecessor founded 2003.",
  geo: { lat: 37.118, lng: -113.583 }, // TODO: confirm precise office coordinates
  hours: [
    // TODO: replace with the firm's real hours
    { day: "Monday", opens: "09:00", closes: "17:00" },
    { day: "Tuesday", opens: "09:00", closes: "17:00" },
    { day: "Wednesday", opens: "09:00", closes: "17:00" },
    { day: "Thursday", opens: "09:00", closes: "17:00" },
    { day: "Friday", opens: "09:00", closes: "17:00" },
  ],
};

/** Reusable disclaimers (footer + legal pages). */
export const disclaimers = {
  footer:
    "The information on this website is for general informational purposes only and is not legal advice. Contacting Witt Law does not create an attorney-client relationship.",
  results:
    "Past results do not guarantee future outcomes. Each case depends on its specific facts and the applicable law.",
  reviews:
    "Reviews reflect individual experiences; results vary by case.",
  advertising: "Attorney Advertising.",
};
