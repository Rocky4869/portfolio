"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { personalPhotos } from "@/constants";

export default function PhotoAlbum() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(personalPhotos.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % personalPhotos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Preload all images
  useEffect(() => {
    personalPhotos.forEach((photo, index) => {
      const img = new window.Image();
      img.onload = () => {
        setImagesLoaded((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.src = photo.src;
    });
  }, []);

  const photoVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div className="relative">
      {/* Preload all images (hidden) */}
      <div className="absolute opacity-0 pointer-events-none -z-10">
        {personalPhotos.map((photo, index) => (
          <Image
            key={index}
            src={photo}
            alt={`Preload ${index}`}
            width={1}
            height={1}
            priority={index < 3} // Prioritize first 3 images
            style={{ display: "none" }}
          />
        ))}
      </div>

      {/* Main display */}
      <div className="w-[300px] h-[450px] sm:w-[400px] sm:h-[450px] lg:w-[450px] xl:w-[500px] rounded-xl overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhotoIndex}
            variants={photoVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full relative"
          >
            <Image
              src={personalPhotos[currentPhotoIndex]}
              alt={`Photo ${currentPhotoIndex + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
