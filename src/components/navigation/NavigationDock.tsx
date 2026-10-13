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
  { title: "Home", subtitle: "Arrival & Highlights", href: "/" },
  { title: "About Us", subtitle: "Leadership & Legacy", href: "/about" },
  { title: "Academics", subtitle: "Curriculum & Fee Matrix", href: "/academics" },
  { title: "Admissions", subtitle: "PMSS 100% Free Scheme", href: "/admissions" },
];

const COMMUNITY_PORTALS: NavItem[] = [
  { title: "Campus", subtitle: "19 Specialized Labs", href: "/campus" },
  { title: "Governance", subtitle: "Governing Body & Cells", href: "/governance" },
  { title: "Faculty", subtitle: "64 Academic Staff", href: "/faculty" },
  { title: "Contact Us", subtitle: "Helplines & Coordinates", href: "/contact" },
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
      data-lenis-prevent
      aria-label="Navigation Mini-Dock"
      className={`rounded-2xl sm:rounded-3xl bg-[#09090c]/98 backdrop-blur-2xl text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
        isOpen
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto visible w-[92vw] sm:w-[480px] md:w-[540px] max-h-[85vh] overflow-y-auto overscroll-contain p-3 sm:p-4 mt-1.5 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
          : "opacity-0 -translate-y-3 scale-[0.97] pointer-events-none invisible h-0 max-h-0 p-0 m-0 border-0 shadow-none overflow-hidden"
      }`}
    >
      {/* Hairline Specular Top Highlight */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

      {/* Dock Header Strip */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-emerald-400 font-semibold">
            Directory
          </span>
        </div>
        <span className="text-[9.5px] font-mono text-white/40 tracking-wider">
          Patran • Est. 2014
        </span>
      </div>

      {/* Two-Column Portals Grid (2 columns on all screens to eliminate scrolling) */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {/* Column 1: Academic & Core */}
        <div className="space-y-1">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40 font-semibold block px-1.5 mb-1">
            Academics
          </span>
          {ACADEMIC_PORTALS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-white/15 border border-emerald-500/40 text-emerald-300 shadow-sm"
                    : "hover:bg-white/[0.08] border border-transparent text-white/85 hover:text-white"
                }`}
              >
                <div className="min-w-0 pr-1">
                  <h4
                    className={`font-serif text-[12.5px] sm:text-sm tracking-tight leading-snug transition-colors truncate ${
                      isActive
                        ? "text-emerald-300 font-medium"
                        : "text-white/90 group-hover:text-emerald-300"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[9px] sm:text-[9.5px] font-mono text-white/40 group-hover:text-white/60 truncate leading-tight">
                    {item.subtitle}
                  </p>
                </div>

                <svg
                  className="w-3 h-3 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all flex-shrink-0"
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

        {/* Column 2: Campus & Governance */}
        <div className="space-y-1">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40 font-semibold block px-1.5 mb-1">
            Campus
          </span>
          {COMMUNITY_PORTALS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-xl flex items-center justify-between transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-white/15 border border-emerald-500/40 text-emerald-300 shadow-sm"
                    : "hover:bg-white/[0.08] border border-transparent text-white/85 hover:text-white"
                }`}
              >
                <div className="min-w-0 pr-1">
                  <h4
                    className={`font-serif text-[12.5px] sm:text-sm tracking-tight leading-snug transition-colors truncate ${
                      isActive
                        ? "text-emerald-300 font-medium"
                        : "text-white/90 group-hover:text-emerald-300"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[9px] sm:text-[9.5px] font-mono text-white/40 group-hover:text-white/60 truncate leading-tight">
                    {item.subtitle}
                  </p>
                </div>

                <svg
                  className="w-3 h-3 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all flex-shrink-0"
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
      </div>

      {/* Dock Bottom Utility Bar */}
      <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-white/45">
        <div className="truncate">
          <span>Helpline: </span>
          <span className="text-emerald-400">97791-46689</span>
        </div>
        <div className="flex items-center gap-1.5 text-white/40 truncate">
          <span>Affiliated:</span>
          <span className="text-white/60">MRSPTU • PSOU • NIOS</span>
        </div>
      </div>
    </div>
  );
}
