"use client";

import Link from "next/link";

import { warmLearnAuth } from "@/lib/warmLearnAuth";

// Login entry points point at the LEARN subdomain — the landing page is a
// static export, so a relative "/auth" resolves to ronansat.com/auth, which
// does not exist and 404s. Hovering any of them warms the learn Worker.
const learnAuthProps = {
  href: "https://learn.ronansat.com/auth",
  onMouseEnter: warmLearnAuth,
  onFocus: warmLearnAuth,
} as const;

export default function LandingFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Ronan SAT</h3>
            <p className="text-slate-400 max-w-md leading-relaxed">
              The most comprehensive SAT preparation platform designed to help you achieve your target score with personalized, data-driven practice.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link {...learnAuthProps} className="hover:text-white transition-colors">
                  Full-Length Tests
                </Link>
              </li>
              <li>
                <Link {...learnAuthProps} className="hover:text-white transition-colors">
                  Sectional Practice
                </Link>
              </li>
              <li>
                <Link {...learnAuthProps} className="hover:text-white transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/hall-of-fame" className="hover:text-white transition-colors">
                  Hall of Fame
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link {...learnAuthProps} className="hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link {...learnAuthProps} className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/socials" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            2024 Ronan SAT. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
