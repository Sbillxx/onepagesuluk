"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
          {/* Blue accent divider */}
          <motion.div className="flex items-center justify-center gap-4 mb-8" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgb(14,166,233)]" />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgb(14, 166, 233)" }} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgb(14,166,233)]" />
          </motion.div>

          <motion.h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ fontWeight: 700 }} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Tentang <span style={{ color: "rgb(14, 166, 233)" }}>Suluk</span>
          </motion.h2>

          <motion.p className="text-gray-600 leading-relaxed text-base md:text-lg" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.5 }}>
            Suluk adalah aplikasi pendamping spiritual Muslim yang dirancang khusus untuk masyarakat Indonesia. Dengan Suluk, Anda dapat melakukan refleksi diri harian (muhasabah), menemukan arah kiblat dengan akurat, mencari masjid
            terdekat, membaca Al-Qur'an kapan saja, dan menyalurkan sedekah harian dengan mudah. Semua dalam satu aplikasi yang ringan, aman, dan mudah digunakan.
          </motion.p>

          {/* Bottom accent line */}
          <motion.div
            className="mt-8 h-1 w-24 mx-auto rounded-full"
            style={{ backgroundColor: "rgb(14, 166, 233)" }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
