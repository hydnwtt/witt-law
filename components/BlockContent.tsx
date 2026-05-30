/**
 * components/BlockContent.tsx
 * Renders structured copy blocks (paragraphs, bullet lists, subheadings) so the
 * long-form copy lives in typed content, not JSX. Inline markup: **bold** and
 * [text](href). Render inside a `.prose` container for styling.
 */

import Link from "next/link";
import type { ReactNode } from "react";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string };

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[2] !== undefined) {
      nodes.push(<strong key={key++}>{m[2]}</strong>);
    } else if (m[4] !== undefined) {
      const href = m[5];
      nodes.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href}>{m[4]}</Link>
        ) : (
          <a key={key++} href={href}>{m[4]}</a>
        )
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function BlockContent({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{renderInline(block.text)}</p>;
        if (block.type === "h3") return <h3 key={i}>{renderInline(block.text)}</h3>;
        return (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>{renderInline(item)}</li>
            ))}
          </ul>
        );
      })}
    </>
  );
}
