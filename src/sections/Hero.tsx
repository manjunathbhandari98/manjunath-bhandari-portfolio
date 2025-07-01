"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">
      {/* Background elements - properly themed */}
      {mounted && (
        <>
          {/* Dark mode gradient */}
          {theme === "dark" && (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black blur-2xl opacity-30 -z-10 pointer-events-none" />
          )}
          
          {/* Light mode background (pure white) */}
          {theme === "light" && (
            <div className="absolute inset-0 bg-white z-10 pointer-events-none" />
          )}
        </>
      )}
      {/* ✅ Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        {/* Name */}
        <div className="text-5xl md:text-6xl font-mono font-extrabold mb-4 tracking-tight leading-tight">
          <span className="block">
            <span className="text-black dark:text-slate-300 text-2xl font-light">
              Hi, I’m
            </span>
            <br />
            <span className="dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-black dark:text-transparent">
              Manjunath Bhandari
            </span>
          </span>
        </div>

        {/* Role */}
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light">
          Full Stack Developer | React | Next.js | Spring Boot
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
