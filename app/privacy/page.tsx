import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: "RONAN SAT Platform — Privacy Policy",
  description: "How the RONAN SAT Platform collects, uses, and protects personal information.",
};

const sections = [
  {
    title: "What We Collect",
    body: "When you create or use an account, we collect the information needed to run the RONAN SAT Platform: your name, email address, basic profile details, account preferences, and learning activity in the product.",
  },
  {
    title: "Google Sign-In (OAuth)",
    body: "If you sign in with Google, we use OAuth only for authentication. We request only standard identity scopes (openid, email, and profile) and do not request special or restricted Google permissions such as Gmail, Drive, Calendar, Contacts, or YouTube access.",
  },
  {
    title: "How We Use Data",
    body: "We use data to provide and secure your account, deliver SAT practice features, personalize your experience, improve product performance, and respond to support requests.",
  },
  {
    title: "Data Sharing",
    body: "We do not sell your personal information. We share data only with service providers that help us operate the platform (for hosting, analytics, and authentication) under appropriate confidentiality and data protection obligations.",
  },
  {
    title: "Data Retention",
    body: "We retain personal data as long as your account is active or as needed for legitimate business, legal, and security purposes. You can request account deletion, and we will delete or anonymize your data except where retention is required by law.",
  },
  {
    title: "Your Rights",
    body: "Depending on your location, you may have rights to access, correct, delete, or export your data, and to object to or restrict certain processing. You can contact us to exercise these rights.",
  },
  {
    title: "Security",
    body: "We use reasonable technical and organizational safeguards to protect personal information. No method of transmission or storage is completely secure, but we continuously work to protect your data.",
  },
  {
    title: "Children's Privacy",
    body: "The RONAN SAT Platform is intended for students and families. If we learn that we collected personal information from a child in violation of applicable law, we will take steps to delete that information.",
  },
  {
    title: "Contact",
    body: "If you have privacy questions or requests, contact us at support@ronansat.com.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#0f0e0e] selection:bg-[#BCCE75] selection:text-[#0f0e0e]">
      <header className="px-6 pt-8">
        <div className="max-w-5xl mx-auto bg-white border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-sm px-6 py-4 flex items-center justify-between gap-4">
          <BrandLogo size={34} labelClassName="text-2xl" iconClassName="w-9 h-9" />
          <Link
            href="/"
            className="font-bold text-sm uppercase tracking-wide border-2 border-[#0f0e0e] rounded-full px-4 py-2 hover:bg-[#BCCE75] transition-colors"
          >
            Back Home
          </Link>
        </div>
      </header>

      <main className="px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center bg-[#BCCE75] border-2 border-[#0f0e0e] rounded-full px-4 py-1.5 brutal-shadow-sm font-bold uppercase text-sm tracking-wide">
              Legal
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-display font-black uppercase leading-[0.95] tracking-tight">
              RONAN SAT Platform Privacy Policy
            </h1>
            <p className="mt-5 text-lg md:text-xl font-medium text-[#0f0e0e]/80 max-w-3xl">
              Effective date: April 20, 2026. This policy explains how the RONAN SAT Platform collects, uses, and protects personal information when you use our website and services.
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
