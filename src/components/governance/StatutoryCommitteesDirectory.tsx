"use client";

import { useState, useMemo } from "react";
import { STATUTORY_COMMITTEES, StatutoryCommittee } from "@/data/governanceData";
import {
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  Send,
  Search,
  ChevronRight,
  ShieldCheck,
} from "@/components/common/Icons";

interface StatutoryCommitteesDirectoryProps {
  onSelectCommitteeForGrievance?: (committeeId: string) => void;
}

export default function StatutoryCommitteesDirectory({
  onSelectCommitteeForGrievance,
}: StatutoryCommitteesDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCommitteeId, setActiveCommitteeId] = useState<string>(
    STATUTORY_COMMITTEES[0].id
  );

  const categories = [
    "All",
    "Statutory & Disciplinary",
    "Inclusion & Welfare",
    "Student Support & Quality",
  ];

  // Filtered committees based on category and live search query
  const filteredCommittees = useMemo(() => {
    return STATUTORY_COMMITTEES.filter((committee) => {
      const matchesCategory =
        selectedCategory === "All" || committee.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inCommittee =
        committee.name.toLowerCase().includes(q) ||
        committee.shortName.toLowerCase().includes(q) ||
        committee.mandate.toLowerCase().includes(q) ||
        committee.helpline.toLowerCase().includes(q);

      const inMembers = committee.members.some(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.designation.toLowerCase().includes(q) ||
          m.qualification.toLowerCase().includes(q) ||
          m.phone.toLowerCase().includes(q) ||
          m.email.toLowerCase().includes(q) ||
          m.roleInCommittee.toLowerCase().includes(q)
      );

      return inCommittee || inMembers;
    });
  }, [selectedCategory, searchQuery]);

  // Keep active committee synced
  const activeCommittee: StatutoryCommittee = useMemo(() => {
    const found = filteredCommittees.find((c) => c.id === activeCommitteeId);
    if (found) return found;
    return filteredCommittees[0] || STATUTORY_COMMITTEES[0];
  }, [filteredCommittees, activeCommitteeId]);

  const handleLodgeGrievance = (id: string) => {
    if (onSelectCommitteeForGrievance) {
      onSelectCommitteeForGrievance(id);
    }
    const portalElement = document.getElementById("grievance-portal");
    if (portalElement) {
      portalElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="committees" className="relative w-full py-28 px-6 md:px-12 bg-[#f9f9f7] text-[#1a1a1a] border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b border-black/10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
                Statutory Oversight Directory
              </span>
              <span className="text-neutral-400 font-mono text-xs">•</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                UGC &amp; AICTE Ordinance Rosters
              </span>
            </div>

            <h2 className="text-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.06]">
              Statutory Committees.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              Nine independent oversight bodies constituted in strict accordance with affiliating university guidelines, state notifications, and Supreme Court directives to guarantee an egalitarian, zero-tolerance campus.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 font-mono text-xs text-neutral-600">
            <div className="space-y-1">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider block">Constituted Cells</span>
              <span className="text-neutral-900 font-bold text-sm block">09 Bodies</span>
            </div>
            <div className="w-[1px] h-8 bg-black/10" />
            <div className="space-y-1">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider block">Campus Status</span>
              <span className="text-emerald-700 font-bold text-sm block">100% Ragging-Free</span>
            </div>
          </div>
        </div>

        {/* ================= SEARCH & CATEGORY FILTER CONTROL STRIP ================= */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl border border-black/10 bg-white shadow-sm">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by faculty, student, committee, or mobile..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-black/10 bg-neutral-50/50 text-xs font-mono text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-emerald-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-400 hover:text-neutral-900"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? "bg-neutral-950 text-white font-semibold border-neutral-950 shadow-sm"
                    : "bg-white text-neutral-600 border-black/10 hover:text-black hover:border-black/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= MASTER-DETAIL ARCHITECTURAL DOSSIER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: COMMITTEE SELECTION LEDGER (4 Cols) */}
          <div className="lg:col-span-4 space-y-2 max-h-[820px] overflow-y-auto pr-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 px-2 block mb-3">
              Official Docket Index ({filteredCommittees.length} Listed)
            </span>

            {filteredCommittees.length === 0 ? (
              <div className="p-8 text-center border border-black/10 rounded-2xl bg-white text-xs font-mono text-neutral-500 space-y-2">
                <p>No committees match &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="text-emerald-700 underline underline-offset-4 font-semibold"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              filteredCommittees.map((c, idx) => {
                const isSelected = c.id === activeCommittee?.id;

                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCommitteeId(c.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 group ${
                      isSelected
                        ? "bg-emerald-50/70 border-emerald-700/80 shadow-md ring-1 ring-emerald-700/20 text-neutral-950"
                        : "bg-white border-black/10 hover:bg-neutral-50 hover:border-black/20 text-neutral-700"
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-emerald-800 font-semibold">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 truncate">
                          {c.category}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-neutral-950 group-hover:text-emerald-800 transition-colors truncate">
                        {c.name}
                      </h4>
                      <p className="text-[11px] font-mono text-neutral-500">
                        {c.members.length} Members • {c.responseTime}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected
                          ? "text-emerald-700 translate-x-1"
                          : "text-neutral-300 group-hover:text-neutral-600"
                      }`}
                    />
                  </button>
                );
              })
            )}
          </div>

          {/* RIGHT COLUMN: ACTIVE COMMITTEE OFFICIAL DOSSIER (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-black/10 bg-white p-6 sm:p-10 space-y-10 shadow-sm">
            {activeCommittee && (
              <>
                {/* Dossier Header */}
                <div className="space-y-6 border-b border-black/10 pb-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200/60">
                        {activeCommittee.badge}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {activeCommittee.category}
                      </span>
                    </div>

                    {/* Official Resolution SLA */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Resolution SLA: <strong className="text-neutral-950">{activeCommittee.responseTime}</strong></span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-950 tracking-tight">
                      {activeCommittee.name}
                    </h3>
                    <p className="text-sm font-mono text-emerald-800 mt-1">
                      {activeCommittee.tagline}
                    </p>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs">
                    <a
                      href={`tel:${activeCommittee.helpline.replace(/[^0-9+]/g, "")}`}
                      className="flex items-center gap-2 text-neutral-700 hover:text-neutral-950 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Direct Desk: <strong>{activeCommittee.helpline}</strong></span>
                    </a>
                    <a
                      href={`mailto:${activeCommittee.email}`}
                      className="flex items-center gap-2 text-neutral-700 hover:text-emerald-800 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{activeCommittee.email}</span>
                    </a>
                  </div>
                </div>

                {/* Mandate & Operational Responsibilities */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                      Constitutional Charter &amp; Purpose
                    </span>
                    <p className="text-sm text-neutral-700 leading-relaxed font-light">
                      {activeCommittee.mandate}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                      Statutory Responsibilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeCommittee.keyResponsibilities.map((resp, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-black/10 bg-neutral-50/50 flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span className="text-xs text-neutral-700 leading-relaxed">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ================= VERBATIM ROSTER TABLE ================= */}
                <div className="space-y-4 pt-4 border-t border-black/10">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                        Constituted Roster
                      </span>
                      <h4 className="font-serif font-bold text-xl text-neutral-950">
                        Committee Membership Registry ({activeCommittee.members.length})
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-800 hidden sm:block">
                      Official Notification Records
                    </span>
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden md:block rounded-xl border border-black/10 bg-white overflow-hidden shadow-sm">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-neutral-100/70 border-b border-black/10 text-neutral-600 font-mono uppercase text-[10px] tracking-wider">
                        <tr>
                          <th className="py-3 px-4 w-10">#</th>
                          <th className="py-3 px-4">Member Name</th>
                          <th className="py-3 px-4">Designation</th>
                          <th className="py-3 px-4">Degree</th>
                          <th className="py-3 px-4">Role in Body</th>
                          <th className="py-3 px-4">Contact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/10 font-mono text-neutral-800">
                        {activeCommittee.members.map((m) => (
                          <tr key={m.srNo} className="hover:bg-neutral-50 transition-colors">
                            <td className="py-3 px-4 text-neutral-400">{m.srNo}</td>
                            <td className="py-3 px-4 font-sans font-bold text-neutral-950">
                              {m.name}
                            </td>
                            <td className="py-3 px-4 text-neutral-600">{m.designation}</td>
                            <td className="py-3 px-4 text-emerald-800 font-semibold">{m.qualification}</td>
                            <td className="py-3 px-4 font-sans font-medium text-neutral-900">
                              {m.roleInCommittee}
                            </td>
                            <td className="py-3 px-4">
                              <a
                                href={`tel:${m.phone.replace(/[^0-9+]/g, "")}`}
                                className="text-neutral-600 hover:text-neutral-950 transition-colors"
                              >
                                {m.phone}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards View */}
                  <div className="grid grid-cols-1 gap-3 md:hidden">
                    {activeCommittee.members.map((m) => (
                      <div
                        key={m.srNo}
                        className="p-4 rounded-xl border border-black/10 bg-neutral-50/50 space-y-2"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400">#{m.srNo}</span>
                            <h5 className="font-bold text-neutral-950 text-sm">{m.name}</h5>
                            <p className="text-xs text-neutral-600">{m.designation}</p>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-emerald-800 border border-black/10 font-semibold">
                            {m.qualification}
                          </span>
                        </div>

                        <div className="text-xs font-mono text-neutral-900 font-medium">
                          {m.roleInCommittee}
                        </div>

                        <div className="pt-2 border-t border-black/10 flex items-center justify-between text-xs font-mono text-neutral-600">
                          <a
                            href={`tel:${m.phone.replace(/[^0-9+]/g, "")}`}
                            className="flex items-center gap-1.5 hover:text-neutral-950"
                          >
                            <Phone className="w-3 h-3 text-emerald-700" />
                            <span>{m.phone}</span>
                          </a>
                          <a
                            href={`mailto:${m.email}`}
                            className="flex items-center gap-1.5 hover:text-emerald-800"
                          >
                            <Mail className="w-3 h-3 text-neutral-400" />
                            <span className="truncate max-w-[140px]">{m.email}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lodge Protected Docket Action Footer */}
                <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Protected by Supreme Court &amp; Central Statutory Mandates</span>
                  </div>

                  <button
                    onClick={() => handleLodgeGrievance(activeCommittee.id)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>File Redressal with this Cell</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
