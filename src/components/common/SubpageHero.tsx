"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export interface SubpageHeroImage {
  src: string;
  caption?: string;
  locationTag?: string;
  title?: string;
}

interface SubpageHeroProps {
  kicker: string;
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  backgroundImages?: SubpageHeroImage[];
  intervalMs?: number;
  imageLocationTag?: string;
}

export default function SubpageHero({
  kicker,
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }, { label: title }],
  backgroundImage,
  backgroundImages,
  intervalMs = 5000,
  imageLocationTag,
}: SubpageHeroProps) {
  // Normalize images list
  const imagesList: SubpageHeroImage[] =
    backgroundImages && backgroundImages.length > 0
      ? backgroundImages
      : backgroundImage
      ? [{ src: backgroundImage, locationTag: imageLocationTag }]
      : [];

  const [activeIndex, setActiveIndex] = useState(0);

  // Interval timer for seamless background crossfade
  useEffect(() => {
    if (imagesList.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imagesList.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [imagesList.length, intervalMs]);

  const activeImage = imagesList[activeIndex];
  const activeLocationTag =
    activeImage?.locationTag || activeImage?.caption || imageLocationTag;

  return (
    <section className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 bg-[#08080a] text-white border-b border-white/10 overflow-hidden">
      {/* Background Image Layer */}
      {imagesList.length > 0 ? (
        <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
          {imagesList.map((img, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={img.src + idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.title || title}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className={`object-cover object-center filter brightness-[0.70] contrast-[1.05] saturate-[0.95] transition-transform duration-[7000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
            );
          })}
          {/* Cinematic gradient veils for clarity and typography contrast */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#08080a] via-[#08080a]/40 to-transparent" />
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#08080a]/80 via-[#08080a]/45 to-transparent" />
        </div>
      ) : (
        <>
          {/* Default ambient lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />
        </>
      )}

      {/* Hairline Grid Overlay */}
      <div className="absolute inset-x-8 top-0 bottom-0 border-x border-white/[0.04] pointer-events-none hidden lg:block z-[2]" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-emerald-400 font-semibold">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <span className="text-white/20">/</span>}
            </div>
          ))}
        </nav>

        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-300 font-medium">
            {kicker}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.95] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl font-light text-white/80 max-w-3xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
          {subtitle}
        </p>

        {/* Bottom Metadata Row */}
        {activeLocationTag && (
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="truncate max-w-xl">
                {activeLocationTag}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
