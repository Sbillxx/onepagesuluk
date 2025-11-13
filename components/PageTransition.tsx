"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "white" }} initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <div className="text-center">
            {/* Logo animation */}
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="mb-8">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image src="/logo.png" alt="Suluk Logo" width={96} height={96} className="w-auto h-24 mx-auto" />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.h2 className="text-2xl md:text-3xl" style={{ fontWeight: 700, color: "rgb(14, 166, 233)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              Suluk
            </motion.h2>
            <motion.p className="text-gray-600 mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              Teman Ibadah Harianmu
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
