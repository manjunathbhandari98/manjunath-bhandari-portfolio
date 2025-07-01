import SectionTitle from "@/components/SectionTitle";
import { experience } from "@/data/experience";
import { Building, Calendar, MapPin } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Dark mode background */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-black dark:blur-2xl dark:opacity-20 -z-10 rounded-xl bg-transparent" />

      <SectionTitle title="Experience" id="experience" />

      <div className="space-y-10 mt-12">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900/40 flex flex-col gap-6 border border-gray-200 dark:border-slate-700/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-indigo-500/10 transition-all"
          >
            {/* Job Title + Meta Info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span className="font-semibold">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span>{exp.from} – {exp.to}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description + Tech Stack */}
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* Responsibilities */}
              <ul className="list-disc marker:text-indigo-500 dark:marker:text-indigo-400 pl-5 text-gray-700 dark:text-gray-300 flex-1 space-y-2 text-sm sm:text-base">
                {exp.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-300 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {exp.techUsed.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow hover:shadow-indigo-500/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
