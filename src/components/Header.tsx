/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, Heart, ShieldCheck, Globe } from 'lucide-react';
import { DOCTOR_INFO } from '../data';
import { Language, TRANSLATIONS } from '../translations';
import clinicLogo from '../assets/images/clinic_logo_1782200965943.jpg';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onBookClick: () => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export default function Header({ activeTab, setActiveTab, onBookClick, lang, onLangChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('home');
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'home', label: t.home, selector: '#app-root' },
    { id: 'treatments', label: t.specialties, selector: '#specialized-treatments' },
    { id: 'chambers', label: t.chambers, selector: '#chambers-and-timings' },
    { id: 'faq', label: t.faq, selector: '#patient-faq' }
  ];


  const handleNavClick = (id: string, selector?: string) => {
    setActiveSection(id);
    setActiveTab('home');
    setIsOpen(false);
    if (selector) {
      setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-medical-100 shadow-xs" id="main-header">
      {/* Top Banner with Registration Banner */}
      <div className="bg-medical-900 text-blue-100 text-xs py-2 px-4 flex flex-wrap justify-between items-center" id="reg-banner">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <ShieldCheck className="w-4 h-4 text-medical-200" />
          <span>{t.govtReg} | {t.regNo} <strong>{DOCTOR_INFO.regdNo}</strong></span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-medical-200 animate-pulse" />
            {t.helpline}: <a href={`tel:${DOCTOR_INFO.leadHelplineCall}`} className="hover:underline font-semibold text-white ml-1">{DOCTOR_INFO.leadHelplineCall}</a>
          </span>
          <span className="text-blue-300">|</span>
          <span>{lang === 'bn' ? '২২ বছরের কাজের ধন্য অভিজ্ঞতা' : lang === 'hi' ? '२२ वर्षों का अनुभव' : t.experienceYears}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Frame */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#" onClick={() => handleNavClick('home')} className="flex items-center gap-2 cursor-pointer group">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-medical-200 bg-medical-50 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                <img 
                  src={clinicLogo} 
                  alt="Dr. Parvez Ahmed Khan Logo" 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1605684954278-8f1e0181ff3c?auto=format&fit=crop&q=80&w=120";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="text-sm sm:text-lg font-bold font-display text-medical-900 leading-tight tracking-tight group-hover:text-medical-700 transition-colors">
                  {DOCTOR_INFO.name}
                </div>
                <div className="text-[9px] sm:text-xs text-slate-500 font-medium font-sans">
                  MD (Hom), BHMS (Cal), N.I.H. Govt. India
                </div>
              </div>
            </a>
          </div>

          {/* Persistent Action Group on the right (All screen widths) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector Pill */}
            <div className="hidden lg:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200" id="lang-switcher">
              <button
                onClick={() => onLangChange('en')}
                className={`px-1.5 sm:px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer ${lang === 'en' ? 'bg-white text-medical-805 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => onLangChange('bn')}
                className={`px-1.5 sm:px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer ${lang === 'bn' ? 'bg-white text-medical-805 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                title="বাংলা"
              >
                বাংলা
              </button>
              <button
                onClick={() => onLangChange('hi')}
                className={`px-1.5 sm:px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer ${lang === 'hi' ? 'bg-white text-medical-805 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                title="हिंदी"
              >
                हिंदी
              </button>
            </div>

            {/* Appointment Button (Desktop Only) */}
            <button
              onClick={onBookClick}
              className="hidden lg:flex bg-medical-600 hover:bg-medical-700 active:scale-98 text-white px-3.5 py-2 rounded-xl font-semibold text-xs sm:text-sm items-center gap-2 transition-all duration-150 shadow-sm shadow-medical-900/10 cursor-pointer animate-pulse-subtle"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>{t.bookAppointment}</span>
            </button>

            {/* Persistent Hamburger Toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 border border-slate-200/60 transition-all active:scale-95 cursor-pointer flex items-center justify-center bg-slate-50/50"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4 h-4 sm:w-5 h-5 text-medical-850" /> : <Menu className="w-4 h-4 sm:w-5 h-5 text-slate-700" />}
            </button>
          </div>

        </div>
      </div>

      {/* Unified Persistent Hamburger Slide-down Menu for All Screen Sizes */}
      {isOpen && (
        <div className="bg-white border-t border-slate-100 animate-slide-down shadow-lg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Left/Main Side: Fast tab selectors */}
              <div className="md:col-span-3">
                {/* Mobile view dedicated Book Appointment, hidden on desktop */}
                <div className="block lg:hidden mb-4">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onBookClick();
                    }}
                    className="w-full bg-medical-600 hover:bg-medical-700 active:scale-98 text-white px-4 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm shadow-medical-900/10 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.bookAppointment}</span>
                  </button>
                  <div className="border-b border-slate-100 my-4"></div>
                </div>

                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-2">
                  {lang === 'bn' ? 'মেনু লিঙ্ক' : lang === 'hi' ? 'नेविगेशन लिंक' : 'Navigation Links'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id, item.selector)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                        activeTab === 'home' && activeSection === item.id
                          ? 'bg-medical-600 text-white border-medical-600 shadow-xs'
                          : 'text-slate-700 bg-slate-50/50 hover:bg-slate-50 hover:text-slate-900 border-slate-105'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side: Fast Helper Connect Desk */}
              <div className="pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-6 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">{t.immediateHelpdesk}</span>
                  <span className="text-[9px] font-bold text-medical-850 bg-medical-50 border border-medical-100 px-1.5 py-0.5 rounded-sm">{t.regNo} {DOCTOR_INFO.regdNo}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${DOCTOR_INFO.leadHelplineCall}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 border border-medical-200 rounded-xl text-xs font-semibold text-medical-700 hover:bg-medical-50/60 active:scale-98 transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5" /> {t.callClinic}
                  </a>
                  <a
                    href={`https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-700 hover:bg-emerald-100/60 active:scale-98 transition-colors text-center"
                  >
                    {t.helpdesk}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}
