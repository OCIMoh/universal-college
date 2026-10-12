"use client";

import { useState } from "react";
import Image from "next/image";
import { GOVERNING_BODY } from "@/data/governanceData";
import { Phone, Mail, Maximize2, X, FileText, Download } from "@/components/common/Icons";

export default function GoverningBodySection() {
  const [organogramOpen, setOrganogramOpen] = useState(false);

  // Executive Top 5
  const executiveLeaders = GOVERNING_BODY.slice(0, 5);
  // Trustees & Statutory Nominees 5
  const regulatoryNominees = GOVERNING_BODY.slice(5);

  return (
    <section id="governing-body" className="relative w-full py-28 px-6 md:px-12 bg-[#f9f9f7] text-[#1a1a1a] border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* ================= SECTION EDITORIAL HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b border-black/10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
                Apex Fiduciary Governance
              </span>
              <span className="text-neutral-400 font-mono text-xs">•</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                Dashmesh Charitable Trust (Regd. 1860)
              </span>
            </div>

            <h2 className="text-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.06]">
              Board of Governors.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              The apex institutional governing body provides fiduciary oversight, academic stewardship, and statutory accountability to ensure Universal College Patran delivers ethical, accredited higher education across the Malwa region of Punjab.
            </p>
          </div>

          {/* Institutional Metric Strip */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-neutral-600">
            <div className="space-y-1">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider block">Founding Act</span>
              <span className="text-neutral-900 font-bold text-sm block">Society XXI, 1860</span>
            </div>
            <div className="w-[1px] h-8 bg-black/10 hidden sm:block" />
            <div className="space-y-1">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider block">Constituted Council</span>
              <span className="text-neutral-900 font-bold text-sm block">10 Members</span>
            </div>
            <div className="w-[1px] h-8 bg-black/10 hidden sm:block" />
            <div className="space-y-1">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider block">Session Active</span>
              <span className="text-emerald-700 font-bold text-sm block">2026–2027</span>
            </div>
          </div>
        </div>

        {/* ================= EXECUTIVE DIRECTORATE GALLERY ================= */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight flex items-center gap-3">
              <span className="text-emerald-700 font-mono text-sm font-normal">/ 01.1</span>
              <span>Executive Officers &amp; Presiding Trustees</span>
            </h3>
            <span className="text-xs font-mono text-neutral-500 tracking-wider">
              Statutory Administrative Leaders
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveLeaders.map((member, idx) => (
              <div
                key={member.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white border border-black/10 p-7 shadow-sm hover:shadow-xl hover:border-emerald-600/40 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Portrait with Museum Framing */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 border border-black/10">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-serif text-4xl text-neutral-300">
                        {member.name.charAt(0)}
                      </div>
                    )}

                    {/* Corner Authority Stamp */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-black/10 text-[10px] font-mono uppercase tracking-wider font-semibold text-emerald-900 shadow-sm">
                      {member.badge}
                    </div>

                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/75 text-[10px] font-mono text-white/90">
                      {member.qualification}
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
                      Ref #{String(idx + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-2xl font-bold font-serif tracking-tight text-neutral-950 group-hover:text-emerald-800 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-medium">
                      {member.designation}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed pt-2 font-light">
                      {member.portfolio}
                    </p>
                  </div>
                </div>

                {/* Direct Telephony & Email Desk */}
                {(member.phone || member.email) && (
                  <div className="pt-6 mt-6 border-t border-black/10 flex flex-wrap items-center gap-4 text-xs font-mono">
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                        className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{member.phone}</span>
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-1.5 text-neutral-600 hover:text-emerald-700 transition-colors truncate max-w-[190px]"
                      >
                        <Mail className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="truncate">{member.email}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= STATUTORY NOMINEES & TRUSTEES LEDGER ================= */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight flex items-center gap-3">
              <span className="text-emerald-700 font-mono text-sm font-normal">/ 01.2</span>
              <span>Regulatory Nominees &amp; Trust Fiduciaries</span>
            </h3>
            <span className="text-xs font-mono text-neutral-500 tracking-wider">
              Statutory Representatives &amp; External Observers
            </span>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10 bg-white rounded-2xl px-6 shadow-sm">
            {regulatoryNominees.map((nominee, idx) => (
              <div
                key={nominee.id}
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-neutral-50/60 transition-colors duration-200"
              >
                <div className="md:col-span-1 text-xs font-mono text-neutral-400">
                  #{String(idx + 6).padStart(2, "0")}
                </div>

                <div className="md:col-span-4 space-y-1">
                  <h4 className="font-bold text-neutral-950 text-base font-serif">
                    {nominee.name}
                  </h4>
                  <p className="text-xs font-mono text-emerald-800 uppercase tracking-wider">
                    {nominee.designation}
                  </p>
                </div>

                <div className="md:col-span-2 text-xs font-mono text-neutral-600">
                  <span className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 text-[10px] font-semibold border border-black/5">
                    {nominee.badge}
                  </span>
                </div>

                <div className="md:col-span-5 text-xs text-neutral-600 leading-relaxed font-light">
                  {nominee.portfolio}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ARCHITECTURAL ORGANOGRAM BLUEPRINT ================= */}
        <div className="border border-black/10 rounded-3xl bg-white p-8 md:p-12 space-y-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>Statutory Administrative Architecture</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-950 tracking-tight">
                Institutional Organogram Schematic.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Formal structural hierarchy established under the Dashmesh Charitable Trust. Governs the relationship between the Board of Governors, Academic Directorate, Statutory Oversight Cells, and Student Bodies.
              </p>
            </div>

            <button
              onClick={() => setOrganogramOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-black/15 bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider hover:bg-emerald-800 transition-all shrink-0 self-start md:self-auto shadow-sm"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Expand Schematic (Full Screen)</span>
            </button>
          </div>

          {/* 4-Tier Structural Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-5 rounded-2xl border border-black/10 bg-neutral-50/50 space-y-2">
              <span className="text-emerald-800 font-bold block text-[11px]">TIER 01 • TRUST</span>
              <p className="text-neutral-900 font-medium text-sm">Dashmesh Charitable Trust</p>
              <p className="text-neutral-600 text-[11px] leading-relaxed font-light">
                Chairman, Vice-Chairman &amp; Board of Governors apex administration.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-black/10 bg-neutral-50/50 space-y-2">
              <span className="text-emerald-800 font-bold block text-[11px]">TIER 02 • DIRECTORS</span>
              <p className="text-neutral-900 font-medium text-sm">Director &amp; Principal Office</p>
              <p className="text-neutral-600 text-[11px] leading-relaxed font-light">
                Executive collegiate leadership, university liaison &amp; institutional IQAC.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-black/10 bg-neutral-50/50 space-y-2">
              <span className="text-emerald-800 font-bold block text-[11px]">TIER 03 • ACADEMICS</span>
              <p className="text-neutral-900 font-medium text-sm">Department Wings &amp; HODs</p>
              <p className="text-neutral-600 text-[11px] leading-relaxed font-light">
                Commerce, IT, Humanities, Nursing, Fashion &amp; Vocational staff.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-black/10 bg-neutral-50/50 space-y-2">
              <span className="text-emerald-800 font-bold block text-[11px]">TIER 04 • CELLS</span>
              <p className="text-neutral-900 font-medium text-sm">Statutory Committees &amp; Cadets</p>
              <p className="text-neutral-600 text-[11px] leading-relaxed font-light">
                Anti-Ragging, Grievance, POSH, NCC 20 PB BN, and NSS student council.
              </p>
            </div>
          </div>

          {/* Interactive Blueprint Viewer Box */}
          <div
            onClick={() => setOrganogramOpen(true)}
            className="group relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden border border-black/10 bg-neutral-100 cursor-pointer flex items-center justify-center shadow-inner"
          >
            <Image
              src="/assets/brand/organogram-upscaled.png"
              alt="Universal College Patran Institutional Organogram"
              fill
              className="object-contain p-6 filter group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            <div className="absolute bottom-4 left-6 flex items-center gap-2 text-xs font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Click to open high-resolution structural blueprint &amp; zoom</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN ARCHITECTURAL ORGANOGRAM MODAL ================= */}
      {organogramOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-6xl h-[90vh] rounded-2xl border border-white/20 bg-[#0c0c10] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between text-white">
              <div>
                <h3 className="font-serif font-bold text-white text-lg sm:text-xl">
                  Universal College Patran — Institutional Organogram
                </h3>
                <p className="text-xs font-mono text-white/50">
                  Approved by Dashmesh Charitable Trust • Session 2026–27
                </p>
              </div>
              <button
                onClick={() => setOrganogramOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 p-6 overflow-auto bg-black/80 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src="/assets/brand/organogram-upscaled.png"
                  alt="Universal College Patran Organogram"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-white/50">
              <span>Universal College Patran • Governance System</span>
              <a
                href="/assets/brand/organogram-upscaled.png"
                download="universal-college-patran-organogram.png"
                className="text-emerald-400 hover:underline flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Schematic (PNG)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
