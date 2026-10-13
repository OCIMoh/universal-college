"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  FACULTY_MEMBERS,
  DEPARTMENT_FILTER_OPTIONS,
  type FacultyMember,
  type DepartmentCategory,
} from "@/data/faculty";
import {
  Search,
  Filter,
  Grid,
  List,
  GraduationCap,
  Briefcase,
  Phone,
  Mail,
  Award,
  ShieldCheck,
  X,
  ExternalLink,
  Users,
} from "@/components/common/Icons";

export default function FacultyDirectoryClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<DepartmentCategory>("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("table");
  const [activeMemberModal, setActiveMemberModal] = useState<FacultyMember | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(15);

  // Reset to first page when filtering or searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, itemsPerPage]);

  // Filtered faculty members
  const filteredMembers = useMemo(() => {
    return FACULTY_MEMBERS.filter((member) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "all" || member.category === selectedCategory;

      if (!matchesCategory) return false;

      // Text search
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        member.name.toLowerCase().includes(q) ||
        member.designation.toLowerCase().includes(q) ||
        member.department.toLowerCase().includes(q) ||
        (member.specialization && member.specialization.toLowerCase().includes(q)) ||
        (member.qualification && member.qualification.toLowerCase().includes(q)) ||
        (member.phone && member.phone.includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  // Compute pagination slices
  const totalPages = Math.max(1, Math.ceil(filteredMembers.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredMembers.length);

  const paginatedMembers = useMemo(() => {
    return filteredMembers.slice(startIndex, endIndex);
  }, [filteredMembers, startIndex, endIndex]);

  const activeCategoryInfo = useMemo(() => {
    return (
      DEPARTMENT_FILTER_OPTIONS.find((opt) => opt.id === selectedCategory) ||
      DEPARTMENT_FILTER_OPTIONS[0]
    );
  }, [selectedCategory]);

  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-[#f9f9f7] text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* ================= ACADEMIC ROLLS & CONTROLS REGISTRY ================= */}
        <div className="space-y-6">
          {/* Top Bar: Section Title & View Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-black/10 gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em] text-emerald-800 font-semibold">
                  Academic Gazette • Official Personnel Rolls
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-neutral-900 tracking-tight">
                The Collegiate Register
              </h2>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                Session 2026–27 • 64 Appointed Scholars & Administrative Officers
              </p>
            </div>

            {/* Archive View Mode Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 hidden sm:inline">
                Format:
              </span>
              <div className="inline-flex items-center p-1 rounded-xl border border-black/10 bg-white shadow-sm font-mono text-xs">
                <button
                  onClick={() => setViewMode("table")}
                  aria-label="Index View"
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-2 ${
                    viewMode === "table"
                      ? "bg-neutral-900 text-white shadow-sm font-semibold"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-black/5"
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  <span className="text-[11px] uppercase tracking-wider">Index Register</span>
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  aria-label="Portrait Gallery"
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-2 ${
                    viewMode === "grid"
                      ? "bg-neutral-900 text-white shadow-sm font-semibold"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-black/5"
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span className="text-[11px] uppercase tracking-wider">Portrait Gallery</span>
                </button>
              </div>
            </div>
          </div>

          {/* Integrated Academic Query Line */}
          <div className="relative w-full rounded-2xl border border-black/10 bg-white p-2 shadow-sm focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition-all flex items-center gap-3">
            <div className="pl-3 text-neutral-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Query academic rolls by scholar name, doctoral qualification, department, or discipline..."
              className="w-full py-2.5 pr-4 text-xs sm:text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-none bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-2 py-1 text-neutral-400 hover:text-neutral-800 text-xs font-mono uppercase tracking-wider"
              >
                Clear
              </button>
            )}
            <div className="pr-3 pl-3 border-l border-black/10 hidden sm:flex items-center shrink-0">
              <span className="text-[11px] font-mono text-neutral-500 whitespace-nowrap">
                <strong className="text-neutral-950 font-semibold">{filteredMembers.length}</strong> of 64 on roll
              </span>
            </div>
          </div>

          {/* Collegiate Wing Register (Academic Rolls Navigation) */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-emerald-800" />
                <span className="font-semibold text-neutral-800">Collegiate Wing Register:</span>
              </div>
              <span className="text-neutral-400 hidden md:inline">
                Select discipline to refine active gazette
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {DEPARTMENT_FILTER_OPTIONS.map((opt, idx) => {
                const isActive = selectedCategory === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedCategory(opt.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-neutral-900 text-white shadow-sm font-semibold ring-1 ring-neutral-900"
                        : "bg-white text-neutral-700 border border-black/10 hover:border-black/30 hover:bg-[#f6f6f2]"
                    }`}
                  >
                    <span className="text-[10px] text-neutral-400 font-normal">
                      0{idx}.
                    </span>
                    <span>{opt.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-black/5 text-neutral-600"
                      }`}
                    >
                      {opt.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Wing Curatorial Statement */}
          <div className="p-4 sm:p-5 rounded-2xl border-l-4 border-l-emerald-700 border border-black/5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-sm">
            <div className="flex items-center gap-2 font-mono text-emerald-900 font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="uppercase tracking-wider text-[11px]">{activeCategoryInfo.label}</span>
            </div>
            <p className="text-neutral-600 font-sans leading-relaxed">
              {activeCategoryInfo.description}
            </p>
          </div>
        </div>

        {/* ================= RESULTS DISPLAY ================= */}
        {filteredMembers.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-black/20 bg-white p-16 text-center space-y-4">
            <Users className="w-8 h-8 text-neutral-400 mx-auto" />
            <h3 className="font-serif font-bold text-xl text-neutral-900">
              No Personnel Found Matching Search
            </h3>
            <p className="text-sm text-neutral-500 max-w-md mx-auto font-light">
              We couldn&apos;t find any faculty or staff matching &quot;{searchQuery}&quot; in{" "}
              {activeCategoryInfo.label}. Try adjusting your keywords or clearing the filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-mono font-medium hover:bg-neutral-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* ================= VIEW MODE: EDITORIAL CARDS GRID ================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedMembers.map((member) => (
              <div
                key={member.srNo}
                onClick={() => setActiveMemberModal(member)}
                className="group cursor-pointer rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-xl hover:border-black/30 transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Top Bar: Dept Badge & Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#f4f4f0] text-neutral-700 font-medium">
                      {member.department}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      #{String(member.srNo).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Member Avatar / Photo & Name */}
                  <div className="flex items-start gap-3.5">
                    {member.image ? (
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-black/10 shrink-0 bg-neutral-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl border border-black/10 bg-[#f4f4ee] flex items-center justify-center font-serif font-bold text-lg text-neutral-800 shrink-0 group-hover:bg-emerald-50 group-hover:text-emerald-900 transition-colors">
                        {member.name
                          .replace(/(Mr\.|Ms\.|Dr\.|Lt\.)/g, "")
                          .trim()
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}

                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h4 className="font-serif font-bold text-base text-neutral-900 group-hover:text-emerald-900 transition-colors truncate">
                          {member.name}
                        </h4>
                        {member.isLeadership && (
                          <span className="inline-block w-2 h-2 rounded-full bg-amber-500" title="Apex Leadership" />
                        )}
                        {member.isHOD && (
                          <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            HOD
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-mono text-neutral-500 truncate">
                        {member.designation}
                      </p>
                    </div>
                  </div>

                  {/* Specialization Domain */}
                  {member.specialization && (
                    <div className="pt-2 border-t border-black/5">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block tracking-wider">
                        Domain Specialization
                      </span>
                      <p className="text-xs text-neutral-800 font-medium line-clamp-2 mt-0.5">
                        {member.specialization}
                      </p>
                    </div>
                  )}

                  {/* Qualifications & Experience Badges */}
                  <div className="space-y-1.5 pt-1">
                    {member.qualification && (
                      <div className="flex items-center gap-2 text-xs text-neutral-600 font-light truncate">
                        <GraduationCap className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="truncate">{member.qualification}</span>
                      </div>
                    )}
                    {member.experience && (
                      <div className="flex items-center gap-2 text-xs text-neutral-600 font-light">
                        <Briefcase className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{member.experience} Academic Experience</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Detail Link / Contact Info */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono">
                  {member.phone ? (
                    <span className="text-emerald-800 font-semibold text-[11px] flex items-center gap-1">
                      <Phone className="w-3 h-3 text-emerald-600" />
                      <span>{member.phone}</span>
                    </span>
                  ) : (
                    <span className="text-neutral-400 text-[11px]">
                      Patran Campus
                    </span>
                  )}

                  <span className="text-neutral-500 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all text-[11px] flex items-center gap-1">
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ================= VIEW MODE: STATUTORY GAZETTE LEDGER TABLE ================= */
          <div className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="bg-[#f6f6f2] border-b border-black/10 text-neutral-600 uppercase text-[10px] tracking-wider">
                    <th className="py-4 px-6 w-16">Sr.</th>
                    <th className="py-4 px-6">Official Name &amp; Title</th>
                    <th className="py-4 px-6">Department Wing</th>
                    <th className="py-4 px-6">Academic Qualifications</th>
                    <th className="py-4 px-6">Subject / Area Specialization</th>
                    <th className="py-4 px-6">Tenure</th>
                    <th className="py-4 px-6 text-right">Dossier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 text-neutral-800">
                  {paginatedMembers.map((member) => (
                    <tr
                      key={member.srNo}
                      onClick={() => setActiveMemberModal(member)}
                      className="hover:bg-neutral-50/80 cursor-pointer transition-colors"
                    >
                      <td className="py-4 px-6 text-neutral-400">
                        #{String(member.srNo).padStart(2, "0")}
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2.5">
                          {member.image ? (
                            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-black/10 shrink-0">
                              <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-lg border border-black/10 bg-[#f4f4ee] flex items-center justify-center font-serif font-bold text-xs text-neutral-800 shrink-0">
                              {member.name
                                .replace(/(Mr\.|Ms\.|Dr\.|Lt\.)/g, "")
                                .trim()[0]}
                            </div>
                          )}
                          <div>
                            <span className="font-bold font-serif text-sm text-neutral-900 block">
                              {member.name}
                            </span>
                            <span className="text-neutral-500 text-[11px] block">
                              {member.designation}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <span className="px-2 py-0.5 rounded-full bg-[#f4f4f0] text-neutral-700 text-[10px] uppercase tracking-wider font-semibold">
                          {member.department}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-neutral-700">
                        {member.qualification || "Documented in Institutional Dossier"}
                      </td>

                      <td className="py-4 px-6 text-neutral-900 font-medium">
                        {member.specialization || "General Academic Support"}
                      </td>

                      <td className="py-4 px-6 text-neutral-600">
                        {member.experience || "Verified"}
                      </td>

                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMemberModal(member);
                          }}
                          className="px-3 py-1.5 rounded-lg border border-black/15 bg-white hover:bg-neutral-900 hover:text-white transition-colors text-[11px]"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= PAGINATION & PAGING CONTROLS ================= */}
        {filteredMembers.length > 0 && (
          <div className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            {/* Left: Showing range and rows selector */}
            <div className="flex flex-wrap items-center gap-4 text-neutral-600">
              <span>
                Showing{" "}
                <strong className="text-neutral-950 font-bold">
                  {filteredMembers.length === 0 ? 0 : startIndex + 1}–{endIndex}
                </strong>{" "}
                of{" "}
                <strong className="text-neutral-950 font-bold">
                  {filteredMembers.length}
                </strong>{" "}
                personnel
              </span>

              {/* Rows per page selector */}
              <div className="flex items-center gap-2 pl-4 border-l border-black/10">
                <span className="text-neutral-500 text-[11px]">Per Page:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="px-2.5 py-1 rounded-lg border border-black/15 bg-[#fbfbfa] text-neutral-900 text-xs font-mono focus:outline-none focus:border-neutral-900 cursor-pointer"
                >
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={64}>All (64)</option>
                </select>
              </div>
            </div>

            {/* Right: Page navigation buttons */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  className="px-3 py-1.5 rounded-lg border border-black/10 bg-white hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed text-neutral-800 font-medium transition-colors"
                >
                  Previous
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg font-mono text-xs transition-all ${
                        safePage === pageNum
                          ? "bg-neutral-900 text-white font-bold shadow-sm"
                          : "bg-[#fbfbfa] border border-black/10 text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-black/10 bg-white hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed text-neutral-800 font-medium transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================= MODAL: FACULTY PERSONNEL DOSSIER ================= */}
        {activeMemberModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActiveMemberModal(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Faculty Personnel Dossier"
              data-lenis-prevent
              className="relative w-full max-w-xl rounded-2xl border border-black/15 bg-white p-6 sm:p-8 shadow-2xl space-y-6 text-[#1a1a1a] max-h-[90vh] overflow-y-auto overscroll-contain"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveMemberModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label="Close Dossier"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Profile */}
              <div className="flex items-start gap-4 border-b border-black/10 pb-6 pr-8">
                {activeMemberModal.image ? (
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-black/10 shrink-0 bg-neutral-100 shadow-sm">
                    <Image
                      src={activeMemberModal.image}
                      alt={activeMemberModal.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-2xl border border-black/10 bg-[#f4f4ee] flex items-center justify-center font-serif font-bold text-2xl text-neutral-800 shrink-0 shadow-sm">
                    {activeMemberModal.name
                      .replace(/(Mr\.|Ms\.|Dr\.|Lt\.)/g, "")
                      .trim()
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}

                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold">
                      {activeMemberModal.department}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Roster ID #{String(activeMemberModal.srNo).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-neutral-950">
                    {activeMemberModal.name}
                  </h3>

                  <p className="text-xs font-mono text-neutral-600 font-medium">
                    {activeMemberModal.designation}
                  </p>
                </div>
              </div>

              {/* Dossier Particulars Grid */}
              <div className="space-y-4 font-mono text-xs">
                {activeMemberModal.specialization && (
                  <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
                    <span className="text-neutral-400 text-[10px] uppercase block tracking-wider">
                      Area of Academic / Professional Focus
                    </span>
                    <p className="text-neutral-900 font-bold text-sm">
                      {activeMemberModal.specialization}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
                    <span className="text-neutral-400 text-[10px] uppercase block">
                      Educational Credentials
                    </span>
                    <span className="text-neutral-800 font-semibold block text-xs">
                      {activeMemberModal.qualification || "Documented with Trust"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
                    <span className="text-neutral-400 text-[10px] uppercase block">
                      Academic Standing
                    </span>
                    <span className="text-neutral-800 font-semibold block text-xs">
                      {activeMemberModal.experience || "Regular Service Faculty"}
                    </span>
                  </div>
                </div>

                {/* Official Contact Links */}
                {(activeMemberModal.phone || activeMemberModal.email) && (
                  <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                    <span className="text-emerald-800 text-[10px] uppercase block font-semibold">
                      Direct Institutional Desk Contact
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      {activeMemberModal.phone && (
                        <a
                          href={`tel:${activeMemberModal.phone.replace(/[^0-9+]/g, "")}`}
                          className="flex items-center gap-2 text-emerald-900 font-bold hover:underline"
                        >
                          <Phone className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{activeMemberModal.phone}</span>
                        </a>
                      )}
                      {activeMemberModal.email && (
                        <a
                          href={`mailto:${activeMemberModal.email}`}
                          className="flex items-center gap-2 text-emerald-900 hover:underline"
                        >
                          <Mail className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{activeMemberModal.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <div className="p-4 rounded-xl border border-black/10 bg-[#f4f4f0] space-y-1 text-neutral-600 font-light text-[11px]">
                  <span className="font-semibold text-neutral-800 font-mono block">
                    Institutional Governance Affiliation
                  </span>
                  <p>
                    Universal College Patran • Dashmesh Charitable Trust. Verified in accordance with MRSPTU &amp; Punjab State Regulatory norms for Academic Session 2026–27.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 text-right">
                <button
                  onClick={() => setActiveMemberModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white font-mono text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
