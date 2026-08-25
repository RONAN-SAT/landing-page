import type { Metadata } from "next";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import HallOfFame from "@/components/hall-of-fame/HallOfFame";
import { hallOfFame } from "@/lib/hall-of-fame";

const PAGE_URL = "https://ronansat.com/hall-of-fame";
const HOF_COUNT = hallOfFame.length;
const COUNT_WORD = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"][HOF_COUNT] ?? String(HOF_COUNT);
const COUNT_WORD_CAP = COUNT_WORD.charAt(0).toUpperCase() + COUNT_WORD.slice(1);

export const metadata: Metadata = {
  title: "Hall of Fame | Ronan SAT",
  description: `The Ronan SAT Hall of Fame — ${COUNT_WORD} magazine covers, ${COUNT_WORD} broken score ceilings. 1580, 1570, 1560 and more, scored by students across Vietnam.`,
  keywords: [
    "Ronan SAT Hall of Fame",
    "SAT 1580",
    "SAT top scorer Vietnam",
    "Ronan SAT results",
    "luyện thi SAT",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Ronan SAT",
    title: "Hall of Fame | Ronan SAT",
    description: `${COUNT_WORD_CAP} magazine covers. ${COUNT_WORD_CAP} broken score ceilings. Meet the Ronan SAT Hall of Fame.`,
    images: [{ url: "/hall-of-fame/nguyen-minh-trang.jpg", width: 1440, height: 1800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hall of Fame | Ronan SAT",
    description: `${COUNT_WORD_CAP} magazine covers. ${COUNT_WORD_CAP} broken score ceilings. Meet the Ronan SAT Hall of Fame.`,
  },
};

export default function HallOfFamePage() {
  return (
    <>
      <SiteNav />
      <main>
        <HallOfFame />
      </main>
      <SiteFooter />
    </>
  );
}
