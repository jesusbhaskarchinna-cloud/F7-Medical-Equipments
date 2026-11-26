import { Product, LocationBranch } from '../types';
import { LOCATIONS } from '../data/locations';
import { PRODUCTS } from '../data/products';
import { generateCityServiceContent } from '../data/cityServiceContent';
import { SEOHead } from '../components/SEOHead';
import { Link, getRentalUrl, getSaleUrl } from '../utils/router';
import { ProductCard } from '../components/ProductCard';
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_MAILTO,
  getWhatsAppUrl,
} from '../utils/whatsapp';
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Building2,
  Truck,
  HelpCircle,
  FileText,
  Navigation,
  Clock,
} from 'lucide-react';

interface CityProductServicePageProps {
  product: Product;
  location: LocationBranch;
  mode: 'rent' | 'buy';
  onOpenQuoteModal: (productSlug?: string, citySlug?: string, mode?: 'rental' | 'purchase' | 'price') => void;
}

export function CityProductServicePage({
  product,
  location,
  mode,
  onOpenQuoteModal,
}: CityProductServicePageProps) {
  const isRent = mode === 'rent';
  const serviceKey = isRent ? 'rent' : 'sale';
  const content = generateCityServiceContent(product, location, serviceKey);

  const otherLocations = LOCATIONS.filter((l) => l.slug !== location.slug);
  const relatedProducts = PRODUCTS.filter((p) =>
    product.relatedProductSlugs.includes(p.slug)
  );

  const currentCanonicalUrl = isRent
    ? getRentalUrl(product.slug, location.slug)
    : getSaleUrl(product.slug, location.slug);

  const alternateServiceUrl = isRent
    ? getSaleUrl(product.slug, location.slug)
    : getRentalUrl(product.slug, location.slug);

  const whatsappUrl = getWhatsAppUrl({
    productName: product.name,
    priceRange: product.indicativePriceDisplay,
    cityName: location.city,
    enquiryType: isRent ? 'rental' : 'purchase',
  });

  const cityServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `F7 Medical Equipment - ${location.city}`,
    description: content.metaDescription,
    telephone: '+919347403085',
    email: 'care@medicalequipments.com',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00',
    url: typeof window !== 'undefined' ? `${window.location.origin}${currentCanonicalUrl}` : '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.exactAddress,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.pincode,
      addressCountry: 'IN',
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={content.seoTitle}
        description={content.metaDescription}
        canonicalPath={currentCanonicalUrl}
        schema={cityServiceSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/products-services/" className="hover:text-teal-700">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to={`/products/${product.slug}/`} className="hover:text-teal-700">{product.name}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to={`/${location.slug}/`} className="hover:text-teal-700">{location.city}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-800">
            {isRent ? 'For Rent' : 'For Sale'}
          </span>
        </div>
      </div>

      {/* Header Hero Area */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-wider bg-teal-950/80 border border-teal-800/80 px-3 py-1 rounded-md">
              <MapPin className="w-3.5 h-3.5" />
              <span>{content.badgeText}</span>
            </div>

            {/* Unique H1 per page */}
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {content.h1}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {content.heroIntro}
            </p>
          </div>
        </div>
      </div>

      {/* Main Dual Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Product & City Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Image & Quick Context */}
            <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-50/80 border border-slate-200 shadow-xs relative p-6 flex items-center justify-center">
              <img
                src={product.image}
                alt={`${product.name} in ${location.city}`}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-md font-semibold shadow-xs">
                {product.name} &bull; {location.city} Branch
              </div>
            </div>

            {/* Local Corridor & Healthcare Network Context */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>{location.city} Local Healthcare Network &amp; Delivery</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {content.localCorridorText}
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-700 block mb-1">
                  Primary Delivery Zones in {location.city}:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                  {content.localBranchHighlights.corridorsCovered.map((corridor, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{corridor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service-Specific Overview (Rental vs Sale) */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                {content.serviceOverview.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {content.serviceOverview.description}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {content.serviceOverview.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Suitability */}
            <div className="p-5 bg-teal-50/50 rounded-xl border border-teal-100 space-y-2">
              <h3 className="text-base font-bold text-teal-950">
                Clinical Suitability &amp; Patient Settings
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {content.productClinicalSuitability}
              </p>
            </div>

            {/* Delivery & Setup Protocols from this Branch */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Truck className="w-4 h-4 text-teal-600" />
                <span>{location.city} Delivery, Inspection &amp; Setup Protocol</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {content.deliveryAndSetupTerms.map((term, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-100 mt-2">
                <strong>Dispatch Timeline:</strong> {content.localBranchHighlights.dispatchProtocol}
              </div>
            </div>

            {/* City-Specific FAQs */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal-600" />
                <span>{product.name} in {location.city} – FAQs</span>
              </h3>
              <div className="space-y-3">
                {content.faqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs">
                    <h4 className="font-bold text-slate-900 mb-1 text-sm">{faq.question}</h4>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Official Address & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Price & Action Module */}
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  {content.pricingGuidance.subheadline}
                </span>
                <div className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight mt-1">
                  {content.pricingGuidance.headline}
                </div>
              </div>

              {/* Exact Price Disclaimer */}
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-slate-800">Pricing Disclaimer:</strong> Indicative market price only. Final F7 Medical Equipment price depends on brand, model, configuration, condition, accessories, taxes and availability. Contact our team for the latest price and written quotation.
                  </p>
                </div>
              </div>

              {/* Main Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenQuoteModal(product.slug, location.slug, isRent ? 'rental' : 'purchase')}
                  className="w-full py-3 px-4 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-sm text-center min-h-[44px] flex items-center justify-center"
                >
                  Request {isRent ? 'Rental' : 'Purchase'} Quotation
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp {location.city} Desk</span>
                </a>

                <a
                  href={BUSINESS_PHONE_TEL}
                  className="w-full py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Direct Call: {BUSINESS_PHONE}</span>
                </a>
              </div>

              {/* Switch between Rent and Buy */}
              <div className="pt-3 border-t border-slate-200 text-center text-xs">
                {isRent ? (
                  <Link
                    to={alternateServiceUrl}
                    className="text-teal-700 hover:underline font-semibold"
                  >
                    Looking to buy instead? View {product.name} for Sale in {location.city} &rarr;
                  </Link>
                ) : (
                  <Link
                    to={alternateServiceUrl}
                    className="text-teal-700 hover:underline font-semibold"
                  >
                    Looking to rent instead? View {product.name} on Rent in {location.city} &rarr;
                  </Link>
                )}
              </div>
            </div>

            {/* Official City Branch Box with Interactive Google Map */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>{location.city} Official Branch</span>
                </h4>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.exactAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-700 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs text-slate-700 font-mono bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed select-all break-words">
                {location.exactAddress}
              </p>

              <div className="flex items-center gap-2 text-xs text-teal-800 bg-teal-50/80 p-2.5 rounded-lg border border-teal-100 font-semibold">
                <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Open 24/7 Hours &bull; Round-the-Clock Emergency Support</span>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <Link
                  to={`/${location.slug}/`}
                  className="text-teal-700 font-semibold hover:underline"
                >
                  View full {location.city} location page &rarr;
                </Link>
                <Link
                  to={`/products/${product.slug}/`}
                  className="text-slate-600 hover:text-slate-900"
                >
                  Product specs
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.exactAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-400" />
                  <span>Get Directions to {location.city} Branch</span>
                </a>
              </div>
            </div>

            {/* Links to Other Six Locations using exact URL format */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {isRent ? 'Rent' : 'Buy'} {product.name} in Other Cities
              </h4>
              <p className="text-xs text-slate-500">
                Explore availability and branch details in our six other locations:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {otherLocations.map((other) => {
                  const targetUrl = isRent
                    ? getRentalUrl(product.slug, other.slug)
                    : getSaleUrl(product.slug, other.slug);
                  return (
                    <Link
                      key={other.slug}
                      to={targetUrl}
                      className="p-2 bg-white rounded-lg border border-slate-200/80 hover:border-teal-500 font-medium text-slate-700 hover:text-teal-700 transition-colors block truncate"
                    >
                      {other.city}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products in this City */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Associated Equipment
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Related Medical Hardware in {location.city}
                </h3>
              </div>
              <Link
                to="/products-services/"
                className="text-xs font-semibold text-teal-700 hover:underline flex items-center gap-1"
              >
                <span>Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.slug}
                  product={relProduct}
                  citySlug={location.slug}
                  cityName={location.city}
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
