import { Category } from '../types';
import { PRODUCTS } from '../data/products';
import { LOCATIONS } from '../data/locations';
import { ProductCard } from '../components/ProductCard';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { ChevronRight, ShieldCheck, MapPin } from 'lucide-react';

interface CategoryPageProps {
  category: Category;
  onOpenQuoteModal: (productSlug?: string, citySlug?: string, mode?: 'rental' | 'purchase' | 'price') => void;
}

export function CategoryPage({ category, onOpenQuoteModal }: CategoryPageProps) {
  const categoryProducts = PRODUCTS.filter((p) => p.categoryId === category.id);

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={`${category.name} Medical Equipment – Sales & Rentals | F7 Medical`}
        description={`Explore our certified ${category.name} medical equipment catalog. Indicative prices, rental options, and official branch dispatch across 7 Indian cities.`}
        canonicalPath={`/categories/${category.slug}/`}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/products-services/" className="hover:text-teal-700">Products &amp; Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-800">{category.name}</span>
        </div>
      </div>

      {/* Category Hero */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto max-w-3xl space-y-2">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
            Equipment Specialization
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {category.name} Equipment
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Indicative Pricing Disclaimer */}
        <div className="mb-8 p-4 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-950 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Indicative Price Policy:</strong>
            <span className="ml-1 text-slate-700">
              Indicative market price only. Final F7 Medical Equipment price depends on brand, model, configuration, condition, accessories, taxes and availability. Contact our team for the latest price and written quotation.
            </span>
          </div>
        </div>

        {/* Products in Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              onOpenQuoteModal={onOpenQuoteModal}
            />
          ))}
        </div>

        {/* Available Across Seven Cities Section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="mb-6">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Branch Availability
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-0.5">
              {category.name} Available Across Our Seven Locations
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select your city to view local branch address and enquire about equipment delivery:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}/`}
                className="p-4 bg-slate-50 hover:bg-teal-50/50 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors block text-xs"
              >
                <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>{loc.city} Branch</span>
                </div>
                <p className="text-slate-500 line-clamp-2 text-[11px]">
                  {loc.exactAddress}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
