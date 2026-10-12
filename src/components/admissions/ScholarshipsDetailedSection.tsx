"use client";

import { SCHOLARSHIP_SCHEMES } from "@/data/admissions";

export default function ScholarshipsDetailedSection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#07070a] text-white border-b border-white/10 overflow-hidden">
      {/* Cinematic ambient illumination */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* Section Manifesto Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-semibold">
              State &amp; Central Financial Governance
            </span>
          </div>

          <h2 className="text-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Education Without Financial Friction.
          </h2>

          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl">
            At Universal College Patran, higher education is treated as an inalienable public good. We eliminate economic barriers through aggressive on-campus facilitation of state tuition waivers and minority endowments.
          </p>
        </div>

        {/* ================= MONUMENTAL STATISTIC CALLOUTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/15">
          <div className="space-y-3">
            <span className="text-editorial text-6xl sm:text-7xl lg:text-8xl font-bold text-emerald-400 block tracking-tight">
              100%
            </span>
            <h3 className="font-bold text-lg text-white">
              Tuition Fee Waiver (PMSS)
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Complete exemption from tuition fees for eligible Scheduled Caste (SC) scholars domiciled in Punjab under the state Post-Matric Scholarship Scheme. Zero out-of-pocket tuition expense at admission.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-editorial text-6xl sm:text-7xl lg:text-8xl font-bold text-white block tracking-tight">
              ₹12.3k
            </span>
            <h3 className="font-bold text-lg text-white">
              Minority Community Grant
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Annual direct financial grant for eligible Sikh, Muslim, Christian, Jain, Buddhist, and Parsi students disbursed through Direct Benefit Transfer (DBT).
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-editorial text-6xl sm:text-7xl lg:text-8xl font-bold text-neutral-400 block tracking-tight">
              ₹2.50L
            </span>
            <h3 className="font-bold text-lg text-white">
              Annual Income Ceiling
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Family income limit verified via Tehsildar-issued certificate to qualify for 100% PMSS fee concessions across all MRSPTU, PSOU, and ITI disciplines.
            </p>
          </div>
        </div>

        {/* ================= ON-CAMPUS FACILITATION STRIP ================= */}
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 font-semibold block">
              Dedicated Facilitation Desk • Room 04 Admin Block
            </span>
            <h3 className="text-editorial text-2xl sm:text-3xl font-bold text-white">
              Dr. Ambedkar Portal On-Campus Cell
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-2xl">
              Applying for state scholarships can often be cumbersome. Our designated SC/ST and Minority Facilitation Cell manages online portal registration, biometric fingerprint authentication, fee exemption documentation, and university liaisons directly on campus free of charge.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-white/60">
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Coordinator</span>
                <span className="text-white font-medium">Prof. Gurpreet Singh</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Direct Helpline</span>
                <a href="tel:9779146689" className="text-emerald-400 font-semibold hover:underline">
                  97791-46689
                </a>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase">State Portal</span>
                <a
                  href="https://scholarships.punjab.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-300 underline"
                >
                  scholarships.punjab.gov.in ↗
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center gap-3">
            <a
              href="https://scholarships.punjab.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono text-xs font-semibold text-center uppercase tracking-wider transition-all shadow-lg"
            >
              Access Dr. Ambedkar Portal ↗
            </a>
            <a
              href="tel:9888406100"
              className="py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold text-center uppercase tracking-wider transition-all border border-white/10"
            >
              DBT Seeding Help: 98884-06100
            </a>
          </div>
        </div>

        {/* ================= SCHOLARSHIPS DIRECTORY LEDGER ================= */}
        <div className="space-y-8">
          <div className="pb-4 border-b border-white/10 flex items-baseline justify-between">
            <h3 className="text-editorial text-2xl md:text-3xl font-bold text-white">
              Institutional &amp; Government Aid Matrix
            </h3>
            <span className="text-xs font-mono text-white/40 hidden sm:block">
              Academic Session 2026–2027
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SCHOLARSHIP_SCHEMES.map((scheme, idx) => (
              <div
                key={scheme.id}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-semibold tracking-wider uppercase text-[10px]">
                      {scheme.provider}
                    </span>
                    <span className="text-white/40">0{idx + 1}</span>
                  </div>

                  <h4 className="text-editorial text-xl font-bold text-white leading-snug">
                    {scheme.name}
                  </h4>

                  <div className="py-3 px-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 font-mono text-xs">
                    <span className="text-white/40 uppercase text-[10px] block">
                      Benefit Value
                    </span>
                    <p className="text-emerald-300 font-bold text-sm">
                      {scheme.amount}
                    </p>
                  </div>

                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {scheme.eligibility}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-white/50">
                  <div className="flex justify-between">
                    <span>Income Cap:</span>
                    <span className="text-white">{scheme.incomeLimit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coverage:</span>
                    <span className="text-white">{scheme.applicableCourses.split(",")[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
