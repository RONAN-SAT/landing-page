"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import { FacebookIcon } from "@/components/landing/icons";
import {
  Users,
  CalendarDays,
  LineChart,
  GraduationCap,
  Award,
} from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/ronansat";

const ClassesHero = () => {
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
          <Award className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-wider">Taught by a perfect scorer</span>
        </motion.div>

        <h1 className="text-[3.25rem] md:text-[6rem] leading-[0.9] font-display font-black tracking-tighter uppercase text-balance">
          Learn from a<br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 bg-[#FF82A9] text-[#0f0e0e] px-6 py-2 border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-lg inline-block transform -rotate-2">
              perfect scorer.
            </span>
          </span>
        </h1>

        <p className="mt-10 text-xl md:text-2xl max-w-2xl mx-auto font-medium text-[#0f0e0e]/80 text-balance">
          Live, expert-led SAT instruction from a perfect scorer who&apos;s helped 300+ students hit their target scores. Small groups, weekly accountability, a plan built around you.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              <FacebookIcon className="w-6 h-6" />
              Message Us to Enroll
            </div>
          </Link>
          <Link href="#how" className="group relative w-full sm:w-auto">
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center bg-white border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              How It Works
            </div>
          </Link>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3">
          <Link
            href="/classes/intensive"
            lang="vi"
            hrefLang="vi"
            className="inline-flex items-center gap-2 font-bold text-sm hover:underline decoration-2 underline-offset-4"
          >
            🇻🇳 Lớp SAT Intensive — luyện đề chuyên sâu (Tiếng Việt)
          </Link>
          <Link
            href="/classes/da-nang"
            lang="vi"
            hrefLang="vi"
            className="inline-flex items-center gap-2 font-bold text-sm hover:underline decoration-2 underline-offset-4"
          >
            🇻🇳 Lớp học SAT cho học sinh Đà Nẵng (Tiếng Việt)
          </Link>
        </div>
      </div>
    </section>
  );
};

const stats = [
  { value: "Top 1%", label: "Perfect-scorer instructor" },
  { value: "300+", label: "Students coached" },
  { value: "Live", label: "Weekly classes" },
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
            <div className="font-display font-black text-4xl md:text-5xl tracking-tight">{s.value}</div>
            <div className="mt-1 font-bold text-sm uppercase tracking-wide text-[#0f0e0e]/70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const benefits = [
  {
    icon: CalendarDays,
    color: "#FF6B35",
    title: "Weekly Live Classes",
    body: "Scheduled sessions with a real instructor. Walk through hard questions, learn the strategies, and never drift off track.",
  },
  {
    icon: LineChart,
    color: "#4287FF",
    title: "Progress You Can See",
    body: "Your tutor watches your analytics between sessions and adjusts the plan, so every class targets your weakest spots.",
  },
  {
    icon: Users,
    color: "#D9FF42",
    title: "Small Groups",
    body: "Tight cohorts mean real attention and a crew that keeps you accountable. Momentum beats cramming.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-16">
        What you get <span className="text-[#FF82A9] text-outline" style={{ WebkitTextStroke: "2px #0f0e0e" }}>in class.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 flex flex-col"
          >
            <div
              className="border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6 w-fit"
              style={{ backgroundColor: b.color }}
            >
              <b.icon className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-2xl font-display font-black uppercase tracking-tight">{b.title}</h3>
            <p className="mt-4 text-base font-medium text-gray-700">{b.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { n: "01", title: "Reach out", body: "Message us on Facebook. Tell us the target score and test date." },
    { n: "02", title: "Get placed", body: "We match the student to a cohort and starting level based on a quick diagnostic." },
    { n: "03", title: "Start climbing", body: "Weekly live classes plus full platform access. Track every point on the way up." },
  ];
  return (
    <section id="how" className="py-24 px-6 bg-[#0f0e0e] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-16">
          How it <span className="text-[#D9FF42]">works.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="border-4 border-[#f4efe6]/20 rounded-3xl p-8">
              <span className="font-display font-black text-5xl text-[#D9FF42]">{s.n}</span>
              <h3 className="mt-4 text-2xl font-display font-black uppercase tracking-tight text-white">{s.title}</h3>
              <p className="mt-3 text-base font-medium text-gray-300">{s.body}</p>
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
            Ready to <span className="text-[#D9FF42] text-outline" style={{ WebkitTextStroke: "2px #0f0e0e" }}>enroll?</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-white/90 max-w-xl mx-auto">
            Parents and students welcome. Message us on Facebook with the target score and test date, and we&apos;ll get the student placed in the next cohort.
          </p>
          <Link
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block mt-10"
          >
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-10 py-6 rounded-2xl text-xl md:text-2xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              <FacebookIcon className="w-7 h-7" />
              Message Us on Facebook
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-[#f4efe6] selection:bg-[#D9FF42] selection:text-[#0f0e0e] overflow-x-hidden">
      <SiteNav />
      <main>
        <ClassesHero />
        <StatsBand />
        <BenefitsSection />
        <HowItWorks />
        <EnrollSection />
      </main>
      <SiteFooter />
    </div>
  );
}
