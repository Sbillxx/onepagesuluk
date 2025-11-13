"use client";

import { motion } from "motion/react";

export function FloatingElements() {
  const shapes = [
    { size: 60, delay: 0, duration: 8, x: "10%", y: "20%" },
    { size: 80, delay: 1, duration: 10, x: "80%", y: "30%" },
    { size: 50, delay: 2, duration: 7, x: "70%", y: "70%" },
    { size: 70, delay: 1.5, duration: 9, x: "15%", y: "80%" },
    { size: 40, delay: 0.5, duration: 6, x: "50%", y: "10%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: "radial-gradient(circle, rgba(14, 166, 233, 0.05) 0%, rgba(14, 166, 233, 0.01) 100%)",
            border: "1px solid rgba(14, 166, 233, 0.1)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
