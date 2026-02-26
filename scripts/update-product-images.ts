/* ────────────────────────────────────────────────────────────────────────────
 * scripts/update-product-images.ts
 *
 * Script to update product images in constants.ts with category-specific images
 * Run with: npx tsx scripts/update-product-images.ts
 * ──────────────────────────────────────────────────────────────────────────── */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getCategoryImages } from '../lib/category-images';

const constantsPath = join(process.cwd(), 'lib/constants.ts');
let constantsContent = readFileSync(constantsPath, 'utf-8');

// Read all JSON files to get products
import { getProductsByCategoryMap } from '../lib/product-utils';

console.log('Updating product images with category-specific images...');

const productsByCategory = getProductsByCategoryMap();

// Update each product's images in the constants file
for (const [categorySlug, products] of Object.entries(productsByCategory)) {
  for (const product of products) {
    // Generate category-specific images
    const newImages = getCategoryImages(categorySlug, product.name, 4);
    
    // Find the product in constants.ts and update its images array
    // Look for the product by ID
    const productIdPattern = new RegExp(
      `(id:\\s*"${product.id}"[\\s\\S]*?images:\\s*\\[)([^\\]]+)(\\])`,
      'm'
    );
    
    const match = constantsContent.match(productIdPattern);
    if (match) {
      // Replace the images array with new category-specific images
      const imageStrings = newImages.map(img => `"${img}"`).join(', ');
      const replacement = `${match[1]}${imageStrings}${match[3]}`;
      constantsContent = constantsContent.replace(productIdPattern, replacement);
      console.log(`✓ Updated images for ${product.name} (${categorySlug})`);
    } else {
      console.warn(`⚠ Could not find product ${product.id} in constants.ts`);
    }
  }
}

// Write updated constants file
writeFileSync(constantsPath, constantsContent, 'utf-8');
console.log('\n✅ Updated all product images in constants.ts');
console.log('Run "npm run generate-products" to regenerate JSON files with new images.');
