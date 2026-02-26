/* ────────────────────────────────────────────────────────────────────────────
 * scripts/generate-product-json.js
 *
 * Script to extract products from constants.ts and create JSON files per category
 * ──────────────────────────────────────────────────────────────────────────── */

const fs = require('fs');
const path = require('path');

// Read the constants file
const constantsPath = path.join(__dirname, '../lib/constants.ts');
const constantsContent = fs.readFileSync(constantsPath, 'utf-8');

// Extract IMG constants
const imgA = constantsContent.match(/const IMG_A\s*=\s*"([^"]+)"/)?.[1] || '';
const imgB = constantsContent.match(/const IMG_B\s*=\s*"([^"]+)"/)?.[1] || '';
const imgC = constantsContent.match(/const IMG_C\s*=\s*"([^"]+)"/)?.[1] || '';
const imgD = constantsContent.match(/const IMG_D\s*=\s*"([^"]+)"/)?.[1] || '';
const imgE = constantsContent.match(/const IMG_E\s*=\s*"([^"]+)"/)?.[1] || '';

// Categories mapping
const categories = {
  'apparel': 'Apparel & Fashion',
  'electronics': 'Electronics',
  'home-garden': 'Home & Garden',
  'beauty': 'Beauty & Health',
  'sports': 'Sports & Outdoors',
  'shoes': 'Shoes & Accessories',
  'bags': 'Bags & Luggage',
  'jewelry': 'Jewelry & Watches',
  'toys': 'Toys & Kids',
  'automotive': 'Automotive',
  'office': 'Office Supplies',
  'pets': 'Pet Supplies',
  'supermarket': 'Supermarket',
  'gifts': 'Gifts',
};

// Extract products from SHOP_PRODUCTS array
// This is a simplified parser - in production you might want to use a proper TypeScript parser
const productsMatch = constantsContent.match(/export const SHOP_PRODUCTS: Product\[\] = \[([\s\S]*?)\];/);
if (!productsMatch) {
  console.error('Could not find SHOP_PRODUCTS array');
  process.exit(1);
}

// Parse products (this is a simplified approach - you may need to adjust)
// For now, we'll use eval in a controlled way, or better yet, let's use a different approach
console.log('Extracting products... This may take a moment.');

// Instead, let's create a TypeScript file that exports the products, then we can import it
// For now, let's create a simpler approach - we'll manually extract or use a build step

// Create output directory
const outputDir = path.join(__dirname, '../data/products');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Note: This script needs to be run with a proper TypeScript parser.');
console.log('For now, please use the manual extraction method or compile TypeScript first.');
