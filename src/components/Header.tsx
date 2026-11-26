import { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from '../utils/router';
import { LOCATIONS } from '../data/locations';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, getWhatsAppUrl } from '../utils/whatsapp';
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  MapPin,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Wind,
  HeartPulse,
  BedDouble,
  Accessibility,
  Moon,
  Activity,
  Building2,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (initialProduct?: string, initialCity?: string, mode?: 'rental' | 'purchase') => void;
}

export function Header({ onOpenQuoteModal }: HeaderProps) {
  const { pathname } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop Dropdown State ('products' | 'locations' | null)
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'locations' | null>(null);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('respiratory-care');

  // Mobile Accordion State
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>('respiratory-care');

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdowns on route changes
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle outside clicks and Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (menu: 'products' | 'locations') => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleDropdown = (menu: 'products' | 'locations') => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const isPathActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '';
    }
    const cleanHref = href.replace(/\/$/, '');
    const cleanPath = pathname.replace(/\/$/, '');
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + '/');
  };

  const isProductsActive =
    pathname.startsWith('/products') ||
    pathname.startsWith('/categories') ||
    pathname === '/products-services/' ||
    pathname === '/products-services';

  const isLocationsActive = pathname.startsWith('/locations');

  const getCategoryIcon = (id: string, className = 'w-4 h-4') => {
    switch (id) {
      case 'respiratory-care':
        return <Wind className={className} />;
      case 'cardiac-care-monitoring':
        return <HeartPulse className={className} />;
      case 'hospital-patient-care':
        return <BedDouble className={className} />;
      case 'mobility-equipment':
        return <Accessibility className={className} />;
      case 'sleep-study-equipment':
        return <Moon className={className} />;
      case 'icu-critical-care':
        return <Activity className={className} />;
      default:
        return <HeartPulse className={className} />;
    }
  };

  const activeCategory =
    CATEGORIES.find((c) => c.slug === selectedCategorySlug) || CATEGORIES[0];
  const activeCategoryProducts = PRODUCTS.filter((p) => p.categoryId === activeCategory.id);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs relative">
      {/* Top Utility Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="hidden sm:inline text-slate-400">
              Medical Equipment Sales &amp; Rentals across 7 Branches &bull; <strong className="text-teal-400 font-semibold">Open 24/7</strong>
            </span>
            <span className="sm:hidden text-slate-400 text-[11px] truncate">
              Sales &amp; Rentals &bull; <strong className="text-teal-400 font-semibold">24/7 Open</strong>
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-xs shrink-0">
            <a
              href={BUSINESS_PHONE_TEL}
              className="flex items-center gap-1.5 text-slate-200 hover:text-teal-400 transition-colors font-medium text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{BUSINESS_PHONE}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={getWhatsAppUrl({ enquiryType: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3.5 shrink-0 min-w-0 group">
            <img
              src="/assets/aistudio/images-removebg-preview__1__8a8da6c4.png"
              alt="F7 Medical Equipment Logo"
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors truncate">
                F7 Medical Equipment
              </span>
              <span className="text-[9px] sm:text-[11px] font-medium text-teal-700 tracking-wider uppercase truncate">
                Sales &amp; Rentals
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Items per specification */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Home */}
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap rounded-lg ${
                isPathActive('/')
                  ? 'text-teal-700 bg-teal-50/70 font-bold'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* 2. Products ▼ (Mega Menu Trigger) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown('products')}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                  activeDropdown === 'products' || isProductsActive
                    ? 'text-teal-700 bg-teal-50/80 font-bold'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
                }`}
                aria-expanded={activeDropdown === 'products'}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'products' ? 'rotate-180 text-teal-700' : 'text-slate-500'
                  }`}
                />
              </button>
            </div>

            {/* 3. Locations ▼ (Dropdown Trigger) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('locations')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown('locations')}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                  activeDropdown === 'locations' || isLocationsActive
                    ? 'text-teal-700 bg-teal-50/80 font-bold'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
                }`}
                aria-expanded={activeDropdown === 'locations'}
                aria-haspopup="true"
              >
                <span>Locations</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'locations' ? 'rotate-180 text-teal-700' : 'text-slate-500'
                  }`}
                />
              </button>

              {/* Locations Dropdown Panel */}
              {activeDropdown === 'locations' && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter('locations')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-slate-50/90 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-teal-600" />
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                        7 Official Branch Hubs
                      </span>
                    </div>
                    <span className="text-[10px] text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full font-medium">
                      Pan-India
                    </span>
                  </div>

                  <div className="p-2 space-y-1 max-h-96 overflow-y-auto">
                    {LOCATIONS.map((loc) => {
                      const isCurrentLoc = (pathname === `/${loc.slug}` || pathname.startsWith(`/${loc.slug}/`) || pathname.startsWith(`/locations/${loc.slug}`));
                      return (
                        <Link
                          key={loc.slug}
                          to={`/${loc.slug}/`}
                          onClick={() => setActiveDropdown(null)}
                          className={`flex items-center justify-between p-2.5 rounded-xl transition-all group ${
                            isCurrentLoc
                              ? 'bg-teal-50 text-teal-900 font-bold'
                              : 'text-slate-700 hover:bg-teal-50/60 hover:text-teal-800'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-1.5 rounded-lg bg-slate-100 text-teal-700 group-hover:bg-teal-100/70 shrink-0 mt-0.5">
                              <MapPin className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-teal-800 flex items-center gap-1.5">
                                <span>{loc.city}</span>
                                <span className="text-[11px] font-normal text-slate-500">
                                  ({loc.state})
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1 group-hover:text-slate-600">
                                {loc.exactAddress.split(',').slice(0, 2).join(',')}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Delivery &amp; setup assistance</span>
                    <a
                      href={BUSINESS_PHONE_TEL}
                      className="text-teal-700 hover:text-teal-800 font-semibold flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{BUSINESS_PHONE}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 4. About Us */}
            <Link
              to="/about-us/"
              className={`px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap rounded-lg ${
                isPathActive('/about-us')
                  ? 'text-teal-700 bg-teal-50/70 font-bold'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            {/* 5. Blog */}
            <Link
              to="/blog/"
              className={`px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap rounded-lg ${
                isPathActive('/blog')
                  ? 'text-teal-700 bg-teal-50/70 font-bold'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Blog
            </Link>

            {/* 6. Contact Us */}
            <Link
              to="/contact-us/"
              className={`px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap rounded-lg ${
                isPathActive('/contact-us')
                  ? 'text-teal-700 bg-teal-50/70 font-bold'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Quotation
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP PRODUCTS MEGA MENU DROPDOWN PANEL */}
      {/* ========================================================================= */}
      {activeDropdown === 'products' && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 z-50 pt-2 animate-in fade-in slide-in-from-top-1 duration-150"
          onMouseEnter={() => handleMouseEnter('products')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden">
              <div className="grid grid-cols-12 divide-x divide-slate-100 min-h-[460px]">
                {/* LEFT COLUMN: 6 Product Categories */}
                <div className="col-span-4 bg-slate-50/80 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200/70">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Product Categories (6)
                      </span>
                      <Link
                        to="/products-services/"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11px] font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1 group"
                      >
                        <span>All Products</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    <div className="space-y-1.5" role="tablist" aria-label="Product Categories">
                      {CATEGORIES.map((category) => {
                        const isSelected = selectedCategorySlug === category.slug;
                        const productCount = PRODUCTS.filter((p) => p.categoryId === category.id).length;

                        return (
                          <div
                            key={category.slug}
                            onMouseEnter={() => setSelectedCategorySlug(category.slug)}
                            onClick={() => setSelectedCategorySlug(category.slug)}
                            className={`flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer group ${
                              isSelected
                                ? 'bg-white text-teal-900 font-bold shadow-xs border-l-4 border-teal-600'
                                : 'text-slate-700 hover:text-teal-800 hover:bg-slate-100/90 font-medium'
                            }`}
                            role="tab"
                            aria-selected={isSelected}
                            tabIndex={0}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-2 rounded-lg transition-colors shrink-0 ${
                                  isSelected
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-white text-slate-600 border border-slate-200/70 group-hover:text-teal-700 group-hover:border-teal-200'
                                }`}
                              >
                                {getCategoryIcon(category.id, 'w-4 h-4')}
                              </div>
                              <div>
                                <div className="text-sm leading-snug">{category.name}</div>
                                <span className="text-[11px] text-slate-500 font-normal">
                                  {productCount} items
                                </span>
                              </div>
                            </div>

                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                isSelected
                                  ? 'text-teal-600 translate-x-0.5'
                                  : 'text-slate-400 group-hover:text-teal-600'
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Left Column Bottom Note */}
                  <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      Biomedical Inspection Included
                    </span>
                    <Link
                      to={`/categories/${activeCategory.slug}/`}
                      onClick={() => setActiveDropdown(null)}
                      className="text-teal-700 hover:underline font-semibold text-[11px]"
                    >
                      Category Page &rarr;
                    </Link>
                  </div>
                </div>

                {/* RIGHT COLUMN: Category Products */}
                <div className="col-span-8 p-6 flex flex-col justify-between bg-white">
                  <div>
                    {/* Active Category Header */}
                    <div className="flex items-start justify-between pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/60">
                            {activeCategory.name}
                          </span>
                          <span className="text-xs text-slate-500">
                            ({activeCategoryProducts.length} verified devices)
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {activeCategory.name} Products for Rent &amp; Sale
                        </h3>
                        <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                          {activeCategory.shortDescription}
                        </p>
                      </div>

                      <Link
                        to={`/categories/${activeCategory.slug}/`}
                        onClick={() => setActiveDropdown(null)}
                        className="px-3.5 py-1.5 bg-slate-100 hover:bg-teal-50 text-slate-800 hover:text-teal-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                      >
                        <span>View Category Page</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Products Grid for Active Category */}
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                      {activeCategoryProducts.map((product) => (
                        <Link
                          key={product.slug}
                          to={`/products/${product.slug}/`}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200/70 p-1 shrink-0 overflow-hidden flex items-center justify-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-800 line-clamp-1">
                              {product.name}
                            </h4>
                            <span className="text-[11px] text-teal-700 font-semibold block mt-0.5">
                              {product.indicativePriceDisplay}
                            </span>
                            <span className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                              <span>Rent / Sale</span>
                              <span className="text-slate-300">•</span>
                              <span className="text-emerald-700 font-medium">In Stock</span>
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mega Menu Footer Action Strip */}
                  <div className="pt-4 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Same-day dispatch available in all 7 city hubs</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to="/products-services/"
                        onClick={() => setActiveDropdown(null)}
                        className="font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-1"
                      >
                        <span>View All 28 Products</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenQuoteModal();
                        }}
                        className="px-3.5 py-1.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                      >
                        Get Price Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MOBILE ACCORDION DRAWER NAVIGATION */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* 1. Home */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
              isPathActive('/') ? 'bg-teal-50 text-teal-800' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Home
          </Link>

          {/* 2. Products Accordion */}
          <div className="border border-slate-200/80 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className={`w-full flex items-center justify-between px-3.5 py-3 text-base font-semibold text-left transition-colors cursor-pointer ${
                mobileProductsOpen || isProductsActive
                  ? 'bg-teal-50/70 text-teal-800'
                  : 'text-slate-800 bg-slate-50/60'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>Products &amp; Equipment</span>
                <span className="text-[11px] font-normal text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                  28 Products
                </span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  mobileProductsOpen ? 'rotate-180 text-teal-700' : ''
                }`}
              />
            </button>

            {mobileProductsOpen && (
              <div className="p-3 bg-white space-y-2 border-t border-slate-200/80">
                <Link
                  to="/products-services/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-xs font-bold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
                >
                  &rarr; Explore Full Catalog (28 Products)
                </Link>

                {/* 6 Category Sub-accordions */}
                <div className="space-y-1.5 pt-1">
                  {CATEGORIES.map((category) => {
                    const isCatOpen = mobileActiveCategory === category.slug;
                    const catProducts = PRODUCTS.filter((p) => p.categoryId === category.id);

                    return (
                      <div key={category.slug} className="border border-slate-100 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            setMobileActiveCategory(isCatOpen ? null : category.slug)
                          }
                          className={`w-full flex items-center justify-between p-2.5 text-xs font-semibold text-left transition-colors cursor-pointer ${
                            isCatOpen ? 'bg-slate-100 text-teal-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(category.id, 'w-3.5 h-3.5 text-teal-600')}
                            <span>{category.name}</span>
                          </div>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                              isCatOpen ? 'rotate-180 text-teal-600' : ''
                            }`}
                          />
                        </button>

                        {isCatOpen && (
                          <div className="bg-slate-50/70 p-2 space-y-1 border-t border-slate-100">
                            <Link
                              to={`/categories/${category.slug}/`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-2.5 py-1.5 text-[11px] font-bold text-teal-700 hover:underline"
                            >
                              &rarr; View {category.name} Overview
                            </Link>

                            <div className="space-y-1 pt-1">
                              {catProducts.map((p) => (
                                <Link
                                  key={p.slug}
                                  to={`/products/${p.slug}/`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs text-slate-700 hover:bg-white hover:text-teal-800 transition-colors"
                                >
                                  <span className="line-clamp-1">{p.name}</span>
                                  <span className="text-[10px] text-teal-700 font-semibold shrink-0 ml-2">
                                    {p.indicativePriceDisplay.split('–')[0]}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 3. Locations Accordion */}
          <div className="border border-slate-200/80 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
              className={`w-full flex items-center justify-between px-3.5 py-3 text-base font-semibold text-left transition-colors cursor-pointer ${
                mobileLocationsOpen || isLocationsActive
                  ? 'bg-teal-50/70 text-teal-800'
                  : 'text-slate-800 bg-slate-50/60'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>Our Locations</span>
                <span className="text-[11px] font-normal text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                  7 Branches
                </span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  mobileLocationsOpen ? 'rotate-180 text-teal-700' : ''
                }`}
              />
            </button>

            {mobileLocationsOpen && (
              <div className="p-2 bg-white space-y-1 border-t border-slate-200/80">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/${loc.slug}/`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{loc.city}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-normal">
                      {loc.state}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 4. About Us */}
          <Link
            to="/about-us/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
              isPathActive('/about-us') ? 'bg-teal-50 text-teal-800' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            About Us
          </Link>

          {/* 5. Blog */}
          <Link
            to="/blog/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
              isPathActive('/blog') ? 'bg-teal-50 text-teal-800' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Blog
          </Link>

          {/* 6. Contact Us */}
          <Link
            to="/contact-us/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
              isPathActive('/contact-us') ? 'bg-teal-50 text-teal-800' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Contact Us
          </Link>

          {/* Mobile Actions */}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 pb-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center px-4 py-3 min-h-[44px] text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-sm flex items-center justify-center cursor-pointer"
            >
              Request a Quotation
            </button>
            <a
              href={BUSINESS_PHONE_TEL}
              className="w-full text-center px-4 py-3 min-h-[44px] text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call {BUSINESS_PHONE}</span>
            </a>
            <a
              href={getWhatsAppUrl({ enquiryType: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-3 min-h-[44px] text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}

      {/* Persistent "OUR LOCATIONS" Horizontal Navigation Strip */}
      <div className="bg-slate-100 border-t border-slate-200 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0 text-slate-900 font-bold tracking-wider uppercase text-[11px] pr-2 border-r border-slate-300">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>OUR LOCATIONS:</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {LOCATIONS.map((loc) => {
              const locHref = `/${loc.slug}/`;
              const isLocActive = (pathname === `/${loc.slug}` || pathname.startsWith(`/${loc.slug}/`) || pathname.startsWith(`/locations/${loc.slug}`));
              return (
                <Link
                  key={loc.slug}
                  to={locHref}
                  className={`whitespace-nowrap transition-colors py-0.5 font-medium ${
                    isLocActive
                      ? 'text-teal-700 font-bold border-b border-teal-700'
                      : 'text-slate-700 hover:text-teal-700'
                  }`}
                >
                  {loc.city}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

