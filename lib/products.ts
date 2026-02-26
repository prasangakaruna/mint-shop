/* ────────────────────────────────────────────────────────────────────────────
 * lib/products.ts
 *
 * Utility functions for loading products from JSON files by category
 * ──────────────────────────────────────────────────────────────────────────── */

import type { Product } from "@/lib/types";
import { SIDEBAR_CATEGORIES } from "@/lib/constants";

/**
 * Load products from API route for a specific category (client-side)
 */
export async function getProductsByCategory(categorySlug: string | null): Promise<Product[]> {
  try {
    const url = categorySlug 
      ? `/api/products?category=${categorySlug}`
      : `/api/products`;
    const response = await fetch(url, {
      cache: 'no-store'
    });
    if (!response.ok) {
      console.warn(`Failed to load products for category: ${categorySlug}`);
      return [];
    }
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error(`Error loading products for category ${categorySlug}:`, error);
    return [];
  }
}

/**
 * Load all products from API route (client-side)
 */
export async function getAllProducts(): Promise<Product[]> {
  return getProductsByCategory(null);
}

/**
 * Get a single product by slug from all categories (client-side)
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const allProducts = await getAllProducts();
  return allProducts.find((p) => p.slug === slug) || null;
}

/**
 * Get products by category slug (synchronous version for use with loaded data)
 */
export function getProductsByCategorySync(categorySlug: string, allProducts: Product[]): Product[] {
  if (!categorySlug) return allProducts;
  return allProducts.filter((p) => p.categorySlug === categorySlug);
}
