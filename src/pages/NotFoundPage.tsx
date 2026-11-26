import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-16 px-4">
      <SEOHead
        title="Page Not Found (404) | F7 Medical Equipment"
        description="The requested page could not be located on F7 Medical Equipment. Return to home or view our products."
      />

      <div className="max-w-md w-full text-center space-y-5">
        <div className="w-16 h-16 bg-slate-100 text-teal-700 rounded-full flex items-center justify-center mx-auto">
          <FileQuestion className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">404 – Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The medical equipment page or branch link you are looking for may have moved or been updated.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="py-2.5 px-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/products-services/"
            className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
