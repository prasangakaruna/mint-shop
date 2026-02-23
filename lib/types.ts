/* ────────────────────────────────────────────────────────────────────────────
 * lib/types.ts
 *
 * Centralised TypeScript interfaces & type aliases used across the
 * Mint Shop application.  Every data structure that crosses component
 * boundaries is typed here to guarantee contract safety at compile-time.
 * ──────────────────────────────────────────────────────────────────────────── */

/* ── Navigation ─────────────────────────────────────────────────────────── */

/** A single navigation link rendered in utility bars, sub-navs, or footer. */
export interface NavLink {
  label: string;
  href: string;
  /** Optional: highlight colour variant (e.g. "accent" for the Deals link). */
  variant?: "default" | "accent";
  /** Whether the link should be hidden on smaller breakpoints. */
  hiddenBelow?: "sm" | "md" | "lg";
}

/** A grouped column of links displayed in the footer. */
export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/* ── Categories ─────────────────────────────────────────────────────────── */

/** A basic category shown in the sidebar navigation. */
export interface SidebarCategory {
  id: string;
  name: string;
  /** Material Symbols icon name. */
  icon: string;
  href: string;
}

/** An enriched category for the grid section with colours & sub-categories. */
export interface CategoryCard {
  id: string;
  name: string;
  icon: string;
  /** Tailwind background utility e.g. "bg-pink-50". */
  bgColor: string;
  /** Tailwind text colour utility e.g. "text-pink-500". */
  iconColor: string;
  subcategories: string[];
  href: string;
}

/* ── Products ───────────────────────────────────────────────────────────── */

/** Allowed badge labels for product tags. */
export type ProductTag = "Hot" | "New" | "Top Ranked" | "Best Seller";

/** A product displayed in the "Top Ranking" section. */
export interface TrendingProduct {
  id: string;
  name: string;
  price: string;
  orders: string;
  image: string;
  tag: ProductTag;
}

/** A product displayed in the "Just for You" section with extra detail. */
export interface RecommendedProduct {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  orders: string;
  image: string;
  rating: number;
}

/* ── Search ──────────────────────────────────────────────────────────────── */

/** A frequently-searched keyword chip. */
export interface SearchTerm {
  name: string;
  icon: string;
  href: string;
}

/* ── Feature / Service Cards ────────────────────────────────────────────── */

/** A value-proposition feature card (e.g. RFQ, Trade Assurance). */
export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  /** Tailwind bg utility for icon wrapper. */
  iconBg: string;
  /** Tailwind text utility for icon colour. */
  iconColor: string;
}

/** A service card for the "Welcome" section with a CTA button. */
export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  buttonLabel: string;
  /** Tailwind gradient background. */
  gradientBg: string;
  /** Tailwind background for the icon container. */
  iconBg: string;
  /** Tailwind text colour for the icon. */
  iconColor: string;
  /** Tailwind classes for the CTA button. */
  buttonClass: string;
}

/* ── Quick Links ────────────────────────────────────────────────────────── */

/** A shortcut item rendered in the right-side quick-access panel. */
export interface QuickLink {
  icon: string;
  label: string;
  href: string;
}

/* ── Payment / Trust ────────────────────────────────────────────────────── */

export interface PaymentBadge {
  label: string;
}

/* ── Full Product (shop / detail pages) ────────────────────────────────── */

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  currency: string;
  description: string;
  images: string[];
  category: string;
  categorySlug: string;
  rating: number;
  reviewCount: number;
  orders: string;
  inStock: boolean;
  tags: ProductTag[];
  specifications: Record<string, string>;
  highlights: string[];
}

/* ── Cart ───────────────────────────────────────────────────────────────── */

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variant?: string;
}

/* ── Reviews ───────────────────────────────────────────────────────────── */

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
}

/* ── Breadcrumbs ───────────────────────────────────────────────────────── */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/* ── Order Summary ─────────────────────────────────────────────────────── */

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
}
