/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Credentials from './components/Credentials';
import Certifications from './components/Certifications';
import Treatments from './components/Treatments';
import Chambers from './components/Chambers';
import Appointments from './components/Appointments';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import { CLINIC_CHAMBERS, DOCTOR_INFO } from './data';
import { Calendar, Phone, MessageSquare, AlertCircle, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from './translations';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [preselectedChamberId, setPreselectedChamberId] = useState<string>('');
  const [todayChamber, setTodayChamber] = useState<typeof CLINIC_CHAMBERS[0] | null>(null);
  const [currentDayName, setCurrentDayName] = useState<string>('');
  const [lang, setLang] = useState<Language>(() => {
    try {
      return (localStorage.getItem('clinic_lang') as Language) || 'en';
    } catch {
      return 'en';
    }
  });

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('clinic_lang', newLang);
    } catch (e) {
      console.warn("Storage write failed", e);
    }
  };

  const t = TRANSLATIONS[lang];

  // Determine which chamber is active today
  useEffect(() => {
    const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    setCurrentDayName(dayName);
    
    // Find the first chamber open on this week day
    const matchingChamber = CLINIC_CHAMBERS.find(chamber => chamber.days.includes(dayName));
    if (matchingChamber) {
      setTodayChamber(matchingChamber);
    }
  }, []);


  const handleSelectChamberForBooking = (chamberId: string) => {
    setPreselectedChamberId(chamberId);
    setActiveTab('appointments');
    
    // Scroll smoothly to appointment section
    setTimeout(() => {
      const element = document.getElementById('appointments-desk');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleBookAppointmentGeneral = () => {
    setActiveTab('appointments');
    setTimeout(() => {
      const element = document.getElementById('appointments-desk');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleTreatmentsClick = () => {
    setActiveTab('home');
    setTimeout(() => {
      const element = document.getElementById('specialized-treatments');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-medical-200 selection:text-medical-950 font-sans" id="app-root">
      
      {/* Navbar segment */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onBookClick={handleBookAppointmentGeneral} 
        lang={lang}
        onLangChange={handleLangChange}
      />

      {/* Dynamic consulting schedule assistant (Today Banner) */}
      {todayChamber && (
        <div className="bg-gradient-to-r from-medical-700 to-medical-900 text-white text-xs sm:text-sm py-3 px-4 font-medium text-center shadow-xs flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 border-b border-medical-805" id="live-consult-ticker">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest font-mono">
              {t.todayBanner} ({currentDayName})
            </span>
            <span>
              {lang === 'bn' ? 'ডাঃ খান আজ ' : lang === 'hi' ? 'डॉ. खान आज ' : t.isConsultingAt + ' '}
              <strong className="text-medical-200 font-display font-semibold">{todayChamber.name}</strong>
              {lang === 'bn' ? ' চেম্বার করছেন!' : lang === 'hi' ? ' में परामर्श दे रहे हैं!' : ' ' + t.today}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="hidden md:inline leading-none text-medical-200/50">|</span>
            <span className="font-mono text-medical-100 text-[11px] sm:text-xs bg-black/15 md:bg-transparent px-2.5 py-0.5 md:p-0 rounded font-medium">{todayChamber.daysRaw || todayChamber.timings.split('|')[0]}</span>
            <button 
              onClick={() => handleSelectChamberForBooking(todayChamber.id)}
              className="px-2.5 py-1 bg-white text-medical-800 text-[10px] font-bold rounded-sm hover:bg-medical-50 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs"
            >
              {t.instantTicketBlock}
            </button>
          </div>
        </div>
      )}

      {/* Main body viewport */}
      <main className="grow" id="main-content">
        
        {activeTab === 'home' && (
          <div className="animate-fade-in" id="viewport-home">
            <Hero 
              onBookClick={handleBookAppointmentGeneral} 
              onTreatmentsClick={handleTreatmentsClick} 
              lang={lang}
            />
            
            {/* Quick Overview Bento Grid */}
            <section className="py-12 bg-white border-y border-slate-100" id="experience-highlights">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  <div className="flex gap-4 p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <div className="p-3 bg-medical-50 border border-medical-200 text-medical-700 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="text-left space-y-1">
                      <h4 className="font-bold text-slate-805 font-display text-base">{t.holisticLabel}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        {t.holisticDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <div className="p-3 bg-medical-50 border border-medical-200 text-medical-700 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="text-left space-y-1">
                      <h4 className="font-bold text-slate-805 font-display text-base">{t.expLabel}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        {t.expDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <div className="p-3 bg-medical-50 border border-medical-200 text-medical-700 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="text-left space-y-1">
                      <h4 className="font-bold text-slate-805 font-display text-base">{t.chambersLabel}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        {t.chambersDesc}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Doctor professional credentials & associations */}
            <Credentials lang={lang} />

            {/* All specialized treatments on the Home page */}
            <Treatments lang={lang} />

            {/* Render Chambers directly on Home for high discoverability */}
            <Chambers onSelectChamber={handleSelectChamberForBooking} lang={lang} />

            {/* Doctor university degrees and certifications */}
            <Certifications lang={lang} />

            {/* Premium Interactive Patient Testimonials and trust-building stories */}
            <Testimonials lang={lang} />

            {/* Patient FAQs */}
            <Faq lang={lang} />

            {/* Quick treatments preview callout */}
            <section className="bg-slate-900 text-white py-12 text-center relative px-4" id="home-cta-tumors">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-medical-300 font-mono">
                  {lang === 'bn' ? 'চিকিৎসা বিশেষত্ব ক্ষেত্র' : lang === 'hi' ? 'चिकित्सा विशेषता क्षेत्र' : 'CLINICAL FOCUS AREA'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                  {lang === 'bn' ? 'অপারেশন ছাড়াই সব ধরণের টিউমার ও সিস্টের বিশেষজ্ঞ চিকিৎসাকেন্দ্রে' : lang === 'hi' ? 'बिना ऑपरेशन सभी प्रकार के ट्यूमर और सिस्ट का होम्योपैथिक इलाज' : 'Renowned specialist diagnostics for critical tumors and cysts'}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
                  {lang === 'bn' ? 'আমরা ব্রেন টিউমার, ওভারিয়ান ফাংশনাল পলিসিস্টিক ওভারি (PCOS) সিস্ট, ইউটেরাইন ফাইব্রয়েড, ব্রেস্ট এডেনোমা, লাইপোমা, থাইরয়েড নোডিউল এবং গ্যাংলিয়নের মতো জটিল রোগসমূহের পর্যায়ক্রমিক নিরাময়ের জন্য কাজ করে থাকি।' : lang === 'hi' ? 'हम ब्रेन ट्यूमर, ओवेरियन फंक्शनल पीसीओएस सिस्ट, गर्भाशय फाइब्रॉएड, स्तन एडेनोमा, लिपोमा, थायराइड नोड्यूल, ग्रसनी पॉलीप्स और गैंग्लियन के क्रमिक समाधान के लिए चिकित्सा सहायता प्रदान करते हैं।' : 'We specialize in pathogenetic homeopathy cures that assist in regression and shrinkage of Brain tumors, Ovarian functional PCOS cysts, uterine rubbery fibromas, breast adenomas, lipomas, thyroidal nodules, pharyngeal polyps, and ganglion.'}
                </p>
                <div className="flex items-center justify-center gap-3 pt-3">
                  <button 
                    onClick={handleTreatmentsClick}
                    className="px-5 py-2.5 bg-medical-600 hover:bg-medical-700 text-white border border-medical-700 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    {t.viewAllTreatments}
                  </button>
                  <a 
                    href={`https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}?text=Inquiry%20regarding%20tumor%20support`}
                    target="_blank"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-lg transition-colors"
                  >
                    {t.waConsultant}
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="animate-fade-in" id="viewport-appointments">
            <Appointments 
              preselectedChamberId={preselectedChamberId}
              onClearPreselection={() => setPreselectedChamberId('')}
              lang={lang}
            />
          </div>
        )}

      </main>

      {/* Floating Call & WhatsApp Desk Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end" id="floating-assistant">
        <a
          href={`https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}?text=Hello%20Dr%20Parvez%20Khan%20Clinic%20Advisor%2C%20I%20need%20assistance%20with%20medical%20booking`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:bg-emerald-600 active:scale-95 transition-all duration-150 flex items-center justify-center pointer-events-auto"
          title="WhatsApp Helpdesk"
        >
          <MessageSquare className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white" />
        </a>
        
        <a
          href={`tel:${DOCTOR_INFO.leadHelplineCall}`}
          className="bg-medical-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:bg-medical-700 active:scale-95 transition-all duration-150 flex items-center justify-center pointer-events-auto"
          title="Call Assistant"
        >
          <Phone className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white animate-pulse" />
        </a>
      </div>

      {/* Footer Segment */}
      <Footer lang={lang} />

    </div>
  );
}
