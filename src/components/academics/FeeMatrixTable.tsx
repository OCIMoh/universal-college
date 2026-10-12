"use client";

import type { CourseDetail } from "@/data/courses";

interface FeeMatrixTableProps {
  courses: CourseDetail[];
  onSelectCourse: (course: CourseDetail) => void;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  startIndex?: number;
  endIndex?: number;
  totalFilteredCount?: number;
}

export default function FeeMatrixTable({
  courses,
  onSelectCourse,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  startIndex = 1,
  endIndex = 10,
  totalFilteredCount = 30,
}: FeeMatrixTableProps) {
  if (courses.length === 0) {
    return (
      <div className="w-full py-20 text-center border-y border-black/10 space-y-3">
        <span className="font-mono text-3xl text-neutral-300 block select-none">
          ∅
        </span>
        <h4 className="text-editorial text-2xl font-bold text-neutral-800">
          No programmes match your current filters.
        </h4>
        <p className="text-xs text-neutral-500 font-light max-w-md mx-auto">
          Please adjust your qualification criteria, clear the search query, or select a different university pathway.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* ================= DESKTOP EDITORIAL CURRICULAR ARCHIVE ================= */}
      <div className="hidden lg:block w-full">
        {/* Table Header Ledger */}
        <div className="grid grid-cols-12 pb-4 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 border-b border-black/15">
          <div className="col-span-5">Programme &amp; Degree Title</div>
          <div className="col-span-2">Affiliation &amp; Duration</div>
          <div className="col-span-2">Minimum Eligibility</div>
          <div className="col-span-2">Annual Approved Fee</div>
          <div className="col-span-1 text-right">Action</div>
        </div>

        {/* Table Body Rows */}
        <div className="divide-y divide-black/10">
          {courses.map((course, idx) => {
            const rowNumber = (startIndex - 1) + idx + 1;
            return (
              <div
                key={course.id}
                className="grid grid-cols-12 py-7 items-center hover:bg-black/[0.015] transition-colors duration-200 group px-2 rounded-xl"
              >
                {/* Title & Degree */}
                <div className="col-span-5 pr-6 space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-300 group-hover:text-emerald-700 transition-colors">
                      {rowNumber < 10 ? `0${rowNumber}` : rowNumber}
                    </span>
                    <h3 className="font-bold text-lg md:text-xl text-neutral-950 group-hover:text-emerald-950 transition-colors leading-snug">
                      {course.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 pl-7 text-[11px] font-mono text-neutral-500">
                    <span className="uppercase">{course.degreeLevel}</span>
                    <span>•</span>
                    <span>{course.intake || "Seats Open"}</span>
                    {course.isHot && (
                      <>
                        <span>•</span>
                        <span className="text-emerald-800 font-semibold uppercase tracking-wider">
                          High Demand
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Affiliation & Duration */}
                <div className="col-span-2 pr-4 space-y-1 text-xs font-mono">
                  <span className="font-semibold text-neutral-900 block truncate">
                    {course.category} Pathway
                  </span>
                  <span className="text-neutral-500 block">
                    {course.duration}
                  </span>
                </div>

                {/* Eligibility */}
                <div className="col-span-2 pr-4 text-xs font-light text-neutral-700 leading-relaxed">
                  <p className="line-clamp-2">{course.eligibility}</p>
                </div>

                {/* Official Annual Fee */}
                <div className="col-span-2 space-y-1">
                  <span className="font-mono font-bold text-neutral-950 text-base md:text-lg block tracking-tight">
                    {course.annualFee || "Univ. Norms"}
                  </span>
                  {course.pmssEligible ? (
                    <span className="inline-block text-[10px] font-mono text-emerald-800 font-semibold tracking-wider uppercase">
                      ✦ 100% PMSS SC Waiver
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">
                      Per Academic Session
                    </span>
                  )}
                </div>

                {/* Syllabus Action Trigger */}
                <div className="col-span-1 text-right">
                  <button
                    type="button"
                    onClick={() => onSelectCourse(course)}
                    className="px-4 py-2 rounded-full border border-black/15 hover:border-black hover:bg-neutral-950 hover:text-white font-mono text-xs font-semibold transition-all duration-200 cursor-pointer inline-flex items-center gap-1 group-hover:border-black/40"
                  >
                    <span>Info</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE / TABLET EDITORIAL LEDGER ================= */}
      <div className="lg:hidden divide-y divide-black/10">
        {courses.map((course, idx) => {
          const rowNumber = (startIndex - 1) + idx + 1;
          return (
            <div key={course.id} className="py-6 first:pt-0 space-y-3">
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-xs text-neutral-400">
                    {rowNumber < 10 ? `0${rowNumber}` : rowNumber}
                  </span>
                  <h3 className="font-bold text-lg text-neutral-950 leading-snug">
                    {course.name}
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 flex-shrink-0">
                  {course.category}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 pl-6">
                <span>{course.duration}</span>
                <span>•</span>
                <span>{course.degreeLevel}</span>
              </div>

              <p className="text-xs text-neutral-600 font-light leading-relaxed pl-6">
                <strong className="font-mono font-medium text-neutral-900 uppercase text-[10px] block mb-0.5">
                  Eligibility:
                </strong>
                {course.eligibility}
              </p>

              <div className="pl-6 pt-2 flex items-center justify-between border-t border-black/5">
                <div>
                  <span className="font-mono font-bold text-neutral-950 text-base">
                    {course.annualFee || "Univ. Norms"}
                  </span>
                  {course.pmssEligible && (
                    <span className="block text-[10px] font-mono text-emerald-800 font-semibold uppercase">
                      ✦ 100% SC Fee Waiver
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectCourse(course)}
                  className="px-4 py-2 rounded-full bg-neutral-950 text-white font-mono text-xs font-semibold transition-all cursor-pointer"
                >
                  Syllabus &amp; Detail →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= EDITORIAL PAGINATION CONTROLS ================= */}
      {totalPages > 1 && onPageChange && (
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs font-mono text-neutral-500">
            Showing <span className="font-semibold text-neutral-900">{startIndex}</span> to{" "}
            <span className="font-semibold text-neutral-900">{endIndex}</span> of{" "}
            <span className="font-semibold text-neutral-900">{totalFilteredCount}</span> programmes
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              className="px-4 py-2 rounded-full border border-black/15 font-mono text-xs font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-950 hover:text-white cursor-pointer"
            >
              ← Prev
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => onPageChange(p)}
                  className={`w-8 h-8 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                    p === currentPage
                      ? "bg-neutral-950 text-white shadow-sm"
                      : "text-neutral-600 hover:text-neutral-950 hover:bg-black/5"
                  }`}
                >
                  0{p}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              className="px-4 py-2 rounded-full border border-black/15 font-mono text-xs font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-950 hover:text-white cursor-pointer"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
