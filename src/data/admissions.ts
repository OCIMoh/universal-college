/**
 * Universal College, Patran — Admissions & Scholarships Official Master Dataset
 * Sources: "site map content.docx.pdf" (Page 16), "one.md" (Section 4 & 15), and College Regulations.
 */

import { SHOW_ITI } from "./courses";

export interface AdmissionStep {
  stepNumber: string;
  title: string;
  kicker: string;
  summary: string;
  timeline: string;
  location: string;
  requirements: string[];
  tips: string;
}

export interface MandatoryDocument {
  id: string;
  name: string;
  punjabiName?: string;
  category: "academic" | "identity" | "reserved" | "administrative";
  isMandatoryForAll: boolean;
  applicableFor: string;
  description: string;
  issuingAuthority: string;
  copiesRequired: string;
}

export interface ScholarshipScheme {
  id: string;
  name: string;
  acronym: string;
  provider: "Government of Punjab" | "Government of India" | "Dashmesh Charitable Trust";
  coverage: string;
  amount: string;
  eligibility: string;
  incomeLimit: string;
  applicableCourses: string;
  mandatoryDocuments: string[];
  portalUrl?: string;
  inchargeContact: string;
  highlightTag: string;
}

export interface AdmissionScheduleItem {
  event: string;
  dateOrStatus: string;
  notes: string;
  badge: "Active" | "Upcoming" | "Notice";
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    stepNumber: "01",
    title: "Application Submission",
    kicker: "Digital or On-Campus Desk",
    summary:
      "Submit your admission application either through the online portal inquiry desk or by obtaining the official College Prospectus and Admission Form directly from the on-campus Admission Cell.",
    timeline: "Ongoing for Academic Session 2026-27",
    location: "Admission Cell, Admin Block / Online Portal",
    requirements: [
      "Completed Admission Application Form",
      "Photocopies of academic transcripts (10th / 12th / Graduation)",
      "Candidate active mobile number linked with Aadhaar",
      "Valid passport-size photographs (6 copies)",
    ],
    tips: "Ensure candidate's name and parents' names match exactly with the 10th Class Matriculation Certificate.",
  },
  {
    stepNumber: "02",
    title: "Document Verification & Eligibility Audit",
    kicker: "Physical Desk Audit",
    summary:
      "Present original academic records and identity certificates before the Central Scrutiny Committee at the college campus for spot verification.",
    timeline: "Monday to Saturday (9:00 AM – 4:00 PM)",
    location: "Committee Room / Admission Cell, Patran",
    requirements: [
      "Original 10th & 12th Detailed Marks Cards (DMC)",
      "Migration Certificate (for non-Punjab Board / outside university candidates)",
      "Valid Category & Income Certificates for PMSS / Minority applicants",
      "Affidavit / Gap Certificate (if study discontinued for 1 or more years)",
    ],
    tips: "Keep 3 self-attested photocopy sets ready along with the original documents to expedite spot approval.",
  },
  {
    stepNumber: "03",
    title: "Counseling & Pathway Allotment",
    kicker: "Merit & Stream Counseling",
    summary:
      `Meet dedicated departmental counselors for seat allotment across MRSPTU degree programmes, PSOU open university modules, and NIOS skill courses${SHOW_ITI ? ", or NCVT ITI trades" : ""} based on your career goals and marks.`,
    timeline: "Conducted within 24–48 hours of verification",
    location: "Departmental Helpdesks, Academic Wings",
    requirements: [
      "Scrutiny Committee Clearance Slip",
      "Choice selection of Core Electives / Trade",
      "Parent / Guardian presence or tele-consent",
    ],
    tips: "Candidates eligible for 100% PMSS SC fee waiver will be enrolled under dedicated state quota seats.",
  },
  {
    stepNumber: "04",
    title: "Fee Confirmation & Enrolment",
    kicker: "Seat Confirmation & University Registration",
    summary:
      "Pay the prescribed admission/tuition fee as per university norms or complete the zero-fee PMSS documentation. Receive your official College Roll Number, ERP portal login, and Identity Card.",
    timeline: "Immediate upon seat allotment",
    location: "Accounts Office / Scholarship Facilitation Desk",
    requirements: [
      "Official University Registration Fee receipt",
      "Dr. Ambedkar Portal Student Registration ID (for PMSS SC candidates)",
      "Library & Sports Card declaration form",
    ],
    tips: "PMSS eligible candidates are not charged tuition fee at the counter. The college facilitates their portal claim directly.",
  },
];

export const MANDATORY_DOCUMENTS: MandatoryDocument[] = [
  {
    id: "doc-10th-dmc",
    name: "10th Class Detailed Marks Certificate (DMC)",
    punjabiName: "ਦਸਵੀਂ ਜਮਾਤ ਦਾ ਡੀ.ਐੱਮ.ਸੀ. / ਮੈਟ੍ਰਿਕ ਸਰਟੀਫਿਕੇਟ",
    category: "academic",
    isMandatoryForAll: true,
    applicableFor: `All Programmes (MRSPTU, PSOU, NIOS${SHOW_ITI ? ", ITI" : ""})`,
    description: "Proof of date of birth, candidate's official spelling of names, and basic matriculation qualification.",
    issuingAuthority: "PSEB / CBSE / ICSE / Recognized State Board",
    copiesRequired: "Original + 3 Self-Attested Photocopies",
  },
  {
    id: "doc-12th-dmc",
    name: "10+2 Intermediate Detailed Marks Certificate (DMC)",
    punjabiName: "ਬਾਰ੍ਹਵੀਂ ਜਮਾਤ ਦਾ ਸਰਟੀਫਿਕੇਟ (10+2 ਡੀ.ਐੱਮ.ਸੀ.)",
    category: "academic",
    isMandatoryForAll: true,
    applicableFor: "All Undergraduate Degrees, Diplomas & PSOU Courses",
    description: "Proof of passing qualifying senior secondary examination with stream and aggregate percentage.",
    issuingAuthority: "PSEB / CBSE / Recognized Senior Secondary Board",
    copiesRequired: "Original + 3 Self-Attested Photocopies",
  },
  {
    id: "doc-grad-dmc",
    name: "Graduation Degree & All Semester Marksheets",
    punjabiName: "ਗ੍ਰੈਜੂਏਸ਼ਨ ਡਿਗਰੀ ਅਤੇ ਸਾਰੇ ਸਮੈਸਟਰਾਂ ਦੇ ਨਤੀਜੇ",
    category: "academic",
    isMandatoryForAll: false,
    applicableFor: "PGDCA & M.Sc. Computer Science Applicants Only",
    description: "Proof of graduation in relevant discipline with minimum 50% marks (45% for reserved categories).",
    issuingAuthority: "UGC Recognized University",
    copiesRequired: "Original + 3 Self-Attested Photocopies",
  },
  {
    id: "doc-migration",
    name: "Migration Certificate",
    punjabiName: "ਮਾਈਗ੍ਰੇਸ਼ਨ ਸਰਟੀਫਿਕੇਟ",
    category: "academic",
    isMandatoryForAll: true,
    applicableFor: "Students from Boards/Universities other than PSEB / MRSPTU",
    description: "Permits university transfer and official registration under Maharaja Ranjit Singh Punjab Technical University or PSOU.",
    issuingAuthority: "Previous School Board / University Registrar",
    copiesRequired: "Original Mandatory + 2 Photocopies",
  },
  {
    id: "doc-income-cert",
    name: "Income Certificate (Current Financial Year)",
    punjabiName: "ਆਮਦਨ ਸਰਟੀਫਿਕੇਟ (ਤਹਿਸੀਲਦਾਰ ਵੱਲੋਂ ਜਾਰੀ)",
    category: "reserved",
    isMandatoryForAll: false,
    applicableFor: "SC / BC / Minority Candidates applying for PMSS & Fee Concessions",
    description: "Mandatory for Post-Matric Scholarship Scheme (annual family income must be less than ₹2,50,000/- per annum).",
    issuingAuthority: "Tehsildar / Sub-Divisional Magistrate (SDM) / Competent Revenue Authority",
    copiesRequired: "Original (for verification) + 3 Self-Attested Photocopies",
  },
  {
    id: "doc-caste-cert",
    name: "Caste / Category Certificate",
    punjabiName: "ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ (SC / BC / OBC)",
    category: "reserved",
    isMandatoryForAll: false,
    applicableFor: "SC / ST / BC / OBC / Minority Category Applicants",
    description: "Proof of reserved category for seat reservation and government scholarship sanctioning.",
    issuingAuthority: "Tehsildar / SDM / Competent State Authority",
    copiesRequired: "Original (for verification) + 3 Self-Attested Photocopies",
  },
  {
    id: "doc-residence-cert",
    name: "Punjab Residence / Domicile Certificate",
    punjabiName: "ਪੰਜਾਬ ਰਿਹਾਇਸ਼ੀ ਸਰਟੀਫਿਕੇਟ (ਡੋਮੀਸਾਈਲ)",
    category: "identity",
    isMandatoryForAll: false,
    applicableFor: "Candidates claiming Punjab State Quota & PMSS Scholarship",
    description: "Certifies Punjab domicile for claiming state reservation and government welfare benefits.",
    issuingAuthority: "Tehsildar / Competent State Revenue Authority",
    copiesRequired: "Original + 2 Self-Attested Photocopies",
  },
  {
    id: "doc-aadhaar",
    name: "Aadhaar Card (Linked with Active Mobile Number)",
    punjabiName: "ਆਧਾਰ ਕਾਰਡ (ਮੋਬਾਈਲ ਨੰਬਰ ਨਾਲ ਲਿੰਕ ਹੋਣਾ ਜ਼ਰੂਰੀ)",
    category: "identity",
    isMandatoryForAll: true,
    applicableFor: "All Applicants (Student and Parent/Guardian)",
    description: "Aadhaar verification is mandatory for university enrollment and DBT / Dr. Ambedkar Scholarship portal authentication.",
    issuingAuthority: "UIDAI, Government of India",
    copiesRequired: "3 Self-Attested Photocopies",
  },
  {
    id: "doc-gap-cert",
    name: "Gap Certificate / Notarized Affidavit",
    punjabiName: "ਗੈਪ ਸਰਟੀਫਿਕੇਟ / ਹਲਫੀਆ ਬਿਆਨ (ਜੇਕਰ ਪੜ੍ਹਾਈ ਵਿੱਚ ਵਕਫਾ ਹੋਵੇ)",
    category: "administrative",
    isMandatoryForAll: false,
    applicableFor: "Candidates with a break of 1 year or more after previous exam",
    description: "Notarized affidavit on non-judicial stamp paper stating non-involvement in illegal activities during gap period.",
    issuingAuthority: "Executive Magistrate / Notary Public",
    copiesRequired: "Original Notarized Stamp Paper",
  },
  {
    id: "doc-character-cert",
    name: "Character Certificate",
    punjabiName: "ਚਰਿੱਤਰ ਸਰਟੀਫਿਕੇਟ",
    category: "academic",
    isMandatoryForAll: true,
    applicableFor: "All Applicants",
    description: "Issued by head of last attended school/college certifying conduct and character.",
    issuingAuthority: "Principal / Headmaster of Last Attended Institution",
    copiesRequired: "Original Mandatory",
  },
  {
    id: "doc-photos",
    name: "Recent Passport Size Photographs (6 Copies)",
    punjabiName: "ਪਾਸਪੋਰਟ ਸਾਈਜ਼ ਫੋਟੋਆਂ (6 ਕਾਪੀਆਂ)",
    category: "identity",
    isMandatoryForAll: true,
    applicableFor: "All Applicants",
    description: "Color photographs with plain white/light background for admission file, library card, and university identity card.",
    issuingAuthority: "Self / Studio",
    copiesRequired: "6 Hard Copies",
  },
];

export const SCHOLARSHIP_SCHEMES: ScholarshipScheme[] = [
  {
    id: "pmss-sc",
    name: "Post-Matric Scholarship Scheme for SC Students (PMSS)",
    acronym: "PMSS SC Scheme",
    provider: "Government of Punjab",
    coverage: "100% Full Tuition Fee Waiver + University Charges Direct Transfer",
    amount: "100% Tuition Fee Waived (Zero Out-of-Pocket Tuition)",
    eligibility: "Candidates belonging to Scheduled Caste (SC) category with Punjab domicile.",
    incomeLimit: "Annual family income not exceeding ₹2,50,000/- per annum.",
    applicableCourses: `All MRSPTU Degrees, PSOU Diplomas${SHOW_ITI ? ", and ITI Trades" : ""}.`,
    mandatoryDocuments: [
      "SC Caste Certificate issued by Tehsildar",
      "Income Certificate (Current FY < ₹2.5 LPA)",
      "Punjab Residence Certificate",
      "Aadhaar Card linked to active mobile and bank account (DBT enabled)",
      "10th & 12th DMC",
      "Bank Passbook photocopy showing IFSC & Account Number",
    ],
    portalUrl: "https://scholarships.punjab.gov.in/",
    inchargeContact: "97791-46689 (Prof. Gurpreet Singh, Scholarship Incharge)",
    highlightTag: "100% Free Tuition for Eligible SC Scholars",
  },
  {
    id: "minority-scheme",
    name: "Post-Matric Scholarship Scheme for Minority Communities",
    acronym: "Minority Scholarship",
    provider: "Government of India",
    coverage: "Direct Bank Transfer Grant for Tuition & Maintenance Support",
    amount: "Up to ₹12,300/- per annum direct financial grant",
    eligibility: "Students belonging to notified minority communities (Sikh, Muslim, Christian, Buddhist, Jain, Parsi) securing at least 50% in previous exam.",
    incomeLimit: "Annual family income not exceeding ₹2,00,000/- per annum.",
    applicableCourses: "All Undergraduate, Postgraduate, and Diploma courses.",
    mandatoryDocuments: [
      "Minority Community Self-Declaration / Certificate",
      "Income Certificate (< ₹2.0 LPA)",
      "Previous Examination Marksheet (Minimum 50% marks)",
      "Aadhaar Card linked to Bank Account",
      "College Fee Receipt",
    ],
    portalUrl: "https://scholarships.gov.in/",
    inchargeContact: "98884-06100 (Scholarship Helpdesk Cell)",
    highlightTag: "₹12,300 Annual State Assistance",
  },
  {
    id: "trust-merit-aid",
    name: "Dashmesh Charitable Trust Merit & Need-Based Concession",
    acronym: "Trust Concession",
    provider: "Dashmesh Charitable Trust",
    coverage: "Special fee rebates on tuition fees for deserving rural students",
    amount: "₹5,000 to ₹15,000 waiver per academic year",
    eligibility: "Meritorious students (above 80% marks in 10+2), single-girl-child applicants, state-level sports medalists, and economically distressed families.",
    incomeLimit: "Evaluated by Trust Governing Body upon spot recommendation.",
    applicableCourses: "All programmes across Universal Campus.",
    mandatoryDocuments: [
      "10+2 Merit Certificate or Sports Certificate",
      "Family Income & Situation Affidavit",
      "Recommendation Letter from College Principal / Trust Trustee",
    ],
    inchargeContact: "01764-242195 (Principal Office, Universal College)",
    highlightTag: "Trust Endowment Aid",
  },
];

export const ADMISSION_SCHEDULE: AdmissionScheduleItem[] = [
  {
    event: "Phase 1 Direct Admissions & Counseling",
    dateOrStatus: "Open Now for Session 2026-27",
    notes: `Direct on-campus merit counseling across all ${SHOW_ITI ? "30" : "25"} programs (MRSPTU, PSOU, NIOS${SHOW_ITI ? ", ITI" : ""}).`,
    badge: "Active",
  },
  {
    event: "PMSS SC Scholarship Portal Registrations",
    dateOrStatus: "Assistance Desk Active Daily",
    notes: "Free on-campus biometric verification & document upload on Dr. Ambedkar Portal.",
    badge: "Active",
  },
  {
    event: "Spot Document Scrutiny Window",
    dateOrStatus: "Mon – Sat (9:00 AM – 4:00 PM)",
    notes: "Central Committee Room, Administrative Block, Patran.",
    badge: "Active",
  },
  {
    event: "Orientation & Academic Session Induction",
    dateOrStatus: "As per University Notification",
    notes: "Commencement of regular classroom and laboratory sessions.",
    badge: "Upcoming",
  },
];

export const ADMISSION_HELPDESK_INFO = {
  cellName: "Universal College Central Admission & Counseling Cell",
  location: "Administrative Block, Ground Floor (Adjacent to Principal Office)",
  address: "Universal College, Patran, District Patiala, Punjab – 147105",
  helplinePhone: "97791-46689",
  alternatePhone: "98884-06100",
  landlinePhone: "01764-242195",
  email: "universalpatran@gmail.com",
  incharge: "Prof. Gurpreet Singh (Central Admission & Scholarship Coordinator)",
  officeHours: "Monday to Saturday: 9:00 AM to 4:00 PM (Closed on Sundays & Gazetted Holidays)",
  prospectusName: "Universal College Official Prospectus 2026-27",
  mandatoryDisclosureName: "AICTE / UGC Mandatory Regulatory Disclosure",
};
