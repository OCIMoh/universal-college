"use client";

import { MANDATORY_DISCLOSURES } from "@/data/governanceData";
import {
  FileText,
  Building2,
  ExternalLink,
  ShieldCheck,
  Landmark,
  CheckCircle2,
} from "@/components/common/Icons";

export default function MandatoryDisclosuresVault() {
  return (
    <section id="disclosures" className="relative w-full py-28 px-6 md:px-12 bg-[#f9f9f7] text-[#1a1a1a] border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b border-black/10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
                [05 / STATUTORY PUBLIC ARCHIVE]
              </span>
              <span className="w-1 h-1 rounded-full bg-black/30" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                AICTE, UGC &amp; MRSPTU Regulatory Gazette
              </span>
            </div>

            <h2 className="text-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.06]">
              Mandatory Disclosures.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              In full compliance with central and state regulatory mandates, official institutional land titles, society registrations, university affiliation orders, and RTI records are maintained in the public domain.
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-neutral-600 bg-white border border-black/10 px-4 py-2.5 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified for Academic Session 2026–27</span>
          </div>
        </div>

        {/* ================= PHYSICAL LAND & BUILDING ASSETS DOSSIER ================= */}
        <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-10 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 border-b border-black/10 pb-4">
            <Building2 className="w-5 h-5 text-emerald-700" />
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900">
              Institutional Land &amp; Structural Assets Dossier
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
              <span className="text-neutral-500 text-[10px] uppercase block">Built-Up Instructional Area</span>
              <span className="text-neutral-900 font-bold block text-sm">30,000+ Sq. Ft.</span>
              <span className="text-neutral-500 text-[11px]">Dedicated Academic Blocks</span>
            </div>

            <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
              <span className="text-neutral-500 text-[10px] uppercase block">Land Title &amp; Tenure</span>
              <span className="text-neutral-900 font-bold block text-sm">Clear Owned Title</span>
              <span className="text-neutral-500 text-[11px]">Dashmesh Charitable Trust</span>
            </div>

            <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
              <span className="text-neutral-500 text-[10px] uppercase block">Safety &amp; Fire NOC</span>
              <span className="text-emerald-700 font-bold block text-sm">Certified Compliant</span>
              <span className="text-neutral-500 text-[11px]">Punjab Fire &amp; Safety Services</span>
            </div>

            <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
              <span className="text-neutral-500 text-[10px] uppercase block">Universal Accessibility</span>
              <span className="text-neutral-900 font-bold block text-sm">100% Ramp Access</span>
              <span className="text-neutral-500 text-[11px]">Barrier-Free Campus Architecture</span>
            </div>
          </div>
        </div>

        {/* ================= REGULATORY ACCREDITATION RECORDS LEDGER ================= */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-neutral-900 tracking-tight flex items-center gap-3">
              <span className="text-emerald-700 font-mono text-sm font-semibold">/ 05.1</span>
              <span>Regulatory Affiliations &amp; Statutory Approvals</span>
            </h3>
            <span className="text-xs font-mono text-neutral-500 tracking-wider">
              Statutory Documentation Vault
            </span>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {MANDATORY_DISCLOSURES.map((rec, idx) => (
              <div
                key={idx}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-neutral-50/80 transition-colors duration-200"
              >
                <div className="md:col-span-1 text-xs font-mono text-neutral-400">
                  #{String(idx + 1).padStart(2, "0")}
                </div>

                <div className="md:col-span-4 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-semibold block">
                    {rec.category}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-neutral-900">
                    {rec.title}
                  </h4>
                  <p className="text-xs font-mono text-neutral-500">
                    Ref: {rec.referenceNo}
                  </p>
                  <p className="text-xs text-neutral-400 font-mono pt-1">
                    Authority: {rec.issuingBody}
                  </p>
                </div>

                <div className="md:col-span-4 space-y-1.5 text-xs text-neutral-600 font-light">
                  {rec.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-3 flex md:justify-end items-center">
                  <a
                    href="/assets/brand/organogram-upscaled.png"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-lg border border-black/15 bg-white hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-900 font-mono text-xs transition-all flex items-center gap-2 shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{rec.downloadLabel || "Inspect Record"}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT TO INFORMATION (RTI) ACT OVERSIGHT ================= */}
        <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-10 space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-mono uppercase tracking-widest font-semibold">
                <Landmark className="w-4 h-4 text-emerald-700" />
                <span>Right to Information Act, 2005</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-neutral-900">
                RTI Public Information Officers Roster
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Citizens and stakeholders may submit information requests regarding sanctioned courses, faculty rosters, institutional policies, and statutory approvals under the provisions of the RTI Act.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 font-mono text-xs shrink-0">
              <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
                <span className="text-[10px] uppercase text-neutral-500 block">Public Information Officer (PIO)</span>
                <span className="text-neutral-900 font-bold block text-sm">Er. Yadwinder Singh</span>
                <span className="text-neutral-500 text-[11px] block">Principal, Universal College</span>
                <span className="text-emerald-800 block pt-1 font-bold">+91-98886-78516</span>
              </div>

              <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
                <span className="text-[10px] uppercase text-neutral-500 block">First Appellate Authority (FAA)</span>
                <span className="text-neutral-900 font-bold block text-sm">Dr. Amrish Dhawan</span>
                <span className="text-neutral-500 text-[11px] block">Director, Universal College</span>
                <span className="text-emerald-800 block pt-1 font-bold">+91-97791-46689</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
