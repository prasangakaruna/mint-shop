/* ────────────────────────────────────────────────────────────────────────────
 * app/account/page.tsx  —  Account Dashboard
 *
 * Tabbed account page with:
 *  • Profile overview + quick stats
 *  • Order history
 *  • Wishlist
 *  • Address book
 *  • Account settings
 * ──────────────────────────────────────────────────────────────────────────── */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "My Account" }];

/* ── Mock data ──────────────────────────────────────────────────────────── */

const USER = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 000-0000",
  avatar: null,
  memberSince: "Jan 2024",
  tier: "Mint Club Gold",
};

const QUICK_STATS = [
  { icon: "shopping_bag", label: "Total Orders", value: "28" },
  { icon: "favorite", label: "Wishlist", value: "12" },
  { icon: "star", label: "Reviews Given", value: "9" },
  { icon: "local_offer", label: "Coupons", value: "3" },
];

const ORDERS = [
  {
    id: "MS-2026-02-22-7842",
    date: "Feb 22, 2026",
    total: "$285.05",
    status: "Delivered",
    statusColor: "bg-green-50 text-green-600",
    items: 4,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBd_p5zWd4sqEYhSTgMoyAGuZP7thJLXwLIgRBU4xAPnTG4S-jIwTeGTwP02RlyUVJWIKIp3sqkS-Xr87i3sZGfbCcXD0iGb00tgcbmgndvodITiaqdbw0UiVVk8UjdjTNySpmkk2J1WuA5vv0eyjHcWU72VtxXCaoo51uZqRyb0IiViNxaGT-raPQqDfgVtxIthk5L2Fy-xp0loLV2Kc5GVV6zMfMRjkW-nclR6IqR176UVgAm69zm0oOVWrq5dkJF6--IF3f1bfNg",
  },
  {
    id: "MS-2026-02-10-4219",
    date: "Feb 10, 2026",
    total: "$120.00",
    status: "Shipped",
    statusColor: "bg-blue-50 text-blue-600",
    items: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZZRYfweQdgW1gqpfcBMkXSw3oCdcOWstmKqLSN-DZLVDJAXNfPZEesbY9igCh-VRd0phEXJJyZn8FNj-xERClm_2Ei1O69d7mzqRIyF59UqWnU9mu4JUk3kUdalsa-wUPcz58yRwM3znfNo3MLyWv3an3YRMcNiKj5WbhA1dXEt42rj4F5_oy_XTrmTs4szQlO3YRdGaSQbynK-cS1v5Ih5oYtT4qaWlCtzt6QUnwDnvxZ8gU6RH9Xv4MEZnkCwNRgcFwGp-r5CX6",
  },
  {
    id: "MS-2026-01-25-8831",
    date: "Jan 25, 2026",
    total: "$68.50",
    status: "Delivered",
    statusColor: "bg-green-50 text-green-600",
    items: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCiREC2fLIDi5xkegQa__ojOl7jTNZ3yhZgDJ--oHkR-Bky4xxIp3PJFBmZalnv2IaiHbG3-B_Hyo0KC1dFPji8SShoGsaCCEKLnP6h7tztblba5wMkEMiVdD8jESZasfnxoT6Nr8d4Hej6ZgAO6kfK9UELrMgQaEWK8n-3GSYqDAjMfonMnFAv17RqCOA-MjV2qRRGXsqlajCU4uSvajnVG2nyEk4Qchuiq_EkcSHvkGZ3VALoiEmyWxL5uX_Wlju0KDactUkc68l",
  },
  {
    id: "MS-2026-01-12-1105",
    date: "Jan 12, 2026",
    total: "$45.00",
    status: "Cancelled",
    statusColor: "bg-red-50 text-red-500",
    items: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEAPWTiRB1G2wS2Vrt9393fmD4riCptAlQBODLhur5iEF6JozNNIBPi6cgGU9ufgLA28IgYkEokDgsGKC-jmTqfil6IViO83zp-LIXVAC2wO7bpG5BRfCE0tQCe2K8Ilzh9VFapW5kbWa8ArPwkIRb03M5nmeAR8bN8jMFN_E0zBXMkUkwjflTHebiQF5_crl1OiHMGKKfrS3LizwhhfFV1KWK2hhG3wt9tLHAVMeGFFjTQvXo5oJahcwXtmrto_yvoTrHaTFzvnOZ",
  },
];

const ADDRESSES = [
  {
    id: "addr-1",
    label: "Home",
    name: "John Doe",
    line1: "123 Main Street, Apt 4B",
    city: "New York, NY 10001",
    country: "United States",
    phone: "+1 (555) 000-0000",
    isDefault: true,
  },
  {
    id: "addr-2",
    label: "Office",
    name: "John Doe",
    line1: "456 Business Ave, Floor 12",
    city: "New York, NY 10018",
    country: "United States",
    phone: "+1 (555) 111-1111",
    isDefault: false,
  },
];

type Tab = "overview" | "orders" | "wishlist" | "addresses" | "settings";

const TABS: { key: Tab; label: string; icon: string }[] = [
  { key: "overview", label: "Overview", icon: "dashboard" },
  { key: "orders", label: "Orders", icon: "shopping_bag" },
  { key: "wishlist", label: "Wishlist", icon: "favorite" },
  { key: "addresses", label: "Addresses", icon: "location_on" },
  { key: "settings", label: "Settings", icon: "settings" },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [settings, setSettings] = useState({
    name: USER.name,
    email: USER.email,
    phone: USER.phone,
    newsletter: true,
    orderUpdates: true,
    promotions: false,
  });

  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* ── Sidebar ────────────────────────────────────────────── */}
          <aside className="w-full lg:w-[260px]">
            {/* User card */}
            <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {USER.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">{USER.name}</h2>
                  <p className="text-[10px] text-slate-400">{USER.email}</p>
                  <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-bold text-amber-600">
                    <span className="material-symbols-outlined filled text-[10px]" aria-hidden="true">
                      star
                    </span>
                    {USER.tier}
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400">
                Member since {USER.memberSince}
              </p>
            </div>

            {/* Nav tabs — horizontal scroll on mobile, vertical on desktop */}
            <nav className="no-scrollbar flex gap-1 overflow-x-auto lg:flex-col" aria-label="Account navigation">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors lg:w-full ${
                    activeTab === tab.key
                      ? "bg-primary/10 text-primary"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                  }`}
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              ))}

              <Link
                href="/sell/onboarding"
                className="flex shrink-0 items-center gap-2.5 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 lg:mt-2 lg:w-full"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  storefront
                </span>
                Become a Seller
              </Link>
            </nav>
          </aside>

          {/* ── Main Content ───────────────────────────────────────── */}
          <div className="flex-1">
            {/* ── Overview ─────────────────────────────────────────── */}
            {activeTab === "overview" && (
              <div className="space-y-5">
                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                  {QUICK_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-2xl"
                    >
                      <span className="material-symbols-outlined mb-2 text-xl text-primary" aria-hidden="true">
                        {stat.icon}
                      </span>
                      <p className="text-xl font-extrabold text-slate-900">{stat.value}</p>
                      <p className="text-[10px] font-semibold text-slate-400 sm:text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Recent orders */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">Recent Orders</h3>
                    <button
                      onClick={() => setActiveTab("orders")}
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {ORDERS.slice(0, 3).map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition-colors hover:bg-slate-50"
                      >
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-50">
                          <Image src={order.image} alt="" fill sizes="48px" className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-xs font-semibold text-slate-800">{order.id}</p>
                          <p className="text-[10px] text-slate-400">{order.date} · {order.items} item{order.items > 1 ? "s" : ""}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-slate-800">{order.total}</p>
                          <span className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-bold ${order.statusColor}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                  {[
                    { icon: "local_shipping", label: "Track Order", href: "#" },
                    { icon: "replay", label: "Returns", href: "#" },
                    { icon: "headset_mic", label: "Support", href: "/help" },
                    { icon: "redeem", label: "Gift Cards", href: "#" },
                  ].map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-primary hover:shadow-md"
                    >
                      <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">
                        {action.icon}
                      </span>
                      <span className="text-xs font-semibold text-slate-600">{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ── Orders ───────────────────────────────────────────── */}
            {activeTab === "orders" && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="mb-5 text-lg font-bold text-slate-900">Order History</h3>
                <div className="space-y-3">
                  {ORDERS.map((order) => (
                    <div
                      key={order.id}
                      className="flex flex-col gap-3 rounded-xl border border-slate-100 p-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-50">
                        <Image src={order.image} alt="" fill sizes="64px" className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-800">{order.id}</p>
                        <p className="text-xs text-slate-400">
                          {order.date} · {order.items} item{order.items > 1 ? "s" : ""}
                        </p>
                        <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-base font-extrabold text-slate-900">{order.total}</span>
                        <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-primary hover:text-primary">
                          Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Wishlist ─────────────────────────────────────────── */}
            {activeTab === "wishlist" && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="mb-5 text-lg font-bold text-slate-900">My Wishlist</h3>
                <div className="flex flex-col items-center justify-center py-10">
                  <span className="material-symbols-outlined mb-3 text-5xl text-slate-200" aria-hidden="true">
                    favorite
                  </span>
                  <p className="mb-1 text-sm font-semibold text-slate-500">Your wishlist is empty</p>
                  <p className="mb-4 text-xs text-slate-400">Save items you love for later</p>
                  <Link
                    href="/shop"
                    className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-slate-900 transition-all hover:brightness-110"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            )}

            {/* ── Addresses ────────────────────────────────────────── */}
            {activeTab === "addresses" && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">Saved Addresses</h3>
                  <button className="flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-slate-900 transition-all hover:brightness-110">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">add</span>
                    Add New
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {ADDRESSES.map((addr) => (
                    <div
                      key={addr.id}
                      className={`relative rounded-xl border-2 p-4 ${
                        addr.isDefault ? "border-primary bg-primary/5" : "border-slate-200"
                      }`}
                    >
                      {addr.isDefault && (
                        <span className="absolute top-3 right-3 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-slate-900">
                          Default
                        </span>
                      )}
                      <div className="mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
                          location_on
                        </span>
                        <span className="text-sm font-bold text-slate-800">{addr.label}</span>
                      </div>
                      <p className="text-sm text-slate-600">{addr.name}</p>
                      <p className="text-xs text-slate-500">{addr.line1}</p>
                      <p className="text-xs text-slate-500">{addr.city}</p>
                      <p className="text-xs text-slate-500">{addr.country}</p>
                      <p className="mt-1 text-xs text-slate-400">{addr.phone}</p>
                      <div className="mt-3 flex gap-2">
                        <button className="text-xs font-semibold text-primary hover:underline">Edit</button>
                        {!addr.isDefault && (
                          <button className="text-xs font-semibold text-slate-400 hover:text-red-500">Delete</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Settings ─────────────────────────────────────────── */}
            {activeTab === "settings" && (
              <div className="space-y-5">
                {/* Profile settings */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="mb-5 text-lg font-bold text-slate-900">Profile Settings</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <div>
                      <label htmlFor="settingsName" className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Full Name
                      </label>
                      <input
                        id="settingsName"
                        type="text"
                        value={settings.name}
                        onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="settingsEmail" className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Email Address
                      </label>
                      <input
                        id="settingsEmail"
                        type="email"
                        value={settings.email}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="settingsPhone" className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Phone Number
                      </label>
                      <input
                        id="settingsPhone"
                        type="tel"
                        value={settings.phone}
                        onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="settingsPassword" className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Password
                      </label>
                      <div className="flex gap-2">
                        <input
                          id="settingsPassword"
                          type="password"
                          value="••••••••"
                          readOnly
                          className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800"
                        />
                        <button className="rounded-lg border border-slate-200 px-4 py-3 text-xs font-semibold text-slate-600 hover:border-primary hover:text-primary">
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="mt-5 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-slate-900 transition-all hover:brightness-110">
                    Save Changes
                  </button>
                </div>

                {/* Notification settings */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="mb-5 text-lg font-bold text-slate-900">Notification Preferences</h3>
                  <div className="space-y-4">
                    {[
                      { key: "newsletter", label: "Newsletter", desc: "Weekly curated product picks and trends" },
                      { key: "orderUpdates", label: "Order Updates", desc: "Shipping, delivery, and status changes" },
                      { key: "promotions", label: "Promotions", desc: "Flash deals, coupons, and special offers" },
                    ].map((pref) => (
                      <label key={pref.key} className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-100 p-4 transition-colors hover:bg-slate-50">
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{pref.label}</p>
                          <p className="text-xs text-slate-400">{pref.desc}</p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={settings[pref.key as keyof typeof settings] as boolean}
                            onChange={(e) => setSettings({ ...settings, [pref.key]: e.target.checked })}
                            className="peer sr-only"
                          />
                          <div className="h-6 w-11 rounded-full bg-slate-200 transition-colors peer-checked:bg-primary" />
                          <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Danger zone */}
                <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5 sm:p-6">
                  <h3 className="mb-2 text-sm font-bold text-red-700">Danger Zone</h3>
                  <p className="mb-4 text-xs text-red-500">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <button className="rounded-lg border border-red-300 px-5 py-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-100">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
