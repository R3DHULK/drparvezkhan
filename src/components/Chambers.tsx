/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Clock, CalendarDays, ExternalLink, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { CLINIC_CHAMBERS, DOCTOR_INFO } from '../data';
import { ClinicChamber } from '../types';

import { Language, TRANSLATIONS } from '../translations';

interface ChambersProps {
  onSelectChamber: (chamberId: string) => void;
  lang: Language;
}

export default function Chambers({ onSelectChamber, lang }: ChambersProps) {
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [copiedChamberId, setCopiedChamberId] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];

  const daysOfTheWeekEnglish = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Mapped translation of days for filter button labels
  const getDayTranslation = (day: string) => {
    if (lang === 'bn') {
      switch(day) {
        case 'All': return 'সব দিন';
        case 'Monday': return 'সোমবার';
        case 'Tuesday': return 'মঙ্গলবার';
        case 'Wednesday': return 'বুধবার';
        case 'Thursday': return 'বৃহস্পতিবার';
        case 'Friday': return 'শুক্রবার';
        case 'Saturday': return 'শনিবার';
        case 'Sunday': return 'রবিবার';
        default: return day;
      }
    } else if (lang === 'hi') {
      switch(day) {
        case 'All': return 'सभी दिन';
        case 'Monday': return 'सोमवार';
        case 'Tuesday': return 'मंगलवार';
        case 'Wednesday': return 'बुधवार';
        case 'Thursday': return 'गुरुवार';
        case 'Friday': return 'शुक्रवार';
        case 'Saturday': return 'शनिवार';
        case 'Sunday': return 'रविवार';
        default: return day;
      }
    }
    return day;
  };

  const filteredChambers = CLINIC_CHAMBERS.filter(chamber => {
    if (selectedDay === 'All') return true;
    return chamber.days.includes(selectedDay);
  });

  const handleCopyAddress = (chamber: ClinicChamber) => {
    const textToCopy = `${chamber.name}, Location: ${chamber.location}. Timings: ${chamber.timings}. Contact: ${chamber.contact.join('/')}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedChamberId(chamber.id);
      setTimeout(() => setCopiedChamberId(null), 2000);
    });
  };

  const getDayStatusColor = (days: string[]) => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    if (days.includes(today)) {
      return {
        label: lang === 'bn' ? 'আজ খোলা আছে' : lang === 'hi' ? 'आज खुला है' : 'Open Today',
        class: 'bg-emerald-50 text-emerald-800 border-emerald-250 animate-pulse'
      };
    }
    return null;
  };

  const getChamberNameTranslation = (name: string) => {
    if (lang === 'bn') {
      if (name.includes('Indrani Park')) return 'কলকাতা ইন্দ্রানী পার্ক কামারডাঙ্গা কামারহাট ফ্ল্যাট';
      if (name.includes('Rajarhat')) return 'রাজারহাট চৌমাথা ডায়াগনস্টিক অ্যান্ড হেলথ কেয়ার';
      if (name.includes('Berachampa')) return 'বেড়াচাঁপা কাঠগোলা মোড় (এইচডিএফসি ব্যাংকের ওপরে)';
      if (name.includes('Malancha')) return 'মালঞ্চ চালপট্টি ক্রসরোড ডায়াগনস্টিক চত্বর';
      if (name.includes('Haroa')) return 'হাড়োয়া বাস স্ট্যান্ড সংলগ্ন হেলথ কেয়ার ক্লিনিক';
      if (name.includes('Bhangar')) return 'ভাঙর সুপার স্পেশালিটি মোড় ডেন্টাল ফ্রেম';
    } else if (lang === 'hi') {
      if (name.includes('Indrani Park')) return 'कोलकाता इन्द्रानी पार्क कामारडांगा क्लिनिक';
      if (name.includes('Rajarhat')) return 'राजारहट चौमाथा डायग्नोस्टिक एंड क्लिनिक';
      if (name.includes('Berachampa')) return 'बेराचांपा काठगोला मोड़ (एचडीएफसी बैंक के ऊपर)';
      if (name.includes('Malancha')) return 'मालंचा चालपट्टी क्रॉसरूप केंद्र';
      if (name.includes('Haroa')) return 'हाड़ोआ बस स्टैंड के पास होम्योपैथी क्लिनिक';
      if (name.includes('Bhangar')) return 'भांगड़ सुपर स्पेशलिटी मोड़ क्लिनिक';
    }
    return name;
  };

  const getChamberAddressTranslation = (loc: string) => {
    if (lang === 'bn') {
      if (loc.includes('Anwar Shah Road')) return 'ফ্ল্যাট নং ৫, ২য় তলা, ১৬ ইন্দ্রানী পার্ক, আনোয়ার শাহ রোড, কলকাতা - ৩৩ (লার্নেক্স একাডেমির বিপরীতে)';
      if (loc.includes('Choumatha')) return 'রাজারহাট চৌমাথা মোড় ট্রাফিক সিগন্যালের বিপরীতে, রাজারহাট মেইন রোড, কলকাতা';
      if (loc.includes('Kathgola')) return 'বেড়াচাঁপা কাঠগোলা মোড় ক্রসরোড, বসিরহাট রোড (এইচডিএফসি ব্যাংকের ১ম তলা)';
      if (loc.includes('Maloncho')) return 'মালঞ্চ বাজার চালপট্টি রোডের মোড় (মারোয়ারী পট্টির বিপরীতে), ২৪ পরগনা (উ.)';
      if (loc.includes('Haroa Bus Stand')) return 'হাড়োয়া বাস স্ট্যান্ড রোড, ব্রীজের সন্নিকটে হেলথ পয়েন্ট ফার্স্ট ফ্লোর';
      if (loc.includes('Bhangar Ghore-Rasad')) return 'ভাঙর ঘর-রসাদ সুপার স্পেশালিটি হসপিটাল রোড সংলগ্ন, ২৪ পরগনা (দ.)';
    } else if (lang === 'hi') {
      if (loc.includes('Anwar Shah Road')) return 'फ्लैट नंबर ५, दूसरी मंजिल, १६ इन्द्रानी पार्क, अनवर शाह रोड, कोलकाता - ३३';
      if (loc.includes('Choumatha')) return 'राजारहट चौमाथा मोड़, ट्रैफिक सिग्नल के सामने, राजारहट मेन रोड, कोलकाता';
      if (loc.includes('Kathgola')) return 'बेराचांपा काठगोला मोड़, बसीरहाट रोड (एचडीएफसी बैंक की पहली मंजिल के ऊपर)';
      if (loc.includes('Maloncho')) return 'मालंचा बाज़ार चालपट्टी क्रॉसिंग, उत्तर २४ परगना';
      if (loc.includes('Haroa Bus Stand')) return 'हाड़ोआ बस स्टैंड रोड, पुल के पास होम्योपैथिक केयर सेंटर';
      if (loc.includes('Bhangar Ghore-Rasad')) return 'भांगड़ गोर-रसाद सुपर स्पेशलिटी अस्पताल मार्ग, दक्षिण २४ परगना';
    }
    return loc;
  };

  const getChamberDaysTranslation = (dayList: string[]) => {
    return dayList.map(d => {
      if (lang === 'bn') {
        switch(d) {
          case 'Monday': return 'সোম';
          case 'Tuesday': return 'মঙ্গল';
          case 'Wednesday': return 'বুধ';
          case 'Thursday': return 'বৃহস্পতি';
          case 'Friday': return 'শুক্র';
          case 'Saturday': return 'শনি';
          case 'Sunday': return 'রবি';
        }
      } else if (lang === 'hi') {
        switch(d) {
          case 'Monday': return 'सोम';
          case 'Tuesday': return 'मंगल';
          case 'Wednesday': return 'बुध';
          case 'Thursday': return 'गुरु';
          case 'Friday': return 'शुक्र';
          case 'Saturday': return 'शनि';
          case 'Sunday': return 'रवि';
        }
      }
      return d.substring(0, 3);
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="chambers-and-timings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-50 border border-medical-200 text-medical-805 text-xs font-semibold">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'চেম্বার রিয়েল-টাইম সিডিউল' : lang === 'hi' ? 'चैंबर लाइव शेड्यूल तालिका' : 'Interactive Scheduling Matrix'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {lang === 'bn' ? 'ডাক্তারবাবুর সমস্ত চেম্বার ও সময়সূচী' : lang === 'hi' ? 'डॉ. खान के परामर्श चैंबर और समय' : 'Consultation Chambers & Dynamic Timings'}
          </h2>
          <p className="text-slate-650 text-sm sm:text-base font-sans">
            {lang === 'bn' ? 'ডাঃ পারভেজ আহমেদ খান কলকাতা (ইন্দ্রানী পার্ক), রাজারহাট চৌমাথা, বেড়াচাঁপা, মালঞ্চ, হাড়োয়া ও ভাঙরের বিভিন্ন চেম্বারে নিয়মিত রোগী দেখেন। যেকোনো দিন ফিল্টার করে আপনার নিকটবর্তী সক্রিয় চেম্বারটি খুঁজে নিন।' : lang === 'hi' ? 'डॉ. परवेज अहमद खान कोलकाता, राजारहट चौमाथा, बेराचांपा, मालंचा, हाड़ोआ और भांगड़ के प्रमुख क्लिनिकों में अभ्यास करते हैं। सक्रिय क्लिनिक खोजने के लिए किसी विशेष दिन को चुनें।' : 'Dr. Parvez Ahmed Khan consults across multiple premium clinics and diagnostic centers in Kolkata, Rajarhat, Maloncho, Haroa, and Bhangar. Filter by any day of the week to locate the nearest active chamber.'}
          </p>
        </div>

        {/* Days of the week filter bar */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 mb-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3 px-1 text-slate-700">
            <Filter className="w-4 h-4 text-medical-500 shrink-0" />
            <span className="text-sm font-bold font-display">{lang === 'bn' ? 'দিন অনুযায়ী চেম্বার ফিল্টার করুন:' : lang === 'hi' ? 'दिन के अनुसार चैंबर खोजें:' : 'Filter by Clinic Day:'}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1">
            {daysOfTheWeekEnglish.map(day => {
              const isActive = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-medical-700 text-white shadow-xs border border-medical-805'
                      : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {getDayTranslation(day)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chambers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChambers.map((chamber) => {
            const status = getDayStatusColor(chamber.days);
            return (
              <div 
                key={chamber.id} 
                className={`bg-slate-50/50 rounded-2xl border border-slate-150 p-6 flex flex-col justify-between hover:shadow-md hover:border-medical-200 transition-all duration-300 relative ${
                  chamber.isTemporary ? 'border-dashed border-slate-300' : ''
                }`}
                id={`chamber-card-${chamber.id}`}
              >
                {/* Temporary Clinic Special Label */}
                {chamber.isTemporary && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 py-1 px-2.5 rounded-md bg-amber-50 text-amber-800 text-[9px] font-bold border border-amber-250 font-mono">
                    TEMPORARY CHAMBER
                  </div>
                )}

                {/* Today status badge */}
                {!chamber.isTemporary && status && (
                  <div className={`absolute top-4 right-4 inline-flex items-center gap-1 py-0.5 px-2 rounded-md font-bold text-[9px] border ${status.class}`}>
                    {status.label}
                  </div>
                )}

                <div className="space-y-4">
                  
                  {/* Clinic Name and Days */}
                  <div className="space-y-2 text-left">
                    <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 pr-12 leading-snug">
                      {getChamberNameTranslation(chamber.name)}
                    </h3>
                    
                    {/* Active days list */}
                    <div className="flex flex-wrap gap-1">
                      {chamber.days.map((d, idx) => (
                        <span key={d} className="px-2 py-0.5 rounded-sm text-[10px] bg-medical-50 text-medical-800 border border-medical-100 font-semibold font-mono">
                          {getChamberDaysTranslation(chamber.days)[idx]}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-2.5 text-left pt-2 border-t border-slate-100">
                    <Clock className="w-4.5 h-4.5 text-medical-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{lang === 'bn' ? 'পরামর্শের সময়' : lang === 'hi' ? 'परामर्श का समय' : 'Consultation Hours'}</div>
                      <div className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                        {lang === 'bn' ? (
                          chamber.timings.replace('pm','টা').replace('am','টা').replace('to',' থেকে ').replace('Onward','পরবর্তীতে')
                        ) : lang === 'hi' ? (
                          chamber.timings.replace('pm',' बजे').replace('am',' बजे').replace('to',' से ')
                        ) : chamber.timings}
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 text-left pt-1">
                    <MapPin className="w-4.5 h-4.5 text-medical-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{lang === 'bn' ? 'ঠিকানা ও পরিচিত স্থান' : lang === 'hi' ? 'पता और लैंडमार्क' : 'Clinic Address & Landmark'}</div>
                      <div className="text-xs sm:text-sm text-slate-600 leading-snug font-sans">
                        {getChamberAddressTranslation(chamber.location)}
                      </div>
                      {chamber.landmark && (
                        <span className="inline-block mt-1 text-[10px] font-semibold text-medical-800 bg-medical-50 border border-medical-100 px-1.5 py-0.5 rounded-sm">
                          {lang === 'bn' ? 'ল্যান্ডমার্ক: ' : lang === 'hi' ? 'लैंडमार्क: ' : ''}{chamber.landmark}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="flex items-start gap-2.5 text-left pt-1">
                    <Phone className="w-4.5 h-4.5 text-medical-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{lang === 'bn' ? 'বুকিং এবং হেল্পলাইন' : lang === 'hi' ? 'बुकिंग और हेल्पडेस्क' : 'Chamber Booking / Helpline'}</div>
                      <div className="space-y-1">
                        {chamber.contact.map((num, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <a href={`tel:${num}`} className="text-xs sm:text-sm font-bold text-slate-800 hover:text-medical-700 transition-colors">
                              {num}
                            </a>
                            <span className="text-slate-300 text-xs">|</span>
                            <a 
                              href={`https://wa.me/91${num.replace(/[^0-9]/g, '')}?text=Hello%20chambers%20desk%20for%20Dr%20Parvez%20Khan`}
                              target="_blank"
                              style={{color: '#059669'}}
                              className="text-[11px] sm:text-xs font-semibold hover:underline"
                            >
                              {lang === 'bn' ? 'হোয়াটসঅ্যাপ' : lang === 'hi' ? 'व्हाट्सएप' : 'WhatsApp Desk'}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Card CTA Actions */}
                <div className="mt-6 pt-4 border-t border-slate-150 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleCopyAddress(chamber)}
                    className="py-2 px-3 text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-200 bg-white rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedChamberId === chamber.id ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{lang === 'bn' ? 'কপি সফল!' : lang === 'hi' ? 'कॉपी हुआ!' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <span>{lang === 'bn' ? 'ঠিকানা কপি করুন' : lang === 'hi' ? 'पता कॉपी करें' : 'Copy Details'}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSelectChamber(chamber.id)}
                    className="py-2 px-3 text-xs font-semibold text-white bg-medical-600 hover:bg-medical-700 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs active:scale-98"
                  >
                    <span>{t.ctaBook}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Fallback for filters */}
        {filteredChambers.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto shadow-2xs mt-8">
            <CalendarDays className="w-12 h-12 text-slate-350 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 font-display">No chambers active on {selectedDay}</h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xs mx-auto">
              Please choose a different day or search our list to see Dr. Khan's other clinic hours. He consults six days a week.
            </p>
            <button
              onClick={() => setSelectedDay('All')}
              className="mt-4 px-4 py-2 bg-white border border-slate-250 text-xs font-bold text-medical-805 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Reset to All Days
            </button>
          </div>
        )}

        {/* Professional transport / booking notice */}
        <div className="mt-12 p-6 rounded-2xl bg-medical-50/40 border border-medical-250 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="p-3 bg-white rounded-full border border-medical-200 shrink-0 text-medical-600">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-805 mb-0.5">{lang === 'bn' ? 'রোগী যাতায়াতের সুবিধাজনক তথ্য' : lang === 'hi' ? 'मरीजों के लिए परिवहन सहायक मार्गदर्शिका' : 'Patient Transit Information'}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              {lang === 'bn' ? 'আমাদের সমস্ত চেম্বার সাধারণ জনগণের যাতায়াতের জন্য খুবই সুবিধাজনক স্থানে অবস্থিত। যেমন বেড়াচাঁপা কাঠগোলা মোড় ক্রসরোড ক্রসিং এ, রাজারহাট চৌমাথা চত্বর সংলগ্ন অথবা হাড়োয়া ও ভাঙরের প্রধান বাজার চত্বরে অবস্থান হওয়ার কারণে বয়স্ক ও দূরবর্তী অঞ্চল থেকে আসা রোগীদের যাতায়াত অত্যন্ত সহজ।' : lang === 'hi' ? 'डॉ. खान के सभी क्लिनिक मुख्य परिवहन चौराहों और बस स्टैंडों (जैसे बेराचांपा काठगोला चौराहा, हाड़ोआ बस स्टैंड और कोलकाता अनवर शाह रोड) के पास रणनीतिक रूप से स्थित हैं, जिससे ग्रामीण व दूरदराज के क्षेत्रों से आने वाले मरीजों को परामर्श के लिए पहुंचने में अत्यधिक आसानी होती है।' : 'All listed chamber clinics are strategically located near active public transport junctions, bus stands (such as Kathgola Bus Stand above HDFC, Berachampa Crossroads, and Ferry Pier docks next to central mosques), making them easily comfortable and accessible for elderly patients or patients travelling from deep suburbs.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

