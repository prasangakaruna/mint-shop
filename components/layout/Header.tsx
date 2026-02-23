"use client";

// components/layout/Header.tsx
// Fully mobile-responsive sticky header
// ──────────────────────────────────────
// Mobile  (<md):  ☰ Hamburger │ Logo │ 🔍 + 🛒
//                 Toggleable search bar (row 2)
//                 Scrollable sub-nav chips (row 3)
//                 Slide-over drawer (account, categories, links)
// Desktop (md+):  Logo │ Mega search │ Wishlist Cart Account Sign-In │ Sub-nav

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SUB_NAV_LINKS,
  SEARCH_CATEGORIES,
  SIDEBAR_CATEGORIES,
} from "@/lib/constants";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        {/* ── Row 1: Logo + Search (desktop) + Actions ────────────── */}
        <div className="mx-auto flex max-w-[1400px] items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3 md:gap-6 lg:px-8">
          {/* Hamburger — visible below md */}
          <button
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center justify-center rounded-lg p-1.5 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              menu
            </span>
          </button>

          {/* Logo — scales up at each breakpoint */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="Mint Shop Home">
            <Image
              src="/splash.png"
              alt="Mint Shop"
              width={180}
              height={90}
              className="h-7 w-auto sm:h-8 md:h-10"
              priority
            />
          </Link>

          {/* Desktop search bar — hidden below md */}
          <div className="relative hidden max-w-3xl flex-1 md:flex" role="search">
            <label htmlFor="global-search" className="sr-only">
              Search products
            </label>
            <div className="flex w-full overflow-hidden rounded-full border-2 border-primary bg-white shadow-sm shadow-primary/10 transition-shadow focus-within:shadow-md focus-within:shadow-primary/20">
              <select
                aria-label="Search category"
                className="hidden border-none bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 focus:ring-0 lg:block"
              >
                {SEARCH_CATEGORIES.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <input
                id="global-search"
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 border-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-0"
              />
              <button
                aria-label="Search"
                className="flex items-center gap-2 bg-primary px-6 font-bold text-slate-900 transition-all hover:brightness-110"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  search
                </span>
                <span className="hidden text-sm lg:inline">Search</span>
              </button>
            </div>
          </div>

          {/* Spacer — pushes action icons right on mobile */}
          <div className="flex-1 md:hidden" />

          {/* Action icons */}
          <div className="flex shrink-0 items-center gap-0.5 sm:gap-2 md:gap-3">
            {/* Search toggle — visible below md */}
            <button
              aria-label="Search"
              onClick={() => setMobileSearchOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary md:hidden"
            >
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                search
              </span>
            </button>

            {/* Wishlist — hidden below sm */}
            <button
              aria-label="Wishlist"
              className="group relative hidden flex-col items-center gap-0.5 px-2 text-slate-500 transition-colors hover:text-primary sm:flex"
            >
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                favorite
              </span>
              <span className="hidden text-[10px] font-medium md:block">Wishlist</span>
            </button>

            {/* Cart — always visible */}
            <button
              aria-label="Shopping cart, 3 items"
              className="group relative flex flex-col items-center gap-0.5 px-1.5 text-slate-500 transition-colors hover:text-primary sm:px-2"
            >
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                shopping_cart
              </span>
              <span className="absolute -top-1 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent-orange text-[9px] font-bold text-white">
                3
              </span>
              <span className="hidden text-[10px] font-medium md:block">Cart</span>
            </button>

            {/* Account — hidden below sm */}
            <Link
              href="/account"
              aria-label="Account"
              className="group relative hidden flex-col items-center gap-0.5 px-2 text-slate-500 transition-colors hover:text-primary sm:flex"
            >
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                person
              </span>
              <span className="hidden text-[10px] font-medium md:block">Account</span>
            </Link>

            {/* Sign In — hidden below md */}
            <Link
              href="/auth/signin"
              className="ml-1 hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-slate-900 transition-all hover:brightness-110 md:block"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* ── Row 2: Mobile search bar (toggleable) ───────────────── */}
        {mobileSearchOpen && (
          <div className="border-t border-slate-100 px-3 py-2 sm:px-4 md:hidden">
            <div role="search">
              <label htmlFor="mobile-search" className="sr-only">
                Search products
              </label>
              <div className="flex w-full overflow-hidden rounded-full border border-slate-200 bg-slate-50">
                <input
                  id="mobile-search"
                  type="text"
                  placeholder="Search products..."
                  autoFocus
                  className="flex-1 border-none bg-transparent px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-0"
                />
                <button
                  aria-label="Search"
                  className="flex items-center bg-primary px-4 text-slate-900"
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    search
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Row 3: Sub-nav (scrollable on mobile) ───────────────── */}
        <nav aria-label="Main categories" className="border-t border-slate-100 bg-white">
          <div className="no-scrollbar mx-auto flex max-w-[1400px] items-center gap-0.5 overflow-x-auto px-2 sm:gap-1 sm:px-4 lg:px-8">
            {SUB_NAV_LINKS.map((link, i) => {
              const isAccent = link.variant === "accent";
              const isFirst = i === 0;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`shrink-0 whitespace-nowrap rounded-lg px-2.5 py-2 text-[11px] font-semibold transition-colors sm:rounded-md sm:px-3 sm:py-2.5 sm:text-sm ${
                    isAccent
                      ? "text-accent-orange hover:bg-orange-50"
                      : isFirst
                        ? "mr-0.5 flex items-center gap-1 border border-slate-200 bg-slate-50 font-bold text-slate-700 hover:border-primary hover:bg-primary/5 hover:text-primary sm:mr-1 sm:gap-1.5 sm:border-0 sm:bg-transparent"
                        : "text-slate-600 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {isFirst && (
                    <span className="material-symbols-outlined text-[14px] sm:text-lg" aria-hidden="true">
                      menu
                    </span>
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          Mobile Drawer (slide-over)
      ══════════════════════════════════════════════════════════════ */}

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 left-0 z-[70] flex h-full w-[280px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
          <Image src="/splash.png" alt="Mint Shop" width={120} height={60} className="h-7 w-auto" />
          <button
            aria-label="Close menu"
            onClick={closeDrawer}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        {/* User welcome + Sign In / Register */}
        <div className="border-b border-slate-100 px-4 py-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">person</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Welcome!</p>
              <p className="text-xs text-slate-400">Sign in for best experience</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/auth/signin" onClick={closeDrawer} className="flex-1 rounded-lg bg-primary py-2.5 text-center text-sm font-bold text-slate-900 transition-all hover:brightness-110">
              Sign In
            </Link>
            <Link href="/auth/register" onClick={closeDrawer} className="flex-1 rounded-lg border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50">
              Register
            </Link>
          </div>
        </div>

        {/* Quick links row */}
        <div className="flex items-center gap-1 border-b border-slate-100 px-3 py-3">
          {[
            { icon: "favorite", label: "Wishlist", href: "/wishlist" },
            { icon: "receipt_long", label: "Orders", href: "/orders" },
            { icon: "headset_mic", label: "Support", href: "/help" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeDrawer}
              className="flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-slate-500 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">{item.icon}</span>
              <span className="text-[10px] font-semibold">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Categories list (scrollable) */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 pt-4 pb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Categories</p>
          </div>
          <nav aria-label="Mobile categories">
            <ul>
              {SIDEBAR_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={cat.href}
                    onClick={closeDrawer}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-lg text-slate-400" aria-hidden="true">{cat.icon}</span>
                    {cat.name}
                    <span className="material-symbols-outlined ml-auto text-base text-slate-300" aria-hidden="true">chevron_right</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Drawer footer */}
        <div className="border-t border-slate-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <Link href="/sell" onClick={closeDrawer} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50">
              <span className="material-symbols-outlined text-base" aria-hidden="true">storefront</span>
              Sell on Mint
            </Link>
            <Link href="/app" onClick={closeDrawer} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50">
              <span className="material-symbols-outlined text-base" aria-hidden="true">phone_android</span>
              Get App
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
