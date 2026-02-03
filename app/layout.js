import "./globals.css";
import Header from "./components/Header";
import AdPlaceholder from "./components/AdPlaceholder";
import Script from "next/script";
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { Suspense } from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "GamePortal - Play Free Online Games",
  description: "The best place to play free online games. Racing, Action, Puzzle and more!",
  other: {
    monetag: "b241a4630998c15f45e01d95dd9359ed",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(inter.className, "bg-slate-950 text-slate-50 min-h-screen flex flex-col")}>
        {/* Monetag Smart Tag Script */}
        <Script
          src="https://quge5.com/88/tag.min.js"
          data-zone="208036"
          strategy="afterInteractive"
          data-cfasync="false"
        />

        <Suspense fallback={<header className="h-16 border-b border-white/10 bg-slate-950/80" />}>
          <Header />
        </Suspense>

        {/* Top Ad Slot Layout Level */}
        <div className="container mx-auto px-4 mt-6">
          <AdPlaceholder slotId="TOP_BANNER" className="h-[90px] w-full" />
        </div>

        <main className="flex-1 w-full">
          {children}
        </main>

        <footer className="border-t border-white/10 mt-12 py-8 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} GamePortal. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
