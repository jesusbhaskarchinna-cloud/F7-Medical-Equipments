import { Phone, MessageSquare, FileText } from 'lucide-react';
import { BUSINESS_PHONE_TEL, getWhatsAppUrl } from '../utils/whatsapp';

interface MobileStickyBarProps {
  onOpenQuoteModal: () => void;
}

export function MobileStickyBar({ onOpenQuoteModal }: MobileStickyBarProps) {
  const whatsappUrl = getWhatsAppUrl({ enquiryType: 'general' });

  return (
    <>
      {/* Floating WhatsApp Quick Action Button for Desktop & Mobile */}
      <aside aria-label="Quick contact" className="fixed bottom-20 md:bottom-6 right-5 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 md:px-4 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          aria-label="Direct WhatsApp Enquiry"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden md:inline text-xs font-semibold tracking-wide">
            WhatsApp Enquiry
          </span>
        </a>
      </aside>

      {/* Fixed Mobile Bottom Bar (Under 15% viewport height, ~52px) */}
      <nav aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-2xl px-3 py-2 flex items-center justify-between gap-2 safe-bottom">
        {/* Call Now */}
        <a
          href={BUSINESS_PHONE_TEL}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-teal-400" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire Now */}
        <button
          onClick={onOpenQuoteModal}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-teal-700 text-white rounded-lg text-xs font-semibold hover:bg-teal-800 transition-colors cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </button>
      </nav>
    </>
  );
}
