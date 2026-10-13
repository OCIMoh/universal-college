import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us & Leadership",
  description:
    "Learn about Universal College Patran, Dashmesh Charitable Trust, visionary leadership, institutional organogram, and 12 core values guiding higher education in Punjab since 2014.",
  openGraph: {
    title: "About Us & Leadership | Universal College Patran",
    description:
      "Educational heritage, leadership vision, governance structure, and core values of Universal College Patran, Punjab.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
