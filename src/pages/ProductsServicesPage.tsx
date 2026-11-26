import { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { LOCATIONS } from '../data/locations';
import { ProductCard } from '../components/ProductCard';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { Search, MapPin, ExternalLink, ShieldCheck, Filter } from 'lucide-react';

interface ProductsServicesPageProps {
  onOpenQuoteModal: (productSlug?: string, citySlug?: string, mode?: 'rental' | 'purchase' | 'price') => void;
}

export function ProductsServicesPage({ onOpenQuoteModal }: ProductsServicesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        searchTerm === '' ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || p.categoryId === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Products & Services – Medical Equipment Catalog | F7 Medical Equipment"
        description="Browse all 28 medical equipment products for sales and rental across 7 Indian locations: Oxygen concentrators, ventilators, hospital beds, patient monitors, and ICU hardware."
        canonicalPath="/products-services/"
      />

      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Catalog &amp; Clinical Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
              Medical Equipment Products &amp; Services
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our comprehensive range of 28 medical devices available for sales, clinical rental, and home healthcare across all seven official Indian branches.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="border-b border-slate-200 bg-slate-50/80 sticky top-28 z-20 backdrop-blur-xs py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by equipment name (e.g. Oxygen, Bed, Monitor)..."
              className="w-full pl-10 pr-4 py-2 bg-white text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 shadow-2xs"
            />
          </div>

          {/* Category Filter Pills / Dropdown */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-teal-600" />
              <span>Category:</span>
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All (28)
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Indicative Pricing Disclaimer Callout */}
        <div className="mb-8 p-4 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-950 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Indicative Price Policy:</strong>
            <span className="ml-1 text-slate-700">
              Indicative market price only. Final F7 Medical Equipment price depends on brand, model, configuration, condition, accessories, taxes and availability. Contact our team for the latest price and written quotation.
            </span>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-base font-semibold text-slate-700">No equipment found matching &ldquo;{searchTerm}&rdquo;</p>
            <p className="text-xs text-slate-500 mt-1">Try resetting the category filter or searching with alternative keywords.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 bg-teal-700 text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            ))}
          </div>
        )}

        {/* Section 10 Requirement: Medical Equipment Services Across Our Locations */}
        <section className="mt-20 pt-12 border-t border-slate-200">
          <div className="mb-8">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Local Availability &amp; Dispatch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Medical Equipment Services Across Our Locations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Visit or contact any of our seven official branches for in-person consultation, delivery scheduling, and written commercial quotations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-teal-500 transition-colors flex flex-col justify-between text-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Link
                      to={`/${loc.slug}/`}
                      className="text-sm font-bold text-slate-900 hover:text-teal-700 transition-colors"
                    >
                      {loc.city} ({loc.state})
                    </Link>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-700"
                      title="Google Maps"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-slate-600 font-mono text-[11px] leading-relaxed select-all mb-3">
                    {loc.exactAddress}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                  <Link
                    to={`/${loc.slug}/`}
                    className="text-teal-700 hover:underline font-bold"
                  >
                    View Branch Details &rarr;
                  </Link>
                  <span className="text-slate-400 font-medium">{loc.pincode}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
