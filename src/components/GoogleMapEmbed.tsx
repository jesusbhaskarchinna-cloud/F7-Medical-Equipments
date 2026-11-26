import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_PHONE_TEL, BUSINESS_PHONE, getWhatsAppUrl } from '../utils/whatsapp';

interface GoogleMapEmbedProps {
  address: string;
  cityName: string;
  heightClass?: string;
  className?: string;
  showDetails?: boolean;
  compact?: boolean;
}

export function GoogleMapEmbed({
  address,
  cityName,
  heightClass = 'h-[280px] sm:h-[350px] lg:h-[400px]',
  className = '',
  showDetails = true,
  compact = false,
}: GoogleMapEmbedProps) {
  const encodedAddress = encodeURIComponent(address);
  const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const openInMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const whatsappUrl = getWhatsAppUrl({ cityName, enquiryType: 'general' });

  if (compact) {
    return (
      <div className={`rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs w-full ${className}`}>
        <div className="relative w-full h-44 bg-slate-100">
          <iframe
            src={embedUrl}
            title={`Map of F7 Medical Equipment ${cityName}`}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={openInMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-white/95 hover:bg-white text-slate-800 text-[10px] font-semibold px-2.5 py-1.5 rounded-lg shadow-xs border border-slate-200 flex items-center gap-1 backdrop-blur-xs transition-colors"
          >
            <span>Open Maps</span>
            <ExternalLink className="w-2.5 h-2.5 text-teal-600" />
          </a>
        </div>
        <div className="p-2.5 flex items-center justify-between text-xs bg-slate-50 border-t border-slate-100">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:text-teal-800 font-semibold flex items-center gap-1 py-1"
          >
            <Navigation className="w-3.5 h-3.5 text-teal-600" />
            <span>Get Directions</span>
          </a>
          <span className="text-[11px] text-slate-500">{cityName} Hub</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-md w-full ${className}`}>
      {/* Top Header Bar */}
      <div className="px-4 sm:px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-2 rounded-xl bg-teal-100/70 text-teal-800 shrink-0">
            <MapPin className="w-4 h-4 text-teal-700" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
              Google Maps &bull; {cityName} Branch
            </h4>
            <span className="text-[11px] text-slate-500 block truncate">
              Interactive navigation, drag &amp; zoom enabled
            </span>
          </div>
        </div>

        <a
          href={openInMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-xs font-semibold text-teal-700 hover:text-teal-800 bg-white hover:bg-teal-50 px-3.5 py-2.5 min-h-[44px] rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>

      {/* Interactive Map iFrame */}
      <div className={`relative w-full ${heightClass} bg-slate-100 overflow-hidden`}>
        <iframe
          src={embedUrl}
          title={`Google Map showing F7 Medical Equipment branch in ${cityName}`}
          className="w-full h-full border-0 block"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Bottom Information & Directions Action Bar */}
      {showDetails && (
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-1 w-full min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 block">
                Official Searched Address
              </span>
              <p className="text-xs text-slate-700 font-mono select-all leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 break-words">
                {address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2 pt-1">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Navigation className="w-4 h-4 shrink-0" />
              <span>Get Directions to {cityName}</span>
            </a>

            <a
              href={BUSINESS_PHONE_TEL}
              className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Call Branch ({BUSINESS_PHONE})</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>WhatsApp Branch Desk</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
