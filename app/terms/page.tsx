/* ────────────────────────────────────────────────────────────────────────────
 * app/terms/page.tsx  —  Terms of Use Page
 * ──────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Terms of Use | Mint Shop",
  description: "Read the Mint Shop Terms of Use governing your access and use of our platform.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Terms of Use" },
];

const LAST_UPDATED = "February 1, 2026";

/* ── Table of Contents ──────────────────────────────────────────────────── */
const TOC = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "eligibility", label: "2. Eligibility" },
  { id: "accounts", label: "3. User Accounts" },
  { id: "marketplace", label: "4. Marketplace Rules" },
  { id: "orders", label: "5. Orders & Payments" },
  { id: "ip", label: "6. Intellectual Property" },
  { id: "prohibited", label: "7. Prohibited Conduct" },
  { id: "liability", label: "8. Limitation of Liability" },
  { id: "termination", label: "9. Termination" },
  { id: "disputes", label: "10. Dispute Resolution" },
  { id: "changes", label: "11. Changes to Terms" },
  { id: "contact", label: "12. Contact Us" },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function TermsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* ── Sidebar TOC (Desktop) ────────────────────────────────── */}
          <aside className="hidden w-[240px] shrink-0 lg:block">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-800">
                Contents
              </h3>
              <nav aria-label="Table of contents">
                <ul className="space-y-1">
                  {TOC.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-lg px-3 py-1.5 text-xs text-slate-500 transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* ── Content ──────────────────────────────────────────────── */}
          <div className="flex-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              {/* Header */}
              <div className="mb-8 border-b border-slate-100 pb-6">
                <h1 className="mb-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Terms of Use
                </h1>
                <p className="text-sm text-slate-400">
                  Last updated: {LAST_UPDATED}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Welcome to Mint Shop. These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use
                  of the Mint Shop website, mobile applications, and all related services (collectively,
                  the &ldquo;Platform&rdquo;). By accessing or using the Platform, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Sections */}
              <div className="prose-custom space-y-8">
                <section id="acceptance">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    By creating an account, making a purchase, or otherwise using the Platform, you acknowledge
                    that you have read, understood, and agree to be bound by these Terms and our{" "}
                    <Link href="/privacy" className="font-semibold text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    . If you do not agree to these Terms, you must not use the Platform.
                  </p>
                </section>

                <section id="eligibility">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">2. Eligibility</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    You must be at least 18 years of age (or the age of majority in your jurisdiction) to use
                    the Platform. By using the Platform, you represent and warrant that you meet these
                    requirements and have the legal capacity to enter into a binding agreement.
                  </p>
                </section>

                <section id="accounts">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">3. User Accounts</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    When you create an account, you agree to:
                  </p>
                  <ul className="ml-5 list-disc space-y-1.5 text-sm text-slate-600">
                    <li>Provide accurate, current, and complete registration information.</li>
                    <li>Maintain and promptly update your account information.</li>
                    <li>Keep your password secure and confidential.</li>
                    <li>Accept responsibility for all activities that occur under your account.</li>
                    <li>Notify us immediately of any unauthorized use of your account.</li>
                  </ul>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Mint Shop reserves the right to suspend or terminate accounts that violate these Terms
                    or engage in fraudulent activity.
                  </p>
                </section>

                <section id="marketplace">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">4. Marketplace Rules</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    Mint Shop operates as a marketplace connecting buyers and sellers. We are not a party
                    to the transactions between buyers and sellers. Sellers are responsible for the accuracy
                    of their product listings, pricing, and fulfillment of orders.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    All products listed on the Platform must comply with applicable laws and regulations.
                    Mint Shop reserves the right to remove any listings that violate our policies or
                    applicable law.
                  </p>
                </section>

                <section id="orders">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">5. Orders &amp; Payments</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    When you place an order, you agree to pay the listed price plus any applicable taxes,
                    shipping fees, and duties. All prices are listed in USD unless otherwise specified.
                  </p>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    We accept major credit cards, PayPal, Apple Pay, and bank transfers. Payment
                    processing is handled by our certified PCI-compliant payment partners.
                  </p>
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-base text-blue-500" aria-hidden="true">info</span>
                      <p className="text-xs text-blue-700">
                        <strong>Trade Assurance:</strong> Orders placed through our Trade Assurance program
                        receive additional buyer protection, including quality guarantees and refund coverage.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="ip">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">6. Intellectual Property</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    All content on the Platform — including text, graphics, logos, icons, images, audio,
                    video, software, and code — is the property of Mint Shop Inc. or its licensors and is
                    protected by international copyright, trademark, and other intellectual property laws.
                    You may not reproduce, distribute, or create derivative works without prior written consent.
                  </p>
                </section>

                <section id="prohibited">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">7. Prohibited Conduct</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">You agree not to:</p>
                  <ul className="ml-5 list-disc space-y-1.5 text-sm text-slate-600">
                    <li>Use the Platform for any unlawful purpose or in violation of any applicable law.</li>
                    <li>Post false, misleading, or fraudulent content or listings.</li>
                    <li>Interfere with the operation of the Platform or other users&apos; use of it.</li>
                    <li>Attempt to gain unauthorized access to any portion of the Platform.</li>
                    <li>Use automated bots, scrapers, or data mining tools on the Platform.</li>
                    <li>Engage in price manipulation, shill bidding, or fake reviews.</li>
                    <li>Sell counterfeit, stolen, or prohibited goods.</li>
                  </ul>
                </section>

                <section id="liability">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">8. Limitation of Liability</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    To the maximum extent permitted by law, Mint Shop Inc. and its affiliates, officers,
                    directors, employees, and agents shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages arising out of or related to your use of
                    the Platform, even if advised of the possibility of such damages. Our total liability
                    shall not exceed the amount you paid to Mint Shop in the 12 months preceding the claim.
                  </p>
                </section>

                <section id="termination">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">9. Termination</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    We may suspend or terminate your access to the Platform at any time, with or without
                    cause, and with or without notice. Upon termination, your right to use the Platform
                    will immediately cease. Provisions that by their nature should survive termination
                    shall survive, including intellectual property, indemnification, and limitation of liability.
                  </p>
                </section>

                <section id="disputes">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">10. Dispute Resolution</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Any disputes arising from or relating to these Terms or the Platform shall first be
                    attempted to be resolved through good-faith negotiation. If negotiation fails, disputes
                    shall be resolved through binding arbitration in accordance with the rules of the
                    American Arbitration Association, conducted in the State of Delaware, USA. You agree
                    to waive any right to participate in class action lawsuits against Mint Shop.
                  </p>
                </section>

                <section id="changes">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">11. Changes to Terms</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    We reserve the right to modify these Terms at any time. Material changes will be
                    communicated via email or a prominent notice on the Platform at least 30 days before
                    taking effect. Your continued use of the Platform after changes take effect constitutes
                    acceptance of the revised Terms.
                  </p>
                </section>

                <section id="contact">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">12. Contact Us</h2>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
                          business
                        </span>
                        <span className="font-semibold">Mint Shop Inc.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
                          mail
                        </span>
                        <a href="mailto:legal@mintshop.com" className="text-primary hover:underline">
                          legal@mintshop.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
                          location_on
                        </span>
                        <span>123 Commerce Drive, Suite 500, Wilmington, DE 19801, USA</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
