"use client";

import { useState } from "react";
import { INFRASTRUCTURE_PHILOSOPHY } from "@/data/facilities";

export default function InfrastructureManifesto() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full bg-[#0a0a0c] text-white py-20 md:py-28 px-6 md:px-12 border-b border-white/10 overflow-hidden">
      {/* Subtle ambient architectural grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-x-8 top-0 bottom-0 border-x border-white/[0.03] pointer-events-none hidden lg:block" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">
              <span>Section 01</span>
              <span className="text-white/20">•</span>
              <span>Development Framework</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-white leading-tight">
              Five Architectural Priorities
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/60 font-sans max-w-md leading-relaxed">
            The guiding spatial philosophy of Universal College Patran: expanding physical scale while modernising learning technologies, ensuring absolute physical inclusivity, and stewarding green equilibrium.
          </p>
        </div>

        {/* 5 Priorities Grid / Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Selector List */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {INFRASTRUCTURE_PHILOSOPHY.map((pillar, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={pillar.number}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-5 transition-all duration-300 relative border ${
                    isActive
                      ? "bg-white/[0.06] border-emerald-500/40 text-white shadow-[0_0_30px_rgba(16,185,129,0.08)]"
                      : "bg-white/[0.015] border-white/5 text-white/60 hover:text-white hover:bg-white/[0.03] hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs ${
                          isActive ? "text-emerald-400 font-bold" : "text-white/40"
                        }`}
                      >
                        [{pillar.number}]
                      </span>
                      <div>
                        <h3 className="font-serif text-lg md:text-xl font-normal tracking-wide">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-white/40 font-mono mt-0.5">
                          {pillar.principle}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`font-mono text-xs px-2 py-0.5 rounded ${
                          isActive
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "text-white/30"
                        }`}
                      >
                        {pillar.metric}
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Focus Sheet */}
          <div className="lg:col-span-7 bg-white/[0.025] border border-white/10 p-8 md:p-12 relative flex flex-col justify-between min-h-[440px]">
            {/* Architectural Grid Watermark */}
            <div className="absolute top-6 right-8 font-mono text-6xl md:text-8xl font-thin text-white/[0.04] select-none pointer-events-none">
              {INFRASTRUCTURE_PHILOSOPHY[activeIdx].number}
            </div>

            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
                <span>Priority {INFRASTRUCTURE_PHILOSOPHY[activeIdx].number}</span>
                <span className="text-white/20">/</span>
                <span>Dashmesh Master Plan</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-serif text-white font-normal mb-3">
                {INFRASTRUCTURE_PHILOSOPHY[activeIdx].title} — {INFRASTRUCTURE_PHILOSOPHY[activeIdx].principle}
              </h3>

              <div className="w-16 h-0.5 bg-emerald-500/60 my-6" />

              <p className="text-base md:text-lg text-white/80 font-sans leading-relaxed max-w-xl">
                {INFRASTRUCTURE_PHILOSOPHY[activeIdx].description}
              </p>
            </div>

            {/* Bottom Metric Callout */}
            <div className="pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-white/40 block mb-1">
                  Benchmarked Target Metric
                </span>
                <span className="font-serif text-3xl md:text-4xl text-emerald-400">
                  {INFRASTRUCTURE_PHILOSOPHY[activeIdx].metric}
                </span>
              </div>
              <div className="sm:text-right">
                <span className="text-xs font-mono text-white/50 block">
                  {INFRASTRUCTURE_PHILOSOPHY[activeIdx].metricLabel}
                </span>
                <span className="text-[11px] font-mono text-white/30 block mt-0.5">
                  Universal College Campus Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
