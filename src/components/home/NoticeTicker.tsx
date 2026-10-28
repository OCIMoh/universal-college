"use client";

import Link from "next/link";
import { SHOW_ITI, SHOW_NIOS } from "@/data/courses";

export default function NoticeTicker() {
  return (
    <div className="relative w-full bg-[#0a0a0d] border-b border-white/8 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between gap-6">
        {/* Left: single live status pill */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-400 font-semibold hidden sm:inline">
            Admissions Open
          </span>
          <span className="text-white/20 hidden sm:inline">·</span>
          <span className="text-[11px] text-white/50 font-light hidden md:inline">
            Session 2026–27 · MRSPTU · PSOU{SHOW_NIOS ? " · NIOS" : ""}{SHOW_ITI ? " · ITI" : ""}
          </span>
        </div>

        {/* Right: single key action */}
        <div className="flex items-center gap-5 shrink-0">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 hidden lg:inline">
            100% SC Scholarship Available
          </span>
          <Link
            href="/admissions"
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
          >
            Apply Now
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-y-px">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
