"use client";

import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants";
import scrollToSection from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experiences", label: "Experiences" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300  backdrop-blur-lg shadow-lg border-b border-gray-800 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <Image
              src={images.snoppy}
              alt="Snoppy"
              width={50}
              height={50}
              className="rounded-full nav__img mr-2"
            />
            <Link
              href="#home"
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              onClick={() => {
                scrollToSection("#home");
              }}
            >
              Rocky
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsOpen(false);
                }}
                className="text-gray-200 hover:text-[#9c57e0] font-medium transition-colors duration-200 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9c57e0] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-200  hover:text-[#9c57e0] transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 "
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsOpen(false);
                }}
                className="mt-4 block w-full text-left px-4 py-3 text-gray-200 hover:text-[#9c57e0] rounded-lg font-medium transition-colors duration-200 hover:bg-gray-50 "
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
