import SectionTitle from "@/components/SectionTitle";
import { experience } from "@/data/experience";
import { Building, Calendar, MapPin } from "lucide-react";

function Experience() {
  return (
    <section className="relative py-12 px-4 max-w-6xl mx-auto">
      {/* Scoped background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black blur-2xl opacity-20 -z-10 rounded-xl" />

      {/* Section Title */}
      <SectionTitle title="Experience" id="experience" />

      <div className="space-y-10">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-900/40 flex flex-col gap-5 border border-slate-700/50 backdrop-blur-md p-8 rounded-2xl shadow-md transition hover:shadow-indigo-500/10"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-indigo-400" />
                  <span className="font-semibold">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>{exp.from} – {exp.to}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description + Tech */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* Bullet Points */}
              <ul className="list-disc marker:text-indigo-400 pl-5 text-gray-300 flex-1 space-y-2">
                {exp.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-indigo-300 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.techUsed.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm px-4 py-1 rounded-full shadow hover:shadow-indigo-500/20 transition-all"
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
