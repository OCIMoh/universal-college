"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FOCUS_AREAS = [
  { id: "academic", label: "Strong Academic Foundations", icon: "school" },
  { id: "practical", label: "Practical & Application Learning", icon: "precision_manufacturing" },
  { id: "skill", label: "Skill & Technical Development", icon: "handyman" },
  { id: "digital", label: "Digital Awareness & Modern Tools", icon: "terminal" },
  { id: "communication", label: "Communication & Articulation", icon: "forum" },
  { id: "creativity", label: "Creativity & Lateral Thinking", icon: "lightbulb" },
  { id: "leadership", label: "Leadership & Initiative", icon: "military_tech" },
  { id: "teamwork", label: "Teamwork & Collaboration", icon: "groups" },
  { id: "sports", label: "Sports & Physical Fitness", icon: "sports_score" },
  { id: "cultural", label: "Cultural Heritage & Arts", icon: "theater_comedy" },
  { id: "social", label: "Social Responsibility & Ethics", icon: "volunteer_activism" },
  { id: "career", label: "Career & Employment Readiness", icon: "work" },
  { id: "lifelong", label: "Lifelong Learning Mindset", icon: "all_inclusive" },
];

export default function WelcomeFocusSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".focus-pill",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".focus-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 px-6 md:px-12 bg-[#f9f9f7] text-[#1a1a1a] border-b border-black/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
            Institutional Genesis • Dashmesh Charitable Trust
          </span>
        </div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-editorial text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
              Welcome to <br />
              <span className="italic text-emerald-900">Universal Campus</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-snug mb-4">
              Empowering Education. Inspiring Excellence. Building Futures.
            </p>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl">
              Established under the visionary leadership of <strong>Dashmesh Charitable Trust</strong>, founded under the guidance of <strong>S. Baljeet Singh</strong> and <strong>S. Veerinder Singh</strong>, Universal College brings together seasoned educationists, administrators, and industrialists with a shared vision of transforming education across Patran and surrounding rural and semi-urban regions of Punjab.
            </p>
          </div>

          <div className="lg:col-span-5 bg-black/[0.03] p-8 rounded-2xl border border-black/10 shadow-sm">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block mb-2">
              Our Core Creed
            </span>
            <blockquote className="text-editorial text-2xl md:text-3xl text-neutral-900 font-bold mb-4 leading-tight">
              “Empowering Minds. Building Skills. Shaping Futures.”
            </blockquote>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We focus on making higher education accessible, career-oriented, and directly aligned with the evolving opportunities of modern industry, technology, and society.
            </p>
          </div>
        </div>

        {/* 13 Focus Points Checklist Grid */}
        <div className="pt-8 border-t border-black/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 font-semibold block mb-1">
                Curricular Architecture
              </span>
              <h3 className="text-editorial text-2xl md:text-3xl font-bold">
                Our Educational Approach Focuses On:
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              13 Pillars of Student Development
            </span>
          </div>

          <div className="focus-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {FOCUS_AREAS.map((item, index) => (
              <div
                key={item.id}
                className="focus-pill group flex items-center gap-3 p-3 rounded-xl bg-white border border-black/10 hover:border-emerald-600/50 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {/* Google Material Symbol Icon in Sleek Container */}
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-300">
                  <span className="material-symbols-outlined text-[20px] text-emerald-800 group-hover:text-white transition-colors duration-300 select-none">
                    {item.icon}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-neutral-800 group-hover:text-emerald-900 transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    Pillar {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
