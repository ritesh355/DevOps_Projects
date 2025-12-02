"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import TypingEffect from "react-typing-effect";
import { Suspense } from "react"; // Import Suspense
import dynamic from "next/dynamic" ;

const Hero = () => {
  return (
    <section className="relative bg-[#F3F4F6] text-[#1F2937] py-32 text-center overflow-hidden">
      <Suspense fallback={<div>Loading Hero...</div>}>
        {/* Animated Blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-[#8B5CF6]/40 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-[#EC4899]/40 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8B5CF6]/40 rounded-full mix-blend-multiply filter blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-[#EC4899]/70 rounded-full opacity-70"
            initial={{ x: Math.random() * 800 - 400, y: Math.random() * 600 - 300 }}
            animate={{ y: [0, -50, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Ritesh
          </span>{" "}
          🚀
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-2xl md:text-3xl font-mono font-semibold relative inline-block bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent"
        >
          <TypingEffect
            text={[
              "🚀 Aspiring DevOps Engineer",
              "☁️ Cloud | CI/CD | GitHub Actions",
              "✨ Automation | Docker | Jenkins",
              "❤️ Open Source | Linux Enthusiast",
            ]}
            speed={80}
            eraseSpeed={40}
            typingDelay={500}
            eraseDelay={2000}
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            href="/about"
            className="mt-12 relative inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-lg font-semibold shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6] animate-[spin_6s_linear_infinite] blur-md opacity-40"></span>
            <span className="relative">🌟 About me</span>
          </Link>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ y: 0, opacity: 0.7 }}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <a href="#about">
            <ChevronDown size={40} className="text-[#1F2937] hover:text-[#8B5CF6] transition" />
          </a>
        </motion.div>
      </Suspense>
    </section>
  );
};

export default Hero;
