/* ────────────────────────────────────────────────────────────────────────────
 * scripts/generate-product-json.ts
 *
 * Script to generate JSON files for each category from SHOP_PRODUCTS
 * Run with: npx tsx scripts/generate-product-json.ts
 * ──────────────────────────────────────────────────────────────────────────── */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { getProductsByCategoryMap } from '../lib/product-utils';

const outputDir = join(process.cwd(), 'public/data/products');
mkdirSync(outputDir, { recursive: true });

console.log('Generating JSON files for each category...');

const productsByCategory = getProductsByCategoryMap();

let totalProducts = 0;

for (const [categorySlug, products] of Object.entries(productsByCategory)) {
  const filePath = join(outputDir, `${categorySlug}.json`);
  writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8');
  console.log(`✓ Created ${categorySlug}.json with ${products.length} products`);
  totalProducts += products.length;
}

console.log(`\n✅ Generated ${Object.keys(productsByCategory).length} JSON files with ${totalProducts} total products`);
