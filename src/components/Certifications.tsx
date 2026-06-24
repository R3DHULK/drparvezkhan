/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, X, Eye, Calendar, UserCheck, GraduationCap, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Language } from '../translations';

interface CertificationsProps {
  lang: Language;
}

interface CertificateItem {
  id: string;
  title: { en: string; bn: string; hi: string };
  institution: { en: string; bn: string; hi: string };
  type: { en: string; bn: string; hi: string };
  year: string;
  date: { en: string; bn: string; hi: string };
  meta: { en: string; bn: string; hi: string };
  desc: { en: string; bn: string; hi: string };
  image: string;
}

export default function Certifications({ lang }: CertificationsProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const headingTranslations = {
    sectionBadge: {
      en: "Verified Credentials",
      bn: "যাচাইকৃত সনদপত্রসমূহ",
      hi: "सत्यापित प्रमाण पत्र"
    },
    sectionTitle: {
      en: "Official Degrees & Hospital Appointments",
      bn: "অফিসিয়াল ডিগ্রী এবং হাসপাতালের প্রশংসাপত্র",
      hi: "आधिकारिक डिग्री और अस्पताल प्रमाण पत्र"
    },
    sectionSubtitle: {
      en: "Dr. Parvez Ahmed Khan's original university degrees and official clinical verification records, uploaded for maximum trust and transparency.",
      bn: "ডাঃ পারভেজ আহমেদ খানের আসল বিশ্ববিদ্যালয় ডিগ্রী এবং অফিসিয়াল হাসপাতালের প্রশংসাপত্রসমূহ, যা রোগীদের সর্বাধিক বিশ্বাস ও স্বচ্ছতার জন্য প্রদর্শন করা হলো।",
      hi: "डॉ. परवेज अहमद खान की मूल विश्वविद्यालय डिग्री और आधिकारिक अस्पताल प्रमाण पत्र, अधिकतम विश्वास और पारदर्शिता के लिए प्रदर्शित।"
    },
    viewDoc: {
      en: "View Original Document",
      bn: "আসল নথিটি দেখুন",
      hi: "मूल दस्तावेज देखें"
    },
    close: {
      en: "Close Document View",
      bn: "বন্ধ করুন",
      hi: "बंद करें"
    },
    verifyBadge: {
      en: "VERIFIED ORIGINAL DOCUMENT",
      bn: "যাচাইকৃত মূল নথি",
      hi: "सत्यापित मूल दस्तावेज़"
    },
    clickZoom: {
      en: "Click to view original document in high resolution",
      bn: "উচ্চ রেজোলিউশনে আসল নথিটি দেখতে ক্লিক করুন",
      hi: "उच्च रिज़ॉल्यूशन में मूल दस्तावेज़ देखने के लिए क्लिक करें"
    }
  };

  const certificates: CertificateItem[] = [
    {
      id: "bhms",
      title: {
        en: "Bachelor of Homoeopathic Medicine and Surgery (B.H.M.S.)",
        bn: "ব্যাচেলর অব হোমিওপ্যাথিক মেডিসিন অ্যান্ড সার্জারি (বি.এইচ.এম.এস.)",
        hi: "बैचलर ऑफ होम्योपैथिक मेडिसिन एंड सर्जरी (बी.एच.एम.एस.)"
      },
      institution: {
        en: "University of Calcutta",
        bn: "কলকাতা বিশ্ববিদ্যালয়",
        hi: "कलकत्ता विश्वविद्यालय"
      },
      type: {
        en: "Undergraduate Degree",
        bn: "স্নাতক ডিগ্রী",
        hi: "स्नातक डिग्री"
      },
      year: "2003",
      date: {
        en: "March 27, 2006 (Examination: May 2004)",
        bn: "২৭শে মার্চ, ২০০৬ (পরীক্ষা: মে ২০০৪)",
        hi: "२७ मार्च, २००६ (परीक्षा: मई २००४)"
      },
      meta: {
        en: "Roll: Cal / 03 / 14",
        bn: "রোল নম্বর: Cal / 03 / 14",
        hi: "रोल नंबर: Cal / 03 / 14"
      },
      desc: {
        en: "This is the official degree certificate from University of Calcutta, certifying that Parvez Ahmed obtained the degree of Bachelor of Homoeopathic Medicine and Surgery in 2003, having been successful in the examination of May 2004.",
        bn: "কলকাতা বিশ্ববিদ্যালয় থেকে প্রদত্ত মূল স্নাতক ডিগ্রী প্রশংসাপত্র, যা প্রত্যয়ন করে যে পারভেজ আহমেদ ২০০৪ সালের মে মাসে অনুষ্ঠিত পরীক্ষায় সফলভাবে উত্তীর্ণ হয়ে ব্যাচেলর অফ হোমিওপ্যাথিক মেডিসিন অ্যান্ড সার্জারি লাভ করেন।",
        hi: "कलकत्ता विश्वविद्यालय से मूल स्नातक डिग्री प्रमाणपत्र, जो प्रमाणित करता है कि परवेज अहमद ने मई २००४ की परीक्षा में सफल होकर बैचलर ऑफ होम्योपैथिक मेडिसिन एंड सर्जरी की डिग्री प्राप्त की।"
      },
      image: "/cert2.jpeg"
    },
    {
      id: "md-homoeo",
      title: {
        en: "Doctor of Medicine (M.D. Homoeopathy)",
        bn: "ডক্টর অব মেডিসিন (এম.ডি. হোমিওপ্যাথি)",
        hi: "डॉक्टर ऑफ मेडिसिन (एम.डी. होम्योपैथी)"
      },
      institution: {
        en: "The West Bengal University of Health Sciences",
        bn: "দ্য ওয়েস্ট বেঙ্গল ইউনিভার্সিটি অব হেলথ সায়েন্সেস",
        hi: "द वेस्ट बंगाल यूनिवर्सिटी ऑफ हेल्थ साइंसेज"
      },
      type: {
        en: "Postgraduate Degree (M.D.)",
        bn: "স্নাতকোত্তর ডিগ্রী (এম.ডি.)",
        hi: "स्नातकोत्तर डिग्री (एम.डी.)"
      },
      year: "2010",
      date: {
        en: "November 26, 2010",
        bn: "২৬শে নভেম্বর, ২০১০",
        hi: "२६ नवंबर, २०१०"
      },
      meta: {
        en: "Specialization: Materia Medica",
        bn: "বিশেষত্ব: মেটেরিয়া মেডিকা",
        hi: "विशेषज्ञता: मटेरिया मेडिका"
      },
      desc: {
        en: "The original postgraduate MD degree certificate awarded by The West Bengal University of Health Sciences, confirming that Dr. Parvez Ahmed successfully completed his specialization in Materia Medica in 2010.",
        bn: "দ্য ওয়েস্ট বেঙ্গল ইউনিভার্সিটি অব হেলথ সায়েন্সেস থেকে মেটেরিয়া মেডিকায় বিশেষত্বসহ প্রদত্ত মূল স্নাতকোত্তর এম.ডি. ডিগ্রী সনদপত্র, যা ২০১০ সালে ডাঃ পারভেজ আহমেদ খানকে প্রদান করা হয়।",
        hi: "द वेस्ट बंगाल यूनिवर्सिटी ऑफ हेल्थ साइंसेज द्वारा मटेरिया मेडिका में विशेषज्ञता के साथ प्रदान किया गया मूल स्नातकोत्तर एम.डी. डिग्री प्रमाणपत्र, जो २०१० में डॉ. परवेज अहमद को दिया गया था।"
      },
      image: "/cert3.jpeg"
    },
    {
      id: "islamia-consultant",
      title: {
        en: "OPD Consultant Appointment Verification",
        bn: "ওপিডি কনসালটেন্ট নিয়োগ প্রশংসাপত্র",
        hi: "ओपीडी सलाहकार नियुक्ति प्रमाण पत्र"
      },
      institution: {
        en: "Islamia Medical Institute (A Unit of Islamia Hospital)",
        bn: "ইসলামিয়া মেডিকেল ইনস্টিটিউট (ইসলামিয়া হাসপাতালের একটি ইউনিট)",
        hi: "इस्लामिया मेडिकल इंस्टीट्यूट (इस्लामिया अस्पताल की एक इकाई)"
      },
      type: {
        en: "Clinical Experience Certificate",
        bn: "ক্লিনিকাল অভিজ্ঞতা প্রশংসাপত্র",
        hi: "नैदानिक अनुभव प्रमाण पत्र"
      },
      year: "2010",
      date: {
        en: "January 18, 2011 (Service since May 2010)",
        bn: "১৮ই জানুয়ারি, ২০১১ (সেবা আরম্ভ: মে ২০১০)",
        hi: "१८ जनवरी, २०११ (सेवा आरंभ: मई २०१०)"
      },
      meta: {
        en: "Ref: IMI / 69 / 01 / 10 - 11",
        bn: "রেফ: IMI / 69 / 01 / 10 - 11",
        hi: "संदर्भ: IMI / 69 / 01 / 10 - 11"
      },
      desc: {
        en: "Official credential verification letter issued by the Chairman of Islamia Medical Institute, Park Circus, Kolkata, confirming that Dr. Parvez Ahmed [B.H.M.S., M.D. (Homoeopathic)] has worked as an OPD Consultant since May 2010.",
        bn: "কলকাতা পার্ক সার্কাসের ইসলামিয়া মেডিকেল ইনস্টিটিউট-এর চেয়ারম্যান কর্তৃক প্রদত্ত মূল প্রশংসাপত্র, যা প্রত্যয়ন করে যে ডাঃ পারভেজ আহমেদ ২০১০ সালের মে মাস থেকে ওপিডি বিভাগে একজন কনসালটেন্ট বা পরামর্শক হিসেবে দায়িত্ব পালন করছেন।",
        hi: "कोलकाता पार्क सर्कस के इस्लामिया मेडिकल इंस्टीट्यूट के चेयरमैन द्वारा जारी आधिकारिक प्रमाण पत्र, जो प्रमाणित करता है कि डॉ. परवेज अहमद मई २०१० से ओपीडी में एक सलाहकार के रूप में कार्यरत हैं।"
      },
      image: "/cert1.jpeg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200" id="doctor-certifications">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medical-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-50 border border-medical-200 text-medical-805 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-medical-600" />
            <span>{headingTranslations.sectionBadge[lang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {headingTranslations.sectionTitle[lang]}
          </h2>
          <p className="text-slate-650 text-sm sm:text-base font-sans leading-relaxed">
            {headingTranslations.sectionSubtitle[lang]}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-medical-300 transition-all duration-350 group relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Top accent border line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-medical-500 to-teal-500" />
              
              <div className="space-y-4">
                {/* Photo Certificate Frame (The requested uploaded image) */}
                <div className="relative aspect-4/3 w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-xs flex items-center justify-center group/img">
                  <img 
                    src={cert.image} 
                    alt={cert.title[lang]} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Elegant overlay on hover */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2 bg-white/95 rounded-full text-medical-805 shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-slate-900/75 text-white px-2 py-0.5 rounded text-[9px] font-mono tracking-wider flex items-center gap-1 backdrop-blur-xs">
                    <ImageIcon className="w-3 h-3 text-medical-300" />
                    <span>ORIGINAL IMAGE</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-medical-600 uppercase tracking-wider font-mono">
                      {cert.type[lang]}
                    </span>
                    <span className="text-[10px] font-bold text-slate-450 font-mono tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug font-display">
                    {cert.title[lang]}
                  </h3>
                  <p className="text-xs font-semibold text-slate-650">
                    {cert.institution[lang]}
                  </p>
                  <p className="text-[11px] text-slate-400 font-sans font-medium">
                    {cert.meta[lang]}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                  className="w-full py-2 px-4 bg-slate-50 hover:bg-medical-50 text-slate-700 hover:text-medical-805 border border-slate-200 hover:border-medical-300 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Eye className="w-4 h-4 text-medical-600" />
                  <span>{headingTranslations.viewDoc[lang]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Certification Original Image Viewer Modal */}
        {selectedCert && (
          <div 
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto animate-fade-in"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-4 md:p-6 overflow-hidden my-4 border border-slate-150"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 transition-colors cursor-pointer z-20 shadow-xs"
                title={headingTranslations.close[lang]}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header details */}
              <div className="mb-4 pr-10 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-medical-50 border border-medical-200 text-medical-805 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase font-mono">
                    {selectedCert.type[lang]}
                  </span>
                  <span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded text-[10px] font-bold font-mono">
                    {selectedCert.year}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-slate-950 font-display tracking-tight leading-snug">
                  {selectedCert.title[lang]}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  {selectedCert.institution[lang]} — {selectedCert.meta[lang]}
                </p>
              </div>

              {/* Full Image Display Frame */}
              <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center max-h-[70vh] relative group cursor-zoom-out shadow-inner">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title[lang]} 
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain max-w-full select-none"
                  onClick={() => setSelectedCert(null)}
                  title={headingTranslations.clickZoom[lang]}
                />
                
                {/* Micro badge indicator */}
                <div className="absolute top-3 left-3 bg-slate-900/80 text-[#f8fafc] px-3 py-1 rounded-full border border-medical-500/30 text-[10px] font-bold tracking-widest uppercase font-mono shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-medical-400" />
                  <span>{headingTranslations.verifyBadge[lang]}</span>
                </div>
              </div>

              {/* Brief translation / summary description footer */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="text-xs sm:text-sm text-slate-650 max-w-2xl font-sans leading-relaxed">
                  <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px] block mb-1">
                    {lang === 'bn' ? 'নথির বিবরণ' : lang === 'hi' ? 'दस्तावेज़ का विवरण' : 'Document Details & Translation'}
                  </span>
                  {selectedCert.desc[lang]}
                </div>
                
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full md:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer text-center hover:shadow-md shrink-0"
                >
                  {headingTranslations.close[lang]}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
