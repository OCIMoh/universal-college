"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTour?: () => void;
}

const MENU_ITEMS = [
  { num: "01", title: "Home", subtitle: "Arrival, Highlights, Philosophy & 360° Tour", href: "/" },
  { num: "02", title: "About Us", subtitle: "Leadership, Organogram, Vision, Values & Legacy", href: "/about" },
  { num: "03", title: "Academics", subtitle: "MRSPTU, PSOU, NIOS, ITI & 7 Academic Wings", href: "/academics" },
  { num: "04", title: "Admissions", subtitle: "PMSS SC 100% Fee Waiver, Eligibility & Checklist", href: "/admissions" },
  { num: "05", title: "Campus & Labs", subtitle: "16 Modern Facilities, Specialized Labs & Stadium", href: "/campus" },
  { num: "06", title: "Campus Life", subtitle: "8 Pillars, 12 Clubs, Student Development & NSS", href: "/campus-life" },
  { num: "07", title: "Events & Gallery", subtitle: "39+ Events Chronicle, Youth Festival & Media Wall", href: "/events" },
  { num: "08", title: "Governance", subtitle: "Governing Body, 9 Committees, IQAC & Disclosures", href: "/governance" },
  { num: "09", title: "Faculty Directory", subtitle: "64-Member Academic & Administrative Roster", href: "/faculty" },
  { num: "10", title: "Contact Us", subtitle: "Inquiry Desk, Department Directory & Campus Map", href: "/contact" },
];

export default function NavigationDrawer({
  isOpen,
  onClose,
  onOpenTour,
}: NavigationDrawerProps) {
  const pathname = usePathname();

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling and stop Lenis when open
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined" && window.lenisInstance) {
        window.lenisInstance.stop();
      }
      document.body.style.overflow = "hidden";
    } else {
      if (typeof window !== "undefined" && window.lenisInstance) {
        window.lenisInstance.start();
      }
      document.body.style.overflow = "";
    }
    return () => {
      if (typeof window !== "undefined" && window.lenisInstance) {
        window.lenisInstance.start();
      }
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation Directory"
      className="fixed inset-0 z-[100] bg-[#070709]/98 backdrop-blur-3xl text-white flex flex-col overflow-y-auto animate-fadeIn"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10 max-w-7xl w-full mx-auto flex-shrink-0">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/assets/college-logo-transparent.png"
              alt="Universal College Patran Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase font-mono block text-white/90 group-hover:text-emerald-400 transition-colors">
              Universal College
            </span>
            <span className="text-[10px] font-mono text-emerald-400 block tracking-wider">
              Patran, Punjab • Est. 2014
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {onOpenTour && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenTour();
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-emerald-600 text-white font-mono text-xs font-semibold transition-all duration-200 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base text-emerald-400">360</span>
              <span>Launch 360° Tour</span>
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Navigation Menu"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-200 font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer active:scale-95"
          >
            <span>Close</span>
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      </div>

      {/* Main Directory Body */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 py-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Numbered Navigation Grid */}
        <div className="lg:col-span-8">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-400 font-semibold block mb-6">
            Institutional Index Directory
          </span>

          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {MENU_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.num}
                  href={item.href}
                  onClick={onClose}
                  className={`group p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? "bg-white/10 border-emerald-500/50 shadow-lg"
                      : "bg-white/[0.03] border-white/5 hover:border-white/20 hover:bg-white/[0.08]"
                  }`}
                >
                  <span className={`text-xs font-mono font-bold mt-0.5 ${isActive ? "text-emerald-400" : "text-white/40 group-hover:text-emerald-400 transition-colors"}`}>
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-editorial text-xl font-bold tracking-tight transition-colors ${isActive ? "text-emerald-300" : "text-white group-hover:text-emerald-300"}`}>
                        {item.title}
                      </h3>
                      <span className="material-symbols-outlined text-sm text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                    <p className="text-xs text-white/50 font-light mt-1 line-clamp-1 group-hover:text-white/70 transition-colors">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Column: Key Contacts & Quick Admissions Desk */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12 pt-8 lg:pt-0">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-emerald-400 font-semibold block mb-4">
              Direct Admissions Desk
            </span>
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
              <h4 className="text-editorial text-xl font-bold text-white">
                Admissions Open 2026-27
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Explore degree courses, ITI trades, and government-approved skill certifications. Post-Matric SC Scholarship (100% Tuition Waiver) available for eligible students.
              </p>
              <div className="pt-2">
                <Link
                  href="/admissions"
                  onClick={onClose}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold transition-colors cursor-pointer"
                >
                  Apply & Check Eligibility →
                </Link>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/40 font-semibold block mb-3">
              Campus Coordinates
            </span>
            <div className="text-xs text-white/70 space-y-2 font-mono">
              <p>Chanda Colony, Patran-147105, Distt. Patiala</p>
              <p className="text-emerald-400">📞 97791-46689 / 81465-26002</p>
              <p className="text-white/50">✉ universalpatran@gmail.com</p>
              <p className="text-white/40">Office: Mon–Sat 9:00 AM – 4:30 PM</p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block mb-2 font-semibold">
              Regulatory Affiliations
            </span>
            <div className="flex flex-wrap gap-1.5 text-[9.5px] font-mono text-white/60">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">MRSPTU</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">PSOU</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">NIOS</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">AICTE</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">UGC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
