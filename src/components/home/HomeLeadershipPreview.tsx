"use client";

import Image from "next/image";
import Link from "next/link";
import { LEADERSHIP_PROFILES } from "@/data/leadership";

export default function HomeLeadershipPreview() {
  // Show key 3 leaders on home preview: Chairman, Director, Principal
  const featuredLeaders = LEADERSHIP_PROFILES.filter((l) =>
    ["chairman", "director", "principal"].includes(l.id)
  );

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#09090c] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-400 font-semibold">
                Guiding Voices
              </span>
            </div>
            <h2 className="text-editorial text-3xl md:text-5xl font-bold tracking-tight text-white">
              Institutional Leadership & Vision
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-emerald-600 text-white font-mono text-xs font-semibold transition-all duration-300 self-start md:self-auto cursor-pointer"
          >
            <span>Read All Messages in About Us</span>
            <span>→</span>
          </Link>
        </div>

        {/* 3 Featured Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredLeaders.map((leader, index) => (
            <div
              key={leader.id}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {leader.image ? (
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="56px"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 font-mono font-bold text-base flex items-center justify-center border border-emerald-500/30 flex-shrink-0">
                        {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                    )}
                    <div>
                      <span className="text-[9.5px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                        {leader.role}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-white/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-editorial text-2xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-white/50 mb-6">
                  {leader.designation}
                </p>

                <blockquote className="relative pl-4 border-l-2 border-emerald-400 text-sm md:text-base font-light italic text-white/80 leading-relaxed mb-6">
                  “{leader.quote}”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/10 mt-2">
                <Link
                  href="/about"
                  className="text-xs font-mono text-emerald-400 group-hover:text-emerald-300 flex items-center justify-between transition-colors"
                >
                  <span>View Full Statement</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
