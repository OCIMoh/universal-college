"use client";

import Image from "next/image";
import { LEADERSHIP_PROFILES, LeaderProfile } from "@/data/leadership";

interface LeadershipSectionProps {
  onSelectLeader: (leader: LeaderProfile) => void;
}

export default function LeadershipSection({ onSelectLeader }: LeadershipSectionProps) {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-[#f9f9f7] text-[#1a1a1a] border-b border-black/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
              Leadership & Vision
            </span>
          </div>
          <h2 className="text-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Building an Institution. Empowering People. Serving Society.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
            A distinguished council of academic and administrative leaders advancing academic innovation, character development, and future-ready education.
          </p>
        </div>

        {/* Leaders Grid (Top 2 Founders + 3 Academic Leaders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP_PROFILES.map((leader, index) => (
            <div
              key={leader.id}
              className={`group flex flex-col justify-between p-8 rounded-3xl bg-white border border-black/10 hover:border-emerald-600/50 hover:shadow-xl transition-all duration-300 ${
                index === 0 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-white to-emerald-50/30" : ""
              }`}
            >
              <div>
                {/* Top Badge & Portrait */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    {leader.image ? (
                      <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-black/10 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="48px"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-2xl bg-emerald-900/10 text-emerald-900 font-mono font-bold text-sm flex items-center justify-center border border-emerald-900/15 flex-shrink-0">
                        {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                    )}
                    <span className="px-3 py-1 rounded-full bg-black/5 text-[10px] font-mono tracking-widest uppercase font-semibold text-neutral-700">
                      {leader.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="text-editorial text-2xl md:text-3xl font-bold text-neutral-900 mb-1 group-hover:text-emerald-900 transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-medium mb-6">
                  {leader.designation}
                </p>

                {/* Highlighted Quote */}
                <div className="relative pl-4 border-l-2 border-emerald-500/60 mb-6">
                  <blockquote className="text-sm md:text-base font-light italic text-neutral-700 leading-relaxed">
                    “{leader.quote}”
                  </blockquote>
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  {leader.shortBio}
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectLeader(leader)}
                className="w-full mt-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/5 hover:bg-emerald-600 text-neutral-900 hover:text-white transition-all duration-300 font-mono text-xs font-semibold cursor-pointer group-hover:shadow-sm"
              >
                <span>Read Full Message</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
