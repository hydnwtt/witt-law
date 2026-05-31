/**
 * components/ValueProps.tsx
 * The four "Why Witt Law" value props as the design's .vcard cells inside a
 * hairline .grid-lines grid (intended to sit on an olive section). Lucide icons.
 */

import { Scale, MessageSquare, Clock, Ear, type LucideIcon } from "lucide-react";
import { valueProps } from "@/content/valueProps";

const ICONS: LucideIcon[] = [Scale, MessageSquare, Clock, Ear];

export function ValueProps() {
  return (
    <div className="grid-lines cols-4">
      {valueProps.map((vp, i) => {
        const Icon = ICONS[i] ?? Scale;
        return (
          <div className="vcard" key={vp.title}>
            <span className="vcard__icon">
              <Icon />
            </span>
            <h3>{vp.title}</h3>
            <p>{vp.body}</p>
          </div>
        );
      })}
    </div>
  );
}
