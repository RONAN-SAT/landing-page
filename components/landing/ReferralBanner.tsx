"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

export default function ReferralBanner() {
  return (
    <motion.div
      initial={{ y: -48 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[60] h-10"
    >
      <Link
        href="/referral"
        className="group flex h-full items-center justify-center gap-2 bg-[#0f0e0e] px-4 text-[#f4efe6] border-b-2 border-[#D9FF42] hover:bg-[#1a1818] transition-colors"
      >
        <Clock className="w-3.5 h-3.5 text-[#D9FF42] shrink-0" />
        <span className="font-bold uppercase tracking-wider text-[11px] sm:text-xs text-[#D9FF42] shrink-0">
          Limited Time Offer
        </span>
        <span className="hidden sm:inline text-[#f4efe6]/40">·</span>
        <span className="font-medium text-[11px] sm:text-xs truncate">
          <span className="hidden sm:inline">
            Refer a friend, earn cash for every student
          </span>
          <span className="sm:hidden">Refer &amp; earn cash</span>
        </span>
        <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
