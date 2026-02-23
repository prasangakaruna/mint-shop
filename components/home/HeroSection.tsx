/* ────────────────────────────────────────────────────────────────────────────
 * components/home/HeroSection.tsx
 *
 * Three-column hero section (Alibaba-style):
 *  • Left  — Category sidebar (hidden on < lg)
 *  • Center — Main banner + two promotional mini-banners
 *  • Right  — Quick access panel with user card + quick links (hidden < xl)
 *
 * All data is pulled from centralised constants.
 * ──────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import { SIDEBAR_CATEGORIES, QUICK_LINKS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-3 pt-3 pb-4 sm:px-4 sm:pt-5 sm:pb-6 lg:px-8">
      {/* ── Mobile / Tablet: Horizontal Category Strip (< lg) ──────── */}
      <div className="mb-3 sm:mb-4 lg:hidden">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {SIDEBAR_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
            >
              <span className="material-symbols-outlined text-sm text-slate-400 sm:text-base" aria-hidden="true">
                {cat.icon}
              </span>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-3 sm:gap-5">
        {/* ── Left: Category Sidebar (desktop only, lg+) ─────────────── */}
        <aside className="hidden w-[230px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">
          <div className="border-b border-slate-100 px-5 py-3">
            <h3 className="text-sm font-bold text-slate-800">All Categories</h3>
          </div>
          <nav aria-label="Product categories">
            <ul className="py-1">
              {SIDEBAR_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={cat.href}
                    className="category-item flex items-center gap-3 px-5 py-2.5 text-sm text-slate-600 transition-all hover:pl-6"
                  >
                    <span
                      className="material-symbols-outlined text-lg text-slate-400"
                      aria-hidden="true"
                    >
                      {cat.icon}
                    </span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* ── Center: Hero Banners ─────────────────────────────────────── */}
        <div className="flex flex-1 flex-col gap-5">
          {/* Main banner */}
          <div
            className="hero-gradient relative min-h-[220px] overflow-hidden rounded-xl p-5 text-white shadow-lg sm:min-h-[280px] sm:rounded-2xl sm:p-8 lg:min-h-[340px] lg:p-12"
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 h-72 w-72 rounded-full bg-primary/15 blur-[80px]" />
            <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-primary/10 blur-[60px]" />

            <div className="relative z-10 max-w-lg">
              <span className="mb-2 inline-block rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary sm:mb-3 sm:px-3 sm:py-1 sm:text-xs">
                New Season 2026
              </span>
              <h1 className="mb-2 text-xl leading-tight font-extrabold sm:mb-3 sm:text-3xl lg:text-4xl">
                Discover Quality Products
                <br />
                <span className="text-primary">At the Best Prices</span>
              </h1>
              <p className="mb-4 max-w-sm text-xs leading-relaxed text-slate-300 sm:mb-6 sm:text-sm">
                Source from thousands of verified sellers worldwide. Trade
                assurance on every order.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link
                  href="/shop"
                  className="rounded-lg px-4 py-2.5 text-xs font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:translate-y-[-1px] bg-primary sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm"
                >
                  Start Sourcing
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur transition-all hover:bg-white/20 sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Two mini-banners */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
            {/* Mint Club */}
            <div className="relative overflow-hidden rounded-xl p-4 text-white shadow-md bg-gradient-to-br from-emerald-500 to-teal-700 sm:rounded-2xl sm:p-6">
              <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-white/10" />
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-emerald-200">
                Mint Club
              </span>
              <h3 className="mb-1 text-lg font-extrabold">
                Join &amp; Get 10% Back
              </h3>
              <p className="mb-3 text-xs text-emerald-100">
                Exclusive rewards, early access &amp; free shipping.
              </p>
              <Link
                href="/mint-club"
                className="inline-flex items-center gap-1 text-xs font-bold text-white hover:underline"
              >
                Join Free
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Flash Deals */}
            <div className="relative overflow-hidden rounded-xl p-4 text-white shadow-md bg-gradient-to-br from-orange-500 to-red-600 sm:rounded-2xl sm:p-6">
              <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-white/10" />
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-orange-200">
                Limited Time
              </span>
              <h3 className="mb-1 text-lg font-extrabold">
                Flash Deals — Up to 70% Off
              </h3>
              <p className="mb-3 text-xs text-orange-100">
                Ends in 08:42:15. Grab before they&apos;re gone.
              </p>
              <Link
                href="/deals"
                className="inline-flex items-center gap-1 text-xs font-bold text-white hover:underline"
              >
                Shop Deals
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Right: Quick Access Panel ────────────────────────────────── */}
        <aside className="hidden w-[280px] shrink-0 flex-col gap-5 xl:flex">
          {/* User card */}
          <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
                person
              </span>
            </div>
            <p className="mb-1 text-sm font-bold text-slate-800">Welcome Back!</p>
            <p className="mb-4 text-xs text-slate-400">
              Sign in for personalized experience
            </p>
            <Link
              href="/auth/signin"
              className="mb-2 w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-bold text-slate-900 transition-all hover:brightness-110"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50"
            >
              Create Account
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
              Quick Links
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {QUICK_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-1.5 rounded-xl p-2 text-slate-500 transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-semibold">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
