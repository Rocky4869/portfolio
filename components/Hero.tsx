"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown, Send } from "lucide-react";
import myphoto from "@/public/images/myphoto1.jpg";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="grid xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center xl:text-left xl:pr-4 xl:pl-20 2xl:pr-8">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Rocky
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold home__subtitle">
                Software Engineer
              </h2>
            </div>

            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto xl:mx-0">
              I am a 22-year-old from Hong Kong who just graduated from CUHK
              with a degree in Computer Science.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
              >
                Contact Me
                <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={scrollToAbout}
                className="group border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-purple-50 flex items-center justify-center gap-3"
              >
                Learn More
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center xl:justify-end xl:pl-4 2xl:pl-8">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 blur-xl"></div>

              {/* Main image */}
              <div className="relative">
                <Image
                  src={myphoto}
                  alt="Rocky Tam - Software Engineer"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
                  priority
                />

                {/* Floating stats card */}
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
