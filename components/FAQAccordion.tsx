/**
 * components/FAQAccordion.tsx
 * Accessible FAQ list built on native <details>/<summary>. Critically, answers
 * live in the initial server-rendered DOM even while visually collapsed — so
 * crawlers (and JS-disabled users) get the full text. This was the old site's
 * fatal SEO flaw (content hidden behind click-only tabs); do not regress it.
 *
 * Pair with faqPageSchema(faqs) from lib/jsonld for FAQPage structured data.
 * No client JS — <details> is interactive natively.
 */

import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/content/faqs";

export function FAQAccordion({
  faqs,
  defaultOpenFirst = false,
}: {
  faqs: FAQ[];
  defaultOpenFirst?: boolean;
}) {
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-bg">
      {faqs.map((faq, i) => (
        <details
          key={faq.question}
          open={defaultOpenFirst && i === 0}
          className="group px-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="pb-5 text-muted leading-relaxed">{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}
