"use client";

import { useState } from "react";
import Link from "next/link";

interface NoticeItem {
  id: string;
  badge: string;
  badgeColor: string;
  text: string;
  href: string;
}

const NOTICES: NoticeItem[] = [
  {
    id: "adm-2026",
    badge: "ADMISSIONS 2026-27",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    text: "Admissions Open for Session 2026–27 across MRSPTU Degrees, PSOU Open Learning, NIOS & ITI Trades.",
    href: "/admissions",
  },
  {
    id: "pmss-scholarship",
    badge: "100% SCHOLARSHIP",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    text: "Post-Matric Scholarship Scheme (PMSS) available: 100% Tuition Fee Waiver for eligible SC/ST students.",
    href: "/admissions",
  },
  {
    id: "mrsptu-affil",
    badge: "AFFILIATION",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    text: "Approved by AICTE/UGC and affiliated with Maharaja Ranjit Singh Punjab Technical University (MRSPTU, Bathinda).",
    href: "/about",
  },
  {
    id: "helpline",
    badge: "HELPLINE",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    text: "Admission Helpdesk Active: Call +91-97791-46689 or +91-81465-26002 (Mon–Sat 9:00 AM – 4:30 PM).",
    href: "/contact",
  },
];

export default function NoticeTicker() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative w-full bg-[#0a0a0d] border-y border-white/10 text-white overflow-hidden select-none z-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center px-4 py-2.5">
        {/* Urgent Live Pill Indicator */}
        <div className="flex items-center gap-2 pr-4 border-r border-white/15 shrink-0 z-10 bg-[#0a0a0d]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-[10px] md:text-[11px] font-mono tracking-widest uppercase font-bold text-emerald-400 hidden sm:inline">
            NOTICES & UPDATES
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-emerald-400 sm:hidden">
            LIVE
          </span>
        </div>

        {/* Marquee Content Rail */}
        <div className="flex-1 overflow-hidden relative mx-2">
          <div
            className={`flex items-center gap-8 whitespace-nowrap will-change-transform ${
              isPaused ? "" : "animate-[marquee_38s_linear_infinite]"
            }`}
          >
            {/* Duplicated list to create infinite loop */}
            {[...NOTICES, ...NOTICES].map((notice, idx) => (
              <Link
                key={`${notice.id}-${idx}`}
                href={notice.href}
                className="group inline-flex items-center gap-2.5 hover:text-emerald-300 transition-colors cursor-pointer text-xs md:text-sm text-white/85"
              >
                <span
                  className={`text-[9.5px] font-mono px-2 py-0.5 rounded-full border tracking-wider font-semibold ${notice.badgeColor}`}
                >
                  {notice.badge}
                </span>
                <span className="font-light tracking-wide group-hover:underline decoration-emerald-400/50 underline-offset-4">
                  {notice.text}
                </span>
                <span className="text-white/30 text-xs group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Link Action */}
        <div className="pl-3 border-l border-white/15 shrink-0 hidden md:flex items-center bg-[#0a0a0d] z-10">
          <Link
            href="/admissions"
            className="text-[11px] font-mono uppercase tracking-wider text-white/70 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
          >
            <span>Apply 2026</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
