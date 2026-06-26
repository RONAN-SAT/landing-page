"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import {
  FacebookIcon,
  ThreadsIcon,
  TelegramIcon,
  InstagramIcon,
  ZaloIcon,
} from "@/components/landing/icons";
import { Share2, Sparkles } from "lucide-react";

type Social = {
  name: string;
  handle: string;
  href: string;
  blurb: string;
  color: string;
  icon: ({ className }: { className?: string }) => React.ReactElement;
};

const socials: Social[] = [
  {
    name: "Facebook",
    handle: "@ronansat",
    href: "https://www.facebook.com/ronansat",
    blurb: "Updates, announcements, and the fastest way to message us.",
    color: "#4287FF",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    handle: "@ronan_sat",
    href: "https://www.instagram.com/ronan_sat",
    blurb: "Behind the scenes, study tips, and score wins in your feed.",
    color: "#FF82A9",
    icon: InstagramIcon,
  },
  {
    name: "Zalo Group",
    handle: "Join the community",
    href: "https://zalo.me/g/a1zqo9jyhlppeh3u64dr",
    blurb: "Hop into the Zalo group to study together and ask questions.",
    color: "#D9FF42",
    icon: ZaloIcon,
  },
  {
    name: "Threads",
    handle: "@ronan_sat",
    href: "https://www.threads.com/@ronan_sat",
    blurb: "Quick thoughts, SAT chatter, and replies to your questions.",
    color: "#FF6B35",
    icon: ThreadsIcon,
  },
  {
    name: "Telegram",
    handle: "t.me/ronansat",
    href: "https://t.me/ronansat",
    blurb: "Drops, reminders, and resources straight to your phone.",
    color: "#4287FF",
    icon: TelegramIcon,
  },
];

const SocialsHero = () => {
  return (
    <section className="relative pt-36 pb-16 px-6 overflow-hidden bg-grid-pattern">
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-10 md:right-24 w-28 h-28 bg-[#FF82A9] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow mix-blend-multiply flex items-center justify-center -z-10"
      >
        <Share2 className="w-12 h-12 text-white" />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#D9FF42] border-2 border-[#0f0e0e] px-4 py-2 rounded-full mb-8 brutal-shadow-sm rotate-[-2deg]"
        >
          <Sparkles className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-wider">
            Find us everywhere
          </span>
        </motion.div>

        <h1 className="text-[3.25rem] md:text-[6rem] leading-[0.9] font-display font-black tracking-tighter uppercase text-balance">
          Follow the
          <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 bg-[#D9FF42] text-[#0f0e0e] px-6 py-2 border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-lg inline-block transform -rotate-2">
              community.
            </span>
          </span>
        </h1>

        <p className="mt-10 text-xl md:text-2xl max-w-2xl mx-auto font-medium text-[#0f0e0e]/80 text-balance">
          Connect with Ronan SAT across every channel. Tips, updates, and a
          community of students chasing a higher score.
        </p>
      </div>
    </section>
  );
};

const SocialsGrid = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {socials.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-8 transition-transform hover:-translate-y-1 hover:-translate-x-1"
            >
              <div
                className="border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6 w-fit"
                style={{ backgroundColor: s.color }}
              >
                <s.icon className="w-7 h-7 text-[#0f0e0e]" />
              </div>
              <h2 className="text-2xl font-display font-black uppercase tracking-tight">
                {s.name}
              </h2>
              <p className="mt-1 font-bold text-sm text-[#0f0e0e]/60">
                {s.handle}
              </p>
              <p className="mt-4 text-base font-medium text-gray-700">
                {s.blurb}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function SocialsHub() {
  return (
    <div className="min-h-screen bg-[#f4efe6] selection:bg-[#D9FF42] selection:text-[#0f0e0e] overflow-x-hidden">
      <SiteNav />
      <main>
        <SocialsHero />
        <SocialsGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
