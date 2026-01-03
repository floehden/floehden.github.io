import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florian Löhden | DevOps & Network Automation",
  description: "Portfolio of Florian Löhden",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen flex flex-col`}>
        <nav className="p-6 bg-slate-900 sticky top-0 z-50 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="font-bold text-xl text-blue-400">FL.</Link>
            <div className="space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-400 transition">About</Link>
              <Link href="/projects" className="hover:text-blue-400 transition">Projects & Resources</Link>
              <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
              <Link href="/links" className="hover:text-blue-400 transition">Links</Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow max-w-6xl mx-auto w-full p-6">
          {children}
        </main>
        <footer className="p-6 text-center text-slate-500 text-sm">
          <Link href="/impressum" className="hover:text-slate-300">Impressum</Link>
        </footer>
      </body>
    </html>
  );
}