"use client";

import Image from "next/image";
import { GOVERNING_BODY } from "@/data/governanceData";
import {
  Phone,
  Mail,
  FileText,
  Download,
  ExternalLink,
} from "@/components/common/Icons";

export default function GoverningBodySection() {
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

          {/* Clean Organogram Image Display */}
          <div className="w-full rounded-2xl overflow-hidden border border-black/10 bg-neutral-50 p-4 sm:p-8 flex items-center justify-center shadow-inner">
            <Image
              src="/assets/brand/organogram-upscaled.png"
              alt="Universal College Patran Institutional Organogram"
              width={1200}
              height={896}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>

        {/* ================= MANDATORY PUBLIC DISCLOSURES SECTION ================= */}
        <div id="mandatory-disclosures-dossier" className="border border-black/10 rounded-3xl bg-white p-8 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-12">
            
            {/* Left Column: Official Heading, Legal Narrative & Primary Download Action */}
            <div className="space-y-5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>Statutory Regulatory Compliance</span>
                <span className="text-neutral-300">•</span>
                <span className="text-neutral-500 font-normal">Session 2024–25</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-950 tracking-tight leading-tight">
                Mandatory Public Disclosures.
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                Published pursuant to AICTE Approval Process Regulations and Section 4(1)(b) of the Right to Information Act, 2005. Universal College Patran places its certified collegiate governance, infrastructure deeds, faculty cadre, fee structures, and anti-ragging compliance on open public record.
              </p>

              {/* Direct Primary Action: Download PDF */}
              <div className="pt-2">
                <a
                  href="/docs/mandatory-disclosures-2024.pdf"
                  download="Universal-College-Patran-Mandatory-Disclosures-2024.pdf"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-neutral-950 hover:bg-emerald-700 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download Official PDF (440 KB)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clickable Live Document Preview (Redirects to full PDF on click) */}
            <div className="shrink-0 flex flex-col items-start lg:items-end gap-2.5">
              <a
                href="/docs/mandatory-disclosures-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Click to view Mandatory Disclosures PDF in full"
                className="group relative w-48 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden border border-black/15 bg-neutral-100 shadow-sm hover:shadow-2xl hover:border-emerald-600/60 transition-all duration-300 block cursor-pointer"
              >
                {/* Embedded PDF Thumbnail Preview (pointer-events-none ensures parent anchor receives clicks) */}
                <iframe
                  src="/docs/mandatory-disclosures-2024.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                  title="Mandatory Disclosures PDF Preview"
                  className="w-full h-full border-0 pointer-events-none select-none bg-white scale-[1.02] origin-top-left"
                  tabIndex={-1}
                />

                {/* Hover Overlay with Open Prompt */}
                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/30 transition-colors duration-200 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-950/90 text-white text-[11px] font-mono tracking-wider shadow-md backdrop-blur-sm">
                    <span>Open Full PDF</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                </div>

                {/* Corner Quick-Action Tag */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/80 text-[10px] font-mono text-white/90 backdrop-blur-md pointer-events-none flex items-center gap-1">
                  <span>Click to open</span>
                  <span className="text-emerald-400">↗</span>
                </div>
              </a>

              <span className="text-[11px] font-mono text-neutral-400">
                Click preview to view full document ↗
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
