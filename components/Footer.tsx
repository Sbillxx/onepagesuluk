"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <Image src="/logo.png" alt="Suluk Logo" width={40} height={40} className="h-10 w-auto" />
            <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "rgb(14, 166, 233)" }}>Suluk</span>
          </motion.div>

          <p className="text-gray-500 text-center">Copyright © 2025 All Rights Reserved.</p>

          <div className="flex gap-6 text-gray-500">
            <motion.button onClick={() => scrollToSection("about")} className="hover:text-[rgb(14,166,233)] transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Tentang
            </motion.button>
            <motion.button onClick={() => scrollToSection("features")} className="hover:text-[rgb(14,166,233)] transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Fitur
            </motion.button>
            <motion.button onClick={() => scrollToSection("download")} className="hover:text-[rgb(14,166,233)] transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Download
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
