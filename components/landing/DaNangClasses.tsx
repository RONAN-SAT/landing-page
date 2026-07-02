"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import { FacebookIcon } from "@/components/landing/icons";
import {
  Target,
  Plane,
  Clock,
  LineChart,
  GraduationCap,
  Award,
  FileText,
  Database,
  UserCheck,
  BadgeCheck,
  MapPin,
  TrendingUp,
  Trophy,
  Sparkles,
  Wallet,
  CalendarClock,
  CheckCircle2,
} from "lucide-react";

// Registration form link — update when the form is ready.
const REGISTER_URL =
  "https://learn.ronansat.com/forms/frm_2cb1a99f4680420f83fb2862cdc34031";
const TEACHER_FB_URL = "https://www.facebook.com/TVMDrh";
const SEATS_TOTAL = 15;
const SEATS_TAKEN = 8;

const DaNangHero = () => {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-grid-pattern">
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-10 md:right-24 w-28 h-28 bg-[#4287FF] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow mix-blend-multiply flex items-center justify-center -z-10"
      >
        <GraduationCap className="w-12 h-12 text-white" />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#D9FF42] border-2 border-[#0f0e0e] px-4 py-2 rounded-full mb-8 brutal-shadow-sm rotate-[-2deg]"
        >
          <MapPin className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-wider">
            Luyện thi SAT chuyên sâu · Đà Nẵng
          </span>
        </motion.div>

        <h1 className="text-[2.75rem] md:text-[5rem] leading-[0.98] font-display font-black tracking-tighter text-balance">
          SAT chuẩn quốc tế,
          <br />
          ngay tại{" "}
          <span className="relative inline-block mt-3">
            <span className="relative z-10 bg-[#FF82A9] text-[#0f0e0e] px-6 py-2 border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-lg inline-block transform -rotate-2">
              Đà Nẵng.
            </span>
          </span>
        </h1>

        <p className="mt-10 text-xl md:text-2xl max-w-2xl mx-auto font-medium text-[#0f0e0e]/80 text-balance">
          Lộ trình cá nhân hoá giúp bạn đạt điểm cao để xét tuyển đại học top
          đầu và săn học bổng du học.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={REGISTER_URL} className="group relative w-full sm:w-auto">
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              <CheckCircle2 className="w-6 h-6" />
              Đăng ký ngay
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
  { value: "1590", label: "Điểm SAT của giáo viên" },
  { value: "10000+", label: "Câu hỏi trong ngân hàng đề" },
  { value: `${SEATS_TAKEN}/${SEATS_TOTAL}`, label: "Sĩ số lớp hiện tại" },
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

const WhyNowSection = () => {
  const points = [
    {
      icon: TrendingUp,
      title: "SAT đang bùng nổ",
      body: "Số thí sinh SAT tại Việt Nam tăng mạnh từng năm. Các gia đình bắt đầu sớm chính là những người dẫn đầu.",
    },
    {
      icon: Target,
      title: "Ít cạnh tranh hơn",
      body: "Trong khi hầu hết học sinh chen nhau ở kỳ thi tốt nghiệp THPT, học sinh có SAT vào đại học top đầu qua diện xét tuyển chứng chỉ quốc tế.",
    },
    {
      icon: Sparkles,
      title: "Một kỳ thi, hai cánh cửa",
      body: "Một điểm SAT cao mở cả cánh cửa đại học hàng đầu trong nước lẫn học bổng du học. Dù con chọn hướng nào, công sức đều không lãng phí.",
    },
  ];
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-6">
        Tại sao là{" "}
        <span
          className="text-[#FF82A9] text-outline"
          style={{ WebkitTextStroke: "2px #0f0e0e" }}
        >
          SAT, ngay bây giờ.
        </span>
      </h2>
      <p className="text-lg md:text-xl font-medium text-[#0f0e0e]/70 max-w-2xl mb-16">
        SAT không còn là chuyện riêng của Hà Nội hay TP. Hồ Chí Minh. Đây là
        thời điểm để học sinh Đà Nẵng vượt lên.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 flex flex-col"
          >
            <div className="border-2 border-[#0f0e0e] bg-[#D9FF42] p-3 rounded-full inline-flex brutal-shadow-sm mb-6 w-fit">
              <p.icon className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-2xl font-display font-black uppercase tracking-tight">
              {p.title}
            </h3>
            <p className="mt-4 text-base font-medium text-gray-700">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const goals = [
  {
    icon: Target,
    color: "#FF6B35",
    title: "Xét tuyển đại học",
    body: "Điểm SAT cao mở cửa các chương trình tiên tiến, liên kết quốc tế và xét tuyển kết hợp tại các trường đại học hàng đầu trong nước.",
  },
  {
    icon: Plane,
    color: "#4287FF",
    title: "Du học & học bổng",
    body: "Hồ sơ SAT mạnh là điểm cộng lớn khi nộp đơn vào các trường ở Mỹ và quốc tế, đồng thời tăng cơ hội nhận học bổng giá trị.",
  },
];

const GoalsSection = () => {
  return (
    <section className="pt-12 pb-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-12">
        Học SAT để{" "}
        <span
          className="text-[#4287FF] text-outline"
          style={{ WebkitTextStroke: "2px #0f0e0e" }}
        >
          đi xa hơn.
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 flex flex-col"
          >
            <div
              className="border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6 w-fit"
              style={{ backgroundColor: g.color }}
            >
              <g.icon className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-2xl font-display font-black uppercase tracking-tight">
              {g.title}
            </h3>
            <p className="mt-4 text-base font-medium text-gray-700">{g.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const scoreLadder = [
  {
    range: "1200+",
    color: "#4287FF",
    title: "Mở cửa đại học",
    body: "Đủ điều kiện xét tuyển vào phần lớn các trường đại học nhận chứng chỉ SAT tại Việt Nam.",
  },
  {
    range: "1300–1400+",
    color: "#FF82A9",
    title: "Trường top & học bổng",
    body: "Cạnh tranh ở nhóm trường top như Ngoại Thương, Y Dược, đồng thời đủ sức săn học bổng du học.",
  },
  {
    range: "1500+",
    color: "#D9FF42",
    title: "Xa hơn nữa",
    body: "Mức điểm hướng tới các trường hàng đầu thế giới và những suất học bổng giá trị lớn.",
  },
];

const ScoreLadderSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-6">
        Con bạn đang{" "}
        <span
          className="text-[#FF6B35] text-outline"
          style={{ WebkitTextStroke: "2px #0f0e0e" }}
        >
          ở đâu?
        </span>
      </h2>
      <p className="text-lg md:text-xl font-medium text-[#0f0e0e]/70 max-w-2xl mb-16">
        SAT chấm theo thang 1600. Mỗi mốc điểm mở ra một nhóm cơ hội khác nhau.
        Đây là bản đồ để cả nhà cùng đặt mục tiêu.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {scoreLadder.map((s, i) => (
          <motion.div
            key={s.range}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 flex flex-col"
            style={{ backgroundColor: s.color }}
          >
            <span className="font-display font-black text-5xl tracking-tighter text-[#0f0e0e]">
              {s.range}
            </span>
            <h3 className="mt-4 text-2xl font-display font-black uppercase tracking-tight text-[#0f0e0e]">
              {s.title}
            </h3>
            <p className="mt-3 text-base font-medium text-[#0f0e0e]/80">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-sm font-medium text-[#0f0e0e]/50 max-w-2xl">
        * Ngưỡng điểm mang tính tham khảo và thay đổi theo từng năm, từng
        trường. Lớp sẽ tư vấn mục tiêu cụ thể theo nguyện vọng của từng bạn.
      </p>
    </section>
  );
};

const LocalSection = () => {
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
            <Trophy className="w-4 h-4" />
            Tự hào Đà Nẵng
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.05]">
            Lớp SAT chuyên sâu mà con{" "}
            <span className="text-[#D9FF42]">xứng đáng có</span> — không cần rời
            thành phố.
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-gray-300 max-w-2xl">
            Ronan SAT xây dựng lớp học với một mục tiêu rõ ràng: đưa chất lượng
            luyện SAT ngang tầm các trung tâm lớn nhất cả nước về với học sinh
            Đà Nẵng.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const features = [
  {
    icon: UserCheck,
    color: "#D9FF42",
    title: "Lộ trình cá nhân hoá",
    body: "Giảng dạy trên nền tảng Ronan SAT, lộ trình thiết kế riêng cho từng học viên. Theo sát, tốc độ vừa phải, không nhồi nhét.",
  },
  {
    icon: Clock,
    color: "#FF6B35",
    title: "Thời lượng linh hoạt",
    body: "Học nhanh trong 5–8 tháng hoặc đồng hành dài hạn. Thời lượng thích ứng với năng lực và mục tiêu của từng bạn.",
  },
  {
    icon: LineChart,
    color: "#4287FF",
    title: "Báo cáo hàng tuần",
    body: "Báo cáo điểm số và quá trình học mỗi tuần. Cả phụ huynh và học sinh đều theo dõi được tiến độ một cách minh bạch.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-16">
        Lớp học{" "}
        <span
          className="text-[#4287FF] text-outline"
          style={{ WebkitTextStroke: "2px #0f0e0e" }}
        >
          vận hành thế nào.
        </span>
      </h2>
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

const TuitionSection = () => {
  const points = [
    {
      icon: Wallet,
      title: "150.000đ / giờ",
      body: "Học phí vừa phải. Chất lượng giảng dạy chuẩn lớp chuyên sâu.",
    },
    {
      icon: CalendarClock,
      title: "5 giờ mỗi tuần",
      body: "Lịch học đều đặn 5 tiếng/tuần, đủ để giữ nhịp tiến bộ mà vẫn cân bằng với việc học trên trường.",
    },
  ];
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-6">
        Học phí{" "}
        <span
          className="text-[#FF6B35] text-outline"
          style={{ WebkitTextStroke: "2px #0f0e0e" }}
        >
          vừa phải.
        </span>
      </h2>
      <p className="text-lg md:text-xl font-medium text-[#0f0e0e]/70 max-w-2xl mb-16">
        Chất lượng cao không có nghĩa là đắt đỏ. Ronan SAT giữ học phí hợp lý để
        nhiều gia đình Đà Nẵng tiếp cận được lớp SAT chuyên sâu.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 flex flex-col"
          >
            <div className="border-2 border-[#0f0e0e] bg-[#D9FF42] p-3 rounded-full inline-flex brutal-shadow-sm mb-6 w-fit">
              <p.icon className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-3xl font-display font-black uppercase tracking-tight">
              {p.title}
            </h3>
            <p className="mt-4 text-base font-medium text-gray-700">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const RealExamSection = () => {
  const items = [
    {
      icon: Database,
      title: "10000+ câu hỏi",
      body: "Ngân hàng đề khổng lồ bám sát cấu trúc SAT thật, đủ để luyện từ nền tảng đến nâng cao.",
    },
    {
      icon: FileText,
      title: "Tài liệu độc quyền",
      body: "Bộ tài liệu và tính năng phân tích riêng dành cho lớp, không có ở bản thường.",
    },
    {
      icon: BadgeCheck,
      title: "Điểm thật, đề thật",
      body: "Làm bài trong điều kiện như thi thật và nhận điểm số chính xác để biết mình đang ở đâu.",
    },
  ];
  return (
    <section className="py-24 px-6 bg-[#0f0e0e] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-6">
          Ôn đề thật, <span className="text-[#D9FF42]">biết điểm thật.</span>
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-300 max-w-2xl mb-16">
          Nền tảng ôn thi hiện đại của Ronan SAT, kết hợp tài liệu và công cụ
          phân tích độc quyền dành riêng cho lớp học.
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
              Giáo viên đứng lớp
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Trần Vũ Mạnh Đức
            </h2>
            <p className="mt-3 text-xl font-bold text-[#0f0e0e]/80">
              1590 SAT · Admin Ronan SAT
            </p>
            <p className="mt-4 text-base md:text-lg font-medium text-gray-700 max-w-xl">
              Trực tiếp xây dựng lộ trình và đứng lớp, đảm bảo mỗi học viên được
              theo sát đến tận điểm số mục tiêu.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-start gap-5 bg-[#f4efe6] border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-5">
              <Link
                href="/teachers/tran-vu-manh-duc/vinuni-scholarship.png"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block shrink-0"
              >
                <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-2.5 group-hover:translate-y-2.5"></div>
                <Image
                  src="/teachers/tran-vu-manh-duc/vinuni-scholarship.png"
                  alt="Thư mời nhập học kèm học bổng 100% học phí VinUni của Trần Vũ Mạnh Đức"
                  width={160}
                  height={226}
                  className="relative w-32 sm:w-40 h-auto border-4 border-[#0f0e0e] rounded-2xl object-cover transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1"
                />
              </Link>
              <div>
                <div className="inline-flex items-center gap-2 bg-[#FF6B35] text-white border-2 border-[#0f0e0e] px-3 py-1 rounded-full brutal-shadow-sm font-bold text-xs uppercase tracking-wider">
                  <Trophy className="w-4 h-4" />
                  Học bổng
                </div>
                <h3 className="mt-3 text-2xl font-display font-black uppercase tracking-tight leading-tight">
                  Học bổng 100% học phí VinUni
                </h3>
                <p className="mt-2 text-sm md:text-base font-medium text-gray-700">
                  Trúng tuyển ngành Khoa học Máy tính (College of Engineering &
                  Computer Science) kèm học bổng tài năng 100% học phí năm học
                  2023–2024. Nhấn vào ảnh để xem thư mời gốc.
                </p>
              </div>
            </div>
            <Link
              href={TEACHER_FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block mt-8"
            >
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-2.5 group-hover:translate-y-2.5"></div>
              <div className="relative flex items-center justify-center gap-2 bg-[#4287FF] text-white border-4 border-[#0f0e0e] px-6 py-3 rounded-2xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                <FacebookIcon className="w-5 h-5" />
                Facebook giáo viên
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SeatsSection = () => {
  const pct = Math.round((SEATS_TAKEN / SEATS_TOTAL) * 100);
  return (
    <section className="pb-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#D9FF42] border-4 border-[#0f0e0e] rounded-[2.5rem] brutal-shadow-lg p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
          Sĩ số có hạn để theo sát
        </h2>
        <p className="mt-4 text-lg font-medium text-[#0f0e0e]/80 max-w-xl mx-auto">
          Mỗi lớp giới hạn {SEATS_TOTAL} học sinh để giáo viên kèm sát từng bạn.
          Lớp hiện tại đã có {SEATS_TAKEN} học viên.
        </p>

        <div className="mt-10 max-w-md mx-auto">
          <div className="flex justify-between items-end mb-2 font-display font-black uppercase">
            <span className="text-2xl">
              {SEATS_TAKEN}/{SEATS_TOTAL} chỗ
            </span>
            <span className="text-sm text-[#0f0e0e]/70">
              Còn {SEATS_TOTAL - SEATS_TAKEN} chỗ trống
            </span>
          </div>
          <div className="h-6 bg-white border-4 border-[#0f0e0e] rounded-full overflow-hidden brutal-shadow-sm">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="h-full bg-[#FF6B35] border-r-4 border-[#0f0e0e]"
            />
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
      title: "Đăng ký",
      body: "Điền đơn đăng ký hoặc nhắn trực tiếp Mạnh Đức. Cho biết điểm mục tiêu, ngày thi và định hướng xét tuyển hay du học.",
    },
    {
      n: "02",
      title: "Xếp lộ trình",
      body: "Làm bài kiểm tra đầu vào trên nền tảng Ronan SAT để xác định trình độ và xây lộ trình cá nhân hoá.",
    },
    {
      n: "03",
      title: "Học & theo dõi",
      body: "Học theo lộ trình riêng, ôn đề thật, nhận báo cáo điểm số và tiến độ hàng tuần cùng phụ huynh.",
    },
  ];
  return (
    <section id="how" className="py-24 px-6 bg-[#0f0e0e] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-16">
          Cách <span className="text-[#D9FF42]">hoạt động.</span>
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
              đăng ký?
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-white/90 max-w-xl mx-auto">
            Còn {SEATS_TOTAL - SEATS_TAKEN} chỗ trong lớp. Điền đơn đăng ký để
            được xếp lộ trình, hoặc nhắn trực tiếp Mạnh Đức để được tư vấn.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={REGISTER_URL}
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-10 py-6 rounded-2xl text-xl md:text-2xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                <CheckCircle2 className="w-7 h-7" />
                Đăng ký ngay
              </div>
            </Link>
            <Link
              href={TEACHER_FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative flex items-center justify-center gap-2 bg-white border-4 border-[#0f0e0e] px-10 py-6 rounded-2xl text-xl md:text-2xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                <FacebookIcon className="w-7 h-7" />
                Nhắn tin
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function DaNangClasses() {
  return (
    <div
      lang="vi"
      className="min-h-screen bg-[#f4efe6] selection:bg-[#D9FF42] selection:text-[#0f0e0e] overflow-x-hidden"
    >
      <SiteNav />
      <main>
        <DaNangHero />
        <StatsBand />
        <WhyNowSection />
        <GoalsSection />
        <ScoreLadderSection />
        <LocalSection />
        <FeaturesSection />
        <TuitionSection />
        <RealExamSection />
        <TeacherSection />
        <SeatsSection />
        <HowItWorks />
        <EnrollSection />
      </main>
      <SiteFooter />
    </div>
  );
}
