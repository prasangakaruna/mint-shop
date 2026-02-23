/* ────────────────────────────────────────────────────────────────────────────
 * app/payment/page.tsx  —  Payment Page
 *
 * ┌──────────────────────────────────────────────────┐
 * │  Step Indicator  (Checkout ✓ → Payment → Confirm)│
 * │  ┌─────────────────────┬────────────────────┐    │
 * │  │ Payment Method      │  Order Summary      │    │
 * │  │ Card Form           │  Cart Items         │    │
 * │  │ Billing Address     │  Totals             │    │
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
  { label: "Checkout", href: "/checkout" },
  { label: "Payment" },
];

const CHECKOUT_STEPS = [
  { label: "Checkout", icon: "local_shipping" },
  { label: "Payment", icon: "credit_card" },
  { label: "Confirmation", icon: "check_circle" },
];

type PaymentMethod = "card" | "paypal" | "apple" | "bank";

const PAYMENT_METHODS: { key: PaymentMethod; label: string; icon: string; description: string }[] = [
  { key: "card", label: "Credit / Debit Card", icon: "credit_card", description: "Visa, Mastercard, Amex" },
  { key: "paypal", label: "PayPal", icon: "account_balance_wallet", description: "Pay with your PayPal account" },
  { key: "apple", label: "Apple Pay", icon: "phone_iphone", description: "Quick & secure checkout" },
  { key: "bank", label: "Bank Transfer", icon: "account_balance", description: "Direct bank payment" },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function PaymentPage() {
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [billingAddressSame, setBillingAddressSame] = useState(true);

  const updateCard = (field: string, value: string) =>
    setCard((prev) => ({ ...prev, [field]: value }));

  const summary = MOCK_ORDER_SUMMARY;

  /* Format card number with spaces */
  const formatCardNumber = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  /* Format expiry as MM/YY */
  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  };

  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <StepIndicator steps={CHECKOUT_STEPS} currentStep={1} />

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* ── Left: Payment Form ───────────────────────────────────── */}
          <div className="flex-1">
            {/* Payment method selection */}
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <h2 className="mb-1 text-lg font-extrabold text-slate-900 sm:text-xl">
                Payment Method
              </h2>
              <p className="mb-5 text-xs text-slate-400">
                Select your preferred payment method.
              </p>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                {PAYMENT_METHODS.map((pm) => (
                  <button
                    key={pm.key}
                    onClick={() => setMethod(pm.key)}
                    className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                      method === pm.key
                        ? "border-primary bg-primary/5 shadow-sm shadow-primary/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        method === pm.key ? "bg-primary/15 text-primary" : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl" aria-hidden="true">
                        {pm.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{pm.label}</p>
                      <p className="text-[10px] text-slate-400">{pm.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Card form — shown when method is "card" */}
            {method === "card" && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                <h3 className="mb-5 text-base font-bold text-slate-900">Card Details</h3>

                {/* Card preview */}
                <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 text-white shadow-xl sm:p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="material-symbols-outlined text-2xl text-primary" aria-hidden="true">
                      credit_card
                    </span>
                    <span className="text-xs font-semibold tracking-widest opacity-60">MINT PAY</span>
                  </div>
                  <p className="mb-4 font-mono text-lg tracking-[0.2em] sm:text-xl">
                    {card.number || "•••• •••• •••• ••••"}
                  </p>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest opacity-50">Card Holder</p>
                      <p className="text-sm font-semibold">{card.name || "YOUR NAME"}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-widest opacity-50">Expires</p>
                      <p className="text-sm font-semibold">{card.expiry || "MM/YY"}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Card number */}
                  <div>
                    <label htmlFor="cardNumber" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Card Number *
                    </label>
                    <div className="relative">
                      <input
                        id="cardNumber"
                        type="text"
                        value={card.number}
                        onChange={(e) => updateCard("number", formatCardNumber(e.target.value))}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 pr-12 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                      <span className="material-symbols-outlined absolute top-1/2 right-4 -translate-y-1/2 text-lg text-slate-300" aria-hidden="true">
                        credit_card
                      </span>
                    </div>
                  </div>

                  {/* Card holder */}
                  <div>
                    <label htmlFor="cardName" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Cardholder Name *
                    </label>
                    <input
                      id="cardName"
                      type="text"
                      value={card.name}
                      onChange={(e) => updateCard("name", e.target.value)}
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Expiry */}
                    <div>
                      <label htmlFor="cardExpiry" className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Expiry Date *
                      </label>
                      <input
                        id="cardExpiry"
                        type="text"
                        value={card.expiry}
                        onChange={(e) => updateCard("expiry", formatExpiry(e.target.value))}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* CVV */}
                    <div>
                      <label htmlFor="cardCvv" className="mb-1.5 block text-xs font-semibold text-slate-700">
                        CVV *
                      </label>
                      <div className="relative">
                        <input
                          id="cardCvv"
                          type="password"
                          value={card.cvv}
                          onChange={(e) => updateCard("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
                          placeholder="•••"
                          maxLength={4}
                          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <span className="material-symbols-outlined absolute top-1/2 right-4 -translate-y-1/2 text-lg text-slate-300" aria-hidden="true">
                          lock
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing address */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <label className="flex cursor-pointer items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={billingAddressSame}
                      onChange={(e) => setBillingAddressSame(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-slate-600">
                      Billing address is the same as shipping address
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* PayPal / Apple Pay / Bank message */}
            {method !== "card" && (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
                <span className="material-symbols-outlined mb-3 text-5xl text-primary" aria-hidden="true">
                  {PAYMENT_METHODS.find((m) => m.key === method)?.icon}
                </span>
                <h3 className="mb-2 text-base font-bold text-slate-900">
                  {PAYMENT_METHODS.find((m) => m.key === method)?.label}
                </h3>
                <p className="mb-4 text-sm text-slate-500">
                  You will be redirected to {PAYMENT_METHODS.find((m) => m.key === method)?.label} to
                  complete your payment securely.
                </p>
              </div>
            )}
          </div>

          {/* ── Right: Order Summary ─────────────────────────────────── */}
          <div className="w-full lg:w-[380px]">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-4 text-base font-extrabold text-slate-900">
                Order Summary
              </h3>

              {/* Cart items */}
              <div className="mb-5 space-y-3">
                {MOCK_CART_ITEMS.map((item) => (
                  <div key={item.productId} className="flex gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="truncate text-xs font-semibold text-slate-800">{item.name}</h4>
                      <p className="text-[10px] text-slate-400">
                        {item.variant} × {item.quantity}
                      </p>
                      <p className="text-xs font-bold text-slate-700">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
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
                href="/payment/confirmation"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">lock</span>
                Pay ${summary.total.toFixed(2)}
              </Link>

              {/* Trust badges */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">lock</span>
                  256-bit SSL
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">verified_user</span>
                  PCI Compliant
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">shield</span>
                  Fraud Protection
                </span>
              </div>

              {/* Accepted cards */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {["VISA", "MASTERCARD", "AMEX", "PAYPAL"].map((badge) => (
                  <span
                    key={badge}
                    className="rounded border border-slate-200 px-2 py-0.5 text-[9px] font-semibold text-slate-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
