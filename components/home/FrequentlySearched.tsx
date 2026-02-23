/* ────────────────────────────────────────────────────────────────────────────
 * components/home/FrequentlySearched.tsx
 *
 * Horizontally-scrollable bar of trending search keyword chips.
 * Uses the `no-scrollbar` utility to hide the native scrollbar while
 * keeping scroll functionality intact.
 * ──────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import { FREQUENTLY_SEARCHED } from "@/lib/constants";

export default function FrequentlySearched() {
  return (
    <section
      aria-label="Frequently searched products"
      className="border-y border-slate-200 bg-white py-4 sm:py-6"
    >
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-8">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto sm:gap-3">
          <span className="shrink-0 text-xs font-bold text-slate-700 sm:text-sm">
            🔥 Trending:
          </span>
          {FREQUENTLY_SEARCHED.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition-all hover:border-primary hover:bg-primary/5 hover:text-primary sm:gap-1.5 sm:px-4 sm:py-2 sm:text-xs"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
