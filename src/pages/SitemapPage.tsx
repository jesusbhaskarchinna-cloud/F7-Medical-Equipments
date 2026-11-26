import { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { LOCATIONS } from '../data/locations';
import { CATEGORIES } from '../data/categories';
import { BLOG_ARTICLES } from '../data/blogs';
import { SEOHead } from '../components/SEOHead';
import { Link, getRentalUrl, getSaleUrl } from '../utils/router';
import { Search, ChevronRight, FileCode, CheckCircle2, ExternalLink, Filter, Layers } from 'lucide-react';

export function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'rentals' | 'purchases' | 'products' | 'locations' | 'blogs'>('all');
  const [selectedCityFilter, setSelectedCityFilter] = useState<string>('all');

  // Compute all 456 URLs with exact new URL patterns
  const allUrls = useMemo(() => {
    const list: {
      url: string;
      title: string;
      category: string;
      city?: string;
      product?: string;
      service?: 'rent' | 'sale' | 'general';
    }[] = [];

    // 5 Main Pages
    list.push({ url: '/', title: 'Home – F7 Medical Equipment', category: 'Main Pages', service: 'general' });
    list.push({ url: '/products-services/', title: 'Products & Services', category: 'Main Pages', service: 'general' });
    list.push({ url: '/about-us/', title: 'About Us', category: 'Main Pages', service: 'general' });
    list.push({ url: '/blog/', title: 'Blog & Educational Articles', category: 'Main Pages', service: 'general' });
    list.push({ url: '/contact-us/', title: 'Contact Us & Branch Details', category: 'Main Pages', service: 'general' });

    // 3 Legal Pages
    list.push({ url: '/privacy-policy/', title: 'Privacy Policy', category: 'Legal Pages', service: 'general' });
    list.push({ url: '/terms-and-conditions/', title: 'Terms & Conditions', category: 'Legal Pages', service: 'general' });
    list.push({ url: '/disclaimer/', title: 'Medical & Pricing Disclaimer', category: 'Legal Pages', service: 'general' });

    // 6 Category Pages
    CATEGORIES.forEach((cat) => {
      list.push({
        url: `/categories/${cat.slug}/`,
        title: `${cat.name} Equipment Category`,
        category: 'Categories',
        service: 'general',
      });
    });

    // 7 Location Pages
    LOCATIONS.forEach((loc) => {
      list.push({
        url: `/${loc.slug}/`,
        title: `${loc.city} Branch Office`,
        category: 'Location Pages',
        city: loc.slug,
        service: 'general',
      });
    });

    // 28 Product Detail Pages
    PRODUCTS.forEach((prod) => {
      list.push({
        url: `/products/${prod.slug}/`,
        title: `${prod.name} – Indicative Price & Detail`,
        category: 'Product Detail Pages',
        product: prod.slug,
        service: 'general',
      });
    });

    // 15 Blog Articles
    BLOG_ARTICLES.forEach((blog) => {
      list.push({
        url: `/blog/${blog.slug}/`,
        title: blog.title,
        category: 'Blog Articles',
        service: 'general',
      });
    });

    // 196 Rental Pages: /{product-slug}-for-rent-in-{city-slug}/
    PRODUCTS.forEach((prod) => {
      LOCATIONS.forEach((loc) => {
        list.push({
          url: getRentalUrl(prod.slug, loc.slug),
          title: `${prod.name} on Rent in ${loc.city}`,
          category: 'City Rental Pages',
          city: loc.slug,
          product: prod.slug,
          service: 'rent',
        });
      });
    });

    // 196 Sale Pages: /{product-slug}-for-sale-in-{city-slug}/
    PRODUCTS.forEach((prod) => {
      LOCATIONS.forEach((loc) => {
        list.push({
          url: getSaleUrl(prod.slug, loc.slug),
          title: `${prod.name} for Sale in ${loc.city}`,
          category: 'City Purchase Pages',
          city: loc.slug,
          product: prod.slug,
          service: 'sale',
        });
      });
    });

    return list;
  }, []);

  const rentalUrlsCount = 28 * 7; // 196
  const saleUrlsCount = 28 * 7;   // 196
  const totalServiceLandingCount = rentalUrlsCount + saleUrlsCount; // 392

  const filteredUrls = useMemo(() => {
    return allUrls.filter((item) => {
      const matchesSearch =
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.url.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchesSearch) return false;

      // City filter
      if (selectedCityFilter !== 'all' && item.city && item.city !== selectedCityFilter) {
        return false;
      }

      // Tab filter
      if (activeTab === 'rentals') return item.service === 'rent';
      if (activeTab === 'purchases') return item.service === 'sale';
      if (activeTab === 'products') return item.category === 'Product Detail Pages';
      if (activeTab === 'locations') return item.category === 'Location Pages';
      if (activeTab === 'blogs') return item.category === 'Blog Articles';

      return true;
    });
  }, [allUrls, searchTerm, activeTab, selectedCityFilter]);

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="HTML Sitemap & Complete 392 City Service Registry | F7 Medical"
        description="Complete index of all 456 pages on F7 Medical Equipment, including all 392 individual product rental and sale pages across 7 Indian cities."
        canonicalPath="/sitemap/"
      />

      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-800">Route Registry &amp; HTML Sitemap</span>
        </div>
      </div>

      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto max-w-4xl space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
            <FileCode className="w-4 h-4" />
            <span>SEO Architecture &bull; 392 Product-City Landing Pages</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Complete Website Route Registry (456 URLs)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every one of the 28 products features 7 dedicated rental landing pages (<code className="text-teal-300 bg-slate-800 px-1 py-0.5 rounded">/rent/[product-slug]/[city-slug]/</code>) and 7 dedicated purchase landing pages (<code className="text-teal-300 bg-slate-800 px-1 py-0.5 rounded">/buy/[product-slug]/[city-slug]/</code>), totaling <strong>392 unique SEO landing pages</strong> across Hyderabad, Delhi, Chennai, Bangalore, Pune, Visakhapatnam, and Vijayawada.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Metric KPI cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 block uppercase">Rental Landing Pages</span>
            <div className="text-2xl font-extrabold text-teal-800 mt-1 font-mono">196</div>
            <span className="text-[11px] text-slate-500">28 Products &times; 7 Cities</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 block uppercase">Sale Landing Pages</span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1 font-mono">196</div>
            <span className="text-[11px] text-slate-500">28 Products &times; 7 Cities</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 block uppercase">Total City Pages</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1 font-mono">392</div>
            <span className="text-[11px] text-slate-500">Unique Content &amp; URLs</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 block uppercase">Full Website URLs</span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1 font-mono">456</div>
            <span className="text-[11px] text-slate-500">Includes 64 Core Pages</span>
          </div>
        </div>

        {/* Search & Tabs */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by URL or title (e.g. oxygen-concentrator-for-rent-in-hyderabad)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-xs">
            {[
              { id: 'all', label: `All (${allUrls.length})` },
              { id: 'rentals', label: `Rentals (196)` },
              { id: 'purchases', label: `Purchases (196)` },
              { id: 'products', label: 'Products (28)' },
              { id: 'locations', label: 'Locations (7)' },
              { id: 'blogs', label: 'Articles (15)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter by City */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-6 pb-2 text-xs">
          <div className="flex items-center gap-1 text-slate-500 font-semibold shrink-0">
            <Filter className="w-3.5 h-3.5 text-teal-600" />
            <span>Filter City:</span>
          </div>
          <button
            onClick={() => setSelectedCityFilter('all')}
            className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer ${
              selectedCityFilter === 'all'
                ? 'bg-teal-700 text-white font-semibold'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Cities
          </button>
          {LOCATIONS.map((loc) => (
            <button
              key={loc.slug}
              onClick={() => setSelectedCityFilter(loc.slug)}
              className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap cursor-pointer ${
                selectedCityFilter === loc.slug
                  ? 'bg-teal-700 text-white font-semibold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {loc.city}
            </button>
          ))}
        </div>

        {/* Status Alert */}
        <div className="p-3.5 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-950 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
            <span>
              Showing <strong className="font-bold">{filteredUrls.length}</strong> matching pages with verified URL routing
            </span>
          </div>
          <span className="text-[11px] text-teal-800 hidden sm:inline">
            Click any entry to open that exact page
          </span>
        </div>

        {/* URLs Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredUrls.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-white rounded-lg border border-slate-200 hover:border-teal-500 transition-colors text-xs flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                  {item.service && item.service !== 'general' && (
                    <span
                      className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                        item.service === 'rent'
                          ? 'bg-teal-50 text-teal-800'
                          : 'bg-slate-100 text-slate-800'
                      }`}
                    >
                      {item.service}
                    </span>
                  )}
                </div>

                <Link
                  to={item.url}
                  className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1"
                >
                  {item.title}
                </Link>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-teal-900 bg-slate-50 px-2 py-1 rounded border border-slate-100 truncate flex-1">
                  {item.url}
                </span>
                <Link
                  to={item.url}
                  className="text-teal-700 hover:text-teal-900 font-semibold text-[11px] shrink-0"
                >
                  Visit &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
