"use client";

import Link from "next/link";

interface AffiliationItem {
  acronym: string;
  name: string;
  type: string;
  subtext: string;
}

const AFFILIATIONS: AffiliationItem[] = [
  {
    acronym: "MRSPTU",
    name: "Maharaja Ranjit Singh Punjab Technical University",
    type: "State Technical University",
    subtext: "Bathinda, Punjab • Degree Programs",
  },
  {
    acronym: "PSOU",
    name: "Jagat Guru Nanak Dev Punjab State Open University",
    type: "State Open University",
    subtext: "Patiala, Punjab • Flexible Diplomas",
  },
  {
    acronym: "NIOS",
    name: "National Institute of Open Schooling",
    type: "Govt. of India (Min. of Education)",
    subtext: "Vocational & Open Learning",
  },
  {
    acronym: "AICTE",
    name: "All India Council for Technical Education",
    type: "National Apex Regulatory Council",
    subtext: "Technical Norms & Standards",
  },
  {
    acronym: "UGC",
    name: "University Grants Commission",
    type: "Statutory Apex Authority",
    subtext: "Higher Education Framework",
  },
];

export default function AffiliationsTrustStrip() {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 bg-[#0d0d12] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-400 font-semibold">
                Statutory Approvals & Accreditations
              </span>
            </div>
            <h2 className="text-editorial text-2xl md:text-4xl font-bold tracking-tight text-white">
              Recognised & Affiliated with Apex Institutions
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/50 max-w-md font-light leading-relaxed">
            All degrees, diplomas, and industrial trades conform to national regulatory curricula ensuring universal employment and postgraduate eligibility.
          </p>
        </div>

        {/* Affiliation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {AFFILIATIONS.map((item) => (
            <div
              key={item.acronym}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl md:text-2xl font-bold font-mono tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                    {item.acronym}
                  </span>
                  <span className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                    Approved
                  </span>
                </div>
                <h3 className="text-xs font-semibold text-white/90 leading-snug mb-1 line-clamp-2">
                  {item.name}
                </h3>
              </div>
              <div className="pt-3 mt-3 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block font-medium">
                  {item.type}
                </span>
                <span className="text-[10px] text-white/40 block mt-0.5">
                  {item.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Footer Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>100% Recognized Higher Degrees</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Post-Matric SC Scholarship (PMSS) Portal Enlisted</span>
            </span>
          </div>
          <Link
            href="/about"
            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
          >
            <span>Read full heritage & organogram</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
