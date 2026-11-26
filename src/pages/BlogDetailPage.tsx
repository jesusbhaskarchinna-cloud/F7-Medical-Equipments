import { BlogArticle } from '../types';
import { PRODUCTS } from '../data/products';
import { LOCATIONS } from '../data/locations';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { ProductCard } from '../components/ProductCard';
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  getWhatsAppUrl,
} from '../utils/whatsapp';
import {
  Clock,
  Calendar,
  AlertTriangle,
  ChevronRight,
  MapPin,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface BlogDetailPageProps {
  article: BlogArticle;
  onOpenQuoteModal: (productSlug?: string, citySlug?: string, mode?: 'rental' | 'purchase' | 'price') => void;
}

export function BlogDetailPage({ article, onOpenQuoteModal }: BlogDetailPageProps) {
  const relatedProducts = PRODUCTS.filter((p) =>
    article.relatedProductSlugs.includes(p.slug)
  );

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: '2026-10-15',
    dateModified: '2026-11-06',
    author: {
      '@type': 'Organization',
      name: 'F7 Medical Equipment',
    },
    publisher: {
      '@type': 'Organization',
      name: 'F7 Medical Equipment',
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={article.seoTitle}
        description={article.metaDescription}
        canonicalPath={`/blog/${article.slug}/`}
        ogType="article"
        schema={articleSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/blog/" className="hover:text-teal-700">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-800 truncate">{article.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-teal-400">
            <span className="font-bold uppercase tracking-wider">{article.category}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishDate}</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured Article Image */}
        {article.image && (
          <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50/80 p-6 flex items-center justify-center aspect-16/9 shadow-xs">
            <img
              src={article.image}
              alt={article.title}
              className="max-h-full object-contain"
            />
          </div>
        )}

        {/* Medical Disclaimer Banner */}
        <div className="mb-8 p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Medical Disclaimer:</strong>
            <p className="mt-0.5 leading-relaxed text-amber-800">
              {article.disclaimer}
            </p>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="prose prose-slate max-w-none space-y-8">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Relevant Product Links */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Mentioned Medical Equipment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}/`}
                  className="p-4 bg-slate-50 hover:bg-teal-50/50 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors flex items-center justify-between text-xs group"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-teal-700">
                      {p.name}
                    </h4>
                    <span className="text-slate-500 font-mono text-[11px]">
                      {p.indicativePriceDisplay}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Location Links */}
        <div className="mt-12 pt-8 border-t border-slate-200 p-6 bg-slate-50 rounded-2xl">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span>Available for Rental &amp; Purchase Across Seven Locations</span>
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Contact your nearest F7 Medical Equipment branch for equipment availability and delivery coordination:
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}/`}
                className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 hover:border-teal-500 text-slate-700 hover:text-teal-700 font-medium transition-colors"
              >
                {loc.city}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-10 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">Have Questions About This Equipment?</h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Speak directly with our biomedical equipment specialists today.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={BUSINESS_PHONE_TEL}
              className="py-2.5 px-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={getWhatsAppUrl({ enquiryType: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
