"use client";

import Image from "next/image";

export default function AboutOverviewSection() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-white text-[#1a1a1a] border-b border-black/10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Kicker */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
              The Founding Genesis
            </span>
          </div>
          <h2 className="text-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            A Purpose Born from Community & Driven by Possibility.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
            Universal College, Patran was founded in 2014 under the aegis of <strong className="font-semibold text-neutral-900">Dashmesh Charitable Trust</strong>, spearheaded by visionary educationists <strong className="font-semibold text-neutral-900">S. Baljeet Singh</strong> and <strong className="font-semibold text-neutral-900">S. Veerinder Singh Dhaliwal</strong>.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Narrative: History & Geographic Role */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed font-light text-base md:text-lg">
            <p>
              Patran and its surrounding regions in southern Punjab represent a vibrant, hardworking population. For decades, aspiring students from semi-urban and agricultural families had to travel far or forgo quality technical education due to economic and logistical constraints.
            </p>
            <p>
              Recognizing this critical void, Dashmesh Charitable Trust established Universal College with a foundational pledge: <em className="font-serif italic text-neutral-900">to democratize higher education, bridging academic excellence, modern vocational skills, and moral character right here in Patran.</em>
            </p>
            <p>
              From its modest commencement in 2014, the institution has blossomed into a comprehensive multi-stream campus encompassing university degrees, state open learning pathways, vocational skill certificates, and industrial ITI trades.
            </p>

            {/* Philosophy Highlight Banner */}
            <div className="p-6 rounded-2xl bg-[#f9f9f7] border border-black/10 mt-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-emerald-700 text-xl">psychology</span>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
                  Our Educational Philosophy
                </span>
              </div>
              <p className="text-editorial text-xl font-bold text-neutral-900 italic">
                “Education is not a transaction of degrees; it is the transformation of character, capability, and community.”
              </p>
            </div>
          </div>

          {/* Right Cards: Foundational Tenets */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="p-6 md:p-8 rounded-3xl bg-[#0d0d11] text-white border border-white/10 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block mb-2 font-semibold">
                  Governing Foundation
                </span>
                <h3 className="text-editorial text-2xl font-bold text-white mb-4">
                  Dashmesh Charitable Trust
                </h3>
                <p className="text-xs md:text-sm text-white/75 leading-relaxed font-light mb-6">
                  Rooted in philanthropic service and egalitarian values, the Trust operates on a student-first philosophy, reinvesting all resources into faculty mentorship, modern laboratories, and full tuition fee support for underprivileged and SC scholars.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="text-xl md:text-2xl font-bold font-mono text-emerald-400 block">2014</span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white/50">Founded</span>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold font-mono text-emerald-400 block">15+</span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white/50">Programs</span>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold font-mono text-emerald-400 block">100%</span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white/50">SC Aid (PMSS)</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/80">
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-900 block mb-1 font-bold">
                Role in Community & Society
              </span>
              <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
                Active social service through NCC cadet drills, regular blood donation camps, environmental tree-planting drives, and community health camps that touch hundreds of rural households across the Patiala district annually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
