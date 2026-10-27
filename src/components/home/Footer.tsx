"use client";

import Image from "next/image";
import Link from "next/link";
import { GOVERNANCE_DATA, GovernanceSection } from "@/data/governance";
import { Phone, Mail, MapPin } from "@/components/common/Icons";

interface FooterProps {
  onSelectGovernance: (section: GovernanceSection) => void;
  onNavigateToTour?: () => void;
}

export default function Footer({ onSelectGovernance, onNavigateToTour }: FooterProps) {
  return (
    <footer className="bg-[#0e0e12] text-[#f9f9f7] pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1: Identity & Coordinates (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/assets/brand/college-logo-transparent.png"
                  alt="Universal College Patran Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-editorial text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Universal College
                </h3>
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block">
                  Patran, Punjab • Est. 2014
                </span>
              </div>
            </Link>

            <div className="text-xs md:text-sm text-white/70 space-y-3 font-light leading-relaxed">
              <p>
                <strong className="text-white font-medium">Dashmesh Charitable Trust</strong><br />
                Chanda Colony, Patran-147105,<br />
                Distt. Patiala, Punjab (India)
              </p>
              <div className="font-mono text-xs space-y-1.5 text-white/80">
                <p className="text-emerald-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>+91-97791-46689 / +91-81465-26002</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>universalpatran@gmail.com</span>
                </p>
                <p className="text-white/50">Office: Mon–Sat 9:00 AM – 4:30 PM</p>
              </div>
            </div>

            <div className="pt-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-mono uppercase tracking-wider inline-block">
                Post-Matric SC Scholarship (PMSS) Available
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Directory (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-6">
              Institutional Pages
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-white/75 font-light">
              <li>
                <Link href="/" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>Home & Campus Highlights</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>About Us, Leadership & Values</span>
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>Academic Programmes & Fee Matrix</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>Admissions & PMSS Scholarship</span>
                </Link>
              </li>
              <li>
                <Link href="/campus" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>Campus Labs & 16 Facilities</span>
                </Link>
              </li>
              <li>
                <Link href="/campus" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>Campus Facilities, Labs & Sports</span>
                </Link>
              </li>
              <li>
                <Link href="/governance" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>Governance & Institutional Cells</span>
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>Faculty & Staff Directory</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>Contact Us & Campus Directions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Statutory Governance & Cells (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-6">
              Statutory Cells
            </h4>
            <ul className="space-y-3 text-xs md:text-sm text-white/75 font-light">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectGovernance(GOVERNANCE_DATA["mandatory-disclosures"])}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left focus:outline-none focus:text-emerald-400"
                >
                  <span className="text-white/40 text-xs">↗</span>
                  <span>Mandatory Disclosures</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectGovernance(GOVERNANCE_DATA["board-of-governance"])}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left focus:outline-none focus:text-emerald-400"
                >
                  <span className="text-white/40 text-xs">↗</span>
                  <span>Board of Governance</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectGovernance(GOVERNANCE_DATA["antiragging-committee"])}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left focus:outline-none focus:text-emerald-400"
                >
                  <span className="text-white/40 text-xs">↗</span>
                  <span>Anti-Ragging Committee</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectGovernance(GOVERNANCE_DATA["grievance-redressal"])}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left focus:outline-none focus:text-emerald-400"
                >
                  <span className="text-white/40 text-xs">↗</span>
                  <span>Grievance & POSH Cell</span>
                </button>
              </li>
              <li className="pt-2">
                <Link
                  href="/governance"
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>All 9 Committees</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: 360 Walkthrough & Location Map (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-2">
              Virtual Walkthrough
            </h4>

            {/* Visit Campus 360 Tour Launcher */}
            <button
              type="button"
              onClick={onNavigateToTour}
              aria-label="Open 360 virtual walkthrough of the campus"
              className="relative h-28 w-full rounded-2xl overflow-hidden group border border-white/10 hover:border-emerald-400/50 transition-all shadow-xl block text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Image
                src="/assets/campus/visit-glass-porch.webp"
                alt="Visit Universal College Patran Campus"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-mono font-semibold mb-1">
                  SPATIAL TAKEOVER
                </span>
                <span className="text-sm md:text-base font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Visit Campus 360° Tour</span>
                  <span>→</span>
                </span>
              </div>
            </button>

            {/* Embedded Google Map */}
            <div className="h-40 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-black/40">
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
              <a
                href="https://maps.google.com/?q=Universal+College+Patran+Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] text-white/80 flex items-center justify-between hover:bg-black transition-colors"
              >
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                  <span>Patran, Patiala (Punjab)</span>
                </span>
                <span className="text-emerald-400 font-mono">Get Directions ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Affiliations Badges Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-white/40 uppercase tracking-widest text-[10px]">Affiliated & Approved:</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">MRSPTU Bathinda</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">PSOU Patiala</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">NIOS Govt. of India</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">AICTE / UGC Norms</span>
          </div>
          <div className="text-[11px] text-white/50">
            Anti-Ragging Helpline: <span className="text-emerald-400 font-mono">1800-180-5522</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <div>
            © 2026 Universal College Patran (Dashmesh Charitable Trust). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/governance" className="hover:text-white transition-colors">
              Mandatory Disclosures
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Campus Directory
            </Link>
            <span>•</span>
            <Link href="/admissions" className="hover:text-white transition-colors">
              PMSS 100% Scholarship
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
