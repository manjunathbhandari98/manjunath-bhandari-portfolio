"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black blur-3xl opacity-30 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        {/* Name */}
        <div className="text-5xl md:text-6xl font-mono font-extrabold text-white mb-4 tracking-tight leading-tight">
          <span className="block">
            <span className="text-slate-300 text-2xl font-light">Hi, I’m</span>{" "}
            <br />
            <span className=" bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Manjunath Bhandari
            </span>
          </span>
        </div>

        {/* Typing-like role */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 font-light">
          Full Stack Developer | React | Next.js | Spring Boot
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
