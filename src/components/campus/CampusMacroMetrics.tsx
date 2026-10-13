"use client";

interface ArchitecturalSpec {
  metric: string;
  unit?: string;
  code: string;
  title: string;
  description: string;
  featureList: string[];
}

const ARCHITECTURAL_SPECS: ArchitecturalSpec[] = [
  {
    metric: "19",
    code: "SPEC // 01",
    title: "Dedicated Pavilions & Labs",
    description: "Specialized pedagogical infrastructure spanning advanced computing, clinical nursing, fashion styling & engineering workshops.",
    featureList: ["Computer Laboratories", "Medical Anatomy Unit", "CAD Garment Studios"],
  },
  {
    metric: "4",
    code: "SPEC // 02",
    title: "Zoned Architectural Quarters",
    description: "Four distinct functional precincts organized around pedestrian cloisters to segregate focused study from vibrant campus life.",
    featureList: ["Academic Quad", "Technical Commons", "Athletic Grounds", "Administrative Hub"],
  },
  {
    metric: "120+",
    code: "SPEC // 03",
    title: "High-Performance Terminals",
    description: "Networked computing infrastructure equipped with Core i5/i7 workstations connected via high-bandwidth gigabit fiber LAN.",
    featureList: ["Gigabit Fiber Backbone", "Universal Wi-Fi", "Dual Power Redundancy"],
  },
  {
    metric: "100%",
    code: "SPEC // 04",
    title: "Climate Control & Barrier-Free",
    description: "Full air-conditioning across all formal lecture theatres paired with continuous low-gradient access ramps for zero-barrier mobility.",
    featureList: ["Full Air-Conditioning", "Tactile Access Ramps", "Ergonomic Furnishings"],
  },
];

export default function CampusMacroMetrics() {
  return (
    <section className="relative w-full border-b border-black/10 bg-[#fbfbf9] text-black overflow-hidden py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Architectural Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-black/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
              <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em] text-emerald-800 font-semibold">
                Architectural Ledger • Physical Master Specifications
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-neutral-900 tracking-tight">
              Spatial Scale & Operational Capacity
            </h2>
          </div>
          <p className="text-xs md:text-sm text-neutral-600 max-w-md font-sans leading-relaxed">
            Consolidated architectural parameters established under the Dashmesh Charitable Trust master development plan (2014–Present).
          </p>
        </div>

        {/* Asymmetrical Composition: Primary Estate Anchor + 4 Quadrant Spec Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Spatial Anchor Card: 10+ Acres Master Perimeter (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-8 bg-neutral-900 text-white flex flex-col justify-between relative overflow-hidden shadow-xl border border-neutral-800">
            {/* Subtle architectural coordinates badge */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 font-semibold">
                ESTATE ANCHOR // PATRAN
              </span>
              <span className="text-[10px] font-mono text-white/40">
                30.0167° N, 76.0667° E
              </span>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl sm:text-7xl font-serif font-bold tracking-tight text-white">
                    10+
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    Acres
                  </span>
                </div>
                <h3 className="text-xl font-serif font-normal text-white/95 mt-2">
                  Consolidated Institutional Perimeter
                </h3>
                <p className="text-xs font-mono text-white/50 uppercase tracking-widest mt-1">
                  Maintained Campus Grounds • Dashmesh Charitable Trust
                </p>
              </div>

              <p className="text-xs text-white/70 font-light leading-relaxed">
                A unified campus environment purposefully constructed along the Patran arterial corridor, integrating green lawns, outdoor sports stadiums, botanical gardens, and purpose-built academic blocks.
              </p>

              {/* Spatial Highlights */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-[11px] font-mono">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <span className="text-emerald-400 block font-bold text-sm">100%</span>
                  <span className="text-white/60 text-[10px] uppercase">Owned Trust Land</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <span className="text-emerald-400 block font-bold text-sm">24/7</span>
                  <span className="text-white/60 text-[10px] uppercase">Gated Security & CCTV</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Campus Master Plan 2014–Present</span>
              <span className="text-emerald-400 font-semibold">Patiala District, Punjab</span>
            </div>
          </div>

          {/* 4 Architectural Spec Panels (7 cols - 2x2 grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ARCHITECTURAL_SPECS.map((spec) => (
              <div
                key={spec.code}
                className="p-7 rounded-3xl bg-white border border-black/10 hover:border-emerald-700/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-semibold">
                      {spec.code}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600/30 group-hover:bg-emerald-600 transition-colors" />
                  </div>

                  <div>
                    <span className="text-3xl sm:text-4xl font-serif text-neutral-900 tracking-tight block group-hover:text-emerald-900 transition-colors font-bold">
                      {spec.metric}
                    </span>
                    <h3 className="text-sm font-semibold text-neutral-900 leading-snug mt-1">
                      {spec.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-black/5">
                  <div className="flex flex-wrap gap-1.5">
                    {spec.featureList.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#f4f4f0] text-neutral-700 border border-black/5"
                      >
                        {item}
                      </span>
                    ))}
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
