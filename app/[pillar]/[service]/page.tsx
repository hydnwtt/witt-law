/**
 * app/[pillar]/[service]/page.tsx — service child pages (~48), e.g.
 * /estate-planning/probate/. Statically generated for every valid pillar/service
 * pair; everything else 404s (dynamicParams=false). Renders ServicePage.
 */

import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { practiceAreas, getService } from "@/content/practiceAreas";
import { getServiceContent } from "@/content/serviceContent";

export function generateStaticParams() {
  return practiceAreas.flatMap((p) =>
    p.services.map((s) => ({ pillar: p.slug, service: s.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string; service: string }>;
}) {
  const { pillar, service } = await params;
  const svc = getService(pillar, service);
  const content = getServiceContent(service);
  if (!svc || !content) return {};
  return buildMetadata({
    title: content.seoTitle,
    description: content.seoDescription,
    path: `/${pillar}/${service}/`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ pillar: string; service: string }>;
}) {
  const { pillar, service } = await params;
  return <ServicePage pillarSlug={pillar} serviceSlug={service} />;
}
