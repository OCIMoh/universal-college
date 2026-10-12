"use client";

import { useState } from "react";
import Image from "next/image";
import { FACILITIES_DATA, CAMPUS_ZONES, Facility } from "@/data/facilities";

export default function CampusFacilitiesShowcase() {
  const [selectedZone, setSelectedZone] = useState<string>("ALL");

  const filteredFacilities =
    selectedZone === "ALL"
      ? FACILITIES_DATA
      : FACILITIES_DATA.filter((f) => f.zone === selectedZone);

  return (
    <section
      id="facilities-folio"
      className="relative w-full bg-[#fdfdfc] text-black py-20 md:py-28 px-6 md:px-12 border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-black/10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/5 border border-emerald-900/15 text-emerald-900 font-mono text-xs uppercase tracking-widest mb-4">
              <span>Architectural Directory</span>
              <span className="text-black/20">•</span>
              <span>Physical Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-black tracking-tight leading-tight">
              Campus Infrastructure & Facilities
            </h2>
          </div>
          <p className="text-sm md:text-base text-black/60 font-sans max-w-md leading-relaxed">
            Every part of our campus has a purpose—to make learning more comfortable, practical, inclusive and engaging for every scholar.
          </p>
        </div>

        {/* Zone Selector Strip */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-16 pb-6 border-b border-black/10">
          <button
            onClick={() => setSelectedZone("ALL")}
            className={`px-4 py-2.5 font-mono text-xs tracking-wider uppercase transition-all duration-200 border ${
              selectedZone === "ALL"
                ? "bg-black text-white border-black shadow-sm"
                : "bg-white text-black/70 border-black/10 hover:border-black/30 hover:text-black"
            }`}
          >
            All Spaces ({FACILITIES_DATA.length})
          </button>

          {CAMPUS_ZONES.map((zone) => (
            <button
              key={zone.name}
              onClick={() => setSelectedZone(zone.name)}
              className={`px-4 py-2.5 font-mono text-xs tracking-wider uppercase transition-all duration-200 border ${
                selectedZone === zone.name
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white text-black/70 border-black/10 hover:border-black/30 hover:text-black"
              }`}
            >
              <span>{zone.name}</span>
              <span className="ml-1.5 opacity-60 font-sans">({zone.count})</span>
            </button>
          ))}
        </div>

        {/* Facilities Folio List: Editorial Alternating Master Spreads */}
        <div className="space-y-16 md:space-y-24">
          {filteredFacilities.map((facility: Facility, idx: number) => {
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={facility.id}
                id={facility.id}
                className="scroll-mt-32 border-b border-black/10 pb-16 md:pb-24 last:border-b-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${
                    isReversed ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:col-start-7" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 group border border-black/10 shadow-sm">
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      {/* Photo Location Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-[11px] uppercase tracking-wider border border-white/10">
                          {facility.badge}
                        </span>
                      </div>

                      {/* Capacity / Area tag */}
                      {facility.capacity && (
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                          <span className="bg-black/75 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                            {facility.capacity}
                          </span>
                          {facility.areaSqFt && (
                            <span className="bg-black/75 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                              {facility.areaSqFt}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Editorial Text Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isReversed ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div>
                      {/* Sub-header */}
                      <div className="flex items-center gap-3 font-mono text-xs text-black/50 uppercase tracking-widest mb-3">
                        <span className="text-emerald-800 font-semibold">{facility.zone}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal text-black tracking-tight leading-snug mb-3">
                        {facility.name}
                      </h3>

                      <p className="text-sm font-mono text-black/70 mb-4 pb-4 border-b border-black/10 italic">
                        &ldquo;{facility.tagline}&rdquo;
                      </p>

                      <p className="text-sm md:text-base text-black/75 font-sans leading-relaxed mb-6">
                        {facility.description}
                      </p>
                    </div>

                    {/* Official Key Focus Tags (from PDF) */}
                    {facility.keyFocus && facility.keyFocus.length > 0 && (
                      <div className="mb-5 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-black/50">
                          Official Focus:
                        </span>
                        {facility.keyFocus.map((focus, fIdx) => (
                          <span
                            key={fIdx}
                            className="inline-block px-2.5 py-0.5 bg-emerald-950/5 border border-emerald-900/15 text-emerald-900 text-xs font-sans font-medium"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Specifications Ledger */}
                    <div className="bg-[#f5f5f2] border border-black/10 p-5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 block mb-3 font-semibold">
                        Technical & Operational Ledger
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
                        {facility.specifications.map((spec, sIdx) => (
                          <div key={sIdx} className="border-b border-black/5 pb-1">
                            <span className="font-mono text-black/50 block text-[11px]">
                              {spec.label}
                            </span>
                            <span className="font-semibold text-black/90">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Equipment bullets */}
                      {facility.equipment && facility.equipment.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-black/10">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 block mb-2">
                            Equipment & Highlights:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {facility.equipment.map((item, eIdx) => (
                              <span
                                key={eIdx}
                                className="inline-block px-2 py-0.5 bg-white border border-black/10 text-[11px] font-sans text-black/80"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
