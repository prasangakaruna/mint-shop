/* ────────────────────────────────────────────────────────────────────────────
 * app/shop/page.tsx  —  Product Listing Page
 *
 * ┌────────────────────────────────────────────────┐
 * │  Breadcrumbs                                   │
 * │  Title + Sort                                  │
 * │  ┌──────────┬──────────────────────────────┐   │
 * │  │ Filters  │  Product Grid (responsive)   │   │
 * │  │ sidebar  │  Pagination                  │   │
 * │  └──────────┴──────────────────────────────┘   │
 * └────────────────────────────────────────────────┘
 * ──────────────────────────────────────────────────────────────────────────── */

"use client";

import { useState, useMemo, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  SIDEBAR_CATEGORIES,
  PRICE_RANGES,
  SORT_OPTIONS,
} from "@/lib/constants";
import { getProductsByCategory } from "@/lib/products";
import type { Product } from "@/lib/types";

const ITEMS_PER_PAGE = 9;

/* ── Star helper ────────────────────────────────────────────────────────── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`material-symbols-outlined text-xs ${
            n <= Math.round(rating)
              ? "filled text-amber-400"
              : "text-slate-300"
          }`}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  /* ── State ────────────────────────────────────────────────────────────── */
  const categoryFromUrl = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("relevance");
  const [page, setPage] = useState(1);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  /* Sync state when URL query param changes (e.g. clicking a category link) */
  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  /* Load products when category changes */
  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const loadedProducts = await getProductsByCategory(selectedCategory);
        setProducts(loadedProducts);
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [selectedCategory]);

  /* Update the URL when category filter changes internally */
  const handleCategoryChange = useCallback(
    (slug: string | null) => {
      setSelectedCategory(slug);
      const params = new URLSearchParams(searchParams.toString());
      if (slug) {
        params.set("category", slug);
      } else {
        params.delete("category");
      }
      router.replace(`/shop${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
    },
    [searchParams, router],
  );

  // Lock body scroll while filter drawer is open
  useEffect(() => {
    document.body.style.overflow = filterDrawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [filterDrawerOpen]);

  const closeFilterDrawer = useCallback(() => setFilterDrawerOpen(false), []);

  /* ── Filtering & sorting ──────────────────────────────────────────────── */
  const filtered = useMemo(() => {
    let items: Product[] = [...products];

    if (selectedPriceRange !== null) {
      const range = PRICE_RANGES[selectedPriceRange];
      items = items.filter((p) => p.price >= range.min && p.price < range.max);
    }

    switch (sortBy) {
      case "price-asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        items.sort((a, b) => b.rating - a.rating);
        break;
      case "orders":
        items.sort(
          (a, b) =>
            parseInt(b.orders.replace(/\D/g, "")) -
            parseInt(a.orders.replace(/\D/g, ""))
        );
        break;
    }

    return items;
  }, [products, selectedPriceRange, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  /* Reset to page 1 when filters change */
  useEffect(() => setPage(1), [selectedCategory, selectedPriceRange, sortBy]);

  /* ── Breadcrumbs (dynamic based on active category) ──────────────── */
  const activeCat = SIDEBAR_CATEGORIES.find(
    (c) => new URL(c.href, "http://x").searchParams.get("category") === selectedCategory,
  );
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    ...(activeCat ? [{ label: activeCat.name }] : []),
  ];

  /* ── Filter sidebar content (shared between desktop & drawer) ─────── */
  const filterContent = (
    <>
      {/* Categories */}
      <div className="mb-6">
        <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-800">
          Category
        </h4>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => handleCategoryChange(null)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                !selectedCategory
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              All Categories
            </button>
          </li>
          {SIDEBAR_CATEGORIES.map((cat) => {
            const slug = new URL(cat.href, "http://x").searchParams.get("category") ?? "";
            return (
              <li key={cat.id}>
                <button
                  onClick={() => handleCategoryChange(slug)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    selectedCategory === slug
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="material-symbols-outlined text-base text-slate-400" aria-hidden="true">
                    {cat.icon}
                  </span>
                  {cat.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Price range */}
      <div className="mb-6">
        <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-800">
          Price Range
        </h4>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setSelectedPriceRange(null)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                selectedPriceRange === null
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              Any Price
            </button>
          </li>
          {PRICE_RANGES.map((range, i) => (
            <li key={range.label}>
              <button
                onClick={() => setSelectedPriceRange(i)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  selectedPriceRange === i
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating filter placeholder */}
      <div>
        <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-800">
          Rating
        </h4>
        {[4, 3, 2].map((star) => (
          <button
            key={star}
            className="mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50"
          >
            <Stars rating={star} />
            <span>&amp; up</span>
          </button>
        ))}
      </div>
    </>
  );

  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* ── Title + Sort ─────────────────────────────────────────────── */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              Shop All Products
            </h1>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-primary hover:text-primary lg:hidden"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                tune
              </span>
              Filters
            </button>

            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Content ──────────────────────────────────────────────────── */}
        <div className="flex gap-6">
          {/* Desktop filter sidebar */}
          <aside className="hidden w-[240px] shrink-0 lg:block">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              {filterContent}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {loading ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 py-20">
                <span className="material-symbols-outlined mb-3 text-5xl text-slate-300 animate-spin" aria-hidden="true">
                  refresh
                </span>
                <p className="text-sm font-semibold text-slate-500">
                  Loading products...
                </p>
              </div>
            ) : paginated.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 py-20">
                <span className="material-symbols-outlined mb-3 text-5xl text-slate-300" aria-hidden="true">
                  search_off
                </span>
                <p className="text-sm font-semibold text-slate-500">
                  No products match your filters.
                </p>
                <button
                  onClick={() => {
                    handleCategoryChange(null);
                    setSelectedPriceRange(null);
                  }}
                  className="mt-3 text-sm font-semibold text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
                  {paginated.map((product) => (
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
                            <Stars rating={product.rating} />
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-1.5">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                    >
                      <span className="material-symbols-outlined text-lg" aria-hidden="true">
                        chevron_left
                      </span>
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (p) => (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                            p === page
                              ? "bg-primary text-slate-900"
                              : "border border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
                          }`}
                        >
                          {p}
                        </button>
                      )
                    )}
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                    >
                      <span className="material-symbols-outlined text-lg" aria-hidden="true">
                        chevron_right
                      </span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          Mobile Filter Drawer
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 lg:hidden ${
          filterDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeFilterDrawer}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 left-0 z-[70] flex h-full w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          filterDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Product filters"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h3 className="text-sm font-bold text-slate-800">Filters</h3>
          <button
            onClick={closeFilterDrawer}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              close
            </span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{filterContent}</div>
        <div className="border-t border-slate-100 p-4">
          <button
            onClick={closeFilterDrawer}
            className="w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-slate-900 transition-all hover:brightness-110"
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </PageShell>
  );
}

/* Wrap in Suspense for useSearchParams SSR compatibility */
export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
