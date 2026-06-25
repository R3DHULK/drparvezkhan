/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Briefcase, GraduationCap, Shield, ChevronRight, Phone, MessageSquare, Facebook, Youtube } from 'lucide-react';
import { DOCTOR_INFO } from '../data';
import { Language, TRANSLATIONS } from '../translations';
import doctorPortrait from '../assets/images/doctor_portrait_1782201107939.jpg';

interface HeroProps {
  onBookClick: () => void;
  onTreatmentsClick: () => void;
  lang: Language;
}

export default function Hero({ onBookClick, onTreatmentsClick, lang }: HeroProps) {
  const t = TRANSLATIONS[lang];
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-medical-50 via-slate-50 to-white py-12 md:py-20 lg:py-28" id="home-hero">
      
      {/* Decorative ambient background curves */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medical-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Clinical Documentary - First/Top and Looping */}
        <div className="block lg:hidden w-full max-w-sm sm:max-w-md mx-auto mb-8 relative">
          <div className="relative w-full bg-white rounded-2xl p-3 border border-slate-150/50 shadow-xl shadow-slate-900/10">
            <div className="flex items-center gap-2 px-1 mb-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                {lang === 'bn' ? 'চিকিৎসা তথ্যচিত্র' : lang === 'hi' ? 'चिकित्सा वीडियो' : 'Clinical Documentary'}
              </span>
            </div>

            <div className="w-full overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center relative aspect-video shadow-inner">
              <video
                src="/video.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full rounded-xl object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-3 px-1 text-center">
              <p className="text-xs font-semibold text-slate-850 leading-snug">
                {lang === 'bn' 
                  ? 'বিনা অপারেশনে সুচিকিৎসার বিবরণ এবং সফল আরোগ্যের সত্য কাহিনী' 
                  : lang === 'hi' 
                  ? 'बिना ऑपरेशन होम्योपैथिक इलाज और सफ़ल आरोग्य की सच्ची कहानियाँ' 
                  : 'Non-surgical Homeopathy Treatment & Patient Recovery Journeys'}
              </p>
              <p className="text-[10px] text-slate-400 mt-1 font-sans italic">
                {lang === 'bn' 
                  ? '“ডাঃ পারভেজ আহমেদ খান স্যারের চেম্বারের অফিশিয়াল ভিডিও উপস্থাপনা।”' 
                  : lang === 'hi' 
                  ? '“डॉ. परवेज अहमद खान के चेंबर का आधिकारिक वीडियो प्रस्तुतीकरण।”' 
                  : '“Official clinical video presentation of Dr. Parvez Khan.”'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Academic Accreditations */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-medical-50 border border-medical-200 text-medical-805 text-xs sm:text-sm font-semibold tracking-wide">
              <Shield className="w-4 h-4 text-medical-600 shrink-0" />
              <span>{t.govtReg} | {t.regNo} {DOCTOR_INFO.regdNo}</span>
            </div>

            {/* Main Catchy Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                {lang === 'bn' ? (
                  <>
                    সঠিক ও গভীর নিরাময় <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 via-medical-800 to-medical-950">
                      লক্ষণভিত্তিক চিকিৎসায়
                    </span>
                  </>
                ) : lang === 'hi' ? (
                  <>
                    समग्र व कोमल उपचार <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 via-medical-800 to-medical-950">
                      प्राकृतिक निरोगिता
                    </span>
                  </>
                ) : (
                  <>
                    Holistic Care & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 via-medical-800 to-medical-950">
                      Natural Healing
                    </span>
                  </>
                )}
              </h1>
              <p className="text-lg sm:text-xl font-display font-semibold text-medical-700">
                {DOCTOR_INFO.name}
              </p>
            </div>

            {/* Academic Tags Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {DOCTOR_INFO.qualifications.map((q, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-100 shadow-3xs hover:border-medical-200 hover:shadow-2xs transition-all duration-200">
                  <div className="p-1.5 rounded-lg bg-medical-50 text-medical-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-850 text-sm font-display">{q.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-tight">{q.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-650 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              {lang === 'bn' ? (
                <span>ডাঃ পারভেজ আহমেদ খান (এম.ডি.) একজন স্বনামধন্য হোমিওপ্যাথি কনসালটেন্ট বিশেষজ্ঞ যার রয়েছে ২২ বছরেরও বেশি দেশব্যাপী সফল চিকিৎসা অভিজ্ঞতা। তিনি জটিল ও অপারেশনের পরামর্শ দেওয়া টিউমার, ওভারিয়ান সিস্ট (PCOS), জরায়ুর ফাইব্রয়েড, লাইপোমা, জটিল মানসিক সমস্যা, থাইরয়েড ও কিডনি পাথরের সফল মৃদু চিকিৎসা সেবা দিয়ে আসছেন।</span>
              ) : lang === 'hi' ? (
                <span>डॉ. परवेज अहमद खान (एम.डी.) भारत के एक सुप्रसिद्ध पंजीकृत होम्योपैथी विशेषज्ञ हैं, जिन्हें चिकित्सा क्षेत्र में २२ से अधिक वर्षों का गहन अनुभव है। वह विशेष रूप से गंभीर ट्यूमर, सिस्ट, हार्मोनल विकार, गुर्दे की पथरी तथा बच्चों के विकासात्मक रोगों का बिना ऑपरेशन सफल होम्योपैथी इलाज प्रदान करते हैं।</span>
              ) : (
                <span>With over <span className="font-bold text-slate-900">{DOCTOR_INFO.experienceShort}</span> of exhaustive academic study and hands-on medical experience, Dr. Parvez Khan is one of West Bengal's most revered classical homeotherapeutic specialists. He offers advanced non-surgical clinical solutions for organic tumors, hormone disorders, chronic blood/viral issues, pediatrics, renal calculi, eye disorders, mental health, cardiorespiratory symptoms, and musculoskeletal pain.</span>
              )}
            </p>

            {/* Special Highlight for Tumors & Cysts & Chronic Specialties */}
            <div className="p-4 rounded-xl bg-medical-50/80 border border-medical-200 max-w-2xl text-left">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                🎯 <strong className="text-medical-900 font-display font-semibold">{lang === 'bn' ? 'চিকিৎসা পরিসীমা:' : lang === 'hi' ? 'चिकित्सा दायरा:' : 'Comprehensive Scope:'}</strong> {lang === 'bn' ? 'টিউমার ও সিস্ট; দীর্ঘস্থায়ী রোগ (থ্যালাসেমিয়া, হেপাটাইটিস, HIV); হরমোন ব্যাধি (থাইরয়েড, ডায়াবেটিস, ইউরিক অ্যাসিড); শিশুরোগ (হাঁপানি, অটিজম, হাম); কিডনি পাথর ও মূত্রনালীর সমস্যা; চোখের ছানি ও শিরা রোগ; হৃদরোগের লক্ষণ এবং নার্ভের বাতের ব্যথা।' : lang === 'hi' ? 'ट्यूमर, सिस्ट व फाइब्रॉएड; दीर्घकालिक रोग (थैलेसीमिया, हेपेटाइटिस, एचआईवी); थायराइड व यूरिक एसिड; बच्चों के रोग (अस्थमा, ऑटिज़्म); पथरी व प्रोस्टेट; नेत्र विकार; एवं गठिया दर्द का स्थायी होम्योपैथी समाधान।' : 'Expert treatment for organic tumors, cysts & fibroids; chronic conditions (Thalassemia, Hepatitis, HIV); hormonal disorders (Thyroid, Diabetes, Uric Acid); pediatric ailments (Asthma, ADHD, Autism, measles); kidney stones, CKD, bedwetting; eye vein diseases & cataracts; psychiatric wellness; congenital heart holes (ASD/VSD) and valve distress; respiratory tonsils/adenoids & polyps; neuromuscular arthritis & sciatica.'}
              </p>
            </div>

            {/* Responsive Hero buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onBookClick}
                className="px-8 py-4 bg-medical-600 cursor-pointer hover:bg-medical-700 text-white font-semibold rounded-xl text-center shadow-lg shadow-medical-950/15 hover:shadow-xl active:scale-98 transition-all flex items-center justify-center gap-2 text-sm"
              >
                {t.ctaBook}
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onTreatmentsClick}
                className="px-6 py-4 bg-white/80 cursor-pointer hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold rounded-xl text-center hover:text-medical-700 transition-all flex items-center justify-center gap-2 text-sm"
              >
                {t.ctaTreatments}
              </button>
            </div>

            {/* Emergency Action Helpline Link */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs sm:text-sm text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{lang === 'bn' ? 'সরাসরি হেল্পলাইন:' : lang === 'hi' ? 'हेल्पलाइन कॉल:' : 'Active Helpline (Call Desk):'} </span>
                <a href={`tel:${DOCTOR_INFO.leadHelplineCall}`} className="font-bold text-slate-900 hover:text-medical-600 transition-colors">
                  {DOCTOR_INFO.leadHelplineCall}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপ ডেস্ক:' : lang === 'hi' ? 'व्हाट्सएप डेस्क:' : 'WhatsApp Desk:'} </span>
                <a 
                  href={`https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-emerald-600 hover:underline inline-flex items-center gap-1"
                >
                  {DOCTOR_INFO.leadHelplineWhatsapp}
                </a>
              </div>
            </div>

            {/* Social Media links inside Hero */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                {lang === 'bn' ? 'সোশ্যাল মিডিয়া:' : lang === 'hi' ? 'सोशल मीडिया:' : 'Follow Dr. Khan:'}
              </span>
              <a
                href="https://www.facebook.com/share/17e8P4mVT3/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer shadow-3xs"
                title="Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-600 hover:text-inherit" />
                <span>Facebook</span>
              </a>
              <a
                href="https://youtube.com/@drparvezahmedkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer shadow-3xs"
                title="YouTube Channel"
              >
                <Youtube className="w-3.5 h-3.5 text-red-500 hover:text-inherit" />
                <span>YouTube</span>
              </a>
            </div>

          </div>

          {/* Right Column: Doctor Portrait & Clinic Video Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 relative">
            
            {/* Visual Frame Decorators */}
            <div className="absolute inset-0 bg-gradient-to-tr from-medical-600/5 to-teal-150/5 rounded-2xl -z-10 transform rotate-1 scale-102" />
            
            <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl p-3 border border-slate-150/50 shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-all duration-500 group">
              
              {/* Doctor portrait image element with custom error loading failover */}
              <div className="w-full h-96 sm:h-[450px] overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center relative">
                <img
                  src={doctorPortrait}
                  alt="Dr. Parvez Ahmed Khan Portrait"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs py-2 px-3 border border-medical-200 rounded-xl shadow-xs text-right">
                  <div className="text-slate-850 text-[10px] sm:text-xs font-semibold leading-none">{lang === 'bn' ? 'অভিজ্ঞতা' : lang === 'hi' ? 'अनुभव' : 'Experience'}</div>
                  <div className="text-lg sm:text-xl font-extrabold font-display text-medical-700">{lang === 'bn' ? '২২+ বছর' : lang === 'hi' ? '२२+ वर्ष' : DOCTOR_INFO.experienceShort}</div>
                </div>

                <div className="absolute bottom-4 left-4 bg-medical-950/90 backdrop-blur-xs px-4 py-2 border border-medical-500/20 rounded-xl shadow-xs text-left">
                  <div className="text-[9px] text-medical-200 font-semibold tracking-wider font-mono">GOVT. REGISTRATION</div>
                  <div className="text-xs font-bold text-white tracking-wide font-mono">Regd: A25986</div>
                </div>
              </div>

              {/* Subtitle Caption */}
              <div className="mt-4 pb-2 text-center">
                <p className="text-[10px] sm:text-xs font-medium text-slate-500 font-sans italic">
                  {lang === 'bn' ? '“জটিল ও প্যাথলজিক্যাল রোগে কন্সটিটিউশনাল ও মৃদু হোমিওপ্যাথি চিকিৎসার অগ্রণী ব্যক্তিত্ব।”' : lang === 'hi' ? '“असाध्य रोगों में समग्र और सूक्ष्म होम्योपैथी चिकित्सा के जाने-माने विशेषज्ञ।”' : '“A renowned expert practicing holistic homeopathy diagnostics for complex pathologies.”'}
                </p>
                
                {/* Visual statistics row */}
                <div className="grid grid-cols-3 gap-0.5 border-t border-slate-100 mt-4 pt-4">
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-medical-805 font-display">22+</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium font-sans">{lang === 'bn' ? 'বছর অভিজ্ঞতা' : lang === 'hi' ? 'वर्षों का अनुभव' : 'Years Practicing'}</div>
                  </div>
                  <div className="border-x border-slate-100">
                    <div className="text-sm sm:text-base font-extrabold text-medical-805 font-display">7</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium font-sans">{lang === 'bn' ? 'চিকিৎসাকেন্দ্র' : lang === 'hi' ? 'सक्रिय क्लिनिक' : 'Active Chambers'}</div>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-medical-805 font-display">100k+</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium font-sans">{lang === 'bn' ? 'সুস্থ রোগী' : lang === 'hi' ? 'स्वस्थ मरीज' : 'Happy Patients'}</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Video Card */}
            <div className="hidden lg:block relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl p-3 border border-slate-150/50 shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-2 px-1 mb-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                  {lang === 'bn' ? 'চিকিৎসা তথ্যচিত্র' : lang === 'hi' ? 'चिकित्सा वीडियो' : 'Clinical Documentary'}
                </span>
              </div>

              <div className="w-full overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center relative aspect-video shadow-inner">
                <video
                  src="/video.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full rounded-xl object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-3 px-1 text-center">
                <p className="text-xs font-semibold text-slate-850 leading-snug">
                  {lang === 'bn' 
                    ? 'বিনা অপারেশনে সুচিকিৎসার বিবরণ এবং সফল আরোগ্যের সত্য কাহিনী' 
                    : lang === 'hi' 
                    ? 'बिना ऑपरेशन होम्योपैथिक इलाज और सफ़ल आरोग्य की सच्ची कहानियाँ' 
                    : 'Non-surgical Homeopathy Treatment & Patient Recovery Journeys'}
                </p>
                <p className="text-[10px] text-slate-400 mt-1 font-sans italic">
                  {lang === 'bn' 
                    ? '“ডাঃ পারভেজ আহমেদ খান স্যারের চেম্বারের অফিশিয়াল ভিডিও উপস্থাপনা।”' 
                    : lang === 'hi' 
                    ? '“डॉ. परवेज अहमद खान के चेंबर का आधिकारिक वीडियो प्रस्तुतीकरण।”' 
                    : '“Official clinical video presentation of Dr. Parvez Khan.”'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
