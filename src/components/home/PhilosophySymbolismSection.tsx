"use client";

import Image from "next/image";

const PROGRESSION_STEPS = [
  { step: "01", label: "Knowledge", icon: "menu_book", desc: "Rigorous academic theory & curriculum fundamentals" },
  { step: "02", label: "Skills", icon: "handyman", desc: "Hands-on laboratories, technical trades & workshops" },
  { step: "03", label: "Confidence", icon: "psychology", desc: "Seminars, stage presence & collaborative leadership" },
  { step: "04", label: "Values", icon: "balance", desc: "Integrity, humility, empathy & social ethics" },
  { step: "05", label: "Responsibility", icon: "diversity_3", desc: "Community sewa, NSS drives & civic stewardship" },
  { step: "06", label: "Career Readiness", icon: "rocket_launch", desc: "Industry placements, entrepreneurship & professional poise" },
];

const CAMPUS_ACTIVITIES = [
  "Academic & Research Activities",
  "Inter-College Competitions",
  "Cultural Programmes & Festivals",
  "Athletic & Sports Tournaments",
  "University Youth Festivals",
  "Social Service & NSS Camps",
  "Placement & Career Workshops",
  "Creative & Fine Arts Exhibitions",
  "Skill-Development Certifications",
];

export default function PhilosophySymbolismSection() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-white text-[#1a1a1a] border-b border-black/10 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* ================= SECTION A: EDUCATIONAL PHILOSOPHY ================= */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
              Our Educational Philosophy
            </span>
          </div>

          <h2 className="text-editorial text-4xl md:text-5xl font-bold mb-4">
            Education Beyond the Classroom
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            At Universal College, we believe that true education is an inseparable combination of academic knowledge, practical skills, human values, and real-life experience. A student should graduate not merely with a qualification, but with a transformation.
          </p>

          {/* Progression Chain: Knowledge -> Skills -> Confidence -> Values -> Responsibility -> Career Readiness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
            {PROGRESSION_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="relative p-5 rounded-2xl bg-[#f9f9f7] border border-black/10 hover:border-emerald-600/40 hover:bg-emerald-50/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-[18px]">
                      {item.icon}
                    </span>
                  </div>
                  {idx < PROGRESSION_STEPS.length - 1 && (
                    <span className="hidden lg:inline text-neutral-300 group-hover:text-emerald-500 transition-colors text-xs font-bold font-mono">
                      →
                    </span>
                  )}
                </div>

                <div className="text-[10px] font-mono font-bold text-neutral-400 mb-1">
                  PHASE {item.step}
                </div>
                <h4 className="text-editorial text-xl font-bold text-neutral-900 mb-2">
                  {item.label}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION B: CAMPUS ACTIVITIES & LOGO SYMBOLISM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-12 border-t border-black/10">
          {/* Left: 9 Campus Activities Checklist */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-500 font-semibold block mb-2">
                Holistic Engagement
              </span>
              <h3 className="text-editorial text-3xl md:text-4xl font-bold mb-4">
                Designed to Complement Academic Learning
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-8">
                Every learner is encouraged to step outside the lecture hall and participate actively across multi-disciplinary campus initiatives:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CAMPUS_ACTIVITIES.map((act) => (
                  <div
                    key={act}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#f9f9f7] border border-black/5 hover:border-emerald-500/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-emerald-600 text-[18px] flex-shrink-0">
                      check_circle
                    </span>
                    <span className="text-xs md:text-sm font-medium text-neutral-800">
                      {act}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The College Crest & Logo Symbolism Card */}
          <div className="lg:col-span-5 bg-[#0d0d11] text-white p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-14 h-14 bg-white/10 p-2 rounded-2xl border border-white/15 flex-shrink-0">
                  <Image
                    src="/assets/college-logo-transparent.png"
                    alt="Universal College Official Crest"
                    fill
                    sizes="56px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block font-semibold">
                    Official Insignia
                  </span>
                  <h4 className="text-editorial text-2xl font-bold text-white">
                    Our Emblem
                  </h4>
                </div>
              </div>

              <p className="text-sm text-white/80 leading-relaxed mb-6 font-light">
                The Universal College emblem conveys an enduring message of knowledge, global outlook, and human potential:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                      public
                    </span>
                  </div>
                  <div>
                    <strong className="text-xs text-white uppercase tracking-wider block mb-0.5">The Globe</strong>
                    <span className="text-xs text-white/70 leading-normal">
                      Suggests a global perspective, modern worldview, and unbounded intellectual curiosity.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-amber-400 text-[18px]">
                      local_fire_department
                    </span>
                  </div>
                  <div>
                    <strong className="text-xs text-white uppercase tracking-wider block mb-0.5">The Torches</strong>
                    <span className="text-xs text-white/70 leading-normal">
                      Represent the timeless light of learning, guidance, ethical wisdom, and enlightenment.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15">
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 block mb-1">
                Institutional Motto
              </span>
              <p className="text-editorial text-lg md:text-xl font-bold text-white italic">
                “From Patran to the World — Inspiring Minds, Building Futures.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
