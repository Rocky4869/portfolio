"use client";
import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

export default function SideBar() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rocky-lok-ki-tam/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/rocky4869",
      color: "hover:text-gray-800",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/loki_1009/",
      color: "hover:text-pink-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100007671552746",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/TamKi13059439",
      color: "hover:text-black",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCxq4ZUStvhnKmQHPOyXGZEw",
      color: "hover:text-red-600",
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
            className={`group p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-xl hover:bg-white`}
            aria-label={`Visit ${social.name}`}
            title={social.name}
          >
            <social.icon className="w-5 h-5 text-gray-600 group-hover:text-current transition-all duration-200" />
          </a>
        ))}
      </div>
    </div>
  );
}
