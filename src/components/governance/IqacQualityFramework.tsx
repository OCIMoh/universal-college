"use client";

import { NAAC_CRITERIA } from "@/data/governanceData";
import { CheckCircle2, Award, Heart, Laptop } from "@/components/common/Icons";

export default function IqacQualityFramework() {
  return (
    <section id="iqac" className="relative w-full py-28 px-6 md:px-12 bg-[#0a0a0e] text-neutral-100 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b border-white/10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-amber-300/90 font-semibold">
                [04 / QUALITY ACCREDITATION ARCHIVE]
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                NEP 2020 Pedagogical Benchmark
              </span>
            </div>

            <h2 className="text-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.06]">
              IQAC &amp; NAAC Framework.
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
              The Internal Quality Assurance Cell (IQAC) institutionalizes outcome-based education (OBE), pedagogical innovation, faculty development, and community impact benchmarks across all degree wings.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-white/60">
            <div className="space-y-1">
              <span className="text-white/40 uppercase text-[10px] tracking-wider block">Assessment Matrix</span>
              <span className="text-white font-bold text-sm block">07 NAAC Criteria</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="space-y-1">
              <span className="text-white/40 uppercase text-[10px] tracking-wider block">Faculty Mentorship</span>
              <span className="text-amber-300 font-bold text-sm block">1:20 Ratio</span>
            </div>
          </div>
        </div>

        {/* ================= IQAC EXECUTIVE DIRECTORATE TABLE ================= */}
        <div className="rounded-2xl border border-white/15 bg-[#0d0d12] p-8 md:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                IQAC Executive Directorate Composition
              </h3>
            </div>
            <span className="text-xs font-mono text-white/40">
              Constituted per UGC Quality Mandate Guidelines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1">
              <span className="text-white/40 text-[10px] uppercase block">Executive Chairperson</span>
              <span className="text-white font-bold block text-sm">Dr. Amrish Dhawan</span>
              <span className="text-amber-300/80 text-[11px]">Director / Head of Institution</span>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1">
              <span className="text-white/40 text-[10px] uppercase block">Coordinator / Director IQAC</span>
              <span className="text-white font-bold block text-sm">Er. Yadwinder Singh</span>
              <span className="text-amber-300/80 text-[11px]">Principal / Member Secretary</span>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1">
              <span className="text-white/40 text-[10px] uppercase block">Senior Administrative Officer</span>
              <span className="text-white font-bold block text-sm">Mr. Pawan Kumar</span>
              <span className="text-white/50 text-[11px]">Accounts &amp; Statutory Records</span>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1">
              <span className="text-white/40 text-[10px] uppercase block">Senior Faculty Representative</span>
              <span className="text-white font-bold block text-sm">Ms. Karmjit Kaur</span>
              <span className="text-white/50 text-[11px]">HOD Computer Science &amp; IT</span>
            </div>
          </div>
        </div>

        {/* ================= 7 NAAC CRITERIA ARCHITECTURAL LEDGER ================= */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight flex items-center gap-3">
              <span className="text-amber-400 font-mono text-sm font-normal">/ 04.1</span>
              <span>The Seven Institutional Quality Criteria</span>
            </h3>
            <span className="text-xs font-mono text-white/40 tracking-wider">
              NAAC / UGC Quality Benchmarks
            </span>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {NAAC_CRITERIA.map((criterion) => (
              <div
                key={criterion.number}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/[0.02] transition-colors duration-200"
              >
                <div className="md:col-span-1 text-2xl font-mono font-bold text-white/20">
                  {criterion.number}
                </div>

                <div className="md:col-span-4 space-y-1">
                  <h4 className="font-serif font-bold text-lg text-white">
                    {criterion.title}
                  </h4>
                  <p className="text-xs font-mono text-amber-300/80">
                    {criterion.tagline}
                  </p>
                </div>

                <div className="md:col-span-4 text-xs text-white/70 leading-relaxed font-light">
                  {criterion.institutionalPractice}
                </div>

                <div className="md:col-span-3 space-y-1.5 text-xs font-mono text-white/60">
                  {criterion.keyMetrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-[11px] leading-tight truncate">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INSTITUTIONAL BEST PRACTICES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="p-8 rounded-2xl border border-white/15 bg-[#0d0d12] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 font-semibold">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>Hallmark Best Practice 01</span>
            </div>
            <h4 className="font-serif font-bold text-2xl text-white">
              Sewa in Action: Rural Health &amp; Civic Upliftment
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Under the Dashmesh Charitable Trust charter, Universal College Patran organizes annual voluntary blood donation camps, free rural health checkups, Swachh Bharat cleanliness drives, and environmental plantation campaigns across surrounding villages.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/15 bg-[#0d0d12] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 font-semibold">
              <Laptop className="w-4 h-4 text-amber-400" />
              <span>Hallmark Best Practice 02</span>
            </div>
            <h4 className="font-serif font-bold text-2xl text-white">
              Inclusive Tech: 100% Tuition Waiver for Rural Scholars
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Providing state-of-the-art computer labs, nursing education, and technical vocational trades to underprivileged rural youth through active on-campus facilitation of the Punjab Post-Matric Scholarship Scheme (PMSS) on the Dr. Ambedkar Portal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
