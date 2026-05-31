/**
 * content/media.ts
 * Maps content to the firm's real photos (public/images/*). Keeps image choices
 * in one place so pages/components stay declarative. Swap paths here to re-skin.
 */

/** Practice-area card/hero imagery, keyed by pillar slug. */
export const practiceImages: Record<string, string> = {
  "personal-injury": "/images/practice/personal-injury.jpg",
  "criminal-defense": "/images/practice/criminal-defense.jpg",
  "divorce-family-law": "/images/practice/divorce-family-law.jpg",
  "estate-planning": "/images/practice/estate-planning.jpg",
  "real-estate-law": "/images/practice/real-estate-law.jpg",
  mediation: "/images/practice/mediation.jpg",
};

/** Home + About firm photography. */
export const firmImages = {
  heroTeam: "/images/firm/team.jpg",
  introTeam: "/images/firm/consult.jpg",
  aboutOffice: "/images/firm/office-building.jpg",
};

/** Areas-We-Serve city-card imagery, keyed by city slug. */
export const cityImages: Record<string, string> = {
  "st-george": "/images/areas/st-george.jpg",
  washington: "/images/areas/washington.jpg",
  hurricane: "/images/areas/hurricane.jpg",
  "ivins-santa-clara": "/images/areas/ivins-santa-clara.jpg",
  "cedar-city": "/images/areas/cedar-city.jpg",
};
