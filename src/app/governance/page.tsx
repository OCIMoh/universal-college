"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/home/Footer";
import SubpageHero from "@/components/common/SubpageHero";
import CampusTourOverlay from "@/components/home/CampusTourOverlay";
import GovernanceModal from "@/components/GovernanceModal";
import AdmissionCtaBanner from "@/components/home/AdmissionCtaBanner";
import GoverningBodySection from "@/components/governance/GoverningBodySection";
import StatutoryCommitteesDirectory from "@/components/governance/StatutoryCommitteesDirectory";
import GrievanceRedressalPortal from "@/components/governance/GrievanceRedressalPortal";
import IqacQualityFramework from "@/components/governance/IqacQualityFramework";
import MandatoryDisclosuresVault from "@/components/governance/MandatoryDisclosuresVault";
import type { GovernanceSection } from "@/data/governance";

export default function GovernancePage() {
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [grievanceTargetCommitteeId, setGrievanceTargetCommitteeId] = useState<string>("grievance-redressal");

  return (
    <main className="relative w-full bg-[#f9f9f7] text-[#1a1a1a]">
      {/* Floating Header */}
      <Header
        onOpenTour={() => setIsTourOpen(true)}
        isTourOpen={isTourOpen}
      />

      {/* Subpage Hero with Authentic Campus Architecture Corridor */}
      <SubpageHero
        kicker="Statutory Framework • Apex Administration • Quality Assurance"
        title="Governance, IQAC & Disclosures"
        subtitle="Decentralized collegiate leadership, 9 statutory oversight cells, zero-tolerance campus safety, and transparent public disclosures under Dashmesh Charitable Trust."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Governance & IQAC" },
        ]}
        backgroundImage="/assets/campus/corridor.jpg"
        imageLocationTag="Central Academic Corridor & Administrative Wing • Universal College Patran"
      />

      {/* Quick Section Anchor Jump Bar */}
      <nav
        aria-label="Governance Quick Jump Links"
        className="sticky top-20 z-30 w-full py-3.5 px-6 md:px-12 bg-[#f9f9f7]/95 backdrop-blur-xl border-b border-black/10 hidden md:block"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span className="uppercase tracking-widest text-[11px] font-semibold text-neutral-700">Direct Index:</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#governing-body"
              className="text-neutral-600 hover:text-neutral-950 hover:font-medium transition-colors"
            >
              01 Board of Governors
            </a>
            <a
              href="#committees"
              className="text-neutral-600 hover:text-neutral-950 hover:font-medium transition-colors"
            >
              02 Statutory Committees (9)
            </a>
            <a
              href="#grievance-portal"
              className="text-neutral-600 hover:text-neutral-950 hover:font-medium transition-colors"
            >
              03 Ombudsman Desk
            </a>
            <a
              href="#iqac"
              className="text-neutral-600 hover:text-neutral-950 hover:font-medium transition-colors"
            >
              04 IQAC Framework
            </a>
            <a
              href="#disclosures"
              className="text-neutral-600 hover:text-neutral-950 hover:font-medium transition-colors"
            >
              05 Mandatory Disclosures
            </a>
          </div>
        </div>
      </nav>

      {/* 1. Apex Board of Governors & Institutional Organogram */}
      <GoverningBodySection />

      {/* 2. 9 Statutory & Student Support Committees with Full Verbatim Rosters */}
      <StatutoryCommitteesDirectory
        onSelectCommitteeForGrievance={(id) => setGrievanceTargetCommitteeId(id)}
      />

      {/* 3. Formal Online Grievance Redressal & Student Feedback Desk */}
      <GrievanceRedressalPortal
        initialCommitteeId={grievanceTargetCommitteeId}
      />

      {/* 4. Internal Quality Assurance Cell (IQAC) & 7 NAAC Quality Criteria */}
      <IqacQualityFramework />

      {/* 5. Mandatory Public Disclosures, Regulatory Approvals & RTI Roster */}
      <MandatoryDisclosuresVault />

      {/* 6. Admission CTA Banner */}
      <AdmissionCtaBanner />

      {/* 7. Institutional Footer */}
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
