import "./globals.css";
import Header from "./components/Header";
import AdPlaceholder from "./components/AdPlaceholder";
import Script from "next/script";
import { Inter } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "GamePortal - Play Free Online Games",
  description: "The best place to play free online games. Racing, Action, Puzzle and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(inter.className, "bg-slate-950 text-slate-50 min-h-screen flex flex-col")}>
        {/* Monetag Smart Tag Script Placeholder */}
        <Script
          id="monetag-smart-tag"
          strategy="afterInteractive"
        >
          {`
            // Monetag Smart Tag Code would go here
            console.log("Monetag script loaded (Placeholder)");
          `}
        </Script>

        <Header />

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
