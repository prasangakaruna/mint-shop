/* ────────────────────────────────────────────────────────────────────────────
 * components/home/CtaBanner.tsx
 *
 * Full-width call-to-action banner with the Mint Shop dark logo,
 * a headline, a description, and primary + secondary action buttons.
 * Uses the `premium-gradient` CSS class for the dark green background.
 * ──────────────────────────────────────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="px-3 py-8 sm:px-4 sm:py-10 lg:px-8">
      <div className="premium-gradient relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl p-6 text-center shadow-2xl sm:rounded-3xl sm:p-10 lg:p-16">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-36 w-36 rounded-full bg-primary/20 blur-[60px] sm:-mt-16 sm:-mr-16 sm:h-56 sm:w-56 sm:blur-[80px]" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-36 w-36 rounded-full bg-primary/10 blur-[60px] sm:-mb-16 sm:-ml-16 sm:h-56 sm:w-56 sm:blur-[80px]" />

        {/* Logo */}
        <Image
          src="/splash-dark.png"
          alt="Mint Shop"
          width={180}
          height={66}
          className="relative z-10 mx-auto mb-4 h-8 w-auto sm:mb-6 sm:h-12"
        />

        <h2 className="relative z-10 mb-3 text-xl font-black text-white sm:mb-4 sm:text-3xl md:text-4xl">
          Start Sourcing on Mint Shop
        </h2>
        <p className="relative z-10 mx-auto mb-5 max-w-lg text-xs text-slate-300 sm:mb-8 sm:text-sm">
          Join millions of buyers worldwide. Trade assurance, verified
          suppliers, and exclusive deals await you.
        </p>

        <div className="relative z-10 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <Link
            href="/auth/register"
            className="rounded-lg bg-primary px-6 py-3 text-xs font-black text-slate-900 shadow-lg shadow-primary/20 transition-transform hover:scale-105 sm:rounded-xl sm:px-8 sm:py-3.5 sm:text-sm"
          >
            Register for Free
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-xs font-bold text-white backdrop-blur transition-all hover:bg-white/20 sm:rounded-xl sm:px-8 sm:py-3.5 sm:text-sm"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
