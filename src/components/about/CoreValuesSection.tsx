"use client";

const CORE_VALUES = [
  {
    num: "01",
    title: "Academic Excellence",
    icon: "school",
    desc: "We strive for excellence in teaching and learning by encouraging curiosity, critical thinking, academic discipline and a continuous pursuit of knowledge.",
  },
  {
    num: "02",
    title: "Integrity & Ethics",
    icon: "verified_user",
    desc: "We promote honesty, fairness, transparency and ethical conduct across academic, professional, and personal spheres of life.",
  },
  {
    num: "03",
    title: "Care & Student Well-being",
    icon: "favorite",
    desc: "The welfare, safety, and holistic development of our students are paramount. We foster a supportive, empathetic campus environment.",
  },
  {
    num: "04",
    title: "Diversity & Inclusivity",
    icon: "diversity_1",
    desc: "We celebrate differences and uphold an inclusive community where individuals from diverse socioeconomic backgrounds are valued with dignity.",
  },
  {
    num: "05",
    title: "Innovation & Creativity",
    icon: "lightbulb",
    desc: "We encourage students and faculty to think laterally, embrace technological advancements, and pioneer constructive solutions.",
  },
  {
    num: "06",
    title: "Collaboration",
    icon: "handshake",
    desc: "We believe in active teamwork and productive partnerships among students, faculty, parents, universities, and industry partners.",
  },
  {
    num: "07",
    title: "Leadership & Empowerment",
    icon: "military_tech",
    desc: "We nurture confidence, decision-making, and moral courage, empowering learners to lead and make lasting positive social impact.",
  },
  {
    num: "08",
    title: "Skill & Employability",
    icon: "engineering",
    desc: "We connect academic theory directly with vocational competence, technical training, and real-world employment qualifications.",
  },
  {
    num: "09",
    title: "Holistic Development",
    icon: "spa",
    desc: "We promote balanced human growth through academics, athletic competition, cultural expression, and community service.",
  },
  {
    num: "10",
    title: "Discipline & Accountability",
    icon: "balance",
    desc: "We cultivate personal self-discipline, moral rectitude, and institutional accountability, upholding the highest standards of academic conduct and governance.",
  },
  {
    num: "11",
    title: "Social Responsibility",
    icon: "volunteer_activism",
    desc: "We inspire students to understand their duty towards community and nation through voluntary service, cleanliness drives, and blood donation camps.",
  },
  {
    num: "12",
    title: "Lifelong Learning",
    icon: "all_inclusive",
    desc: "We instill an enduring passion for growth and discovery, recognizing that meaningful education extends far beyond graduation day.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-white text-[#1a1a1a] border-b border-black/10">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* ================= VISION & MISSION ================= */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
              Foundational Purpose
            </span>
          </div>
          <h2 className="text-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-12">
            Vision & Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Vision Card */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#f9f9f7] border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">visibility</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block font-semibold">
                      Our Vision
                    </span>
                    <h3 className="text-editorial text-2xl font-bold text-neutral-900">
                      Center of Excellence
                    </h3>
                  </div>
                </div>

                <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-light mb-6">
                  To emerge as a centre of excellence in education, empowering young minds with knowledge, skills, values, and confidence to shape a brighter future. We aspire to bridge education with opportunity, nurturing responsible, innovative, and capable individuals who contribute meaningfully to society.
                </p>
              </div>

              <div className="pt-6 border-t border-black/10">
                <blockquote className="text-editorial text-lg font-bold text-emerald-900 italic">
                  “Educating Minds. Empowering Futures. Building a Better Tomorrow.”
                </blockquote>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0d0d11] text-white border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">explore</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block font-semibold">
                      Our Mission
                    </span>
                    <h3 className="text-editorial text-2xl font-bold text-white">
                      Purpose-Driven Education
                    </h3>
                  </div>
                </div>

                <p className="text-white/80 text-base md:text-lg leading-relaxed font-light mb-6">
                  To provide quality, accessible, and future-focused higher education that empowers every student to learn, grow, and achieve their highest career and personal aspirations.
                </p>

                <ul className="space-y-2.5 text-xs md:text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-base flex-shrink-0">check_circle</span>
                    <span>Nurturing knowledge, creativity, and critical thinking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-base flex-shrink-0">check_circle</span>
                    <span>Connecting academic curricula with hands-on professional competence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-base flex-shrink-0">check_circle</span>
                    <span>Building character, discipline, and strong ethical values.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <blockquote className="text-editorial text-base font-bold text-emerald-300 italic">
                  “Educate with purpose, empower with knowledge, prepare for a meaningful future.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 12 CORE VALUES ================= */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold block mb-2">
                Ethical Compass
              </span>
              <h2 className="text-editorial text-3xl sm:text-4xl md:text-5xl font-bold">
                12 Core Institutional Values
              </h2>
            </div>
            <p className="text-sm font-mono text-neutral-500">
              Guided by Values • Driven by Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CORE_VALUES.map((val) => (
              <div
                key={val.num}
                className="group p-5 rounded-2xl bg-[#f9f9f7] border border-black/10 hover:border-emerald-600/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-xl select-none">
                        {val.icon}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {val.num}
                    </span>
                  </div>

                  <h3 className="text-editorial text-lg font-bold text-neutral-900 mb-2 group-hover:text-emerald-900 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Belief Callout Banner */}
          <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-emerald-900 via-neutral-900 to-black text-white text-center shadow-lg">
            <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block mb-2">
              Our Guiding Tenet
            </span>
            <p className="text-editorial text-2xl md:text-3xl font-bold italic tracking-wide">
              “Learn with purpose. Grow with values. Achieve with responsibility.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
