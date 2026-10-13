import type { Metadata } from "next";
import VisitCampusClient from "./VisitCampusClient";

export const metadata: Metadata = {
  title: "360° Virtual Campus Experience",
  description:
    "Immersive spatial walkthrough of Universal College Patran. Explore the academic blocks, labs, library, grounds, and student facilities.",
  openGraph: {
    title: "360° Virtual Campus Tour | Universal College Patran",
    description:
      "Interactive 360° tour and visual exploration of the Universal College campus in Patran, Punjab.",
  },
};

export default function VisitCampusPage() {
  return <VisitCampusClient />;
}
