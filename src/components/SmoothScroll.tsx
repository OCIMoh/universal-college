"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    lenisInstance?: Lenis;
  }
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Disable native scroll restoration so browser does not fight Lenis and GSAP
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      prevent: (node) => {
        // ONLY allow native scrolling if target is inside an element explicitly marked with data-lenis-prevent
        // AND that element actually has scrollable overflow content
        const preventEl = (node as HTMLElement).closest("[data-lenis-prevent]") as HTMLElement | null;
        if (preventEl) {
          return (
            preventEl.scrollHeight > preventEl.clientHeight ||
            preventEl.scrollWidth > preventEl.clientWidth
          );
        }
        return false;
      },
    });

    window.lenisInstance = lenis;

    // Synchronize Lenis scroll events with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis directly via GSAP ticker for frame-perfect lockstep
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Global MutationObserver to automatically stop/start Lenis whenever any overlay appears/disappears
    const checkOverlayLock = () => {
      const activeDialog = document.querySelector(
        '[role="dialog"]:not(.invisible):not([aria-hidden="true"]), [aria-modal="true"]:not(.invisible):not([aria-hidden="true"])'
      );
      const isCssLocked =
        document.body.style.overflow === "hidden" ||
        document.documentElement.style.overflow === "hidden";

      const shouldLock = Boolean(activeDialog || isCssLocked);

      if (shouldLock) {
        if (!lenis.isStopped) {
          lenis.stop();
        }
      } else {
        if (lenis.isStopped) {
          lenis.start();
        }
      }
    };

    // Non-passive wheel & touch listeners when Lenis is stopped to guarantee zero background scroll bleed
    const handleWheelLock = (e: WheelEvent) => {
      if (!lenis.isStopped) return;
      const target = e.target as HTMLElement | null;
      const scrollable = target?.closest("[data-lenis-prevent]") as HTMLElement | null;
      if (scrollable && (scrollable.scrollHeight > scrollable.clientHeight || scrollable.scrollWidth > scrollable.clientWidth)) {
        return; // Allow internal modal scroll
      }
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    const handleTouchLock = (e: TouchEvent) => {
      if (!lenis.isStopped) return;
      const target = e.target as HTMLElement | null;
      const scrollable = target?.closest("[data-lenis-prevent]") as HTMLElement | null;
      if (scrollable && (scrollable.scrollHeight > scrollable.clientHeight || scrollable.scrollWidth > scrollable.clientWidth)) {
        return; // Allow internal modal scroll
      }
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheelLock, { passive: false });
    window.addEventListener("touchmove", handleTouchLock, { passive: false });

    // Observe documentElement (root) so changes to both html and body styles or classes are captured
    const observer = new MutationObserver(checkOverlayLock);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class", "aria-hidden"],
    });

    return () => {
      window.removeEventListener("wheel", handleWheelLock);
      window.removeEventListener("touchmove", handleTouchLock);
      observer.disconnect();
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      delete window.lenisInstance;
    };
  }, []);

  return <>{children}</>;
}
