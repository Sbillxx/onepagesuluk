"use client";

import { Heart, Compass, MapPin, BookOpen, DollarSign } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

const features = [
  {
    icon: Heart,
    title: "Muhasabah Harian",
    description: "Refleksi diri untuk meningkatkan kualitas spiritual setiap hari",
  },
  {
    icon: Compass,
    title: "Arah Kiblat Akurat",
    description: "Temukan arah kiblat dengan presisi tinggi di mana pun Anda berada",
  },
  {
    icon: MapPin,
    title: "Masjid Terdekat",
    description: "Cari dan temukan masjid terdekat dari lokasi Anda dengan mudah",
  },
  {
    icon: BookOpen,
    title: "Baca Al-Qur'an Online",
    description: "Akses Al-Qur'an lengkap dengan terjemahan kapan saja",
  },
  {
    icon: DollarSign,
    title: "Sedekah Harian",
    description: "Salurkan sedekah melalui transaksi harian dengan mudah dan aman",
  },
];

function FeatureCard({ feature, index, isInView }: any) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const Icon = feature.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10 }}
    >
      <motion.div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(14, 166, 233, 0.1)" }} whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
        <Icon className="w-8 h-8" style={{ color: "rgb(14, 166, 233)" }} />
      </motion.div>
      <h3 className="mb-3 text-lg md:text-xl" style={{ fontWeight: 600 }}>
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontWeight: 700 }}>
            Fitur <span style={{ color: "rgb(14, 166, 233)" }}>Unggulan</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">Solusi lengkap untuk menemani ibadah harian Anda</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
