/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Building2, Briefcase, Users, Heart, GraduationCap, ShieldCheck } from 'lucide-react';
import { Language } from '../translations';

interface CredentialsProps {
  lang: Language;
}

export default function Credentials({ lang }: CredentialsProps) {
  // Translations for headings and subheadings
  const sectionTitle = {
    en: "Professional Credentials & Prestigious Affiliations",
    bn: "পেশাগত যোগ্যতা এবং সম্মানজনক অধিভুক্তি",
    hi: "व्यावसायिक योग्यताएँ और प्रतिष्ठित संबद्धताएँ"
  };

  const sectionSubtitle = {
    en: "Dr. Parvez Ahmed Khan's globally recognized memberships, historic clinical experience, and prominent healthcare attachments.",
    bn: "ডাঃ পারভেজ আহমেদ খানের বিশ্বব্যাপী স্বীকৃত সদস্যপদ, দীর্ঘ ক্লিনিকাল অভিজ্ঞতা এবং কলকাতার প্রধান হাসপাতাল সমূহে নিয়মিত চিকিৎসাসেবা কার্যক্রম।",
    hi: "डॉ. परवेज अहमद खान की वैश्विक स्तर पर मान्यता प्राप्त सदस्यताएँ, ऐतिहासिक नैदानिक अनुभव और प्रमुख स्वास्थ्य सेवा संबंध।"
  };

  const categories = {
    memberships: {
      en: "Global Memberships & Accreditations",
      bn: "আন্তর্জাতিক সদস্যপদ ও স্বীকৃতি",
      hi: "अंतर्राष्ट्रीय सदस्यता और मान्यता"
    },
    experience: {
      en: "Clinical Experience & Impact",
      bn: "ক্লিনিকাল অভিজ্ঞতা ও রোগীর সংখ্যা",
      hi: "नैदानिक अनुभव और प्रभाव"
    },
    pastAppointments: {
      en: "Past Public & Hospital Positions",
      bn: "প্রাক্তন পাবলিক ও হাসপাতালের দায়িত্ব",
      hi: "पूर्व सार्वजनिक और अस्पताल के पद"
    },
    attachments: {
      en: "Current Hospital Attachments",
      bn: "বর্তমান হাসপাতালের অধিভুক্তি",
      hi: "वर्तमान अस्पताल संबद्धता"
    }
  };

  // Credentials and affiliations list
  const credentialData = {
    memberships: [
      {
        icon: <Users className="w-5 h-5 text-medical-600" />,
        en: "LIFE MEMBER NIH ALUMNI ASSOCIATION",
        enDetail: "National Institute of Homoeopathy (Govt. of India)",
        bn: "লাইফ মেম্বার, এনআইএইচ (NIH) অ্যালমনাই অ্যাসোসিয়েশন",
        bnDetail: "ন্যাশনাল ইনস্টিটিউট অব হোমিওপ্যাথি (ভারত সরকার)",
        hi: "लाइफ मेंबर, एनआईएच (NIH) एलुमनाई एसोसिएशन",
        hiDetail: "राष्ट्रीय होम्योपैथी संस्थान (भारत सरकार)"
      },
      {
        icon: <Award className="w-5 h-5 text-medical-600" />,
        en: "OVERSEAS MEMBER FACULTY OF HOMOEOPATHY LONDON",
        enDetail: "Faculty of Homoeopathy, London (United Kingdom)",
        bn: "ওভারসিজ মেম্বার, ফ্যাকাল্টি অফ হোমিওপ্যাথি, লন্ডন",
        bnDetail: "ফ্যাকাল্টি অফ হোমিওপ্যাথি, লন্ডন (যুক্তরাজ্য)",
        hi: "ओवरसीज मेंबर, फैकल्टी ऑफ होम्योपैथी, लंदन",
        hiDetail: "फैकल्टी ऑफ होम्योपैथी, लंदन (यूनाइटेड किंगडम)"
      },
      {
        icon: <Award className="w-5 h-5 text-medical-600" />,
        en: "MEMBER LIGA MEDICORUM HOMOEOPATHICA INTERNATIONALIS",
        enDetail: "Liga Medicorum Homoeopathica Internationalis (LMHI, Switzerland)",
        bn: "মেম্বার, লিগা মেডিকোরাম হোমিওপ্যাথি ইন্টারন্যাশনালিজ",
        bnDetail: "লিগা মেডিকোরাম হোমিওপ্যাথি ইন্টারন্যাশনালিজ (LMHI, সুইজারল্যান্ড)",
        hi: "सदस्य, लीगा मेडिकोरम होम्योपैथिका इंटरनेशनलिस्ट",
        hiDetail: "लीगा मेडिकोरम होम्योपैथिका इंटरनेशनलिस्ट (LMHI, स्विट्जरलैंड)"
      }
    ],
    experience: [
      {
        icon: <Heart className="w-5 h-5 text-rose-500 animate-pulse" />,
        en: "22 YEARS CLINICAL EXPERIENCE",
        enDetail: "Successfully treated over 1 Lakh (100,000+) patients in India and abroad.",
        bn: "২২ বছরেরও বেশি ক্লিনিকাল অভিজ্ঞতা",
        bnDetail: "ভারত ও বিদেশের ১ লক্ষেরও বেশি রোগীকে সফলভাবে এবং পার্শ্বপ্রতিক্রিয়াহীনভাবে আরোগ্য দান।",
        hi: "२२ वर्षों का गहन नैदानिक अनुभव",
        hiDetail: "भारत और विदेशों के १ लाख से अधिक रोगियों का सफलतापूर्वक और कोमलता से इलाज।"
      }
    ],
    pastAppointments: [
      {
        icon: <Briefcase className="w-5 h-5 text-medical-600" />,
        en: "EX- CONSULTANT HOMOEOPATHY DOCTOR ISLAMIA MEDICAL INSTITUTE",
        enDetail: "Park Circus, Kolkata",
        bn: "প্রাক্তন কনসালটেন্ট হোমিওপ্যাথি চিকিৎসক, ইসলামিয়া মেডিকেল ইনস্টিটিউট",
        bnDetail: "পার্ক সার্কাস, কলকাতা",
        hi: "पूर्व सलाहकार होम्योपैथी डॉक्टर, इस्लामिया मेडिकल इंस्टीट्यूट",
        hiDetail: "पार्क सर्कस, कोलकाता"
      },
      {
        icon: <Briefcase className="w-5 h-5 text-medical-600" />,
        en: "EX- HOMOEOPATHY MEDICAL OFFICER MAGRAHAT HOSPITAL",
        enDetail: "Government of West Bengal",
        bn: "প্রাক্তন হোমিওপ্যাথি মেডিকেল অফিসার, মগরাহাট হাসপাতাল",
        bnDetail: "পশ্চিমবঙ্গ সরকার",
        hi: "पूर्व होम्योपैथी चिकित्सा अधिकारी, मगराहाट अस्पताल",
        hiDetail: "पश्चिम बंगाल सरकार"
      }
    ],
    attachments: [
      {
        icon: <Building2 className="w-5 h-5 text-medical-600" />,
        en: "ATTACHED TO R.S.V. HOSPITAL, KOLKATA",
        enDetail: "Affiliated Consultant Homeopathic Physician",
        bn: "সংযুক্ত কনসালটেন্ট, আর.এস.ভি. (R.S.V.) হাসপাতাল, কলকাতা",
        bnDetail: "কলকাতা শহরের অন্যতম স্বনামধন্য বেসরকারী মাল্টিস্পেশালিটি হাসপাতাল",
        hi: "संबद्ध सलाहकार, आर.एस.वी. (R.S.V.) अस्पताल, कोलकाता",
        hiDetail: "कोलकाता के प्रतिष्ठित मल्टीस्पेशलिटी अस्पताल में संबद्ध सेवाएँ"
      },
      {
        icon: <Building2 className="w-5 h-5 text-medical-600" />,
        en: "ATTACHED TO APOLLO CLINIC PRINCE ANWAR SHAH ROAD",
        enDetail: "Attached Specialist Consultant Homeopath",
        bn: "সংযুক্ত বিশেষজ্ঞ কনসালটেন্ট, অ্যাপোলো ক্লিনিক",
        bnDetail: "প্রিন্স আনওয়ার শাহ রোড চেম্বার, কলকাতা",
        hi: "संबद्ध विशेषज्ञ सलाहकार, अपोलो क्लिनिक",
        hiDetail: "प्रिंस अनवर शाह रोड क्लिनिक, कोलकाता"
      }
    ]
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50/50 border-y border-slate-150/50 relative overflow-hidden" id="doctor-credentials-section">
      {/* Decorative clean elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-medical-50/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-50/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-50 border border-medical-100 text-medical-805 text-xs font-semibold uppercase tracking-wider font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-medical-600" />
            {lang === 'bn' ? 'স্বীকৃতি ও যোগ্যতা' : lang === 'hi' ? 'मान्यता और योग्यता' : 'Affiliations & Verification'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            {sectionTitle[lang]}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            {sectionSubtitle[lang]}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Experience & Memberships */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* Experience Card */}
            <div className="bg-gradient-to-br from-medical-900 via-medical-950 to-slate-950 text-white rounded-2xl p-6 md:p-8 shadow-xl shadow-medical-950/15 relative overflow-hidden border border-medical-800 flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-40 h-40 bg-medical-600/10 rounded-full blur-2xl" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-medical-400 rounded-full" />
                  <h3 className="text-sm font-bold tracking-widest text-medical-200 uppercase font-mono">
                    {categories.experience[lang]}
                  </h3>
                </div>
                
                {credentialData.experience.map((item, index) => (
                  <div key={index} className="space-y-3 pt-2">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-xl text-white shrink-0 shadow-inner">
                        {item.icon}
                      </div>
                      <div className="space-y-1 text-left">
                        <h4 className="text-lg sm:text-xl font-extrabold font-display text-white tracking-wide uppercase leading-tight">
                          {lang === 'bn' ? item.bn : lang === 'hi' ? item.hi : item.en}
                        </h4>
                        <p className="text-xs sm:text-sm text-medical-100/80 font-sans leading-relaxed">
                          {lang === 'bn' ? item.bnDetail : lang === 'hi' ? item.hiDetail : item.enDetail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 mt-8 pt-6">
                <div className="text-left space-y-0.5">
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-medical-300">22+</div>
                  <div className="text-[10px] sm:text-xs text-medical-100/60 uppercase tracking-wider font-semibold">
                    {lang === 'bn' ? 'চিকিৎসা বছর' : lang === 'hi' ? 'चिकित्सा वर्ष' : 'Years Active'}
                  </div>
                </div>
                <div className="text-left space-y-0.5 border-l border-white/10 pl-4">
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-400">1,00,000+</div>
                  <div className="text-[10px] sm:text-xs text-medical-100/60 uppercase tracking-wider font-semibold">
                    {lang === 'bn' ? 'সুস্থ রোগী' : lang === 'hi' ? 'स्वस्थ मरीज' : 'Patients Treated'}
                  </div>
                </div>
              </div>
            </div>

            {/* Current Hospital Attachments Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-150/60 shadow-md shadow-slate-900/5 hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-medical-600 rounded-full" />
                  <h3 className="text-xs font-extrabold tracking-widest text-slate-700 uppercase font-mono">
                    {categories.attachments[lang]}
                  </h3>
                </div>

                <div className="space-y-4 divide-y divide-slate-100 pt-1">
                  {credentialData.attachments.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pt-4 first:pt-0">
                      <div className="p-2.5 bg-medical-50 rounded-xl text-medical-600 shrink-0 border border-medical-100">
                        {item.icon}
                      </div>
                      <div className="space-y-0.5 text-left flex-1">
                        <h4 className="text-xs sm:text-sm font-bold font-display text-slate-900 leading-tight">
                          {lang === 'bn' ? item.bn : lang === 'hi' ? item.hi : item.en}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-sans leading-relaxed">
                          {lang === 'bn' ? item.bnDetail : lang === 'hi' ? item.hiDetail : item.enDetail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Global Memberships & Past Roles */}
          <div className="space-y-8 flex flex-col justify-between">
            
            {/* Global Memberships Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-150/60 shadow-md shadow-slate-900/5 hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-medical-600 rounded-full" />
                  <h3 className="text-xs font-extrabold tracking-widest text-slate-700 uppercase font-mono">
                    {categories.memberships[lang]}
                  </h3>
                </div>

                <div className="space-y-4 divide-y divide-slate-100 pt-1">
                  {credentialData.memberships.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pt-4 first:pt-0">
                      <div className="p-2.5 bg-teal-50 rounded-xl text-teal-600 shrink-0 border border-teal-100">
                        {item.icon}
                      </div>
                      <div className="space-y-0.5 text-left flex-1">
                        <h4 className="text-xs sm:text-sm font-bold font-display text-slate-900 leading-tight uppercase">
                          {lang === 'bn' ? item.bn : lang === 'hi' ? item.hi : item.en}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-sans leading-relaxed">
                          {lang === 'bn' ? item.bnDetail : lang === 'hi' ? item.hiDetail : item.enDetail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Past Public & Hospital Positions Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-150/60 shadow-md shadow-slate-900/5 hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-slate-400 rounded-full" />
                  <h3 className="text-xs font-extrabold tracking-widest text-slate-700 uppercase font-mono">
                    {categories.pastAppointments[lang]}
                  </h3>
                </div>

                <div className="space-y-4 divide-y divide-slate-100 pt-1">
                  {credentialData.pastAppointments.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pt-4 first:pt-0">
                      <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 shrink-0 border border-slate-200">
                        {item.icon}
                      </div>
                      <div className="space-y-0.5 text-left flex-1">
                        <h4 className="text-xs sm:text-sm font-bold font-display text-slate-800 leading-tight uppercase">
                          {lang === 'bn' ? item.bn : lang === 'hi' ? item.hi : item.en}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-sans leading-relaxed">
                          {lang === 'bn' ? item.bnDetail : lang === 'hi' ? item.hiDetail : item.enDetail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
