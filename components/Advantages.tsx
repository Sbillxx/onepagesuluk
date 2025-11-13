"use client";

import { Flag, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const advantages = [
  {
    icon: Flag,
    title: "Karya Anak Bangsa",
    description: "Dikembangkan oleh developer lokal Indonesia",
  },
  {
    icon: Shield,
    title: "Privasi Terjaga",
    description: "Data pribadi Anda aman dan terlindungi",
  },
  {
    icon: Sparkles,
    title: "UI Sederhana",
    description: "Antarmuka intuitif dan mudah digunakan",
  },
  {
    icon: Zap,
    title: "Gratis & Ringan",
    description: "Aplikasi ringan tanpa biaya berlangganan",
  },
];

export function Advantages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "rgb(14, 166, 233)" }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "rgb(14, 166, 233)" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontWeight: 700 }}>
            Mengapa <span style={{ color: "rgb(14, 166, 233)" }}>Suluk</span>?
          </h2>
          <p className="text-gray-600 text-base md:text-lg">Aplikasi yang dirancang dengan perhatian penuh untuk Anda</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div key={index} className="text-center group" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(14, 166, 233, 0.15) 0%, rgba(14, 166, 233, 0.05) 100%)",
                    boxShadow: "0 8px 32px 0 rgba(14, 166, 233, 0.15)",
                  }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-10 h-10" style={{ color: "rgb(14, 166, 233)" }} />
                </motion.div>
                <motion.h3 className="mb-2" style={{ fontSize: "1.25rem", fontWeight: 600 }} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}>
                  {advantage.title}
                </motion.h3>
                <motion.p className="text-gray-600" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}>
                  {advantage.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
