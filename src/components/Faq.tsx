/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, MessageSquare, Phone } from 'lucide-react';
import { FAQ_ITEMS, DOCTOR_INFO } from '../data';
import { Language, TRANSLATIONS } from '../translations';

interface FaqProps {
  lang: Language;
}

export default function Faq({ lang }: FaqProps) {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [feedback, setFeedback] = useState<Record<string, string>>({});

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const getTranslatedFaq = (id: string, originalQuestion: string, originalAnswer: string) => {
    if (lang === 'bn') {
      if (id === 'faq-1') {
        return {
          question: "হোমিওপ্যাথি কীভাবে টিউমার, সিস্ট এবং নাকের পলিপ দূর করে?",
          answer: "হোমিওপ্যাথি শরীরের অস্বাভাবিক কোষ বৃদ্ধির মূল কারণ (মিয়াশমেটিক প্রবণতা) দূর করে। কোনো ধরনের কাটাকাটি বা অপারেশন ছাড়া কনস্টিটিউশনাল রেমোডি ব্যবহারের মাধ্যমে দেহের রোগ প্রতিরোধ ক্ষমতা জাগ্রত করা হয়, যা শরীরের অভ্যন্তরীণ সিস্ট, ওভারিয়ান সিস্ট, জরায়ু ফাইব্রয়েড এবং নাকের পলিপকে ক্রমশ সংকুচিত ও শোষণ করতে সাহায্য করে।"
        };
      }
      if (id === 'faq-2') {
        return {
          question: "শয্যামূত্র বা বিছানায় প্রস্রাব করা, শিশুরোগ হাঁপানি, অটিজম বা এডিএইচডি-তে কিজিওথেরাপি বা হোমিওপ্যাথি ভালো কাজ করে?",
          answer: "হ্যাঁ, হোমিওপ্যাথি শিশুদের জন্য অত্যন্ত নিরাপদ, মিষ্টি এবং রাসায়নিক পার্শ্বপ্রতিক্রিয়াহীন। অটিজম বা এডিএইচডি শিশুদের মনোযোগ বৃদ্ধি করতে এবং মেজাজ শান্ত করতে এটি অনন্য। শিশুদের বিছানায় প্রস্রাব এবং অ্যালার্জিক হাঁপানির জন্য এটি মূত্রাশয়ের পেশী শক্তিশালী করে এবং শ্বাসনালীর সংবেদনশীলতা কমায়।"
        };
      }
      if (id === 'faq-3') {
        return {
          question: "কিডনির বড় পাথর এবং প্রোস্টেট বৃদ্ধি কি অপারেশন ছাড়া নিরাময় করা সম্ভব?",
          answer: "হ্যাঁ, উন্নত ক্লিনিকাল হোমিওপ্যাথি ওষুধ পাথর ভেঙে গুঁড়ো করে প্রস্রাবের মাধ্যমে কোনো কষ্ট ছাড়াই বের করে দেয়। এছাড়াও প্রোস্টেট বৃদ্ধির সমস্যা দূর করে বারবার প্রস্রাব হওয়া নিয়ন্ত্রণ করে।"
        };
      }
      if (id === 'faq-4') {
        return {
          question: "থ্যালাসেমিয়া, হেপাটাইটিস বা এইচআইভি মত ক্রনিক রোগে কি হোমিওপ্যাথি সহায়ক ভূমিকা পালন করে?",
          answer: "হ্যাঁ, এটি রোগীদের সামগ্রিক জীবনীশক্তি বৃদ্ধি করতে সাহায্য করে। থ্যালাসেমিয়া রোগীদের রক্তের কোষে জীবনীশক্তি বাড়ায় যার ফলে রক্তের প্রয়োজনে ট্রান্সফিউশনের গ্যাপ বৃদ্ধি পায় এবং হেপাটাইটিস রোগে লিভারের এনজাইম স্বাভাবিক করে লিভারকে সুরক্ষিত রাখে। বিশেষ করে এইচআইভি বা অন্যান্য ক্রনিক রোগের ক্ষেত্রেও হোমিওপ্যাথির বিশেষায়িত ফর্মুলা পার্শ্বপ্রতিক্রিয়াহীনভাবে শরীরে শক্তি ও রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।"
        };
      }
      if (id === 'faq-5') {
        return {
          question: "অনিদ্রা, মানসিক উৎকণ্ঠা, হতাশা এবং ভয় কি হোমিওপ্যাথি ওষুধের মাধ্যমে দূর হয়?",
          answer: "অবশ্যই। হোমিওপ্যাথি কনস্টিটিউশনাল ওষুধ কোনো ঝিমুনি বা আসক্তি ছাড়াই মস্তিস্কের অতিরিক্ত উত্তেজনা প্রশমিত করে অনিদ্রা, ভয় এবং মানসিক হতাশা মূল থেকে দূর করে মন ও শরীর তরতাজা করে।"
        };
      }
      if (id === 'faq-6') {
        return {
          question: "হার্ট ভালভের সমস্যা, ফুসফুসের জটিলতা এবং নাকের মাংস বৃদ্ধি এড়ানো কি যায়?",
          answer: "হ্যাঁ, হোমিওপ্যাথির ক্র্যাটিগাসের মতো প্রাকৃতিক হার্ট টনিক হৃদযন্ত্র সুরক্ষিত রাখে। এছাড়া অ্যান্টি-ইনফ্ল্যামেটরি ওষুধের মাধ্যমে নাকের মাংস বৃদ্ধি (অ্যাডেনয়েড ও পলিপ) দূর করে শ্বাসকষ্টের স্থায়ী উপশম করা হয়।"
        };
      }
    } else if (lang === 'hi') {
      if (id === 'faq-1') {
        return {
          question: "होम्योपैथी गहरी गांठों, रसौली (सिस्ट) और नाक के पोलिप को कैसे ठीक करती है?",
          answer: "होम्योपैथी शरीर के दोष (मियास्म) को ठीक करके असामान्य कोशिका वृद्धि को नियंत्रित करती है। ऑपरेशन के बजाय, विशिष्ट दवाएं आंतरिक अंगों, डिम्बग्रंथि सिस्ट, गर्भाशय फाइब्रॉएड और नाक की सूजन को भीतर से ठीक करती हैं।"
        };
      }
      if (id === 'faq-2') {
        return {
          question: "क्या बच्चों के बिस्तर पर पेशाब करने, अस्थमा, ऑटिज्म या एडीएचडी में होम्योपैथी प्रभावी है?",
          answer: "हाँ, होम्योपैथी बच्चों के लिए अत्यंत सुरक्षित और मीठी दवा है। ऑटिज्म या एडीएचडी में यह बच्चों के मस्तिष्क की एकाग्रता बढ़ाती है। बिस्तर पर पेशाब और बच्चों के दमा रोग को भी यह जड़ से ठीक करती है।"
        };
      }
      if (id === 'faq-3') {
        return {
          question: "क्या गुर्दे की बड़ी पथरी और गिल्टी (प्रोस्टेट) बिना ऑपरेशन ठीक हो सकती है?",
          answer: "हाँ, उन्नत होम्योपैथिक दवाएं पथरी को महीन कणों में तोड़कर और गलाकर पेशाब के रास्ते दर्द रहित बाहर निकाल देती हैं, और बार-बार पेशाब आने की समस्या का समाधान करती हैं।"
        };
      }
      if (id === 'faq-4') {
        return {
          question: "क्या थैलेसीमिया, हेपेटाइटिस या एचआईवी जैसी पुरानी बीमारी में होम्योपैथी से मदद मिलती है?",
          answer: "हाँ, होम्योपैथी मरीजों की रोग प्रतिरोधक क्षमता बढ़ाकर उनके जीवन को आसान बनाती है। थैलेसीमिया में यह रक्त की गुणवत्ता सुधारती है और हेपेटाइटिस में लिवर को सुरक्षित रखती है।"
        };
      }
      if (id === 'faq-5') {
        return {
          question: "क्या गंभीर अनिद्रा, तनाव, घबराहट और भय का इलाज होम्योपैथी से हो सकता है?",
          answer: "बिल्कुल। होम्योपैथी दवाएं बिना किसी आदत या सुस्ती के तंत्रिका तंत्र को शांत करके अनिद्रा और पुरानी घबराहट को जड़ से समाप्त करती हैं।"
        };
      }
      if (id === 'faq-6') {
        return {
          question: "क्या हृदय रोगों और सांस की तकलीफ को नियंत्रित किया जा सकता है?",
          answer: "हाँ, होम्योपैथी के कोमल श्वसन और हृदय संबंधी उपचार फेफड़ों और हृदय को मजबूत रहने में सहायता देते हैं, जिससे ऑपरेशन टल जाता है।"
        };
      }
    }
    return { question: originalQuestion, answer: originalAnswer };
  };

  const t = TRANSLATIONS[lang];

  return (
    <section className="py-16 md:py-24 bg-white" id="patient-faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Intro Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-50 border border-medical-200 text-medical-805 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {lang === 'bn' ? 'ক্লিনিকাল প্রশ্নোত্তর সেল' : lang === 'hi' ? 'चिकित्सीय प्रश्नोत्तरी डेस्क' : 'Pathological & Clinical FAQ Registry'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            {t.faqTitle}
          </h2>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
            {t.faqSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* FAQ Accordions Column */}
          <div className="lg:col-span-8 space-y-4 text-left">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const translated = getTranslatedFaq(item.id, item.question, item.answer);
              return (
                <div 
                  key={item.id} 
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-slate-50 border-medical-250 shadow-sm' 
                      : 'bg-white border-slate-150 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left font-display text-slate-900 font-bold text-sm sm:text-base gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-medical-600 font-mono font-bold">Q.</span>
                      <span>{translated.question}</span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-medical-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed pl-11 border-t border-slate-100/50">
                      <p className="font-sans whitespace-pre-line text-slate-600">{translated.answer}</p>
                      
                      {/* Interactive help tag within FAQ */}
                      <div className="mt-4 flex items-center justify-between text-xs font-bold text-medical-805 bg-medical-50/50 p-2.5 rounded-lg border border-medical-100">
                        {feedback[item.id] ? (
                          <span className="text-emerald-750 font-display">
                            {lang === 'bn' ? 'আপনার মূল্যবান মতামতের জন্য ধন্যবাদ!' : lang === 'hi' ? 'आपकी बहुमूल्य प्रतिक्रिया के लिए धन्यवाद!' : 'Thank you for your valuable feedback!'}
                          </span>
                        ) : (
                          <>
                            <span>{lang === 'bn' ? 'এই উত্তরটি কি সহায়ক ছিল?' : lang === 'hi' ? 'क्या यह उत्तर मददगार था?' : 'Was this answer helpful?'}</span>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => setFeedback(prev => ({ ...prev, [item.id]: 'yes' }))} 
                                className="hover:underline text-medical-700 cursor-pointer"
                              >
                                {lang === 'bn' ? 'হ্যাঁ' : lang === 'hi' ? 'हाँ' : 'Yes'}
                              </button>
                              <span className="text-slate-300">|</span>
                              <button 
                                onClick={() => setFeedback(prev => ({ ...prev, [item.id]: 'no' }))} 
                                className="hover:underline text-medical-700 cursor-pointer"
                              >
                                {lang === 'bn' ? 'না' : lang === 'hi' ? 'नहीं' : 'No'}
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* FAQ Support Center Column */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-150 rounded-3xl p-6 text-left space-y-5">
            <div className="p-3 bg-white border border-slate-150 rounded-2xl w-fit text-medical-600">
              <HelpCircle className="w-6 h-6 animate-pulse" />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-bold font-display text-slate-900">
                {lang === 'bn' ? 'আপনার মেডিকেল রিপোর্ট বা স্ক্যান আছে?' : lang === 'hi' ? 'क्या आपके पास जांच रिपोर्ट है?' : 'Have clinical reports to evaluate?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-sans">
                {lang === 'bn' 
                  ? 'আপনি সরাসরি সিটি স্ক্যান, এমআরআই, আল্ট্রাসনিক রিপোর্ট অথবা সিস্টের আল্ট্রাসাউন্ড প্লেট ছবি তুলে ডাঃ পারভেজ খানের অফিসিয়াল হোয়াটসঅ্যাপ হেল্পলাইনে পাঠাতে পারেন।' 
                  : lang === 'hi' 
                    ? 'आप सीधे सीटी स्कैन, एमआरआई, अल्ट्रासोनोग्राफी (USG) अथवा पीसीओएस रिपोर्ट डॉ. परवेज खान के आधिकारिक व्हाट्सएप हेल्पलाइन नंबर पर भेज सकते हैं।' 
                    : "You can directly upload and send CT scan, MRI, ultrasonography (USG), histopathology reports, or PCOS ultrasound reports to Dr. Parvez Khan's dedicated WhatsApp clinic helpline."}
              </p>
            </div>

            <div className="border-t border-slate-200/60 pt-4 space-y-2.5">
              <a
                href={`https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}?text=Hello%20Clinic%2CC%20I%20have%20uploaded%20my%20medical%20scans%2C%20please%20help%20evaluate%20for%20homeopathy%20remedies`}
                target="_blank"
                className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" /> {lang === 'bn' ? 'রিপোর্ট আপলোড ও পাঠান' : lang === 'hi' ? 'रिपोर्ट व्हाट्सएप पर भेजें' : 'Upload & Send Reports'}
              </a>
              
              <a
                href={`tel:${DOCTOR_INFO.leadHelplineCall}`}
                className="py-2.5 px-4 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all"
              >
                <Phone className="w-4 h-4 text-medical-605" /> {lang === 'bn' ? 'কল করুন' : lang === 'hi' ? 'कॉल करें' : 'Call'}: {DOCTOR_INFO.leadHelplineCall}
              </a>
            </div>

            <div className="text-[10px] text-slate-450 text-center font-mono uppercase tracking-wide">
              {lang === 'bn' ? 'অফিসিয়াল ২৪/৭ হেল্পলাইন সেল' : lang === 'hi' ? 'आधिकारिक २४x७ हेल्पलाइन डेस्क' : 'Official Helpline operating 24x7'}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
