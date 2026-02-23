/* ────────────────────────────────────────────────────────────────────────────
 * app/sell/onboarding/complete/page.tsx  —  Seller Onboarding Complete
 * ──────────────────────────────────────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export const metadata = {
  title: "Application Submitted | Mint Shop Seller",
  description: "Your seller application has been submitted successfully.",
};

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function SellerOnboardingCompletePage() {
  return (
    <PageShell>
      <section className="flex min-h-[calc(100vh-300px)] items-center justify-center px-3 py-10 sm:px-4 lg:px-8">
        <div className="mx-auto w-full max-w-[620px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10">
            {/* Success animation */}
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined filled text-5xl text-primary" aria-hidden="true">
                celebration
              </span>
            </div>

            <h1 className="mb-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
              Application Submitted!
            </h1>
            <p className="mb-1 text-sm text-slate-500">
              Thank you for applying to become a Mint Shop seller.
            </p>
            <p className="mb-8 text-sm text-slate-500">
              Our team will review your application and get back to you within <strong className="text-slate-700">1–3 business days</strong>.
            </p>

            {/* Application ID */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5">
              <span className="material-symbols-outlined text-lg text-primary" aria-hidden="true">
                confirmation_number
              </span>
              <span className="text-sm font-bold text-slate-700">
                Application ID: <span className="text-primary">SEL-2026-02-22-001</span>
              </span>
            </div>

            {/* What happens next */}
            <div className="mb-8 rounded-xl border border-slate-100 bg-slate-50 p-5 text-left sm:p-6">
              <h3 className="mb-4 text-sm font-bold text-slate-800">What Happens Next?</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "search",
                    title: "Application Review",
                    desc: "Our team verifies your business information and documents.",
                    time: "1–2 business days",
                  },
                  {
                    icon: "verified",
                    title: "Account Approval",
                    desc: "Once approved, you'll receive a confirmation email with login instructions.",
                    time: "Within 24 hours",
                  },
                  {
                    icon: "storefront",
                    title: "Set Up Products",
                    desc: "Access your Seller Dashboard to list your first products.",
                    time: "You're in control",
                  },
                  {
                    icon: "rocket_launch",
                    title: "Start Selling",
                    desc: "Go live and start receiving orders from millions of buyers worldwide.",
                    time: "Immediately",
                  },
                ].map((step, i) => (
                  <div key={step.title} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
                          {step.icon}
                        </span>
                      </div>
                      {i < 3 && <div className="mt-1 h-full w-0.5 bg-slate-200" />}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-800">{step.title}</h4>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-400">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation tips */}
            <div className="mb-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
              {[
                {
                  icon: "photo_camera",
                  title: "Prepare Photos",
                  desc: "Take high-quality product photos with good lighting.",
                },
                {
                  icon: "description",
                  title: "Write Descriptions",
                  desc: "Draft compelling product titles and descriptions.",
                },
                {
                  icon: "local_shipping",
                  title: "Plan Shipping",
                  desc: "Set up your shipping rates and delivery timelines.",
                },
              ].map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-xl border border-slate-100 bg-white p-4"
                >
                  <span className="material-symbols-outlined mb-2 text-xl text-primary" aria-hidden="true">
                    {tip.icon}
                  </span>
                  <h4 className="mb-1 text-xs font-bold text-slate-800">{tip.title}</h4>
                  <p className="text-[10px] text-slate-400">{tip.desc}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/account"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  dashboard
                </span>
                Go to My Account
              </Link>
              <Link
                href="/shop"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-8 py-3.5 text-sm font-bold text-slate-600 transition-all hover:border-primary hover:text-primary"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  shopping_bag
                </span>
                Browse Products
              </Link>
            </div>

            {/* Email note */}
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg text-blue-500" aria-hidden="true">
                  mail
                </span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-blue-800">Check Your Email</p>
                  <p className="text-xs text-blue-600">
                    We&apos;ve sent a confirmation email with your application details. If you don&apos;t see it,
                    check your spam folder or{" "}
                    <Link href="/help" className="font-semibold underline">contact support</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mint Shop branding */}
          <div className="mt-5 flex items-center justify-center">
            <Image src="/splash.png" alt="Mint Shop" width={100} height={50} className="h-6 w-auto opacity-40" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
