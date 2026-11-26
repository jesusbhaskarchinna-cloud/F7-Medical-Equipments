import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // 1. Respiratory Care
  {
    id: 1,
    slug: 'oxygen-concentrator',
    name: 'Oxygen Concentrator',
    categoryId: 'respiratory-care',
    indicativePriceMin: 3500,
    indicativePriceMax: 54000,
    indicativePriceDisplay: '₹3,500 – ₹6,000 / mo | Sale: ₹37,000 – ₹54,000',
    rentalRateDisplay: '₹3,500 – ₹6,000 / month',
    salePriceDisplay: '₹37,000 – ₹54,000',
    pricingItems: [
      {
            "model": "5 LPM Oxygen Concentrator",
            "rentalRate": "₹3,500 – ₹4,000 / mo",
            "saleRate": "₹37,000 – ₹40,000",
            "notes": "Evox (₹37k–₹38k) / Oxymed (₹38k–₹40k), 3 yrs warranty"
      },
      {
            "model": "10 LPM Oxygen Concentrator",
            "rentalRate": "₹5,000 – ₹6,000 / mo",
            "saleRate": "₹52,000 – ₹54,000",
            "notes": "Oxymed 10Lpm (₹52k–₹54k), 2 yrs warranty"
      },
      {
            "model": "Portable Oxygen Concentrator",
            "rentalRate": "₹25,000 – ₹27,000 / mo",
            "saleRate": "On Request",
            "notes": "15 Days: ₹14,000 – ₹16,000 | 3 Days: ₹4,500 – ₹5,000 (Per day ₹1,200)"
      }
],
    image: '/assets/images/oxygen_concentrator_device_1794038607218.jpg',
    galleryImages: ["/assets/images/oxygen_concentrator_device_1794038607218.jpg","/assets/aistudio/Oxygen_Cylinder_2_4cd27ac3.png","/assets/aistudio/Nebuliser_f4af5cec.png"],
    shortDescription: 'Medical-grade oxygen concentrators delivering continuous or pulse-dose oxygen therapy for home care and clinical facilities.',
    fullDescription: 'An oxygen concentrator is an electrically operated medical apparatus designed to draw ambient room air, separate nitrogen through molecular sieve beds, and deliver a concentrated stream of therapeutic oxygen (typically 90% to 96% purity) to patients diagnosed with respiratory insufficiency, COPD, hypoxemia, or post-operative recovery needs.',
    careContext: 'Commonly prescribed for long-term oxygen therapy (LTOT) in home settings, palliative hospice care, pulmonary rehabilitation, and transitional hospital step-down rooms.',
    intendedUses: [
      'Continuous supplemental oxygen therapy for chronic obstructive pulmonary disease (COPD)',
      'Management of acute respiratory distress and post-viral pulmonary rehabilitation',
      'Supplemental oxygen in step-down hospital wards and long-term nursing facilities',
      'Nocturnal oxygenation support under medical supervision'
    ],
    features: [
      'Available in 5-litre and 10-litre continuous flow capacities as well as portable battery units',
      'Dual molecular sieve bed design with integrated air intake filtration',
      'Audible alarms for low oxygen concentration, power interruption, and high pressure',
      'Caster wheel base for room-to-room mobility and digital LCD operating hour counter'
    ],
    faqs: [
      {
        question: 'What is the difference between a 5 LPM and 10 LPM oxygen concentrator?',
        answer: 'A 5 LPM unit provides up to 5 litres per minute of oxygen flow suitable for moderate supplementary needs. A 10 LPM concentrator is designed for patients requiring higher flow rates or dual-flow delivery prescribed by a pulmonologist.'
      },
      {
        question: 'Can an oxygen concentrator run 24 hours continuously?',
        answer: 'Most medical-grade stationary concentrators are engineered for continuous 24/7 operation, provided they are kept in a well-ventilated room with clean air filters.'
      },
      {
        question: 'Why does the indicative price range span from ₹25,000 to ₹1,10,000?',
        answer: 'The price depends significantly on whether it is a stationary 5L model, high-capacity 10L unit, or a lightweight FAA-approved portable battery-operated concentrator with sensitive pulse-dose sensors.'
      }
    ],
    relatedProductSlugs: ['oxygen-cylinder', 'bipap-machine', 'pulse-oximeter', 'medical-ventilator']
  },
  {
    id: 2,
    slug: 'oxygen-cylinder',
    name: 'Oxygen Cylinder',
    categoryId: 'respiratory-care',
    indicativePriceMin: 1000,
    indicativePriceMax: 20000,
    indicativePriceDisplay: '₹1,000 – ₹2,500 (Rent) | Sale: ₹12,000 – ₹20,000',
    rentalRateDisplay: '₹1,000 – ₹2,500 / month',
    salePriceDisplay: '₹12,000 – ₹20,000',
    pricingItems: [
      {
            "model": "B Type (10.2 Ltrs) Oxygen Cylinder with Flowmeter",
            "rentalRate": "₹1,000 – ₹1,500",
            "saleRate": "₹12,000 – ₹14,000",
            "notes": "Oxygen Gas Refill Charges: ₹800 – ₹1,000"
      },
      {
            "model": "D Type (46.7 Ltrs) Jumbo Oxygen Cylinder with Flowmeter",
            "rentalRate": "₹1,800 – ₹2,500",
            "saleRate": "₹18,000 – ₹20,000",
            "notes": "Oxygen Gas Refill Charges: ₹1,500 – ₹1,800"
      },
      {
            "model": "4.5 Ltrs Portable Aluminum Oxygen Cylinder",
            "rentalRate": "On Request",
            "saleRate": "₹12,000 – ₹14,000",
            "notes": "Lightweight portable kit with regulator"
      },
      {
            "model": "10 Ltrs Portable Aluminum Oxygen Cylinder",
            "rentalRate": "On Request",
            "saleRate": "₹16,000 – ₹18,000",
            "notes": "High-capacity lightweight aluminum cylinder"
      },
      {
            "model": "Adult / Alcon Medical Flow Meter",
            "rentalRate": "Included in Kit",
            "saleRate": "₹1,800 – ₹4,000",
            "notes": "Adult Flow Meter: ₹1,800–₹2,500 | Alcon: ₹3,000–₹4,000"
      },
      {
            "model": "Cylinder Transport Trolley (B Type & D Type)",
            "rentalRate": "₹400 – ₹800",
            "saleRate": "₹1,500 – ₹2,500",
            "notes": "B Type Trolley: ₹400–₹500 | D Type: ₹700–₹800"
      }
],
    image: '/assets/aistudio/Oxygen_Cylinder_2_4cd27ac3.png',
    galleryImages: ["/assets/aistudio/Oxygen_Cylinder_2_4cd27ac3.png","/assets/images/oxygen_concentrator_device_1794038607218.jpg"],
    shortDescription: 'High-pressure seamless steel and aluminium medical oxygen cylinders for emergency backup and patient transit.',
    fullDescription: 'Medical oxygen cylinders store compressed medical gas under high pressure (typically 150 to 200 bar). They provide an essential zero-electricity oxygen reserve during power outages, acute emergencies, patient ambulance transfers, and short-term respiratory stabilization.',
    careContext: 'Crucial emergency failsafe in homes relying on concentrators, as well as triage clinics, nursing homes, and inter-facility ambulance transit.',
    intendedUses: [
      'Emergency backup oxygen source during electrical outages for ventilator or concentrator patients',
      'Portable oxygen delivery during hospital-to-home patient transit and ambulance transport',
      'Immediate emergency stabilization in outpatient clinics and triage centers',
      'Procedural sedation oxygen supplementation in day-care surgery centers'
    ],
    features: [
      'Seamless steel or lightweight aluminium alloy body hydrostatically tested and certified',
      'Standard pin-index or bullnose high-pressure valve fitting',
      'Compatible with medical pressure regulators, flowmeters, and humidifier bottles',
      'Available in B-type (approx. 10L water capacity), D-type (approx. 47L), and portable lightweight kits'
    ],
    faqs: [
      {
        question: 'How long does a medical oxygen cylinder last?',
        answer: 'Duration depends on the cylinder water capacity (litres), the fill pressure (bar), and the prescribed patient flow rate (LPM). A standard B-type cylinder typically lasts between 8 to 12 hours at a low flow rate of 2 LPM.'
      },
      {
        question: 'Does the price include the regulator and trolley?',
        answer: 'Indicative market pricing varies depending on whether the kit includes a certified two-stage regulator, flowmeter, humidifier bottle, key, and transport trolley. Connect with our team for component specifics.'
      }
    ],
    relatedProductSlugs: ['oxygen-concentrator', 'pulse-oximeter', 'suction-machine']
  },
  {
    id: 3,
    slug: 'medical-ventilator',
    name: 'Medical Ventilator',
    categoryId: 'respiratory-care',
    indicativePriceMin: 13000,
    indicativePriceMax: 850000,
    hasPlusSign: true,
    indicativePriceDisplay: '₹13,000 – ₹35,000 / mo | Sale: ₹1,50,000 – ₹8,50,000',
    rentalRateDisplay: '₹13,000 – ₹35,000 / month',
    salePriceDisplay: '₹1,50,000 – ₹8,50,000',
    pricingItems: [
      {
            "model": "BiPAP A40 Life Support (with Humidifier & Battery)",
            "rentalRate": "₹13,000 – ₹16,000 / mo",
            "saleRate": "₹1,45,000 – ₹1,75,000",
            "notes": "Philips Respironics life-support non-invasive platform"
      },
      {
            "model": "BiPAP Stellar 150 Life Support Ventilator",
            "rentalRate": "₹14,000 – ₹16,000 / mo",
            "saleRate": "₹1,60,000 – ₹1,95,000",
            "notes": "ResMed invasive & non-invasive mechanical ventilator"
      },
      {
            "model": "High-End ICU Clinical Mechanical Ventilator",
            "rentalRate": "₹18,000 – ₹35,000 / mo",
            "saleRate": "₹4,50,000 – ₹8,50,000",
            "notes": "Hospital-grade critical care invasive ventilator"
      }
],
    image: '/assets/aistudio/Ventilator_b0bf290d.png',
    galleryImages: ["/assets/aistudio/Ventilator_b0bf290d.png","/assets/images/hfnc_oxygen_machine_1794038606399.jpg","/assets/aistudio/ICU_Set_up_at_Home_6062b4b8.webp"],
    shortDescription: 'Advanced invasive and non-invasive mechanical ventilators for intensive care units and specialized home mechanical ventilation.',
    fullDescription: 'A medical ventilator is life-support machinery that provides mechanical ventilation by moving breathable air into and out of the lungs for a patient who is physically unable to breathe sufficiently. It features precision micro-pneumatics, flow sensors, and computerized monitoring algorithms for volume-controlled, pressure-controlled, and synchronized intermittent ventilation.',
    careContext: 'Critical care units (ICU, CCU, NICU), post-anesthesia recovery suites, emergency departments, and long-term ventilator-assisted home care programs.',
    intendedUses: [
      'Life support for respiratory failure, acute lung injury, or acute respiratory distress syndrome (ARDS)',
      'Post-operative invasive ventilation following complex cardiothoracic or neurosurgical procedures',
      'Non-invasive mechanical ventilation support for neuromuscular diseases and chronic hypercapnic failure',
      'Emergency stabilization and mechanical transport ventilation in intensive care transport'
    ],
    features: [
      'Multiple ventilation modes: VCV, PCV, SIMV, PSV, PRVC, and Non-Invasive Ventilation (NIV)',
      'High-resolution graphical touch displays with real-time pressure-volume and flow-volume loops',
      'Turbine-driven or central gas supply pneumatics with internal battery backup for safety',
      'Integrated patient safety monitoring with alarms for tidal volume, peak airway pressure, and apnea'
    ],
    faqs: [
      {
        question: 'Why is there such a broad indicative price range for medical ventilators?',
        answer: 'Ventilators range from compact transport/home turbine ventilators (lower end) to advanced multi-mode tertiary ICU workstations with high-frequency oscillation, closed-loop weaning algorithms, and neonatal capabilities.'
      },
      {
        question: 'Can medical ventilators be rented for home-care patients?',
        answer: 'Yes, F7 facilitates home ICU ventilator rentals upon verification of a qualified pulmonologist/intensivist prescription and confirmation of 24/7 trained nursing supervision.'
      }
    ],
    relatedProductSlugs: ['multiparameter-patient-monitor', 'suction-machine', 'icu-bed', 'syringe-pump']
  },
  {
    id: 4,
    slug: 'cpap-machine',
    name: 'CPAP Machine',
    categoryId: 'respiratory-care',
    indicativePriceMin: 3500,
    indicativePriceMax: 76000,
    indicativePriceDisplay: '₹3,500 – ₹4,000 / mo | Sale: ₹23,000 – ₹76,000',
    rentalRateDisplay: '₹3,500 – ₹4,000 / month',
    salePriceDisplay: '₹23,000 – ₹76,000',
    pricingItems: [
      {
            "model": "Evox Auto CPAP (with Mask)",
            "rentalRate": "₹3,500 – ₹4,000 / mo",
            "saleRate": "₹23,000 – ₹25,000",
            "notes": "2 years warranty, complete patient kit"
      },
      {
            "model": "ResMed AirStart 10 CPAP (without mask)",
            "rentalRate": "₹3,500 – ₹4,000 / mo",
            "saleRate": "₹26,000 – ₹28,000",
            "notes": "Reliable continuous positive airway pressure"
      },
      {
            "model": "Oxymed Auto CPAP (with Mask)",
            "rentalRate": "₹3,500 – ₹4,000 / mo",
            "saleRate": "₹34,000 – ₹36,000",
            "notes": "3 years warranty with heated humidifier"
      },
      {
            "model": "ResMed AirSense 10 AutoSet CPAP",
            "rentalRate": "₹4,000 / mo",
            "saleRate": "₹54,000 – ₹56,000",
            "notes": "AutoSet algorithm with connected sleep analytics"
      },
      {
            "model": "ResMed AirSense 11 AutoSet CPAP",
            "rentalRate": "On Request",
            "saleRate": "₹74,000 – ₹76,000",
            "notes": "Next-generation touchscreen digital therapy"
      }
],
    image: '/assets/aistudio/CPAP_038b4bf9.png',
    galleryImages: ["/assets/aistudio/CPAP_038b4bf9.png","/assets/aistudio/BIPAP_599e9516.png","/assets/aistudio/Sleep_Study_Tool_2b3d3894.jpg"],
    shortDescription: 'Continuous Positive Airway Pressure devices delivering constant pneumatic splinting for Obstructive Sleep Apnea.',
    fullDescription: 'A CPAP (Continuous Positive Airway Pressure) machine delivers a continuous stream of pressurized ambient air through a mask interface to keep the upper airway open during sleep. It is the gold-standard therapy for individuals diagnosed with obstructive sleep apnea (OSA) to eliminate nocturnal apneas, prevent oxygen desaturations, and restore restful sleep patterns.',
    careContext: 'Home nocturnal therapy prescribed after a formal polysomnography or home sleep apnea study.',
    intendedUses: [
      'Treatment of moderate to severe obstructive sleep apnea (OSA)',
      'Prevention of nocturnal upper airway collapse and snoring',
      'Reduction of daytime somnolence and secondary cardiovascular strain associated with chronic sleep fragmentation'
    ],
    features: [
      'Available in fixed-pressure CPAP and auto-titrating APAP configurations',
      'Integrated heated humidifier and heated tubing to prevent mucosal dryness',
      'Ramp functionality allowing gradual pressure elevation as the patient falls asleep',
      'Comprehensive sleep compliance reporting via SD card, Bluetooth, or cellular telemetry'
    ],
    faqs: [
      {
        question: 'What is the difference between standard CPAP and Auto-CPAP (APAP)?',
        answer: 'A standard CPAP delivers a single fixed pressure setting throughout the night, whereas an Auto-CPAP continuously analyzes breath-by-breath airway resistance and adjusts pressure dynamically to the minimum required level.'
      },
      {
        question: 'Do I need a doctor prescription to rent or purchase a CPAP?',
        answer: 'Yes, a titration report or sleep study prescription from a certified sleep specialist or pulmonologist ensures the device is set to your clinically indicated pressure parameters.'
      }
    ],
    relatedProductSlugs: ['bipap-machine', 'home-sleep-test-device', 'pulse-oximeter']
  },
  {
    id: 5,
    slug: 'bipap-machine',
    name: 'BiPAP Machine',
    categoryId: 'respiratory-care',
    indicativePriceMin: 4000,
    indicativePriceMax: 88000,
    indicativePriceDisplay: '₹4,000 – ₹16,000 / mo | Sale: ₹39,000 – ₹88,000',
    rentalRateDisplay: '₹4,000 – ₹16,000 / month',
    salePriceDisplay: '₹39,000 – ₹88,000',
    pricingItems: [
      {
            "model": "Oxymed Auto Bi-PAP & Auto CPAP (with Mask)",
            "rentalRate": "₹4,000 – ₹4,500 / mo",
            "saleRate": "₹39,000 – ₹49,000",
            "notes": "Auto BiPAP mode, 3 years warranty"
      },
      {
            "model": "Oxymed Bi-PAP ST (with Mask)",
            "rentalRate": "₹5,000 – ₹5,500 / mo",
            "saleRate": "₹43,000 – ₹46,000",
            "notes": "Spontaneous/Timed back-up rate, 3 yrs warranty"
      },
      {
            "model": "Lumies 100 with ST Mode Bi-PAP",
            "rentalRate": "₹5,500 – ₹6,500 / mo",
            "saleRate": "₹56,000 – ₹58,000",
            "notes": "Advanced non-invasive bilevel ventilation"
      },
      {
            "model": "BiPAP VAPS Mode Unit",
            "rentalRate": "₹5,500 – ₹6,500 / mo",
            "saleRate": "₹65,000 – ₹75,000",
            "notes": "Volume Assured Pressure Support"
      },
      {
            "model": "Lumies 150 with AVAPS Mode Bi-PAP",
            "rentalRate": "₹6,500 – ₹8,500 / mo",
            "saleRate": "₹87,000 – ₹88,000",
            "notes": "Targeted alveolar ventilation for hypercapnia"
      },
      {
            "model": "BiPAP A40 with Humidifier and Battery",
            "rentalRate": "₹13,000 – ₹16,000 / mo",
            "saleRate": "₹1,45,000 – ₹1,75,000",
            "notes": "Life support with internal backup battery"
      },
      {
            "model": "BiPAP Stellar 150 Rental",
            "rentalRate": "₹14,000 – ₹16,000 / mo",
            "saleRate": "₹1,60,000 – ₹1,95,000",
            "notes": "ResMed hospital-to-home platform"
      }
],
    image: '/assets/aistudio/BIPAP_599e9516.png',
    galleryImages: ["/assets/aistudio/BIPAP_599e9516.png","/assets/aistudio/CPAP_038b4bf9.png","/assets/aistudio/Ventilator_b0bf290d.png"],
    shortDescription: 'Bilevel Positive Airway Pressure machines with independent inspiratory and expiratory pressures for complex respiratory conditions.',
    fullDescription: 'A BiPAP (Bilevel Positive Airway Pressure) machine delivers two distinct pressure levels: a higher Inspiratory Positive Airway Pressure (IPAP) that assists ventilation when breathing in, and a lower Expiratory Positive Airway Pressure (EPAP) that prevents airway collapse when exhaling. It is indicated for patients with hypercapnia, COPD, ALS, neuromuscular disease, and central sleep apnea.',
    careContext: 'Home chronic respiratory failure management, palliative neurology care, ICU step-down, and non-invasive ventilation hospital wards.',
    intendedUses: [
      'Ventilatory assistance for chronic hypercapnic respiratory failure and severe COPD',
      'Respiratory management in neuromuscular disorders such as Amyotrophic Lateral Sclerosis (ALS) and Myasthenia Gravis',
      'Complex sleep apnea syndromes and obesity hypoventilation syndrome (OHS)',
      'Step-down extubation weaning support in clinical settings'
    ],
    features: [
      'Multiple ventilation modes including Spontaneous (S), Spontaneous/Timed (S/T), Timed (T), and AVAPS',
      'Independent digital setting of IPAP, EPAP, backup respiratory rate, and inspiratory rise time',
      'High-performance heated humidification with anti-condensation heated breathing tubes',
      'Detailed clinical monitoring displaying tidal volume, leak rate, minute ventilation, and apnea index'
    ],
    faqs: [
      {
        question: 'How is BiPAP different from CPAP?',
        answer: 'CPAP provides a single fixed pressure for inhalation and exhalation, primarily treating obstructive sleep apnea. BiPAP provides two separate pressures—higher on inhale, lower on exhale—which actively assists the patient’s breathing work.'
      },
      {
        question: 'What is AVAPS mode on advanced BiPAP machines?',
        answer: 'AVAPS (Average Volume Assured Pressure Support) automatically adjusts pressure support to guarantee a targeted average tidal volume as patient effort changes throughout the night.'
      }
    ],
    relatedProductSlugs: ['cpap-machine', 'oxygen-concentrator', 'medical-ventilator', 'pulse-oximeter']
  },
  {
    id: 6,
    slug: 'hfnc-machine',
    name: 'HFNC Machine',
    categoryId: 'respiratory-care',
    indicativePriceMin: 12000,
    indicativePriceMax: 280000,
    indicativePriceDisplay: '₹12,000 – ₹18,000 / mo | Sale: ₹1,20,000 – ₹2,80,000',
    rentalRateDisplay: '₹12,000 – ₹18,000 / month',
    salePriceDisplay: '₹1,20,000 – ₹2,80,000',
    pricingItems: [
      {
            "model": "High Flow Heated Respiratory Humidifier",
            "rentalRate": "₹12,000 – ₹15,000 / mo",
            "saleRate": "₹1,20,000 – ₹1,80,000",
            "notes": "Precision heated humidified flow"
      },
      {
            "model": "Integrated HFNC System with Oxygen Blender",
            "rentalRate": "₹15,000 – ₹18,000 / mo",
            "saleRate": "₹2,10,000 – ₹2,80,000",
            "notes": "Flow range 10–80 LPM with FiO2 tracking"
      }
],
    image: '/assets/images/hfnc_oxygen_machine_1794038606399.jpg',
    galleryImages: ["/assets/images/hfnc_oxygen_machine_1794038606399.jpg","/assets/aistudio/Ventilator_b0bf290d.png"],
    shortDescription: 'High-Flow Nasal Cannula therapy systems delivering conditioned warm humidified gas up to 60–80 LPM with precise FiO2.',
    fullDescription: 'High-Flow Nasal Cannula (HFNC) machines deliver heated and humidified oxygen-air mixtures at flow rates exceeding typical peak inspiratory demand (often 20 to 80 LPM) via wide-bore nasal prongs. HFNC provides accurate FiO2 delivery, generates modest positive end-expiratory pressure (PEEP), washes out anatomical dead space, and preserves mucociliary clearance.',
    careContext: 'Hospital emergency rooms, high-dependency units (HDU), intensive care suites, and post-cardiac surgery recovery.',
    intendedUses: [
      'Treatment of acute hypoxemic respiratory failure without severe hypercapnia',
      'Post-extubation respiratory support to prevent reintubation in high-risk patients',
      'Pre-oxygenation during endotracheal intubation and procedural bronchoscopy',
      'Therapeutic humidification in patients experiencing severe upper airway secretions'
    ],
    features: [
      'Integrated active heating and humidification chamber maintaining 37°C and 100% relative humidity',
      'Precise electronic air-oxygen blender delivering adjustable FiO2 from 21% to 100%',
      'Continuous flow control typically ranging from 10 to 80 litres per minute',
      'Digital monitoring of delivered gas temperature, flow rate, and oxygen concentration'
    ],
    faqs: [
      {
        question: 'Why is humidification so critical in HFNC therapy?',
        answer: 'Delivering unheated, dry medical gas at high flow rates would quickly dry out airway mucosa, cause hypothermia, and provoke bronchial spasm. The active heated humidifier ensures patient comfort and mucosal protection.'
      },
      {
        question: 'Can HFNC be operated on ambient air without hospital central oxygen?',
        answer: 'Certain HFNC models have built-in turbine blowers and can connect to an oxygen concentrator or cylinder, though optimal high FiO2 settings generally require high-pressure oxygen sources.'
      }
    ],
    relatedProductSlugs: ['medical-ventilator', 'bipap-machine', 'multiparameter-patient-monitor']
  },
  {
    id: 7,
    slug: 'air-purifier',
    name: 'Air Purifier',
    categoryId: 'respiratory-care',
    indicativePriceMin: 1500,
    indicativePriceMax: 28000,
    indicativePriceDisplay: '₹1,500 – ₹3,000 / mo | Sale: ₹8,000 – ₹28,000',
    rentalRateDisplay: '₹1,500 – ₹3,000 / month',
    salePriceDisplay: '₹8,000 – ₹28,000',
    pricingItems: [
      {
            "model": "True HEPA H13 Room Air Purifier",
            "rentalRate": "₹1,500 – ₹2,200 / mo",
            "saleRate": "₹8,000 – ₹16,000",
            "notes": "Captures 99.97% allergens, dust & particulate"
      },
      {
            "model": "Medical ICU Grade Air Purifier with UV-C",
            "rentalRate": "₹2,200 – ₹3,000 / mo",
            "saleRate": "₹18,000 – ₹28,000",
            "notes": "Active sterilization for sterile patient rooms"
      }
],
    image: '/assets/aistudio/Air_Purifier_afcc079e.png',
    galleryImages: ["/assets/aistudio/Air_Purifier_afcc079e.png","/assets/aistudio/Nebuliser_f4af5cec.png"],
    shortDescription: 'Medical and commercial-grade air purification units with true HEPA filtration for cleaner patient recovery environments.',
    fullDescription: 'Medical air purification systems capture airborne particulate matter, allergens, volatile organic compounds (VOCs), pathogens, and PM2.5 particles using multi-stage filtration (True HEPA H13/H14 filters, activated carbon, and optional UV-C sterilization). They safeguard recovering respiratory and post-operative patients from environmental triggers.',
    careContext: 'Patient bedrooms, home isolation rooms, allergy clinics, dental operatories, and hospital waiting areas.',
    intendedUses: [
      'Environmental pathogen and allergen mitigation for immunocompromised and respiratory patients',
      'Reduction of airborne dust, pollen, pet dander, and PM2.5 pollution in urban recovery rooms',
      'Aerosol management in outpatient examination rooms and dental treatment suites'
    ],
    features: [
      'Multi-stage filtration: Pre-filter, Medical True HEPA H13/H14 filter, and Granular Activated Carbon',
      'Real-time numerical PM2.5 air quality laser sensor with color-coded ambient display',
      'Whisper-quiet brushless DC motor with sleep mode and multi-speed airflow presets',
      'Clean Air Delivery Rate (CADR) optimized for patient rooms up to 500–800 sq. ft.'
    ],
    faqs: [
      {
        question: 'What makes a medical-grade air purifier different from a generic domestic one?',
        answer: 'Medical-grade units use certified H13 or H14 HEPA filters tested to capture 99.97% or 99.995% of particles down to 0.1 microns, featuring airtight zero-bypass seals and medical-grade CADR certification.'
      },
      {
        question: 'How often do HEPA filters need replacement?',
        answer: 'Typically between 6 to 12 months, depending on operating hours, ambient particulate pollution levels, and pre-filter maintenance.'
      }
    ],
    relatedProductSlugs: ['oxygen-concentrator', 'cpap-machine']
  },

  // 2. Cardiac Care & Monitoring
  {
    id: 8,
    slug: 'ecg-machine',
    name: 'ECG Machine',
    categoryId: 'cardiac-care-monitoring',
    indicativePriceMin: 3500,
    indicativePriceMax: 85000,
    indicativePriceDisplay: '₹3,500 – ₹6,000 / mo | Sale: ₹18,000 – ₹85,000',
    rentalRateDisplay: '₹3,500 – ₹6,000 / month',
    salePriceDisplay: '₹18,000 – ₹85,000',
    pricingItems: [
      {
            "model": "3-Channel Digital ECG Machine",
            "rentalRate": "₹3,500 – ₹4,500 / mo",
            "saleRate": "₹18,000 – ₹32,000",
            "notes": "Thermal printer with rechargeable battery"
      },
      {
            "model": "12-Channel Advanced Interpretive ECG Machine",
            "rentalRate": "₹4,500 – ₹6,000 / mo",
            "saleRate": "₹48,000 – ₹85,000",
            "notes": "Simultaneous 12-lead diagnostic display"
      }
],
    image: '/assets/aistudio/ECG_Machine_c9badeb0.png',
    galleryImages: ["/assets/aistudio/ECG_Machine_c9badeb0.png","/assets/aistudio/Holter_Monitor_eb11f33a.png","/assets/aistudio/Patient_Monitor_e2bbe38b.png"],
    shortDescription: 'Diagnostic 3-channel, 6-channel, and 12-channel electrocardiograph machines with thermal printing and automated interpretation.',
    fullDescription: 'An electrocardiograph (ECG) machine records the electrical impulses generated by the cardiac conduction system through skin electrodes. It provides foundational diagnostic waveforms for assessing arrhythmias, myocardial ischemia, conduction abnormalities, and electrolyte imbalances across outpatient clinics and intensive care facilities.',
    careContext: 'Cardiology consulting clinics, hospital casualty departments, surgical pre-op evaluation suites, and home health assessments.',
    intendedUses: [
      'Diagnostic recording of 12-lead resting electrocardiograms for cardiac evaluation',
      'Detection and monitoring of cardiac arrhythmias, bundle branch blocks, and acute coronary syndromes',
      'Pre-operative anesthesia clearance and cardiovascular health screenings',
      'Serial ECG tracking during cardiac pharmacological therapy'
    ],
    features: [
      'Available in portable 3-channel, 6-channel, and advanced 12-lead simultaneous diagnostic formats',
      'High-resolution digital LCD display previewing waveforms before thermal printout',
      'Built-in high-speed thermal array printer with standard paper grid printing',
      'Automatic parameter measurement and certified Glasgow or Minnesota diagnostic algorithm interpretation',
      'Rechargeable internal lithium battery supporting multiple mobile patient recordings'
    ],
    faqs: [
      {
        question: 'What is the advantage of a 12-channel ECG machine over a 3-channel unit?',
        answer: 'A 12-channel machine prints all 12 leads simultaneously on a wider format sheet, providing clear temporal alignment of beats across all leads, essential for comprehensive hospital diagnostic cardiology.'
      },
      {
        question: 'Does the equipment come with patient cables and electrodes?',
        answer: 'Standard supply typically includes 10-lead patient cable, limb clamp electrodes, chest bulb electrodes, and thermal paper rolls. Consult our team for package inclusions.'
      }
    ],
    relatedProductSlugs: ['multiparameter-patient-monitor', 'holter-monitor', 'defibrillator']
  },
  {
    id: 9,
    slug: 'multiparameter-patient-monitor',
    name: 'Multiparameter Patient Monitor',
    categoryId: 'cardiac-care-monitoring',
    indicativePriceMin: 4000,
    indicativePriceMax: 45000,
    indicativePriceDisplay: '₹4,000 – ₹6,500 / mo | Sale: ₹18,000 – ₹45,000',
    rentalRateDisplay: '₹4,000 – ₹6,500 / month',
    salePriceDisplay: '₹18,000 – ₹45,000',
    pricingItems: [
      {
            "model": "5 Para Patient Monitor",
            "rentalRate": "₹4,000 – ₹5,000 / mo",
            "saleRate": "₹18,000 – ₹32,000",
            "notes": "From rate sheet: 5 Para Monitor rent per month"
      },
      {
            "model": "Pediatric / Children / 2 Para Monitor",
            "rentalRate": "₹5,500 – ₹6,500 / mo",
            "saleRate": "₹22,000 – ₹38,000",
            "notes": "From rate sheet: Pediatric / Children Monitor"
      },
      {
            "model": "7 Para Modular ICU Cardiac Monitor",
            "rentalRate": "₹6,500 – ₹8,000 / mo",
            "saleRate": "₹38,000 – ₹45,000",
            "notes": "Includes EtCO2 & dual IBP channels"
      }
],
    image: '/assets/aistudio/Patient_Monitor_e2bbe38b.png',
    galleryImages: ["/assets/aistudio/Patient_Monitor_e2bbe38b.png","/assets/aistudio/Defibrillator_6a74a78c.png","/assets/aistudio/Digital_BP_Monitor_724ae940.png"],
    shortDescription: 'Continuous physiological patient monitors displaying ECG, SpO2, NIBP, Respiration, Temperature, and optional IBP/EtCO2.',
    fullDescription: 'A multiparameter patient monitor measures and displays real-time vital physiological signs on a unified graphical screen. Standard configurations capture 3/5-lead ECG, pulse oximetry (SpO2), non-invasive blood pressure (NIBP), respiratory rate, and temperature. Advanced ICU modular units incorporate invasive blood pressure (IBP), end-tidal capnography (EtCO2), and cardiac output telemetry.',
    careContext: 'Intensive care units, operating theaters, emergency casualty wards, endoscopy suites, and transitional home ICU setups.',
    intendedUses: [
      'Continuous vital signs surveillance for post-surgical, critically ill, or unstable patients',
      'Real-time hemodynamic monitoring during conscious sedation and general anesthesia',
      'Emergency department triage and patient observation',
      'Home ICU setup for patients requiring ongoing hemodynamic and oxygenation tracking'
    ],
    features: [
      'Vivid 8.4-inch to 15-inch color TFT touchscreen display with multi-waveform cascading',
      'Core 5-parameter monitoring: ECG, NIBP, SpO2, Respiration, and dual-channel Temperature',
      'Optional modular support for EtCO2 (microstream or sidestream) and invasive pressure (IBP)',
      'Multi-tiered visual and audible physiological alarm limits with trend data storage',
      'Integrated battery backup ensuring continuous monitoring during intra-hospital transit'
    ],
    faqs: [
      {
        question: 'Can I rent a multiparameter monitor for a home care patient?',
        answer: 'Yes, multiparameter patient monitors are frequently rented for home ICU and step-down post-operative monitoring. F7 supplies the monitor complete with appropriate adult or pediatric sensor accessories.'
      },
      {
        question: 'What influences the wide price range on patient monitors?',
        answer: 'Screen size, brand tier, parameter options (e.g. adding capnography EtCO2 or invasive blood pressure modules), and whether it is a standalone compact unit or a modular networked hospital monitor.'
      }
    ],
    relatedProductSlugs: ['ecg-machine', 'pulse-oximeter', 'ambulatory-blood-pressure-monitor', 'medical-ventilator']
  },
  {
    id: 10,
    slug: 'pulse-oximeter',
    name: 'Pulse Oximeter',
    categoryId: 'cardiac-care-monitoring',
    indicativePriceMin: 500,
    indicativePriceMax: 2500,
    indicativePriceDisplay: '₹500 – ₹2,500 (Sale)',
    rentalRateDisplay: 'Available with equipment rental kits',
    salePriceDisplay: '₹500 – ₹2,500',
    pricingItems: [
      {
            "model": "Fingertip OLED Pulse Oximeter",
            "saleRate": "₹500 – ₹1,200",
            "notes": "Instant SpO2 & pulse rate display"
      },
      {
            "model": "Handheld Clinical Pulse Oximeter with Sensor Probe",
            "saleRate": "₹1,500 – ₹2,500",
            "notes": "Adult, pediatric and neonatal reusable probe"
      }
],
    image: '/assets/aistudio/Fingertip_Pulse_Oximeter_3d655f2c.png',
    galleryImages: ["/assets/aistudio/Fingertip_Pulse_Oximeter_3d655f2c.png","/assets/aistudio/Digital_BP_Monitor_724ae940.png"],
    shortDescription: 'Non-invasive fingertip and handheld digital pulse oximeters for measuring arterial oxygen saturation and pulse rate.',
    fullDescription: 'A pulse oximeter is a compact, non-invasive optical sensor that measures peripheral capillary oxygen saturation (SpO2) and pulse rate using dual-wavelength spectrophotometry through vascular capillary beds. Available in simple fingertip units for personal spot-checks and robust handheld clinic models with alarms.',
    careContext: 'Home health monitoring, outpatient clinics, triage stations, and emergency medical kits.',
    intendedUses: [
      'Spot-checking arterial oxygen saturation in patients with respiratory or cardiac ailments',
      'Monitoring pulse rate and perfusion index during physical exertion or rest',
      'Routine vitals screening in primary clinics and home healthcare visits'
    ],
    features: [
      'Dual-color OLED/LED display presenting SpO2 percentage, pulse rate, and plethysmograph wave',
      'Perfusion Index (PI) indicator reflecting peripheral blood flow strength',
      'Automatic power shutoff after finger removal to preserve battery life',
      'Clinical handheld variants offer external reusable probes and configurable alarm limits'
    ],
    faqs: [
      {
        question: 'What is a normal SpO2 reading on a pulse oximeter?',
        answer: 'For most healthy adults, resting SpO2 levels typically range between 95% and 100%. Levels consistently below 94% warrant medical evaluation by a healthcare professional.'
      },
      {
        question: 'Why do handheld clinical oximeters cost more than basic fingertip units?',
        answer: 'Handheld oximeters feature ruggedized housings, replaceable adult/pediatric/neonatal probes, continuous monitoring capabilities, audible limit alarms, and internal memory logs.'
      }
    ],
    relatedProductSlugs: ['oxygen-concentrator', 'multiparameter-patient-monitor']
  },
  {
    id: 11,
    slug: 'holter-monitor',
    name: 'Holter Monitor',
    categoryId: 'cardiac-care-monitoring',
    indicativePriceMin: 4000,
    indicativePriceMax: 180000,
    indicativePriceDisplay: '₹4,000 – ₹8,000 (Rent) | Sale: ₹40,000 – ₹1,80,000',
    rentalRateDisplay: '₹4,000 – ₹8,000 / study',
    salePriceDisplay: '₹40,000 – ₹1,80,000',
    pricingItems: [
      {
            "model": "24–48 Hour Digital 3-Channel Holter Study",
            "rentalRate": "₹4,000 – ₹5,500 / study",
            "saleRate": "₹40,000 – ₹75,000",
            "notes": "Includes digital recorder & interpretation report"
      },
      {
            "model": "12-Channel Advanced Diagnostic Holter System",
            "rentalRate": "₹6,000 – ₹8,000 / study",
            "saleRate": "₹95,000 – ₹1,80,000",
            "notes": "Multi-day continuous ECG surveillance"
      }
],
    image: '/assets/aistudio/Holter_Monitor_eb11f33a.png',
    galleryImages: ["/assets/aistudio/Holter_Monitor_eb11f33a.png","/assets/aistudio/ECG_Machine_c9badeb0.png","/assets/aistudio/Ambulatory_BP_Monitor_fdd6633a.png"],
    shortDescription: 'Continuous 24-hour to 7-day ambulatory ECG recording systems with advanced analysis software for arrhythmia detection.',
    fullDescription: 'A Holter monitor is a wearable diagnostic battery-operated device that continuously records the electrical activity of the heart over an extended period (typically 24 hours, 48 hours, or up to 7 days). It is prescribed by cardiologists to capture transient arrhythmias, silent ischemia, palpitations, or syncope that may not appear on a short resting ECG.',
    careContext: 'Cardiology outpatient diagnostics, post-infarction risk evaluation, pacemaker verification, and syncope clinics.',
    intendedUses: [
      'Diagnostic evaluation of recurrent palpitations, unexplained dizziness, or syncope',
      'Detection and quantification of paroxysmal atrial fibrillation and ventricular ectopy',
      'Assessment of antiarrhythmic medication efficacy and pacemaker function'
    ],
    features: [
      'Compact, lightweight recorder designed for discreet ambulatory wear during daily activities',
      'Available in 3-channel, 7-lead, and full 12-lead digital recording configurations',
      'Patient event marker button allowing correlation of symptoms with cardiac rhythms',
      'PC-based analysis workstation software with automated template classification and ST segment reporting'
    ],
    faqs: [
      {
        question: 'Can patients shower while wearing a Holter monitor?',
        answer: 'Standard Holter monitors are not waterproof and must be kept dry unless a specific modern water-resistant patch recorder is designated.'
      },
      {
        question: 'Does the indicative price include the workstation software?',
        answer: 'Pricing at the higher end encompasses the dedicated digital analysis software license, USB optical reader, and multiple recording hardware units.'
      }
    ],
    relatedProductSlugs: ['ecg-machine', 'ambulatory-blood-pressure-monitor', 'multiparameter-patient-monitor']
  },
  {
    id: 12,
    slug: 'ambulatory-blood-pressure-monitor',
    name: 'Ambulatory Blood Pressure Monitor',
    categoryId: 'cardiac-care-monitoring',
    indicativePriceMin: 2500,
    indicativePriceMax: 65000,
    indicativePriceDisplay: '₹2,500 – ₹5,000 (Rent) | Sale: ₹17,000 – ₹65,000',
    rentalRateDisplay: '₹2,500 – ₹5,000 / study',
    salePriceDisplay: '₹17,000 – ₹65,000',
    pricingItems: [
      {
            "model": "24-Hour Ambulatory Blood Pressure Monitor (ABPM)",
            "rentalRate": "₹2,500 – ₹5,000 / study",
            "saleRate": "₹17,000 – ₹38,000",
            "notes": "Oscillometric cuff with day/night sleep profiles"
      },
      {
            "model": "Clinical ABPM System with Software Suite",
            "rentalRate": "On Request",
            "saleRate": "₹42,000 – ₹65,000",
            "notes": "Full clinical software & multi-cuff package"
      }
],
    image: '/assets/aistudio/Ambulatory_BP_Monitor_fdd6633a.png',
    galleryImages: ["/assets/aistudio/Ambulatory_BP_Monitor_fdd6633a.png","/assets/aistudio/Digital_BP_Monitor_724ae940.png","/assets/aistudio/Holter_Monitor_eb11f33a.png"],
    shortDescription: 'Wearable 24-hour oscillometric blood pressure recording devices with circadian day/night profile analysis.',
    fullDescription: 'An Ambulatory Blood Pressure Monitor (ABPM) automatically measures and records blood pressure at programmed intervals (typically every 15–20 minutes during the day and every 30 minutes at night) over a full 24-hour cycle. It identifies "white-coat hypertension," masked hypertension, nocturnal non-dipping, and drug resistance.',
    careContext: 'Hypertension specialty clinics, cardiology practices, nephrology evaluations, and clinical research.',
    intendedUses: [
      'Confirmation of clinical hypertension and elimination of white-coat effect',
      'Identification of nocturnal non-dipping blood pressure associated with elevated cardiovascular risk',
      'Evaluation of hypotensive episodes and blood pressure variability during antihypertensive therapy'
    ],
    features: [
      'Quiet linear deflation pump minimizing sleep disruption during nocturnal inflation cycles',
      'Lightweight belt-worn recorder with comfortable latex-free arm cuff',
      'Programmable measurement intervals for awake and sleep periods',
      'Comprehensive clinical reporting suite generating hourly averages, dipping percentages, and blood pressure load graphs'
    ],
    faqs: [
      {
        question: 'Why is 24-hour ABPM considered superior to single in-clinic blood pressure checks?',
        answer: 'ABPM captures true hemodynamic load throughout normal daily activities and sleep, avoiding situational anxiety spikes (white-coat effect) and revealing dangerous nocturnal pressure surges.'
      },
      {
        question: 'Can clinics buy just the recorder if they already possess the analysis software?',
        answer: 'Yes, clinics expanding their recording fleet can purchase compatible slave units. Discuss compatibility with our team.'
      }
    ],
    relatedProductSlugs: ['holter-monitor', 'multiparameter-patient-monitor', 'ecg-machine']
  },
  {
    id: 13,
    slug: 'defibrillator',
    name: 'Defibrillator',
    categoryId: 'cardiac-care-monitoring',
    indicativePriceMin: 8000,
    indicativePriceMax: 240000,
    indicativePriceDisplay: '₹8,000 – ₹15,000 / mo | Sale: ₹40,000 – ₹2,40,000',
    rentalRateDisplay: '₹8,000 – ₹15,000 / month',
    salePriceDisplay: '₹40,000 – ₹2,40,000',
    pricingItems: [
      {
            "model": "Automated External Defibrillator (AED)",
            "rentalRate": "₹8,000 – ₹11,000 / mo",
            "saleRate": "₹40,000 – ₹95,000",
            "notes": "Public access & workplace biphasic AED"
      },
      {
            "model": "Manual Clinical Defibrillator with Monitor & Pacer",
            "rentalRate": "₹11,000 – ₹15,000 / mo",
            "saleRate": "₹1,40,000 – ₹2,40,000",
            "notes": "Adult & pediatric paddles for hospital crash carts"
      }
],
    image: '/assets/aistudio/Defibrillator_6a74a78c.png',
    galleryImages: ["/assets/aistudio/Defibrillator_6a74a78c.png","/assets/aistudio/Patient_Monitor_e2bbe38b.png"],
    shortDescription: 'Biphasic Automated External Defibrillators (AEDs) and clinical manual defibrillator-monitors with pacing.',
    fullDescription: 'A defibrillator delivers a controlled therapeutic dose of electrical energy across the myocardium to terminate lethal arrhythmias, specifically ventricular fibrillation (VF) and pulseless ventricular tachycardia (VT). Modern models employ truncated exponential biphasic waveforms for high cardioversion efficacy at lower energy levels.',
    careContext: 'Public buildings, corporate workplaces, emergency triage wards, ambulances, operating theaters, and cardiac care units.',
    intendedUses: [
      'Immediate resuscitation of sudden cardiac arrest caused by shockable rhythms',
      'Synchronized cardioversion for atrial fibrillation and unstable tachyarrhythmias',
      'Non-invasive transcutaneous cardiac pacing during profound symptomatic bradycardia (manual clinical models)'
    ],
    features: [
      'Available in Public Access AED (Automated External Defibrillator) and Manual Professional Hospital formats',
      'Advanced biphasic waveform technology with impedance compensation',
      'Clear voice prompts and visual diagrams guiding rescuers through CPR and pad placement on AEDs',
      'Hospital units feature high-resolution ECG display, internal paddles, pacing mode, and integrated recorder'
    ],
    faqs: [
      {
        question: 'Can non-medical personnel use an Automated External Defibrillator (AED)?',
        answer: 'Yes. AEDs are specifically engineered for public access with clear voice prompts. The internal computer analyzes the cardiac rhythm and will never permit a shock unless a shockable rhythm is detected.'
      },
      {
        question: 'What is the shelf life of defibrillator pads and batteries?',
        answer: 'AED electrode pads and lithium standby batteries typically have an expiration window between 2 to 5 years, after which routine replacement is required to ensure emergency readiness.'
      }
    ],
    relatedProductSlugs: ['ecg-machine', 'multiparameter-patient-monitor']
  },

  // 3. Hospital & Patient Care
  {
    id: 14,
    slug: 'manual-hospital-bed',
    name: 'Manual Hospital Bed',
    categoryId: 'hospital-patient-care',
    indicativePriceMin: 3500,
    indicativePriceMax: 22000,
    indicativePriceDisplay: '₹3,500 – ₹5,000 / mo | Sale: ₹11,000 – ₹22,000',
    rentalRateDisplay: '₹3,500 – ₹5,000 / month',
    salePriceDisplay: '₹11,000 – ₹22,000',
    pricingItems: [
      {
            "model": "Single Function Bed (Iron Frame)",
            "rentalRate": "₹3,500 – ₹4,000 / mo",
            "saleRate": "₹11,000 – ₹13,000",
            "notes": "From rate sheet: Single Function Bed (Iron)"
      },
      {
            "model": "Single Function Manual ABS Bed (without wheels)",
            "rentalRate": "₹3,500 – ₹4,500 / mo",
            "saleRate": "₹16,000 – ₹18,000",
            "notes": "From rate sheet: ABS Bed without Wheels"
      },
      {
            "model": "Single Function Manual ABS Bed (with wheels)",
            "rentalRate": "₹3,800 – ₹4,500 / mo",
            "saleRate": "₹17,000 – ₹19,000",
            "notes": "From rate sheet: ABS Bed with Wheels"
      },
      {
            "model": "2 Function Manual Bed",
            "rentalRate": "₹4,000 – ₹5,000 / mo",
            "saleRate": "₹20,000 – ₹22,000",
            "notes": "From rate sheet: 2 Function Manual Bed"
      }
],
    image: '/assets/images/manual_hospital_bed_1794048109381.jpg',
    galleryImages: ["/assets/images/manual_hospital_bed_1794048109381.jpg", "/assets/aistudio/Hospital_Bed_2_de66745c.png", "/assets/aistudio/Air_Mattress_1fc3a19f.webp"],
    shortDescription: 'Sturdy single-crank and double-crank mechanical hospital beds with collapsible safety side railings.',
    fullDescription: 'A manual hospital bed utilizes mechanical screw crank mechanisms operated by caregivers to adjust patient positioning—most commonly head-end elevation (Fowler position) and leg-end elevation. Fabricated from heavy-gauge epoxy powder-coated mild steel, it offers cost-effective, durable patient nursing support without requiring electrical power.',
    careContext: 'Home recovery, geriatric nursing care, secondary district hospitals, and charitable healthcare centers.',
    intendedUses: [
      'Comfortable positioning and anti-aspiration feeding elevation for home-bound patients',
      'Post-operative surgical convalescence requiring periodic backrest and knee-rest elevation',
      'Economical patient ward bedding in nursing facilities'
    ],
    features: [
      'Smooth retractable manual screw crank handles located at the foot end',
      'Perforated four-section CRCA steel mattress deck for ventilation',
      'Collapsible aluminium alloy or full-length safety side railings to prevent accidental falls',
      'Mounted on four heavy-duty swivel caster wheels with diagonal locking brakes'
    ],
    faqs: [
      {
        question: 'What is the difference between a 1-crank and 2-crank manual bed?',
        answer: 'A single-crank bed adjusts backrest elevation only. A two-crank bed provides independent elevation of both backrest and knee/leg sections for greater orthopedic comfort.'
      },
      {
        question: 'Are mattresses included with manual hospital beds?',
        answer: 'Medical sectional foam mattresses or waterproof rexine mattresses can be bundled with purchase or rental. Contact our team to configure your package.'
      }
    ],
    relatedProductSlugs: ['electric-hospital-bed', 'air-mattress', 'wheelchair']
  },
  {
    id: 15,
    slug: 'electric-hospital-bed',
    name: 'Electric Hospital Bed',
    categoryId: 'hospital-patient-care',
    indicativePriceMin: 4500,
    indicativePriceMax: 68000,
    indicativePriceDisplay: '₹4,500 – ₹8,500 / mo | Sale: ₹36,000 – ₹68,000',
    rentalRateDisplay: '₹4,500 – ₹8,500 / month',
    salePriceDisplay: '₹36,000 – ₹68,000',
    pricingItems: [
      {
            "model": "Single Function Electric Bed",
            "rentalRate": "₹4,500 – ₹5,500 / mo",
            "saleRate": "₹28,000 – ₹32,000",
            "notes": "From rate sheet: Single Function Electric Bed"
      },
      {
            "model": "2 Function Electric Bed",
            "rentalRate": "₹5,000 – ₹6,000 / mo",
            "saleRate": "₹36,000 – ₹38,000",
            "notes": "From rate sheet: 2 Function Electric Bed"
      },
      {
            "model": "3 Function Electric Bed",
            "rentalRate": "₹6,000 – ₹7,000 / mo",
            "saleRate": "₹51,000 – ₹55,000",
            "notes": "From rate sheet: 3 Function Electric Bed"
      },
      {
            "model": "5 Function Electric Bed (ICU Bed)",
            "rentalRate": "₹7,500 – ₹8,500 / mo",
            "saleRate": "₹65,000 – ₹68,000",
            "notes": "From rate sheet: 5 Function Electric Bed"
      }
],
    image: '/assets/aistudio/Hospital_Bed_2_de66745c.png',
    galleryImages: ["/assets/aistudio/Hospital_Bed_2_de66745c.png","/assets/aistudio/ICU_Set_up_at_Home_6062b4b8.webp","/assets/aistudio/Air_Mattress_1fc3a19f.webp"],
    shortDescription: 'Motorized hospital beds with handheld pendant remote control for backrest, knee-rest, and overall height adjustment.',
    fullDescription: 'An electric hospital bed incorporates quiet medical-grade linear actuators powered by low-voltage electric motors. Controlled via a handheld wired remote or integrated nurse panel, it allows both patient and caregiver to effortlessly adjust backrest incline, knee elevation, and bed frame height (Hi-Lo), reducing caregiver physical strain and fostering patient autonomy.',
    careContext: 'Specialty hospital wards, private hospital suites, high-dependency rooms, and premium home healthcare setups.',
    intendedUses: [
      'Effortless patient re-positioning for eating, breathing relief, and circulation management',
      'Height adjustment lowering the bed to facilitate safe standing transfers and wheelchair boarding',
      'Long-term convalescent care for stroke, orthopedic trauma, or neurological conditions'
    ],
    features: [
      'Quiet, CE/UL certified linear actuators with sealed electronic control box',
      'Intuitive patient remote handset with lockout safety functions',
      'Tuck-away ABS plastic or aluminium protective drop-down side rails',
      'Detachable ABS head and foot boards with integrated patient bumper corners',
      'Emergency manual CPR release lever and optional battery backup during power cuts'
    ],
    faqs: [
      {
        question: 'Can the patient operate the electric bed independently?',
        answer: 'Yes, the handheld remote control has clear ergonomic push buttons allowing the patient to adjust backrest and leg angles without calling a caregiver.'
      },
      {
        question: 'Can I rent an electric hospital bed for home use?',
        answer: 'Yes, electric hospital beds are one of F7 Medical Equipment’s most requested rental items across all 7 city locations, supported by delivery and assembly assistance.'
      }
    ],
    relatedProductSlugs: ['three-function-hospital-bed', 'icu-bed', 'air-mattress', 'patient-transfer-equipment']
  },
  {
    id: 16,
    slug: 'three-function-hospital-bed',
    name: 'Three Function Hospital Bed',
    categoryId: 'hospital-patient-care',
    indicativePriceMin: 5000,
    indicativePriceMax: 55000,
    indicativePriceDisplay: '₹5,000 – ₹7,000 / mo | Sale: ₹32,000 – ₹55,000',
    rentalRateDisplay: '₹5,000 – ₹7,000 / month',
    salePriceDisplay: '₹32,000 – ₹55,000',
    pricingItems: [
      {
            "model": "3 Function Manual Bed",
            "rentalRate": "₹5,000 – ₹6,000 / mo",
            "saleRate": "₹32,000 – ₹34,000",
            "notes": "From rate sheet: 3 Function Manual Bed"
      },
      {
            "model": "3 Function Electric Bed",
            "rentalRate": "₹6,000 – ₹7,000 / mo",
            "saleRate": "₹51,000 – ₹55,000",
            "notes": "From rate sheet: 3 Function Electric Bed"
      }
],
    image: '/assets/aistudio/3-fun-M-1_db9fa878.jpeg',
    galleryImages: ["/assets/aistudio/3-fun-M-1_db9fa878.jpeg", "/assets/aistudio/Hospital_Bed_2_de66745c.png", "/assets/aistudio/Air_Mattress_1fc3a19f.webp"],
    shortDescription: 'Three-motor clinical beds offering motorized backrest, knee-rest, and full vertical height (Hi-Low) elevation.',
    fullDescription: 'A three-function motorized hospital bed provides three essential degrees of articulation: backrest tilt (0–75°), knee-break tilt (0–45°), and overall vertical deck height adjustment. This combination provides optimal clinical ergonomics: raising the bed to waist-height for nursing and physical therapy, and lowering it for safe foot placement during patient transfers.',
    careContext: 'Sub-acute hospital wards, post-operative rehabilitation centers, nursing homes, and home healthcare bedrooms.',
    intendedUses: [
      'Clinical nursing care with ergonomic bed height to prevent caregiver lower back injury',
      'Comfortable Fowler and semi-Fowler positioning for pulmonary drainage and cardiac comfort',
      'Assisted patient mobilization and physical therapy routines'
    ],
    features: [
      'Three synchronized low-noise linear actuator motors with thermal overload protection',
      'Variable bed height typically adjustable from 450 mm up to 750 mm above floor level',
      'Molded high-impact ABS head and foot boards with drainage bag hooks and IV pole sockets',
      'Four central-braking or individual castor wheels with dust-resistant bearings'
    ],
    faqs: [
      {
        question: 'What are the three specific functions of this bed?',
        answer: 'Function 1: Backrest elevation. Function 2: Knee-rest elevation. Function 3: Vertical bed frame height adjustment (raising and lowering the entire bed).'
      },
      {
        question: 'What is the weight capacity of a 3-function bed?',
        answer: 'Most standard commercial 3-function models support safe working loads between 175 kg to 250 kg.'
      }
    ],
    relatedProductSlugs: ['electric-hospital-bed', 'icu-bed', 'manual-hospital-bed', 'air-mattress']
  },
  {
    id: 17,
    slug: 'icu-bed',
    name: 'ICU Bed (ICU Setup at Home)',
    categoryId: 'hospital-patient-care',
    indicativePriceMin: 5500,
    indicativePriceMax: 68000,
    indicativePriceDisplay: '₹7,500 – ₹8,500 / mo | Sale: ₹65,000 – ₹68,000',
    rentalRateDisplay: '₹7,500 – ₹8,500 / month',
    salePriceDisplay: '₹65,000 – ₹68,000',
    pricingItems: [
      {
            "model": "5 Function Manual Bed",
            "rentalRate": "₹5,500 – ₹6,500 / mo",
            "saleRate": "₹34,000 – ₹36,000",
            "notes": "From rate sheet: 5 Function Manual Bed"
      },
      {
            "model": "5 Function Electric Bed (Full ICU Spec)",
            "rentalRate": "₹7,500 – ₹8,500 / mo",
            "saleRate": "₹65,000 – ₹68,000",
            "notes": "From rate sheet: 5 Function Electric Bed"
      }
],
    image: '/assets/aistudio/ICU_Set_up_at_Home_6062b4b8.webp',
    galleryImages: ["/assets/aistudio/ICU_Set_up_at_Home_6062b4b8.webp","/assets/aistudio/Hospital_Bed_2_de66745c.png","/assets/aistudio/Patient_Monitor_e2bbe38b.png"],
    shortDescription: 'Advanced 5-function critical care beds with Trendelenburg, reverse Trendelenburg, cardiac chair, and X-ray translucent deck.',
    fullDescription: 'An ICU (Intensive Care Unit) bed is a multi-articulating critical care platform engineered for acute clinical stability. Featuring 4 to 5 motorized actuators, it achieves backrest, knee-rest, height, Trendelenburg (head-down tilt), Reverse Trendelenburg, and full cardiac chair positions. Often includes integrated weighing scales, bilateral nurse attendant panels, and radio-translucent backrest sections for portable chest X-rays.',
    careContext: 'Tertiary hospital ICUs, CCUs, neuro-trauma recovery units, and specialized home intensive care installations.',
    intendedUses: [
      'Comprehensive hemodynamic positioning, including Trendelenburg for shock and venous drainage',
      'Cardiac chair positioning facilitating respiratory expansion in ventilator-dependent patients',
      'Critical care nursing with bilateral dual-sided embedded rail controls and emergency CPR flat release'
    ],
    features: [
      'Five electronic functions: Backrest, Knee-rest, Hi-Low, Trendelenburg, and Reverse Trendelenburg',
      'Dual-sided embedded guard-rail control panels plus caregiver master foot-end console',
      'One-touch electric and mechanical bilateral quick-release CPR levers for immediate resuscitation leveling',
      'Radio-translucent backrest with integrated X-ray cassette tunnel for bedside radiography',
      'Central directional castor braking system with antistatic fifth-wheel steering'
    ],
    faqs: [
      {
        question: 'Why are Trendelenburg and Reverse Trendelenburg positions necessary in an ICU bed?',
        answer: 'Trendelenburg (tilting head downward) helps manage acute hypotension and shock, while Reverse Trendelenburg (tilting head upward with body straight) aids breathing, gastrointestinal reflux prevention, and neurological pressure management.'
      },
      {
        question: 'Can an ICU bed be installed in a residential apartment for home ICU care?',
        answer: 'Yes, provided doorways, corridors, and elevator dimensions can accommodate the frame. Our technical logistics team reviews building access specifications prior to delivery.'
      }
    ],
    relatedProductSlugs: ['medical-ventilator', 'multiparameter-patient-monitor', 'electric-hospital-bed', 'air-mattress']
  },
  {
    id: 18,
    slug: 'air-mattress',
    name: 'Air Mattress',
    categoryId: 'hospital-patient-care',
    indicativePriceMin: 1000,
    indicativePriceMax: 8500,
    indicativePriceDisplay: '₹1,000 – ₹1,500 / mo | Sale: ₹2,500 – ₹8,500',
    rentalRateDisplay: '₹1,000 – ₹1,500 / month',
    salePriceDisplay: '₹2,500 – ₹8,500',
    pricingItems: [
      {
            "model": "Bubble Type Anti-Decubitus Mattress with Pump",
            "rentalRate": "₹1,000 – ₹1,200 / mo",
            "saleRate": "₹2,500 – ₹3,800",
            "notes": "Alternating pressure cycle for bed sore relief"
      },
      {
            "model": "Tubular Cell High-Risk Air Mattress with Pump",
            "rentalRate": "₹1,200 – ₹1,500 / mo",
            "saleRate": "₹5,500 – ₹8,500",
            "notes": "Stage III/IV pressure ulcer treatment"
      }
],
    image: '/assets/aistudio/Air_Mattress_1fc3a19f.webp',
    galleryImages: ["/assets/aistudio/Air_Mattress_1fc3a19f.webp","/assets/aistudio/Hospital_Bed_2_de66745c.png"],
    shortDescription: 'Alternating pressure bubble and tubular ripple air mattresses for prevention and management of pressure sores.',
    fullDescription: 'An anti-decubitus medical air mattress consists of alternating pneumatic air cells driven by an ultra-quiet electric compressor pump. The pump cyclically inflates and deflates alternate rows of air cells every 6 to 12 minutes, periodically relieving sustained pressure over bony prominences (sacrum, heels, trochanters) to preserve capillary blood perfusion and prevent bedsores.',
    careContext: 'Bed-bound patients, paralyzed individuals, post-orthopedic surgery recovery, and long-term geriatric care.',
    intendedUses: [
      'Prevention of stage 1 to stage 4 pressure ulcers (decubitus ulcers) in immobilized patients',
      'Management and healing of existing pressure injuries through targeted microclimate relief',
      'Continuous pressure redistribution for long-term bed-ridden individuals'
    ],
    features: [
      'Available in economical bubble-pad overlay and advanced independent tubular cell configurations',
      'Low-noise, low-vibration automated compressor pump with adjustable patient weight dial',
      'Medical-grade non-toxic antibacterial PVC / nylon-TPU cell material with micro-air-loss ventilation',
      'Tubular versions feature replaceable individual bladder cells and CPR rapid deflate valve'
    ],
    faqs: [
      {
        question: 'What is the key difference between bubble-type and tubular air mattresses?',
        answer: 'Bubble mattresses are suitable for basic bedsore prevention in low-risk or short-term convalescence. Tubular mattresses feature deep, independent cylinder cells with higher weight capacities, recommended for high-risk or long-term bed-bound patients.'
      },
      {
        question: 'Does the air mattress pump need to stay switched on 24 hours a day?',
        answer: 'Yes. The compressor runs continuously to maintain the alternating pressure inflation cycles. They are engineered for ultra-low electrical consumption (typically under 10–15 Watts).'
      }
    ],
    relatedProductSlugs: ['manual-hospital-bed', 'electric-hospital-bed', 'icu-bed']
  },
  {
    id: 19,
    slug: 'suction-machine',
    name: 'Suction Machine',
    categoryId: 'hospital-patient-care',
    indicativePriceMin: 1500,
    indicativePriceMax: 16000,
    indicativePriceDisplay: '₹1,500 – ₹2,500 / mo | Sale: ₹4,500 – ₹16,000',
    rentalRateDisplay: '₹1,500 – ₹2,500 / month',
    salePriceDisplay: '₹4,500 – ₹16,000',
    pricingItems: [
      {
            "model": "Suction Machine Single Jar",
            "rentalRate": "₹1,500 – ₹1,800 / mo",
            "saleRate": "₹4,500 – ₹7,500",
            "notes": "From rate sheet: Suction Machine Single Jar"
      },
      {
            "model": "Suction Machine Double Jar",
            "rentalRate": "₹2,000 – ₹2,500 / mo",
            "saleRate": "₹9,500 – ₹16,000",
            "notes": "From rate sheet: Suction Machine Double Jar"
      }
],
    image: '/assets/aistudio/Suction_Machine_12fb851d.png',
    galleryImages: ["/assets/aistudio/Suction_Machine_12fb851d.png","/assets/aistudio/Nebuliser_f4af5cec.png"],
    shortDescription: 'Portable and hospital-grade electric aspirator machines for clearing airway secretions, mucus, and surgical fluids.',
    fullDescription: 'A medical suction machine (aspirator) creates negative vacuum pressure to evacuate blood, saliva, mucus, vomitus, or respiratory secretions from a patient’s pharynx or trachea. Vital for maintaining airway patency in unconscious patients, tracheostomy care, ENT procedures, and bedside bronchial hygiene.',
    careContext: 'Home tracheostomy care, emergency resuscitation, post-operative wards, dental surgery, and ICUs.',
    intendedUses: [
      'Tracheostomy tube and oral-pharyngeal secretion aspiration for airway patency',
      'Aspiration of foreign fluids in emergency resuscitation and trauma care',
      'Fluid evacuation during outpatient minor surgical and dental procedures'
    ],
    features: [
      'Oil-free, maintenance-free piston vacuum pump with precise negative pressure regulator gauge',
      'Autoclavable polycarbonate collection canisters with overflow safety float shutoff valves',
      'Available in compact portable desktop units and heavy-duty dual-jar mobile hospital trolley models',
      'Bacterial hydrophobic air intake filter protecting internal pump mechanisms from contamination'
    ],
    faqs: [
      {
        question: 'How do I clean and sterilize suction jars and tubing?',
        answer: 'Collection jars must be emptied, washed with mild medical detergent, and disinfected regularly. Suction tubing and yankauer tips should be replaced or sterilized strictly following clinical hygiene protocols.'
      },
      {
        question: 'Can portable suction units run on battery during patient transit?',
        answer: 'Yes, emergency portable models are equipped with rechargeable internal batteries providing 30 to 60 minutes of cord-free vacuum aspiration.'
      }
    ],
    relatedProductSlugs: ['oxygen-concentrator', 'medical-ventilator', 'bipap-machine']
  },

  // 4. Mobility Equipment
  {
    id: 20,
    slug: 'wheelchair',
    name: 'Wheelchair',
    categoryId: 'mobility-equipment',
    indicativePriceMin: 1200,
    indicativePriceMax: 65000,
    indicativePriceDisplay: '₹1,200 – ₹7,000 / mo | Sale: ₹5,000 – ₹65,000',
    rentalRateDisplay: '₹1,200 – ₹7,000 / month',
    salePriceDisplay: '₹5,000 – ₹65,000',
    pricingItems: [
      {
            "model": "Basic Mag Wheelchair",
            "rentalRate": "₹1,200 – ₹1,600 / mo",
            "saleRate": "₹5,000 – ₹6,000",
            "notes": "From rate sheet: Basic Mag Wheelchair"
      },
      {
            "model": "Premium Spoke Wheelchair with Breaks",
            "rentalRate": "₹1,500 – ₹1,800 / mo",
            "saleRate": "₹6,000 – ₹6,700",
            "notes": "From rate sheet: Premium Spoke with breaks"
      },
      {
            "model": "Recliner Wheelchair",
            "rentalRate": "₹2,000 – ₹2,500 / mo",
            "saleRate": "₹9,500 – ₹12,500",
            "notes": "From rate sheet: Recliner Wheel Chair"
      },
      {
            "model": "Transit Wheelchair",
            "rentalRate": "₹2,500 – ₹3,000 / mo",
            "saleRate": "₹8,000 – ₹11,000",
            "notes": "From rate sheet: Transit Wheel Chair"
      },
      {
            "model": "Basic Electric Wheelchair",
            "rentalRate": "₹4,500 – ₹5,500 / mo",
            "saleRate": "₹42,000 – ₹52,000",
            "notes": "From rate sheet: Basic Electric Wheel Chair"
      },
      {
            "model": "Transit Electric Wheelchair",
            "rentalRate": "₹5,000 – ₹6,000 / mo",
            "saleRate": "₹52,000 – ₹58,000",
            "notes": "From rate sheet: Transit Electric Wheel Chair"
      },
      {
            "model": "Recliner Electric Wheelchair",
            "rentalRate": "₹6,000 – ₹7,000 / mo",
            "saleRate": "₹62,000 – ₹65,000",
            "notes": "From rate sheet: Recliner Electric Wheelchair"
      }
],
    image: '/assets/aistudio/Wheel_Chair_e6e57d11.png',
    galleryImages: ["/assets/aistudio/Wheel_Chair_e6e57d11.png","/assets/images/commode_wheelchair_seat_1794038607182.jpg","/assets/aistudio/Walker_Stand_90095d07.png"],
    shortDescription: 'Foldable standard manual and lightweight aluminium transit wheelchairs with ergonomic armrests and brakes.',
    fullDescription: 'A medical wheelchair provides seated mobility assistance for individuals with temporary or permanent ambulatory limitations. Fabricated from steel, aluminium alloy, or lightweight aerospace metals, wheelchairs feature durable spoke or mag rear wheels, front swivel castors, ergonomic push handles for attendants, and handrims for patient self-propulsion.',
    careContext: 'Home recovery, geriatric mobility, hospital transport, rehabilitation centers, and airport patient transit.',
    intendedUses: [
      'Assisted patient transit within homes, clinics, hospitals, and outdoor accessible environments',
      'Post-operative lower-limb surgery, spinal trauma, or fracture rehabilitation',
      'Long-term independent or caregiver-assisted mobility for seniors with reduced balance'
    ],
    features: [
      'Easy cross-frame folding design for compact transport inside car trunks and closets',
      'Durable cushioned vinyl or breathable nylon upholstery easy to sanitize',
      'Flip-up or detachable armrests facilitating side-to-side patient bed transfers',
      'Swing-away adjustable leg-rests with heel loops and puncture-proof solid PU tyres'
    ],
    faqs: [
      {
        question: 'What is the advantage of an aluminium wheelchair over a steel wheelchair?',
        answer: 'Aluminium wheelchairs are significantly lighter (typically 10–13 kg compared to 17–20 kg for steel), making them much easier to lift into vehicle boots and easier for attendants to push.'
      },
      {
        question: 'Are wheelchairs available for both monthly rental and direct purchase?',
        answer: 'Yes, F7 Medical Equipment provides flexible rental options for short-term post-operative recovery as well as brand-new wheelchairs for long-term purchase.'
      }
    ],
    relatedProductSlugs: ['commode-wheelchair', 'medical-walker', 'patient-transfer-equipment']
  },
  {
    id: 21,
    slug: 'commode-wheelchair',
    name: 'Commode Wheelchair',
    categoryId: 'mobility-equipment',
    indicativePriceMin: 1200,
    indicativePriceMax: 15000,
    indicativePriceDisplay: '₹1,200 – ₹2,500 / mo | Sale: ₹2,800 – ₹15,000',
    rentalRateDisplay: '₹1,200 – ₹2,500 / month',
    salePriceDisplay: '₹2,800 – ₹15,000',
    pricingItems: [
      {
            "model": "Commode Chair (Stationary)",
            "rentalRate": "On Request",
            "saleRate": "₹2,800 – ₹3,000",
            "notes": "From rate sheet: Commode chair"
      },
      {
            "model": "Commode Chair with Wheels",
            "rentalRate": "₹1,000 – ₹1,200 / mo",
            "saleRate": "₹3,000 – ₹3,300",
            "notes": "From rate sheet: Commode chair with wheels"
      },
      {
            "model": "Commode Wheelchair (Foldable)",
            "rentalRate": "₹1,200 – ₹1,800 / mo",
            "saleRate": "₹6,500 – ₹7,000",
            "notes": "From rate sheet: Commode wheelchair"
      },
      {
            "model": "Recliner Wheelchair with Commode",
            "rentalRate": "₹2,000 – ₹2,500 / mo",
            "saleRate": "₹13,000 – ₹15,000",
            "notes": "From rate sheet: Recliner Wheelchair with Commode"
      }
],
    image: '/assets/images/commode_wheelchair_seat_1794038607182.jpg',
    galleryImages: ["/assets/images/commode_wheelchair_seat_1794038607182.jpg","/assets/aistudio/Wheel_Chair_e6e57d11.png"],
    shortDescription: 'Multi-functional mobile commode chairs with removable bucket and toilet clearance capability.',
    fullDescription: 'A commode wheelchair combines mobility transit with personal hygiene management. It features a water-resistant frame, a cushioned seat with a removable central aperture, and an integrated sliding waste pan bucket with lid. Many models can be wheeled directly over standard western toilet commodes, eliminating stressful transfers.',
    careContext: 'Home convalescence, palliative care, and nursing home hygiene assistance.',
    intendedUses: [
      'Bedside commode toileting for patients unable to walk to distant bathrooms',
      'Direct roll-over positioning over existing bathroom commodes',
      'Waterproof showering and personal bathing transit chair'
    ],
    features: [
      'Waterproof chrome-plated steel or rust-proof aluminium tubular construction',
      'Easily removable sliding commode pan bucket with carry handle and sealing lid',
      'Water-repellent padded seat cushion covering the commode aperture when used as a standard chair',
      'Rear wheel parking locks ensuring stability during patient boarding and disembarking'
    ],
    faqs: [
      {
        question: 'Can this commode wheelchair be wheeled into a shower stall?',
        answer: 'Rust-resistant aluminium or plastic-composite commode models are designed for wet room and shower use. Ensure the frame is dried after bathing to preserve mechanical longevity.'
      },
      {
        question: 'How easy is it to empty and clean the commode pail?',
        answer: 'The pail slides out smoothly from the rear or underneath without disturbing the patient and includes an airtight lid for hygienic handling.'
      }
    ],
    relatedProductSlugs: ['wheelchair', 'medical-walker', 'patient-transfer-equipment']
  },
  {
    id: 22,
    slug: 'medical-walker',
    name: 'Medical Walker',
    categoryId: 'mobility-equipment',
    indicativePriceMin: 400,
    indicativePriceMax: 3300,
    indicativePriceDisplay: '₹400 – ₹800 / mo | Sale: ₹1,200 – ₹3,300',
    rentalRateDisplay: '₹400 – ₹800 / month',
    salePriceDisplay: '₹1,200 – ₹3,300',
    pricingItems: [
      {
            "model": "Standard Foldable Reciprocal Walker",
            "rentalRate": "₹400 – ₹600 / mo",
            "saleRate": "₹1,200 – ₹1,800",
            "notes": "Lightweight aluminium walking support frame"
      },
      {
            "model": "Wheeled Walker / Commode Walker",
            "rentalRate": "₹600 – ₹800 / mo",
            "saleRate": "₹2,800 – ₹3,300",
            "notes": "From rate sheet: Walkers with wheels & seat"
      }
],
    image: '/assets/aistudio/Walker_Stand_90095d07.png',
    galleryImages: ["/assets/aistudio/Walker_Stand_90095d07.png","/assets/aistudio/Wheel_Chair_e6e57d11.png"],
    shortDescription: 'Height-adjustable folding reciprocal walkers and wheeled rollators with dual handbrakes.',
    fullDescription: 'A medical walker provides a broad, stable base of support for individuals relearning to walk, suffering from balance ataxia, or recovering from orthopedic lower-extremity procedures. Available in reciprocal reciprocating frames that mimic natural walking gait, standard rigid folding frames, and rollator models with front wheels and handbrakes.',
    careContext: 'Physical therapy, orthopedic post-op gait training, geriatric fall-prevention, and everyday walking support.',
    intendedUses: [
      'Gait rehabilitation following hip replacement, knee arthroplasty, or fracture healing',
      'Fall prevention and stability for elderly individuals with reduced vestibular balance',
      'Assisted indoor and outdoor walking support'
    ],
    features: [
      'Lightweight anodized aluminium tubing with push-button single or dual-point folding mechanism',
      'Height-adjustable legs with spring-loaded brass detent pins accommodating various patient statures',
      'Soft slip-resistant contoured PVC/foam handgrips reducing palm fatigue',
      'Durable non-marking suction rubber tip ferrules providing solid traction on indoor tiles'
    ],
    faqs: [
      {
        question: 'What is a reciprocal walker?',
        answer: 'A reciprocal walker has flexible pivot joints that allow each side of the frame to step forward alternately with each leg, mimicking natural walking motion without requiring the patient to lift the entire frame.'
      },
      {
        question: 'How do I adjust the walker to the correct height?',
        answer: 'When standing upright with arms hanging naturally at the sides, the walker handgrips should align precisely with the crease of the patient’s wrist.'
      }
    ],
    relatedProductSlugs: ['wheelchair', 'patient-transfer-equipment']
  },
  {
    id: 23,
    slug: 'patient-transfer-equipment',
    name: 'Patient Transfer Equipment',
    categoryId: 'mobility-equipment',
    indicativePriceMin: 3500,
    indicativePriceMax: 85000,
    indicativePriceDisplay: '₹3,500 – ₹7,500 / mo | Sale: ₹18,000 – ₹85,000',
    rentalRateDisplay: '₹3,500 – ₹7,500 / month',
    salePriceDisplay: '₹18,000 – ₹85,000',
    pricingItems: [
      {
            "model": "Manual Hydraulic Patient Lifter with Sling",
            "rentalRate": "₹3,500 – ₹4,800 / mo",
            "saleRate": "₹18,000 – ₹32,000",
            "notes": "Ergonomic hydraulic pump for safe transfers"
      },
      {
            "model": "Electric Battery-Operated Patient Lifter Hoist",
            "rentalRate": "₹5,500 – ₹7,500 / mo",
            "saleRate": "₹48,000 – ₹85,000",
            "notes": "Handset-controlled battery hoist for paralyzed patients"
      }
],
    image: '/assets/images/patient_transfer_lifter_1794038647079.jpg',
    galleryImages: ["/assets/images/patient_transfer_lifter_1794038647079.jpg","/assets/aistudio/Wheel_Chair_e6e57d11.png","/assets/aistudio/Hospital_Bed_2_de66745c.png"],
    shortDescription: 'Hydraulic and electric patient hoist lifters, slide boards, and turntable transfer aids for zero-strain patient transfers.',
    fullDescription: 'Patient transfer equipment comprises mechanical and powered assistive devices designed to lift and transfer non-ambulatory individuals safely between beds, wheelchairs, commodes, and chairs. Ranging from friction-reducing lateral transfer slide boards to hydraulic sling patient lifters, these systems prevent patient skin shear and eliminate caregiver back strain.',
    careContext: 'High-dependency home nursing, bariatric care, spinal injury units, and rehabilitation hospitals.',
    intendedUses: [
      'Lifting bed-bound or paralyzed patients without manual lifting by nursing staff',
      'Safe transfer between hospital bed, wheelchair, commode, and recliner',
      'Emergency floor-to-bed recovery following an accidental fall'
    ],
    features: [
      'Heavy-duty steel or aerospace aluminium base with foot-pedal spreader legs to fit around chairs',
      'Hydraulic manual hand-pump or 24V electric motorized lifting actuator',
      'Ergonomic multi-point spreader bar compatible with padded universal sling hammocks',
      'Emergency lowering valve and 360-degree rotation of patient during transit'
    ],
    faqs: [
      {
        question: 'Can a single caregiver operate an electric patient hoist at home?',
        answer: 'Yes. Electric lifters feature push-button hand controls allowing one family member or attendant to smoothly lift and guide the patient without physical strain.'
      },
      {
        question: 'What weight capacity do patient transfer lifters handle?',
        answer: 'Standard clinical hoists typically support up to 150 kg to 180 kg, with bariatric models accommodating over 220 kg.'
      }
    ],
    relatedProductSlugs: ['wheelchair', 'electric-hospital-bed', 'icu-bed']
  },

  // 5. Sleep Study Equipment
  {
    id: 24,
    slug: 'home-sleep-test-device',
    name: 'Home Sleep Test Device',
    categoryId: 'sleep-study-equipment',
    indicativePriceMin: 2500,
    indicativePriceMax: 85000,
    indicativePriceDisplay: '₹2,500 – ₹5,000 (Test) | Sale: ₹25,000 – ₹85,000',
    rentalRateDisplay: '₹2,500 – ₹5,000 / test',
    salePriceDisplay: '₹25,000 – ₹85,000',
    pricingItems: [
      {
            "model": "Overnight Home Sleep Apnea Diagnostic Test (HSAT)",
            "rentalRate": "₹2,500 – ₹4,000 / study",
            "saleRate": "—",
            "notes": "Multi-channel airflow, effort, snoring and SpO2 sensor"
      },
      {
            "model": "Level 3 Portable Diagnostic Sleep Screener Device",
            "rentalRate": "₹3,500 – ₹5,000 / study",
            "saleRate": "₹45,000 – ₹85,000",
            "notes": "Clinical diagnostic screener with automated scoring"
      }
],
    image: '/assets/aistudio/Sleep_Study_Tool_2b3d3894.jpg',
    galleryImages: ["/assets/aistudio/Sleep_Study_Tool_2b3d3894.jpg","/assets/images/sleep_monitoring_system_1794038647814.jpg","/assets/aistudio/CPAP_038b4bf9.png"],
    shortDescription: 'Type III ambulatory sleep apnea diagnostic monitors recording airflow, snoring, effort, SpO2, and pulse.',
    fullDescription: 'A Home Sleep Test (HST) device is a lightweight, wearable diagnostic recorder used by patients in their own beds to evaluate suspected obstructive sleep apnea (OSA). It typically records nasal airflow (via cannula/pressure transducer), respiratory effort (chest effort belt), finger pulse oximetry, and body position, calculating the Apnea-Hypopnea Index (AHI).',
    careContext: 'Home sleep diagnostics, pulmonology outpatient evaluations, and pre-CPAP screening.',
    intendedUses: [
      'Diagnostic evaluation of snoring, witnessed nocturnal breathing pauses, and daytime fatigue',
      'Calculation of Apnea-Hypopnea Index (AHI) and Oxygen Desaturation Index (ODI)',
      'Pre-operative obstructive sleep apnea risk stratification'
    ],
    features: [
      'Compact, lightweight chest-worn unit that does not restrict patient sleep positions',
      'Channels include nasal pressure airflow, snore sensor, thoracic effort belt, SpO2, and actigraphy position',
      'Automatic sensor recognition and test-quality indicators ensuring complete nocturnal recordings',
      'Comprehensive scoring software producing validated clinical diagnostic reports for pulmonologists'
    ],
    faqs: [
      {
        question: 'How does a Home Sleep Test differ from an in-lab polysomnography?',
        answer: 'A Home Sleep Test is done conveniently in the patient’s home bed focusing on cardiorespiratory metrics (Type III). In-lab polysomnography (Type I) also records EEG brainwaves, eye movements, and leg twitches in a hospital sleep laboratory.'
      },
      {
        question: 'Can clinics purchase or rent HST units from F7 Medical Equipment?',
        answer: 'Yes, we supply diagnostic equipment to ENT practitioners, pulmonologists, and diagnostic centers, as well as coordinating equipment for physician-referred home tests.'
      }
    ],
    relatedProductSlugs: ['sleep-monitoring-equipment', 'cpap-machine', 'bipap-machine', 'pulse-oximeter']
  },
  {
    id: 25,
    slug: 'sleep-monitoring-equipment',
    name: 'Sleep Monitoring Equipment',
    categoryId: 'sleep-study-equipment',
    indicativePriceMin: 5000,
    indicativePriceMax: 180000,
    indicativePriceDisplay: '₹5,000 – ₹12,000 / mo | Sale: ₹45,000 – ₹1,80,000',
    rentalRateDisplay: '₹5,000 – ₹12,000 / month',
    salePriceDisplay: '₹45,000 – ₹1,80,000',
    pricingItems: [
      {
            "model": "Continuous Nocturnal Oximetry & Airflow Monitor",
            "rentalRate": "₹5,000 – ₹7,500 / mo",
            "saleRate": "₹45,000 – ₹80,000",
            "notes": "Therapy adherence and nocturnal desaturation tracking"
      },
      {
            "model": "Complete Polysomnography (PSG) Sleep Diagnostic Suite",
            "rentalRate": "₹8,500 – ₹12,000 / mo",
            "saleRate": "₹1,10,000 – ₹1,80,000",
            "notes": "Full neurological and respiratory sleep recording setup"
      }
],
    image: '/assets/images/sleep_monitoring_system_1794038647814.jpg',
    galleryImages: ["/assets/images/sleep_monitoring_system_1794038647814.jpg","/assets/aistudio/Sleep_Study_Tool_2b3d3894.jpg","/assets/aistudio/Fingertip_Pulse_Oximeter_3d655f2c.png"],
    shortDescription: 'Multi-channel clinical polysomnography (PSG) systems with EEG, EOG, EMG, ECG, and respiratory parameters.',
    fullDescription: 'Clinical sleep monitoring equipment comprises comprehensive Type I and Type II polysomnography (PSG) acquisition hardware and analysis software. Recording neurophysiological parameters (electroencephalogram EEG, electrooculogram EOG, electromyogram EMG) alongside cardiorespiratory sensors, it enables detailed sleep architecture staging, micro-arousal scoring, and diagnosis of narcolepsy, parasomnias, and periodic limb movement disorder.',
    careContext: 'Hospital sleep disorders centers, neurology clinics, academic medical institutions, and comprehensive sleep labs.',
    intendedUses: [
      'Comprehensive polysomnographic diagnostic evaluation of complex sleep disorders',
      'Sleep stage architecture staging (N1, N2, N3, REM) and sleep fragmentation analysis',
      'Diagnosis of parasomnias, REM sleep behavior disorders, and nocturnal seizure activity'
    ],
    features: [
      'Headbox amplifier supporting 24 to 32+ channels of high-fidelity physiological signals',
      'High sampling rates with low-noise optical isolation and active impedance verification',
      'Synchronized infrared high-definition night-vision video recording and intercom audio',
      'Automated and manual sleep scoring conforming to American Academy of Sleep Medicine (AASM) standards'
    ],
    faqs: [
      {
        question: 'Who interprets the recordings generated by sleep monitoring equipment?',
        answer: 'Raw polysomnography data must be reviewed and scored by a trained sleep technologist or certified sleep physician / pulmonologist.'
      },
      {
        question: 'What determines the indicative pricing for sleep monitoring systems?',
        answer: 'Price varies based on channel count (e.g. 16 vs 32 vs 64 channels), included video monitoring cameras, impedance calibration capabilities, and licensed multi-user diagnostic software packages.'
      }
    ],
    relatedProductSlugs: ['home-sleep-test-device', 'cpap-machine', 'bipap-machine']
  },

  // 6. ICU & Critical Care
  {
    id: 26,
    slug: 'syringe-pump',
    name: 'Syringe Pump',
    categoryId: 'icu-critical-care',
    indicativePriceMin: 4000,
    indicativePriceMax: 38000,
    indicativePriceDisplay: '₹4,000 – ₹4,500 / mo | Sale: ₹18,000 – ₹38,000',
    rentalRateDisplay: '₹4,000 – ₹4,500 / month',
    salePriceDisplay: '₹18,000 – ₹38,000',
    pricingItems: [
      {
            "model": "Syringe Pump (Single Channel Micro-Infusion)",
            "rentalRate": "₹4,000 – ₹4,500 / mo",
            "saleRate": "₹18,000 – ₹28,000",
            "notes": "From rate sheet: Syringe Pump Rental"
      },
      {
            "model": "Dual Channel ICU Programmable Syringe Pump",
            "rentalRate": "₹5,500 / mo",
            "saleRate": "₹28,000 – ₹38,000",
            "notes": "Precise micro-infusion with occlusion alarms"
      }
],
    image: '/assets/aistudio/Syringe_Pump_60a00e74.png',
    galleryImages: ["/assets/aistudio/Syringe_Pump_60a00e74.png","/assets/images/volumetric_infusion_pump_1794038607637.jpg"],
    shortDescription: 'Precision micro-infusion syringe driver pumps for controlled administration of critical vasoactive medications.',
    fullDescription: 'A medical syringe pump is a motorized infusion device designed to deliver minute, highly accurate doses of intravenous medications at strictly controlled flow rates (down to 0.1 mL/hr). Powered by a lead-screw stepper motor, it eliminates dosage fluctuations for critical drugs such as inotropes, vasopressors, sedatives, and insulin.',
    careContext: 'Neonatal ICUs (NICU), pediatric wards, cardiac intensive care, anesthesia induction, and oncology chemotherapy.',
    intendedUses: [
      'Micro-infusion of potent vasoactive and inotropic medications requiring strict volumetric precision',
      'Neonatal and pediatric fluid and drug administration where fluid overload poses severe risks',
      'Controlled intravenous anesthesia (TIVA) and patient-controlled analgesia (PCA)'
    ],
    features: [
      'Compatible with standard 5 mL, 10 mL, 20 mL, 30 mL, and 50/60 mL disposable syringes with auto-size calibration',
      'Broad flow-rate range typically adjustable from 0.1 mL/hr to 1500 mL/hr with ±2% volumetric accuracy',
      'Multi-level occlusion pressure detection with anti-bolus pressure relief function',
      'Audible and visual alarms for near-empty, syringe disengaged, occlusion, and battery status',
      'Internal rechargeable battery ensuring uninterrupted medication during patient transit'
    ],
    faqs: [
      {
        question: 'How is a syringe pump different from an infusion pump?',
        answer: 'A syringe pump delivers small volumes (5–60 mL) with extreme micro-flow precision, ideal for potent drugs. An infusion pump delivers larger volumes (100 mL to several litres) from IV bags or bottles.'
      },
      {
        question: 'Can syringe pumps be rented for long-term palliative or hospice care?',
        answer: 'Yes, syringe drivers are frequently rented for specialized pain management infusions under medical supervision.'
      }
    ],
    relatedProductSlugs: ['infusion-pump', 'icu-accessories', 'multiparameter-patient-monitor']
  },
  {
    id: 27,
    slug: 'infusion-pump',
    name: 'Infusion Pump',
    categoryId: 'icu-critical-care',
    indicativePriceMin: 4000,
    indicativePriceMax: 48000,
    indicativePriceDisplay: '₹4,000 – ₹5,000 / mo | Sale: ₹22,000 – ₹48,000',
    rentalRateDisplay: '₹4,000 – ₹5,000 / month',
    salePriceDisplay: '₹22,000 – ₹48,000',
    pricingItems: [
      {
            "model": "Volumetric IV Infusion Pump",
            "rentalRate": "₹4,000 – ₹5,000 / mo",
            "saleRate": "₹22,000 – ₹36,000",
            "notes": "From rate sheet: Infusion Pump Rental"
      },
      {
            "model": "Advanced Dose-Calculation ICU Infusion Pump",
            "rentalRate": "₹5,000 – ₹6,000 / mo",
            "saleRate": "₹36,000 – ₹48,000",
            "notes": "Multi-infusion mode with air-in-line sensor"
      }
],
    image: '/assets/images/volumetric_infusion_pump_1794038607637.jpg',
    galleryImages: ["/assets/images/volumetric_infusion_pump_1794038607637.jpg","/assets/aistudio/Syringe_Pump_60a00e74.png"],
    shortDescription: 'Volumetric peristaltic IV infusion pumps for controlled intravenous fluid, electrolyte, and blood delivery.',
    fullDescription: 'A volumetric infusion pump uses linear peristaltic finger mechanisms or rotary cassettes to meter intravenous fluids, parenteral nutrition, electrolytes, or blood products from IV solution bags into a patient’s circulatory system. It features ultrasonic air-in-line bubble sensors and pressure transducers to safeguard against air embolism or line occlusions.',
    careContext: 'Hospital medical-surgical wards, intensive care units, emergency casualty, and oncology infusion day-care.',
    intendedUses: [
      'Controlled continuous hydration and electrolyte fluid management over sustained periods',
      'Total parenteral nutrition (TPN) administration with precise hourly volume control',
      'Intravenous chemotherapy infusion adhering to stringent volumetric flow protocols'
    ],
    features: [
      'Linear peristaltic pumping mechanism delivering flow rates from 0.1 mL/hr up to 1200+ mL/hr',
      'Ultrasonic air-in-line detector identifying micro-bubbles before entering patient circulation',
      'Dynamic pressure monitoring with adjustable downstream and upstream occlusion limits',
      'Dose calculation modes: ml/hr, drop/min, body-weight timed delivery, and drug library integration',
      'Sturdy pole-clamp assembly and drop sensor for dual-verification flow counting'
    ],
    faqs: [
      {
        question: 'Does an infusion pump require specialized IV tubing sets?',
        answer: 'Certain volumetric pumps require dedicated calibrated manufacturer tubing with silicone pumping segments, while universal pumps can be calibrated to standard IV administration sets.'
      },
      {
        question: 'What safety mechanisms prevent accidental free-flow of IV fluid?',
        answer: 'Modern infusion pumps incorporate mechanical anti-free-flow clamps that automatically clamp the tubing whenever the pump door is opened.'
      }
    ],
    relatedProductSlugs: ['syringe-pump', 'icu-accessories', 'multiparameter-patient-monitor']
  },
  {
    id: 28,
    slug: 'icu-accessories',
    name: 'ICU Accessories',
    categoryId: 'icu-critical-care',
    indicativePriceMin: 500,
    indicativePriceMax: 25000,
    indicativePriceDisplay: '₹1,000 – ₹5,000 (Rent) | Sale: ₹500 – ₹25,000',
    rentalRateDisplay: '₹1,000 – ₹5,000 / month',
    salePriceDisplay: '₹500 – ₹25,000',
    pricingItems: [
      {
            "model": "Phototherapy Single Surface (Daily Rental)",
            "rentalRate": "₹1,000 – ₹1,200 / day",
            "saleRate": "₹18,000 – ₹22,000",
            "notes": "From rate sheet: min 2 days booking"
      },
      {
            "model": "Phototherapy Dual Surface (Daily Rental)",
            "rentalRate": "₹2,000 – ₹2,500 / day",
            "saleRate": "₹28,000 – ₹35,000",
            "notes": "From rate sheet: min 2 days booking"
      },
      {
            "model": "DVT PUMP (Deep Vein Thrombosis Compression)",
            "rentalRate": "₹4,000 – ₹5,000 / mo",
            "saleRate": "₹24,000 – ₹32,000",
            "notes": "From rate sheet: 15 Days Rental ₹2,500 – ₹3,000"
      },
      {
            "model": "Adult / Alcon Medical Flow Meter",
            "rentalRate": "Included in Kits",
            "saleRate": "₹1,800 – ₹4,000",
            "notes": "From rate sheet: Adult Flowmeter on sale"
      },
      {
            "model": "Single-Patient Disposables & Breathing Circuits",
            "rentalRate": "Brand New Sealed",
            "saleRate": "₹500 – ₹3,500",
            "notes": "Hygienic filters, masks, cannulas and tubing"
      }
],
    image: '/assets/images/icu_critical_accessories_1794038647692.jpg',
    galleryImages: ["/assets/images/icu_critical_accessories_1794038647692.jpg","/assets/aistudio/Patient_Monitor_e2bbe38b.png","/assets/aistudio/Syringe_Pump_60a00e74.png"],
    shortDescription: 'Essential critical care consumables, monitoring probes, ventilator breathing circuits, and infusion stands.',
    fullDescription: 'ICU accessories encompass the broad catalog of reusable hardware, patient connection interfaces, and sterile single-use disposables essential for intensive care operations. Includes reusable silicone and disposable dual-limb ventilator circuits, HME filters, reusable SpO2 finger probes, NIBP cuffs, IBP transducer kits, stainless steel IV poles, oxygen flowmeters, and catheter mounts.',
    careContext: 'Intensive care departments, operating suites, high-dependency recovery, and home ICU bedrooms.',
    intendedUses: [
      'Patient connection and signal transmission for ventilators, patient monitors, and suction machines',
      'Infection barrier filtration and humidification in mechanical respiratory circuits',
      'Continuous hemodynamic and arterial blood pressure line transducing'
    ],
    features: [
      'Ventilator circuits available in adult, pediatric, and neonatal sizes with heated wire options',
      'Gold-plated connector multi-parameter patient monitor cables and reusable silicone finger sensors',
      'Heavy-duty five-star stainless steel mobile IV infusion drip stands with weighted stability bases',
      'Bacterial/viral heat and moisture exchanger (HME) filters with luer-lock gas sampling ports'
    ],
    faqs: [
      {
        question: 'Why is the indicative price range so wide for ICU accessories?',
        answer: 'The category spans individual disposable consumables (like HME filters and suction catheters starting at ₹500) up to specialized equipment accessory bundles, multi-parameter transducer arrays, and central monitoring telemetry hardware reaching ₹1,00,000+.'
      },
      {
        question: 'Can I purchase replacement SpO2 probes compatible with my specific monitor brand?',
        answer: 'Yes, we supply compatible pulse oximeter probes, ECG lead wires, and NIBP cuffs for most major patient monitor brands in India. Contact our team with your device model.'
      }
    ],
    relatedProductSlugs: ['medical-ventilator', 'multiparameter-patient-monitor', 'syringe-pump', 'infusion-pump']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter(p => p.categoryId === categoryId);
}
