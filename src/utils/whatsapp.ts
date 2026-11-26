export const BUSINESS_PHONE = '+91 9347403085';
export const BUSINESS_PHONE_TEL = 'tel:+919347403085';
export const BUSINESS_WHATSAPP_NUMBER = '919347403085';
export const BUSINESS_EMAIL = 'care@medicalequipments.com';
export const BUSINESS_EMAIL_MAILTO = 'mailto:care@medicalequipments.com';
export const BUSINESS_HOURS = 'Open 24/7 – Round-the-Clock Support';
export const BUSINESS_HOURS_SHORT = 'Open 24/7';
export const FOOTER_CREDIT = 'Designed By F7 Digital Media';

export type EnquiryType = 'price' | 'rental' | 'purchase' | 'general';

export function getWhatsAppUrl(options?: {
  productName?: string;
  priceRange?: string;
  cityName?: string;
  enquiryType?: EnquiryType;
  customMessage?: string;
}): string {
  if (options?.customMessage) {
    return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(options.customMessage)}`;
  }

  const { productName, priceRange, cityName, enquiryType } = options || {};

  let message = 'Hello F7 Medical Equipment, I am interested in your medical equipment sales and rental services. Please share more details and a formal quotation.';

  if (enquiryType === 'price' && productName) {
    if (priceRange) {
      message = `Hello F7 Medical Equipment, I am interested in the price of ${productName}. The displayed indicative price range is ${priceRange}. Please share your latest available models and final quotation.`;
    } else {
      message = `Hello F7 Medical Equipment, I am interested in the price of ${productName}. Please share your latest available models and final quotation.`;
    }
  } else if (enquiryType === 'rental' && productName) {
    if (cityName) {
      message = `Hello F7 Medical Equipment, I am interested in renting an ${productName} in ${cityName}. Please share current availability, rental charges, rental terms and quotation.`;
    } else {
      message = `Hello F7 Medical Equipment, I am interested in renting an ${productName}. Please share current availability, rental charges, rental terms and quotation.`;
    }
  } else if (enquiryType === 'purchase' && productName) {
    if (cityName) {
      message = `Hello F7 Medical Equipment, I am interested in purchasing an ${productName} in ${cityName}. Please share available models, specifications, current price and quotation.`;
    } else {
      message = `Hello F7 Medical Equipment, I am interested in purchasing an ${productName}. Please share available models, specifications, current price and quotation.`;
    }
  } else if (cityName && !productName) {
    message = `Hello F7 Medical Equipment, I am reaching out regarding medical equipment services in ${cityName}. Please connect me with your branch team for current equipment availability and quotation.`;
  }

  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
