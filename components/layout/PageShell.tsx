/* ────────────────────────────────────────────────────────────────────────────
 * components/layout/PageShell.tsx
 *
 * Shared page wrapper that renders the common chrome
 * (TopUtilityBar → Header → {children} → Footer) so every page
 * has a consistent layout without duplicating imports.
 * ──────────────────────────────────────────────────────────────────────────── */

import TopUtilityBar from "./TopUtilityBar";
import Header from "./Header";
import Footer from "./Footer";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-bg-light text-slate-800">
      <TopUtilityBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
