/* ────────────────────────────────────────────────────────────────────────────
 * components/ui/FeatureCard.tsx
 *
 * A single value-proposition card (e.g. RFQ, Trade Assurance).
 * Receives typed props from the parent grid and renders a consistent
 * icon + title + description layout with hover effects.
 * ──────────────────────────────────────────────────────────────────────────── */

import type { FeatureItem } from "@/lib/types";

interface FeatureCardProps {
  item: FeatureItem;
}

export default function FeatureCard({ item }: FeatureCardProps) {
  return (
    <article className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all hover:border-primary hover:shadow-md sm:gap-4 sm:rounded-2xl sm:p-5">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 sm:rounded-xl ${item.iconBg} ${item.iconColor} transition-transform group-hover:scale-110`}
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl" aria-hidden="true">
          {item.icon}
        </span>
      </div>
      <div>
        <h4 className="text-xs font-bold text-slate-800 sm:text-sm">{item.title}</h4>
        <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500 sm:mt-1 sm:text-xs">
          {item.description}
        </p>
      </div>
    </article>
  );
}
