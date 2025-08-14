"use client";

import React from "react";
import Image from "next/image";
import linkedin from "@/public/icons/linkedin.png";
import github from "@/public/icons/github.png";
import instagram from "@/public/icons/instagram.png";
import facebook from "@/public/icons/facebook.png";
import X from "@/public/icons/X.png";
import youtube from "@/public/icons/youtube.png";

export default function SideBar() {
  const socialLinks = [
    {
      name: "LinkedIn",
      src: linkedin,
      href: "https://www.linkedin.com/in/rocky-lok-ki-tam/",
    },
    {
      name: "GitHub",
      src: github,
      href: "https://github.com/rocky4869",
    },
    {
      name: "Instagram",
      src: instagram,
      href: "https://www.instagram.com/loki_1009/",
    },
    {
      name: "Facebook",
      src: facebook,
      href: "https://www.facebook.com/profile.php?id=100007671552746",
    },
    {
      name: "X",
      src: X,
      href: "https://x.com/TamKi13059439",
    },
    {
      name: "YouTube",
      src: youtube,
      href: "https://www.youtube.com/channel/UCxq4ZUStvhnKmQHPOyXGZEw",
    },
  ];

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
