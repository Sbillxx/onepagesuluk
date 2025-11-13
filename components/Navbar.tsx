"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Tentang", id: "about" },
    { label: "Fitur", id: "features" },
    { label: "Keunggulan", id: "advantages" },
    { label: "Download", id: "download" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md ${isScrolled ? "shadow-lg" : ""}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button onClick={() => scrollToSection("hero")} className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image src="/logo.png" alt="Suluk Logo" width={48} height={48} className="h-8 md:h-12 w-auto" />
              <span className="text-xl md:text-2xl" style={{ fontWeight: 700, color: "rgb(14, 166, 233)" }}>
                Suluk
              </span>
            </motion.button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.slice(0, 3).map((item) => (
                <motion.button key={item.id} onClick={() => scrollToSection(item.id)} className="hover:text-[rgb(14,166,233)] transition-colors" style={{ fontWeight: 500 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection("download")}
                className="px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "rgb(14, 166, 233)", color: "white", fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" whileTap={{ scale: 0.95 }}>
              {isMobileMenuOpen ? <X className="w-6 h-6" style={{ color: "rgb(14, 166, 233)" }} /> : <Menu className="w-6 h-6" style={{ color: "rgb(14, 166, 233)" }} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-72 bg-white shadow-2xl z-40 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left p-4 rounded-xl transition-colors ${item.id === "download" ? "text-white" : "hover:bg-gray-100"}`}
                      style={{
                        backgroundColor: item.id === "download" ? "rgb(14, 166, 233)" : "transparent",
                        fontWeight: item.id === "download" ? 600 : 500,
                        fontSize: "1.125rem",
                      }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">Copyright © 2025 All Rights Reserved.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
