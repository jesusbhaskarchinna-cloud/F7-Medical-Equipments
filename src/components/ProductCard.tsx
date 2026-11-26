import { useState } from 'react';
import { Product } from '../types';
import { Link, getRentalUrl, getSaleUrl } from '../utils/router';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Info, MessageSquare, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  citySlug?: string;
  cityName?: string;
  onOpenQuoteModal: (productSlug: string, citySlug?: string, mode?: 'rental' | 'purchase' | 'price') => void;
}

export function ProductCard({
  product,
  citySlug,
  cityName,
  onOpenQuoteModal,
}: ProductCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const priceWhatsappUrl = getWhatsAppUrl({
    productName: product.name,
    priceRange: product.indicativePriceDisplay,
    cityName: cityName,
    enquiryType: 'price',
  });

  const detailUrl = `/products/${product.slug}/`;
  const targetCity = citySlug || 'hyderabad';
  const rentUrl = getRentalUrl(product.slug, targetCity);
  const buyUrl = getSaleUrl(product.slug, targetCity);

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 hover:border-teal-500/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      {/* Product Image Box */}
      <div className="relative aspect-4/3 bg-slate-50/80 p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md shadow-xs">
          {product.categoryId.replace(/-/g, ' ')}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <Link to={detailUrl} className="block group-hover:text-teal-700 transition-colors">
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Indicative Price Display & Disclaimer Icon */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-start justify-between relative gap-2">
            <div className="space-y-1">
              {product.rentalRateDisplay && (
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-teal-100/80 text-teal-800">
                    Rent
                  </span>
                  <span className="text-sm font-bold text-slate-900 font-mono tracking-tight tabular-nums">
                    {product.rentalRateDisplay}
                  </span>
                </div>
              )}
              {product.salePriceDisplay && (
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    Sale
                  </span>
                  <span className="text-xs font-semibold text-slate-700 font-mono tracking-tight tabular-nums">
                    {product.salePriceDisplay}
                  </span>
                </div>
              )}
              {!product.rentalRateDisplay && !product.salePriceDisplay && (
                <div>
                  <span className="text-[11px] font-medium text-slate-500 block">
                    Indicative Price
                  </span>
                  <span className="text-base font-bold text-slate-900 font-mono tracking-tight tabular-nums">
                    {product.indicativePriceDisplay}
                  </span>
                </div>
              )}
            </div>

            {/* Disclaimer Info Tooltip Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowTooltip(!showTooltip)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="p-1.5 text-slate-400 hover:text-teal-700 rounded-md focus:outline-none cursor-pointer"
                aria-label="Price Disclaimer Info"
              >
                <Info className="w-4 h-4" />
              </button>

              {showTooltip && (
                <div className="absolute bottom-full right-0 mb-2 w-64 max-w-[calc(100vw-48px)] p-3 bg-slate-900 text-slate-200 text-[11px] leading-snug rounded-lg shadow-xl z-30 border border-slate-800">
                  <p className="font-semibold text-white mb-1">Pricing Policy:</p>
                  Indicative market price only. Final F7 Medical Equipment price depends on brand, model, configuration, condition, accessories, taxes and availability.
                </div>
              )}
            </div>
          </div>

          <p className="text-[10px] text-slate-500 mt-1 italic leading-tight">
            Indicative market price only. Contact team for latest price &amp; quotation.
          </p>

          {/* Action Buttons Row 1: Details & WhatsApp Price */}
          <div className="mt-3.5 grid grid-cols-2 gap-2">
            <Link
              to={detailUrl}
              className="px-2.5 py-2.5 min-h-[40px] text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1"
            >
              <span>View Details</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <a
              href={priceWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-2.5 min-h-[40px] text-center text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors flex items-center justify-center gap-1"
            >
              <MessageSquare className="w-3 h-3 text-emerald-700 shrink-0" />
              <span className="truncate">Price Enquiry</span>
            </a>
          </div>

          {/* Action Buttons Row 2: Rent Now, Buy Now, Request Latest Price */}
          <div className="mt-2 grid grid-cols-3 gap-1.5 text-[11px]">
            <Link
              to={rentUrl}
              className="py-2 px-1 text-center font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors min-h-[38px] flex items-center justify-center"
            >
              Rent Now
            </Link>
            <Link
              to={buyUrl}
              className="py-2 px-1 text-center font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors min-h-[38px] flex items-center justify-center"
            >
              Buy Now
            </Link>
            <button
              onClick={() => onOpenQuoteModal(product.slug, citySlug, 'price')}
              className="py-2 px-1 text-center font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer truncate min-h-[38px] flex items-center justify-center"
              title="Request Latest Price"
            >
              Latest Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
