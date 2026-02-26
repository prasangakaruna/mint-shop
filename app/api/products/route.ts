/* ────────────────────────────────────────────────────────────────────────────
 * app/api/products/route.ts
 *
 * API route to serve products by category from JSON files
 * ──────────────────────────────────────────────────────────────────────────── */

import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";
import type { Product } from "@/lib/types";
import { SIDEBAR_CATEGORIES } from "@/lib/constants";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");

  try {
    let products: Product[] = [];

    if (category) {
      // Load products from category-specific JSON file
      try {
        const filePath = join(process.cwd(), "public/data/products", `${category}.json`);
        const fileContent = readFileSync(filePath, "utf-8");
        products = JSON.parse(fileContent);
      } catch (error) {
        console.error(`Error reading products for category ${category}:`, error);
        return NextResponse.json(
          { error: `Category ${category} not found` },
          { status: 404 }
        );
      }
    } else {
      // Load all products from all category JSON files
      for (const cat of SIDEBAR_CATEGORIES) {
        const categorySlug = cat.href.split("category=")[1];
        if (categorySlug) {
          try {
            const filePath = join(process.cwd(), "public/data/products", `${categorySlug}.json`);
            const fileContent = readFileSync(filePath, "utf-8");
            const categoryProducts: Product[] = JSON.parse(fileContent);
            products.push(...categoryProducts);
          } catch (error) {
            console.warn(`Error reading products for category ${categorySlug}:`, error);
          }
        }
      }
    }

    return NextResponse.json(products, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
