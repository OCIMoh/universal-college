"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export type ModalVariant = "center" | "drawer";

export interface ModalBadge {
  text: string;
  variant?: "emerald" | "blue" | "amber" | "neutral";
}

export interface ModalFooterHelpers {
  close: () => void;
}

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  badge?: ModalBadge;
  institutionTag?: string;
  variant?: ModalVariant;
  maxWidth?: string;
  children: React.ReactNode;
  footer?: React.ReactNode | ((helpers: ModalFooterHelpers) => React.ReactNode);
  ariaLabelledBy?: string;
}

const BADGE_STYLES: Record<NonNullable<ModalBadge["variant"]>, string> = {
  emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  neutral: "bg-white/10 text-white/80 border-white/20",
};

export default function BaseModal({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  institutionTag = "Universal College Patran",
  variant = "center",
  maxWidth,
  children,
  footer,
  ariaLabelledBy = "modal-dialog-title",
}: BaseModalProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isExiting, setIsExiting] = useState(false);
  const isClosingRef = useRef(false);
  const exitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const contentBodyRef = useRef<HTMLDivElement>(null);

  // Synchronize component mount lifecycle with external isOpen changes
  useEffect(() => {
    if (isOpen) {
      isClosingRef.current = false;
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      setShouldRender(true);
      setIsExiting(false);
    } else {
      // When isOpen turns false externally
      if (shouldRender && !isClosingRef.current) {
        isClosingRef.current = true;
        setIsExiting(true);
        exitTimerRef.current = setTimeout(() => {
          setShouldRender(false);
          setIsExiting(false);
          isClosingRef.current = false;
        }, 260);
      }
    }

    return () => {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, [isOpen, shouldRender]);

  // Robust internal trigger for close actions (X button, backdrop click, Escape key, footer close)
  const handleClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsExiting(true);

    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    exitTimerRef.current = setTimeout(() => {
      setShouldRender(false);
      setIsExiting(false);
      isClosingRef.current = false;
      onClose();
    }, 260);
  }, [onClose]);

  // Handle Lenis smooth-scroll freeze & Escape key listener
  useEffect(() => {
    if (!shouldRender || isExiting) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (typeof window !== "undefined" && window.lenisInstance) {
      window.lenisInstance.stop();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (typeof window !== "undefined" && window.lenisInstance) {
        window.lenisInstance.start();
      }
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldRender, isExiting, handleClose]);

  if (!shouldRender) return null;

  const badgeClass = badge?.variant
    ? BADGE_STYLES[badge.variant]
    : BADGE_STYLES.emerald;

  const isDrawer = variant === "drawer";
  const defaultMaxWidth = isDrawer ? "max-w-xl" : "max-w-3xl";
  const resolvedMaxWidth = maxWidth || defaultMaxWidth;

  return (
    <div
      data-lenis-prevent
      className={`fixed inset-0 z-[100] flex bg-black/75 transition-all duration-300 ${
        isExiting
          ? "animate-monolith-backdrop-out pointer-events-none"
          : "animate-monolith-backdrop-in"
      } ${
        isDrawer
          ? "items-stretch justify-end"
          : "items-center justify-center p-4 md:p-6"
      }`}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* Outside Click Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        aria-hidden="true"
        onClick={handleClose}
      />

      {/* Architectural Surface */}
      <div
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        className={`relative w-full ${resolvedMaxWidth} bg-[#18181b] text-white shadow-2xl flex flex-col z-10 overflow-hidden ${
          isDrawer
            ? `h-full max-h-screen border-l border-white/10 ${
                isExiting
                  ? "animate-monolith-drawer-out"
                  : "animate-monolith-drawer-in"
              }`
            : `max-h-[90vh] rounded-2xl border border-white/15 ${
                isExiting
                  ? "animate-monolith-center-out"
                  : "animate-monolith-center-in"
              }`
        }`}
      >
        {/* Curated Monolith Header */}
        <div className="flex items-center justify-between p-6 md:px-8 border-b border-white/10 shrink-0 bg-[#18181b]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {badge && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all ${badgeClass}`}
              >
                {badge.text}
              </span>
            )}
            {institutionTag && (
              <span className="text-xs text-white/50 hidden sm:inline tracking-wide font-sans">
                {institutionTag}
              </span>
            )}
          </div>

          {/* Micro-interactive Close Button */}
          <button
            onClick={handleClose}
            aria-label="Close dialog"
            className="group p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 ease-out group-hover:rotate-90 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Core */}
        <div
          ref={contentBodyRef}
          data-lenis-prevent
          className="flex-1 overflow-y-auto overscroll-contain p-6 md:p-8 space-y-6 modal-scrollbar"
        >
          {title && (
            <div>
              {subtitle && (
                <span className="text-sm font-mono text-white/50 block mb-1">
                  {subtitle}
                </span>
              )}
              <h2
                id={ariaLabelledBy}
                className="text-2xl md:text-3xl font-bold text-editorial text-white mb-2 leading-tight"
              >
                {title}
              </h2>
            </div>
          )}

          {children}
        </div>

        {/* Action Footer */}
        {footer && (
          <div className="p-4 px-6 md:px-8 border-t border-white/10 shrink-0 bg-[#18181b]/95 backdrop-blur-md">
            {typeof footer === "function"
              ? footer({ close: handleClose })
              : footer}
          </div>
        )}
      </div>
    </div>
  );
}
