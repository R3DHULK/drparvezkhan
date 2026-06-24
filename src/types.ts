/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ClinicChamber {
  id: string;
  name: string;
  location: string;
  busRoute?: string;
  landmark?: string;
  timings: string;
  days: string[]; // e.g., ["Sunday", "Wednesday", "Thursday"]
  daysRaw: string; // original text
  contact: string[];
  isTemporary?: boolean;
}

export type SpecialtyCategory = 
  | 'tumor' 
  | 'cyst' 
  | 'cancer' 
  | 'common_pcos'
  | 'pediatric' 
  | 'kidney' 
  | 'eye' 
  | 'mental' 
  | 'heart' 
  | 'respiratory' 
  | 'male' 
  | 'neuromuscular';

export interface TreatmentSpecialty {
  name: string;
  description: string;
  category: SpecialtyCategory;
  symptoms: string[];
  homeopathyScope: string;
  therapeuticBenefits: string[];
  customHelpline?: string;
  customWhatsapp?: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientAge: string;
  patientGender: string;
  chamberId: string;
  chamberName: string;
  date: string;
  notes?: string;
  createdAt: string;
  status: 'Confirmed' | 'Rescheduled' | 'Cancelled';
  queueNumber: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age?: number;
  location: string;
  condition: string;
  rating: number;
  text: string;
  date: string;
  isVerified: boolean;
}

