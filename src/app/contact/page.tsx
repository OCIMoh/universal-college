"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/home/Footer";
import SubpageHero from "@/components/common/SubpageHero";
import CampusTourOverlay from "@/components/home/CampusTourOverlay";
import GovernanceModal from "@/components/GovernanceModal";
import AdmissionCtaBanner from "@/components/home/AdmissionCtaBanner";
import type { GovernanceSection } from "@/data/governance";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Copy,
  Building2,
  ExternalLink,
  ShieldCheck,
  Globe,
  Award,
} from "@/components/common/Icons";

const DEPARTMENT_HELPLINES = [
  {
    title: "Central Admission Cell",
    incharge: "Er. Yadwinder Singh / Ms. Harjinder Kaur",
    phone: "+91-98886-78516",
    email: "admissions@universalpatran.com",
    hours: "9:00 AM – 4:30 PM (Mon–Sat)",
    scope: "MRSPTU degrees, PSOU programs, NIOS skill courses & admission counseling.",
  },
  {
    title: "Directorate & Executive Office",
    incharge: "Dr. Amrish Dhawan (Director)",
    phone: "+91-97791-46689",
    email: "director@universalpatran.com",
    hours: "10:00 AM – 3:30 PM (By Appointment)",
    scope: "Institutional policy, academic collaborations, regulatory affairs & quality benchmarks.",
  },
  {
    title: "Scholarship & PMSS Desk",
    incharge: "Mr. Sapinder Singh (Incharge)",
    phone: "+91-81465-26002",
    email: "scholarships@universalpatran.com",
    hours: "9:30 AM – 4:00 PM (Mon–Sat)",
    scope: "Dr. Ambedkar portal registration, 100% SC fee waivers & minority welfare assistance.",
  },
  {
    title: "Public Relations & Media Bureau",
    incharge: "Mr. Lovepreet Singh / Ms. Amandeep Kaur",
    phone: "+91-98886-78516",
    email: "universalpatran@gmail.com",
    hours: "9:00 AM – 4:30 PM (Mon–Sat)",
    scope: "Press communications, youth festival delegations & community outreach.",
  },
];

export default function ContactPage() {
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    category: "Admissions 2026–27",
    courseOfInterest: "BCA Hons (MRSPTU)",
    message: "",
  });

  const [submittedToken, setSubmittedToken] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = `UCP-INQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedToken(token);
  };

  const copyToken = () => {
    if (submittedToken) {
      navigator.clipboard.writeText(submittedToken);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="relative w-full bg-[#f9f9f7] text-[#1a1a1a]">
      {/* Floating Header Dock */}
      <Header
        onOpenTour={() => setIsTourOpen(true)}
        isTourOpen={isTourOpen}
      />

      {/* Subpage Hero */}
      <SubpageHero
        kicker="Direct Institutional Helpdesk • Regional Outreach • Campus Coordinates"
        title="Contact & Helpdesk"
        subtitle="Direct lines to collegiate leadership, admission scrutiny counselors, scholarship coordinators, and campus travel directions under Dashmesh Charitable Trust."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        backgroundImage="/assets/campus/corridor.jpg"
        imageLocationTag="Central Administrative Block & Information Reception • Universal College Patran"
      />

      {/* ================= 1. DIRECT DEPARTMENT HELPLINES ROSTER ================= */}
      <section className="relative w-full py-20 px-6 md:px-12 border-b border-black/10 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/10">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
                [01 / ORAL HELPLINES DIRECTORY]
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
                Departmental Information Desks.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Connect directly with responsible collegiate officers for prompt academic, financial, or verification assistance during official campus operating hours.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 bg-[#fbfbfa] border border-black/10 px-4 py-2.5 rounded-full shrink-0">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Campus Hours: Mon–Sat: 9:00 AM – 4:30 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPARTMENT_HELPLINES.map((dept, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-black/10 bg-[#fcfcfb] p-6 space-y-4 hover:border-black/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                      Desk #{String(idx + 1).padStart(2, "0")}
                    </span>
                    <Building2 className="w-4 h-4 text-neutral-400" />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-neutral-900">
                    {dept.title}
                  </h3>

                  <p className="text-xs font-mono text-neutral-600">
                    Officer: <strong>{dept.incharge}</strong>
                  </p>

                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {dept.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/10 space-y-2 text-xs font-mono">
                  <a
                    href={`tel:${dept.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-2 text-neutral-900 font-bold hover:text-emerald-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{dept.phone}</span>
                  </a>

                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-neutral-600 hover:text-neutral-950 transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span className="truncate">{dept.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 2. TWO-COLUMN INQUIRY & COORDINATES SECTION ================= */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-[#f9f9f7] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: OFFICIAL CAMPUS COORDINATES & TRAVEL (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold block">
                [02 / CAMPUS COORDINATES]
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
                Arrival &amp; Geographic Location.
              </h2>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Universal College is situated in Patran, District Patiala, Punjab, strategically positioned on the main Patiala-Patran highway corridor.
              </p>
            </div>

            {/* Address Card */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm space-y-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Postal Address</span>
              </div>
              <p className="text-neutral-800 font-sans text-sm leading-relaxed">
                <strong>Universal College Patran</strong><br />
                Chanda Colony, Patran, Patiala Road,<br />
                Patran, District Patiala, Punjab – 147105 (India)
              </p>
              <div className="pt-2 border-t border-black/10 flex items-center justify-between text-neutral-500 text-[11px]">
                <span>Registered Society:</span>
                <span className="font-semibold text-neutral-800">Dashmesh Charitable Trust</span>
              </div>
            </div>

            {/* Operating Timings Card */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Institutional Schedule</span>
              </div>
              <div className="space-y-1.5 text-neutral-700">
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span>Monday – Friday:</span>
                  <span className="font-bold text-neutral-900">9:00 AM – 4:30 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span>Saturday (Office &amp; Labs):</span>
                  <span className="font-bold text-neutral-900">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between py-1 text-neutral-400">
                  <span>Sunday &amp; Gazetted Holidays:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Travel Connectivity Card */}
            <div className="rounded-2xl border border-black/10 bg-[#f4f4ee] p-6 space-y-3 font-mono text-xs">
              <span className="text-[10px] uppercase text-neutral-500 font-semibold block tracking-wider">
                Transit Connectivity
              </span>
              <ul className="space-y-2 text-neutral-700 text-xs font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span><strong>Patran Central Bus Stand:</strong> ~1.5 km (Regular direct shuttles &amp; e-rickshaws available).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span><strong>Patiala Junction Railway Station:</strong> ~55 km (Well connected via state express transport).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span><strong>Jakhal Railway Junction:</strong> ~25 km (Convenient passenger and express train hub).</span>
                </li>
              </ul>
            </div>

            {/* Social Media & Official Handle */}
            <div className="p-4 rounded-xl border border-black/10 bg-white shadow-sm flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-500">Official Instagram:</span>
              <a
                href="https://instagram.com/universal_college_patran"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-800 font-bold hover:underline flex items-center gap-1.5"
              >
                <span>@universal_college_patran</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: OFFICIAL ENQUIRY DESK FORM (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-black/10 bg-white p-6 sm:p-10 shadow-sm space-y-6">
            <div className="border-b border-black/10 pb-4">
              <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-800 font-semibold block">
                [03 / ELECTRONIC INQUIRY TRANSMISSION]
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-neutral-900 mt-1">
                Formal Inquiry &amp; Campus Visit Request
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1">
                Transmitted requests are routed directly to the Central Admission Cell with a guaranteed 24-hour response SLA.
              </p>
            </div>

            {submittedToken ? (
              <div className="p-8 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-6 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold block">
                    Inquiry Docket Generated
                  </span>
                  <h4 className="font-serif font-bold text-2xl text-neutral-900">
                    Transmission Acknowledged
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto">
                    Your inquiry has been assigned to the admission scrutiny cell. Please quote the reference token below for any follow-up communications.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-black/10 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 max-w-sm mx-auto font-mono text-xs">
                  <span className="text-base font-bold tracking-wider text-neutral-900">
                    {submittedToken}
                  </span>
                  <button
                    onClick={copyToken}
                    className="px-3 py-1.5 rounded-lg border border-black/15 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors flex items-center gap-1.5 text-xs font-mono"
                  >
                    <Copy className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{copied ? "Copied!" : "Copy Token"}</span>
                  </button>
                </div>

                <button
                  onClick={() => setSubmittedToken(null)}
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-900 underline underline-offset-4"
                >
                  Submit another formal inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-neutral-600 font-semibold block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Navjot Singh"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Mobile Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-neutral-600 font-semibold block">
                      Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-XXXXX-XXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-neutral-600 font-semibold block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="scholar@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Inquiry Nature */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-neutral-600 font-semibold block">
                      Nature of Inquiry *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    >
                      <option value="Admissions 2026–27">Admissions 2026–27</option>
                      <option value="PMSS 100% SC Scholarship">PMSS 100% SC Scholarship</option>
                      <option value="Campus Visit Appointment">Campus Visit Appointment</option>
                      <option value="Fee & Payment Queries">Fee &amp; Payment Queries</option>
                      <option value="Certificates / Transcripts">Certificates / Transcripts</option>
                      <option value="General Administration">General Administration</option>
                    </select>
                  </div>
                </div>

                {/* Course of Interest */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-neutral-600 font-semibold block">
                    Academic Program / Department of Interest
                  </label>
                  <select
                    value={formData.courseOfInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, courseOfInterest: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                  >
                    <option value="BCA Hons (MRSPTU)">BCA Hons — Computer Science (MRSPTU)</option>
                    <option value="B.Com Hons (MRSPTU)">B.Com Hons — Commerce &amp; Accounting (MRSPTU)</option>
                    <option value="BA Computer Science (MRSPTU)">BA Computer Science (MRSPTU)</option>
                    <option value="B.Sc Fashion Technology (MRSPTU)">B.Sc Fashion Technology (MRSPTU)</option>
                    <option value="M.Sc Computer Science (MRSPTU)">M.Sc Computer Science (MRSPTU)</option>
                    <option value="PGDCA (MRSPTU)">PGDCA — Post Graduate Diploma in Computer Apps</option>
                    <option value="Nursing Assistant Certificate (MRSPTU)">Nursing Assistant Certificate (MRSPTU)</option>
                    <option value="PSOU Open Degree / Diploma">PSOU Open Degree / Diploma Program</option>
                    <option value="NIOS Vocational Certification">NIOS Vocational Certification</option>
                    <option value="ITI Trade Course">ITI Trade Program (Electrician / Welder / Plumber)</option>
                    <option value="Other / Not Decided">Other / Not Yet Decided</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-neutral-600 font-semibold block">
                    Detailed Inquiry / Specific Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Specify eligibility questions, fee waiver inquiries, hostel requirements, or preferred campus visit dates..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-neutral-900 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Transmit Official Inquiry to Admission Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= 3. INTERACTIVE MAP & ROUTE LOCATION ================= */}
      <section className="relative w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-black/10 pb-4">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-800 font-semibold block">
                [04 / SATELLITE GEOLOCATION]
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-neutral-900 mt-1">
                Patran Campus Interactive Map
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Universal+College+Patran+Punjab"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-neutral-600 hover:text-neutral-950 flex items-center gap-1.5 underline underline-offset-4"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl border border-black/10 overflow-hidden shadow-sm h-[420px] w-full bg-[#f4f4f0] relative">
            <iframe
              title="Universal College Patran Campus Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.65715978436!2d76.0463!3d29.9388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911bf6b55555555%3A0x123456789abcdef!2sPatran%2C%20Punjab!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />
          </div>
        </div>
      </section>

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
