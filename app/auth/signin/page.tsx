/* ────────────────────────────────────────────────────────────────────────────
 * app/auth/signin/page.tsx  —  Sign In Page
 * ──────────────────────────────────────────────────────────────────────────── */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <PageShell>
      <section className="flex min-h-[calc(100vh-300px)] items-center justify-center px-3 py-10 sm:px-4 lg:px-8">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {/* Logo */}
            <div className="mb-6 text-center">
              <Image
                src="/splash.png"
                alt="Mint Shop"
                width={140}
                height={70}
                className="mx-auto mb-4 h-9 w-auto"
              />
              <h1 className="text-xl font-extrabold text-slate-900">Welcome Back</h1>
              <p className="mt-1 text-xs text-slate-400">
                Sign in to your Mint Shop account
              </p>
            </div>

            {/* Social login */}
            <div className="mb-5 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  public
                </span>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  phone_iphone
                </span>
                Apple
              </button>
            </div>

            <div className="relative mb-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-xs text-slate-400">or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/account";
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="signInEmail" className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="signInEmail"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label htmlFor="signInPassword" className="text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <Link href="#" className="text-[10px] font-semibold text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="signInPassword"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 pr-11 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span className="text-xs text-slate-500">Remember me for 30 days</span>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                Sign In
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-slate-400">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="font-semibold text-primary hover:underline">
                Create one free
              </Link>
            </p>
          </div>

          {/* Trust */}
          <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs" aria-hidden="true">lock</span>
              256-bit SSL
            </span>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Use</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
