import Image from "next/image";

export default function OrganogramSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-white text-[#1a1a1a] border-b border-black/10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
              Governance Structure
            </span>
          </div>
          <h2 className="text-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Institutional Organogram
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
            The organizational and administrative structure of Universal College, Patran.
          </p>
        </div>

        {/* Clean Organogram Image Display */}
        <div className="w-full rounded-3xl overflow-hidden border border-black/10 bg-[#f9f9f7] p-4 md:p-8 shadow-sm">
          <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-black/5 flex items-center justify-center">
            <Image
              src="/assets/organogram.png"
              alt="Universal College Patran Institutional Organogram"
              width={1200}
              height={896}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
