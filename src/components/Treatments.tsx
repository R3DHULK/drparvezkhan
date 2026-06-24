/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, ShieldAlert, Phone, HelpCircle, Activity, Heart, Eye } from 'lucide-react';
import { TREATMENTS, DOCTOR_INFO } from '../data';
import { TreatmentSpecialty, SpecialtyCategory } from '../types';
import { Language, TRANSLATIONS } from '../translations';

interface TreatmentsProps {
  lang: Language;
}

export default function Treatments({ lang }: TreatmentsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentSpecialty | null>(null);

  const t = TRANSLATIONS[lang];

  const getCategoryLabel = (category: string) => {
    if (lang === 'bn') {
      switch (category) {
        case 'all': return 'সব বিশেষত্ব';
        case 'tumor': return 'টিউমার ও ফাইব্রয়েড';
        case 'cyst': return 'সিস্ট ও গ্যাংলিয়ন';
        case 'cancer': return 'ক্রনিক ও অনকোলজি';
        case 'common_pcos': return 'হরমোন ও PCOS';
        case 'pediatric': return 'শিশুরোগ বিভাগ';
        case 'kidney': return 'কিডনি ও ইউরোলজি';
        case 'eye': return 'চোখের যত্ন';
        case 'mental': return 'মানসিক সুস্থতা';
        case 'heart': return 'হৃদরোগ ও হার্ট';
        case 'respiratory': return 'নাক, কান, গলা ও ফুসফুস';
        case 'male': return 'পুরুষদের স্বাস্থ্য';
        case 'neuromuscular': return 'বাত-ব্যপা ও প্যারালাইসিস';
        default: return 'বিশেষত্ব';
      }
    } else if (lang === 'hi') {
      switch (category) {
        case 'all': return 'सभी विशेषताएं';
        case 'tumor': return 'ट्यूमर और फाइब्रॉएड';
        case 'cyst': return 'सिस्ट और गैन्ग्लियान';
        case 'cancer': return 'क्रॉनिक और ऑनकोलॉजी';
        case 'common_pcos': return 'हार्मोनल और पीसीओएस';
        case 'pediatric': return 'शिशु रोग देखभाल';
        case 'kidney': return 'किडनी और यूरोलॉजी';
        case 'eye': return 'आँखों की देखभाल';
        case 'mental': return 'मानसिक स्वास्थ्य';
        case 'heart': return 'हृदय रोग';
        case 'respiratory': return 'ईएनटी और फेफड़े';
        case 'male': return 'पुरुष स्वास्थ्य';
        case 'neuromuscular': return 'जोड़ और साइटिका';
        default: return 'विशेषता';
      }
    }
    // English defaults
    switch (category) {
      case 'all': return 'All Specialties';
      case 'tumor': return 'Tumors & Fibroids';
      case 'cyst': return 'Cysts & Ganglions';
      case 'cancer': return 'Chronic & Oncology';
      case 'common_pcos': return 'Hormonal & PCOS';
      case 'pediatric': return 'Childhood Care';
      case 'kidney': return 'Kidney & Urology';
      case 'eye': return 'Eye Care';
      case 'mental': return 'Mental Wellness';
      case 'heart': return 'Heart & Cardiovascular';
      case 'respiratory': return 'ENT & Pulm';
      case 'male': return 'Male Wellness';
      case 'neuromuscular': return 'Joints & Sciatica';
      default: return 'Specialty';
    }
  };

  const categories = [
    { id: 'all', label: getCategoryLabel('all') },
    { id: 'tumor', label: getCategoryLabel('tumor') },
    { id: 'cyst', label: getCategoryLabel('cyst') },
    { id: 'cancer', label: getCategoryLabel('cancer') },
    { id: 'common_pcos', label: getCategoryLabel('common_pcos') },
    { id: 'pediatric', label: getCategoryLabel('pediatric') },
    { id: 'kidney', label: getCategoryLabel('kidney') },
    { id: 'eye', label: getCategoryLabel('eye') },
    { id: 'mental', label: getCategoryLabel('mental') },
    { id: 'heart', label: getCategoryLabel('heart') },
    { id: 'respiratory', label: getCategoryLabel('respiratory') },
    { id: 'male', label: getCategoryLabel('male') },
    { id: 'neuromuscular', label: getCategoryLabel('neuromuscular') }
  ];

  const getTranslatedTreatment = (item: TreatmentSpecialty): TreatmentSpecialty => {
    if (lang === 'bn') {
      if (item.name.includes("Brain Tumor")) {
        return {
          ...item,
          name: "ব্রেন টিউমার ও গ্লিওমা (Brain Tumor & Glioma)",
          description: "হোমিওপ্যাথিক চিকিৎসা টিউমারের বৃদ্ধিকে ধীর করতে এবং তীব্র ইন্ট্রাক্রানিয়াল চাপের কোলিক লক্ষণ কমিয়ে অপারেশন ছাড়াই রোগীর জীবনযাত্রার মান উন্নত করতে সাহায্য করে।",
          symptoms: ["ক্রনিক ও তীব্র মাথাব্যভা", "বমি বমি ভাব বা বমি হওয়া", "খিঁচুনি বা দৃষ্টিশক্তির ব্যাঘাত", "শারীরিক ভারসাম্য হারিয়ে ফেলা"],
          homeopathyScope: "গভীরভাবে প্রোথিত সাইকোটিক-সিফিলিটিক মায়াজমকে লক্ষ্য করে কাজ করার মাধ্যমে স্নায়ুবিক ক্ষত এবং মস্তিষ্কের ফোলাভাব নিয়ন্ত্রণে সহায়তা করে।",
          therapeuticBenefits: ["মস্তিষ্কের অতিরিক্ত চাপ থেকে উপশম", "খিঁচুনির তীব্রতা ও ফ্রিকোয়েন্সি হ্রাস", "সহায়ক থেরাপির সাথে সম্পূর্ণ নিরাপদ সমন্বয়"]
        };
      }
      if (item.name.includes("Uterine Tumor")) {
        return {
          ...item,
          name: "জরায়ু টিউমার ও ফাইব্রয়েড (Uterine Tumor & Fibroids)",
          description: "জরায়ুর ফাইব্রয়েড বা পেশীবহুল টিউমারের অপারেশনহীন পূর্ণাঙ্গ চিকিৎসা। হোমিওপ্যাথিক কনস্টিটিউশনাল ওষুধসমূহ হরমোন ভারসাম্যহীনতা দূর করে সিস্ট ও টিউমার ক্রমশ নিষ্ক্রিয় করে দেয়।",
          symptoms: ["অতিরিক্ত বা অনিয়মিত রক্তক্ষরণ", "তলপেটে ভারী অনুভূতি ও সার্বক্ষণিক ব্যথা", "কষ্টকর বা বেদনাদায়ক মাসিক", "ঘন ঘন প্রস্রাবের বেগ"],
          homeopathyScope: "হরমোনের ভারসাম্যহীনতা প্রাকৃতিকভাবে ফিরিয়ে আনতে জরায়ুর তন্তুযুক্ত বা ফাইব্রয়েড কোষসমূহকে অভ্যন্তরীণভাবে নিষ্ক্রিয় করতে সাহায্য করে।",
          therapeuticBenefits: ["ফাইব্রয়েডের আকার পর্যায়ক্রমে হ্রাস", "মাসিক চক্র স্বাভাবিক ও নিয়মিত করা", "বেদনাদায়ক জটিল অপারেশন এড়ানো"]
        };
      }
      if (item.name.includes("Breast Tumor")) {
        return {
          ...item,
          name: "ব্রেস্ট টিউমার ও ফাইব্রোঅ্যাডেনোমা (Breast Tumor)",
          description: "ব্রেস্ট ল্যাম্প বা স্তনের যেকোনো ধরণের শক্ত গুটি, ফাইব্রোঅ্যাডেনোমা এবং সিস্টের সফল হোমিওপ্যাথিক চিকিৎসা, যা অপারেশন ছাড়াই সম্পূর্ণ আরোগ্য করতে সক্ষম।",
          symptoms: ["সহজে নড়াচড়া করা যায় এমন ব্যথাহীন শক্ত দলা", "স্তনের ভেতর রবারের মতো শক্ত নোড", "মাসিক চক্রের সাথে স্তনে তীব্র ব্যথা এবং স্পর্শকাতরতা"],
          homeopathyScope: "কোনিয়াম (Conium), ফাইতোলাক্কা (Phytolacca) এবং বেরাইটা কার্বের মতো ওষুধ ব্যবহারে গ্ল্যান্ডুলার শক্ত বাধার সফল ও প্রাকৃতিক অপসারণ ঘটে।",
          therapeuticBenefits: ["স্তনের বা বগলের রবারের মতো শক্ত টিস্যু গলিয়ে ফেলা", "স্তনের স্পর্শকাতরতা ও ব্যথা দূর করা", "অপারেশনের ভয় ও দুশ্চিন্তা থেকে স্থায়ী মুক্তি"]
        };
      }
      if (item.name.includes("Nose, Ear & Throat")) {
        return {
          ...item,
          name: "নাক, কান ও গলার টিউমার (Throat & Nose Tumor)",
          description: "নাক, কান বা গলার যেকোনো ধরণের অস্বাভাবিক বৃদ্ধি যেমন গ্ল্যান্ডুলার পলিপ, ভোকাল কর্ডের নোডুল বা বেয়ারিং মাংস বৃদ্ধির মৃদু হোমিওপ্যাথি চিকিৎসা।",
          symptoms: ["নাকের দীর্ঘস্থায়ী বন্ধভাব ও শ্বাসকষ্ট", "তীব্র নাক ডাকা বা অনবরত শ্লেষ্মা নিঃসরণ", "গলার স্বর ভেঙে যাওয়া ও কর্কশ হওয়া", "কানের বন্ধভাব বা আংশিক শ্রবণশক্তি হ্রাস"],
          homeopathyScope: "মিউকাস নিঃসরণ এবং গ্রন্থিসমূহের অস্বাভাবিক বৃদ্ধি প্রতিরোধে বিশেষায়িত অ্যান্টি-সাইকোটিক হোমিওপ্যাথি ওষুধ ভূমিকা রাখে।",
          therapeuticBenefits: ["শ্বাসনালী এবং সাইনাসের গহ্বর পরিষ্কার করা", "গলার স্বরের স্বাভাবিকতা ফিরিয়ে আনা", "পরবর্তী সময়ে পুনরায় মাংস বা পলিপ বৃদ্ধি প্রতিরোধ করা"]
        };
      }
      if (item.name.includes("Lipoma")) {
        return {
          ...item,
          name: "লাইপোমা ও সেবাসিয়াস সিস্ট (Lipoma & Cyst)",
          description: "ত্বকের নিচে জমে থাকা নরম চর্বির দলা (একটি বা একাধিক) বা লাইপোমা চিকিৎসায় হোমিওপ্যাথি মেটাবলিজমের উন্নতি ঘটিয়ে এগুলোকে প্রাকৃতিকভাবে গলিয়ে ফেলে কমায়।",
          symptoms: ["ত্বকের নিচে সহজেই নড়ানো যায় এমন নরম চর্বির নোড", "অস্বস্তিকর বাহ্যিক চেহারা", "স্নায়ুর ওপরে চাপ পড়লে মৃদু বা ভোঁতা ব্যথা"],
          homeopathyScope: "শরীরের লিপিড মেটাবলিজম ও লিম্ফ্যাটিক সঞ্চালন সক্রিয় করে চর্বির সঞ্চয় গলিয়ে ফেলতে সাহায্য করে।",
          therapeuticBenefits: ["নতুন চর্বির দলা তৈরি হওয়া বন্ধ করা", "বিদ্যমান লাইপোমা নরম ও ধীরে ধীরে শোষিত হওয়া", "সম্পূর্ণ ব্যথাহীন ও দাগহীন চিকিৎসা"]
        };
      }
      if (item.name.includes("PCOS") || item.name.includes("PCOD")) {
        return {
          ...item,
          name: "PCOS / PCOD ও ওভারিয়ান সিস্ট",
          description: "পলিসিস্টিক ওভারি সিন্ড্রোম (PCOS) এবং ডিম্বাশয়ের সিস্টের চিকিৎসা। হরমোনের ব্যাঘাত দূর করে ডিম্বস্ফোটন সচল করা এবং ডিম্বাশয়ের তরলযুক্ত সিস্ট নিরাময় করা।",
          symptoms: ["অনিয়মিত বা দেরিতে মাসিক হওয়া", "শরীরে বা মুখে অতিরিক্ত লোম গজানো (হিরসুটিজম)", "একগুঁয়ে হরমোনজনিত ব্রণ বা মুখের কালো দাগ", "ওজন বৃদ্ধি প্রতিরোধে অক্ষমতা"],
          homeopathyScope: "কনস্টিটিউশনাল ঔষুধ পিটুইটারি-ওভারিয়ান অক্ষকে উদ্দীপিত করে ডিম্বাণুর স্বাভাবিক পরিপক্কতা এবং ইস্ট্রোজেন-প্রজেস্টেরন হরমোন চক্রকে জোরালো করে।",
          therapeuticBenefits: ["তরল-ভর্তি ওভারিয়ান সিস্টের সফল বিলুপ্তি", "প্রাকৃতিক ও নিয়মিত মাসিক চক্র পুনরুদ্ধার", "ত্বকের উজ্জ্বলতা বৃদ্ধি এবং অতিরিক্ত ওজন নিয়ন্ত্রণে চমৎকার ফল"]
        };
      }
      if (item.name.includes("Ganglion")) {
        return {
          ...item,
          name: "গ্যাংলিয়ন সিস্ট (Ganglion Cyst)",
          description: "কব্জি, হাত বা পায়ের সংযোগস্থলে তরল-ভর্তি গুটি বা গ্যাংলিয়ন নিষ্ক্রিয় ও গলিয়ে ফেলার অত্যন্ত কার্যকর হোমিওপ্যাথিক চিকিৎসা।",
          symptoms: ["কব্জি বা টেন্ডনের ওপর দৃশ্যমান বৃত্তাকার ফুসকুড়ি বা শক্ত গুটি", "হাতের কব্জি ঘোরানোর সময় ভোঁতা ব্যথা বা অনমনীয়তা", "নমনীয়তা সীমিত বা অবশ হওয়া"],
          homeopathyScope: "রুটা (Ruta) এবং সাইলিশিয়া (Silicea) কব্জির মেমব্রেন সংলগ্ন সাইনোভিয়াল তরল শোষণে সাহায্য করে।",
          therapeuticBenefits: ["ব্যথা সম্পূর্ণ দূর হওয়া", "তরল সঞ্চয়ের উত্তেজনা উপশম", "কোনো প্রকার সিরিঞ্জ ছাড়াই স্থায়ী নিরাময়"]
        };
      }
      if (item.name.includes("Neurofibroma")) {
        return {
          ...item,
          name: "নিউরোফাইব্রোমা ও গ্লিওমা (Neurofibroma)",
          description: "পেরিফেরাল স্নায়ুতন্ত্রের যেকোনো অংশে হওয়া নরম টিউমার বা লিশনসমূহের বিস্তার হ্রাস এবং স্নায়ুর ক্ষতি প্রতিরোধে হোমিওপ্যাথি চিকিৎসা।",
          symptoms: ["স্নায়ুর ওপর বা ত্বকে মাংসল নোডুল", "ঝিঁঝিঁ করা বা তীব্র বৈদ্যুতিক শক লাগার মতো বেদনা", "ত্বকের ওপর অস্বস্তিকর দাগ"],
          homeopathyScope: "বংশগত জিনোটাইপ বা মায়াজম নিষ্ক্রিয় করে স্নায়ুর স্ফীতি হ্রাস করে।",
          therapeuticBenefits: ["স্নায়ু বা নিউরোপ্যাথিক ব্যথার তীব্রতা দূর করা", "নোডুলের বিস্তার ধীর করে দেওয়া", "কেন্দ্রীয় স্নায়ুতন্ত্রের স্থায়িত্ব নিশ্চিত করা"]
        };
      }
      if (item.name.includes("Chronic & Blood")) {
        return {
          ...item,
          name: "থ্যালাসেমিয়া, হেপাটাইটিস ও এইচআইভি",
          description: "থ্যালাসেমিয়া, হেপাটাইটিস এবং এইচআইভি-র মতো জটিল রক্ত ও লিভারজনিত ক্রনিক রোগের সহায়ক হোমিওপ্যাথি চিকিৎসা, যা রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।",
          symptoms: ["থ্যালাসেমিয়া (রক্তস্বল্পতা হ্রাস এবং রক্তের প্রয়োজনীয়তা কমানো)", "হেপাটাইটিস এ, বি, সি সংক্রমণ", "এইচআইভি রোগীদের রোগ প্রতিরোধ ক্ষমতা বাড়ানো", "ক্যান্সার বা কেমোথেরাপি পরবর্তী তীব্র শারীরিক দুর্বলতা"],
          homeopathyScope: "কোষীয় পুষ্টি এবং রোগ প্রতিরোধ শক্তিকে শক্তিশালী করতে নিখুঁত মায়াসমেটিক ফর্মুলা ব্যবহার করে।",
          therapeuticBenefits: ["প্লীহা বড় হয়ে যাওয়ার (Splenomegaly) গতি হ্রাস করা", "লিভারের এনজাইম (SGOT, SGPT) স্বাভাবিক রাখা", "মৌসুমী সংক্রমণ ও শারীরিক ক্লান্তির বিরুদ্ধে চমৎকার প্রতিরোধ ক্ষমতা"]
        };
      }
      if (item.name.includes("Hormonal") || item.name.includes("Thyroid")) {
        return {
          ...item,
          name: "হরমোন ও মেটাবলিক কেয়ার (থাইরয়েড, ডায়াবেটিস)",
          description: "শরীরের বিপাক প্রক্রিয়া উন্নত করা, গ্রন্থি নিঃসরণ এবং আজীবন ওষুধ খাওয়ার প্রয়োজনীয়তা ধাপে ধাপে কমানোর হোমিওপ্যাথি সমাধান।",
          symptoms: ["থাইরয়েড সমস্যা (হাইপোথাইরয়েড বা হাইপারথাইরয়েড)", "উচ্চ ইউরিক অ্যাসিড ও গাঁটে লালচে ফোলা ব্যথা", "ডায়াবেটিস মেলিটাস (রক্তের শর্করা নিয়ন্ত্রণ)", "হঠাৎ করে ওজন ওঠানামা এবং তীব্র অলসতা"],
          homeopathyScope: "কোষীয় স্তরে অগ্ন্যাশয় ও থাইরয়েডের মতো সংবেদনশীল গ্রন্থিগুলোকে স্বাভাবিক ক্ষমতার সাহায্য করে।",
          therapeuticBenefits: ["TSH মাত্রা সঠিকভাবে নিয়ন্ত্রণে আনা", "গেঁটে বাত বা ইউরিক অ্যাসিডের তীব্র ক্রিস্টাল ব্যথা দূর করা", "রক্তের শর্করা বা গ্লাইসেমিক মাত্রার সঠিক ভারসাম্য লাভ"]
        };
      }
      if (item.name.includes("Pediatric")) {
        return {
          ...item,
          name: "শিশুরোগ ও শিশুর বিকাশজনিত চিকিৎসা",
          description: "সংবেদনশীল শিশুদের কফ, সর্দি, হাঁপানি, অটিজম, এডিএইচডি, বিছানায় প্রস্রাব এবং শিশুর শারীরিক ও মানসিক বিকাশজনিত জটিলতার জন্য মিষ্টি ও সম্পূর্ণ নিরাপদ চিকিৎসা।",
          symptoms: ["শিশুদের অ্যালার্জিক হাঁপানি এবং ঘন ঘন ঠান্ডা লাগা", "অটিজম (ASD), চঞ্চলতা বা ADHD এবং মনোযোগের অভাব", "নিউমোনিয়া, হাম, বসন্ত এবং তীব্র খুসখুসে কাশি", "ডায়াপার অ্যালার্জি ও শিশুদের পেট ফাঁপা ও বদহজম"],
          homeopathyScope: "টক্সিক উপাদান ছাড়াই শিশুদের ইমিউন সিস্টেম ও স্নায়বিক রিফ্লেক্সগুলোকে কোমনভাবে সক্রিয় করে তোলে।",
          therapeuticBenefits: ["ইনহেলারের ওপর শিশুর নির্ভরশীলতা কমানো", "অতিরিক্ত চঞ্চলতা দূর করে মনোযোগ প্রাকৃতিকভাবে বৃদ্ধি করা", "ডায়াপার অ্যালার্জি এবং পেটের দীর্ঘস্থায়ী সমস্যা সম্পূর্ণ নিরাময়"]
        };
      }
      if (item.name.includes("Renal") || item.name.includes("Prostate")) {
        return {
          ...item,
          name: "কিডনি পাথর, প্রোস্টেট ও মূত্র রোগ",
          description: "কিডনির পাথর ভেঙে গলিয়ে বের করা, প্রোস্টেট বৃদ্ধি (BPH), বারবার প্রস্রাব হওয়া, শয্যামূত্র বা বিছানায় প্রস্রাব এবং কিডনি রোগের অপারেশনবিহীন চিকিৎসা।",
          symptoms: ["কিডনিতে পাথর বা সিস্ট (Renal Stone & Cyst)", "রাতের বেলায় বিছানায় অনৈচ্ছিক প্রস্রাব করা (শয্যামূত্র)", "প্রোস্টেট বৃদ্ধিজনিত জটিলতা এবং প্রস্রাবে তীব্র জ্বালাপোড়া", "ক্রনিক কিডনি ডিজিজ বা ক্রিয়েটিনিন বৃদ্ধির ক্ষেত্রে সহায়তা"],
          homeopathyScope: "প্রাকৃতিক পাথর গলানো প্রক্রিয়াকে সচল করে মূত্রনালীর জ্বালাপোড়া হ্রাস করে।",
          therapeuticBenefits: ["কিডনির পাথর প্রস্রাবের সাথে গলিয়ে বের করে দেওয়া", "বিছানায় প্রস্রাব করার অভ্যাস স্থায়ীভাবে বন্ধ করা", "প্রোস্টেট বৃদ্ধিজনিত প্রস্রাবের কষ্ট থেকে রেহাই"]
        };
      }
      if (item.name.includes("Ophthalmic") || item.name.includes("Eye")) {
        return {
          ...item,
          name: "চোখের স্নায়ু এবং চোখের জল পড়া",
          description: "দৃষ্টিশক্তি ধরে রাখা, চোখের অতিরিক্ত চাপ বা গ্লুকোমা হ্রাস এবং অনবরত চোখ দিয়ে জল পড়ার স্থায়ী উপশমকারী মৃদু হোমিওপ্যাথি।",
          symptoms: ["চোখের সূক্ষ্ম স্নায়ু বা রেটিনার দুর্বলতা", "চোখ দিয়ে অনবরত জল পড়া এবং চোখ চুলকানো", "ছানি পড়ার প্রাথমিক লক্ষণ ও ঝাপসা দৃষ্টি", "গ্লুকোমা বা চোখের ভেতরে উচ্চ রক্তচাপ"],
          homeopathyScope: "চোখের সূক্ষ্ম রক্তনালী এবং অপটিক স্নায়ুকে পুষ্টি জুগিয়ে ওরাল প্রতিকার দেওয়া হয়।",
          therapeuticBenefits: ["চোখ দিয়ে জল পড়া, চুলকানি ও অ্যালার্জি প্রতিরোধ", "প্রাথমিক স্তরে চোখের ছানি বৃদ্ধি সফলভাবে প্রতিহত করা", "চোখের অতিরিক্ত চাপ কমিয়ে জটিল অন্ধত্ব থেকে রক্ষা"]
        };
      }
      if (item.name.includes("Neuropsychiatry") || item.name.includes("Insomnia")) {
        return {
          ...item,
          name: "অনিদ্রা, মানসিক অবসাদ ও ভয়",
          description: "কোনো প্রকার রাসায়নিক ঘুমের ওষুধ ব্যবহারের কুফল ছাড়াই হতাশা, অহেতুক ভয়, প্যানিক অ্যাটাক এবং তীব্র অনিদ্রা নিরাময়।",
          symptoms: ["অনিদ্রা বা রাতে ঘন ঘন ঘুম ভেঙে যাওয়া", "ডিপ্রেশন, ডিমেনশিয়া বা স্মৃতিশক্তি কমে যাওয়া", "অহেতুক সন্দেহ প্রবণতা বা কারণে অকারণে ভয় পাওয়া", "অতিরিক্ত রাগ, সাইকোসিস বা যেকোনো ম্যানিয়া"],
          homeopathyScope: "নার্ভ সাইন্যাপসগুলো শান্ত করে মস্তিষ্কের মেটাবলিজম স্বাভাবিক করে তোলে।",
          therapeuticBenefits: ["ঝিমুনি ছাড়াই রাতে অত্যন্ত গভীর ও আরামদায়ক ঘুমের পরিবেশ তৈরি", "স্মৃতিশক্তি উন্নত করা এবং মানসিক ভয়ভীতি দূর করা", "মনকে সতেজ ও প্রাণবন্ত করে তোলা"]
        };
      }
      if (item.name.includes("Cardiovascular") || item.name.includes("Heart")) {
        return {
          ...item,
          name: "হৃদরোগ ও কার্ডিওভাসকুলার সাপোর্ট",
          description: "হার্টের ব্লকেজ প্রতিরোধ, হৃৎপিণ্ডের পেশীর শক্তি বৃদ্ধি, রক্তচাপ স্বাভাবিক রাখা এবং জন্মগত হার্টের ফুটোতে বিশেষ সহায়তা।",
          symptoms: ["অল্প পরিশ্রমেই তীব্র হাঁফিয়ে ওঠা বা শ্বাসকষ্ট", "বুকের ভেতর অনবরত ধড়ফড়ানি (Palpitation)", "হার্ট ভালভ বা কার্ডিয়াক ভালভ ডিজিজ", "জন্মগত হৃদপিণ্ডের ছিদ্র (ASD/VSD) এবং উচ্চ রক্তচাপ"],
          homeopathyScope: "ক্র্যাটিগাস (Crataegus) এর মতো প্রাকৃতিক কার্ডিয়াক টনিক রক্তের সংবহন সচল রেখে হৃদপিণ্ড সুরক্ষায় কাজ করে।",
          therapeuticBenefits: ["হাঁটার সময় বুকের ভারী বা শ্বাস বন্ধ হওয়া অনুভূতি কমানো", "সিস্টোলিক এবং ডায়াস্টোলিক রক্তচাপের সামঞ্জস্য বজায় রাখা", "হার্টের ভালভের সচলতা বৃদ্ধি ও ব্লক প্রতিহত করা"]
        };
      }
      if (item.name.includes("Respiratory") || item.name.includes("Adenoids")) {
        return {
          ...item,
          name: "অ্যালার্জি, হাঁপানি ও নাকের পলিপ",
          description: "নাকের মাংস বৃদ্ধি বা পলিপেকটমি ছাড়াই নাকের পলিপ, অ্যাডেনয়েড, সাইনাস ও টনসিলের স্থায়ী ও ব্যথাহীন সমাধান।",
          symptoms: ["নাকের পলিপ এবং ফোলা অ্যাডেনয়েড", "অনবরত হাঁচি, সর্দি, নাক ডাকা ও তীব্র হাঁপানি", "টনসিলের সমস্যা বা নাক দিয়ে রক্ত পড়া (এপিস্ট্যাক্সিস)", "মৌসুমী রেসপিরেটরি অ্যালার্জি ও ধুলোবালির ধকল"],
          homeopathyScope: "অ্যান্টি-ইনফ্ল্যামেটরি ওষুধের মাধ্যমে শ্বাসনালী সংলগ্ন মাংস বৃদ্ধি সংকোচন করে।",
          therapeuticBenefits: ["রাতের নাক ডাকা এবং শ্বাসরোধের বন্ধভাব দূর করা", "টনসিল বা অ্যাডেনয়েডের কারণে গিলতে কষ্ট স্থায়ীভাবে দূর করা", "হাঁচি-সর্দি প্রতিরোধ এবং নাকের পলিপ সম্পূর্ণ গলিয়ে ফেলা"]
        };
      }
      if (item.name.includes("Male Reproductive") || item.name.includes("Vitality")) {
        return {
          ...item,
          name: "পুরুষদের হরমোন ও দুর্বলতা চিকিৎসা",
          description: "পুরুষদের শারীরিক ক্লান্তি, অবসাদ, বীর্য ক্ষয় ও স্পর্শকাতর বিষয়সমূহের গোপনীয় ও কার্যকরী ওষধি পদ্বতি।",
          symptoms: ["ধাতু দুর্বলতা বা স্বপ্নদোষ (Nocturnal Emissions)", "শারীরিক অনিহা বা মানসিকভাবে অত্যন্ত ভেঙে পড়া", "বার্ধক্যজনিত ক্লান্তি ও স্নায়ুবিক দুর্বলতা"],
          homeopathyScope: "কোমর ও জননাকৃতির সূক্ষ্ম স্নায়ুতন্ত্রে শক্তি প্রদান করে।",
          therapeuticBenefits: ["শারীরিক সক্ষমতা ও স্ট্যামিনা উল্লেখযোগ্য মাত্রায় বৃদ্ধি", "স্বপ্নদোষ এবং ধাতুপাত চিরতরে বন্ধ করা", "কোনো রাসায়নিক পার্শ্বপ্রতিক্রিয়া ছাড়াই স্নায়ুতন্ত্রের শক্তি বৃদ্ধি"]
        };
      }
      if (item.name.includes("Neuromuscular") || item.name.includes("Joints")) {
        return {
          ...item,
          name: "বাত-ব্যথা, প্যারালাইসিস ও সাইটিকা",
          description: "হাড়ের ক্ষয় দূর করা, কোমর ও ঘাড়ের মেরুদণ্ডের স্নায়ুর চাপ (Sciatica) নিরাময় এবং স্ট্রোক বা প্যারালাইসিসের দ্রুত আরোগ্য।",
          symptoms: ["অস্টিওআর্থ্রাইটিস বা তীব্র বাতের কোমর-হাঁটু ফোলা ব্যথা", "প্যারালাইসিস বা স্ট্রোক পরবর্তী অসাড়তা (CVA)", "পা বা হাতের কাঁপুনি (Parkinson's), মৃগী রোগ বা খিঁচুনি", "পায়ের গোড়ালি ব্যথা (Heel spur), পায়ে তরল ফুসকানো বা ভেরিকোজ ভেইন"],
          homeopathyScope: "মেরুদণ্ডের চাপা ধরা বা সায়াটিকা স্নায়ুর তীব্র প্রদাহ কাটিয়ে রক্ত চলাচলের গতি ত্বরান্বিত করে।",
          therapeuticBenefits: ["গেঁটে বাত বা ইউরিক অ্যাসিডের হাড় ফোলা কমিয়ে হাঁটাচলা আরামদায়ক করা", "স্ট্রোকের পর প্যারালাইজড পেশীকে ধীরে ধীরে পুনরায় সংবেদনশীল করা", "গোড়ালি ব্যথা ও সায়াটিকার তীব্র হুল ফোটানো যন্ত্রণা দূর করা"]
        };
      }
    } else if (lang === 'hi') {
      if (item.name.includes("Brain Tumor")) {
        return {
          ...item,
          name: "ब्रेन ट्यूमर और ग्लियोमा (Brain Tumor & Glioma)",
          description: "होम्योपैथिक प्रबंधन ट्यूमर की वृद्धि दर को धीमा करने और कपाल के भीतर दबाव (इन्ट्रैक्रैनियल प्रेशर) को कम कर मरीज का जीवन आसान बनाता है।",
          symptoms: ["सिर में लगातार तेज दर्द रहना", "तेज उल्टी होना (प्रोजेक्टाइल वोमिटिंग)", "दौरे अथवा देखने में धुंधलापन आना", "शारीरिक संतुलन बिगड़ना"],
          homeopathyScope: "मस्तिष्कीय द्रव्य की सूजन और दबाव को नियंत्रित करने के लिए गहरे सायकोटिक-सिफिलिटिक दोषों पर काम करता है।",
          therapeuticBenefits: ["मशीनी दबाव से राहत", "दौरे आने की आवृत्ति में कमी", "सपोर्टिव थेरेपी के साथ पूरी तरह सुरक्षित उपयोग"]
        };
      }
      if (item.name.includes("Uterine Tumor")) {
        return {
          ...item,
          name: "गर्भाशय रसौली और फाइब्रॉएड (Uterine Tumor & Fibroids)",
          description: "गर्भाशय की रसौली (फाइब्रॉएड) का बिना सर्जरी स्थायी होम्योपैथिक समाधान। विशिष्ट दवाएं हॉर्मोन को संतुलित कर गांठ को धीरे-धीरे पिघला देती हैं।",
          symptoms: ["माहवारी में बहुत अधिक अथवा पुराना रक्तस्राव", "पेट के निचले हिस्से में भारीपन और दर्द रहना", "कष्टदायक मासिक धर्म", "बार-बार पेशाब आने की इच्छा"],
          homeopathyScope: "हार्मोनल गड़बड़ी को ठीक करके गर्भाशय के रेशेदार मुलायम ऊतकों को भीतर से अवशोषित होने में मदद करता है।",
          therapeuticBenefits: ["फाइब्रॉएड के आकार में क्रमशः कमी आना", "माहवारी चक्र को फिर से नियमित करना", "सर्जरी के दर्द और नुकसान से बचाव"]
        };
      }
      if (item.name.includes("Breast Tumor")) {
        return {
          ...item,
          name: "स्तन की गांठें / फाइब्रोएडीनोमा (Breast Tumor)",
          description: "स्तन की संवेदी गांठों और फाइब्रोएडीनोमा का बिना ऑपरेशन एवं बिना चीर-फाड़ के सुरक्षित समाधान ताकि कोई निशान न रहे।",
          symptoms: ["स्तन में हाथ से हिलाने वाली दर्द रहित गांठ", "रबर जैसी सख्त अंदरूनी रसौली", "माहवारी के दिनों में स्तन में दर्द और भारीपन"],
          homeopathyScope: "कोनियम (Conium) और फायटोलाका जैसी दवाएं ग्रंथियों की सख्त गांठों को स्वाभाविक रूप से पिघला देती हैं।",
          therapeuticBenefits: ["कठोर रेशेदार ऊतकों को पूरी तरह घोलना", "गंभीर संवेदनशीलता और दर्द को समाप्त करना", "ऑपरेशन के डर से मुक्ति दिलाना"]
        };
      }
      if (item.name.includes("Nose, Ear & Throat")) {
        return {
          ...item,
          name: "नाक, कान और गले के ट्यूमर",
          description: "नाक, कान या गले के असामान्य विकास, जैसे लैरिंजियल ट्यूमर, वोकल नोड्यूल्स, क्रोनिक पॉलिप्स का बिना ऑपरेशन कोमल समाधान।",
          symptoms: ["नाक का बंद होना और सांस लेने में कठिनाई", "रात में तेज खर्राटे आना", "आवाज का भारीपन या बैठ जाना", "कान में लगातार भारीपन या बहना"],
          homeopathyScope: "शारीरिक म्यूकस और असामान्य ऊतकों के बढ़ते विकार को सायकोटिक रोधी दवाओं से नियंत्रित करता है।",
          therapeuticBenefits: ["श्वसन मार्ग और साइनस मार्ग को साफ करना", "आवाज की प्राकृतिक मधुरता बहाल करना", "भविष्य में पुनः पॉलिप बढ़ने से पूर्ण सुरक्षा"]
        };
      }
      if (item.name.includes("Lipoma")) {
        return {
          ...item,
          name: "लाइपोमा और सिस्ट (Lipoma & Cyst)",
          description: "त्वचा के नीचे जमी वसा (चर्बी) की गांठों (लाइपोमेटोसिस) को होम्योपैथी शरीर के वसा मेटाबॉलिज्म को दुरुस्त कर सुचारू रूप से पिघलाती है।",
          symptoms: ["त्वचा के नीचे आसानी से खिसकने वाली चर्बी की गांठें", "शारीरिक बनावट का बिगड़ना", "कंधे या बाजू की नसों पर दबाव के कारण दर्द"],
          homeopathyScope: "फैट मेटाबॉलिज्म में सुधार लाकर लिंफ प्रवाह को बढ़ाता है, जिससे गांठों का समाधान होता है।",
          therapeuticBenefits: ["नई गांठों का बनना रोकना", "मौजूदा गांठों को नरम कर धीरे-धीरे समाप्त करना", "पूरी तरह दर्द रहित एवं दाग रहित उपचार"]
        };
      }
      if (item.name.includes("PCOS") || item.name.includes("PCOD")) {
        return {
          ...item,
          name: "PCOS / PCOD और ओवेरियन सिस्ट",
          description: "पॉलीसिस्टिक ओवेरियन सिंड्रोम और डिम्बग्रंथि सिस्ट का प्रभावी इलाज। अंडे बनने की प्रक्रिया बहाल कर हॉर्मोन चक्र सुचारू करना।",
          symptoms: ["माहवारी का समय पर न होना या महीनों की देरी", "चेहरे और शरीर पर अनचाहे बाल (हर्सुटिज़्म)", "जिद्दी मुहांसे और चेहरे पर काले धब्बे", "वजन का अनियंत्रित रूप से बढ़ना"],
          homeopathyScope: "पिट्यूटरी-ओवेरियन एक्सिस को उत्तेजित कर अंडों को प्राकृतिक रूप से परिपूर्ण होने में मदद करता है।",
          therapeuticBenefits: ["तरल से भरी अंडाशय की थैली/सिस्ट का पूर्ण समाधान", "प्राकृतिक रूप से स्वस्थ मासिक धर्म की वापसी", "त्वचा में निखार और प्राकृतिक वजन नियंत्रण"]
        };
      }
      if (item.name.includes("Ganglion")) {
        return {
          ...item,
          name: "गैन्ग्लियान सिस्ट (Ganglion Cyst)",
          description: "कलाई, हाथ या पैर के जोड़ों पर तरल पदार्थ से भरी उभरी हुई कड़क गांठ को पिघलाने का होम्योपैथिक उपचार।",
          symptoms: ["कलाई या टेंडन पर उभरी हुई गोल और कड़क गांठ", "हाथ हिलाने-डुलाने पर कलाई में पुराना सुस्त दर्द", "हाथ की उंगलियों की मुड़ने की क्षमता कम होना"],
          homeopathyScope: "रूटा (Ruta) और साइलीशिया (Silicea) कलाई के जोड़ों के संचित द्रव को सोखने और ठीक करने में कारगर हैं।",
          therapeuticBenefits: ["कलाई के जोड़ों के संचालन से दर्द पूरी तरह समाप्त करना", "द्रव के दबाव को सामान्य स्तर पर लाना", "सिरिंज से पानी खींचने के बजाय स्थायी रूप से सुखाना"]
        };
      }
      if (item.name.includes("Neurofibroma")) {
        return {
          ...item,
          name: "न्यूरोफाइब्रोमा और ग्लियोमा (Neurofibroma)",
          description: "परिधीय तंत्रिका तंत्र (Peripheral Nervous System) की संवेदनशील गांठों और क्षतिग्रस्त नसों का विस्तार रोकने का उत्कृष्ट उपचार।",
          symptoms: ["नसों के ऊपर या त्वचा पर मांसल छोटी गांठें", "पैरों में सुई चुभने जैसा अथवा बिजली सा दर्द", "त्वचा पर दाग एवं बेचैनी रहना"],
          homeopathyScope: "पारिवारिक आनुवंशिक विकारों से उत्पन्न नसों के आवरण के भीतर कोशिका विभाजन को नियंत्रित करता है।",
          therapeuticBenefits: ["नसों के तेज दर्द से पूर्ण राहत", "गांठों की वृद्धि दर को पूरी तरह थामना", "केंद्रीय तंत्रिका तंत्र की कार्यप्रणाली सुनिश्चित रखना"]
        };
      }
      if (item.name.includes("Chronic & Blood")) {
        return {
          ...item,
          name: "थैलेसीमिया, हेपेटाइटिस और एचआईवी",
          description: "थैलेसीमिया, हेपेटाइटिस ए, बी, सी और गंभीर संक्रामक तथा क्रॉनिक प्रतिरक्षा विकारों को नियंत्रित करने का सुरक्षित होम्योपैथिक उपचार।",
          symptoms: ["थैलेसीमिया (रक्त की कमी दूर करना और बार-बार रक्त चढ़ाने का अंतर बढ़ना)", "हेपेटाइटिस और लिवर संक्रमण", "कमजोर रोग प्रतिरोधक क्षमता व मौसमी एलर्जी", "कैंसर मरीजों के कीमोथेरेपी के बाद की कमजोरी"],
          homeopathyScope: "शरीर की आंतरिक जीवनी शक्ति और रक्त जनन क्षमता को समृद्ध कर लिवर की कार्यप्रणाली में सुधार करता है।",
          therapeuticBenefits: ["तिल्ली (Spleen) बढ़ने की दर को नियंत्रित करना", "लिवर एंजाइम (SGOT, SGPT) को सुरक्षित स्तर पर लाना", "शरीर को दीर्घकालिक संक्रामक रोगों से लड़ने हेतु मजबूत बनाना"]
        };
      }
      if (item.name.includes("Hormonal") || item.name.includes("Thyroid")) {
        return {
          ...item,
          name: "हार्मोन और एंडोक्राइन केयर",
          description: "ग्रंथियों के अनुचित स्राव को संतुलित कर दवाईयां कम करने का विश्वसनीय होम्योपैथिक उपचार।",
          symptoms: ["थायराइड विकार (हाइपो या हाइपर थायराइड)", "बढ़ा हुआ यूरिक एसिड तथा जोड़ों में दर्द", "मधुमेह (ब्लड शुगर स्तर पर नियंत्रण)", "थकान, कमजोरी एवं अचानक वजन का असंतुलन"],
          homeopathyScope: "कोशिका स्तर पर अग्न्याशय और थायराइड ग्रंथियों को प्राकृतिक रूप से सहायता देता है।",
          therapeuticBenefits: ["TSH स्तर को वापस सही स्थिति में लाना", "जोड़ों की सूजन कम कर यूरिक एसिड दर्द दूर करना", "शर्करा के उतार-चढ़ाव को सामान्य बनाना"]
        };
      }
      if (item.name.includes("Pediatric")) {
        return {
          ...item,
          name: "शिशु रोग एवं विकास",
          description: "बच्चों की संवेदनशील उम्र, सर्दी-खांसी, दमा, ऑटिज्म, एडीएचडी तथा बिस्तर पर पेशाब करने की आदत का अत्यंत मीठा व पूर्णतः सुरक्षित इलाज।",
          symptoms: ["बच्चों की पुरानी सर्दी, खांसी, दमा व सांस फूलना", "ऑटिज्म (ASD), अत्यधिक चंचलता अथवा ध्यान न लगना (ADHD)", "निमोनिया, खसरा, माताजी आना एवं सूखी खांसी", "नैपकिन रैश और पेट दर्द की पुरानी समस्या"],
          homeopathyScope: "बच्चों के मानसिक विकास को गति देता है और श्वसन तंत्र की रोग प्रतिरोधक क्षमता सुधारता है।",
          therapeuticBenefits: ["खर्राटे, जुकाम, इनहेलर से बच्चों को दूर रखना", "अत्यधिक चंचलता कम कर एकाग्रता बढ़ाना", "बच्चों की नाजुक त्वचा को रैश से मुक्त रखना"]
        };
      }
      if (item.name.includes("Renal") || item.name.includes("Prostate")) {
        return {
          ...item,
          name: "गुर्दे की पथरी, प्रोस्टेट और मूत्र रोग",
          description: "किडनी की पथरी को गलाकर बाहर निकालना, प्रोस्टेट वृद्धि का इलाज, बिस्तर पर पेशाब तथा क्रोनिक किडनी रोग की नैदानिक देखभाल।",
          symptoms: ["गुर्दे की पथरी एवं सिस्ट (Renal Stone & Cyst)", "बच्चों और बड़ों का रात में बिस्तर पर पेशाब करना (शय्यामूत्र)", "प्रोस्टेट का बढ़ना, बार-बार पेशाब आना व मूत्र में जलन", "क्रोनिक किडनी रोग तथा क्रिएटिनिन बढ़ने में सहायता"],
          homeopathyScope: "गुर्दे की पथरी को गलाने वाली दवाओं से पथरी को गलाकर बाहर निकालता है।",
          therapeuticBenefits: ["किडनी की पथरी को पेशाब के रास्ते बिना दर्द घोलकर बाहर निकालना", "बिस्तर पर पेशाब करने की आदत को स्थायी रूप से बंद करना", "मूत्र नली की जलन समाप्त कर खुलकर पेशाब आने में मदद"]
        };
      }
      if (item.name.includes("Ophthalmic") || item.name.includes("Eye")) {
        return {
          ...item,
          name: "नेत्र सुरक्षा और आंखों से पानी गिरना",
          description: "नेत्र नसों की सुरक्षा, मोतियाबिंद का गैर-सर्जिकल रोकथाम और लगातार आंखों से पानी गिरने व एलर्जी की समस्या से मुक्ति।",
          symptoms: ["आंकड़ों की सूक्ष्म नसों की कमजोरी", "आंखों से लगातार पानी बहना व खारिश होना", "शुरुआती मोतियाबिंद की सफेदी", "ग्लूकोमा व धुंधला दिखाई देना"],
          homeopathyScope: "आंखों की बारीक रक्त वाहिकाओं और तंत्रिकाओं को सशक्त करने में सहायक है।",
          therapeuticBenefits: ["आंखों की एलर्जी और लालिमा को समाप्त करना", "शुरुआती मोतियाबिंद की वृद्धि को पूरी तरह थामना", "आंखों के बड़े दबाव से आंखों की नसों को सुरक्षित रखना"]
        };
      }
      if (item.name.includes("Neuropsychiatry") || item.name.includes("Insomnia")) {
        return {
          ...item,
          name: "गंभीर अनिद्रा, तनाव और भय",
          description: "नींद की दवाओं की बिना किसी सुस्ती या आदत के गहरी आरामदायक नींद, बेचैनी और मानसिक अवसाद को दूर भगाने का उपचार।",
          symptoms: ["नींद न आना या रात में बार-बार नींद खुलना", "चिंता, अवसाद एवं याददाश्त खोना (डिमेंशिया)", "अकारण भय लगना या चौंके उठना", "अत्यधिक तनाव, घबराहट या अनियंत्रित मानसिक विकार"],
          homeopathyScope: "शारीरिक ऊर्जा को पुनर्स्थापित कर बिना सुस्ती या आदत के नसों को शांत करता है।",
          therapeuticBenefits: ["रात में गहरी और प्राकृतिक नींद बहाल करना", "स्मरण शक्ति में सुधार लाना व अकारण डर दूर करना", "सकारात्मक मानसिक स्वास्थ्य प्रदान करना"]
        };
      }
      if (item.name.includes("Cardiovascular") || item.name.includes("Heart")) {
        return {
          ...item,
          name: "हृदय रोग एवं रक्तचाप प्रबंधन",
          description: "दिल की मांसपेशियों को मजबूती देना, दिल की घबराहट शांत करना, और जन्मजात हृदय छिद्रों में सहायक गैर-शल्य चिकित्सा पद्धति।",
          symptoms: ["सीढ़ियां चढ़ने या चलने पर दम फूलना", "दिल की तेज धड़कन, घबराहट या कंपन", "हार्ट वाल्व की कमजोरी व शुरुआती दिल की विफलता", "जन्मजात दिल में छेद (ASD/VSD) एवं अनियंत्रित रक्तचाप"],
          homeopathyScope: "हृदय की कार्य क्षमता और रक्त परिसंचरण में सुधार कर मांसपेशियों को पोषण देता है।",
          therapeuticBenefits: ["सांस फूलने व छाती में जकड़न की समस्या दूर करना", "सिस्टोलिक और डायस्टोलिक रक्तचाप को सुरक्षित स्तर पर रखना", "हृदय वाल्वों के कार्य को दुरुस्त कर स्वस्थ रखना"]
        };
      }
      if (item.name.includes("Respiratory") || item.name.includes("Adenoids")) {
        return {
          ...item,
          name: "दमा, एलर्जी और नाक के पॉलिप",
          description: "नाक की बढ़ी हुई मांसपेशियां (पॉलिप), बढ़े हुए टॉन्सिल व साइनस की सड़न को बिना ऑपरेशन पिघलाने का होम्योपैथिक उपचार।",
          symptoms: ["नाक के पॉलिप (मांस बढ़ना) व एडेनोइड की सूजन", "बार-बार छींकें, खर्राटे, पुरानी खांसी व सांस फूलना", "टॉन्सिल की तकलीफ, नाक से खून आना व पुरानी एलर्जी", "मौसम बदलते ही गंभीर जुकाम होना"],
          homeopathyScope: "सांस की नलियों की सूजन और बढ़े हुए पॉलिप को संकुचित करती है।",
          therapeuticBenefits: ["खर्राटों व बंद नाक के कारण रात में सांस लेने की तकलीफ से मुक्ति", "टॉन्सिल के दर्द और सूजन को हमेशा के लिए समाप्त करना", "छींकों को रोककर नाक के पॉलिप को सामान्य आकार में लाना"]
        };
      }
      if (item.name.includes("Male Reproductive") || item.name.includes("Vitality")) {
        return {
          ...item,
          name: "पुरुष स्वास्थ्य एवं शारीरिक कमजोरी",
          description: "पुरुषों की गुप्त व संवेदनशील कमजोरी, थकान, स्वप्नदोष और शिथिलता का अत्यंत गोपनीय और प्रामाणिक परामर्श।",
          symptoms: ["अत्यधिक कमजोरी, थकान व ऊर्जा की तीव्र कमी", "स्वप्नदोष तथा रात में वीर्यपात", "परफॉरमेंस की चिंता एवं मनोवैज्ञानिक तनाव"],
          homeopathyScope: "नसों की ताकत बढ़ाकर आत्मविश्वास और शारीरिक पौरुष शक्ति को पुनः जाग्रत करता है।",
          therapeuticBenefits: ["शारीरिक क्षमता, स्टैमिना और जोश दुबारा स्थापित करना", "स्वप्नदोष दूर कर नींद की गुणवत्ता सुधारना", "बिना किसी साइड इफेक्ट के शारीरिक कमजोरी दूर करना"]
        };
      }
      if (item.name.includes("Neuromuscular") || item.name.includes("Joints")) {
        return {
          ...item,
          name: "जोड़ों का दर्द, लकवा और साइटिका",
          description: "जोड़ों के गंभीर दर्द (गठिया), साइटिका का नस खिंचाव, हड्डियों का घिसना और पैरालिसिस का प्रभावी सुधार उपचार।",
          symptoms: ["गठिया बाई व जोड़ों में तेज दर्द व लाल सूजन", "लकवा तथा ब्रेन स्ट्रोक का पुराना असर", "पार्किसंस, मिर्गी व कंपन", "पैरों की एड़ी का दर्द व नसों की कमजोरी"],
          homeopathyScope: "नसों के दर्द को शांत करता है, जोड़ों की सूजन हटाता है और अंगों में रक्त संचार बहाल करता है।",
          therapeuticBenefits: ["जोड़ों की कड़वाहट और सूजन दूर कर चलने-फिरने में सुधार", "स्ट्रोक व पैरालिसिस के बाद मांसपेशियों को दोबारा गतिशील बनाना", "साइटिका दर्द और एड़ी की असहनीय चुभन का नाश करना"]
        };
      }
    }
    return item;
  };

  const getTranslatedTitle = () => {
    if (lang === 'bn') return "বিশেষায়িত হোমিওপ্যাথি চিকিৎসা সেবা";
    if (lang === 'hi') return "विशेषज्ञता प्राप्त होम्योपैथिक उपचार";
    return "Specialized Homeopathic Treatments";
  };

  const getTranslatedSubtitle = () => {
    if (lang === 'bn') return t.treatmentsSub || "টিউমার, সিস্ট, ক্যান্সার, মেটাবলিক ডিসঅর্ডার, হরমোনজনিত ব্যাঘাত এবং জটিল শিশু রোগের সম্পূর্ণ পার্শ্বপ্রতিক্রিয়াহীন হোমিওপ্যাথি সমাধান।";
    if (lang === 'hi') return t.treatmentsSub || "ट्यूमर, सिस्ट, कैंसर, मेटाबॉलिक विकार, हार्मोनल असंतुलन और जटिल बाल चिकित्सा रोगों के लिए पूरी तरह से कोमल और दीर्घकालिक होम्योपैथिक समाधान।";
    return "Providing compassionate, gentle, and highly targeted restorative therapies for tumors, cysts, cancers, endocrine disturbances, and hard-to-treat metabolic diseases.";
  };

  const getTranslatedSearchPlaceholder = () => {
    if (lang === 'bn') return "চিকিৎসা অনুসন্ধান করুন (যেমন: ব্রেন টিউমার, ওভারিয়ান সিস্ট, পলিপ)...";
    if (lang === 'hi') return "उपचार खोजें (जैसे: ब्रेन ट्यूमर, ओवेरियन सिस्ट, पॉलीप)...";
    return "Search treatments (e.g. Brain tumor, PCOS, Fibroid...)";
  };

  const getTranslatedCategoryBadge = (category: SpecialtyCategory) => {
    if (lang === 'bn') {
      switch (category) {
        case 'tumor': return 'টিউমার ও ফাইব্রয়েড';
        case 'cyst': return 'সিস্টিক অ্যানোমালিস';
        case 'cancer': return 'ক্রনিক ও অনকো সাপোর্ট';
        case 'common_pcos': return 'হরমোনাল ও PCOS';
        case 'pediatric': return 'শিশুরোগ বিভাগ';
        case 'kidney': return 'রেনাল ও ইউরোলজি';
        case 'eye': return 'চোখের যত্ন';
        case 'mental': return 'মানসিক সুস্থতা';
        case 'heart': return 'হৃদরোগ ও কার্ডিয়াক';
        case 'respiratory': return 'নাক, কান, গলা ও ফুসফুস';
        case 'male': return 'পুরুষদের স্বাস্থ্য';
        case 'neuromuscular': return 'বাত-ব্যথা ও প্যারালাইসিস';
        default: return 'বিশেষত্ব';
      }
    } else if (lang === 'hi') {
      switch (category) {
        case 'tumor': return 'ट्यूमर और फाइब्रॉएड';
        case 'cyst': return 'सिस्टिक असामान्यताएं';
        case 'cancer': return 'क्रॉनिक और ऑनको सहायता';
        case 'common_pcos': return 'हार्मोनल / पीसीओएस';
        case 'pediatric': return 'शिशु रोग / बाल देखभाल';
        case 'kidney': return 'गुर्दा और यूरोलॉजी';
        case 'eye': return 'नेत्र रोग देखभाल';
        case 'mental': return 'मानसिक स्वास्थ्य चिकित्सा';
        case 'heart': return 'हार्ट और कार्डियोलॉजी';
        case 'respiratory': return 'ईएनटी और फेफड़े';
        case 'male': return 'पुरुष रोग चिकित्सा';
        case 'neuromuscular': return 'जोड़ और साइटिका रोग';
        default: return 'विशेषता';
      }
    }
    return getCategoryLabel(category);
  };

  const filteredTreatments = TREATMENTS.map(t => getTranslatedTreatment(t)).filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.symptoms.some(sym => sym.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryBadgeClass = (category: SpecialtyCategory) => {
    switch (category) {
      case 'tumor':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'cyst':
        return 'bg-cyan-50 text-cyan-800 border-cyan-200';
      case 'cancer':
        return 'bg-rose-50 text-rose-800 border-rose-250';
      case 'common_pcos':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'pediatric':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200';
      case 'kidney':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'eye':
        return 'bg-teal-50 text-teal-850 border-teal-200';
      case 'mental':
        return 'bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200';
      case 'heart':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'respiratory':
        return 'bg-orange-50 text-orange-850 border-orange-200';
      case 'male':
        return 'bg-emerald-50 text-emerald-850 border-emerald-250';
      case 'neuromuscular':
        return 'bg-stone-50 text-stone-850 border-stone-250';
      default:
        return 'bg-slate-50 text-slate-850 border-slate-200';
    }
  };

  const startInquiry = (treatment: TreatmentSpecialty, method: 'whatsapp' | 'call') => {
    const textMessage = encodeURIComponent(`Hello Dr. Parvez Ahmed Khan Clinic, I want to inquire about Homeopathic medical treatment for: "${treatment.name}". Please guide me with appointment slot options and diagnosis suggestion.`);
    const callNum = treatment.customHelpline || DOCTOR_INFO.leadHelplineCall;
    const wpNum = treatment.customWhatsapp || DOCTOR_INFO.leadHelplineWhatsapp;
    if (method === 'whatsapp') {
      window.open(`https://wa.me/91${wpNum}?text=${textMessage}`, '_blank');
    } else {
      window.open(`tel:${callNum}`, '_self');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="specialized-treatments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-50 border border-medical-200 text-medical-800 text-xs font-semibold">
            <Activity className="w-3.5 h-3.5" />
            <span>
              {lang === 'bn' ? 'চিকিৎসা বিশেষত্ব ও সমাধান' : lang === 'hi' ? 'चिकित्सीय उत्कृष्टता और समाधान' : 'Pathological Excellence & Solutions'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {getTranslatedTitle()}
          </h2>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
            {getTranslatedSubtitle()}
          </p>
        </div>

        {/* Direct Contact Notice */}
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl bg-white border-l-4 border-medical-500 shadow-3xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold font-display text-slate-900">
              {lang === 'bn' ? 'টিউমার ও সিস্ট হটলাইন সার্ভিস' : lang === 'hi' ? 'ट्यूमर और सिस्ट तुरंत हॉटलाइन' : 'Tumor & Cyst Hotline Service'}
            </h4>
            <p className="text-xs text-slate-550 leading-relaxed font-sans">
              {lang === 'bn' 
                ? 'যেকোনো ধরণের টিউমার, সিস্ট বা ক্রনিক রোগের অগ্রাধিকার পরামর্শের জন্য আমাদের দায়িত্বপ্রাপ্ত হেল্পডেস্কে সরাসরি কল অথবা হোয়াটসঅ্যাপ করুন।' 
                : lang === 'hi' 
                  ? 'किसी भी प्रकार के ट्यूमोर, सिस्ट या क्रॉनिक समस्याओं के प्राथमिकता परामर्श के लिए हमारी हॉटलाइन पर सीधे संपर्क करें।' 
                  : 'For direct priority consult on benign or malignant lumps, call or WhatsApp our designated helpdesk lines directly.'}
            </p>
          </div>
          <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0">
            <a 
              href={`tel:${DOCTOR_INFO.leadHelplineCall}`}
              className="flex-1 md:flex-none py-2 px-3.5 rounded-lg bg-medical-50 hover:bg-medical-100 border border-medical-200 text-xs sm:text-sm font-semibold text-medical-805 text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" /> {lang === 'bn' ? 'কল করুন' : lang === 'hi' ? 'कॉल करें' : 'Call'}: {DOCTOR_INFO.leadHelplineCall}
            </a>
            <a 
              href={`https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}?text=Inquiry%20regarding%20tumor%2Fcyct%2Fcancer%20support%20treatment`}
              target="_blank"
              className="flex-1 md:flex-none py-2 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs sm:text-sm font-semibold text-white text-center flex items-center justify-center gap-1.5"
            >
              {lang === 'bn' ? 'হোয়াটসঅ্যাপ সাপোর্ট' : lang === 'hi' ? 'व्हाट्सएप सपोर्ट' : 'WhatsApp Support'}
            </a>
          </div>
        </div>

        {/* Search and Filters Segment */}
        <div className="mb-10 space-y-6">
          <div className="max-w-md mx-auto relative shadow-2xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder={getTranslatedSearchPlaceholder()}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-450 focus:outline-hidden focus:border-medical-500 focus:ring-2 focus:ring-medical-100 transition-all font-medium"
            />
          </div>

          {/* Filtering Categories Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 overflow-x-auto pb-2 max-w-4xl mx-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-medical-700 text-white shadow-xs border border-medical-805'
                    : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Treatment Grid */}
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((treatment) => (
              <div 
                key={treatment.name} 
                className="bg-white rounded-2xl border border-slate-150 p-6 flex flex-col justify-between hover:shadow-lg hover:border-medical-200/60 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <div className="space-y-4">
                  
                  {/* Category Pill */}
                  <div className="flex justify-between items-center">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${getCategoryBadgeClass(treatment.category)}`}>
                      {getTranslatedCategoryBadge(treatment.category)}
                    </span>
                    <Heart className="w-4 h-4 text-slate-300 group-hover:text-rose-500 transition-colors" />
                  </div>

                  {/* Specialty Title */}
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-medical-800 transition-colors">
                    {treatment.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {treatment.description}
                  </p>

                  <div className="border-t border-slate-100 pt-3">
                    <div className="text-[11px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                      {lang === 'bn' ? 'চিকিৎসা করা প্রধান লক্ষণসমূহ' : lang === 'hi' ? 'इलाज किए जाने वाले मुख्य लक्षण' : 'Primary Symptoms Handled'}
                    </div>
                    <ul className="space-y-1">
                      {treatment.symptoms.slice(0, 3).map((sym, idx) => (
                        <li key={idx} className="text-xs text-slate-605 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-medical-400"></span>
                          <span className="truncate">{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* View Details Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedTreatment(treatment);
                    }}
                    className="text-xs font-bold text-medical-750 hover:text-medical-900 flex items-center gap-1 transition-colors cursor-pointer group/btn"
                  >
                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span>
                      {lang === 'bn' ? 'চিকিৎসা বিজ্ঞান ও কার্যকারিতা' : lang === 'hi' ? 'चिकित्सकीय विश्लेषण' : 'View Scientific Scope'}
                    </span>
                  </button>
                  <button
                    onClick={() => startInquiry(treatment, 'whatsapp')}
                    className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg flex items-center gap-1 transition-all"
                  >
                    {lang === 'bn' ? 'ইনস্ট্যান্ট চেক' : lang === 'hi' ? 'त्वरित जांच' : 'Quick Check'}
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-150 max-w-xl mx-auto shadow-2xs">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 font-display">
              {lang === 'bn' ? 'কোনো চিকিৎসা খুঁজে পাওয়া যায়নি' : lang === 'hi' ? 'कोई उपचार विशेषता नहीं मिली' : 'No therapeutic specialty found'}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xs mx-auto">
              {lang === 'bn' 
                ? 'অনুগ্রহ করে নতুন সার্চ কিওয়ার্ড ব্যবহার করুন। আপনি tumor, cyst, PCOS বা fibroid লিখে সার্চ করতে পারেন।' 
                : lang === 'hi' 
                  ? 'कृपया कीवर्ड बदलकर पुनः प्रयास करें। आप tumor, cyst, PCOS अथवा fibroid ढूंढ सकते हैं।' 
                  : 'Please refine your search parameters. You may search for \'tumor\', \'cyst\', \'PCOS\', \'lipoma\', or \'fibroid\'.'}
            </p>
          </div>
        )}

      </div>

      {/* Specialty Diagnostic Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-55 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto" id="treatment-detail-modal">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-100 shadow-2xl overflow-hidden animate-slide-up my-auto">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-medical-800 to-medical-950 p-6 md:p-8 text-white relative">
              <button 
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-6 right-6 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors pointer-events-auto cursor-pointer"
                aria-label="Close details"
              >
                ✕
              </button>
              
              <div className="space-y-2 text-left">
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-medical-200 bg-white/10 border border-white/20`}>
                  {getTranslatedCategoryBadge(selectedTreatment.category)}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                  {selectedTreatment.name}
                </h3>
                <p className="text-medical-200 text-xs sm:text-sm font-light">
                  {lang === 'bn' 
                    ? `ডাঃ পারভেজ আহমেদ খান দ্বারা পরিচালিত বিশেষায়িত হোমিওপ্যাথি প্রোটোকল` 
                    : lang === 'hi' 
                      ? `डॉ. परवेज अहमद खान द्वारा निर्देशित विशेष होम्योपैथी प्रोटोकॉल` 
                      : `Specialist homeopathy protocol administered by ${DOCTOR_INFO.name}`}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-left">
              
              {/* Introduction & Scope */}
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider font-display">
                  {lang === 'bn' ? 'চিকিৎসা বিবরণ' : lang === 'hi' ? 'चिकित्सीय विवरण' : 'Clinical Description'}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">{selectedTreatment.description}</p>
              </div>

              {/* Research Scope */}
              <div className="p-4 rounded-xl bg-medical-50/50 border border-medical-200 space-y-1">
                <h4 className="text-xs font-bold text-medical-800 uppercase tracking-widest font-mono">
                  {lang === 'bn' ? 'হোমিওপ্যাথিক মূল নীতি' : lang === 'hi' ? 'होम्योपैथिक मूल सिद्धांत' : 'Therapeutic Homeopathic Principle'}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed italic">{selectedTreatment.homeopathyScope}</p>
              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Side A: Symptoms */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {lang === 'bn' ? 'সাধারণ ক্লিনিকাল লক্ষণসমূহ' : lang === 'hi' ? 'प्रमुख नैदानिक लक्षण सूची' : 'Common Clinical Presentations'}
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedTreatment.symptoms.map((sym, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Side B: Organic Benefits */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {lang === 'bn' ? 'প্রত্যাশিত চিকিৎসাগত পরিবর্তন' : lang === 'hi' ? 'प्रत्याशित स्वास्थ्य लाभ' : 'Anticipated Therapeutic Milestones'}
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedTreatment.therapeuticBenefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              
              {/* Note */}
              <div className="text-[11px] text-slate-400 bg-slate-50 p-3 rounded-lg flex items-start gap-2 border border-slate-100">
                <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0" />
                <span>
                  {lang === 'bn' 
                    ? 'নিয়ন্ত্রক দাবিত্যাগ: ফলাফল রোগীর ক্লিনিকাল নিয়মকানুন মেনে চলা, সুষম ডায়েট এবং ব্যক্তিগত কনস্টিটিউশনের ওপর নির্ভর করে।' 
                    : lang === 'hi' 
                      ? 'अस्वीकरण: उपचार का परिणाम रोगी के नियमों के पालन, आहार और व्यक्तिगत होम्योपैथिक लक्षणों पर निर्भर करता है।' 
                      : 'Regulatory disclaimer: These outcomes depend on clinical compliance, diet, and dynamic homeopathic constitution checks. Always consult prior to changing ongoing oncological prescription protocols.'}
                </span>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
              <button
                onClick={() => setSelectedTreatment(null)}
                className="py-2.5 px-4 text-sm font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer text-center sm:order-first"
              >
                {lang === 'bn' ? 'উইন্ডো বন্ধ করুন' : lang === 'hi' ? 'विंडो बंद करें' : 'Close Window'}
              </button>
              
              <div className="flex gap-2 sm:order-last">
                <button
                  onClick={() => startInquiry(selectedTreatment, 'call')}
                  className="flex-1 sm:flex-none py-2.5 px-4 bg-white hover:bg-slate-150 border border-slate-200 text-xs sm:text-sm font-bold text-slate-850 rounded-xl inline-flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-medical-600" /> {lang === 'bn' ? 'কল করুন' : lang === 'hi' ? 'कॉल करें' : 'Call Helpdesk'}
                </button>
                <button
                  onClick={() => startInquiry(selectedTreatment, 'whatsapp')}
                  className="flex-1 sm:flex-none py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {lang === 'bn' ? 'হোয়াটসঅ্যাপ মেসেজ' : lang === 'hi' ? 'व्हाट्सएप पूछताछ' : 'Inquire via WhatsApp'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
