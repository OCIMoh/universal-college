"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/home/Footer";
import SubpageHero from "@/components/common/SubpageHero";
import CampusTourOverlay from "@/components/home/CampusTourOverlay";
import GovernanceModal from "@/components/GovernanceModal";
import AdmissionCtaBanner from "@/components/home/AdmissionCtaBanner";
import CampusMacroMetrics from "@/components/campus/CampusMacroMetrics";
import InfrastructureManifesto from "@/components/campus/InfrastructureManifesto";
import CampusFacilitiesShowcase from "@/components/campus/CampusFacilitiesShowcase";
import CampusSpatialLedger from "@/components/campus/CampusSpatialLedger";
import VirtualTourMonolith from "@/components/campus/VirtualTourMonolith";
import type { GovernanceSection } from "@/data/governance";

export default function CampusPage() {
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const handleOpenTour = () => {
    setIsTourOpen(true);
  };

  return (
    <main className="relative w-full bg-[#f9f9f7] text-[#1a1a1a]">
      {/* Chameleon Navigation Header */}
      <Header
        onOpenTour={() => setIsTourOpen(true)}
        isTourOpen={isTourOpen}
      />

      {/* Subpage Hero with Authentic Porch & Academic Wings Image */}
      <SubpageHero
        kicker="Established 2014 • Patran Campus Infrastructure"
        title="Campus & Facilities"
        subtitle="A 360-degree spatial environment purpose-engineered for academic depth, hands-on industrial mastery, athletic vigor, and inclusive civic dignity across 10+ acres."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Campus & Facilities" },
        ]}
        backgroundImage="/assets/visit-glass-porch.jpg"
        imageLocationTag="Main Glass Canopy & Academic Wings • Universal Campus"
      />

      {/* 1. Spatial Scale & Operational Macro Metrics Bar */}
      <CampusMacroMetrics />

      {/* 2. Five Architectural Priorities (The Infrastructure Development Manifesto) */}
      <InfrastructureManifesto />

      {/* 3. The Four Architectural Quarters: 20-Facility Editorial Folio */}
      <CampusFacilitiesShowcase onOpenTour={handleOpenTour} />

      {/* 4. Searchable Spatial Master Ledger & Regulatory Specs */}
      <CampusSpatialLedger />

      {/* 5. Cinematic 360° Spatial Walkthrough Monolith */}
      <VirtualTourMonolith onOpenTour={() => setIsTourOpen(true)} />

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
