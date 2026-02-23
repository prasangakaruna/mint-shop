/* ────────────────────────────────────────────────────────────────────────────
 * components/ui/Breadcrumbs.tsx
 *
 * Reusable breadcrumb navigation component.
 * Renders a horizontal trail with chevron separators.
 * ──────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-400 sm:text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && (
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                  chevron_right
                </span>
              )}
              {isLast || !item.href ? (
                <span className="font-medium text-slate-700">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
