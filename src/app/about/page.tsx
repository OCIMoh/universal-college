"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/home/Footer";
import CampusTourOverlay from "@/components/home/CampusTourOverlay";
import GovernanceModal from "@/components/GovernanceModal";
import SubpageHero from "@/components/common/SubpageHero";
import AboutOverviewSection from "@/components/about/AboutOverviewSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import OrganogramSection from "@/components/about/OrganogramSection";
import LeaderMessageModal from "@/components/about/LeaderMessageModal";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import CampusLegacySection from "@/components/about/CampusLegacySection";
import type { LeaderProfile } from "@/data/leadership";
import type { GovernanceSection } from "@/data/governance";

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <main className="relative w-full bg-[#f9f9f7] text-[#1a1a1a]">
      {/* Floating Header Dock */}
      <Header
        onOpenTour={() => setIsTourOpen(true)}
        isTourOpen={isTourOpen}
      />

      {/* Hero Banner with Corridor.jpg Background */}
      <SubpageHero
        kicker="// 02 . INSTITUTIONAL HERITAGE"
        title="About Universal College"
        subtitle="Empowering education, inspiring excellence, and building purposeful futures across Patran, Punjab since 2014."
        backgroundImage="/assets/campus/corridor.jpg"
        imageLocationTag="Main Academic Wing • Corridor"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Overview, History & Foundational Philosophy */}
      <AboutOverviewSection />

      {/* Leadership & Vision Messages (5 Leaders) */}
      <LeadershipSection onSelectLeader={setSelectedLeader} />

      {/* Institutional Organogram & Governance Structure */}
      <OrganogramSection />

      {/* Vision, Mission & 12 Core Values */}
      <CoreValuesSection />

      {/* Institutional Creed, Affiliations & Campus Milestones */}
      <CampusLegacySection />

      {/* Global Footer */}
      <Footer
        onSelectGovernance={setSelectedGovernance}
        onNavigateToTour={() => setIsTourOpen(true)}
      />

      {/* Full Leader Speech / Message Drawer */}
      <LeaderMessageModal
        leader={selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />

      {/* Governance & Compliance Modal */}
      <GovernanceModal
        data={selectedGovernance}
        onClose={() => setSelectedGovernance(null)}
      />

      {/* 360° Virtual Campus Tour Overlay */}
      <CampusTourOverlay
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />
    </main>
  );
}
