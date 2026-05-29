/**
 * content/valueProps.ts
 * The four "Why Witt Law" value props. Shared across Home, About, and Mediation
 * (build-spec §6.1 / §6.8). Copy is final/ADAPTED.
 */

export interface ValueProp {
  title: string;
  body: string;
}

export const valueProps: ValueProp[] = [
  { title: "Honest & Fair", body: "We're straight with you, the other side, and the court." },
  { title: "We Communicate", body: "We keep you informed at every step." },
  { title: "We're Timely", body: "We track deadlines so nothing slips." },
  { title: "We Listen", body: "We take the time to understand your situation before we act." },
];
