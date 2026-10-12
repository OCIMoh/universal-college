"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/navigation/Header";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between bg-[#f9f9f7] text-[#1a1a1a] overflow-hidden select-none">
      {/* Floating Header Dock */}
      <Header />

      {/* Tactile Archival Paper Framing */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 border border-[#1a1a1a]/10 pointer-events-none" />

      {/* Corner Crosshairs */}
      <div className="absolute top-4 sm:top-8 md:top-12 left-4 sm:left-8 md:left-12 -translate-x-1/2 -translate-y-1/2 text-[#1a1a1a]/20 text-xs font-mono select-none pointer-events-none">
        +
      </div>
      <div className="absolute top-4 sm:top-8 md:top-12 right-4 sm:right-8 md:right-12 translate-x-1/2 -translate-y-1/2 text-[#1a1a1a]/20 text-xs font-mono select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-4 sm:left-8 md:left-12 -translate-x-1/2 translate-y-1/2 text-[#1a1a1a]/20 text-xs font-mono select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 right-4 sm:right-8 md:right-12 translate-x-1/2 translate-y-1/2 text-[#1a1a1a]/20 text-xs font-mono select-none pointer-events-none">
        +
      </div>

      {/* Top Folio Header */}
      <div className="relative z-10 w-full px-8 sm:px-16 pt-20 sm:pt-24 flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-[#1a1a1a]/40 uppercase">
        <span className="hidden sm:inline-block">Universal College Patran</span>
        <span className="mx-auto sm:mx-0">Folio : 404 / Unindexed</span>
        <span className="hidden sm:inline-block">Estd. 2009 • Punjab</span>
      </div>

      {/* Central Composition */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-12 max-w-2xl mx-auto">
        {/* Official University Crest */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-8 transition-transform duration-500 ease-out hover:scale-105 cursor-default">
          <Image
            src="/assets/brand/college-logo-transparent.png"
            alt="Universal College Patran Official Crest"
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            priority
          />
        </div>

        {/* Letterpress Numeral */}
        <div className="text-editorial text-6xl sm:text-8xl font-normal text-[#1a1a1a]/85 tracking-tight leading-none mb-4">
          404
        </div>

        {/* Stately Editorial Headline */}
        <h1 className="text-editorial text-2xl sm:text-3xl md:text-4xl font-normal text-[#1a1a1a] tracking-tight leading-snug mb-3">
          This document could not be located.
        </h1>

        {/* Dignified Subtitle */}
        <p className="text-sm sm:text-base text-[#1a1a1a]/60 font-light leading-relaxed max-w-md mx-auto mb-10">
          The requested archive, page, or departmental directory is unavailable or may have been relocated within the university portal.
        </p>

        {/* Minimal Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#121214] text-[#f9f9f7] text-[11px] font-mono uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#27272a] active:scale-95 shadow-sm"
          >
            <span>Return to Campus</span>
            <span className="material-symbols-outlined text-[15px] transition-transform duration-300 group-hover:translate-x-0.5">
              arrow_forward
            </span>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a]/80 hover:text-[#1a1a1a] hover:border-[#1a1a1a]/60 text-[11px] font-mono uppercase tracking-[0.2em] transition-all duration-300 bg-transparent"
          >
            Institutional Heritage
          </Link>
        </div>
      </div>

      {/* Bottom Imprint Bar */}
      <div className="relative z-10 w-full px-8 sm:px-16 pb-8 sm:pb-10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-[0.2em] text-[#1a1a1a]/40 uppercase gap-2 sm:gap-0">
        <span>Patiala Road, Patran, Punjab 147105</span>
        <span>Affiliated to MRSPTU &amp; PSOU</span>
      </div>
    </main>
  );
}
