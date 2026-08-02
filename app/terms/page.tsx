import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: "RONAN SAT Platform — Terms of Service",
  description: "Terms governing your use of the RONAN SAT Platform.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the RONAN SAT Platform, you agree to these Terms of Service. If you do not agree, do not use the service.",
  },
  {
    title: "Eligibility and Accounts",
    body: "You are responsible for maintaining the security of your account credentials and for activity under your account. You must provide accurate account information and keep it updated.",
  },
  {
    title: "Google Sign-In (OAuth)",
    body: "The RONAN SAT Platform supports Google OAuth for sign-in only. We request only the standard identity scopes needed for authentication (openid, email, and profile) and do not request special or restricted Google permissions.",
  },
  {
    title: "Permitted Use",
    body: "You may use the service for personal, lawful educational purposes. You agree not to misuse, disrupt, reverse engineer, or attempt unauthorized access to the platform.",
  },
  {
    title: "Content and Intellectual Property",
    body: "All platform content, software, branding, and materials are owned by RONAN SAT Platform or its licensors and are protected by applicable intellectual property laws. You receive a limited, non-transferable license to use the service.",
  },
  {
    title: "Subscriptions and Billing",
    body: "If paid plans are offered, pricing and billing terms will be presented at purchase. Unless otherwise stated, fees are non-refundable except where required by law.",
  },
  {
    title: "Termination",
    body: "We may suspend or terminate accounts that violate these terms or threaten platform security. You may stop using the service at any time.",
  },
  {
    title: "Disclaimers and Liability",
    body: "The service is provided on an as-is and as-available basis. To the maximum extent permitted by law, RONAN SAT Platform disclaims warranties and is not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "Changes to Terms",
    body: "We may update these terms from time to time. Continued use of the service after updates means you accept the revised terms.",
  },
  {
    title: "Contact",
    body: "For terms-related questions, contact support@ronansat.com.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#0f0e0e] selection:bg-[#BCCE75] selection:text-[#0f0e0e]">
      <header className="px-6 pt-8">
        <div className="max-w-5xl mx-auto bg-white border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-sm px-6 py-4 flex items-center justify-between gap-4">
          <BrandLogo size={34} labelClassName="text-2xl" iconClassName="w-9 h-9" />
          <Link
            href="/"
            className="font-bold text-sm uppercase tracking-wide border-2 border-[#0f0e0e] rounded-full px-4 py-2 hover:bg-[#FBDAE3] transition-colors"
          >
            Back Home
          </Link>
        </div>
      </header>

      <main className="px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center bg-[#FBDAE3] border-2 border-[#0f0e0e] rounded-full px-4 py-1.5 brutal-shadow-sm font-bold uppercase text-sm tracking-wide">
              Legal
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-display font-black uppercase leading-[0.95] tracking-tight">
              RONAN SAT Platform Terms of Service
            </h1>
            <p className="mt-5 text-lg md:text-xl font-medium text-[#0f0e0e]/80 max-w-3xl">
              Effective date: April 20, 2026. These terms govern your use of the RONAN SAT Platform and related services.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed font-medium text-[#0f0e0e]/85">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
