/* ────────────────────────────────────────────────────────────────────────────
 * lib/product-utils.ts
 *
 * Utility to extract products by category from SHOP_PRODUCTS
 * ──────────────────────────────────────────────────────────────────────────── */

import { SHOP_PRODUCTS } from "@/lib/constants";
import type { Product } from "@/lib/types";

/**
 * Get all products grouped by category slug
 */
export function getProductsByCategoryMap(): Record<string, Product[]> {
  const productsByCategory: Record<string, Product[]> = {};
  
  SHOP_PRODUCTS.forEach((product) => {
    if (!productsByCategory[product.categorySlug]) {
      productsByCategory[product.categorySlug] = [];
    }
    productsByCategory[product.categorySlug].push(product);
  });
  
  return productsByCategory;
}

/**
 * Get products for a specific category
 */
export function getProductsForCategory(categorySlug: string): Product[] {
  return SHOP_PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

/**
 * Get all products (for fallback when no category is selected)
 */
export function getAllProducts(): Product[] {
  return SHOP_PRODUCTS;
}
