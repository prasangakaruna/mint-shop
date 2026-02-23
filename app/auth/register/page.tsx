/* ────────────────────────────────────────────────────────────────────────────
 * app/auth/register/page.tsx  —  Register Page
 * ──────────────────────────────────────────────────────────────────────────── */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  /* Simple password strength indicator */
  const strength =
    form.password.length === 0
      ? 0
      : form.password.length < 6
        ? 1
        : form.password.length < 10
          ? 2
          : 3;
  const strengthLabel = ["", "Weak", "Good", "Strong"][strength];
  const strengthColor = ["", "bg-red-400", "bg-amber-400", "bg-green-500"][strength];

  return (
    <PageShell>
      <section className="flex min-h-[calc(100vh-300px)] items-center justify-center px-3 py-10 sm:px-4 lg:px-8">
        <div className="w-full max-w-md">
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
              <h1 className="text-xl font-extrabold text-slate-900">Create Account</h1>
              <p className="mt-1 text-xs text-slate-400">
                Join millions of buyers on Mint Shop
              </p>
            </div>

            {/* Social */}
            <div className="mb-5 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">public</span>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">phone_iphone</span>
                Apple
              </button>
            </div>

            <div className="relative mb-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-xs text-slate-400">or register with email</span>
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
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="regFirstName" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    First Name
                  </label>
                  <input
                    id="regFirstName"
                    type="text"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    placeholder="John"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="regLastName" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Last Name
                  </label>
                  <input
                    id="regLastName"
                    type="text"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="regEmail" className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="regEmail"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="regPassword" className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="regPassword"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    placeholder="Min. 8 characters"
                    required
                    minLength={8}
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
                {form.password.length > 0 && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex flex-1 gap-1">
                      {[1, 2, 3].map((n) => (
                        <div
                          key={n}
                          className={`h-1 flex-1 rounded-full ${n <= strength ? strengthColor : "bg-slate-200"}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500">{strengthLabel}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="regConfirmPassword" className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Confirm Password
                </label>
                <input
                  id="regConfirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) => update("confirmPassword", e.target.value)}
                  placeholder="Re-enter your password"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {form.confirmPassword.length > 0 && form.password !== form.confirmPassword && (
                  <p className="mt-1 text-[10px] text-red-500">Passwords do not match</p>
                )}
              </div>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agreeTerms}
                  onChange={(e) => update("agreeTerms", e.target.checked)}
                  required
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span className="text-xs text-slate-500">
                  I agree to the{" "}
                  <Link href="/terms" className="font-semibold text-primary hover:underline">Terms of Use</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="font-semibold text-primary hover:underline">Privacy Policy</Link>
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                Create Account
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-slate-400">
              Already have an account?{" "}
              <Link href="/auth/signin" className="font-semibold text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>

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
