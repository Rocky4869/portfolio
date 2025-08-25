"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { personalPhotos } from "@/constants";

export default function PhotoAlbum() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % personalPhotos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const photoVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div>
      <div className="w-[400px] h-[450px] lg:w-[450px] xl:w-[500px] rounded-xl overflow-hidden shadow-2xl">
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
