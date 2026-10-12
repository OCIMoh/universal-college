"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/home/Footer";
import SubpageHero from "@/components/common/SubpageHero";
import CampusTourOverlay from "@/components/home/CampusTourOverlay";
import GovernanceModal from "@/components/GovernanceModal";
import AdmissionCtaBanner from "@/components/home/AdmissionCtaBanner";
import FacultyDirectoryClient from "@/components/faculty/FacultyDirectoryClient";
import type { GovernanceSection } from "@/data/governance";
import { Users, Award, ShieldCheck, Landmark } from "@/components/common/Icons";

const FACULTY_HERO_ARCHIVES = [
  {
    src: "/assets/campus/staff-group-photo-1.jpeg",
    title: "Faculty Convocation & Academic Council",
    locationTag: "Faculty Convocation Assembly & Pedagogical Body • Universal College Patran",
  },
  {
    src: "/assets/campus/staff-group-photo-2.jpeg",
    title: "Collegiate Teaching & Administration Roster",
    locationTag: "Teaching Faculty & Administrative Staff Assembly • Patran Campus",
  },
  {
    src: "/assets/campus/staffroom.jpg",
    title: "Central Faculty Commons & Staffroom",
    locationTag: "Departmental Faculty Commons & Collaborative Staffroom • Academic Wing",
  },
];

export default function FacultyPage() {
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <main className="relative w-full bg-[#f9f9f7] text-[#1a1a1a]">
      {/* Floating Header Dock */}
      <Header
        onOpenTour={() => setIsTourOpen(true)}
        isTourOpen={isTourOpen}
      />

      {/* Subpage Hero with Auto-Cycling Staff Photos & Visual Archive Drawer */}
      <SubpageHero
        kicker="Pedagogical Excellence • 64-Person Roster • Outcome-Based Education"
        title="Faculty & Staff Directory"
        subtitle="Distinguished educators, certified technical instructors, and dedicated administrative professionals shaping scholarly rigour across 8 degree, ITI, and open university wings."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faculty & Staff" },
        ]}
        backgroundImages={FACULTY_HERO_ARCHIVES}
        intervalMs={5500}
      />

      {/* Institutional Benchmarks Metric Strip */}
      <section className="relative w-full border-b border-black/10 bg-white py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="space-y-1 border-r border-black/10 pr-4 last:border-0">
            <span className="text-neutral-500 text-[10px] uppercase tracking-wider block">
              Total Roster
            </span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-700" />
              <span className="text-xl sm:text-2xl font-bold font-serif text-neutral-900">
                64 Members
              </span>
            </div>
            <span className="text-neutral-400 text-[11px] block">
              Teaching &amp; Admin Personnel
            </span>
          </div>

          <div className="space-y-1 border-r border-black/10 pr-4 last:border-0">
            <span className="text-neutral-500 text-[10px] uppercase tracking-wider block">
              Mentorship Ratio
            </span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-700" />
              <span className="text-xl sm:text-2xl font-bold font-serif text-neutral-900">
                1:20 Ratio
              </span>
            </div>
            <span className="text-neutral-400 text-[11px] block">
              NEP 2020 Mentor-Scholar Focus
            </span>
          </div>

          <div className="space-y-1 border-r border-black/10 pr-4 last:border-0">
            <span className="text-neutral-500 text-[10px] uppercase tracking-wider block">
              Affiliation Standing
            </span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span className="text-xl sm:text-2xl font-bold font-serif text-neutral-900">
                100% Verified
              </span>
            </div>
            <span className="text-neutral-400 text-[11px] block">
              MRSPTU &amp; PSOU Approved
            </span>
          </div>

          <div className="space-y-1 pr-4">
            <span className="text-neutral-500 text-[10px] uppercase tracking-wider block">
              Collegiate Wings
            </span>
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-emerald-700" />
              <span className="text-xl sm:text-2xl font-bold font-serif text-neutral-900">
                08 Wings
              </span>
            </div>
            <span className="text-neutral-400 text-[11px] block">
              Degree, Skills &amp; Office Wings
            </span>
          </div>
        </div>
      </section>

      {/* Searchable 64-Person Directory (Grid vs Gazette Table) */}
      <FacultyDirectoryClient />

      {/* Admission CTA Banner */}
      <AdmissionCtaBanner />

      {/* Institutional Footer */}
      <Footer
        onSelectGovernance={(sec: GovernanceSection) => setSelectedGovernance(sec)}
        onNavigateToTour={() => setIsTourOpen(true)}
      />

      {/* 360° Virtual Campus Tour Overlay */}
      <CampusTourOverlay
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />

      {/* Regulatory Governance Policy Modal */}
      <GovernanceModal
        data={selectedGovernance}
        onClose={() => setSelectedGovernance(null)}
      />
    </main>
  );
}
