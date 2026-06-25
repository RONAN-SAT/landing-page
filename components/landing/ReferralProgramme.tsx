"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import { FacebookIcon } from "@/components/landing/icons";
import {
  Gift,
  Banknote,
  UserPlus,
  MessageCircle,
  Sparkles,
  Infinity as InfinityIcon,
  HeartHandshake,
  Phone,
} from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/ronansat";

const ReferralHero = () => {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-grid-pattern">
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-10 md:right-24 w-28 h-28 bg-[#FF6B35] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow mix-blend-multiply flex items-center justify-center -z-10"
      >
        <Gift className="w-12 h-12 text-white" />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#D9FF42] border-2 border-[#0f0e0e] px-4 py-2 rounded-full mb-8 brutal-shadow-sm rotate-[-2deg]"
        >
          <Banknote className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-wider">
            Refer a friend, earn cash
          </span>
        </motion.div>

        <h1 className="text-[3.25rem] md:text-[6rem] leading-[0.9] font-display font-black tracking-tighter uppercase text-balance">
          Share the class.
          <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 bg-[#FF82A9] text-[#0f0e0e] px-6 py-2 border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-lg inline-block transform -rotate-2">
              get paid.
            </span>
          </span>
        </h1>

        <p className="mt-10 text-xl md:text-2xl max-w-2xl mx-auto font-medium text-[#0f0e0e]/80 text-balance">
          Refer anyone to a Ronan SAT class. Earn{" "}
          <span className="font-bold">500,000 VND</span> for your first student,
          and <span className="font-bold">1,000,000 VND</span> for every student
          after that. Paid in cash, directly to you.
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
              Message Us to Start
            </div>
          </Link>
          <Link href="#how" className="group relative w-full sm:w-auto">
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center bg-white border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              How It Works
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const rewards = [
  {
    label: "First student",
    amount: "500,000 VND",
    note: "Your first successful referral.",
    color: "#D9FF42",
  },
  {
    label: "From the 2nd onward",
    amount: "1,000,000 VND",
    note: "Per student, every time.",
    color: "#FF82A9",
  },
  {
    label: "No cap",
    amount: "Unlimited",
    note: "Refer as many students as you like.",
    color: "#4287FF",
  },
];

const RewardsBand = () => {
  return (
    <section className="px-6 -mt-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {rewards.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-6 text-center"
          >
            <div
              className="inline-block font-bold text-xs uppercase tracking-wide border-2 border-[#0f0e0e] rounded-full px-3 py-1 mb-3"
              style={{ backgroundColor: r.color }}
            >
              {r.label}
            </div>
            <div className="font-display font-black text-3xl md:text-4xl tracking-tight">
              {r.amount}
            </div>
            <div className="mt-1 font-bold text-sm text-[#0f0e0e]/70">
              {r.note}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const benefits = [
  {
    icon: HeartHandshake,
    color: "#FF6B35",
    title: "Keeps Ronan SAT Free",
    body: "Every referral helps sustain the platform so it stays free for students forever. You earn cash and grow the community at the same time.",
  },
  {
    icon: Sparkles,
    color: "#4287FF",
    title: "Exclusive Courses & Features",
    body: "Ronan SAT class students get exclusive courses and always have the latest access to use the newest features the moment they ship.",
  },
  {
    icon: InfinityIcon,
    color: "#D9FF42",
    title: "No Limits",
    body: "Class students use everything on Ronan SAT with no limits. Full access, every tool, no paywalls in the way of a higher score.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-balance mb-16">
        Why it&apos;s a{" "}
        <span
          className="text-[#FF82A9] text-outline"
          style={{ WebkitTextStroke: "2px #0f0e0e" }}
        >
          win-win.
        </span>
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
            <h3 className="text-2xl font-display font-black uppercase tracking-tight">
              {b.title}
            </h3>
            <p className="mt-4 text-base font-medium text-gray-700">{b.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      n: "01",
      icon: UserPlus,
      title: "Introduce a friend",
      body: "Tell anyone you know about Ronan SAT classes. They can sign up for any class, from any starting level.",
    },
    {
      n: "02",
      icon: Sparkles,
      title: "They sign up",
      body: "Once your referred student signs up for a Ronan SAT class, your reward is on the way.",
    },
    {
      n: "03",
      icon: MessageCircle,
      title: "Send us their details",
      body: "Message Ronan SAT or the teacher with your referred student's Zalo phone number and Facebook URL, so the team can contact them directly and confirm the referral.",
    },
    {
      n: "04",
      icon: Banknote,
      title: "Get paid in cash",
      body: "Once confirmed, an admin or teacher contacts you and awards the commission directly. 500,000 VND for your first student, 1,000,000 VND for each one after.",
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

const ContactNote = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
        <div
          className="border-2 border-[#0f0e0e] p-4 rounded-full inline-flex brutal-shadow-sm shrink-0"
          style={{ backgroundColor: "#D9FF42" }}
        >
          <Phone className="w-7 h-7 text-[#0f0e0e]" />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight">
            What to send us
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium text-[#0f0e0e]/80">
            To claim your reward, message Ronan SAT or your referred
            student&apos;s teacher with these details:
          </p>
          <ul className="mt-6 space-y-3 font-medium text-base md:text-lg">
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF82A9] border-2 border-[#0f0e0e] shrink-0" />
              The referred student&apos;s{" "}
              <span className="font-bold">Zalo phone number</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4287FF] border-2 border-[#0f0e0e] shrink-0" />
              The referred student&apos;s{" "}
              <span className="font-bold">Facebook URL</span>
            </li>
          </ul>
          <p className="mt-6 text-sm md:text-base font-medium text-[#0f0e0e]/60">
            The team uses these to contact the student directly, confirm the
            referral, and award your commission.
          </p>
        </div>
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
            Start{" "}
            <span
              className="text-[#D9FF42] text-outline"
              style={{ WebkitTextStroke: "2px #0f0e0e" }}
            >
              referring.
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-white/90 max-w-xl mx-auto">
            Know someone who&apos;d thrive in a Ronan SAT class? Send them our
            way, message us with their details, and earn cash for every student
            who signs up.
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

export default function ReferralProgramme() {
  return (
    <div className="min-h-screen bg-[#f4efe6] selection:bg-[#D9FF42] selection:text-[#0f0e0e] overflow-x-hidden">
      <SiteNav />
      <main>
        <ReferralHero />
        <RewardsBand />
        <BenefitsSection />
        <HowItWorks />
        <ContactNote />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
