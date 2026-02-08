"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/activities", label: "Activities" },
    { href: "/blog", label: "Blog" },
    { href: "/links", label: "Links" },
  ];

  return (
    <nav className="p-6 bg-slate-100 dark:bg-slate-900 sticky top-0 z-50 shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-blue-600 dark:text-blue-400 z-50">
          FL.
        </Link>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center space-y-8 md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={handleLinkClick}
              className="text-2xl font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}