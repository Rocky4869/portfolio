"use client";

import Image from "next/image";
import { socialLinks, navItems } from "@/constants";
import scrollToSection from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-[#0b0f2b]/80 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>+852 5688 0866</p>
              <p>rockytam4869@gmail.com</p>
              <p>Hong Kong</p>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 bg-black/20 backdrop-blur-md rounded-full shadow-lg border border-purple-500/30 transition-all duration-300 hover:scale-110 hover:shadow-purple-500/25 hover:bg-gradient-to-br hover:from-gray-900/40 hover:to-gray-900/40 hover:border-purple-400/60 cursor-pointer"
                    aria-label={`Visit ${social.name}`}
                    title={social.name}
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={16}
                      height={16}
                      className="w-4 h-4 transition-all duration-300 filter brightness-0 invert cursor-pointer"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © Rocky Tam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
