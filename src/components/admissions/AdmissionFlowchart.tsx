"use client";

import Image from "next/image";
import { ADMISSION_STEPS } from "@/data/admissions";

const STAGE_IMAGES: Record<string, { src: string; caption: string }> = {
  "01": {
    src: "/assets/visit-glass-porch.jpg",
    caption: "Central Reception & Glass Porch • Universal Campus",
  },
  "02": {
    src: "/assets/corridor.jpg",
    caption: "Administrative Block Corridors & Scrutiny Hall",
  },
  "03": {
    src: "/assets/college-lab-students.jpg",
    caption: "Departmental Wings & Academic Counseling Desks",
  },
  "04": {
    src: "/assets/people-courtyard.jpg",
    caption: "Central Campus Courtyard & Enrolled Scholars",
  },
};

export default function AdmissionFlowchart() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-white text-neutral-900 border-b border-black/10">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header with Editorial Restraint */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-800 font-semibold">
              The Enrolment Continuum
            </span>
          </div>
          <h2 className="text-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950">
            Four Steps from Inquiry to Enrolment.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
            A transparent, dignified admissions journey designed to respect students&apos; time, eliminate administrative ambiguity, and provide immediate clarity on seat allocation and scholarship claims.
          </p>
        </div>

        {/* The 4-Stage Architectural Progression */}
        <div className="space-y-24 divide-y divide-black/10">
          {ADMISSION_STEPS.map((step, idx) => {
            const visual = STAGE_IMAGES[step.stepNumber] || STAGE_IMAGES["01"];
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={step.stepNumber}
                className={`pt-20 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text & Specification Column */}
                <div
                  className={`lg:col-span-7 space-y-8 ${
                    isReversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-editorial text-6xl sm:text-7xl md:text-8xl font-bold text-neutral-300 select-none">
                        {step.stepNumber}
                      </span>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold block">
                          Phase {step.stepNumber} // {step.kicker}
                        </span>
                        <h3 className="text-editorial text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-neutral-700 text-base md:text-lg font-light leading-relaxed">
                      {step.summary}
                    </p>
                  </div>

                  {/* Requirements Ledger */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono tracking-wider uppercase text-neutral-400 font-semibold block">
                      Stage Checkpoints & Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border-t border-black/10 pt-3">
                      {step.requirements.map((req, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs text-neutral-700 font-light leading-relaxed"
                        >
                          <span className="font-mono text-emerald-700 text-xs font-bold mt-0.5">
                            —
                          </span>
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Details Meta */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/10 text-xs font-mono">
                    <div className="space-y-0.5">
                      <span className="text-neutral-400 uppercase text-[10px] tracking-wider">
                        Operating Window
                      </span>
                      <p className="text-neutral-900 font-semibold">
                        {step.timeline}
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-neutral-400 uppercase text-[10px] tracking-wider">
                        Campus Location
                      </span>
                      <p className="text-neutral-900 font-semibold">
                        {step.location}
                      </p>
                    </div>
                  </div>

                  {/* Editorial Note */}
                  <div className="p-5 rounded-2xl bg-[#f6f6f3] border-l-2 border-emerald-600 text-xs text-neutral-700 font-light leading-relaxed">
                    <strong className="font-mono text-[10px] uppercase tracking-wider text-emerald-900 block mb-1 font-semibold">
                      Institutional Advisory:
                    </strong>
                    {step.tips}
                  </div>
                </div>

                {/* Editorial Visual Column */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-xl border border-black/10 group">
                    <Image
                      src={visual.src}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-300 block mb-0.5">
                        On-Site Coordinate
                      </span>
                      <p className="text-xs font-light text-white/90">
                        {visual.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
