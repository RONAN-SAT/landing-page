import type { Metadata } from "next";
import SocialsHub from "@/components/landing/SocialsHub";

const PAGE_URL = "https://ronansat.com/socials";

export const metadata: Metadata = {
  title: "Socials | Ronan SAT",
  description:
    "Connect with Ronan SAT on Facebook, Instagram, Zalo, Threads, and Telegram. Tips, updates, and a community of students chasing a higher SAT score.",
  keywords: [
    "Ronan SAT socials",
    "Ronan SAT Instagram",
    "Ronan SAT Zalo",
    "Ronan SAT Facebook",
    "Ronan SAT Telegram",
    "Ronan SAT",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Ronan SAT",
    title: "Socials | Ronan SAT",
    description:
      "Connect with Ronan SAT on Facebook, Instagram, Zalo, Threads, and Telegram.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Socials | Ronan SAT",
    description:
      "Connect with Ronan SAT on Facebook, Instagram, Zalo, Threads, and Telegram.",
  },
};

export default function SocialsPage() {
  return <SocialsHub />;
}
