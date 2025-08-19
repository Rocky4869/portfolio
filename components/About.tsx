"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { images } from "@/constants";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Get to know me better 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Side - Personal Image */}
          <div className="relative flex justify-center lg:justify-start">
            <Image
              src={images.myphoto2}
              alt="Rocky Tam - Personal Photo"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl object-cover w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-5">
                  I am a 22-year-old from Hong Kong who just graduated from CUHK
                  with a degree in Computer Science.
                </p>

                {/* Info Card */}
                <div className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:border-purple-400/60 overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold text-purple-200 mb-3">
                      My Personality Type:{" "}
                      <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        ESFJ
                      </span>
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      I am people-oriented and enjoy interacting with others. I
                      am passionate about improving my coding skills &
                      developing applications & websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  window.open(
                    "https://docs.google.com/document/d/1YHc4JXeY7Ab49yL1K2aGONZa8zPdxHjA0xe4SUxl8dI/edit?usp=sharing",
                    "_blank"
                  );
                }}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 mx-auto lg:mx-0"
              >
                View My Resume
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Additional Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <div className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md p-4 rounded-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:border-purple-400/60 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    2+
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    Years Experience
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-md p-4 rounded-xl border border-blue-500/30 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:border-blue-400/60 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    5+
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    Completed Projects
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur-md p-4 rounded-xl border border-emerald-500/30 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:border-emerald-400/60 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">
                    4+
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    Companies Worked For
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
