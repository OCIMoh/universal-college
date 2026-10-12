export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  designation: string;
  quote: string;
  shortBio: string;
  fullMessage: string[];
  image?: string;
}

export const LEADERSHIP_PROFILES: LeaderProfile[] = [
  {
    id: "chairman",
    name: "S. Baljeet Singh",
    role: "Chairman",
    designation: "Chairman, Universal College, Patran",
    image: "/assets/leadership/baljeet-singh.jpg",
    quote: "A college is not only a place where careers are built; it is a place where the future of society is shaped.",
    shortBio: "Founder and Apex Trustee guiding institutional vision, value-based education, and rural empowerment.",
    fullMessage: [
      "Universal College, Patran, stands with a vision of creating an institution where education, values and social responsibility move together. Our purpose is to provide students with quality education and opportunities that enable them to become capable, confident and responsible members of society.",
      "We believe that the progress of an institution is measured not only by its academic achievements, but also by the positive impact it creates in the lives of its students, families and the wider community.",
      "Our commitment extends beyond the campus. We seek to encourage education, skill development, social awareness, cultural values and community participation so that our students can contribute meaningfully to the society around them.",
      "To our students, I say: carry your education with humility, your knowledge with responsibility and your ambitions with purpose.",
      "Together, let us build an institution that creates successful individuals, responsible citizens and a stronger society.",
    ],
  },
  {
    id: "vice-chairman",
    name: "S. Veerinder Singh Dhaliwal",
    role: "Vice-Chairman",
    designation: "Vice-Chairman, Universal College, Patran",
    quote: "When young minds are empowered with knowledge and values, they become the strongest force for positive change.",
    shortBio: "Leading strategic academic planning, multi-stream expansions, and community-integrated learning.",
    fullMessage: [
      "Universal College is committed to creating an environment where students can learn, participate, discover their abilities and prepare themselves for the future.",
      "We recognise that students are not only learners within a classroom; they are future professionals, entrepreneurs, leaders, parents and citizens. Therefore, their education must prepare them to contribute to every sphere of life.",
      "Our institution encourages students to participate in academic, cultural, sports, social-service and community-oriented activities. Such experiences develop confidence, leadership, teamwork and a sense of responsibility towards others.",
      "We also value our relationship with parents, local communities and society, because meaningful education becomes stronger when an institution and its community grow together.",
      "Our aspiration is to make Universal College a place where opportunity reaches every learner and learning creates opportunities for others.",
    ],
  },
  {
    id: "director",
    name: "Dr. Amrish Dhawan",
    role: "Director",
    designation: "Director, Universal College, Patran",
    image: "/assets/leadership/amrish-dhawan.png",
    quote: "Education finds its true purpose when knowledge is transformed into skills, skills into opportunities, and opportunities into social progress.",
    shortBio: "Spearheading academic excellence, research initiatives, industrial linkages, and technological modernization.",
    fullMessage: [
      "The role of a modern college extends far beyond delivering academic curricula. It is about preparing individuals who can understand the world, respond to its challenges and contribute to its progress.",
      "At Universal College, we focus on connecting academic learning with practical skills, employability, innovation, technology and real-life experiences. We want our students to be prepared not only to seek opportunities, but also to create them.",
      "Our responsibility also extends towards the community in which we operate. Through social initiatives, awareness programmes, cultural engagement, skill development, environmental consciousness and community participation, we aim to encourage students to become active contributors to society.",
      "We believe that an institution grows when its students succeed, its faculty inspires, its community participates and society benefits.",
      "Universal College therefore strives to create an educational ecosystem where learning has purpose, talent has opportunity and success has social value.",
    ],
  },
  {
    id: "principal",
    name: "S. Yadwinder Singh",
    role: "Principal",
    designation: "Principal, Universal College, Patran",
    image: "/assets/leadership/yadwinder-singh.png",
    quote: "Our greatest achievement is not simply seeing students graduate; it is seeing them leave as confident, capable and responsible human beings.",
    shortBio: "Overseeing day-to-day academic administration, faculty mentorship, discipline, and student welfare.",
    fullMessage: [
      "At Universal College, we believe that every student brings a different dream, ability, background and potential. Our role is to provide an environment where each learner receives guidance, encouragement and opportunities to grow.",
      "Education at our institution encompasses much more than classroom teaching. We encourage students to develop knowledge, discipline, communication, creativity, leadership, teamwork and compassion through academic and co-curricular experiences.",
      "We also believe that a college has a responsibility towards the families and communities it serves. By nurturing socially aware and responsible students, we contribute to the development of stronger families, communities and society.",
      "Our doors are therefore open not only to learning, but to participation, collaboration and positive change.",
    ],
  },
  {
    id: "vice-principal",
    name: "Lt. Suman",
    role: "Vice-Principal",
    designation: "Vice-Principal, Universal College, Patran",
    quote: "Discipline gives us direction, knowledge gives us strength, and determination turns dreams into achievements.",
    shortBio: "Guiding cadet leadership, NCC activities, sports excellence, and character-building initiatives.",
    fullMessage: [
      "Education is not merely about acquiring knowledge; it is about nurturing character, building confidence, and empowering young minds to become responsible citizens.",
      "At Universal College, we strive to create an environment where every student is encouraged to learn, grow, explore their potential, and contribute meaningfully to society.",
      "With discipline, dedication, and determination, we believe every student can transform their aspirations into achievements.",
    ],
  },
];
