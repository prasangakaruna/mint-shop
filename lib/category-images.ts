/* ────────────────────────────────────────────────────────────────────────────
 * lib/category-images.ts
 *
 * Category-specific image URLs using Unsplash API with relevant keywords
 * ──────────────────────────────────────────────────────────────────────────── */

/**
 * Generate category-specific image URLs using Unsplash
 * Format: https://source.unsplash.com/800x800/?{keyword}
 */
export const CATEGORY_IMAGE_KEYWORDS: Record<string, string[]> = {
  electronics: [
    "electronics",
    "smartphone",
    "laptop",
    "headphones",
    "tablet",
    "smartwatch",
    "camera",
    "speaker",
    "gadget",
    "device",
  ],
  apparel: [
    "fashion",
    "clothing",
    "apparel",
    "outfit",
    "style",
    "wardrobe",
    "dress",
    "jacket",
    "shirt",
    "fashionable",
  ],
  "home-garden": [
    "home",
    "furniture",
    "decoration",
    "interior",
    "garden",
    "plants",
    "kitchen",
    "living-room",
    "bedroom",
    "home-decor",
  ],
  beauty: [
    "beauty",
    "cosmetics",
    "skincare",
    "makeup",
    "perfume",
    "spa",
    "wellness",
    "self-care",
    "beauty-products",
    "cosmetic",
  ],
  sports: [
    "sports",
    "fitness",
    "exercise",
    "gym",
    "running",
    "athletic",
    "workout",
    "training",
    "sport-equipment",
    "fitness-gear",
  ],
  shoes: [
    "shoes",
    "sneakers",
    "footwear",
    "boots",
    "sandals",
    "running-shoes",
    "fashion-shoes",
    "athletic-shoes",
    "casual-shoes",
    "dress-shoes",
  ],
  bags: [
    "bag",
    "handbag",
    "backpack",
    "luggage",
    "travel-bag",
    "purse",
    "tote-bag",
    "messenger-bag",
    "suitcase",
    "leather-bag",
  ],
  jewelry: [
    "jewelry",
    "necklace",
    "ring",
    "bracelet",
    "watch",
    "earrings",
    "accessories",
    "gold",
    "silver",
    "diamond",
  ],
  toys: [
    "toys",
    "children",
    "play",
    "games",
    "dolls",
    "building-blocks",
    "educational-toys",
    "kids",
    "playtime",
    "toy-collection",
  ],
  automotive: [
    "car",
    "automotive",
    "vehicle",
    "auto-parts",
    "car-accessories",
    "automobile",
    "driving",
    "car-interior",
    "automotive-tools",
    "vehicle-parts",
  ],
  office: [
    "office",
    "stationery",
    "desk",
    "workspace",
    "office-supplies",
    "notebook",
    "pen",
    "organizer",
    "desk-accessories",
    "office-equipment",
  ],
  pets: [
    "pet",
    "dog",
    "cat",
    "animal",
    "pet-supplies",
    "pet-food",
    "pet-toys",
    "pet-care",
    "puppy",
    "kitten",
  ],
  supermarket: [
    "food",
    "groceries",
    "supermarket",
    "fresh-food",
    "produce",
    "shopping",
    "market",
    "grocery-store",
    "fresh-vegetables",
    "food-products",
  ],
  gifts: [
    "gift",
    "present",
    "gift-box",
    "wrapping",
    "celebration",
    "special-occasion",
    "gift-basket",
    "surprise",
    "gift-wrapped",
    "celebration-gift",
  ],
};

/**
 * Generate multiple unique image URLs for a product based on category and product name
 * Uses category-specific keywords to get relevant product images
 */
export function getCategoryImages(
  categorySlug: string,
  productName: string,
  count: number = 4
): string[] {
  const keywords = CATEGORY_IMAGE_KEYWORDS[categorySlug] || ["product"];
  
  // Extract relevant words from product name
  const productWords = productName
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .slice(0, 2);
  
  // Combine category keywords with product-specific words
  const allKeywords = [...keywords, ...productWords];
  
  // Create a unique seed from category and product name
  const seed = `${categorySlug}-${productName}`.replace(/\s+/g, "-").toLowerCase();
  const hash = seed.split("").reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0);
  }, 0);
  
  const images: string[] = [];
  for (let i = 0; i < count; i++) {
    const keyword = allKeywords[i % allKeywords.length];
    // Use Lorem Flickr which allows category-specific image search
    // Format: https://loremflickr.com/800/800/{keyword}?random={seed}
    const randomSeed = Math.abs(hash) + i;
    images.push(`https://loremflickr.com/800/800/${keyword}?random=${randomSeed}`);
  }
  
  return images;
}

/**
 * Alternative: Use Picsum with category-specific seeds
 */
export function getCategoryImagesPicsum(
  categorySlug: string,
  productName: string,
  count: number = 4
): string[] {
  // Create a seed from category and product name
  const seed = `${categorySlug}-${productName}`.replace(/\s+/g, "-");
  const hash = seed.split("").reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0);
  }, 0);
  
  const images: string[] = [];
  for (let i = 0; i < count; i++) {
    // Use different image IDs based on hash + index
    const imageId = Math.abs(hash) + i;
    images.push(`https://picsum.photos/seed/${seed}-${i}/800/800`);
  }
  
  return images;
}
