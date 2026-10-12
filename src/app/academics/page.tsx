"use client";

import { useState, useMemo } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/home/Footer";
import SubpageHero from "@/components/common/SubpageHero";
import CampusTourOverlay from "@/components/home/CampusTourOverlay";
import GovernanceModal from "@/components/GovernanceModal";
import CourseModal from "@/components/CourseModal";
import AdmissionCtaBanner from "@/components/home/AdmissionCtaBanner";
import AcademicPathwaysFilter, { CategoryFilter } from "@/components/academics/AcademicPathwaysFilter";
import FeeMatrixTable from "@/components/academics/FeeMatrixTable";
import DepartmentsShowcase from "@/components/academics/DepartmentsShowcase";
import ScholarshipNoticeBanner from "@/components/academics/ScholarshipNoticeBanner";
import { ALL_COURSES, CourseDetail } from "@/data/courses";
import type { GovernanceSection } from "@/data/governance";

export default function AcademicsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [qualificationFilter, setQualificationFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const PAGE_SIZE = 10;

  // Filtered Courses Memoization
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      // 1. Category Filter
      if (selectedCategory !== "ALL" && course.category !== selectedCategory) {
        return false;
      }

      // 2. Qualification Filter
      if (qualificationFilter === "10th") {
        const isTenth =
          course.eligibility.includes("10th") ||
          course.eligibility.includes("Matric") ||
          course.eligibility.includes("8th");
        if (!isTenth) return false;
      } else if (qualificationFilter === "12th") {
        const isTwelfth =
          course.eligibility.includes("12th") ||
          course.eligibility.includes("10+2");
        if (!isTwelfth) return false;
      } else if (qualificationFilter === "Graduation") {
        const isGrad =
          course.eligibility.includes("Graduat") ||
          course.eligibility.includes("Bachelor") ||
          course.degreeLevel === "Postgraduate";
        if (!isGrad) return false;
      }

      // 3. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = course.name.toLowerCase().includes(q);
        const matchesOverview = course.overview.toLowerCase().includes(q);
        const matchesAffiliation = course.affiliation.toLowerCase().includes(q);
        const matchesDept = course.departmentId.toLowerCase().includes(q);
        const matchesCareers = course.careerPaths.some((cp) => cp.toLowerCase().includes(q));
        const matchesSubjects = course.keySubjects?.some((s) => s.toLowerCase().includes(q)) || false;

        if (!matchesName && !matchesOverview && !matchesAffiliation && !matchesDept && !matchesCareers && !matchesSubjects) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, qualificationFilter, searchQuery]);

  // Pagination Calculations
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
  const startIndex = filteredCourses.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const endIndex = Math.min(currentPage * PAGE_SIZE, filteredCourses.length);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Filter change handlers that reset page index
  const handleCategoryChange = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handleQualificationChange = (qual: string) => {
    setQualificationFilter(qual);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Smoothly focus/scroll back to ledger top if scrolled down
    const ledgerElement = document.getElementById("courses-ledger");
    if (ledgerElement) {
      ledgerElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="relative w-full bg-[#f9f9f7] text-[#1a1a1a]">
      {/* Floating Header */}
      <Header
        onOpenTour={() => setIsTourOpen(true)}
        isTourOpen={isTourOpen}
      />

      {/* Subpage Hero Banner */}
      <SubpageHero
        kicker="Curricular Continuum • Session 2026–2027"
        title="Multidisciplinary Curricular Architecture"
        subtitle="Explore 30 degree programmes, skill diplomas, industrial trades, and open learning certifications across 4 statutory bodies with verified fee transparency."
        backgroundImage="/assets/campus/computer-lab.jpg"
        imageLocationTag="Computing & Technology Labs • Universal Campus"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics & Curricula" },
        ]}
      />

      {/* Post-Matric SC Scholarship (100% Fee Waiver) Notice */}
      <ScholarshipNoticeBanner />

      {/* ================= SECTION 01: COURSE DIRECTORY & FEE MATRIX ================= */}
      <section id="courses-ledger" className="relative w-full py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
                Transparent Fee Structure
              </span>
            </div>
            <h2 className="text-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-3">
              Courses at a Glance &amp; Official Fee Matrix
            </h2>
            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
              Filter by university pathway, minimum educational qualification, or search for your chosen career field. All fees comply with state regulatory approvals.
            </p>
          </div>

          {/* Interactive Pathways Switcher & Filter Controls */}
          <AcademicPathwaysFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            qualificationFilter={qualificationFilter}
            onQualificationChange={handleQualificationChange}
            totalCoursesCount={ALL_COURSES.length}
            filteredCount={filteredCourses.length}
            currentPage={currentPage}
            totalPages={totalPages}
            startIndex={startIndex}
            endIndex={endIndex}
          />

          {/* Fee Matrix Table / Cards */}
          <FeeMatrixTable
            courses={paginatedCourses}
            onSelectCourse={setSelectedCourse}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalFilteredCount={filteredCourses.length}
            startIndex={startIndex}
            endIndex={endIndex}
          />
        </div>
      </section>

      {/* ================= SECTION 02: 7 ACADEMIC WINGS SHOWCASE ================= */}
      <DepartmentsShowcase onSelectCourse={setSelectedCourse} />

      {/* High-Impact Admission CTA Banner */}
      <AdmissionCtaBanner />

      {/* Global Institutional Footer */}
      <Footer
        onSelectGovernance={setSelectedGovernance}
        onNavigateToTour={() => setIsTourOpen(true)}
      />

      {/* Course Detail Modal Drawer */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
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
