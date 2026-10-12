"use client";

import { ADMISSION_SCHEDULE, ADMISSION_HELPDESK_INFO } from "@/data/admissions";

export default function AdmissionScheduleStrip() {
  return (
    <section className="w-full bg-[#08080a] text-white border-b border-white/10 relative overflow-hidden">
      {/* Hairline grid guides */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-semibold">
                Session 2026–2027 Calendar
              </span>
            </div>
            <h2 className="text-editorial text-2xl md:text-3xl font-bold tracking-tight text-white">
              Admissions Timetable & Live Scrutiny Windows
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#enquiry-desk"
              className="px-5 py-2.5 rounded-full bg-white text-neutral-950 hover:bg-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
            >
              Apply Online →
            </a>
            <a
              href={`tel:${ADMISSION_HELPDESK_INFO.helplinePhone.replace("-", "")}`}
              className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/15 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all border border-white/15"
            >
              Call 97791-46689
            </a>
          </div>
        </div>

        {/* Minimalist Horizontal Architectural Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 pt-4">
          {ADMISSION_SCHEDULE.map((item, idx) => (
            <div
              key={idx}
              className="py-6 md:py-4 px-0 md:px-6 first:pl-0 last:pr-0 space-y-3 group"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
                  0{idx + 1} // STAGE
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors leading-snug mb-1">
                  {item.event}
                </h3>
                <p className="font-mono text-xs text-white/80 font-medium">
                  {item.dateOrStatus}
                </p>
              </div>

              <p className="text-xs text-white/50 font-light leading-relaxed">
                {item.notes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
