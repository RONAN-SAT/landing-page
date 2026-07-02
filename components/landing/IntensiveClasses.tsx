"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import { FacebookIcon } from "@/components/landing/icons";
import {
  Headphones,
  Repeat,
  ShieldCheck,
  Video,
  Wallet,
  Sparkles,
  UserCheck,
  Award,
  GraduationCap,
  Flame,
  CalendarClock,
  PlayCircle,
} from "lucide-react";

// Registration is handled by messaging the Facebook page directly.
const PAGE_URL = "https://www.facebook.com/ronansat";

const IntensiveHero = () => {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-grid-pattern">
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-10 md:right-24 w-28 h-28 bg-[#FF6B35] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow mix-blend-multiply flex items-center justify-center -z-10"
      >
        <Flame className="w-12 h-12 text-white" />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#D9FF42] border-2 border-[#0f0e0e] px-4 py-2 rounded-full mb-8 brutal-shadow-sm rotate-[-2deg]"
        >
          <Flame className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-wider">
            Lớp luyện đề chuyên sâu · Intensive
          </span>
        </motion.div>

        <h1 className="text-[2.75rem] md:text-[5rem] leading-[0.98] font-display font-black tracking-tighter text-balance">
          Luyện đề không ngừng,
          <br />
          bứt phá{" "}
          <span className="relative inline-block mt-3">
            <span className="relative z-10 bg-[#FF82A9] text-[#0f0e0e] px-6 py-2 border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-lg inline-block transform -rotate-2">
              điểm số.
            </span>
          </span>
        </h1>

        <p className="mt-10 text-xl md:text-2xl max-w-2xl mx-auto font-medium text-[#0f0e0e]/80 text-balance">
          Lớp Intensive dành cho học sinh muốn cày đề liên tục, được chữa từng
          câu và hỗ trợ 24/24 bởi giáo viên điểm tuyệt đối SAT.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              <FacebookIcon className="w-6 h-6" />
              Nhắn Page để đăng ký
            </div>
          </Link>
          <Link href="#how" className="group relative w-full sm:w-auto">
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center bg-white border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              Cách hoạt động
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const stats = [
  { value: "24/24", label: "Giáo viên hỗ trợ, giải đáp" },
  { value: "100%", label: "Đề thi thật, không tài liệu ngoài" },
  { value: "Free", label: "Recordings các buổi học trước" },
];

const StatsBand = () => {
  return (
    <section className="px-6 -mt-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-6 text-center"
          >
            <div className="font-display font-black text-4xl md:text-5xl tracking-tight">
              {s.value}
            </div>
            <div className="mt-1 font-bold text-sm uppercase tracking-wide text-[#0f0e0e]/70">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const features = [
  {
    icon: Headphones,
    color: "#D9FF42",
    title: "Hỗ trợ 24/24",
    body: "Giáo viên luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc bất cứ lúc nào, không phải chờ tới buổi học tiếp theo.",
  },
  {
    icon: Repeat,
    color: "#FF6B35",
    title: "Luyện đề & chữa liên tục",
    body: "Học sinh luyện đề và được chữa bài liên tục. Sai ở đâu, sửa ngay ở đó, giữ nhịp tiến bộ đều đặn.",
  },
  {
    icon: ShieldCheck,
    color: "#4287FF",
    title: "100% đề thi thật",
    body: "Tài liệu lớp hoàn toàn là đề thi thật. Không sử dụng tài liệu không chuẩn của bên thứ ba.",
  },
  {
    icon: Video,
    color: "#FF82A9",
    title: "Free Recordings",
    body: "Recordings các lớp học trước được cung cấp miễn phí, giúp học sinh chủ động học trước chương trình khi đã luyện hết đề.",
  },
  {
    icon: Wallet,
    color: "#D9FF42",
    title: "Học phí linh hoạt",
    body: "Đóng học phí theo từng tháng, linh hoạt hơn nhiều so với đóng cả khóa một lần.",
  },
  {
    icon: Sparkles,
    color: "#FF6B35",
    title: "Đặc quyền đề mới nhất",
    body: "Được quyền luyện các đề mới nhất trên nền tảng web của Ronan SAT ngay khi vừa cập nhật.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-6">
        Lớp Intensive có gì{" "}
        <span
          className="text-[#FF82A9] text-outline"
          style={{ WebkitTextStroke: "2px #0f0e0e" }}
        >
          khác biệt.
        </span>
      </h2>
      <p className="text-lg md:text-xl font-medium text-[#0f0e0e]/70 max-w-2xl mb-16">
        Một lớp thiết kế cho học sinh muốn cày đề nghiêm túc, được kèm sát và
        đồng hành đến tận điểm số mục tiêu.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 flex flex-col"
          >
            <div
              className="border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6 w-fit"
              style={{ backgroundColor: f.color }}
            >
              <f.icon className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-2xl font-display font-black uppercase tracking-tight">
              {f.title}
            </h3>
            <p className="mt-4 text-base font-medium text-gray-700">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const NeverMissSection = () => {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0f0e0e] text-[#f4efe6] border-4 border-[#0f0e0e] rounded-[2.5rem] brutal-shadow-lg p-8 md:p-14 relative overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#D9FF42] rounded-full border-4 border-[#0f0e0e] mix-blend-overlay"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#D9FF42] text-[#0f0e0e] border-2 border-[#0f0e0e] px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider mb-6">
            <UserCheck className="w-4 h-4" />
            Không bỏ lỡ buổi nào
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.05]">
            Vướng lịch? Vẫn{" "}
            <span className="text-[#D9FF42]">theo kịp 100%</span> kiến thức.
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-gray-300 max-w-2xl">
            Nếu học sinh vướng lịch, lớp có mentor/tutor điểm tuyệt đối SAT giảng
            lại 100% kiến thức của buổi học. Ngoài ra mọi buổi học đều có
            Recordings để học sinh xem lại bất cứ lúc nào.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const RecordingsSection = () => {
  const items = [
    {
      icon: PlayCircle,
      title: "Xem lại mọi buổi học",
      body: "Mọi buổi học đều được ghi hình. Học sinh chủ động xem lại phần chưa nắm chắc, học theo tốc độ của mình.",
    },
    {
      icon: Video,
      title: "Học trước chương trình",
      body: "Recordings các lớp trước được mở miễn phí để học sinh học trước khi đã luyện hết đề hiện có.",
    },
    {
      icon: Sparkles,
      title: "Đề mới nhất trên web",
      body: "Đặc quyền tiếp cận và luyện các đề mới nhất ngay khi được cập nhật trên nền tảng Ronan SAT.",
    },
  ];
  return (
    <section className="py-24 px-6 bg-[#0f0e0e] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-6">
          Học chủ động, <span className="text-[#D9FF42]">không giới hạn.</span>
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-300 max-w-2xl mb-16">
          Recordings miễn phí cùng ngân hàng đề luôn được cập nhật giúp học sinh
          tự chủ hoàn toàn với lộ trình của mình.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="border-4 border-[#f4efe6]/20 rounded-3xl p-8"
            >
              <div className="bg-[#D9FF42] text-[#0f0e0e] border-2 border-[#0f0e0e] p-3 rounded-full inline-flex mb-6 w-fit">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-black uppercase tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-base font-medium text-gray-300">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TuitionSection = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#4287FF] text-white border-4 border-[#0f0e0e] rounded-[2.5rem] brutal-shadow-lg p-8 md:p-14 relative overflow-hidden"
      >
        <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-[#D9FF42] rounded-full border-4 border-[#0f0e0e] mix-blend-overlay"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#D9FF42] text-[#0f0e0e] border-2 border-[#0f0e0e] px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider mb-6">
            <CalendarClock className="w-4 h-4" />
            Học phí theo tháng
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.05]">
            Đóng hàng tháng,{" "}
            <span
              className="text-[#D9FF42] text-outline"
              style={{ WebkitTextStroke: "2px #0f0e0e" }}
            >
              linh hoạt hơn.
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-white/90 max-w-2xl">
            Học phí đóng theo từng tháng, linh hoạt hơn nhiều so với đóng cả khóa
            một lần. Học sinh và phụ huynh chủ động hơn về ngân sách mà vẫn theo
            sát lộ trình.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const TeacherSection = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border-4 border-[#0f0e0e] rounded-[2.5rem] brutal-shadow-lg p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="bg-[#FF82A9] border-4 border-[#0f0e0e] rounded-3xl brutal-shadow w-24 h-24 flex items-center justify-center shrink-0">
            <GraduationCap className="w-12 h-12 text-[#0f0e0e]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-[#D9FF42] border-2 border-[#0f0e0e] px-3 py-1 rounded-full brutal-shadow-sm font-bold text-xs uppercase tracking-wider mb-4">
              <Award className="w-4 h-4" />
              Dạy bởi điểm tuyệt đối
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Giáo viên điểm tuyệt đối SAT
            </h2>
            <p className="mt-3 text-xl font-bold text-[#0f0e0e]/80">
              Trực tiếp giảng dạy · Đội ngũ mentor/tutor điểm tuyệt đối
            </p>
            <p className="mt-4 text-base md:text-lg font-medium text-gray-700 max-w-xl">
              Lớp được đứng lớp bởi giáo viên điểm tuyệt đối SAT, cùng đội ngũ
              mentor/tutor sẵn sàng giảng lại 100% kiến thức cho học sinh vướng
              lịch. Bạn luôn được kèm sát đến tận điểm số mục tiêu.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      n: "01",
      title: "Nhắn Page",
      body: "Nhắn tin trực tiếp qua Page Ronan SAT để đăng ký. Cho biết điểm mục tiêu và ngày thi dự kiến.",
    },
    {
      n: "02",
      title: "Xếp lớp",
      body: "Được tư vấn lộ trình và xếp vào lớp Intensive phù hợp với trình độ hiện tại.",
    },
    {
      n: "03",
      title: "Cày đề & bứt phá",
      body: "Luyện đề thật liên tục, được chữa từng câu, hỗ trợ 24/24 và xem lại Recordings mọi buổi học.",
    },
  ];
  return (
    <section id="how" className="py-24 px-6 bg-[#0f0e0e] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-16">
          Cách <span className="text-[#D9FF42]">đăng ký.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="border-4 border-[#f4efe6]/20 rounded-3xl p-8"
            >
              <span className="font-display font-black text-5xl text-[#D9FF42]">
                {s.n}
              </span>
              <h3 className="mt-4 text-2xl font-display font-black uppercase tracking-tight text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-base font-medium text-gray-300">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EnrollSection = () => {
  return (
    <section id="enroll" className="py-28 px-6">
      <div className="max-w-4xl mx-auto bg-[#4287FF] border-4 border-[#0f0e0e] rounded-[3rem] brutal-shadow-lg p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D9FF42] rounded-full border-4 border-[#0f0e0e] mix-blend-overlay"></div>
        <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-[#FF82A9] rotate-45 border-4 border-[#0f0e0e] mix-blend-overlay"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] text-white">
            Sẵn sàng{" "}
            <span
              className="text-[#D9FF42] text-outline"
              style={{ WebkitTextStroke: "2px #0f0e0e" }}
            >
              cày đề?
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-white/90 max-w-xl mx-auto">
            Đăng ký lớp Intensive bằng cách nhắn trực tiếp qua Page Ronan SAT.
            Đội ngũ sẽ tư vấn lộ trình và xếp lớp cho bạn.
          </p>
          <Link
            href={PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block mt-10"
          >
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-10 py-6 rounded-2xl text-xl md:text-2xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              <FacebookIcon className="w-7 h-7" />
              Nhắn Page để đăng ký
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function IntensiveClasses() {
  return (
    <div
      lang="vi"
      className="min-h-screen bg-[#f4efe6] selection:bg-[#D9FF42] selection:text-[#0f0e0e] overflow-x-hidden"
    >
      <SiteNav />
      <main>
        <IntensiveHero />
        <StatsBand />
        <FeaturesSection />
        <NeverMissSection />
        <RecordingsSection />
        <TuitionSection />
        <TeacherSection />
        <HowItWorks />
        <EnrollSection />
      </main>
      <SiteFooter />
    </div>
  );
}
