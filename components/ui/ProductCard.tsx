/* ────────────────────────────────────────────────────────────────────────────
 * components/ui/ProductCard.tsx
 *
 * Reusable product card that supports two display variants:
 *  • "compact"  — used in Top Ranking (price + tag badge, no rating)
 *  • "detailed" — used in Just for You  (original price, rating, wishlist)
 *
 * Both variants share the same responsive image container, hover
 * animations, and card shell to ensure consistent look & feel.
 * ──────────────────────────────────────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";
import type { TrendingProduct, RecommendedProduct, ProductTag } from "@/lib/types";

/* ── Tag → colour mapping ───────────────────────────────────────────────── */

const TAG_STYLES: Record<ProductTag, string> = {
  Hot: "bg-red-500 text-white",
  New: "bg-primary text-slate-900",
  "Top Ranked": "bg-amber-500 text-white",
  "Best Seller": "bg-amber-500 text-white",
  Gift: "bg-rose-500 text-white",
  Organic: "bg-green-500 text-white",
  Fresh: "bg-blue-500 text-white",
};

/* ── Compact variant (Top Ranking) ──────────────────────────────────────── */

interface CompactProps {
  variant: "compact";
  product: TrendingProduct;
  /** Responsive sizes hint forwarded to next/image. */
  sizes?: string;
}

/* ── Detailed variant (Just for You) ────────────────────────────────────── */

interface DetailedProps {
  variant: "detailed";
  product: RecommendedProduct;
  sizes?: string;
}

type ProductCardProps = CompactProps | DetailedProps;

export default function ProductCard(props: ProductCardProps) {
  const { variant, product, sizes } = props;

  return (
    <Link
      href="#"
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-primary hover:shadow-md sm:rounded-2xl"
    >
      {/* ── Image ──────────────────────────────────────────────────────── */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes ?? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Tag badge — compact only */}
        {variant === "compact" && (
          <span
            className={`absolute top-2 left-2 rounded px-2 py-0.5 text-[10px] font-bold uppercase ${TAG_STYLES[(product as TrendingProduct).tag]}`}
          >
            {(product as TrendingProduct).tag}
          </span>
        )}

        {/* Wishlist button — detailed only */}
        {variant === "detailed" && (
          <button
            aria-label={`Add ${product.name} to wishlist`}
            className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-400 opacity-0 shadow transition-all hover:text-red-500 group-hover:opacity-100"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">
              favorite
            </span>
          </button>
        )}
      </div>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      {variant === "compact" ? (
        <div className="p-2.5 sm:p-3">
          <h4 className="mb-0.5 truncate text-[11px] font-bold text-slate-800 sm:mb-1 sm:text-xs">
            {product.name}
          </h4>
          <p className="mb-0.5 text-xs font-extrabold text-accent-orange sm:mb-1 sm:text-sm">
            {product.price}
          </p>
          <p className="text-[9px] text-slate-400 sm:text-[10px]">{product.orders}</p>
        </div>
      ) : (
        <div className="p-2.5 sm:p-4">
          <h4 className="mb-1 truncate text-xs font-bold text-slate-800 sm:mb-2 sm:text-sm">
            {product.name}
          </h4>
          <div className="mb-1 flex items-baseline gap-1.5 sm:mb-1.5 sm:gap-2">
            <span className="text-sm font-extrabold text-accent-orange sm:text-base">
              {product.price}
            </span>
            <span className="text-[10px] text-slate-400 line-through sm:text-xs">
              {(product as RecommendedProduct).originalPrice}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5 sm:gap-1">
              <span
                className="material-symbols-outlined filled text-[10px] text-amber-400 sm:text-xs"
                aria-hidden="true"
              >
                star
              </span>
              <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">
                {(product as RecommendedProduct).rating}
              </span>
            </div>
            <span className="text-[9px] text-slate-400 sm:text-[10px]">{product.orders}</span>
          </div>
        </div>
      )}
    </Link>
  );
}
