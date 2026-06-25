/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Activity, Phone, MessageSquare, ClipboardCheck, ArrowUp, Facebook, Youtube } from 'lucide-react';
import { DOCTOR_INFO, CLINIC_CHAMBERS } from '../data';
import { Language, TRANSLATIONS } from '../translations';
import clinicLogo from '../assets/images/clinic_logo_1782200965943.jpg';

interface FooterProps {
  lang?: Language;
}

export default function Footer({ lang = 'en' }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column A: Doctor Info Summary */}
          <div className="md:col-span-7 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-medical-500 bg-white flex items-center justify-center p-0.5">
                <img 
                  src={clinicLogo} 
                  alt="Dr. Parvez Khan Logo" 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1605684954278-8f1e0181ff3c?auto=format&fit=crop&q=80&w=120";
                  }}
                />
              </div>
              <div>
                <h4 className="text-lg font-bold font-display text-white">{DOCTOR_INFO.name}</h4>
                <p className="text-xs text-slate-400 font-sans">MD (Hom), BHMS (Cal), N.I.H. (Govt. of India)</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">
              {lang === 'bn' ? (
                <span>ডাঃ পারভেজ আহমেদ খান একজন ভারতের শীর্ষস্থানীয় নিবন্ধিত সনাতন হোমিওপ্যাথি বিশেষজ্ঞ চিকিৎসক যার রয়েছে বিগত ২২ বছরেরও বেশি নিখাদ জনসেবা ও সফল চিকিৎসা অভিজ্ঞতা। তিনি জটিল টিউমার, ওভারিয়ান সিস্ট, জরায়ুর ফাইব্রয়েড, লাইপোমা, জটিল শিশু রোগ, কিডনি পাথর ও হরমোনজনিত সমস্যাসমূহের মৃদু সমাধানকারী হোমিওপ্যাথি চিকিৎসা সেবা দিয়ে থাকেন।</span>
              ) : lang === 'hi' ? (
                <span>डॉ. परवेज अहमद खान विगत २२ वर्षों से होम्योपैथी के क्षेत्र में कार्यरत विख्यात व पंजीकृत विशेषज्ञ हैं। वह गंभीर ट्यूमर, सिस्ट, हार्मोनल गड़बड़ी, सांस संबंधित तकलीफों, बच्चों के विकासात्मक लक्षणों तथा जोड़ों के दर्द निवारण का बिना सर्जरी स्थायी समाधान प्रदान करते हैं।</span>
              ) : (
                <span>Dr. Parvez Ahmed Khan is a premier, registered homeopathic specialist with 22 years of expert practice, offering certified non-surgical clinical solutions for organic tumors, hormone/PCOS disorders, chronic blood/viral conditions (Thalassemia, Hepatitis, HIV), tender pediatric setbacks, kidney stones/bedwetting, ophthalmic vein care, mental wellness, cardiovascular support, respiratory polyps/adenoids, and neuromuscular joints wellness.</span>
              )}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.facebook.com/share/17e8P4mVT3/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 text-xs font-bold transition-all border border-slate-700/60 shadow-2xs cursor-pointer"
                title="Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://youtube.com/@drparvezahmedkhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-600 hover:text-white text-slate-300 text-xs font-bold transition-all border border-slate-700/60 shadow-2xs cursor-pointer"
                title="YouTube Channel"
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>
            </div>

            <div className="pt-3 text-xs text-slate-450 border-t border-slate-800 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4 text-medical-400" />
              <span>{t.govtReg} | {t.regNo} <strong>{DOCTOR_INFO.regdNo}</strong></span>
            </div>
          </div>

          {/* Column C: Instant Care Contact Desks */}
          <div className="md:col-span-5 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white font-display font-semibold">
              {lang === 'bn' ? 'জরুরী যোগাযোগ ডেস্ক' : lang === 'hi' ? 'तत्काल सहायता डेस्क' : 'Immediate Assistance'}
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-1 md:gap-3">
              <a
                href={`tel:${DOCTOR_INFO.leadHelplineCall}`}
                className="p-3 bg-slate-800 hover:bg-slate-755 rounded-xl flex items-center gap-3 border border-slate-700/60 transition-colors group"
              >
                <Phone className="w-4 h-4 text-medical-405 group-hover:animate-bounce" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400">{lang === 'bn' ? 'সরাসরি কল করুন' : lang === 'hi' ? 'प्राथमिकता हॉटलाइन' : 'Call Priority Hotline'}</div>
                  <div className="text-xs font-bold text-white font-mono">{DOCTOR_INFO.leadHelplineCall}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}`}
                target="_blank"
                className="p-3 bg-slate-800 hover:bg-slate-755 rounded-xl flex items-center gap-3 border border-slate-700/60 transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-sans">{lang === 'bn' ? 'হোয়াটসঅ্যাপ চ্যাট' : lang === 'hi' ? 'व्हाट्सएप हेल्पडेस्क' : 'WhatsApp Booking Desk'}</div>
                  <div className="text-xs font-bold text-white font-mono">{DOCTOR_INFO.leadHelplineWhatsapp}</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Base Notes & Formal Regulatory Disclaimer */}
        <div className="pt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <div className="flex items-center gap-1.5 font-sans">
              <span>© 2026 Dr. Parvez Ahmed Khan. {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : lang === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All Rights Reserved.'}</span>
            </div>

            <button
              onClick={handleScrollTop}
              className="py-1.5 px-3 bg-slate-800 hover:bg-slate-755 border border-slate-700 text-slate-355 text-[11px] rounded-lg flex items-center gap-1 transition-all cursor-pointer font-bold"
            >
              <span>{lang === 'bn' ? 'উপরে যান' : lang === 'hi' ? 'ऊपर जाएं' : 'Back To Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
