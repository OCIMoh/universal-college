"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SHOW_ITI } from "@/data/courses";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { number: "2014", label: "Founded", sub: "Dashmesh Charitable Trust" },
  { number: SHOW_ITI ? "15+" : "25+", label: "Programmes", sub: SHOW_ITI ? "Degree · ITI · Open · Skill" : "Degree · Open · Skill" },
  { number: "100%", label: "SC Scholarship", sub: "PMSS Fee Waiver", accent: true },
  { number: "64+", label: "Faculty & Staff", sub: "Teaching & Administrative" },
  { number: "16", label: "Campus Facilities", sub: "Labs · Library · Stadium" },
];

export default function HomeStatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the number counter feeling — line by line
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.09,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
      // Animate the dividing line growing
      gsap.fromTo(
        ".stat-divider",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 md:px-12 bg-white border-b border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial label */}
        <div className="flex items-center gap-2 mb-10">
          <span className="h-px flex-1 bg-black/10 stat-divider origin-left" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 font-semibold shrink-0">
            Universal College · By The Numbers
          </span>
          <span className="h-px flex-1 bg-black/10 stat-divider origin-right" />
        </div>

        {/* Stats — pure typography, no cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 divide-x divide-black/10">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="stat-item px-6 py-4 first:pl-0 last:pr-0 group"
            >
              {/* Number */}
              <div
                className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-3 font-mono transition-colors duration-300 ${
                  stat.accent
                    ? "text-emerald-600 group-hover:text-emerald-500"
                    : "text-neutral-900 group-hover:text-emerald-700"
                }`}
              >
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-[11px] font-semibold tracking-widest uppercase text-neutral-900 mb-1">
                {stat.label}
              </div>

              {/* Sub */}
              <div className="text-xs text-neutral-400 font-light leading-relaxed">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-lg">
            Measuring a decade of institutional impact across Patran, Patiala district, and Punjab since 2014.
          </p>
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-300">
            Session 2026–27
          </span>
        </div>
      </div>
    </section>
  );
}
