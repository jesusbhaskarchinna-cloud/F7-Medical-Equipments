import { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { LOCATIONS } from '../data/locations';
import { Link } from '../utils/router';
import { ProductCard } from '../components/ProductCard';
import { SEOHead } from '../components/SEOHead';
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_MAILTO,
  BUSINESS_WHATSAPP_NUMBER,
  getWhatsAppUrl,
} from '../utils/whatsapp';
import {
  Phone,
  MessageSquare,
  Mail,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  ExternalLink,
  MapPin,
  ArrowRight,
  Truck,
  HeartPulse,
  Wind,
  BedDouble,
  Accessibility,
  Moon,
  Activity,
  Award,
  Sparkles,
  Navigation,
} from 'lucide-react';

interface HomePageProps {
  onOpenQuoteModal: (productSlug?: string, citySlug?: string, mode?: 'rental' | 'purchase' | 'price') => void;
}

export function HomePage({ onOpenQuoteModal }: HomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categoryId === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'respiratory-care': return <Wind className="w-5 h-5 text-teal-600" />;
      case 'cardiac-care-monitoring': return <HeartPulse className="w-5 h-5 text-teal-600" />;
      case 'hospital-patient-care': return <BedDouble className="w-5 h-5 text-teal-600" />;
      case 'mobility-equipment': return <Accessibility className="w-5 h-5 text-teal-600" />;
      case 'sleep-study-equipment': return <Moon className="w-5 h-5 text-teal-600" />;
      case 'icu-critical-care': return <Activity className="w-5 h-5 text-teal-600" />;
      default: return <HeartPulse className="w-5 h-5 text-teal-600" />;
    }
  };

  const homeFaqs = [
    {
      q: 'How does the medical equipment rental process work with F7?',
      a: 'To rent equipment, identify the device prescribed by your physician and contact our team via phone or WhatsApp. We confirm stock availability at your nearest branch (Hyderabad, Delhi, Vijayawada, Visakhapatnam, Chennai, Bangalore, or Pune), share a clear rental quotation with duration terms and security deposit guidelines, and arrange sanitized delivery.',
    },
    {
      q: 'Are the product prices shown on the website guaranteed selling prices?',
      a: 'No. The prices displayed across the website are indicative Indian market reference ranges intended for planning. Actual F7 Medical Equipment selling prices depend on specific brand, model tier, technical specifications, warranty packages, and prevailing GST rates. Contact our team for an exact written quotation.',
    },
    {
      q: 'Can equipment be purchased directly for hospitals and private clinics?',
      a: 'Yes, F7 supplies clinics, diagnostic centers, nursing homes, and hospitals across India with commercial medical equipment including patient monitors, ventilators, ECG machines, hospital beds, and infusion pumps with manufacturer documentation.',
    },
    {
      q: 'What is included in equipment rental packages?',
      a: 'Rental packages include the sanitized medical unit, necessary standard reusable cables/power adapters, and biomedical function check certification. Single-patient consumables (such as nasal cannulas, suction tubing, or ventilator breathing circuits) are provided brand-new.',
    },
    {
      q: 'In which cities does F7 Medical Equipment have official branch premises?',
      a: 'We operate seven dedicated branch facilities: Hyderabad (Tolichowki), Delhi (Malviya Nagar), Vijayawada (Patamata), Visakhapatnam (Arilova), Chennai (Ponniammanmedu), Bangalore (Dooravaninagar), and Pune (Kondhwa Budruk).',
    },
    {
      q: 'How quickly can equipment be delivered in emergency situations?',
      a: 'For urgent critical requirements such as oxygen concentrators, BiPAP machines, or emergency suction units, our local city logistics teams prioritize same-day dispatch based on current stock availability.',
    },
  ];

  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'F7 Medical Equipment',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://f7medicalequipments.com',
    logo: typeof window !== 'undefined' ? `${window.location.origin}/assets/aistudio/images-removebg-preview__1__8a8da6c4.png` : '',
    telephone: '+919347403085',
    email: 'care@medicalequipments.com',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00',
    priceRange: '₹500 - ₹22,00,000+',
    description: 'Reliable medical equipment sales and rentals across Hyderabad, Delhi, Vijayawada, Visakhapatnam, Chennai, Bangalore, and Pune.',
    address: LOCATIONS.map((loc) => ({
      '@type': 'PostalAddress',
      streetAddress: loc.exactAddress,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.pincode,
      addressCountry: 'IN',
    })),
  };

  return (
    <div className="bg-white">
      <SEOHead
        title="F7 Medical Equipment – Reliable Sales & Rentals Across 7 Cities in India"
        description="Explore 28 medical equipment categories for home care and hospitals across Hyderabad, Delhi, Vijayawada, Visakhapatnam, Chennai, Bangalore, and Pune."
        canonicalPath="/"
        schema={homepageSchema}
      />

      {/* Section 7.1: Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden py-16 lg:py-24">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest bg-teal-950/70 border border-teal-800/80 px-3 py-1.5 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Certified Medical Equipment Sales &amp; Rentals</span>
              </div>

              {/* Exact Prompt Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
                Reliable Medical Equipment for Better Care and Everyday Living
              </h1>

              {/* Exact Prompt Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Explore medical equipment for home care, hospitals, respiratory support, patient monitoring, mobility and critical care. Contact F7 Medical Equipment for product information, rental enquiries and purchase assistance.
              </p>

              {/* Exact Prompt Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Link
                  to="/products-services/"
                  className="w-full sm:w-auto text-center px-5 py-3 min-h-[44px] bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition-colors flex items-center justify-center"
                >
                  Explore Products
                </Link>

                <button
                  onClick={() => onOpenQuoteModal(undefined, undefined, 'rental')}
                  className="w-full sm:w-auto text-center px-5 py-3 min-h-[44px] bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-800/60 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center"
                >
                  Rent Medical Equipment
                </button>

                <button
                  onClick={() => onOpenQuoteModal(undefined, undefined, 'purchase')}
                  className="w-full sm:w-auto text-center px-5 py-3 min-h-[44px] bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center"
                >
                  Buy Medical Equipment
                </button>

                <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex sm:items-center">
                  <a
                    href={BUSINESS_PHONE_TEL}
                    className="w-full sm:w-auto text-center px-4 py-3 min-h-[44px] bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={getWhatsAppUrl({ enquiryType: 'general' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-4 py-3 min-h-[44px] bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
                <div>
                  <strong className="text-white block text-sm font-bold">7 Branches</strong>
                  <span>Across Major Indian Metros</span>
                </div>
                <div>
                  <strong className="text-white block text-sm font-bold">28 Products</strong>
                  <span>Comprehensive Healthcare Range</span>
                </div>
                <div>
                  <strong className="text-white block text-sm font-bold">Sanitized Units</strong>
                  <span>Rigorous Biomedical Testing</span>
                </div>
                <div>
                  <strong className="text-white block text-sm font-bold">Direct Support</strong>
                  <span>Phone &amp; WhatsApp Assistance</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                <img
                  src="/assets/aistudio/Medical_Equipment_Rent___Sale_0032b2c8.png"
                  alt="F7 Complete Medical Equipment for Rent and Sale"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800 text-xs">
                  <div className="flex items-center justify-between text-teal-400 font-semibold mb-1">
                    <span>Clinical-Grade Equipment Range</span>
                    <span className="text-[10px] text-slate-400 font-normal">7 City Hubs</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Supporting intensive care units, step-down recovery rooms, and compassionate home healthcare setups across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7.2: Trust / Service Cards */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: 'Medical Equipment Sales', desc: 'Brand-new clinical hardware with warranties' },
              { title: 'Medical Equipment Rentals', desc: 'Flexible short and long-term home hire' },
              { title: 'Home Healthcare Equipment', desc: 'Convalescence beds, concentrators & aids' },
              { title: 'Hospital Equipment', desc: 'ICU monitoring, ventilators & syringe pumps' },
              { title: 'Product Enquiries', desc: 'Indicative price guidance & consultations' },
              { title: 'Customer Assistance', desc: 'Direct phone & WhatsApp coordination' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:border-teal-500 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7.3: Featured Products (All 28 Products) */}
      <section id="featured-products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Complete Equipment Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Featured Medical Equipment
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                Browse all 28 specialized products across respiratory, cardiac, patient bed, mobility, sleep study, and ICU critical care categories.
              </p>
            </div>

            <Link
              to="/products-services/"
              className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1.5 self-start md:self-auto py-2 px-3 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors shrink-0"
            >
              <span>View All Products Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All 28 Products
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Indicative Price Notice Box */}
          <div className="mb-8 p-4 bg-teal-50/60 rounded-xl border border-teal-200 text-xs text-teal-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Indicative Price Policy Notice:</strong>
              <span className="ml-1 text-slate-700">
                Indicative market price only. Final F7 Medical Equipment price depends on brand, model, configuration, condition, accessories, taxes and availability. Contact our team for the latest price and written quotation.
              </span>
            </div>
          </div>

          {/* 28 Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7.4: Category Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Care Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Explore by Equipment Specialization
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Structured categories designed to help clinicians and family caregivers quickly identify relevant patient hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/categories/${cat.slug}/`}
                className="bg-white rounded-xl border border-slate-200 hover:border-teal-500 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between overflow-hidden"
              >
                {cat.image && (
                  <div className="aspect-16/10 bg-slate-50/80 border-b border-slate-100 p-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                        {getCategoryIcon(cat.id)}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                        {cat.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {cat.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                    <span>Explore Equipment Range</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7.5: Rental and Purchase Process Section */}
      <section id="rental-purchase" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Transparent Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                How Our Rental &amp; Purchase Enquiries Work
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you require medical equipment for short-term home convalescence or are procuring commercial hardware for a hospital department, our dedicated customer desk guides you through every step.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Consultation &amp; Prescription Review</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Share your doctor’s prescription (e.g. required oxygen flow rate or ventilator settings) so our biomedical team recommends suitable equipment options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Written Quotation &amp; Specification Sheet</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Receive an official written quotation outlining specific brand/model availability, rental tenure or purchase pricing, taxes, and security terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Sanitized Dispatch &amp; Installation Guidance</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Every unit is disinfected and tested prior to dispatch from your nearest city branch, with operational orientation provided upon setup.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exact Prompt Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenQuoteModal(undefined, undefined, 'rental')}
                  className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Explore Rental Options
                </button>
                <button
                  onClick={() => onOpenQuoteModal(undefined, undefined, 'purchase')}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Explore Purchase Options
                </button>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Request a Quotation
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      F7 Healthcare Assurance Guarantee
                    </h3>
                    <p className="text-xs text-slate-500">
                      Standard protocol across all 7 city facilities
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span>Biomedical Tested</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Every rental unit undergoes rigorous calibration and electrical safety checks before dispatch.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span>Deep Sanitization</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Hospital-grade disinfection protocols ensuring spotless, sterile delivery for patient bedrooms.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span>Prompt City Dispatch</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Priority same-day delivery across Hyderabad, Delhi, Vijayawada, Vizag, Chennai, Bangalore, and Pune.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span>Operational Training</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Guidance on control panel operation, flow settings, alarm interpretation, and routine care.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-teal-50/70 rounded-xl border border-teal-200/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-teal-950 block">Need immediate assistance?</span>
                    <span className="text-[11px] text-teal-800">Direct phone &amp; WhatsApp coordination</span>
                  </div>
                  <a
                    href={BUSINESS_PHONE_TEL}
                    className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-lg text-xs transition-colors shrink-0"
                  >
                    Call {BUSINESS_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7.6: Our Locations Section (All 7 City Cards) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Pan-India Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our Locations Across Seven Cities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Official branch premises coordinating local sales, patient rentals, and technical enquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {LOCATIONS.map((loc) => {
              const cityWhatsapp = getWhatsAppUrl({ cityName: loc.city, enquiryType: 'general' });
              const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.exactAddress)}`;

              return (
                <div
                  key={loc.slug}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                          <h3 className="text-base font-bold text-slate-900">
                            {loc.city} Branch
                          </h3>
                        </div>
                        <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                          {loc.state}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                        {loc.shortIntro}
                      </p>

                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-[11px] text-slate-700 font-mono select-all mb-2">
                        <span className="font-bold font-sans text-slate-900 block mb-1">
                          Official Address:
                        </span>
                        {loc.exactAddress}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 space-y-2 text-xs">
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to={`/${loc.slug}/`}
                          className="py-2 px-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-lg text-center block transition-colors"
                        >
                          View Location
                        </Link>
                        <a
                          href={directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-center flex items-center justify-center gap-1 transition-colors"
                        >
                          <Navigation className="w-3.5 h-3.5 text-teal-400" />
                          <span>Get Directions</span>
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={BUSINESS_PHONE_TEL}
                          className="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-lg text-center flex items-center justify-center gap-1"
                        >
                          <Phone className="w-3 h-3 text-teal-600" />
                          <span>Call Now</span>
                        </a>
                        <a
                          href={cityWhatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium rounded-lg text-center flex items-center justify-center gap-1"
                        >
                          <MessageSquare className="w-3 h-3 text-emerald-700" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7.7: Why Choose F7 Medical Equipment */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Operating Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Why Choose F7 Medical Equipment
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Factual, transparent healthcare hardware support centered on patient well-being, clear pricing disclosures, and multi-city presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Biomedical Verification &amp; Sanitization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prior to every rental dispatch or commercial handoff, devices undergo thorough electrical safety checks, transducer calibrations, and clinical disinfection protocols with brand-new patient disposables.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Seven Dedicated Metro Branches
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct branch infrastructure in Hyderabad, Delhi, Vijayawada, Visakhapatnam, Chennai, Bangalore, and Pune facilitates faster local response times and personalized delivery coordination.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                24/7 Phone &amp; WhatsApp Communication
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with knowledgeable product specialists 24/7 round the clock over phone (+91 9347403085) or instant WhatsApp to share prescriptions, ask technical questions, and obtain written quotations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7.8: FAQ Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Common Questions About Medical Equipment &amp; Rentals
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Clear answers regarding rental terms, product price policies, equipment availability, and contacting our team.
            </p>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-teal-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-teal-600 text-lg leading-none shrink-0">
                    {faqOpenIndex === idx ? '−' : '+'}
                  </span>
                </button>
                {faqOpenIndex === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7.9: Final CTA Section */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 text-teal-400 text-xs font-semibold uppercase tracking-wider bg-teal-950/80 border border-teal-800 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Healthcare Assistance</span>
          </div>

          {/* Exact Prompt Headline */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Looking for Medical Equipment? Talk to Our Team.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our specialists are available across all seven locations to review doctor prescriptions, provide current equipment availability, and issue formal written quotations.
          </p>

          {/* Exact Prompt Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_PHONE_TEL}
              className="px-6 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 9347403085</span>
            </a>

            <a
              href={getWhatsAppUrl({ enquiryType: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>

            <a
              href={BUSINESS_EMAIL_MAILTO}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
