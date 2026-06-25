import type { Metadata } from "next";
import ReferralProgramme from "@/components/landing/ReferralProgramme";

const PAGE_URL = "https://ronansat.com/referral";

export const metadata: Metadata = {
  title: "Referral Programme | Ronan SAT",
  description:
    "Refer anyone to a Ronan SAT class and earn cash. 500,000 VND for your first student and 1,000,000 VND for every student after. Earnings help keep Ronan SAT free for all students.",
  keywords: [
    "Ronan SAT referral",
    "refer a friend SAT",
    "SAT class referral",
    "earn cash referral",
    "Ronan SAT",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Ronan SAT",
    title: "Referral Programme | Ronan SAT",
    description:
      "Refer anyone to a Ronan SAT class and earn cash. 500,000 VND for your first student, 1,000,000 VND for every student after.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Programme | Ronan SAT",
    description:
      "Refer anyone to a Ronan SAT class and earn cash directly. 500,000 VND for your first student, 1,000,000 VND for every student after.",
  },
};

export default function ReferralPage() {
  return <ReferralProgramme />;
}
