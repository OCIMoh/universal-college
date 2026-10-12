"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import NavigationDock from "@/components/navigation/NavigationDock";

interface HeaderProps {
  onOpenTour?: () => void;
  onOpenMenu?: () => void;
  isTourOpen?: boolean;
}

export default function Header({ onOpenTour, onOpenMenu, isTourOpen = false }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Listen for custom event or local menu trigger
  useEffect(() => {
    const handleToggle = () => setIsMenuOpen((prev) => !prev);
    window.addEventListener("toggle-navigation-menu", handleToggle);
    return () => window.removeEventListener("toggle-navigation-menu", handleToggle);
  }, []);

  // Smart Auto-hide and Reveal on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      // Keep header visible if menu dock is open
      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY > 120 && currentScrollY > lastScrollYRef.current + 8) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollYRef.current - 6 || currentScrollY <= 80) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    if (onOpenMenu) {
      onOpenMenu();
    } else {
      setIsMenuOpen((prev) => !prev);
    }
  };

  const navLinks = [
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Campus", href: "/campus" },
    { label: "Faculty", href: "/faculty" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      {/* Dimmed backdrop to dismiss dock on outside click */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible && !isTourOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        {/* Floating Pill Dock */}
        <div
          className={`relative flex items-center justify-between gap-3 md:gap-6 px-3.5 py-1.5 md:px-4 md:py-1.5 rounded-full transition-all duration-300 ${
            isScrolled || isMenuOpen
              ? "bg-black/95 shadow-[0_16px_45px_rgba(0,0,0,0.9)] border-white/20"
              : "bg-[#050507]/92 shadow-[0_10px_35px_rgba(0,0,0,0.85)] border-white/10"
          } backdrop-blur-3xl border text-white select-none max-w-[94vw] sm:max-w-none`}
        >
          {/* Hairline Specular Top Highlight */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* ================= LEFT: OFFICIAL COLLEGE CREST & NAME ================= */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
          >
            <div className="relative w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/brand/college-logo-transparent.png"
                alt="Universal College Patran Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
            <span className="text-[10.5px] md:text-[11.5px] font-semibold tracking-[0.16em] uppercase text-white/90 group-hover:text-emerald-300 transition-colors">
              <span className="hidden sm:inline">UNIVERSAL COLLEGE </span>PATRAN
            </span>
          </Link>

          {/* ================= CENTER: EDITORIAL NAV LINKS ================= */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group px-3 py-1.5 text-[11.5px] font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-emerald-300 font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)] opacity-100"
                        : "bg-white/20 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ================= RIGHT: MINIMALIST MENU TRIGGER ================= */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleMenuClick}
              aria-label={isMenuOpen ? "Close navigation dock" : "Open navigation dock"}
              aria-expanded={isMenuOpen}
              className={`group flex items-center gap-2 px-3 py-1 md:py-1.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95 min-h-[30px] border ${
                isMenuOpen
                  ? "bg-white/20 border-white/40 text-emerald-300 shadow-sm"
                  : "bg-white/10 hover:bg-white/20 border-white/15 hover:border-white/30 text-white"
              }`}
            >
              {/* Morphing Hamburger / Close Icon */}
              <div className="relative w-3.5 h-3 flex items-center justify-center">
                <span
                  className={`absolute h-[1.5px] w-3.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`absolute h-[1.5px] bg-white transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 w-3.5" : "translate-y-1 w-2.5 group-hover:w-3.5"
                  }`}
                />
              </div>
              <span className="text-[10px] md:text-[11px] font-semibold tracking-wider uppercase font-mono text-white/90 group-hover:text-white">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>

        {/* ================= ANIMATED FLOATING MINI-DOCK ================= */}
        <NavigationDock
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </header>
    </>
  );
}
