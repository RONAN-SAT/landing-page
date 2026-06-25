import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { FacebookIcon, ThreadsIcon, TelegramIcon } from "./icons";

const FACEBOOK_URL = "https://www.facebook.com/ronansat";
const THREADS_URL = "https://www.threads.com/@ronan_sat";
const TELEGRAM_URL = "https://t.me/ronansat";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0f0e0e] text-[#f4efe6] pt-24 pb-12 px-6 border-t-8 border-[#D9FF42]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/20 pb-12">
        <div className="max-w-sm">
          <BrandLogo
            size={40}
            labelClassName="text-3xl"
            iconClassName="w-10 h-10"
            className="mb-6"
          />
          <p className="text-gray-400 font-medium text-lg">
            Score growth, but fun. The SAT study suite for the next generation.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
          <div>
            <h4 className="font-bold uppercase tracking-wider text-gray-500 mb-4">Product</h4>
            <ul className="space-y-3 font-medium text-lg">
              <li><Link href="/#features" className="hover:text-[#D9FF42] transition-colors">Features</Link></li>
              <li><Link href="/#community" className="hover:text-[#D9FF42] transition-colors">Community</Link></li>
              <li><Link href="/#vocab" className="hover:text-[#D9FF42] transition-colors">Vocab Builder</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider text-gray-500 mb-4">Learn</h4>
            <ul className="space-y-3 font-medium text-lg">
              <li><Link href="/classes" className="hover:text-[#FF82A9] transition-colors">Classes</Link></li>
              <li><Link href="/classes/da-nang" lang="vi" className="hover:text-[#FF82A9] transition-colors">Lớp học Đà Nẵng</Link></li>
              <li><Link href="/referral" className="hover:text-[#FF82A9] transition-colors">Referral Programme</Link></li>
              <li>
                <Link
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF82A9] transition-colors"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider text-gray-500 mb-4">Company</h4>
            <ul className="space-y-3 font-medium text-lg">
              <li><Link href="/privacy" className="hover:text-[#D9FF42] transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-[#D9FF42] transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6 font-medium text-gray-500">
        <p>© {new Date().getFullYear()} Ronan SAT. All rights reserved.</p>
        <div className="flex gap-4 items-center">
          <Link
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ronan SAT on Facebook"
            className="border-2 border-white/20 rounded-full p-2 hover:border-[#D9FF42] hover:text-[#D9FF42] transition-colors"
          >
            <FacebookIcon className="w-5 h-5" />
          </Link>
          <Link
            href={THREADS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ronan SAT on Threads"
            className="border-2 border-white/20 rounded-full p-2 hover:border-[#D9FF42] hover:text-[#D9FF42] transition-colors"
          >
            <ThreadsIcon className="w-5 h-5" />
          </Link>
          <Link
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ronan SAT on Telegram"
            className="border-2 border-white/20 rounded-full p-2 hover:border-[#D9FF42] hover:text-[#D9FF42] transition-colors"
          >
            <TelegramIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
