import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'respiratory-care',
    slug: 'respiratory-care',
    name: 'Respiratory Care',
    shortDescription: 'Oxygen concentrators, ventilators, BiPAP, CPAP, and high-flow oxygen solutions.',
    description: 'Our respiratory care category encompasses medical-grade oxygen delivery, non-invasive ventilation, and advanced airway support equipment for both clinical inpatient care and home respiratory management.',
    iconName: 'Wind',
    image: '/assets/images/oxygen_concentrator_device_1794038607218.jpg',
  },
  {
    id: 'cardiac-care-monitoring',
    slug: 'cardiac-care-monitoring',
    name: 'Cardiac Care & Monitoring',
    shortDescription: 'Multi-parameter monitors, ECG devices, Holter systems, and defibrillators.',
    description: 'Cardiac diagnostic and vital signs telemetry equipment tailored for continuous real-time physiological tracking in post-operative, step-down, emergency, and home cardiac recovery settings.',
    iconName: 'HeartPulse',
    image: '/assets/aistudio/Patient_Monitor_e2bbe38b.png',
  },
  {
    id: 'hospital-patient-care',
    slug: 'hospital-patient-care',
    name: 'Hospital & Patient Care',
    shortDescription: 'Manual and electric hospital beds, air mattresses, and clinical suction units.',
    description: 'Ergonomic patient positioning beds, pressure injury prevention surfaces, and medical suction equipment designed to provide clinical-grade comfort and nursing efficiency.',
    iconName: 'BedDouble',
    image: '/assets/aistudio/Hospital_Bed_2_de66745c.png',
  },
  {
    id: 'mobility-equipment',
    slug: 'mobility-equipment',
    name: 'Mobility Equipment',
    shortDescription: 'Standard wheelchairs, commode wheelchairs, patient transfer lifters, and walkers.',
    description: 'Durable rehabilitation and patient transit apparatus facilitating safe transfer, upright gait training, and independent living for post-surgical, geriatric, and convalescing individuals.',
    iconName: 'Accessibility',
    image: '/assets/aistudio/Wheel_Chair_e6e57d11.png',
  },
  {
    id: 'sleep-study-equipment',
    slug: 'sleep-study-equipment',
    name: 'Sleep Study Equipment',
    shortDescription: 'Home sleep apnea testing kits, polysomnography units, and sleep diagnostics.',
    description: 'Precision diagnostic instruments and home sleep apnea recording devices engineered for pulmonologists, neurologists, and sleep medicine practitioners evaluating sleep-disordered breathing.',
    iconName: 'Moon',
    image: '/assets/aistudio/Sleep_Study_Tool_2b3d3894.jpg',
  },
  {
    id: 'icu-critical-care',
    slug: 'icu-critical-care',
    name: 'ICU & Critical Care',
    shortDescription: 'Syringe infusion pumps, volumetric pumps, and intensive care accessories.',
    description: 'Micro-rate precision drug delivery infusion systems and high-dependency unit consumable accessories supporting critical care physicians and intensive care nursing teams.',
    iconName: 'Activity',
    image: '/assets/aistudio/ICU_Set_up_at_Home_6062b4b8.webp',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
