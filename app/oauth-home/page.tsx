import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = {
  applicationName: "RONAN SAT Platform",
  title: "RONAN SAT Platform | Application Information",
  description:
    "Learn what the RONAN SAT Platform does and how it uses Google account information for sign-in.",
};

const capabilities = [
  "Full-length Digital SAT practice tests and targeted sectional practice",
  "Performance analytics that help students identify strengths and weaknesses",
  "Vocabulary practice, answer explanations, and personalized study support",
];

export default function OAuthHomePage() {
  return (
    <main className="min-h-screen bg-[#0f0e0e] text-[#f4efe6] px-6 py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center gap-4 border-b border-white/20 pb-8">
          <BrandLogo
            variant="white"
            withWordmark={false}
            size={54}
            iconClassName="h-[54px] w-[54px]"
            priority
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#BCCE75]">
              Application information
            </p>
            <p className="mt-1 font-display text-xl font-black uppercase tracking-tight md:text-2xl">
              RONAN SAT Platform
            </p>
          </div>
        </header>

        <section className="py-14 md:py-20">
          <div className="inline-flex rounded-full border-2 border-[#f4efe6] bg-[#BCCE75] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0f0e0e]">
            SAT preparation application
          </div>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl">
            RONAN SAT Platform
          </h1>
          <p className="mt-7 max-w-3xl text-xl font-medium leading-relaxed text-[#f4efe6]/75 md:text-2xl">
            RONAN SAT Platform is an online learning application that helps
            students prepare for the Digital SAT through realistic practice,
            progress analytics, and personalized study tools.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border-4 border-[#0f0e0e] bg-[#f4efe6] p-7 text-[#0f0e0e] shadow-[8px_8px_0_#BCCE75] md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f0e0e]/55">
              Purpose
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight">
              What the app does
            </h2>
            <ul className="mt-6 space-y-4 text-lg font-medium leading-relaxed">
              {capabilities.map((capability) => (
                <li key={capability} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0f0e0e]"
                  />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border-4 border-[#0f0e0e] bg-[#BCCE75] p-7 text-[#0f0e0e] shadow-[8px_8px_0_#f4efe6] md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f0e0e]/55">
              Google account data
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight">
              Why Google sign-in is used
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed">
              Google OAuth is used only to authenticate users and secure their
              RONAN SAT Platform accounts. We request standard identity
              information—name, email address, and profile image—to create and
              maintain the user&apos;s account.
            </p>
            <p className="mt-5 text-base font-bold leading-relaxed">
              We do not request access to Gmail, Google Drive, Calendar,
              Contacts, YouTube, or other Google services.
            </p>
          </section>
        </div>

        <section className="mt-14 border-t border-white/20 pt-9 md:mt-20">
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">
            Policies and support
          </h2>
          <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-[#f4efe6]/65">
            Review how RONAN SAT Platform handles information and the terms that
            govern use of the application. No sign-in is required to view these
            documents.
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/privacy"
              className="rounded-xl border-2 border-[#f4efe6] bg-[#f4efe6] px-6 py-3 text-center font-bold uppercase tracking-wide text-[#0f0e0e] transition-transform hover:-translate-y-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="rounded-xl border-2 border-[#f4efe6] px-6 py-3 text-center font-bold uppercase tracking-wide transition-colors hover:bg-[#f4efe6] hover:text-[#0f0e0e]"
            >
              Terms of Service
            </Link>
          </div>
          <p className="mt-8 text-sm font-medium text-[#f4efe6]/55">
            Support: {" "}
            <a
              href="mailto:support@ronansat.com"
              className="text-[#BCCE75] underline decoration-2 underline-offset-4"
            >
              support@ronansat.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
