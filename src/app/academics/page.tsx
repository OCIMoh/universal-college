import type { Metadata } from "next";
import AcademicsClient from "./AcademicsClient";

export const metadata: Metadata = {
  title: "Academic Programmes & Official Fee Matrix",
  description:
    "Explore accredited degree programmes, postgraduate degrees, and flexible skill diplomas affiliated with MRSPTU Bathinda and JGND PSOU with complete fee transparency and 100% PMSS scholarship in Patran, Punjab.",
  openGraph: {
    title: "Academic Programmes & Fee Structure | Universal College Patran",
    description:
      "Explore official curricula and annual fee matrix for BCA, B.Com, BA, PGDCA, M.Sc, and vocational diplomas in Patran, Punjab.",
  },
};

export default function AcademicsPage() {
  return <AcademicsClient />;
}
