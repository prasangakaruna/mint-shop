# Product JSON Files

This directory contains JSON files for each product category. Each file is named after the category slug (e.g., `electronics.json`, `apparel.json`).

## Generating JSON Files

To generate the JSON files from `lib/constants.ts`, run:

```bash
npx tsx scripts/generate-product-json.ts
```

Or if you have ts-node installed:

```bash
npx ts-node scripts/generate-product-json.ts
```

## File Structure

Each JSON file contains an array of products for that category:

```json
[
  {
    "id": "prod-1",
    "name": "Product Name",
    "slug": "product-slug",
    "price": 29.9,
    "originalPrice": 59.99,
    "currency": "USD",
    "description": "Product description...",
    "images": ["url1", "url2", ...],
    "category": "Category Name",
    "categorySlug": "category-slug",
    "rating": 4.8,
    "reviewCount": 1234,
    "orders": "5,200+ sold",
    "inStock": true,
    "tags": ["Hot"],
    "specifications": {...},
    "highlights": [...]
  }
]
```

## Categories

The following category JSON files are generated:

- `apparel.json` - Apparel & Fashion
- `electronics.json` - Electronics
- `home-garden.json` - Home & Garden
- `beauty.json` - Beauty & Health
- `sports.json` - Sports & Outdoors
- `shoes.json` - Shoes & Accessories
- `bags.json` - Bags & Luggage
- `jewelry.json` - Jewelry & Watches
- `toys.json` - Toys & Kids
- `automotive.json` - Automotive
- `office.json` - Office Supplies
- `pets.json` - Pet Supplies
- `supermarket.json` - Supermarket
- `gifts.json` - Gifts

## Usage

Products are loaded via the API route at `/api/products?category={categorySlug}` or directly from JSON files at `/data/products/{categorySlug}.json`.
