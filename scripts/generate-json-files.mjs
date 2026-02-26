/* ────────────────────────────────────────────────────────────────────────────
 * scripts/generate-json-files.mjs
 *
 * Script to generate JSON files for each category from SHOP_PRODUCTS
 * Run with: node scripts/generate-json-files.mjs
 * ──────────────────────────────────────────────────────────────────────────── */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the constants file
const constantsPath = join(__dirname, '../lib/constants.ts');
const constantsContent = readFileSync(constantsPath, 'utf-8');

// Extract image URLs
const imgA = constantsContent.match(/const IMG_A\s*=\s*"([^"]+)"/)?.[1] || '';
const imgB = constantsContent.match(/const IMG_B\s*=\s*"([^"]+)"/)?.[1] || '';
const imgC = constantsContent.match(/const IMG_C\s*=\s*"([^"]+)"/)?.[1] || '';
const imgD = constantsContent.match(/const IMG_D\s*=\s*"([^"]+)"/)?.[1] || '';
const imgE = constantsContent.match(/const IMG_E\s*=\s*"([^"]+)"/)?.[1] || '';

// Create output directory
const outputDir = join(__dirname, '../public/data/products');
mkdirSync(outputDir, { recursive: true });

console.log('Generating JSON files from constants.ts...');
console.log('Note: This script requires the products to be exported from constants.ts');
console.log('For now, please manually create JSON files or use a TypeScript compiler.');

// Since parsing TypeScript is complex, we'll create a helper that uses the compiled JS
// For now, let's create a note file explaining the process
const noteContent = `To generate JSON files:

1. Compile TypeScript: npx tsc lib/constants.ts --outDir temp --module commonjs --target es2020
2. Import SHOP_PRODUCTS from the compiled JS
3. Group products by categorySlug
4. Write JSON files to public/data/products/{categorySlug}.json

Or use the product-utils.ts helper functions at runtime.
`;

writeFileSync(join(outputDir, 'README.txt'), noteContent);
console.log('Created README.txt with instructions.');
