"use client";

import { SHOW_ITI, SHOW_NIOS } from "@/data/courses";

export type CategoryFilter = "ALL" | "MRSPTU" | "PSOU" | "NIOS" | "ITI";

interface AcademicPathwaysFilterProps {
  selectedCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  qualificationFilter: string;
  onQualificationChange: (qual: string) => void;
  totalCoursesCount: number;
  filteredCount: number;
  currentPage?: number;
  totalPages?: number;
  startIndex?: number;
  endIndex?: number;
}

const allCount = (10 + 10 + (SHOW_NIOS ? 5 : 0) + (SHOW_ITI ? 5 : 0)).toString().padStart(2, "0");

const CATEGORIES: { id: CategoryFilter; label: string; count: string; subtitle: string }[] = [
  { id: "ALL", label: "All Programmes", count: allCount, subtitle: "Universal Campus" },
  { id: "MRSPTU", label: "MRSPTU Degrees", count: "10", subtitle: "State Technical Univ" },
  { id: "PSOU", label: "PSOU Open Learning", count: "10", subtitle: "State Open Univ" },
  ...(SHOW_NIOS ? [{ id: "NIOS" as CategoryFilter, label: "NIOS Skill Courses", count: "05", subtitle: "Govt. of India" }] : []),
  ...(SHOW_ITI ? [{ id: "ITI" as CategoryFilter, label: "ITI Industrial Trades", count: "05", subtitle: "NCVT Certified" }] : []),
];

export default function AcademicPathwaysFilter({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  qualificationFilter,
  onQualificationChange,
  totalCoursesCount,
  filteredCount,
  currentPage = 1,
  totalPages = 1,
  startIndex = 1,
  endIndex = 10,
}: AcademicPathwaysFilterProps) {
  return (
    <div className="w-full space-y-8 pb-4">
      {/* Editorial Horizontal Pathways Ledger */}
      <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto pb-4 scrollbar-none border-b border-black/10">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`flex-shrink-0 text-left py-2 px-1 relative transition-colors duration-200 cursor-pointer group ${
                isActive ? "text-neutral-950 font-bold" : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-editorial text-base sm:text-lg tracking-tight">
                  {cat.label}
                </span>
                <span className="font-mono text-xs text-neutral-400 group-hover:text-emerald-700 transition-colors">
                  [{cat.count}]
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-light">
                {cat.subtitle}
              </span>

              {/* Active Underline Indicator */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-950 transition-all" />
              )}
            </button>
          );
        })}
      </div>

      {/* Minimalist Floating Underline Search & Secondary Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
        {/* Floating Underline Search */}
        <div className="relative flex-1 max-w-xl">
          <label htmlFor="course-search-input" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            Search Programme, Subject, or Career
          </label>
          <div className="relative flex items-center">
            <span className="font-mono text-neutral-400 text-sm absolute left-0 select-none">
              /
            </span>
            <input
              id="course-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="e.g. Computer Science, Nursing, Electrician, Accounting..."
              className="w-full pl-5 pr-8 py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-sm font-light focus:outline-none transition-colors placeholder:text-neutral-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-0 text-neutral-400 hover:text-neutral-800 text-xs cursor-pointer p-1"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Qualification Selector & Ledger Count */}
        <div className="flex items-center gap-6 self-start md:self-auto">
          <div className="space-y-1">
            <label htmlFor="eligibility-filter-select" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
              Entry Requirement
            </label>
            <select
              id="eligibility-filter-select"
              value={qualificationFilter}
              onChange={(e) => onQualificationChange(e.target.value)}
              className="py-2 bg-transparent border-b border-black/20 focus:border-neutral-950 text-xs font-mono font-medium text-neutral-800 focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Minimum Qualifications</option>
              <option value="10th">10th (Matriculation) Pass</option>
              <option value="12th">10+2 Any Stream Pass</option>
              <option value="Graduation">Graduate Degree Required</option>
            </select>
          </div>

          <div className="text-right pl-4 border-l border-black/10 min-w-[120px]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
              Ledger Volume
            </span>
            <span className="font-mono text-xs font-semibold text-neutral-900 block">
              {filteredCount > 0 ? `${startIndex}–${endIndex} of ${filteredCount}` : "0 / 0"}
            </span>
            {totalPages > 1 && (
              <span className="text-[10px] font-mono text-emerald-800 block font-medium">
                Page {currentPage} of {totalPages}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
