/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Clipboard, ArrowRight, CheckCircle2, Ticket, MessageSquare, AlertCircle, FileText, Trash2, Shield } from 'lucide-react';
import { CLINIC_CHAMBERS, DOCTOR_INFO } from '../data';
import { Appointment } from '../types';
import { Language, TRANSLATIONS } from '../translations';

interface AppointmentsProps {
  preselectedChamberId?: string;
  onClearPreselection?: () => void;
  lang?: Language;
}

export default function Appointments({ preselectedChamberId, onClearPreselection, lang = 'en' }: AppointmentsProps) {
  const t = TRANSLATIONS[lang];

  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    patientAge: '',
    patientGender: 'Female', // Default female as pcos/fibroids are highly visited
    chamberId: preselectedChamberId || '',
    date: '',
    notes: ''
  });

  const [activeAppointments, setActiveAppointments] = useState<Appointment[]>([]);
  const [justBooked, setJustBooked] = useState<Appointment | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Sync preselected chamber
  useEffect(() => {
    if (preselectedChamberId) {
      setFormData(prev => ({ ...prev, chamberId: preselectedChamberId }));
    }
  }, [preselectedChamberId]);

  // Load existing appointments from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem('dr_parvez_appointments');
    if (stored) {
      try {
        setActiveAppointments(JSON.parse(stored));
      } catch (e) {
        console.error("Failed loading appointments", e);
      }
    }
  }, []);

  // Save appointments helper
  const saveAppointments = (list: Appointment[]) => {
    setActiveAppointments(list);
    localStorage.setItem('dr_parvez_appointments', JSON.stringify(list));
  };

  const getWeekdayOfDate = (dateStr: string): string => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[dateObj.getDay()];
  };

  const getWeekdayOfDateTranslated = (dateStr: string): string => {
    const weekday = getWeekdayOfDate(dateStr);
    if (lang === 'bn') {
      switch(weekday) {
        case 'Monday': return 'সোমবার';
        case 'Tuesday': return 'মঙ্গলবার';
        case 'Wednesday': return 'বুধবার';
        case 'Thursday': return 'বৃহস্পতিবার';
        case 'Friday': return 'শুক্রবার';
        case 'Saturday': return 'শনিবার';
        case 'Sunday': return 'রবিবার';
        default: return weekday;
      }
    } else if (lang === 'hi') {
      switch(weekday) {
        case 'Monday': return 'सोमवार';
        case 'Tuesday': return 'मंगलवार';
        case 'Wednesday': return 'बुधवार';
        case 'Thursday': return 'गुरुवार';
        case 'Friday': return 'शुक्रवार';
        case 'Saturday': return 'शनिवार';
        case 'Sunday': return 'रविवार';
        default: return weekday;
      }
    }
    return weekday;
  };

  const getNearestOpeningDate = (chamberId: string): string => {
    const chamber = CLINIC_CHAMBERS.find(c => c.id === chamberId);
    if (!chamber || !chamber.days || chamber.days.length === 0) return '';
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    for (let i = 0; i < 14; i++) {
      const checkDate = new Date(tomorrow);
      checkDate.setDate(tomorrow.getDate() + i);
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = weekdays[checkDate.getDay()];
      if (chamber.days.includes(dayName)) {
        const year = checkDate.getFullYear();
        const month = String(checkDate.getMonth() + 1).padStart(2, '0');
        const dateVal = String(checkDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${dateVal}`;
      }
    }
    return '';
  };

  const getTomorrowClinicsAndDay = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const tomorrowDayName = weekdays[tomorrow.getDay()];
    
    const tomorrowClinics = CLINIC_CHAMBERS.filter(c => c.days.includes(tomorrowDayName));
    
    const getChamberSimpleName = (name: string) => {
      if (lang === 'bn') {
        if (name.includes('Indrani Park')) return 'কলকাতা ইন্দ্রানী পার্ক';
        if (name.includes('Rajarhat')) return 'রাজারহাট চৌমাথা';
        if (name.includes('Berachampa')) return 'বেড়াচাঁপা';
        if (name.includes('Malancha')) return 'মালঞ্চ চালপট্টি';
        if (name.includes('Haroa')) return 'হাড়োয়া বাস স্ট্যান্ড';
        if (name.includes('Bhangar')) return 'ভাঙর সুপার স্পেশালিটি';
      } else if (lang === 'hi') {
        if (name.includes('Indrani Park')) return 'कोलकाता इन्द्रानी पार्क';
        if (name.includes('Rajarhat')) return 'राजारहट चौमाथा';
        if (name.includes('Berachampa')) return 'बेराचांपा';
        if (name.includes('Malancha')) return 'मालंचा';
        if (name.includes('Haroa')) return 'हाड़ोआ';
        if (name.includes('Bhangar')) return 'भांगड़';
      }
      return name.replace(" Chamber", "").replace(" Clinic", "").replace(" Diagnostic Centre", "");
    };

    const clinicNamesStr = tomorrowClinics.length > 0 
      ? tomorrowClinics.map(c => getChamberSimpleName(c.name)).join(" / ")
      : (lang === 'bn' ? "আমাদের নির্দিষ্ট চেম্বার" : lang === 'hi' ? "हमारे क्लिनिक" : "our medical clinics");

    const tomorrowDayTranslated = lang === 'bn'
      ? (tomorrowDayName === 'Monday' ? 'সোমবার' : tomorrowDayName === 'Tuesday' ? 'মঙ্গলবার' : tomorrowDayName === 'Wednesday' ? 'বুধবার' : tomorrowDayName === 'Thursday' ? 'বৃহস্পতিবার' : tomorrowDayName === 'Friday' ? 'শুক্রবার' : tomorrowDayName === 'Saturday' ? 'শনিবার' : 'রবিবার')
      : lang === 'hi'
      ? (tomorrowDayName === 'Monday' ? 'सोमवार' : tomorrowDayName === 'Tuesday' ? 'मंगलवार' : tomorrowDayName === 'Wednesday' ? 'बुधवार' : tomorrowDayName === 'Thursday' ? 'गुरुवार' : tomorrowDayName === 'Friday' ? 'शुक्रवार' : tomorrowDayName === 'Saturday' ? 'शनिवार' : 'रविवार')
      : tomorrowDayName;
      
    const day = String(tomorrow.getDate()).padStart(2, '0');
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const year = tomorrow.getFullYear();
    const formattedTomorrow = `${day}-${month}-${year}`;

    return {
      dayName: tomorrowDayTranslated,
      clinicNames: clinicNamesStr,
      dateStr: formattedTomorrow
    };
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'chamberId') {
      const newChamberId = value;
      let newDate = formData.date;
      
      if (newChamberId) {
        // If there is a selected date but the chamber is not open on that day, force nearest date
        const weekday = getWeekdayOfDate(newDate);
        const chamber = CLINIC_CHAMBERS.find(c => c.id === newChamberId);
        if (!newDate || !chamber || !chamber.days.includes(weekday)) {
          newDate = getNearestOpeningDate(newChamberId);
        }
      }
      setFormData(prev => ({ ...prev, chamberId: newChamberId, date: newDate }));
    } else if (name === 'date') {
      const newDate = value;
      let newChamberId = formData.chamberId;
      
      if (newDate) {
        const weekday = getWeekdayOfDate(newDate);
        const currentChamber = CLINIC_CHAMBERS.find(c => c.id === newChamberId);
        
        // If current chamber is not open on this newly selected day, auto select first chamber that is open
        if (!currentChamber || !currentChamber.days.includes(weekday)) {
          const matchingChamber = CLINIC_CHAMBERS.find(c => c.days.includes(weekday));
          if (matchingChamber) {
            newChamberId = matchingChamber.id;
          }
        }
      }
      setFormData(prev => ({ ...prev, date: newDate, chamberId: newChamberId }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    if (!formData.patientName.trim()) {
      setError(lang === 'bn' ? 'দয়া করে রোগীর নাম প্রদান করুন।' : lang === 'hi' ? 'कृपया मरीज का नाम दर्ज करें।' : 'Please provide a patient name.');
      return;
    }
    if (!formData.patientPhone.trim() || formData.patientPhone.length < 10) {
      setError(lang === 'bn' ? 'দয়া করে সঠিক ১০-ডিজিট মোবাইল নম্বর দিন।' : lang === 'hi' ? 'कृपया सही १०-अंकीय नंबर लिखें।' : 'Please provide a valid 10-digit mobile contact number.');
      return;
    }
    if (!formData.patientAge.trim() || isNaN(Number(formData.patientAge)) || Number(formData.patientAge) <= 0) {
      setError(lang === 'bn' ? 'দয়া করে সঠিক বয়স লিখুন।' : lang === 'hi' ? 'कृपया सही आयु दर्ज करें।' : 'Please enter a valid age.');
      return;
    }
    if (!formData.chamberId) {
      setError(lang === 'bn' ? 'দয়া করে একটি চিকিৎসাকেন্দ্র সিলেক্ট করুন।' : lang === 'hi' ? 'कृपया क्लिनिक का चयन करें।' : 'Please select a clinic chamber.');
      return;
    }
    if (!formData.date) {
      setError(lang === 'bn' ? 'দয়া করে তারিখ নির্ধারণ করুন।' : lang === 'hi' ? 'कृपया पसंदीदा तिथि दर्ज करें।' : 'Please pick a preferred date.');
      return;
    }

    const selectedChamber = CLINIC_CHAMBERS.find(c => c.id === formData.chamberId);
    if (!selectedChamber) return;

    const weekday = getWeekdayOfDate(formData.date);
    if (!selectedChamber.days.includes(weekday)) {
      setError(
        lang === 'bn' 
        ? `সতর্কতা: নির্বাচিত চেম্বারটি (${getChamberNameTranslation(selectedChamber.name)}) ${getWeekdayOfDateTranslated(formData.date)} বারে খোলা নেই। অনুগ্রহ করে অন্য দিন বা অন্য চেম্বার নির্বাচন করুন।` 
        : lang === 'hi' 
        ? `चेतावनी: चयनित क्लिनिक (${getChamberNameTranslation(selectedChamber.name)}) इस दिन (${getWeekdayOfDateTranslated(formData.date)}) को बंद रहता है। कृपया दूसरा दिन या क्लिनिक चुनें।` 
        : `Notice: The selected chamber (${selectedChamber.name}) is not open on ${weekday}. Please select another date or clinic.`
      );
      return;
    }

    // Generate appointment
    const newAppointment: Appointment = {
      id: `APT-${Math.floor(100000 + Math.random() * 900000)}`,
      patientName: formData.patientName.trim(),
      patientPhone: formData.patientPhone.trim(),
      patientAge: formData.patientAge.trim(),
      patientGender: formData.patientGender,
      chamberId: formData.chamberId,
      chamberName: selectedChamber.name,
      date: formData.date,
      notes: formData.notes.trim(),
      createdAt: new Date().toLocaleDateString(),
      status: 'Confirmed',
      queueNumber: Math.floor(5 + Math.random() * 22) // Simulated queue number for that block
    };

    const updatedList = [newAppointment, ...activeAppointments];
    saveAppointments(updatedList);
    setJustBooked(newAppointment);

    // Auto-customise and direct to WhatsApp
    const waText = getWhatsAppMessage(newAppointment);
    const waUrl = `https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}?text=${waText}`;
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.warn("Autolaunch blocked by browser / iframe scope", err);
    }

    // Reset Form (except patient contact to make multi-booking easy if needed)
    setFormData({
      patientName: '',
      patientPhone: formData.patientPhone,
      patientAge: '',
      patientGender: 'Female',
      chamberId: '',
      date: '',
      notes: ''
    });

    if (onClearPreselection) onClearPreselection();
  };

  const handleDeleteAppointment = (id: string) => {
    const filtered = activeAppointments.filter(apt => apt.id !== id);
    saveAppointments(filtered);
  };

  const getWhatsAppMessage = (apt: Appointment) => {
    const selectedChamber = CLINIC_CHAMBERS.find(c => c.id === apt.chamberId);
    const landmarkText = selectedChamber?.landmark ? ` (Landmark: ${selectedChamber.landmark})` : '';
    
    const text = `*HOMEOPATHY CLINIC APPOINTMENT CONFIRMATION*\n\n` +
      `*Doctor:* Dr. Parvez Ahmed Khan [Regd. A25986]\n` +
      `*Patient Name:* ${apt.patientName}\n` +
      `*Age/Gender:* ${apt.patientAge} Yrs / ${apt.patientGender}\n` +
      `*Chamber Location:* ${apt.chamberName}${landmarkText}\n` +
      `*Preferred Date:* ${apt.date}\n` +
      `*Queue Ticket No:* #${apt.queueNumber}\n` +
      `*Ticket ID:* ${apt.id}\n\n` +
      `_Please confirm my slot and let me know the medicine collection process. Thank you._`;
    return encodeURIComponent(text);
  };

  // Get tomorrow date is minimum for appointment selection
  const getMinDateString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="appointments-desk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-50 border border-medical-200 text-medical-805 text-xs font-semibold">
            <Clipboard className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ডিজিটাল চেম্বার টিকিট বুকিং সেল' : lang === 'hi' ? 'डिजिटल अपॉइंटमेंट बुकिंग डेस्क' : 'Digital Appointment Management Desk'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight-sub">
            {lang === 'bn' ? 'ডাক্তার দেখানোর সময়সূচী নির্ধারণ করুন' : lang === 'hi' ? 'परामर्श के लिए अपॉइंटमेंट बुक करें' : 'Schedule a Consultation'}
          </h2>
          <p className="text-slate-650 text-sm sm:text-base font-sans leading-relaxed">
            {lang === 'bn' ? 'রোগীর বিবরণ পূরণ করুন, আপনার পছন্দের উপযুক্ত চেম্বার সিলেক্ট করুন এবং সাবমিট বাটনে ক্লিক করুন। সিস্টেম স্বয়ংক্রিয়ভাবে সম্পূর্ণ বুকিং ডিটেইলস সুন্দর টেক্সট আকারে হোয়াটসঅ্যাপে সাজিয়ে দেবে যাতে হেল্পলাইন ম্যানেজার মুহূর্তেই কনফার্ম করতে পারেন।' : lang === 'hi' ? 'मरीज की प्राथमिक जानकारी दर्ज करें, अपना नजदीकी चैंबर चुनें और सबमिट करें। यह फॉर्म स्वचालित रूप से आपके मोबाइल पर एक व्हाट्सएप संदेश तैयार करेगा जिससे क्लिनिक सहायक तुरंत आपका बुकिंग स्लॉट सुरक्षित कर सकें।' : "Fill in the patient's clinical details, select your preferred chamber, and click submit. The form automatically packages all entered information into a single custom-designed WhatsApp message to instantly secure your slot with the clinical helper desk."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT PANEL: The Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-150 p-6 md:p-8 shadow-sm">
            
            <div className="flex justify-between items-center pb-4 mb-6 border-b border-slate-100">
              <div className="text-left">
                <span className="text-[9px] font-mono text-medical-600 font-semibold uppercase tracking-wider">SECURE SUBMISSION</span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">{lang === 'bn' ? 'রোগী নিবন্ধন ফর্ম' : lang === 'hi' ? 'मरीज पंजीकरण फॉर्म' : 'Patient Registry Form'}</h3>
              </div>
              <Shield className="w-5 h-5 text-medical-600" />
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2 mb-6">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-505 text-red-550" />
                <span className="font-medium text-left">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
              {/* Row 1: Patient Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <User className="w-3.5 h-3.5" /> {lang === 'bn' ? 'রোগীর সম্পূর্ণ নাম' : lang === 'hi' ? 'मरीज का पूरा नाम' : 'Patient Full Name'} <span className="text-rose-505 text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="patientName"
                  placeholder={lang === 'bn' ? 'রোগীটির প্রথম ও শেষ নাম লিখুন' : lang === 'hi' ? 'मरीज का पहला और अंतिम नाम' : 'Enter patient first & last name'}
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-medical-500 focus:bg-white transition-all font-medium"
                />
              </div>

              {/* Row 2: Phone + Age/Gender */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Cell Phone */}
                <div className="md:col-span-1 space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> {lang === 'bn' ? 'মোবাইল নম্বর' : lang === 'hi' ? 'मोबाइल नंबर' : 'Mobile Number'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="patientPhone"
                    placeholder="10-digit mobile"
                    maxLength={10}
                    value={formData.patientPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-medical-500 focus:bg-white transition-all font-bold font-mono"
                  />
                </div>

                {/* Age */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {lang === 'bn' ? 'বয়স' : lang === 'hi' ? 'आयु' : 'Age'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="patientAge"
                    placeholder="Age"
                    value={formData.patientAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-medical-500 focus:bg-white transition-all font-bold font-mono"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {lang === 'bn' ? 'লিঙ্গ' : lang === 'hi' ? 'लिंग' : 'Gender'} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="patientGender"
                    value={formData.patientGender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-medical-500 focus:bg-white transition-all font-semibold"
                  >
                    <option value="Female">{lang === 'bn' ? 'নারী' : lang === 'hi' ? 'महिला' : 'Female'}</option>
                    <option value="Male">{lang === 'bn' ? 'पुरुष' : lang === 'hi' ? 'पुरुष' : 'Male'}</option>
                    <option value="Other">{lang === 'bn' ? 'অন্যান্য' : lang === 'hi' ? 'अन्य' : 'Other'}</option>
                  </select>
                </div>

              </div>

              {/* Row 3: Chamber Selection */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {lang === 'bn' ? 'চিকিৎসাকেন্দ্র / চেম্বার নির্বাচন করুন' : lang === 'hi' ? 'परामर्श क्लिनिक / चैंबर का चयन करें' : 'Select Clinic / Chamber'} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="chamberId"
                    value={formData.chamberId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-medical-500 focus:bg-white transition-all font-semibold appearance-none"
                  >
                    <option value="">{lang === 'bn' ? '-- চেম্বার নির্বাচন করুন --' : lang === 'hi' ? '-- सक्रिय परामर्श क्लिनिक चुनें --' : '-- Choose Active Chamber Clinic --'}</option>
                    {CLINIC_CHAMBERS.map(c => (
                      <option key={c.id} value={c.id}>
                        {getChamberNameTranslation(c.name)} ({lang === 'bn' ? 'সোম-রবি' : lang === 'hi' ? 'सोम-रवि' : c.daysRaw || c.timings.split('|')[0]})
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    ▼
                  </div>
                </div>
                {formData.chamberId && (
                  <div className="text-[11px] text-medical-900 font-medium px-1 mt-1 bg-medical-50 border border-medical-200 p-2 rounded-lg">
                    📌 <strong>{lang === 'bn' ? 'সময়সূচী:' : lang === 'hi' ? 'समयसीमा:' : 'Schedule:'}</strong> {CLINIC_CHAMBERS.find(c => c.id === formData.chamberId)?.timings}
                  </div>
                )}
              </div>

              {/* Row 4: Preferred Date */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {lang === 'bn' ? 'পছন্দের তারিখ' : lang === 'hi' ? 'पसंदीदा तारीख' : 'Preferred Date'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  min={getMinDateString()}
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-medical-500 focus:bg-white transition-all font-bold font-mono"
                />
                {formData.date && (
                  <div className="text-[11px] text-emerald-800 font-semibold px-2.5 py-1.5 mt-1.5 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-between">
                    <span>🗓️ {lang === 'bn' ? 'নির্বাচিত বার:' : lang === 'hi' ? 'चयनित दिन:' : 'Selected:'} <strong>{getWeekdayOfDateTranslated(formData.date)}</strong></span>
                    <span>✓ {lang === 'bn' ? 'চেম্বার দিন মিলিয়ে নেওয়া হয়েছে' : lang === 'hi' ? 'चैंबर दिन सिंक्रनाइज़' : 'Chamber synchronised'}</span>
                  </div>
                )}
              </div>

              {/* Row 5: Notes / Symptoms */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {lang === 'bn' ? 'রোগীর সমস্যা বা পূর্বে করনো পরীক্ষা (ঐচ্ছিক)' : lang === 'hi' ? 'लक्षण या बीमारी का विवरण लिखें (वैकल्पिक)' : 'Describe Symptoms / Diagnosis (Optional)'}
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder={lang === 'bn' ? 'যেমন জরায়ুর টিউমার, সিস্ট, ইউরিক অ্যাসিড, গ্যাস্ট্রিক ইত্যাদি সমস্যার বিবরণ দিতে পারেন।' : lang === 'hi' ? 'जैसे गर्भाशय फाइब्रॉएड, डिम्बग्रंथि पुटी (PCOS), पत्थरी, जोड़ो का दर्द आदि।' : "Mention active conditions (e.g., Uterine fibroid diagnosis, PCOS symptoms, lipoma lump in hand, etc.)"}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-medical-500 focus:bg-white transition-all font-medium"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 text-center text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl font-bold transition-all shadow-md active:scale-99 flex items-center justify-center gap-2.5 cursor-pointer mt-2"
                style={{backgroundColor: '#059669'}}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপের মাধ্যমে বুকিং জমা দিন' : lang === 'hi' ? 'व्हाट्सएप पर तुरंत टिकट बुक करें' : 'Submit & Confirm on WhatsApp'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          </div>

          {/* RIGHT PANEL: Hot ticket booking outputs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual ticket confirmation receipt widget */}
            {justBooked ? (
              <div className="bg-gradient-to-tr from-medical-800 to-medical-950 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden text-left animate-pulse-once" id="active-booking-ticket">
                
                {/* Ticket background highlights */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-medical-500/10 rounded-full blur-xl" />

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-medical-200 font-mono tracking-widest bg-white/10 px-2 py-0.5 rounded-sm border border-white/5">
                      OFFICIAL MEDICAL RECIPIENT
                    </span>
                    <h4 className="text-xl font-extrabold font-display mt-1">
                      {lang === 'bn' ? 'বুকিং টিকিট কপি' : lang === 'hi' ? 'अपॉइंटमेंट बुकिंग पर्ची' : 'Appointment Ticket'}
                    </h4>
                  </div>
                  <Ticket className="w-8 h-8 text-medical-200 shrink-0" />
                </div>

                {/* Queue ticket detail segment styled as physical receipt */}
                <div className="bg-white text-slate-850 rounded-2xl p-4 space-y-4 border border-medical-500/20 shadow-lg relative">
                  
                  {/* Decorative cutouts of a standard ticket */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-6 h-6 rounded-full bg-slate-900" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-6 h-6 rounded-full bg-slate-900" />

                   <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <div className="text-left">
                      <div className="text-[9px] font-bold text-slate-400 uppercase">
                        {lang === 'bn' ? 'লাইন সিরিয়াল নম্বর' : lang === 'hi' ? 'कतार संख्या (सीरियल)' : 'Queue Slot'}
                      </div>
                      <div className="text-2xl font-black text-medical-805">#{justBooked.queueNumber}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-bold text-slate-400 uppercase">
                        {lang === 'bn' ? 'টিকিট আইডি' : lang === 'hi' ? 'पर्ची आईडी' : 'Ticket ID'}
                      </div>
                      <div className="text-xs font-bold font-mono text-slate-700">{justBooked.id}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-[9px] font-bold text-slate-450 uppercase">
                        {lang === 'bn' ? 'রোগীর নাম' : lang === 'hi' ? 'मरीज का नाम' : 'Patient Name'}
                      </div>
                      <div className="font-bold text-slate-800 truncate">{justBooked.patientName}</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-slate-450 uppercase">
                        {lang === 'bn' ? 'বয়স / লিঙ্গ' : lang === 'hi' ? 'आयु / लिंग' : 'Age / Gender'}
                      </div>
                      <div className="font-bold text-slate-800">{justBooked.patientAge} Yrs / {justBooked.patientGender}</div>
                    </div>
                  </div>

                  <div className="text-xs pt-1 border-t border-slate-100/65">
                    <div className="text-[9px] font-bold text-slate-450 uppercase">
                      {lang === 'bn' ? 'পরামর্শ চেম্বার' : lang === 'hi' ? 'परामर्श चैंबर' : 'Consultation Chamber'}
                    </div>
                    <div className="font-semibold text-slate-800 leading-snug">{getChamberNameTranslation(justBooked.chamberName)}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div>
                      <div className="text-[9px] font-bold text-slate-450 uppercase">
                        {lang === 'bn' ? 'পরামর্শের তারিখ' : lang === 'hi' ? 'परामर्श तिथि' : 'Date of Consult'}
                      </div>
                      <div className="font-mono font-bold text-slate-800">{justBooked.date}</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-slate-450 uppercase">
                        {lang === 'bn' ? 'অবস্থা' : lang === 'hi' ? 'स्थिति' : 'Status'}
                      </div>
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm text-[10px]">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {lang === 'bn' ? 'নিশ্চিত' : lang === 'hi' ? 'पुष्टि' : 'Confirmed'}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Call-to-action button to validate with the physical hospital clinic system */}
                <div className="mt-5 space-y-2 text-center text-xs">
                  <div className="text-medical-200">
                    {lang === 'bn' ? '⚠️ টিকিট স্বয়ংক্রিয়ভাবে তৈরি হয়েছে! অবিলম্বে বুকিং কনফার্ম করতে এবং চেম্বার সিরিয়াল পেতে এই সবুজ বাটনে ক্লিক করে হোয়াটসঅ্যাপে পাঠান।' : lang === 'hi' ? 'टिकट पंजीकृत हो गया है! तुरंत अपॉइंटमेंट कन्फर्म करने और टोकन नंबर पाने के लिए इसे व्हाट्सएप पर भेजें।' : '⚠️ Active Ticket Registered! Send details via WhatsApp to receive confirmation from clinic manager.'}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <a
                      href={`https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}?text=${getWhatsAppMessage(justBooked)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 bg-emerald-505 hover:bg-emerald-610 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-950/20 active:scale-98 transition-all cursor-pointer"
                      style={{backgroundColor: '#059669'}}
                    >
                      <MessageSquare className="w-4 h-4" /> {lang === 'bn' ? 'হোয়াটসঅ্যাপে টিকিট পাঠান' : lang === 'hi' ? 'व्हाट्सएप पर टिकट भेजें' : 'Send WhatsApp Receipt'}
                    </a>
                    
                    <button
                      onClick={() => window.print()}
                      className="py-2 px-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl font-semibold flex items-center justify-center gap-1.5 transition-all text-xs"
                    >
                      <FileText className="w-4 h-4" /> {lang === 'bn' ? 'টিকিট স্লিপ প্রিন্ট করুন' : lang === 'hi' ? 'बुकिंग पर्ची प्रिंट करें' : 'Print Booking Slip'}
                    </button>
                  </div>

                  <button
                    onClick={() => setJustBooked(null)}
                    className="text-[10px] text-medical-200 hover:text-white font-medium hover:underline inline-block mt-3"
                  >
                    {lang === 'bn' ? 'আরেকটি বুকিং করতে চান? এখানে ক্লিক করুন' : lang === 'hi' ? 'दूसरा टिकट बुक करें' : 'Need another ticket? Book again'}
                  </button>
                </div>

              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-150 p-6 text-left space-y-4 shadow-3xs" id="quick-helpline-box">
                <h4 className="text-base font-bold font-display text-slate-800">
                  {lang === 'bn' ? 'বুকিং ও জরুরি হেল্পলাইন চ্যানেল' : lang === 'hi' ? 'बुकिंग और हेल्पलाइन चैनल' : 'Booking / Helpline Channels'}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {lang === 'bn' ? 'সেন্ট্রাল ক্লিনিকাল হেল্পলাইন সমস্ত ৭ টি সক্রিয় ক্লিনিকের জন্য কাতার টিকিট, অ্যাপয়েন্টমেন্ট এবং চিকিৎসার তথ্য পরিচালনা করে।' : lang === 'hi' ? 'केंद्रीय हेल्पलाइन सभी सक्रिय क्लीनिकों के लिए कतार टिकट, नियुक्तियों और उपचार प्रश्नों का प्रबंधन करती है।' : 'The central clinical helpline manages queue ticketing, appointments, treatment inquiries, and diagnostics history files for all 7 active clinics.'}
                </p>

                <div className="space-y-2 pt-2">
                  <a
                    href={`tel:${DOCTOR_INFO.leadHelplineCall}`}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-150 hover:border-medical-250 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-medical-50 text-medical-700">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          {lang === 'bn' ? 'টেলিফোন কল হেল্পলাইন' : lang === 'hi' ? 'टेलीफोन कॉल हेल्पलाइन' : 'Telephone Helpline'}
                        </div>
                        <div className="text-xs font-semibold text-slate-500 font-mono">{DOCTOR_INFO.leadHelplineCall}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-medical-600 transition-colors" />
                  </a>

                  <a
                    href={`https://wa.me/91${DOCTOR_INFO.leadHelplineWhatsapp}?text=Inquiry%20regarding%20specialist%20homeopathy%20treatments%20with%20Dr_Parvez_Khan`}
                    target="_blank"
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-150 hover:border-emerald-250 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          {lang === 'bn' ? 'হোয়াটসঅ্যাপ বার্তা সহায়তা' : lang === 'hi' ? 'व्हाट्सएप परामर्श सहायता' : 'WhatsApp Query Support'}
                        </div>
                        <div className="text-xs font-semibold text-slate-500 font-mono">{DOCTOR_INFO.leadHelplineWhatsapp}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                  </a>
                </div>

                {(() => {
                  const tomorrowInfo = getTomorrowClinicsAndDay();
                  return (
                    <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-505 shrink-0 mt-0.5" style={{color: '#ef4444'}} />
                      <div>
                        <span className="text-[10px] font-bold text-rose-805 uppercase tracking-wide">
                          {lang === 'bn' ? 'রোগী সুরক্ষা পরামর্শ' : lang === 'hi' ? 'मरीज सुरक्षा सलाह' : 'Patient Safety Advisory'}
                        </span>
                        <p className="text-[11px] text-slate-600 leading-normal mt-0.5 font-sans">
                          {lang === 'bn' ? (
                            <>আগামীকালের বুকিং (তারিখ: <strong>{tomorrowInfo.dayName}, {tomorrowInfo.dateStr}</strong>) শুধুমাত্র অনুরোধ করা যেতে পারে। <strong>{getChamberNameTranslation(tomorrowInfo.clinicNames)}</strong> চেম্বারে আগে থেকে বুকিং করা রোগীদেরই অগ্রাধিকার দেওয়া হয়। তাই সরাসরি উপস্থিত হওয়ার আগে ফোনে যোগাযোগ করতে পরামর্শ দেওয়া হচ্ছে।</>
                          ) : lang === 'hi' ? (
                            <>कल की बुकिंग (दिन: <strong>{tomorrowInfo.dayName}, {tomorrowInfo.dateStr}</strong>) केवल अनुरोध की जा सकती है। <strong>{getChamberNameTranslation(tomorrowInfo.clinicNames)}</strong> में डॉक्टर से मिलने के लिए पहले से अपॉइंटमेंट लेना अनिवार्य है। शारीरिक रूप से जाने से पहले फोन पर परामर्श सुनिश्चित करें।</>
                          ) : (
                            <>Tomorrow's bookings (for <strong>{tomorrowInfo.dayName}, {tomorrowInfo.dateStr}</strong>) can only be requested. Appointments for <strong>{getChamberNameTranslation(tomorrowInfo.clinicNames)}</strong> are booked <strong>by prior appointment only</strong>. Make sure to register or consult over phone prior to physical walk-ins.</>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
