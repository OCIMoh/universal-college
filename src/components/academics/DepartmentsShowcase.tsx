"use client";

import { useState } from "react";
import Image from "next/image";
import { DEPARTMENTS_DATA, DepartmentInfo } from "@/data/departments";
import { COURSE_DETAILS, CourseDetail } from "@/data/courses";

interface DepartmentsShowcaseProps {
  onSelectCourse: (course: CourseDetail) => void;
}

export default function DepartmentsShowcase({ onSelectCourse }: DepartmentsShowcaseProps) {
  const [activeTab, setActiveTab] = useState<DepartmentInfo["id"]>("computer-it");

  const currentDept = DEPARTMENTS_DATA.find((d) => d.id === activeTab) || DEPARTMENTS_DATA[0];

  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#07070a] text-white border-y border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Manifesto Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-semibold">
              Faculties &amp; Specialized Laboratories
            </span>
          </div>
          <h2 className="text-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Seven Centers of Academic Rigor.
          </h2>
          <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
            Seven dedicated faculties combining specialized laboratory infrastructure, experienced educators, and career-driven curricula.
          </p>
        </div>

        {/* Minimalist Faculty Selector Pills - Dedicated Full Width Responsive Strip */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 sm:pb-4 sm:flex-wrap scrollbar-none border-b border-white/10">
          {DEPARTMENTS_DATA.map((dept, idx) => {
            const isActive = activeTab === dept.id;
            return (
              <button
                key={dept.id}
                type="button"
                onClick={() => setActiveTab(dept.id)}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-white text-neutral-950 font-bold shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? "text-neutral-500 font-bold" : "text-white/40"}`}>
                  0{idx + 1}
                </span>
                <span>{dept.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Masterclass Faculty Spread (Asymmetric 6-6 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Laboratory Atmosphere */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src={currentDept.bannerImage}
                alt={currentDept.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-300 font-semibold block">
                  Departmental Facility Coordinate
                </span>
                <p className="text-sm font-light text-white/90">
                  {currentDept.associatedLabs[0] || "Universal College Laboratories"}
                </p>
              </div>
            </div>

            {/* Labs & Infrastructure Ledger */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
                Dedicated Laboratory Spaces:
              </span>
              <ul className="space-y-2 text-xs font-mono text-white/80">
                {currentDept.associatedLabs.map((lab, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">—</span>
                    <span className="leading-relaxed">{lab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Academic Manifesto & Curriculum */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-emerald-400 uppercase tracking-wider font-semibold">
                  {currentDept.headOrCoordinator}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-white/50">
                  {currentDept.facultyCount} Faculty Mentors
                </span>
              </div>

              <h3 className="text-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                {currentDept.name}
              </h3>

              <p className="text-base text-emerald-200/90 font-serif italic font-light pt-1">
                “{currentDept.tagline}”
              </p>

              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed pt-2">
                {currentDept.overview}
              </p>
            </div>

            {/* Department Highlights */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-xs font-mono tracking-wider uppercase text-neutral-400 font-semibold block">
                Curricular Distinctions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {currentDept.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/80 font-light">
                    <span className="text-emerald-400 text-xs mt-0.5">•</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Offered Courses Ledger in this Faculty */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-xs font-mono tracking-wider uppercase text-neutral-400 font-semibold block">
                Programmes Administered by this Faculty:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentDept.courseIds.map((cId) => {
                  const courseObj = COURSE_DETAILS[cId];
                  if (!courseObj) return null;
                  return (
                    <button
                      key={cId}
                      type="button"
                      onClick={() => onSelectCourse(courseObj)}
                      className="px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white hover:text-neutral-950 text-white/90 text-xs font-mono font-medium border border-white/10 transition-all duration-200 cursor-pointer"
                    >
                      {courseObj.name} ({courseObj.category}) →
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
