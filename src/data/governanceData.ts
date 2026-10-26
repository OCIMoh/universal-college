import { SHOW_ITI } from "./courses";

export interface GoverningMember {
  id: string;
  name: string;
  designation: string;
  role: string;
  qualification: string;
  portfolio: string;
  image?: string;
  phone?: string;
  email?: string;
  badge?: string;
}

export interface CommitteeMember {
  srNo: number;
  name: string;
  designation: string;
  qualification: string;
  phone: string;
  email: string;
  roleInCommittee: string;
  avatarPlaceholder?: string;
}

export interface StatutoryCommittee {
  id: string;
  name: string;
  shortName: string;
  category: "Statutory & Disciplinary" | "Inclusion & Welfare" | "Student Support & Quality";
  badge: string;
  tagline: string;
  mandate: string;
  keyResponsibilities: string[];
  helpline: string;
  email: string;
  responseTime: string;
  iconName: string;
  members: CommitteeMember[];
}

export interface QualityCriterion {
  number: string;
  title: string;
  tagline: string;
  keyMetrics: string[];
  institutionalPractice: string;
}

export interface MandatoryDisclosureRecord {
  category: string;
  title: string;
  referenceNo: string;
  issuingBody: string;
  validity: string;
  highlights: string[];
  downloadLabel?: string;
}

// 1. Apex Governing Body Roster (10 Members)
export const GOVERNING_BODY: GoverningMember[] = [
  {
    id: "gb-1",
    name: "S. Baljeet Singh",
    designation: "Chairman & Managing Trustee",
    role: "Presidential Administration & Apex Vision",
    qualification: "Post-Graduate",
    portfolio: "Overall Institutional Governance, Philanthropic Vision & Trust Administration",
    image: "/assets/leadership/baljeet-singh.jpg",
    phone: "+91-98886-78516",
    email: "universalpatran@gmail.com",
    badge: "Founder Trustee",
  },
  {
    id: "gb-2",
    name: "S. Veerinder Singh Dhaliwal",
    designation: "Vice-Chairman & Strategic Trustee",
    role: "Strategic Academic Planning",
    qualification: "Post-Graduate",
    portfolio: "Multi-Stream Academic Expansion, Rural Linkages & Educational Outreach",
    image: "/assets/brand/college-logo-transparent.png",
    phone: "+91-81465-26002",
    email: "universalpatran@gmail.com",
    badge: "Co-Founder Trustee",
  },
  {
    id: "gb-3",
    name: "Dr. Amrish Dhawan",
    designation: "Director",
    role: "Academic & Institutional Direction",
    qualification: "Ph.D., M.Tech",
    portfolio: "Pedagogical Excellence, University Regulatory Affairs, IQAC Oversight & Modernisation",
    image: "/assets/leadership/amrish-dhawan.png",
    phone: "+91-97791-46689",
    email: "universalpatran@gmail.com",
    badge: "Executive Leadership",
  },
  {
    id: "gb-4",
    name: "Er. Yadwinder Singh",
    designation: "Principal / Member Secretary",
    role: "Head of Institution & Operations",
    qualification: "M.C.A., Post-Graduate",
    portfolio: "Academic Curriculum, Faculty Administration, Student Discipline & Statutory Compliance",
    image: "/assets/leadership/yadwinder-singh.png",
    phone: "+91-98886-78516",
    email: "universalpatran@gmail.com",
    badge: "Member Secretary",
  },
  {
    id: "gb-5",
    name: "Lt. Suman",
    designation: "Vice-Principal & Associate NCC Officer",
    role: "Academic Operations & Cadets Administration",
    qualification: "Post-Graduate, NCC Officer Training Academy",
    portfolio: "Co-curricular Coordination, NCC 20 PB BN Unit, Women Student Mentorship",
    image: "/assets/brand/college-logo-transparent.png",
    phone: "+91-81465-26002",
    email: "universalpatran@gmail.com",
    badge: "Cadet Leadership",
  },
  {
    id: "gb-6",
    name: "S. Gurmeet Singh",
    designation: "Trustee Member",
    role: "Infrastructure & Fiscal Development",
    qualification: "Graduate",
    portfolio: "Campus Physical Infrastructure, Construction Oversight & Trust Financial Allocations",
    badge: "Trust Nominee",
  },
  {
    id: "gb-7",
    name: "S. Hardeep Singh",
    designation: "Trustee Member",
    role: "Community Relations & Public Welfare",
    qualification: "Graduate",
    portfolio: "Local Panchayati Outreach, Free Medical Camps Liaison & Social Welfare Initiatives",
    badge: "Community Nominee",
  },
  {
    id: "gb-8",
    name: "MRSPTU University Academic Nominee",
    designation: "University Representative",
    role: "Affiliating University Regulatory Liaison",
    qualification: "Ph.D., Professor",
    portfolio: "Maharaja Ranjit Singh Punjab Technical University Syllabus Integrity & Academic Audit",
    badge: "University Nominee",
  },
  {
    id: "gb-9",
    name: "Directorate of Higher Education Nominee",
    designation: "State Government Representative",
    role: "Punjab Govt. Statutory Compliance",
    qualification: "State Administrative Service",
    portfolio: "State Higher Education Policies, PMSS Scholarship Guidelines & Regulatory Conformance",
    badge: "Government Nominee",
  },
  {
    id: "gb-10",
    name: "Regional Industrial Expert Nominee",
    designation: "Industry & Technical Consultant",
    role: "Corporate Linkages & Employability",
    qualification: "B.Tech, Industry Veteran",
    portfolio: SHOW_ITI
      ? "Industrial Apprenticeships, ITI Skill Trade Validation & Rozgar Mela Coordination"
      : "Industrial Apprenticeships, Vocational Skill Validation & Rozgar Mela Coordination",
    badge: "Industry Nominee",
  },
];

// 2. 9 Statutory & Welfare Committees with Verbatim Data from Site Map PDF
export const STATUTORY_COMMITTEES: StatutoryCommittee[] = [
  {
    id: "grievance-redressal",
    name: "Grievance Redressal Committee",
    shortName: "Grievance Cell",
    category: "Statutory & Disciplinary",
    badge: "AICTE / UGC Mandated",
    tagline: "Transparent, fair, and confidential resolution of all collegiate and academic concerns.",
    mandate:
      "Provides a structured mechanism for students to raise genuine academic, administrative, facility-related or other college concerns. The committee promotes fair hearing, timely review, and appropriate resolution within a 7-day SLA.",
    keyResponsibilities: [
      "Objective investigation into student, faculty, and administrative grievances.",
      "Fair and unprejudiced inquiry into examinations, attendance, and evaluation disputes.",
      "Ensuring barrier-free campus amenities, classroom maintenance, and transport coordination.",
      "Escalation pathways to MRSPTU University Ombudsman when requested by the aggrieved party.",
    ],
    helpline: "+91-98886-78516",
    email: "universalpatran@gmail.com",
    responseTime: "Within 7 Working Days",
    iconName: "ShieldAlert",
    members: [
      {
        srNo: 1,
        name: "S. Yadwinder Singh",
        designation: "Principal / Presiding Member",
        qualification: "Post-Graduate",
        phone: "+91-98886-78516",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Convener & Head of Committee",
      },
      {
        srNo: 2,
        name: "Ms. Leesha Rani",
        designation: "Assistant Professor (Computer Science)",
        qualification: "M.C.A.",
        phone: "+91-98645-05000",
        email: "grievance@universalpatran.com",
        roleInCommittee: "Faculty Representative",
      },
      {
        srNo: 3,
        name: "Ms. Parvinder Kaur",
        designation: "Assistant Professor (IT)",
        qualification: "M.Sc. IT",
        phone: "+91-98762-70188",
        email: "grievance@universalpatran.com",
        roleInCommittee: "Faculty Representative",
      },
      {
        srNo: 4,
        name: "Ms. Mandeep Kaur",
        designation: "Assistant Professor (Computer Science)",
        qualification: "M.C.A.",
        phone: "+91-81469-62043",
        email: "grievance@universalpatran.com",
        roleInCommittee: "Member Secretary",
      },
    ],
  },
  {
    id: "anti-ragging",
    name: "Anti-Ragging Committee & Squad",
    shortName: "Anti-Ragging Squad",
    category: "Statutory & Disciplinary",
    badge: "Zero Tolerance Campus",
    tagline: "Strict enforcement of UGC & Supreme Court regulations for an absolute safe campus.",
    mandate:
      "Works towards maintaining a completely ragging-free campus by creating awareness about anti-ragging regulations, promoting respectful behaviour, conducting surprise hostel/corridor sweeps, and addressing any reported cases strictly in accordance with applicable central guidelines.",
    keyResponsibilities: [
      "Zero-tolerance implementation of UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions.",
      "Conducting proactive orientation drives during first-year freshers arrivals.",
      "Random surveillance in campus corridors, sports grounds, canteen, and bus pickup stops.",
      "Mandatory online Anti-Ragging Undertaking compliance for all enrolled students.",
    ],
    helpline: "+91-97791-46689 (24x7) / Toll Free: 1800-180-5522",
    email: "universalpatran@gmail.com",
    responseTime: "Immediate / Zero Hour Action",
    iconName: "ShieldCheck",
    members: [
      {
        srNo: 1,
        name: "Dr. Amrish Dhawan",
        designation: "Principal / Director",
        qualification: "Ph.D.",
        phone: "+91-97791-46689",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Chairman, Anti-Ragging Cell",
      },
      {
        srNo: 2,
        name: "Ms. Karmjit Kaur",
        designation: "Assistant Professor (HOD)",
        qualification: "M.C.A.",
        phone: "+91-98140-04165",
        email: "antiragging@universalpatran.com",
        roleInCommittee: "Senior Faculty Member",
      },
      {
        srNo: 3,
        name: "S. Yadwinder Singh",
        designation: "Assistant Professor / Principal",
        qualification: "M.C.A.",
        phone: "+91-98886-78516",
        email: "antiragging@universalpatran.com",
        roleInCommittee: "Squad Coordinator",
      },
      {
        srNo: 4,
        name: "S. Rohi Singh",
        designation: "Parents Representative",
        qualification: "Guardian Representative",
        phone: "+91-97809-17050",
        email: "antiragging@universalpatran.com",
        roleInCommittee: "Parent / Community Member",
      },
      {
        srNo: 5,
        name: "Balram Singh",
        designation: "First Year Student Representative",
        qualification: "10+2 / Diploma",
        phone: "+91-62396-49624",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Student Representative (Freshers)",
      },
      {
        srNo: 6,
        name: "Arshvir Singh",
        designation: "Second Year Student Representative",
        qualification: "10+2 / Under-Grad",
        phone: "+91-70098-77482",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Student Representative (Seniors)",
      },
      {
        srNo: 7,
        name: "Ms. Ritika Negi",
        designation: "Clerk / Administration",
        qualification: "B.Com.",
        phone: "+91-62843-12781",
        email: "ritikanegi765@gmail.com",
        roleInCommittee: "Non-Teaching Staff Representative",
      },
    ],
  },
  {
    id: "sc-st-cell",
    name: "SC/ST & Student Support Cell",
    shortName: "SC/ST Support Cell",
    category: "Inclusion & Welfare",
    badge: "Affirmative Action & PMSS Aid",
    tagline: "Dedicated advocacy, 100% tuition assistance support, and egalitarian student dignity.",
    mandate:
      "Provides appropriate guidance and affirmative support to SC/ST students regarding educational opportunities, scholarships, welfare measures, and statutory protections under the Constitution of India and Dr. Ambedkar Scholarship guidelines.",
    keyResponsibilities: [
      "100% Free Education facilitation under Punjab Post-Matric Scholarship Scheme (PMSS) for eligible SC students.",
      "Assistance in scholarship registration on the Dr. Ambedkar State Scholarship Portal.",
      "Redressal of social grievances, ensuring complete equality, dignity, and psychological security.",
      "Conducting special remedial coaching, communication clinics, and career mentorship sessions.",
    ],
    helpline: "+91-97791-46689",
    email: "universalpatran@gmail.com",
    responseTime: "Within 3 Working Days",
    iconName: "HeartHandshake",
    members: [
      {
        srNo: 1,
        name: "Dr. Amrish Dhawan",
        designation: "Director",
        qualification: "Ph.D.",
        phone: "+91-97791-46689",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Chairperson",
      },
      {
        srNo: 2,
        name: "Er. Yadwinder Singh",
        designation: "Assistant Professor / Principal",
        qualification: "Post-Graduate",
        phone: "+91-98886-78516",
        email: "scstcell@universalpatran.com",
        roleInCommittee: "Member Secretary",
      },
      {
        srNo: 3,
        name: "Ms. Karmjit Kaur",
        designation: "HOD Computer Science",
        qualification: "Post-Graduate (MCA)",
        phone: "+91-98140-04165",
        email: "scstcell@universalpatran.com",
        roleInCommittee: "Senior Faculty Member",
      },
      {
        srNo: 4,
        name: "Ms. Amninder Kaur",
        designation: "Assistant Professor",
        qualification: "Post-Graduate",
        phone: "+91-78885-83007",
        email: "scstcell@universalpatran.com",
        roleInCommittee: "Faculty Representative",
      },
      {
        srNo: 5,
        name: "Ms. Mandeep Kaur",
        designation: "Assistant Professor",
        qualification: "M.C.A.",
        phone: "+91-81469-62043",
        email: "scstcell@universalpatran.com",
        roleInCommittee: "Faculty Representative",
      },
      {
        srNo: 6,
        name: "Ms. Kulwinder Kaur",
        designation: "Faculty Member",
        qualification: "Post-Graduation",
        phone: "+91-99146-39551",
        email: "scstcell@universalpatran.com",
        roleInCommittee: "Special Liaison Officer",
      },
    ],
  },
  {
    id: "internal-complaints",
    name: "Internal Complaints Committee (ICC) / POSH Cell",
    shortName: "ICC / POSH Cell",
    category: "Statutory & Disciplinary",
    badge: "POSH Act 2013 Statutory Compliance",
    tagline: "Safe, respectful, and dignified work & study environment for women students and staff.",
    mandate:
      "Works towards maintaining a safe, respectful, and dignified environment and addresses any complaints related to sexual harassment in strict accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 and UGC regulations.",
    keyResponsibilities: [
      "Rigorous time-bound inquiry into formal complaints with guaranteed confidentiality.",
      "Organizing gender-sensitization seminars, workshops, and safe campus orientation.",
      "Providing immediate interim support, psychological counseling, and protective safeguards.",
      "Annual filing of POSH compliance reports with the District Officer and MRSPTU.",
    ],
    helpline: "+91-99155-38951",
    email: "universalpatran@gmail.com",
    responseTime: "Within 24 Hours of Intimation",
    iconName: "Lock",
    members: [
      {
        srNo: 1,
        name: "Ms. Amandeep Kaur",
        designation: "Assistant Professor",
        qualification: "B.Sc.",
        phone: "+91-99155-38951",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Chairperson / Presiding Officer",
      },
      {
        srNo: 2,
        name: "Ms. Mandeep Kaur",
        designation: "Assistant Professor",
        qualification: "M.C.A.",
        phone: "+91-81469-62043",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Faculty Representative",
      },
      {
        srNo: 3,
        name: "Ms. Dilpreet Kaur",
        designation: "Faculty (Nursing Wing)",
        qualification: "G.N.M.",
        phone: "+91-98784-49727",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Healthcare & Staff Member",
      },
      {
        srNo: 4,
        name: "Ms. Harjinder Kaur",
        designation: "Instructor / Admission In-Charge",
        qualification: "C.I.T.S.",
        phone: "+91-62391-11615",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Staff Member",
      },
      {
        srNo: 5,
        name: "Dr. Asha Kiran",
        designation: "External Academic Member",
        qualification: "Ph.D.",
        phone: "+91-62391-11615",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Independent External Observer",
      },
      {
        srNo: 6,
        name: "Sumandeep Kaur",
        designation: "First Year Student Representative",
        qualification: "10+2",
        phone: "+91-98513-90007",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Student Member",
      },
      {
        srNo: 7,
        name: "Hushanpreet Kaur",
        designation: "Second Year Student Representative",
        qualification: "10+2",
        phone: "+91-75085-64250",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Student Member",
      },
      {
        srNo: 8,
        name: "Prabhjot Kaur",
        designation: "First Year Student Representative",
        qualification: "10+2",
        phone: "+91-78867-5236",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Student Member",
      },
    ],
  },
  {
    id: "equal-opportunity",
    name: "Equal Opportunity Cell",
    shortName: "Equal Opportunity",
    category: "Inclusion & Welfare",
    badge: "Inclusive Institutional Charter",
    tagline: "Egalitarian access for all social groups, differently-abled students, and minority backgrounds.",
    mandate:
      "Promotes equal opportunities, inclusion, and non-discrimination for students from diverse social and educational backgrounds and continuously fosters an inclusive, supportive learning environment with universal accessibility.",
    keyResponsibilities: [
      "Providing barrier-free architecture across campus (wheelchair ramps, accessible restrooms, ground-floor computer labs).",
      "Guidance for State & Central Minority Scholarships (₹12,300 per student annual grant).",
      "Counseling and peer-buddy systems for rural first-generation college entrants.",
      "Monitoring campus policies to prevent any covert or overt discrimination.",
    ],
    helpline: "+91-81465-26002",
    email: "universalpatran@gmail.com",
    responseTime: "Within 3 Working Days",
    iconName: "Users",
    members: [
      {
        srNo: 1,
        name: "Dr. Amrish Dhawan",
        designation: "Director",
        qualification: "Ph.D.",
        phone: "+91-97791-46689",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Chairperson",
      },
      {
        srNo: 2,
        name: "Er. Yadwinder Singh",
        designation: "Principal",
        qualification: "M.C.A.",
        phone: "+91-98886-78516",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Member Secretary",
      },
      {
        srNo: 3,
        name: "Lt. Suman",
        designation: "Vice-Principal",
        qualification: "Post-Graduate",
        phone: "+91-81465-26002",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Diversity In-Charge",
      },
      {
        srNo: 4,
        name: "Mr. Sapinder Singh",
        designation: "Scholarship In-Charge",
        qualification: "Graduate",
        phone: "+91-97791-46689",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Financial Aid Liaison",
      },
    ],
  },
  {
    id: "women-development",
    name: "Women Development Cell",
    shortName: "Women Development",
    category: "Inclusion & Welfare",
    badge: "Empowerment & Self Reliance",
    tagline: "Empowering female scholars through leadership, health hygiene drives, and vocational self-reliance.",
    mandate:
      "Promotes women's empowerment, health awareness, safety, gender equality, and personal development through specialized training programmes, discussions, sanitary awareness drives, and creative initiatives.",
    keyResponsibilities: [
      "Conducting annual International Women's Day & International Nurses Day symposia.",
      "Self-defense clinics, cyber-safety workshops, and digital literacy camps for young women.",
      "Free medical checkups and female hygiene education camps in rural Patran belts.",
      "Mentoring women students for technical trades like IT, Fashion Technology, and Coding.",
    ],
    helpline: "+91-99155-38951",
    email: "universalpatran@gmail.com",
    responseTime: "Within 2 Working Days",
    iconName: "Sparkles",
    members: [
      {
        srNo: 1,
        name: "Lt. Suman",
        designation: "Vice-Principal / ANO",
        qualification: "Post-Graduate",
        phone: "+91-81465-26002",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Presiding Convener",
      },
      {
        srNo: 2,
        name: "Ms. Gurdeep Kaur",
        designation: "Assistant Professor (Nursing)",
        qualification: "M.Sc. Nursing",
        phone: "+91-98886-78516",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Health & Wellness In-Charge",
      },
      {
        srNo: 3,
        name: "Ms. Khushpreet Kaur",
        designation: "Assistant Professor (Fashion Tech)",
        qualification: "Post-Graduate",
        phone: "+91-81465-26002",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Skill Development Liaison",
      },
      {
        srNo: 4,
        name: "Ms. Amandeep Kaur",
        designation: "PRO / Administrative Staff",
        qualification: "Graduate",
        phone: "+91-98886-78516",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Public Engagement Officer",
      },
    ],
  },
  {
    id: "student-welfare",
    name: "Student Welfare Committee",
    shortName: "Student Welfare",
    category: "Student Support & Quality",
    badge: "Student Experience & Amenities",
    tagline: "Focusing on well-being, transport facilitation, athletic recreation, and caring campus living.",
    mandate:
      "Focuses on students' well-being, participation, support services, and overall campus experience, helping create a caring, supportive, and truly student-centred institutional atmosphere.",
    keyResponsibilities: [
      "Punjab Roadways & PRTC Student Bus Pass processing and concession verification.",
      "Canteen food quality, hygienic drinking water dispensers, and sanitary audits.",
      "Indoor sports room, outdoor stadium equipment management, and inter-college team kits.",
      "Emergency medical dispensary coordination and health first-aid administration.",
    ],
    helpline: "+91-98886-78516",
    email: "universalpatran@gmail.com",
    responseTime: "Within 2 Working Days",
    iconName: "Smile",
    members: [
      {
        srNo: 1,
        name: "Er. Yadwinder Singh",
        designation: "Principal",
        qualification: "M.C.A.",
        phone: "+91-98886-78516",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Chairman",
      },
      {
        srNo: 2,
        name: "Mr. Tony Singh",
        designation: "Coach (Physical Education)",
        qualification: "B.P.Ed / M.P.Ed",
        phone: "+91-98886-78516",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Sports & Athletics Member",
      },
      {
        srNo: 3,
        name: "Mr. Gurnam Singh",
        designation: "Coach (Physical Education)",
        qualification: "B.P.Ed",
        phone: "+91-81465-26002",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Student Activities Member",
      },
      {
        srNo: 4,
        name: "Ms. Harjinder Kaur",
        designation: "Admission In-Charge",
        qualification: "C.I.T.S.",
        phone: "+91-62391-11615",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Student Helpdesk Member",
      },
    ],
  },
  {
    id: "anti-discrimination",
    name: "Anti-Discrimination & Inclusivity Committee",
    shortName: "Inclusivity Cell",
    category: "Inclusion & Welfare",
    badge: "Constitutional Safeguard",
    tagline: "Promoting respect, fraternity, and dignified treatment across all communities and strata.",
    mandate:
      "Promotes mutual respect, equality, dignity, and inclusiveness among all members of the college community. Prohibits any discrimination based on caste, creed, religion, region, or gender.",
    keyResponsibilities: [
      "Rigorous oversight to ensure egalitarian treatment across all departmental activities.",
      "Encouraging intercultural understanding through Punjabi folk festivals, Gurpurab, and national celebrations.",
      "Confidential receipt and processing of any alleged discrimination complaints.",
      "Ensuring fair access to academic scholarships, lab equipment, and sports opportunities.",
    ],
    helpline: "+91-97791-46689",
    email: "universalpatran@gmail.com",
    responseTime: "Within 48 Hours",
    iconName: "Scale",
    members: [
      {
        srNo: 1,
        name: "Dr. Amrish Dhawan",
        designation: "Director",
        qualification: "Ph.D.",
        phone: "+91-97791-46689",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Presiding Officer",
      },
      {
        srNo: 2,
        name: "Er. Yadwinder Singh",
        designation: "Principal",
        qualification: "M.C.A.",
        phone: "+91-98886-78516",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Member Secretary",
      },
      {
        srNo: 3,
        name: "Ms. Karmjit Kaur",
        designation: "HOD Computer Science",
        qualification: "M.C.A.",
        phone: "+91-98140-04165",
        email: "gurkarmvirk65@gmail.com",
        roleInCommittee: "Faculty Representative",
      },
      {
        srNo: 4,
        name: "Mr. Sapinder Singh",
        designation: "Scholarship In-Charge",
        qualification: "Graduate",
        phone: "+91-97791-46689",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Welfare Representative",
      },
    ],
  },
  {
    id: "grievance-feedback",
    name: "Grievance & Feedback Support Mechanism",
    shortName: "Continuous Feedback Cell",
    category: "Student Support & Quality",
    badge: "IQAC Quality Loop",
    tagline: "Continuous feedback loop for institutional growth, teaching quality, and facility enhancement.",
    mandate:
      "Encourages students and guardians to share constructive feedback, curricular suggestions, and campus concerns, helping the institution pinpoint areas for continuous enhancement.",
    keyResponsibilities: [
      "Collection and analysis of semester-wise Student Feedback on Faculty & Curriculum.",
      "Regular inspection and redressal of physical Drop-Box suggestions situated across campus corridors.",
      "Integration of student feedback into IQAC annual quality enhancement benchmarks.",
      "Transparent communication of administrative actions taken in response to feedback.",
    ],
    helpline: "+91-81465-26002",
    email: "universalpatran@gmail.com",
    responseTime: "Review Every Fortnight",
    iconName: "MessageSquare",
    members: [
      {
        srNo: 1,
        name: "Dr. Amrish Dhawan",
        designation: "Director",
        qualification: "Ph.D.",
        phone: "+91-97791-46689",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Executive Chair",
      },
      {
        srNo: 2,
        name: "Er. Yadwinder Singh",
        designation: "Principal",
        qualification: "M.C.A.",
        phone: "+91-98886-78516",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Academic Head",
      },
      {
        srNo: 3,
        name: "Ms. Deepika",
        designation: "Assistant Professor (Computer Science)",
        qualification: "Post-Graduate",
        phone: "+91-98886-78516",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Feedback Analyst",
      },
      {
        srNo: 4,
        name: "Mr. Pawan Kumar",
        designation: "Accountant",
        qualification: "M.Com.",
        phone: "+91-81465-26002",
        email: "universalpatran@gmail.com",
        roleInCommittee: "Administrative Liaison",
      },
    ],
  },
];

// 3. IQAC & NAAC Quality Framework (7 Criteria)
export const NAAC_CRITERIA: QualityCriterion[] = [
  {
    number: "01",
    title: "Curricular Aspects",
    tagline: "Academic flexibility, vocational integration, and NEP 2020 alignment.",
    keyMetrics: ["MRSPTU & PSOU curricula adherence", "Vocational & Skill Certificate integration", "Semester-wise curriculum feedback"],
    institutionalPractice:
      "Curricula across 15+ programs are mapped directly with university ordinances and enriched with practical skill certifications in Computer Applications, Nursing Assistance, and Technical Trades.",
  },
  {
    number: "02",
    title: "Teaching-Learning & Evaluation",
    tagline: "Learner-centric pedagogical frameworks, smart labs, and continuous assessment.",
    keyMetrics: ["1:20 Mentor-Mentee ratio", "100% faculty ICT-enabled instruction", "Continuous internal evaluations (MSTs)"],
    institutionalPractice:
      "Interactive pedagogy utilizing four high-specification computer labs, smart projection suites, hands-on workshop rotations, and structured mid-semester diagnostic tests.",
  },
  {
    number: "03",
    title: "Research, Innovation & Extension",
    tagline: "Incubation through IIC, community sewa drives, and rural technology empowerment.",
    keyMetrics: ["Institution's Innovation Council (IIC)", "Annual voluntary blood donation drives", "NSS village adoption camps"],
    institutionalPractice:
      "Active collaboration between academic departments and local rural Panchayats in Patran for health checkups, environmental cleanliness, and youth entrepreneurship workshops.",
  },
  {
    number: "04",
    title: "Infrastructure & Learning Resources",
    tagline: "Modern laboratories, stadium athletics, and an enriched digital library.",
    keyMetrics: ["4 modern computer labs with 100 Mbps fiber", "Open-Air Stadium & athletic track", "Accessible ramps across all academic blocks"],
    institutionalPractice:
      "Over 30,000+ sq. ft. of instructional infrastructure, featuring dedicated specialized labs for Medical Technology, Fashion Technology, Diesel Mechanics, and Electrician trades.",
  },
  {
    number: "05",
    title: "Student Support & Progression",
    tagline: "100% PMSS tuition waiver access, NCC cadet training, and placement clinics.",
    keyMetrics: ["100% SC fee exemption under PMSS", "NCC 20 Punjab BN Cadet Wing", "Annual Rozgar Mela placement drives"],
    institutionalPractice:
      "Direct institutional guidance through the Dr. Ambedkar Scholarship Cell ensures zero eligible SC/ST scholar is deprived of higher education due to financial hardship.",
  },
  {
    number: "06",
    title: "Governance, Leadership & Management",
    tagline: "Decentralized statutory committees, transparent audits, and visionary trustees.",
    keyMetrics: ["10-Member Apex Governing Body", "9 Active statutory oversight cells", "Regular internal and external financial audits"],
    institutionalPractice:
      "Participatory governance model under Dashmesh Charitable Trust, empowering departmental heads, faculty coordinators, and student leaders to shape collegiate policy.",
  },
  {
    number: "07",
    title: "Institutional Values & Best Practices",
    tagline: "Green sustainable campus, ethical discipline, and social responsibility.",
    keyMetrics: ["100% Ragging-Free institutional record", "Eco-Club solar & plantation drives", "Community blood donation tradition"],
    institutionalPractice:
      "Two institutional hallmark best practices: 'Sewa in Action' (rural health & cleanliness drives) and 'Inclusive Access' (bringing state-of-the-art technical education to Patran rural youth).",
  },
];

// 4. Mandatory Public Disclosures Records
export const MANDATORY_DISCLOSURES: MandatoryDisclosureRecord[] = [
  {
    category: "Apex Sponsoring Body",
    title: "Dashmesh Charitable Trust Registration",
    referenceNo: "Regd. Society No. 2014/PBN-78",
    issuingBody: "Society Registration Act XXI, 1860, Punjab State",
    validity: "Perpetual & Active",
    highlights: [
      "Registered non-profit educational and charitable society.",
      "Founded in 2014 by S. Baljeet Singh & S. Veerinder Singh Dhaliwal.",
      "Dedicated to advancing rural higher education, skill development, and community welfare.",
    ],
    downloadLabel: "Trust Deed & Registration Dossier",
  },
  {
    category: "Technical University Affiliation",
    title: "MRSPTU Technical Degree Affiliation",
    referenceNo: "MRSPTU/DDA/2016-17/AFFIL-082",
    issuingBody: "Maharaja Ranjit Singh Punjab Technical University, Bathinda",
    validity: "Academic Year 2026-27 Approved",
    highlights: [
      "Affiliation for BCA (Hons), B.Com (Hons), B.Sc Fashion Tech, B.A. Computer Science.",
      "Post-Graduate affiliation for PGDCA and M.Sc. Computer Science.",
      "Recognized for Skill Diplomas in Medical Lab Tech and Nursing Assistant.",
    ],
    downloadLabel: "MRSPTU Affiliation Approval Order",
  },
  {
    category: "State Open University Approval",
    title: "JGND PSOU Study Centre Recognition",
    referenceNo: "PSOU/REG/SC/2021/412",
    issuingBody: "Jagat Guru Nanak Dev Punjab State Open University, Patiala",
    validity: "Active / Continuing",
    highlights: [
      "Authorized study centre for B.Com, BA, BCA, MA Punjabi, and Skill Diplomas.",
      "State-approved flexible learning programs for working professionals and rural women.",
      "Specialized diplomas in Artificial Intelligence, Data Science, and Office Automation.",
    ],
    downloadLabel: "PSOU Centre Notification Letter",
  },
  {
    category: "National Vocational & Skill Accreditation",
    title: "NIOS Accredited Study Centre",
    referenceNo: "NIOS/AI/PB/220185",
    issuingBody: "National Institute of Open Schooling, Ministry of Education, Govt. of India",
    validity: "Permanent Centre #220185",
    highlights: [
      "Accredited centre for skill vocational courses: Community Health, Nanny Care, Stenography.",
      "Recognized for secondary & senior secondary bridge certifications.",
      "Exam center facility for Patran and surrounding educational clusters.",
    ],
    downloadLabel: "NIOS Accreditation Certificate",
  },
  ...(SHOW_ITI
    ? [
        {
          category: "Vocational Industrial Training",
          title: "NCVT & PSBTE & IT Approval (Universal ITI)",
          referenceNo: "DGT-12/1/2014-TC / PSBTE-PATRAN-ITI",
          issuingBody: "Directorate General of Training (DGT), Ministry of Skill Development, Govt. of India",
          validity: "Affiliated Industrial Training Institute",
          highlights: [
            "Craftsmen Training Scheme (CTS) trades: Electrician, Plumber, Welder, Diesel Mechanic.",
            "Modern technical workshop infrastructure with full machinery and safety suites.",
            "Recognized National Trade Certificate (NTC) examinations.",
          ],
          downloadLabel: "DGT / NCVT Affiliation Notification",
        },
      ]
    : []),
  {
    category: "Public Information Act",
    title: "Right to Information (RTI) Statutory Officer Roster",
    referenceNo: "RTI ACT 2005 / UCP-PIO-CELL",
    issuingBody: "State Information Commission, Punjab",
    validity: "Active Oversight",
    highlights: [
      "Public Information Officer (PIO): Er. Yadwinder Singh (Principal, Mobile: +91-98886-78516).",
      "First Appellate Authority (FAA): Dr. Amrish Dhawan (Director, Mobile: +91-97791-46689).",
      "Time-bound disclosure and compliance within statutory 30-day window.",
    ],
    downloadLabel: "RTI Guidelines & Application Form",
  },
];
