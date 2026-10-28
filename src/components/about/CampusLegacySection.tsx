"use client";

import Link from "next/link";
import { SHOW_NIOS } from "@/data/courses";

const COMMITMENT_POINTS = [
  { verb: "Educate", target: "the Mind", icon: "psychology" },
  { verb: "Develop", target: "the Skills", icon: "handyman" },
  { verb: "Build", target: "the Character", icon: "shield" },
  { verb: "Serve", target: "the Community", icon: "volunteer_activism" },
  { verb: "Shape", target: "the Future", icon: "auto_awesome" },
];

const AFFILIATIONS = [
  {
    name: "Maharaja Ranjit Singh Punjab Technical University (MRSPTU)",
    city: "Bathinda, Punjab",
    type: "Technical & Professional Degrees",
    badge: "State Technical University",
  },
  {
    name: "Jagat Guru Nanak Dev Punjab State Open University (PSOU)",
    city: "Patiala, Punjab",
    type: "Open & Flexible Higher Education",
    badge: "State Open University",
  },
  ...(SHOW_NIOS
    ? [
        {
          name: "National Institute of Open Schooling (NIOS)",
          city: "New Delhi",
          type: "Skill & Alternative Pathways",
          badge: "Govt. of India",
        },
      ]
    : []),
  {
    name: "AICTE & UGC Frameworks",
    city: "New Delhi",
    type: "Higher Education Regulatory Alignment",
    badge: "Apex Statutory Bodies",
  },
];

export default function CampusLegacySection() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-[#f9f9f7] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* ================= SECTION A: COMMITMENT CREED ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold block mb-3">
            Institutional Promise
          </span>
          <h2 className="text-editorial text-4xl sm:text-5xl font-bold mb-6">
            Our Commitment is Simple
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 my-8">
            {COMMITMENT_POINTS.map((item) => (
              <div
                key={item.target}
                className="p-4 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-800 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  {item.verb}
                </span>
                <span className="text-sm font-semibold text-neutral-900 mt-0.5">
                  {item.target}
                </span>
              </div>
            ))}
          </div>
          <p className="text-editorial text-xl md:text-2xl italic text-neutral-700 font-medium">
            “From the classroom to the community, Universal College strives to make education a force for individual growth and social transformation.”
          </p>
        </div>

        {/* ================= SECTION B: AFFILIATIONS & REGULATORY RECOGNITION ================= */}
        <div className="pt-16 border-t border-black/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-500 font-semibold block mb-2">
                Recognised • Affiliated • Accredited
              </span>
              <h3 className="text-editorial text-3xl md:text-4xl font-bold">
                Academic Associations & Approvals
              </h3>
            </div>
            <Link
              href="/academics"
              className="text-xs font-mono text-emerald-800 hover:text-emerald-950 font-semibold flex items-center gap-1"
            >
              <span>Explore Programs</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AFFILIATIONS.map((aff) => (
              <div
                key={aff.name}
                className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                      {aff.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{aff.city}</span>
                  </div>
                  <h4 className="text-editorial text-xl font-bold text-neutral-900 mb-2">
                    {aff.name}
                  </h4>
                  <p className="text-xs text-neutral-600 font-light">
                    {aff.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION C: CAMPUS LEGACY & MILESTONES ================= */}
        <div className="pt-16 border-t border-black/10 space-y-16">
          {/* Top Legacy Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold block mb-2">
                Building a Legacy • Inspiring Generations
              </span>
              <h3 className="text-editorial text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Our Legacy Lives Through Our Students
              </h3>
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-light mb-6">
                The legacy of Universal College, Patran is reflected not only in its academic journey, but also in the relationships, experiences, values, and contributions that grow with every generation of students. We believe that a college’s true legacy is created one student, one achievement, and one contribution at a time.
              </p>
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <blockquote className="text-editorial text-lg md:text-xl font-bold italic text-emerald-950">
                  “Buildings create a campus, but people, values and memories create its legacy.”
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#09090c] text-white p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block mb-3 font-semibold">
                Our Enduring Creed
              </span>
              <div className="space-y-4 text-editorial text-2xl md:text-3xl font-bold leading-tight mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 text-lg">✦</span>
                  <span>Learned Here.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 text-lg">✦</span>
                  <span>Grew Here.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 text-lg">✦</span>
                  <span>Achieved Here.</span>
                </div>
              </div>
              <p className="text-xs font-mono text-white/50 tracking-wider uppercase">
                Universal College, Patran — Creating a legacy for today, building possibilities for tomorrow.
              </p>
            </div>
          </div>

          {/* Chronological Milestones & Growth Journey */}
          <div className="pt-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold block mb-2">
                  Institutional Journey
                </span>
                <h4 className="text-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
                  Growth, Milestones & Achievements
                </h4>
              </div>
              <p className="text-xs font-mono text-neutral-500">
                From a Vision in 2014 to a Thriving Multidisciplinary Hub
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Milestone 1 */}
              <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                      2014
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">Epoch 01</span>
                  </div>
                  <h5 className="text-editorial text-lg font-bold text-neutral-900 mb-2">
                    Foundation & Inception
                  </h5>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Founded under Dashmesh Charitable Trust by S. Baljeet Singh & S. Veerinder Singh Dhaliwal to provide value-based education to rural students in Patran.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-mono text-emerald-700 font-medium">
                  ✦ Dashmesh Charitable Trust
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                      Phase 2
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">Epoch 02</span>
                  </div>
                  <h5 className="text-editorial text-lg font-bold text-neutral-900 mb-2">
                    Technical Affiliation (MRSPTU)
                  </h5>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Affiliated with Maharaja Ranjit Singh Punjab Technical University, Bathinda, introducing regular degrees in Computer Science, IT, Commerce, and Fashion Tech.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-mono text-emerald-700 font-medium">
                  ✦ University Degrees Launched
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                      Phase 3
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">Epoch 03</span>
                  </div>
                  <h5 className="text-editorial text-lg font-bold text-neutral-900 mb-2">
                    {SHOW_NIOS ? "Skill & Open Learning (PSOU & NIOS)" : "Flexible Open Learning (PSOU)"}
                  </h5>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {SHOW_NIOS
                      ? "Expanded educational reach with Jagat Guru Nanak Dev PSOU and NIOS, delivering AI & Data Science diplomas, Nanny Care, and flexible vocational courses."
                      : "Expanded educational reach with Jagat Guru Nanak Dev PSOU, delivering AI & Data Science diplomas, Office Automation, and flexible open university degrees."}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-mono text-emerald-700 font-medium">
                  ✦ Inclusive Education Access
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="p-6 rounded-2xl bg-[#0d0d11] text-white border border-white/10 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                      Present
                    </span>
                    <span className="text-[11px] font-mono text-white/40">Epoch 04</span>
                  </div>
                  <h5 className="text-editorial text-lg font-bold text-white mb-2">
                    16 Facilities & Regional Recognition
                  </h5>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    A comprehensive campus featuring 4 computer labs, specialized medical & fashion labs, athletic stadium, NCC battalion, and 100% PMSS SC scholarship fee waiver.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-400 font-medium">
                  ✦ 15+ Programs • 4 Pathways
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
