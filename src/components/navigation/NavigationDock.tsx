"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationDockProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  title: string;
  subtitle: string;
  href: string;
}

const ACADEMIC_PORTALS: NavItem[] = [
  { title: "Home", subtitle: "Arrival, Vision & Highlights", href: "/" },
  { title: "About Us", subtitle: "Leadership, Values & Legacy", href: "/about" },
  { title: "Academics", subtitle: "Curricular Ledger & 7 Wings", href: "/academics" },
  { title: "Admissions", subtitle: "PMSS 100% Waiver & Checklist", href: "/admissions" },
  { title: "Campus & Facilities", subtitle: "19 Specialized Labs & Stadium", href: "/campus" },
  { title: "Campus Life", subtitle: "8 Pillars, Clubs & NSS/NCC", href: "/campus-life" },
];

const COMMUNITY_PORTALS: NavItem[] = [
  { title: "Events & Gallery", subtitle: "39+ Events & Photo Archive", href: "/events" },
  { title: "Governance & IQAC", subtitle: "Governing Body & Statutory Cells", href: "/governance" },
  { title: "Faculty Directory", subtitle: "64 Academic Staff Members", href: "/faculty" },
  { title: "Contact Us", subtitle: "Direct Helplines & Map", href: "/contact" },
];

export default function NavigationDock({ isOpen, onClose }: NavigationDockProps) {
  const pathname = usePathname();
  const dockRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      ref={dockRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Mini-Dock"
      className={`w-[94vw] sm:w-[580px] md:w-[680px] max-h-[82vh] overflow-y-auto rounded-3xl bg-[#09090c]/96 backdrop-blur-2xl border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9)] p-5 md:p-6 text-white mt-2.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
        isOpen
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 -translate-y-3 scale-[0.97] pointer-events-none"
      }`}
    >
      {/* Hairline Specular Top Highlight */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

      {/* Dock Header Strip */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10.5px] font-mono tracking-[0.2em] uppercase text-emerald-400 font-semibold">
            Institutional Directory
          </span>
        </div>
        <span className="text-[10px] font-mono text-white/40 tracking-wider">
          Patran, Punjab • Est. 2014
        </span>
      </div>

      {/* Two-Column Portals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {/* Column 1: Academic & Campus Portals */}
        <div className="space-y-1">
          <span className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-white/40 font-semibold block px-2 mb-1.5">
            Academic & Campus
          </span>
          {ACADEMIC_PORTALS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group px-3.5 py-2.5 rounded-2xl flex items-center justify-between transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white/12 border border-emerald-500/40 text-emerald-300 shadow-sm"
                    : "hover:bg-white/[0.07] border border-transparent text-white/85 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                  )}
                  <div className="truncate">
                    <h4
                      className={`font-serif text-sm md:text-[15px] tracking-tight leading-snug transition-colors ${
                        isActive
                          ? "text-emerald-300 font-medium"
                          : "text-white/90 group-hover:text-emerald-300"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[10.5px] font-mono text-white/40 group-hover:text-white/60 truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <svg
                  className="w-3.5 h-3.5 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>

        {/* Column 2: Governance & Community */}
        <div className="space-y-1 flex flex-col justify-between">
          <div>
            <span className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-white/40 font-semibold block px-2 mb-1.5">
              Governance & Directory
            </span>
            {COMMUNITY_PORTALS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group px-3.5 py-2.5 rounded-2xl flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/12 border border-emerald-500/40 text-emerald-300 shadow-sm"
                      : "hover:bg-white/[0.07] border border-transparent text-white/85 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                    )}
                    <div className="truncate">
                      <h4
                        className={`font-serif text-sm md:text-[15px] tracking-tight leading-snug transition-colors ${
                          isActive
                            ? "text-emerald-300 font-medium"
                            : "text-white/90 group-hover:text-emerald-300"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[10.5px] font-mono text-white/40 group-hover:text-white/60 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <svg
                    className="w-3.5 h-3.5 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>

          {/* Admissions Spotlight Card in Column 2 */}
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 mt-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Session 2026–27
              </span>
              <span className="text-[9.5px] font-mono text-white/40">
                PMSS 100% Free
              </span>
            </div>
            <p className="text-[11px] text-white/70 font-sans leading-normal mb-2.5">
              Scheduled Caste scholars eligible for full tuition fee waiver.
            </p>
            <Link
              href="/admissions"
              onClick={onClose}
              className="inline-flex items-center justify-center w-full py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-[11px] uppercase tracking-wider font-semibold transition-colors"
            >
              Verify Eligibility →
            </Link>
          </div>
        </div>
      </div>

      {/* Dock Bottom Utility Bar */}
      <div className="pt-3.5 mt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[10.5px] text-white/50">
        <div>
          <span>Helpline: </span>
          <span className="text-emerald-400">92162-44163 / 97791-46689</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Affiliations:</span>
          <span className="text-white/70">MRSPTU • PSOU • NIOS</span>
        </div>
      </div>
    </div>
  );
}
