// components/layout/Footer.tsx
// Site-wide footer: Brand + navigation columns + bottom bar with payment badges

import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS, PAYMENT_BADGES, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white pt-8 pb-6 sm:pt-12 sm:pb-8">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-8">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <Image
                src="/splash.png"
                alt="Mint Shop"
                width={100}
                height={34}
                className="h-7 w-auto sm:h-8"
              />
            </div>
            <p className="mb-3 max-w-xs text-[11px] leading-relaxed text-slate-500 sm:mb-4 sm:text-xs">
              Your global marketplace for quality products. Trusted by millions
              of buyers across 190+ countries.
            </p>
            <div className="flex gap-3 text-slate-400">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="transition-colors hover:text-primary"
                >
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-800 sm:mb-4 sm:text-xs">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-[11px] text-slate-500 sm:space-y-3 sm:text-xs">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-10 sm:flex-row sm:gap-4 sm:pt-6">
          <p className="text-[10px] text-slate-400 sm:text-[11px]">
            &copy; {currentYear} MINT SHOP Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {PAYMENT_BADGES.map((badge) => (
              <span
                key={badge.label}
                className="rounded border border-slate-200 px-1.5 py-0.5 text-[9px] font-semibold text-slate-400 sm:px-2 sm:py-1 sm:text-[10px]"
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
