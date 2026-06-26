"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import { FacebookIcon } from "@/components/landing/icons";
import {
  Banknote,
  UserPlus,
  MessageCircle,
  Sparkles,
  Infinity as InfinityIcon,
  Zap,
  Crown,
  Gem,
  Award,
  Building2,
  Mail,
  ShieldCheck,
  CalendarDays,
  GraduationCap,
  Target,
  Trophy,
  Users,
  LineChart,
  MonitorPlay,
  Clock,
  Heart,
} from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/ronansat";
const CONTACT_EMAIL = "contact@ronansat.com";

const PartnerHero = () => {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-grid-pattern">
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-10 md:right-24 w-28 h-28 bg-[#4287FF] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow mix-blend-multiply flex items-center justify-center -z-10"
      >
        <Crown className="w-12 h-12 text-white" />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#D9FF42] border-2 border-[#0f0e0e] px-4 py-2 rounded-full mb-8 brutal-shadow-sm rotate-[-2deg]"
        >
          <ShieldCheck className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-wider">
            Partner programme
          </span>
        </motion.div>

        <h1 className="text-[3.25rem] md:text-[6rem] leading-[0.9] font-display font-black tracking-tighter uppercase text-balance">
          Refer students.
          <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 bg-[#FF82A9] text-[#0f0e0e] px-6 py-2 border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-lg inline-block transform -rotate-2">
              earn up to 145M.
            </span>
          </span>
        </h1>

        <p className="mt-10 text-xl md:text-2xl max-w-2xl mx-auto font-medium text-[#0f0e0e]/80 text-balance">
          A tiered partnership built for organisations. Paid in cash,
          immediately on sign-up.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="group relative w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              <Mail className="w-6 h-6" />
              Become a Partner
            </div>
          </Link>
          <Link href="#tiers" className="group relative w-full sm:w-auto">
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center bg-white border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              See the Tiers
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const tiers = [
  {
    icon: Award,
    name: "Golden",
    tier: "Tier 1",
    color: "#D9FF42",
    perStudent: "1,000,000 VND",
    range: "First 80 students",
    cap: "80,000,000 VND",
    points: [
      "1,000,000 VND for every referred student",
      "Applies to your first 80 students",
      "Paid in full, immediately on sign-up",
    ],
  },
  {
    icon: Gem,
    name: "Platinum",
    tier: "Tier 2",
    color: "#FF82A9",
    perStudent: "1,500,000 VND",
    range: "Students 81 – 140",
    cap: "90,000,000 VND",
    points: [
      "1,500,000 VND per student",
      "Unlocks on the next 60 students",
      "Paid in full, immediately on sign-up",
    ],
  },
  {
    icon: Crown,
    name: "Diamond",
    tier: "Tier 3",
    color: "#4287FF",
    perStudent: "2,000,000 VND",
    range: "Students 141 – 160",
    cap: "40,000,000 VND",
    points: [
      "2,000,000 VND per student who studies 2+ months",
      "1,500,000 VND on the first paid month",
      "500,000 VND on the second paid month",
    ],
  },
];

const TiersSection = () => {
  return (
    <section id="tiers" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-4">
        The{" "}
        <span
          className="text-[#FF82A9] text-outline"
          style={{ WebkitTextStroke: "2px #0f0e0e" }}
        >
          tiers.
        </span>
      </h2>
      <p className="text-lg md:text-xl font-medium text-[#0f0e0e]/70 mb-16 max-w-2xl">
        Commission grows as you refer more students. Each tier stacks on top of
        the last, up to a combined 210,000,000 VND per partnership.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div
                className="border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm w-fit"
                style={{ backgroundColor: t.color }}
              >
                <t.icon className="w-6 h-6 text-[#0f0e0e]" />
              </div>
              <span className="font-bold text-xs uppercase tracking-wider text-[#0f0e0e]/50">
                {t.tier}
              </span>
            </div>
            <h3 className="mt-6 text-3xl font-display font-black uppercase tracking-tight">
              {t.name}
            </h3>
            <div className="mt-4 font-display font-black text-4xl tracking-tight">
              {t.perStudent}
            </div>
            <div className="mt-1 font-bold text-sm text-[#0f0e0e]/60 uppercase tracking-wide">
              per student · {t.range}
            </div>
            <ul className="mt-6 space-y-3 font-medium text-base text-gray-700 flex-1">
              {t.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0f0e0e] shrink-0"
                    style={{ backgroundColor: t.color }}
                  />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t-2 border-[#0f0e0e]/10">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0f0e0e]/50">
                Tier cap
              </div>
              <div className="font-display font-black text-2xl tracking-tight">
                {t.cap}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 bg-[#0f0e0e] text-[#f4efe6] border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-[#D9FF42]">
            Total revenue share
          </div>
          <p className="mt-2 font-medium text-base md:text-lg text-gray-300 max-w-xl">
            Across the Golden, Platinum, and Diamond tiers combined, a single
            partnership can earn up to:
          </p>
        </div>
        <div className="font-display font-black text-5xl md:text-6xl tracking-tighter text-[#D9FF42] whitespace-nowrap">
          210,000,000 VND
        </div>
      </motion.div>
    </section>
  );
};

const EnterpriseSection = () => {
  return (
    <section className="px-6 max-w-7xl mx-auto pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-[#4287FF] to-[#2d5fd0] border-4 border-[#0f0e0e] rounded-[2.5rem] brutal-shadow-lg p-10 md:p-14 overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D9FF42] rounded-full border-4 border-[#0f0e0e] mix-blend-overlay" />
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div
            className="border-2 border-[#0f0e0e] p-4 rounded-full inline-flex brutal-shadow-sm shrink-0"
            style={{ backgroundColor: "#D9FF42" }}
          >
            <Building2 className="w-8 h-8 text-[#0f0e0e]" />
          </div>
          <div className="flex-1">
            <span className="font-bold text-xs uppercase tracking-wider text-white/70">
              Tier 4
            </span>
            <h2 className="mt-2 text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white">
              Enterprise partner
            </h2>
            <p className="mt-4 text-lg md:text-xl font-medium text-white/90 max-w-2xl">
              For organisations referring at scale. Unlimited commission cap,
              additional bonuses, and bespoke terms built around your numbers.
              Let&apos;s talk through a deal that works for you.
            </p>
            <ul className="mt-6 space-y-3 font-medium text-base md:text-lg text-white/90">
              <li className="flex items-center gap-3">
                <InfinityIcon className="w-5 h-5 text-[#D9FF42] shrink-0" />
                No cap on total revenue share
              </li>
              <li className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#D9FF42] shrink-0" />
                Extra bonuses beyond the standard tiers
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D9FF42] shrink-0" />
                Custom terms tailored to your organisation
              </li>
            </ul>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="group relative inline-block mt-8"
            >
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-lg md:text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                <Mail className="w-6 h-6" />
                {CONTACT_EMAIL}
              </div>
            </Link>
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
      icon: UserPlus,
      title: "Refer your students",
      body: "Introduce students from your organisation to a Ronan SAT class. Any starting level, any class.",
    },
    {
      n: "02",
      icon: Sparkles,
      title: "They sign up",
      body: "Once a referred student signs up for a class, the commission for that student is triggered straight away.",
    },
    {
      n: "03",
      icon: Zap,
      title: "Get paid immediately",
      body: "Payment is made in cash immediately on sign-up. For Diamond, 1,500,000 VND lands on the first paid month and 500,000 VND on the second.",
    },
    {
      n: "04",
      icon: MessageCircle,
      title: "Send us their details",
      body: "Share each referred student's Zalo phone number and Facebook URL so the team can confirm the referral and award commission.",
    },
  ];
  return (
    <section id="how" className="py-24 px-6 bg-[#0f0e0e] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-16">
          How it <span className="text-[#D9FF42]">works.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="border-4 border-[#f4efe6]/20 rounded-3xl p-8"
            >
              <div className="flex items-center gap-4">
                <span className="font-display font-black text-5xl text-[#D9FF42]">
                  {s.n}
                </span>
                <s.icon className="w-8 h-8 text-[#D9FF42]" />
              </div>
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

const TermsNote = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 md:p-12">
        <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight">
          The fine print
        </h2>
        <ul className="mt-6 space-y-4 font-medium text-base md:text-lg text-[#0f0e0e]/80">
          <li className="flex items-start gap-3">
            <Banknote className="w-5 h-5 text-[#FF6B35] mt-1 shrink-0" />
            All commissions are paid in cash, immediately on student sign-up.
            Diamond tier is split across the first two paid months.
          </li>
          <li className="flex items-start gap-3">
            <Crown className="w-5 h-5 text-[#4287FF] mt-1 shrink-0" />
            Diamond commission requires the student to study for more than two
            months.
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0f0e0e] mt-1 shrink-0" />
            Standard tiers cap at a combined 210,000,000 VND per partnership.
            Beyond this cap, support for the partnership concludes unless you
            are on an Enterprise agreement.
          </li>
          <li className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-[#FF82A9] mt-1 shrink-0" />
            For unlimited caps and additional bonuses, reach out about an
            Enterprise partnership at {CONTACT_EMAIL}.
          </li>
        </ul>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto bg-[#4287FF] border-4 border-[#0f0e0e] rounded-[3rem] brutal-shadow-lg p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D9FF42] rounded-full border-4 border-[#0f0e0e] mix-blend-overlay"></div>
        <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-[#FF82A9] rotate-45 border-4 border-[#0f0e0e] mix-blend-overlay"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] text-white">
            Let&apos;s{" "}
            <span
              className="text-[#D9FF42] text-outline"
              style={{ WebkitTextStroke: "2px #0f0e0e" }}
            >
              partner up.
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-white/90 max-w-xl mx-auto">
            Ready to refer students and earn at scale? Message us on Facebook or
            email us to set up your partnership.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-10 py-6 rounded-2xl text-xl md:text-2xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                <Mail className="w-7 h-7" />
                Email Us
              </div>
            </Link>
            <Link
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative flex items-center justify-center gap-2 bg-white border-4 border-[#0f0e0e] px-10 py-6 rounded-2xl text-xl md:text-2xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                <FacebookIcon className="w-7 h-7" />
                Facebook
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const achievements = [
  {
    icon: Users,
    color: "#D9FF42",
    value: "300+",
    label: "Students coached",
    note: "Over the last 3 years to their target scores.",
  },
  {
    icon: Target,
    color: "#FF82A9",
    value: "90%+",
    label: "Reach 1500+",
    note: "The overwhelming majority hit a top-tier score.",
  },
  {
    icon: Trophy,
    color: "#4287FF",
    value: "20%+",
    label: "Reach 1550+",
    note: "One in five lands in elite-admission territory.",
  },
  {
    icon: CalendarDays,
    color: "#FF6B35",
    value: "2023",
    label: "Established",
    note: "Built and battle-tested since Summer 2023.",
  },
];

const AchievementsBand = () => {
  return (
    <section className="px-6 -mt-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-6 text-center flex flex-col items-center"
          >
            <div
              className="border-2 border-[#0f0e0e] p-2.5 rounded-full inline-flex brutal-shadow-sm mb-4"
              style={{ backgroundColor: a.color }}
            >
              <a.icon className="w-5 h-5 text-[#0f0e0e]" />
            </div>
            <div className="font-display font-black text-4xl md:text-5xl tracking-tight">
              {a.value}
            </div>
            <div className="mt-1 font-bold text-sm uppercase tracking-wide text-[#0f0e0e]/70">
              {a.label}
            </div>
            <div className="mt-2 text-xs font-medium text-[#0f0e0e]/55">
              {a.note}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const sellingPoints = [
  {
    icon: Award,
    color: "#D9FF42",
    title: "Perfect-scorer teachers",
    body: "Every class is led by a perfect scorer. Highly trained, well known, and trusted by parents and students alike. Your referrals learn from the very top.",
  },
  {
    icon: MonitorPlay,
    color: "#4287FF",
    title: "Online-first, hybrid courses",
    body: "Live online meeting classes powered by Ronan SAT's latest technology, with offline classes arriving later. Authentic full-length exams that replicate the real Digital SAT, plus targeted sectional practice.",
  },
  {
    icon: LineChart,
    color: "#FF82A9",
    title: "Data-driven, personalised",
    body: "Advanced analytics track every student by topic, difficulty, and question type. Step-by-step explanations for every mistake and an AI tutor for follow-up questions, so the plan adapts to each student.",
  },
  {
    icon: Clock,
    color: "#FF6B35",
    title: "Available 24/7",
    body: "Teachers are hard-working, diligent, and ready to guide students every step of the way, readily available around the clock for the full length of the course.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-[#D9FF42] border-2 border-[#0f0e0e] px-4 py-2 rounded-full mb-6 brutal-shadow-sm">
          <GraduationCap className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-wider">
            Who you&apos;re referring to
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-6">
          Meet{" "}
          <span
            className="text-[#FF82A9] text-outline"
            style={{ WebkitTextStroke: "2px #0f0e0e" }}
          >
            Ronan SAT.
          </span>
        </h2>
        <p className="text-lg md:text-xl font-medium text-[#0f0e0e]/75">
          Established in the summer of 2023, Ronan SAT is an online-first SAT
          study suite and live class programme. In three years we&apos;ve
          coached 300+ students to their target scores, with more than 90%
          reaching 1500+ and over 20% reaching 1550+. When you refer a student,
          you&apos;re sending them to a proven programme that parents and
          students trust.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {sellingPoints.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 flex flex-col"
          >
            <div
              className="border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6 w-fit"
              style={{ backgroundColor: s.color }}
            >
              <s.icon className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-2xl font-display font-black uppercase tracking-tight">
              {s.title}
            </h3>
            <p className="mt-4 text-base font-medium text-gray-700">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Use canonical /ronansat/posts/<pfbid> permalinks or /share/p/<id>/ share
// links here. Plain /photo/?fbid=... links do NOT embed reliably — resolve
// each share link to its post permalink before adding it.
const hallOfFamePosts = [
  "https://www.facebook.com/ronansat/posts/pfbid021ehkjWXJVih8dd7XBX2ThVmavmbHwcCzNXSCHMaVUmfXhLsErvFDTCmGKPV1ASppl",
  "https://www.facebook.com/ronansat/posts/pfbid0Jq8vusdANNmRCMdLLLwgTZouT1dtWzZnCM5sx3FH45Tyc6JeZhAc6WgKKzi7HjpTl",
  "https://www.facebook.com/ronansat/posts/pfbid0KZ5FuhScsCtubBA1LergUaQJdngkFxJEUbmEZfe8ZkvoLe5SB521uGR8yvSMHZF1l",
  "https://www.facebook.com/ronansat/posts/pfbid0hdLwxoqfyqV97TXYxGdequaywoqhyBHm344csXVQyvGMgdqrrLGifFyNrV14SXjTl",
];

const HallOfFame = () => {
  return (
    <section id="hall-of-fame" className="py-24 bg-[#0f0e0e] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-[#D9FF42] text-[#0f0e0e] border-2 border-[#0f0e0e] px-4 py-2 rounded-full mb-6 brutal-shadow-sm">
          <Trophy className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-wider">
            Real results
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-4">
          Hall of <span className="text-[#D9FF42]">fame.</span>
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-300 mb-16 max-w-2xl">
          Straight from our Facebook. Real students, real score gains, these are
          the results your referrals can expect.
        </p>
      </div>
      <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-[max(1.5rem,calc((100vw_-_80rem)/2_+_1.5rem))] scroll-pl-[max(1.5rem,calc((100vw_-_80rem)/2_+_1.5rem))]">
        {hallOfFamePosts.map((url, i) => (
          <motion.div
            key={url}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow overflow-hidden flex justify-center w-[358px] shrink-0 snap-start"
          >
            <iframe
              title={`Ronan SAT student achievement ${i + 1}`}
              src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                url,
              )}&show_text=true&width=350`}
              width={350}
              height={500}
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <p className="mt-10 text-sm font-medium text-gray-500">
          Visit{" "}
          <Link
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D9FF42] hover:underline"
          >
            facebook.com/ronansat
          </Link>
          . To see the full list.
        </p>
      </div>
    </section>
  );
};

const AssuranceNote = () => {
  return (
    <section className="py-8 px-6 max-w-5xl mx-auto">
      <div className="bg-[#D9FF42] border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
        <div className="border-2 border-[#0f0e0e] p-4 rounded-full inline-flex brutal-shadow-sm shrink-0 bg-white">
          <Heart className="w-7 h-7 text-[#0f0e0e]" />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight">
            Refer with confidence
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium text-[#0f0e0e]/80">
            Reputable teachers, a proven track record, and a relentless focus on
            student satisfaction. Every student you send our way is guided every
            step of the way, so your reputation is safe with ours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function ReferralPartner() {
  return (
    <div className="min-h-screen bg-[#f4efe6] selection:bg-[#D9FF42] selection:text-[#0f0e0e] overflow-x-hidden">
      <SiteNav />
      <main>
        <PartnerHero />
        <AchievementsBand />
        <AboutSection />
        <HallOfFame />
        <AssuranceNote />
        <TiersSection />
        <EnterpriseSection />
        <HowItWorks />
        <TermsNote />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
