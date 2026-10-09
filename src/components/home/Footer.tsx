"use client";

import Image from "next/image";
import { GOVERNANCE_DATA, GovernanceSection } from "@/data/governance";

interface FooterProps {
  onSelectGovernance: (section: GovernanceSection) => void;
  onNavigateToTour: () => void;
}

export default function Footer({ onSelectGovernance, onNavigateToTour }: FooterProps) {
  return (
      <footer className="bg-[#1a1a1a] text-[#f9f9f7] pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div>
            <h3 className="text-editorial text-3xl mb-6">Universal College Patran</h3>
            <p className="opacity-70 mb-4">Dashmesh Charitable Trust, Chanda Colony,<br/>Patran-147105, Distt. Patiala (Punjab)</p>
            <p className="opacity-70">info@universaliti.in<br/>universalpatran@gmail.com</p>
            <p className="opacity-70 mt-4">+91-97791-46689<br/>+91-81465-26002</p>
          </div>
          <div>
            <h3 className="text-editorial text-3xl mb-6">Governance & Compliance</h3>
            <ul className="space-y-3 opacity-80 text-sm">
              <li>
                <button
                  onClick={() => onSelectGovernance(GOVERNANCE_DATA["mandatory-disclosures"])}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:rounded"
                >
                  <span>Mandatory Disclosures & Approvals</span>
                  <span className="text-xs opacity-50">↗</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectGovernance(GOVERNANCE_DATA["board-of-governance"])}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:rounded"
                >
                  <span>Board of Governance Roster</span>
                  <span className="text-xs opacity-50">↗</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectGovernance(GOVERNANCE_DATA["antiragging-committee"])}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:rounded"
                >
                  <span>Anti-Ragging Committee & Squad</span>
                  <span className="text-xs opacity-50">↗</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectGovernance(GOVERNANCE_DATA["grievance-redressal"])}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:rounded"
                >
                  <span>Grievance Redressal & POSH Cell</span>
                  <span className="text-xs opacity-50">↗</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Visit Campus Preview Card with Real Location Map */}
          <div className="flex flex-col gap-4">
            <button
              onClick={onNavigateToTour}
              aria-label="Open 360 virtual walkthrough of the campus"
              className="relative h-36 w-full rounded-xl overflow-hidden group border border-white/10 hover:border-emerald-400/50 transition-all shadow-xl block text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Image
                src="/assets/webformat/visit-glass-porch.webp"
                alt="Visit Campus"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold mb-1">
                  Virtual Walkthrough
                </span>
                <span className="text-lg font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors">
                  Visit Campus 360° Tour →
                </span>
              </div>
            </button>

            {/* Embedded Interactive Google Map */}
            <div className="h-44 w-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative bg-black/40">
              <iframe
                title="Universal College Patran Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13788.74838183204!2d76.0468316!3d29.9329068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911f422eec89e13%3A0x6d97cbe6014e4b5e!2sPatran%2C%20Punjab%20147105!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-white/80 flex items-center justify-between pointer-events-none">
                <span>📍 Patran, Patiala (Punjab)</span>
                <span className="text-emerald-400 font-mono">Open in Maps</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center opacity-50 text-sm border-t border-white/10 pt-8">
          © 2026 Universal College Patran. All Rights Reserved.
        </div>
      </footer>
  );
}
