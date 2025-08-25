"use client";

import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import { images, navItems } from "@/constants";
import scrollToSection from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg shadow-lg border-b shadow-[#2A0E61]/50 bg-[#03001417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Brand */}
          <Image
            src={images.brand}
            alt="Brand"
            width={300}
            height={300}
            className="rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          />

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
