import type { Metadata } from "next";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import HallOfFame from "@/components/hall-of-fame/HallOfFame";

const PAGE_URL = "https://ronansat.com/hall-of-fame";

export const metadata: Metadata = {
  title: "Hall of Fame | Ronan SAT",
  description:
    "The Ronan SAT Hall of Fame — eight magazine covers, eight broken score ceilings. 1580, 1570, 1560 and more, scored by students across Vietnam.",
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
    description:
      "Eight magazine covers. Eight broken score ceilings. Meet the Ronan SAT Hall of Fame.",
    images: [{ url: "/hall-of-fame/nguyen-minh-trang.jpg", width: 1440, height: 1800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hall of Fame | Ronan SAT",
    description:
      "Eight magazine covers. Eight broken score ceilings. Meet the Ronan SAT Hall of Fame.",
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
