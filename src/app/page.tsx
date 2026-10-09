"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CourseDetail } from "@/data/courses";
import type { GovernanceSection } from "@/data/governance";
import CourseModal from "@/components/CourseModal";
import GovernanceModal from "@/components/GovernanceModal";
import HorizontalPrograms from "@/components/home/HorizontalPrograms";
import Footer from "@/components/home/Footer";
import CampusTourOverlay from "@/components/home/CampusTourOverlay";
import Header from "@/components/navigation/Header";
import WelcomeFocusSection from "@/components/home/WelcomeFocusSection";
import PhilosophySymbolismSection from "@/components/home/PhilosophySymbolismSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const openTour = () => {
    setIsTourOpen(true);
  };

  // Check URL query parameter for deep link to tour (?tour=true)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("tour") === "true") {
        setIsTourOpen(true);
      }
    }
  }, []);

  // Hide floating "Visit Campus" button with animation as soon as user reaches the footer
  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.02,
      }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Entrance Animation (Cinematic Blur & Rise)
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 35, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30, filter: "blur(8px)" },
        {
          opacity: 0.9,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.45,
        }
      );

      // Hero Text Scroll-out Animation
      gsap.to(".hero-text", {
        opacity: 0,
        y: -150,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });



      // Parallax Image (Percentage-based shift with scale buffer to prevent edge-clipping)
      gsap.fromTo(
        ".parallax-img",
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Delay refresh to ensure layout and fonts are stable
      const timer = setTimeout(() => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      }, 150);

      // Store timer so we can clear it in cleanup
      return () => {
        clearTimeout(timer);
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={containerRef} className="relative w-full">
      {/* Floating Adaptive Chameleon Header Dock */}
      <Header onOpenTour={openTour} isTourOpen={isTourOpen} />

      {/* SCENE 01: The Arrival */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        >
          <source src="/assets/webformat/hero-walkthrough-29s.webm" type="video/webm" />
          <source src="/assets/hero-walkthrough-29s.mp4" type="video/mp4" />
        </video>
        <div className="hero-text relative z-10 text-center text-white px-4">
          <h1 className="hero-title opacity-0 text-editorial text-5xl md:text-8xl font-bold mb-4 tracking-tighter">
            Discover Your Path
          </h1>
          <p className="hero-subtitle opacity-0 text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
            Universal College Patran — Serving all sections of society with value-based multidisciplinary education.
          </p>
        </div>
      </section>

      {/* WELCOME TO UNIVERSAL CAMPUS & 13 FOCUS PILLARS */}
      <WelcomeFocusSection />

      {/* Global Fixed Visit Campus Button across entire website (bottom right) */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isTourOpen || isFooterVisible
            ? "opacity-0 pointer-events-none translate-y-8 scale-90 blur-sm"
            : "opacity-100 pointer-events-auto translate-y-0 scale-100 blur-0"
        }`}
      >
        <button
          onClick={openTour}
          aria-label="Start virtual campus tour"
          className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-black/90 hover:bg-black text-white backdrop-blur-2xl border border-white/25 shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          <span className="relative flex items-center justify-center w-4 h-4 text-emerald-400 group-hover:rotate-90 transition-transform duration-500 ease-out">
            <svg viewBox="0 0 16 16" fill="none" className="w-full h-full stroke-current">
              <circle cx="8" cy="8" r="6" strokeWidth="1.2" strokeOpacity="0.45" />
              <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" />
              <path d="M8 2V0.5" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">
            Visit Campus
          </span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* SCENE 02: The Corridors */}
      <section className="parallax-section relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/webformat/fork-path.webp"
          alt="Campus Paths"
          fill
          sizes="100vw"
          className="parallax-img object-cover scale-125 opacity-90"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white p-10 bg-black/20 backdrop-blur-sm rounded-xl">
          <h2 className="text-editorial text-4xl md:text-6xl font-bold mb-4">
            15+ Courses. 4 Pathways. 1 Campus.
          </h2>
          <p className="text-lg">Degree • ITI • Skill • Open University</p>
        </div>
      </section>

      {/* SCENE 03: The Academic World (Horizontal Scroll) */}
      <HorizontalPrograms onSelectCourse={setSelectedCourse} />

      {/* SCENE 04: The Foundation */}
      <section className="relative min-h-screen py-32 px-4 flex flex-col items-center justify-center bg-white text-center">
        <h2 className="text-editorial text-5xl md:text-7xl font-bold mb-12 max-w-4xl">
          "A saga of fortitude, conviction and sacrifice."
        </h2>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-700 mb-16">
          Established in 2014 by S. Baljeet Singh under the Dashmesh Charitable Trust, Universal College has grown from 7 courses to a thriving multidisciplinary campus. Our vision is to produce human intellectual capital of international standards while maintaining deep roots in our community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="relative h-[400px] rounded-xl overflow-hidden group">
            <Image src="/assets/webformat/people-courtyard.webp" alt="Courtyard" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden group">
            <Image src="/assets/webformat/library.webp" alt="Library" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* OUR EDUCATIONAL PHILOSOPHY, 6-STEP PROGRESSION & EMBLEM SYMBOLISM */}
      <PhilosophySymbolismSection />

      {/* SCENE 05: The Destination (Footer) */}
      <div ref={footerRef}>
        <Footer
          onSelectGovernance={setSelectedGovernance}
          onNavigateToTour={openTour}
        />
      </div>

      {/* Course Detail Modal Drawer */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      {/* Statutory Governance & Compliance Modal */}
      <GovernanceModal
        data={selectedGovernance}
        onClose={() => setSelectedGovernance(null)}
      />

      {/* In-Situ Spatial Takeover (Fullscreen Portal) */}
      <CampusTourOverlay
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />
    </main>
  );
}
