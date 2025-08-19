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
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
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
                  <div className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#0b0f2b]/60 to-[#1a103a]/40 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-96 w-full">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-white">
                          {p.title}
                        </h3>
                        <p className="text-sm text-purple-300 mt-1">
                          {p.subtitle}
                        </p>
                        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                          {p.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                        <div className="flex flex-col justify-center mt-4">
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer">
                              Demo
                            </button>
                          </a>
                        </div>
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
        }
      `}</style>
    </section>
  );
}
