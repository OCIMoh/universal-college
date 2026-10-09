"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisitCampusPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [counter, setCounter] = useState(0);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);

  const isExitingRef = useRef(false);

  // Reset scroll, video, and states whenever entering the tour
  useEffect(() => {
    isExitingRef.current = false;
    setIsExiting(false);
    setProgress(0);
    setShowScrollPrompt(true);
    setCounter(0);
    setCurtainsOpen(false);
    setLoadingFinished(false);

    if (typeof window !== "undefined") {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  // Concept 1: Precision High-Speed Counter (00 ➔ 100) & Curtain Trigger
  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // 1.8s counter

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setCounter(pct);

      if (elapsed >= duration) {
        clearInterval(timer);
        // Trigger multi-tiered curtain wipe
        setTimeout(() => {
          setCurtainsOpen(true);
        }, 150);

        // Fully unmount loading blocker after curtain wipe finishes
        setTimeout(() => {
          setLoadingFinished(true);
        }, 1300);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const triggerExit = () => {
    if (isExitingRef.current) return;
    isExitingRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      router.push("/?returning=true");
    }, 1200);
  };

  useEffect(() => {
    let animationFrameId: number;
    let targetTime = 0;
    let isSeeking = false;

    const video = videoRef.current;

    const onSeeked = () => {
      isSeeking = false;
    };

    const onEnded = () => {
      if (!isExitingRef.current) {
        triggerExit();
      }
    };

    if (video) {
      video.addEventListener("seeked", onSeeked);
      video.addEventListener("ended", onEnded);
    }

    const renderLoop = () => {
      if (video && Number.isFinite(video.duration) && !isSeeking) {
        const current = video.currentTime;
        const diff = targetTime - current;

        if (Math.abs(diff) > 0.015) {
          const nextTime = current + diff * 0.14;
          video.currentTime = Math.min(Math.max(nextTime, 0), video.duration);
          isSeeking = true;
        }

        // Trigger exit when user scrubs to final frames of the campus walkthrough
        if (
          targetTime >= video.duration - 0.25 &&
          current >= video.duration - 0.6 &&
          !isExitingRef.current
        ) {
          triggerExit();
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    // GSAP ScrollTrigger for hardware-accelerated lockstep scrubbing with Lenis
    const st = ScrollTrigger.create({
      trigger: scrollContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        setProgress(p);

        if (self.scroll() > 150) {
          setShowScrollPrompt(false);
        } else {
          setShowScrollPrompt(true);
        }

        if (video && Number.isFinite(video.duration)) {
          targetTime = p * video.duration;
        }

        // Only trigger exit after the user has actively scrolled into the tour
        if (p >= 0.985 && self.scroll() > 500 && !isExitingRef.current) {
          triggerExit();
        }
      },
    });

    const onLoadedMetadata = () => {
      ScrollTrigger.refresh();
    };

    if (video) {
      video.addEventListener("loadedmetadata", onLoadedMetadata);
    }

    return () => {
      st.kill();
      cancelAnimationFrame(animationFrameId);
      if (video) {
        video.removeEventListener("seeked", onSeeked);
        video.removeEventListener("ended", onEnded);
        video.removeEventListener("loadedmetadata", onLoadedMetadata);
      }
    };
  }, []);

  const formattedCount = String(counter).padStart(3, "0");

  return (
    <div
      ref={scrollContainerRef}
      className={`relative min-h-[900vh] bg-[#09090b] text-white transition-all duration-700 ${
        isExiting ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
      }`}
    >
      {/* ========================================================================= */}
      {/* AWWWARDS CONCEPT 1: ARCHITECTURAL APERTURE & MULTI-TIERED CURTAIN WIPE   */}
      {/* ========================================================================= */}
      {!loadingFinished && (
        <div className="fixed inset-0 z-[150] pointer-events-none">
          {/* Multi-tiered Vertical Column Slat Curtains (Wipe Open as Counter hits 100) */}
          <div className="absolute inset-0 grid grid-cols-5 h-full w-full pointer-events-auto">
            {[0, 1, 2, 3, 4].map((colIndex) => (
              <div
                key={colIndex}
                className="curtain-slat h-full w-full bg-[#0a0a0c] border-r border-white/[0.03]"
                style={{
                  transform: curtainsOpen
                    ? colIndex % 2 === 0
                      ? "translateY(-101%)"
                      : "translateY(101%)"
                    : "translateY(0%)",
                  transitionDelay: `${colIndex * 60}ms`,
                }}
              />
            ))}
          </div>

          {/* Central Architectural Aperture HUD (Fades out when curtains wipe) */}
          <div
            className={`absolute inset-0 flex flex-col justify-between p-8 md:p-14 z-20 transition-opacity duration-500 ${
              curtainsOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Top Monospaced Metadata */}
            <div className="flex items-center justify-between font-mono text-[11px] text-white/50 tracking-[0.25em] uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SPATIAL ENGINE // ACTIVE</span>
              </div>
              <div className="hidden sm:block">PATRAN, PB • 29.9329° N, 76.0468° E</div>
              <div>SYS // READY</div>
            </div>

            {/* Giant Razor-Thin Serif Counter in Center */}
            <div className="text-center my-auto flex flex-col items-center">
              <span className="font-mono text-xs md:text-sm text-emerald-400 tracking-[0.4em] uppercase mb-4 block">
                PATRAN, PB • 29.9329° N, 76.0468° E
              </span>

              {/* [ 0 7 4 ] Digit Display */}
              <div className="flex items-center justify-center gap-3 md:gap-5 mb-6 font-mono text-xs md:text-sm text-white/40 tracking-[0.3em]">
                <span>[</span>
                <span className="text-6xl md:text-9xl lg:text-[11rem] font-extralight text-editorial tracking-tighter text-white font-serif leading-none">
                  {formattedCount[0]} {formattedCount[1]} {formattedCount[2]}
                </span>
                <span>]</span>
              </div>

              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mb-5" />

              <span className="font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase text-white/70">
                INITIATING FIRST-PERSON SPATIAL ARCHIVE
              </span>
            </div>

            {/* Bottom Institutional Seal */}
            <div className="flex items-center justify-between font-mono text-[10px] text-white/30 tracking-[0.3em] uppercase">
              <span>Universal College Patran</span>
              <span>Architecture • Environment • People</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* RETURNING TO WEBSITE ARCHITECTURAL CURTAIN CLOSURE                        */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-[160] transition-opacity duration-700 pointer-events-none ${
          isExiting ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 grid grid-cols-5 h-full w-full">
          {[0, 1, 2, 3, 4].map((colIndex) => (
            <div
              key={colIndex}
              className="curtain-slat h-full w-full bg-[#0a0a0c] border-r border-white/[0.03]"
              style={{
                transform: isExiting ? "translateY(0%)" : "translateY(-101%)",
                transitionDelay: `${colIndex * 50}ms`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10">
          <span className="font-mono text-xs text-emerald-400 tracking-[0.4em] uppercase mb-4">
            ARCHIVE SESSION CONCLUDED
          </span>
          <h2 className="text-3xl md:text-6xl font-extralight text-editorial text-white mb-4">
            Returning to Main Site
          </h2>
          <div className="font-mono text-xs text-white/50 tracking-[0.3em] uppercase">
            Restoring Institutional Directory
          </div>
        </div>
      </div>

      {/* Sticky Fullscreen Video Layer with Zoom Reveal Effect (scale(1.08) -> scale(1.00)) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          playsInline
          muted
          preload="auto"
          className={`w-full h-full object-cover pointer-events-none transition-transform duration-1000 ease-out ${
            curtainsOpen ? "scale-100" : "scale-108"
          }`}
        >
          <source src="/assets/webformat/campus-walkthrough-scrub.webm" type="video/webm" />
          <source src="/assets/campus-walkthrough-scrub.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60 pointer-events-none" />

        {/* Top Header Information */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/90">
              Universal College Patran • Campus Walkthrough
            </span>
          </div>

          <div className="text-right bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-white/50">Progress</span>
            <span className="text-xs font-bold tracking-wider font-mono text-emerald-400">
              {Math.round(progress * 100)}%
            </span>
          </div>
        </div>

        {/* Center Tour Narrative Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center z-10">
          <span className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/60 mb-3">
            Campus Experience
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4 text-editorial max-w-4xl drop-shadow-2xl">
            Visiting Universal College Patran
          </h1>
          <p className="text-white/80 max-w-xl text-sm md:text-base drop-shadow-md">
            Scroll smoothly to explore our grounds, pathways, laboratories, and student atmosphere.
          </p>
        </div>

        {/* Floating Scroll Indicator */}
        <div
          aria-hidden="true"
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none transition-all duration-700 z-20 ${
            showScrollPrompt ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-white/90 bg-black/60 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 shadow-2xl">
            Scroll down gently to walk the campus
          </span>
          <div className="w-5 h-8 border border-white/50 rounded-full flex justify-center pt-1.5 animate-pulse">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>

        {/* WATERMARK COVER & ANIMATED EXIT BUTTON (Bottom-Right) */}
        <div className="absolute bottom-6 right-6 z-40">
          <button
            onClick={triggerExit}
            aria-label="Exit virtual tour and return to main website"
            className="group relative flex items-center gap-3 px-6 py-3.5 rounded-full bg-black/95 hover:bg-white text-white hover:text-black backdrop-blur-2xl border border-white/30 shadow-[0_15px_40px_rgba(0,0,0,0.85)] transition-all duration-500 transform hover:scale-105 active:scale-95 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors">
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>

            <div className="text-left">
              <span className="block text-[9px] uppercase tracking-widest text-white/60 group-hover:text-black/60 leading-none">
                Return
              </span>
              <span className="block text-xs font-bold tracking-wider uppercase leading-tight">
                Exit to Website
              </span>
            </div>
          </button>
        </div>

        {/* Bottom Progress Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/15 z-20">
          <div
            className="h-full bg-emerald-400 transition-all duration-100 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
