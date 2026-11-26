import { Link } from '../utils/router';
import { LOCATIONS } from '../data/locations';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_MAILTO,
  BUSINESS_WHATSAPP_NUMBER,
  FOOTER_CREDIT,
  getWhatsAppUrl,
} from '../utils/whatsapp';
import { Phone, Mail, MessageSquare, MapPin, ExternalLink, ShieldCheck, Clock } from 'lucide-react';

export function Footer() {
  const featuredProducts = PRODUCTS.slice(0, 8);

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Brand & Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/aistudio/images-removebg-preview__1__8a8da6c4.png"
                alt="F7 Medical Equipment"
                className="h-10 w-auto object-contain brightness-125"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                F7 Medical Equipment
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              F7 Medical Equipment provides reliable medical equipment sales and rentals across India. Serving patients, home healthcare providers, and hospitals with respiratory care, ICU support, cardiac monitoring, and patient mobility systems.
            </p>
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Phone:</span>
                <a href={BUSINESS_PHONE_TEL} className="text-white hover:text-teal-400 font-medium">
                  {BUSINESS_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <MessageSquare className="w-4 h-4 text-teal-400 shrink-0" />
                <span>WhatsApp:</span>
                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400 font-medium"
                >
                  +{BUSINESS_WHATSAPP_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Email:</span>
                <a href={BUSINESS_EMAIL_MAILTO} className="text-white hover:text-teal-400 font-medium">
                  {BUSINESS_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Operating Hours:</span>
                <span className="text-teal-400 font-semibold">24/7 Open (All 7 Days)</span>
              </div>
            </div>
          </div>

          {/* Main Navigation & Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products-services/" className="hover:text-teal-400 transition-colors">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/about-us/" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="hover:text-teal-400 transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link to="/contact-us/" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sitemap/" className="hover:text-teal-400 transition-colors">
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Equipment Categories */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Equipment Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/categories/${cat.slug}/`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Equipment */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Featured Equipment
            </h3>
            <ul className="space-y-2 text-sm">
              {featuredProducts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}/`}
                    className="hover:text-teal-400 transition-colors truncate block"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Seven Official Branch Addresses Section */}
        <div className="py-10 border-b border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>Official Branch Addresses Across Seven Cities</span>
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Exact Registered Premises
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-800/80 hover:border-slate-700 transition-colors text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Link
                      to={`/${loc.slug}/`}
                      className="text-sm font-semibold text-teal-400 hover:text-teal-300"
                    >
                      {loc.city} ({loc.state})
                    </Link>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="View on Google Maps"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-slate-400 leading-relaxed font-sans select-all break-words">
                    {loc.exactAddress}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <Link
                    to={`/${loc.slug}/`}
                    className="text-teal-400 hover:underline font-medium min-h-[36px] flex items-center"
                  >
                    View Branch Details &rarr;
                  </Link>
                  <a
                    href={getWhatsAppUrl({ cityName: loc.city, enquiryType: 'general' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-300 flex items-center gap-1 min-h-[36px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Policy Disclaimer in Footer */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Product Price Policy:</strong> Indicative market price only. Final F7 Medical Equipment price depends on brand, model, configuration, condition, accessories, taxes and availability. Contact our team for the latest price and written quotation.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Exact Footer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 flex-wrap">
            <span>&copy; {new Date().getFullYear()} F7 Medical Equipment. All rights reserved.</span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <Link to="/privacy-policy/" className="hover:text-slate-200">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/terms-and-conditions/" className="hover:text-slate-200">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/disclaimer/" className="hover:text-slate-200">
              Disclaimer
            </Link>
          </div>
          <div className="font-semibold text-slate-300 tracking-wide">
            {FOOTER_CREDIT}
          </div>
        </div>
      </div>
    </footer>
  );
}
