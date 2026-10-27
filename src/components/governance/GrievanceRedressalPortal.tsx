"use client";

import { useState } from "react";
import { STATUTORY_COMMITTEES } from "@/data/governanceData";
import {
  Send,
  CheckCircle,
  Copy,
  Clock,
  Phone,
  FileCheck,
  ShieldCheck,
  Lock,
} from "@/components/common/Icons";

interface GrievancePortalProps {
  initialCommitteeId?: string;
}

export default function GrievanceRedressalPortal({
  initialCommitteeId,
}: GrievancePortalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    userType: "Enrolled Student",
    rollNumber: "",
    committeeId: initialCommitteeId || "grievance-redressal",
    phone: "",
    email: "",
    urgency: "Routine Statutory Review",
    subject: "",
    description: "",
    isConfidential: true,
  });

  const [submittedTicket, setSubmittedTicket] = useState<{
    token: string;
    date: string;
    committeeName: string;
    urgency: string;
    officer: string;
    officerPhone: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCommittee =
      STATUTORY_COMMITTEES.find((c) => c.id === formData.committeeId) ||
      STATUTORY_COMMITTEES[0];

    const presidingOfficer = selectedCommittee.members[0];
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const token = `UCP-GRV-2026-${randomSuffix}`;

    setSubmittedTicket({
      token,
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      committeeName: selectedCommittee.name,
      urgency: formData.urgency,
      officer: presidingOfficer.name,
      officerPhone: presidingOfficer.phone,
    });
  };

  const copyToken = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket.token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="grievance-portal" className="relative w-full py-28 px-6 md:px-12 bg-[#f9f9f7] text-[#1a1a1a] border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b border-black/10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
                [03 / CONFIDENTIAL OMBUDSMAN DESK]
              </span>
              <span className="w-1 h-1 rounded-full bg-black/30" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                Statutory Redressal Mechanism
              </span>
            </div>

            <h2 className="text-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.06]">
              Institutional Redressal Desk.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              In accordance with AICTE, UGC, and MRSPTU statutory ordinances, all scholars, parents, and employees have the protected legal right to lodge formal grievances with complete confidentiality and time-bound inquiry.
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-neutral-600 bg-white border border-black/10 px-4 py-2.5 rounded-full shadow-sm">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>Encrypted &amp; Confidential Submission</span>
          </div>
        </div>

        {/* ================= SUCCESS CONFIRMATION VOUCHER ================= */}
        {submittedTicket ? (
          <div className="max-w-3xl mx-auto rounded-2xl border border-black/15 bg-white p-8 sm:p-12 space-y-8 animate-in fade-in duration-500 shadow-xl">
            {/* Voucher Top Ribbon */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-800 uppercase tracking-widest block font-semibold">
                    Official Statutory Docket Filed
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900">
                    Registration Receipt Voucher
                  </h3>
                </div>
              </div>

              <div className="text-right font-mono text-xs text-neutral-500">
                <span>Date: {submittedTicket.date}</span>
              </div>
            </div>

            {/* Docket Token Card */}
            <div className="p-6 rounded-xl border border-black/10 bg-[#f4f4f0] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-neutral-500 uppercase text-[10px] block tracking-wider">
                  Docket Tracking Token
                </span>
                <span className="text-2xl font-bold tracking-widest text-neutral-950">
                  {submittedTicket.token}
                </span>
              </div>

              <button
                onClick={copyToken}
                className="px-4 py-2.5 rounded-lg border border-black/15 bg-white hover:bg-neutral-100 text-neutral-900 flex items-center gap-2 transition-colors text-xs font-mono shadow-sm"
              >
                <Copy className="w-3.5 h-3.5 text-emerald-600" />
                <span>{copied ? "Copied!" : "Copy Token"}</span>
              </button>
            </div>

            {/* Official Assignment Particulars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
                <span className="text-neutral-500 text-[10px] uppercase block">Assigned Body</span>
                <span className="text-neutral-900 font-semibold block truncate">{submittedTicket.committeeName}</span>
              </div>
              <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
                <span className="text-neutral-500 text-[10px] uppercase block">Presiding Officer</span>
                <span className="text-emerald-800 font-semibold block truncate">{submittedTicket.officer}</span>
              </div>
              <div className="p-4 rounded-xl border border-black/10 bg-[#fbfbfa] space-y-1">
                <span className="text-neutral-500 text-[10px] uppercase block">Desk Phone</span>
                <span className="text-neutral-900 font-semibold block">{submittedTicket.officerPhone}</span>
              </div>
            </div>

            {/* SLA Timeline Commitments */}
            <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-center justify-between text-xs font-mono text-emerald-900">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>Formal acknowledgement within 24 hours • Resolution within 7 working days</span>
              </span>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setSubmittedTicket(null)}
                className="text-xs font-mono text-neutral-500 hover:text-neutral-900 underline underline-offset-4"
              >
                File another formal complaint or feedback
              </button>
            </div>
          </div>
        ) : (
          /* ================= TWO-COLUMN OMBUDSMAN DESK FORM ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN: STATUTORY SAFEGUARDS NOTICE (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-800 block font-semibold">
                  Statutory Rights &amp; Protections
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-neutral-900">
                  Zero-Retribution Safeguards.
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  All submissions are logged into the central institutional statutory ledger. The identity of complainants is protected under strict confidentiality ordinances.
                </p>
              </div>

              {/* Legal Standards Checklist */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl border border-black/10 bg-white shadow-sm space-y-1">
                  <div className="text-emerald-800 font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>UGC / AICTE Regulation 2012</span>
                  </div>
                  <p className="text-neutral-600 font-sans text-xs pt-1">
                    Protection against academic, financial, or evaluation victimisation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-black/10 bg-white shadow-sm space-y-1">
                  <div className="text-emerald-800 font-bold flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span>POSH Act 2013 Compliance</span>
                  </div>
                  <p className="text-neutral-600 font-sans text-xs pt-1">
                    Internal Complaints Cell handles all gender-related concerns with absolute discretion.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-black/10 bg-white shadow-sm space-y-1">
                  <div className="text-emerald-800 font-bold flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Ombudsman Escalation</span>
                  </div>
                  <p className="text-neutral-600 font-sans text-xs pt-1">
                    Direct recourse to MRSPTU University Ombudsman if unresolved within 7 days.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-black/10 bg-[#f4f4f0] text-xs font-mono text-neutral-700 space-y-1.5">
                <span className="text-neutral-500 uppercase text-[10px] block font-semibold">Direct Oral Helpline</span>
                <p className="text-neutral-900 font-bold text-sm tracking-wide">+91-98886-78516 / +91-97791-46689</p>
              </div>
            </div>

            {/* RIGHT COLUMN: OFFICIAL DOCKET FILING FORM (7 Cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-black/10 bg-white p-6 sm:p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <h4 className="font-serif font-bold text-xl text-neutral-900">
                    File Redressal Docket
                  </h4>
                  <p className="text-xs font-mono text-neutral-500 mt-1">
                    Fields marked with asterisk (*) are statutory requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Balram Singh"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Stakeholder Category */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-medium">
                      Stakeholder Role *
                    </label>
                    <select
                      value={formData.userType}
                      onChange={(e) =>
                        setFormData({ ...formData, userType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 text-xs font-mono focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    >
                      <option value="Enrolled Student">Enrolled Student</option>
                      <option value="Parent / Guardian">Parent / Guardian</option>
                      <option value="Faculty / Employee">Faculty / Employee</option>
                      <option value="Alumni / Visitor">Alumni / External Stakeholder</option>
                    </select>
                  </div>

                  {/* Roll Number */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-medium">
                      Roll No. / Enrollment ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 24BCA102 (if applicable)"
                      value={formData.rollNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, rollNumber: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Target Committee */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-medium">
                      Target Oversight Cell *
                    </label>
                    <select
                      value={formData.committeeId}
                      onChange={(e) =>
                        setFormData({ ...formData, committeeId: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 text-xs font-mono focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    >
                      {STATUTORY_COMMITTEES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-medium">
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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="universalpatran@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Urgency Classification */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-medium block">
                    Urgency Classification
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { label: "Routine Statutory Review", desc: "Within 7 working days" },
                      { label: "Priority Expedited", desc: "Within 48 hours" },
                      { label: "Zero-Hour Critical", desc: "Immediate hearing" },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.label}
                        onClick={() => setFormData({ ...formData, urgency: item.label })}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          formData.urgency === item.label
                            ? "bg-[#1a1a1a] text-white font-semibold border-[#1a1a1a] shadow-sm"
                            : "bg-[#fcfcfb] text-neutral-700 border-black/10 hover:border-black/30"
                        }`}
                      >
                        <span className="text-xs font-mono block">{item.label}</span>
                        <span className={`text-[10px] block mt-0.5 ${formData.urgency === item.label ? "text-white/70" : "text-neutral-500"}`}>{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-medium">
                    Subject / Summary Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Brief heading of the matter..."
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                  />
                </div>

                {/* Detailed Statement */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-medium">
                    Detailed Statement of Matter *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please specify dates, locations, nature of concern, or specific administrative redressal sought..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/15 bg-[#fcfcfb] text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                  />
                </div>

                {/* Confidentiality Toggle */}
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.isConfidential}
                    onChange={(e) =>
                      setFormData({ ...formData, isConfidential: e.target.checked })
                    }
                    className="mt-0.5 rounded border-black/20 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs text-neutral-600 leading-relaxed font-light">
                    <strong className="text-neutral-800 font-semibold">Request Strict Confidentiality:</strong> Transmit this docket solely to the committee presiding officer.
                  </span>
                </label>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#1a1a1a] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Transmit Official Redressal Docket</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
