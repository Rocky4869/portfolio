"use client";

import Image from "next/image";
import { education, work } from "@/constants";

export default function Qualification() {
  return (
    <section id="qualification" className="pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
            Qualification
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            My education and work experiences
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Education
          </h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {education.map((s) => (
              <div
                key={s.name}
                className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#0b0f2b]/60 to-[#1a103a]/40 p-5 sm:p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      {s.name}
                    </h4>
                    <p className="text-sm text-gray-300">{s.subtitle}</p>
                    <p className="text-xs sm:text-sm text-purple-300 mt-1">
                      {s.period}
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition-opacity group-hover:opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Work
          </h3>
          <div className="relative pl-10 sm:pl-14">
            <div className="pointer-events-none absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400/60 via-purple-400/30 to-transparent rail-shimmer-purple" />
            <div className="pointer-events-none absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent rail-shimmer-cyan" />
            <div className="flex flex-col gap-6 sm:gap-8">
              {work.map((w) => (
                <div key={w.company} className="relative">
                  <div className="absolute -left-0.5 sm:-left-0 top-8 h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                  <div className="absolute -left-8 sm:-left-10 top-9 h-0.5 w-8 sm:w-10 bg-gradient-to-r from-purple-400/70 to-cyan-400/70 coupler-pulse" />
                  <div className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#0b0f2b]/60 to-[#1a103a]/40 p-5 sm:p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-500/20">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={w.logo}
                          alt={w.company}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white">
                          {w.company}
                        </h4>
                        <p className="text-sm text-gray-300">{w.role}</p>
                        <p className="text-xs sm:text-sm text-purple-300 mt-1">
                          {w.period}
                        </p>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition-opacity group-hover:opacity-80" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes rail-move {
            0% {
              background-position: 0 0, 0 0;
            }
            100% {
              background-position: 0 100%, 0 24px;
            }
          }
          .rail-shimmer-purple {
            background-image: linear-gradient(
                180deg,
                rgba(168, 85, 247, 0.6),
                rgba(168, 85, 247, 0.25),
                rgba(0, 0, 0, 0)
              ),
              repeating-linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.18) 0,
                rgba(255, 255, 255, 0.18) 2px,
                transparent 2px,
                transparent 6px
              );
            background-size: 100% 100%, 4px 24px;
            animation: rail-move 2.8s linear infinite;
          }
          .rail-shimmer-cyan {
            background-image: linear-gradient(
                180deg,
                rgba(34, 211, 238, 0.45),
                rgba(34, 211, 238, 0.2),
                rgba(0, 0, 0, 0)
              ),
              repeating-linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.16) 0,
                rgba(255, 255, 255, 0.16) 2px,
                transparent 2px,
                transparent 6px
              );
            background-size: 100% 100%, 4px 24px;
            animation: rail-move 2.8s linear infinite;
          }
          @keyframes couplerPulse {
            0%,
            100% {
              opacity: 0.5;
              filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.3));
            }
            50% {
              opacity: 1;
              filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.5));
            }
          }
          .coupler-pulse {
            animation: couplerPulse 1.8s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
