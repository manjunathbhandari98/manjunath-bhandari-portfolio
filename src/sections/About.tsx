'use client';

import SectionTitle from "@/components/SectionTitle";
import { personalInfo } from "@/data/personalInfo";
import { Download } from "lucide-react";

function About() {
  return (
    <section id="about" className="relative py-16 px-4 max-w-6xl mx-auto">
      {/* Dark mode background blur */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-black dark:via-purple-900/20 dark:to-indigo-900/30 dark:blur-2xl dark:opacity-20 -z-10 rounded-xl bg-transparent" />

      <SectionTitle title="About" id="about" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
        {/* Left - About Text */}
        <div className="space-y-6 md:text-lg text-md leading-relaxed">
          <p className="dark:text-gray-300 text-gray-800">{personalInfo.about}</p>

          <p className="italic text-sm dark:text-indigo-400 text-indigo-950">
            “Code is poetry. Clean, scalable, and crafted with love.”
          </p>

          {/* Resume Button */}
          <a
            href="/Manjunath-Bhandari-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border dark:border-indigo-500 border-indigo-800 dark:text-indigo-300 text-indigo-800 px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        {/* ✅ Right - Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personalInfo.highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col gap-2 p-4 border dark:border-slate-700 border-slate-300 rounded-lg shadow-sm bg-white dark:bg-slate-900"
              >
                <Icon className="w-6 h-6 text-indigo-900 dark:text-indigo-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
