"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { projects } from "@/constants";

type OptionsType = {
  loop: boolean;
  align: "center" | "start" | "end";
  skipSnaps: boolean;
};

export default function Portfolio() {
  const options: OptionsType = {
    loop: true,
    align: "center",
    skipSnaps: false,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3500, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="portfolio" className="pt-20 pb-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Portfolio
          </h2>
          <p className="mt-3 text-gray-300">Some things I’ve built recently</p>
        </div>

        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {projects.map((p) => (
                <div className="embla__slide" key={p.key}>
                  <div className="group relative rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#0b0f2b]/60 to-[#1a103a]/40 shadow-xl">
                    <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl">
                      <div className="flex items-center justify-center h-48 sm:h-64 md:h-96">
                        <div className="relative overflow-hidden w-3/4 md:w-full h-full">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      </div>
                      <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center min-h-0">
                        <div className="flex flex-row justify-between items-center">
                          <div className="flex flex-col justify-between">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                              {p.title}
                            </h3>
                            <div className="text-sm sm:text-base text-purple-300 mt-2 leading-relaxed">
                              {p.stacks.split("\n").map((line, index) => (
                                <p
                                  key={index}
                                  className="text-xs sm:text-sm text-purple-300"
                                >
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col justify-center">
                            <a
                              href={p.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base">
                                Demo
                              </button>
                            </a>
                          </div>
                        </div>

                        <ul className="mt-4 space-y-3 list-disc list-inside text-gray-300">
                          {p.bullets.map((b, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3 text-gray-300 text-sm sm:text-base"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === i
                    ? "bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.7)] scale-110"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .embla__viewport {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
          gap: 1rem;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
          padding: 0 0.5rem;
        }
        @media (min-width: 640px) {
          .embla__slide {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
}
