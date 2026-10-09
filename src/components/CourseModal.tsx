"use client";

import { useRef } from "react";
import { CourseDetail } from "@/data/courses";
import BaseModal from "@/components/BaseModal";

interface CourseModalProps {
  course: CourseDetail | null;
  onClose: () => void;
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  // Preserve last active course data during exit animation transition
  const lastCourseRef = useRef(course);
  if (course) {
    lastCourseRef.current = course;
  }
  const activeCourse = course || lastCourseRef.current;

  if (!activeCourse) return null;

  return (
    <BaseModal
      isOpen={Boolean(course)}
      onClose={onClose}
      variant="drawer"
      badge={{ text: `${activeCourse.category} Pathway`, variant: "emerald" }}
      institutionTag="Universal College Patran"
      subtitle={`Duration: ${activeCourse.duration}`}
      title={activeCourse.name}
      ariaLabelledBy="course-modal-title"
      footer={
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs text-white/50">
            Admissions Helpline: <br />
            <span className="text-white font-mono font-medium">+91-97791-46689</span>
          </div>
          <a
            href="tel:+919779146689"
            className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wide uppercase transition-all shadow-lg"
          >
            Inquire Admission
          </a>
        </div>
      }
    >
      {/* Course Overview */}
      <p className="text-white/70 text-sm md:text-base leading-relaxed">
        {activeCourse.overview}
      </p>

      {/* Quick Spec Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">
            Seats / Intake
          </span>
          <span className="text-base font-semibold text-emerald-400 font-mono">
            {activeCourse.intake || "Recognized Intake"}
          </span>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">
            Duration
          </span>
          <span className="text-base font-semibold text-white">
            {activeCourse.duration}
          </span>
        </div>
      </div>

      {/* Eligibility Requirements */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2">
          Eligibility Criteria
        </h4>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-white/90 text-sm leading-relaxed">
          {activeCourse.eligibility}
        </div>
      </div>

      {/* Affiliation / Board */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2">
          Certifying Affiliation
        </h4>
        <p className="text-sm text-white/80 font-medium">
          {activeCourse.affiliation}
        </p>
      </div>

      {/* Career Opportunities */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">
          Career Trajectories
        </h4>
        <div className="flex flex-wrap gap-2">
          {activeCourse.careerPaths.map((career, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg text-xs bg-white/10 text-white/80 border border-white/10"
            >
              ✓ {career}
            </span>
          ))}
        </div>
      </div>
    </BaseModal>
  );
}
