/* ────────────────────────────────────────────────────────────────────────────
 * lib/constants.ts
 *
 * Single source of truth for every piece of static / seed data used on the
 * Mint Shop home page.  Keeping data separate from presentation lets us
 * swap in API responses later without touching UI components.
 * ──────────────────────────────────────────────────────────────────────────── */

import type {
  SidebarCategory,
  CategoryCard,
  TrendingProduct,
  RecommendedProduct,
  SearchTerm,
  FeatureItem,
  ServiceCard,
  QuickLink,
  NavLink,
  FooterColumn,
  PaymentBadge,
} from "@/lib/types";

/* ═══════════════════════════════════════════════════════════════════════════
   Navigation
   ═══════════════════════════════════════════════════════════════════════════ */

export const UTILITY_LEFT_LINKS: NavLink[] = [
  { label: "Buyer Central", href: "/buyer-central" },
  { label: "Help Center", href: "/help" },
  { label: "Download App", href: "/app", hiddenBelow: "sm" },
];

export const UTILITY_RIGHT_LINKS: NavLink[] = [
  { label: "Become a Seller", href: "/sell" },
  { label: "English / USD", href: "/settings" },
];

export const SUB_NAV_LINKS: NavLink[] = [
  { label: "All Categories", href: "/shop" },
  { label: "Featured", href: "/featured" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Top Ranking", href: "/top-ranking" },
  { label: "🔥 Deals", href: "/deals", variant: "accent" },
  { label: "Mint Club", href: "/mint-club" },
  { label: "Sustainability", href: "/sustainability", hiddenBelow: "md" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Sidebar Categories
   ═══════════════════════════════════════════════════════════════════════════ */

export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  { id: "cat-apparel", name: "Apparel & Fashion", icon: "checkroom", href: "/shop?category=apparel" },
  { id: "cat-electronics", name: "Electronics", icon: "devices", href: "/shop?category=electronics" },
  { id: "cat-home", name: "Home & Garden", icon: "cottage", href: "/shop?category=home-garden" },
  { id: "cat-beauty", name: "Beauty & Health", icon: "spa", href: "/shop?category=beauty" },
  { id: "cat-sports", name: "Sports & Outdoors", icon: "fitness_center", href: "/shop?category=sports" },
  { id: "cat-shoes", name: "Shoes & Accessories", icon: "steps", href: "/shop?category=shoes" },
  { id: "cat-bags", name: "Bags & Luggage", icon: "luggage", href: "/shop?category=bags" },
  { id: "cat-jewelry", name: "Jewelry & Watches", icon: "watch", href: "/shop?category=jewelry" },
  { id: "cat-toys", name: "Toys & Kids", icon: "toys", href: "/shop?category=toys" },
  { id: "cat-auto", name: "Automotive", icon: "directions_car", href: "/shop?category=automotive" },
  { id: "cat-office", name: "Office Supplies", icon: "edit_note", href: "/shop?category=office" },
  { id: "cat-pets", name: "Pet Supplies", icon: "pets", href: "/shop?category=pets" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Category Grid Cards
   ═══════════════════════════════════════════════════════════════════════════ */

export const CATEGORY_GRID: CategoryCard[] = [
  { id: "cg-apparel", name: "Apparel & Fashion", icon: "checkroom", bgColor: "bg-pink-50", iconColor: "text-pink-500", subcategories: ["T-Shirts", "Dresses", "Jackets"], href: "/shop?category=apparel" },
  { id: "cg-electronics", name: "Consumer Electronics", icon: "devices", bgColor: "bg-blue-50", iconColor: "text-blue-500", subcategories: ["Smartphones", "Laptops", "Headphones"], href: "/shop?category=electronics" },
  { id: "cg-sports", name: "Sports & Outdoors", icon: "fitness_center", bgColor: "bg-orange-50", iconColor: "text-orange-500", subcategories: ["Running", "Camping", "Fitness"], href: "/shop?category=sports" },
  { id: "cg-beauty", name: "Beauty & Health", icon: "spa", bgColor: "bg-purple-50", iconColor: "text-purple-500", subcategories: ["Skincare", "Makeup", "Wellness"], href: "/shop?category=beauty" },
  { id: "cg-jewelry", name: "Jewelry & Watches", icon: "watch", bgColor: "bg-amber-50", iconColor: "text-amber-600", subcategories: ["Rings", "Necklaces", "Smartwatches"], href: "/shop?category=jewelry" },
  { id: "cg-home", name: "Home & Garden", icon: "cottage", bgColor: "bg-green-50", iconColor: "text-green-600", subcategories: ["Furniture", "Decor", "Kitchen"], href: "/shop?category=home-garden" },
  { id: "cg-shoes", name: "Shoes & Accessories", icon: "steps", bgColor: "bg-red-50", iconColor: "text-red-500", subcategories: ["Sneakers", "Boots", "Sandals"], href: "/shop?category=shoes" },
  { id: "cg-bags", name: "Bags & Luggage", icon: "luggage", bgColor: "bg-teal-50", iconColor: "text-teal-500", subcategories: ["Backpacks", "Handbags", "Travel"], href: "/shop?category=bags" },
  { id: "cg-toys", name: "Toys & Kids", icon: "toys", bgColor: "bg-sky-50", iconColor: "text-sky-500", subcategories: ["Dolls", "Building Sets", "Games"], href: "/shop?category=toys" },
  { id: "cg-auto", name: "Automotive", icon: "directions_car", bgColor: "bg-slate-100", iconColor: "text-slate-600", subcategories: ["Parts", "Accessories", "Tools"], href: "/shop?category=automotive" },
  { id: "cg-pets", name: "Pet Supplies", icon: "pets", bgColor: "bg-lime-50", iconColor: "text-lime-600", subcategories: ["Food", "Toys", "Grooming"], href: "/shop?category=pets" },
  { id: "cg-office", name: "Office & School", icon: "edit_note", bgColor: "bg-indigo-50", iconColor: "text-indigo-500", subcategories: ["Stationery", "Printers", "Desks"], href: "/shop?category=office" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Trending / Top-Ranking Products
   ═══════════════════════════════════════════════════════════════════════════ */

export const TRENDING_PRODUCTS: TrendingProduct[] = [
  {
    id: "tp-earbuds",
    name: "Wireless Earbuds Pro",
    price: "$29.90",
    orders: "5,200+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd_p5zWd4sqEYhSTgMoyAGuZP7thJLXwLIgRBU4xAPnTG4S-jIwTeGTwP02RlyUVJWIKIp3sqkS-Xr87i3sZGfbCcXD0iGb00tgcbmgndvodITiaqdbw0UiVVk8UjdjTNySpmkk2J1WuA5vv0eyjHcWU72VtxXCaoo51uZqRyb0IiViNxaGT-raPQqDfgVtxIthk5L2Fy-xp0loLV2Kc5GVV6zMfMRjkW-nclR6IqR176UVgAm69zm0oOVWrq5dkJF6--IF3f1bfNg",
    tag: "Hot",
  },
  {
    id: "tp-watch",
    name: "Smart Fitness Watch",
    price: "$45.00",
    orders: "3,800+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZZRYfweQdgW1gqpfcBMkXSw3oCdcOWstmKqLSN-DZLVDJAXNfPZEesbY9igCh-VRd0phEXJJyZn8FNj-xERClm_2Ei1O69d7mzqRIyF59UqWnU9mu4JUk3kUdalsa-wUPcz58yRwM3znfNo3MLyWv3an3YRMcNiKj5WbhA1dXEt42rj4F5_oy_XTrmTs4szQlO3YRdGaSQbynK-cS1v5Ih5oYtT4qaWlCtzt6QUnwDnvxZ8gU6RH9Xv4MEZnkCwNRgcFwGp-r5CX6",
    tag: "Top Ranked",
  },
  {
    id: "tp-bag",
    name: "Premium Leather Bag",
    price: "$68.50",
    orders: "2,100+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCiREC2fLIDi5xkegQa__ojOl7jTNZ3yhZgDJ--oHkR-Bky4xxIp3PJFBmZalnv2IaiHbG3-B_Hyo0KC1dFPji8SShoGsaCCEKLnP6h7tztblba5wMkEMiVdD8jESZasfnxoT6Nr8d4Hej6ZgAO6kfK9UELrMgQaEWK8n-3GSYqDAjMfonMnFAv17RqCOA-MjV2qRRGXsqlajCU4uSvajnVG2nyEk4Qchuiq_EkcSHvkGZ3VALoiEmyWxL5uX_Wlju0KDactUkc68l",
    tag: "New",
  },
  {
    id: "tp-hoodie",
    name: "Signature Hoodie",
    price: "$85.00",
    orders: "1,900+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEAPWTiRB1G2wS2Vrt9393fmD4riCptAlQBODLhur5iEF6JozNNIBPi6cgGU9ufgLA28IgYkEokDgsGKC-jmTqfil6IViO83zp-LIXVAC2wO7bpG5BRfCE0tQCe2K8Ilzh9VFapW5kbWa8ArPwkIRb03M5nmeAR8bN8jMFN_E0zBXMkUkwjflTHebiQF5_crl1OiHMGKKfrS3LizwhhfFV1KWK2hhG3wt9tLHAVMeGFFjTQvXo5oJahcwXtmrto_yvoTrHaTFzvnOZ",
    tag: "Best Seller",
  },
  {
    id: "tp-sneakers",
    name: "Running Sneakers V2",
    price: "$120.00",
    orders: "4,500+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZZRYfweQdgW1gqpfcBMkXSw3oCdcOWstmKqLSN-DZLVDJAXNfPZEesbY9igCh-VRd0phEXJJyZn8FNj-xERClm_2Ei1O69d7mzqRIyF59UqWnU9mu4JUk3kUdalsa-wUPcz58yRwM3znfNo3MLyWv3an3YRMcNiKj5WbhA1dXEt42rj4F5_oy_XTrmTs4szQlO3YRdGaSQbynK-cS1v5Ih5oYtT4qaWlCtzt6QUnwDnvxZ8gU6RH9Xv4MEZnkCwNRgcFwGp-r5CX6",
    tag: "Hot",
  },
  {
    id: "tp-lamp",
    name: "Minimalist Desk Lamp",
    price: "$32.00",
    orders: "1,400+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCiREC2fLIDi5xkegQa__ojOl7jTNZ3yhZgDJ--oHkR-Bky4xxIp3PJFBmZalnv2IaiHbG3-B_Hyo0KC1dFPji8SShoGsaCCEKLnP6h7tztblba5wMkEMiVdD8jESZasfnxoT6Nr8d4Hej6ZgAO6kfK9UELrMgQaEWK8n-3GSYqDAjMfonMnFAv17RqCOA-MjV2qRRGXsqlajCU4uSvajnVG2nyEk4Qchuiq_EkcSHvkGZ3VALoiEmyWxL5uX_Wlju0KDactUkc68l",
    tag: "New",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Recommended / "Just for You" Products
   ═══════════════════════════════════════════════════════════════════════════ */

export const RECOMMENDED_PRODUCTS: RecommendedProduct[] = [
  {
    id: "rp-tee",
    name: "Essentials Mesh Tee",
    price: "$45.00",
    originalPrice: "$62.00",
    orders: "1.2k+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd_p5zWd4sqEYhSTgMoyAGuZP7thJLXwLIgRBU4xAPnTG4S-jIwTeGTwP02RlyUVJWIKIp3sqkS-Xr87i3sZGfbCcXD0iGb00tgcbmgndvodITiaqdbw0UiVVk8UjdjTNySpmkk2J1WuA5vv0eyjHcWU72VtxXCaoo51uZqRyb0IiViNxaGT-raPQqDfgVtxIthk5L2Fy-xp0loLV2Kc5GVV6zMfMRjkW-nclR6IqR176UVgAm69zm0oOVWrq5dkJF6--IF3f1bfNg",
    rating: 4.8,
  },
  {
    id: "rp-sneakers",
    name: "Vault One Sneakers",
    price: "$120.00",
    originalPrice: "$165.00",
    orders: "3.4k+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZZRYfweQdgW1gqpfcBMkXSw3oCdcOWstmKqLSN-DZLVDJAXNfPZEesbY9igCh-VRd0phEXJJyZn8FNj-xERClm_2Ei1O69d7mzqRIyF59UqWnU9mu4JUk3kUdalsa-wUPcz58yRwM3znfNo3MLyWv3an3YRMcNiKj5WbhA1dXEt42rj4F5_oy_XTrmTs4szQlO3YRdGaSQbynK-cS1v5Ih5oYtT4qaWlCtzt6QUnwDnvxZ8gU6RH9Xv4MEZnkCwNRgcFwGp-r5CX6",
    rating: 4.9,
  },
  {
    id: "rp-bag",
    name: "Luxe Crossbody Bag",
    price: "$68.50",
    originalPrice: "$95.00",
    orders: "890+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCiREC2fLIDi5xkegQa__ojOl7jTNZ3yhZgDJ--oHkR-Bky4xxIp3PJFBmZalnv2IaiHbG3-B_Hyo0KC1dFPji8SShoGsaCCEKLnP6h7tztblba5wMkEMiVdD8jESZasfnxoT6Nr8d4Hej6ZgAO6kfK9UELrMgQaEWK8n-3GSYqDAjMfonMnFAv17RqCOA-MjV2qRRGXsqlajCU4uSvajnVG2nyEk4Qchuiq_EkcSHvkGZ3VALoiEmyWxL5uX_Wlju0KDactUkc68l",
    rating: 4.7,
  },
  {
    id: "rp-hoodie",
    name: "Club Signature Hoodie",
    price: "$85.00",
    originalPrice: "$110.00",
    orders: "2.1k+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEAPWTiRB1G2wS2Vrt9393fmD4riCptAlQBODLhur5iEF6JozNNIBPi6cgGU9ufgLA28IgYkEokDgsGKC-jmTqfil6IViO83zp-LIXVAC2wO7bpG5BRfCE0tQCe2K8Ilzh9VFapW5kbWa8ArPwkIRb03M5nmeAR8bN8jMFN_E0zBXMkUkwjflTHebiQF5_crl1OiHMGKKfrS3LizwhhfFV1KWK2hhG3wt9tLHAVMeGFFjTQvXo5oJahcwXtmrto_yvoTrHaTFzvnOZ",
    rating: 4.9,
  },
  {
    id: "rp-tracker",
    name: "Smart Fitness Tracker",
    price: "$45.00",
    originalPrice: "$79.00",
    orders: "5.6k+ sold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPky_P2gdZnGPh07MygJwuOcI4tB84fjoDKPYw0pMf-azsvNZ-sg_hes3ljkmQfBkA-NYAFAMfqcX5j4uqgV-HIgZAeyaEFS8MLq2w9I6YppNUonN9qwvtsiixYvPiJXQ2Oai91IzgFR10QxH5jNjMU-PY9Ta3X633K0MgX2w9WM_zdgCnwdGwMH3uUSu6UBtDdD5oPmcBaFYzvLxkL0OZR0w0yrNr0NyJKROP_DA11UQUdk_XltPGUF5-ylG2TByhOhpCEEUohWjR",
    rating: 4.6,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Frequently Searched Terms
   ═══════════════════════════════════════════════════════════════════════════ */

export const FREQUENTLY_SEARCHED: SearchTerm[] = [
  { name: "Wireless Earbuds", icon: "headphones", href: "/search?q=wireless+earbuds" },
  { name: "Smart Watches", icon: "watch", href: "/search?q=smart+watches" },
  { name: "Running Shoes", icon: "steps", href: "/search?q=running+shoes" },
  { name: "Leather Bags", icon: "shopping_bag", href: "/search?q=leather+bags" },
  { name: "Hoodies", icon: "checkroom", href: "/search?q=hoodies" },
  { name: "Sunglasses", icon: "visibility", href: "/search?q=sunglasses" },
  { name: "Phone Cases", icon: "smartphone", href: "/search?q=phone+cases" },
  { name: "Sneakers", icon: "steps", href: "/search?q=sneakers" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Feature / Value-Proposition Cards
   ═══════════════════════════════════════════════════════════════════════════ */

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: "feat-rfq",
    icon: "request_quote",
    title: "Request for Quotation",
    description: "Post sourcing requests & get quotes from multiple suppliers.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    id: "feat-rank",
    icon: "emoji_events",
    title: "Top Ranking",
    description: "Browse the most popular products ranked by orders & reviews.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    id: "feat-custom",
    icon: "design_services",
    title: "Fast Customization",
    description: "Personalize products with logos, labels & custom packaging.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "feat-trade",
    icon: "verified_user",
    title: "Trade Assurance",
    description: "Secure payments, quality protection & on-time shipment guarantee.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Welcome / Service Cards
   ═══════════════════════════════════════════════════════════════════════════ */

export const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "svc-rfq",
    icon: "request_quote",
    title: "Request for Quotation",
    description: "Post customized sourcing requirements to get quotes from multiple matching suppliers.",
    buttonLabel: "Submit RFQ",
    gradientBg: "bg-gradient-to-br from-primary/5 to-emerald-50",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    buttonClass: "bg-primary text-slate-900",
  },
  {
    id: "svc-rank",
    icon: "emoji_events",
    title: "Top Ranking",
    description: "Explore products with the highest sales, best reviews, and trending across all categories.",
    buttonLabel: "View Rankings",
    gradientBg: "bg-gradient-to-br from-amber-50 to-orange-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    buttonClass: "bg-amber-500 text-white",
  },
  {
    id: "svc-custom",
    icon: "design_services",
    title: "Fast Customization",
    description: "Customize products with your brand logo, label, and packaging. Low MOQ available.",
    buttonLabel: "Start Customizing",
    gradientBg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    buttonClass: "bg-blue-600 text-white",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Quick Access Panel Links
   ═══════════════════════════════════════════════════════════════════════════ */

export const QUICK_LINKS: QuickLink[] = [
  { icon: "request_quote", label: "RFQ", href: "/rfq" },
  { icon: "trending_up", label: "Trending", href: "/trending" },
  { icon: "bolt", label: "Deals", href: "/deals" },
  { icon: "verified", label: "Verified", href: "/verified" },
  { icon: "local_shipping", label: "Shipping", href: "/shipping" },
  { icon: "shield", label: "Protection", href: "/protection" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Search Category Options
   ═══════════════════════════════════════════════════════════════════════════ */

export const SEARCH_CATEGORIES: string[] = [
  "All Categories",
  "Apparel",
  "Electronics",
  "Home",
  "Beauty",
];

/* ═══════════════════════════════════════════════════════════════════════════
   Footer
   ═══════════════════════════════════════════════════════════════════════════ */

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Marketplace",
    links: [
      { label: "Shop All", href: "/shop" },
      { label: "Top Ranking", href: "/top-ranking" },
      { label: "New Arrivals", href: "/new-arrivals" },
      { label: "Flash Deals", href: "/deals" },
    ],
  },
  {
    title: "Sell on Mint Shop",
    links: [
      { label: "Become a Seller", href: "/sell" },
      { label: "Seller Central", href: "/seller-central" },
      { label: "Advertising", href: "/advertising" },
      { label: "Partnerships", href: "/partnerships" },
    ],
  },
  {
    title: "Buyer Central",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Trade Assurance", href: "/trade-assurance" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Report Abuse", href: "/report" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export const PAYMENT_BADGES: PaymentBadge[] = [
  { label: "VISA" },
  { label: "MASTERCARD" },
  { label: "PAYPAL" },
  { label: "STRIPE" },
];

export const SOCIAL_LINKS: { icon: string; label: string; href: string }[] = [
  { icon: "public", label: "Website", href: "https://mintshop.com" },
  { icon: "alternate_email", label: "Email", href: "mailto:hello@mintshop.com" },
  { icon: "share", label: "Share", href: "#" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Top Ranking Tabs
   ═══════════════════════════════════════════════════════════════════════════ */

export const RANKING_TABS: string[] = ["All", "New Arrivals", "Best Sellers"];

/* ═══════════════════════════════════════════════════════════════════════════
   Product Image Pool (reusable across pages)
   ═══════════════════════════════════════════════════════════════════════════ */

const IMG_A =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBd_p5zWd4sqEYhSTgMoyAGuZP7thJLXwLIgRBU4xAPnTG4S-jIwTeGTwP02RlyUVJWIKIp3sqkS-Xr87i3sZGfbCcXD0iGb00tgcbmgndvodITiaqdbw0UiVVk8UjdjTNySpmkk2J1WuA5vv0eyjHcWU72VtxXCaoo51uZqRyb0IiViNxaGT-raPQqDfgVtxIthk5L2Fy-xp0loLV2Kc5GVV6zMfMRjkW-nclR6IqR176UVgAm69zm0oOVWrq5dkJF6--IF3f1bfNg";
const IMG_B =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZZRYfweQdgW1gqpfcBMkXSw3oCdcOWstmKqLSN-DZLVDJAXNfPZEesbY9igCh-VRd0phEXJJyZn8FNj-xERClm_2Ei1O69d7mzqRIyF59UqWnU9mu4JUk3kUdalsa-wUPcz58yRwM3znfNo3MLyWv3an3YRMcNiKj5WbhA1dXEt42rj4F5_oy_XTrmTs4szQlO3YRdGaSQbynK-cS1v5Ih5oYtT4qaWlCtzt6QUnwDnvxZ8gU6RH9Xv4MEZnkCwNRgcFwGp-r5CX6";
const IMG_C =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDCiREC2fLIDi5xkegQa__ojOl7jTNZ3yhZgDJ--oHkR-Bky4xxIp3PJFBmZalnv2IaiHbG3-B_Hyo0KC1dFPji8SShoGsaCCEKLnP6h7tztblba5wMkEMiVdD8jESZasfnxoT6Nr8d4Hej6ZgAO6kfK9UELrMgQaEWK8n-3GSYqDAjMfonMnFAv17RqCOA-MjV2qRRGXsqlajCU4uSvajnVG2nyEk4Qchuiq_EkcSHvkGZ3VALoiEmyWxL5uX_Wlju0KDactUkc68l";
const IMG_D =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAEAPWTiRB1G2wS2Vrt9393fmD4riCptAlQBODLhur5iEF6JozNNIBPi6cgGU9ufgLA28IgYkEokDgsGKC-jmTqfil6IViO83zp-LIXVAC2wO7bpG5BRfCE0tQCe2K8Ilzh9VFapW5kbWa8ArPwkIRb03M5nmeAR8bN8jMFN_E0zBXMkUkwjflTHebiQF5_crl1OiHMGKKfrS3LizwhhfFV1KWK2hhG3wt9tLHAVMeGFFjTQvXo5oJahcwXtmrto_yvoTrHaTFzvnOZ";
const IMG_E =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPky_P2gdZnGPh07MygJwuOcI4tB84fjoDKPYw0pMf-azsvNZ-sg_hes3ljkmQfBkA-NYAFAMfqcX5j4uqgV-HIgZAeyaEFS8MLq2w9I6YppNUonN9qwvtsiixYvPiJXQ2Oai91IzgFR10QxH5jNjMU-PY9Ta3X633K0MgX2w9WM_zdgCnwdGwMH3uUSu6UBtDdD5oPmcBaFYzvLxkL0OZR0w0yrNr0NyJKROP_DA11UQUdk_XltPGUF5-ylG2TByhOhpCEEUohWjR";

/* ═══════════════════════════════════════════════════════════════════════════
   Full Product Catalog (Shop / Product Detail pages)
   ═══════════════════════════════════════════════════════════════════════════ */

import type { Product, CartItem, Review, OrderSummary } from "@/lib/types";

export const SHOP_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Wireless Earbuds Pro Max",
    slug: "wireless-earbuds-pro-max",
    price: 29.9,
    originalPrice: 59.99,
    currency: "USD",
    description:
      "Premium wireless earbuds with active noise cancellation, 36-hour battery life, and crystal-clear sound quality. IPX5 waterproof rated for workouts. Ergonomic design ensures all-day comfort with memory foam ear tips included.",
    images: [IMG_A, IMG_B, IMG_C, IMG_D],
    category: "Electronics",
    categorySlug: "electronics",
    rating: 4.8,
    reviewCount: 2341,
    orders: "5,200+ sold",
    inStock: true,
    tags: ["Hot"],
    specifications: {
      "Battery Life": "36 hours (with case)",
      Connectivity: "Bluetooth 5.3",
      "Water Resistance": "IPX5",
      "Driver Size": "12mm",
      Weight: "5.2g per earbud",
      "Noise Cancellation": "Active (ANC)",
    },
    highlights: [
      "Active Noise Cancellation with transparency mode",
      "36-hour total battery life with wireless charging case",
      "IPX5 waterproof — perfect for workouts",
      "Touch controls for music, calls & voice assistant",
      "Premium memory foam ear tips (3 sizes included)",
    ],
  },
  {
    id: "prod-2",
    name: "Smart Fitness Watch Ultra",
    slug: "smart-fitness-watch-ultra",
    price: 45.0,
    originalPrice: 89.99,
    currency: "USD",
    description:
      "Advanced fitness tracking with heart rate, SpO2, sleep analysis, and 100+ workout modes. Always-on AMOLED display with 7-day battery life. GPS built-in for outdoor activities.",
    images: [IMG_B, IMG_A, IMG_E, IMG_C],
    category: "Electronics",
    categorySlug: "electronics",
    rating: 4.9,
    reviewCount: 1856,
    orders: "3,800+ sold",
    inStock: true,
    tags: ["Top Ranked"],
    specifications: {
      Display: '1.43" AMOLED',
      "Battery Life": "7 days typical",
      "Water Resistance": "5 ATM",
      Sensors: "HR, SpO2, Accelerometer, Gyroscope",
      GPS: "Built-in (GPS + GLONASS)",
      Compatibility: "iOS 14+ / Android 8+",
    },
    highlights: [
      "Always-on AMOLED display",
      "100+ sport modes with auto-detection",
      "Built-in GPS for outdoor tracking",
      "7-day battery life",
      "Sleep & stress monitoring",
    ],
  },
  {
    id: "prod-3",
    name: "Premium Leather Crossbody Bag",
    slug: "premium-leather-crossbody-bag",
    price: 68.5,
    originalPrice: 95.0,
    currency: "USD",
    description:
      "Handcrafted from genuine top-grain leather with adjustable strap and multiple compartments. Perfect for everyday carry with RFID-blocking pocket.",
    images: [IMG_C, IMG_D, IMG_A, IMG_B],
    category: "Bags & Luggage",
    categorySlug: "bags",
    rating: 4.7,
    reviewCount: 943,
    orders: "2,100+ sold",
    inStock: true,
    tags: ["New"],
    specifications: {
      Material: "Top-grain leather",
      Dimensions: '10" × 7" × 3"',
      "Strap Drop": '20"–24" adjustable',
      Pockets: "3 interior + 1 RFID-blocking",
      Closure: "Magnetic snap + zipper",
      Weight: "0.65 lbs",
    },
    highlights: [
      "Genuine top-grain leather construction",
      "RFID-blocking security pocket",
      "Adjustable crossbody strap",
      "Multiple organized compartments",
      "Elegant hardware with scratch-resistant finish",
    ],
  },
  {
    id: "prod-4",
    name: "Signature Club Hoodie",
    slug: "signature-club-hoodie",
    price: 85.0,
    originalPrice: 110.0,
    currency: "USD",
    description:
      "Premium heavyweight French terry hoodie with embroidered logo. Double-layered hood, kangaroo pocket, and ribbed cuffs for a relaxed yet refined fit.",
    images: [IMG_D, IMG_C, IMG_B, IMG_A],
    category: "Apparel & Fashion",
    categorySlug: "apparel",
    rating: 4.9,
    reviewCount: 2108,
    orders: "1,900+ sold",
    inStock: true,
    tags: ["Best Seller"],
    specifications: {
      Material: "400gsm French Terry (80% Cotton, 20% Polyester)",
      Fit: "Relaxed / Oversized",
      Sizes: "XS – 3XL",
      Care: "Machine wash cold, tumble dry low",
      Features: "Double-layered hood, ribbed cuffs",
    },
    highlights: [
      "Premium 400gsm heavyweight French terry",
      "Embroidered Mint Shop signature logo",
      "Double-layered hood for structure",
      "Kangaroo pocket with hidden phone slot",
      "Pre-shrunk fabric — true to size",
    ],
  },
  {
    id: "prod-5",
    name: "Running Sneakers V2",
    slug: "running-sneakers-v2",
    price: 120.0,
    originalPrice: 165.0,
    currency: "USD",
    description:
      "Engineered mesh upper with responsive foam midsole for superior cushioning. Rubber outsole with multi-directional traction. Perfect for daily training and long runs.",
    images: [IMG_B, IMG_E, IMG_A, IMG_D],
    category: "Shoes & Accessories",
    categorySlug: "shoes",
    rating: 4.8,
    reviewCount: 3412,
    orders: "4,500+ sold",
    inStock: true,
    tags: ["Hot"],
    specifications: {
      Upper: "Engineered mesh",
      Midsole: "Responsive foam (EVA + TPU)",
      Outsole: "Rubber with flex grooves",
      "Heel Drop": "8mm",
      Weight: "280g (size 10)",
      Sizes: "6 – 14 (incl. half sizes)",
    },
    highlights: [
      "Breathable engineered mesh upper",
      "Responsive foam cushioning technology",
      "Multi-directional rubber traction",
      "Reflective details for low-light visibility",
      "Sock-like fit with padded collar",
    ],
  },
  {
    id: "prod-6",
    name: "Minimalist Desk Lamp Pro",
    slug: "minimalist-desk-lamp-pro",
    price: 32.0,
    originalPrice: 49.99,
    currency: "USD",
    description:
      "Sleek LED desk lamp with adjustable color temperature (3000K–6500K) and brightness levels. USB-C charging port and touch controls. Foldable design for portability.",
    images: [IMG_C, IMG_A, IMG_B, IMG_E],
    category: "Home & Garden",
    categorySlug: "home-garden",
    rating: 4.6,
    reviewCount: 678,
    orders: "1,400+ sold",
    inStock: true,
    tags: ["New"],
    specifications: {
      "Light Source": "LED (60 SMD beads)",
      "Color Temperature": "3000K – 6500K",
      "Brightness Levels": "5 steps",
      Power: "USB-C (5V/2A)",
      Material: "Aluminum alloy + ABS",
      Foldable: "Yes — 180° adjustable",
    },
    highlights: [
      "5 brightness × 5 color temperature modes",
      "Built-in USB-C port for device charging",
      "Foldable design for easy storage",
      "Flicker-free eye-care technology",
      "Memory function remembers last setting",
    ],
  },
  {
    id: "prod-7",
    name: "Smart Fitness Tracker Band",
    slug: "smart-fitness-tracker-band",
    price: 45.0,
    originalPrice: 79.0,
    currency: "USD",
    description:
      "Slim and lightweight fitness band with continuous heart rate monitoring, step tracking, sleep analysis, and smartphone notifications. 14-day battery life.",
    images: [IMG_E, IMG_B, IMG_D, IMG_C],
    category: "Electronics",
    categorySlug: "electronics",
    rating: 4.6,
    reviewCount: 4521,
    orders: "5,600+ sold",
    inStock: true,
    tags: ["Hot"],
    specifications: {
      Display: '0.96" AMOLED',
      "Battery Life": "14 days",
      "Water Resistance": "5 ATM",
      Weight: "22g (without strap)",
      Sensors: "PPG heart rate, 3-axis accelerometer",
      Compatibility: "iOS 12+ / Android 7+",
    },
    highlights: [
      "Ultra-slim and comfortable design",
      "14-day battery on a single charge",
      "24/7 heart rate & sleep monitoring",
      "Smartphone notifications & call alerts",
      "50m water resistance",
    ],
  },
  {
    id: "prod-8",
    name: "Essentials Mesh Performance Tee",
    slug: "essentials-mesh-performance-tee",
    price: 45.0,
    originalPrice: 62.0,
    currency: "USD",
    description:
      "Lightweight mesh performance tee with moisture-wicking DryFit technology. Four-way stretch fabric for unrestricted movement. Anti-odor treatment keeps you fresh.",
    images: [IMG_A, IMG_D, IMG_C, IMG_B],
    category: "Apparel & Fashion",
    categorySlug: "apparel",
    rating: 4.8,
    reviewCount: 1234,
    orders: "1,200+ sold",
    inStock: true,
    tags: ["New"],
    specifications: {
      Material: "92% Polyester, 8% Elastane",
      Fit: "Regular / Athletic",
      Sizes: "XS – 3XL",
      Technology: "DryFit moisture-wicking",
      Care: "Machine wash cold",
    },
    highlights: [
      "DryFit moisture-wicking technology",
      "Four-way stretch for freedom of movement",
      "Anti-odor treatment",
      "Flatlock seams prevent chafing",
      "Lightweight mesh ventilation zones",
    ],
  },
  {
    id: "prod-9",
    name: "Ultra-Slim Laptop Backpack",
    slug: "ultra-slim-laptop-backpack",
    price: 54.99,
    originalPrice: 79.99,
    currency: "USD",
    description:
      'Water-resistant laptop backpack fits up to 15.6" laptops with padded compartment. USB charging port, anti-theft hidden zipper, and ergonomic back panel.',
    images: [IMG_C, IMG_E, IMG_A, IMG_D],
    category: "Bags & Luggage",
    categorySlug: "bags",
    rating: 4.7,
    reviewCount: 892,
    orders: "1,800+ sold",
    inStock: true,
    tags: ["Top Ranked"],
    specifications: {
      Capacity: "20L",
      "Laptop Fit": 'Up to 15.6"',
      Material: "Water-resistant Oxford fabric",
      Weight: "0.75 kg",
      Features: "USB port, anti-theft zipper",
      Dimensions: '18" × 12" × 6"',
    },
    highlights: [
      "Padded laptop compartment (up to 15.6\")",
      "Built-in USB charging port",
      "Anti-theft hidden back zipper",
      "Ergonomic breathable back panel",
      "Water-resistant Oxford fabric",
    ],
  },
  {
    id: "prod-10",
    name: "Ceramic Pour-Over Coffee Set",
    slug: "ceramic-pour-over-coffee-set",
    price: 38.0,
    originalPrice: 55.0,
    currency: "USD",
    description:
      "Artisan ceramic dripper with borosilicate glass carafe. Includes 100 natural paper filters. Brews 1–4 cups of rich, clean coffee in minutes.",
    images: [IMG_D, IMG_A, IMG_E, IMG_B],
    category: "Home & Garden",
    categorySlug: "home-garden",
    rating: 4.9,
    reviewCount: 567,
    orders: "890+ sold",
    inStock: true,
    tags: ["Best Seller"],
    specifications: {
      Material: "Ceramic dripper + borosilicate glass",
      Capacity: "600ml (1–4 cups)",
      "Filter Type": "Cone (#02 natural paper)",
      Includes: "Dripper, carafe, lid, 100 filters",
      "Dishwasher Safe": "Yes (hand wash recommended)",
    },
    highlights: [
      "Premium ceramic dripper for even extraction",
      "Heat-resistant borosilicate glass carafe",
      "100 natural unbleached paper filters included",
      "Elegant minimal design",
      "Perfect for home baristas",
    ],
  },
  {
    id: "prod-11",
    name: "Polarized Sport Sunglasses",
    slug: "polarized-sport-sunglasses",
    price: 24.99,
    originalPrice: 42.0,
    currency: "USD",
    description:
      "Lightweight TR90 frame with polarized UV400 lenses. Anti-slip nose pads and temple tips for secure fit during sports. Includes hard case and microfiber cloth.",
    images: [IMG_E, IMG_C, IMG_B, IMG_A],
    category: "Shoes & Accessories",
    categorySlug: "shoes",
    rating: 4.5,
    reviewCount: 1456,
    orders: "3,200+ sold",
    inStock: true,
    tags: ["Hot"],
    specifications: {
      Frame: "TR90 (lightweight, flexible)",
      Lens: "Polarized TAC, UV400",
      Weight: "28g",
      Includes: "Hard case, microfiber cloth, strap",
    },
    highlights: [
      "Polarized UV400 protection",
      "Ultra-lightweight TR90 frame",
      "Anti-slip design for sports",
      "Scratch-resistant lenses",
      "Complete accessory kit included",
    ],
  },
  {
    id: "prod-12",
    name: "Wireless Charging Pad 15W",
    slug: "wireless-charging-pad-15w",
    price: 18.99,
    originalPrice: 29.99,
    currency: "USD",
    description:
      "Qi-certified 15W fast wireless charger with intelligent cooling fan. Compatible with all Qi-enabled devices. LED indicator with sleep-friendly design.",
    images: [IMG_A, IMG_E, IMG_D, IMG_C],
    category: "Electronics",
    categorySlug: "electronics",
    rating: 4.6,
    reviewCount: 2789,
    orders: "6,100+ sold",
    inStock: true,
    tags: ["Best Seller"],
    specifications: {
      "Max Power": "15W (Samsung) / 7.5W (iPhone)",
      Input: "USB-C (5V/2A, 9V/2A)",
      Certification: "Qi, FCC, CE",
      "Cooling Fan": "Built-in intelligent fan",
      Compatibility: "All Qi-enabled devices",
    },
    highlights: [
      "15W fast wireless charging",
      "Built-in cooling fan prevents overheating",
      "Sleep-friendly LED indicator",
      "Case-friendly (up to 5mm)",
      "Qi-certified safety protection",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Mock Reviews
   ═══════════════════════════════════════════════════════════════════════════ */

export const MOCK_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Sarah M.",
    rating: 5,
    date: "Feb 15, 2026",
    title: "Absolutely love these!",
    content:
      "The sound quality is incredible for the price. Noise cancellation works really well on my commute. Battery lasts forever. Highly recommend!",
    helpful: 42,
  },
  {
    id: "rev-2",
    author: "James K.",
    rating: 4,
    date: "Feb 10, 2026",
    title: "Great value, minor fit issue",
    content:
      "Sound is excellent and ANC is impressive. The only reason for 4 stars is the ear tips could be slightly more comfortable for extended wear. Otherwise fantastic.",
    helpful: 28,
  },
  {
    id: "rev-3",
    author: "Emily R.",
    rating: 5,
    date: "Jan 28, 2026",
    title: "Best purchase this year",
    content:
      "These replaced my much more expensive earbuds and honestly they sound just as good. The wireless charging case is a nice touch. Very happy with this purchase.",
    helpful: 35,
  },
  {
    id: "rev-4",
    author: "David L.",
    rating: 5,
    date: "Jan 20, 2026",
    title: "Perfect for workouts",
    content:
      "IPX5 rating is real — I sweat a lot during workouts and these handle it perfectly. Great bass response and they stay in place even during HIIT sessions.",
    helpful: 19,
  },
  {
    id: "rev-5",
    author: "Priya S.",
    rating: 4,
    date: "Jan 15, 2026",
    title: "Solid product, fast shipping",
    content:
      "Arrived in perfect condition with all accessories. Setup was quick and easy. Audio quality is crisp. Would love to see more color options.",
    helpful: 12,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Mock Cart & Order
   ═══════════════════════════════════════════════════════════════════════════ */

export const MOCK_CART_ITEMS: CartItem[] = [
  {
    productId: "prod-1",
    name: "Wireless Earbuds Pro Max",
    image: IMG_A,
    price: 29.9,
    quantity: 2,
    variant: "Black",
  },
  {
    productId: "prod-4",
    name: "Signature Club Hoodie",
    image: IMG_D,
    price: 85.0,
    quantity: 1,
    variant: "Charcoal / L",
  },
  {
    productId: "prod-5",
    name: "Running Sneakers V2",
    image: IMG_B,
    price: 120.0,
    quantity: 1,
    variant: "White / Size 10",
  },
];

export const MOCK_ORDER_SUMMARY: OrderSummary = {
  subtotal: 264.8,
  shipping: 12.99,
  tax: 22.26,
  discount: -15.0,
  total: 285.05,
};

/* ═══════════════════════════════════════════════════════════════════════════
   Filter Options (Shop page)
   ═══════════════════════════════════════════════════════════════════════════ */

export const PRICE_RANGES = [
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25 – $50", min: 25, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];

export const SORT_OPTIONS = [
  { label: "Best Match", value: "relevance" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
  { label: "Most Orders", value: "orders" },
];
