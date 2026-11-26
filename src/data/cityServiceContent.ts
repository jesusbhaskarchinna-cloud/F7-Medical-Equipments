import { Product, LocationBranch } from '../types';

export interface CityServiceContent {
  h1: string;
  seoTitle: string;
  metaDescription: string;
  badgeText: string;
  heroIntro: string;
  localCorridorText: string;
  serviceOverview: {
    title: string;
    description: string;
    points: string[];
  };
  productClinicalSuitability: string;
  deliveryAndSetupTerms: string[];
  pricingGuidance: {
    headline: string;
    subheadline: string;
    details: string;
  };
  localBranchHighlights: {
    address: string;
    corridorsCovered: string[];
    dispatchProtocol: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

// City-specific healthcare landscapes
const CITY_PROFILES: Record<
  string,
  {
    corridors: string[];
    logisticsDesc: string;
    landmarks: string;
    dispatchTimeline: string;
    careFocus: string;
  }
> = {
  hyderabad: {
    corridors: [
      'Banjara Hills & Jubilee Hills super-specialty hospitals',
      'HITEC City & Gachibowli healthcare corridor',
      'Secunderabad & Malkajgiri residential zones',
      'Tolichowki, Mehdipatnam & Old City care communities',
      'Kukatpally & Miyapur post-operative home-care belt',
    ],
    logisticsDesc:
      'Operating from Podium Mall in Tolichowki, our Hyderabad hub coordinates rapid biomedical delivery across the twin cities with same-day emergency dispatch available for oxygen and respiratory gear.',
    landmarks: 'Podium Mall, Janaki Nagar Colony, Tolichowki',
    dispatchTimeline: 'Same-day dispatch within 2–4 hours for critical respiratory equipment across GHMC limits.',
    careFocus:
      'Major tertiary referral centers, corporate health-tech corridors, and extensive post-operative home ICU setups.',
  },
  delhi: {
    corridors: [
      'South Delhi medical belt (Saket, Malviya Nagar & Panchsheel)',
      'AIIMS & Safdarjung Hospital step-down patient radius',
      'Greater Kailash, Hauz Khas & Green Park residential sectors',
      'Noida, Gurugram & Faridabad NCR delivery corridors',
      'Central and West Delhi clinical transit points',
    ],
    logisticsDesc:
      'Centrally situated at Panchsheel Vihar, Malviya Nagar in South Delhi, our team coordinates both institutional hospital supply and doorstep residential convalescence support across Delhi NCR.',
    landmarks: 'Panchsheel Vihar, Malviya Nagar, South Delhi',
    dispatchTimeline: 'Rapid same-day delivery throughout South Delhi and scheduled door-to-door courier setup across NCR.',
    careFocus:
      'High-volume acute respiratory management, winter smog recovery, seasonal pulmonary support, and senior citizen wellness.',
  },
  chennai: {
    corridors: [
      'Anna Nagar & Kilpauk healthcare network',
      'Ponniammanmedu & North Chennai residential corridors',
      'Greams Road & T. Nagar tertiary medical hub',
      'OMR & ECR convalescence communities',
      'Tambaram, Guindy & Chromepet hospital corridors',
    ],
    logisticsDesc:
      'From 4th Main Road, Ponniammanmedu, our Chennai branch serves as an essential equipment partner for both local households and outstation patients recovering following tertiary treatments in India’s healthcare capital.',
    landmarks: 'Prakash Nagar, Ponniammanmedu, Chennai',
    dispatchTimeline: 'Prompt doorstep delivery across North and Central Chennai within 3–5 hours of confirmation.',
    careFocus:
      'Cardiothoracic post-surgical care, orthopedic rehabilitation, multi-organ recovery, and elderly home nursing.',
  },
  bangalore: {
    corridors: [
      'Dooravaninagar & Bengaluru East residential belt',
      'Whitefield & Mahadevapura health-tech corridors',
      'Indiranagar, Koramangala & HSR Layout patient circles',
      'Hebbal, Jayanagar & Bannerghatta tertiary hospital routes',
      'Electronic City corporate wellness & rehab homes',
    ],
    logisticsDesc:
      'Situated at Hoysala Nagar, Dooravaninagar, our Bengaluru branch handles cutting-edge home respiratory setups, polysomnography diagnostic equipment, and ergonomic patient beds across the IT capital.',
    landmarks: 'Hoysala Nagar, Dooravaninagar, Bengaluru East',
    dispatchTimeline: 'Same-day technician-assisted handover and calibration across East and Central Bengaluru.',
    careFocus:
      'Technologically advanced home care, lifestyle sleep-disorder diagnostics, pediatric home respiratory support, and ICU step-down.',
  },
  pune: {
    corridors: [
      'Kondhwa Budruk & Shatrunjay Nagar primary depot',
      'Camp, Wanowrie & Fatima Nagar healthcare network',
      'Hadapsar & Magarpatta clinical care belts',
      'Kothrud, Deccan & Shivaji Nagar residential zones',
      'Pimpri-Chinchwad (PCMC) industrial & medical centers',
    ],
    logisticsDesc:
      'Located on Kondhwa Main Road near Budh Vihar, our Pune branch provides robust support for geriatric retirement homes, orthopedic recovery centers, and private hospital networks across Pune and PCMC.',
    landmarks: 'Amba Mata, Kondhwa Main Rd, Kondhwa Budruk',
    dispatchTimeline: 'Doorstep dispatch across Pune and PCMC with complete equipment assembly and demonstration.',
    careFocus:
      'Geriatric palliative care, orthopedic surgery convalescence, pulmonary rehabilitation, and hospice bedding.',
  },
  visakhapatnam: {
    corridors: [
      'Arilova Health City medical corridor',
      'Srikanth Nagar & GSN Pet Clinic local hub',
      'MVP Colony & Seethammadhara residential communities',
      'Maharanipeta & King George Hospital (KGH) vicinity',
      'Gajuwaka & Steel Plant township healthcare belts',
    ],
    logisticsDesc:
      'Strategically positioned at Arilova adjacent to Vizag’s Health City, our Visakhapatnam center bridges the gap between tertiary discharge and home rehabilitation across North Coastal Andhra.',
    landmarks: 'Srikanth Nagar, Arilova Colony, Visakhapatnam',
    dispatchTimeline: 'Fast local delivery across Vizag urban zones with doorstep technician support for patient beds and monitors.',
    careFocus:
      'Coastal respiratory humidity care, post-trauma orthopedic rehabilitation, and step-down intensive care monitoring.',
  },
  vijayawada: {
    corridors: [
      'Patamata & Pantakalava Road primary facility',
      'RTC Colony & Benz Circle central health network',
      'MG Road & Governorpet clinical supply corridors',
      'Guntur-Vijayawada highway hospital cluster',
      'Amaravati capital region healthcare developments',
    ],
    logisticsDesc:
      'Based in Durga Bhavani Complex in Patamata, F7 Medical Equipment Vijayawada is the trusted equipment source for clinics, home patients, and nursing institutes across the Krishna and Guntur districts.',
    landmarks: 'Durga Bhavani Complex, Pantakalava Road, Patamata',
    dispatchTimeline: 'Expedited dispatch throughout Vijayawada and scheduled regional delivery into Guntur and Amaravati.',
    careFocus:
      'Emergency respiratory gas backup, post-surgical home beds, mobility aids for senior citizens, and outpatient clinic monitoring.',
  },
};

// Generates 100% unique, deep, contextual data for all 392 pages
export function generateCityServiceContent(
  product: Product,
  location: LocationBranch,
  service: 'rent' | 'sale'
): CityServiceContent {
  const isRent = service === 'rent';
  const cityProfile = CITY_PROFILES[location.slug] || CITY_PROFILES['hyderabad'];
  const serviceTerm = isRent ? 'Rental' : 'Sale & Purchase';
  const actionVerb = isRent ? 'Rent' : 'Buy';

  const h1 = isRent
    ? `${product.name} on Rent in ${location.city}`
    : `${product.name} for Sale in ${location.city}`;

  const seoTitle = isRent
    ? `Rent ${product.name} in ${location.city} – Fast Delivery & Verified Rates | F7 Medical`
    : `Buy ${product.name} in ${location.city} – Indicative Price & Quotation | F7 Medical`;

  const metaDescription = isRent
    ? `Looking to rent ${product.name} in ${location.city}? Fully sanitized clinical units, flexible tenures & doorstep delivery from our ${location.city} branch at ${location.exactAddress}.`
    : `Purchase ${product.name} in ${location.city}. Indicative market price ${product.indicativePriceDisplay}. Official branch address at ${location.exactAddress}. Request written quotation today.`;

  const badgeText = isRent
    ? `Verified Equipment Rental • ${location.city} Hub`
    : `New Medical Equipment Sales • ${location.city} Hub`;

  const heroIntro = isRent
    ? `F7 Medical Equipment offers certified, hospital-disinfected ${product.name} rental solutions for home-care patients, nursing setups, and transitional hospital step-down rooms throughout ${location.city}. With our dedicated facility at ${location.exactAddress}, we ensure that families and care teams receive prompt local service without long waiting periods.`
    : `Procure genuine, medical-grade ${product.name} units in ${location.city} for clinics, hospitals, diagnostic centers, or long-term private home use. Operating directly from ${location.exactAddress}, F7 Medical Equipment provides transparent commercial guidance, verified manufacturer warranties, and comprehensive written quotations.`;

  const localCorridorText = isRent
    ? `In ${location.city}, our rental fleet is actively dispatched across key patient belts including ${cityProfile.corridors.slice(0, 3).join(', ')}. Whether your patient is being discharged from a major super-specialty hospital or requires home convalescence support, our ${location.city} team delivers calibrated, ready-to-use equipment.`
    : `Healthcare facilities, private practitioners, and institutions across ${cityProfile.corridors.slice(0, 3).join(', ')} rely on our ${location.city} branch for reliable procurement of ${product.name}. We furnish official GST tax invoices, configuration assistance, and manufacturer technical documentation.`;

  const serviceOverview = isRent
    ? {
        title: `Comprehensive ${product.name} Rental Services in ${location.city}`,
        description: `Renting an ${product.name} allows families and medical facilities to access high-end clinical technology without the capital burden of outright purchase, making it ideal for temporary recovery phases, clinical trials, or post-operative healing.`,
        points: [
          `Flexible rental periods: weekly, monthly, and extendable terms adapted to your doctor's timeline`,
          `Multi-stage biomedical sanitization and pre-delivery functional testing by trained technicians`,
          `Complete accessory pack including brand-new, sterile single-patient consumables`,
          `Prompt machine replacement guarantee in the rare event of a technical operational fault`,
          `Clear, documented refundable security deposit terms with transparent rental agreements`,
        ],
      }
    : {
        title: `Commercial & Private ${product.name} Purchase in ${location.city}`,
        description: `Investing in an ${product.name} provides permanent ownership with full manufacturer warranties, ideal for clinics upgrading their diagnostic capabilities, nursing homes expanding bed capacity, or patients with chronic lifelong therapy needs.`,
        points: [
          `Brand-new factory-packaged units with authentic serial numbers and manufacturer warranty`,
          `Comprehensive technical demonstration and initial calibration upon delivery in ${location.city}`,
          `Formal commercial documentation: Tax Invoices, GST compliance, and institutional quotes`,
          `Options for Annual Maintenance Contracts (AMC) and ongoing consumable supply`,
          `Direct consultation with our biomedical product engineers to match your clinical specifications`,
        ],
      };

  const productClinicalSuitability = isRent
    ? `For individuals in ${location.city} requiring ${product.name} on a temporary basis—such as post-discharge stabilization, acute flare-up management, or palliative home support—renting provides immediate access to medical-grade precision without delay. ${product.careContext}`
    : `For medical facilities, nursing centers, and long-term care programs in ${location.city}, purchasing an ${product.name} delivers enduring clinical dependability. It is engineered for sustained duty cycles across intensive hospital and home environments. ${product.careContext}`;

  const deliveryAndSetupTerms = isRent
    ? [
        `Standard doorstep delivery and installation scheduled across ${location.city} municipal limits`,
        `Patient/caregiver operational orientation covering power connection, alarm indicators, and hygiene maintenance`,
        `Biomedical test certificate verifying purity/pressure/electrical safety prior to handover`,
        `Doctor's prescription review conducted by our staff to confirm correct equipment capacity`,
      ]
    : [
        `Secure transit dispatch directly from our ${location.city} branch or central warehouse depot`,
        `On-site unboxing, functional check, and electrical safety inspection upon arrival`,
        `Supply of relevant manufacturer user manuals, warranty certificates, and compliance papers`,
        `Dedicated post-sales customer support contact for technical and consumable inquiries`,
      ];

  const pricingGuidance = isRent
    ? {
        headline: product.rentalRateDisplay || 'Rental Rate: ₹' + product.indicativePriceDisplay,
        subheadline: `Monthly / Short-Term Rental Range: ${product.rentalRateDisplay || product.indicativePriceDisplay}`,
        details:
          'Rental charges depend on the equipment model, rental duration, availability, delivery requirements and applicable terms. Contact our team for the latest rental quotation.',
      }
    : {
        headline: product.salePriceDisplay || product.indicativePriceDisplay,
        subheadline: `Purchase / Outright Sale Range: ${product.salePriceDisplay || product.indicativePriceDisplay}`,
        details:
          'Contact F7 Medical Equipment to confirm the latest selling price, available models, specifications, taxes and quotation. Indicative market price only.',
      };

  const localBranchHighlights = {
    address: location.exactAddress,
    corridorsCovered: cityProfile.corridors,
    dispatchProtocol: cityProfile.dispatchTimeline,
  };

  const faqs = isRent
    ? [
        {
          question: `How quickly can F7 deliver a rented ${product.name} in ${location.city}?`,
          answer: `For emergency cases in ${location.city}, we prioritize same-day delivery within 2 to 5 hours from our ${location.city} branch at ${cityProfile.landmarks}, subject to current fleet availability.`,
        },
        {
          question: `What documents are needed to rent an ${product.name} in ${location.city}?`,
          answer: `Rental verification requires standard KYC documentation (Government ID such as Aadhaar/Voter ID, local ${location.city} address proof) and a copy of the attending physician's prescription or hospital discharge summary.`,
        },
        {
          question: `What is the rental price policy for ${product.name} in ${location.city}?`,
          answer: `Rental charges depend on the equipment model, rental duration, availability, delivery requirements and applicable terms. Contact our ${location.city} team on +91 9347403085 for the latest rental quotation.`,
        },
        {
          question: `Where can I physically inspect the rental equipment in ${location.city}?`,
          answer: `You can visit our official ${location.city} branch at: ${location.exactAddress}. We welcome family members or attendants to inspect equipment prior to rental booking.`,
        },
      ]
    : [
        {
          question: `What is the purchase price for ${product.name} in ${location.city}?`,
          answer: `The displayed indicative market reference range is ${product.indicativePriceDisplay}. The final purchase quotation depends on chosen brand, model tier, technical accessories, warranty term, and applicable GST. Connect with our ${location.city} branch for a formal quote.`,
        },
        {
          question: `Do you provide GST invoices for clinic purchases in ${location.city}?`,
          answer: `Yes, all equipment sales through our ${location.city} branch are processed with compliant GST tax invoices for hospital accounting, corporate reimbursement, and medical depreciation claims.`,
        },
        {
          question: `Is on-site assembly and demo included when purchasing in ${location.city}?`,
          answer: `Yes, our local biomedical field representative can provide on-site assembly, testing, and operational training at your clinic or residence in ${location.city}.`,
        },
        {
          question: `What is the official address of the F7 Medical branch in ${location.city}?`,
          answer: `Our official branch address is: ${location.exactAddress}.`,
        },
      ];

  return {
    h1,
    seoTitle,
    metaDescription,
    badgeText,
    heroIntro,
    localCorridorText,
    serviceOverview,
    productClinicalSuitability,
    deliveryAndSetupTerms,
    pricingGuidance,
    localBranchHighlights,
    faqs,
  };
}

// Complete Route Registry of all 392 URLs with metadata
export interface ServiceRouteItem {
  url: string;
  service: 'rent' | 'sale';
  productSlug: string;
  productName: string;
  citySlug: string;
  cityName: string;
  h1: string;
  seoTitle: string;
}

export function getAll392ServiceRoutes(
  products: Product[],
  locations: LocationBranch[]
): ServiceRouteItem[] {
  const routes: ServiceRouteItem[] = [];

  // RENTAL ROUTES (28 x 7 = 196)
  products.forEach((prod) => {
    locations.forEach((loc) => {
      routes.push({
        url: `/${prod.slug}-for-rent-in-${loc.slug}/`,
        service: 'rent',
        productSlug: prod.slug,
        productName: prod.name,
        citySlug: loc.slug,
        cityName: loc.city,
        h1: `${prod.name} on Rent in ${loc.city}`,
        seoTitle: `Rent ${prod.name} in ${loc.city} – Fast Delivery & Verified Rates | F7 Medical`,
      });
    });
  });

  // SALE ROUTES (28 x 7 = 196)
  products.forEach((prod) => {
    locations.forEach((loc) => {
      routes.push({
        url: `/${prod.slug}-for-sale-in-${loc.slug}/`,
        service: 'sale',
        productSlug: prod.slug,
        productName: prod.name,
        citySlug: loc.slug,
        cityName: loc.city,
        h1: `${prod.name} for Sale in ${loc.city}`,
        seoTitle: `Buy ${prod.name} in ${loc.city} – Indicative Price & Quotation | F7 Medical`,
      });
    });
  });

  return routes;
}
