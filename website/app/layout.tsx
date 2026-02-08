import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florian Löhden | DevOps & Network Automation",
  description: "Portfolio of Florian Löhden",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          
          <Navbar />

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