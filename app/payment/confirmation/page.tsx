/* ────────────────────────────────────────────────────────────────────────────
 * app/payment/confirmation/page.tsx  —  Payment Confirmation Page
 *
 * ┌──────────────────────────────────────────────────┐
 * │  Step Indicator  (Checkout ✓ → Payment ✓ → ✓)   │
 * │  ┌──────────────────────────────────────────┐    │
 * │  │  ✓  Success!                             │    │
 * │  │  Order Number                            │    │
 * │  │  Order Details                           │    │
 * │  │  Estimated Delivery                      │    │
 * │  │  Actions                                 │    │
 * │  └──────────────────────────────────────────┘    │
 * └──────────────────────────────────────────────────┘
 * ──────────────────────────────────────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StepIndicator from "@/components/ui/StepIndicator";
import { MOCK_CART_ITEMS, MOCK_ORDER_SUMMARY } from "@/lib/constants";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Payment Confirmation" },
];

const CHECKOUT_STEPS = [
  { label: "Checkout", icon: "local_shipping" },
  { label: "Payment", icon: "credit_card" },
  { label: "Confirmation", icon: "check_circle" },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function PaymentConfirmationPage() {
  const summary = MOCK_ORDER_SUMMARY;
  const orderNumber = "MS-2026-02-22-7842";

  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <StepIndicator steps={CHECKOUT_STEPS} currentStep={3} />

        <div className="mx-auto max-w-[720px]">
          {/* ── Success Card ───────────────────────────────────────────── */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10">
            {/* Animated check circle */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 sm:h-24 sm:w-24">
              <span className="material-symbols-outlined filled text-4xl text-primary sm:text-5xl" aria-hidden="true">
                check_circle
              </span>
            </div>

            <h1 className="mb-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
              Payment Successful!
            </h1>
            <p className="mb-1 text-sm text-slate-500">
              Thank you for your order. Your payment has been processed successfully.
            </p>
            <p className="mb-6 text-sm text-slate-500">
              A confirmation email has been sent to your registered email address.
            </p>

            {/* Order number badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5">
              <span className="material-symbols-outlined text-lg text-primary" aria-hidden="true">
                receipt_long
              </span>
              <span className="text-sm font-bold text-slate-700">
                Order: <span className="text-primary">{orderNumber}</span>
              </span>
            </div>

            {/* Order details */}
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-left sm:p-6">
              <h3 className="mb-4 text-sm font-bold text-slate-800">Order Details</h3>

              {/* Items */}
              <div className="mb-4 space-y-3">
                {MOCK_CART_ITEMS.map((item) => (
                  <div key={item.productId} className="flex gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="truncate text-sm font-semibold text-slate-800">{item.name}</h4>
                      <p className="text-[10px] text-slate-400">
                        {item.variant} × {item.quantity}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-slate-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-1.5 border-t border-slate-200 pt-3">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Subtotal</span>
                  <span>${summary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Shipping</span>
                  <span>${summary.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Tax</span>
                  <span>${summary.tax.toFixed(2)}</span>
                </div>
                {summary.discount < 0 && (
                  <div className="flex justify-between text-xs text-green-600">
                    <span>Discount</span>
                    <span>{summary.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-slate-200 pt-2 text-sm font-extrabold text-slate-900">
                  <span>Total Paid</span>
                  <span className="text-primary">${summary.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Delivery info */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  icon: "local_shipping",
                  label: "Estimated Delivery",
                  value: "Mar 01 – Mar 05, 2026",
                },
                {
                  icon: "credit_card",
                  label: "Payment Method",
                  value: "•••• •••• •••• 3456",
                },
                {
                  icon: "location_on",
                  label: "Shipping To",
                  value: "New York, NY 10001",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 text-left"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <span className="material-symbols-outlined text-lg text-primary" aria-hidden="true">
                      {info.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      {info.label}
                    </p>
                    <p className="text-xs font-bold text-slate-700">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/shop"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  shopping_bag
                </span>
                Continue Shopping
              </Link>
              <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-8 py-3.5 text-sm font-bold text-slate-600 transition-all hover:border-primary hover:text-primary">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  local_shipping
                </span>
                Track Order
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-8 py-3.5 text-sm font-bold text-slate-600 transition-all hover:border-primary hover:text-primary">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  download
                </span>
                Download Invoice
              </button>
            </div>

            {/* Help note */}
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg text-blue-500" aria-hidden="true">
                  info
                </span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-blue-800">Need Help?</p>
                  <p className="text-xs text-blue-600">
                    If you have any questions about your order, please visit our{" "}
                    <Link href="/help" className="font-semibold underline">
                      Help Center
                    </Link>{" "}
                    or contact us at{" "}
                    <a href="mailto:support@mintshop.com" className="font-semibold underline">
                      support@mintshop.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
