"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CampusTourOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isStandalone?: boolean;
}

export default function CampusTourOverlay({
  isOpen,
  onClose,
  isStandalone = false,
}: CampusTourOverlayProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isExiting, setIsExiting] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const isExitingRef = useRef(false);
  const isSeekingRef = useRef(false);
  const touchStartYRef = useRef(0);

  // Sync mounting lifecycle with isOpen prop and orchestrate minimal entrance aperture
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsExiting(false);
      isExitingRef.current = false;
      targetProgressRef.current = 0;
      currentProgressRef.current = 0;
      setCurtainsOpen(false);
      setLoadingFinished(false);
      setShowScrollPrompt(true);
      setIsPlaying(false);

      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }

      // Freeze Lenis & background page scroll
      if (typeof window !== "undefined" && window.lenisInstance) {
        window.lenisInstance.stop();
      }
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      // Atmospheric pause before curtain wipe
      const curtainTimer = setTimeout(() => {
        setCurtainsOpen(true);
      }, 400);

      // Fully unmount aperture entrance once curtain animation completes
      const finishTimer = setTimeout(() => {
        setLoadingFinished(true);
      }, 1300);

      return () => {
        clearTimeout(curtainTimer);
        clearTimeout(finishTimer);
      };
    } else {
      setShouldRender(false);
      if (typeof window !== "undefined" && window.lenisInstance) {
        window.lenisInstance.start();
      }
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Clean Exit sequence with closing curtain slats
  const triggerExit = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isExitingRef.current) return;
    isExitingRef.current = true;
    setIsExiting(true);
    setIsPlaying(false);

    if (videoRef.current) {
      videoRef.current.pause();
    }

    setTimeout(() => {
      setShouldRender(false);
      setIsExiting(false);
      isExitingRef.current = false;

      // Resume Lenis and recalculate ScrollTrigger positions
      if (typeof window !== "undefined" && window.lenisInstance) {
        window.lenisInstance.start();
      }
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      ScrollTrigger.refresh();

      onClose();
    }, 1350);
  }, [onClose]);

  // Keyboard navigation (Escape, Arrows, Space)
  useEffect(() => {
    if (!shouldRender || isExiting) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        triggerExit();
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        setShowScrollPrompt(false);
        setIsPlaying(false);
        targetProgressRef.current = Math.min(targetProgressRef.current + 0.0288, 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setShowScrollPrompt(false);
        setIsPlaying(false);
        targetProgressRef.current = Math.max(targetProgressRef.current - 0.0288, 0);
      } else if (e.key === " ") {
        e.preventDefault();
        setShowScrollPrompt(false);
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldRender, isExiting, triggerExit]);

  // Non-passive native wheel & touch listeners that preventDefault and cancel browser scroll
  useEffect(() => {
    if (!shouldRender || isExiting) return;

    const container = containerRef.current;
    if (!container) return;

    const onWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setShowScrollPrompt(false);
      if (isPlaying) {
        setIsPlaying(false);
        if (videoRef.current) videoRef.current.pause();
      }

      // Normalizing wheel delta across trackpads & notched wheels (decreased sensitivity by 10%)
      const delta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 120) * 0.000324;
      targetProgressRef.current = Math.min(Math.max(targetProgressRef.current + delta, 0), 1);
    };

    const onTouchStartNative = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const onTouchMoveNative = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setShowScrollPrompt(false);
      if (isPlaying) {
        setIsPlaying(false);
        if (videoRef.current) videoRef.current.pause();
      }

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      touchStartYRef.current = currentY;

      // Touch drag delta (decreased sensitivity by 10%)
      const delta = deltaY * 0.000864;
      targetProgressRef.current = Math.min(Math.max(targetProgressRef.current + delta, 0), 1);
    };

    container.addEventListener("wheel", onWheelNative, { passive: false });
    container.addEventListener("touchstart", onTouchStartNative, { passive: true });
    container.addEventListener("touchmove", onTouchMoveNative, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheelNative);
      container.removeEventListener("touchstart", onTouchStartNative);
      container.removeEventListener("touchmove", onTouchMoveNative);
    };
  }, [shouldRender, isExiting, isPlaying]);



  // Auto-tour toggle
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowScrollPrompt(false);
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // If at or near the end, rewind to beginning and play
      if (videoRef.current.currentTime >= (videoRef.current.duration || 1) - 0.5) {
        videoRef.current.currentTime = 0;
        targetProgressRef.current = 0;
        currentProgressRef.current = 0;
      }
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
      setIsPlaying(true);
    }
  };

  // Smooth Render & Scrub Lerp Loop
  useEffect(() => {
    if (!shouldRender) return;

    let rafId: number;
    const video = videoRef.current;

    const onSeeked = () => {
      isSeekingRef.current = false;
    };

    if (video) {
      video.addEventListener("seeked", onSeeked);
    }

    const renderLoop = () => {
      if (video && Number.isFinite(video.duration)) {
        if (isPlaying) {
          // Video auto-playing mode
          const currentP = video.currentTime / video.duration;
          targetProgressRef.current = currentP;
          currentProgressRef.current = currentP;

          if (video.ended || currentP >= 0.99) {
            triggerExit();
          }
        } else {
          // Manual scrub with inertia lerp
          const diff = targetProgressRef.current - currentProgressRef.current;
          if (Math.abs(diff) > 0.0005) {
            currentProgressRef.current += diff * 0.13;
          }

          const targetTime = currentProgressRef.current * video.duration;
          const timeDiff = targetTime - video.currentTime;

          if (Math.abs(timeDiff) > 0.018 && !isSeekingRef.current) {
            const nextTime = video.currentTime + timeDiff * 0.22;
            video.currentTime = Math.min(Math.max(nextTime, 0), video.duration);
            isSeekingRef.current = true;
          }

          // Auto exit upon reaching tour completion
          if (
            currentProgressRef.current >= 0.99 &&
            !isExitingRef.current
          ) {
            triggerExit();
          }
        }
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(rafId);
      if (video) {
        video.removeEventListener("seeked", onSeeked);
      }
    };
  }, [shouldRender, isPlaying, triggerExit]);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[120] bg-[#09090b] text-white select-none overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* FULLSCREEN VIDEO VIEWPORT & HARDWARE-ACCELERATED SCRUB ENGINE             */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
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

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

        {/* Constant Center Ambient Headline Lockup (Matching Screenshot) */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-4 sm:px-6 select-none transition-opacity duration-700 ${
            curtainsOpen && !isExiting ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Top Eyebrow / Kicker */}
            <span className="text-[9px] sm:text-[11px] md:text-xs font-medium tracking-[0.28em] uppercase text-white/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-1.5 sm:mb-2">
              Campus Experience
            </span>

            {/* Main Editorial Headline (Scaled down ~20%) */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-editorial leading-[0.85] tracking-tight text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
              <span className="block">Visiting Universal College</span>
              <span className="block mt-0">Patran</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[11px] sm:text-xs md:text-sm font-light text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
              Scroll smoothly to explore our grounds, pathways, laboratories, and student spaces
            </p>
          </div>
        </div>

        {/* Top Minimal Brand */}
        <div className="absolute top-6 left-6 z-40 pointer-events-none">
          <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/90 font-mono">
              Universal College Patran
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM MINIMAL CONTROLS (AUTO WALK & EXIT) - ELEVATED Z-[170]             */}
      {/* ========================================================================= */}
      <div
        className={`absolute bottom-6 left-6 right-6 flex items-center justify-between z-[170] pointer-events-none transition-opacity duration-300 ${
          isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Left: Auto Walk Toggle */}
        <div className="pointer-events-auto">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause auto walkthrough" : "Start auto walkthrough"}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-xl border border-white/15 hover:border-emerald-400/40 shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 select-none"
          >
            {isPlaying ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                <span className="text-[10px] font-semibold uppercase tracking-wider font-mono">
                  Pause
                </span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-[10px] font-semibold uppercase tracking-wider font-mono">
                  Auto Walk
                </span>
              </>
            )}
          </button>
        </div>

        {/* Right: Exit to Website Button */}
        <div className="pointer-events-auto">
          <button
            type="button"
            onClick={triggerExit}
            aria-label="Exit virtual tour and return to main website"
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/85 hover:bg-white text-white hover:text-black backdrop-blur-xl border border-white/25 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 select-none"
          >
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-[11px] font-bold tracking-wider uppercase font-mono">
              Exit
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MINIMAL & IMMERSIVE ARCHITECTURAL APERTURE ENTRANCE (NO NUMBERS)         */}
      {/* ========================================================================= */}
      {!loadingFinished && (
        <div className="absolute inset-0 z-[150] pointer-events-none">
          {/* Multi-tiered Vertical Column Slat Curtains (Wipe Open into the Walkthrough) */}
          <div className="absolute inset-0 grid grid-cols-5 h-full w-full pointer-events-none">
            {[0, 1, 2, 3, 4].map((colIndex) => (
              <div
                key={colIndex}
                className="curtain-slat h-full w-full bg-[#0a0a0c] border-r border-white/[0.03] pointer-events-none"
                style={{
                  transform: curtainsOpen
                    ? colIndex % 2 === 0
                      ? "translateY(-101%)"
                      : "translateY(101%)"
                    : "translateY(0%)",
                  transitionDelay: `${colIndex * 50}ms`,
                }}
              />
            ))}
          </div>

          {/* Minimal Entrance Centerpiece */}
          <div
            className={`absolute inset-0 flex items-center justify-center p-8 z-20 transition-all duration-700 pointer-events-none ${
              curtainsOpen ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
            }`}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm md:text-base font-light text-editorial tracking-[0.25em] uppercase text-white/90">
                Universal College Patran
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MINIMAL & IMMERSIVE EXIT APERTURE CURTAIN CLOSURE                         */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 z-[180] transition-opacity duration-500 pointer-events-none ${
          isExiting ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Multi-tiered Vertical Column Slat Curtains (Slide Down to Close) */}
        <div className="absolute inset-0 grid grid-cols-5 h-full w-full pointer-events-none">
          {[0, 1, 2, 3, 4].map((colIndex) => (
            <div
              key={colIndex}
              className="curtain-slat h-full w-full bg-[#0a0a0c] border-r border-white/[0.03] pointer-events-none"
              style={{
                transform: isExiting ? "translateY(0%)" : "translateY(-101%)",
                transitionDelay: `${colIndex * 45}ms`,
              }}
            />
          ))}
        </div>

        {/* Minimalist Exit Centerpiece */}
        <div
          className={`absolute inset-0 flex items-center justify-center p-8 z-20 transition-all duration-500 pointer-events-none ${
            isExiting ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            <span className="text-sm md:text-base font-light text-editorial tracking-[0.25em] uppercase text-white/90">
              Universal College Patran
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
