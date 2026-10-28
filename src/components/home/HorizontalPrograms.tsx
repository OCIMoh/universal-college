"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COURSE_DETAILS, CourseDetail, SHOW_ITI,SHOW_NIOS } from "@/data/courses";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalProgramsProps {
  onSelectCourse: (course: CourseDetail) => void;
}

export default function HorizontalPrograms({ onSelectCourse }: HorizontalProgramsProps) {
  const horizontalWrapperRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const triggerInstanceRef = useRef<ScrollTrigger | null>(null);

  const scrollToPanel = (panelIndex: number) => {
    const st = triggerInstanceRef.current;
    if (!st) return;

    const holdDistance = 225;
    const scrollTravel = st.end - st.start - holdDistance;
    let targetY = st.start;

    const maxIndex = SHOW_ITI ? 3 : 2;
    const clampedIndex = Math.min(panelIndex, maxIndex);

    if (clampedIndex > 0) {
      targetY = st.start + holdDistance + scrollTravel * (clampedIndex / maxIndex);
    }

    if (typeof window !== "undefined" && window.lenisInstance) {
      window.lenisInstance.scrollTo(targetY, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (typeof window !== "undefined") {
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (horizontalRef.current && horizontalWrapperRef.current) {
        const sections = gsap.utils.toArray<HTMLElement>(".horizontal-panel");
        const totalPanels = sections.length;
        
        // Dedicated scroll buffer (225px - decreased by 75%) so the client has a brief pause before horizontal movement
        const holdDistance = 225;
        const scrollDistance = () => window.innerWidth * (totalPanels - 1) + holdDistance;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: horizontalWrapperRef.current,
            pin: true,
            pinSpacing: true,
            start: "top top",
            scrub: 1,
            invalidateOnRefresh: true,
            end: () => `+=${scrollDistance()}`,
          },
        });

        // 1. Brief stationary hold on the headline during initial scroll distance (0.375s timeline duration)
        tl.to({}, { duration: 0.375 });

        // 2. Then smoothly slide the panels horizontally
        tl.to(sections, {
          xPercent: -100 * (totalPanels - 1),
          ease: "none",
          duration: totalPanels - 1,
        });

        triggerInstanceRef.current = tl.scrollTrigger ?? null;
      }
    }, horizontalWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="academic-pathways"
      ref={horizontalWrapperRef}
      className="relative h-screen w-full flex items-center overflow-hidden bg-[#0c0d12]"
    >
      <div ref={horizontalRef} className={`horizontal-scroll-container h-full ${SHOW_ITI ? "w-[400vw]" : "w-[300vw]"} flex flex-row`}>
        
        {/* ================= PANEL 0: ARCHITECTURAL INTRO COVER ================= */}
        <div className="horizontal-panel w-screen h-full shrink-0 relative flex items-center p-8 sm:p-12 md:p-20 overflow-hidden">
          {/* Authentic Campus Paths Background with Directional Architectural Gradient */}
          <Image
            src="/assets/campus/fork-path.webp"
            alt="Campus Paths"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.32] contrast-[1.15] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d12]/95 via-[#0c0d12]/80 to-black/30 pointer-events-none" />

          {/* Left-Aligned Architectural Ledger */}
          <div className="relative z-10 max-w-3xl space-y-6 md:space-y-8 text-white">
            {/* Top Coordinates & Chapter Marker */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 max-w-2xl font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white/50">
              <span className="text-emerald-400 font-semibold">
                INDEX // 02 • THE ACADEMIC REGISTER
              </span>
              <span>
                30.0167° N, 76.0667° E • PATRAN CAMPUS
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-4">
              <h2 className="text-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                {SHOW_ITI ? "15+ Courses." : "25+ Programmes."}<br />
                <span className="text-white/80">{SHOW_ITI ? "4 Pathways. 1 Campus." : "3 Pathways. 1 Campus."}</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70 font-light max-w-xl font-sans leading-relaxed">
                {SHOW_ITI
                  ? "From state university degrees to certified industrial trades and flexible open learning—four structured pedagogical streams unified under one institutional roof."
                  : "From state university degrees to flexible open university diplomas and certified vocational skills—three structured pedagogical streams unified under one institutional roof."}
              </p>
            </div>

            {/* Architectural Pathway Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl pt-1">
              <button
                type="button"
                onClick={() => scrollToPanel(1)}
                className="text-left p-3.5 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-emerald-500/40 hover:bg-white/[0.08] transition-all cursor-pointer group focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                    01 // REGULAR DEGREES
                  </span>
                  <span className="text-xs text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">→</span>
                </div>
                <strong className="text-xs sm:text-sm font-semibold text-white/95 block mt-0.5">
                  MRSPTU Affiliated
                </strong>
                <span className="text-[11px] text-white/50 block font-light">
                  BCA, B.Com, B.Sc (Fashion), PGDCA & B.A.
                </span>
              </button>

              {SHOW_ITI && (
                <button
                  type="button"
                  onClick={() => scrollToPanel(2)}
                  className="text-left p-3.5 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-emerald-500/40 hover:bg-white/[0.08] transition-all cursor-pointer group focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                      02 // VOCATIONAL TRADES
                    </span>
                    <span className="text-xs text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">→</span>
                  </div>
                  <strong className="text-xs sm:text-sm font-semibold text-white/95 block mt-0.5">
                    Universal ITI (NCVT)
                  </strong>
                  <span className="text-[11px] text-white/50 block font-light">
                    Electrician, Diesel, Plumber, Welder & Fashion
                  </span>
                </button>
              )}

              <button
                type="button"
                onClick={() => scrollToPanel(SHOW_ITI ? 3 : 2)}
                className="text-left p-3.5 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-emerald-500/40 hover:bg-white/[0.08] transition-all cursor-pointer group focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                    {SHOW_ITI ? "03 // OPEN LEARNING" : "02 // OPEN & SKILL PATHWAYS"}
                  </span>
                  <span className="text-xs text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">→</span>
                </div>
                <strong className="text-xs sm:text-sm font-semibold text-white/95 block mt-0.5">
                  {SHOW_NIOS ? "PSOU & NIOS Wing" : "PSOU Open University"}
                </strong>
                <span className="text-[11px] text-white/50 block font-light">
                  {SHOW_NIOS ? "Bridge Diplomas & Skill Certificates" : "Flexible State Degrees & Diplomas"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollToPanel(1)}
                className="text-left p-3.5 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-emerald-500/40 hover:bg-white/[0.08] transition-all cursor-pointer group focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                    {SHOW_ITI ? "04 // SCHOLARSHIPS" : "03 // SCHOLARSHIPS"}
                  </span>
                  <span className="text-xs text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">→</span>
                </div>
                <strong className="text-xs sm:text-sm font-semibold text-white/95 block mt-0.5">
                  Post-Matric SC Scheme
                </strong>
                <span className="text-[11px] text-white/50 block font-light">
                  100% Tuition Fee Waiver Portal
                </span>
              </button>
            </div>

            {/* Interaction Cue */}
            <div className="flex items-center gap-3 pt-2 font-mono text-xs text-white/50">
              <span className="text-emerald-400 font-semibold">{SHOW_ITI ? "[01 / 04]" : "[01 / 03]"}</span>
              <span className="uppercase tracking-widest text-[11px]">
                Scroll horizontally to explore faculties
              </span>
              <span className="text-emerald-400">→</span>
            </div>
          </div>
        </div>

        {/* ================= PANEL 1: MRSPTU DEGREES ================= */}
        <div className="horizontal-panel w-screen h-full shrink-0 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-10 md:gap-14 bg-[#f9f9f7] text-[#1a1a1a]">
          <div className="w-full md:w-1/2 h-[45vh] md:h-[55vh] relative rounded-3xl overflow-hidden shadow-2xl border border-black/10">
            <Image
              src="/assets/campus/college-lab-students.webp"
              alt="Computer Lab"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono">
                Pathway 01 • Regular University Degrees
              </span>
              <span className="text-xs text-gray-500 font-medium">Click to inspect</span>
            </div>
            <h3 className="text-editorial text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-neutral-900">
              MRSPTU Affiliated
            </h3>
            <ul className="space-y-2.5 text-base md:text-lg">
              {[
                { id: "bca", name: "BCA", duration: "3 Years", tag: "Hot Program" },
                { id: "msc_cs", name: "M.Sc Computer Science", duration: "2 Years", tag: "Postgrad" },
                { id: "ba_cs", name: "B.A Computer Science", duration: "3 Years", tag: "Punjabi/Eng" },
                { id: "cmlt", name: "CMLT", duration: "1 Year", tag: "Clinical Lab" },
                { id: "nursing_assistant", name: "Nursing Assistant", duration: "1 Year", tag: "Healthcare" },
              ].map((item) => (
                <li key={item.id} className="border-b border-black/10 pb-2">
                  <button
                    onClick={() => onSelectCourse(COURSE_DETAILS[item.id as keyof typeof COURSE_DETAILS])}
                    aria-label={`View details for ${item.name}`}
                    className="w-full group flex items-center justify-between cursor-pointer transition-all text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <strong className="group-hover:text-emerald-700 transition-colors font-semibold">{item.name}</strong>
                      <span className="text-xs text-neutral-500">({item.duration})</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-all font-mono font-medium">
                      {item.tag} →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= PANEL 2: UNIVERSAL ITI ================= */}
        {SHOW_ITI && (
          <div className="horizontal-panel w-screen h-full shrink-0 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-10 md:gap-14 bg-[#111217] text-[#f9f9f7]">
            <div className="w-full md:w-1/2 max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                  Pathway 02 • NCVT / PSBTE Certified
                </span>
                <span className="text-xs text-white/50 font-medium">Click for trade syllabus</span>
              </div>
              <h3 className="text-editorial text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white">
                Universal ITI Trades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                {[
                  { id: "iti_electrician", name: "Electrician Trade", dur: "2 Yrs" },
                  { id: "iti_diesel", name: "Mechanic Diesel", dur: "1 Yr" },
                  { id: "iti_plumber", name: "Plumber Trade", dur: "1 Yr" },
                  { id: "iti_welder", name: "Welder (Gas & Elec)", dur: "1 Yr" },
                  { id: "iti_fashion", name: "Fashion Design", dur: "1 Yr" },
                ].map((trade) => (
                  <button
                    key={trade.id}
                    onClick={() => onSelectCourse(COURSE_DETAILS[trade.id as keyof typeof COURSE_DETAILS])}
                    aria-label={`View details for ${trade.name}`}
                    className="w-full text-left p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 cursor-pointer flex items-center justify-between transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors text-xs sm:text-sm">
                        {trade.name}
                      </div>
                      <span className="text-[11px] font-mono text-white/50">{trade.dur}</span>
                    </div>
                    <span className="text-xs text-white/40 group-hover:text-white transition-colors">→</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[45vh] md:h-[55vh] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/assets/campus/iti-diesel.webp"
                alt="ITI Diesel Workshop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-85"
              />
            </div>
          </div>
        )}

        {/* ================= PANEL 3: OPEN UNIVERSITY & VOCATIONAL ================= */}
        <div className="horizontal-panel w-screen h-full shrink-0 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-10 md:gap-14 bg-[#f9f9f7] text-[#1a1a1a]">
          <div className="w-full md:w-1/2 h-[45vh] md:h-[55vh] relative rounded-3xl overflow-hidden shadow-2xl border border-black/10">
            <Image
              src="/assets/campus/care-beauty-salon.webp"
              alt="Beauty & Wellness Salon"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-mono">
                {SHOW_NIOS
                  ? (SHOW_ITI ? "Pathways 03 & 04 • Skill & Flexible Learning" : "Pathway 02 • Open University & Skill Certifications")
                  : "Pathway 02 • Open University State Charter"}
              </span>
              <span className="text-xs text-gray-500 font-medium">Tap for eligibility</span>
            </div>
            <h3 className="text-editorial text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-neutral-900">
              {SHOW_NIOS ? "NIOS & Open University" : "PSOU Open University"}
            </h3>
            <ul className="space-y-2.5 text-base md:text-lg">
              {[
                { id: "psou_office_auto", name: "Office Automation & E-Gov", dur: "1 Year" },
                { id: "psou_nanny", name: "Diploma in Nanny Care", dur: "1 Year" },
                ...(SHOW_NIOS
                  ? [
                      { id: "nios_community_health", name: "Community Health Worker", dur: "1 Year" },
                      { id: "nios_elderly_care", name: "Care of Elderly", dur: "1 Year" },
                    ]
                  : [
                      { id: "psou_bca", name: "BCA (PSOU Flexible)", dur: "4 Years" },
                      { id: "psou_bcom", name: "B.Com Accounting & Taxation", dur: "4 Years" },
                    ]),
                { id: "psou_beauty", name: "Beauty & Wellness Certificate", dur: "1 Year" },
                { id: "psou_ai_ds", name: "Diploma in AI & Data Science", dur: "1 Year" },
              ].map((item) => (
                <li key={item.id} className="border-b border-black/10 pb-2">
                  <button
                    onClick={() => onSelectCourse(COURSE_DETAILS[item.id as keyof typeof COURSE_DETAILS])}
                    aria-label={`View details for ${item.name}`}
                    className="w-full group flex items-center justify-between cursor-pointer transition-all text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <strong className="group-hover:text-amber-700 transition-colors font-semibold">{item.name}</strong>
                      <span className="text-xs text-neutral-500">({item.dur})</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 group-hover:bg-amber-100 group-hover:text-amber-800 transition-all font-mono font-medium">
                      Inspect →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
