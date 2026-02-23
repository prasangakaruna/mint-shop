/* ────────────────────────────────────────────────────────────────────────────
 * app/product/[slug]/page.tsx  —  Product Detail Page
 *
 * ┌──────────────────────────────────────────────────┐
 * │  Breadcrumbs                                     │
 * │  ┌──────────────┬───────────────────────────┐    │
 * │  │ Image Gallery │  Product Info Panel       │    │
 * │  └──────────────┴───────────────────────────┘    │
 * │  Tabs: Description │ Specifications │ Reviews    │
 * │  Related Products                                │
 * └──────────────────────────────────────────────────┘
 * ──────────────────────────────────────────────────────────────────────────── */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SHOP_PRODUCTS, MOCK_REVIEWS } from "@/lib/constants";

/* ── Star helper ────────────────────────────────────────────────────────── */
function Stars({ rating, size = "text-sm" }: { rating: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`material-symbols-outlined ${size} ${
            n <= Math.round(rating) ? "filled text-amber-400" : "text-slate-300"
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

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const product = SHOP_PRODUCTS.find((p) => p.slug === slug) ?? SHOP_PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");

  const relatedProducts = useMemo(
    () => SHOP_PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug).slice(0, 4),
    [product]
  );

  // Fall back to other products if same category is sparse
  const related = relatedProducts.length >= 2
    ? relatedProducts
    : SHOP_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: product.category, href: `/shop?category=${product.categorySlug}` },
    { label: product.name },
  ];

  const tabs = [
    { key: "description" as const, label: "Description" },
    { key: "specs" as const, label: "Specifications" },
    { key: "reviews" as const, label: `Reviews (${product.reviewCount})` },
  ];

  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* ── Product Top Section ──────────────────────────────────────── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
          {/* Image Gallery */}
          <div className="lg:w-1/2">
            {/* Main image */}
            <div className="relative mb-3 aspect-square overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {product.tags[0] && (
                <span className="absolute top-3 left-3 rounded-lg bg-red-500 px-3 py-1 text-xs font-bold uppercase text-white">
                  {product.tags[0]}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 sm:gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative h-16 w-16 overflow-hidden rounded-lg border-2 transition-colors sm:h-20 sm:w-20 sm:rounded-xl ${
                    i === selectedImage
                      ? "border-primary shadow-sm shadow-primary/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Panel */}
          <div className="lg:w-1/2">
            {/* Category */}
            <Link
              href={`/shop?category=${product.categorySlug}`}
              className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
            >
              {product.category}
            </Link>

            <h1 className="mb-2 text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl">
              {product.name}
            </h1>

            {/* Rating & orders */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
              <span className="text-xs text-slate-400">({product.reviewCount} reviews)</span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500">{product.orders}</span>
            </div>

            {/* Price */}
            <div className="mb-5 flex items-baseline gap-3">
              <span className="text-2xl font-extrabold text-accent-orange sm:text-3xl">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-base text-slate-400 line-through sm:text-lg">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="rounded-lg bg-red-50 px-2 py-1 text-xs font-bold text-red-500">
                SAVE {discount}%
              </span>
            </div>

            {/* Short description */}
            <p className="mb-5 text-sm leading-relaxed text-slate-500">
              {product.description}
            </p>

            {/* Highlights */}
            <div className="mb-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-700">
                Highlights
              </h4>
              <ul className="space-y-1.5">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="material-symbols-outlined mt-0.5 text-sm text-primary" aria-hidden="true">
                      check_circle
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity + Actions */}
            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-700">Qty:</span>
              <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:bg-slate-50"
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">remove</span>
                </button>
                <span className="flex h-10 w-12 items-center justify-center border-x border-slate-200 text-sm font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:bg-slate-50"
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">add</span>
                </button>
              </div>
              {product.inStock ? (
                <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">check_circle</span>
                  In Stock
                </span>
              ) : (
                <span className="text-xs font-semibold text-red-500">Out of Stock</span>
              )}
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <Link
                href="/checkout"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">shopping_cart</span>
                Buy Now
              </Link>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary py-3.5 text-sm font-bold text-primary transition-all hover:bg-primary/5">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">add_shopping_cart</span>
                Add to Cart
              </button>
              <button
                aria-label="Add to wishlist"
                className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition-colors hover:border-red-200 hover:text-red-500"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">favorite</span>
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap items-center gap-4 rounded-xl border border-slate-100 bg-white p-4">
              {[
                { icon: "local_shipping", label: "Free Shipping" },
                { icon: "verified_user", label: "Trade Assurance" },
                { icon: "replay", label: "Easy Returns" },
                { icon: "shield", label: "Secure Checkout" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
                    {badge.icon}
                  </span>
                  <span className="font-semibold">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs Section ─────────────────────────────────────────────── */}
        <div className="mt-10 sm:mt-14">
          {/* Tab buttons */}
          <div className="no-scrollbar mb-6 flex gap-0.5 overflow-x-auto border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition-colors sm:px-6 ${
                  activeTab === tab.key
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            {activeTab === "description" && (
              <div>
                <h3 className="mb-3 text-lg font-bold text-slate-900">Product Description</h3>
                <p className="mb-4 leading-relaxed text-slate-600">{product.description}</p>
                <h4 className="mb-2 text-sm font-bold text-slate-800">Key Features</h4>
                <ul className="space-y-2">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-primary" aria-hidden="true">
                        check_circle
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "specs" && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-slate-900">Specifications</h3>
                <div className="overflow-hidden rounded-xl border border-slate-100">
                  {Object.entries(product.specifications).map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex items-center px-4 py-3 text-sm ${
                        i % 2 === 0 ? "bg-slate-50" : "bg-white"
                      }`}
                    >
                      <span className="w-1/3 font-semibold text-slate-700 sm:w-1/4">{key}</span>
                      <span className="flex-1 text-slate-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Customer Reviews</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <Stars rating={product.rating} size="text-base" />
                      <span className="text-sm font-bold text-slate-700">{product.rating} out of 5</span>
                      <span className="text-xs text-slate-400">({product.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-primary hover:text-primary">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-5">
                  {MOCK_REVIEWS.map((review) => (
                    <article
                      key={review.id}
                      className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-5"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">{review.author}</p>
                            <p className="text-[10px] text-slate-400">{review.date}</p>
                          </div>
                        </div>
                        <Stars rating={review.rating} size="text-xs" />
                      </div>
                      <h4 className="mb-1 text-sm font-semibold text-slate-800">{review.title}</h4>
                      <p className="mb-3 text-sm leading-relaxed text-slate-500">{review.content}</p>
                      <button className="flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-primary">
                        <span className="material-symbols-outlined text-sm" aria-hidden="true">
                          thumb_up
                        </span>
                        Helpful ({review.helpful})
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Related Products ─────────────────────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-10 sm:mt-14">
            <h2 className="mb-5 text-lg font-extrabold text-slate-900 sm:text-xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-primary hover:shadow-md sm:rounded-2xl"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-50">
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h4 className="mb-1 truncate text-xs font-bold text-slate-800 sm:text-sm">
                      {p.name}
                    </h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-extrabold text-accent-orange">
                        ${p.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-slate-400 line-through">
                        ${p.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </PageShell>
  );
}
