/* ────────────────────────────────────────────────────────────────────────────
 * scripts/update-json-images.ts
 *
 * Script to update product images in JSON files with category-specific images
 * Run with: npx tsx scripts/update-json-images.ts
 * ──────────────────────────────────────────────────────────────────────────── */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getCategoryImages } from '../lib/category-images';
import type { Product } from '../lib/types';
import { SIDEBAR_CATEGORIES } from '../lib/constants';

const productsDir = join(process.cwd(), 'public/data/products');

console.log('Updating product images in JSON files with category-specific images...\n');

let totalUpdated = 0;

for (const category of SIDEBAR_CATEGORIES) {
  const categorySlug = category.href.split("category=")[1];
  if (!categorySlug) continue;

  const filePath = join(productsDir, `${categorySlug}.json`);
  
  try {
    const fileContent = readFileSync(filePath, 'utf-8');
    const products: Product[] = JSON.parse(fileContent);
    
    let updated = 0;
    for (const product of products) {
      // Generate category-specific images based on product name and category
      const newImages = getCategoryImages(categorySlug, product.name, 4);
      product.images = newImages;
      updated++;
    }
    
    // Write updated products back to JSON file
    writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8');
    console.log(`✓ Updated ${updated} products in ${categorySlug}.json`);
    totalUpdated += updated;
  } catch (error) {
    console.error(`✗ Error updating ${categorySlug}.json:`, error);
  }
}

console.log(`\n✅ Updated images for ${totalUpdated} total products across all categories.`);
console.log('All JSON files now contain category-specific images!');
