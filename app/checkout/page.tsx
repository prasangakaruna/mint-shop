/* ────────────────────────────────────────────────────────────────────────────
 * app/checkout/page.tsx  —  Checkout Page
 *
 * ┌──────────────────────────────────────────────────┐
 * │  Step Indicator  (Checkout → Payment → Confirm)  │
 * │  ┌─────────────────────┬────────────────────┐    │
 * │  │ Shipping Address    │  Order Summary      │    │
 * │  │ Form                │  Cart Items         │    │
 * │  │                     │  Totals             │    │
 * │  └─────────────────────┴────────────────────┘    │
 * └──────────────────────────────────────────────────┘
 * ──────────────────────────────────────────────────────────────────────────── */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StepIndicator from "@/components/ui/StepIndicator";
import { MOCK_CART_ITEMS, MOCK_ORDER_SUMMARY } from "@/lib/constants";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Checkout" },
];

const CHECKOUT_STEPS = [
  { label: "Checkout", icon: "local_shipping" },
  { label: "Payment", icon: "credit_card" },
  { label: "Confirmation", icon: "check_circle" },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function CheckoutPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    saveAddress: true,
  });

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const summary = MOCK_ORDER_SUMMARY;

  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <StepIndicator steps={CHECKOUT_STEPS} currentStep={0} />

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* ── Left: Shipping Form ──────────────────────────────────── */}
          <div className="flex-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <h2 className="mb-1 text-lg font-extrabold text-slate-900 sm:text-xl">
                Shipping Address
              </h2>
              <p className="mb-6 text-xs text-slate-400">
                Enter the address where you&apos;d like your order delivered.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    placeholder="John"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    placeholder="Doe"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Street Address *
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    placeholder="123 Main Street"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Apartment */}
                <div className="sm:col-span-2">
                  <label htmlFor="apartment" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Apartment / Suite (Optional)
                  </label>
                  <input
                    id="apartment"
                    type="text"
                    value={form.apartment}
                    onChange={(e) => update("apartment", e.target.value)}
                    placeholder="Apt 4B"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    City *
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    placeholder="New York"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* State */}
                <div>
                  <label htmlFor="state" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    State / Province *
                  </label>
                  <input
                    id="state"
                    type="text"
                    value={form.state}
                    onChange={(e) => update("state", e.target.value)}
                    placeholder="NY"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Zip Code */}
                <div>
                  <label htmlFor="zipCode" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    ZIP / Postal Code *
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    value={form.zipCode}
                    onChange={(e) => update("zipCode", e.target.value)}
                    placeholder="10001"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Country *
                  </label>
                  <select
                    id="country"
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Japan</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Save address checkbox */}
              <label className="mt-5 flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.saveAddress}
                  onChange={(e) => update("saveAddress", e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-slate-600">Save this address for future orders</span>
              </label>

              {/* Shipping method */}
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-bold text-slate-800">Shipping Method</h3>
                <div className="space-y-2">
                  {[
                    { label: "Standard Shipping", time: "7–10 business days", price: "$12.99", selected: true },
                    { label: "Express Shipping", time: "3–5 business days", price: "$24.99", selected: false },
                    { label: "Overnight Shipping", time: "1–2 business days", price: "$39.99", selected: false },
                  ].map((method) => (
                    <label
                      key={method.label}
                      className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-colors ${
                        method.selected
                          ? "border-primary bg-primary/5"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          defaultChecked={method.selected}
                          className="h-4 w-4 border-slate-300 text-primary focus:ring-primary"
                        />
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{method.label}</p>
                          <p className="text-xs text-slate-400">{method.time}</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-slate-700">{method.price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Order Summary ────────────────────────────────── */}
          <div className="w-full lg:w-[380px]">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-4 text-base font-extrabold text-slate-900">
                Order Summary ({MOCK_CART_ITEMS.reduce((s, i) => s + i.quantity, 0)} items)
              </h3>

              {/* Cart items */}
              <div className="mb-5 space-y-4">
                {MOCK_CART_ITEMS.map((item) => (
                  <div key={item.productId} className="flex gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="truncate text-sm font-semibold text-slate-800">{item.name}</h4>
                      {item.variant && (
                        <p className="text-[10px] text-slate-400">{item.variant}</p>
                      )}
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-xs text-slate-500">Qty: {item.quantity}</span>
                        <span className="text-sm font-bold text-slate-700">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon */}
              <div className="mb-5 flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-sm placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button className="rounded-lg border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
                  Apply
                </button>
              </div>

              {/* Totals */}
              <div className="space-y-2 border-t border-slate-100 pt-4">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Subtotal</span>
                  <span>${summary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Shipping</span>
                  <span>${summary.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Tax</span>
                  <span>${summary.tax.toFixed(2)}</span>
                </div>
                {summary.discount < 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span>{summary.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-slate-100 pt-3 text-base font-extrabold text-slate-900">
                  <span>Total</span>
                  <span>${summary.total.toFixed(2)}</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/payment"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                Continue to Payment
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>

              {/* Trust */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">lock</span>
                Secured by 256-bit SSL encryption
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
