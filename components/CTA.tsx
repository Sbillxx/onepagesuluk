"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden" ref={ref}>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="rgb(14, 166, 233)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} transition={{ duration: 0.8 }}>
          {/* Glassmorphism card */}
          <div
            className="rounded-3xl p-12 backdrop-blur-sm border border-white/50"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
              boxShadow: "0 8px 32px 0 rgba(14, 166, 233, 0.1)",
            }}
          >
            <motion.h2
              className="mb-6 text-2xl md:text-3xl lg:text-4xl"
              style={{ fontWeight: 700, lineHeight: 1.3 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mulailah perjalanan spiritualmu bersama <span style={{ color: "rgb(14, 166, 233)" }}>Suluk</span>
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-10 text-base md:text-lg"
              style={{ lineHeight: 1.6 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Raih kedamaian dalam ibadah harian Anda dengan panduan spiritual yang menyeluruh
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.6 }}>
              {/* Google Play Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=id.bapli.idrisiyyah&hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
                style={{ backgroundColor: "rgb(14, 166, 233)", color: "white" }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14, 166, 233, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/playstore-icon.png" alt="Google Play" width={36} height={36} className="w-9 h-9" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-90">Download on</span>
                  <span className="text-base md:text-lg" style={{ fontWeight: 600 }}>
                    Google Play
                  </span>
                </div>
              </motion.a>

              {/* App Store Button */}
              <motion.a
                href="https://testflight.apple.com/join/trjceSEV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
                style={{ backgroundColor: "rgb(14, 166, 233)", color: "white" }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14, 166, 233, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/appstore-icon.png" alt="App Store" width={36} height={36} className="w-9 h-9" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-90">Download on</span>
                  <span className="text-base md:text-lg" style={{ fontWeight: 600 }}>
                    App Store
                  </span>
                </div>
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div className="flex items-center justify-center gap-8 mt-10 text-gray-500 flex-wrap" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.1 }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.8 Rating</span>
              </motion.div>
              <div className="h-4 w-px bg-gray-300" />
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.1 }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Gratis</span>
              </motion.div>
              <div className="h-4 w-px bg-gray-300" />
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.1 }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Aman & Terpercaya</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
