"use client";

import { useState } from "react";
import Image from "next/image";
import { ADMISSION_STEPS } from "@/data/admissions";

const STAGE_IMAGES: Record<string, { src: string; caption: string }> = {
  "01": { src: "/assets/campus/visit-glass-porch.jpg", caption: "Central Reception & Glass Porch" },
  "02": { src: "/assets/campus/corridor.jpg", caption: "Administrative Block · Scrutiny Chambers" },
  "03": { src: "/assets/campus/staffroom.jpg", caption: "Departmental Counseling Suites" },
  "04": { src: "/assets/campus/admission-cell.jpg", caption: "Accounts Office · Enrolment Counter" },
};

export default function AdmissionFlowchart() {
  const [active, setActive] = useState(0);

  const step = ADMISSION_STEPS[active];
  const visual = STAGE_IMAGES[step.stepNumber] || STAGE_IMAGES["01"];

  return (
    <section className="relative w-full bg-white border-b border-black/10 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-14">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-800 font-semibold">
            The Enrolment Continuum
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <h2 className="text-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.05]">
            From Inquiry<br />to Enrolment.
          </h2>
          <p className="text-base text-neutral-500 font-light leading-relaxed max-w-md">
            A four-stage journey designed for clarity — no hidden fees, no administrative ambiguity. Click any stage below to explore it.
          </p>
        </div>
      </div>

      {/* Horizontal stage selector */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-4">
            {ADMISSION_STEPS.map((s, idx) => (
              <button
                key={s.stepNumber}
                onClick={() => setActive(idx)}
                className={`group relative py-5 px-3 text-left border-r last:border-r-0 border-black/10 transition-colors duration-200 ${
                  active === idx ? "bg-neutral-950 text-white" : "bg-white text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                {/* Step indicator */}
                <div className={`text-[10px] font-mono tracking-[0.25em] uppercase mb-2 ${active === idx ? "text-emerald-400" : "text-neutral-400 group-hover:text-emerald-700"}`}>
                  {`0${idx + 1}`} / Stage
                </div>
                <div className={`text-sm font-semibold leading-snug ${active === idx ? "text-white" : "text-neutral-900"}`}>
                  {s.title}
                </div>
                {/* Active underline */}
                {active === idx && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active step detail — two column */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Kicker + title */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold block mb-3">
                Phase {step.stepNumber} · {step.kicker}
              </span>
              <h3 className="text-editorial text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="text-neutral-600 text-base md:text-lg font-light leading-relaxed">
                {step.summary}
              </p>
            </div>

            {/* Two meta facts */}
            <div className="grid grid-cols-2 gap-px bg-black/10 rounded-2xl overflow-hidden">
              <div className="bg-[#f9f9f7] px-5 py-4">
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">Window</span>
                <span className="text-sm font-semibold text-neutral-900">{step.timeline}</span>
              </div>
              <div className="bg-[#f9f9f7] px-5 py-4">
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">Location</span>
                <span className="text-sm font-semibold text-neutral-900">{step.location}</span>
              </div>
            </div>

            {/* Requirements — clean list, no grid */}
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-semibold block mb-4">
                Stage Checkpoints
              </span>
              <ul className="space-y-2.5">
                {step.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 font-light leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Advisory note */}
            <div className="border-l-2 border-emerald-600 pl-4 py-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-800 font-semibold block mb-1">
                Note
              </span>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">{step.tips}</p>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-black/10 group">
              <Image
                src={visual.src}
                alt={step.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400 block mb-0.5">
                  On-Campus
                </span>
                <p className="text-xs text-white/85 font-light">{visual.caption}</p>
              </div>
              {/* Stage number — large, bottom right */}
              <div className="absolute top-5 right-5 text-[64px] font-bold font-mono text-white/10 leading-none select-none">
                {step.stepNumber}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <button
            onClick={() => setActive((p) => Math.max(0, p - 1))}
            disabled={active === 0}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-neutral-900 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous
          </button>

          <div className="flex items-center gap-2">
            {ADMISSION_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-200 rounded-full ${
                  active === i ? "w-6 h-1.5 bg-emerald-600" : "w-1.5 h-1.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((p) => Math.min(ADMISSION_STEPS.length - 1, p + 1))}
            disabled={active === ADMISSION_STEPS.length - 1}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-neutral-900 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
