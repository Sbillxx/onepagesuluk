"use client";

import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        background: "linear-gradient(90deg, rgb(14, 166, 233) 0%, rgb(59, 130, 246) 100%)",
        scaleX: scrollYProgress,
      }}
    />
  );
}
