import type { Metadata } from "next";
import IntensiveClasses from "@/components/landing/IntensiveClasses";

const PAGE_URL = "https://ronansat.com/classes/intensive";

export const metadata: Metadata = {
  title: "Lớp SAT Intensive | Luyện đề chuyên sâu · Ronan SAT",
  description:
    "Lớp SAT Intensive luyện đề và chữa liên tục, hỗ trợ 24/24 bởi giáo viên điểm tuyệt đối SAT. Tài liệu 100% đề thi thật, Free Recordings, học phí đóng theo tháng linh hoạt. Đăng ký bằng cách nhắn qua Page.",
  keywords: [
    "lớp SAT Intensive",
    "luyện đề SAT chuyên sâu",
    "khóa học SAT",
    "luyện thi SAT",
    "SAT đề thật",
    "Ronan SAT",
    "SAT recordings",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: PAGE_URL,
    siteName: "Ronan SAT",
    title: "Lớp SAT Intensive | Luyện đề chuyên sâu · Ronan SAT",
    description:
      "Luyện đề và chữa liên tục, hỗ trợ 24/24 bởi giáo viên điểm tuyệt đối SAT. Tài liệu 100% đề thi thật, Free Recordings, học phí theo tháng linh hoạt. Đăng ký bằng cách nhắn qua Page.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lớp SAT Intensive | Luyện đề chuyên sâu · Ronan SAT",
    description:
      "Luyện đề và chữa liên tục, hỗ trợ 24/24 bởi giáo viên điểm tuyệt đối SAT. Tài liệu 100% đề thi thật, Free Recordings, học phí theo tháng linh hoạt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Lớp SAT Intensive",
  description:
    "Lớp SAT Intensive luyện đề và chữa liên tục, hỗ trợ 24/24 bởi giáo viên điểm tuyệt đối SAT. Tài liệu 100% đề thi thật, Free Recordings các buổi học trước, đặc quyền luyện đề mới nhất trên web và học phí đóng theo tháng linh hoạt.",
  inLanguage: "vi",
  url: PAGE_URL,
  provider: {
    "@type": "EducationalOrganization",
    name: "Ronan SAT",
    url: "https://ronansat.com",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
  },
};

export default function IntensiveClassesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IntensiveClasses />
    </>
  );
}
