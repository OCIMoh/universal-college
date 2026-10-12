export interface DepartmentInfo {
  id: "commerce" | "humanities" | "computer-it" | "science-medical" | "fashion" | "nursing" | "vocational";
  name: string;
  shortName: string;
  tagline: string;
  headOrCoordinator: string;
  facultyCount: number;
  overview: string;
  associatedLabs: string[];
  courseIds: string[];
  keyHighlights: string[];
  careerProspects: string[];
  bannerImage: string;
}

export const DEPARTMENTS_DATA: DepartmentInfo[] = [
  {
    id: "computer-it",
    name: "Department of Computer Science & Information Technology",
    shortName: "Computer & IT",
    tagline: "Empowering computational logic, modern software architectures & AI competencies.",
    headOrCoordinator: "Ms. Karmjit Kaur (HOD, MCA)",
    facultyCount: 11,
    overview: "The Department of Computer Science & IT is the college's flagship technical wing, operating across 4 fully air-conditioned computer labs with 100+ networked desktop workstations, dedicated server racks, and high-speed fiber internet. We offer regular MRSPTU degree programs, specialized open university diplomas in Artificial Intelligence & Data Science, PGDCA, and vocational hardware/programming qualifications.",
    associatedLabs: [
      "Computer Laboratory 01 (General Computing & Programming)",
      "Computer Laboratory 02 (Advanced Java, Python & Web Development)",
      "Computer Laboratory 03 (Database & Network Simulation)",
      "Computer Laboratory 04 (Office Automation & CAD Center)"
    ],
    courseIds: ["bca", "msc_cs", "pgdca", "cmpa", "psou_bca", "psou_ai_ds", "psou_office_auto"],
    keyHighlights: [
      "100+ Modern Desktop Workstations with Windows & Linux dual boot",
      "Dedicated 100 Mbps high-speed optical fiber backbone",
      "Regular technical workshops on AI, Cloud, and Web frameworks",
      "Annual technical exhibition, coding contests, and digital literacy drives"
    ],
    careerProspects: [
      "Software Development & Full-Stack Engineering",
      "Data Analysis & Business Intelligence",
      "Government SSSB / PPSC IT Specialist roles",
      "Network Administration & Cybersecurity",
      "Postgraduate academic research and teaching"
    ],
    bannerImage: "/assets/campus/computer-lab.jpg",
  },
  {
    id: "commerce",
    name: "Department of Commerce & Management",
    shortName: "Commerce",
    tagline: "Nurturing ethical financial leadership, corporate governance & entrepreneurial acumen.",
    headOrCoordinator: "Ms. Gurwinder Kaur (Lead Faculty)",
    facultyCount: 4,
    overview: "The Department of Commerce prepares students for dynamic careers in corporate finance, banking, auditing, taxation law, and entrepreneurial ventures. Blending rigorous academic theory with computer-based accounting software (Tally ERP, GST portal filing, Excel financial modeling), our graduates consistently excel in professional credentials and regional enterprise roles.",
    associatedLabs: [
      "Business & Computerized Accounting Lab (Tally ERP & GST)",
      "Commerce Seminar & Case Study Hall"
    ],
    courseIds: ["bcom_hons", "psou_bcom"],
    keyHighlights: [
      "Specialized coaching in GST, corporate taxation & financial reporting",
      "Hands-on computerized tally accounting practicum",
      "Guest lectures by chartered accountants and banking professionals",
      "Guidance for CA Foundation, CMA, and banking recruitment exams"
    ],
    careerProspects: [
      "Corporate Financial Analyst & Accountant",
      "Tax Consultant & GST Practitioner",
      "Banking Probationary Officer & Risk Analyst",
      "Auditor & Compliance Associate",
      "Independent Business Entrepreneur"
    ],
    bannerImage: "/assets/campus/corridor.jpg",
  },
  {
    id: "humanities",
    name: "Department of Humanities, Languages & Social Sciences",
    shortName: "Humanities",
    tagline: "Critical inquiry, linguistic heritage, civil governance & cultural expression.",
    headOrCoordinator: "S. Yadwinder Singh (Principal / Advisor)",
    facultyCount: 14,
    overview: "The Department of Humanities is the intellectual bedrock of Universal College, housing 14 dedicated educators and athletic coaches. Offering courses in Punjabi Literature, English, Political Science, History, and Physical Education, the department provides an enriching bilingual learning environment tailored for rural Punjab youth preparing for public administration and civil services.",
    associatedLabs: [
      "Language & Articulation Commons",
      "Digital Reference Reading Room (DELNET enabled)",
      "Collegiate Athletic Ground & Indoor Sports Arena"
    ],
    courseIds: ["ba_cs", "psou_ba", "psou_ma_punjabi"],
    keyHighlights: [
      "Bilingual instruction (Punjabi & English) for maximum student accessibility",
      "Civil services foundation mentoring for UPSC & PPSC exams",
      "Vibrant literary forums, debate clubs, and Punjabi poetry circles",
      "Strong athletic representation at university and state tournaments"
    ],
    careerProspects: [
      "Punjab Civil Services (PCS) & Central Civil Services (UPSC)",
      "School & College Lectureship / Assistant Professorship",
      "Journalism, Mass Communication & Digital Media",
      "Public Relations & Administrative Cadres",
      "Non-Profit & Community Development Leadership"
    ],
    bannerImage: "/assets/campus/people-courtyard.webp",
  },
  {
    id: "nursing",
    name: "Department of Nursing & Healthcare Studies",
    shortName: "Nursing & Health",
    tagline: "Compassionate clinical competence, patient dignity & global healthcare standards.",
    headOrCoordinator: "Ms. Gurdeep Kaur (Clinical Coordinator)",
    facultyCount: 7,
    overview: "Responding to global demand for certified healthcare practitioners, the Department of Nursing delivers recognized skill certificates and 2-year diplomas in Nursing Assistance, Nanny Care, and Elderly Geriatric Support. Students train in our on-campus clinical demonstration laboratory and undertake mandatory hospital internships with regional medical institutions.",
    associatedLabs: [
      "Nursing Clinical Simulation Lab (Hospital Ward Setup)",
      "Anatomy & Clinical Demonstrations Room",
      "Campus Medical Room & First Aid Station"
    ],
    courseIds: ["nursing_assistant_cert", "nursing_assistant_dip", "psou_nanny", "nios_elderly_care", "nios_nanny"],
    keyHighlights: [
      "Simulated hospital beds, mannequins, vitals diagnostic equipment",
      "Mandatory clinical rotations in partnered multi-specialty hospitals",
      "Curriculum certified for international visa & immigration caregiver pathways",
      "Basic Life Support (BLS) and emergency first-aid certified faculty"
    ],
    careerProspects: [
      "Hospital Ward Nursing Assistant",
      "Certified Nanny / International Child Caregiver (Canada / UK / Europe)",
      "Geriatric Home Healthcare Specialist",
      "Private Clinic Coordinator & Phlebotomy Aide",
      "Community Healthcare Field Supervisor"
    ],
    bannerImage: "/assets/campus/medical-lab.jpg",
  },
  {
    id: "science-medical",
    name: "Department of Medical Laboratory & Allied Sciences",
    shortName: "Medical Lab Tech",
    tagline: "Diagnostic precision, pathology science & community healthcare outreach.",
    headOrCoordinator: "Dr. Amrish Dhawan (Director / Scientific Mentor)",
    facultyCount: 5,
    overview: "The Department of Medical Laboratory Technology prepares diagnostic professionals in pathology, clinical biochemistry, hematology, and microbiology. Operating our dedicated Medical Laboratory with modern microscopes, centrifuges, and diagnostic reagents, we train students to support hospital diagnostic centers and rural pathology clinics.",
    associatedLabs: [
      "Clinical Pathology & Hematology Diagnostic Lab",
      "Biochemistry Testing & Specimen Culture Unit"
    ],
    courseIds: ["cmlt", "nios_community_health"],
    keyHighlights: [
      "Hands-on specimen handling, blood sampling & diagnostic reagent testing",
      "Community blood donation and free rural diagnostic camps organization",
      "100% compliance with laboratory safety and sterilization protocols",
      "Direct internship connections with diagnostic chains and hospital labs"
    ],
    careerProspects: [
      "Medical Laboratory Technician (MLT)",
      "Diagnostic Center Pathological Assistant",
      "Hospital Clinical Pathology Staff",
      "Community Health Officer",
      "Blood Bank Technical Assistant"
    ],
    bannerImage: "/assets/campus/medical-lab.jpg",
  },
  {
    id: "fashion",
    name: "Department of Fashion Technology & Apparel Design",
    shortName: "Fashion Tech",
    tagline: "Contemporary garment engineering, textile arts & boutique entrepreneurship.",
    headOrCoordinator: "Ms. Khushpreet (Fashion Tech Lead)",
    facultyCount: 3,
    overview: "The Department of Fashion Technology integrates creative design thinking with commercial apparel production. Featuring an industrial garment construction laboratory with motorized sewing suites, drafting tables, dress forms, and CAD design software, students learn everything from Phulkari heritage embroidery to contemporary global runway styling.",
    associatedLabs: [
      "B.Sc. Fashion Technology Garment Construction Lab",
      "Pattern Drafting & Cutting Studio",
      "Textile Embroidery & Embellishment Bay"
    ],
    courseIds: ["bsc_fashion", "psou_embroidery", "iti_fashion"],
    keyHighlights: [
      "Industrial high-speed stitching machines and multi-size dress mannequins",
      "Annual collegiate fashion showcase and creative model exhibitions",
      "Practical mastery in traditional Punjabi Phulkari and modern zardozi",
      "Entrepreneurship incubation for independent boutique launch"
    ],
    careerProspects: [
      "Apparel Designer & Stylist",
      "Independent Fashion Boutique Owner",
      "Garment Merchandiser & Production Supervisor",
      "Textile Pattern Maker & Quality Inspector",
      "Costume Designer for Media & Performing Arts"
    ],
    bannerImage: "/assets/campus/fashion-lab.jpg",
  },
  {
    id: "vocational",
    name: "Department of Vocational Education & Industrial Trades",
    shortName: "Vocational & ITI",
    tagline: "Hands-on industrial craftsmanship, NCVT trades & self-reliant careers.",
    headOrCoordinator: "S. Baljeet Singh (Trust Patron) / Industrial Instructors",
    facultyCount: 8,
    overview: "The Vocational & Industrial Trades wing operates accredited NCVT ITI workshops in Electrician, Plumber, Welder, and Mechanic Diesel trades, as well as NIOS stenography and wellness certificates. With heavy-duty machinery, electrical testing panels, hydraulic rigs, and engine bays, we provide direct paths to employment in government utilities, manufacturing plants, and overseas skilled vocations.",
    associatedLabs: [
      "Electrician Trade Workshop & Motor Rewinding Bay",
      "Plumbing Rig & Hydraulic Testing Facility",
      "Welding Bay (Arc, MIG, TIG & Gas Fabrication)",
      "Diesel Mechanic Automobile Overhaul Shed",
      "Beauty & Cosmetology Practical Salon"
    ],
    courseIds: ["iti_electrician", "iti_plumber", "iti_welder", "iti_diesel", "nios_stenography", "nios_beauty", "psou_yoga", "psou_beauty"],
    keyHighlights: [
      "NCVT certified curriculum ensuring worldwide trade recognition",
      "Heavy industrial machinery, welding stations, and working automobile engines",
      "100% Post-Matric SC Scholarship (PMSS) tuition waiver eligibility",
      "Campus placement drives with regional manufacturing and infrastructure firms"
    ],
    careerProspects: [
      "State Electricity Board (PSPCL) / Railway Technical Cadre",
      "Industrial Electrical / Mechanical Maintenance Specialist",
      "Certified Pipeline & Heavy Metal Welder (Domestic & Gulf Opportunities)",
      "High Court & Ministry Stenographer",
      "Independent Contractor & Trade Entrepreneur"
    ],
    bannerImage: "/assets/campus/iti-electrical.jpg",
  },
];
