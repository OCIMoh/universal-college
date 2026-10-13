import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us & Campus Directory",
  description:
    "Direct contact helplines for Admissions, Directorate, Scholarship Desk, and Administration at Universal College Patran, Punjab (PIN 147105). Interactive inquiry form and Google Maps directions.",
  openGraph: {
    title: "Contact Us & Helpdesk | Universal College Patran",
    description:
      "Get in touch with Universal College Patran. Official phone numbers, campus location coordinates, and enquiry ticketing portal.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
