import { LocationBranch } from '../types';
import { LOCATIONS } from '../data/locations';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
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
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Building2,
  Clock,
  Compass
} from 'lucide-react';

interface LocationPageProps {
  location: LocationBranch;
  onOpenQuoteModal: (productSlug?: string, citySlug?: string, mode?: 'rental' | 'purchase' | 'price') => void;
}

export function LocationPage({ location, onOpenQuoteModal }: LocationPageProps) {
  const otherLocations = LOCATIONS.filter((l) => l.slug !== location.slug);
  const featuredProducts = PRODUCTS.filter((p) =>
    location.featuredInCity.includes(p.slug)
  );

  const cityWhatsapp = getWhatsAppUrl({
    cityName: location.city,
    enquiryType: 'general',
  });

  const isDirectCityPath = typeof window !== 'undefined' && window.location.pathname.startsWith(`/${location.slug}`);
  const activeLocationPath = `/${location.slug}/`;

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `F7 Medical Equipment - ${location.city}`,
    telephone: '+919347403085',
    email: 'care@medicalequipments.com',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00',
    url: typeof window !== 'undefined' ? `${window.location.origin}${activeLocationPath}` : `https://f7medicalequipments.com${activeLocationPath}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.exactAddress,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'IN',
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`Medical Equipment in ${location.city} – Sales & Rental | F7 Medical`}
        description={`F7 Medical Equipment ${location.city} branch at ${location.exactAddress}. Certified sales and rental for oxygen concentrators, ventilators, hospital beds & ICU equipment.`}
        canonicalPath={activeLocationPath}
        schema={locationSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/products-services/" className="hover:text-teal-700">Locations</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-800">{location.city} Branch</span>
        </div>
      </div>

      {/* Location Hero */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-wider bg-teal-950/80 border border-teal-800/80 px-3 py-1 rounded-md">
              <Building2 className="w-3.5 h-3.5" />
              <span>Official Registered Branch Premise</span>
            </div>

            {/* Unique H1 per location */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Medical Equipment Sales &amp; Rentals in {location.city}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {location.cityOverview}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-800/90 backdrop-blur-xs p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-2 text-teal-400 font-semibold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>{location.city} Hub Quick Desk</span>
                </div>
                <span className="text-[10px] bg-teal-950 text-teal-300 border border-teal-800 px-2 py-0.5 rounded-full font-medium">
                  Verified Branch
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px] mb-1 font-medium">Official Branch Address:</span>
                  <p className="font-mono text-slate-200 text-[11px] leading-relaxed p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 select-all">
                    {location.exactAddress}
                  </p>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Fast Same-Day City Dispatch</span>
                  <span className="text-teal-400 font-semibold">Sanitized Clinical Stock</span>
                </div>
              </div>

              <div className="pt-1 grid grid-cols-2 gap-2 text-xs">
                <a
                  href={BUSINESS_PHONE_TEL}
                  className="py-2.5 px-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Branch</span>
                </a>
                <a
                  href={cityWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Branch Overview, Rental/Buy Sections, FAQs */}
          <div className="lg:col-span-8 space-y-10">
            {/* Exact Official Address Highlight */}
            <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Official Branch Address</span>
                </span>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm font-mono text-slate-800 select-all leading-relaxed shadow-2xs break-words">
                {location.exactAddress}
              </div>

              {/* Exact Prompt Mandatory Notice */}
              <p className="text-xs text-slate-600 italic">
                &ldquo;Contact F7 Medical Equipment to confirm current product availability, rental terms and service options in your area.&rdquo;
              </p>
            </div>

            {/* Rental Enquiry Section */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Medical Equipment Rental Enquiries in {location.city}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We coordinate rental agreements for home convalescence, post-operative recovery, and transitional step-down care throughout {location.city}. Common rental categories include oxygen concentrators, hospital beds, BiPAP machines, and suction devices.
              </p>
              <div className="p-3 bg-teal-50 rounded-lg text-xs text-teal-950">
                <strong>Rental Pricing Policy:</strong> Rental charges depend on the equipment model, rental duration, availability, delivery requirements and applicable terms. Contact our team for the latest rental quotation.
              </div>
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onOpenQuoteModal(undefined, location.slug, 'rental')}
                  className="w-full sm:w-auto py-3 px-4 min-h-[44px] bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center"
                >
                  Enquire About Rentals in {location.city}
                </button>
                <a
                  href={cityWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp {location.city} Desk</span>
                </a>
              </div>
            </div>

            {/* Purchase Enquiry Section */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Medical Equipment Purchase Enquiries in {location.city}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For clinics, nursing homes, and private hospital facilities in {location.city}, F7 Medical Equipment provides new hardware sales with formal tax invoicing, manufacturer warranties, and biomedical setup support.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700 border border-slate-200">
                <strong>Purchase Pricing Policy:</strong> Displayed prices are indicative market reference ranges. Contact F7 Medical Equipment to confirm the latest selling price, available models, specifications, taxes and quotation.
              </div>
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onOpenQuoteModal(undefined, location.slug, 'purchase')}
                  className="w-full sm:w-auto py-3 px-4 min-h-[44px] bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center"
                >
                  Enquire About Purchases in {location.city}
                </button>
                <a
                  href={BUSINESS_PHONE_TEL}
                  className="w-full sm:w-auto py-3 px-4 min-h-[44px] bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call {BUSINESS_PHONE}</span>
                </a>
              </div>
            </div>

            {/* City-Specific FAQs */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions – {location.city} Branch
              </h3>
              <div className="space-y-3">
                {location.faqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs">
                    <h4 className="font-bold text-slate-900 mb-1 text-sm">{faq.question}</h4>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Card, Categories, & Other Locations */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Contact Box */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Connect with {location.city} Team
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct phone and digital messaging support for patient families and medical procurement officers.
              </p>

              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700/80 flex items-center gap-2.5 text-xs">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <div>
                  <span className="text-white font-bold block">Open 24/7 Hours</span>
                  <span className="text-[11px] text-teal-300">Continuous Dispatch &amp; Patient Support</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs pt-1">
                <a
                  href={BUSINESS_PHONE_TEL}
                  className="w-full py-2.5 px-3 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_PHONE}</span>
                </a>

                <a
                  href={cityWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Message</span>
                </a>

                <a
                  href={BUSINESS_EMAIL_MAILTO}
                  className="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>Email {BUSINESS_EMAIL}</span>
                </a>

                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-slate-800/60 hover:bg-slate-800 text-teal-400 rounded-lg font-medium flex items-center justify-center gap-1.5 transition-colors text-[11px]"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Medical Equipment Categories */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider">
                Equipment Categories in {location.city}
              </h4>
              <ul className="space-y-1.5">
                {CATEGORIES.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/categories/${cat.slug}/`}
                      className="text-slate-700 hover:text-teal-700 flex items-center justify-between py-1 border-b border-slate-100"
                    >
                      <span>{cat.name}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links to Other Six Locations */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider">
                Other Branch Locations
              </h4>
              <p className="text-slate-500 text-[11px]">
                F7 Medical Equipment also operates official facilities in:
              </p>
              <div className="space-y-2 pt-1">
                {otherLocations.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/${other.slug}/`}
                    className="p-2.5 bg-slate-50 hover:bg-teal-50/50 rounded-lg border border-slate-200 hover:border-teal-400 block transition-colors"
                  >
                    <div className="font-bold text-slate-900">{other.city} ({other.state})</div>
                    <div className="text-[11px] text-slate-500 truncate mt-0.5">{other.exactAddress}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products in this City */}
        {featuredProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="mb-6">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Frequently Requested
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Popular Equipment Enquiries in {location.city}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((p) => (
                <ProductCard
                  key={p.slug}
                  product={p}
                  citySlug={location.slug}
                  cityName={location.city}
                  onOpenQuoteModal={onOpenQuoteModal}
                />
              ))}
            </div>
          </div>
        )}

        {/* Complete 28 Products Directory in this City */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="mb-6">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              {location.city} Equipment Directory
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              All 28 Medical Products Available for Rent &amp; Sale in {location.city}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select any equipment below to view dedicated {location.city} rental terms or purchase specifications:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {PRODUCTS.map((prod) => {
              const isIcuBed = prod.slug === 'icu-bed';
              return (
                <div
                  key={prod.slug}
                  className={`p-3 bg-white rounded-lg border transition-all text-xs flex flex-col justify-between ${
                    isIcuBed
                      ? 'border-teal-500/80 bg-teal-50/25 ring-1 ring-teal-500/30 shadow-xs'
                      : 'border-slate-200 hover:border-teal-500'
                  }`}
                >
                  <div>
                    <h4 className={`font-bold flex items-center justify-between gap-1.5 ${isIcuBed ? 'text-teal-950 font-extrabold' : 'text-slate-900'}`}>
                      <span>{isIcuBed ? 'ICU Setup at Home' : prod.name}</span>
                      {isIcuBed && (
                        <span className="text-[10px] font-semibold text-teal-800 bg-teal-100/90 px-1.5 py-0.5 rounded-sm shrink-0">
                          ICU Bed
                        </span>
                      )}
                    </h4>
                    <span className="text-[11px] text-slate-500 font-mono block mt-0.5">
                      {prod.indicativePriceDisplay}
                    </span>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold">
                    <Link
                      to={getRentalUrl(prod.slug, location.slug)}
                      className="text-teal-700 hover:underline"
                    >
                      Rent in {location.city} &rarr;
                    </Link>
                    <Link
                      to={getSaleUrl(prod.slug, location.slug)}
                      className="text-slate-700 hover:underline"
                    >
                      Buy in {location.city} &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
