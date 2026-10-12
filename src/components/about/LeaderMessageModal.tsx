"use client";

import Image from "next/image";
import BaseModal from "@/components/BaseModal";
import type { LeaderProfile } from "@/data/leadership";

interface LeaderMessageModalProps {
  leader: LeaderProfile | null;
  onClose: () => void;
}

export default function LeaderMessageModal({
  leader,
  onClose,
}: LeaderMessageModalProps) {
  if (!leader) return null;

  return (
    <BaseModal
      isOpen={!!leader}
      onClose={onClose}
      variant="drawer"
      badge={{
        text: leader.role.toUpperCase(),
        variant: "emerald",
      }}
      institutionTag="Universal College Patran • Leadership & Vision"
      title={leader.name}
      subtitle={leader.designation}
      footer={({ close }) => (
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-mono text-white/40">
            Dashmesh Charitable Trust
          </span>
          <button
            onClick={close}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer"
          >
            Close Message
          </button>
        </div>
      )}
    >
      <div className="space-y-8 text-[#ecece9]">
        {/* Leader Profile Header with Photo if available */}
        {leader.image && (
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/20 shadow-md flex-shrink-0">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h4 className="text-editorial text-lg font-bold text-white">{leader.name}</h4>
              <p className="text-xs font-mono text-emerald-400">{leader.designation}</p>
              <p className="text-xs text-white/50 mt-0.5">{leader.shortBio}</p>
            </div>
          </div>
        )}

        {/* Highlighted Quote Callout */}
        <div className="relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 border-l-4 border-l-emerald-400">
          <span className="text-emerald-400 font-mono text-3xl leading-none block mb-2 select-none">
            “
          </span>
          <blockquote className="text-editorial text-xl md:text-2xl text-white font-medium italic leading-relaxed">
            {leader.quote}
          </blockquote>
          <span className="text-xs font-mono text-white/50 block mt-3">
            — {leader.name}, {leader.role}
          </span>
        </div>

        {/* Full Message Paragraphs */}
        <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
          {leader.fullMessage.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Signature Sign-off */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-start gap-1">
          <span className="text-editorial text-2xl font-bold text-white tracking-wide">
            {leader.name}
          </span>
          <span className="text-xs font-mono tracking-widest uppercase text-emerald-400">
            {leader.designation}
          </span>
          <span className="text-[11px] font-mono text-white/40">
            Patran, Punjab
          </span>
        </div>
      </div>
    </BaseModal>
  );
}
