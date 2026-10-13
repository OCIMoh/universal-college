import type { Metadata } from "next";
import GovernanceClient from "./GovernanceClient";

export const metadata: Metadata = {
  title: "Governance, IQAC & Mandatory Statutory Disclosures",
  description:
    "Governing Body, 9 statutory student grievance & anti-ragging committees, IQAC quality cell, and institutional approvals under Dashmesh Charitable Trust in Patran, Punjab.",
  openGraph: {
    title: "Governance, IQAC & Disclosures | Universal College Patran",
    description:
      "Statutory committees, ombudsman procedures, internal quality framework, and official university affiliations.",
  },
};

export default function GovernancePage() {
  return <GovernanceClient />;
}
