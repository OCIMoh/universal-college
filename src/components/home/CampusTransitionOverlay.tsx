"use client";

interface OverlayProps {
  isNavigating: boolean;
}

export default function CampusTransitionOverlay({ isNavigating }: OverlayProps) {
  return (
      <div
        className={`fixed inset-0 z-[200] transition-opacity duration-500 pointer-events-none ${
          isNavigating ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Multi-tiered Vertical Column Slat Curtains Drop */}
        <div className="absolute inset-0 grid grid-cols-5 h-full w-full">
          {[0, 1, 2, 3, 4].map((colIndex) => (
            <div
              key={colIndex}
              className="curtain-slat h-full w-full bg-[#0a0a0c] border-r border-white/[0.03]"
              style={{
                transform: isNavigating ? "translateY(0%)" : "translateY(-101%)",
                transitionDelay: `${colIndex * 60}ms`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-14 z-10 pointer-events-none">
          <div className="flex items-center justify-between font-mono text-[11px] text-white/50 tracking-[0.25em] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SPATIAL ENGINE // CONNECTING</span>
            </div>
            <div>PATRAN, PB • 29.9329° N, 76.0468° E</div>
          </div>

          <div className="text-center my-auto flex flex-col items-center">
            <span className="font-mono text-xs text-emerald-400 tracking-[0.4em] uppercase mb-4">
              PATRAN, PB • 29.9329° N, 76.0468° E
            </span>
            <h2 className="text-4xl md:text-7xl font-extralight text-editorial text-white mb-3">
              Entering Universal Campus
            </h2>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase text-white/60">
              INITIATING FIRST-PERSON SPATIAL ARCHIVE
            </span>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-white/30 tracking-[0.3em] uppercase">
            <span>Universal College Patran</span>
            <span>Spatial Walkthrough</span>
          </div>
        </div>
      </div>
  );
}
