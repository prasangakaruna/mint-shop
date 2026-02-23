/* ────────────────────────────────────────────────────────────────────────────
 * components/home/CategoriesGrid.tsx
 *
 * 6-column responsive grid showcasing top-level product categories.
 * Each card shows an icon, name, and up to 3 sub-categories.
 * Uses <SectionHeader> for the title row.
 * ──────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { CATEGORY_GRID } from "@/lib/constants";

export default function CategoriesGrid() {
  return (
    <section className="mx-auto max-w-[1400px] px-3 pb-8 sm:px-4 sm:pb-10 lg:px-8">
      <SectionHeader title="Categories for You" href="/categories" />

      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
        {CATEGORY_GRID.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="group flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:border-primary hover:shadow-md sm:rounded-2xl sm:p-5"
          >
            <div
              className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl sm:mb-3 sm:h-14 sm:w-14 sm:rounded-2xl ${cat.bgColor} transition-transform group-hover:scale-110`}
            >
              <span
                className={`material-symbols-outlined text-xl sm:text-2xl ${cat.iconColor}`}
                aria-hidden="true"
              >
                {cat.icon}
              </span>
            </div>
            <h4 className="mb-1 text-center text-[10px] font-bold text-slate-800 sm:mb-1.5 sm:text-xs">
              {cat.name}
            </h4>
            <p className="hidden text-center text-[10px] text-slate-400 sm:block">
              {cat.subcategories.join(" · ")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
