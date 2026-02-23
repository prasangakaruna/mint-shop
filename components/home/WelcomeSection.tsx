/* ────────────────────────────────────────────────────────────────────────────
 * components/home/WelcomeSection.tsx
 *
 * "Welcome to Mint Shop" section featuring three service / info cards
 * (RFQ, Top Ranking, Fast Customization).  Each card is data-driven via
 * the SERVICE_CARDS constant.
 * ──────────────────────────────────────────────────────────────────────────── */

import { SERVICE_CARDS } from "@/lib/constants";

export default function WelcomeSection() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-8">
        <h2 className="mb-4 text-base font-extrabold text-slate-900 sm:mb-6 sm:text-xl">
          Welcome to Mint Shop
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-3">
          {SERVICE_CARDS.map((card) => (
            <article
              key={card.id}
              className={`rounded-xl border border-slate-200 sm:rounded-2xl ${card.gradientBg} p-4 shadow-sm sm:p-6`}
            >
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl ${card.iconBg}`}
              >
                <span
                  className={`material-symbols-outlined text-xl sm:text-2xl ${card.iconColor}`}
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
              </div>
              <h3 className="mb-1.5 text-sm font-bold text-slate-900 sm:mb-2 sm:text-base">
                {card.title}
              </h3>
              <p className="mb-3 text-[11px] leading-relaxed text-slate-500 sm:mb-4 sm:text-xs">
                {card.description}
              </p>
              <button
                className={`rounded-lg px-4 py-2 text-[11px] font-bold transition-all hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-xs ${card.buttonClass}`}
              >
                {card.buttonLabel}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
