/* ────────────────────────────────────────────────────────────────────────────
 * app/privacy/page.tsx  —  Privacy Policy Page
 * ──────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | Mint Shop",
  description: "Learn how Mint Shop collects, uses, and protects your personal information.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy" },
];

const LAST_UPDATED = "February 1, 2026";

const TOC = [
  { id: "collection", label: "1. Information We Collect" },
  { id: "use", label: "2. How We Use Your Information" },
  { id: "sharing", label: "3. Information Sharing" },
  { id: "cookies", label: "4. Cookies & Tracking" },
  { id: "security", label: "5. Data Security" },
  { id: "retention", label: "6. Data Retention" },
  { id: "rights", label: "7. Your Rights" },
  { id: "children", label: "8. Children's Privacy" },
  { id: "international", label: "9. International Transfers" },
  { id: "changes", label: "10. Changes to This Policy" },
  { id: "contact", label: "11. Contact Us" },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* ── Sidebar TOC ──────────────────────────────────────────── */}
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
                  Privacy Policy
                </h1>
                <p className="text-sm text-slate-400">
                  Last updated: {LAST_UPDATED}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  At Mint Shop, we take your privacy seriously. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit our platform, make a purchase,
                  or interact with our services. Please read this policy carefully.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                <section id="collection">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">1. Information We Collect</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    We collect information that you provide directly and information collected automatically:
                  </p>

                  <h3 className="mb-2 mt-4 text-sm font-bold text-slate-800">
                    a) Information You Provide
                  </h3>
                  <ul className="ml-5 list-disc space-y-1.5 text-sm text-slate-600">
                    <li><strong>Account Information:</strong> Name, email address, phone number, password, and profile details.</li>
                    <li><strong>Payment Information:</strong> Credit/debit card numbers, billing address, and financial account details (processed by our PCI-compliant partners).</li>
                    <li><strong>Shipping Information:</strong> Delivery addresses, recipient names, and contact numbers.</li>
                    <li><strong>Communication Data:</strong> Messages, reviews, feedback, and support inquiries.</li>
                    <li><strong>Verification Data:</strong> Government-issued ID or business documents for seller verification.</li>
                  </ul>

                  <h3 className="mb-2 mt-4 text-sm font-bold text-slate-800">
                    b) Automatically Collected Information
                  </h3>
                  <ul className="ml-5 list-disc space-y-1.5 text-sm text-slate-600">
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                    <li><strong>Usage Data:</strong> Pages visited, search queries, click behavior, and time spent on the platform.</li>
                    <li><strong>Location Data:</strong> Approximate location based on IP address or GPS (with your consent).</li>
                    <li><strong>Cookies:</strong> Session and persistent cookies for authentication, preferences, and analytics.</li>
                  </ul>
                </section>

                <section id="use">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">2. How We Use Your Information</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    We use the information we collect to:
                  </p>
                  <ul className="ml-5 list-disc space-y-1.5 text-sm text-slate-600">
                    <li>Process and fulfill your orders, including payment and shipping.</li>
                    <li>Create, maintain, and secure your user account.</li>
                    <li>Provide personalized product recommendations and search results.</li>
                    <li>Send transactional emails (order confirmations, shipping updates).</li>
                    <li>Communicate marketing offers and promotions (with your consent).</li>
                    <li>Improve our platform, algorithms, and user experience.</li>
                    <li>Detect and prevent fraud, abuse, and security incidents.</li>
                    <li>Comply with legal obligations and resolve disputes.</li>
                    <li>Conduct analytics and business intelligence reporting.</li>
                  </ul>
                </section>

                <section id="sharing">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">3. Information Sharing</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="ml-5 list-disc space-y-1.5 text-sm text-slate-600">
                    <li><strong>Sellers:</strong> Shipping address and order details necessary to fulfill your orders.</li>
                    <li><strong>Payment Processors:</strong> Stripe, PayPal, and other partners who process payments securely.</li>
                    <li><strong>Shipping Partners:</strong> Carriers and logistics providers for order delivery.</li>
                    <li><strong>Service Providers:</strong> Cloud hosting, analytics, email, and customer support tools.</li>
                    <li><strong>Legal Authorities:</strong> When required by law, subpoena, or to protect our rights and safety.</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                  </ul>
                </section>

                <section id="cookies">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">4. Cookies &amp; Tracking Technologies</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    We use cookies and similar technologies for:
                  </p>
                  <div className="overflow-hidden rounded-xl border border-slate-100">
                    {[
                      { type: "Essential", purpose: "Authentication, security, and core functionality.", required: true },
                      { type: "Performance", purpose: "Analytics, page load times, and error tracking.", required: false },
                      { type: "Functional", purpose: "Language preferences, recently viewed items, and cart state.", required: false },
                      { type: "Advertising", purpose: "Personalized ads, retargeting, and conversion tracking.", required: false },
                    ].map((cookie, i) => (
                      <div key={cookie.type} className={`flex items-center gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
                        <span className="w-24 shrink-0 font-semibold text-slate-700">{cookie.type}</span>
                        <span className="flex-1 text-slate-600">{cookie.purpose}</span>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${cookie.required ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500"}`}>
                          {cookie.required ? "Required" : "Optional"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    You can manage cookie preferences through your browser settings. Disabling certain
                    cookies may affect platform functionality.
                  </p>
                </section>

                <section id="security">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">5. Data Security</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      { icon: "lock", label: "256-bit SSL/TLS encryption for all data in transit" },
                      { icon: "shield", label: "PCI DSS Level 1 compliance for payment data" },
                      { icon: "security", label: "Multi-factor authentication for accounts" },
                      { icon: "cloud", label: "Encrypted data storage at rest (AES-256)" },
                      { icon: "monitoring", label: "24/7 security monitoring and intrusion detection" },
                      { icon: "policy", label: "Regular third-party security audits and penetration tests" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3">
                        <span className="material-symbols-outlined mt-0.5 text-sm text-primary" aria-hidden="true">
                          {item.icon}
                        </span>
                        <span className="text-xs text-slate-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="retention">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">6. Data Retention</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    We retain your personal information for as long as your account is active or as needed
                    to provide services, comply with legal obligations, resolve disputes, and enforce agreements.
                    Order records are retained for a minimum of 7 years for tax and legal compliance.
                    You may request deletion of your account and associated data at any time, subject to
                    legal retention requirements.
                  </p>
                </section>

                <section id="rights">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">7. Your Rights</h2>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">
                    Depending on your jurisdiction, you may have the following rights regarding your personal data:
                  </p>
                  <ul className="ml-5 list-disc space-y-1.5 text-sm text-slate-600">
                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
                    <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
                    <li><strong>Objection:</strong> Object to processing of your data for marketing purposes.</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent at any time where processing is based on consent.</li>
                  </ul>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    To exercise these rights, contact us at{" "}
                    <a href="mailto:privacy@mintshop.com" className="font-semibold text-primary hover:underline">
                      privacy@mintshop.com
                    </a>
                    . We will respond within 30 days.
                  </p>
                </section>

                <section id="children">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">8. Children&apos;s Privacy</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Our Platform is not intended for children under 16 years of age. We do not knowingly
                    collect personal information from children. If we become aware that we have collected
                    data from a child without parental consent, we will take steps to delete that information
                    promptly. If you believe a child has provided us with personal data, please contact us.
                  </p>
                </section>

                <section id="international">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">9. International Data Transfers</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Your information may be transferred to and processed in countries other than your own.
                    We ensure adequate protection through Standard Contractual Clauses (SCCs), adequacy
                    decisions, or other approved transfer mechanisms. For EU/EEA users, we comply with GDPR
                    requirements for cross-border data transfers.
                  </p>
                </section>

                <section id="changes">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">10. Changes to This Policy</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    We may update this Privacy Policy from time to time. Material changes will be notified
                    via email or a prominent notice on the Platform at least 30 days in advance. The
                    &ldquo;Last updated&rdquo; date at the top of this policy indicates when it was last revised.
                    Your continued use of the Platform after changes take effect constitutes acceptance.
                  </p>
                </section>

                <section id="contact">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">11. Contact Us</h2>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    For privacy-related inquiries, data requests, or concerns:
                  </p>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
                          person
                        </span>
                        <span><strong>Data Protection Officer</strong> — Mint Shop Inc.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
                          mail
                        </span>
                        <a href="mailto:privacy@mintshop.com" className="text-primary hover:underline">
                          privacy@mintshop.com
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
