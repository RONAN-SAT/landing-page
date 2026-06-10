import type { Metadata } from "next";
import DaNangClasses from "@/components/landing/DaNangClasses";

const PAGE_URL = "https://ronansat.com/classes/da-nang";

export const metadata: Metadata = {
  title: "Lớp học SAT Đà Nẵng | Ronan SAT Đà Nẵng",
  description:
    "Lớp luyện thi SAT tại Đà Nẵng giúp đạt điểm cao xét tuyển đại học và du học. Giáo viên Trần Vũ Mạnh Đức 1590 SAT, lộ trình cá nhân hoá trên nền tảng Ronan SAT, 6000+ câu hỏi, báo cáo hàng tuần. Sĩ số giới hạn 15 học sinh.",
  keywords: [
    "lớp học SAT Đà Nẵng",
    "luyện thi SAT Đà Nẵng",
    "khóa học SAT Đà Nẵng",
    "SAT xét tuyển đại học",
    "SAT du học",
    "SAT Da Nang",
    "Ronan SAT",
    "Trần Vũ Mạnh Đức",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: PAGE_URL,
    siteName: "Ronan SAT",
    title: "Lớp học SAT Đà Nẵng | Ronan SAT Đà Nẵng",
    description:
      "Lớp luyện thi SAT tại Đà Nẵng giúp đạt điểm cao xét tuyển đại học và du học. Giáo viên Trần Vũ Mạnh Đức 1590 SAT, lộ trình cá nhân hoá, 6000+ câu hỏi. Sĩ số giới hạn 15 học sinh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lớp học SAT Đà Nẵng | Ronan SAT Đà Nẵng",
    description:
      "Luyện thi SAT đạt điểm cao xét tuyển đại học và du học cùng giáo viên 1590 SAT. Lộ trình cá nhân hoá trên nền tảng Ronan SAT.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Lớp học SAT Đà Nẵng",
  description:
    "Lớp luyện thi SAT tại Đà Nẵng giúp đạt điểm cao xét tuyển đại học và du học. Lộ trình cá nhân hoá trên nền tảng Ronan SAT, 6000+ câu hỏi, báo cáo điểm số hàng tuần. Sĩ số giới hạn 15 học sinh.",
  inLanguage: "vi",
  url: PAGE_URL,
  provider: {
    "@type": "EducationalOrganization",
    name: "Ronan SAT",
    url: "https://ronansat.com",
    areaServed: {
      "@type": "City",
      name: "Đà Nẵng",
    },
  },
  instructor: {
    "@type": "Person",
    name: "Trần Vũ Mạnh Đức",
    description: "1590 SAT, Admin Ronan SAT",
    sameAs: "https://www.facebook.com/TVMDrh",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT2H",
    location: {
      "@type": "City",
      name: "Đà Nẵng",
    },
  },
};

export default function DaNangClassesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DaNangClasses />
    </>
  );
}
