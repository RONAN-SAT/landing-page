"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const classesLinks = [
  { href: "/classes", label: "Classes", sub: "Live SAT classes in English" },
  {
    href: "/classes/da-nang",
    label: "Lớp học Đà Nẵng",
    sub: "Lớp luyện thi SAT tại Đà Nẵng",
    lang: "vi",
  },
];

const ClassesDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/classes"
        className="flex items-center gap-1 hover:underline decoration-2 underline-offset-4"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Classes
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72"
          >
            <div className="bg-[#f4efe6] border-2 border-[#0f0e0e] rounded-2xl brutal-shadow-sm overflow-hidden">
              {classesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  lang={link.lang}
                  className="block px-5 py-4 hover:bg-[#D9FF42] transition-colors border-b-2 border-[#0f0e0e] last:border-b-0"
                >
                  <span className="block font-bold text-sm">{link.label}</span>
                  <span className="block text-xs text-[#0f0e0e]/60 mt-0.5">
                    {link.sub}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="md:hidden mt-3 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto bg-[#f4efe6] border-2 border-[#0f0e0e] rounded-2xl brutal-shadow-sm overflow-hidden">
        <Link
          href="/"
          onClick={onClose}
          className="block px-5 py-4 font-bold text-sm hover:bg-[#D9FF42] transition-colors border-b-2 border-[#0f0e0e]"
        >
          Home
        </Link>
        {classesLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            lang={link.lang}
            onClick={onClose}
            className="block px-5 py-4 hover:bg-[#D9FF42] transition-colors border-b-2 border-[#0f0e0e]"
          >
            <span className="block font-bold text-sm">{link.label}</span>
            <span className="block text-xs text-[#0f0e0e]/60 mt-0.5">
              {link.sub}
            </span>
          </Link>
        ))}
        <Link
          href="https://learn.ronansat.com/auth"
          onClick={onClose}
          className="block px-5 py-4 font-bold text-sm hover:bg-[#D9FF42] transition-colors"
        >
          Log in / Start Free
        </Link>
      </div>
    </motion.div>
  );
};

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <div className="hidden md:flex gap-6 font-medium text-sm items-center">
          <Link
            href="/"
            className="hover:underline decoration-2 underline-offset-4"
          >
            Home
          </Link>
          <ClassesDropdown />
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="https://learn.ronansat.com/auth"
            className="font-bold text-sm hover:opacity-70 transition-opacity"
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
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden border-2 border-[#0f0e0e] rounded-xl p-2 hover:bg-[#D9FF42] transition-colors"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </motion.nav>
  );
}
