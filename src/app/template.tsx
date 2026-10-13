"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);

  // Synchronize route change: reset scroll to top immediately and apply smooth settle
  useEffect(() => {
    // 1. Instantly reset Lenis virtual scroll and window scroll to top
    if (typeof window !== "undefined") {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }

    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 240);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Minimal 1.5px Horizon Hairline Laser */}
      <div
        key={`laser-${pathname}`}
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 shadow-[0_0_8px_rgba(52,211,153,0.7)] z-[9999] pointer-events-none animate-horizon-laser"
        aria-hidden="true"
      />

      {/* Page Content with Zero-Flash Seamless Settling */}
      <div className={animating ? "min-h-screen animate-page-enter" : "min-h-screen"}>
        {children}
      </div>
    </>
  );
}
