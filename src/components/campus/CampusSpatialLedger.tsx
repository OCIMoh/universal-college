"use client";

import { useState } from "react";
import { FACILITIES_DATA, Facility } from "@/data/facilities";

export default function CampusSpatialLedger() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFacilities = FACILITIES_DATA.filter((f) => {
    const term = searchTerm.toLowerCase();
    return (
      f.name.toLowerCase().includes(term) ||
      f.zone.toLowerCase().includes(term) ||
      f.tagline.toLowerCase().includes(term) ||
      f.badge.toLowerCase().includes(term) ||
      f.equipment.some((eq) => eq.toLowerCase().includes(term))
    );
  });

  return (
    <section className="relative w-full bg-[#f4f4f0] text-black py-20 md:py-28 px-6 md:px-12 border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-black/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/5 border border-emerald-900/15 text-emerald-900 font-mono text-xs uppercase tracking-widest mb-3">
              <span>Section 03</span>
              <span className="text-black/20">•</span>
              <span>Audit Registry</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-normal text-black tracking-tight">
              Spatial Master Ledger & Equipment Specifications
            </h2>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80">
            <label htmlFor="search-facilities" className="sr-only">Search facilities</label>
            <div className="relative">
              <input
                id="search-facilities"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search specs, lab, equipment..."
                className="w-full px-4 py-2.5 bg-white border border-black/15 text-xs font-mono placeholder:text-black/40 focus:outline-none focus:border-black transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-black/40 hover:text-black"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Master Table on Desktop */}
        <div className="hidden lg:block border border-black/10 bg-white shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse font-sans text-xs">
            <thead>
              <tr className="bg-[#e9e9e4] border-b border-black/10 font-mono text-[11px] text-black/70 uppercase tracking-wider">
                <th className="py-3 px-4 w-16">No.</th>
                <th className="py-3 px-4 w-64">Facility / Space</th>
                <th className="py-3 px-4 w-44">Architectural Zone</th>
                <th className="py-3 px-4 w-36">Capacity / Area</th>
                <th className="py-3 px-4">Standard Equipment & Tech Stack</th>
                <th className="py-3 px-4 w-40 text-right">Standard / Badge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {filteredFacilities.map((facility: Facility, idx: number) => (
                <tr
                  key={facility.id}
                  className="hover:bg-neutral-50/80 transition-colors group"
                >
                  <td className="py-3 px-4 font-mono text-black/40">
                    [{(idx + 1).toString().padStart(2, "0")}]
                  </td>
                  <td className="py-3 px-4 font-semibold text-black/90">
                    <a
                      href={`#${facility.id}`}
                      className="hover:text-emerald-800 transition-colors flex items-center gap-1.5"
                    >
                      <span>{facility.name}</span>
                      <span className="opacity-0 group-hover:opacity-100 text-emerald-700 transition-opacity">
                        ↓
                      </span>
                    </a>
                  </td>
                  <td className="py-3 px-4 font-mono text-black/60">
                    Zone {facility.zoneCode}
                  </td>
                  <td className="py-3 px-4 font-mono text-black/80">
                    {facility.capacity || facility.areaSqFt || "Standard"}
                  </td>
                  <td className="py-3 px-4 text-black/70 leading-relaxed">
                    {facility.equipment.slice(0, 3).join(" • ")}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-block px-2 py-0.5 bg-neutral-100 border border-black/10 font-mono text-[10px] text-black/70">
                      {facility.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Mobile / Tablet Cards */}
        <div className="lg:hidden space-y-4">
          {filteredFacilities.map((facility: Facility, idx: number) => (
            <div
              key={facility.id}
              className="p-5 bg-white border border-black/10 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] text-black/40">
                  [{(idx + 1).toString().padStart(2, "0")}] • Zone {facility.zoneCode}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 border border-black/10 text-black/70">
                  {facility.badge}
                </span>
              </div>
              <h3 className="font-serif text-lg font-normal text-black mb-1">
                {facility.name}
              </h3>
              <p className="text-xs font-mono text-emerald-800 mb-3">
                {facility.capacity} • {facility.areaSqFt}
              </p>
              <div className="text-xs text-black/60 font-sans border-t border-black/5 pt-2">
                <span className="font-mono text-[10px] uppercase text-black/40 block mb-1">
                  Key Equipment:
                </span>
                {facility.equipment.slice(0, 3).join(", ")}
              </div>
              <div className="mt-3 pt-2 border-t border-black/5 text-right">
                <a
                  href={`#${facility.id}`}
                  className="font-mono text-xs text-emerald-900 font-semibold hover:underline"
                >
                  View Details in Folio ↓
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Ledger Footer Summary */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs text-black/50 gap-2">
          <span>
            Displaying {filteredFacilities.length} of {FACILITIES_DATA.length} verified physical units
          </span>
          <span>
            Regulatory Verification: AICTE / MRSPTU / DGT Standards
          </span>
        </div>
      </div>
    </section>
  );
}
