"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICIAL_CAMPUS_PROMISE } from "@/data/facilities";

export default function VirtualTourMonolith() {
  return (
    <section className="relative w-full bg-[#08080a] text-white py-24 md:py-32 px-6 md:px-12 border-b border-white/10 overflow-hidden">
      {/* Ambient background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none select-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Campus Development Vision */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-6">
                <span>Campus Development Vision</span>
                <span className="text-white/20">•</span>
                <span>Ongoing Evolution</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-tight mb-6">
                Building Today. <br />
                <span className="italic text-emerald-400">Preparing for Tomorrow.</span>
              </h2>

              <p className="text-base md:text-lg text-white/80 font-sans leading-relaxed mb-6 max-w-lg">
                &ldquo;{OFFICIAL_CAMPUS_PROMISE.vision}&rdquo;
              </p>

              <p className="text-sm text-white/60 font-sans leading-relaxed mb-8 max-w-lg">
                At Universal College, Patran, campus development is an ongoing journey. As academic programmes expand and student needs change, we continue to focus on the development, expansion, upgradation and improvement of our buildings, laboratories, learning spaces and student facilities.
              </p>
            </div>

            {/* Direct Visit Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/10">
              <Link
                href="/admissions#concierge"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
              >
                <span>Schedule Campus Visit</span>
                <span className="text-black font-bold">→</span>
              </Link>

              <Link
                href="/contact"
                className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>View Contact Coordinates</span>
              </Link>
            </div>

            {/* Visiting Coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-6 border-t border-white/5 font-mono text-xs text-white/50">
              <div>
                <span className="text-[10px] uppercase text-white/30 block mb-1">
                  Physical Coordinates:
                </span>
                <span className="text-white/80 leading-normal block">
                  Patran–Jakhal Road, Patran, Dist. Patiala, Punjab 147005
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-white/30 block mb-1">
                  Admission Cell Helplines:
                </span>
                <span className="text-white/80 block">
                  92162-44163 / 97791-46689
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full bg-neutral-900 border border-white/15 overflow-hidden group shadow-2xl">
              <Image
                src="/assets/campus/visit-glass-porch.jpg"
                alt="Universal College Patran Glass Entrance and Academic Wings"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.75] group-hover:scale-105 group-hover:brightness-[0.9] transition-all duration-700"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom Card Title */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block mb-1">
                    Patran Main Campus
                  </span>
                  <h3 className="font-serif text-xl text-white">
                    Main Glass Entrance & Academic Wings
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
