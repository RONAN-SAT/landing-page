import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Be_Vietnam_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ronan SAT | Break Your Score Ceiling",
  description:
    "The most intuitive, beautifully designed SAT study suite on the internet.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="/brand/favicon.js" defer></script>
        {/* The login entry points navigate cross-origin to the learn app
            (a Cloudflare Worker). Preconnecting opens the DNS + TLS + TCP
            connection early so the first click doesn't pay that handshake
            (~0.35-0.55s measured) on top of the Worker's own startup. The
            hover-triggered Worker warm-up lives in lib/warmLearnAuth.ts. */}
        <link rel="preconnect" href="https://learn.ronansat.com" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8623345713052877"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased bg-[#f4efe6] text-[#0f0e0e] selection:bg-[#BCCE75] selection:text-[#0f0e0e]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
