/* ────────────────────────────────────────────────────────────────────────────
 * scripts/update-constants-images.ts
 *
 * Script to update product images in constants.ts with category-specific images
 * This ensures that when JSON files are regenerated, they have correct images
 * Run with: npx tsx scripts/update-constants-images.ts
 * ──────────────────────────────────────────────────────────────────────────── */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getCategoryImages } from '../lib/category-images';
import { getAllProducts } from '../lib/product-utils';

const constantsPath = join(process.cwd(), 'lib/constants.ts');
let constantsContent = readFileSync(constantsPath, 'utf-8');

console.log('Updating product images in constants.ts with category-specific images...\n');

const allProducts = getAllProducts();
let updated = 0;

for (const product of allProducts) {
  // Generate category-specific images
  const newImages = getCategoryImages(product.categorySlug, product.name, 4);
  
  // Create regex pattern to find and replace the images array for this product
  // Look for: id: "prod-X", ... images: [OLD_IMAGES]
  const productBlockPattern = new RegExp(
    `(id:\\s*"${product.id}"[\\s\\S]*?images:\\s*\\[)([^\\]]+)(\\])`,
    'm'
  );
  
  const match = constantsContent.match(productBlockPattern);
  if (match) {
    // Replace the images array
    const imageStrings = newImages.map(img => `"${img}"`).join(', ');
    const replacement = `${match[1]}${imageStrings}${match[3]}`;
    constantsContent = constantsContent.replace(productBlockPattern, replacement);
    updated++;
    
    if (updated % 20 === 0) {
      console.log(`  Updated ${updated} products...`);
    }
  }
}

// Write updated file
writeFileSync(constantsPath, constantsContent, 'utf-8');
console.log(`\n✅ Updated images for ${updated} products in constants.ts`);
console.log('You can now regenerate JSON files with: npm run generate-products');
