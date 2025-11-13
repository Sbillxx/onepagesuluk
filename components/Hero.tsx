"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 50 0 L 100 50 L 50 100 Z" fill="none" stroke="rgb(14, 166, 233)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="rgb(14, 166, 233)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric)" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />

      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(14, 166, 233, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div className="container mx-auto px-6 py-20 relative z-10" style={{ y, opacity }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div className="flex-1 text-center lg:text-left max-w-2xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: 700, lineHeight: 1.2 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="inline md:hidden">
                Teman Ibadah Harianmu Aplikasi <span style={{ color: "rgb(14, 166, 233)" }}>Suluk</span>
              </span>
              <span className="hidden md:inline">
                Teman Ibadah Harianmu — Aplikasi <span style={{ color: "rgb(14, 166, 233)" }}>Suluk</span>
              </span>
            </motion.h1>
            <motion.p className="mb-8 text-gray-600 text-base md:text-lg lg:text-xl" style={{ lineHeight: 1.6 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Refleksi diri, arah kiblat, dan sedekah harian dalam satu genggaman.
            </motion.p>
            <motion.a
              href="#download"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: "rgb(14, 166, 233)", color: "white" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm md:text-base lg:text-lg" style={{ fontWeight: 600 }}>
                Download Sekarang
              </span>
            </motion.a>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div className="flex-1 flex justify-center lg:justify-start lg:pl-8" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="relative w-full max-w-2xl">
              <motion.div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                style={{ backgroundColor: "rgb(14, 166, 233)" }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image src="/mockup-phone.png" alt="Suluk App Mockup" width={800} height={450} className="relative z-10 w-full h-full object-cover rounded-3xl drop-shadow-2xl" priority />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
