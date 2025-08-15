"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Send } from "lucide-react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { images } from "@/constants";
import scrollToSection from "@/lib/utils";
import Model3D, { ModelLoader } from "./Model3D";

// Camera controller component
function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    // Set initial camera position to see the entire model from a corner angle
    camera.position.set(8, 8, 15);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="grid xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center xl:text-left xl:pr-4 xl:pl-8 2xl:pr-8">
            <div className="space-y-3 lg:space-y-4">
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
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
              <button
                onClick={() => scrollToSection("#contact")}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
              >
                Contact Me
                <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollToSection("#about")}
                className="group border-2 border-gray-300 hover:border-purple-600 text-gray-200 hover:text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-purple-50 flex items-center justify-center gap-3"
              >
                About Me
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right 3D Model */}
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl h-[500px] rounded-2xl shadow-2xl overflow-hidden">
            <Canvas
              camera={{ position: [8, 8, 15], fov: 15 }}
              style={{
                background: "transparent",
                width: "100%",
                height: "100%",
              }}
              gl={{ antialias: true, alpha: true }}
            >
              <Suspense fallback={<ModelLoader />}>
                <CameraController />
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <directionalLight position={[-5, -5, -5]} intensity={0.8} />
                <pointLight position={[0, 10, 0]} intensity={0.5} />

                <Model3D
                  modelPath={images.pokemonModel}
                  scale={1.2}
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                />

                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  autoRotate={false}
                  minDistance={8}
                  maxDistance={25}
                  target={[0, 0, 0]}
                />
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
