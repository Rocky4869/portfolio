"use client";

import React from "react";
import Image from "next/image";
import { socialLinks } from "@/constants";

export default function SideBar() {
  return (
    <div className="fixed left-4 lg:left-8 xl:left-12 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-white"
            aria-label={`Visit ${social.name}`}
            title={social.name}
          >
            <Image
              src={social.src}
              alt={social.name}
              width={20}
              height={20}
              className="w-5 h-5 transition-all duration-200"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
