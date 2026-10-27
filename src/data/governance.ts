export interface GovernanceSection {
  id: string;
  title: string;
  description: string;
  badge: string;
  items: {
    name: string;
    designation: string;
    role?: string;
    contact?: string;
  }[];
  details?: {
    label: string;
    value: string;
  }[];
}

export const GOVERNANCE_DATA: Record<string, GovernanceSection> = {
  "mandatory-disclosures": {
    id: "mandatory-disclosures",
    title: "Mandatory Disclosures & Approvals",
    badge: "Statutory Compliance",
    description: "Official institutional data, trust registrations, land infrastructure, and educational affiliations in compliance with regulatory mandates.",
    details: [
      { label: "Governing Trust", value: "Dashmesh Charitable Trust (Regd. Under Society Registration Act XXI, 1860)" },
      { label: "Campus Address", value: "Chanda Colony, Patran-147105, Distt. Patiala (Punjab)" },
      { label: "Campus Land Area", value: "30,000+ Sq. Ft. Dedicated Instructional & Administrative Built-up Area" },
      { label: "Technical Affiliation", value: "Maharaja Ranjit Singh Punjab Technical University (MRSPTU), Bathinda" },
      { label: "Vocational Affiliation", value: "National Council for Vocational Training (NCVT) & PSBTE & IT Chandigarh" },
      { label: "Skill Affiliation", value: "National Institute of Open Schooling (NIOS) & Jagat Guru Nanak Dev PSOU" },
      { label: "AICTE Status", value: "Approved under AICTE Regulations & Punjab Govt. Higher Education Directorate" },
      { label: "Official Portal", value: "universalcollegepatran.in / universalpatran@gmail.com" },
    ],
    items: [
      { name: "S. Baljeet Singh", designation: "Founder & Chairman", role: "Trustee & Apex Administration" },
      { name: "Mr. Veerinder Singh Dhaliwal", designation: "Vice Chairman", role: "Academic Planning" },
      { name: "Dr. Amrish Dhawan", designation: "Director", role: "Institutional Direction" },
      { name: "Er. Yadwinder Singh", designation: "Principal", role: "Head of Institution" },
    ],
  },
  "board-of-governance": {
    id: "board-of-governance",
    title: "Board of Governance",
    badge: "Apex Leadership",
    description: "The governing body responsible for institutional management, strategic planning, and financial oversight under Dashmesh Charitable Trust.",
    items: [
      { name: "S. Baljeet Singh", designation: "Chairman", role: "Presidential Administration" },
      { name: "Mr. Veerinder Singh Dhaliwal", designation: "Vice Chairman", role: "Educational Strategy" },
      { name: "Dr. Amrish Dhawan", designation: "Director", role: "Academic & Research Excellence" },
      { name: "Er. Yadwinder Singh", designation: "Principal / Member Secretary", role: "Academic Governance" },
      { name: "S. Gurmeet Singh", designation: "Trustee Member", role: "Finance & Infrastructure" },
      { name: "S. Hardeep Singh", designation: "Trustee Member", role: "Community Outreach" },
      { name: "Educationist Nominee", designation: "University Representative", role: "MRSPTU Regulatory Oversight" },
      { name: "Industry Expert Nominee", designation: "Technical Expert", role: "Industrial Linkages & Skill Development" },
    ],
  },
  "antiragging-committee": {
    id: "antiragging-committee",
    title: "Anti-Ragging Committee & Squad",
    badge: "Zero Tolerance Policy",
    description: "Strict enforcement of UGC and AICTE Anti-Ragging regulations to ensure a 100% safe, welcoming, and dignified campus environment.",
    details: [
      { label: "Anti-Ragging Helpline", value: "+91-97791-46689 / +91-81465-26002" },
      { label: "National Anti-Ragging Toll Free", value: "1800-180-5522 (universalpatran@gmail.com)" },
      { label: "Campus Status", value: "100% Ragging-Free Campus (Zero incidents reported since inception)" },
    ],
    items: [
      { name: "Er. Yadwinder Singh", designation: "Principal", role: "Chairman, Anti-Ragging Committee", contact: "+91-97791-46689" },
      { name: "Dr. Amrish Dhawan", designation: "Director", role: "Member (Administration)", contact: "+91-81465-26002" },
      { name: "Senior Faculty Representative (Female)", designation: "Faculty Member", role: "Women Student Safeguard", contact: "Campus Office" },
      { name: "Local Police Representative", designation: "SHO / Police Sub-Inspector", role: "Civil & Legal Enforcement", contact: "Police Station Patran" },
      { name: "Local Media Representative", designation: "Patran Press Club", role: "External Non-Govt Observer", contact: "Press Media" },
      { name: "Parents Representative", designation: "Parent Association", role: "Guardian Liaison", contact: "PTA Representative" },
    ],
  },
  "grievance-redressal": {
    id: "grievance-redressal",
    title: "Grievance Redressal & Internal Complaints Cell",
    badge: "Fair Student Support",
    description: "Constituted in accordance with AICTE & MRSPTU notifications for transparent and prompt redressal of grievances, discrimination, and student concerns.",
    details: [
      { label: "Grievance Email", value: "universalpatran@gmail.com" },
      { label: "Ombudsman Officer", value: "MRSPTU University Ombudsman, Bathinda" },
      { label: "Resolution SLA", value: "Within 7 working days of formal submission" },
    ],
    items: [
      { name: "Dr. Amrish Dhawan", designation: "Director", role: "Presiding Officer", contact: "Administrative Wing" },
      { name: "Er. Yadwinder Singh", designation: "Principal", role: "Member Secretary", contact: "+91-97791-46689" },
      { name: "Senior Academic Coordinator", designation: "Faculty In-Charge", role: "Academic Grievances", contact: "Dean Office" },
      { name: "Women's Internal Complaints Cell", designation: "Presiding Woman Faculty", role: "Prevention of Sexual Harassment (POSH)", contact: "Confidential Wing" },
      { name: "SC/ST Special Liaison Officer", designation: "Faculty Member", role: "Welfare & Scholarship Protection", contact: "Admin Desk" },
    ],
  },
};

export * from "./governanceData";
