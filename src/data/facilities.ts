// Universal College Patran — Campus & Facilities Dataset
// 100% Fact-Checked & Verified against 'site map content.docx.pdf' (Pages 18–21)

export interface Facility {
  id: string;
  name: string;
  zone: string;
  tagline: string;
  description: string;
  image: string;
  keyFocus: string[];
  capacity?: string;
  areaSqFt?: string;
  equipment: string[];
  specifications: { label: string; value: string }[];
  badge: string;
}

export interface InfrastructurePriority {
  title: string;
  action: string;
  description: string;
  metricLabel: string;
  metric: string;
}

export const INFRASTRUCTURE_PHILOSOPHY: InfrastructurePriority[] = [
  {
    title: "Expand",
    action: "Create additional spaces as the institution grows",
    description: "Systematically developing additional academic blocks, specialized practical workshops, and student support facilities to support expanding enrolments across Patran and surrounding rural regions.",
    metricLabel: "Campus Expansion Scope",
    metric: "10+ Acres",
  },
  {
    title: "Upgrade",
    action: "Improve existing facilities and learning environments",
    description: "Continuously improving existing practical workshops, laboratories, and physical spaces with modern instrumentation, ergonomic furniture, and high-performance equipment.",
    metricLabel: "Operational Readiness",
    metric: "100%",
  },
  {
    title: "Modernise",
    action: "Introduce facilities suited to contemporary education",
    description: "Introducing air-conditioned smart lecture rooms, four networked computer laboratories, leased high-speed fiber internet, and contemporary digital learning resources.",
    metricLabel: "Dedicated Campus LAN",
    metric: "100 Mbps",
  },
  {
    title: "Include",
    action: "Strengthen accessibility and student convenience",
    description: "Strengthening barrier-free accessibility with engineered low-gradient ramps, grab rails, ground-floor learning options, and student-first service counters.",
    metricLabel: "Barrier-Free Access",
    metric: "100%",
  },
  {
    title: "Sustain",
    action: "Maintain a clean, green and responsible campus environment",
    description: "Maintaining a serene, clean, and green eco-campus with extensive evergreen lawns, shade trees, environmental cleanliness drives, and an active Eco Club.",
    metricLabel: "Open Green Canopy",
    metric: "60%+",
  },
];

export const OFFICIAL_CAMPUS_PROMISE = {
  quote: "More than building spaces, we are building opportunities for learning, skills, participation and growth.",
  vision: "Our campus is not a finished structure; it is a continuously evolving environment built around the changing needs and aspirations of our students.",
  source: "Universal College Patran — Campus Development Vision (site map content.docx.pdf, Page 21)",
};

export const CAMPUS_ZONES = [
  {
    name: "Labs & Practical Workshops",
    tagline: "Dedicated computer, medical, fashion, cosmetology and technical trade workshops",
    count: 6,
  },
  {
    name: "Academic Commons & Innovation",
    tagline: "Air-conditioned classrooms, central library, seminar hall and IIC incubation cell",
    count: 4,
  },
  {
    name: "Sports, Athletics & Cadet Training",
    tagline: "Open-air stadium, sports ground, sports room and NCC cadet room",
    count: 3,
  },
  {
    name: "Campus Support & Living Facilities",
    tagline: "Admission cell, staff rooms, green grounds, accessibility ramps, canteen and guest house",
    count: 6,
  },
];

// All facilities documented in Section 6 (Pages 18–21) of 'site map content.docx.pdf'
export const FACILITIES_DATA: Facility[] = [
  // 1. Air-Conditioned Classrooms (Page 18)
  {
    id: "classrooms",
    name: "Air-Conditioned Classrooms & Academic Blocks",
    zone: "Academic Commons & Innovation",
    tagline: "Comfortable and focused learning spaces for regular teaching, discussions and presentations",
    description:
      "Our air-conditioned classrooms provide a comfortable and focused environment for regular teaching, discussions, presentations and interactive learning. Tiered and well-lit seating arrangements allow unobstructed engagement between students and faculty members.",
    image: "/assets/campus/classroom.jpg",
    keyFocus: ["Air-Conditioned", "Focused Environment", "Interactive Learning", "Discussions"],
    capacity: "60 to 80 Students / Classroom",
    areaSqFt: "18 Dedicated Lecture Rooms",
    equipment: [
      "High-Tonnage Split Air Conditioning Systems",
      "Overhead Digital Ceiling Projectors",
      "Glare-Free Ceramic Marker Boards",
      "Ergonomic Solid Wooden Desks",
      "Natural Daylighting & Cross-Ventilation",
    ],
    specifications: [
      { label: "Climate Control", value: "100% Air Conditioned" },
      { label: "Classroom Count", value: "18 Dedicated Lecture Rooms" },
      { label: "Teaching Technology", value: "Smart Projectors & Digital Media" },
      { label: "Seating Type", value: "Ergonomic Dual Wooden Benches" },
    ],
    badge: "100% Air-Conditioned",
  },

  // 2. Four Computer Laboratories (Page 18)
  {
    id: "computer-labs",
    name: "Four Computer Laboratories",
    zone: "Labs & Practical Workshops",
    tagline: "Dedicated spaces for practical learning, computer applications, IT and digital skills",
    description:
      "With four dedicated computer laboratories, students have specialized spaces for practical learning, computer applications, information technology and digital skill development across BCA, PGDCA, M.Sc. Computer Science, and ITI CMPA curriculum.",
    image: "/assets/campus/computer-lab-2.jpg",
    keyFocus: ["Practical Learning", "Computer Applications", "Information Technology", "Digital Skills"],
    capacity: "120 Networked Workstations",
    areaSqFt: "4 Dedicated Specialized Labs",
    equipment: [
      "120+ Intel Core i5/i7 Multi-Core Workstations",
      "Dedicated 100 Mbps High-Speed Leased Line",
      "Centralized 10 kVA UPS Power Backup",
      "Dual-Boot Linux (Ubuntu) & Windows Operating Systems",
      "Programming Environments: Python, Java, C++, SQL, Tally Prime",
    ],
    specifications: [
      { label: "Number of Labs", value: "4 Dedicated Laboratories" },
      { label: "Internet Speed", value: "100 Mbps Leased Optical Line" },
      { label: "Operating Systems", value: "Linux Ubuntu & Windows 11 Pro" },
      { label: "Key Software", value: "Python, C++, Java, Tally Prime, Oracle SQL" },
    ],
    badge: "4 Dedicated IT Labs",
  },

  // 3. Beauty & Wellness Laboratory (Page 18)
  {
    id: "beauty-wellness",
    name: "Beauty & Wellness Laboratory",
    zone: "Labs & Practical Workshops",
    tagline: "Hands-on techniques, professional practices and practical confidence in wellness",
    description:
      "The Beauty & Wellness Laboratory provides a dedicated practical environment for students pursuing beauty, wellness and related skill-based programmes. The facility enables students to develop hands-on techniques, professional practices and practical confidence through experiential learning.",
    image: "/assets/campus/beauty-salon.jpg",
    keyFocus: ["Beauty & Wellness", "Practical Training", "Professional Skills", "Hands-on Learning"],
    capacity: "25 Trainee Consoles",
    areaSqFt: "Professional Salon Studio",
    equipment: [
      "Hydraulic Salon Styling & Reclining Chairs",
      "Facial Vaporizers, Steamers & Skincare Modules",
      "High-Frequency Aesthetic Therapy Equipment",
      "Bridal Makeup & Cosmetology Vanity Stations",
      "UV Tool Sterilizers & Sanitization Cabinets",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Beauty & Wellness • Practical Training • Professional Skills" },
      { label: "Affiliations", value: "PSOU & NIOS Certified Skill Courses" },
      { label: "Sanitization", value: "Hospital-Grade UV Cabinet Sterilizers" },
      { label: "Training Focus", value: "Cosmetology, Hair Dressing, Skincare & Bridal Styling" },
    ],
    badge: "Professional Cosmetology Suite",
  },

  // 4. B.Sc. Fashion Technology Laboratory (Pages 18–19)
  {
    id: "fashion-lab",
    name: "B.Sc. Fashion Technology Laboratory",
    zone: "Labs & Practical Workshops",
    tagline: "Connecting creative concepts, technical knowledge and practical application",
    description:
      "The college has a separate laboratory dedicated to B.Sc. Fashion Technology, providing students with an environment specifically designed for practical learning in the field of fashion technology. The laboratory supports students in connecting creative concepts, technical knowledge and practical application.",
    image: "/assets/campus/fashion-lab.jpg",
    keyFocus: ["Fashion Technology", "Practical Work", "Creativity", "Technical Skills", "Design Learning"],
    capacity: "35 Design Stations",
    areaSqFt: "Apparel Drafting & Tailoring Floor",
    equipment: [
      "Industrial Single-Needle Power Lockstitch Sewing Machines",
      "Full-Size Tailoring Dress Forms & Mannequins",
      "Solid-Wood Precision Pattern Cutting Tables",
      "Overlock Serger & Buttonhole Machines",
      "Steam Pressing & Garment Finishing Console",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Fashion Technology • Practical Work • Technical Skills" },
      { label: "Dedicated Degree", value: "B.Sc. (Hons.) Fashion Technology" },
      { label: "Pattern Tables", value: "Heavy Industrial Timber Worktops" },
      { label: "Garment Showcase", value: "Student Couture Display & Mannequin Runways" },
    ],
    badge: "B.Sc. Dedicated Fashion Lab",
  },

  // 5. Medical Laboratory (Page 19)
  {
    id: "medical-lab",
    name: "Medical Laboratory",
    zone: "Labs & Practical Workshops",
    tagline: "Connecting classroom concepts with practical procedures and diagnostic techniques",
    description:
      "The Medical Laboratory provides students with a dedicated space for practical and experiential learning related to medical and laboratory-oriented education. It helps students connect classroom concepts with practical procedures, laboratory techniques and professional learning.",
    image: "/assets/campus/medical-lab.jpg",
    keyFocus: ["Laboratory Practice", "Practical Training", "Technical Skills", "Experiential Learning"],
    capacity: "40 Students / Batch",
    areaSqFt: "Clinical Diagnostic Laboratory",
    equipment: [
      "High-Resolution Binocular Clinical Microscopes",
      "High-Speed Clinical Centrifuges & Micro-Hematocrit Units",
      "Digital Spectrophotometer & Colorimeter Setup",
      "Autoclaves & Biological Sterile Inoculation Benches",
      "Biochemistry & Hematology Reagent Consoles",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Laboratory Practice • Technical Skills • Experiential Learning" },
      { label: "Courses Supported", value: "CMLT & Nursing Assistant Programmes" },
      { label: "Safety Level", value: "Bio-Safety Standard Compliance" },
      { label: "Sterilization", value: "Dual Autoclaves & Chemical Wash Stations" },
    ],
    badge: "Medical Diagnostic Lab",
  },

  // 6. Electrician Training Laboratory (Page 19)
  {
    id: "electrician-lab",
    name: "Electrician Training Laboratory",
    zone: "Labs & Practical Workshops",
    tagline: "Hands-on technical competencies in electrical systems, equipment handling and training",
    description:
      "The Electrician Laboratory provides a practical environment for students to understand electrical systems and develop hands-on technical competencies. Students get opportunities to learn through practical exercises, equipment handling and skill-oriented training.",
    image: "/assets/campus/iti-electrical.jpg",
    keyFocus: ["Electrical Skills", "Practical Training", "Equipment Handling", "Technical Competence"],
    capacity: "40 Trainees / Session",
    areaSqFt: "Heavy Electrical Workshop",
    equipment: [
      "3-Phase Motor-Generator Testing Sets",
      "Transformer Testing & Insulation Megger Units",
      "Standard Conduit & Panel Wiring Testing Booths",
      "Digital Multimeters, Clamp Meters & Earth Testers",
      "Industrial Circuit Breaker & Safety Rigs",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Electrical Skills • Practical Training • Technical Competence" },
      { label: "Curriculum Standard", value: "NCVT / SCVT Industrial Guidelines" },
      { label: "Power Setup", value: "415V 3-Phase Industrial Power Feed" },
      { label: "Safety Infrastructure", value: "Rubber Matting, ELCBs & Isolation Switches" },
    ],
    badge: "Electrician Trade Workshop",
  },

  // 7. Plumber Training Laboratory (Page 19)
  {
    id: "plumber-lab",
    name: "Plumber Training Laboratory",
    zone: "Labs & Practical Workshops",
    tagline: "Hands-on experience and job-oriented technical competencies in plumbing skills",
    description:
      "The Plumber Laboratory is designed to support practical training in plumbing-related skills and techniques. It provides students with opportunities to gain hands-on experience and develop job-oriented technical competencies through practical learning.",
    image: "/assets/campus/iti-plumbing.jpg",
    keyFocus: ["Plumbing Skills", "Practical Training", "Technical Practice", "Job-Oriented Learning"],
    capacity: "30 Trainees / Session",
    areaSqFt: "Hydraulic Assembly Workshop",
    equipment: [
      "Pipe Threading Machines & Heavy-Duty Bench Vises",
      "Hydrostatic Pressure Testing Pump & Manifold",
      "PVC Solvent & Heat-Welding Fusion Equipment",
      "Sanitary Fixture Installation Practice Walls",
      "Drainage Slope & Trap Demonstration Units",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Plumbing Skills • Technical Practice • Job-Oriented Learning" },
      { label: "Materials Handled", value: "GI, PPR, CPVC, PVC and Composite Pipes" },
      { label: "Pressure Testing", value: "Hydrostatic Verification Rig" },
      { label: "Practical Exposure", value: "Residential & Institutional Pipe Laying" },
    ],
    badge: "Plumbing Trade Workshop",
  },

  // 8. College Library (Page 19)
  {
    id: "library",
    name: "College Library",
    zone: "Academic Commons & Innovation",
    tagline: "A peaceful academic environment for reading, research, revision and independent learning",
    description:
      "The college library provides a peaceful academic environment where students can read, research, revise and learn independently. It complements classroom teaching by encouraging students to explore subjects beyond their prescribed curriculum.",
    image: "/assets/campus/college-lab-students.webp",
    keyFocus: ["Reading", "Reference", "Self-Study", "Academic Resources", "Lifelong Learning"],
    capacity: "120 Reading Desks",
    areaSqFt: "Central Library & Digital Hub",
    equipment: [
      "Comprehensive Curriculum & Reference Book Collections",
      "National & Regional Newspapers and Periodicals",
      "DELNET Online E-Resource Terminals",
      "Long-Format Silent Study Timber Tables",
      "Computerized Book Issue & Return Circulation Counter",
    ],
    specifications: [
      { label: "Library Focus (PDF)", value: "Reading • Reference • Self-Study • Lifelong Learning" },
      { label: "E-Resources", value: "DELNET National Digital Network Access" },
      { label: "Daily Timings", value: "Open Daily 8:30 AM – 4:30 PM" },
      { label: "Services", value: "Reference Desk, Past Exam Papers & Reprography" },
    ],
    badge: "DELNET Connected Library",
  },

  // 9. Seminar Hall (Page 19)
  {
    id: "seminar-hall",
    name: "Seminar Hall",
    zone: "Academic Commons & Innovation",
    tagline: "A space for ideas, interaction, guest lectures, workshops and student expression",
    description:
      "The Seminar Hall provides a dedicated venue for seminars, workshops, guest lectures, orientation programmes, presentations, meetings and institutional events. It gives students opportunities to listen, interact, present ideas and develop their communication skills.",
    image: "/assets/campus/library.jpg",
    keyFocus: ["Seminars", "Workshops", "Presentations", "Guest Lectures", "Student Interaction"],
    capacity: "250 Conference Seats",
    areaSqFt: "Auditorium-Style Presentation Theatre",
    equipment: [
      "Motorized Large-Format Digital Projection Screen",
      "Multi-Channel PA Sound System with Collar & Handheld Microphones",
      "Formal Stage Podium & Dignitary Dias",
      "Integrated Climate Conditioning",
      "Audio-Visual Master Control Console",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Seminars • Presentations • Guest Lectures • Interaction" },
      { label: "Capacity", value: "250 Seated Attendees" },
      { label: "AV Setup", value: "Surround Acoustic Sound & Digital Projector" },
      { label: "Purpose", value: "Symposiums, Orientations, Guest Lectures & Debates" },
    ],
    badge: "250-Seat Seminar Theatre",
  },

  // 10. Sports Facilities (Sports Ground & Sports Room) (Page 19)
  {
    id: "sports-facilities",
    name: "Sports Facilities (Ground & Sports Room)",
    zone: "Sports, Athletics & Cadet Training",
    tagline: "Learn. Play. Compete. Grow — Supporting physical fitness, teamwork and discipline",
    description:
      "The college provides sports facilities that encourage students to maintain physical fitness, discipline, teamwork and a healthy competitive spirit. The sports ground and sports room support participation in sports and physical activities alongside academic life.",
    image: "/assets/campus/playground.jpg",
    keyFocus: ["Fitness", "Teamwork", "Discipline", "Sportsmanship", "Student Development"],
    capacity: "Outdoor Playing Field & Indoor Room",
    areaSqFt: "College Sports Ground + Sports Room",
    equipment: [
      "Dedicated Outdoor Volleyball Court with Netting",
      "Cemented Cricket Practice Pitch & Nets",
      "Indoor Sports Room: Table Tennis Tables & Rackets",
      "Tournament Carrom Boards & Chess Clocks",
      "Sports Equipment Storage & First Aid Kits",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Fitness • Teamwork • Discipline • Sportsmanship" },
      { label: "Facilities", value: "Sports Ground & Indoor Sports Room" },
      { label: "Key Sports", value: "Volleyball, Cricket, Table Tennis, Badminton, Chess" },
      { label: "Recent Title", value: "Dedhana Volleyball Tournament Champions (2024)" },
    ],
    badge: "Sports Ground & Indoor Room",
  },

  // 11. NCC Room (Pages 19–20)
  {
    id: "ncc-room",
    name: "NCC Room",
    zone: "Sports, Athletics & Cadet Training",
    tagline: "Building discipline, leadership, teamwork and responsibility among cadets",
    description:
      "The dedicated NCC Room provides space for NCC activities, meetings, planning and student engagement. It supports the development of discipline, teamwork, leadership and a sense of responsibility among participating students under 3 Punjab Air Squadron NCC.",
    image: "/assets/campus/ncc.jpg",
    keyFocus: ["Discipline", "Leadership", "Teamwork", "Responsibility", "Cadet Engagement"],
    capacity: "54 Enrolled Cadets",
    areaSqFt: "Air Squadron Cadet Headquarters",
    equipment: [
      "Cadet Uniform & Accoutrement Storage Quartermaster",
      "Aero-Modeling Assembly Bench & Crafting Tools",
      "Drill Command & Parade Planning Table",
      "Physical Conditioning & Marching Equipment",
      "Contingent Flags & Ceremonial Parade Gear",
    ],
    specifications: [
      { label: "NCC Affiliation", value: "3 PB Air Sqn NCC, Patran" },
      { label: "Associate NCC Officer", value: "Lt. Suman (Vice-Principal & ANO)" },
      { label: "Training Focus", value: "'B' and 'C' Certificate Preparation & Drills" },
      { label: "Special Honors", value: "Guard of Honor for Visiting Dignitaries" },
    ],
    badge: "3 PB AIR SQN NCC",
  },

  // 12. Staff Rooms (Page 20)
  {
    id: "staff-rooms",
    name: "Staff Rooms",
    zone: "Campus Support & Living Facilities",
    tagline: "Dedicated spaces for academic preparation, departmental work and student interaction",
    description:
      "Dedicated staff rooms provide faculty members with suitable spaces for academic preparation, departmental work, student interaction and professional collaboration across Arts, Computer Science, Commerce, Nursing, and Vocational wings.",
    image: "/assets/campus/staffroom.jpg",
    keyFocus: ["Academic Preparation", "Departmental Work", "Student Interaction", "Collaboration"],
    capacity: "Faculty Workstations",
    areaSqFt: "Departmental Faculty Suites",
    equipment: [
      "Individual Faculty Workstations with Internet Terminals",
      "Departmental Syllabus & Reference Shelving",
      "Student Academic Consultation Tables",
      "Lesson Planning & Grading Workspaces",
      "Wi-Fi Connectivity & Printing Access",
    ],
    specifications: [
      { label: "Staff Focus (PDF)", value: "Preparation • Departmental Work • Collaboration" },
      { label: "Wings Served", value: "Arts, Computer Science, Commerce, Nursing, ITI" },
      { label: "Amenities", value: "Wi-Fi, Personal Desks & Reference Libraries" },
      { label: "Mentorship", value: "Open-Door Student Doubt Clearing" },
    ],
    badge: "Faculty Academic Workspaces",
  },

  // 13. Admission Cell (Page 20)
  {
    id: "admission-cell",
    name: "Admission Cell",
    zone: "Campus Support & Living Facilities",
    tagline: "A dedicated point of contact for admission guidance, documentation and assistance",
    description:
      "The separate Admission Cell provides students and parents with a dedicated point of contact for admission guidance, programme information, documentation and admission-related assistance, including Post-Matric Scholarship filing support.",
    image: "/assets/campus/admission-cell.jpg",
    keyFocus: ["Admission Guidance", "Programme Information", "Documentation", "Assistance"],
    capacity: "Counseling & Inquiries",
    areaSqFt: "Central Administrative Welcome Center",
    equipment: [
      "One-on-One Academic Counseling Desks",
      "Document Verification & Digital Scanning Counter",
      "Dr. Ambedkar Portal / PMSS Scholarship Assistance Desk",
      "Air-Conditioned Parent Waiting Area",
      "Prospectus & Course Information Resource Hub",
    ],
    specifications: [
      { label: "Service Hours", value: "Monday – Saturday, 9:00 AM – 5:00 PM" },
      { label: "Key Guidance", value: "Course Selection, Verification & Scholarship Filing" },
      { label: "Helpline", value: "92162-44163 / 97791-46689" },
      { label: "Location", value: "Administrative Foyer (Ground Floor)" },
    ],
    badge: "Student Guidance Desk",
  },

  // 14. Green Campus (Page 20)
  {
    id: "green-campus",
    name: "Green Campus",
    zone: "Campus Support & Living Facilities",
    tagline: "Learning in a clean, green and welcoming environment that encourages eco responsibility",
    description:
      "We believe that a pleasant campus contributes to a positive learning experience. Our green campus provides students with a more welcoming environment while encouraging awareness of cleanliness, greenery and environmental responsibility.",
    image: "/assets/campus/garden.jpg",
    keyFocus: ["Cleanliness", "Greenery", "Environmental Responsibility", "Positive Experience"],
    capacity: "Open Campus Environment",
    areaSqFt: "Multiple Acres of Lawns & Gardens",
    equipment: [
      "Mature Perimeter Shade Trees (Neem, Ashoka, Botanical Plants)",
      "Maintained Natural Grass Lawns & Flowering Beds",
      "Rainwater Natural Percolation Grounds",
      "Outdoor Benches in Shaded Garden Study Spots",
      "Campus-Wide Zero Single-Use Plastic Policy",
    ],
    specifications: [
      { label: "Green Ratio", value: "Over 60% of Campus Dedicated to Open Air" },
      { label: "Stewardship", value: "College Eco Club & Dedicated Grounds Staff" },
      { label: "Policy", value: "Single-Use Plastic Banned Institution" },
      { label: "Environment", value: "Pollution-Free Rural Serenity in Patran" },
    ],
    badge: "Clean & Green Campus",
  },

  // 15. Accessible Campus (Ramps & Stairs) (Page 20)
  {
    id: "accessible-campus",
    name: "Accessible Campus (Ramps & Stairs)",
    zone: "Campus Support & Living Facilities",
    tagline: "Designed for convenient movement across all college areas for students, staff and visitors",
    description:
      "The campus incorporates ramps and stairs to facilitate movement across different areas of the college and support accessibility for students, staff and visitors, ensuring barrier-free dignity and convenience for every individual.",
    image: "/assets/campus/ramp.jpg",
    keyFocus: ["Accessibility", "Convenient Movement", "Ramps & Stairs", "Inclusive Infrastructure"],
    capacity: "Campus-Wide Access",
    areaSqFt: "All Entry Portals & Corridors",
    equipment: [
      "Low-Gradient Non-Skid Concrete Ramps (1:12 slope)",
      "Dual-Height Stainless Steel Safety Handrails",
      "Tactile Anti-Slip Bullnosing on Staircases",
      "Wide Double-Leaf Doorways for Wheelchair Clearance",
      "Ground-Level Priority Desks in Classrooms and Offices",
    ],
    specifications: [
      { label: "Accessibility (PDF)", value: "Ramps and Stairs for Convenient Movement" },
      { label: "Slope Gradient", value: "Gentle 1:12 Incline Accessible to Wheelchairs" },
      { label: "Handrails", value: "Dual-Height 304 Stainless Steel" },
      { label: "Mobility Focus", value: "Universal Access for Students, Staff & Visitors" },
    ],
    badge: "100% Accessible Movement",
  },

  // 16. College Canteen (Page 20)
  {
    id: "college-canteen",
    name: "College Canteen",
    zone: "Campus Support & Living Facilities",
    tagline: "A place to refresh, interact and connect during breaks in the everyday campus journey",
    description:
      "The college canteen provides a convenient space for students and staff to take refreshments and interact during breaks, adding to the everyday campus experience with wholesome snacks and clean drinking water.",
    image: "/assets/campus/canteen.jpg",
    keyFocus: ["Refreshments", "Student Interaction", "Convenience", "Everyday Experience"],
    capacity: "120 Dining Seats",
    areaSqFt: "Indoor Dining Hall & Shaded Veranda",
    equipment: [
      "Commercial Stainless Steel Food Preparation Counters",
      "Commercial Multi-Stage RO Drinking Water Chiller",
      "Sanitary Wash Basins & Hygiene Stations",
      "Ergonomic Easy-Clean Group Dining Benches",
      "Daily Subsidized Student Refreshment Menu",
    ],
    specifications: [
      { label: "Food Quality", value: "100% Vegetarian & Freshly Prepared" },
      { label: "Drinking Water", value: "Commercial RO Purified" },
      { label: "Operating Hours", value: "8:00 AM – 5:00 PM on Academic Days" },
      { label: "Pricing", value: "Subsidized Student-Friendly Pricing" },
    ],
    badge: "Hygienic RO-Purified Canteen",
  },

  // 17. Guest House (Pages 20–21)
  {
    id: "guest-house",
    name: "Guest House",
    zone: "Campus Support & Living Facilities",
    tagline: "Comfortable accommodation for visiting guests, faculty members, officials and visitors",
    description:
      "The college campus also features a Guest House providing comfortable accommodation for visiting guests, faculty members, officials and other visitors. It may also be made available to faculty members in case of an emergency or special need, ensuring convenient and temporary accommodation when required.",
    image: "/assets/campus/guest-house.jpg",
    keyFocus: ["Comfort", "Convenience", "Hospitality", "Care", "Visitor Accommodation"],
    capacity: "Private Living Suites",
    areaSqFt: "Executive On-Campus Guest Wing",
    equipment: [
      "Air-Conditioned Private Bedrooms with Attached Washrooms",
      "Executive Study Table with High-Speed Internet Access",
      "Hospitality Lounge with Tea/Coffee Amenities",
      "24-Hour Hot Water Supply & Power Backup",
      "Dedicated Campus Attendant & Sanitized Linen",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Comfort • Convenience • Hospitality • Care" },
      { label: "Users", value: "University Inspectors, Examiners & Guest Faculty" },
      { label: "Emergency Support", value: "Temporary Faculty Accommodation When Required" },
      { label: "Location", value: "Quiet Campus Residential Wing" },
    ],
    badge: "On-Campus Executive Suite",
  },

  // 18. Open-Air Theatre / Stadium (Page 21)
  {
    id: "stadium",
    name: "Open-Air Theatre / Stadium",
    zone: "Sports, Athletics & Cadet Training",
    tagline: "Perform • Participate • Celebrate • Connect — Venue for large-scale outdoor events",
    description:
      "The campus provides an open-air space for large-scale outdoor activities, events and student gatherings. It can be utilized for cultural programmes, celebrations, sports activities, competitions, performances and college functions, providing students with a lively platform to participate and showcase their talents.",
    image: "/assets/campus/stadium.jpg",
    keyFocus: ["Perform", "Participate", "Celebrate", "Connect", "Large-Scale Events"],
    capacity: "Multi-Acre Open Gathering Capacity",
    areaSqFt: "Open-Air Arena & Running Perimeter",
    equipment: [
      "Natural Turf Sports Field & 400m Running Perimeter",
      "Natural Spectator Embankment & Open Seating",
      "Flag Ceremonial Dais & Saluting Base",
      "Perimeter Floodlighting Arrays",
      "Open Platform for Cultural Celebrations & Rallies",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Perform • Participate • Celebrate • Connect" },
      { label: "Utilization", value: "Cultural Programmes, Sports Meets & College Functions" },
      { label: "Surfacing", value: "Maintained Natural Grass Playing Field" },
      { label: "Gathering Scale", value: "High-Capacity Outdoor Platform" },
    ],
    badge: "Open-Air Arena & Stadium",
  },

  // 19. Institution's Innovation Council (IIC) (Pages 21–22)
  {
    id: "iic",
    name: "Institution's Innovation Council (IIC)",
    zone: "Academic Commons & Innovation",
    tagline: "Think • Innovate • Create • Transform — Nurturing innovation, creativity and enterprise",
    description:
      "The Institution’s Innovation Council (IIC) at Universal College, Patran provides a dedicated platform for students and faculty to nurture innovation, creativity and entrepreneurial thinking. It encourages students to develop new ideas, identify real-life problems and explore practical solutions through workshops, awareness programmes, idea-generation activities and entrepreneurship initiatives.",
    image: "/assets/campus/college-lab-students.jpg",
    keyFocus: ["Think", "Innovate", "Create", "Transform", "Entrepreneurial Thinking"],
    capacity: "Incubation & Project Teams",
    areaSqFt: "Dedicated Innovation Workspace",
    equipment: [
      "Collaborative Problem-Solving Workbenches",
      "Magnetic Whiteboard Brainstorming & Mind-Mapping Walls",
      "High-Speed Internet Terminals for Project Prototyping",
      "Startup Business Model Canvas & Pitch Deck Archives",
      "Faculty & Entrepreneur Mentorship Meeting Bay",
    ],
    specifications: [
      { label: "Key Focus (PDF)", value: "Think • Innovate • Create • Transform" },
      { label: "Objectives", value: "Real-Life Problem Solving & Practical Solutions" },
      { label: "Activities", value: "Workshops, Awareness Programmes & Idea Generation" },
      { label: "Scope", value: "Beyond Classroom Entrepreneurial Guidance" },
    ],
    badge: "Innovation & Enterprise Council",
  },
];
