/* ────────────────────────────────────────────────────────────────────────────
 * app/gifts/page.tsx  —  Gift Items Page
 *
 * Dedicated page showcasing gift products and gift sets
 * ──────────────────────────────────────────────────────────────────────────── */

"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SHOP_PRODUCTS } from "@/lib/constants";
import type { Product } from "@/lib/types";

export default function GiftsPage() {
  /* ── Filter to gift products only ─────────────────────────────────────── */
  const giftProducts = useMemo(() => {
    return SHOP_PRODUCTS.filter((p) => p.categorySlug === "gifts");
  }, []);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Gifts" },
  ];

  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Perfect Gifts for Every Occasion
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Discover thoughtfully curated gift sets, premium gift cards, and special occasion
            presents that will delight your loved ones.
          </p>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────────────── */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-6 sm:p-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                🎁 Special Gift Collection
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                From gourmet gift baskets to luxury gift cards, find the perfect present for
                birthdays, holidays, anniversaries, or just because.
              </p>
              <Link
                href="/shop?category=gifts"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-slate-900 transition-all hover:brightness-110"
              >
                Shop All Gifts
              </Link>
            </div>
            <div className="flex shrink-0">
              <span className="material-symbols-outlined text-8xl text-rose-400 sm:text-9xl" aria-hidden="true">
                card_giftcard
              </span>
            </div>
          </div>
        </div>

        {/* ── Product Grid ─────────────────────────────────────────────────── */}
        {giftProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 py-20">
            <span className="material-symbols-outlined mb-3 text-5xl text-slate-300" aria-hidden="true">
              card_giftcard
            </span>
            <p className="text-sm font-semibold text-slate-500">No gift products available at the moment.</p>
            <Link
              href="/shop"
              className="mt-3 text-sm font-semibold text-primary hover:underline"
            >
              Browse all products
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Featured Gift Products
              </h2>
              <span className="text-xs text-slate-500 sm:text-sm">
                {giftProducts.length} product{giftProducts.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
              {giftProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-primary hover:shadow-md sm:rounded-2xl"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-slate-50">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.tags[0] && (
                      <span className="absolute top-2 left-2 rounded bg-red-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                        {product.tags[0]}
                      </span>
                    )}
                    <button
                      aria-label={`Add ${product.name} to wishlist`}
                      className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-400 opacity-0 shadow transition-all hover:text-red-500 group-hover:opacity-100"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="material-symbols-outlined text-lg" aria-hidden="true">
                        favorite
                      </span>
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-3 sm:p-4">
                    <h3 className="mb-1.5 truncate text-xs font-bold text-slate-800 sm:text-sm">
                      {product.name}
                    </h3>
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="text-sm font-extrabold text-accent-orange sm:text-base">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-slate-400 line-through sm:text-xs">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="rounded bg-red-50 px-1.5 py-0.5 text-[9px] font-bold text-red-500">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <span
                            key={n}
                            className={`material-symbols-outlined text-xs ${
                              n <= Math.round(product.rating)
                                ? "filled text-amber-400"
                                : "text-slate-300"
                            }`}
                            aria-hidden="true"
                          >
                            star
                          </span>
                        ))}
                        <span className="text-[10px] text-slate-400 sm:text-xs">
                          ({product.reviewCount})
                        </span>
                      </div>
                      <span className="hidden text-[10px] text-slate-400 sm:inline">
                        {product.orders}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ── Call to Action ───────────────────────────────────────────── */}
            <div className="mt-12 text-center">
              <p className="mb-4 text-sm text-slate-600">
                Looking for more gift options?
              </p>
              <Link
                href="/shop?category=gifts"
                className="inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-slate-900"
              >
                View All Gift Products
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </>
        )}

        {/* ── Gift Ideas Section ─────────────────────────────────────────── */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-slate-900 sm:text-2xl">
            Gift Ideas by Occasion
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "cake", label: "Birthdays", href: "/shop?category=gifts" },
              { icon: "celebration", label: "Anniversaries", href: "/shop?category=gifts" },
              { icon: "festival", label: "Holidays", href: "/shop?category=gifts" },
              { icon: "favorite", label: "Thank You", href: "/shop?category=gifts" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-center transition-all hover:border-primary hover:shadow-md"
              >
                <span className="material-symbols-outlined text-4xl text-primary" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
