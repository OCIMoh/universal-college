"use client";

import { useRef } from "react";
import { GovernanceSection } from "@/data/governance";
import BaseModal from "@/components/BaseModal";

interface GovernanceModalProps {
  data: GovernanceSection | null;
  onClose: () => void;
}

export default function GovernanceModal({ data, onClose }: GovernanceModalProps) {
  // Preserve last active governance data during exit animation transition
  const lastDataRef = useRef(data);
  if (data) {
    lastDataRef.current = data;
  }
  const activeData = data || lastDataRef.current;

  if (!activeData) return null;

  return (
    <BaseModal
      isOpen={Boolean(data)}
      onClose={onClose}
      variant="center"
      badge={{ text: activeData.badge, variant: "blue" }}
      institutionTag="Universal College Patran"
      title={activeData.title}
      ariaLabelledBy="governance-modal-title"
      footer={
        <div className="flex items-center justify-between text-xs text-white/50 w-full">
          <span>Dashmesh Charitable Trust Governance System</span>
          <span className="text-white/40 text-[11px] font-mono tracking-wider uppercase">
            Statutory Dossier
          </span>
        </div>
      }
    >
      <p className="text-white/70 text-sm leading-relaxed">
        {activeData.description}
      </p>

      {/* Details Table (if any) */}
      {activeData.details && activeData.details.length > 0 && (
        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-white/60">
            Institutional Details & Statutory Records
          </div>
          <div className="divide-y divide-white/5 text-sm">
            {activeData.details.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <span className="text-white/50 text-xs uppercase tracking-wide font-medium sm:w-1/3">
                  {item.label}
                </span>
                <span className="text-white font-medium sm:w-2/3">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Roster / Members Table */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">
          Appointed Members & Committee Personnel
        </h3>
        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="divide-y divide-white/5 text-sm">
            {activeData.items.map((person, idx) => (
              <div
                key={idx}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/5 transition-colors"
              >
                <div>
                  <div className="font-semibold text-white">{person.name}</div>
                  <div className="text-xs text-emerald-400 font-medium">
                    {person.designation}
                  </div>
                </div>
                <div className="text-left sm:text-right text-xs text-white/60">
                  {person.role && <div>{person.role}</div>}
                  {person.contact && (
                    <div className="text-white/40 font-mono">
                      {person.contact}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
