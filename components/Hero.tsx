"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const backgrounds = [
  { type: "video", src: "/Video Project 1.mp4" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 8000); // Change every 8 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + backgrounds.length) % backgrounds.length,
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-ivory pt-32 pb-20"
    >
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0 bg-charcoal-soft">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {backgrounds[currentIndex].type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-20 blur-md"
              >
                <source src={backgrounds[currentIndex].src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={backgrounds[currentIndex].src}
                alt="Hero background"
                fill
                priority
                className="object-cover opacity-20 blur-md"
                referrerPolicy="no-referrer"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/90 via-ivory/50 to-ivory" />
      </div>

      {/* Carousel Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-between px-4 md:px-12 pointer-events-none">
        <button
          onClick={handlePrev}
          className="w-14 h-14 rounded-full border border-charcoal-soft/10 flex items-center justify-center text-charcoal-soft/40 hover:text-charcoal-soft hover:bg-charcoal-soft/5 transition-all duration-500 pointer-events-auto backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} strokeWidth={1} />
        </button>
        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-full border border-charcoal-soft/10 flex items-center justify-center text-charcoal-soft/40 hover:text-charcoal-soft hover:bg-charcoal-soft/5 transition-all duration-500 pointer-events-auto backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={20} strokeWidth={1} />
        </button>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex items-center gap-6"
        >
          <div className="w-16 h-[1px] bg-gold-muted/30" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-muted">
            Visual Storyteller & Photographer
          </span>
          <div className="w-16 h-[1px] bg-gold-muted/30" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tighter text-charcoal-soft mb-10 leading-[0.9]"
        >
          Capture the Moments,
          <br />
          <span className="text-gold-muted italic font-light">Craft the Stories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="max-w-xl text-charcoal-soft/60 text-base md:text-lg font-light leading-relaxed mb-14"
        >
          Photographs that remember what the moment felt like. 8+ years of
          creating visually compelling, emotionally engaging imagery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-8"
        >
          <a
            href="#portfolio"
            className="px-10 py-5 bg-charcoal-soft text-ivory text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-gold-muted hover:shadow-2xl transition-all duration-700"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-10 py-5 bg-transparent border border-charcoal-soft/10 text-charcoal-soft text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-charcoal-soft hover:text-ivory transition-all duration-700 backdrop-blur-sm"
          >
            Book a Shoot
          </a>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {backgrounds.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${
              idx === currentIndex
                ? "bg-gold-muted w-8"
                : "bg-charcoal-soft/20 hover:bg-charcoal-soft/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
