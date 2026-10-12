"use client";

interface MacroMetric {
  value: string;
  label: string;
  detail: string;
}

const METRICS: MacroMetric[] = [
  {
    value: "10+ Acres",
    label: "Institutional Perimeter",
    detail: "Maintained campus grounds across Patran",
  },
  {
    value: "20",
    label: "Dedicated Facilities",
    detail: "Spanning labs, workshops, sports & commons",
  },
  {
    value: "4",
    label: "Architectural Zones",
    detail: "Specialized zones for study, practice & life",
  },
  {
    value: "100%",
    label: "Climate-Controlled Classrooms",
    detail: "Full air-conditioning with smart projectors",
  },
  {
    value: "120+",
    label: "Networked Workstations",
    detail: "Core i5/i7 terminals with gigabit fiber LAN",
  },
  {
    value: "100%",
    label: "Universal Ramp Access",
    detail: "Zero-barrier low-gradient tactile mobility",
  },
];

export default function CampusMacroMetrics() {
  return (
    <section className="relative w-full border-b border-black/10 bg-[#fbfbf9] text-black overflow-hidden py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-emerald-800 font-semibold block mb-2">
              Physical Capital • Master Specifications
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-normal text-black tracking-tight">
              Spatial Scale & Operational Capacity
            </h2>
          </div>
          <p className="text-xs md:text-sm text-black/60 max-w-md font-sans mt-3 md:mt-0 leading-relaxed">
            Consolidated architectural parameters established under the Dashmesh Charitable Trust master development plan (2014–Present).
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between pt-2 border-t-2 border-emerald-900/15 group hover:border-emerald-700 transition-colors"
            >
              <div>
                <span className="font-mono text-[10px] text-black/40 block mb-1">
                  [0{idx + 1}]
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-black tracking-tight block group-hover:text-emerald-900 transition-colors">
                  {metric.value}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="text-xs font-semibold text-black/85 leading-snug">
                  {metric.label}
                </h3>
                <p className="text-[11px] text-black/50 mt-1 leading-normal font-sans">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
