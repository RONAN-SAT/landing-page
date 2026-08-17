import type { Metadata } from "next";
import DaNangClasses from "@/components/landing/DaNangClasses";

// This page shares almost all of its structure/copy with /classes/da-nang —
// it renders the same DaNangClasses component with variant="foundation" and
// reuses the same shared seat count (see lib/seats.ts), since both classes
// run as the same cohort/waitlist. Only the name and a few emphasis points
// differ (comprehensive, from-the-ground-up learning instead of the
// Đà Nẵng-local angle).
const PAGE_URL = "https://ronansat.com/classes/foundation";

export const metadata: Metadata = {
  title: "Lớp học SAT Nền Tảng | Ronan SAT Foundation",
  description:
    "Lớp luyện thi SAT toàn diện từ nền tảng giúp đạt điểm cao xét tuyển đại học và du học. Giáo viên Trần Vũ Mạnh Đức 1590 SAT, lộ trình cá nhân hoá trên nền tảng Ronan SAT, 17000+ câu hỏi, báo cáo hàng tuần. Sĩ số giới hạn 15 học sinh.",
  keywords: [
    "lớp học SAT nền tảng",
    "luyện thi SAT toàn diện",
    "khóa học SAT từ đầu",
    "SAT xét tuyển đại học",
    "SAT du học",
    "Ronan SAT Foundation",
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
    title: "Lớp học SAT Nền Tảng | Ronan SAT Foundation",
    description:
      "Lớp luyện thi SAT toàn diện từ nền tảng giúp đạt điểm cao xét tuyển đại học và du học. Giáo viên Trần Vũ Mạnh Đức 1590 SAT, lộ trình cá nhân hoá, 17000+ câu hỏi. Sĩ số giới hạn 15 học sinh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lớp học SAT Nền Tảng | Ronan SAT Foundation",
    description:
      "Luyện thi SAT toàn diện từ nền tảng, đạt điểm cao xét tuyển đại học và du học cùng giáo viên 1590 SAT. Lộ trình cá nhân hoá trên nền tảng Ronan SAT.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Lớp học SAT Foundation",
  description:
    "Lớp luyện thi SAT toàn diện từ nền tảng giúp đạt điểm cao xét tuyển đại học và du học. Lộ trình cá nhân hoá trên nền tảng Ronan SAT, 17000+ câu hỏi, báo cáo điểm số hàng tuần. Sĩ số giới hạn 15 học sinh.",
  inLanguage: "vi",
  url: PAGE_URL,
  provider: {
    "@type": "EducationalOrganization",
    name: "Ronan SAT",
    url: "https://ronansat.com",
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
  },
};

export default function FoundationClassesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DaNangClasses variant="foundation" />
    </>
  );
}
