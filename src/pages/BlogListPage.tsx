import { BLOG_ARTICLES } from '../data/blogs';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { ChevronRight, Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';

export function BlogListPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Medical Equipment Blog & Educational Guides | F7 Medical Equipment"
        description="Read 15 comprehensive guides on oxygen concentrators, hospital beds, CPAP/BiPAP, patient monitors, ICU hardware, and equipment rental in India."
        canonicalPath="/blog/"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-800">Blog &amp; Knowledge Base</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>Healthcare Equipment Educational Resource</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Medical Equipment Articles &amp; Clinical Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Educational overviews designed to help caregivers, patients, and healthcare professionals understand medical equipment technologies, rental considerations, and home convalescence setups.
          </p>
        </div>
      </div>

      {/* Articles Grid (15 Original Articles) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-xl border border-slate-200 hover:border-teal-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {article.image && (
                <div className="aspect-16/10 bg-slate-50 border-b border-slate-100 p-3 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                    {article.category}
                  </span>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <span className="text-teal-700 font-bold uppercase tracking-wider text-[11px]">
                    {article.category}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <Link to={`/blog/${article.slug}/`}>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {article.title}
                  </h2>
                </Link>

                <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
