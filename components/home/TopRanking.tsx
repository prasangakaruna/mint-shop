/* ────────────────────────────────────────────────────────────────────────────
 * components/home/TopRanking.tsx
 *
 * "Top Ranking" product section with tab filters (All / New Arrivals /
 * Best Sellers) and a 6-column responsive product grid.
 * Each product card uses the reusable <ProductCard variant="compact">.
 * ──────────────────────────────────────────────────────────────────────────── */

import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { TRENDING_PRODUCTS, RANKING_TABS } from "@/lib/constants";

export default function TopRanking() {
  return (
    <section className="mx-auto max-w-[1400px] px-3 pt-8 pb-8 sm:px-4 sm:pt-10 sm:pb-10 lg:px-8">
      <SectionHeader title="Top Ranking" href="/top-ranking">
        {/* Tab buttons */}
        <div className="flex gap-1" role="tablist" aria-label="Ranking filters">
          {RANKING_TABS.map((tab, i) => (
            <button
              key={tab}
              role="tab"
              aria-selected={i === 0}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-colors sm:px-4 sm:py-1.5 sm:text-xs ${
                i === 0
                  ? "bg-primary/10 text-primary"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </SectionHeader>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
        {TRENDING_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            variant="compact"
            product={product}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          />
        ))}
      </div>
    </section>
  );
}
