import { ThemeProvider } from "./components/theme-provider"; 
import { ThemeToggle } from "./components/theme-toggle";     
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florian Löhden | Between DevOps, Network Automation and Sports",
  description: "Portfolio of Florian Löhden",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* bg-white: Light mode background
          dark:bg-slate-950: Dark mode background
          text-slate-900: Light mode text
          dark:text-slate-200: Dark mode text
      */}
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <nav className="p-6 bg-slate-100 dark:bg-slate-900 sticky top-0 z-50 shadow-md transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <Link href="/" className="font-bold text-xl text-blue-600 dark:text-blue-400">FL.</Link>
              
              <div className="flex items-center gap-6">
                <div className="space-x-6 text-sm font-medium hidden md:block">
                  <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
                  <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link>
                  <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</Link>
                  <Link href="/activities" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Activities</Link>
                  {/* <Link href="/links" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Links</Link> */}
                </div>
                <ThemeToggle />
              </div>
            </div>
          </nav>

          <main className="flex-grow max-w-6xl mx-auto w-full p-6">
            {children}
          </main>

          <footer className="p-6 text-center text-slate-500 text-sm">
            <Link href="/impressum" className="hover:text-slate-800 dark:hover:text-slate-300">Impressum</Link>
          </footer>

        </ThemeProvider>
      </body>
    </html>
  );
}