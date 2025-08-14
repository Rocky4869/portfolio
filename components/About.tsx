"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import myphoto2 from "@/public/images/myphoto2.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know me better - my personality, background, and what drives
            me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Side - Personal Image */}
          <div className="relative flex justify-center lg:justify-start">
            <Image
              src={myphoto2}
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
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-5">
                  I am a 22-year-old from Hong Kong who just graduated from CUHK
                  with a degree in Computer Science.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">
                    My Personality Type: <span className="text-2xl">ESFJ</span>
                  </h4>
                  <p className="text-gray-700">
                    I am people-oriented and enjoy interacting with others. I am
                    passionate about improving my coding skills & developing
                    applications & websites.
                  </p>
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
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-purple-600">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Completed Projects</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">
                  Companies Worked For
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
