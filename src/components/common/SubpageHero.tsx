"use client";

import Image from "next/image";
import Link from "next/link";

interface SubpageHeroProps {
  kicker: string;
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  imageLocationTag?: string;
}

export default function SubpageHero({
  kicker,
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }, { label: title }],
  backgroundImage,
  imageLocationTag,
}: SubpageHeroProps) {
  return (
    <section className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 bg-[#08080a] text-white border-b border-white/10 overflow-hidden">
      {/* Background Image Layer if provided */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.42] contrast-[1.08] saturate-[0.85] transition-transform duration-1000 scale-100"
          />
          {/* Multi-layered cinematic gradient veils for optimal typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/65 to-[#08080a]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/90 via-[#08080a]/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,8,10,0.75)_100%)]" />
        </div>
      ) : (
        <>
          {/* Default ambient lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />
        </>
      )}

      {/* Hairline Grid Overlay */}
      <div className="absolute inset-x-8 top-0 bottom-0 border-x border-white/[0.04] pointer-events-none hidden lg:block z-[1]" />

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

        {/* Optional Architectural Tag */}
        {imageLocationTag && (
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
            <span className="material-symbols-outlined text-[14px] text-emerald-400">
              apartment
            </span>
            <span>{imageLocationTag}</span>
          </div>
        )}
      </div>
    </section>
  );
}
