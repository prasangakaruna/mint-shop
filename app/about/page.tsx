/* ────────────────────────────────────────────────────────────────────────────
 * app/about/page.tsx  —  About Us Page
 * ──────────────────────────────────────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "About Us | Mint Shop",
  description:
    "Learn about Mint Shop — your trusted global marketplace connecting buyers with verified suppliers across 190+ countries.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About Us" },
];

const STATS = [
  { value: "10M+", label: "Active Buyers" },
  { value: "190+", label: "Countries Served" },
  { value: "500K+", label: "Verified Sellers" },
  { value: "99.2%", label: "Satisfaction Rate" },
];

const VALUES = [
  {
    icon: "handshake",
    title: "Trust & Transparency",
    description:
      "Every transaction is protected by our Trade Assurance program. We verify sellers, secure payments, and guarantee quality — so you can buy with confidence.",
  },
  {
    icon: "public",
    title: "Global Reach, Local Feel",
    description:
      "We connect buyers and sellers across 190+ countries while providing localized support, currency options, and shipping solutions tailored to every market.",
  },
  {
    icon: "lightbulb",
    title: "Innovation First",
    description:
      "From AI-powered product matching to real-time supply chain tracking, we invest in technology that makes global trade simpler, faster, and smarter.",
  },
  {
    icon: "eco",
    title: "Sustainability",
    description:
      "We're committed to reducing our environmental footprint through carbon-neutral shipping options, eco-friendly packaging initiatives, and sustainable supplier programs.",
  },
  {
    icon: "groups",
    title: "Community Driven",
    description:
      "Our Mint Club loyalty program and seller support ecosystem create a thriving community where businesses of all sizes can grow and succeed together.",
  },
  {
    icon: "shield",
    title: "Buyer Protection",
    description:
      "Full refund guarantees, dispute resolution, and 24/7 customer support ensure every buyer is protected from the moment they browse to the moment they receive their order.",
  },
];

const MILESTONES = [
  { year: "2018", title: "Founded", description: "Mint Shop was born with a mission to democratize global trade." },
  { year: "2019", title: "100K Sellers", description: "Reached 100,000 verified sellers across 50 countries." },
  { year: "2020", title: "Trade Assurance", description: "Launched our buyer protection & Trade Assurance program." },
  { year: "2021", title: "1M Buyers", description: "Crossed 1 million active buyers on the platform." },
  { year: "2023", title: "AI Integration", description: "Introduced AI-powered search, recommendations & fraud detection." },
  { year: "2025", title: "10M+ Users", description: "Serving over 10 million buyers in 190+ countries worldwide." },
];

const TEAM = [
  { name: "Alex Chen", role: "CEO & Co-Founder", icon: "person" },
  { name: "Sarah Williams", role: "CTO", icon: "person" },
  { name: "Raj Patel", role: "VP of Operations", icon: "person" },
  { name: "Maria Santos", role: "Head of Design", icon: "person" },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function AboutPage() {
  return (
    <PageShell>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero-gradient relative overflow-hidden py-16 text-white sm:py-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />

        <div className="relative mx-auto max-w-[1400px] px-3 text-center sm:px-4 lg:px-8">
          <span className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Our Story
          </span>
          <h1 className="mx-auto mb-4 max-w-2xl text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Building the Future of
            <br />
            <span className="text-primary">Global Commerce</span>
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Mint Shop connects millions of buyers with verified suppliers worldwide —
            making quality products accessible, affordable, and trustworthy.
          </p>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="relative -mt-8 px-3 sm:-mt-10 sm:px-4 lg:px-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:rounded-2xl sm:p-6"
            >
              <p className="text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-3 py-12 sm:px-4 sm:py-16 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="flex-1">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-primary">
              Our Mission
            </span>
            <h2 className="mb-4 text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl">
              Empowering Businesses,
              <br />
              Connecting the World
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              We believe that every business — from a solo entrepreneur to a Fortune 500 company —
              deserves access to a global supply chain. Mint Shop removes barriers, simplifies logistics,
              and creates trust between buyers and sellers across borders.
            </p>
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              Our platform combines cutting-edge technology with human expertise to deliver a seamless
              sourcing experience. Whether you&apos;re looking for a single product or placing a bulk order,
              we&apos;re here to make it happen.
            </p>
          </div>
          <div className="w-full max-w-md lg:w-[440px]">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-50 p-8 sm:p-10">
              <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-primary/10" />
              <Image
                src="/splash.png"
                alt="Mint Shop"
                width={180}
                height={90}
                className="relative z-10 mb-6 h-10 w-auto"
              />
              <blockquote className="relative z-10 text-sm italic leading-relaxed text-slate-600 sm:text-base">
                &ldquo;Our vision is a world where anyone, anywhere, can trade with anyone, everywhere —
                safely, efficiently, and sustainably.&rdquo;
              </blockquote>
              <p className="relative z-10 mt-3 text-xs font-bold text-slate-800">
                — Alex Chen, CEO &amp; Co-Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-primary">
              What We Stand For
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {VALUES.map((val) => (
              <article
                key={val.title}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary hover:shadow-md sm:rounded-2xl sm:p-6"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">
                    {val.icon}
                  </span>
                </div>
                <h3 className="mb-2 text-sm font-bold text-slate-900 sm:text-base">{val.title}</h3>
                <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">{val.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-3 py-12 sm:px-4 sm:py-16 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-primary">
            Our Journey
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Key Milestones</h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-slate-200 sm:left-1/2 sm:-translate-x-1/2" />

          {MILESTONES.map((ms, i) => (
            <div
              key={ms.year}
              className={`relative mb-8 flex items-start gap-4 sm:mb-10 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-white sm:left-1/2" />

              {/* Content */}
              <div className={`ml-8 flex-1 sm:ml-0 ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                <span className="mb-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                  {ms.year}
                </span>
                <h4 className="text-sm font-bold text-slate-900">{ms.title}</h4>
                <p className="text-xs text-slate-500 sm:text-sm">{ms.description}</p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden flex-1 sm:block" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-primary">
              Leadership
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Meet Our Team</h2>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary hover:shadow-md sm:rounded-2xl sm:p-6"
              >
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
                    {member.icon}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{member.name}</h4>
                <p className="text-xs text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="px-3 py-12 sm:px-4 sm:py-16 lg:px-8">
        <div className="premium-gradient mx-auto max-w-[1400px] overflow-hidden rounded-2xl p-8 text-center shadow-2xl sm:rounded-3xl sm:p-14">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 h-56 w-56 rounded-full bg-primary/20 blur-[80px]" />
          <h2 className="relative z-10 mb-3 text-xl font-extrabold text-white sm:text-3xl">
            Ready to Start Sourcing?
          </h2>
          <p className="relative z-10 mx-auto mb-6 max-w-lg text-sm text-slate-300">
            Join millions of buyers who trust Mint Shop for quality products, verified suppliers,
            and unbeatable prices.
          </p>
          <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/auth/register"
              className="rounded-xl bg-primary px-8 py-3.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Create Free Account
            </Link>
            <Link
              href="/shop"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
