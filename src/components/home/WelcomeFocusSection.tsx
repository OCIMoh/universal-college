"use client";

import { useEffect, useRef, useState } from "react";
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
  // Hidden by default — revealed on expand
  { id: "leadership", label: "Leadership & Initiative", icon: "military_tech" },
  { id: "teamwork", label: "Teamwork & Collaboration", icon: "groups" },
  { id: "sports", label: "Sports & Physical Fitness", icon: "sports_score" },
  { id: "cultural", label: "Cultural Heritage & Arts", icon: "theater_comedy" },
  { id: "social", label: "Social Responsibility & Ethics", icon: "volunteer_activism" },
  { id: "career", label: "Career & Employment Readiness", icon: "work" },
  { id: "lifelong", label: "Lifelong Learning Mindset", icon: "all_inclusive" },
];

const VISIBLE_COUNT = 6;

export default function WelcomeFocusSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const isAnimating = useRef(false);

  // Scroll-triggered entrance for the first 6 cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".focus-pill-visible",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".focus-grid",
            start: "top 90%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = () => {
    if (isAnimating.current) return;
    const container = hiddenRef.current;
    if (!container) return;

    isAnimating.current = true;

    if (!expanded) {
      // Expand: measure natural height, animate from 0 → height
      container.style.display = "grid";
      const targetHeight = container.scrollHeight;
      gsap.fromTo(
        container,
        { height: 0, opacity: 0 },
        {
          height: targetHeight,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          onComplete: () => {
            container.style.height = "auto"; // let it breathe naturally
            isAnimating.current = false;
          },
        }
      );
      // Stagger-animate the hidden pills in
      gsap.fromTo(
        ".focus-pill-hidden",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.055,
          duration: 0.38,
          ease: "power2.out",
          delay: 0.1,
        }
      );
      setExpanded(true);
    } else {
      // Collapse: animate height → 0
      gsap.to(container, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => {
          container.style.display = "none";
          isAnimating.current = false;
        },
      });
      setExpanded(false);
    }
  };

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
              "Empowering Minds. Building Skills. Shaping Futures."
            </blockquote>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We focus on making higher education accessible, career-oriented, and directly aligned with the evolving opportunities of modern industry, technology, and society.
            </p>
          </div>
        </div>

        {/* 13 Focus Points — Progressive Reveal */}
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
            <span className="text-xs font-mono text-neutral-400">
              13 Core Dimensions
            </span>
          </div>

          {/* Always-visible first 6 */}
          <div className="focus-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {FOCUS_AREAS.slice(0, VISIBLE_COUNT).map((item) => (
              <FocusPill key={item.id} item={item} className="focus-pill-visible" />
            ))}
          </div>

          {/* Collapsible remaining 7 — hidden initially */}
          <div
            ref={hiddenRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 overflow-hidden"
            style={{ display: "none", height: 0, opacity: 0 }}
          >
            {/* top spacing when expanded */}
            <div className="col-span-full mt-0 md:mt-5 hidden md:block" style={{ height: "1px" }} />
            {FOCUS_AREAS.slice(VISIBLE_COUNT).map((item) => (
              <FocusPill key={item.id} item={item} className="focus-pill-hidden" />
            ))}
          </div>

          {/* Expand / Collapse toggle */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleToggle}
              className="group flex items-center gap-3 px-6 py-3 rounded-full border border-black/15 bg-white hover:border-emerald-600/60 hover:bg-emerald-50/60 transition-all duration-300 text-sm font-semibold text-neutral-700 hover:text-emerald-900 shadow-sm hover:shadow-md"
            >
              {expanded ? (
                <>
                  <span>Show less</span>
                  <span
                    className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5"
                    style={{ fontSize: "18px" }}
                  >
                    expand_less
                  </span>
                </>
              ) : (
                <>
                  <span>See all 13 dimensions</span>
                  <span
                    className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-y-0.5"
                    style={{ fontSize: "18px" }}
                  >
                    expand_more
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reusable pill card ───────────────────────────────────────────────────────
function FocusPill({
  item,
  className = "",
}: {
  item: { id: string; label: string; icon: string };
  className?: string;
}) {
  return (
    <div
      className={`${className} group flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-white border border-black/10 hover:border-emerald-600/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
    >
      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-700 group-hover:border-emerald-700 transition-all duration-300 shadow-sm">
        <span className="material-symbols-outlined text-[24px] text-emerald-800 group-hover:text-white transition-colors duration-300 select-none">
          {item.icon}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-sm md:text-[15px] font-semibold text-neutral-900 group-hover:text-emerald-950 transition-colors leading-snug block">
          {item.label}
        </span>
      </div>
    </div>
  );
}
