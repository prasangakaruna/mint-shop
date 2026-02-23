/* ────────────────────────────────────────────────────────────────────────────
 * app/sell/onboarding/page.tsx  —  Seller Onboarding Flow
 *
 * 5-step wizard:
 *   1. Business Information
 *   2. Store Setup
 *   3. Verification
 *   4. Payout Setup
 *   5. Review & Submit
 * ──────────────────────────────────────────────────────────────────────────── */

"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Become a Seller", href: "/sell" },
  { label: "Onboarding" },
];

/* ── Step configuration ─────────────────────────────────────────────────── */
const STEPS = [
  { label: "Business Info", icon: "business" },
  { label: "Store Setup", icon: "storefront" },
  { label: "Verification", icon: "verified_user" },
  { label: "Payout", icon: "account_balance" },
  { label: "Review", icon: "checklist" },
];

const BUSINESS_TYPES = [
  { value: "individual", label: "Individual / Sole Proprietor", icon: "person", desc: "Selling as a private individual" },
  { value: "company", label: "Registered Company", icon: "business", desc: "LLC, Corporation, or Partnership" },
  { value: "manufacturer", label: "Manufacturer / Factory", icon: "factory", desc: "You produce your own goods" },
];

const STORE_CATEGORIES = [
  "Apparel & Fashion",
  "Electronics",
  "Home & Garden",
  "Beauty & Health",
  "Sports & Outdoors",
  "Shoes & Accessories",
  "Bags & Luggage",
  "Jewelry & Watches",
  "Toys & Kids",
  "Automotive",
  "Office Supplies",
  "Other",
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function SellerOnboardingPage() {
  const [step, setStep] = useState(0);

  /* ── Form state ───────────────────────────────────────────────────────── */
  const [business, setBusiness] = useState({
    type: "",
    name: "",
    registrationNumber: "",
    country: "United States",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    website: "",
  });

  const [store, setStore] = useState({
    name: "",
    description: "",
    category: "",
    returnPolicy: "30",
    shippingFrom: "United States",
  });

  const [verification, setVerification] = useState({
    idType: "passport",
    idUploaded: false,
    businessDocUploaded: false,
    agreedToTerms: false,
  });

  const [payout, setPayout] = useState({
    method: "bank",
    bankName: "",
    accountName: "",
    accountNumber: "",
    routingNumber: "",
    paypalEmail: "",
  });

  /* ── Navigation ───────────────────────────────────────────────────────── */
  const next = useCallback(() => setStep((s) => Math.min(STEPS.length - 1, s + 1)), []);
  const prev = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);

  const updateBiz = (f: string, v: string) => setBusiness((p) => ({ ...p, [f]: v }));
  const updateStore = (f: string, v: string) => setStore((p) => ({ ...p, [f]: v }));

  return (
    <PageShell>
      <section className="mx-auto max-w-[900px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* ── Step Indicator ───────────────────────────────────────── */}
        <div className="mb-8">
          {/* Desktop */}
          <div className="hidden items-center justify-center gap-0 sm:flex">
            {STEPS.map((s, i) => {
              const done = i < step;
              const active = i === step;
              const last = i === STEPS.length - 1;
              return (
                <div key={s.label} className="flex items-center">
                  <button
                    onClick={() => i < step && setStep(i)}
                    className="flex flex-col items-center"
                    disabled={i > step}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                        done
                          ? "bg-primary text-slate-900"
                          : active
                            ? "bg-primary/15 text-primary ring-2 ring-primary"
                            : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {done ? (
                        <span className="material-symbols-outlined text-lg" aria-hidden="true">check</span>
                      ) : (
                        <span className="material-symbols-outlined text-lg" aria-hidden="true">{s.icon}</span>
                      )}
                    </div>
                    <span className={`mt-1.5 text-[10px] font-semibold sm:text-xs ${active ? "text-primary" : done ? "text-slate-700" : "text-slate-400"}`}>
                      {s.label}
                    </span>
                  </button>
                  {!last && (
                    <div className={`mx-2 h-[2px] w-12 lg:w-20 ${done ? "bg-primary" : "bg-slate-200"}`} />
                  )}
                </div>
              );
            })}
          </div>
          {/* Mobile: progress bar */}
          <div className="sm:hidden">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold text-primary">Step {step + 1} of {STEPS.length}</span>
              <span className="text-xs font-semibold text-slate-500">{STEPS[step].label}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* ── Step Content Card ────────────────────────────────────── */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          {/* ─── Step 1: Business Information ──────────────────────── */}
          {step === 0 && (
            <div>
              <h2 className="mb-1 text-lg font-extrabold text-slate-900">Business Information</h2>
              <p className="mb-6 text-xs text-slate-400">Tell us about your business so we can set up your seller account.</p>

              {/* Business type */}
              <div className="mb-6">
                <label className="mb-2 block text-xs font-semibold text-slate-700">Business Type *</label>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {BUSINESS_TYPES.map((bt) => (
                    <button
                      key={bt.value}
                      type="button"
                      onClick={() => updateBiz("type", bt.value)}
                      className={`flex items-start gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                        business.type === bt.value
                          ? "border-primary bg-primary/5"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${business.type === bt.value ? "bg-primary/15 text-primary" : "bg-slate-100 text-slate-400"}`}>
                        <span className="material-symbols-outlined text-lg" aria-hidden="true">{bt.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{bt.label}</p>
                        <p className="text-[10px] text-slate-400">{bt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="bizName" className="mb-1.5 block text-xs font-semibold text-slate-700">Business / Brand Name *</label>
                  <input id="bizName" type="text" value={business.name} onChange={(e) => updateBiz("name", e.target.value)} placeholder="My Awesome Store" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="bizRegNum" className="mb-1.5 block text-xs font-semibold text-slate-700">Registration Number</label>
                  <input id="bizRegNum" type="text" value={business.registrationNumber} onChange={(e) => updateBiz("registrationNumber", e.target.value)} placeholder="Optional" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="bizCountry" className="mb-1.5 block text-xs font-semibold text-slate-700">Country *</label>
                  <select id="bizCountry" value={business.country} onChange={(e) => updateBiz("country", e.target.value)} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary">
                    {["United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Japan", "China", "India", "Other"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bizAddress" className="mb-1.5 block text-xs font-semibold text-slate-700">Business Address *</label>
                  <input id="bizAddress" type="text" value={business.address} onChange={(e) => updateBiz("address", e.target.value)} placeholder="123 Main Street" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="bizCity" className="mb-1.5 block text-xs font-semibold text-slate-700">City *</label>
                  <input id="bizCity" type="text" value={business.city} onChange={(e) => updateBiz("city", e.target.value)} placeholder="New York" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="bizState" className="mb-1.5 block text-xs font-semibold text-slate-700">State *</label>
                    <input id="bizState" type="text" value={business.state} onChange={(e) => updateBiz("state", e.target.value)} placeholder="NY" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="bizZip" className="mb-1.5 block text-xs font-semibold text-slate-700">ZIP Code *</label>
                    <input id="bizZip" type="text" value={business.zipCode} onChange={(e) => updateBiz("zipCode", e.target.value)} placeholder="10001" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label htmlFor="bizPhone" className="mb-1.5 block text-xs font-semibold text-slate-700">Phone Number *</label>
                  <input id="bizPhone" type="tel" value={business.phone} onChange={(e) => updateBiz("phone", e.target.value)} placeholder="+1 (555) 000-0000" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="bizWebsite" className="mb-1.5 block text-xs font-semibold text-slate-700">Website (Optional)</label>
                  <input id="bizWebsite" type="url" value={business.website} onChange={(e) => updateBiz("website", e.target.value)} placeholder="https://mystore.com" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
              </div>
            </div>
          )}

          {/* ─── Step 2: Store Setup ──────────────────────────────── */}
          {step === 1 && (
            <div>
              <h2 className="mb-1 text-lg font-extrabold text-slate-900">Store Setup</h2>
              <p className="mb-6 text-xs text-slate-400">Customize your storefront to attract buyers.</p>

              <div className="space-y-5">
                {/* Store logo upload area */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">Store Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
                      <span className="material-symbols-outlined text-2xl text-slate-300" aria-hidden="true">add_photo_alternate</span>
                    </div>
                    <div>
                      <button type="button" className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-primary hover:text-primary">
                        Upload Image
                      </button>
                      <p className="mt-1 text-[10px] text-slate-400">PNG, JPG up to 2MB. 400×400px recommended.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="storeName" className="mb-1.5 block text-xs font-semibold text-slate-700">Store Name *</label>
                  <input id="storeName" type="text" value={store.name} onChange={(e) => updateStore("name", e.target.value)} placeholder="My Awesome Store" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                  <p className="mt-1 text-[10px] text-slate-400">Your store URL: mintshop.com/store/{store.name ? store.name.toLowerCase().replace(/\s+/g, "-") : "your-store"}</p>
                </div>

                <div>
                  <label htmlFor="storeDesc" className="mb-1.5 block text-xs font-semibold text-slate-700">Store Description *</label>
                  <textarea id="storeDesc" rows={4} value={store.description} onChange={(e) => updateStore("description", e.target.value)} placeholder="Tell buyers what makes your store special..." className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                  <p className="mt-1 text-right text-[10px] text-slate-400">{store.description.length}/500</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="storeCategory" className="mb-1.5 block text-xs font-semibold text-slate-700">Primary Category *</label>
                    <select id="storeCategory" value={store.category} onChange={(e) => updateStore("category", e.target.value)} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary">
                      <option value="">Select a category</option>
                      {STORE_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="storeReturn" className="mb-1.5 block text-xs font-semibold text-slate-700">Return Policy</label>
                    <select id="storeReturn" value={store.returnPolicy} onChange={(e) => updateStore("returnPolicy", e.target.value)} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary">
                      <option value="7">7-day returns</option>
                      <option value="14">14-day returns</option>
                      <option value="30">30-day returns</option>
                      <option value="60">60-day returns</option>
                      <option value="none">No returns</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="storeShipFrom" className="mb-1.5 block text-xs font-semibold text-slate-700">Shipping From *</label>
                    <select id="storeShipFrom" value={store.shippingFrom} onChange={(e) => updateStore("shippingFrom", e.target.value)} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary">
                      {["United States", "Canada", "United Kingdom", "China", "India", "Germany", "Other"].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Store banner upload */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">Store Banner (Optional)</label>
                  <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 transition-colors hover:border-primary/30">
                    <div className="text-center">
                      <span className="material-symbols-outlined mb-1 text-2xl text-slate-300" aria-hidden="true">cloud_upload</span>
                      <p className="text-xs text-slate-400">Drag & drop or click to upload</p>
                      <p className="text-[10px] text-slate-300">1200×300px recommended</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ─── Step 3: Verification ─────────────────────────────── */}
          {step === 2 && (
            <div>
              <h2 className="mb-1 text-lg font-extrabold text-slate-900">Identity Verification</h2>
              <p className="mb-6 text-xs text-slate-400">Verify your identity to earn the Trade Assurance badge and build buyer trust.</p>

              <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg text-blue-500" aria-hidden="true">info</span>
                  <div>
                    <p className="text-xs font-semibold text-blue-800">Why verify?</p>
                    <p className="text-xs text-blue-600">
                      Verified sellers receive the Trade Assurance badge, appear higher in search results,
                      and see up to 3x more orders. Verification typically takes 1–3 business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {/* ID Type */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">Government-Issued ID *</label>
                  <div className="mb-3 grid grid-cols-3 gap-2">
                    {[
                      { value: "passport", label: "Passport" },
                      { value: "drivers_license", label: "Driver's License" },
                      { value: "national_id", label: "National ID" },
                    ].map((idType) => (
                      <button
                        key={idType.value}
                        type="button"
                        onClick={() => setVerification({ ...verification, idType: idType.value })}
                        className={`rounded-lg border-2 px-3 py-2.5 text-xs font-semibold transition-all ${
                          verification.idType === idType.value
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-slate-200 text-slate-500 hover:border-slate-300"
                        }`}
                      >
                        {idType.label}
                      </button>
                    ))}
                  </div>

                  {/* Upload area for ID */}
                  <div
                    onClick={() => setVerification({ ...verification, idUploaded: true })}
                    className={`flex h-36 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed transition-colors ${
                      verification.idUploaded
                        ? "border-primary bg-primary/5"
                        : "border-slate-200 bg-slate-50 hover:border-primary/30"
                    }`}
                  >
                    {verification.idUploaded ? (
                      <div className="text-center">
                        <span className="material-symbols-outlined mb-1 text-3xl text-primary" aria-hidden="true">check_circle</span>
                        <p className="text-xs font-semibold text-primary">ID document uploaded</p>
                        <p className="text-[10px] text-slate-400">Click to replace</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="material-symbols-outlined mb-1 text-2xl text-slate-300" aria-hidden="true">upload_file</span>
                        <p className="text-xs text-slate-500">Upload front of your {verification.idType.replace("_", " ")}</p>
                        <p className="text-[10px] text-slate-300">PNG, JPG, or PDF up to 5MB</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Business document */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">Business Document (Optional)</label>
                  <div
                    onClick={() => setVerification({ ...verification, businessDocUploaded: true })}
                    className={`flex h-28 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed transition-colors ${
                      verification.businessDocUploaded
                        ? "border-primary bg-primary/5"
                        : "border-slate-200 bg-slate-50 hover:border-primary/30"
                    }`}
                  >
                    {verification.businessDocUploaded ? (
                      <div className="text-center">
                        <span className="material-symbols-outlined mb-1 text-2xl text-primary" aria-hidden="true">check_circle</span>
                        <p className="text-xs font-semibold text-primary">Business document uploaded</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="material-symbols-outlined mb-1 text-2xl text-slate-300" aria-hidden="true">cloud_upload</span>
                        <p className="text-xs text-slate-500">Business license, tax certificate, or registration</p>
                        <p className="text-[10px] text-slate-300">Speeds up verification to 1 business day</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-2.5 cursor-pointer rounded-xl border border-slate-100 p-4 hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={verification.agreedToTerms}
                    onChange={(e) => setVerification({ ...verification, agreedToTerms: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <span className="text-xs text-slate-500">
                    I confirm that the information provided is accurate and I agree to Mint Shop&apos;s{" "}
                    <Link href="/terms" className="font-semibold text-primary hover:underline">Seller Terms</Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="font-semibold text-primary hover:underline">Privacy Policy</Link>.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* ─── Step 4: Payout Setup ─────────────────────────────── */}
          {step === 3 && (
            <div>
              <h2 className="mb-1 text-lg font-extrabold text-slate-900">Payout Setup</h2>
              <p className="mb-6 text-xs text-slate-400">Set up how you&apos;d like to receive your earnings.</p>

              {/* Payout method selection */}
              <div className="mb-6">
                <label className="mb-2 block text-xs font-semibold text-slate-700">Payout Method *</label>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {[
                    { value: "bank", label: "Bank Transfer", icon: "account_balance", desc: "3–5 business days" },
                    { value: "paypal", label: "PayPal", icon: "account_balance_wallet", desc: "1–2 business days" },
                    { value: "payoneer", label: "Payoneer", icon: "payments", desc: "2–3 business days" },
                  ].map((pm) => (
                    <button
                      key={pm.value}
                      type="button"
                      onClick={() => setPayout({ ...payout, method: pm.value })}
                      className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                        payout.method === pm.value
                          ? "border-primary bg-primary/5"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${payout.method === pm.value ? "bg-primary/15 text-primary" : "bg-slate-100 text-slate-400"}`}>
                        <span className="material-symbols-outlined text-lg" aria-hidden="true">{pm.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{pm.label}</p>
                        <p className="text-[10px] text-slate-400">{pm.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bank details */}
              {payout.method === "bank" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="payBankName" className="mb-1.5 block text-xs font-semibold text-slate-700">Bank Name *</label>
                    <input id="payBankName" type="text" value={payout.bankName} onChange={(e) => setPayout({ ...payout, bankName: e.target.value })} placeholder="Chase Bank" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="payAccName" className="mb-1.5 block text-xs font-semibold text-slate-700">Account Holder Name *</label>
                    <input id="payAccName" type="text" value={payout.accountName} onChange={(e) => setPayout({ ...payout, accountName: e.target.value })} placeholder="John Doe" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="payAccNum" className="mb-1.5 block text-xs font-semibold text-slate-700">Account Number *</label>
                    <input id="payAccNum" type="text" value={payout.accountNumber} onChange={(e) => setPayout({ ...payout, accountNumber: e.target.value })} placeholder="••••••••1234" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="payRouting" className="mb-1.5 block text-xs font-semibold text-slate-700">Routing Number *</label>
                    <input id="payRouting" type="text" value={payout.routingNumber} onChange={(e) => setPayout({ ...payout, routingNumber: e.target.value })} placeholder="021000021" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
              )}

              {/* PayPal */}
              {payout.method === "paypal" && (
                <div>
                  <label htmlFor="payPaypal" className="mb-1.5 block text-xs font-semibold text-slate-700">PayPal Email Address *</label>
                  <input id="payPaypal" type="email" value={payout.paypalEmail} onChange={(e) => setPayout({ ...payout, paypalEmail: e.target.value })} placeholder="seller@example.com" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
              )}

              {/* Payoneer */}
              {payout.method === "payoneer" && (
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-center">
                  <span className="material-symbols-outlined mb-2 text-3xl text-primary" aria-hidden="true">link</span>
                  <p className="text-sm font-semibold text-slate-700">Connect your Payoneer account</p>
                  <p className="mb-3 text-xs text-slate-400">You&apos;ll be redirected to Payoneer to link your account.</p>
                  <button type="button" className="rounded-lg border border-primary px-5 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/5">
                    Connect Payoneer
                  </button>
                </div>
              )}

              <div className="mt-5 flex items-start gap-2 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <span className="material-symbols-outlined text-base text-amber-500" aria-hidden="true">shield</span>
                <p className="text-xs text-amber-700">
                  Your financial information is encrypted with bank-level 256-bit SSL security and is
                  never shared with third parties.
                </p>
              </div>
            </div>
          )}

          {/* ─── Step 5: Review & Submit ──────────────────────────── */}
          {step === 4 && (
            <div>
              <h2 className="mb-1 text-lg font-extrabold text-slate-900">Review &amp; Submit</h2>
              <p className="mb-6 text-xs text-slate-400">Please review your information before submitting your seller application.</p>

              <div className="space-y-4">
                {/* Business Info Summary */}
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800">Business Information</h3>
                    <button onClick={() => setStep(0)} className="text-xs font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                    <div><span className="text-slate-400">Type:</span> <span className="font-semibold text-slate-700">{BUSINESS_TYPES.find((b) => b.value === business.type)?.label || "—"}</span></div>
                    <div><span className="text-slate-400">Name:</span> <span className="font-semibold text-slate-700">{business.name || "—"}</span></div>
                    <div><span className="text-slate-400">Country:</span> <span className="font-semibold text-slate-700">{business.country}</span></div>
                    <div><span className="text-slate-400">Phone:</span> <span className="font-semibold text-slate-700">{business.phone || "—"}</span></div>
                    <div className="sm:col-span-2"><span className="text-slate-400">Address:</span> <span className="font-semibold text-slate-700">{business.address ? `${business.address}, ${business.city}, ${business.state} ${business.zipCode}` : "—"}</span></div>
                  </div>
                </div>

                {/* Store Setup Summary */}
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800">Store Setup</h3>
                    <button onClick={() => setStep(1)} className="text-xs font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                    <div><span className="text-slate-400">Store Name:</span> <span className="font-semibold text-slate-700">{store.name || "—"}</span></div>
                    <div><span className="text-slate-400">Category:</span> <span className="font-semibold text-slate-700">{store.category || "—"}</span></div>
                    <div><span className="text-slate-400">Return Policy:</span> <span className="font-semibold text-slate-700">{store.returnPolicy}-day returns</span></div>
                    <div><span className="text-slate-400">Ships From:</span> <span className="font-semibold text-slate-700">{store.shippingFrom}</span></div>
                    {store.description && <div className="sm:col-span-2"><span className="text-slate-400">Description:</span> <span className="font-semibold text-slate-700">{store.description.slice(0, 100)}{store.description.length > 100 ? "…" : ""}</span></div>}
                  </div>
                </div>

                {/* Verification Summary */}
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800">Verification</h3>
                    <button onClick={() => setStep(2)} className="text-xs font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className={`flex items-center gap-1 ${verification.idUploaded ? "text-green-600" : "text-slate-400"}`}>
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">{verification.idUploaded ? "check_circle" : "cancel"}</span>
                      ID Document
                    </span>
                    <span className={`flex items-center gap-1 ${verification.businessDocUploaded ? "text-green-600" : "text-slate-400"}`}>
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">{verification.businessDocUploaded ? "check_circle" : "cancel"}</span>
                      Business Document
                    </span>
                    <span className={`flex items-center gap-1 ${verification.agreedToTerms ? "text-green-600" : "text-slate-400"}`}>
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">{verification.agreedToTerms ? "check_circle" : "cancel"}</span>
                      Terms Accepted
                    </span>
                  </div>
                </div>

                {/* Payout Summary */}
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800">Payout</h3>
                    <button onClick={() => setStep(3)} className="text-xs font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-400">Method:</span>{" "}
                    <span className="font-semibold text-slate-700">
                      {payout.method === "bank" ? `Bank Transfer — ${payout.bankName || "Not set"}` : payout.method === "paypal" ? `PayPal — ${payout.paypalEmail || "Not set"}` : "Payoneer"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Navigation Buttons ─────────────────────────────────── */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
            <button
              onClick={prev}
              disabled={step === 0}
              className={`flex items-center gap-1.5 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 ${
                step === 0 ? "invisible" : ""
              }`}
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_back</span>
              Back
            </button>

            {step < STEPS.length - 1 ? (
              <button
                onClick={next}
                className="flex items-center gap-1.5 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                Continue
                <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
              </button>
            ) : (
              <Link
                href="/sell/onboarding/complete"
                className="flex items-center gap-1.5 rounded-lg bg-primary px-6 py-2.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">rocket_launch</span>
                Submit Application
              </Link>
            )}
          </div>
        </div>

        {/* Help note */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
          <span className="material-symbols-outlined text-sm" aria-hidden="true">help</span>
          Need help?{" "}
          <Link href="/help" className="font-semibold text-primary hover:underline">Contact Seller Support</Link>
        </div>
      </section>
    </PageShell>
  );
}
