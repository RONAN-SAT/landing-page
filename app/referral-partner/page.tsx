import type { Metadata } from "next";
import ReferralPartner from "@/components/landing/ReferralPartner";

const PAGE_URL = "https://ronansat.com/referral-partner";

export const metadata: Metadata = {
  title: "Partner Referral Programme | Ronan SAT",
  description:
    "Tiered partner referral programme. Earn 1,000,000–2,000,000 VND per student, up to 145,000,000 VND per partnership, paid in cash immediately on sign-up.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ReferralPartnerPage() {
  return <ReferralPartner />;
}
