"use client";

import { MANDATORY_DOCUMENTS } from "@/data/admissions";

export default function DocumentChecklistWidget() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-[#f9f9f7] text-neutral-900 border-b border-black/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-black/10">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-800 font-semibold">
                Official Regulatory Records
              </span>
            </div>
            <h2 className="text-editorial text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950">
              Important Documents Required for Admission.
            </h2>
            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
              Mandated by Maharaja Ranjit Singh Punjab Technical University (MRSPTU) and the Directorate of Technical Education, Punjab. Candidates must submit self-attested photocopies alongside original credentials.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-neutral-600">
            <div className="p-4 rounded-2xl bg-white border border-black/10 space-y-0.5">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">
                Verification Protocol
              </span>
              <p className="font-semibold text-neutral-900">
                Originals Inspected &amp; Returned on Spot
              </p>
            </div>
          </div>
        </div>

        {/* ================= EDITORIAL LEDGER TABLE (DESKTOP) ================= */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 pb-4 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 border-b border-black/10">
            <div className="col-span-1">Ref</div>
            <div className="col-span-5">Document Title &amp; Jurisdiction</div>
            <div className="col-span-3">Issuing Authority</div>
            <div className="col-span-2">Format &amp; Copies</div>
            <div className="col-span-1 text-right">Status</div>
          </div>

          <div className="divide-y divide-black/10">
            {MANDATORY_DOCUMENTS.map((doc, idx) => (
              <div
                key={doc.id}
                className="grid grid-cols-12 py-6 items-baseline hover:bg-black/[0.02] transition-colors duration-200 group px-2 rounded-xl"
              >
                {/* Index */}
                <div className="col-span-1 text-editorial text-2xl font-bold text-neutral-400 group-hover:text-emerald-700 transition-colors">
                  0{idx + 1}
                </div>

                {/* Title & Detail */}
                <div className="col-span-5 pr-6 space-y-1">
                  <h3 className="font-bold text-base text-neutral-950 group-hover:text-emerald-950 transition-colors leading-snug">
                    {doc.name}
                  </h3>
                  {doc.punjabiName && (
                    <p className="text-xs text-neutral-500 font-sans font-light">
                      {doc.punjabiName}
                    </p>
                  )}
                  <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
                    {doc.description}
                  </p>
                  <span className="inline-block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    Scope: {doc.applicableFor}
                  </span>
                </div>

                {/* Issuing Authority */}
                <div className="col-span-3 pr-4 text-xs font-mono text-neutral-800">
                  <p className="leading-relaxed">{doc.issuingAuthority}</p>
                </div>

                {/* Copies */}
                <div className="col-span-2 text-xs font-mono text-emerald-800 font-semibold">
                  <p className="leading-relaxed">{doc.copiesRequired}</p>
                </div>

                {/* Status */}
                <div className="col-span-1 text-right">
                  <span
                    className={`inline-block text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                      doc.isMandatoryForAll
                        ? "bg-neutral-900 text-white"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    {doc.isMandatoryForAll ? "Mandatory" : "Reserved"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EDITORIAL LEDGER STACK (MOBILE / TABLET) ================= */}
        <div className="lg:hidden divide-y divide-black/10">
          {MANDATORY_DOCUMENTS.map((doc, idx) => (
            <div key={doc.id} className="py-6 first:pt-0 space-y-3">
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-editorial text-2xl font-bold text-neutral-400">
                    0{idx + 1}
                  </span>
                  <h3 className="font-bold text-base text-neutral-950 leading-snug">
                    {doc.name}
                  </h3>
                </div>
                <span
                  className={`text-[9px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                    doc.isMandatoryForAll
                      ? "bg-neutral-900 text-white"
                      : "bg-amber-100 text-amber-900"
                  }`}
                >
                  {doc.isMandatoryForAll ? "Mandatory" : "Reserved"}
                </span>
              </div>

              {doc.punjabiName && (
                <p className="text-xs text-neutral-500 font-sans pl-8 font-light">
                  {doc.punjabiName}
                </p>
              )}

              <p className="text-xs text-neutral-700 font-light leading-relaxed pl-8">
                {doc.description}
              </p>

              <div className="pl-8 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-600">
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase block">
                    Authority:
                  </span>
                  <p className="text-neutral-900">{doc.issuingAuthority}</p>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase block">
                    Required Format:
                  </span>
                  <p className="text-emerald-800 font-semibold">{doc.copiesRequired}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Protection Callout */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs md:text-sm text-neutral-600 font-light max-w-3xl leading-relaxed">
            <strong className="font-semibold text-neutral-950">Statutory Protection of Original Certificates:</strong> Under the UGC (Redress of Grievances) Regulations and Punjab State Higher Education directives, Universal College Patran does not retain original marksheets or migration certificates. Original documents are scrutinized exclusively during spot counseling and are handed back immediately to candidates.
          </p>
          <a
            href="tel:9779146689"
            className="px-5 py-2.5 rounded-full bg-[#0c0c10] hover:bg-emerald-700 text-white font-mono text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Verification Desk: 97791-46689 →
          </a>
        </div>
      </div>
    </section>
  );
}
