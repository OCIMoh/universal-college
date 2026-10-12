"use client";

import Link from "next/link";

export default function ScholarshipNoticeBanner() {
  return (
    <section className="w-full bg-[#07070a] text-white border-y border-white/10 relative overflow-hidden py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-400 font-semibold">
              Statutory Tuition Exemption • Session 2026–2027
            </span>
          </div>
          <h3 className="text-editorial text-xl sm:text-2xl font-bold text-white tracking-tight">
            100% Tuition Fee Waiver under Government Post-Matric Scholarship (PMSS)
          </h3>
          <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
            Eligible Scheduled Caste (SC) scholars enrolled in MRSPTU degrees, PSOU diplomas, and ITI trades receive complete tuition exemptions. Zero out-of-pocket tuition is charged at admission.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            href="/admissions"
            className="px-5 py-2.5 rounded-full bg-white text-neutral-950 hover:bg-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
          >
            Admissions &amp; Grants Registry →
          </Link>
          <a
            href="tel:9779146689"
            className="text-xs font-mono text-white/70 hover:text-white underline underline-offset-4 hidden sm:inline-block whitespace-nowrap"
          >
            Cell: 97791-46689
          </a>
        </div>
      </div>
    </section>
  );
}
