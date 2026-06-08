"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
];

export default function SiteNav() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#f4efe6]/90 backdrop-blur-md border-2 border-[#0f0e0e] rounded-2xl px-6 py-4 brutal-shadow-sm pointer-events-auto">
        <Link href="/" aria-label="Ronan SAT home">
          <BrandLogo
            priority
            size={32}
            labelClassName="text-xl"
            iconClassName="w-8 h-8"
          />
        </Link>
        <div className="hidden md:flex gap-6 font-medium text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline decoration-2 underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="https://learn.ronansat.com/auth"
            className="hidden sm:inline font-bold text-sm hover:opacity-70 transition-opacity"
          >
            Log in
          </Link>
          <Link
            href="https://learn.ronansat.com/auth"
            className="bg-[#0f0e0e] text-[#f4efe6] px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform brutal-shadow-sm border-2 border-[#0f0e0e]"
          >
            Start Free
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
