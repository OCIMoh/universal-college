"use client";

import Link from "next/link";

interface RegulatoryBody {
  acronym: string;
  name: string;
  category: string;
  scope: string;
  authority: string;
  highlights: string[];
}

const STATUTORY_COUNCILS: RegulatoryBody[] = [
  {
    acronym: "PSOU",
    name: "Jagat Guru Nanak Dev Punjab State Open University",
    category: "State Open University Charter",
    scope: "Patiala, Punjab • Flexible Degree & Skill Diplomas",
    authority: "Established by Govt. of Punjab under Punjab Act No. 19 of 2019",
    highlights: ["State Open Charter", "Flexible Admissions", "Skill Diplomas"],
  },
  {
    acronym: "NIOS",
    name: "National Institute of Open Schooling",
    category: "National Apex Board",
    scope: "Min. of Education, Govt. of India • Secondary & Sr. Secondary",
    authority: "Autonomous Organisation under Ministry of Education, New Delhi",
    highlights: ["Govt. of India", "Bridge Courses", "Recognised Equivalence"],
  },
  {
    acronym: "AICTE",
    name: "All India Council for Technical Education",
    category: "Apex Statutory Council",
    scope: "National Technical Norms, Curricula & Laboratory Ratios",
    authority: "Statutory Body under Dept. of Higher Education, Govt. of India",
    highlights: ["Apex Technical Body", "Standard Infrastructure", "Curricular Compliance"],
  },
  {
    acronym: "UGC",
    name: "University Grants Commission",
    category: "Statutory Apex Authority",
    scope: "Higher Education Framework & Central Degree Equivalence",
    authority: "Statutory Body under UGC Act 1956, Ministry of Education, Govt. of India",
    highlights: ["Section 2(f) Framework", "National Degree Parity", "UGC Norms"],
  },
];

export default function AffiliationsTrustStrip() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-[#0c0d12] text-white border-b border-white/10 overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-400 font-semibold">
                Statutory Charter & Regulatory Pedigree
              </span>
            </div>
            <h2 className="text-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Chartered by Apex Universities & National Councils
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/60 max-w-md font-light leading-relaxed">
            Every program conducted at Universal College, Patran is governed by statutory charters ensuring universal degree equivalence, public-sector eligibility, and national academic accreditation.
          </p>
        </div>

        {/* Asymmetrical Institutional Ledger: MRSPTU Hero Anchor + 4 Statutory Councils Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Primary Anchor: MRSPTU Featured Charter Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-7 md:p-8 bg-gradient-to-br from-white/[0.07] via-emerald-950/25 to-white/[0.02] border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between relative overflow-hidden group">
            {/* Subtle corner badge */}
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500/20 border-b border-l border-emerald-500/30 rounded-bl-2xl text-[9px] font-mono uppercase tracking-widest text-emerald-300 font-semibold">
              Primary Degree Charter
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/25 text-emerald-300 font-mono text-xs font-bold tracking-wider">
                  CHARTER // 01
                </span>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                  State Technical University
                </span>
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-mono font-bold tracking-tighter text-white block mb-2 group-hover:text-emerald-300 transition-colors">
                  MRSPTU
                </span>
                <h3 className="text-lg md:text-xl font-serif font-bold text-white/95 leading-snug">
                  Maharaja Ranjit Singh Punjab Technical University
                </h3>
                <p className="text-xs font-mono text-emerald-400/90 mt-1">
                  Bathinda, Punjab • Established under Punjab Act No. 5 of 2015
                </p>
              </div>

              <p className="text-xs text-white/70 font-light leading-relaxed">
                Universal College operates as an official constituent affiliate delivering regular multidisciplinary degree programs. All semester curricula, examinations, and final degrees are conferred directly by MRSPTU.
              </p>

              {/* Conferred Degree Programs */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block font-semibold">
                  Conferred Degree Faculties:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["BCA", "B.Com (Hons.)", "BBA", "B.Sc (NM)", "B.Sc (Medical)", "B.A."].map((deg) => (
                    <span
                      key={deg}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/90 font-mono text-[11px] font-medium"
                    >
                      {deg}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Verification Footer Indicator */}
            <div className="pt-6 mt-6 border-t border-emerald-500/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] text-emerald-300 font-semibold uppercase tracking-wider">
                  Active Statutory Affiliation
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/40">
                Bathinda Campus Charter
              </span>
            </div>
          </div>

          {/* Secondary Matrix: 4 Regulatory Councils (7 cols - 2x2 grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STATUTORY_COUNCILS.map((item, idx) => (
              <div
                key={item.acronym}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/8 hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {item.acronym}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                      REG // 0{idx + 2}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-serif font-bold text-white/90 leading-snug line-clamp-2">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/90 block mt-1">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {item.scope}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 space-y-2">
                  <span className="text-[10px] text-white/40 block leading-tight font-sans">
                    {item.authority}
                  </span>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/60 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Pedigree Assurance Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>100% Recognized Higher Degrees</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Post-Matric SC Scholarship (PMSS) Portal Enlisted</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>National Academic Depository (NAD / DigiLocker) Compliant</span>
            </span>
          </div>

          <Link
            href="/about"
            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[11px]"
          >
            <span>Read full heritage & organogram</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
