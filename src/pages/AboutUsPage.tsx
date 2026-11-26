import { LOCATIONS } from '../data/locations';
import { CATEGORIES } from '../data/categories';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
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
  Building2,
  HeartPulse,
  CheckCircle2,
  MapPin,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface AboutUsPageProps {
  onOpenQuoteModal: () => void;
}

export function AboutUsPage({ onOpenQuoteModal }: AboutUsPageProps) {
  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="About Us – F7 Medical Equipment Sales & Rentals Across India"
        description="F7 Medical Equipment provides reliable sales, rentals, and product consultation for home care and hospitals across 7 official Indian branches."
        canonicalPath="/about-us/"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-800">About Us</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              F7 Medical Equipment
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              About F7 Medical Equipment
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We assist patient families, clinicians, and healthcare organizations across India with medical equipment sales, certified rental agreements, and transparent pricing guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Company Overview & Equipment Enquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Core Operations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Medical Equipment Sales &amp; Rental Assistance
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              F7 Medical Equipment operates as an Indian medical equipment provider connecting individuals and healthcare institutions with medical hardware. We recognize that selecting the right clinical equipment—whether recovering from acute respiratory distress at home or equipping a clinic observation room—requires accurate product information, hygiene assurance, and rapid local fulfillment.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our operations focus on two main service models:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Medical Equipment Rentals:</strong> Structured hire arrangements for patients recovering at home, step-down rehabilitation, or palliative care. Units undergo thorough disinfection and biomedical function verification prior to dispatch.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Medical Equipment Sales:</strong> Commercial procurement for private clinics, nursing homes, and individuals requiring permanent ownership of certified medical devices with manufacturer documentation.
                </span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="py-2.5 px-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Request Quotation
              </button>
              <a
                href={BUSINESS_PHONE_TEL}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call {BUSINESS_PHONE}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="/assets/images/healthcare_equipment_showroom_1794038649740.jpg"
                alt="F7 Medical Equipment Healthcare Showroom"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Equipment Categories Overview */}
        <div className="pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Care Settings
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Home-Care &amp; Hospital Equipment Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Our 28 medical equipment products span six core medical specialties:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs"
              >
                <h3 className="text-sm font-bold text-slate-900">{cat.name}</h3>
                <p className="text-slate-600 leading-relaxed">{cat.description}</p>
                <Link
                  to={`/categories/${cat.slug}/`}
                  className="text-teal-700 font-semibold hover:underline inline-block pt-1"
                >
                  View Category Products &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Product Information & Price Enquiry Process */}
        <div className="pt-8 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Support Protocol
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Product Information Assistance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Medical equipment is specialized hardware that must match clinical indications. When you contact F7 Medical Equipment, our team reviews doctor instructions, checks device flow rates or technical parameters, and clarifies accessory requirements before recommending models.
            </p>
            <p className="text-xs text-slate-500 italic">
              Please contact our team for model-specific technical specifications, accessories and current availability.
            </p>
          </div>

          <div className="p-6 bg-teal-50/50 rounded-2xl border border-teal-200/80 space-y-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Transparency
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Price Enquiry &amp; Quotation Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We publish indicative market reference price ranges across all 28 products to assist with healthcare planning. Final quotations are delivered in formal written form detailing specific model numbers, condition (brand new or certified rental), tax rates, and delivery logistics.
            </p>
            <div className="p-3 bg-white rounded-lg border border-teal-200 text-xs text-slate-700">
              <strong>Price Policy:</strong> Indicative market price only. Final F7 Medical Equipment price depends on brand, model, configuration, condition, accessories, taxes and availability.
            </div>
          </div>
        </div>

        {/* Section 12: Our Seven Locations & Exact Addresses */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Branch Infrastructure
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Our Seven Official Branch Locations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              F7 Medical Equipment maintains official physical facilities in seven major Indian cities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between text-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900">{loc.city}</span>
                    <span className="text-[10px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded font-semibold">
                      {loc.state}
                    </span>
                  </div>
                  <p className="text-slate-600 font-mono text-[11px] leading-relaxed select-all mb-3">
                    {loc.exactAddress}
                  </p>
                </div>
                <Link
                  to={`/${loc.slug}/`}
                  className="text-teal-700 font-bold hover:underline pt-2 border-t border-slate-100"
                >
                  View Branch Details &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section 12: Contact Details Callout */}
        <div className="p-8 bg-slate-900 text-white rounded-2xl space-y-6 text-center">
          <h2 className="text-2xl font-bold text-white">
            Connect with F7 Medical Equipment
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Reach out 24/7 via phone, WhatsApp, or email for equipment enquiries, quotation requests, or round-the-clock emergency branch support across India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm pt-2">
            <a
              href={BUSINESS_PHONE_TEL}
              className="py-3 px-5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_PHONE}</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +{BUSINESS_WHATSAPP_NUMBER}</span>
            </a>

            <a
              href={BUSINESS_EMAIL_MAILTO}
              className="py-3 px-5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-lg flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              <span>Email: {BUSINESS_EMAIL}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
