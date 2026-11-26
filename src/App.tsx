import { useState } from 'react';
import { RouterProvider, useRouter } from './utils/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { QuoteModal } from './components/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsServicesPage } from './pages/ProductsServicesPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CityProductServicePage } from './pages/CityProductServicePage';
import { CategoryPage } from './pages/CategoryPage';
import { LocationPage } from './pages/LocationPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { LegalPage } from './pages/LegalPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Data lookups
import { getProductBySlug } from './data/products';
import { getLocationBySlug } from './data/locations';
import { getCategoryBySlug } from './data/categories';
import { getBlogArticleBySlug } from './data/blogs';

function AppContent() {
  const { match } = useRouter();

  // Modal State
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    productSlug?: string;
    citySlug?: string;
    mode?: 'rental' | 'purchase' | 'price' | 'general';
  }>({
    isOpen: false,
  });

  const handleOpenQuoteModal = (
    productSlug?: string,
    citySlug?: string,
    mode?: 'rental' | 'purchase' | 'price' | 'general'
  ) => {
    setModalState({
      isOpen: true,
      productSlug,
      citySlug,
      mode,
    });
  };

  const handleCloseQuoteModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  // Route Dispatcher
  const renderCurrentPage = () => {
    switch (match.name) {
      case 'home':
        return <HomePage onOpenQuoteModal={handleOpenQuoteModal} />;

      case 'products-services':
        return <ProductsServicesPage onOpenQuoteModal={handleOpenQuoteModal} />;

      case 'about-us':
        return <AboutUsPage onOpenQuoteModal={() => handleOpenQuoteModal(undefined, undefined, 'general')} />;

      case 'blog':
        return <BlogListPage />;

      case 'contact-us':
        return <ContactUsPage />;

      case 'privacy-policy':
        return <LegalPage type="privacy" />;

      case 'terms-and-conditions':
        return <LegalPage type="terms" />;

      case 'disclaimer':
        return <LegalPage type="disclaimer" />;

      case 'sitemap':
        return <SitemapPage />;

      case 'location': {
        const location = getLocationBySlug(match.params.citySlug);
        if (!location) return <NotFoundPage />;
        return <LocationPage location={location} onOpenQuoteModal={handleOpenQuoteModal} />;
      }

      case 'category': {
        const category = getCategoryBySlug(match.params.categorySlug);
        if (!category) return <NotFoundPage />;
        return <CategoryPage category={category} onOpenQuoteModal={handleOpenQuoteModal} />;
      }

      case 'product': {
        const product = getProductBySlug(match.params.productSlug);
        if (!product) return <NotFoundPage />;
        return <ProductDetailPage product={product} onOpenQuoteModal={handleOpenQuoteModal} />;
      }

      case 'rent-city': {
        const product = getProductBySlug(match.params.productSlug);
        const location = getLocationBySlug(match.params.citySlug);
        if (!product || !location) return <NotFoundPage />;
        return (
          <CityProductServicePage
            product={product}
            location={location}
            mode="rent"
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      }

      case 'buy-city': {
        const product = getProductBySlug(match.params.productSlug);
        const location = getLocationBySlug(match.params.citySlug);
        if (!product || !location) return <NotFoundPage />;
        return (
          <CityProductServicePage
            product={product}
            location={location}
            mode="buy"
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      }

      case 'blog-detail': {
        const article = getBlogArticleBySlug(match.params.postSlug);
        if (!article) return <NotFoundPage />;
        return <BlogDetailPage article={article} onOpenQuoteModal={handleOpenQuoteModal} />;
      }

      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-600 selection:text-white overflow-x-hidden w-full relative">
      {/* Header with exact 5 nav items + OUR LOCATIONS strip */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 pb-16 md:pb-0">
        {renderCurrentPage()}
      </main>

      {/* Footer with exact 7 branch addresses & Designed By F7 Digital Media */}
      <Footer />

      {/* Mobile Sticky Bar & Floating WhatsApp */}
      <MobileStickyBar onOpenQuoteModal={() => handleOpenQuoteModal(undefined, undefined, 'general')} />

      {/* Interactive Quotation & Price Enquiry Modal */}
      <QuoteModal
        isOpen={modalState.isOpen}
        onClose={handleCloseQuoteModal}
        initialProductSlug={modalState.productSlug}
        initialCitySlug={modalState.citySlug}
        initialMode={modalState.mode}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
