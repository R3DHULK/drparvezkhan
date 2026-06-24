/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareCode, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award, HeartHandshake, ShieldCheck, Trophy, Eye, X } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';
import { Language } from '../translations';
import visionaryAwardImg from '../assets/images/homeopathy_visionary_award_2025_1782282021399.jpg';

interface TestimonialsProps {
  lang?: Language;
}

export default function Testimonials({ lang = 'en' }: TestimonialsProps) {
  const [filter, setFilter] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showAwardModal, setShowAwardModal] = useState<boolean>(false);

  // Dynamic grouping based on filter
  const filteredTestimonials = TESTIMONIALS.filter(item => {
    const condition = item.condition.toLowerCase();
    if (filter === 'all') return true;
    if (filter === 'tumor') {
      return condition.includes('tumor') || condition.includes('fibroid') || condition.includes('adenoma') || condition.includes('cyst') || condition.includes('pcos') || condition.includes('polyp') || condition.includes('adenoid');
    }
    if (filter === 'pediatric') {
      return condition.includes('pediatric') || condition.includes('bedwetting') || condition.includes('asthma');
    }
    if (filter === 'renal') {
      return condition.includes('renal') || condition.includes('calculi') || condition.includes('stone') || condition.includes('thyroid') || condition.includes('uric') || condition.includes('glandular');
    }
    if (filter === 'chronic') {
      return !condition.includes('tumor') && !condition.includes('fibroid') && !condition.includes('adenoma') && !condition.includes('cyst') && !condition.includes('pcos') && !condition.includes('polyp') && !condition.includes('adenoid') && !condition.includes('pediatric') && !condition.includes('bedwetting') && !condition.includes('asthma') && !condition.includes('renal') && !condition.includes('calculi') && !condition.includes('stone') && !condition.includes('thyroid') && !condition.includes('uric') && !condition.includes('glandular');
    }
    return true;
  });

  // Clamp active index
  const safeIndex = activeIndex >= filteredTestimonials.length ? 0 : activeIndex;
  const currentTestimonial = filteredTestimonials[safeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const awardTranslations = {
    badge: {
      en: "Prestigious Recognition",
      bn: "সম্মানজনক জাতীয় স্বীকৃতি",
      hi: "प्रतिष्ठित राष्ट्रीय सम्मान"
    },
    title: {
      en: "Homeopathy Visionary Award 2025",
      bn: "হোমিওপ্যাথি ভিশনারি অ্যাওয়ার্ড ২০২৫",
      hi: "होम्योपैथी विजनरी अवार्ड २०२५"
    },
    subtitle: {
      en: "Celebrating clinical excellence, medical dedication, and pioneering homeopathy healthcare achievements.",
      bn: "ক্লিনিকাল উৎকর্ষতা, চিকিৎসায় আত্মত্যাগ এবং পথপ্রদর্শক হোমিওপ্যাথিক স্বাস্থ্যসেবার সাফল্য উদযাপন।",
      hi: "नैदानिक ​​उत्कृष्टता, चिकित्सा समर्पण और अग्रणी होम्योपैथी स्वास्थ्य सेवा उपलब्धियों का जश्न।"
    },
    awardName: {
      en: "Honored with the Homeopathy Visionary Award 2025",
      bn: "হোমিওপ্যাথি ভিশনারি অ্যাওয়ার্ড ২০২৫-এ ভূষিত",
      hi: "होम्योपैथी विजनरी अवार्ड २०२५ से सम्मानित"
    },
    presentedBy: {
      en: "Presented by B. Jain Pharmaceuticals for Exemplary Service",
      bn: "অসামান্য সেবামূলক কাজের জন্য বি. জৈন ফার্মাসিউটিক্যালস কর্তৃক উপস্থাপিত",
      hi: "अनुकरणीय सेवा के लिए बी. जैन फार्मास्यूटिकल्स द्वारा प्रस्तुत"
    },
    desc: {
      en: "Dr. Parvez Ahmed Khan was honored with the Homeopathy Visionary Award 2025 by B. Jain Pharmaceuticals, one of the world's most renowned and trusted organizations in homeopathy. This highly prestigious award is a testament to his exemplary dedication, clinical excellence, and over two decades of selfless service in restoring health and bringing relief to thousands of patients safely and without invasive surgical procedures.",
      bn: "ডাঃ পারভেজ আহমেদ খানকে হোমিওপ্যাথির অন্যতম বিশ্বখ্যাত ও বিশ্বস্ত প্রতিষ্ঠান 'বি. জৈন ফার্মাসিউটিক্যালস' কর্তৃক সম্মানজনক 'হোমিওপ্যাথি ভিশনারি অ্যাওয়ার্ড ২০২৫' প্রদান করা হয়। এই মর্যাদাপূর্ণ পুরস্কারটি তার অনন্য নিষ্ঠা, ক্লিনিকাল শ্রেষ্ঠত্ব এবং গত দুই দশকেরও বেশি সময় ধরে হাজার হাজার রোগীকে নিরাপদে এবং অস্ত্রোপচার ছাড়াই আরোগ্য লাভে সহায়তা করার দীর্ঘ সেবামূলক প্রচেষ্টার ফসল।",
      hi: "डॉ. परवेज अहमद खान को होम्योपैथी में दुनिया के सबसे प्रसिद्ध और भरोसेमंद संगठनों में से एक, बी. जैन फार्मास्यूटिकल्स द्वारा 'होम्योपैथी विजनरी अवार्ड २०२५' से सम्मानित किया गया है। यह अत्यधिक प्रतिष्ठित पुरस्कार उनके अनुकरणीय समर्पण, नैदानिक ​​उत्कृष्टता और दो दशकों से अधिक समय से बिना किसी सर्जरी के सुरक्षित रूप से हजारों मरीजों को राहत पहुंचाने की निस्वार्थ सेवा का प्रमाण है।"
    },
    highlights: {
      en: [
        "Exemplary Clinical Service",
        "22+ Years of Dedication",
        "Pioneer in Non-Surgical Care",
        "Trusted Worldwide by Patients"
      ],
      bn: [
        "অসামান্য ক্লিনিকাল সেবা",
        "২২+ বছরেরও বেশি আত্মত্যাগ",
        "বিনা অস্ত্রোপচারে নিরাময়ের পথপ্রদর্শক",
        "বিশ্বব্যাপী রোগীদের গভীর আস্থা"
      ],
      hi: [
        "अनुकरणीय नैदानिक ​​सेवा",
        "२२+ वर्षों का चिकित्सा समर्पण",
        "बिना सर्जरी इलाज के अग्रणी",
        "दुनिया भर के मरीजों का गहरा विश्वास"
      ]
    },
    viewBtn: {
      en: "View Original Award Presentation Poster",
      bn: "মূল পুরস্কারের প্রশংসাপত্র পোস্টার দেখুন",
      hi: "मूल पुरस्कार प्रस्तुति पोस्टर देखें"
    }
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200 overflow-hidden" id="patient-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Trust Badges */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-50 border border-medical-200 text-medical-805 text-xs font-semibold tracking-wider uppercase font-mono">
            <HeartHandshake className="w-3.5 h-3.5 text-medical-600 animate-pulse" />
            <span>Success Stories & Trust</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Our Patients, Their Healing Journeys
          </h2>
          
          <p className="text-slate-500 text-sm sm:text-base font-sans leading-relaxed">
            Real experiences from people who avoided major surgical procedures or successfully managed complex medical pathologies through customized classical homeopathic therapy.
          </p>

          {/* Social Proof Aggregate Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left max-w-2xl mx-auto" id="testimonial-badges">
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-850 font-display">100%</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Verified Reviews</div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-50 text-yellow-500">
                <Star className="w-5 h-5 fill-yellow-500" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-850 font-display">4.9 / 5.0</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Clinic Rating</div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-medical-50 text-medical-600">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-850 font-display">2,500+</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Categories Segment */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="testimonial-filters">
          {[
            { id: 'all', label: 'All Cases' },
            { id: 'tumor', label: 'Tumors & Organic Cysts' },
            { id: 'pediatric', label: 'Pediatrics & Bedwetting' },
            { id: 'renal', label: 'Renal & Glandular' },
            { id: 'chronic', label: 'Chronic & Nerve Pain' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => {
                setFilter(btn.id);
                setActiveIndex(0);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                filter === btn.id
                  ? 'bg-medical-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-medical-600 border border-slate-200'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Carousel Viewport */}
        {filteredTestimonials.length > 0 ? (
          <div className="max-w-4xl mx-auto relative px-4 sm:px-12" id="testimonial-carousel-container">
            
            {/* Sliding Card Container */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden text-left min-h-[320px] flex flex-col justify-between">
              
              {/* Massive Quote Emblem */}
              <div className="absolute right-6 top-6 text-slate-100 -z-0 pointer-events-none">
                <Quote className="w-24 h-24 transform rotate-180 opacity-50" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Condition tags & Rating row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-medical-50 border border-medical-100 text-medical-800 text-xs font-bold uppercase tracking-wider font-mono">
                      {currentTestimonial.condition}
                    </span>
                    {currentTestimonial.isVerified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified Patient
                      </span>
                    )}
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: currentTestimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-500" />
                    ))}
                  </div>
                </div>

                {/* Patient Review Quote body with AnimatePresence */}
                <div className="min-h-[120px] flex items-center">
                  <p className="text-slate-700 text-sm sm:text-lg leading-relaxed font-sans font-medium italic">
                    "{currentTestimonial.text}"
                  </p>
                </div>
              </div>

              {/* Patient Profile footer segment */}
              <div className="border-t border-slate-100 pt-6 mt-6 flex items-center justify-between relative z-10 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-700 font-extrabold font-display">
                    {currentTestimonial.patientName.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-850 text-sm font-display leading-tight">{currentTestimonial.patientName}</h4>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">
                      {currentTestimonial.age ? `${currentTestimonial.age} yrs • ` : ''}{currentTestimonial.location}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 font-medium">
                  Treated: {currentTestimonial.date}
                </div>
              </div>
            </div>

            {/* Carousel navigation controls */}
            {filteredTestimonials.length > 1 && (
              <div className="flex justify-center sm:justify-between items-center mt-6 sm:absolute sm:inset-y-0 sm:left-0 sm:right-0 sm:mt-0 pointer-events-none select-none px-2 gap-4">
                
                <button
                  onClick={handlePrev}
                  className="p-3 bg-white hover:bg-slate-50 border border-slate-250 text-slate-700 hover:text-medical-600 rounded-full shadow-sm active:scale-95 transition-all cursor-pointer pointer-events-auto"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 pointer-events-none" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-3 bg-white hover:bg-slate-50 border border-slate-250 text-slate-700 hover:text-medical-600 rounded-full shadow-sm active:scale-95 transition-all cursor-pointer pointer-events-auto"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 pointer-events-none" />
                </button>

              </div>
            )}

            {/* Pagination Bullet indicators */}
            {filteredTestimonials.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-4">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      safeIndex === idx ? 'w-6 bg-medical-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white border border-slate-150 p-8 rounded-xl text-center text-slate-500 text-sm">
            No testimonials match this specific filter category currently. Check again soon.
          </div>
        )}

        {/* Elegantly Designed Award Segment */}
        <div className="mt-20 pt-16 border-t border-slate-200" id="doctor-visionary-award">
          {/* Sub-section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase font-mono">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>{awardTranslations.badge[lang]}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
              {awardTranslations.title[lang]}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">
              {awardTranslations.subtitle[lang]}
            </p>
          </div>

          {/* Award Details & Image Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            {/* Details Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <h4 className="text-xl sm:text-2xl font-black font-display text-slate-900 leading-tight">
                  {awardTranslations.awardName[lang]}
                </h4>
                <p className="text-sm font-bold text-medical-600 font-mono tracking-wide">
                  {awardTranslations.presentedBy[lang]}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                {awardTranslations.desc[lang]}
              </p>

              {/* Highlights bullet grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {awardTranslations.highlights[lang].map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-amber-50 text-amber-600 mt-0.5 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 font-sans">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* View full screen action button */}
              <div className="pt-4">
                <button
                  onClick={() => setShowAwardModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer border border-amber-400"
                >
                  <Eye className="w-4 h-4 text-slate-950" />
                  <span>{awardTranslations.viewBtn[lang]}</span>
                </button>
              </div>
            </div>

            {/* Image Frame Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={() => setShowAwardModal(true)}
                className="relative aspect-[3/4] max-w-[340px] w-full bg-white rounded-2xl p-3 border border-slate-200 hover:border-amber-400 shadow-md hover:shadow-xl transition-all duration-350 cursor-zoom-in group overflow-hidden"
              >
                {/* Top premium color bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300" />
                
                <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 relative">
                  <img 
                    src={visionaryAwardImg} 
                    alt="Homeopathy Visionary Award 2025 presentation" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Micro overlay with zoom prompt */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 bg-white/95 rounded-full text-amber-800 shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Corner label */}
                  <div className="absolute bottom-2.5 right-2.5 bg-slate-900/80 text-amber-400 px-2 py-0.5 rounded text-[9px] font-mono tracking-widest font-bold uppercase backdrop-blur-xs">
                    Click to Zoom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Award Image Lightbox Modal */}
        {showAwardModal && (
          <div 
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto animate-fade-in"
            onClick={() => setShowAwardModal(false)}
          >
            <div 
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-4 md:p-6 overflow-hidden my-4 border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowAwardModal(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 transition-colors cursor-pointer z-20 shadow-xs"
                title="Close Viewer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header details */}
              <div className="mb-4 pr-10 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-amber-50 border border-amber-200 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase font-mono">
                    {awardTranslations.badge[lang]}
                  </span>
                  <span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded text-[10px] font-bold font-mono">
                    2025
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-slate-950 font-display tracking-tight leading-snug">
                  {awardTranslations.awardName[lang]}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  {awardTranslations.presentedBy[lang]}
                </p>
              </div>

              {/* Full Image Display Frame */}
              <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center max-h-[70vh] relative group cursor-zoom-out shadow-inner">
                <img 
                  src={visionaryAwardImg} 
                  alt="Homeopathy Visionary Award 2025 presentation poster" 
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain max-w-full select-none"
                  onClick={() => setShowAwardModal(false)}
                />
                
                {/* Micro badge indicator */}
                <div className="absolute top-3 left-3 bg-slate-900/80 text-[#f8fafc] px-3 py-1 rounded-full border border-amber-500/30 text-[10px] font-bold tracking-widest uppercase font-mono shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>OFFICIAL VISIONARY AWARD 2025</span>
                </div>
              </div>

              {/* Brief translation / summary description footer */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="text-xs sm:text-sm text-slate-650 max-w-xl font-sans leading-relaxed">
                  <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px] block mb-1">
                    Award Summary & Context
                  </span>
                  {awardTranslations.desc[lang]}
                </div>
                
                <button
                  onClick={() => setShowAwardModal(false)}
                  className="w-full md:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer text-center hover:shadow-md shrink-0"
                >
                  {lang === 'bn' ? 'বন্ধ করুন' : lang === 'hi' ? 'बंद करें' : 'Close Details'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
