/**
 * components/CTA.tsx
 * The repeating "consult band" placed before the footer on every page.
 * Copy is the reusable block from build-spec §5.2; phone from firm.ts.
 */

import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { firm } from "@/content/firm";

export function CTA({
  heading = "Talk to an attorney who'll actually listen.",
  body = "Most consultations are free, and we'll give you a straight answer about where you stand.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl text-white sm:text-3xl">{heading}</h2>
            <p className="mt-3 text-white/80 leading-relaxed">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact/" variant="on-dark">
              Schedule a Consultation
            </Button>
            <Button href={firm.phone.href} variant="outline-on-dark">
              <Phone aria-hidden="true" className="size-4" />
              Call {firm.phone.display}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
