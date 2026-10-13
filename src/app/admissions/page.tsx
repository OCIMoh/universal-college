import type { Metadata } from "next";
import AdmissionsClient from "./AdmissionsClient";

export const metadata: Metadata = {
  title: "Admissions 2026–27 & PMSS Scholarship",
  description:
    "Apply for admissions at Universal College Patran. 4-stage admission procedure, 11-document regulatory checklist, and 100% Post-Matric SC Scholarship fee waiver scheme.",
  openGraph: {
    title: "Admissions & PMSS Scholarship | Universal College Patran",
    description:
      "Admission procedures, eligibility verification, document checklist, and 100% SC Scholarship at Universal College Patran, Punjab.",
  },
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}
