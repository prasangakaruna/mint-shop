/* ────────────────────────────────────────────────────────────────────────────
 * components/home/FeatureCards.tsx
 *
 * Horizontal row of four value-proposition cards (RFQ, Top Ranking,
 * Customization, Trade Assurance).  Each card delegates rendering
 * to the reusable <FeatureCard> UI component.
 * ──────────────────────────────────────────────────────────────────────────── */

import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURE_ITEMS } from "@/lib/constants";

export default function FeatureCards() {
  return (
    <section
      aria-label="Key features"
      className="mx-auto max-w-[1400px] px-3 pb-6 sm:px-4 sm:pb-8 lg:px-8"
    >
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {FEATURE_ITEMS.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
