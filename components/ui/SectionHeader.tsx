/* ────────────────────────────────────────────────────────────────────────────
 * components/ui/SectionHeader.tsx
 *
 * Reusable section header with a title on the left and an optional
 * "View All" / "See More" link on the right.  Used across Categories,
 * Top Ranking, Just for You, and other grid sections.
 * ──────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";

interface SectionHeaderProps {
  /** The main heading text. */
  title: string;
  /** Optional link text (defaults to "View All"). */
  linkText?: string;
  /** URL for the "View All" link. */
  href?: string;
  /** Optional React node rendered between title & link (e.g. tab buttons). */
  children?: React.ReactNode;
}

export default function SectionHeader({
  title,
  linkText = "View All",
  href = "#",
  children,
}: SectionHeaderProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-6">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <h2 className="text-base font-extrabold text-slate-900 sm:text-xl">{title}</h2>
        {children}
      </div>

      <Link
        href={href}
        className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline sm:text-sm"
      >
        {linkText}
        <span className="material-symbols-outlined text-base" aria-hidden="true">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}
