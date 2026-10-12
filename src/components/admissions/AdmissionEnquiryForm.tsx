"use client";

import { useState, useId } from "react";
import Image from "next/image";
import { COURSE_DETAILS } from "@/data/courses";
import { ADMISSION_HELPDESK_INFO } from "@/data/admissions";

export default function AdmissionEnquiryForm() {
  const allCourses = Object.values(COURSE_DETAILS);
  const formId = useId();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    fatherName: "",
    category: "General",
    qualification: "10+2 Passed",
    selectedPathway: "ALL",
    selectedCourse: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredCourses = allCourses.filter((course) => {
    if (formData.selectedPathway === "ALL") return true;
    return course.category === formData.selectedPathway;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleDownloadProspectus = () => {
    alert(
      "Universal College, Patran — Official Prospectus 2026-27 download initiated.\nYou may also collect the hardbound graphic copy from the On-Campus Admission Cell."
    );
  };

  const handleDownloadDisclosure = () => {
    alert(
      "Universal College, Patran — Mandatory Regulatory Disclosure (AICTE / UGC / MRSPTU / DTE) document downloaded."
    );
  };

  return (
    <section
      id="enquiry-desk"
      className="relative w-full py-32 px-6 md:px-12 bg-white text-neutral-900 border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-800 font-semibold">
              The Admissions Concierge Desk
            </span>
          </div>
          <h2 className="text-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950">
            Begin Your Academic Journey.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Register your expression of interest for direct admission, schedule 1-on-1 counseling with departmental deans, or download official institutional publications.
          </p>
        </div>

        {/* Asymmetric 5-7 Split: Concierge & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols): Editorial Photography & Physical Publications */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-black/10">
              <Image
                src="/assets/campus/corridor.jpg"
                alt="Universal College Patran Admission Wing"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-semibold">
                  Administrative Wing • Ground Floor
                </span>
                <p className="text-sm font-light leading-relaxed text-white/90">
                  Universal College, Patran, District Patiala, Punjab – 147005. Walk-in merit counseling active daily.
                </p>
              </div>
            </div>

            {/* Helpline Directory Strip */}
            <div className="p-6 rounded-2xl bg-[#f8f8f6] border border-black/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
                Direct Admissions Officers
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center py-1 border-b border-black/5">
                  <span className="text-neutral-500">Central Helpline:</span>
                  <a
                    href="tel:9779146689"
                    className="font-bold text-neutral-950 hover:text-emerald-700"
                  >
                    97791-46689
                  </a>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-black/5">
                  <span className="text-neutral-500">Secondary Desk:</span>
                  <a
                    href="tel:9888406100"
                    className="font-bold text-neutral-950 hover:text-emerald-700"
                  >
                    98884-06100
                  </a>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-neutral-500">Landline Office:</span>
                  <span className="text-neutral-800 font-semibold">01764-242195</span>
                </div>
              </div>
            </div>

            {/* Publications Download Card */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                Official Institutional Publications
              </span>

              <button
                type="button"
                onClick={handleDownloadProspectus}
                className="w-full p-4 rounded-2xl bg-white border border-black/10 hover:border-emerald-700 text-left transition-all group cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-neutral-950 group-hover:text-emerald-900 transition-colors">
                    Official College Prospectus 2026–27
                  </h4>
                  <p className="text-[11px] font-mono text-neutral-500">
                    Universal Prospect Graph File (4) • Complete Edition PDF
                  </p>
                </div>
                <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-emerald-700">
                  ↓ PDF
                </span>
              </button>

              <button
                type="button"
                onClick={handleDownloadDisclosure}
                className="w-full p-4 rounded-2xl bg-white border border-black/10 hover:border-emerald-700 text-left transition-all group cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-neutral-950 group-hover:text-emerald-900 transition-colors">
                    Mandatory Regulatory Disclosure
                  </h4>
                  <p className="text-[11px] font-mono text-neutral-500">
                    AICTE / UGC / MRSPTU Statutory Compliance Filings
                  </p>
                </div>
                <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-emerald-700">
                  ↓ PDF
                </span>
              </button>
            </div>
          </div>

          {/* Right Column (7 Cols): Editorial Floating Underline Form */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-[#fbfbf9] border border-black/10 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-16 px-4 space-y-8 animate-fadeIn">
                <span className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-3xl font-bold mx-auto border border-emerald-300">
                  ✓
                </span>

                <div className="space-y-3">
                  <h3 className="text-editorial text-3xl sm:text-4xl font-bold text-neutral-950">
                    Enrolment Expression Logged.
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-neutral-900">{formData.fullName}</strong>. Your enquiry for{" "}
                    <strong className="text-emerald-900 font-semibold">{formData.selectedCourse || "Universal Academic Programmes"}</strong> has been allocated to our central scrutiny desk.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-black/10 max-w-md mx-auto text-left text-xs font-mono space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Application Reference:</span>
                    <span className="font-bold text-neutral-950">UCP-2026-ENQ{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Assigned Incharge:</span>
                    <span>Prof. Gurpreet Singh (Admission Cell)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Turnaround Window:</span>
                    <span className="text-emerald-800 font-semibold">Same-Day Desk Contact</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleDownloadProspectus}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-mono text-xs font-semibold tracking-wider uppercase cursor-pointer transition-all shadow-md"
                  >
                    Download Prospectus 2026–27 (PDF) ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-900 font-mono text-xs font-semibold tracking-wider uppercase cursor-pointer transition-all"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold block">
                    Candidate Profile
                  </span>
                  <h3 className="text-editorial text-2xl font-bold text-neutral-950">
                    Candidate Particulars
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label
                      htmlFor={`${formId}-fullName`}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block"
                    >
                      Full Legal Name *
                    </label>
                    <input
                      id={`${formId}-fullName`}
                      type="text"
                      required
                      placeholder="As on 10th Matriculation DMC"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-base font-light focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Father's Name */}
                  <div className="space-y-1">
                    <label
                      htmlFor={`${formId}-fatherName`}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block"
                    >
                      Father&apos;s / Guardian&apos;s Name *
                    </label>
                    <input
                      id={`${formId}-fatherName`}
                      type="text"
                      required
                      placeholder="Legal Parent/Guardian"
                      value={formData.fatherName}
                      onChange={(e) =>
                        setFormData({ ...formData, fatherName: e.target.value })
                      }
                      className="w-full py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-base font-light focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Mobile Phone */}
                  <div className="space-y-1">
                    <label
                      htmlFor={`${formId}-phone`}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block"
                    >
                      Active Phone (WhatsApp Linked) *
                    </label>
                    <input
                      id={`${formId}-phone`}
                      type="tel"
                      required
                      placeholder="10-digit primary mobile"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-base font-light focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label
                      htmlFor={`${formId}-email`}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id={`${formId}-email`}
                      type="email"
                      placeholder="candidate@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-base font-light focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Category */}
                  <div className="space-y-1">
                    <label
                      htmlFor={`${formId}-category`}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block"
                    >
                      Category (For Scholarship Evaluation) *
                    </label>
                    <select
                      id={`${formId}-category`}
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="General">General / Open Merit</option>
                      <option value="SC">Scheduled Caste (SC) — 100% PMSS Waiver</option>
                      <option value="Minority">Minority Community (Sikh, Muslim, Christian)</option>
                      <option value="BC">Backward Class (BC / OBC)</option>
                      <option value="Other">Other / Physically Challenged</option>
                    </select>
                  </div>

                  {/* Previous Qualification */}
                  <div className="space-y-1">
                    <label
                      htmlFor={`${formId}-qualification`}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block"
                    >
                      Qualifying Examination *
                    </label>
                    <select
                      id={`${formId}-qualification`}
                      value={formData.qualification}
                      onChange={(e) =>
                        setFormData({ ...formData, qualification: e.target.value })
                      }
                      className="w-full py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="10th Passed">10th Passed (Eligible for ITI / CMLT / CMPA)</option>
                      <option value="10+2 Passed">10+2 Passed / Awaiting Result (Eligible for Degrees)</option>
                      <option value="Graduation Passed">Graduation Passed (Eligible for PGDCA / M.Sc.)</option>
                      <option value="Other">Diploma Holder / Equivalent</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Pathway Filter */}
                  <div className="space-y-1">
                    <label
                      htmlFor={`${formId}-pathway`}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block"
                    >
                      University Pathway *
                    </label>
                    <select
                      id={`${formId}-pathway`}
                      value={formData.selectedPathway}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          selectedPathway: e.target.value,
                          selectedCourse: "",
                        })
                      }
                      className="w-full py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="ALL">All Pathways (30 Total Programmes)</option>
                      <option value="MRSPTU">MRSPTU Technical Degrees &amp; Diplomas</option>
                      <option value="PSOU">PSOU Open Learning Programmes</option>
                      <option value="NIOS">NIOS Government Skill Courses</option>
                      <option value="ITI">ITI Industrial Trades (NCVT)</option>
                    </select>
                  </div>

                  {/* Course Dropdown */}
                  <div className="space-y-1">
                    <label
                      htmlFor={`${formId}-course`}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block"
                    >
                      Desired Programme *
                    </label>
                    <select
                      id={`${formId}-course`}
                      required
                      value={formData.selectedCourse}
                      onChange={(e) =>
                        setFormData({ ...formData, selectedCourse: e.target.value })
                      }
                      className="w-full py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-sm focus:outline-none transition-colors cursor-pointer font-medium"
                    >
                      <option value="">Select Programme from Directory...</option>
                      {filteredCourses.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.category})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label
                    htmlFor={`${formId}-message`}
                    className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium block"
                  >
                    Special Guidance / Questions (Optional)
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    rows={2}
                    placeholder="Inquire regarding PMSS documentation, transport routes, hostel, or fee concession..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full py-2.5 bg-transparent border-b border-black/20 focus:border-neutral-950 text-neutral-950 text-sm font-light focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-neutral-950 hover:bg-emerald-800 text-white font-mono text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "Registering Candidate..." : "Submit Enrolment Registration →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
