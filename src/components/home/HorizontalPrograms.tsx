"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COURSE_DETAILS, CourseDetail } from "@/data/courses";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalProgramsProps {
  onSelectCourse: (course: CourseDetail) => void;
}

export default function HorizontalPrograms({ onSelectCourse }: HorizontalProgramsProps) {
  const horizontalWrapperRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (horizontalRef.current && horizontalWrapperRef.current) {
        const sections = gsap.utils.toArray(".horizontal-panel");
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalWrapperRef.current,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            end: () => "+=" + (horizontalRef.current?.offsetWidth || window.innerWidth * 2),
          },
        });
      }
    }, horizontalWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
      <section
        ref={horizontalWrapperRef}
        className="h-screen flex items-center overflow-hidden bg-[#f9f9f7]"
      >
        <div ref={horizontalRef} className="horizontal-scroll-container h-full w-[300vw]">
          {/* Panel 1: MRSPTU */}
          <div className="horizontal-panel w-screen h-full flex flex-col md:flex-row items-center justify-center p-12 gap-12">
            <div className="w-full md:w-1/2 h-[50vh] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/assets/campus/college-lab-students.webp" alt="Computer Lab" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  Degree & University Programs
                </span>
                <span className="text-xs text-gray-500 font-medium">Click any course for details</span>
              </div>
              <h3 className="text-editorial text-4xl md:text-5xl font-bold mb-6">MRSPTU Affiliated</h3>
              <ul className="space-y-3 text-lg md:text-xl">
                {[
                  { id: "bca", name: "BCA", duration: "3 Years", tag: "Hot Program" },
                  { id: "msc_cs", name: "M.Sc Computer Science", duration: "2 Years", tag: "Postgrad" },
                  { id: "ba_cs", name: "B.A Computer Science", duration: "3 Years", tag: "Punjabi/Eng" },
                  { id: "cmlt", name: "CMLT", duration: "1 Year", tag: "Clinical Lab" },
                  { id: "nursing_assistant", name: "Nursing Assistant", duration: "1 Year", tag: "Healthcare" },
                ].map((item) => (
                  <li key={item.id} className="border-b border-black/10 pb-2.5">
                    <button
                      onClick={() => onSelectCourse(COURSE_DETAILS[item.id as keyof typeof COURSE_DETAILS])}
                      aria-label={`View details for ${item.name}`}
                      className="w-full group flex items-center justify-between cursor-pointer transition-all text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <strong className="group-hover:text-emerald-700 transition-colors">{item.name}</strong>
                        <span className="text-sm opacity-60">({item.duration})</span>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-all font-medium">
                        {item.tag} →
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Panel 2: ITI */}
          <div className="horizontal-panel w-screen h-full flex flex-col md:flex-row items-center justify-center p-12 gap-12 bg-[#1a1a1a] text-[#f9f9f7]">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  NCVT / PSBTE Govt. Certified Trades
                </span>
                <span className="text-xs text-white/50 font-medium">Click to inspect syllabus</span>
              </div>
              <h3 className="text-editorial text-4xl md:text-5xl font-bold mb-6 text-white">Universal ITI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base">
                {[
                  { id: "electrician", name: "Electrician", dur: "2 Yrs" },
                  { id: "civil_draughtsman", name: "Civil Draughtsman", dur: "2 Yrs" },
                  { id: "plumber", name: "Plumber", dur: "1 Yr" },
                  { id: "mech_diesel", name: "Mech Diesel", dur: "1 Yr" },
                  { id: "copa", name: "COPA", dur: "1 Yr" },
                  { id: "welder", name: "Welder", dur: "1 Yr" },
                  { id: "fashion_design", name: "Fashion Design", dur: "1 Yr" },
                ].map((trade) => (
                  <button
                    key={trade.id}
                    onClick={() => onSelectCourse(COURSE_DETAILS[trade.id as keyof typeof COURSE_DETAILS])}
                    aria-label={`View details for ${trade.name}`}
                    className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 cursor-pointer flex items-center justify-between transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        {trade.name}
                      </div>
                      <span className="text-xs text-white/50">{trade.dur}</span>
                    </div>
                    <span className="text-xs text-white/40 group-hover:text-white transition-colors">View →</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[50vh] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/assets/campus/iti-diesel.webp" alt="ITI Diesel" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" />
            </div>
          </div>

          {/* Panel 3: NIOS / POU */}
          <div className="horizontal-panel w-screen h-full flex flex-col md:flex-row items-center justify-center p-12 gap-12">
            <div className="w-full md:w-1/2 h-[50vh] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/assets/campus/care-beauty-salon.webp" alt="Salon" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                  National Skill & Open Univ Wing
                </span>
                <span className="text-xs text-gray-500 font-medium">Tap for eligibility</span>
              </div>
              <h3 className="text-editorial text-4xl md:text-5xl font-bold mb-6">NIOS & Open University</h3>
              <ul className="space-y-3 text-lg md:text-xl">
                {[
                  { id: "beauty_wellness", name: "Beauty & Wellness", dur: "1 Year" },
                  { id: "health_worker", name: "Community Health Worker", dur: "1 Year" },
                  { id: "elderly_care", name: "Care of Elderly", dur: "1 Year" },
                  { id: "office_automation", name: "Office Automation & E-Gov", dur: "Diploma" },
                  { id: "horticulture", name: "Horticulture", dur: "Diploma" },
                ].map((item) => (
                  <li key={item.id} className="border-b border-black/10 pb-2.5">
                    <button
                      onClick={() => onSelectCourse(COURSE_DETAILS[item.id as keyof typeof COURSE_DETAILS])}
                      aria-label={`View details for ${item.name}`}
                      className="w-full group flex items-center justify-between cursor-pointer transition-all text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <strong className="group-hover:text-amber-700 transition-colors">{item.name}</strong>
                        <span className="text-sm opacity-60">({item.dur})</span>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 group-hover:bg-amber-100 group-hover:text-amber-800 transition-all font-medium">
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
