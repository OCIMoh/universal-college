export interface Facility {
  id: string;
  name: string;
  zone: string;
  zoneCode: "01" | "02" | "03" | "04";
  tagline: string;
  description: string;
  image: string;
  capacity?: string;
  areaSqFt?: string;
  equipment: string[];
  specifications: { label: string; value: string }[];
  badge: string;
  tourStopId?: string;
}

export interface InfrastructurePriority {
  number: string;
  title: string;
  principle: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export const INFRASTRUCTURE_PHILOSOPHY: InfrastructurePriority[] = [
  {
    number: "01",
    title: "EXPAND",
    principle: "Strategic Footprint Growth",
    description: "Systematically increasing built academic space and workshop acreage to comfortably accommodate surging enrolments across Patran, Shutrana, and surrounding rural catchment clusters.",
    metric: "10+ Acres",
    metricLabel: "Total Institutional Perimeter",
  },
  {
    number: "02",
    title: "UPGRADE",
    principle: "Contemporary Industry Parity",
    description: "Continuous reinvestment in heavy-duty machinery, electrical test consoles, and pathology diagnostic analyzers ensuring student practicals mirror actual hospital and shop-floor standards.",
    metric: "100%",
    metricLabel: "Active Working Equipment Ratio",
  },
  {
    number: "03",
    title: "MODERNISE",
    principle: "Digital & Climate-Controlled Learning",
    description: "Equipping classrooms with full air conditioning, acoustic ceiling baffles, digital overhead projectors, and campus-wide enterprise optical fiber connectivity.",
    metric: "100 Mbps",
    metricLabel: "Dedicated Optical Backbone",
  },
  {
    number: "04",
    title: "INCLUDE",
    principle: "Zero-Barrier Universal Accessibility",
    description: "Engineered low-gradient concrete access ramps, heavy-gauge stainless steel handrails, ground-level priority desks, and gender-inclusive hygiene suites serving every individual with dignity.",
    metric: "100%",
    metricLabel: "Ground-Level Barrier-Free Access",
  },
  {
    number: "05",
    title: "SUSTAIN",
    principle: "Ecological Equilibrium & Clean Energy",
    description: "Preserving vast evergreen lawns, rainwater percolation pits, single-use plastic elimination, and energy-conserving natural cross-ventilation across all academic blocks.",
    metric: "60%+",
    metricLabel: "Green Open Campus Canopy",
  },
];

export const CAMPUS_ZONES = [
  {
    code: "01",
    name: "Labs & Industrial Workshops",
    tagline: "Precision diagnostic, computing & heavy vocational suites",
    count: 6,
  },
  {
    code: "02",
    name: "Academic Commons & Innovation",
    tagline: "Air-conditioned lecture halls, central library & incubator",
    count: 4,
  },
  {
    code: "03",
    name: "Athletics & Cadet Command",
    tagline: "Multi-acre sports stadium, playing fields, NCC & NSS stations",
    count: 4,
  },
  {
    code: "04",
    name: "Civic Fabric & Living Campus",
    tagline: "Eco-gardens, universal ramps, canteen, guest house & administration",
    count: 6,
  },
];

export const FACILITIES_DATA: Facility[] = [
  // ZONE 01: Labs & Industrial Workshops
  {
    id: "computer-labs",
    name: "Four High-Performance Computer Labs",
    zone: "Labs & Industrial Workshops",
    zoneCode: "01",
    tagline: "120+ networked computing workstations with gigabit fiber backbone",
    description:
      "Universal College maintains four dedicated, air-conditioned computer laboratories configured to support BCA, PGDCA, M.Sc. Computer Science, and ITI CMPA curriculum. Each terminal is equipped with modern multi-core processors, SSD storage, high-speed campus LAN, and professional programming environments including Python, C++, Java, Oracle SQL, and Tally Prime.",
    image: "/assets/infrastructure/computer-lab.jpg",
    capacity: "120 Workstations",
    areaSqFt: "3,200 sq.ft across 4 labs",
    equipment: [
      "120+ Intel Core i5/i7 Workstations",
      "Dedicated 100 Mbps Leased Optical Line",
      "Centralized UPS Power Backup (10 kVA)",
      "Linux & Windows Dual-Boot Network",
      "Network Attached Storage & Git Server",
    ],
    specifications: [
      { label: "Number of Labs", value: "4 Separate Specialized Units" },
      { label: "Hardware Config", value: "Core i5 / 16GB RAM / NVMe SSD" },
      { label: "Operating Systems", value: "Ubuntu Linux & Windows 11 Pro" },
      { label: "Software Toolsets", value: "Python, Java, MySQL, Tally Prime, VS Code" },
    ],
    badge: "100 Mbps Optical LAN",
    tourStopId: "computer-lab",
  },
  {
    id: "medical-lab",
    name: "Medical Diagnostic & Pathology Laboratory",
    zone: "Labs & Industrial Workshops",
    zoneCode: "01",
    tagline: "Hospital-grade clinical testing laboratory for CMLT & Nursing Assistant scholars",
    description:
      "Engineered specifically for students pursuing the Certificate in Medical Lab Technology (CMLT) and Nursing Assistant diplomas, this diagnostic laboratory simulates an authentic hospital pathology setting. Students train directly in hematology, clinical biochemistry, urine analysis, and microbiological sterile techniques under licensed faculty supervision.",
    image: "/assets/infrastructure/medical-lab.jpg",
    capacity: "40 Students / Batch",
    areaSqFt: "1,150 sq.ft",
    equipment: [
      "High-Resolution Binocular Research Microscopes",
      "High-Speed Centrifuges & Micro-Hematocrit Units",
      "Colorimeter & Digital Spectrophotometer",
      "Steam Autoclave & Laminar Airflow Bench",
      "Semi-Automated Biochemistry Analyzer Setup",
    ],
    specifications: [
      { label: "Primary Departments", value: "Medical Lab Tech & Nursing" },
      { label: "Safety Standard", value: "Bio-Safety Level 1 Compliant" },
      { label: "Sterilization", value: "Dual Autoclaves & Chemical Wash Benches" },
      { label: "Specimen Storage", value: "Temperature-Regulated Medical Refrigeration" },
    ],
    badge: "Hospital-Grade Diagnostic",
    tourStopId: "medical-lab",
  },
  {
    id: "fashion-lab",
    name: "B.Sc. Fashion Technology Studio & Drafting Lab",
    zone: "Labs & Industrial Workshops",
    zoneCode: "01",
    tagline: "Full-scale apparel design, computerized pattern making & textile assembly studio",
    description:
      "A creative powerhouse housing industrial single-needle lockstitch machines, pattern grading workbenches, tailoring mannequins, and specialized garment fabrication tables. Students translate fashion sketches into bespoke couture and retail-ready garments, preparing for careers in apparel export and textile entrepreneurship.",
    image: "/assets/infrastructure/fashion-lab.jpg",
    capacity: "35 Design Stations",
    areaSqFt: "1,400 sq.ft",
    equipment: [
      "Industrial Single-Needle Power Sewing Machines",
      "Full-Size Tailoring Dress Forms & Mannequins",
      "Fabric Cutting & Spreading Workstations",
      "Overlock Serger & Buttonhole Machines",
      "Garment Pressing & Steam Finishing Station",
    ],
    specifications: [
      { label: "Programmes Supported", value: "B.Sc. Fashion Tech & ITI Sewing" },
      { label: "Cutting Tables", value: "Heavy Solid Wood Precision Worktops" },
      { label: "Drafting Tools", value: "French Curves, L-Squares & Fashion Grading Sets" },
      { label: "Showcase Area", value: "Permanent Student Couture Runway & Mannequins" },
    ],
    badge: "Industrial Garment Studio",
    tourStopId: "fashion-lab",
  },
  {
    id: "beauty-wellness-salon",
    name: "Beauty & Wellness Training Salon",
    zone: "Labs & Industrial Workshops",
    zoneCode: "01",
    tagline: "Professional aesthetic cosmetology clinic for PSOU & NIOS wellness certifications",
    description:
      "Designed as a contemporary salon and dermatology care suite, this laboratory equips students with hands-on mastery in skin analysis, therapeutic hair styling, herbal facial treatments, bridal makeup artistry, and strict hygienic salon management practices.",
    image: "/assets/care-beauty-salon.jpg",
    capacity: "25 Trainee Stations",
    areaSqFt: "950 sq.ft",
    equipment: [
      "Hydraulic Salon Recliner Chairs & Shampoo Units",
      "Facial Vaporizers & Ozone Steamers",
      "High-Frequency Aesthetic Treatment Devices",
      "Professional Cosmetic & Makeup Vanity Consoles",
      "UV Sanitizing & Autoclave Tool Sterilizers",
    ],
    specifications: [
      { label: "Affiliations", value: "PSOU & NIOS Skill Development" },
      { label: "Sanitization", value: "Hospital-Grade UV Cabinet Sterilizers" },
      { label: "Lighting", value: "High-CRI 5000K Vanity Illumination" },
      { label: "Practical Exposure", value: "Community Grooming & Bridal Clinics" },
    ],
    badge: "Professional Cosmetology",
    tourStopId: "beauty-salon",
  },
  {
    id: "electrician-lab",
    name: "ITI Electrician Practical Workshop",
    zone: "Labs & Industrial Workshops",
    zoneCode: "01",
    tagline: "Heavy-duty 3-phase power, AC/DC motor testing & industrial wiring bays",
    description:
      "Approved under NCVT / SCVT standards, the Electrician practical workshop features dedicated wiring testing bays, AC/DC machine coupling sets, transformer rewind benches, and industrial circuit breaker panels. Students master domestic wiring, commercial distribution, and electrical troubleshooting under safety-first protocols.",
    image: "/assets/iti-electrical.jpg",
    capacity: "40 Electrician Trainees",
    areaSqFt: "1,800 sq.ft",
    equipment: [
      "3-Phase Motor-Generator Test Sets",
      "Transformer Testing & Insulation Testers (Megger)",
      "Standard Conduit & Panel Wiring Testing Booths",
      "Digital Multimeters, Clamp Meters & Earth Testers",
      "Industrial Earthing Simulator & Safety Rig",
    ],
    specifications: [
      { label: "Regulatory Compliance", value: "DGT / NCVT Workshop Specifications" },
      { label: "Power Supply", value: "Dedicated 415V 3-Phase Industrial Connection" },
      { label: "Safety Infrastructure", value: "Rubber Matting, ELCBs & Isolation Switches" },
      { label: "Curriculum Focus", value: "Solar, Industrial Panels & Domestic Wiring" },
    ],
    badge: "NCVT Industrial Workshop",
    tourStopId: "iti-workshop",
  },
  {
    id: "plumber-lab",
    name: "ITI Plumber Workshop & Hydraulic Bay",
    zone: "Labs & Industrial Workshops",
    zoneCode: "01",
    tagline: "Precision pipe-threading, sanitary fixture assemblies & leak-testing manifolds",
    description:
      "A dedicated technical workshop where apprentice plumbers gain practical competence in GI, PVC, CPVC, and PPR piping systems. Features operational pressure testing rigs, sewer gradient models, water filtration fittings, and modern bathroom fixture testing installations.",
    image: "/assets/iti-plumbing.jpg",
    capacity: "30 Plumber Trainees",
    areaSqFt: "1,200 sq.ft",
    equipment: [
      "Pipe Threading Machines & Heavy-Duty Bench Vises",
      "Hydrostatic Pressure Testing Pump & Manifold",
      "PVC Solvent & Heat-Welding Fusion Equipment",
      "Sanitary Fixture Installation Practice Walls",
      "Drainage Slope & Trap Demonstration Units",
    ],
    specifications: [
      { label: "Regulatory Compliance", value: "DGT Skill Standards" },
      { label: "Piping Mediums", value: "GI, PPR, CPVC, PVC, Multilayer Composite" },
      { label: "Testing Rig", value: "Up to 10 Bar Hydrostatic Verification" },
      { label: "Field Practical", value: "Campus Pipeline Maintenance Apprenticeship" },
    ],
    badge: "Hands-on Technical Bay",
    tourStopId: "iti-workshop",
  },

  // ZONE 02: Academic Commons & Innovation
  {
    id: "ac-classrooms",
    name: "Air-Conditioned Smart Classrooms",
    zone: "Academic Commons & Innovation",
    zoneCode: "02",
    tagline: "Climate-controlled, acoustically treated lecture halls engineered for focus",
    description:
      "Every core academic classroom across the Universal campus is fitted with high-tonnage climate control, ergonomic wooden desks, glare-free marker boards, and ceiling-mounted digital projection displays. Stepped tiered arrangements ensure every scholar maintains unimpeded sightlines to faculty lectures and multimedia presentations.",
    image: "/assets/infrastructure/classroom.jpg",
    capacity: "60 to 80 Students / Room",
    areaSqFt: "650 sq.ft per lecture hall",
    equipment: [
      "Heavy-Duty Split Air Conditioning Units",
      "High-Lumen Ceiling Digital Projectors",
      "Acoustic Ceiling & Glare-Free Whiteboards",
      "Ergonomic Dual-Seat Wooden Desks",
      "Natural Daylighting Cross-Ventilation Windows",
    ],
    specifications: [
      { label: "Climate Control", value: "100% Air Conditioned" },
      { label: "Classroom Count", value: "18 Dedicated Lecture Halls" },
      { label: "Audio-Visual", value: "Smart Projectors & Wireless Presentation" },
      { label: "Accessibility", value: "Ground Floor Options for Inclusive Mobility" },
    ],
    badge: "100% Air-Conditioned",
    tourStopId: "classrooms",
  },
  {
    id: "central-library",
    name: "Central College Library & DELNET E-Resource Hub",
    zone: "Academic Commons & Innovation",
    zoneCode: "02",
    tagline: "Vast collection of curriculum texts, journals & networked digital DELNET repository",
    description:
      "The academic intellectual center of Universal College Patran. Houses thousands of printed volumes covering Commerce, IT, Computer Science, Literature, Health Sciences, and Humanities alongside subscriptions to national newspapers, peer-reviewed journals, and networked DELNET e-book repositories with a pin-drop quiet reading sanctuary.",
    image: "/assets/library.jpg",
    capacity: "120 Reading Desks",
    areaSqFt: "2,400 sq.ft",
    equipment: [
      "Extensive Textbook & Reference Book Stacks",
      "DELNET Online Digital Database Access Terminals",
      "National & Regional Periodical Archives",
      "Spacious Long-Format Timber Reading Tables",
      "Automated Barcode Book Circulation Desk",
    ],
    specifications: [
      { label: "Book Volumes", value: "Thousands of Catalogued Textbooks" },
      { label: "Digital Access", value: "DELNET National E-Resource Member" },
      { label: "Quiet Hours", value: "Open Daily 8:30 AM – 4:30 PM" },
      { label: "Services", value: "Reprography, Reference Desk & Past Papers" },
    ],
    badge: "DELNET Digital Connected",
    tourStopId: "library",
  },
  {
    id: "seminar-hall",
    name: "Multipurpose Academic Seminar Hall",
    zone: "Academic Commons & Innovation",
    zoneCode: "02",
    tagline: "250-seat conference theatre with acoustic sound & high-definition projection",
    description:
      "A premier indoor event space hosting inter-college guest lectures, industry seminars, orientation symposiums, and faculty development programmes. Features tiered auditorium seating, motorized projection screen, integrated surround audio, and formal dignitary dais.",
    image: "/assets/corridor.jpg",
    capacity: "250 Conference Seats",
    areaSqFt: "2,200 sq.ft",
    equipment: [
      "Motorized 150-inch High-Gain Projection Screen",
      "Multi-Channel PA Sound System with Wireless Mics",
      "Executive Dais with Formal Podium & Floral Rigs",
      "Centralized Climate Conditioning",
      "Dedicated Audio/Video Control Console",
    ],
    specifications: [
      { label: "Seating Layout", value: "Auditorium Style with Central Aisle" },
      { label: "AV Equipment", value: "Wireless Handheld & Collar Microphones" },
      { label: "Usage", value: "Guest Lectures, National Seminars & Convocation" },
      { label: "Connectivity", value: "Gigabit Video-Conferencing Line" },
    ],
    badge: "250-Capacity Conference",
    tourStopId: "seminar-hall",
  },
  {
    id: "iic-hub",
    name: "Institution's Innovation Council (IIC) Cell",
    zone: "Academic Commons & Innovation",
    zoneCode: "02",
    tagline: "Ministry of Education recognized startup incubation & ideation studio",
    description:
      "Operating in accordance with MoE Innovation Cell guidelines, the campus IIC hub provides ambitious students with a dedicated creative workspace to conceptualize startup ideas, formulate patent drafts, build minimum viable prototypes, and collaborate on national hackathon projects.",
    image: "/assets/college-lab-students.jpg",
    capacity: "30 Innovators",
    areaSqFt: "850 sq.ft",
    equipment: [
      "Modular Ideation Collaboration Desks",
      "Magnetic Whiteboard Problem-Mapping Walls",
      "High-Speed High-Res Prototyping Workstations",
      "Mentor Video-Conferencing Station",
      "Business Plan Archive & Pitch Deck Library",
    ],
    specifications: [
      { label: "Recognition", value: "MoE Innovation Cell (Govt. of India)" },
      { label: "Primary Focus", value: "Rural Tech, Agrotech, Digital Commerce" },
      { label: "Mentorship", value: "Alumni Entrepreneurs & University Incubators" },
      { label: "Events", value: "Annual Campus Ideathon & Angel Investor Pitches" },
    ],
    badge: "MoE Recognized IIC",
    tourStopId: "iic-hub",
  },

  // ZONE 03: Athletics & Cadet Command
  {
    id: "stadium",
    name: "Multi-Acre Open Stadium & Athletics Arena",
    zone: "Athletics & Cadet Command",
    zoneCode: "03",
    tagline: "Championship grass sports stadium for inter-college meets and cultural rallies",
    description:
      "The athletic crown jewel of Patran. Universal College's multi-acre sports stadium features a 400-meter running track perimeter, natural turf grass playing surface, elevated spectator mounds, and ceremonial victory podiums. It regularly hosts university zonal tournaments and annual athletic meets.",
    image: "/assets/infrastructure/stadium.jpg",
    capacity: "5,000+ Spectator Capacity",
    areaSqFt: "Multi-Acre Athletic Arena",
    equipment: [
      "Standard 400m Athletics Sprint Track",
      "Full-Size Football & Cricket Playing Oval",
      "Shotput, Discus & Long Jump Pits",
      "Ceremonial Flagmast & March-Past Saluting Base",
      "Perimeter Floodlighting Arrays",
    ],
    specifications: [
      { label: "Facility Type", value: "Regulation Open-Air Sports Arena" },
      { label: "Events Hosted", value: "Annual Sports Meet, Zonal Athletics, Rallies" },
      { label: "Turf Quality", value: "Maintained Natural Grass Surface" },
      { label: "Spectator Zones", value: "Natural Tiered Embankment Seating" },
    ],
    badge: "Multi-Acre Championship Arena",
    tourStopId: "stadium",
  },
  {
    id: "sports-ground",
    name: "Multi-Sport Playing Field & Indoor Sports Station",
    zone: "Athletics & Cadet Command",
    zoneCode: "03",
    tagline: "Dedicated volleyball court, cricket nets, badminton & indoor strategy salon",
    description:
      "Complements the central stadium with dedicated outdoor volleyball courts, cemented cricket practice nets, and an indoor games center equipped with international-standard carrom boards, chess tables, and table tennis consoles where student athletes hone daily reflexes.",
    image: "/assets/infrastructure/playground.jpg",
    capacity: "150 Athletes Simultaneously",
    areaSqFt: "Outdoor Courts + Indoor Room",
    equipment: [
      "Regulation Volleyball Court with Tension Netting",
      "Cemented Cricket Practice Nets with Bowling Turf",
      "Indoor Table Tennis Units & Stag Rackets",
      "Tournament Carrom Boards & Speed Chess Timers",
      "Sports Equipment Armory & First Aid Locker",
    ],
    specifications: [
      { label: "Sports Offered", value: "Volleyball, Cricket, Table Tennis, Badminton, Chess" },
      { label: "Coaching", value: "Full-Time Physical Education Faculty" },
      { label: "Trophy Record", value: "Dedhana Tournament Champions 2024" },
      { label: "Student Welfare", value: "Free Sports Kit & University Travel Grants" },
    ],
    badge: "Volleyball & Indoor Sports",
    tourStopId: "playground",
  },
  {
    id: "ncc-station",
    name: "NCC 3 PB AIR SQN Cadet Headquarters",
    zone: "Athletics & Cadet Command",
    zoneCode: "03",
    tagline: "Dedicated wing for Air Squadron cadets, parade drills & leadership training",
    description:
      "Affiliated under 3 Punjab Air Squadron NCC, Patran. The dedicated NCC station serves as the operational headquarters for our disciplined boy and girl cadets under the direction of commissioned officer Lt. Suman. Includes drill gear lockers, aero-modeling assembly bench, and march-past briefing quarters.",
    image: "/assets/infrastructure/ncc.jpg",
    capacity: "54 Enrolled Cadets",
    areaSqFt: "650 sq.ft HQ + Drill Grounds",
    equipment: [
      "Cadet Uniform & Accoutrement Quartermaster Storage",
      "Aero-Modeling Model Display & Crafting Station",
      "Drill Command & Marching Parade Briefing Board",
      "Physical Conditioning & Obstacle Course Gear",
      "Republic Day & Independence Day Contingent Flags",
    ],
    specifications: [
      { label: "NCC Unit", value: "3 PB Air Sqn NCC, Patran" },
      { label: "Commanding Officer", value: "Lt. Suman (Associate NCC Officer)" },
      { label: "Certifications", value: "'B' and 'C' Certificate Training" },
      { label: "Special Honors", value: "Guard of Honor for Visiting Dignitaries" },
    ],
    badge: "3 PB AIR SQN NCC",
    tourStopId: "ncc-station",
  },
  {
    id: "nss-center",
    name: "NSS Community Service Command Center",
    zone: "Athletics & Cadet Command",
    zoneCode: "03",
    tagline: "Not Me But You: Rural health, cleanliness & community welfare command",
    description:
      "Universal College's National Service Scheme (NSS) hub directs student-led civic impact initiatives across Patran, Shutrana, and surrounding rural villages. The center organizes annual blood donation drives, village hygiene camps under Swachh Bharat, tree plantation drives, and health awareness seminars.",
    image: "/assets/infrastructure/nss.jpg",
    capacity: "100+ NSS Volunteers",
    areaSqFt: "600 sq.ft Resource Center",
    equipment: [
      "Community Outreach Audio-Visual Field Kit",
      "Emergency First Aid & Health Screening Consoles",
      "Tree Plantation Equipment & Eco Gardening Tools",
      "Swachh Bharat Cleanliness Field Kits",
      "Disaster Relief Supply Storage Locker",
    ],
    specifications: [
      { label: "Motto", value: "'Not Me, But You' (Community Welfare)" },
      { label: "Signature Events", value: "Annual Blood Donation & Eye Screening Camps" },
      { label: "Rural Outreach", value: "Adopted Villages for Health & Literacy" },
      { label: "Volunteer Base", value: "Over 100 Active Civic Stewards" },
    ],
    badge: "National Service Scheme",
    tourStopId: "nss-station",
  },

  // ZONE 04: Civic Fabric & Living Campus
  {
    id: "green-campus",
    name: "Lush Green Eco-Campus & Botanical Grounds",
    zone: "Civic Fabric & Living Campus",
    zoneCode: "04",
    tagline: "Acres of manicured lawns, native shade trees & serene courtyards",
    description:
      "A breathing lung in the heart of the Patran region. The campus is carpeted with lush manicured grass, seasonal flowering gardens, shaded walkways, and mature evergreen canopies. Managed in coordination with the college Eco Club, the grounds feature rainwater conservation beds and a zero-litter mandate.",
    image: "/assets/infrastructure/garden.jpg",
    capacity: "Campus-Wide",
    areaSqFt: "Multiple Acres of Open Greenery",
    equipment: [
      "Perimeter Shaded Tree Canopy (Neem, Ashoka, Gulmohar)",
      "Central Courtyard Green Social Amphitheatre",
      "Rainwater Natural Percolation Grounds",
      "Stone Garden Benches & Shaded Outdoor Study Spots",
      "Eco-Club Botanical Identification Plaques",
    ],
    specifications: [
      { label: "Green Ratio", value: "Over 60% of Campus Dedicated to Open Air" },
      { label: "Stewardship", value: "College Eco Club & Dedicated Grounds Staff" },
      { label: "Policy", value: "Single-Use Plastic Banned Institution" },
      { label: "Ambiance", value: "Pollution-Free Rural Serenity" },
    ],
    badge: "Eco-Friendly Living Campus",
    tourStopId: "garden",
  },
  {
    id: "universal-ramps",
    name: "Universal Accessibility Ramps & Tactile Corridors",
    zone: "Civic Fabric & Living Campus",
    zoneCode: "04",
    tagline: "100% barrier-free mobility infrastructure engineered for all students",
    description:
      "Embodying Universal College's non-negotiable value of inclusivity, every academic entrance, laboratory corridor, and administrative wing is reachable via gently sloped, concrete accessibility ramps flanked by heavy-duty stainless steel dual-height grab rails. Staircases feature anti-slip tactile treads for safe pedestrian circulation.",
    image: "/assets/infrastructure/ramp.jpg",
    capacity: "Universal Campus Access",
    areaSqFt: "All Entry Thresholds",
    equipment: [
      "Low-Gradient Non-Skid Concrete Ramps (1:12 slope)",
      "Dual-Height Stainless Steel Handrails",
      "Wide Double-Door Laboratory & Classroom Portals",
      "High-Contrast Anti-Skid Staircase Bullnosing",
      "Ground-Floor Disabled Priority Restroom Facilities",
    ],
    specifications: [
      { label: "Compliance", value: "Accessible India Campaign Guidelines" },
      { label: "Slope Gradient", value: "Smooth 1:12 Wheelchair Low Incline" },
      { label: "Handrails", value: "304-Grade Stainless Steel Dual Height" },
      { label: "Priority", value: "Barrier-Free Access to Classrooms & Labs" },
    ],
    badge: "100% Barrier-Free Access",
    tourStopId: "ramp",
  },
  {
    id: "canteen",
    name: "College Canteen & Dining Commons",
    zone: "Civic Fabric & Living Campus",
    zoneCode: "04",
    tagline: "Wholesome, hygienic food & vibrant social hub for students and faculty",
    description:
      "A warm and lively campus gathering venue serving freshly prepared meals, snacks, cold refreshments, and authentic Punjabi chai at student-subsidized rates. Maintained under strict cleanliness protocols with continuous RO-purified drinking water, ample bench seating, and shaded outdoor dining verandas.",
    image: "/assets/infrastructure/canteen.jpg",
    capacity: "120 Seats",
    areaSqFt: "1,500 sq.ft Dining Hall + Patio",
    equipment: [
      "Commercial Stainless Steel Kitchen Prep Counters",
      "Commercial RO Multi-Stage Water Purification Chiller",
      "Deep Freezers & Fresh Dairy Refrigeration",
      "Ergonomic Easy-Clean Group Dining Benches",
      "Daily Menu Board with Nutritious Subsidized Offerings",
    ],
    specifications: [
      { label: "Dietary Quality", value: "100% Vegetarian & Freshly Cooked Daily" },
      { label: "Water Quality", value: "Multi-Stage Commercial RO Tested Water" },
      { label: "Timings", value: "8:00 AM – 5:00 PM on Academic Days" },
      { label: "Pricing", value: "Affordable Student-Friendly Pricing" },
    ],
    badge: "Hygienic RO-Purified",
    tourStopId: "canteen",
  },
  {
    id: "guest-house",
    name: "University Guest House & Dignitary Suite",
    zone: "Civic Fabric & Living Campus",
    zoneCode: "04",
    tagline: "On-campus executive accommodation for visiting professors, inspectors & examiners",
    description:
      "Universal College provides welcoming on-campus guest quarters for visiting university inspection committees, university external examiners, and guest seminar keynote speakers. Cleanly appointed with air conditioning, attached washrooms, and dedicated meal service.",
    image: "/assets/infrastructure/guest-house.jpg",
    capacity: "Private Suites",
    areaSqFt: "Dedicated Living Wing",
    equipment: [
      "Air-Conditioned Private Bedrooms with En-Suite Baths",
      "Executive Work Desk with High-Speed Wi-Fi",
      "Lounge & Tea/Coffee Hospitality Service",
      "24-Hour Hot Water & Power Backup",
      "Dedicated Campus Hospitality Attendant",
    ],
    specifications: [
      { label: "Primary Use", value: "MRSPTU Inspectors, External Examiners, Guest Lecturers" },
      { label: "Security", value: "24/7 Gated Perimeter & Attendant" },
      { label: "Maintenance", value: "Daily Sanitization & Linen Service" },
      { label: "Location", value: "Quiet Wing with Garden Views" },
    ],
    badge: "Executive On-Campus Suite",
    tourStopId: "guest-house",
  },
  {
    id: "admission-cell",
    name: "Central Admission Cell & Counseling Center",
    zone: "Civic Fabric & Living Campus",
    zoneCode: "04",
    tagline: "Air-conditioned concierge desk for admission counseling, verification & scholarships",
    description:
      "Positioned directly at the main entrance foyer, the Admission Cell is the primary welcoming station for prospective students and their parents. Staffed by experienced academic counselors, it provides course guidance, eligibility verification, Post-Matric Scholarship filing support, and instant document check-in.",
    image: "/assets/infrastructure/admission-cell.jpg",
    capacity: "50 Visitors Simultaneously",
    areaSqFt: "1,100 sq.ft",
    equipment: [
      "One-on-One Career Counseling Desks",
      "Document Verification & Digital Scanner Terminals",
      "Dr. Ambedkar Portal / PMSS Scholarship Assistance Counter",
      "Air-Conditioned Parent Waiting Lounge",
      "Digital Course Catalog & Information Display Kiosk",
    ],
    specifications: [
      { label: "Hours", value: "Open Monday–Saturday 9:00 AM – 5:00 PM" },
      { label: "Services", value: "Career Counseling, Form Filing, Scholarship Guidance" },
      { label: "Helpline", value: "92162-44163 / 97791-46689" },
      { label: "Comfort", value: "Air Conditioned with Dedicated Refreshments" },
    ],
    badge: "Direct Admission Concierge",
    tourStopId: "admission-cell",
  },
  {
    id: "staff-rooms",
    name: "Faculty Departmental Staff Rooms & Lounges",
    zone: "Civic Fabric & Living Campus",
    zoneCode: "04",
    tagline: "Dedicated workspaces for professors, research planning & student mentorship",
    description:
      "Separate departmental faculty lounges equipped with personal computer terminals, departmental library racks, and student consultation tables where professors conduct individual doubt-clearing sessions and academic advising beyond class hours.",
    image: "/assets/infrastructure/staffroom.jpg",
    capacity: "60+ Faculty Members",
    areaSqFt: "Multiple Departmental Suites",
    equipment: [
      "Individual Faculty Workstations with Internet Terminals",
      "Departmental Textbook & Curriculum Reference Shelves",
      "Student Mentorship & Doubt-Clearing Consultation Tables",
      "Lockable Departmental Document Safes",
      "Climate Controlled with Water Cooler Stations",
    ],
    specifications: [
      { label: "Wings", value: "Arts, Computer Science, Commerce, Nursing, ITI" },
      { label: "Mentorship", value: "Open-Door Student Academic Guidance" },
      { label: "Amenities", value: "High-Speed Wi-Fi & Printing Facilities" },
      { label: "Environment", value: "Collaborative Interdisciplinary Atmosphere" },
    ],
    badge: "Faculty Academic Lounges",
    tourStopId: "staffroom",
  },
];
