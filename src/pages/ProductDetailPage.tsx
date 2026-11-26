import { useState, useEffect } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../data/categories';
import { LOCATIONS } from '../data/locations';
import { PRODUCTS } from '../data/products';
import { SEOHead } from '../components/SEOHead';
import { Link, getRentalUrl, getSaleUrl } from '../utils/router';
import { ProductCard } from '../components/ProductCard';
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  getWhatsAppUrl,
} from '../utils/whatsapp';
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ChevronRight,
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  onOpenQuoteModal: (productSlug?: string, citySlug?: string, mode?: 'rental' | 'purchase' | 'price') => void;
}

export function ProductDetailPage({ product, onOpenQuoteModal }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.image);

  useEffect(() => {
    setSelectedImage(product.image);
  }, [product.image, product.slug]);

  const galleryList = product.galleryImages && product.galleryImages.length > 0 
    ? product.galleryImages 
    : [product.image];
  const category = CATEGORIES.find((c) => c.id === product.categoryId);
  const relatedProducts = PRODUCTS.filter((p) =>
    product.relatedProductSlugs.includes(p.slug)
  );

  const priceWhatsappUrl = getWhatsAppUrl({
    productName: product.name,
    priceRange: product.indicativePriceDisplay,
    enquiryType: 'price',
  });

  const rentalWhatsappUrl = getWhatsAppUrl({
    productName: product.name,
    enquiryType: 'rental',
  });

  const purchaseWhatsappUrl = getWhatsAppUrl({
    productName: product.name,
    enquiryType: 'purchase',
  });

  // Schema for Product
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: typeof window !== 'undefined' ? `${window.location.origin}${product.image}` : product.image,
    description: product.shortDescription,
    category: category?.name,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: product.indicativePriceMin,
      highPrice: product.indicativePriceMax,
      offerCount: '1',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${product.name} Price Range, Sales & Rental | F7 Medical Equipment`}
        description={`${product.name} indicative market price: ${product.indicativePriceDisplay}. Explore technical overview, intended uses, care context, and rental options across 7 cities.`}
        canonicalPath={`/products/${product.slug}/`}
        ogType="product"
        schema={productSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/products-services/" className="hover:text-teal-700">Products &amp; Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          {category && (
            <>
              <Link to={`/categories/${category.slug}/`} className="hover:text-teal-700">
                {category.name}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </>
          )}
          <span className="font-semibold text-slate-800 truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Product Hero / Purchase Module */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Product Image & Badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-4/3 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm relative p-6 flex items-center justify-center">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-xs">
                {category?.name}
              </div>
            </div>

            {/* Thumbnail Gallery (when multiple images are available) */}
            {galleryList.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {galleryList.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative w-20 h-20 rounded-xl bg-slate-50 border-2 overflow-hidden shrink-0 p-1.5 flex items-center justify-center transition-all cursor-pointer ${
                      selectedImage === imgUrl
                        ? 'border-teal-600 ring-2 ring-teal-500/30'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Mandatory Technical Notice */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <p>
                <strong>Specification Notice:</strong> Please contact our team for model-specific technical specifications, accessories and current availability.
              </p>
            </div>
          </div>

          {/* Right Column: Title, Indicative Price, Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Medical Equipment Catalog
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Indicative Price Card & Disclaimer */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/90 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.rentalRateDisplay && (
                  <div className="p-3.5 bg-white rounded-lg border border-teal-200 shadow-xs">
                    <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block">
                      Rental Rate
                    </span>
                    <div className="text-xl sm:text-2xl font-extrabold text-teal-950 font-mono tracking-tight mt-1 tabular-nums">
                      {product.rentalRateDisplay}
                    </div>
                    <span className="text-[10px] text-teal-700 mt-0.5 block">
                      Monthly / Short-Term Flexible
                    </span>
                  </div>
                )}
                {product.salePriceDisplay && (
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-xs">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Purchase Price
                    </span>
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono tracking-tight mt-1 tabular-nums">
                      {product.salePriceDisplay}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">
                      Brand New with Manufacturer Warranty
                    </span>
                  </div>
                )}
                {!product.rentalRateDisplay && !product.salePriceDisplay && (
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-xs sm:col-span-2">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Indicative Reference Range
                    </span>
                    <div className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight mt-1 tabular-nums">
                      {product.indicativePriceDisplay}
                    </div>
                  </div>
                )}
              </div>

              {/* Exact Prompt Mandatory Disclaimer */}
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-slate-800">Pricing Disclaimer:</strong> Indicative market price only. Final F7 Medical Equipment price depends on brand, model, configuration, condition, accessories, taxes and availability. Contact our team for the latest price and written quotation.
                  </p>
                </div>
              </div>

              {/* Model Rate Breakdown Table from Official Price Sheet */}
              {product.pricingItems && product.pricingItems.length > 0 && (
                <div className="bg-white rounded-lg border border-slate-200 p-3.5 shadow-xs">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        Rate Sheet Models &amp; Configurations
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Official F7 Medical Equipment Reference
                      </span>
                    </div>
                    <span className="text-[10px] text-teal-800 font-semibold bg-teal-50 border border-teal-100 px-2 py-0.5 rounded">
                      Standard Rates
                    </span>
                  </div>
                  <div className="overflow-x-auto max-h-64 overflow-y-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-100 text-slate-400 text-[10px] uppercase font-semibold">
                          <th className="pb-1.5 font-semibold">Model / Option</th>
                          <th className="pb-1.5 font-semibold">Rental Rate</th>
                          <th className="pb-1.5 font-semibold text-right">Sale Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {product.pricingItems.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80">
                            <td className="py-2 pr-2">
                              <span className="font-semibold text-slate-800 block text-xs">
                                {item.model}
                              </span>
                              {item.notes && (
                                <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                                  {item.notes}
                                </span>
                              )}
                            </td>
                            <td className="py-2 pr-2 whitespace-nowrap">
                              {item.rentalRate ? (
                                <span className="text-[11px] font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                                  {item.rentalRate}
                                </span>
                              ) : (
                                <span className="text-[11px] text-slate-400 italic">—</span>
                              )}
                            </td>
                            <td className="py-2 text-right font-mono font-bold text-slate-900 whitespace-nowrap text-[11px]">
                              {item.saleRate || '—'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Action Buttons: Request Latest Price, Rent Now, Buy Now */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <button
                  onClick={() => onOpenQuoteModal(product.slug, undefined, 'price')}
                  className="py-3 px-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-lg transition-colors cursor-pointer text-center min-h-[44px] flex items-center justify-center"
                >
                  Request Latest Price
                </button>

                <button
                  onClick={() => onOpenQuoteModal(product.slug, undefined, 'rental')}
                  className="py-3 px-3 bg-slate-900 hover:bg-slate-800 text-teal-300 font-bold rounded-lg transition-colors cursor-pointer text-center min-h-[44px] flex items-center justify-center"
                >
                  Rental Enquiry
                </button>

                <button
                  onClick={() => onOpenQuoteModal(product.slug, undefined, 'purchase')}
                  className="py-3 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-lg transition-colors cursor-pointer text-center min-h-[44px] flex items-center justify-center border border-slate-200 sm:border-transparent"
                >
                  Purchase Enquiry
                </button>
              </div>

              {/* Direct WhatsApp Price & Direct Call */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2">
                <a
                  href={priceWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Price Enquiry</span>
                </a>
                <a
                  href={BUSINESS_PHONE_TEL}
                  className="py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Call {BUSINESS_PHONE}</span>
                </a>
              </div>
            </div>

            {/* Care-Setting Context Summary */}
            <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-100 text-xs text-teal-950">
              <strong className="font-bold text-teal-900 block mb-1">
                Intended Care-Setting Context:
              </strong>
              <p className="text-slate-700 leading-relaxed">
                {product.careContext}
              </p>
            </div>
          </div>
        </div>

        {/* Section: Equipment Explanation & Intended Uses */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            {/* General Equipment Explanation */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                General Equipment Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Intended Uses */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Intended Uses &amp; Clinical Applications
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {product.intendedUses.map((use, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* General Features */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Key Functional Characteristics
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product-Specific FAQs */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Frequently Asked Questions About {product.name}
              </h3>
              <div className="space-y-3">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {faq.question}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Seven City Links for Rent & Buy */}
          <div className="lg:col-span-4 space-y-6">
            {/* Section 8.16: Links to All Seven Cities */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Available Across Seven Cities</span>
              </div>
              <p className="text-xs text-slate-500">
                Explore dedicated rental and purchase availability in your specific city:
              </p>

              <div className="space-y-2">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.slug}
                    className="p-2.5 bg-white rounded-lg border border-slate-200/80 text-xs flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-800">{loc.city}</span>
                    <div className="flex items-center gap-2">
                      <Link
                        to={getRentalUrl(product.slug, loc.slug)}
                        className="text-[11px] font-semibold text-teal-700 hover:underline"
                      >
                        Rent
                      </Link>
                      <span className="text-slate-300">|</span>
                      <Link
                        to={getSaleUrl(product.slug, loc.slug)}
                        className="text-[11px] font-semibold text-slate-700 hover:underline"
                      >
                        Buy
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Branch Assistance Card */}
            <div className="bg-slate-900 text-white p-5 rounded-xl space-y-3">
              <h4 className="text-sm font-bold text-white">Need Personal Consultation?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our biomedical equipment team assists with doctor prescription matching, configuration options, and delivery schedules.
              </p>
              <a
                href={BUSINESS_PHONE_TEL}
                className="w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors block text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_PHONE}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 8.15: Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Complementary Care
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Related Medical Equipment
                </h3>
              </div>
              <Link
                to="/products-services/"
                className="text-xs font-semibold text-teal-700 hover:underline flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.slug}
                  product={relProduct}
                  onOpenQuoteModal={onOpenQuoteModal}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
