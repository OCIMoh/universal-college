"use client";

import { useRouter } from "next/navigation";
import CampusTourOverlay from "@/components/home/CampusTourOverlay";

export default function VisitCampusPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#09090b]">
      <CampusTourOverlay
        isOpen={true}
        isStandalone={true}
        onClose={() => router.push("/")}
      />
    </main>
  );
}
