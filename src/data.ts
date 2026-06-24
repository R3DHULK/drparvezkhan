/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClinicChamber, TreatmentSpecialty, FAQItem, Testimonial } from './types';

export const DOCTOR_INFO = {
  name: "Dr. Parvez Ahmed Khan",
  title: "Renowned Homeopathic Specialist & Consultant",
  experience: "22 Years of Experience",
  experienceShort: "22+ Years",
  regdNo: "A25986",
  qualifications: [
    { title: "MD (Hom)", detail: "Doctor of Medicine in Homeopathy" },
    { title: "BHMS (Cal)", detail: "Bachelor of Homeopathic Medicine and Surgery, Calcutta University" },
    { title: "N.I.H. (Govt. of India)", detail: "National Institute of Homeopathy, Govt. of India" }
  ],
  bio: "Dr. Parvez Ahmed Khan is an exceptionally skilled and compassionate Homeopathic Specialist with over two decades of dedicated medical experience. Celebrated for his expertise in treating complex chronic disorders, organic pathologies, lifestyle diseases, and benign anomalies, he employs highly tailored holistic strategies. He has received national acclaim for his research-driven and patient-centric homeopathic treatments.",
  specialFeature: "Renowned for successfully providing supportive and pathogenetic homeotherapeutic solutions for non-operable and complicated benign/malignant growths.",
  leadHelplineCall: "9735300200",
  leadHelplineWhatsapp: "9874786886"
};

export const CLINIC_CHAMBERS: ClinicChamber[] = [
  {
    id: "bhangar",
    name: "Bhangar Bijayganja Bajar Chamber",
    location: "Opposite side of Chaitali Cinema Hall, Bhangar, 24 Parganas South",
    landmark: "Opposite Chaitali Cinema",
    timings: "Sunday & Wednesday: 12:00 PM to 8:00 PM | Thursday: 6:00 PM to 8:00 PM",
    days: ["Sunday", "Wednesday", "Thursday"],
    daysRaw: "Sunday & Wednesday (12 PM - 8 PM), Thursday (6 PM - 8 PM)",
    contact: ["9735300200"]
  },
  {
    id: "rajarhat",
    name: "Rajarhat Chamber",
    location: "91 no. Bus Route, Kathgola Bus Stand, Above HDFC Bank, Rajarhat, Kolkata",
    landmark: "Above HDFC Bank, Kathgola Bus Stand",
    timings: "Saturday: 2:30 PM to 6:00 PM",
    days: ["Saturday"],
    daysRaw: "Saturday (2:30 PM - 6 PM)",
    contact: ["9735300200"]
  },
  {
    id: "medilife",
    name: "Medilife Diagnostic Centre",
    location: "Opposite side of Haroa Hospital, Haroa, North 24 Parganas",
    landmark: "Opposite Haroa Hospital",
    timings: "Every Monday: 6:00 PM to 8:00 PM",
    days: ["Monday"],
    daysRaw: "Monday (6 PM - 8 PM)",
    contact: ["9641435596"]
  },
  {
    id: "permanent-maloncho",
    name: "Permanent Chamber (Maloncho)",
    location: "Maloncho Ferry Pier (Next to the mosque, opposite of Lotus Club), Maloncho",
    landmark: "Next to the Mosque, Opposite Lotus Club",
    timings: "Thursday: 2:00 PM to 5:00 PM",
    days: ["Thursday"],
    daysRaw: "Thursday (2 PM - 5 PM)",
    contact: ["9735300200", "9083996322"]
  },
  {
    id: "temporary-maloncho",
    name: "Temporary Chamber (Karmatirtha building)",
    location: "Karmatirtha Building (Super Market), Maloncho Bajaar (Vegetable Market), Maloncho",
    landmark: "Maloncho Vegetable Market Super Market",
    timings: "Thursday: 2:00 PM to 5:00 PM",
    days: ["Thursday"],
    daysRaw: "Thursday (2 PM - 5 PM)",
    contact: ["7407494298"],
    isTemporary: true
  },
  {
    id: "pratikkhan",
    name: "Pratikkhan Diagnostic Centre",
    location: "Crossroad of Berachampa, Prithiba Road",
    landmark: "Crossroad of Berachampa",
    timings: "Monday: 2:00 PM to 5:00 PM",
    days: ["Monday"],
    daysRaw: "Monday (2 PM - 5 PM)",
    contact: ["9474108042", "9091988910"]
  },
  {
    id: "inaya",
    name: "Inaya Homeopathy Clinic",
    location: "39/1 Indrani Park, Anwar Shah Road, Kolkata - 700033",
    landmark: "Near Jogeshchandra Chowdhury College",
    timings: "Tuesday, Friday, Saturday: 11:00 AM to 1:00 PM & 7:00 PM to 9:00 PM (By Appointment Only)",
    days: ["Tuesday", "Friday", "Saturday"],
    daysRaw: "Tuesday, Friday, Saturday (11 AM - 1 PM & 7 PM - 9 PM)",
    contact: ["9433323404"]
  }
];

export const TREATMENTS: TreatmentSpecialty[] = [
  {
    name: "Brain Tumor & Glioma",
    description: "Homeopathic management helps slow pathological progression and reduces severe intracranial pressure symptoms, restoring functional quality of life without aggressive side effects.",
    category: "tumor",
    symptoms: ["Chronic persistent headaches", "Projective vomiting", "Seizures or visual disturbances", "Impaired motor coordination"],
    homeopathyScope: "Targets deep-seated sycotico-syphilitic diathesis, helping control edema in space-occupying neurological lesions.",
    therapeuticBenefits: ["Relief from cerebral pressure", "Mitigating seizure frequencies", "Safe combination with standard supportive therapies"]
  },
  {
    name: "Uterine Tumor & Fibroids",
    description: "Holistic treatment for benign muscular growths of the uterus. Homeopathic constitutional medicines assist in shrinking uterine fibroids and correcting hormonal imbalances naturally.",
    category: "tumor",
    symptoms: ["Menobilia or severe menorrhagia", "Lower abdominal heaviness", "Painful dysmenorrhea", "Frequent urination"],
    homeopathyScope: "Indicated deeply to revert dynamic hormonal imbalances, assisting the body to naturally resorb soft fibromatous tissues.",
    therapeuticBenefits: ["Gradual reduction in size of calcified/muscular fibroids", "Regulation of healthy menstruation", "Prevention of painful surgeries"]
  },
  {
    name: "Breast Tumor & Fibroadenoma",
    description: "Symptomatic and pathological management for breast lumps, including benign fibroadenomas and cysts, preventing surgical interventions and scar tissues.",
    category: "tumor",
    symptoms: ["Slightly movable painless lumps", "Rubbery, firm breast nodes", "Cyclical mastalgia / breast tenderness"],
    homeopathyScope: "Mainly indicated by remedies like Conium, Phytolacca, and Baryta Carb, targeting glandular indurations naturally.",
    therapeuticBenefits: ["Dissolving rubbery fibrous tissues", "Relieving local tenderness", "Providing psychological ease by avoiding surgery"]
  },
  {
    name: "Nose, Ear & Throat Tumor",
    description: "Addressing aural, nasal, or pharyngeal growths (like nasopharyngeal tumors, vocal pack growths, benign polyps, or vocal nodules).",
    category: "tumor",
    symptoms: ["Chronic nasal blockage", "Snoring or mucosal discharges", "Throat hoarseness", "Partial hearing loss / persistent ear congestion"],
    homeopathyScope: "Corrects metabolic mucous congestion and glandular overgrowths using customized anti-sycotic homeopathic cures.",
    therapeuticBenefits: ["Clearing airways and sinus cavities", "Restoring voice texture", "Preventing systemic recurrence after excision"]
  },
  {
    name: "Lipoma & Sebaceous Cyst",
    description: "Professional homeopathy focuses on systemic metabolism to stop and gradually shrink multiple moveable fat deposits under the skin (Lipomatosis).",
    category: "tumor",
    symptoms: ["Moveable, soft fat nodes", "Cosmetic concerns", "Occasional dull pain if pressing against peripheral nerves"],
    homeopathyScope: "Improves lipid assimilation and resolves lymphatic stagnation, helping in the gradual metabolic resolution of nodes.",
    therapeuticBenefits: ["Halting the formation of new lumps", "Gradual softening and absorption of existing lipomas", "Entirely non-invasive treatment"]
  },
  {
    name: "PCOS / PCOD & Uterine Cysts",
    description: "Treating Polycystic Ovary Syndrome and functional cysts by addressing endocrine disruptions at the root, restoring ovulation, and clearing ovarian fluid sacs.",
    category: "common_pcos",
    symptoms: ["Irregular or delayed menstruation", "Hirsutism / male-pattern hair growth", "Stubborn hormonal acne", "Weight-gain resistance"],
    homeopathyScope: "Constitutional remedies stimulate the pituitary-ovarian axis to naturally mature and release ova, normalizing estrogen-progesterone cycles.",
    therapeuticBenefits: ["Successful resolution of fluid-filled ovarian cysts", "Restoration of natural, predictable menstrual cycles", "Improvement in skin texture and natural weight management"]
  },
  {
    name: "Ganglion Cyst",
    description: "Dissolving fluid-filled swellings on the joints of wrists, hands, or feet through localized and systemically acted-upon medical dynamics.",
    category: "cyst",
    symptoms: ["Visible round bump on wrists/tendons", "Dull ache or stiffness during joint articulation", "Restricted flexibility"],
    homeopathyScope: "Homeopathic specifics like Ruta Graveolens and Silicea help resorb localized synovial fluid collections.",
    therapeuticBenefits: ["Complete pain relief during finger/wrist articulation", "Elimination of fluid tension", "Zero risk of recurrence unlike syringe aspirations"]
  },
  {
    name: "Neurofibroma & Glioma",
    description: "Comprehensive medical management for benign lesions occurring along the peripheral nervous system, focusing on halting expansion and preventing neurological damages.",
    category: "cancer",
    symptoms: ["Dermal fleshy nodules along nerve trunks", "Tingling or sharp shooting pains", "Localized cosmetic distress"],
    homeopathyScope: "Addresses deep hereditary genetic predispositions, working to suppress cell-proliferating dynamics inside the myelin sheath.",
    therapeuticBenefits: ["Relieving neuropathic pain", "Slowing down nodular expansion", "Sustaining central neurological stability"]
  },
  {
    name: "Chronic & Blood Pathologies (Thalassemia, Hepatitis, HIV)",
    description: "Excellent, expert homeopathic therapeutic management of severe blood diseases, chronic virus infections, and advanced immunological deficits.",
    category: "cancer",
    symptoms: ["Thalassemia major/minor support", "Hepatitis A, B, C infections & elevated viral load", "HIV immune building", "Cancer & tumor helper therapies"],
    homeopathyScope: "Targets cell defense mechanisms and cellular nutrition using research-backed miasmatic combinations to enhance systemic vigor.",
    therapeuticBenefits: ["Reduces the severity of splenomegalic symptoms", "Normalizes liver enzyme profiles safely", "Promotes general immunity levels against seasonal infections"],
    customHelpline: "9735300200",
    customWhatsapp: "9874786886"
  },
  {
    name: "Hormonal & Endocrine Care (Thyroid, Diabetes, Uric Acid)",
    description: "Holistic treatment focusing on metabolic re-tuning, glandular secretions, and reducing medication dependencies for lifetime diseases.",
    category: "common_pcos",
    symptoms: ["Thyroid anomalies (Hypothyroid, Hyperthyroid)", "High Uric Acid / painful gouty crystals", "Diabetes mellitus (sugar control)", "Sudden weight shifts & lethargy"],
    homeopathyScope: "Stimulates structural endocrine glands (pancreas, thyroid) at cellular level utilizing personalized constitutional remedies.",
    therapeuticBenefits: ["Helps correct and balance elevated TSH levels", "Assists in removing pain and lowering uric acid buildup", "Facilitates control over fluctuating glycemic readings"]
  },
  {
    name: "Pediatric & Childhood Care",
    description: "Subtle, chemical-free, sweet homeopathic medications formulated carefully for sensitive infanthood, childhood developmental setbacks, and respiratory issues.",
    category: "pediatric",
    symptoms: ["Childhood Asthma & frequently catching cold", "Autism spectrum disorder, ADHD & absent-mindedness", "Pneumonia, coughs, pox & measles (Ham disease)", "Napkin allergy & chronic gut/digestification problems"],
    homeopathyScope: "Improves developmental neurological reflexes and local mucosal immune systems gently, without toxic residues.",
    therapeuticBenefits: ["Reduces frequency of cold and inhaler dependency", "Increases attention span and reduces hyperactivity naturally", "Heals delicate baby skin form napkin allergy with soothing effectiveness"],
    customHelpline: "9083996322",
    customWhatsapp: "9874786886"
  },
  {
    name: "Renal, Prostate & Bladder Disorders",
    description: "Excellent non-surgical clinical care path for kidney stones, kidney cysts, bedwetting, urinary leakage, and prostatic hyperplasias.",
    category: "kidney",
    symptoms: ["Kidney stones & kidney cysts", "Involuntary urine leakage & bedroom bedwetting (toilet in bed)", "High urinary frequency, UTIs & prostate enlargement", "Chronic Kidney Disease support (CKD / CRF / Kidney fail)"],
    homeopathyScope: "Enables natural lithontriptic (stone dissolution) activities and helps regulate creatinine/urea clearance.",
    therapeuticBenefits: ["Assists in dissolving and naturally flushing out renal calculi", "Quiets involuntary nocturnal bedwetting in children and elders", "Provides relief from burning micturition and elevated UTI relapse"],
    customHelpline: "9735300200",
    customWhatsapp: "9874786886"
  },
  {
    name: "Ophthalmic & Eye Vein Care",
    description: "Therapeutic clinical approach focused on visual nerve nourishment, intraocular tension management, and systemic allergy relief.",
    category: "eye",
    symptoms: ["Diseases of the eye vein", "Watery eyes & allergies", "Early cataracts & corneal haziness", "Glaucoma (high eye pressure) & blurred vision"],
    homeopathyScope: "Nourishes fine ocular microvessels and ophthalmic nerve trunks through specific clinical homeopathy.",
    therapeuticBenefits: ["Alleviates continuous watery discharge and itchiness", "Helps retain lens clarity in early-stage senile cataracts", "Provides structural support in reducing high intraocular tension pressure"],
    customHelpline: "9735300200",
    customWhatsapp: "9874786886"
  },
  {
    name: "Neuropsychiatry & Insomnia Wellness",
    description: "Gentle restorative therapy to address stress-induced, degenerative, or psychiatric ailments without chemical sedation.",
    category: "mental",
    symptoms: ["Insomnia (sleeplessness) & restless sleep", "Depression, dementia & memory fade", "Skepticism (unexplained doubt) & fear disorders", "Madness, psychosis & obsessive patterns"],
    homeopathyScope: "Soothes stressed nerve synapses and balances fundamental cerebral vitality without causing morning drowsiness or dependency.",
    therapeuticBenefits: ["Restores normal, natural deep-sleep cycles", "Improves cognitive clarity and calms persistent irrational fear", "Suppresses behavioral skepticism and emotional distress"],
    customHelpline: "9735300200",
    customWhatsapp: "9874786886"
  },
  {
    name: "Cardiovascular Support System",
    description: "Strategic homeopathic aid to optimize heart muscle strength, manage arterial pressures, and support congenital cardiac anomalies.",
    category: "heart",
    symptoms: ["Breathing difficulties (dyspnea) on slight exertion", "Severe heart palpitations & flutter", "Heart valve disease & early stage heart failure", "Hole in the heart (congenital ASD / VSD), blood pressure issues"],
    homeopathyScope: "Supports cardiac muscle fiber tone and enhances venous circulation using specialized homeopathic elements (Crataegus, Digitalis, Cactus).",
    therapeuticBenefits: ["Eases the feeling of respiratory chest constriction", "Helps keep systolic and diastolic blood pressure readings in check", "Provides auxiliary nourishment in congenital cardiac conditions"],
    customHelpline: "9735300200",
    customWhatsapp: "9874786886"
  },
  {
    name: "Respiratory, Allergies & ENT Care (Adenoids & Polyps)",
    description: "Specialist solutions for chronic inflammatory blockages in nose, throat, ears, and lungs—successfully avoiding invasive ENT operations.",
    category: "respiratory",
    symptoms: ["Adenoid hyperplasias & nasal polyps", "Coughing, sneezing, cold, snoring & asthma", "Tonsils (tonsillitis) & ear/nose bleeding (epistaxis)", "Nasal congestion, respiratory allergy & COSM"],
    homeopathyScope: "Shrinks vascular polyps and lymphatic adenoidal swellings through targeted anti-sycotic constitutional remedies.",
    therapeuticBenefits: ["Relieves snoring and nocturnal breath-blocking congestion", "Resolves chronic adenoid or tonsil pain permanently", "Helps control sudden nosebleeds and reduces allergic nasal hypersensitivity"],
    customHelpline: "9735300200",
    customWhatsapp: "9874786886"
  },
  {
    name: "Male Reproductive & Vitality Wellness",
    description: "Discreet and strictly confidential specialist consultations addressing male reproductive disorders and physical exhaustion.",
    category: "male",
    symptoms: ["Spermatorrhea (involuntary discharge)", "Erectile dysfunction (ED) & performance anxiety", "Wet dreams (nocturnal emissions) & physical exhaustion"],
    homeopathyScope: "Imparts targeted tone to the lumbosacral plexus and prostatic nerve pathways to restore self-confidence and vigor.",
    therapeuticBenefits: ["Restores physical stamina and nervous energy", "Controls wet dreams and stops spermatorrhea naturally", "Resolves functional erectile issues safe from systemic side-effects"],
    customHelpline: "9735300200",
    customWhatsapp: "9874786886"
  },
  {
    name: "Neuromuscular, Joints & post-Stroke Care",
    description: "Soothes acute joint wear-and-tear, corrects spinal nerve compassions, and encourages recovery in neurological motor losses.",
    category: "neuromuscular",
    symptoms: ["Osteoarthritis (O.A.) & sciatic nerve shooting pain", "Stroke, paralysis & CVA (cerebrovascular accident)", "Parkinson's tremors, epilepsy, stroke & hysteria", "Heel spur, swelling, joint fluid retention & vascular weakness"],
    homeopathyScope: "Aids vascular circulation, minimizes neural inflammation, and improves muscular motor coordinates using deep-acting therapeutic dynamics.",
    therapeuticBenefits: ["Reduces severe joint swelling and improves ease of walking", "Aids progressive motor recovery post-paralysis/CVA", "Soothes burning and tingling nerve pathways of sciatica and heel spur"],
    customHelpline: "9735300200",
    customWhatsapp: "9874786886"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does homeopathy treat deep-seated organic growths, cysts, and nasal polyps?",
    answer: "Homeopathy addresses the systemic predisposition (miasmatic block) that initiates abnormal cell proliferation. Rather than simply excising the growth locally, constitutional remedy selection stimulates the body's defensive immune reflexes. This supports gradual regression of fibrous tissues, benign nodules, glandular cysts, uterine fibroids, and mucosal polyps from within.",
    category: "Pathology"
  },
  {
    id: "faq-2",
    question: "Can homeopathy help children suffering from bedwetting, chronic asthma, ADHD, or Autism?",
    answer: "Yes, homeopathy is exceptionally safe, sweet-tasting, and chemical-free, making it perfect for children. For sensory/neurological conditions like Autism or ADHD, it improves focus and balances hyperactivity by strengthening neurological pathways. For bedwetting (toilet in bed) and childhood asthma, it strengthens the urinary sphincter tone and lowers bronchial mucosal hypersensitivity.",
    category: "Pediatrics"
  },
  {
    id: "faq-3",
    question: "Can large kidney stones and prostatic enlargement be resolved without surgery?",
    answer: "Yes, advanced clinical homeopathy employs lithontriptic remedies that help in breaking down, softening, and dissolving calcium oxalate or uric acid renal calculi (stones), flushing them out painlessly in urine. Prostatic congestion and urinary frequency are also controlled by soothing bladder inflammation and resting the detrusor muscles.",
    category: "Renal"
  },
  {
    id: "faq-4",
    question: "Is there any support available for complex chronic conditions like Thalassemia, Hepatitis, or HIV?",
    answer: "While serious chronic, systemic, or genetic illnesses require primary diagnostic follow-ups, homeopathic target remedies serve as brilliant supportive therapies. In Thalassemia, homeopathic aids support cellular vitality and hematopoiesis to maintain overall hemoglobin levels. For chronic Hepatitis (A, B, C) or HIV support, it helps protect liver cells, manage viral loads, and elevate the patient's absolute vital stamina and immunity.",
    category: "Chronic"
  },
  {
    id: "faq-5",
    question: "How does homeopathic treatment address severe insomnia, anxiety, and mental skepticism?",
    answer: "Our brain-centric approach modulates fine neural synapses and calms cerebral overactivity. Unlike general chemical tranquilizers or sedatives, homeopathic neuropsychiatric remedies do not create dependency, morning brain-fog, or metabolic laziness. They gently ease chronic insomnia, persistent skepticism, sadness, and anxiety from the root.",
    category: "Mental"
  },
  {
    id: "faq-6",
    question: "Can I manage heart valve diseases, ventricular holes (ASD/VSD), and respiratory blockages?",
    answer: "Of course. Cardiovascular supportive homeopathy utilizes natural cardiac tonics (such as Crataegus Oxycantha) to optimize myocardial strength, manage heart flutters, and ease dyspnea (breathing difficulties). For respiratory anomalies like hyperplastic nasal adenoids, tonsils, or polyps, targeted anti-inflammatory micro-remedies shrink swellings to avoid major ENT operations.",
    category: "General"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    patientName: "S. Roychowdhury",
    age: 46,
    location: "Kolkata",
    condition: "Uterine Fibroid (3.8 cm)",
    rating: 5,
    text: "I was strongly advised surgery to remove my uterus. I wanted to try a non-surgical path first and came to Dr. Parvez Khan. Within 6 months of constitutional treatment, my USG report showed absolute regression, and my heavy bleeding completely stopped! Tremendous experience.",
    date: "April 2026",
    isVerified: true
  },
  {
    id: "test-2",
    patientName: "Kabir Mandal",
    age: 9,
    location: "Rajarhat, Kolkata",
    condition: "Bedwetting (Toilet in Bed) & Pediatric Asthma",
    rating: 5,
    text: "My son struggled with involuntary bedwetting nightly and had severe asthma triggers whenever seasons changed. Dr. Khan's sweet, chemical-free globules worked wonders. Within 4 months, his bedwetting stopped entirely and he has not needed an emergency inhaler since!",
    date: "May 2026",
    isVerified: true
  },
  {
    id: "test-3",
    patientName: "Anisur Rahman",
    age: 43,
    location: "Bhangar",
    condition: "Renal calculi (Kidney Stone of 8.4mm)",
    rating: 5,
    text: "Suffered from agonizing lumbar pain due to a hard renal stone stuck in the left ureter. Dr. Khan's lithontriptic remedy dissolved the stone into microscopic grains, flushing it out easily in my urine over 8 weeks. No surgery needed!",
    date: "February 2026",
    isVerified: true
  },
  {
    id: "test-4",
    patientName: "Mitali Goswami",
    age: 57,
    location: "Anwar Shah Road",
    condition: "Severe Hypothyroidism & High Uric Acid",
    rating: 5,
    text: "I had agonizing heel spur pain and joint swelling owing to high serum uric acid and an underactive thyroid. Dr. Parvez Khan's dual-action treatment normalized my TSH levels, lowered my uric acid, and cleared my painful joint inflammation.",
    date: "March 2026",
    isVerified: true
  },
  {
    id: "test-5",
    patientName: "Jahirul Islam",
    age: 32,
    location: "Haroa",
    condition: "Male Vitality & Spermatorrhea",
    rating: 5,
    text: "I was extremely anxious regarding severe physical exhaustion, involuntary wet dreams, and spermatorrhea. Dr. Parvez Khan provided top-tier, confidential clinical advice and customized dynamic remedies that restored my stamina, nervous confidence, and marital harmony.",
    date: "January 2026",
    isVerified: true
  },
  {
    id: "test-6",
    patientName: "Basudeb Kar",
    age: 64,
    location: "Berachampa",
    condition: "Post-Stroke Motor Weakness & Sciatica",
    rating: 5,
    text: "Struggled with severe balance issues on my left side post-stroke and painful shooting sciatica down my right leg. His classical cerebrovascular and nerve-restoring homeopathy stimulated my muscle reflexes and completely quelled the burning nerve pains.",
    date: "May 2026",
    isVerified: true
  },
  {
    id: "test-7",
    patientName: "P. Chakraborty",
    age: 50,
    location: "Kolkata",
    condition: "Supportive Thalassemia Care",
    rating: 5,
    text: "Managing congenital Thalassemia has been hard, requiring persistent clinical checkups. Dr. Parvez Khan's deep-acting hematopoietic support remedies improved my active red cell count, resulting in much better physical energy and significantly spacing out my clinical transfusion gaps.",
    date: "June 2026",
    isVerified: true
  },
  {
    id: "test-8",
    patientName: "Tahira Bibi",
    age: 29,
    location: "Maloncho",
    condition: "Throat Adenoids & Nasal Polyps",
    rating: 5,
    text: "Constant snoring, mouth breathing, and throbbing throat congestion led specialists to declare I needed urgent ENT surgery. Within 5 months of Dr. Khan's breathing micro-remedies, my polyps completely shrank, and I sleep perfectly now.",
    date: "June 2026",
    isVerified: true
  }
];

