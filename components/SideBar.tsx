import React from "react";
import Image from "next/image";
import { socialLinks } from "@/constants";

export default function SideBar() {
  return (
    <div className="fixed left-4 lg:left-8 xl:left-12 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-black/20 backdrop-blur-md rounded-full shadow-2xl border border-purple-500/30 transition-all duration-500 hover:scale-110 hover:shadow-purple-500/25 hover:bg-gradient-to-br hover:from-gray-900/40 hover:to-gray-900/40 hover:border-purple-400/60 cursor-pointer"
            aria-label={`Visit ${social.name}`}
            title={social.name}
          >
            <Image
              src={social.src}
              alt={social.name}
              width={20}
              height={20}
              className="w-5 h-5 transition-all duration-300 filter brightness-0 invert cursor-pointer"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
