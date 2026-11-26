import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { LOCATIONS } from '../data/locations';
import { BUSINESS_PHONE_TEL, BUSINESS_PHONE, BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';
import { X, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductSlug?: string;
  initialCitySlug?: string;
  initialMode?: 'rental' | 'purchase' | 'price' | 'general';
}

export function QuoteModal({
  isOpen,
  onClose,
  initialProductSlug,
  initialCitySlug,
  initialMode = 'general',
}: QuoteModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState(initialCitySlug || 'hyderabad');
  const [productSlug, setProductSlug] = useState(initialProductSlug || 'oxygen-concentrator');
  const [enquiryType, setEnquiryType] = useState<string>(initialMode || 'rental');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductSlug) setProductSlug(initialProductSlug);
    if (initialCitySlug) setCity(initialCitySlug);
    if (initialMode) setEnquiryType(initialMode);
    setSubmitted(false);
  }, [initialProductSlug, initialCitySlug, initialMode, isOpen]);

  if (!isOpen) return null;

  const selectedProduct = PRODUCTS.find((p) => p.slug === productSlug);
  const selectedLocation = LOCATIONS.find((l) => l.slug === city);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const prodName = selectedProduct?.name || 'Medical Equipment';
    const cityName = selectedLocation?.city || 'India';
    const priceText = selectedProduct?.indicativePriceDisplay || '';
    
    let text = `Hello F7 Medical Equipment,\n\nName: ${name || 'Customer'}\nPhone: ${phone || 'Not provided'}\nCity: ${cityName}\nProduct: ${prodName}\nEnquiry Type: ${enquiryType.toUpperCase()}\n`;
    if (enquiryType === 'price' && priceText) {
      text += `Indicative Range Noted: ${priceText}\n`;
    }
    if (message) {
      text += `Details: ${message}\n`;
    }
    text += `\nPlease share current availability, model options and official written quotation.`;

    window.open(`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] p-2.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer flex items-center justify-center"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Enquiry Received</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-slate-800">{name || 'valued customer'}</strong>. Our {selectedLocation?.city} branch representative will contact you shortly with the latest model availability and written quotation.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-500 text-left border border-slate-100 space-y-1">
              <div><strong className="text-slate-700">Product:</strong> {selectedProduct?.name}</div>
              <div><strong className="text-slate-700">Location:</strong> {selectedLocation?.city}</div>
              <div><strong className="text-slate-700">Enquiry Type:</strong> {enquiryType.toUpperCase()}</div>
              <div><strong className="text-slate-700">Indicative Price:</strong> {selectedProduct?.indicativePriceDisplay}</div>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppInstant}
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="py-3 px-5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                Official Enquiry &amp; Quotation
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Request Medical Equipment Quotation
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Share your requirements. We respond with exact models, condition, and quotation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Branch City *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                  >
                    {LOCATIONS.map((l) => (
                      <option key={l.slug} value={l.slug}>
                        {l.city} ({l.state})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Enquiry Type *
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                  >
                    <option value="rental">Equipment Rental Enquiry</option>
                    <option value="purchase">Equipment Purchase Enquiry</option>
                    <option value="price">Price &amp; Quotation Check</option>
                    <option value="general">Hospital / Clinical Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Product Required *
                </label>
                <select
                  value={productSlug}
                  onChange={(e) => setProductSlug(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name} (Indicative: {p.indicativePriceDisplay})
                    </option>
                  ))}
                </select>
              </div>

              {selectedProduct && (
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-semibold text-slate-800">
                      {enquiryType === 'rental' ? 'Rental Rate:' : enquiryType === 'purchase' ? 'Sale Price:' : 'Indicative Range:'}
                    </span>
                    <span className="font-bold text-teal-800 font-mono">
                      {enquiryType === 'rental'
                        ? (selectedProduct.rentalRateDisplay || selectedProduct.indicativePriceDisplay)
                        : enquiryType === 'purchase'
                        ? (selectedProduct.salePriceDisplay || selectedProduct.indicativePriceDisplay)
                        : selectedProduct.indicativePriceDisplay}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 italic">
                    Indicative market price only. Final quotation depends on model, specs, accessories &amp; branch stock.
                  </p>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes (Prescription, Duration, Delivery Area)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Required for 1 month recovery, doctor prescribed 5L concentrator..."
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-lg shadow-sm transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
                >
                  Submit Enquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <a
                href={BUSINESS_PHONE_TEL}
                className="text-xs text-slate-600 hover:text-teal-700 font-medium inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>Need urgent assistance? Call directly: {BUSINESS_PHONE}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
