/* ────────────────────────────────────────────────────────────────────────────
 * components/home/JustForYou.tsx
 *
 * "Just for You" personalised recommendation grid.
 * Uses <ProductCard variant="detailed"> for each item, which includes
 * original price, star rating, and a wishlist button.
 * ──────────────────────────────────────────────────────────────────────────── */

import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { RECOMMENDED_PRODUCTS } from "@/lib/constants";

export default function JustForYou() {
  return (
    <section className="mx-auto max-w-[1400px] px-3 py-8 sm:px-4 sm:py-10 lg:px-8">
      <SectionHeader
        title="Just for You"
        linkText="See More"
        href="/shop"
      />

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
        {RECOMMENDED_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            variant="detailed"
            product={product}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        ))}
      </div>
    </section>
  );
}
