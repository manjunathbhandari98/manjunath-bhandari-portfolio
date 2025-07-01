import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      {/* Optional blurred background – only in dark mode */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-black dark:via-purple-900/10 dark:to-indigo-900/20 dark:blur-3xl dark:opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" id="projects" />

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-100/80 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-slate-700"
              >
                {/* Header */}
                <div
                  className={`h-32 bg-gradient-to-r ${
                    project.bgColor || "from-indigo-500 to-purple-600"
                  } relative`}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-t-xl" />
                  <div className="absolute top-5 left-5 text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute top-5 right-5 flex space-x-3">
                    {project.gitLink && (
                      <Link
                        href={project.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </Link>
                    )}
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                    {project.name}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm uppercase font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm uppercase font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStacks.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="https://github.com/manjunathbhandari98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
