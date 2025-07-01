"use client";

import SectionTitle from "@/components/SectionTitle";
import { allSkills, skillTabs } from "@/data/skills";
import Image from "next/image";
import { useState } from "react";

function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionTitle title="Skills" id="skills" />

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mt-8 justify-center sm:justify-start">
        {skillTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm rounded-full border font-medium transition-all duration-200
              ${
                activeTab === tab
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "text-gray-700 dark:text-gray-400 border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-800"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border bg-white/50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 hover:border-indigo-500 transition-all shadow-sm"
          >
            <Image
              src={skill.img}
              alt={skill.name}
              width={40}
              height={40}
              className="object-contain w-10 h-10"
            />
            <span className="text-sm text-center font-medium text-gray-800 dark:text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
