"use client";

import React, { useState, useEffect } from "react";
import { Send, ExternalLink } from "lucide-react";
import scrollToSection from "@/lib/utils";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";
import { images } from "@/constants";
import Image from "next/image";

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");

  const titles = [
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Data Analyst",
  ];

  useEffect(() => {
    const startTyping = () => {
      setCurrentTitle("");

      const typeWriter = (text: string, index: number) => {
        if (index < text.length) {
          setCurrentTitle(text.slice(0, index + 1));
          setTimeout(() => typeWriter(text, index + 1), 10);
        } else {
          setTimeout(() => {
            startDeleting(text);
          }, 1000);
        }
      };

      typeWriter(titles[currentTitleIndex], 0);
    };

    const startDeleting = (text: string) => {
      const deleteWriter = (index: number) => {
        if (index > 0) {
          setCurrentTitle(text.slice(0, index - 1));
          setTimeout(() => deleteWriter(index - 1), 20);
        } else {
          setTimeout(() => {
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }, 500);
        }
      };

      deleteWriter(text.length);
    };

    startTyping();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTitleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left xl:pr-4 xl:pl-4 order-2 lg:order-1">
            <motion.div
              className="space-y-3 lg:space-y-4"
              variants={slideInFromLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-200 leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Rocky
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold min-h-[1.2em] home__subtitle flex items-center justify-center xl:justify-start">
                <span className="min-w-[200px] xl:min-w-[300px]">
                  {currentTitle || "\u00A0"}
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center lg:justify-start w-full max-w-md sm:max-w-none mx-auto lg:mx-0"
              variants={slideInFromLeft(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Contact Me Button */}
              <button
                onClick={() => scrollToSection("#contact")}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white 
                           px-5 py-3 sm:px-6 sm:py-3.5 md:px-7 md:py-4 lg:px-8 lg:py-4
                           rounded-full font-semibold 
                           text-sm sm:text-base md:text-lg
                           transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
                           flex items-center justify-center gap-2 sm:gap-3 
                           min-h-[48px] sm:min-h-[52px] md:min-h-[56px]
                           flex-1 sm:flex-none sm:min-w-[140px] md:min-w-[160px]"
              >
                <span className="whitespace-nowrap">Contact Me</span>
                <Send className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
              </button>

              {/* Resume Button */}
              <button
                onClick={() => {
                  window.open(
                    "https://docs.google.com/document/d/1YHc4JXeY7Ab49yL1K2aGONZa8zPdxHjA0xe4SUxl8dI/edit?usp=sharing",
                    "_blank"
                  );
                }}
                className="group border-2 border-gray-300 hover:border-purple-600 text-gray-200 hover:text-purple-600 
                           px-5 py-3 sm:px-6 sm:py-3.5 md:px-7 md:py-4 lg:px-8 lg:py-4
                           rounded-full font-semibold 
                           text-sm sm:text-base md:text-lg
                           transition-all duration-300 hover:bg-purple-50/10 hover:scale-105
                           flex items-center justify-center gap-2 sm:gap-3
                           min-h-[48px] sm:min-h-[52px] md:min-h-[56px]
                           flex-1 sm:flex-none sm:min-w-[140px] md:min-w-[160px]"
              >
                <span className="whitespace-nowrap">View Resume</span>
                <ExternalLink className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <Image
            src={images.myphoto1}
            alt="Brand"
            width={500}
            height={600}
            className="rounded-2xl shadow-2xl overflow-hidden order-1 xl:order-2 pt-12"
          />
        </div>
      </div>
    </section>
  );
}
