import { SEOHead } from '../components/SEOHead';
import { Link } from '../utils/router';
import { BUSINESS_PHONE, BUSINESS_EMAIL, FOOTER_CREDIT } from '../utils/whatsapp';
import { ChevronRight, ShieldAlert, FileText, Lock } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'disclaimer';
}

export function LegalPage({ type }: LegalPageProps) {
  if (type === 'privacy') {
    return (
      <div className="bg-white min-h-screen">
        <SEOHead
          title="Privacy Policy | F7 Medical Equipment"
          description="Read the official Privacy Policy of F7 Medical Equipment regarding customer data, rental records, and contact confidentiality."
          canonicalPath="/privacy-policy/"
        />
        <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-teal-700">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-800">Privacy Policy</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6 text-sm text-slate-700 leading-relaxed">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Legal Transparency</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Privacy Policy</h1>
            <p className="text-xs text-slate-500 mt-1">Last Updated: November 2026</p>
          </div>

          <p>
            At F7 Medical Equipment, we are committed to safeguarding the privacy and personal details of patients, caregivers, medical practitioners, and corporate partners who reach out to our branches across India.
          </p>

          <h2 className="text-lg font-bold text-slate-900">1. Information Collection</h2>
          <p>
            We collect information provided directly by customers when requesting medical equipment quotations, booking rental tenures, submitting contact forms, or communicating via phone or WhatsApp. This includes names, phone numbers, delivery addresses, and physician prescription notes where required for calibration.
          </p>

          <h2 className="text-lg font-bold text-slate-900">2. Use of Information</h2>
          <p>
            Information collected is strictly utilized to process equipment orders, verify stock at the appropriate branch (Hyderabad, Delhi, Vijayawada, Visakhapatnam, Chennai, Bangalore, or Pune), coordinate delivery logistics, and provide ongoing biomedical customer assistance.
          </p>

          <h2 className="text-lg font-bold text-slate-900">3. Non-Disclosure &amp; Confidentiality</h2>
          <p>
            We do not sell, rent, or lease customer details to third-party marketing networks. All medical prescriptions and patient recovery information shared with our biomedical staff are maintained in strict confidentiality.
          </p>

          <h2 className="text-lg font-bold text-slate-900">4. Contact Privacy Desk</h2>
          <p>
            For questions regarding our privacy practices, email us at <a href={`mailto:${BUSINESS_EMAIL}`} className="text-teal-700 underline">{BUSINESS_EMAIL}</a> or call {BUSINESS_PHONE}.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'terms') {
    return (
      <div className="bg-white min-h-screen">
        <SEOHead
          title="Terms & Conditions | F7 Medical Equipment"
          description="Terms and conditions governing medical equipment sales, hire tenures, security deposits, and maintenance across F7 Medical Equipment branches."
          canonicalPath="/terms-and-conditions/"
        />
        <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-teal-700">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-800">Terms &amp; Conditions</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6 text-sm text-slate-700 leading-relaxed">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Commercial Terms</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Terms &amp; Conditions</h1>
            <p className="text-xs text-slate-500 mt-1">Last Updated: November 2026</p>
          </div>

          <h2 className="text-lg font-bold text-slate-900">1. Medical Equipment Rental Terms</h2>
          <p>
            All medical equipment rented through F7 Medical Equipment remains the exclusive property of F7 Medical Equipment. The renter agrees to use the device solely in accordance with manufacturer guidelines and physician prescriptions. A refundable security deposit and verified KYC documentation (identity and address proof) are required prior to equipment handover.
          </p>

          <h2 className="text-lg font-bold text-slate-900">2. Sales &amp; Quotations</h2>
          <p>
            Indicative prices published on this website represent broader Indian market reference ranges and do not constitute binding commercial offers. Formal written quotations provided by F7 Medical Equipment specify final approved unit pricing, applicable GST rates, delivery fees, and warranty terms.
          </p>

          <h2 className="text-lg font-bold text-slate-900">3. Operation and Safe Handling</h2>
          <p>
            Renters and purchasers are responsible for providing appropriate electrical infrastructure (such as grounded voltage-stabilized outlets) for sensitive medical electronic apparatus. Any physical damage caused by improper operation or negligence will be assessed against the security deposit.
          </p>

          <h2 className="text-lg font-bold text-slate-900">4. Governing Jurisdiction</h2>
          <p>
            Transactions are subject to the local commercial jurisdiction corresponding to the servicing branch location.
          </p>
        </div>
      </div>
    );
  }

  // Disclaimer Page
  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Disclaimer & Pricing Policy | F7 Medical Equipment"
        description="Official medical disclaimer and indicative pricing policy for F7 Medical Equipment sales and rental operations."
        canonicalPath="/disclaimer/"
      />
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-800">Disclaimer</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6 text-sm text-slate-700 leading-relaxed">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Important Notice</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Medical &amp; Pricing Disclaimer</h1>
          <p className="text-xs text-slate-500 mt-1">Effective Date: November 2026</p>
        </div>

        {/* Section 5 Product Price Policy */}
        <div className="p-5 bg-teal-50 rounded-xl border border-teal-200 space-y-3">
          <h2 className="text-base font-bold text-teal-950">
            Important Product Price Policy
          </h2>
          <p className="text-xs text-teal-900 font-semibold leading-relaxed">
            &ldquo;Indicative market price only. Final F7 Medical Equipment price depends on brand, model, configuration, condition, accessories, taxes and availability. Contact our team for the latest price and written quotation.&rdquo;
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
            <li>Prices displayed across this website are indicative Indian market reference ranges, not confirmed selling prices.</li>
            <li>Displayed figures do not guarantee current in-stock availability.</li>
            <li>No fake discounts, MRP strikethroughs, or unverified claims are made.</li>
            <li>Rental charges are determined case-by-case based on duration, model, and terms.</li>
          </ul>
        </div>

        <h2 className="text-lg font-bold text-slate-900">Medical Advice Disclaimer</h2>
        <p>
          Information provided on this website, including blog articles, product overviews, and equipment descriptions, is intended exclusively for educational and informational purposes. It does NOT constitute medical advice, clinical diagnosis, or treatment recommendations.
        </p>
        <p>
          Always seek the direct guidance of a qualified medical practitioner or pulmonologist regarding any medical condition or equipment prescription. Never adjust prescribed oxygen flow rates, ventilator settings, or medication dosages without authorized clinical consultation.
        </p>

        <h2 className="text-lg font-bold text-slate-900">Technical Specifications Notice</h2>
        <p className="italic text-slate-600">
          &ldquo;Please contact our team for model-specific technical specifications, accessories and current availability.&rdquo;
        </p>
      </div>
    </div>
  );
}
