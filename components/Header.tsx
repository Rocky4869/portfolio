"use client";
import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home", icon: "🏠" },
  { href: "#about", label: "About", icon: "👤" },
  { href: "#skills", label: "Skills", icon: "💻" },
  { href: "#experiences", label: "Experiences", icon: "🎯" },
  { href: "#portfolio", label: "Portfolio", icon: "📁" },
  { href: "#contact", label: "Contact", icon: "📧" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation - Bottom Fixed */}
      <header className="md:hidden fixed bottom-0 left-0 w-full z-[100] bg-white dark:bg-neutral-900">
        <nav className="h-12 flex justify-between items-center px-6">
          <Link
            href="#home"
            className="text-lg font-medium text-neutral-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            Rocky
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg text-neutral-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-neutral-900 p-8 pb-20 rounded-t-6xl shadow-lg border-t-4 border-purple-500">
            <div className="grid grid-cols-3 gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center text-sm font-medium text-neutral-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl mb-1">{item.icon}</span>
                  <span className="text-xs">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Desktop Navigation - Top Fixed */}
      <header className="hidden md:block fixed top-0 left-0 w-full z-[100] bg-white dark:bg-neutral-900">
        <nav className="max-w-6xl mx-auto h-16 flex justify-between items-center px-4">
          <Link
            href="#home"
            className="text-xl font-medium text-neutral-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            Rocky
          </Link>

          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-neutral-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
