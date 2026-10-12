"use client";

interface StatItem {
  number: string;
  label: string;
  description: string;
  highlight?: boolean;
}

const STATS: StatItem[] = [
  {
    number: "2014",
    label: "FOUNDATION YEAR",
    description: "Established under Dashmesh Charitable Trust to empower rural students.",
  },
  {
    number: "15+",
    label: "PROGRAMS OFFERED",
    description: "Degree, Open University, NIOS, and ITI vocational career streams.",
  },
  {
    number: "16",
    label: "CAMPUS FACILITIES",
    description: "Modern computer labs, fashion & medical labs, library, sports stadium.",
  },
  {
    number: "100%",
    label: "SC SCHOLARSHIP",
    description: "Zero tuition fee under Post-Matric SC Scholarship (PMSS) scheme.",
    highlight: true,
  },
  {
    number: "64+",
    label: "FACULTY & STAFF",
    description: "Experienced educators and dedicated technical laboratory mentors.",
  },
];

export default function HomeStatsStrip() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-white text-[#1a1a1a] border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
                By The Numbers
              </span>
            </div>
            <h2 className="text-editorial text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              A Decade of Growth, Impact & Empowerment
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md font-light leading-relaxed">
            Measuring our institutional impact across Patran, Patiala district, and Punjab over more than ten years of academic service.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                stat.highlight
                  ? "bg-gradient-to-br from-[#0d0d12] to-emerald-950 text-white border-emerald-500/30 shadow-xl col-span-2 sm:col-span-1"
                  : "bg-[#f9f9f7] text-[#1a1a1a] border-black/10 hover:border-emerald-600/30 hover:bg-white hover:shadow-md"
              }`}
            >
              <div>
                <span
                  className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight block mb-2 ${
                    stat.highlight ? "text-emerald-400" : "text-neutral-900"
                  }`}
                >
                  {stat.number}
                </span>
                <span
                  className={`text-[10px] font-mono tracking-wider uppercase font-semibold block mb-2 ${
                    stat.highlight ? "text-emerald-300/80" : "text-emerald-800"
                  }`}
                >
                  {stat.label}
                </span>
              </div>
              <p
                className={`text-xs leading-relaxed font-light ${
                  stat.highlight ? "text-white/70" : "text-neutral-600"
                }`}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
