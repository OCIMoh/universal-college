"use client";

import Link from "next/link";
import { Phone } from "@/components/common/Icons";

export default function AdmissionCtaBanner() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0d] to-[#121216] text-white border-t border-white/10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
        <div>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] md:text-xs tracking-widest uppercase font-semibold inline-block mb-4">
            ADMISSIONS 2026-27 NOW OPEN
          </span>
          <h2 className="text-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Take the First Step Toward Your Future.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto font-light leading-relaxed">
            Choose from MRSPTU degrees, open university diplomas, NIOS certifications, or technical ITI trades. 100% Post-Matric SC scholarship available for eligible scholars.
          </p>
        </div>

        {/* Action Buttons Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/admissions"
            className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_10px_25px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Apply Online / Check Eligibility →
          </Link>

          <a
            href="tel:+919779146689"
            className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Call Desk: 97791-46689</span>
          </a>

          <Link
            href="/academics"
            className="px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-mono text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            View Academic Programs
          </Link>
        </div>

        {/* Quick Highlights Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✦</span>
            <span>Zero Tuition Fee under PMSS (SC Scheme)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✦</span>
            <span>Extensive Sub-Divisional Bus Network</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✦</span>
            <span>Active Career Guidance &amp; Placement Cell</span>
          </div>
        </div>
      </div>
    </section>
  );
}
