import { stack } from "../data/portfolio.js";

export default function Marquee() {
  // Repeat the list so the loop never shows a gap.
  const items = Array.from({ length: 4 }).flatMap(() => stack);
  return (
    <div className="marq" aria-hidden="true">
      <div>
        {items.map((s, i) => (
          <span key={i}>{s}<i>/</i></span>
        ))}
      </div>
    </div>
  );
}
