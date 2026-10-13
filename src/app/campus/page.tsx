import type { Metadata } from "next";
import CampusClient from "./CampusClient";

export const metadata: Metadata = {
  title: "Campus Infrastructure & 19 Specialized Facilities",
  description:
    "Explore the Universal College Patran campus: 4 AC computer labs with 100+ systems, sports stadium, digital library, seminar hall, fashion tech studios, and green grounds in Patiala, Punjab.",
  openGraph: {
    title: "Campus & Facilities | Universal College Patran",
    description:
      "Modern academic wings, computing infrastructure, athletic grounds, and campus amenities in Patran, Punjab.",
  },
};

export default function CampusPage() {
  return <CampusClient />;
}
