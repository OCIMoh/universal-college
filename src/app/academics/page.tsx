import type { Metadata } from "next";
import AcademicsClient from "./AcademicsClient";

export const metadata: Metadata = {
  title: "Academic Programmes & Official Fee Matrix",
  description:
    "Explore 30 degree programmes, postgraduate degrees, skill diplomas, and ITI trades affiliated with MRSPTU Bathinda, JGND PSOU, and NIOS with complete fee transparency and 100% PMSS scholarship.",
  openGraph: {
    title: "Academic Programmes & Fee Structure | Universal College Patran",
    description:
      "Explore official curricula and annual fee matrix for BCA, B.Com, BA, PGDCA, M.Sc, and ITI trades in Patran, Punjab.",
  },
};

export default function AcademicsPage() {
  return <AcademicsClient />;
}
