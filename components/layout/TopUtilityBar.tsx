/* ────────────────────────────────────────────────────────────────────────────
 * components/layout/TopUtilityBar.tsx
 *
 * Thin utility strip at the very top of the page.
 * Mobile:  Welcome text + "Sell" link (single row, compact)
 * sm+:     Welcome + left links appear
 * md+:     Full bar with left & right link groups
 * ──────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import { UTILITY_LEFT_LINKS, UTILITY_RIGHT_LINKS } from "@/lib/constants";

export default function TopUtilityBar() {
  return (
    <div className="border-b border-slate-200 bg-white text-[11px] text-slate-500 sm:text-xs">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-3 py-1.5 sm:px-4 sm:py-2 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
          <span className="font-semibold text-slate-700">
            <span className="hidden sm:inline">Welcome to </span>Mint Shop
          </span>
          {UTILITY_LEFT_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`hidden transition-colors hover:text-primary sm:inline ${
                link.hiddenBelow === "sm" ? "sm:hidden md:inline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
          {UTILITY_RIGHT_LINKS.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-semibold transition-colors hover:text-primary ${
                i > 0 ? "hidden sm:inline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
