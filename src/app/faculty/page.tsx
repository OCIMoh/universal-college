import type { Metadata } from "next";
import FacultyClient from "./FacultyClient";

export const metadata: Metadata = {
  title: "Faculty & Staff Directory (64-Member Roster)",
  description:
    "Meet the 64 distinguished educators, technical instructors, and administrative leaders across 8 academic wings at Universal College Patran, Punjab.",
  openGraph: {
    title: "Faculty & Staff Directory | Universal College Patran",
    description:
      "Profiles, qualifications, and department rosters for 64 faculty and staff members at Universal College Patran.",
  },
};

export default function FacultyPage() {
  return <FacultyClient />;
}
