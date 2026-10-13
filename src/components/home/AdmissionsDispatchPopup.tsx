"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { X, ChevronRight } from "@/components/common/Icons";

/**
 * Global Admissions Dispatch Banner
 * Reappears cleanly on every page navigation via the React key={pathname} lifecycle.
 * Automatically suppressed when browsing the /admissions page.
 */
export default function AdmissionsDispatchPopup() {
  const pathname = usePathname();

  // Suppress completely on the admissions route itself
  if (pathname === "/admissions") {
    return null;
  }

  // By keying on pathname, React cleanly remounts a fresh instance on every route change
  return <DispatchTicket key={pathname} />;
}

function DispatchTicket() {
  const [isVisible, setIsVisible] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1.2s arrival delay on each page to allow the visitor to see the page header first
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || !ticketRef.current) return;

    // Smooth GSAP slide & scale entrance
    gsap.fromTo(
      ticketRef.current,
      { y: 32, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );

    // Escape key listener for accessible dismissal on current page
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  const handleDismiss = () => {
    if (!ticketRef.current) {
      setIsVisible(false);
      return;
    }

    // Animate exit for current page
    gsap.to(ticketRef.current, {
      y: 22,
      opacity: 0,
      scale: 0.95,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setIsVisible(false);
      },
    });
  };

  if (!isVisible) return null;

  return (
    <aside
      ref={ticketRef}
      aria-label="Admissions 2026-27 Notice Dispatch"
      className="fixed bottom-6 left-6 z-50 max-w-[calc(100vw-3rem)] sm:max-w-[400px] select-none"
    >
      {/* Ticket Container with Hairline Border & Ambient Luminescence */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#0a0b10]/95 backdrop-blur-2xl border border-emerald-500/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_25px_rgba(16,185,129,0.08)] overflow-hidden flex flex-row items-stretch">
        
        {/* Subtle decorative top-edge gold/emerald gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-emerald-500/80 via-emerald-400 to-transparent" />

        {/* ================= MAIN TICKET BODY ================= */}
        <div className="flex-1 p-5 sm:p-6 space-y-3">
          {/* Eyebrow Dispatch Header */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-300 font-semibold">
              DISPATCH // ADM-2026
            </span>
            <span className="text-white/20 font-mono text-[10px]">•</span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-white/50">
              Session 2026–27
            </span>
          </div>

          {/* Editorial Display Heading */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight leading-snug">
              Admissions Open
            </h3>
            <p className="text-xs text-white/70 font-light font-sans leading-relaxed">
              Merit counseling & spot scrutiny active for MRSPTU Degrees, ITI Trades & Open Learning.
            </p>
          </div>

          {/* Scholarship Privilege Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10.5px] font-mono text-emerald-300">
            <span className="font-bold">100% Tuition Fee Waiver</span>
            <span className="text-white/40">·</span>
            <span className="text-white/70">PMSS Scheme</span>
          </div>

          {/* Direct CTA Action */}
          <div className="pt-1">
            <Link
              href="/admissions"
              onClick={() => {
                setIsVisible(false);
              }}
              className="group inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-white hover:text-emerald-300 transition-colors"
            >
              <span>Explore Cutoffs & Apply</span>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ================= VERTICAL SIDE RAIL & DISMISS '✕' ================= */}
        <div className="w-12 sm:w-14 bg-white/[0.03] border-l border-white/10 flex flex-col items-center justify-between py-4 px-1 shrink-0">
          {/* Side Monospaced Vertical Tag */}
          <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 rotate-90 whitespace-nowrap mt-4">
            ROLL 26
          </span>

          {/* The Side 'X' Dismiss Button */}
          <button
            onClick={handleDismiss}
            aria-label="Dismiss admissions notice"
            className="group relative w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all flex items-center justify-center cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-400"
          >
            <X className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:rotate-90 duration-300" />
            
            {/* Tooltip on hover */}
            <span className="absolute bottom-full mb-1 text-[9px] font-mono uppercase tracking-wider bg-black/90 text-white/80 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Close
            </span>
          </button>
        </div>

      </div>
    </aside>
  );
}
