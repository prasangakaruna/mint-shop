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
  { label: "Buyer Central", href: "/shop" },
  { label: "Help Center", href: "/shop" },
  { label: "Download App", href: "/shop", hiddenBelow: "sm" },
];

export const UTILITY_RIGHT_LINKS: NavLink[] = [
  { label: "Become a Seller", href: "/sell" },
  { label: "English / USD", href: "/shop" },
];

export const SUB_NAV_LINKS: NavLink[] = [
  { label: "All Categories", href: "/shop" },
  { label: "Featured", href: "/shop?sort=rating&filter=featured" },
  { label: "New Arrivals", href: "/shop?sort=relevance&filter=new" },
  { label: "Top Ranking", href: "/shop?sort=orders" },
  { label: "🔥 Deals", href: "/shop?filter=deals", variant: "accent" },
  { label: "Mint Club", href: "/shop?filter=mint-club" },
  { label: "Sustainability", href: "/shop?filter=sustainability", hiddenBelow: "md" },
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
  { id: "cat-supermarket", name: "Supermarket", icon: "shopping_cart", href: "/shop?category=supermarket" },
  { id: "cat-gifts", name: "Gifts", icon: "card_giftcard", href: "/shop?category=gifts" },
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
  { id: "cg-supermarket", name: "Supermarket", icon: "shopping_cart", bgColor: "bg-emerald-50", iconColor: "text-emerald-600", subcategories: ["Groceries", "Beverages", "Snacks"], href: "/shop?category=supermarket" },
  { id: "cg-gifts", name: "Gifts & Gift Sets", icon: "card_giftcard", bgColor: "bg-rose-50", iconColor: "text-rose-600", subcategories: ["Gift Baskets", "Gift Cards", "Special Occasions"], href: "/shop?category=gifts" },
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
  { icon: "request_quote", label: "RFQ", href: "/shop" },
  { icon: "trending_up", label: "Trending", href: "/shop?sort=orders" },
  { icon: "bolt", label: "Deals", href: "/shop?filter=deals" },
  { icon: "verified", label: "Verified", href: "/shop?filter=verified" },
  { icon: "local_shipping", label: "Shipping", href: "/shop" },
  { icon: "shield", label: "Protection", href: "/shop" },
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
      { label: "Top Ranking", href: "/shop?sort=orders" },
      { label: "New Arrivals", href: "/shop?sort=relevance&filter=new" },
      { label: "Flash Deals", href: "/shop?filter=deals" },
    ],
  },
  {
    title: "Sell on Mint Shop",
    links: [
      { label: "Become a Seller", href: "/sell" },
      { label: "Seller Central", href: "/shop" },
      { label: "Advertising", href: "/shop" },
      { label: "Partnerships", href: "/shop" },
    ],
  },
  {
    title: "Buyer Central",
    links: [
      { label: "Help Center", href: "/shop" },
      { label: "Trade Assurance", href: "/shop" },
      { label: "Shipping Info", href: "/shop" },
      { label: "Report Abuse", href: "/shop" },
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
  {
    id: "prod-13",
    name: "Premium Coffee Gift Set",
    slug: "premium-coffee-gift-set",
    price: 24.99,
    originalPrice: 39.99,
    currency: "USD",
    description:
      "Luxury coffee gift set featuring three premium single-origin blends from Colombia, Ethiopia, and Guatemala. Each bag contains 12oz of freshly roasted, specialty-grade coffee beans. Perfect gift for coffee enthusiasts.",
    images: [IMG_A, IMG_B, IMG_C, IMG_D],
    category: "Gifts",
    categorySlug: "gifts",
    rating: 4.7,
    reviewCount: 892,
    orders: "2,100+ sold",
    inStock: true,
    tags: ["Gift"],
    specifications: {
      "Total Weight": "36oz (3 x 12oz bags)",
      "Roast Level": "Medium to Dark",
      "Origin": "Colombia, Ethiopia, Guatemala",
      "Grind": "Whole Bean",
      "Packaging": "Resealable bags with gift box",
    },
    highlights: [
      "Three premium single-origin coffee blends",
      "Freshly roasted specialty-grade beans",
      "Elegant gift box packaging",
      "Perfect for coffee lovers",
      "Resealable bags maintain freshness",
    ],
  },
  {
    id: "prod-14",
    name: "Gourmet Chocolate Gift Basket",
    slug: "gourmet-chocolate-gift-basket",
    price: 34.99,
    originalPrice: 49.99,
    currency: "USD",
    description:
      "Deluxe chocolate gift basket featuring artisanal Belgian chocolates, truffles, and premium dark chocolate bars. Beautifully arranged in an elegant wicker basket with ribbon. Ideal for birthdays, holidays, or thank you gifts.",
    images: [IMG_B, IMG_C, IMG_D, IMG_E],
    category: "Gifts",
    categorySlug: "gifts",
    rating: 4.9,
    reviewCount: 1245,
    orders: "3,400+ sold",
    inStock: true,
    tags: ["Hot", "Gift"],
    specifications: {
      "Total Weight": "1.5 lbs",
      "Chocolate Types": "Belgian, Dark, Truffles",
      "Packaging": "Wicker basket with ribbon",
      "Shelf Life": "6 months",
      "Allergens": "Contains milk, soy",
    },
    highlights: [
      "Premium Belgian artisanal chocolates",
      "Elegant wicker basket presentation",
      "Perfect for any occasion",
      "Hand-selected premium quality",
      "Beautiful gift-ready packaging",
    ],
  },
  {
    id: "prod-15",
    name: "Spa & Wellness Gift Set",
    slug: "spa-wellness-gift-set",
    price: 29.99,
    originalPrice: 44.99,
    currency: "USD",
    description:
      "Luxurious spa gift set including aromatherapy candles, bath bombs, essential oils, and a plush bathrobe. Perfect for relaxation and self-care. Makes an excellent gift for birthdays, Mother's Day, or just because.",
    images: [IMG_C, IMG_D, IMG_E, IMG_A],
    category: "Gifts",
    categorySlug: "gifts",
    rating: 4.8,
    reviewCount: 678,
    orders: "1,800+ sold",
    inStock: true,
    tags: ["Gift"],
    specifications: {
      "Contents": "Candles, Bath Bombs, Essential Oils, Bathrobe",
      "Scent": "Lavender & Eucalyptus",
      "Bathrobe Size": "One Size Fits Most",
      "Packaging": "Gift box with ribbon",
    },
    highlights: [
      "Complete spa experience in one box",
      "Premium aromatherapy products",
      "Luxurious plush bathrobe included",
      "Perfect for relaxation and self-care",
      "Beautifully packaged for gifting",
    ],
  },
  {
    id: "prod-16",
    name: "Organic Fresh Produce Box",
    slug: "organic-fresh-produce-box",
    price: 19.99,
    originalPrice: 29.99,
    currency: "USD",
    description:
      "Weekly organic produce box featuring seasonal fruits and vegetables sourced from local farms. Includes a variety of fresh, pesticide-free produce perfect for healthy meals. Subscription available for weekly delivery.",
    images: [IMG_D, IMG_E, IMG_A, IMG_B],
    category: "Supermarket",
    categorySlug: "supermarket",
    rating: 4.6,
    reviewCount: 1456,
    orders: "4,200+ sold",
    inStock: true,
    tags: ["Organic"],
    specifications: {
      "Weight": "8-10 lbs",
      "Contents": "Seasonal fruits & vegetables",
      "Certification": "USDA Organic",
      "Origin": "Local farms",
      "Delivery": "Weekly subscription available",
    },
    highlights: [
      "100% USDA Organic certified",
      "Fresh seasonal produce",
      "Sourced from local farms",
      "Supports sustainable agriculture",
      "Weekly subscription option",
    ],
  },
  {
    id: "prod-17",
    name: "Premium Snack Variety Pack",
    slug: "premium-snack-variety-pack",
    price: 16.99,
    originalPrice: 24.99,
    currency: "USD",
    description:
      "Curated selection of premium snacks including organic chips, gourmet popcorn, artisanal crackers, and healthy protein bars. Perfect for office snacks, parties, or on-the-go nutrition. 24 individual servings.",
    images: [IMG_E, IMG_A, IMG_B, IMG_C],
    category: "Supermarket",
    categorySlug: "supermarket",
    rating: 4.5,
    reviewCount: 923,
    orders: "2,600+ sold",
    inStock: true,
    tags: ["Best Seller"],
    specifications: {
      "Total Servings": "24 individual packs",
      "Variety": "Chips, Popcorn, Crackers, Protein Bars",
      "Certification": "Organic options included",
      "Shelf Life": "6-12 months",
    },
    highlights: [
      "24 premium snack varieties",
      "Mix of sweet and savory options",
      "Organic and natural options",
      "Perfect for sharing",
      "Great value variety pack",
    ],
  },
  {
    id: "prod-18",
    name: "Artisan Bread & Pastry Collection",
    slug: "artisan-bread-pastry-collection",
    price: 22.99,
    originalPrice: 34.99,
    currency: "USD",
    description:
      "Fresh-baked artisan bread collection featuring sourdough, whole grain, and specialty loaves. Includes assorted pastries and croissants. Baked daily using traditional methods and premium ingredients. Freeze for later use.",
    images: [IMG_A, IMG_C, IMG_E, IMG_B],
    category: "Supermarket",
    categorySlug: "supermarket",
    rating: 4.7,
    reviewCount: 1123,
    orders: "3,100+ sold",
    inStock: true,
    tags: ["Fresh"],
    specifications: {
      "Contents": "3 loaves + 6 pastries",
      "Bread Types": "Sourdough, Whole Grain, Specialty",
      "Baking": "Fresh-baked daily",
      "Storage": "Freezer-friendly",
      "Ingredients": "Premium, all-natural",
    },
    highlights: [
      "Fresh-baked daily",
      "Traditional artisan methods",
      "Premium quality ingredients",
      "Variety of breads and pastries",
      "Freezer-friendly for convenience",
    ],
  },
  {
    id: "prod-19",
    name: "Luxury Gift Card Set",
    slug: "luxury-gift-card-set",
    price: 49.99,
    originalPrice: 49.99,
    currency: "USD",
    description:
      "Elegant gift card set with $50 value, beautifully packaged in a premium gift box. Perfect for birthdays, holidays, or any special occasion. Recipient can choose from thousands of products. Never expires.",
    images: [IMG_B, IMG_D, IMG_A, IMG_C],
    category: "Gifts",
    categorySlug: "gifts",
    rating: 4.9,
    reviewCount: 2341,
    orders: "8,500+ sold",
    inStock: true,
    tags: ["Hot", "Gift"],
    specifications: {
      "Value": "$50",
      "Validity": "Never expires",
      "Packaging": "Premium gift box",
      "Redemption": "Online or in-store",
      "Personalization": "Optional message card",
    },
    highlights: [
      "$50 gift card value",
      "Never expires",
      "Elegant premium packaging",
      "Perfect for any occasion",
      "Thousands of products to choose from",
    ],
  },
  {
    id: "prod-20",
    name: "Organic Beverage Variety Pack",
    slug: "organic-beverage-variety-pack",
    price: 18.99,
    originalPrice: 27.99,
    currency: "USD",
    description:
      "Curated selection of organic beverages including cold-pressed juices, kombucha, sparkling water, and herbal teas. All natural, no artificial ingredients. Perfect for health-conscious consumers. 12 bottles total.",
    images: [IMG_C, IMG_E, IMG_B, IMG_D],
    category: "Supermarket",
    categorySlug: "supermarket",
    rating: 4.4,
    reviewCount: 756,
    orders: "1,900+ sold",
    inStock: true,
    tags: ["Organic"],
    specifications: {
      "Total Bottles": "12 (assorted flavors)",
      "Types": "Juices, Kombucha, Sparkling Water, Tea",
      "Certification": "USDA Organic",
      "Size": "16oz per bottle",
      "Storage": "Refrigerate after opening",
    },
    highlights: [
      "100% organic beverages",
      "No artificial ingredients",
      "Variety of healthy options",
      "Cold-pressed juices included",
      "Perfect for healthy lifestyle",
    ],
  },
  {
    id: "prod-21",
    name: "Classic Leather Jacket",
    slug: "classic-leather-jacket",
    price: 89.99,
    originalPrice: 149.99,
    currency: "USD",
    description:
      "Premium genuine leather jacket with quilted lining, multiple pockets, and adjustable cuffs. Classic biker style with modern fit. Available in black and brown. Perfect for all seasons.",
    images: [IMG_D, IMG_A, IMG_B, IMG_C],
    category: "Apparel & Fashion",
    categorySlug: "apparel",
    rating: 4.7,
    reviewCount: 2156,
    orders: "4,800+ sold",
    inStock: true,
    tags: ["Hot"],
    specifications: {
      "Material": "100% Genuine Leather",
      "Lining": "Quilted Polyester",
      "Sizes": "XS, S, M, L, XL, XXL",
      "Colors": "Black, Brown",
      "Care": "Leather conditioner recommended",
    },
    highlights: [
      "Genuine leather construction",
      "Quilted warm lining",
      "Multiple functional pockets",
      "Classic timeless design",
      "Durable and long-lasting",
    ],
  },
  {
    id: "prod-22",
    name: "Smart Home Security Camera",
    slug: "smart-home-security-camera",
    price: 39.99,
    originalPrice: 69.99,
    currency: "USD",
    description:
      "1080p HD WiFi security camera with night vision, motion detection, and two-way audio. Works with Alexa and Google Assistant. Free cloud storage for 7 days. Perfect for home and office security.",
    images: [IMG_E, IMG_C, IMG_D, IMG_A],
    category: "Electronics",
    categorySlug: "electronics",
    rating: 4.6,
    reviewCount: 3421,
    orders: "8,200+ sold",
    inStock: true,
    tags: ["Best Seller"],
    specifications: {
      "Resolution": "1080p Full HD",
      "Night Vision": "Up to 30ft",
      "Field of View": "110° wide angle",
      "Connectivity": "WiFi 2.4GHz",
      "Storage": "Cloud + MicroSD slot",
    },
    highlights: [
      "1080p HD video quality",
      "Infrared night vision",
      "Motion detection alerts",
      "Two-way audio communication",
      "Works with smart home systems",
    ],
  },
  {
    id: "prod-23",
    name: "Yoga Mat Premium Set",
    slug: "yoga-mat-premium-set",
    price: 24.99,
    originalPrice: 39.99,
    currency: "USD",
    description:
      "Extra thick non-slip yoga mat with carrying strap and yoga block included. Eco-friendly TPE material, 6mm thickness for maximum comfort. Perfect for yoga, pilates, and fitness workouts.",
    images: [IMG_A, IMG_E, IMG_B, IMG_C],
    category: "Sports & Outdoors",
    categorySlug: "sports",
    rating: 4.8,
    reviewCount: 1876,
    orders: "5,100+ sold",
    inStock: true,
    tags: ["New"],
    specifications: {
      "Thickness": "6mm extra thick",
      "Material": "TPE (Eco-friendly)",
      "Size": "72\" x 24\"",
      "Weight": "2.2 lbs",
      "Includes": "Mat, Strap, Yoga Block",
    },
    highlights: [
      "Extra thick for joint protection",
      "Non-slip surface technology",
      "Eco-friendly TPE material",
      "Includes carrying strap and block",
      "Easy to clean and maintain",
    ],
  },
  {
    id: "prod-24",
    name: "Luxury Skincare Gift Box",
    slug: "luxury-skincare-gift-box",
    price: 44.99,
    originalPrice: 69.99,
    currency: "USD",
    description:
      "Premium skincare gift set featuring cleanser, serum, moisturizer, and eye cream. All products are cruelty-free, vegan, and made with natural ingredients. Beautifully packaged in an elegant gift box.",
    images: [IMG_B, IMG_D, IMG_A, IMG_E],
    category: "Beauty & Health",
    categorySlug: "beauty",
    rating: 4.7,
    reviewCount: 1234,
    orders: "3,200+ sold",
    inStock: true,
    tags: ["Gift"],
    specifications: {
      "Contents": "Cleanser, Serum, Moisturizer, Eye Cream",
      "Volume": "Full size products",
      "Certification": "Cruelty-free, Vegan",
      "Skin Type": "All skin types",
      "Packaging": "Elegant gift box",
    },
    highlights: [
      "Complete skincare routine",
      "Cruelty-free and vegan",
      "Natural ingredients",
      "Suitable for all skin types",
      "Perfect gift packaging",
    ],
  },
  {
    id: "prod-25",
    name: "Running Shoes Pro",
    slug: "running-shoes-pro",
    price: 59.99,
    originalPrice: 99.99,
    currency: "USD",
    description:
      "Professional running shoes with advanced cushioning technology, breathable mesh upper, and durable rubber outsole. Designed for long-distance running with excellent arch support and shock absorption.",
    images: [IMG_C, IMG_B, IMG_E, IMG_D],
    category: "Shoes & Accessories",
    categorySlug: "shoes",
    rating: 4.6,
    reviewCount: 2890,
    orders: "6,500+ sold",
    inStock: true,
    tags: ["Hot"],
    specifications: {
      "Sizes": "US 6-12 (Men & Women)",
      "Weight": "9.5 oz per shoe",
      "Cushioning": "Advanced EVA foam",
      "Upper": "Breathable mesh",
      "Outsole": "Durable rubber",
    },
    highlights: [
      "Advanced cushioning technology",
      "Breathable mesh upper",
      "Excellent arch support",
      "Shock absorption system",
      "Durable construction",
    ],
  },
  {
    id: "prod-26",
    name: "Modern Coffee Table",
    slug: "modern-coffee-table",
    price: 129.99,
    originalPrice: 199.99,
    currency: "USD",
    description:
      "Sleek modern coffee table with tempered glass top and metal legs. Spacious storage shelf underneath. Perfect for living rooms, offices, or modern spaces. Easy assembly required.",
    images: [IMG_D, IMG_C, IMG_A, IMG_B],
    category: "Home & Garden",
    categorySlug: "home-garden",
    rating: 4.5,
    reviewCount: 987,
    orders: "2,300+ sold",
    inStock: true,
    tags: ["New"],
    specifications: {
      "Dimensions": "48\" L x 24\" W x 18\" H",
      "Top Material": "Tempered Glass",
      "Frame": "Metal with powder coating",
      "Weight Capacity": "150 lbs",
      "Assembly": "Required (tools included)",
    },
    highlights: [
      "Modern minimalist design",
      "Tempered glass top",
      "Spacious storage shelf",
      "Sturdy metal construction",
      "Easy to assemble",
    ],
  },
  {
    id: "prod-27",
    name: "Designer Handbag",
    slug: "designer-handbag",
    price: 79.99,
    originalPrice: 129.99,
    currency: "USD",
    description:
      "Elegant designer handbag made from premium faux leather with gold-tone hardware. Multiple compartments, adjustable strap, and interior pockets. Perfect for work, travel, or everyday use.",
    images: [IMG_E, IMG_A, IMG_D, IMG_B],
    category: "Bags & Luggage",
    categorySlug: "bags",
    rating: 4.8,
    reviewCount: 1654,
    orders: "4,100+ sold",
    inStock: true,
    tags: ["Best Seller"],
    specifications: {
      "Material": "Premium Faux Leather",
      "Dimensions": "12\" x 9\" x 5\"",
      "Strap": "Adjustable (removable)",
      "Compartments": "Main + 2 interior pockets",
      "Hardware": "Gold-tone",
    },
    highlights: [
      "Premium faux leather",
      "Spacious interior",
      "Multiple compartments",
      "Adjustable removable strap",
      "Elegant design",
    ],
  },
  {
    id: "prod-28",
    name: "Sterling Silver Necklace",
    slug: "sterling-silver-necklace",
    price: 34.99,
    originalPrice: 59.99,
    currency: "USD",
    description:
      "Beautiful sterling silver necklace with pendant. Hypoallergenic and tarnish-resistant. Comes in elegant gift box. Perfect for everyday wear or special occasions. Available in multiple chain lengths.",
    images: [IMG_A, IMG_E, IMG_C, IMG_D],
    category: "Jewelry & Watches",
    categorySlug: "jewelry",
    rating: 4.7,
    reviewCount: 2134,
    orders: "5,600+ sold",
    inStock: true,
    tags: ["Hot"],
    specifications: {
      "Material": "925 Sterling Silver",
      "Chain Length": "18\", 20\", 22\"",
      "Pendant Size": "1\" x 0.75\"",
      "Finish": "Polished",
      "Packaging": "Gift box included",
    },
    highlights: [
      "925 sterling silver",
      "Hypoallergenic",
      "Tarnish-resistant coating",
      "Multiple chain lengths",
      "Elegant gift packaging",
    ],
  },
  {
    id: "prod-29",
    name: "Educational Building Blocks",
    slug: "educational-building-blocks",
    price: 19.99,
    originalPrice: 34.99,
    currency: "USD",
    description:
      "Premium wooden building blocks set with 100 pieces in various shapes and colors. Safe for children, promotes creativity and motor skills. Made from sustainable wood with non-toxic paint.",
    images: [IMG_B, IMG_D, IMG_A, IMG_E],
    category: "Toys & Kids",
    categorySlug: "toys",
    rating: 4.9,
    reviewCount: 3456,
    orders: "9,200+ sold",
    inStock: true,
    tags: ["Best Seller"],
    specifications: {
      "Pieces": "100 wooden blocks",
      "Material": "Sustainable wood",
      "Paint": "Non-toxic, child-safe",
      "Age Range": "3+ years",
      "Storage": "Canvas bag included",
    },
    highlights: [
      "100 premium wooden blocks",
      "Safe non-toxic materials",
      "Promotes creativity",
      "Develops motor skills",
      "Sustainable materials",
    ],
  },
  {
    id: "prod-30",
    name: "Car Phone Mount",
    slug: "car-phone-mount",
    price: 12.99,
    originalPrice: 24.99,
    currency: "USD",
    description:
      "Universal car phone mount with strong magnetic base and adjustable arm. Works with all smartphones. Easy one-hand operation. Vent, dashboard, or windshield mounting options included.",
    images: [IMG_C, IMG_E, IMG_B, IMG_D],
    category: "Automotive",
    categorySlug: "automotive",
    rating: 4.5,
    reviewCount: 4567,
    orders: "12,500+ sold",
    inStock: true,
    tags: ["Hot"],
    specifications: {
      "Compatibility": "All smartphones",
      "Mounting": "Vent, Dashboard, Windshield",
      "Material": "ABS Plastic + Metal",
      "Rotation": "360° adjustable",
      "Weight": "3.5 oz",
    },
    highlights: [
      "Universal smartphone compatibility",
      "Strong magnetic base",
      "Multiple mounting options",
      "One-hand operation",
      "360° rotation",
    ],
  },
  {
    id: "prod-31",
    name: "Wireless Mouse & Keyboard Set",
    slug: "wireless-mouse-keyboard-set",
    price: 29.99,
    originalPrice: 49.99,
    currency: "USD",
    description:
      "Ergonomic wireless mouse and keyboard combo with 2.4GHz USB receiver. Long battery life, quiet keys, and smooth scrolling. Perfect for office work, gaming, or home use.",
    images: [IMG_D, IMG_A, IMG_C, IMG_E],
    category: "Office Supplies",
    categorySlug: "office",
    rating: 4.6,
    reviewCount: 2789,
    orders: "7,300+ sold",
    inStock: true,
    tags: ["Best Seller"],
    specifications: {
      "Connectivity": "2.4GHz Wireless",
      "Battery Life": "12 months (keyboard), 6 months (mouse)",
      "Range": "Up to 10 meters",
      "Compatibility": "Windows, Mac, Linux",
      "Keyboard Layout": "Full-size with numpad",
    },
    highlights: [
      "Ergonomic design",
      "Long battery life",
      "Quiet operation",
      "Plug-and-play setup",
      "Compatible with all systems",
    ],
  },
  {
    id: "prod-32",
    name: "Premium Dog Food",
    slug: "premium-dog-food",
    price: 39.99,
    originalPrice: 59.99,
    currency: "USD",
    description:
      "High-quality dry dog food with real meat as first ingredient. Grain-free formula with added vitamins and minerals. Suitable for all life stages. 30lb bag provides months of nutrition.",
    images: [IMG_E, IMG_B, IMG_D, IMG_A],
    category: "Pet Supplies",
    categorySlug: "pets",
    rating: 4.8,
    reviewCount: 4123,
    orders: "10,800+ sold",
    inStock: true,
    tags: ["Organic"],
    specifications: {
      "Weight": "30 lbs",
      "First Ingredient": "Real Chicken",
      "Protein": "26% minimum",
      "Life Stage": "All life stages",
      "Grain-Free": "Yes",
    },
    highlights: [
      "Real meat as first ingredient",
      "Grain-free formula",
      "Added vitamins and minerals",
      "Suitable for all dogs",
      "Premium quality nutrition",
    ],
  },
  {
    id: "prod-33",
    name: "Bluetooth Speaker Portable",
    slug: "bluetooth-speaker-portable",
    price: 19.99,
    originalPrice: 39.99,
    currency: "USD",
    description:
      "Compact portable Bluetooth speaker with 360° sound, 12-hour battery life, and IPX7 waterproof rating. Perfect for outdoor adventures, parties, or home use. Rich bass and clear highs.",
    images: [IMG_A, IMG_C, IMG_E, IMG_B],
    category: "Electronics",
    categorySlug: "electronics",
    rating: 4.7,
    reviewCount: 5234,
    orders: "14,200+ sold",
    inStock: true,
    tags: ["Hot", "Best Seller"],
    specifications: {
      "Battery Life": "12 hours",
      "Waterproof": "IPX7 (submersible)",
      "Range": "33ft Bluetooth range",
      "Driver": "5W output",
      "Weight": "1.1 lbs",
    },
    highlights: [
      "360° surround sound",
      "12-hour battery life",
      "IPX7 waterproof",
      "Rich bass performance",
      "Compact portable design",
    ],
  },
  {
    id: "prod-34",
    name: "Casual Denim Jeans",
    slug: "casual-denim-jeans",
    price: 34.99,
    originalPrice: 59.99,
    currency: "USD",
    description:
      "Classic fit denim jeans with stretch comfort. Multiple washes available. Durable construction with reinforced seams. Perfect for everyday wear. Available in various sizes and styles.",
    images: [IMG_B, IMG_D, IMG_A, IMG_E],
    category: "Apparel & Fashion",
    categorySlug: "apparel",
    rating: 4.5,
    reviewCount: 1876,
    orders: "4,500+ sold",
    inStock: true,
    tags: ["New"],
    specifications: {
      "Material": "98% Cotton, 2% Elastane",
      "Fit": "Classic",
      "Sizes": "28-40 (Waist)",
      "Inseam": "30\", 32\", 34\"",
      "Washes": "Light, Medium, Dark",
    },
    highlights: [
      "Stretch comfort",
      "Classic fit",
      "Multiple wash options",
      "Durable construction",
      "Versatile styling",
    ],
  },
  {
    id: "prod-35",
    name: "Indoor Plant Set",
    slug: "indoor-plant-set",
    price: 27.99,
    originalPrice: 44.99,
    currency: "USD",
    description:
      "Set of 3 low-maintenance indoor plants in decorative pots. Includes care instructions. Perfect for home or office decoration. Air-purifying plants that thrive in indirect light.",
    images: [IMG_C, IMG_E, IMG_B, IMG_D],
    category: "Home & Garden",
    categorySlug: "home-garden",
    rating: 4.6,
    reviewCount: 1234,
    orders: "3,100+ sold",
    inStock: true,
    tags: ["Fresh"],
    specifications: {
      "Plants": "3 different varieties",
      "Pot Size": "4\" diameter",
      "Care Level": "Low maintenance",
      "Light": "Indirect sunlight",
      "Watering": "Weekly",
    },
    highlights: [
      "3 air-purifying plants",
      "Decorative pots included",
      "Low maintenance",
      "Care instructions provided",
      "Perfect for beginners",
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
