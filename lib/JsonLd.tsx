/**
 * lib/JsonLd.tsx  (F5)
 * Renders one or more JSON-LD objects as a <script type="application/ld+json">.
 * Server component — the schema is in the initial HTML for crawlers.
 *
 *   import { JsonLd } from "@/lib/JsonLd";
 *   import { legalServiceSchema, organizationSchema } from "@/lib/jsonld";
 *   <JsonLd data={[legalServiceSchema(), organizationSchema()]} />
 */

type Json = Record<string, unknown>;

export function JsonLd({ data }: { data: Json | Json[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // schema is built from our own typed content, not user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
