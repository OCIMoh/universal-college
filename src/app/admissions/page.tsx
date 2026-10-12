"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/home/Footer";
import SubpageHero from "@/components/common/SubpageHero";
import CampusTourOverlay from "@/components/home/CampusTourOverlay";
import GovernanceModal from "@/components/GovernanceModal";
import AdmissionCtaBanner from "@/components/home/AdmissionCtaBanner";
import AdmissionScheduleStrip from "@/components/admissions/AdmissionScheduleStrip";
import AdmissionFlowchart from "@/components/admissions/AdmissionFlowchart";
import DocumentChecklistWidget from "@/components/admissions/DocumentChecklistWidget";
import ScholarshipsDetailedSection from "@/components/admissions/ScholarshipsDetailedSection";
import AdmissionEnquiryForm from "@/components/admissions/AdmissionEnquiryForm";
import type { GovernanceSection } from "@/data/governance";

export default function AdmissionsPage() {
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <main className="relative w-full bg-[#f9f9f7] text-[#1a1a1a]">
      {/* Floating Header */}
      <Header
        onOpenTour={() => setIsTourOpen(true)}
        isTourOpen={isTourOpen}
      />

      {/* Subpage Hero with Authentic Admission Cell Photograph */}
      <SubpageHero
        kicker="Session 2026-27 • Enrolment & Scholarships"
        title="Admissions & Financial Aid"
        subtitle="Open doors to value-based multidisciplinary education. Explore our transparent 4-stage admission procedure, interactive 8-document checklist, and 100% Post-Matric Scholarship fee waivers."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions & Scholarships" },
        ]}
        backgroundImage="/assets/campus/admission-cell.jpg"
        imageLocationTag="Central Admission Cell • Administrative Block"
      />

      {/* 1. Live Admission Session Schedule & Scrutiny Timings */}
      <AdmissionScheduleStrip />

      {/* 2. Step-by-Step 4-Stage Procedure Flowchart */}
      <AdmissionFlowchart />

      {/* 3. Interactive Mandatory Document Readiness Checker (8+ Documents) */}
      <DocumentChecklistWidget />

      {/* 4. Deep Dive into Scholarships (PMSS 100% SC Waiver & Minority Grants) */}
      <ScholarshipsDetailedSection />

      {/* 5. Online Admission Enquiry Form & Prospectus Download Center */}
      <AdmissionEnquiryForm />

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
