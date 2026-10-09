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
import CampusTransitionOverlay from "@/components/home/CampusTransitionOverlay";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);
  const [selectedGovernance, setSelectedGovernance] = useState<GovernanceSection | null>(null);
  const [isNavigatingToTour, setIsNavigatingToTour] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  // Clean navigation helper that preserves scroll position
  const navigateToTour = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("ucp_home_scroll", String(window.scrollY || 0));
    }
    setIsNavigatingToTour(true);
    setTimeout(() => {
      router.push("/visit-campus");
      setTimeout(() => {
        setIsNavigatingToTour(false);
      }, 400);
    }, 800);
  };

  // Guarantee that transition overlay is dismissed and restore scroll position cleanly
  useEffect(() => {
    setIsNavigatingToTour(false);
    if (window.lenisInstance) {
      window.lenisInstance.start();
    }
    document.body.style.overflow = "";

    const resetOverlay = () => {
      setIsNavigatingToTour(false);
    };

    window.addEventListener("pageshow", resetOverlay);
    window.addEventListener("popstate", resetOverlay);
    window.addEventListener("focus", resetOverlay);

    // Check if returning from campus tour with a saved scroll position
    const savedScrollStr =
      typeof window !== "undefined"
        ? sessionStorage.getItem("ucp_home_scroll")
        : null;

    if (savedScrollStr !== null) {
      const targetScroll = parseFloat(savedScrollStr);
      sessionStorage.removeItem("ucp_home_scroll");

      // Give layout and GSAP time to calibrate, then restore position smoothly
      const timer = setTimeout(() => {
        if (window.lenisInstance) {
          window.lenisInstance.start();
        }
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
        if (window.lenisInstance) {
          window.lenisInstance.scrollTo(targetScroll, { immediate: true });
        } else {
          window.scrollTo(0, targetScroll);
        }

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 120);
      }, 60);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("pageshow", resetOverlay);
        window.removeEventListener("popstate", resetOverlay);
        window.removeEventListener("focus", resetOverlay);
      };
    }

    return () => {
      window.removeEventListener("pageshow", resetOverlay);
      window.removeEventListener("popstate", resetOverlay);
      window.removeEventListener("focus", resetOverlay);
    };
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

      {/* Global Fixed Visit Campus Button across entire website (bottom right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={navigateToTour}
          aria-label="Start virtual campus tour"
          className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-black/90 hover:bg-black text-white backdrop-blur-2xl border border-white/25 shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
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

      {/* SCENE 05: The Destination (Footer) */}
      <Footer
        onSelectGovernance={setSelectedGovernance}
        onNavigateToTour={navigateToTour}
      />

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

      {/* Departing to Campus Tour Transition Overlay */}
      <CampusTransitionOverlay isNavigating={isNavigatingToTour} />
    </main>
  );
}
