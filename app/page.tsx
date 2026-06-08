"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import { StarIcon } from "@/components/landing/icons";
import {
  ArrowRight,
  Brain,
  Trophy,
  Target,
  Sparkles,
  Clock,
  BookOpen,
  CheckCircle2,
  MessageSquare,
  Radio,
  Users,
  ArrowUpRight,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-grid-pattern">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 md:left-20 w-32 h-32 bg-[#FF82A9] rounded-full border-4 border-[#0f0e0e] brutal-shadow mix-blend-multiply flex items-center justify-center -z-10"
      >
        <Sparkles className="w-12 h-12 text-[#0f0e0e]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-10 md:right-20 w-40 h-40 bg-[#D9FF42] border-4 border-[#0f0e0e] rounded-3xl brutal-shadow mix-blend-multiply flex items-center justify-center -z-10"
      >
        <Target className="w-16 h-16 text-[#0f0e0e]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#0f0e0e] px-4 py-2 rounded-full mb-8 brutal-shadow-sm rotate-[-2deg]"
          >
            <span className="w-3 h-3 rounded-full bg-[#FF6B35] animate-pulse"></span>
            <span className="font-bold text-sm uppercase tracking-wider">Not your average prep course</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[4rem] md:text-[7rem] leading-[0.9] font-display font-black tracking-tighter text-balance uppercase"
          >
            Hate Studying?<br/>
            <span className="text-outline">We Made It</span><br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-[#4287FF] text-white px-6 py-2 border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-lg inline-block transform rotate-2">
                Addicting.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-xl md:text-2xl max-w-2xl font-medium text-[#0f0e0e]/80 text-balance"
          >
            Full test simulations, aggressive analytics, a vocab builder that plays like a game, and a community that drills with you. Crush the SAT without losing your mind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="https://learn.ronansat.com/auth" className="group relative w-full sm:w-auto">
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                Start Practicing
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link href="/classes" className="group relative w-full sm:w-auto">
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative flex items-center justify-center bg-white border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                Join a Class
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MarqueeSection = () => {
  return (
    <div className="bg-[#0f0e0e] text-[#D9FF42] py-6 border-y-4 border-[#0f0e0e] flex overflow-hidden whitespace-nowrap -rotate-2 scale-105 origin-center relative z-20">
      <div className="marquee-content font-display font-black text-4xl uppercase tracking-widest flex items-center">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-8">Score Higher</span>
            <StarIcon />
            <span className="mx-8">Study Smarter</span>
            <StarIcon />
            <span className="mx-8">Beat The Test</span>
            <StarIcon />
          </span>
        ))}
      </div>
    </div>
  );
};

const BentoFeatures = () => {
  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-balance">
          We rebuilt prep <br/> <span className="text-[#4287FF] text-outline" style={{ WebkitTextStroke: "2px #0f0e0e" }}>from the ground up.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-[#FF6B35] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col justify-between overflow-hidden relative group min-h-[300px]"
        >
          <div className="relative z-10">
            <div className="bg-white border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6">
              <Clock className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-black text-[#0f0e0e] uppercase">Real Test Simulations</h3>
            <p className="mt-4 text-lg text-[#0f0e0e]/90 font-medium max-w-md">
              Full-length and sectional Digital SAT runs with a built-in Desmos calculator. Same timing, same flow, zero surprises on test day.
            </p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col justify-between min-h-[300px]"
        >
          <div>
             <div className="bg-[#4287FF] border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-display font-black text-[#0f0e0e] uppercase">Leaderboards</h3>
            <p className="mt-4 text-base font-medium text-gray-700">
              Friendly competition. Climb the ranks as you master new concepts.
            </p>
          </div>
          <div className="mt-6 flex items-end gap-2 h-20">
            <div className="w-1/3 bg-[#f4efe6] h-[40%] rounded-xl border-2 border-[#0f0e0e]"></div>
            <div className="w-1/3 bg-[#FF82A9] h-[80%] rounded-xl border-2 border-[#0f0e0e]"></div>
            <div className="w-1/3 bg-[#D9FF42] h-[100%] rounded-xl border-2 border-[#0f0e0e]"></div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#D9FF42] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col justify-between min-h-[300px]"
        >
          <div>
            <div className="bg-white border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6">
              <Brain className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-3xl font-display font-black text-[#0f0e0e] uppercase">Precision Analytics</h3>
            <p className="mt-4 text-base font-medium text-gray-800">
              Radar charts, score trends, and an error log that tags every miss by domain and skill.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#FF82A9] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col justify-between min-h-[300px]"
        >
          <div>
            <div className="bg-white border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6">
              <Radio className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-3xl font-display font-black text-[#0f0e0e] uppercase">Live Sessions</h3>
            <p className="mt-4 text-base font-medium text-[#0f0e0e]/80">
              Join live rooms for real-time quizzes, polls, and Q&A with your tutor and classmates.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-[#0f0e0e] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col justify-between text-[#f4efe6] min-h-[300px]"
        >
          <div>
            <div className="bg-[#D9FF42] border-2 border-[#0f0e0e] p-3 rounded-full inline-flex mb-6">
              <Target className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-3xl font-display font-black uppercase text-white">Custom Practice</h3>
            <p className="mt-4 text-base text-gray-300 font-medium">
              Build a set by domain, skill, difficulty, and timer. Or hit Quick Practice for fresh, unseen questions.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-white rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col justify-between min-h-[300px]"
        >
          <div>
            <div className="bg-[#FF6B35] border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6">
              <BookOpen className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-3xl font-display font-black text-[#0f0e0e] uppercase">Vocab Builder</h3>
            <p className="mt-4 text-base font-medium text-gray-700">
              Spaced-repetition flashcards with audio. Turn weak words into repeat wins.
            </p>
          </div>
          <Link href="#vocab" className="inline-flex items-center gap-1 font-bold text-sm uppercase tracking-wide hover:gap-2 transition-all">
            See it <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const CommunitySection = () => {
  const posts = [
    { tag: "Question", color: "#4287FF", title: "Why is the answer B on this linear systems problem?", meta: "42 upvotes · 12 replies" },
    { tag: "Poll", color: "#FF82A9", title: "How are you pacing the Reading module?", meta: "318 votes" },
    { tag: "Event", color: "#D9FF42", title: "Saturday full-length, 9AM. Who's in?", meta: "27 signed up" },
  ];

  return (
    <section id="community" className="py-32 px-6 bg-[#0f0e0e] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 bg-[#D9FF42] text-[#0f0e0e] px-4 py-1.5 border-2 border-[#0f0e0e] rounded-full font-bold text-sm uppercase tracking-wider brutal-shadow-sm rotate-[-2deg] mb-6">
            <MessageSquare className="w-4 h-4" />
            The Forum
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] mb-6">
            You&apos;re not <br/>
            <span className="text-[#FF82A9]">grinding alone.</span>
          </h2>
          <p className="text-xl text-gray-300 font-medium mb-8 max-w-lg">
            Post a tough question straight from the bank, run a poll, or rally a study group for the weekend. Upvotes, karma, and threads keep the good answers on top.
          </p>
          <ul className="space-y-4 mb-10">
            {["Embed real SAT questions in any post", "Vote answers up, earn karma flair", "Polls, events, and study threads"].map((item) => (
              <li key={item} className="flex items-center gap-3 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-[#D9FF42] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="https://learn.ronansat.com/auth" className="group inline-flex items-center gap-2 font-bold font-display uppercase tracking-wide text-lg hover:gap-3 transition-all">
            Jump into the forum
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        <div className="lg:w-1/2 w-full space-y-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white text-[#0f0e0e] border-4 border-[#0f0e0e] rounded-2xl p-5 brutal-shadow flex items-start gap-4"
            >
              <div className="flex flex-col items-center gap-1 pt-1">
                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#0f0e0e]" />
                <span className="font-display font-black text-sm">{99 - i * 14}</span>
              </div>
              <div>
                <span
                  className="inline-block px-2.5 py-0.5 border-2 border-[#0f0e0e] rounded-full font-bold text-xs uppercase tracking-wide mb-2"
                  style={{ backgroundColor: post.color }}
                >
                  {post.tag}
                </span>
                <p className="font-bold text-lg leading-tight">{post.title}</p>
                <p className="text-sm font-medium text-gray-500 mt-1">{post.meta}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FlashcardDemo = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="vocab" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="inline-block bg-[#D9FF42] text-[#0f0e0e] px-4 py-1 border-2 border-[#0f0e0e] rounded-full font-bold text-sm uppercase tracking-wider brutal-shadow-sm mb-6 rotate-2">
            Interactive Demo
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-[#0f0e0e] mb-6">
            Words that stick.
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-8">
            Stop staring at boring lists. Our vocabulary builder uses spaced repetition and visceral design to sear definitions into your brain.
          </p>
          <ul className="space-y-4 mb-10">
            {["Curated high-frequency SAT words", "Spaced repetition algorithms", "Contextual example sentences"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B35]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center w-full">
          <div
            className="w-full max-w-sm h-96 cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="w-full h-full relative preserve-3d transition-transform duration-700"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow-lg flex flex-col items-center justify-center p-8">
                <div className="text-6xl font-display font-black text-[#0f0e0e] tracking-tight">
                  Ephemeral
                </div>
                <div className="mt-10 animate-bounce flex items-center gap-2 text-gray-500 font-bold uppercase tracking-widest text-sm">
                  Click to Flip
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 backface-hidden bg-[#FF82A9] border-4 border-[#0f0e0e] rounded-3xl brutal-shadow-lg flex flex-col items-center justify-center p-8 text-center"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="text-2xl font-display font-black text-[#0f0e0e] mb-4">
                  (adjective)
                </div>
                <div className="text-3xl font-bold text-white mb-6">
                  Lasting for a very short time.
                </div>
                <div className="text-lg font-medium text-[#0f0e0e]/80 italic bg-white/20 p-4 rounded-xl border-2 border-[#0f0e0e]">
                  &ldquo;The viral meme&apos;s fame was ephemeral, forgotten within a week.&rdquo;
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClassesTeaser = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-[#FF82A9] border-4 border-[#0f0e0e] rounded-[2rem] brutal-shadow p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D9FF42] rounded-full border-4 border-[#0f0e0e] mix-blend-multiply -z-0" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[#0f0e0e] rounded-full px-4 py-1.5 brutal-shadow-sm font-bold text-sm uppercase tracking-wide mb-5">
              <Users className="w-4 h-4" />
              Live Tutoring
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight leading-[0.95]">
              Want a coach <br/> in your corner?
            </h2>
            <p className="mt-5 text-lg md:text-xl font-medium text-[#0f0e0e]/80">
              Ronan SAT Classes pair the platform with live, expert-led instruction. Small groups, real accountability, a clear path to your target score.
            </p>
          </div>
          <Link href="/classes" className="group relative inline-block shrink-0">
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              Explore Classes
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto bg-[#4287FF] border-4 border-[#0f0e0e] rounded-[3rem] brutal-shadow-lg p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D9FF42] rounded-full border-4 border-[#0f0e0e] mix-blend-overlay"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#FF6B35] rotate-45 border-4 border-[#0f0e0e] mix-blend-overlay"></div>

        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white mb-8">
            Ready to <br/><span className="text-[#D9FF42] text-outline" style={{ WebkitTextStroke: "2px #0f0e0e" }}>Destroy</span> the SAT?
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of students who traded boring textbooks for a study platform they actually want to use.
          </p>
          <Link href="https://learn.ronansat.com/auth" className="group relative inline-block">
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-10 py-6 rounded-2xl text-2xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              Start Practicing
              <BrandLogo
                withWordmark={false}
                size={32}
                iconClassName="w-8 h-8 group-hover:rotate-12 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4efe6] selection:bg-[#D9FF42] selection:text-[#0f0e0e] overflow-x-hidden">
      <SiteNav />
      <main>
        <HeroSection />
        <MarqueeSection />
        <BentoFeatures />
        <CommunitySection />
        <FlashcardDemo />
        <ClassesTeaser />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
