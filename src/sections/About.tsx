import SectionTitle from "@/components/SectionTitle";
import { personalInfo } from "@/data/personalInfo";
import { Download } from "lucide-react";

function About() {


  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
       <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-indigo-900/30 blur-3xl opacity-30 z-0"></div>
      <SectionTitle title="About" id="about"/>
      <div className="grid md:grid-cols-2 items-center grid-cols-1 gap-10 max-w-6xl">
        {/* About */}
          <div className="about text-lg space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">{personalInfo.about}</p>

          {/* Tagline */}

          <p className="italic text-sm text-indigo-400">
            “Code is poetry. Clean, scalable, and crafted with love.”
          </p>

          {/* Resume Button */}
          <a
            href="/Manjunath-Bhandari-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-indigo-500 text-indigo-300 px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            <Download size={16} /> Download Resume
          </a>
          </div>
        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 py-12">
      {personalInfo.highlights.map((item, index) => {
        const Icon = item.icon; // assign component

        return (
          <div key={index} className="flex flex-col items-start rounded-lg border-1 px-3 py-4 gap-4">
            <Icon className="text-indigo-400 w-6 h-6 mt-1" />
           
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
          
          </div>
        );
      })}
    </div>
          
      </div>
    </section>
  )
}


export default About
