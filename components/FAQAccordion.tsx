/**
 * components/FAQAccordion.tsx
 * Native <details> FAQ (design's .faq): gold "+" that rotates to "×". Answers are
 * in the initial DOM even when collapsed — crawlable, JS-off readable. Pair with
 * faqPageSchema for FAQPage structured data.
 */

import { Plus } from "lucide-react";
import type { FAQ } from "@/content/faqs";

export function FAQAccordion({
  faqs,
  defaultOpenFirst = false,
}: {
  faqs: FAQ[];
  defaultOpenFirst?: boolean;
}) {
  return (
    <div className="faq">
      {faqs.map((faq, i) => (
        <details key={faq.question} className="faq__item" open={defaultOpenFirst && i === 0}>
          <summary className="faq__q">
            {faq.question}
            <span className="ico" aria-hidden="true">
              <Plus />
            </span>
          </summary>
          <div className="faq__a">{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}
