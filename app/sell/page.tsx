/* ────────────────────────────────────────────────────────────────────────────
 * app/sell/page.tsx  —  Become a Seller Page
 * ──────────────────────────────────────────────────────────────────────────── */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Become a Seller" },
];

const STATS = [
  { value: "10M+", label: "Active Buyers", icon: "groups" },
  { value: "190+", label: "Countries", icon: "public" },
  { value: "$2B+", label: "Annual GMV", icon: "payments" },
  { value: "24/7", label: "Seller Support", icon: "headset_mic" },
];

const BENEFITS = [
  {
    icon: "storefront",
    title: "Free Store Setup",
    description:
      "Launch your online store in minutes with zero upfront costs. Our intuitive dashboard guides you through every step.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: "public",
    title: "Global Reach",
    description:
      "Access millions of buyers across 190+ countries. Our platform handles currency conversion, language, and local payment methods.",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: "verified_user",
    title: "Trade Assurance",
    description:
      "Build buyer confidence with our Trade Assurance badge. Verified sellers see up to 3x more orders and higher conversion rates.",
    color: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: "local_shipping",
    title: "Integrated Logistics",
    description:
      "Ship worldwide with our logistics partners at discounted rates. Real-time tracking and automated customs documentation included.",
    color: "bg-orange-50 text-orange-500",
  },
  {
    icon: "analytics",
    title: "Smart Analytics",
    description:
      "Access real-time sales dashboards, buyer insights, and market trends. Make data-driven decisions to grow your business.",
    color: "bg-purple-50 text-purple-500",
  },
  {
    icon: "campaign",
    title: "Marketing Tools",
    description:
      "Boost visibility with sponsored listings, flash deals, and keyword advertising. Our AI optimizes ad spend for maximum ROI.",
    color: "bg-amber-50 text-amber-500",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Create Your Account",
    description: "Sign up for free in under 2 minutes. Provide basic business information to get started.",
    icon: "person_add",
  },
  {
    step: "02",
    title: "Set Up Your Store",
    description: "Customize your storefront, add your logo, and configure shipping & payment preferences.",
    icon: "store",
  },
  {
    step: "03",
    title: "List Your Products",
    description: "Upload product photos, set prices, and write descriptions. Our AI helps optimize listings.",
    icon: "inventory_2",
  },
  {
    step: "04",
    title: "Start Selling",
    description: "Go live and start receiving orders from buyers worldwide. We handle the rest.",
    icon: "rocket_launch",
  },
];

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for individuals and new sellers getting started.",
    features: [
      "Up to 50 product listings",
      "Basic analytics dashboard",
      "Standard customer support",
      "3.9% + $0.30 per transaction",
      "Basic store customization",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "For growing businesses ready to scale their operations.",
    features: [
      "Unlimited product listings",
      "Advanced analytics & reports",
      "Priority customer support",
      "2.5% + $0.25 per transaction",
      "Full store customization",
      "Sponsored listings (5 free/mo)",
      "Trade Assurance badge",
      "Bulk listing tools",
    ],
    cta: "Start 14-Day Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large businesses with high-volume needs.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom commission rates",
      "API access & integrations",
      "White-label storefront",
      "Advanced fraud protection",
      "SLA guarantees",
      "Custom onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "Mint Shop transformed our business. We went from local to global in just 3 months, tripling our revenue.",
    author: "Jessica Lee",
    role: "Owner, CraftWorks Studio",
    rating: 5,
  },
  {
    quote: "The seller tools are incredibly intuitive. Analytics dashboard alone saved us hours of manual reporting each week.",
    author: "Marcus Brown",
    role: "Operations Manager, TechGear Co.",
    rating: 5,
  },
  {
    quote: "Trade Assurance badge increased our conversion rate by 47%. Buyers trust us more and we close more deals.",
    author: "Aisha Khan",
    role: "Founder, Luxe Accessories",
    rating: 5,
  },
];

const FAQ = [
  {
    q: "How much does it cost to sell on Mint Shop?",
    a: "Our Starter plan is completely free — no monthly fees, no setup costs. You only pay a small transaction fee when you make a sale. Professional and Enterprise plans offer lower rates and more features.",
  },
  {
    q: "How long does seller verification take?",
    a: "Basic verification is instant when you sign up. Full Trade Assurance verification takes 1–3 business days and requires business documentation. Verified sellers get a trust badge that significantly boosts buyer confidence.",
  },
  {
    q: "Can I sell internationally?",
    a: "Absolutely! Mint Shop supports sellers from over 80 countries and buyers from 190+ countries. We handle currency conversion, and our logistics partners offer competitive international shipping rates.",
  },
  {
    q: "What kind of support do sellers receive?",
    a: "All sellers get access to our Help Center, community forums, and email support. Professional plan sellers get priority support, and Enterprise sellers get a dedicated account manager with phone support.",
  },
  {
    q: "How and when do I get paid?",
    a: "Payments are processed within 3–5 business days after order delivery confirmation. You can choose bank transfer, PayPal, or Payoneer. Professional sellers can enable instant payouts for a small fee.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function SellPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageShell>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero-gradient relative overflow-hidden py-16 text-white sm:py-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />

        <div className="relative mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <span className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                Sell on Mint Shop
              </span>
              <h1 className="mb-4 text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Grow Your Business
                <br />
                <span className="text-primary">Reach Millions of Buyers</span>
              </h1>
              <p className="mb-6 text-sm leading-relaxed text-slate-300 sm:text-base">
                Join 500,000+ verified sellers on the world&apos;s fastest-growing marketplace.
                Zero setup fees. Global reach. Powerful tools. Start selling today.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/auth/register?type=seller"
                  className="rounded-xl bg-primary px-8 py-3.5 text-center text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-transform hover:scale-105"
                >
                  Start Selling — It&apos;s Free
                </Link>
                <a
                  href="#how-it-works"
                  className="rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-center text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20"
                >
                  How It Works
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid w-full max-w-sm grid-cols-2 gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                >
                  <span className="material-symbols-outlined mb-1 text-2xl text-primary" aria-hidden="true">
                    {stat.icon}
                  </span>
                  <p className="text-xl font-extrabold sm:text-2xl">{stat.value}</p>
                  <p className="text-[10px] text-slate-400 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-3 py-12 sm:px-4 sm:py-16 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-primary">
            Why Sell With Us
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
            Everything You Need to Succeed
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary hover:shadow-md sm:rounded-2xl sm:p-6"
            >
              <div
                className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${benefit.color} transition-transform group-hover:scale-110`}
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="mb-2 text-sm font-bold text-slate-900 sm:text-base">{benefit.title}</h3>
              <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-primary">
              Getting Started
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              4 Simple Steps to Start Selling
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="relative">
                {/* Connector line (desktop) */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="absolute top-8 right-0 hidden h-0.5 w-full translate-x-1/2 bg-slate-200 lg:block" />
                )}
                <div className="relative z-10 flex flex-col items-center rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:rounded-2xl sm:p-6">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <span className="material-symbols-outlined text-2xl text-primary" aria-hidden="true">
                      {step.icon}
                    </span>
                  </div>
                  <span className="mb-1 text-xs font-bold text-primary">Step {step.step}</span>
                  <h3 className="mb-2 text-sm font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-3 py-12 sm:px-4 sm:py-16 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-primary">
            Pricing
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
            Plans for Every Business Size
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-xl border-2 bg-white p-6 shadow-sm sm:rounded-2xl sm:p-8 ${
                plan.highlighted
                  ? "border-primary shadow-md shadow-primary/10"
                  : "border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 rounded-bl-xl bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-900">
                  Most Popular
                </div>
              )}

              <h3 className="mb-1 text-lg font-bold text-slate-900">{plan.name}</h3>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                {plan.period && <span className="text-sm text-slate-400">{plan.period}</span>}
              </div>
              <p className="mb-5 text-xs text-slate-500">{plan.description}</p>

              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="material-symbols-outlined mt-0.5 text-sm text-primary" aria-hidden="true">
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-xl py-3 text-sm font-bold transition-all ${
                  plan.highlighted
                    ? "bg-primary text-slate-900 shadow-lg shadow-primary/20 hover:brightness-110"
                    : "border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-primary">
              Seller Success Stories
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              Trusted by 500K+ Sellers
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.author}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-2xl sm:p-6"
              >
                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }, (_, i) => (
                    <span key={i} className="material-symbols-outlined filled text-sm text-amber-400" aria-hidden="true">
                      star
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-sm italic leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{t.author}</p>
                    <p className="text-[10px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-3 py-12 sm:px-4 sm:py-16 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="pr-4 text-sm font-bold text-slate-800">{item.q}</span>
                <span
                  className={`material-symbols-outlined shrink-0 text-lg text-slate-400 transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i ? "max-h-60 pb-4" : "max-h-0"
                }`}
              >
                <p className="px-5 text-sm leading-relaxed text-slate-500">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="px-3 pb-12 sm:px-4 sm:pb-16 lg:px-8">
        <div className="premium-gradient mx-auto max-w-[1400px] overflow-hidden rounded-2xl p-8 text-center shadow-2xl sm:rounded-3xl sm:p-14">
          <Image
            src="/splash-dark.png"
            alt="Mint Shop"
            width={180}
            height={66}
            className="relative z-10 mx-auto mb-5 h-10 w-auto sm:h-12"
          />
          <h2 className="relative z-10 mb-3 text-xl font-extrabold text-white sm:text-3xl">
            Ready to Start Your Selling Journey?
          </h2>
          <p className="relative z-10 mx-auto mb-6 max-w-lg text-sm text-slate-300">
            Join thousands of successful sellers who grow their business with Mint Shop every day.
            It takes less than 2 minutes to get started.
          </p>
          <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/auth/register?type=seller"
              className="rounded-xl bg-primary px-8 py-3.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Create Seller Account — Free
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
