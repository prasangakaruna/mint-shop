/* ────────────────────────────────────────────────────────────────────────────
 * app/page.tsx  —  Home Page
 *
 * This file is the single entry-point for the "/" route.  It composes
 * self-contained section components that each own their own layout,
 * data-fetching (when needed), and presentation logic.
 *
 * ┌──────────────────────────────┐
 * │  TopUtilityBar               │  ← thin strip (Welcome, links)
 * │  Header                      │  ← sticky nav (logo, search, actions)
 * │  ┌────────────────────────┐  │
 * │  │  HeroSection           │  │  ← 3-column hero (sidebar+banner+panel)
 * │  │  FeatureCards           │  │  ← value propositions row
 * │  │  CategoriesGrid         │  │  ← category icon grid
 * │  │  FrequentlySearched     │  │  ← trending keyword chips
 * │  │  TopRanking             │  │  ← top-selling products
 * │  │  WelcomeSection         │  │  ← service info cards
 * │  │  JustForYou             │  │  ← personalised product grid
 * │  │  CtaBanner              │  │  ← call-to-action banner
 * │  └────────────────────────┘  │
 * │  Footer                      │  ← site-wide footer
 * └──────────────────────────────┘
 * ──────────────────────────────────────────────────────────────────────────── */

/* ── Layout ─────────────────────────────────────────────────────────────── */
import PageShell from "@/components/layout/PageShell";

/* ── Home Sections ──────────────────────────────────────────────────────── */
import HeroSection from "@/components/home/HeroSection";
import FeatureCards from "@/components/home/FeatureCards";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import FrequentlySearched from "@/components/home/FrequentlySearched";
import TopRanking from "@/components/home/TopRanking";
import WelcomeSection from "@/components/home/WelcomeSection";
import JustForYou from "@/components/home/JustForYou";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <FeatureCards />
      <CategoriesGrid />
      <FrequentlySearched />
      <TopRanking />
      <WelcomeSection />
      <JustForYou />
      <CtaBanner />
    </PageShell>
  );
}
