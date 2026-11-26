export interface ProductPriceItem {
  model: string;
  rentalRate?: string;
  saleRate?: string;
  notes?: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  categoryId: string;
  indicativePriceMin: number;
  indicativePriceMax: number;
  hasPlusSign?: boolean;
  indicativePriceDisplay: string;
  rentalRateDisplay?: string;
  salePriceDisplay?: string;
  pricingItems?: ProductPriceItem[];
  image: string;
  galleryImages?: string[];
  shortDescription: string;
  fullDescription: string;
  careContext: string;
  intendedUses: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  relatedProductSlugs: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  iconName: string;
  image?: string;
}

export interface LocationBranch {
  id: string;
  slug: string;
  city: string;
  state: string;
  pincode: string;
  exactAddress: string;
  shortIntro: string;
  cityOverview: string;
  mapsUrl: string;
  featuredInCity: string[];
  image?: string;
  faqs: { question: string; answer: string }[];
}

export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  readTime: string;
  image?: string;
  summary: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedProductSlugs: string[];
  disclaimer: string;
}

