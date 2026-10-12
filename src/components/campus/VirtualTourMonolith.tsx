"use client";

import Image from "next/image";
import Link from "next/link";

interface VirtualTourMonolithProps {
  onOpenTour: () => void;
}

export default function VirtualTourMonolith({
  onOpenTour,
}: VirtualTourMonolithProps) {
  return (
    <section className="relative w-full bg-[#08080a] text-white py-24 md:py-32 px-6 md:px-12 border-b border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none select-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Monolith Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Spatial Telemetry</span>
                <span className="text-white/20">•</span>
                <span>Interactive 360° Scrub</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-tight mb-6">
                Experience Universal in Full Dimensionality
              </h2>

              <p className="text-base md:text-lg text-white/70 font-sans leading-relaxed mb-8 max-w-lg">
                Explore our Patran campus without leaving your screen. Scrub seamlessly through drone aerial footage, ground-level pathways, academic corridors, and technical laboratories.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={onOpenTour}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
              >
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                </svg>
                <span>Launch Interactive Tour</span>
              </button>

              <Link
                href="/admissions#concierge"
                className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Schedule Campus Visit</span>
                <span className="text-emerald-400">→</span>
              </Link>
            </div>

            {/* Visiting Coordinates */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-6 border-t border-white/5 font-mono text-xs text-white/50">
              <div>
                <span className="text-[10px] uppercase text-white/30 block mb-1">
                  Physical Coordinates:
                </span>
                <span className="text-white/80">
                  Patran–Jakhal Road, Patran, Punjab 147005
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-white/30 block mb-1">
                  Visitor Hours:
                </span>
                <span className="text-white/80">
                  Mon – Sat • 9:00 AM – 4:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Preview Frame with Video/Photo Overlay */}
          <div className="lg:col-span-6">
            <div
              onClick={onOpenTour}
              className="relative aspect-[16/10] w-full bg-neutral-900 border border-white/15 overflow-hidden group cursor-pointer shadow-2xl"
            >
              <Image
                src="/assets/visit-glass-porch.jpg"
                alt="Universal College Patran Glass Entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.7] group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-700"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/90 text-black flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                  <svg
                    className="w-8 h-8 ml-1 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Card Title */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block mb-1">
                    Direct Spatial Capture
                  </span>
                  <h3 className="font-serif text-xl text-white">
                    Main Glass Entrance & Campus Quad
                  </h3>
                </div>
                <span className="font-mono text-xs px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-white/90">
                  360° Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
