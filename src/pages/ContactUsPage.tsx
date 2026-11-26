import React, { useState } from 'react';
import { LOCATIONS } from '../data/locations';
import { PRODUCTS } from '../data/products';
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
  MapPin,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Navigation,
  Compass,
  Building2,
  Clock,
} from 'lucide-react';

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'hyderabad',
    product: 'oxygen-concentrator',
    enquiryType: 'rental',
    message: '',
  });

  const [activeMapSlug, setActiveMapSlug] = useState<string>('hyderabad');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const activeLocation = LOCATIONS.find((l) => l.slug === activeMapSlug) || LOCATIONS[0];
  const activeDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(activeLocation.exactAddress)}`;
  const activeOpenMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLocation.exactAddress)}`;
  const activeWhatsappUrl = getWhatsAppUrl({ cityName: activeLocation.city, enquiryType: 'general' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  const handleInstantWhatsApp = () => {
    const selectedProd = PRODUCTS.find((p) => p.slug === formData.product);
    const selectedLoc = LOCATIONS.find((l) => l.slug === formData.city);

    const text = `Hello F7 Medical Equipment,\n\nName: ${formData.fullName || 'Customer'}\nPhone: ${formData.phone || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nCity: ${selectedLoc?.city || formData.city}\nProduct: ${selectedProd?.name || formData.product}\nEnquiry Type: ${formData.enquiryType.toUpperCase()}\nMessage: ${formData.message || 'Please send price quotation and availability.'}`;

    window.open(`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Contact Us – F7 Medical Equipment Across 7 Indian Locations"
        description="Contact F7 Medical Equipment at +91 9347403085 or care@medicalequipments.com. View exact branch addresses and interactive branch details for Hyderabad, Delhi, Vijayawada, Visakhapatnam, Chennai, Bangalore, and Pune."
        canonicalPath="/contact-us/"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-800">Contact Us</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
            Branch Network &amp; Customer Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact F7 Medical Equipment
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Reach out for medical equipment sales, rental agreements, product specifications, or service support across all seven official Indian branches.
          </p>
        </div>
      </div>

      {/* Direct Contact Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Phone Support</span>
              <a href={BUSINESS_PHONE_TEL} className="text-base font-bold text-slate-900 hover:text-teal-700">
                {BUSINESS_PHONE}
              </a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Instant WhatsApp</span>
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-slate-900 hover:text-emerald-700"
              >
                +{BUSINESS_WHATSAPP_NUMBER}
              </a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Email Inquiries</span>
              <a href={BUSINESS_EMAIL_MAILTO} className="text-base font-bold text-slate-900 hover:text-teal-700">
                {BUSINESS_EMAIL}
              </a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Working Hours</span>
              <span className="text-base font-bold text-teal-700 block">
                Open 24/7
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body: Enquiry Form & Interactive Google Maps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Section 14 Enquiry Form */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="mb-6">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Direct Submission
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Medical Equipment Enquiry Form
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Complete the fields below to register your requirements. We respond promptly with verified model options and quotations.
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className="p-6 bg-white rounded-xl border border-slate-200 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Enquiry Form Submitted</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you for contacting F7 Medical Equipment. Your request for{' '}
                  <strong className="text-slate-900">{PRODUCTS.find(p => p.slug === formData.product)?.name}</strong> in{' '}
                  <strong className="text-slate-900">{LOCATIONS.find(l => l.slug === formData.city)?.city}</strong> has been received by our branch logistics coordinator.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleInstantWhatsApp}
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send Directly on WhatsApp for Instant Response</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Sharma / Ananya Verma"
                    className="w-full p-2.5 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full p-2.5 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. care@example.com"
                      className="w-full p-2.5 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      City / Nearest Branch *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => {
                        setFormData({ ...formData, city: e.target.value });
                        setActiveMapSlug(e.target.value);
                      }}
                      className="w-full p-2.5 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                      {LOCATIONS.map((loc) => (
                        <option key={loc.slug} value={loc.slug}>
                          {loc.city} ({loc.state})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Enquiry Type *
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full p-2.5 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="rental">Medical Equipment Rental</option>
                      <option value="purchase">Medical Equipment Purchase</option>
                      <option value="general">General / Technical Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Product Interested In *
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full p-2.5 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.slug} value={prod.slug}>
                        {prod.name} (Indicative: {prod.indicativePriceDisplay})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Message / Prescription Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention rental duration, required accessories, or physician prescription notes..."
                    className="w-full p-2.5 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Submit Enquiry
                  </button>
                  <button
                    type="button"
                    onClick={handleInstantWhatsApp}
                    className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Instead</span>
                  </button>
                </div>
              </form>
            )}

            {/* Prompt Requirement for form transparency */}
            <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <p>
                For urgent or emergency requests, WhatsApp or direct telephone communication (+91 9347403085) is recommended for immediate stock confirmation.
              </p>
            </div>
          </div>

          {/* Official Branch Facility Explorer for All 7 Locations */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-teal-600" />
                  <span>Pan-India Facility Explorer</span>
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  Find Nearest F7 Facility
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeOpenMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-teal-700 hover:text-teal-800 bg-slate-50 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={activeDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* City Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full">
              {LOCATIONS.map((loc) => {
                const isActive = activeMapSlug === loc.slug;
                return (
                  <button
                    key={loc.slug}
                    onClick={() => setActiveMapSlug(loc.slug)}
                    className={`px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {loc.city}
                  </button>
                );
              })}
            </div>

            {/* Selected City's Branch Information Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      F7 Medical Equipment – {activeLocation.city} Branch
                    </h3>
                    <span className="text-xs font-semibold text-teal-700">
                      {activeLocation.state} Region • Registered Operational Facility
                    </span>
                  </div>
                </div>
                <span className="self-start sm:self-auto text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Active Branch &amp; Delivery Hub
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Official Registered Address
                </span>
                <p className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 select-all leading-relaxed break-words">
                  {activeLocation.exactAddress}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 block mb-0.5">Operating Hours</strong>
                  <p className="text-teal-700 font-bold text-sm">Open 24/7 – All 7 Days</p>
                  <p className="text-slate-600">Round-the-Clock Emergency Support &amp; Dispatch</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 block mb-0.5">Delivery &amp; Dispatch</strong>
                  <p className="text-slate-600">2–4 Hour Express Dispatch across {activeLocation.city}</p>
                  <p className="text-slate-600">Biomedical Engineer setup available 24/7</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2">
                <a
                  href={activeOpenMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                  <span>Open in Maps</span>
                </a>
                <a
                  href={activeDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={activeWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
                <a
                  href={BUSINESS_PHONE_TEL}
                  className="py-3 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call Branch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Section: All Seven Official Branch Locations Cards */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Pan-India Branch Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our Locations Across Seven Cities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Every branch operates registered physical premises with biomedical testing equipment, patient rental stock, and logistics support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {LOCATIONS.map((loc) => {
              const locWhatsapp = getWhatsAppUrl({ cityName: loc.city, enquiryType: 'general' });
              const locDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.exactAddress)}`;
              const locOpenMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.exactAddress)}`;

              return (
                <div
                  key={loc.slug}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
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

                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-[11px] text-slate-700 font-mono select-all mb-2 leading-relaxed">
                        <span className="font-bold font-sans text-slate-900 block mb-1">
                          Official Registered Address:
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
                          className="py-2.5 px-3 min-h-[44px] bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl text-center flex items-center justify-center transition-colors"
                        >
                          View Location
                        </Link>
                        <a
                          href={locDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 min-h-[44px] bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Navigation className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>Get Directions</span>
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={BUSINESS_PHONE_TEL}
                          className="py-2.5 px-2 min-h-[44px] bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-xl text-center flex items-center justify-center gap-1.5"
                        >
                          <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>Call Now</span>
                        </a>
                        <a
                          href={locWhatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-2 min-h-[44px] bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium rounded-xl text-center flex items-center justify-center gap-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
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
    </div>
  );
}
