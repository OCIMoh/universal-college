"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/home/Footer";
import SubpageHero from "@/components/common/SubpageHero";
import GovernanceModal from "@/components/GovernanceModal";
import AdmissionCtaBanner from "@/components/home/AdmissionCtaBanner";
import CampusMacroMetrics from "@/components/campus/CampusMacroMetrics";
import InfrastructureManifesto from "@/components/campus/InfrastructureManifesto";
import CampusFacilitiesShowcase from "@/components/campus/CampusFacilitiesShowcase";
import CampusSpatialLedger from "@/components/campus/CampusSpatialLedger";
import VirtualTourMonolith from "@/components/campus/VirtualTourMonolith";
import type { GovernanceSection } from "@/data/governance";

export default function CampusClient() {
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);

  return (
    <main className="relative w-full bg-[#f9f9f7] text-[#1a1a1a]">
      {/* Chameleon Navigation Header */}
      <Header />

      {/* Subpage Hero with Authentic Porch & Academic Wings Image */}
      <SubpageHero
        kicker="Established 2014 • Patran Campus Infrastructure"
        title="Campus & Facilities"
        subtitle="At Universal College, Patran, we see infrastructure as more than buildings, rooms and facilities. A progressive campus is an evolving learning environment—one that responds to changing educational needs, emerging technologies and the aspirations of its students."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Campus & Facilities" },
        ]}
        backgroundImage="/assets/campus/visit-glass-porch.jpg"
        imageLocationTag="Main Glass Canopy & Academic Wings • Universal Campus"
      />

      {/* 1. Spatial Scale & Operational Macro Metrics Bar */}
      <CampusMacroMetrics />

      {/* 2. Five Infrastructure Priorities (The Infrastructure Development Manifesto) */}
      <InfrastructureManifesto />

      {/* 3. The Four Architectural Quarters: 19 Verified Facility Spreads */}
      <CampusFacilitiesShowcase />

      {/* 4. Searchable Spatial Master Ledger & Regulatory Specs */}
      <CampusSpatialLedger />

      {/* 5. Campus Development Vision & Visit Concierge */}
      <VirtualTourMonolith />

      {/* 6. Admission CTA Banner */}
      <AdmissionCtaBanner />

      {/* 7. Institutional Footer */}
      <Footer
        onSelectGovernance={(sec: GovernanceSection) => setSelectedGovernance(sec)}
      />

      {/* Regulatory Governance Policy Modal */}
      <GovernanceModal
        data={selectedGovernance}
        onClose={() => setSelectedGovernance(null)}
      />
    </main>
  );
}
